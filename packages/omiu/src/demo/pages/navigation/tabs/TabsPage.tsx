import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import TabsBasicExample from './examples/TabsBasicExample'
import TabsFill from './examples/TabsFill'
import TabsJustify from './examples/TabsJustify'
import TabsVertical from './examples/TabsVertical'
import TabsWithButtons from './examples/TabsWithButtons'
import TabsColors from './examples/TabsColors'

import TabsBasicExampleCode from './examples/TabsBasicExample?raw'
import TabsFillCode from './examples/TabsFill?raw'
import TabsJustifyCode from './examples/TabsJustify?raw'
import TabsVerticalCode from './examples/TabsVertical?raw'
import TabsWithButtonsCode from './examples/TabsWithButtons?raw'
import TabsColorsCode from './examples/TabsColors?raw'

@tag('tabs-page')
export default class TabsPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 mx-5">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic example
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Basic tabs are divided into 2 main sections - <code>o-tabs</code> (containing <code>TEItem</code>'s) and{' '}
            <code>TETabsContent</code> (containing <code>TETabsPane</code>'s).
          </p>
          <p className="mb-3">
            Use <code>useState</code> to connect <code>o-tabs</code> with <code>TETabsContent</code>.
          </p>

          <code-showcase code={TabsBasicExampleCode}>
            <TabsBasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Fill --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="fill" data-te-spy-item>
            Fill
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            To proportionately fill all available space with your <code>o-tabs-item</code>'s, use <code>fill</code>{' '}
            property. Notice that all horizontal space is occupied, but not every tabs item has the same width.
          </p>
          <code-showcase code={TabsFillCode}>
            <TabsFill.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Fill --> */}

        {/* <!-- Section: Justify --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="justify" data-te-spy-item>
            Justify
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            For equal-width elements, use <code>justify</code> property. All horizontal space will be occupied by{' '}
            <code>o-tabs-item</code>'s, but unlike the fill property above, every <code>o-tabs-item</code> will be the
            same width.
          </p>
          <code-showcase code={TabsJustifyCode}>
            {' '}
            <TabsJustify.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Justify --> */}

        {/* <!-- Section: Vertical --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="vertical" data-te-spy-item>
            Vertical
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Make vertical tabs by using <code>vertical</code> property. Add also classes <code>flex items-start</code>{' '}
            to the wrapper <code>div</code>.
          </p>
          <code-showcase code={TabsVerticalCode}>
            <TabsVertical.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Vertical --> */}

        {/* <!-- Section: With buttons --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="buttons" data-te-spy-item>
            Pills with buttons
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            You can also use
            <a href="https://tailwind-elements.com/docs/react/components/buttons/" className="text-primary-700">
              buttons
            </a>
            instead of tabs to change the visible content.
          </p>
          <code-showcase code={TabsWithButtonsCode}>
            <TabsWithButtons.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: With buttons --> */}

        {/* <!-- Section: colors --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="color" data-te-spy-item>
            Color options
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use prop <code>color</code> to change the color of the tabs (e.g.
            <code>o-tabs-item color="primary"</code>).
          </p>
          <code-showcase code={TabsColorsCode}>
            <TabsColors.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: colors --> */}
      </div>
    )
  }
}
