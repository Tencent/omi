import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCDialog } from '@material/dialog'

import '../button'

// @ts-ignore
import { htmlToVdom } from '../util.ts'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  show?: boolean,
  scrollable?: boolean,
  title?: string,
  message?: string,
  cancelButton?: object,
  confirmButton?: object
}

interface Data {

}

@tag('m-dialog')
export default class Dialog extends WeElement<Props, Data>{
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }
  
  static propTypes = {
    show: Boolean,
    scrollable: Boolean,
    title: String,
    message: String,
    cancelButton: Object,
    confirmButton: Object
  }

  dialog: MDCDialog

  updated() {
    this.props.show ? this.dialog.open() : this.dialog.close()
  }

  installed() {
    this.dialog = new MDCDialog(this.shadowRoot.querySelector('.mdc-dialog'));

    this.props.show ? this.dialog.open() : this.dialog.close()

    this.dialog.listen('MDCDialog:opening', (evt) => {
      this.fire('opening', evt)
      evt && evt.stopPropagation()
    });

    this.dialog.listen('MDCDialog:opened', (evt) => {
      this.fire('opened', evt)
      evt && evt.stopPropagation()
    });

    this.dialog.listen('MDCDialog:closing', (evt) => {
      this.fire('closing', evt)
      evt && evt.stopPropagation()
    });

    this.dialog.listen('MDCDialog:closed', (evt) => {
      this.fire('closed', evt)
      evt && evt.stopPropagation()
    });
  }

  onScrim = (evt: Event)  => {
    this.fire('scrim')
    evt && evt.stopPropagation()
  }

  onCancel = (evt: Event) => {
    this.fire('cancel')
    evt && evt.stopPropagation()
  }

  onConfirm = (evt: Event) => {
    this.fire('confirm')
    evt && evt.stopPropagation()
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-dialog', {
        'mdc-dialog--scrollable': props.scrollable
      })}>
        <div class='mdc-dialog__scrim' onClick={this.onScrim}></div>
        <div class='mdc-dialog__container'>
          <div class='mdc-dialog__surface'>
            {props.title && <h2 class='mdc-dialog__title'>{props.title}</h2>}
            <section class='mdc-dialog__content'>
              {typeof props.message === 'string' ? htmlToVdom(props.message) : props.message}
              {/* {this.innerHTML ? htmlToVdom(this.innerHTML) : props.children && htmlToVdom(props.children)} */}
              <slot></slot>
              {/* solve the problem that the content focus is empty */}
              <a class='m-dialog-content-focus' href="#"></a>
            </section>
            {
              (props.cancelButton || props.confirmButton) &&
              <footer class='mdc-dialog__actions'>
                {props.cancelButton && <m-button onClick={this.onCancel} ripple {...props.cancelButton}>{props.cancelButton.text}</m-button>}
                {props.confirmButton && <m-button onClick={this.onConfirm} ripple {...props.confirmButton}>{props.confirmButton.text}</m-button>}
              </footer>
            }
          </div>
        </div>
      </div>
    )
  }
}
