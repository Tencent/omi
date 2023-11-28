import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('rating-page')
export class Page extends Component {
  static css = [
    tailwind,
    `
  o-button{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  heartIcon =
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'

  render() {
    return (
      <div className="container my-12 !max-w-full mb-48">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Basic example
          </h2>

          <code-showcase code={``}>
            <o-rating max={5} labels={['Bad', 'Poor', 'OK', 'Good', 'Excellent']} value={0}></o-rating>
            <o-rating max={5} value={1}></o-rating>
            <o-rating max={5} value={2}></o-rating>
            <o-rating max={5} value={3}></o-rating>
            <o-rating max={5} value={4}></o-rating>
            <o-rating max={5} value={5}></o-rating>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Icon
          </h2>

          <code-showcase code={``}>
            <o-rating
              max={5}
              labels={['Bad', 'Poor', 'OK', 'Good', 'Excellent']}
              value={0}
              icon={this.heartIcon}
            ></o-rating>
            <o-rating max={5} value={1} icon={this.heartIcon}></o-rating>
            <o-rating max={5} value={2} icon={this.heartIcon}></o-rating>
            <o-rating max={5} value={3} icon={this.heartIcon}></o-rating>
            <o-rating max={5} value={4} icon={this.heartIcon}></o-rating>
            <o-rating max={5} value={5} icon={this.heartIcon}></o-rating>
          </code-showcase>
        </section>
      </div>
    )
  }
}
