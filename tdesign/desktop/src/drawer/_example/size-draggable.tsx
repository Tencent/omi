import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
import '../../space'

@tag('drawer-size-draggable')
export default class DrawerSizeDraggable extends WeElement {
  visible = false
  placement = 'right'

  handleClick = () => {
    this.visible = true
    this.update()
  }

  handleClose = () => {
    this.visible = false
    this.update()
  }

  setPlacement = (placement: string) => {
    this.placement = placement
    this.update()
  }

  render() {
    const { handleClick, visible, handleClose, placement } = this
    return (
      <>
        <t-space>
          <t-space>
            <t-button
              onClick={() => {
                this.setPlacement('left')
              }}
            >
              从左侧拖拽抽屉
            </t-button>
            <t-button
              onClick={() => {
                this.setPlacement('right')
              }}
            >
              从右侧拖拽抽屉
            </t-button>
            <t-button
              onClick={() => {
                this.setPlacement('top')
              }}
            >
              从上方拖拽抽屉
            </t-button>
            <t-button
              onClick={() => {
                this.setPlacement('bottom')
              }}
            >
              从下方拖拽抽屉
            </t-button>
          </t-space>

          <div>
            <t-button theme="primary" onClick={handleClick}>
              打开抽屉: {placement}
            </t-button>
          </div>
          <t-drawer placement={placement} key={placement} visible={visible} onClose={handleClose} sizeDraggable={true}>
            <p>抽屉的内容</p>
          </t-drawer>
        </t-space>
      </>
    )
  }
}
