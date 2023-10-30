import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

import BasicExample from './examples/BasicExample'
import ExampleV2 from './examples/ExampleV2'
import ExampleV3 from './examples/ExampleV3'

import BasicExampleCode from './examples/BasicExample?raw'
import ExampleV2Code from './examples/ExampleV2?raw'
import ExampleV3Code from './examples/ExampleV3?raw'

@tag('registration-form-page')
export default class RegistrationFormPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="my-5 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic Example
          </h2>
          <code-showcase code={BasicExampleCode}>
            <BasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Example v2 --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="my-5 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            v.2
          </h2>
          <code-showcase code={ExampleV2Code}>
            <ExampleV2.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Example v2 --> */}

        {/* <!-- Section: Example v3 --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="my-5 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            v.3
          </h2>
          <code-showcase code={ExampleV3Code}>
            <ExampleV3.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Example v3 --> */}
      </div>
    )
  }
}
