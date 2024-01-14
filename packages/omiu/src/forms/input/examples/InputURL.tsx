import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-url')
export default class InputURL extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <o-input type="url" id="exampleFormControlInputURL" label="URL input"></o-input>
        </div>
      </div>
    )
  }
}
