import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('alert-close')
export default class AlertClose extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
        <t-alert theme="success" message="这是一条成功的消息提示" close />
        <t-alert theme="info" message="这是一条普通的消息提示" close="关闭" />
        <t-alert theme="warning" message="这是一条警示消息" close="知道了" />
        <t-alert theme="error" message="高危操作/出错信息提示" close={<span>自定义关闭</span>} />
      </t-space>
    )
  }
}
