import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-checkbox', class extends WeElement {

  css() {
    return css
  }
  render(props) {
    const checked = props.checked ? { checked: true } : null
    delete props.checked

    return (
      <label {...extractClass(props, "o-checkbox")} {...props}>
        {props.label}
        <input type="checkbox" {...checked} />
        <span class="checkmark"></span>
      </label>
    )
  }
})
