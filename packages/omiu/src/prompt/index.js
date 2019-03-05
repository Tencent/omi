import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-prompt', class extends WeElement {
  close = () => {
    this.input.value = ''
    this.props.onClose && this.props.onClose()
  }

  confirm = () => {
    this.inputValue = this.input.value
    this.input.value = ''
    this.props.onConfirm && this.props.onConfirm()
  }

  css() {
    return style
  }

  afterUpdate(){
    if(this.props.show){
      this.input.focus()
    }
  }

  render(props) {
    const display = props.show ? 'block' : 'none'
    const styleObj = {}
    if (props.width) {
      styleObj.style = { width: props.width + 'px', left: '50%', marginLeft: props.width / -2 + 'px' }
    }
    return (
      <div class="o-prompt" style={{ display }}>
        <div class="content" {...styleObj}>
          <h1>{props.title}</h1>
          <p><input ref={e=>this.input=e} placeHolder={props.msg} value={props.value||''}></input></p>
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
