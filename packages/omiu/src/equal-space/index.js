import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-equal-space', class extends WeElement {
  css() {
    return css
  }

  render(props) {
    const className = 'o-equal-space' + (props.class ? (' ' + props.class) : '')
    delete props.class

    let itemProps = null
    if (props.itemMargin) {
      itemProps = { style: `margin:${props.itemMargin};` }
    }
    delete props.itemMargin


    return <ul class={className} {...props}>
      {props.children.map((child) => {
        return <li class="item" {...itemProps}>{child}</li>
      })}
    </ul>
  }
})
