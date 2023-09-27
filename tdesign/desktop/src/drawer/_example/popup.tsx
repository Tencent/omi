import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
import '../../space'

@tag('drawer-popup')
export default class DrawerPopup extends WeElement {
  visible = false
  mode = 'push'

  handleClick = () => {
    this.visible = true
    this.update()
  }

  handleClose = () => {
    this.visible = false
    this.update()
  }

  setMode = (mode: string) => {
    this.mode = mode
    this.update()
  }

  render() {
    const { handleClick, visible, handleClose, mode } = this
    return (
      <>
        <t-space>
          <span>抽屉弹出模式：{mode}</span>
          <t-space>
            <t-button
              onClick={() => {
                this.setMode('push')
              }}
            >
              push
            </t-button>
            <t-button
              onClick={() => {
                this.setMode('overlay')
              }}
            >
              overlay
            </t-button>
          </t-space>

          <div>
            <t-button theme="primary" onClick={handleClick}>
              打开抽屉
            </t-button>
          </div>
          <t-drawer
            placement="right"
            attach={'body'}
            header="抽屉标题"
            visible={visible}
            onClose={handleClose}
            mode={mode}
          >
            <p>抽屉的内容</p>
          </t-drawer>
        </t-space>
      </>
    )
  }
}
