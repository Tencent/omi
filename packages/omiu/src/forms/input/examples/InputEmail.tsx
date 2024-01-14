import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-email')
export default class InputEmail extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <o-input type="email" id="exampleFormControlInputEmail" label="Email input"></o-input>
        </div>
      </div>
    )
  }
}
