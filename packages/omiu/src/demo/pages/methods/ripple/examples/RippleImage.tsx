import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('ripple-image')
export default class RippleImage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex flex-wrap justify-center">
        <Ripple.tagName>
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/043.jpg"
            className="h-auto max-w-sm cursor-pointer"
            alt=""
          />
        </Ripple.tagName>
      </div>
    )
  }
}
