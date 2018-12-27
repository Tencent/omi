import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-list-item', class extends WeElement {
  staticCss() {
    return style
  }
  render(props) {
    let border = props.__inList ? 'border-bottom-1px': 'border-1px'
    return (
      <li class={border}>
        {props.icon ? <img src={props.icon} /> : null}
        <span class="title">{props.title}</span>
        <span class="content">{props.content}</span>
        {props.access ? <i /> : null}
      </li>
    )
  }
})
