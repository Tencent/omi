import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('alert-collapse')
export default class AlertCollapse extends WeElement {
  message = [
    '1.这是一条普通的消息提示描述，',
    '2.这是一条普通的消息提示描述，',
    '3.这是一条普通的消息提示描述，',
    '4.这是一条普通的消息提示描述，',
    '5.这是一条普通的消息提示描述，',
  ]
  render() {
    const { message } = this
    return <t-alert message={message} maxLine={2} close />
  }
}
