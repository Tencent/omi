import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'
import '../../space'

@tag('input-base')
export default class InputBase extends WeElement {
  
  value='Welcome to TDesign'

  render() {
    return (
      <h.f>
        <div style="position: relative;">
          <t-space direction="vertical" style={{ width: 500 }}>
            <t-input
              placeholder="请输入内容（无默认值）"
              onChange={(value) => {
                console.log(value)
              }}
            />
            <t-input
              value={this.value}
              placeholder="请输入内容（有默认值）"
              onChange={(value) => {
                this.value = value
                this.update()
                console.log(value)
              }}
              onEnter={(value) => {
                console.log(value)
              }}
            />
          </t-space>
        </div>
      </h.f>
    )
  }
}
