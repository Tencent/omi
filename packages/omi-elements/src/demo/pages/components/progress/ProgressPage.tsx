import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('progress-page')
export default class ProgressPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
          Basic example
        </h2>

        <p className="mb-3">
          The progress component is mainly used to indicate the progress of a task, usually displayed as a progress bar.
        </p>

        <p className="mb-3">
          Use a progress bar element to display a percentage completion rate by using an inline style and the utility
          classes.
        </p>

        <code-showcase
          code={`<div className="mb-5 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-primary" style={{ width: '45%' }}></div>
</div>`}
        >
          <div className="mb-5 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary" style={{ width: '45%' }}></div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="width" data-te-spy-item>
          Width
        </h2>

        <p className="mb-3">Change the width style property to your level of progress completion.</p>
        <code-showcase
          code={`<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-primary" style={{ width: '0%' }}></div>
</div>
<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-primary" style={{ width: '25%' }}></div>
</div>
<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-primary" style={{ width: '50%' }}></div>
</div>
<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-primary" style={{ width: '75%' }}></div>
</div>
<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-primary" style={{ width: '100%' }}></div>
</div>`}
        >
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary" style={{ width: '0%' }}></div>
          </div>
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary" style={{ width: '25%' }}></div>
          </div>
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary" style={{ width: '50%' }}></div>
          </div>
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary" style={{ width: '75%' }}></div>
          </div>
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary" style={{ width: '100%' }}></div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="labels" data-te-spy-item>
          Labels
        </h2>

        <p className="mb-3">Use a progress bar with the label inside the bar.</p>
        <code-showcase
          code={`<div className="mb-5 w-full bg-neutral-200 dark:bg-neutral-600">
  <div
    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
    style={{ width: '25%' }}
  >
    25%
  </div>
</div>`}
        >
          <div className="mb-5 w-full bg-neutral-200 dark:bg-neutral-600">
            <div
              className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
              style={{ width: '25%' }}
            >
              25%
            </div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="height" data-te-spy-item>
          Height
        </h2>

        <p className="mb-3">Use different sizes by with various sizing utility classes.</p>
        <code-showcase
          code={`<div className="mb-6 h-px w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-px bg-primary" style={{ width: '25%' }}></div>
</div>
<div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-5 bg-primary" style={{ width: '25%' }}></div>
</div>`}
        >
          <div className="mb-6 h-px w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-px bg-primary" style={{ width: '25%' }}></div>
          </div>
          <div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-5 bg-primary" style={{ width: '25%' }}></div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="colors" data-te-spy-item>
          Colors
        </h2>

        <p className="mb-3">
          To apply different colors to your progress bars, just add the
          <code>.bg-green-500</code>, <code>.bg-primary-500</code>,<code>.bg-yellow-500</code> or{' '}
          <code>.bg-red-500</code> class.
        </p>
        <code-showcase
          code={`<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-green-500" style={{ width: '25%' }}></div>
</div>
<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-primary-400" style={{ width: '50%' }}></div>
</div>
<div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-yellow-500" style={{ width: '75%' }}></div>
</div>
<div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
  <div className="h-1 bg-red-600" style={{ width: '100%' }}></div>
</div>`}
        >
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-green-500" style={{ width: '25%' }}></div>
          </div>
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary-400" style={{ width: '50%' }}></div>
          </div>
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-yellow-500" style={{ width: '75%' }}></div>
          </div>
          <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-red-600" style={{ width: '100%' }}></div>
          </div>
        </code-showcase>
      </div>
    )
  }
}
