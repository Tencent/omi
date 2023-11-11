import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

@tag('headings-page')
export default class HeadingsPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <>
        <code-showcase
          code={`<div className="container my-12 !max-w-full">
  <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Tailwind Elements</h1>

  <hr className="my-5"></hr>
  <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Tailwind Elements</h2>

  <hr className="my-5"></hr>

  <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">Tailwind Elements</h3>

  <hr className="my-5"></hr>

  <h4 className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary">Tailwind Elements</h4>

  <hr className="my-5"></hr>

  <h5 className="mb-2 mt-0 text-xl font-medium leading-tight text-primary">Tailwind Elements</h5>

  <hr className="my-5"></hr>

  <h6 className="mb-2 mt-0 text-base font-medium leading-tight text-primary">Tailwind Elements</h6>
</div>`}
        >
          <div className="container my-12 !max-w-full">
            <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Tailwind Elements</h1>

            <hr className="my-5"></hr>
            <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Tailwind Elements</h2>

            <hr className="my-5"></hr>

            <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">Tailwind Elements</h3>

            <hr className="my-5"></hr>

            <h4 className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary">Tailwind Elements</h4>

            <hr className="my-5"></hr>

            <h5 className="mb-2 mt-0 text-xl font-medium leading-tight text-primary">Tailwind Elements</h5>

            <hr className="my-5"></hr>

            <h6 className="mb-2 mt-0 text-base font-medium leading-tight text-primary">Tailwind Elements</h6>
          </div>
        </code-showcase>
      </>
    )
  }
}
