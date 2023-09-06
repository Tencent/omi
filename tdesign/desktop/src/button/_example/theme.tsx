import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('button-theme')
export default class ButtonTheme extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
        <t-space>
          <t-button theme="default">填充按钮</t-button>
          <t-button variant="outline" theme="default">
            描边按钮
          </t-button>
          <t-button variant="dashed" theme="default">
            虚框按钮
          </t-button>
          <t-button variant="text" theme="default">
            文字按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button theme="primary" variant="base">
            填充按钮
          </t-button>
          <t-button theme="primary" variant="outline">
            描边按钮
          </t-button>
          <t-button theme="primary" variant="dashed">
            虚框按钮
          </t-button>
          <t-button theme="primary" variant="text">
            文字按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button theme="danger" variant="base">
            填充按钮
          </t-button>
          <t-button theme="danger" variant="outline">
            描边按钮
          </t-button>
          <t-button theme="danger" variant="dashed">
            虚框按钮
          </t-button>
          <t-button theme="danger" variant="text">
            文字按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button theme="warning" variant="base">
            填充按钮
          </t-button>
          <t-button theme="warning" variant="outline">
            描边按钮
          </t-button>
          <t-button theme="warning" variant="dashed">
            虚框按钮
          </t-button>
          <t-button theme="warning" variant="text">
            文字按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button theme="success" variant="base">
            填充按钮
          </t-button>
          <t-button theme="success" variant="outline">
            描边按钮
          </t-button>
          <t-button theme="success" variant="dashed">
            虚框按钮
          </t-button>
          <t-button theme="success" variant="text">
            文字按钮
          </t-button>
        </t-space>
      </t-space>
    )
  }
}
