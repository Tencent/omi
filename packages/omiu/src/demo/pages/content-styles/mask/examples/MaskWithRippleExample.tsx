import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('mask-with-ripple-example')
export default class MaskWithRippleExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center space-x-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Ripple.tagName>
              <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-white opacity-50"></div>
              </div>
            </Ripple.tagName>
          </div>
          <div>
            <Ripple.tagName>
              <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                <img src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg" className="w-full" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black opacity-50"></div>
              </div>
            </Ripple.tagName>
          </div>
        </div>
      </div>
    )
  }
}
