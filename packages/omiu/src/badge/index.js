import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-badge', class extends WeElement {
  css() {
    return style
  }

  render(props) {
    if (props.number !== undefined) {
      return <div class='o-badge'>
        {props.children[0]}
        <span class="badge" style="position: absolute;top: -.7em;right: -1em;">{props.number}</span>
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
