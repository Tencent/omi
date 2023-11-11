import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import CardBasicExample from './examples/CardBasicExample'
import CardWithImageExample from './examples/CardWithImageExample'
import CardWithRippleExample from './examples/CardWithRippleExample'
import CardWithHeaderAndFooterExample from './examples/CardWithHeaderAndFooterExample'

import CardBasicExampleCode from './examples/CardBasicExample?raw'
import CardWithImageExampleCode from './examples/CardWithImageExample?raw'
import CardWithRippleExampleCode from './examples/CardWithRippleExample?raw'
import CardWithHeaderAndFooterExampleCode from './examples/CardWithHeaderAndFooterExample?raw'

@tag('cards-page')
export default class CardsPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Simple card</h2>
        <code-showcase code={CardBasicExampleCode}>
          <CardBasicExample.tagName />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Card with image</h2>
        <code-showcase code={CardWithImageExampleCode}>
          <CardWithImageExample.tagName />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">With ripple effect</h2>
        <code-showcase code={CardWithRippleExampleCode}>
          <CardWithRippleExample.tagName />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Card with header and footer</h2>
        <code-showcase code={CardWithHeaderAndFooterExampleCode}>
          <CardWithHeaderAndFooterExample.tagName />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Horizontal</h2>
        <code-showcase
          code={`<div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
  <img
    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
    alt=""
  />
  <div className="flex flex-col justify-start p-6">
    <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">Card title</h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      This is a wider card with supporting text below as a natural lead-in to additional content. This content
      is a little bit longer.
    </p>
    <p className="text-xs text-neutral-500 dark:text-neutral-300">Last updated 3 mins ago</p>
  </div>
</div>`}
        >
          <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">Card title</h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">Last updated 3 mins ago</p>
            </div>
          </div>
        </code-showcase>
      </div>
    )
  }
}
