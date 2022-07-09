import { tag, WeElement, h, render } from 'omi'
import '@omiu/icon/ac-unit-outlined'
import './index.tsx'

@tag('input-demo')
export default class InputDemo extends WeElement {
  static css = `o-input { margin: 10px 5px; }`

  render() {
    return <div>

      <div>
        <o-input placeholder="Enter User Name"></o-input>
      </div>

      <div>
        <o-input disabled placeholder="Enter User Name"></o-input>
      </div>

      <div>
        <o-input clearable placeholder="Enter User Name"></o-input>
      </div>

      <div>
        <o-input max-length="10" placeholder="Enter User Name"></o-input>
      </div>

      <div>
        <o-input suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
      </div>

      <div>
        <o-input suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
        <o-input size="medium" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
        <o-input size="small" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
        <o-input size="mini" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
      </div>

      <div>
        <o-input prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
        <o-input size="medium" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
        <o-input size="small" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
        <o-input size="mini" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
      </div>

      <o-input block placeholder="Enter User Name"></o-input>


      <o-input type="textarea" placeholder="Enter User Name"></o-input>
    </div>
  }
}


render(<input-demo></input-demo>, 'body', {
  ignoreAttrs: true
})
