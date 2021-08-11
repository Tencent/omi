import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/icon/highlight-off'


import '@omiu/icon/highlight-off-two-tone'
interface Props { }

const tagName = 'admin-failure'
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
        <div class={tw`text-center relative`} style={{ top: 'calc(50vh - 10em)' }}>
          <div >
            <svg class={tw`text-red-500 w-16 inline-block`} fill="currentColor" viewBox="0 0 1024 1024"><path fill-opacity=".9" fill-rule="evenodd" d="M512 96c229.75 0 416 186.25 416 416S741.75 928 512 928 96 741.75 96 512 282.25 96 512 96zm135.764 234.98L511.973 466.726 376.235 330.98l-45.254 45.254 135.744 135.738L330.98 647.764l45.254 45.255 135.738-135.798 135.791 135.798 45.255-45.255-135.798-135.791 135.798-135.738-45.255-45.254z"></path></svg>
          </div>
          <p class={tw`text-gray-500`}>很遗憾，提交失败</p>
          <p class={tw` text-gray-400 py-4 text-sm`}>查看邮件确认失败的原因</p>
        </div>
      </div>
    )
  }
}
