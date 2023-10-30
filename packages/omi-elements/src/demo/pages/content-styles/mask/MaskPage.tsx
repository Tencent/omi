import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

import MaskWithRippleExample from './examples/MaskWithRippleExample'
import MaskWithRippleAndLinkExample from './examples/MaskWithRippleAndLinkExample'

import MaskWithRippleExampleCode from './examples/MaskWithRippleExample?raw'
import MaskWithRippleAndLinkExampleCode from './examples/MaskWithRippleAndLinkExample?raw'

@tag('mask-page')
export default class MaskPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Basic example</h2>
        <code-showcase
          code={`<div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
</div>`}
        >
          <div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
            <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Color</h2>
        <code-showcase
          code={`<div>
  <div className="grid grid-cols-3 gap-4">
    <div className="mb-4">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-50"></div>
      </div>
    </div>
    <div className="mb-4">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-purple-700 bg-fixed opacity-50"></div>
      </div>
    </div>
    <div className="mb-4">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-green-700 bg-fixed opacity-50"></div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-4">
    <div className="mb-4 md:mb-0">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-50"></div>
      </div>
    </div>
    <div className="mb-4 md:mb-0">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-50"></div>
      </div>
    </div>
    <div className="mb-4 md:mb-0">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-300 bg-fixed opacity-50"></div>
      </div>
    </div>
  </div>
</div>`}
        >
          <div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-50"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-purple-700 bg-fixed opacity-50"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-green-700 bg-fixed opacity-50"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4 md:mb-0">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-50"></div>
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-50"></div>
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-300 bg-fixed opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Gradient</h2>
        <code-showcase
          code={`<div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70"></div>
</div>`}
        >
          <div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
            <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70"></div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Opacity</h2>
        <code-showcase
          code={`<div>
  <div className="grid grid-cols-3 gap-4">
    <div className="mb-4">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-10"></div>
      </div>
    </div>
    <div className="mb-4">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
      </div>
    </div>
    <div className="mb-4">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-4">
    <div className="mb-4 md:mb-0">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-70"></div>
      </div>
    </div>
    <div className="mb-4 md:mb-0">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-80"></div>
      </div>
    </div>
    <div className="mb-4 md:mb-0">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-90"></div>
      </div>
    </div>
  </div>
</div>`}
        >
          <div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-10"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4 md:mb-0">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-70"></div>
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-80"></div>
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-90"></div>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Content</h2>
        <code-showcase
          code={`<div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black opacity-50">
    <div className="flex h-full items-center justify-center">
      <p className="text-white opacity-100">Can you see me?</p>
    </div>
  </div>
</div>`}
        >
          <div className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
            <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black opacity-50">
              <div className="flex h-full items-center justify-center">
                <p className="text-white opacity-100">Can you see me?</p>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Ripple</h2>
        <code-showcase code={MaskWithRippleExampleCode}>
          <MaskWithRippleExample.tagName />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Link regular</h2>
        <code-showcase
          code={`<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
  <a>
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-900 bg-fixed opacity-60"></div>
  </a>
</div>`}
        >
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
            <a>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-900 bg-fixed opacity-60"></div>
            </a>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Link with ripple</h2>
        <code-showcase code={MaskWithRippleAndLinkExampleCode}>
          <MaskWithRippleAndLinkExample.tagName />
        </code-showcase>
      </div>
    )
  }
}
