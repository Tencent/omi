import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('button-group-colors')
export default class ButtonGroupColors extends Component {
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
          <div className="inline-flex" role="group">
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-success-600 focus:bg-success-600 focus:outline-none focus:ring-0 active:bg-success-700"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-success-600 focus:bg-success-600 focus:outline-none focus:ring-0 active:bg-success-700"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-success-600 focus:bg-success-600 focus:outline-none focus:ring-0 active:bg-success-700"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-danger-600 focus:bg-danger-600 focus:outline-none focus:ring-0 active:bg-danger-700"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-danger-600 focus:bg-danger-600 focus:outline-none focus:ring-0 active:bg-danger-700"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-danger-600 focus:bg-danger-600 focus:outline-none focus:ring-0 active:bg-danger-700"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-warning-600 focus:bg-warning-600 focus:outline-none focus:ring-0 active:bg-warning-700"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-warning-600 focus:bg-warning-600 focus:outline-none focus:ring-0 active:bg-warning-700"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-warning-600 focus:bg-warning-600 focus:outline-none focus:ring-0 active:bg-warning-700"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-info-600 focus:bg-info-600 focus:outline-none focus:ring-0 active:bg-info-700"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-info-600 focus:bg-info-600 focus:outline-none focus:ring-0 active:bg-info-700"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-info-600 focus:bg-info-600 focus:outline-none focus:ring-0 active:bg-info-700"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none focus:ring-0 active:bg-neutral-200"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none focus:ring-0 active:bg-neutral-200"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none focus:ring-0 active:bg-neutral-200"
              >
                Right
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex rounded-md shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
            role="group"
          >
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-l bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 dark:active:bg-neutral-900"
              >
                Left
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 dark:active:bg-neutral-900"
              >
                Middle
              </button>
            </Ripple.tagName>
            <Ripple.tagName class="inline-flex" rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-r bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 dark:active:bg-neutral-900"
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
