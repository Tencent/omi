import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'

@tag('input-format')
export default class InputForMat extends WeElement {
  inputValue = ''

  render() {

    function format(val) {
      const reg = /(\d)(?=(?:\d{3})+$)/g;
      const str = val.replace(reg, '$1,');
      return str;
    }
  
    const inputStatus = isNaN(+this.inputValue) ? 'error' : '';
    const tips = inputStatus ? '请输入数字' : '';

    return (
      <h.f>
        <t-input
          placeholder="请输入数字"
          value={this.inputValue}
          onChange={(value) => {
            this.inputValue = value
          }}
          status={inputStatus}
          format={format}
          tips={tips}
        />
      </h.f>
    )
  }
}
