import { OmiProps, WeElement, h, tag, render } from 'omi'

import "../index"

@tag("textarea-base")
export default class TextareaBase extends WeElement{
  static css = `t-textarea {
    margin : 10px;
  }`

  render(){
    
    return <h.f>
      <t-textarea placeholder="请输入描述文案"></t-textarea>
      <t-textarea placeholder="请输入文案，高度可自适应；autosize=true" autosize={true}></t-textarea>
      <t-textarea placeholder="请输入文案，高度可自适应，最小3行，最大5行；autosize={minRows: 3, maxRows: 5}" autosize={{minRows: 3, maxRows: 5}}></t-textarea>
      {/* <t-textarea placeholder="请输入你的文本" autosize={true}></t-textarea>
      <t-textarea placeholder="请输入描述文案，文本长度最多20，maxlength=20" maxlength="20"></t-textarea> */}
    </h.f>
    
  }
}
