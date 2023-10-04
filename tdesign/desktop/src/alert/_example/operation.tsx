import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('alert-operation')
export default class AlertOperation extends WeElement {
  render() {
    const operation = <span>相关操作</span>
    return (
      <t-space direction="vertical" style={{ width: '100%' }}>
        <t-alert
          theme="success"
          message="这是一条成功的消息提示"
          operation={operation}
          close
          onClosed={() => {
            console.log('onClosed')
          }}
        />
        <t-alert theme="info" message="这是一条普通的消息提示" operation={operation} close />
        <t-alert theme="warning" message="这是一条警示消息" operation={operation} close />
        <t-alert theme="error" message="高危操作/出错信息提示" operation={operation} close />
      </t-space>
    )
  }
}
