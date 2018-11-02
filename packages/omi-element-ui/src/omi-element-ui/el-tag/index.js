import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_tag.scss'

@tag('el-tag', true)
class ElTag extends WeElement {
  css() {
    return style
  }

  render(props) {
    let classStr = 'el-tag'
    if (props.type) {
      classStr += ` el-tag--${props.type}`
    }
    if (props.size) {
      classStr += ` el-tag--${props.size}`
    }
    if (props.hit) {
      classStr += ' is-hit'
    }
    return (
      <span className={classStr} style={{ 'background-color': props.color }}>
        {props.children}
        {props.closable ? (
          <i className="el-tag__close el-icon-close" onClick={props.onClose} />
        ) : null}
      </span>
    )
  }
}
