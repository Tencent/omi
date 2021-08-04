import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import {
  showLoading,
  hideLoading,
  showSuccess,
  hideSuccess,
  showWarning,
  hideWarning
} from '@omiu/toast'
import '../docs/admin-docs'
import toastMd1 from './toast1.md?raw'
import toastMd2 from './toast2.md?raw'
import toastMd3 from './toast3.md?raw'
import './code-demo'
import './code-demo/container'

interface Props {}

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

  installed() {}

  render() {
    const gridItem = tw`px-2 w-full md:w-6/12`

    return (
      <code-demo-container>
        <code-demo
          class={tw``}
          title="基本"
          describe="最简单的 Loading"
          code={toastMd1}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button
              size="mini"
              onclick={(e) => {
                showLoading()
                setTimeout(() => {
                  hideLoading()
                }, 2000)
              }}
            >
              显示 Loading 提示
            </o-button>
          </div>
        </code-demo>

        <code-demo
          title="不同尺寸"
          describe="支持传入 size 控制大小"
          code={toastMd2}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button
              size="mini"
              onclick={(e) => {
                showSuccess('支付成功')
                setTimeout(() => {
                  hideSuccess()
                }, 2000)
              }}
            >
              显示 Success 提示
            </o-button>
          </div>
        </code-demo>

        <code-demo
          title="不同颜色"
          describe="支持传入 color 控制颜色"
          code={toastMd3}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button
              size="mini"
              onclick={(e) => {
                showWarning('支付失败')
                setTimeout(() => {
                  hideWarning()
                }, 2000)
              }}
            >
              显示 Warning 提示
            </o-button>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}
