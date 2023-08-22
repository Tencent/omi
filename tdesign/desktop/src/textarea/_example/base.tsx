import exp from 'constants'
import { OmiProps, WeElement, h, tag, classNames, createRef, render } from 'omi'

import "../index"

@tag("textarea-base")
export default class TextareaBase extends WeElement{
  static css = `t-textarea {
    margin : 10px;
  }`

  render(){
    
    return <h.f>
      <t-textarea placeholder="请输入你的文本" autosize={{minRows: 3, maxRows: 5}}></t-textarea>
      <t-textarea placeholder="请输入你的文本" autosize={true}></t-textarea>
      <t-textarea placeholder="请输入描述文案，文本长度最多20，maxlength=20" maxlength="20"></t-textarea>
    </h.f>
    
  }
}

render(<textarea-base></textarea-base>, '.testContainer', {})