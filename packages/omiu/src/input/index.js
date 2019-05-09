import { define, WeElement, extractClass, createRef } from 'omi'

define('o-input', class extends WeElement {
  static css = require('./_index.css')

  value = ''

  ref = createRef()

  onInput = () => {
    this.value = this.ref.current.value
  }

  render(props) {
    return (
      <input ref={this.ref} {...extractClass(props, 'o-input')} onInput={this.onInput} {...props} placeholder={props.placeholder} />
    )
  }
})
