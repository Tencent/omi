import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('search-with-label-example')
export default class SearchWithLabelExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex justify-center">
        <div className="relative mb-3 md:w-96 pt-5 mx-auto">
          <Input.tagName type="search" id="exampleFormControlInput1" label="Type query"></Input.tagName>
        </div>
      </div>
    )
  }
}
