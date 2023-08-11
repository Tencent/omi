import { h, tag, WeElement } from 'omi'

import '../index'

@tag('link-disabled')
export default class LinkDisabled extends WeElement {
  static css = `t-link {
    margin: 5px 5px;
  }`
  clickLink = () => {
    console.log('不触发')
  }
  render() {
    return (
      <div>
        <t-link theme="default" disabled onClick={this.clickLink}>
          查看链接
        </t-link>
        <t-link theme="primary" underline disabled onClick={this.clickLink}>
          查看链接
        </t-link>
        <t-link theme="danger" hover="color" disabled onClick={this.clickLink}>
          查看链接
        </t-link>
        <t-link theme="warning" hover="underline" disabled onClick={this.clickLink}>
          查看链接
        </t-link>
        {/* TODO: stuck by Icon, need add suffixIcon={<JumpIcon />} */}
        <t-link theme="success" disabled onClick={this.clickLink}>
          查看链接
        </t-link>
      </div>
    )
  }
}
