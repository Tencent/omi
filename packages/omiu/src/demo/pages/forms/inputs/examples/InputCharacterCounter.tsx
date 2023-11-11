import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('input-character-counter')
export default class InputCharacterCounter extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <Input.tagName
            type="text"
            id="exampleFormControlInputCounter"
            label="Example label"
            counter
            maxLength={20}
          ></Input.tagName>
        </div>
      </div>
    )
  }
}
