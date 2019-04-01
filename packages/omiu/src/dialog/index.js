import { define, WeElement, render } from 'omi'
import style from './_index.css'

define('o-dialog', class extends WeElement {
  close = () => {
    this.props.onClose && this.props.onClose()
  }

  confirm = () => {
    this.props.onConfirm && this.props.onConfirm()
  }

  css() {
    return style
  }

  render(props) {
    const display = props.show ? 'block' : 'none'
    const styleObj = {}
    if (props.width) {
      styleObj.style = { width: props.width + 'px', left: '50%', marginLeft: props.width / -2 + 'px' }
    }
    return (
      <div class="o-dialog" style={{ display }}>
        <div class="content" {...styleObj}>
          <h1>{props.title}</h1>
          <p>{props.msg}</p>
          {props.type === 'confirm' ? (
            <div>
              <a class="close" onClick={this.close}>
                {props.cancelText}
              </a>
              <a class="ok" onClick={this.confirm}>
                {props.confirmText}
              </a>
            </div>
          ) : (
              <a class="ok" onClick={this.confirm}>
                {props.confirmText}
              </a>
            )}
        </div>
      </div>
    )
  }
})

let dialog = {},
  dom

dialog.alert = function (msg) {
  if (dom) {
    document.body.removeChild(dom)
  }
  dom = render(<o-dialog
    onConfirm={closeAlert}
    width={400}
    show={true}
    type='alert'
    title='提示'
    msg={msg}
    confirmText='确定'
  />, 'body')
}

function closeAlert() {
  if (dom) {
    document.body.removeChild(dom)
    dom = null
  }
}

export default dialog