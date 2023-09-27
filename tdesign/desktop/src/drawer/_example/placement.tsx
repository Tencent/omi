import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
import '../../space'

@tag('drawer-placement')
export default class DrawerPlacement extends WeElement {
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
              左侧
            </t-button>
            <t-button
              onClick={() => {
                this.setPlacement('right')
              }}
            >
              右侧
            </t-button>
            <t-button
              onClick={() => {
                this.setPlacement('top')
              }}
            >
              上方
            </t-button>
            <t-button
              onClick={() => {
                this.setPlacement('bottom')
              }}
            >
              下方
            </t-button>
          </t-space>

          <div>
            <t-button theme="primary" onClick={handleClick}>
              打开抽屉: {placement}
            </t-button>
          </div>
          <t-drawer placement={placement} key={placement} visible={visible} onClose={handleClose}>
            <p>抽屉的内容</p>
          </t-drawer>
        </t-space>
      </>
    )
  }
}
