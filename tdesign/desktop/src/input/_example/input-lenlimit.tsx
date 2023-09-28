import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'
import '../../space'


@tag('input-lenlimit')
export default class InputLenlimit extends WeElement {
  value1 = ''
  value2 = ''
  value3 = ''
  value4 = ''

  tips = ''

  render() {
    return (
      <t-space direction="vertical" style={{ width: '100%' }}>
        <t-input
        value={this.value1}
        onChange={(value) => {
          this.value1 = value
          this.update()
        }}
        maxlength={5}
        showLimitNumber
        placeholder="内置字数限制，最大文本长度，一个中文字等于一个长度"
      />

      <t-input
        value={this.value2}
        onChange={(value) => {
          this.value2 = value
          this.update()
        }}
        maxcharacter={10}
        showLimitNumber
        placeholder="内置字数限制，最大字符数量限制，一个中文字等于两个字符"
      />

      <t-input
        value={this.value3}
        onChange={(value) => {
          // console.log(value)
          this.value3 = value
          this.update()
        }}
        maxlength={5}
        allowInputOverMax
        showLimitNumber
        placeholder="内置字数限制，字数超出时允许继续输入"
        tips={this.tips}
        status={this.tips ? 'error' : 'default'}
        onValidate={({ error }) => {
          console.log(error);
          this.tips = (error ? '输入内容长度不允许超过 5 个字' : '')
          this.update()
        }}
      />

      <t-input
        value={this.value4}
        onChange={(value) => {
          this.value4 = value
          this.update()
        }}
        maxlength={5}
        suffix={`${this.value4.length}/5`}
        placeholder="自定义字数限制文本"
      />
      </t-space>
    )
  }
}
