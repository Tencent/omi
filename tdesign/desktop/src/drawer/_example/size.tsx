import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
import '../../space'

@tag('drawer-size')
export default class DrawerSize extends WeElement {
  visible = false
  size: string | number = 'small'

  handleClick = () => {
    this.visible = true
    this.update()
  }

  handleClose = () => {
    this.visible = false
    this.update()
  }

  setSize = (size: string | number) => {
    this.size = size
    this.update()
  }

  render() {
    const { handleClick, visible, handleClose, size } = this
    return (
      <>
        <t-space>
          <t-space>
            <t-button
              onClick={() => {
                this.setSize('small')
              }}
            >
              small(300px)
            </t-button>
            <t-button
              onClick={() => {
                this.setSize('medium')
              }}
            >
              medium(500px)
            </t-button>
            <t-button
              onClick={() => {
                this.setSize('large')
              }}
            >
              large(760px)
            </t-button>
            <t-button
              onClick={() => {
                this.setSize(200)
              }}
            >
              200
            </t-button>
            <t-button
              onClick={() => {
                this.setSize('400px')
              }}
            >
              400px
            </t-button>
            <t-button
              onClick={() => {
                this.setSize('50%')
              }}
            >
              50%
            </t-button>
          </t-space>

          <div>
            <t-button theme="primary" onClick={handleClick}>
              打开抽屉: {size}
            </t-button>
          </div>
          <t-drawer size={size} placement="right" visible={visible} onClose={handleClose}>
            <p>抽屉的内容</p>
          </t-drawer>
        </t-space>
      </>
    )
  }
}
