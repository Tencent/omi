import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('hover-effect-basic-example')
export default class HoverEffectBasicExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center space-x-2">
        <Ripple.tagName>
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
            <a>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </Ripple.tagName>
      </div>
    )
  }
}
