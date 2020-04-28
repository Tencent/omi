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

@tag('m-dialog')
class Dialog extends WeElement<Props>{
  static css = css
  static confirm: any
  static alert: any
  static prompt: any

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

    this.dialog.listen('MDCDialog:opening', (e) => { this._fire('opening', e) })
    this.dialog.listen('MDCDialog:opened', (e) => { this._fire('opened', e) })
    this.dialog.listen('MDCDialog:closing', (e) => { this._fire('closing', e) })
    this.dialog.listen('MDCDialog:closed', (e) => { this._fire('closed', e) })
  }

  onScrim = (e)  => {this._fire('scrim', e)}
  onCancel = (e) => {this._fire('cancel', e)}
  onConfirm = (e) => {this._fire('confirm', e)}

	_fire(type, e) {
		this.fire(type, e)
		this.fire(type.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
			return $1.toUpperCase() + $2.toLowerCase();
		}), e)
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
    cancelButton={{text: options.cancelText||'Cancel'}}
    confirmButton={{text: options.confirmText||'Confirm'}}
    onCancel={_=>onConfirm(options.cancel)}
    onConfirm={_=>onConfirm(options.confirm)}
    show={true} ><p style='margin:0'>{options.msg}</p></m-dialog>, 'body')
}

function onConfirm(callback){
  callback && callback()
  if (dom) {
    document.body.removeChild(dom)
    dom = null
  }
}

Dialog.alert = function (options) {
  if (dom) {
    document.body.removeChild(dom)
  }
  dom = render(<m-dialog
    confirmButton={{text: options.confirmText||'Confirm'}}
    onConfirm={_=>onConfirm(options.confirm)}
    show={true} ><p style='margin:0'>{options.msg}</p></m-dialog>, 'body')
}


Dialog.prompt = function (options) {
  if (dom) {
    document.body.removeChild(dom)
  }
  let ele
  dom = render(<m-dialog
    cancelButton={{text: options.cancelText||'Cancel'}}
    confirmButton={{text: options.confirmText||'Confirm'}}
    onCancel={_=>onConfirm(options.cancel)}
    onConfirm={_=>promptCallback(options.confirm,dom)}
    show={true}
    title={options.title}>
      <style>
  {`
  input {
    transition: all .3s;
  }
  input:focus {
    border-bottom:1px solid ${document.body.style.getPropertyValue('--mdc-theme-primary')|| '#0072d9 '}!important;
  }
  `}
      </style>
    <p style='margin:10px 0 0;'>{options.subtitle}</p>
    <input style='width:100%;height: 30px;
    border: none;font-size:14px;
    border-bottom: 1px solid #ccc; outline: none;' ref={_=>ele=_}   type='text'></input>
  </m-dialog>, 'body')

  dom.ele = ele
}

function promptCallback(callback, dom){
  callback && callback(dom.ele.value)
  if (dom) {
    document.body.removeChild(dom)
    dom = null
  }
}

export default Dialog
