import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'

@tag('drawer-base')
export default class DrawerBase extends WeElement {
  visible = false

  handleClick = () => {
    this.visible = true
    this.update()
  }
  handleClose = () => {
    console.log('handle close')
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
          <p>抽屉的内容</p>
        </t-drawer>
      </>
    )
  }
}
