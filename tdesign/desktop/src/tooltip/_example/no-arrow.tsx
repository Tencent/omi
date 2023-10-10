import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'

@tag('tooltip-no-arrow')
export default class TooltipNoArrow extends WeElement {
  render() {
    return (
      <t-tooltip content="文字提示仅展示文本内容" showArrow={false}>
        <t-button variant="outline">不带箭头等文字提示</t-button>
      </t-tooltip>
    )
  }
}
