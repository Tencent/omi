import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import { data, columns } from './mock'
import './index'

@tag('table-page')
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
        <h1 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
          VTable
        </h1>
        <p className="mb-3">
          VTable: Not only a high-performance multi-dimensional data analytics table, but also a grid artist created
          between columns!
        </p>

        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Base example
          </h2>

          <code-showcase code={`<o-table data={data} columns={columns}></o-table>`}>
            <o-table data={data} columns={columns}></o-table>
          </code-showcase>
        </section>
      </div>
    )
  }
}
