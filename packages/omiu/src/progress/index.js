import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-progress', class extends WeElement {
  static observe = true

  static css = css

  render(props) {
    return (
      <div {...extractClass(props, 'o-progress')} style={`background-color: ${props.bgColor};`}>
        <div
          class="inner"
          style={`width:${props.value}%;background-color: ${props.innerColor};`}
        />
      </div>
    )
  }
})
