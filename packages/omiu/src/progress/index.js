import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-progress', class extends WeElement {
  static observe = true

  css() {
    return css
  }

  render(props) {
    return (
      <div class="progress" style={`background-color: ${props.bgColor};`}>
        <div
          class="inner"
          style={`width:${props.value}%;background-color: ${props.innerColor};`}
        />
      </div>
    )
  }
})
