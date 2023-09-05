import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('button-ghost')
export default class ButtonGhost extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
        <t-space>
          <t-button variant="outline" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="dashed" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="text" ghost>
            幽灵按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button variant="outline" theme="primary" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="dashed" theme="primary" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="text" theme="primary" ghost>
            幽灵按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button variant="outline" theme="success" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="dashed" theme="success" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="text" theme="success" ghost>
            幽灵按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button variant="outline" theme="warning" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="dashed" theme="warning" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="text" theme="warning" ghost>
            幽灵按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button variant="outline" theme="danger" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="dashed" theme="danger" ghost>
            幽灵按钮
          </t-button>
          <t-button variant="text" theme="danger" ghost>
            幽灵按钮
          </t-button>
        </t-space>
      </t-space>
    )
  }
}
