import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

import HoverEffectBasicExample from './examples/HoverEffectBasicExample'

import HoverEffectBasicExampleCode from './examples/HoverEffectBasicExample?raw'

@tag('hover-effect-page')
export default class HoverEffectPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Basic example</h2>
        <code-showcase code={HoverEffectBasicExampleCode}>
          <HoverEffectBasicExample.tagName />
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Color</h2>
        <code-showcase
          code={`<div>
  <div className="grid grid-cols-3 gap-4">
    <div className="mb-4">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
      </div>
    </div>
    <div className="mb-4">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-purple-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
      </div>
    </div>
    <div className="mb-4">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-green-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-4">
    <div className="mb-4 md:mb-0">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
      </div>
    </div>
    <div className="mb-4 md:mb-0">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
      </div>
    </div>
    <div className="mb-4 md:mb-0">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
      </div>
    </div>
  </div>
</div>`}
        >
          <div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-purple-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-green-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4 md:mb-0">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Gradient</h2>
        <code-showcase
          code={`<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
</div>`}
        >
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Zoom</h2>
        <code-showcase
          code={`<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img
    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
    className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre"
  />
</div>`}
        >
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Shadow</h2>
        <code-showcase
          code={`<img
  src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
  className="max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
  alt="Louvre"
/>`}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
            alt="Louvre"
          />
        </code-showcase>
      </div>
    )
  }
}
