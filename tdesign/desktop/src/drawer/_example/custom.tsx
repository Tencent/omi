import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'

@tag('drawer-custom')
export default class DrawerCustom extends WeElement {
  visible = false

  handleClick = () => {
    this.visible = true
    this.update()
  }
  handleClose = () => {
    this.visible = false
    this.update()
  }
  render() {
    const { handleClick, visible, handleClose } = this
    return (
      <>
        <t-button theme="primary" onClick={handleClick}>
          打开抽屉
        </t-button>
        <t-drawer
          header={<div>自定义头部</div>}
          body={<div>自定义内容</div>}
          footer={<t-button theme="primary">自定义底部按钮</t-button>}
          visible={visible}
          onClose={handleClose}
        ></t-drawer>
      </>
    )
  }
}
