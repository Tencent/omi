import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-sizing')
export default class InputSizing extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center pt-6">
        <div>
          <div className="relative mb-3 xl:w">
            <o-input type="text" id="exampleFormControlInput2" label="Form control lg" size="lg"></o-input>
          </div>
          <div className="relative mb-3 xl:w-96">
            <o-input type="text" id="exampleFormControlInput3" label="Default input" size="base"></o-input>
          </div>
          <div className="relative mb-3 xl:w-96">
            <o-input type="text" id="exampleFormControlInput4" label="Form control sm" size="sm"></o-input>
          </div>
        </div>
      </div>
    )
  }
}
