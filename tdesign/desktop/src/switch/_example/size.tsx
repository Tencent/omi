import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'

@tag('switch-size')
export default class SwitchSize extends WeElement {
  render() {
    return (
      <t-space>
        <t-switch size="large" defaultValue />
        <t-switch />
        <t-switch size="small" />
      </t-space>
    )
  }
}
