import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import logo from '../../assets/logo.svg'
import '@omiu/avatar'
import '@omiu/icon/palette'
interface Props { }

const tagName = 'layout-header'
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

  store

  install() {
    import('@omiu/color-picker')
  }

  render() {
    return (
      <div class={tw`bg-gray-100 h-12 text-left border-b-1`}>
        <div class={tw`flex justify-between`}>
          <div class={tw`flex flex-row p-1 order-1`}>
            <img class={tw`w-8 m-1 ml-3`} src={logo} alt="logo" />
            <div>
              <h1 class={tw`ml-3 leading-10 text-gray-500`}>OMI ADMIN</h1>
            </div>
          </div>

          <div class={tw`flex flex-row order-3 p-1 mr-3`}>
            <div class={tw`mt-2 mr-5 cursor-pointer`} style={{ color: this.store.themeColor }}><o-icon-palette></o-icon-palette>主题</div>
            <o-color-picker save={false} preview={false} button={false} clear={false} width="300px"></o-color-picker>
            <o-avatar src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
          </div>
        </div>
      </div>
    )
  }
}
