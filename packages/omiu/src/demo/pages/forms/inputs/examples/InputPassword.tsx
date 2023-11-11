import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('input-password')
export default class InputPassword extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <Input.tagName type="password" id="exampleFormControlInputPassword" label="Password input"></Input.tagName>
        </div>
      </div>
    )
  }
}
