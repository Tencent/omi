import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'
import '../../space'
import '../../icon/lock-on'
import '../../icon/browse-off'

@tag('input-status')
export default class InputStatus extends WeElement {
  inputValue = ''

  render() {
    return (
      <t-space size={50}>
        <t-space direction="vertical" size={28}>
          <t-input
            placeholder="禁用状态"
            disabled
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
          />
          <t-input
            placeholder="只读状态"
            readonly
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
          />
        </t-space>
        <t-space direction="vertical" size={28}>
          <t-input
            placeholder="成功状态"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
            status="success"
          />
          <t-input
            placeholder="警告状态"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
            status="warning"
          />
          <t-input
            placeholder="错误状态"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
            status="error"
          />
        </t-space>
        <t-space direction="vertical" size={28}>
          <t-input
            placeholder="普通状态"
            tips="这是普通文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
          />
          <t-input
            placeholder="成功状态"
            tips="校验通过文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
            status="success"
          />
          <t-input
            placeholder="警告状态"
            tips="校验不通过文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
            status="warning"
          />
          <t-input
            placeholder="错误状态"
            tips="校验存在严重问题文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value
            }}
            status="error"
          />
        </t-space>
      </t-space>
    )
  }
}
