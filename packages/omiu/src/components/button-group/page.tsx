import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './button-group'

@tag('button-group-page')
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
      <div className="!max-w-full mb-48">
        {/* <!-- Section: Hierarchy --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="hierarchy" data-te-spy-item>
            Base Example
          </h2>

          <code-showcase
            code={`<o-button-group variant="contained">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</o-button-group>`}
          >
            <div className="flex justify-center space-x-2">
              <o-button-group variant="contained">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>
          </code-showcase>
        </section>
        {/* <!-- Section: Hierarchy --> */}

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="hierarchy" data-te-spy-item>
            Active Example
          </h2>

          <code-showcase
            code={`<o-button-group variant="contained">
  <button active={true}>Left</button>
  <button>Middle</button>
  <button>Right</button>
</o-button-group>`}
          >
            <div className="flex justify-center space-x-2">
              <o-button-group variant="contained">
                <button active={true}>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="hierarchy" data-te-spy-item>
            Outline styles
          </h2>

          <code-showcase
            code={`<o-button-group variant="outlined">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</o-button-group>`}
          >
            <div color="primary" className="flex justify-center space-x-2">
              <o-button-group variant="outlined">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="hierarchy" data-te-spy-item>
            Size Example
          </h2>

          <code-showcase
            code={`<div class="text-center mb-2">
  <o-button-group size="small" variant="contained">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>
<div class="text-center mb-2">
  <o-button-group variant="contained">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>
<div class="text-center mb-2">
  <o-button-group size="large" variant="contained">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>`}
          >
            <div class="text-center mb-2">
              <o-button-group size="small" variant="contained">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>
            <div class="text-center mb-2">
              <o-button-group variant="contained">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>
            <div class="text-center mb-2">
              <o-button-group size="large" variant="contained">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="hierarchy" data-te-spy-item>
            Color Example
          </h2>

          <code-showcase
            code={`<div class="text-center mb-2">
    <o-button-group color="primary">
      <button>Left</button>
      <button>Middle</button>
      <button>Right</button>
    </o-button-group>
  </div>

  <div class="text-center mb-2">
  <o-button-group color="secondary">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>

<div class="text-center mb-2">
  <o-button-group color="success">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>

<div class="text-center mb-2">
  <o-button-group color="info">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>

<div class="text-center mb-2">
  <o-button-group color="warning">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>

<div class="text-center mb-2">
  <o-button-group color="danger">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>

<div class="text-center mb-2">
  <o-button-group color="light">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>

<div class="text-center mb-2">
  <o-button-group color="dark">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </o-button-group>
</div>`}
          >
            <div class="text-center mb-2">
              <o-button-group color="primary">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>

            <div class="text-center mb-2">
              <o-button-group color="secondary">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>

            <div class="text-center mb-2">
              <o-button-group color="success">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>

            <div class="text-center mb-2">
              <o-button-group color="info">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>

            <div class="text-center mb-2">
              <o-button-group color="warning">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>

            <div class="text-center mb-2">
              <o-button-group color="danger">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>

            <div class="text-center mb-2">
              <o-button-group color="light">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>

            <div class="text-center mb-2">
              <o-button-group color="dark">
                <button>Left</button>
                <button>Middle</button>
                <button>Right</button>
              </o-button-group>
            </div>
          </code-showcase>
        </section>
      </div>
    )
  }
}
