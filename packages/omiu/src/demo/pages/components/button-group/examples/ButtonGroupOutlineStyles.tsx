import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('button-group-outline-styles')
export default class ButtonGroupOutlineStyles extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex items-center justify-center">
        <div className="inline-flex" role="group">
          <Ripple.tagName class="inline-flex" rippleColor="light">
            <button
              type="button"
              className="inline-block rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Left
            </button>
          </Ripple.tagName>
          <Ripple.tagName class="inline-flex" rippleColor="light">
            <button
              type="button"
              className="-ml-0.5 inline-block border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Middle
            </button>
          </Ripple.tagName>
          <Ripple.tagName class="inline-flex" rippleColor="light">
            <button
              type="button"
              className="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Right
            </button>
          </Ripple.tagName>
        </div>
      </div>
    )
  }
}
