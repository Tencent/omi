import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('avatar-shape')
export default class AvatarShape extends WeElement {
  render() {
    return (
      <t-space>
        <t-avatar style={{ marginRight: '40px' }}>W</t-avatar>
        <t-avatar shape="round" style={{ marginRight: '40px' }}>
          W
        </t-avatar>
      </t-space>
    )
  }
}
