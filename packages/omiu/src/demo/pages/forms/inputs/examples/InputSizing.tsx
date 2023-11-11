import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('input-sizing')
export default class InputSizing extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center pt-6">
        <div>
          <div className="relative mb-3 xl:w">
            <Input.tagName type="text" id="exampleFormControlInput2" label="Form control lg" size="lg"></Input.tagName>
          </div>
          <div className="relative mb-3 xl:w-96">
            <Input.tagName type="text" id="exampleFormControlInput3" label="Default input" size="base"></Input.tagName>
          </div>
          <div className="relative mb-3 xl:w-96">
            <Input.tagName type="text" id="exampleFormControlInput4" label="Form control sm" size="sm"></Input.tagName>
          </div>
        </div>
      </div>
    )
  }
}
