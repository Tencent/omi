import { tag, Component, classNames } from 'omi'
import { createPopper } from '@popperjs/core'
import { tailwind } from '@/tailwind'
import '../../components/button/button'

interface Props {
  title?: string
  content?: string
  show?: boolean
  placement?: string
  confirmButtonText?: string
  cancelButtonText?: string
}

@tag('o-popconfirm')
export class Popconfirm extends Component<Props> {
  static css = [
    tailwind,
    `:host {
  display: inline-block;
}`,
  ]

  static defaultProps = {
    show: false,
    title: '',
    content: '',
    placement: 'bottom',
    confirmButtonText: '',
    cancelButtonText: '',
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

  cancel = () => {
    this.state.show = false
    this.update()
    this.fire('cancel')
  }

  confirm = () => {
    this.state.show = false
    this.update()
    this.fire('confirm')
  }

  showConfirm = (evt) => {
    this.state.show = true
    this.update()
    const tip = this.shadowRoot.querySelector('slot').assignedNodes()[0]
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

  state = {
    show: false,
  }

  render(props) {
    return (
      <>
        <slot ref={(e) => (this.refEl = e)} style="cursor:pointer" onclick={this.showConfirm}></slot>
        <div
          ref={(e) => (this.popEl = e)}
          class={classNames(
            'absolute p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 overflow-hidden text-sm text-gray-500 transition-opacity duration-300 bg-white  dark:text-gray-400 dark:bg-gray-800',
            {
              tip: true,
              block: this.state.show,
              hidden: !this.state.show,
            },
          )}
          style={{
            zIndex: 1000000,
          }}
        >
          <slot name="content"></slot>

          {(props.content || props.title) && (
            <div role="tooltip" class="w-64">
              {props.title && (
                <h3 class="flex font-semibold text-gray-700 dark:text-white">
                  <span class="mr-2 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  {props.title}
                </h3>
              )}

              {props.content && <div class="py-2">{props.content}</div>}
            </div>
          )}

          <div class="pt-3 text-right">
            <o-button size="small" color="secondary" onclick={this.cancel}>
              {props.cancelButtonText || 'Cancel'}
            </o-button>
            <o-button onclick={this.confirm} color="primary" class="ml-2" size="small">
              {props.confirmButtonText || 'Confirm'}
            </o-button>
          </div>
          <i class="tip-arrow" data-popper-arrow></i>
        </div>
      </>
    )
  }
}
