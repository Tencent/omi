import { define, WeElement, extractClass, createRef } from 'omi'

define('o-input-label', class extends WeElement {
  css = require('./_index.css')

  value = ''

  ref = createRef()

  onInput = () => {
    this.value = this.ref.current.value
  }

  render(props) {
    return (
      <div {...extractClass(props, 'o-input-label')} {...props}>
        <label>{props.label}</label>
        <input ref={this.ref} onInput={this.onInput} placeholder={props.placeholder} />
      </div>
    )
  }
})
