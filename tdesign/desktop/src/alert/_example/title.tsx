import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('alert-title')
export default class AlertTitle extends WeElement {
  render() {
    const operation = <span>相关操作</span>
    return (
      <t-alert
        message="这是一条普通的消息提示描述，这是一条普通的消息提示描述"
        title="这是一条普通的消息提示"
        operation={operation}
        close
      />
    )
  }
}
