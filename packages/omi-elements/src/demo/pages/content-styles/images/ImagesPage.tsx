import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('images-page')
export default class ImagesPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mt-5 mb-0 text-3xl font-semibold leading-normal">Responsive images</h2>
        <code-showcase
          code={`<img src="https://tecdn.b-cdn.net/img/new/slides/041.jpg" className="h-auto max-w-full" alt="..." />`}
        >
          <img src="https://tecdn.b-cdn.net/img/new/slides/041.jpg" className="h-auto max-w-full" alt="..." />
        </code-showcase>

        <hr className="my-5"></hr>
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Thumbnails</h2>
        <code-showcase
          code={`<img
  src="https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"
  className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
  alt="..."
/>`}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"
            className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
            alt="..."
          />
        </code-showcase>

        <hr className="my-5"></hr>
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Shadows</h2>
        <code-showcase
          code={`<img
  src="https://tecdn.b-cdn.net/img/new/standard/city/042.jpg"
  className="h-auto max-w-sm shadow-lg dark:shadow-black/30"
  alt=""
/>`}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/042.jpg"
            className="h-auto max-w-sm shadow-lg dark:shadow-black/30"
            alt=""
          />
        </code-showcase>

        <hr className="my-5"></hr>
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Shadow on hover</h2>
        <code-showcase
          code={`<img
  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
  className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
  alt=""
/>`}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
        </code-showcase>

        <hr className="my-5"></hr>
        <h2 className="mt-5 mb-0 text-3xl font-semibold leading-normal">Shapes</h2>
        <code-showcase
          code={`<div className="grid grid-cols-3 items-center gap-4">
  <div className="mb-4">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/047.jpg"
      className="h-auto max-w-full rounded-lg"
      alt=""
    />
  </div>
  <div className="mb-4">
    <img
      src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
      className="h-auto max-w-full rounded-full"
      alt=""
    />
  </div>
  <div className="mb-4">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/044.jpg"
      className="h-auto max-w-full rounded-full"
      alt=""
    />
  </div>
</div>`}
        >
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="mb-4">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/047.jpg"
                className="h-auto max-w-full rounded-lg"
                alt=""
              />
            </div>
            <div className="mb-4">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                className="h-auto max-w-full rounded-full"
                alt=""
              />
            </div>
            <div className="mb-4">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/044.jpg"
                className="h-auto max-w-full rounded-full"
                alt=""
              />
            </div>
          </div>
        </code-showcase>
      </div>
    )
  }
}
