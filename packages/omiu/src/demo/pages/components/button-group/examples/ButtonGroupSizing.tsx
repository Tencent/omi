import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('button-group-sizing')
export default class ButtonGroupSizing extends Component {
  static css = [tailwind]

  render() {
    return (
      <div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
      </div>
    )
  }
}
