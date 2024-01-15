import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import '../../components/button/index'
import './index'

@tag('popover-page')
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
        <section>
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Basic example
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            The Popover component is a user interface element that displays additional content or context information
            when activated, typically appearing as a small overlay box or bubble near the triggering element.
          </p>

          <code-showcase
            code={`<o-popover>
  <o-button>Popover</o-button>
  <div
    slot="content"
    id="popover-default"
    role="tooltip"
    class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
    data-popover=""
    data-popper-placement="top"
  >
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
</o-popover>`}
          >
            <o-popover>
              <o-button>Popover</o-button>
              <div
                slot="content"
                id="popover-default"
                role="tooltip"
                class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
                data-popover=""
                data-popper-placement="top"
              >
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
              </div>
            </o-popover>
          </code-showcase>
        </section>

        <section>
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Hover
          </h2>

          <code-showcase
            code={`<o-popover hover>
  <o-button>Popover</o-button>
  <div
    slot="content"
    id="popover-default"
    role="tooltip"
    class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
    data-popover=""
    data-popper-placement="top"
  >
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
</o-popover>`}
          >
            <o-popover hover>
              <o-button>Hover me</o-button>
              <div
                slot="content"
                id="popover-default"
                role="tooltip"
                class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
                data-popover=""
                data-popper-placement="top"
              >
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
              </div>
            </o-popover>
          </code-showcase>
        </section>

        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Placement
          </h2>

          <code-showcase
            code={`<o-popover placement="right">
  <o-button>Popover Right</o-button>
  <div
    slot="content"
    id="popover-default"
    role="tooltip"
    class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
    data-popover=""
    data-popper-placement="top"
  >
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
</o-popover>

<o-popover placement="top">
  <o-button>Popover Top</o-button>
  <div
    slot="content"
    id="popover-default"
    role="tooltip"
    class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
    data-popover=""
    data-popper-placement="top"
  >
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
</o-popover>

<o-popover placement="left">
  <o-button>Popover Left</o-button>
  <div
    slot="content"
    id="popover-default"
    role="tooltip"
    class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
    data-popover=""
    data-popper-placement="top"
  >
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
</o-popover>

<o-popover placement="bottom">
  <o-button>Popover Button</o-button>
  <div
    slot="content"
    id="popover-default"
    role="tooltip"
    class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
    data-popover=""
    data-popper-placement="top"
  >
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
</o-popover>`}
          >
            <o-popover placement="right">
              <o-button>Popover Right</o-button>
              <div
                slot="content"
                id="popover-default"
                role="tooltip"
                class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
                data-popover=""
                data-popper-placement="top"
              >
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
              </div>
            </o-popover>

            <o-popover placement="top">
              <o-button>Popover Top</o-button>
              <div
                slot="content"
                id="popover-default"
                role="tooltip"
                class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
                data-popover=""
                data-popper-placement="top"
              >
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
              </div>
            </o-popover>

            <o-popover placement="left">
              <o-button>Popover Left</o-button>
              <div
                slot="content"
                id="popover-default"
                role="tooltip"
                class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
                data-popover=""
                data-popper-placement="top"
              >
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
              </div>
            </o-popover>

            <o-popover placement="bottom">
              <o-button>Popover Bottom</o-button>
              <div
                slot="content"
                id="popover-default"
                role="tooltip"
                class="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 "
                data-popover=""
                data-popper-placement="top"
              >
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
              </div>
            </o-popover>
          </code-showcase>
        </section>
      </div>
    )
  }
}
