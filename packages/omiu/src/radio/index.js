import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-radio', class extends WeElement {

  static css = css

  render(props) {
    const checked = props.checked ? { checked: true } : null
    delete props.checked
    const name = props.name
    delete props.name

    return (
      <label {...extractClass(props, "o-radio")} {...props}>
        {props.label}
        <input type="radio" {...checked} name={name} value={props.value} />
        <span class="checkmark"></span>
      </label>
    )
  }
})
