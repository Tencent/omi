import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import '../button/index'
import './card'

@tag('card-page')
export class ButtonPage extends Component {
  static css = [
    tailwind,
    `
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  render() {
    return (
      <div className="!max-w-full mb-48">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Basic example
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            The Card component is a versatile and reusable UI component that displays content within a card-like
            container. It can be used to display images, text, and other types of content in a visually appealing and
            organized manner.
          </p>

          <code-showcase
            code={`<o-card
  className="max-w-[22rem] mx-auto"
  title="Card title"
  footerInfo="Last updated 3 mins ago"
  img="https://omi.cdn-go.cn/s/latest/omiu/nature1.png">
  <p slot="content">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
  <div slot="footer">
    <o-button class="mr-5">Home</o-button>
    <o-button>About</o-button>
  </div>
</o-card>`}
          >
            <o-card
              className="max-w-[22rem] mx-auto"
              title="Card title"
              footerInfo="Last updated 3 mins ago"
              img="https://omi.cdn-go.cn/s/latest/omiu/nature1.png"
            >
              <p slot="body">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <div slot="footer">
                <o-button class="mr-3">Home</o-button>
                <o-button>About</o-button>
              </div>
            </o-card>
          </code-showcase>
        </section>
      </div>
    )
  }
}
