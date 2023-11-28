import { tag, Component, classNames } from 'omi'
import { createPopper } from '@popperjs/core'
import { tailwind } from '@/tailwind'
import '../../components/button/button'

interface Props {
  placement?: string
  show?: boolean
}

@tag('o-popover')
export class Popconfirm extends Component<Props> {
  static css = [
    tailwind,
    `:host {
  display: inline-block;
}`,
  ]

  static defaultProps = {
    show: false,
    hover: false,
    placement: 'bottom',
  }

  popEl

  refEl

  install() {
    this.state.show = this.props.show
    window.addEventListener('click', (evt) => {
      const path = evt.path || (evt.composedPath && event.composedPath())
      const isClickOutside =
        (path ? path.indexOf(this.popEl) < 0 : !this.popEl.contains(evt.target)) &&
        (path ? path.indexOf(this.refEl) < 0 : !this.refEl.contains(evt.target))
      if (!isClickOutside) {
        return
      }
      this.state.show = false
      this.update()
    })
  }

  showPopover = (evt) => {
    this.state.show = true
    this.update()
    const tip = this.shadowRoot.querySelector('slot').assignedNodes()[0]
    console.log(tip)
    createPopper(tip, this.shadowRoot.querySelector('.tip'), {
      placement: this.props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    })
  }

  showPopoverByHover = (evt) => {
    if (this.props.hover) {
      this.showPopover(evt)
    }
  }

  hidePopover = () => {
    this.state.show = false
    this.update()
  }

  state = {
    show: false,
  }

  render(props) {
    return (
      <>
        <slot
          ref={(e) => (this.refEl = e)}
          style="cursor:pointer"
          onClick={this.showPopover}
          onMouseenter={this.showPopoverByHover}
          onMouseleave={this.hidePopover}
        ></slot>
        <div
          style="z-index: 10000"
          class={classNames('z-100', {
            fixed: true,
            tip: true,
            block: this.state.show,
            hidden: !this.state.show,
          })}
        >
          <slot name="content"></slot>
        </div>
      </>
    )
  }
}
