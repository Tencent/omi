import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('lightbox-page')
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
            An alert displays a short, important message in a way that attracts the user's attention without
            interrupting the user's task.
          </p>

          <code-showcase
            code={`<o-lightbox>
  <div class="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
    <div class="flex h-full w-full flex-1 flex-col">
      <a
        href="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
        target="_blank"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
          alt="Table Full of Spices"
          class="mb-5 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
        />
      </a>

      <a
        href="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
        target="_blank"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
          alt="Coconut with Strawberries"
          class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
        />
      </a>
    </div>
    <div class="flex h-full w-full flex-1 flex-col">
      <a
        href="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
        target="_blank"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
          alt="Dark Roast Iced Coffee"
          class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
        />
      </a>
    </div>
  </div>
</o-lightbox>`}
          >
            <o-lightbox>
              <div class="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                <div class="flex h-full w-full flex-1 flex-col">
                  <a href="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp" target="_blank">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                      alt="Table Full of Spices"
                      class="mb-5 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                    />
                  </a>

                  <a href="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp" target="_blank">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
                      alt="Coconut with Strawberries"
                      class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                    />
                  </a>
                </div>
                <div class="flex h-full w-full flex-1 flex-col">
                  <a href="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp" target="_blank">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
                      alt="Dark Roast Iced Coffee"
                      class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                    />
                  </a>
                </div>
              </div>
            </o-lightbox>
          </code-showcase>
        </section>
      </div>
    )
  }
}
