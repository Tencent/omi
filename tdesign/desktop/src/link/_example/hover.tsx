import { h, tag, WeElement } from 'omi'

import '../index'

@tag('link-hover')
export default class LinkHover extends WeElement {
  static css = `t-link {
    margin: 5px 5px;
  }`
  render() {
    return (
      <div direction="vertical">
        <div>
          <t-link theme="default" hover="underline">
            跳转链接
          </t-link>
          <t-link theme="primary" hover="underline">
            跳转链接
          </t-link>
          <t-link theme="danger" hover="underline">
            跳转链接
          </t-link>
          <t-link theme="warning" hover="underline">
            跳转链接
          </t-link>
          <t-link theme="success" hover="underline">
            跳转链接
          </t-link>
        </div>
        <div>
          <t-link theme="default" hover="color">
            跳转链接
          </t-link>
          <t-link theme="primary" hover="color">
            跳转链接
          </t-link>
          <t-link theme="danger" hover="color">
            跳转链接
          </t-link>
          <t-link theme="warning" hover="color">
            跳转链接
          </t-link>
          <t-link theme="success" hover="color">
            跳转链接
          </t-link>
        </div>
        <div>
          <t-link theme="default" hover="color" underline>
            跳转链接
          </t-link>
          <t-link theme="primary" hover="color" underline>
            跳转链接
          </t-link>
          <t-link theme="danger" hover="color" underline>
            跳转链接
          </t-link>
          <t-link theme="warning" hover="color" underline>
            跳转链接
          </t-link>
          <t-link theme="success" hover="color" underline>
            跳转链接
          </t-link>
        </div>
      </div>
    )
  }
}
