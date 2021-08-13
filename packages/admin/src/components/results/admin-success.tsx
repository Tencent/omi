import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'


import '@omiu/icon/check-circle-sharp'
interface Props { }

const tagName = 'admin-success'
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
          <div>
            <o-icon-check-circle-sharp class={tw`text-green-500 text-6xl`} ></o-icon-check-circle-sharp>
          </div>
          <p class={tw`text-gray-500`}>恭喜你，提交成功</p>
          <p class={tw` text-gray-400 py-4 text-sm`}>3个工作日内会进行审核，请注意查收短信</p>
        </div>
      </div>
    )
  }
}
