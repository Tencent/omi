import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'
import '../../space'
import "../../icon/lock-on"
import "../../icon/browse-off"

@tag('input-password')
export default class InputPassword extends WeElement {

  inputValue = ''

  render() {
    return (
      <t-space direction="vertical">
        <t-input
        prefixIcon={<t-icon-lock-on />}
        suffixIcon={<t-icon-browse-off />} 
        placeholder="请输入"
        type="password"
        onChange={(value) => {
          this.inputValue = value
          this.update()
        }}
          />
        <t-input
        prefixIcon={<t-icon-lock-on />}
        suffixIcon={<t-icon-browse-off />}  
        placeholder="请输入"
        type="password"
        onChange={(value) => {
          this.inputValue = value
          this.update()
        }}/>
      </t-space>
    )
  }
}
