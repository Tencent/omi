import { define, WeElement, extractClass } from 'omi'
import style from './_index.css'
import '../list-item'

define('o-list', class extends WeElement {
  css() {
    return style
  }
  render(props) {
    props.children.forEach(child => {
      child.attributes.__inList = true
    })
    return (
      <div {...extractClass(props, 'o-list')}>
        <h2 class="title">{props.title}</h2>
        <div>{props.children}</div>
      </div>
    )
  }
})
