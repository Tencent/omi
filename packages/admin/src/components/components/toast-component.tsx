import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import { showLoading, hideLoading, showSuccess, hideSuccess, showWarning, hideWarning } from '@omiu/toast'
import '../docs/admin-docs'
import toastMd1 from './toast1.md?raw'
import toastMd2 from './toast2.md?raw'
import toastMd3 from './toast3.md?raw'

interface Props { }

const tagName = 'toast-component'
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
    console.error(1)
    return <div class={tw`px-4`}>

      <div>
        <div class={tw`border-1 my-4 border-gray-300 rounded`} style="width:600px">
          <div class={tw`px-5 py-5`}>
            <o-button size="mini" onclick={e => {
              showLoading()
              setTimeout(() => {
                hideLoading()
              }, 2000)
            }}>显示 Loading 提示</o-button>

          </div>

          <admin-docs css={`.docs{padding:0 !important;}`} mdContent={toastMd1}></admin-docs>
        </div>

        <div class={tw`border-1  my-4 border-gray-300 rounded`} style="width:600px">
          <div class={tw`px-5 py-5`}>
            <o-button size="mini" onclick={e => {
              showSuccess('支付成功')
              setTimeout(() => {
                hideSuccess()
              }, 2000)
            }}>显示 Success 提示</o-button>
          </div>
          <admin-docs css={`.docs{padding:0 !important;}`} mdContent={toastMd2}></admin-docs>
        </div>


        <div class={tw`border-1 my-4 border-gray-300 rounded`} style="width:600px">
          <div class={tw`px-5 py-5`}>
            <o-button size="mini" onclick={e => {
              showWarning('支付失败')
              setTimeout(() => {
                hideWarning()
              }, 2000)
            }}>显示 Warning 提示</o-button>
          </div>
          <admin-docs css={`.docs{padding:0 !important;}`} mdContent={toastMd3}></admin-docs>
        </div>

      </div>
    </div>
  }
}
