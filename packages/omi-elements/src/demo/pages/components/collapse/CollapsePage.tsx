import { CollapseBasicExample } from './examples/CollapseBasicExample'
import { CollapseHorizontal } from './examples/CollapseHorizontal'
import { CollapseMultipleTargets } from './examples/CollapseMultipleTargets'
import { CollapseWithScroll } from './examples/CollapseWithScroll'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

import CollapseBasicExampleCode from './examples/CollapseBasicExample?raw'
import CollapseHorizontalCode from './examples/CollapseHorizontal?raw'
import CollapseMultipleTargetsCode from './examples/CollapseMultipleTargets?raw'
import CollapseWithScrollCode from './examples/CollapseWithScroll?raw'

@tag('collapse-page')
export class CollapsePage extends Component {
  static css = [tailwind]

  render() {
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
            The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers
            that are mapped to specific elements you toggle. Collapsing an element will animate the
            <code>height</code> or <code>width</code> from its current value to 0.
          </p>
          <code-showcase code={CollapseBasicExampleCode}>
            <CollapseBasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Horizontal --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-5 text-3xl font-semibold leading-normal" id="horizontal" data-te-spy-item>
            Horizontal
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            Use the <code>horizontal</code> attribute to transition the width instead of height and set a width on the
            immediate child element.
          </p>
          <code-showcase code={CollapseHorizontalCode}>
            <CollapseHorizontal.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Horizontal --> */}

        {/* <!-- Section: Multiple Targets --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-5 text-3xl font-semibold leading-normal" id="multiple_targets" data-te-spy-item>
            Multiple targets
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            You can show and hide multiple elements with one button or multiple buttons. You have to change state to
            render component with another value.
          </p>

          <code-showcase code={CollapseMultipleTargetsCode}>
            <CollapseMultipleTargets.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Multiple Targets --> */}

        {/* <!-- Section: With scroll --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="with_scroll" data-te-spy-item>
            With Scroll
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            Use prop <code>scroll</code> to see content with scrollbar.
          </p>

          <code-showcase code={CollapseWithScrollCode}>
            <CollapseWithScroll.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: With scroll --> */}
      </div>
    )
  }
}
