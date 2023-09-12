import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('tag-shape')
export default class TagShape extends WeElement {
  render() {
    const style = { marginRight: 5 }
    return (
      <t-space direction="vertical">
        <t-space>
          <t-tag>标签一</t-tag>
          <t-tag theme="primary">标签一</t-tag>
        </t-space>
        <t-space>
          <t-tag shape="round" style={style}>
            标签一
          </t-tag>
          <t-tag shape="round" theme="primary">
            标签一
          </t-tag>
        </t-space>
        <t-space>
          <t-tag shape="mark">标签一</t-tag>
          <t-tag shape="mark" theme="primary">
            标签一
          </t-tag>
        </t-space>
      </t-space>
    )
  }
}
