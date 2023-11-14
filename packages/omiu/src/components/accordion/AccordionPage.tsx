import '@/site/code-showcase'

import { tag, Component, bind } from 'omi'
import { tailwind } from '@/tailwind'

import './accordion'

@tag('accordion-page')
export class ButtonPage extends Component {
  static css = [
    tailwind,
    `
  o-button{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  @bind
  onChange(evt: CustomEvent<string[]>) {
    console.log(evt.detail)
  }

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
            The Accordion component is a user interface element that displays a vertically stacked list of items, with
            each item's content being revealed or hidden by clicking on its header.
          </p>

          <code-showcase
            code={`<o-accordion actives={['b']} onChange={this.handleChange('panel1')}>
  <o-accordion-item name="a" title="title a">
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
      blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </div>
  </o-accordion-item>
  <o-accordion-item name="b" title="title b">
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
      blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </div>
  </o-accordion-item>
</o-accordion>`}
          >
            <o-accordion actives={['b']} onChange={this.onChange}>
              <o-accordion-item name="a" title="title a">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </div>
              </o-accordion-item>
              <o-accordion-item name="b" title="title b">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </div>
              </o-accordion-item>
            </o-accordion>
          </code-showcase>
        </section>
      </div>
    )
  }
}
