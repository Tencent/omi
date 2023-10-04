import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'

@tag('input-clear')
export default class InputClear extends WeElement {
  inputValue = 'Hello TDesign'

  render() {
    return (
      <h.f>
        <t-input
          placeholder="请输入内容"
          value={this.inputValue}
          clearable
          onChange={(value) => {
            this.inputValue = value
          }}
          onClear={() => {
            console.log('onClear')
          }}
        />
      </h.f>
    )
  }
}
