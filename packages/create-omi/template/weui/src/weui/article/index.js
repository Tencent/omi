import { define, WeElement } from 'omi'
import style from './_index.scss'

define('ow-article', class extends WeElement {
  css() {
    return style
  }
  render(props) {
    return <div className="article">{props.children}</div>
  }
})
