import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/msg'

define('msg-panel', class extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <div>
        <ow-msg type="success" title="提示" content="欢迎使用 Omi WeUI" />
      </div>
    )
  }
})