import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'
import '../list-item'

define('o-list', class extends WeElement {
  static css = css

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
