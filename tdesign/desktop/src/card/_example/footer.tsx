import { h, tag, WeElement } from 'omi'

import '../index'
import '../../avatar'
import '../../grid'
import '../../button'
import '../../divider'
import '../../dropdown'
import '../../tag'
import '../../icon/user'
import '../../icon/chat'
import '../../icon/share'
import '../../icon/thumb-up'
import gridCss from '../../grid/style'

@tag('card-footer')
export default class CardFooter extends WeElement {
  render() {
    return (
      <t-card
        actions={<t-tag theme="success">默认标签</t-tag>}
        bordered
        cover="https://tdesign.gtimg.com/site/source/card-demo.png"
        style={{ width: '400px' }}
        avatar={
          <t-avatar size="56px">
            <t-icon-user></t-icon-user>
          </t-avatar>
        }
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
