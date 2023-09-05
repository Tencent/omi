import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('button-block')
export default class ButtonBlock extends WeElement {
  render() {
    return (
      <t-space direction="vertical" style={{ width: '100%' }}>
        <t-button block variant="base">
          填充按钮
        </t-button>
        <t-button block variant="outline">
          描边按钮
        </t-button>
        <t-button block variant="dashed">
          虚框按钮
        </t-button>
        <t-button block variant="text">
          文字按钮
        </t-button>
      </t-space>
    )
  }
}
