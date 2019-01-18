import { define, WeElement, extractClass, createRef } from 'omi'

define('o-input-button', class extends WeElement {
  css = require('./_index.css')

  value = ''

  ref = createRef()

  onInput = () => {
    this.value = this.ref.current.value
  }

  render(props) {
    return (
      <div {...extractClass(props, 'o-input-button')} {...props}>
        <input ref={this.ref} onInput={this.onInput} placeholder={props.placeholder} />
        <button>{props.buttonText}</button>
      </div>
    )
  }
})
