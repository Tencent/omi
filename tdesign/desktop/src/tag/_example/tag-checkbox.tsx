import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../input'


@tag('tag-checkbox')
export default class TagCheckbox extends WeElement {

  check=false
  onChange(){}

  render() {

    return (
      <t-space>
      <t-check-tag defaultChecked={true}>选中</t-check-tag>
      <t-check-tag checked={checked} onChange={onChange}>
        未选
      </t-check-tag>
      <t-check-tag disabled={true}>禁用</t-check-tag>
    </t-space>
    )
  }
}
