import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import BasicExample from './examples/BasicExample'
import StaticBackdrop from './examples/StaticBackdrop'
import ModalDialogScrollable from './examples/ModalDialogScrollable'

import SizesExample from './examples/SizesExample'
import PositionsExample from './examples/PositionsExample'
import FullscreenModal from './examples/FullscreenModal'

import BasicExampleCode from './examples/BasicExample?raw'
import StaticBackdropCode from './examples/StaticBackdrop?raw'
import ModalDialogScrollableCode from './examples/ModalDialogScrollable?raw'
import SizesExampleCode from './examples/SizesExample?raw'
import PositionsExampleCode from './examples/PositionsExample?raw'
import FullscreenModalCode from './examples/FullscreenModal?raw'

@tag('modal-page')
export default class ModalPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full w-auto">
        {/* <!-- Section: Simple notification --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic example
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">Click the button to launch the modal.</p>

          <code-showcase code={BasicExampleCode}>
            <BasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Simple notification --> */}

        <hr className="border-t my-20" />

        {/* <!-- Section: Static backdrop --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="static" data-te-spy-item>
            Static backdrop
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Add the <code>staticBackdrop</code> prop to the <code>TEModal</code> component so the modal doesn't close
            when you click outside of it.
          </p>

          <code-showcase code={StaticBackdropCode}>
            <StaticBackdrop.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Static backdrop --> */}

        <hr className="border-t my-20" />

        {/* <!-- Section: Modal dialog scrollable --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="dialog_scrollable" data-te-spy-item>
            Modal dialog scrollable
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Create a scrollable modal that allows scroll the modal body by adding
            <code>scrollable</code> prop to the <code>TEModal</code> component.
          </p>

          <code-showcase code={ModalDialogScrollableCode}>
            <ModalDialogScrollable.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Modal dialog scrollable --> */}

        <hr className="border-t my-20" />

        {/* <!-- Section: Sizes --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="sizes" data-te-spy-item>
            Sizes
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use four different modal sizing options starting from small to extra large. Width of these modals will
            remain responsive when browsing on smaller devices. Simply add <code>size="xl"</code>,{' '}
            <code>size="lg"</code> or <code>size="sm"</code> to the <code>TEModalDialog</code> component.
          </p>

          <code-showcase code={SizesExampleCode}>
            <SizesExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Sizes --> */}

        <hr className="border-t my-20" />

        {/* <!-- Section: Positions --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="positions" data-te-spy-item>
            Positions
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use four different modal positions. By setting the <code>position</code> prop to <code>top-right</code>,{' '}
            <code>top-left</code>, <code>bottom-right</code> or <code>bottom-left</code> on the{' '}
            <code>TEModalDialog</code> component you can change the position of the modal. If you want to change the
            show/hide animation, you can change them in the <code>theme</code> prop as shown below.
          </p>

          <code-showcase code={PositionsExampleCode}>
            <PositionsExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Positions --> */}

        <hr className="border-t my-20" />

        {/* <!-- Section: Fullscreen modal --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="fullscreen" data-te-spy-item>
            Fullscreen modal
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Set <code>size="fullscreen"</code> to <code>TEModalDialog</code> to create fullscreen modal.
          </p>

          <code-showcase code={FullscreenModalCode}>
            <FullscreenModal.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Fullscreen modal --> */}
      </div>
    )
  }
}
