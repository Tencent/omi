import { h, tag, WeElement } from 'omi'

import '../index'
import '../../icon/jump'
@tag('link-size')
export default class LinkSize extends WeElement {
  static css = `t-link {
    margin: 5px 5px;
  }`
  clickLink = () => {
    console.log('不触发')
  }
  render() {
    return (
      // TODO: stuck by Icon, need to add suffixIcon and Space
      <div direction="vertical">
        <div>
          <t-link theme="default" size="small">
            跳转链接
          </t-link>
          <t-link theme="primary" size="small">
            跳转链接
          </t-link>
          <t-link theme="danger" size="small">
            跳转链接
          </t-link>
          <t-link theme="warning" size="small" disabled>
            跳转链接
          </t-link>
          <t-link theme="success" size="small" suffixIcon={<t-icon-jump />}>
            跳转链接
          </t-link>
        </div>
        <div>
          <t-link theme="default" size="medium">
            跳转链接
          </t-link>
          <t-link theme="primary" size="medium">
            跳转链接
          </t-link>
          <t-link theme="danger" size="medium">
            跳转链接
          </t-link>
          <t-link theme="warning" size="medium" disabled>
            跳转链接
          </t-link>
          <t-link theme="success" size="medium" suffixIcon={<t-icon-jump />}>
            跳转链接
          </t-link>
        </div>
        <div>
          <t-link theme="default" size="large">
            跳转链接
          </t-link>
          <t-link theme="primary" size="large">
            跳转链接
          </t-link>
          <t-link theme="danger" size="large">
            跳转链接
          </t-link>
          <t-link theme="warning" size="large" disabled>
            跳转链接
          </t-link>
          <t-link theme="success" size="large" suffixIcon={<t-icon-jump />}>
            跳转链接
          </t-link>
        </div>
      </div>
    )
  }
}
