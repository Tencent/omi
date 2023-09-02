import { OmiProps, WeElement, h, tag, render } from 'omi'
import "../index"
import "../../space/index"
@tag("textarea-base")
export default class TextareaBase extends WeElement{

  render(){
    
    return <h.f>
      <t-space direction="vertical" style={{ width: '100%' }}>
        <t-textarea placeholder="请输入描述文案"></t-textarea>
        <t-textarea placeholder="请输入文案，高度可自适应；autosize=true" autosize={true}></t-textarea>
        <t-textarea placeholder="请输入文案，高度可自适应，最小3行，最大5行；autosize={minRows: 3, maxRows: 5}" autosize={{minRows: 3, maxRows: 5}}></t-textarea>
      </t-space>
    </h.f>
    
  }
}
