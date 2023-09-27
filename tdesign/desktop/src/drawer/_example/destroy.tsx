import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'

@tag('drawer-destroy')
export default class DrawerDestroy extends WeElement {
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
        <t-drawer visible={visible} onClose={handleClose} destroyOnClose>
          <p>抽屉的内容</p>
        </t-drawer>
      </>
    )
  }
}
