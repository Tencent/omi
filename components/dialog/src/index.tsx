import { tag, WeElement, h } from 'omi'
import * as css from './index.scss'

import '@omiu/transition'

interface Props {
  visible: boolean
  title: String
  width: String
}


@tag('o-dialog')
export default class Dialog extends WeElement<Props> {
  static css = css

  static defaultProps = {
    visible: false,
    width: '50%'
  }

  static propTypes = {
    visible: Boolean,
    title: String,
    width: String
  }


  open() {

    this.updateProps({
      visible: true
    })

    this.rootElement.childNodes[0].enter()
    this.rootElement.childNodes[1].enter()
    this.fire('open')
  }

  handleMaskClick = () => {
    this.fire('mask-click')
  }

  close = () => {
    this.rootElement.childNodes[0].leave()
    this.rootElement.childNodes[1].leave()
    this.fire('close')
  }

  onAfterLeave = () => {
    this.updateProps({ visible: false })
  }

  render(props) {
    return (


      props.visible && <div class="o-dialog__wrapper">
        <o-transition onafter-leave={this.onAfterLeave} appear name="dialog-zoom">
          <div class="o-dialog__wrapper content">

            <div role="dialog" aria-modal="true" aria-label={props.title} class="o-dialog" style={{ width: props.width }} >
              <div class="o-dialog__header">
                <span class="o-dialog__title">{props.title}</span>

                <button type="button" aria-label="Close" class="o-dialog__headerbtn">
                  <svg onClick={this.close} class="o-dialog__close o-icon o-icon-close" fill="currentColor" width="1em" height="1em" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </button>

              </div><div class="o-dialog__body">
                <slot></slot>
              </div>

              <div class="o-dialog__footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </o-transition>

        <o-transition appear name="mask">
          <div class="mask" onClick={this.handleMaskClick} />
        </o-transition>
      </div>

    )
  }
}
