import { OmiProps, WeElement, h, tag, render } from 'omi'

import "../index"
import "../../space/index"

@tag("textarea-limit")
export default class TextareaLimit extends WeElement{


  render(){
    return <h.f>
      <t-space direction="vertical" style={{ width: '100%' }}>
        <t-textarea placeholder="请输入描述文案，文本长度最多20，maxlength=20" maxlength="20"></t-textarea>
        <t-textarea placeholder="请输入描述文案，最多20字符（一个汉字占两个字符长度），maxcharacter=20" maxcharacter="20"></t-textarea>
      </t-space>
    </h.f>
    
  }
}
