import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
interface Props {

}

const tagName = 'admin-main'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  render() {
    return (
      <div class={tw`px-4 py-4`}>
        <slot></slot>
      </div >
    )
  }
}



