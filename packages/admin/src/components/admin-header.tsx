import { WeElement, h, tag } from 'omi'
import { create, cssomSheet } from 'twind'
const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })
import logo from '../logo.svg'
import '@omiu/avatar'

interface Props {

}

const tagName = 'admin-header'
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
      <div class={tw` bg-gray-100 h-12 px-4 text-left border-b-1`}>
        <div class={tw`flex justify-between`}>
          <div class={tw`flex flex-row p-1 order-1`}>
            <div >
              <img
                class={tw`w-8 m-1`}
                src={logo}
                alt="logo"
              />
            </div>
            <div><h1 class={tw`leading-10 text-gray-500`}>OMI ADMIN</h1></div>
          </div>
          <div class={tw`order-3  p-1`}> <o-avatar src="https://material-ui.com/static/images/avatar/1.jpg"></o-avatar></div>
        </div>
      </div>
    )
  }
}



