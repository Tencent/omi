import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('input-helper-text')
export default class InputHelperText extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 xl:w-96 pt-5">
          <o-input type="text" id="exampleFormControlInputHelper" label="Input">
            <div className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary">
              Text helper
            </div>
          </o-input>
        </div>
      </div>
    )
  }
}
