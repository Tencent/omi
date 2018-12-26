import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-list-item', class extends WeElement {
  css() {
    return style
  }
  render(props) {
    let border =
    this.parentNode.className === 'ow-item'
        ? 'border-bottom-1px'
        : 'border-1px'
    return (
      <li className={border}>
        {props.icon ? <img src={props.icon} /> : null}
        <span class="title">{props.title}</span>
        <span class="content">{props.content}</span>
        {props.access ? <i /> : null}
      </li>
    )
  }
})
