import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../icon/user'
import '../avatar-group'

@tag('avatar-group-cascading')
export default class AvatarGroupCascading extends WeElement {
  static css = 't-avatar{}'
  render() {
    return (
      <t-space direction="vertical">
        <t-avatar-group>
          <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
          <t-avatar>W</t-avatar>
          <t-avatar icon={<t-icon-user></t-icon-user>}></t-avatar>
        </t-avatar-group>

        <t-avatar-group cascading="left-up">
          <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
          <t-avatar>W</t-avatar>
          <t-avatar icon={<t-icon-user></t-icon-user>}></t-avatar>
        </t-avatar-group>
      </t-space>
    )
  }
}
