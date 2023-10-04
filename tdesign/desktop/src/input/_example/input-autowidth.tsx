import { OmiProps, WeElement, h, tag, render } from 'omi'
import '../index'

@tag('input-autowidth')
export default class InputAutowidth extends WeElement {
  inputValue = 'Hello TDesign'

  render() {
    return (
      <div>
        <t-input
          autoWidth 
          defaultValue="宽度自适应"
          onChange={(value) => {
            this.inputValue = value
          }}
        />
      </div>
    )
  }
}
