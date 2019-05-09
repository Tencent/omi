import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-equal-space', class extends WeElement {
  static css = css

  render(props) {
    let itemProps = null
    if (props.itemMargin) {
      itemProps = { style: `margin:${props.itemMargin};` }
      delete props.itemMargin
    }

    return (
      <ul {...extractClass(props, 'o-equal-space')} {...props}>
        {props.children.map(child => {
          return (
            <li class="_item" {...itemProps}>
              {child}
            </li>
          )
        })}
      </ul>
    )
  }
})
