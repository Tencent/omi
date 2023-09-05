import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('button-status')
export default class ButtonStatus extends WeElement {
  render() {
    return (
      <t-space>
        <t-button disabled>填充按钮</t-button>
        <t-button loading>加载中</t-button>
      </t-space>
    )
  }
}
