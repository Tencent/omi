import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-input', class extends WeElement {
  staticCss() {
    return css
  }

  onClick = (index) => {
    this.props.onChange(index)
  }

  render() {
    const props = {
      class: `o-input ${this.props.class || ''}`,
      placeholder: this.props.placeholder || ''
    }

    return <div {...props}>
      <input placeholder={props.placeholder}></input>
    </div>
  }
})
