import { define, WeElement } from 'omi'
import style from './_index.scss'

define('ow-mask', class extends WeElement {
  css() {
    return style
  }
  render(props) {
    const cls = props.show ? 'weui-mask' : ''
    return <div className={cls} />
  }
})
