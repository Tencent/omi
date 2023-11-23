import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './chip'

@tag('chip-page')
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
            Chips are compact elements that represent an input, attribute, or action. The most common use will be used
            in some form of input, in fields, such as an entity or different attribute. You can add an optional close
            button so the user can easily close it or dismiss selected element.
          </p>

          <code-showcase
            code={`<div class="flex justify-center">
  <o-chip tag="John Doe"></o-chip>
  <o-chip
    size="small"
    tag="John Doe"
    img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
    closable
  ></o-chip>
  <o-chip
    size="medium"
    tag="John Doe"
    img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
    closable
  ></o-chip>
  <o-chip
    size="large"
    tag="John Doe"
    img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
    closable
  ></o-chip>
</div>`}
          >
            <div class="flex justify-center">
              <o-chip tag="John Doe"></o-chip>
              <o-chip
                size="small"
                tag="John Doe"
                img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                closable
              ></o-chip>
              <o-chip
                size="medium"
                tag="John Doe"
                img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                closable
              ></o-chip>
              <o-chip
                size="large"
                tag="John Doe"
                img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                closable
              ></o-chip>
            </div>
          </code-showcase>
        </section>

        {/* <!-- Section: Outline --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="outline" data-te-spy-item>
            Outline
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            Use attribute <code>outline</code> to change the style of the chip.
          </p>

          <code-showcase
            code={`<o-chip outline="primary" tag="John Doe" closable></o-chip>
<o-chip outline="secondary" tag="John Doe" closable></o-chip>
<o-chip outline="success" tag="John Doe" closable></o-chip>
<o-chip outline="danger" tag="John Doe" closable></o-chip>
<o-chip outline="warning" tag="John Doe" closable></o-chip>
<o-chip outline="info" tag="John Doe" closable></o-chip>
<o-chip outline="light" tag="John" closable></o-chip>
<o-chip outline="dark" tag="John Doe" closable></o-chip>`}
          >
            <o-chip outline="primary" tag="John Doe" closable></o-chip>
            <o-chip outline="secondary" tag="John Doe" closable></o-chip>
            <o-chip outline="success" tag="John Doe" closable></o-chip>
            <o-chip outline="danger" tag="John Doe" closable></o-chip>
            <o-chip outline="warning" tag="John Doe" closable></o-chip>
            <o-chip outline="info" tag="John Doe" closable></o-chip>
            <o-chip outline="light" tag="John" closable></o-chip>
            <o-chip outline="dark" tag="John Doe" closable></o-chip>
          </code-showcase>
        </section>
      </div>
    )
  }
}
