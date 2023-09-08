import { h, tag, WeElement } from 'omi'

import '../index'
import '../../grid'
import '../../button'
import '../../divider'
import '../../dropdown'
import '../../icon/chat'
import '../../icon/share'
import '../../icon/thumb-up'
import '../../icon/more'
import gridCss from '../../grid/style'

@tag('card-header-subtitle-footer-actions')
export default class CardHeaderSubtitleFooterActions extends WeElement {
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
        subtitle="副标题"
        actions={
          <t-dropdown options={this.options} onClick={this.clickHandler} minColumnWidth="112">
            <t-button variant="text" shape="square">
              <t-icon-more></t-icon-more>
            </t-button>
          </t-dropdown>
        }
        bordered
        cover="https://tdesign.gtimg.com/site/source/card-demo.png"
        style={{ width: '400px' }}
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
