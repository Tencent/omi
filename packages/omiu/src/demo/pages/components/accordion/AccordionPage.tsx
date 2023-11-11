import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import AccordionBasicExample from './examples/AccordionBasicExample'
import AccordionFlush from './examples/AccordionFlush'
import AccordionAlwaysOpen from './examples/AccordionAlwaysOpen'

import AccordionBasicExampleCode from './examples/AccordionBasicExample?raw'
import AccordionFlushCode from './examples/AccordionFlush?raw'
import AccordionAlwaysOpenCode from './examples/AccordionAlwaysOpen?raw'

@tag('accordion-page')
export default class AccordionPage extends Component {
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
            The accordion uses the
            <a
              href="https://tailwind-elements.com/docs/react/components/collapse/"
              className="text-primary dark:text-primary-400"
            >
              collapse
            </a>
            functionality to make it fold and unfold.
          </p>

          <p className="mb-3">
            Accordions are useful when you need to organize lots of information in a vertically limited space. The
            headers let the user scan through main subjects of the content, and choose which of the subjects they would
            like to examine in depth by clicking on it. It's very useful for FAQs and complex contact forms.
          </p>
          <code-showcase code={AccordionBasicExampleCode}>
            <AccordionBasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Flush --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Flush
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Classes below enable you to display the accordion without the default background color, borders and rounded
            corners. It also makes it stretch full width of their parent container. It comes useful when you want to
            embed the accordion in a different component i.e. inside of a
            <a
              href="https://tailwind-elements.com/docs/react/components/cards/"
              className="text-primary dark:text-primary-400"
            >
              Card
            </a>
            or
            <a
              href="https://tailwind-elements.com/docs/react/components/modal/"
              className="text-primary dark:text-primary-400"
            >
              Modal
            </a>
            .
          </p>
          <code-showcase code={AccordionFlushCode}>
            <AccordionFlush.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Flush --> */}

        {/* <!-- Section: Always open --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Always open
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            By default, an accordion item will collapse when you click on another accordion item. If you want to change
            it, and keep the accordion items open until they are explicitly clicked on, look at the example below.
          </p>
          <code-showcase code={AccordionAlwaysOpenCode}>
            <AccordionAlwaysOpen.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Always open --> */}
      </div>
    )
  }
}
