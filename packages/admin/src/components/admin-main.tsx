import { WeElement, h, tag } from 'omi'
import { create, cssomSheet } from 'twind'
const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })

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



