import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'
import '../../space'


@tag('input-size')
export default class InputSize extends WeElement {
  inputValue = ''

  render() {
    return (
      <t-space direction="vertical" style={{ width: 500 }}>
        <t-input
        placeholder="请输入内容"
        value={this.inputValue}
        onChange={(value) => {
          this.inputValue = value
          this.update()
        }}
        size="small"
      />
      <t-input
        placeholder="请输入内容"
        value={this.inputValue}
        onChange={(value) => {
          this.inputValue = value
          this.update()
        }}
      />
      <t-input
        placeholder="请输入内容"
        value={this.inputValue}
        onChange={(value) => {
          this.inputValue = value
          this.update()
        }}
        size="large"
      />
      </t-space>
    )
  }
}
