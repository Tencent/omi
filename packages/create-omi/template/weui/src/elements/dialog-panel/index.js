import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/dialog'
import '../../weui/button'

define('dialog-panel', class extends WeElement {
  static observe = true

  css() {
    return style
  }

  data = {
    showDialog: false
  }

  onClick = () => {
    this.data.showDialog = true
  }

  close = () => {
    this.data.showDialog = false
  }

  confirm = () => {
    this.data.showDialog = false
  }


  render(props, data) {
    return (
      <div>
        <ow-button type="primary" onClick={this.onClick}>点击我显示弹窗</ow-button>
        <ow-dialog
          type="confirm"
          show={data.showDialog}
          title="提示信息"
          content="你确认购买吗？"
          close={this.close}
          confirm={this.confirm}
        />
      </div>
    )
  }
})
