import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'

@tag('drawer-no-mask')
export default class DrawerNoMask extends WeElement {
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
        <t-drawer header="抽屉标题" visible={visible} onClose={handleClose} showOverlay={false}>
          <p>抽屉的内容</p>
        </t-drawer>
      </>
    )
  }
}
