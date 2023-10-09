import { tag, WeElement, h, classNames } from 'omi'
import { createPopper, Instance } from '@popperjs/core'
import type { Placement } from '@popperjs/core'
import '@omiu/transition'
import * as css from './index.scss'

interface Props {
  effect?: string
  position?: Placement
  // all 是同时绑定 click 和 hover，这样移动端也支持
  trigger?: 'click' | 'hover' | 'manual' | 'all'
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

  appear?: boolean
  disappear?: boolean
  popper?: Instance | null
  _onDocumentMouseDown?: (evt: MouseEvent) => void

  installed() {
    window.addEventListener('click', () => {
      // 手动模式
      if (this.props.trigger === 'manual') return
      if (this.isShow) {
        this.leave()
        this.update()
      }
    })

    this._onDocumentMouseDown = this.onDocumentMouseDown.bind(this)
    // 只保留一个 popper，其他隐藏
    document.addEventListener('mousedown', this._onDocumentMouseDown)
  }

  onDocumentMouseDown(evt: MouseEvent) {
    let isShowEl = false
    // safari版本14.1.2 不支持 evt.path
    // @ts-ignore
    const path = evt.path || (evt.composedPath && evt.composedPath())
    for (let i = 0, len = path.length; i < len; i++) {
      if (path[i] === this.rootElement) {
        isShowEl = true
        break
      }
    }
    if (!isShowEl) {
      this.isShow = false
    }

    // 防止立刻消失导致移动端弹出的面板 click 事件不触发
    setTimeout(() => {
      this.update()
    })
  }

  onEnter = (evt: Event) => {
    clearTimeout(this.timeout)
    this.isShow = true
    this.appear = true
    this.disappear = false

    this.update()
    //html 模式过滤文本
    const tip = this.shadowRoot
      .querySelector('slot')
      .assignedNodes()
      .find((node) => node.nodeType !== 3)

    this.popper && this.popper.destroy()
    // @ts-ignore
    this.popper = createPopper(tip, this.shadowRoot.querySelector('.tip'), {
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
            adaptive: false, // true by default
          },
        },
      ],
    })
    evt.stopPropagation()
  }

  timeout?: ReturnType<typeof setTimeout>

  onLeave = () => {
    this.timeout = setTimeout(() => {
      this.leave()
      this.update()
    }, 600)
  }

  onEnterPopover = (evt: Event) => {
    clearTimeout(this.timeout)
    evt.stopPropagation()
  }

  updatePosition() {
    this.popper.update()
  }

  leave() {
    this.appear = false
    this.disappear = true
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

  isShow = false

  render(props: Props) {
    const targetEvents: {
      onMouseEnter?: (evt: Event) => void
      onMouseLeave?: (evt: Event) => void
      onClick?: (evt: Event) => void
    } = {
      onMouseEnter: undefined,
      onMouseLeave: undefined,
      onClick: undefined,
    }
    if (props.trigger === 'all') {
      targetEvents.onClick = this.onEnter
      targetEvents.onMouseEnter = this.onEnter
      targetEvents.onMouseLeave = this.onLeave
    } else if (props.trigger === 'click') {
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
