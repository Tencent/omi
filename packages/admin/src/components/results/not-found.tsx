import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

interface Props { }

const tagName = 'not-found'
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
      <div class={tw`text-center relative`} style={{ top: 'calc(50vh - 16em)' }}>
        <div >
          <img class={tw`w-72 inline-block`} src="https://tdesign.gtimg.com/pro-template/result-page/404.png"></img>

        </div>
        <p class={tw`text-gray-500`}>抱歉，您访问的页面不存在</p>
        <p class={tw` text-gray-400 py-4 text-xs`}>感谢腾讯云sissiwu, lunanlu提供设计支持</p>
      </div>
    )
  }
}
