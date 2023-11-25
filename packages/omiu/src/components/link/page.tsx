import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('link-page')
export class ButtonPage extends Component {
  static css = [
    tailwind,
    `
  o-link{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  render() {
    return (
      <div className="container my-12 !max-w-full mb-48">
        {/* <!-- Section: Colors --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="outline" data-te-spy-item>
            Color
          </h2>

          <code-showcase
            code={`<o-link color="primary" href="javascript:">Primary</o-link>
<o-link color="secondary" href="javascript:">Secondary</o-link>
<o-link color="success" href="javascript:">Success</o-link>
<o-link color="info" href="javascript:">Info</o-link>
<o-link color="warning" href="javascript:">Warning</o-link>
<o-link color="danger" href="javascript:">Danger</o-link>
<o-link color="light" href="javascript:">Light</o-link>
<o-link color="dark" href="javascript:">Dark</o-link>`}
          >
            <o-link color="primary" href="javascript:">
              Primary
            </o-link>
            <o-link color="secondary" href="javascript:">
              Secondary
            </o-link>
            <o-link color="success" href="javascript:">
              Success
            </o-link>
            <o-link color="info" href="javascript:">
              Info
            </o-link>
            <o-link color="warning" href="javascript:">
              Warning
            </o-link>
            <o-link color="danger" href="javascript:">
              Danger
            </o-link>
            <o-link color="light" href="javascript:">
              Light
            </o-link>
            <o-link color="dark" href="javascript:">
              Dark
            </o-link>
            <o-link color="white" href="javascript:">
              White
            </o-link>
            <o-link color="black" href="javascript:">
              Black
            </o-link>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="outline" data-te-spy-item>
            Underline
          </h2>

          <code-showcase
            code={`<o-link href="javascript:">No Underline</o-link>
<o-link underline={true} href="javascript:">Underline</o-link>
<o-link underline="hover" href="javascript:">Underline on hover</o-link>`}
          >
            <o-link href="javascript:">No Underline</o-link>
            <o-link underline={true} href="javascript:">
              Underline
            </o-link>
            <o-link underline="hover" href="javascript:">
              Underline on hover
            </o-link>
          </code-showcase>
        </section>
      </div>
    )
  }
}
