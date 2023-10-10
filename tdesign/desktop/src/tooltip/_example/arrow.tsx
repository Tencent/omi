import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'

@tag('tooltip-arrow')
export default class TooltipArrow extends WeElement {
  render() {
    return (
      <t-tooltip content="文字提示仅展示文本内容">
        <t-button variant="outline">默认文字提示</t-button>
      </t-tooltip>
    )
  }
}
