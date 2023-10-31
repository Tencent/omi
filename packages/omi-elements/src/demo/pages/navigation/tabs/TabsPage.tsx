import React from 'react'
import TabsBasicExample from './examples/TabsBasicExample'
import TabsFill from './examples/TabsFill'
import TabsJustify from './examples/TabsJustify'
import TabsVertical from './examples/TabsVertical'
import TabsWithButtons from './examples/TabsWithButtons'
import TabsColors from './examples/TabsColors'

const TabsPage = () => {
  return (
    <div className="container my-12 !max-w-full">
      {/* <!-- Section: Basic example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
          Basic example
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Basic tabs are divided into 2 main sections - <code>TETabs</code> (containing <code>TEItem</code>'s) and{' '}
          <code>TETabsContent</code> (containing <code>TETabsPane</code>'s).
        </p>
        <p className="mb-3">
          Use <code>useState</code> to connect <code>TETabs</code> with <code>TETabsContent</code>.
        </p>
        <TabsBasicExample />
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
          To proportionately fill all available space with your <code>TETabsItem</code>'s, use <code>fill</code>{' '}
          property. Notice that all horizontal space is occupied, but not every tabs item has the same width.
        </p>
        <TabsFill />
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
          <code>TETabsItem</code>'s, but unlike the fill property above, every <code>TETabsItem</code> will be the same
          width.
        </p>
        <TabsJustify />
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
          Make vertical tabs by using <code>vertical</code> property. Add also classes <code>flex items-start</code> to
          the wrapper <code>div</code>.
        </p>
        <TabsVertical />
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
        <TabsWithButtons />
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
          <code>TETabsItem color="primary"</code>).
        </p>
        <TabsColors />
      </section>
      {/* <!-- Section: colors --> */}
    </div>
  )
}

export default TabsPage
