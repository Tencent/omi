import { define, WeElement, extractClass, createRef } from 'omi'

define('o-input-button', class extends WeElement {
  css = require('./_index.css')

  value = ''

  ref = createRef()

  onInput = () => {
    this.value = this.ref.current.value
  }

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e, this.value)
    e.stopPropagation()
  }

  render(props) {
    const { onClick, ...other } = props
    
    return (
      <div {...extractClass(props, 'o-input-button')} {...other}>
        <input ref={this.ref} onInput={this.onInput} placeholder={props.placeholder} />
        <button onClick={this.onClick}>{props.buttonText}</button>
      </div>
    )
  }
})
