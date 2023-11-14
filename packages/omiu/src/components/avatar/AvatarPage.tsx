import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './avatar'

@tag('avatar-page')
export class ButtonPage extends Component {
  static css = [
    tailwind,
    `
  o-button{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

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
            The Avatar component is a versatile and customizable UI element that displays a user's profile image, name,
            and description in an aesthetically pleasing manner.
          </p>

          <code-showcase
            code={`<o-avatar className="w-32" roundedFull src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"></o-avatar>
<o-avatar
  className="w-32"
  roundedFull
  shadow
  src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
></o-avatar>
<o-avatar rounded shadow className="w-32" src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"></o-avatar>
<o-avatar
  className="w-32 mx-auto mb-4"
  rounded
  src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
  name="John Doe"
  describe="Web designer"
></o-avatar>`}
          >
            <o-avatar className="w-32" roundedFull src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"></o-avatar>
            <o-avatar
              className="w-32"
              roundedFull
              shadow
              src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
            ></o-avatar>
            <o-avatar rounded shadow className="w-32" src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"></o-avatar>
            <o-avatar
              className="w-32 mx-auto mb-4"
              rounded
              src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
              name="John Doe"
              describe="Web designer"
            ></o-avatar>
          </code-showcase>
        </section>
      </div>
    )
  }
}
