import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'


interface Props {

}

const tagName = 'admin-main-warning'
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
      <div class={tw``}>
        Admin Warning Page
      </div >
    )
  }
}



