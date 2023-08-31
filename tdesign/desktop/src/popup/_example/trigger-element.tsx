import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'
import '../../space/index'

@tag('popup-trigger-element')
export default class PopupTriggerElement extends WeElement {
  render() {
    return (
      <t-space>
        <t-popup trigger="hover" showArrow content="这是一个弹出框">
          <t-button theme="primary">Hover me</t-button>
        </t-popup>
        <t-popup
          triggerElement={<t-button theme="primary">使用 triggerElement 元素触发</t-button>}
          showArrow
          content="这是一个弹出框"
        ></t-popup>
      </t-space>
    )
  }
}
