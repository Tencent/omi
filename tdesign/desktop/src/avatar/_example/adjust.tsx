import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('avatar-adjust')
export default class AvatarAdjust extends WeElement {
  static css = 't-avatar{}'
  render() {
    return (
      <t-space>
        <t-avatar style={{ marginRight: '40px' }}>王</t-avatar>
        <t-avatar style={{ marginRight: '40px' }}>王亿</t-avatar>
        <t-avatar style={{ marginRight: '40px' }}>王亿亿</t-avatar>
      </t-space>
    )
  }
}
