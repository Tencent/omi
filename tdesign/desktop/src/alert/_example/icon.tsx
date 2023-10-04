import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../icon/star-filled'

@tag('alert-icon')
export default class AlertIcon extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
        <t-alert theme="success" message="这是一条成功的消息提示" />
        <t-alert theme="info" message="这是一条普通的消息提示" />
        <t-alert theme="warning" message="这是一条警示消息" />
        <t-alert theme="error" message="高危操作/出错信息提示" />
        <t-alert theme="success" icon={<t-icon-star-filled />} message="自定义icon的消息" />
      </t-space>
    )
  }
}
