import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './alert'

@tag('alert-page')
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
          <p className="mb-3">
            Use these default button styles with multiple colors to indicate an action or link within your website.
          </p>

          <code-showcase
            code={`<o-alert color="primary">This is an primary alert — check it out!</o-alert>
<o-alert color="secondary">This is a secondary alert — check it out!</o-alert>
<o-alert color="indigo">This is an indigo alert — check it out!</o-alert>
<o-alert color="success">This is a success alert — check it out!</o-alert>
<o-alert color="warning">This is a warning alert — check it out!</o-alert>
<o-alert color="danger">This is an danger alert — check it out!</o-alert>
<o-alert color="light">This is an light alert — check it out!</o-alert>
<o-alert color="dark">This is a dark alert — check it out!</o-alert>`}
          >
            <o-alert color="primary">This is an primary alert — check it out!</o-alert>
            <o-alert color="secondary">This is a secondary alert — check it out!</o-alert>
            <o-alert color="indigo">This is an indigo alert — check it out!</o-alert>
            <o-alert color="success">This is a success alert — check it out!</o-alert>
            <o-alert color="warning">This is a warning alert — check it out!</o-alert>
            <o-alert color="danger">This is an danger alert — check it out!</o-alert>
            <o-alert color="light">This is an light alert — check it out!</o-alert>
            <o-alert color="dark">This is a dark alert — check it out!</o-alert>
          </code-showcase>
        </section>
      </div>
    )
  }
}
