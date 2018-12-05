import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/toptip'
import '../../weui/button'

define('toptip-panel', class extends WeElement {
  static observe = true

  css() {
    return style
  }

  data = {
    showToptip: false
  }

  onClick = () => {
    this.data.showToptip = true
  }

  close = () => {
    this.data.showToptip = false
  }

  confirm = () => {
    this.data.showToptip = false
  }
  render(data) {
    return (
      <div>
        <ow-button type="primary" onClick={this.onClick}>点击我显示弹窗</ow-button>
        <ow-toptip
          msg="出现了一个异常"
          type="warn"
          show={data.showToptip}
          hide={this.hide}
        />
      </div>
    )
  }
})