import { h, tag, WeElement } from 'omi'

import '../index'
import '../../avatar'
import '../../grid'
import '../../button'
import '../../divider'
import '../../dropdown'
import '../../space'
import '../../icon/chat'
import '../../icon/share'
import '../../icon/thumb-up'
import '../../icon/more'
import gridCss from '../../grid/style'

@tag('card-header-footer-actions')
export default class CardHeaderFooterActions extends WeElement {
  options = [
    {
      content: '操作一',
      value: 1,
    },
    {
      content: '操作二',
      value: 2,
    },
  ]

  clickHandler = (data: any) => {
    alert(`选中【${data.value}】`)
  }
  render() {
    return (
      <t-card
        title="标题"
        description="卡片内容"
        actions={
          <t-dropdown options={this.options} onClick={this.clickHandler} minColumnWidth="112">
            <t-button variant="text" shape="square">
              <t-icon-more />
            </t-button>
          </t-dropdown>
        }
        bordered
        cover="https://tdesign.gtimg.com/site/source/card-demo.png"
        style={{ width: '400px' }}
        avatar={<t-avatar size="40px" image="https://tdesign.gtimg.com/site/avatar-boy.jpg"></t-avatar>}
        css={gridCss}
        footer={
          <t-row align="middle" justify="center">
            <t-col flex="auto" align="middle">
              <t-button variant="text">
                <t-icon-thumb-up></t-icon-thumb-up>
              </t-button>
            </t-col>
            <t-divider layout="vertical"></t-divider>
            <t-col flex="auto" align="middle">
              <t-button variant="text">
                <t-icon-chat></t-icon-chat>
              </t-button>
            </t-col>
            <t-divider layout="vertical"></t-divider>
            <t-col flex="auto" align="middle">
              <t-button variant="text">
                <t-icon-share></t-icon-share>
              </t-button>
            </t-col>
          </t-row>
        }
      ></t-card>
    )
  }
}
