import { define, WeElement } from 'omi'
import style from './_index.scss'
import '../cell'

define('ow-list', class extends WeElement {
  css() {
    return style
  }
  render(props) {
    return (
      <div className="ow-list">
        <h2 className="title">{props.title}</h2>
        <div className='ow-item'>
          {props.children}
        </div>
      </div>
    )
  }
})
