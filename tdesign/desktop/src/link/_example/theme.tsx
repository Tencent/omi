import { h, tag, WeElement } from 'omi'

import '../index'

@tag('link-theme')
export default class LinkTheme extends WeElement {
  static css = `t-link {
    margin: 5px 5px;
  }`
  render() {
    return (
      <div>
        <t-link theme="default">跳转链接</t-link>
        <t-link theme="primary">跳转链接</t-link>
        <t-link theme="danger">跳转链接</t-link>
        <t-link theme="warning">跳转链接</t-link>
        <t-link theme="success">跳转链接</t-link>
      </div>
    )
  }
}
