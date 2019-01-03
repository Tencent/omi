import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-input', class extends WeElement {
  css() {
    return css
  }

  onClick = index => {
    this.props.onChange(index)
  }

  render(props) {
    return (
        <input  {...extractClass(props, 'o-input')} {...props} placeholder={props.placeholder} />
    )
  }
})
