import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../avatar-group'
import '../../icon/user'
import '../../icon/ellipsis'

@tag('avatar-group-max')
export default class AvatarGroupMax extends WeElement {
  static css = 't-avatar{}'
  render() {
    return (
      <t-space direction="vertical">
        <t-avatar-group size="large" max={2}>
          <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
          <t-avatar>Avatar</t-avatar>
          <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
        </t-avatar-group>

        <t-avatar-group size="large" max={2} collapseAvatar={<t-icon-ellipsis />}>
          <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
          <t-avatar>Avatar</t-avatar>
          <t-avatar icon={<t-icon-user></t-icon-user>}></t-avatar>
        </t-avatar-group>

        <t-avatar-group size="large" max={2} collapseAvatar="more">
          <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
          <t-avatar>Avatar</t-avatar>
          <t-avatar icon={<t-icon-user></t-icon-user>}></t-avatar>
        </t-avatar-group>
      </t-space>
    )
  }
}
