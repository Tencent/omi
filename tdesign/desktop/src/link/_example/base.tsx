import { h, tag, WeElement } from 'omi'

import '../index'

@tag('link-base')
export default class LinkBase extends WeElement {
  static css = `t-link {
    margin: 5px 5px;
  }`
  render() {
    return <t-link theme="primary">跳转链接</t-link>
  }
}
