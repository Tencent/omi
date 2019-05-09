import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-tab-bar', class extends WeElement {
  static css = css

  onClick = index => {
    this.props.onChange(index)
  }

  render(props) {
    return (
      <ul {...extractClass(props, 'o-tab-bar')}>
        {props.children.map((child, index) => {
          const props = {}

          if (index !== props.index) {
            props.onClick = () => this.onClick(index)
          }

          return (
            <li class="item" {...props}>
              {child}
            </li>
          )
        })}
      </ul>
    )
  }
})
