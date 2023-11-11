import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('input-disabled')
export default class InputDisabled extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <Input.tagName type="text" id="exampleFormControlInput5" label="Disabled input" disabled></Input.tagName>
        </div>
      </div>
    )
  }
}
