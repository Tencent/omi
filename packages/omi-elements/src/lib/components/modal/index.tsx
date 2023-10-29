import { tag, Component, bind, classNames } from 'omi'
import { tailwind } from '@/tailwind'
import ModalDialogTheme from './modalDialogTheme'
import ModalTheme from './modalTheme'
import ModalContentTheme from './modalContentTheme'

@tag('o-modal')
export class Modal extends Component {
  static css = [tailwind]

  state = {
    show: false,
    transition: false,
    scaling: false,
  }

  static defaultProps = {
    size: 'lg', //xl lg sm fullscreen
    position: 'center', //center top-right top-left bottom-right bottom-left
  }

  install() {
    this.state.show = this.props.show
  }

  @bind
  onMaskClick() {
    if (this.props.staticBackdrop) {
      this.state.scaling = true
      this.update()
      setTimeout(() => {
        this.state.scaling = false
        this.update()
      }, 300)
      return
    }
    this.hide(true)
  }

  @bind
  closeModal() {
    this.hide(true)
  }

  hide(triggerEvent = false) {
    // 先播放过度动画
    this.state.transition = false
    this.update()

    // 再更改状态
    setTimeout(() => {
      this.state.show = false
      this.update()
      triggerEvent && this.fire('close')
    }, 300)
  }

  @bind
  onSecondaryButtonClick() {
    this.fire('secondary-button-click')
  }

  @bind
  onPrimaryButtonClick() {
    this.fire('primary-button-click')
  }

  receiveProps(props) {
    if (this.props.show) {
      this.state.show = this.props.show
      // 确保过度动画一定出现
      setTimeout(() => {
        this.state.transition = this.state.show
        this.update()
      }, 0)
    } else {
      this.hide()
      return false
    }
  }

  render() {
    let hasHeader = null
    let hasFooter = null
    for (let i = 0, length = this.children.length; i < length; i++) {
      const slotAttr = this.children[i].getAttribute('slot')
      if (slotAttr === 'header') {
        hasHeader = true
      } else if (slotAttr === 'footer') {
        hasFooter = true
      }
    }
    return (
      <>
        <div
          onClick={this.onMaskClick}
          hidden={!this.state.show}
          class={classNames({
            [ModalTheme.wrapper]: true,
            hidden: !this.state.show,
          })}
          aria-hidden={this.state.show ? 'false' : 'true'}
        >
          <div
            onClick={(evt) => evt.stopPropagation()}
            class={classNames({
              [ModalDialogTheme.wrapper]: true,
              [ModalDialogTheme[this.props.position + '-hide']]: !this.state.transition,
              [ModalDialogTheme[this.props.position + '-show']]: this.state.transition,
              '!scale-[1.02]': this.state.scaling,
              [ModalDialogTheme[this.props.position]]: true,
              [ModalDialogTheme[this.props.size]]: true,
            })}
          >
            <div
              class={classNames({
                [ModalContentTheme.wrapper]: true,
                'max-h-full': true,
              })}
            >
              {hasHeader ? (
                <slot name="header"></slot>
              ) : (
                <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                    {this.props.title}
                  </h5>
                  <button
                    onClick={this.closeModal}
                    type="button"
                    class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              )}

              <div class="relative flex-auto p-4 overflow-y-auto">
                <slot name="body"></slot>
              </div>

              {hasFooter ? (
                <slot name="footer"></slot>
              ) : (
                (this.props.secondaryButtonText || this.props.primaryButtonText) && (
                  <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <div class="relative inline-block align-bottom">
                      <button
                        onClick={this.onSecondaryButtonClick}
                        type="button"
                        class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                      >
                        {this.props.secondaryButtonText}
                      </button>
                      <div class="absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none"></div>
                    </div>
                    <div class="relative inline-block align-bottom">
                      <button
                        onClick={this.onPrimaryButtonClick}
                        type="button"
                        class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        {this.props.primaryButtonText}
                      </button>
                      <div class="absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none"></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div
          class={classNames({
            'transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen': true,
            'hidden opacity-0': !this.state.show,
            'opacity-0': this.state.show && !this.state.transition,
            'block opacity-50': this.state.transition,
          })}
        ></div>
      </>
    )
  }
}
