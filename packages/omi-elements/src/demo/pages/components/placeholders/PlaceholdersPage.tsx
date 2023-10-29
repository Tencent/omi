import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

import PlaceholderBasicExample from './examples/PlaceholderBasicExample'

import PlaceholderBasicExampleCode from './examples/PlaceholderBasicExample?raw'

@tag('placeholders-page')
export default class PlaceholdersPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 mx-5">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Basic example</h2>
        <code-showcase code={PlaceholderBasicExampleCode}>
          <PlaceholderBasicExample.tagName />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">How it works</h2>
        <code-showcase
          code={`<div>
<p aria-hidden="true" className="mb-4 text-base text-neutral-700 dark:text-white">
  <span className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
</p>
<a
  tabIndex={-1}
  className="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out before:inline-block before:content-[''] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
  aria-hidden="true"
></a>
</div>`}
        >
          <div>
            <p aria-hidden="true" className="mb-4 text-base text-neutral-700 dark:text-white">
              <span className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
            </p>
            <a
              tabIndex={-1}
              className="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out before:inline-block before:content-[''] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              aria-hidden="true"
            ></a>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Width</h2>
        <code-showcase
          code={`<div>
  <span className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
  <span className="inline-block min-h-[1em] w-9/12 cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
  <span className="inline-block min-h-[1em] cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
</div>`}
        >
          <div>
            <span className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            <span className="inline-block min-h-[1em] w-9/12 cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            <span className="inline-block min-h-[1em] cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Colors</h2>
        <code-showcase
          code={`<div>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-white"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-primary align-middle opacity-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-secondary align-middle opacity-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-success align-middle opacity-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-danger align-middle opacity-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-warning align-middle opacity-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-info align-middle opacity-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-neutral-200 align-middle opacity-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-neutral-800 align-middle opacity-50 dark:bg-neutral-900 dark:opacity-50"></span>
</div>`}
        >
          <div>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-white"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-primary align-middle opacity-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-secondary align-middle opacity-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-success align-middle opacity-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-danger align-middle opacity-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-warning align-middle opacity-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-info align-middle opacity-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-neutral-200 align-middle opacity-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-neutral-800 align-middle opacity-50 dark:bg-neutral-900 dark:opacity-50"></span>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Sizing</h2>
        <code-showcase
          code={`<div>
  <span className="inline-block min-h-[1.2em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
  <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
  <span className="inline-block min-h-[0.8em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
  <span className="inline-block min-h-[0.6em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
</div>`}
        >
          <div>
            <span className="inline-block min-h-[1.2em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            <span className="inline-block min-h-[0.8em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            <span className="inline-block min-h-[0.6em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Animation</h2>
        <code-showcase
          code={`<div>
  <p className="mb-4 animate-pulse">
    <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
  </p>
  <p className="mb-4 animate-[placeholder-wave_2s_linear_infinite] [mask-size:200%_100%]">
    <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
  </p>
</div>`}
        >
          <div>
            <p className="mb-4 animate-pulse">
              <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            </p>
            <p className="mb-4 animate-[placeholder-wave_2s_linear_infinite] [mask-size:200%_100%]">
              <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            </p>
          </div>
        </code-showcase>
      </div>
    )
  }
}
