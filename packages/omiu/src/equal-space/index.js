import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-equal-space', class extends WeElement {
  css() {
    return css
  }

  onClick = (index) => {
    this.props.onChange(index)
  }

  render(props) {
    return <ul class="o-equal-space">
      {props.children.map((child) => {
        return <li class="item">{child}</li>
      })}
    </ul>
  }
})
