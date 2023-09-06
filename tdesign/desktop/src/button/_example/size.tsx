import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('button-size')
export default class ButtonSize extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
        <t-space>
          <t-button size="small" variant="base">
            填充按钮
          </t-button>
          <t-button size="small" variant="outline">
            描边按钮
          </t-button>
          <t-button size="small" variant="dashed">
            虚框按钮
          </t-button>
          <t-button size="small" variant="text">
            文字按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button size="medium" variant="base">
            填充按钮
          </t-button>
          <t-button size="medium" variant="outline">
            描边按钮
          </t-button>
          <t-button size="medium" variant="dashed">
            虚框按钮
          </t-button>
          <t-button size="medium" variant="text">
            文字按钮
          </t-button>
        </t-space>
        <t-space>
          <t-button size="large" variant="base">
            填充按钮
          </t-button>
          <t-button size="large" variant="outline">
            描边按钮
          </t-button>
          <t-button size="large" variant="dashed">
            虚框按钮
          </t-button>
          <t-button size="large" variant="text">
            文字按钮
          </t-button>
        </t-space>
      </t-space>
    )
  }
}
