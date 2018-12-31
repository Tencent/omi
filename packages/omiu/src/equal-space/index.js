import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-equal-space', class extends WeElement {
  css() {
    return css
  }

  render(props) {
    let itemProps = null
    if (props.itemMargin) {
      itemProps = { style: `margin:${props.itemMargin};` }
      delete props.itemMargin
    }
    const cls = extractClass(props, 'o-equal-space')

    return (
      <ul {...cls} {...props}>
        {props.children.map(child => {
          return (
            <li class="item" {...itemProps}>
              {child}
            </li>
          )
        })}
      </ul>
    )
  }
})
