import { define, WeElement, extractClass } from 'omi'
import style from './_index.css'

define('o-badge', class extends WeElement {
  css() {
    return style
  }

  render(props) {
    if (props.content !== undefined) {
      return <div {...extractClass(props, 'o-badge')}>
        {props.children[0]}
        <span class="badge" style="top: -.7em;right: -1em;">{props.content}</span>
      </div>
      
    }
    if (props.dot) {
      return (
        <div class="o-badge">
          {props.children[0]}
        <span class="circle" style="position: absolute;top: -.2em;right: -.2em;"></span>
        </div>
      )
    }
    return <div class="o-badge">{props.children[0]}</div>
  }
})
