import { tag, WeElement, h, extractClass, render } from 'omi'
import * as css from './index.scss'
import { MDCDialog } from '@material/dialog'

import '../button'

//@ts-ignore
import '../theme.ts'

interface Props {
  show?: boolean,
  scrollable?: boolean,
  title?: string,
  cancelButton?: object,
  confirmButton?: object
}

interface Data {

}

@tag('m-dialog')
class Dialog extends WeElement<Props, Data>{
  static css = css
  static confirm: any
  static alert: any
  static propTypes = {
    show: Boolean,
    scrollable: Boolean,
    title: String,
    cancelButton: Object,
    confirmButton: Object
  }

  dialog: MDCDialog

  updated() {
    this.props.show ? this.dialog.open() : this.dialog.close()
  }

  installed() {
    this.dialog = new MDCDialog(this.shadowRoot.querySelector('.mdc-dialog'))

    this.props.show ? this.dialog.open() : this.dialog.close()

    this.dialog.listen('MDCDialog:opening', (e) => { this.fire('opening', e) })
    this.dialog.listen('MDCDialog:opened', (e) => { this.fire('opened', e) })
    this.dialog.listen('MDCDialog:closing', (e) => { this.fire('closing', e) })
    this.dialog.listen('MDCDialog:closed', (e) => { this.fire('closed', e) })
  }

  onScrim = (e)  => {this.fire('scrim', e)}
  onCancel = (e) => {this.fire('cancel', e)}
  onConfirm = (e) => {this.fire('confirm', e)}

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
              <a class='m-dialog-content-focus' href="#"></a>  {/* solve the problem that the content focus is empty */}
              <slot></slot>
            </section>
            {(props.cancelButton || props.confirmButton) &&
            <footer class='mdc-dialog__actions'>
              {props.cancelButton && <m-button onClick={this.onCancel} ripple {...props.cancelButton}>{props.cancelButton.text}</m-button>}
              {props.confirmButton && <m-button onClick={this.onConfirm} ripple {...props.confirmButton}>{props.confirmButton.text}</m-button>}
            </footer>}
          </div>
        </div>
      </div>
    )
  }
}


let dom

Dialog.confirm = function (options) {
  if (dom) {
    document.body.removeChild(dom)
  }
  dom = render(<m-dialog
    cancel-button={{text: options.cancelText||'Cancel'}}
    confirm-button={{text: options.confirmText||'Confirm'}}
    onCancel={_=>onCancel(options.cancel)}
    onConfirm={_=>onConfirm(options.confirm)}
    show={true} ><p style='margin:0'>{options.msg}</p></m-dialog>, 'body')
}

function onCancel(callback){
  callback && callback()
  if (dom) {
    document.body.removeChild(dom)
  }
}

function onConfirm(callback){
  callback && callback()
  if (dom) {
    document.body.removeChild(dom)
  }
}

Dialog.alert = function (options) {
  if (dom) {
    document.body.removeChild(dom)
  }
  dom = render(<m-dialog
    confirm-button={{text: options.confirmText||'Confirm'}}
    onConfirm={_=>onConfirm(options.confirm)}
    show={true} ><p style='margin:0'>{options.msg}</p></m-dialog>, 'body')
}

export default Dialog
