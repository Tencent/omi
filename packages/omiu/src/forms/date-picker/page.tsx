import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('date-picker-page')
export class Page extends Component {
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
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            In progress
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">In progress, coming soon...</p>

          <code-showcase code={`<o-date-picker value="2023-11-26"></o-date-picker>`}>
            <o-date-picker value="2023-12-26"></o-date-picker>
          </code-showcase>
        </section>

        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Locale Chinese
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">In progress, coming soon...</p>

          <code-showcase code={`<o-date-picker locale="zh" value="2023-11-26"></o-date-picker>`}>
            <o-date-picker locale="zh" value="2023-12-26"></o-date-picker>
          </code-showcase>
        </section>
      </div>
    )
  }
}
