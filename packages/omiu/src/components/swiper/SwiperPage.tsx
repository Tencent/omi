import '@/site/code-showcase'

import { tag, Component, bind } from 'omi'
import { tailwind } from '@/tailwind'

import './swiper'

@tag('swiper-page')
export class SwiperPage extends Component {
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
          <p className="mb-3">The Most Modern Mobile Touch Slider.</p>

          <code-showcase
            code={`<o-swiper onChange={this.onChange}>
  <div class="relative w-full">
    <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="block w-full" alt="..." />
    <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      <h5 class="text-xl">First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </div>
  </div>

  <div class="relative w-full">
    <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" class="block w-full" alt="..." />
    <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      <h5 class="text-xl">Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
    </div>
  </div>

  <div class="relative w-full">
    <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" class="block w-full" alt="..." />
    <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      <h5 class="text-xl">Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
    </div>
  </div>
</o-swiper>`}
          >
            <o-swiper onChange={this.onChange}>
              <div class="relative w-full">
                <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="block w-full" alt="..." />
                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 class="text-xl">First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>

              <div class="relative w-full">
                <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" class="block w-full" alt="..." />
                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 class="text-xl">Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>

              <div class="relative w-full">
                <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" class="block w-full" alt="..." />
                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 class="text-xl">Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </o-swiper>
          </code-showcase>
        </section>
      </div>
    )
  }
}
