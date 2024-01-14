import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-read-only')
export default class InputReadOnly extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <o-input
            type="text"
            id="exampleFormControlInput50"
            label="Readonly input"
            value="Readonly input here..."
            readonly
          ></o-input>
        </div>
      </div>
    )
  }
}
