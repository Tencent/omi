import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-basic-example')
export default class InputBasicExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <o-input
            onChange={(evt: CustomEvent) => {
              console.log(evt.detail)
            }}
            onBlur={(evt: CustomEvent) => {
              console.log(evt.detail)
            }}
            type="text"
            label="Example label"
          ></o-input>
        </div>
      </div>
    )
  }
}
