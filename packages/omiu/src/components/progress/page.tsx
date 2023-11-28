import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('progress-page')
export class ButtonPage extends Component {
  static css = [
    tailwind,
    `
  o-button{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  render() {
    return (
      <div className="container my-12 !max-w-full mb-48">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Basic example
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">The progress component displays the progress of a task or process.</p>

          <code-showcase
            code={`<o-progress value={0} className="w-full h-1 mb-2"></o-progress>
<o-progress value={20} className="w-full h-1 mb-2"></o-progress>
<o-progress value={40} className="w-full h-1 mb-2"></o-progress>
<o-progress value={60} className="w-full h-1 mb-2"></o-progress>
<o-progress value={80} className="w-full h-1 mb-2"></o-progress>
<o-progress value={100} className="w-full h-4 mb-2"></o-progress>
<o-progress value={52} label className="w-full h-4 mb-2"></o-progress>
<o-progress value={70} color="rgb(34 197 94)" className="w-full h-4 mb-2"></o-progress>`}
          >
            <o-progress value={0} className="w-full h-1 mb-2"></o-progress>
            <o-progress value={20} className="w-full h-1 mb-2"></o-progress>
            <o-progress value={40} className="w-full h-1 mb-2"></o-progress>
            <o-progress value={60} className="w-full h-1 mb-2"></o-progress>
            <o-progress value={80} className="w-full h-1 mb-2"></o-progress>
            <o-progress value={100} className="w-full h-4 mb-2"></o-progress>
            <o-progress value={52} label className="w-full h-4 mb-2"></o-progress>
            <o-progress value={70} color="rgb(34 197 94)" className="w-full h-4 mb-2"></o-progress>
          </code-showcase>
        </section>
      </div>
    )
  }
}
