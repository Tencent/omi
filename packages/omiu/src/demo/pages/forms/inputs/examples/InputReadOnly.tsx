import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('input-read-only')
export default class InputReadOnly extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <Input.tagName
            type="text"
            id="exampleFormControlInput50"
            label="Readonly input"
            value="Readonly input here..."
            readonly
          ></Input.tagName>
        </div>
      </div>
    )
  }
}
