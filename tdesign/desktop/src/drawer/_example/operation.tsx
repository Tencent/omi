import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
import '../../input'

@tag('drawer-operation')
export default class DrawerOperation extends WeElement {
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
        <t-drawer header="抽屉标题" visible={visible} onClose={handleClose}>
          label1: <t-input />
          label2: <t-input />
        </t-drawer>
      </>
    )
  }
}
