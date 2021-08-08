import { tag, WeElement, h, classNames } from 'omi'
import { createPopper } from '@popperjs/core'
import '@omiu/transition'
import * as css from './index.scss'

interface Props {
  effect?: string
  position?: string
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

  installed() {
    window.addEventListener('click', () => {
      // 手动模式
      if (this.props.trigger === 'manual') return
      if (this.isShow) {
        this.isShow = false
        this.update()
      }
    })
  }

  onEnter = (evt) => {
    clearTimeout(this.timeout)
    this.isShow = !this.isShow
    this.update()
    //html 模式过滤文本
    const tip = this.shadowRoot
      .querySelector('slot')
      .assignedNodes()
      .find((node) => node.nodeType !== 3)

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

  timeout

  onLeave = () => {
    this.timeout = setTimeout(() => {
      this.isShow = false
      this.update()
    }, 600)
  }

  onEnterPopover = (evt) => {
    clearTimeout(this.timeout)
    evt.stopPropagation()
  }

  updatePosition() {
    this.popper.update()
  }

  onLeavePopover = () => {
    if (this.props.trigger === 'hover') {
      this.timeout = setTimeout(() => {
        this.isShow = false
        this.update()
      }, 600)
    }
  }

  isShow = false

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

        <o-transition appear={this.isShow} name="fade">
          <div
            style={{ display: this.isInstalled ? 'block' : 'none' }}
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
