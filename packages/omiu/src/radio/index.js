import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-radio', class extends WeElement {

  css() {
    return css
  }
  render(props) {
    const checked = props.checked ? { checked: true } : null
    delete props.checked
    const name = props.name
    delete props.name

    console.log(checked)
    return (
      <label {...extractClass(props, "o-radio")} {...props}>
        {props.label}
        <input type="radio" {...checked}   name={name} />
        <span class="checkmark"></span>
      </label>
    )
  }
})
