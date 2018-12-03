import { define, WeElement } from 'omi'
import '../../common/index.css'
import style from './_index.scss'
import font from './_font.scss'

define('ow-icon', class extends WeElement {
  css() {
    return font + style
  }
  render(props) {
    const size = props.size ? props.size : 'small'
    const type = props.type ? props.type : 'success'
    return <i className={`weui-icon-${type} weui-icon-${size}`} />
  }
})
