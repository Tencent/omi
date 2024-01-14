import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-disabled')
export default class InputDisabled extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <o-input type="text" id="exampleFormControlInput5" label="Disabled input" disabled></o-input>
        </div>
      </div>
    )
  }
}
