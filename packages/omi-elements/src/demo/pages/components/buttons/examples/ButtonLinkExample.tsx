import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import { Ripple } from 'omi-elements'

@tag('button-link-example')
export class ButtonLinkExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <>
        <p className="mb-4 text-center">Click the button to see the effect</p>
        <div className="flex justify-center space-x-2">
          <Ripple.tagName rippleColor="light">
            <button
              type="button"
              className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Link
            </button>
          </Ripple.tagName>
        </div>
      </>
    )
  }
}
