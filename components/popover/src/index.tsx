import { tag, WeElement, h, classNames } from 'omi'
import { createPopper } from '@popperjs/core'
import type { Placement } from '@popperjs/core'
import '@omiu/transition'
import * as css from './index.scss'

interface Props {
  effect?: string
  position?: Placement
  trigger?: 'click' | 'hover' | 'manual'
  block?: boolean
}

@tag('o-popover')
export default class Popover extends WeElement<Props> {
  static css = css

  static defaultProps = {
    effect: 'light',
    position: 'bottom',
    /**
     * 触发方式
     */
    trigger: 'click',
    block: false
  }

  static propTypes = {
    content: String,
    effect: String,
    position: String,
    trigger: String,
    block: Boolean
  }

  content = null
  popper = null
  isShow = false

  installed() {
    window.addEventListener('click', () => {
      // 手动模式
      if (this.props.trigger === 'manual') return
      if (this.isShow) {
        this.onDocumentMouseDown.bind(this)
        // this.leave()
        // this.update()
      }
    })

    this._onDocumentMouseDown = this.onDocumentMouseDown.bind(this)
    // 只保留一个 popper，其他隐藏
    document.addEventListener('mousedown', this._onDocumentMouseDown)
  }

  onDocumentMouseDown(e) {
    let isShowEl = false
    // safari版本14.1.2 不支持 e.path
    const path = e.path || (event.composedPath && event.composedPath());
    for (let i = 0, len = path.length; i < len; i++) {
      if (path[i] === this.rootNode) {
        isShowEl = true
        break
      }
    }
    if (!isShowEl) {
      this.isShow = false
      this.obscurePopper()
    }
  }

  createPooper = async ()=> {
    this.update()
    //html 模式过滤文本
    const tip = this.shadowRoot
    .querySelector('slot')
    .assignedNodes()
    .find((node) => node.nodeType !== 3)

    const content = this.shadowRoot.querySelector('.tip')
    const slot = this.shadowRoot?.querySelector("slot[name='popover']");
    const slotContent = slot?.assignedNodes()[0]?.innerHTML
    const div = document.createElement('div')
    div.className = 'slot-content'
    div.innerHTML = slotContent
    content?.append(div)
    document.body.appendChild(content);
    this.content = content

    this.popper = await createPopper(tip, content, {
      placement: this.props.position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
        {
          name: 'computeStyles',
          options: {
            adaptive: true, // true by default
          },
        },
      ],
    })
  }

  showPopper = async () => {
    const popper = this.popper;
    if (!popper) {
      await this.createPooper();
    } 
    this.popper.update()
    this.content.style.display = 'block';
  }

  updatePopper() {
    this.popper&& this.popper.update()
  }

  //隐藏popper，但不销毁
  obscurePopper = () => {
    this.content && (this.content.style.display = 'none');
  }

  destoryPopper = () => {
    this.popper && this.popper.destroy()
    this.popper = null
  }

  onEnter = (evt) => {
    this.isShow = !this.isShow
    if (this.isShow) {
      this.appear = true
      this.disappear = false
    } else {
      this.appear = false
      this.disappear = true
    }

    this.showPopper()
    evt.stopPropagation()
  }

  timeout

  onLeave = () => {
    this.timeout = setTimeout(() => {
      this.leave()
    }, 600)
  }

  onEnterPopover = (evt) => {
    clearTimeout(this.timeout)
    evt.stopPropagation()
  }

  leave() {
    this.appear = false
    this.disappear = true
    
    this.obscurePopper()
    setTimeout(() => {
      this.isShow = false
    }, 600)
  }

  onLeavePopover = () => {
    if (this.props.trigger === 'hover') {
      this.timeout = setTimeout(() => {
        this.leave()
        this.update()
      }, 600)
    }
  }

  // 需要更新slot内容
  updated = () => {
    if(!this.popper) return
    const slot = this.shadowRoot?.querySelector("slot[name='popover']");
    const slotContent = slot?.assignedNodes()[0]?.innerHTML
    this.shadowRoot.querySelector('.tip')?.remove()
    const content = this.content.querySelector(".slot-content");
    content.innerHTML = slotContent ;
    this.updatePopper()
  }

  render(props) {
    const targetEvents: {
      onMouseEnter: () => void
      onMouseLeave: () => void
      onClick: () => void
    } = {
      onMouseEnter: null,
      onMouseLeave: null,
      onClick: null,
    }
    if (props.trigger === 'click') {
      targetEvents.onClick = this.onEnter
    } else if (props.trigger === 'hover') {
      targetEvents.onMouseEnter = this.onEnter
      targetEvents.onMouseLeave = this.onLeave
    }

    return (
      <div style="position:relative">
        <slot {...targetEvents}></slot>

        <o-transition appear={this.appear} disappear={this.disappear} name="fade">
          <div
            style={{ display: this.isShow ? 'block' : 'none' }}
            class={classNames({
              tip: true,
              [`is-${props.effect}`]: props.effect,
            })}
          >
            <slot
              onMouseEnter={this.onEnterPopover}
              onMouseLeave={this.onLeavePopover}
              name="popover"
            ></slot>
            <i class="tip-arrow" data-popper-arrow></i>
          </div>
        </o-transition>
      </div>
    )
  }
}
