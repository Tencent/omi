import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('button-page')
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

          <code-showcase code={`<o-button>Button</o-button>`}>
            <o-button>Button</o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Active example
          </h2>

          <code-showcase code={`<o-button active={true}>Button</o-button>`}>
            <o-button active={true}>Button</o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: With ripple --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="with_ripple" data-te-spy-item>
            Without ripple
          </h2>
          {/* <!-- Description --> */}

          <code-showcase code={`<o-button ripple={false}>CLICK ME</o-button>`}>
            <o-button ripple={false}>CLICK ME</o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: With ripple --> */}

        {/* <!-- Section: Hierarchy --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="hierarchy" data-te-spy-item>
            Variant
          </h2>

          <code-showcase
            code={`<o-button variant="contained">Contained</o-button>
<o-button variant="outlined">Outlined</o-button>
<o-button variant="text">Text</o-button>`}
          >
            <div className="flex justify-center space-x-2">
              <o-button variant="contained">Contained</o-button>
              <o-button variant="outlined">Outlined</o-button>
              <o-button variant="text">Text</o-button>
            </div>
          </code-showcase>
        </section>
        {/* <!-- Section: Hierarchy --> */}

        {/* <!-- Section: Contextual --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="contextual" data-te-spy-item>
            Color
          </h2>

          <code-showcase
            code={`<o-button color="primary">Primary</o-button>
<o-button color="secondary">Secondary</o-button>
<o-button color="success">Success</o-button>
<o-button color="info">Info</o-button>
<o-button color="warning">Warning</o-button>
<o-button color="danger">Danger</o-button>
<o-button color="light">Light</o-button>
<o-button color="dark">Dark</o-button>`}
          >
            <o-button color="primary">Primary</o-button>
            <o-button color="secondary">Secondary</o-button>
            <o-button color="success">Success</o-button>
            <o-button color="info">Info</o-button>
            <o-button color="warning">Warning</o-button>
            <o-button color="danger">Danger</o-button>
            <o-button color="light">Light</o-button>
            <o-button color="dark">Dark</o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Contextual --> */}

        {/* <!-- Section: Outline --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="outline" data-te-spy-item>
            Outlined
          </h2>
          {/* <!-- Description --> */}

          <code-showcase
            code={`<o-button variant="outlined" color="primary">Primary</o-button>
<o-button variant="outlined" color="secondary">Secondary</o-button>
<o-button variant="outlined" color="success">Success</o-button>
<o-button variant="outlined" color="info">Info</o-button>
<o-button variant="outlined" color="warning">Warning</o-button>
<o-button variant="outlined" color="danger">Danger</o-button>
<o-button variant="outlined" color="light">Light</o-button>
<o-button variant="outlined" color="dark">Dark</o-button>`}
          >
            <o-button variant="outlined" color="primary">
              Primary
            </o-button>
            <o-button variant="outlined" color="secondary">
              Secondary
            </o-button>
            <o-button variant="outlined" color="success">
              Success
            </o-button>
            <o-button variant="outlined" color="info">
              Info
            </o-button>
            <o-button variant="outlined" color="warning">
              Warning
            </o-button>
            <o-button variant="outlined" color="danger">
              Danger
            </o-button>
            <o-button variant="outlined" color="light">
              Light
            </o-button>
            <o-button variant="outlined" color="dark">
              Dark
            </o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Outline --> */}

        {/* <!-- Section: Colors --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="outline" data-te-spy-item>
            Colors
          </h2>

          <code-showcase
            code={`<o-button color="primary">Primary</o-button>
<o-button color="secondary">Secondary</o-button>
<o-button color="success">Success</o-button>
<o-button color="info">Info</o-button>
<o-button color="warning">Warning</o-button>
<o-button color="danger">Danger</o-button>
<o-button color="light">Light</o-button>
<o-button color="dark">Dark</o-button>`}
          >
            <o-button color="primary">Primary</o-button>
            <o-button color="secondary">Secondary</o-button>
            <o-button color="success">Success</o-button>
            <o-button color="info">Info</o-button>
            <o-button color="warning">Warning</o-button>
            <o-button color="danger">Danger</o-button>
            <o-button color="light">Light</o-button>
            <o-button color="dark">Dark</o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Colors --> */}

        {/* <!-- Section: Rounded --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="rounded" data-te-spy-item>
            Variant Text
          </h2>
          {/* <!-- Description --> */}

          <code-showcase
            code={`<o-button variant="text" color="primary">Primary</o-button>
<o-button variant="text" color="secondary">Secondary</o-button>
<o-button variant="text" color="success">Success</o-button>
<o-button variant="text" color="info">Info</o-button>
<o-button variant="text" color="warning">Warning</o-button>
<o-button variant="text" color="danger">Danger</o-button>
<o-button variant="text" color="light">Light</o-button>
<o-button variant="text" color="dark">Dark</o-button>`}
          >
            <o-button variant="text" color="primary">
              Primary
            </o-button>
            <o-button variant="text" color="secondary">
              Secondary
            </o-button>
            <o-button variant="text" color="success">
              Success
            </o-button>
            <o-button variant="text" color="info">
              Info
            </o-button>
            <o-button variant="text" color="warning">
              Warning
            </o-button>
            <o-button variant="text" color="danger">
              Danger
            </o-button>

            <o-button variant="text" color="light">
              Light
            </o-button>
            <o-button variant="text" color="dark">
              Dark
            </o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Rounded --> */}

        {/* <!-- Section: Fixed --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="fixed" data-te-spy-item>
            roundedFull
          </h2>

          <code-showcase
            code={`<o-button roundedFull color="primary">Primary</o-button>
<o-button roundedFull color="secondary">Secondary</o-button>
<o-button roundedFull color="success">Success</o-button>
<o-button roundedFull color="info">Info</o-button>
<o-button roundedFull color="warning">Warning</o-button>
<o-button roundedFull color="danger">Danger</o-button>
<o-button roundedFull color="light">Light</o-button>
<o-button roundedFull color="dark">Dark</o-button>`}
          >
            <o-button roundedFull color="primary">
              Primary
            </o-button>
            <o-button roundedFull color="secondary">
              Secondary
            </o-button>
            <o-button roundedFull color="success">
              Success
            </o-button>
            <o-button roundedFull color="info">
              Info
            </o-button>
            <o-button roundedFull color="warning">
              Warning
            </o-button>
            <o-button roundedFull color="danger">
              Danger
            </o-button>

            <o-button roundedFull color="light">
              Light
            </o-button>
            <o-button roundedFull color="dark">
              Dark
            </o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Fixed --> */}

        {/* <!-- Section: Sizes --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="sizes" data-te-spy-item>
            Floating
          </h2>
          {/* <!-- Description --> */}

          <code-showcase
            code={`<o-button roundedFull floating size="small">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
    <path
      fill-rule="evenodd"
      d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
      clip-rule="evenodd"
    />
  </svg>
</o-button>

<o-button roundedFull floating size="medium">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
    <path
      fill-rule="evenodd"
      d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
      clip-rule="evenodd"
    />
  </svg>
</o-button>

<o-button roundedFull floating size="large">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
    <path
      fill-rule="evenodd"
      d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
      clip-rule="evenodd"
    />
  </svg>
</o-button>`}
          >
            <o-button roundedFull floating size="small">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </o-button>

            <o-button roundedFull floating size="medium">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </o-button>

            <o-button roundedFull floating size="large">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Sizes --> */}

        {/* <!-- Section: Active states --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="active" data-te-spy-item>
            Size
          </h2>
          <code-showcase
            code={`<o-button size="small" color="primary">
  Primary
</o-button>

<o-button size="medium" color="primary">
  Primary
</o-button>
<o-button size="large" color="primary">
  Primary
</o-button>`}
          >
            <o-button size="small" color="primary">
              Primary
            </o-button>

            <o-button size="medium" color="primary">
              Primary
            </o-button>
            <o-button size="large" color="primary">
              Primary
            </o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Active states --> */}

        {/* <!-- Section: With Icon --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="with_icon" data-te-spy-item>
            With icon
          </h2>
          {/* <!-- Description --> */}

          <code-showcase
            code={`<o-button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 h-4 w-4">
    <path
      fill-rule="evenodd"
      d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
      clip-rule="evenodd"
    />
  </svg>
  Button
</o-button>`}
          >
            <o-button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 h-4 w-4">
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                  clip-rule="evenodd"
                />
              </svg>
              Button
            </o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: With Icon --> */}

        {/* <!-- Section: Block buttons --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="block_buttons" data-te-spy-item>
            Block buttons
          </h2>

          <code-showcase
            code={`<o-button color="primary" fullWidth class="mb-2">
  Button
</o-button>
<o-button color="secondary" variant="outlined" fullWidth>
  Button
</o-button>`}
          >
            <o-button color="primary" fullWidth class="mb-2">
              Button
            </o-button>
            <o-button color="secondary" variant="outlined" fullWidth>
              Button
            </o-button>
          </code-showcase>
        </section>
        {/* <!-- Section: Block buttons --> */}
      </div>
    )
  }
}
