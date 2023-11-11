import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('placeholder-basic-example')
export default class PlaceholderBasicExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center space-x-2">
        <div className="max-w-xs rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <img src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" className="rounded-t-lg" alt="..." />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Card title</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Ripple.tagName>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Go somewhere
              </button>
            </Ripple.tagName>
          </div>
        </div>
        <div
          className="max-w-xs rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          aria-hidden="true"
        >
          <img src="https://tecdn.b-cdn.net/img/new/standard/nature/182.webp" className="rounded-t-lg" alt="..." />
          <div className="p-6">
            <h5 className="mb-2 animate-pulse text-xl font-medium text-neutral-900 dark:text-white">
              <span className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
            </h5>
            <p className="mb-4 animate-pulse text-base text-neutral-700 dark:text-white">
              <span className="inline-block min-h-[1em] w-7/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
              <span className="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
              <span className="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
              <span className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
              <span className="inline-block min-h-[1em] w-8/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
            </p>
            <a
              tabIndex={-1}
              className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out before:inline-block before:content-[''] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            ></a>
          </div>
        </div>
      </div>
    )
  }
}
