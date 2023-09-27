import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'
import '../../space'

@tag('input-base')
export default class InputBase extends WeElement {
  value1 = ''
  value2 = 'Welcome to TDesign'

  render() {
    return (
      <t-space direction="vertical" style={{ width: 500 }}>
        <t-input
          placeholder="请输入内容（无默认值）"
          onChange={(value) => {
            this.value1 = value
            console.log(value)
          }}
        />
        <t-input
          value={this.value2}
          placeholder="请输入内容（有默认值）"
          onChange={(value) => {
            console.log(value)
            this.value2 = value
          }}
          onEnter={(value) => {
            console.log(value)
          }}
        />
      </t-space>
    )
  }
}
