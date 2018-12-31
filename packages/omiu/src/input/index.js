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
      <div {...extractClass(props, 'o-input')} {...props}>
        <input placeholder={props.placeholder} />
      </div>
    )
  }
})
