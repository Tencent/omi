import { OmiProps, WeElement, h, tag, render } from "omi"

import "../index"
import "../../space/index"

@tag("textarea-status")
export default class TextareaStatus extends WeElement{

  render(){
    return <h.f>
      <t-space direction="vertical" style={{ width: "100%" }}>
        <t-textarea placeholder="禁用状态" disabled="true"></t-textarea>
        <t-textarea placeholder="只读状态" readonly="true"></t-textarea>
        <t-textarea placeholder="普通状态" readonly="true" tips="这是普通文本提示"></t-textarea>
        <t-textarea placeholder="成功状态" tips="校验通过文本提示" status="success"></t-textarea>
        <t-textarea placeholder="警告状态" tips="校验不通过文本提示" status="warning"></t-textarea>
        <t-textarea placeholder="错误状态" tips="校验存在严重问题文本提示" status="error"></t-textarea>
        </t-space>
    </h.f>
  }
}
