import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'

@tag('switch-status')
export default class SwitchStatus extends WeElement {
  render() {
    return (
      <t-space>
        <t-switch size="large" defaultValue />
        <t-switch size="large" defaultValue loading />
        <t-switch size="large" disabled />
      </t-space>
    )
  }
}
