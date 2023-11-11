import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('mask-with-ripple-and-link-example')
export default class MaskWithRippleAndLinkExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center space-x-2">
        <Ripple.tagName>
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="max-w-xs" />
            <a>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-200 bg-fixed opacity-60"></div>
            </a>
          </div>
        </Ripple.tagName>
      </div>
    )
  }
}
