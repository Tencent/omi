import { h, tag, WeElement } from 'omi'

import '../index'
import gridCss from '../../grid/style'
import '../../avatar'
import '../../grid'
import '../../button'
import '../../divider'
import '../../dropdown'
import '../../space'
import '../../icon/user'
import '../../icon/chat'
import '../../icon/share'
import '../../icon/thumb-up'
import '../../icon/heart'
import '../../icon/more'

@tag('card-footer-actions')
export default class CardFootActions extends WeElement {
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
      <t-space direction="vertical">
        <t-card
          bordered
          theme="poster2"
          cover="https://tdesign.gtimg.com/site/source/card-demo.png"
          style={{ width: '400px' }}
          css={gridCss}
          footer={
            <t-row align="middle" justify="center">
              <t-col flex="auto" align="middle">
                <t-button variant="text" shape="square">
                  <t-icon-thumb-up></t-icon-thumb-up>
                </t-button>
              </t-col>
              <t-divider layout="vertical"></t-divider>
              <t-col flex="auto" align="middle">
                <t-button variant="text" shape="square">
                  <t-icon-chat></t-icon-chat>
                </t-button>
              </t-col>
              <t-divider layout="vertical"></t-divider>
              <t-col flex="auto" align="middle">
                <t-button variant="text" shape="square">
                  <t-icon-share></t-icon-share>
                </t-button>
              </t-col>
            </t-row>
          }
        ></t-card>
        <t-card
          bordered
          theme="poster2"
          cover="https://tdesign.gtimg.com/site/source/card-demo.png"
          style={{ width: '400px' }}
          css={gridCss}
          actions={
            <t-col flex="auto" align="middle">
              <t-dropdown options={this.options} onClick={this.clickHandler}>
                <t-button variant="text" shape="square">
                  <t-icon-more></t-icon-more>
                </t-button>
              </t-dropdown>
            </t-col>
          }
          footer={
            <t-row>
              <t-col flex="auto">
                <t-button variant="text" shape="square" style={{ marginRight: '8px' }}>
                  <t-icon-heart size={16}></t-icon-heart>
                </t-button>
                <t-button variant="text" shape="square">
                  <t-icon-share size={16}></t-icon-share>
                </t-button>
              </t-col>
            </t-row>
          }
        ></t-card>
        <t-card
          bordered
          theme="poster2"
          cover="https://tdesign.gtimg.com/site/source/card-demo.png"
          style={{ width: '400px' }}
          css={gridCss}
          actions={
            <t-col flex="auto" align="middle">
              <t-dropdown options={this.options} onClick={this.clickHandler}>
                <t-button variant="text" shape="square">
                  <t-icon-more></t-icon-more>
                </t-button>
              </t-dropdown>
            </t-col>
          }
          footer={
            <t-avatar-group max={2} cascading="left-up">
              <t-avatar image="https://tdesign.gtimg.com/site/avatar-boy.jpg"></t-avatar>
              <t-avatar>Q</t-avatar>
              <t-avatar>C</t-avatar>
              <t-avatar>G</t-avatar>
              <t-avatar icon={<t-icon-user />}></t-avatar>
            </t-avatar-group>
          }
        ></t-card>
      </t-space>
    )
  }
}
