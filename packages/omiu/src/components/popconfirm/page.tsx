import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('popconfirm-page')
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
            The Popconfirm component is a user interface element that displays a confirmation dialog in a small overlay
            popover, typically used to prompt users for a final decision before performing critical actions.
          </p>

          <code-showcase
            code={`<o-popconfirm>
  <o-button>Click me</o-button>
  <div slot="content" role="tooltip" class="w-64">
    <h3 class="flex font-semibold text-gray-700 dark:text-white">
      <span class="mr-2 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      Popover title
    </h3>

    <div class="py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
</o-popconfirm>`}
          >
            <o-popconfirm>
              <o-button>Click me</o-button>
              <div slot="content" role="tooltip" class="w-64">
                <h3 class="flex font-semibold text-gray-700 dark:text-white">
                  <span class="mr-2 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  Popover title
                </h3>

                <div class="py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
              </div>
            </o-popconfirm>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Placement
          </h2>

          <code-showcase
            code={`<o-popconfirm placement="top" title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
  <o-button>Click me</o-button>
</o-popconfirm>
<o-popconfirm placement="right" title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
  <o-button>Click me</o-button>
</o-popconfirm>
<o-popconfirm placement="bottom" title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
  <o-button>Click me</o-button>
</o-popconfirm>
<o-popconfirm placement="left" title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
  <o-button>Click me</o-button>
</o-popconfirm>`}
          >
            <o-popconfirm
              placement="top"
              title="Popover title"
              content="And here's some amazing content. It's very engaging. Right?"
            >
              <o-button>Top</o-button>
            </o-popconfirm>
            <o-popconfirm
              placement="right"
              title="Popover title"
              content="And here's some amazing content. It's very engaging. Right?"
            >
              <o-button>Right</o-button>
            </o-popconfirm>
            <o-popconfirm
              placement="bottom"
              title="Popover title"
              content="And here's some amazing content. It's very engaging. Right?"
            >
              <o-button>Bottom</o-button>
            </o-popconfirm>
            <o-popconfirm
              placement="left"
              title="Popover title"
              content="And here's some amazing content. It's very engaging. Right?"
            >
              <o-button>Left</o-button>
            </o-popconfirm>
          </code-showcase>
        </section>
      </div>
    )
  }
}
