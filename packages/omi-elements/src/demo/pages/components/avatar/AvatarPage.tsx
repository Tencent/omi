import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('avatar-page')
export default class AvatarPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Basic examples</h2>
        <code-showcase
          code={`<img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" className="w-32 rounded-full" alt="Avatar" />
`}
        >
          <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" className="w-32 rounded-full" alt="Avatar" />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">With shadow</h2>
        <code-showcase
          code={`<img
  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
  className="w-32 rounded-full shadow-lg"
  alt="Avatar"
/>`}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="w-32 rounded-full shadow-lg"
            alt="Avatar"
          />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Square</h2>
        <code-showcase
          code={`<img src="https://tecdn.b-cdn.net/img/new/avatars/1.webp" className="w-32 rounded-lg shadow-lg" alt="Avatar" />
`}
        >
          {' '}
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
            className="w-32 rounded-lg shadow-lg"
            alt="Avatar"
          />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">With content</h2>
        <code-showcase
          code={` <div className="text-center">
    <img
      src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
      className="mx-auto mb-4 w-32 rounded-lg"
      alt="Avatar"
    />
    <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
    <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
  </div>
</div>`}
        >
          <div className="text-center">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
              className="mx-auto mb-4 w-32 rounded-lg"
              alt="Avatar"
            />
            <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
            <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
          </div>
        </code-showcase>
      </div>
    )
  }
}
