import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('button-base')
export default class ButtonBase extends WeElement {
  render() {
    return (
      <t-space>
        <t-button theme="default" variant="base">
          填充按钮
        </t-button>
        <t-button theme="default" variant="outline">
          描边按钮
        </t-button>
        <t-button theme="default" variant="dashed">
          虚框按钮
        </t-button>
        <t-button theme="default" variant="text">
          文字按钮
        </t-button>
      </t-space>
    )
  }
}
