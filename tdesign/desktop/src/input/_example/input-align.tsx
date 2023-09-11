import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'
import '../../space'


@tag('input-align')
export default class InputAlign extends WeElement {
  inputValue = ''

  render() {
    return (
      <t-space direction="vertical" style={{ width: '100%' }}>
        <t-input defaultValue="居左对齐" align="left" />
        <t-input defaultValue="居中对齐" align="center" />
        <t-input defaultValue="居右对齐" align="right" />
      </t-space>
    )
  }
}
