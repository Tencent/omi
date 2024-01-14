import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-phone-number')
export default class InputPhoneNumber extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <o-input type="tel" id="exampleFormControlInputTel" label="Phone input"></o-input>
        </div>
      </div>
    )
  }
}
