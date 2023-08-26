import { h, tag, WeElement } from 'omi'

import '../index'
import '../../icon/jump'
import '../../icon/link'

@tag('link-icon')
export default class LinkIcon extends WeElement {
  static css = `t-link {
    margin: 5px 5px;
  }`
  render() {
    return (
      // TODO: stuck by icon, need to add prefixIcon
      <div>
        <t-link theme="default" prefixIcon={<t-icon-link />}>
          跳转链接
        </t-link>
        <t-link
          theme="primary"
          underline
          href="https://tdesign.tencent.com/"
          target="_self"
          prefixIcon={<t-icon-link />}
        >
          跳转链接
        </t-link>
        <t-link
          theme="danger"
          underline
          href="https://tdesign.tencent.com/"
          target="_self"
          prefixIcon={<t-icon-jump />}
        >
          跳转链接
        </t-link>
        <t-link
          theme="warning"
          underline
          href="https://tdesign.tencent.com/"
          target="_self"
          disabled
          prefixIcon={<t-icon-jump />}
        >
          跳转链接
        </t-link>
      </div>
    )
  }
}
