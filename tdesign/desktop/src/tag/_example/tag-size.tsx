import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('tag-size')
export default class TagSize extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
      <t-space align="center">
        <t-tag size="small">小型标签</t-tag>
        <t-tag size="medium">默认标签</t-tag>
        <t-tag size="large">大型标签</t-tag>
      </t-space>
      <t-space align="center">
        <t-tag size="small">小型标签</t-tag>
        <t-tag size="medium">默认标签</t-tag>
        <t-tag size="large">大型标签</t-tag>
      </t-space>
    </t-space>
    )
  }
}
