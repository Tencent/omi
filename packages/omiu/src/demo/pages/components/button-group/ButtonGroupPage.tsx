import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import ButtonGroupBasicExample from './examples/ButtonGroupBasicExample'
import ButtonGroupActiveState from './examples/ButtonGroupActiveState'
import ButtonGroupOutlineStyles from './examples/ButtonGroupOutlineStyles'
import ButtonGroupToolbar from './examples/ButtonGroupToolbar'
import ButtonGroupSizing from './examples/ButtonGroupSizing'
import ButtonGroupColors from './examples/ButtonGroupColors'

import ButtonGroupBasicExampleCode from './examples/ButtonGroupBasicExample?raw'
import ButtonGroupActiveStateCode from './examples/ButtonGroupActiveState?raw'
import ButtonGroupOutlineStylesCode from './examples/ButtonGroupOutlineStyles?raw'
import ButtonGroupToolbarCode from './examples/ButtonGroupToolbar?raw'
import ButtonGroupSizingCode from './examples/ButtonGroupSizing?raw'
import ButtonGroupColorsCode from './examples/ButtonGroupColors?raw'

@tag('button-group-page')
export default class ButtonGroupPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic examples
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Radio buttons are a popular way to allow users to make a single selection & should be used instead of
            checkboxes if only one item can be selected from a list of options.
          </p>

          <p className="mb-3">Group a series of buttons together on a single line using the following code.</p>

          <code-showcase code={ButtonGroupBasicExampleCode}>
            <ButtonGroupBasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Active state --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="active" data-te-spy-item>
            Active state
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use <code>.active</code> class to check a radio button by default.
          </p>
          <code-showcase code={ButtonGroupActiveStateCode}>
            <ButtonGroupActiveState.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Active state --> */}

        {/* <!-- Section: Outline styles --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="outline" data-te-spy-item>
            Outline styles
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use the following button group styles to show the colors only for the border of the elements.
          </p>

          <code-showcase code={ButtonGroupOutlineStylesCode}>
            <ButtonGroupOutlineStyles.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Outline styles --> */}

        {/* <!-- Section: Toolbar --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="toolbar" data-te-spy-item>
            Toolbar
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            For more complex components, combine a set of button groups into a toolbar. Use utility classes to organize
            groups, buttons, and other elements.
          </p>

          <code-showcase code={ButtonGroupToolbarCode}>
            <ButtonGroupToolbar.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Toolbar --> */}

        {/* <!-- Section: Sizing --> */}
        {/* <!-- Title --> */}
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="sizing" data-te-spy-item>
          Sizing
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">Use these examples if you want to use smaller or larger buttons groups.</p>

        <code-showcase code={ButtonGroupSizingCode}>
          <ButtonGroupSizing.tagName />
        </code-showcase>

        {/* <!-- Section: Sizing --> */}

        {/* <!-- Section: Colors --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="colors" data-te-spy-item>
            Colors
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Choose from several predefined button group styles, each serving its own semantic purpose, with a few extras
            thrown in for more control.
          </p>
          <code-showcase code={ButtonGroupColorsCode}>
            <ButtonGroupColors.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Colors --> */}
      </div>
    )
  }
}
