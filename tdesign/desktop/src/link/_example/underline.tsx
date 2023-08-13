import { h, tag, WeElement } from 'omi'

import '../index'

@tag('link-underline')
export default class LinkUnderline extends WeElement {
  static css = `t-link {
    margin: 5px 5px;
  }`
  render() {
    return (
      <div>
          <t-link theme="default" underline>
            跳转链接
          </t-link>
          <t-link theme="primary" underline>
            跳转链接
          </t-link>
          <t-link theme="danger" underline>
            跳转链接
          </t-link>
          <t-link theme="warning" underline>
            跳转链接
          </t-link>
          <t-link theme="success" underline>
            跳转链接
          </t-link>
      </div>
    )
  }
}
