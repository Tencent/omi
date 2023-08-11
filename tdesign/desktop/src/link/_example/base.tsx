import { h, tag, WeElement } from 'omi'

import '../index'

@tag('link-base')
export default class LinkBase extends WeElement {
  render() {
    return <t-link theme="primary">跳转链接</t-link>
  }
}
