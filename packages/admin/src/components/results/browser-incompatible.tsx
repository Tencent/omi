import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

interface Props { }

const tagName = 'browser-incompatible'
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
        <div class={tw`text-center relative`} style={{ top: 'calc(50vh - 16em)' }}>
          <div >
            <img class={tw`w-72 inline-block`} src="https://tdesign.gtimg.com/pro-template/result-page/browser-incompatible.png"></img>

          </div>
          <p class={tw`text-gray-500`}>抱歉，您正在使用的浏览器版本过低，无法打开当前网页</p>
          <p class={tw` text-gray-400 py-4 text-xs`}>感谢腾讯云sissiwu, lunanlu提供设计支持</p>
        </div>
      </div>
    )
  }
}
