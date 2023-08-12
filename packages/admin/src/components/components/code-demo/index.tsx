import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../../docs/admin-docs'
import '@omiu/collapse'
import '@omiu/icon/keyboard-arrow-down'
import '@omiu/icon/keyboard-arrow-up'
import '@omiu/icon/code'
import '@omiu/icon/file-copy'
import '@omiu/message'
import '@omiu/toggle-icon'
import copy from 'copy-to-clipboard'
interface Props {
  title: string
  describe: string
  code: string
  url?: string
  class?: string
  style?: string | object
}

const tagName = 'code-demo'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target]
  openedA = false
  isOn = false

  message(message: string) {
    const msgEl = document.createElement('o-message')
    msgEl.setAttribute('type', 'success')
    msgEl.setAttribute('center', 'center')
    msgEl.setAttribute('message', message)
    document.body.appendChild(msgEl)
  }

  copy(code: string) {
    copy(code)
    this.message('Copied!')
  }

  render(props) {
    return (
      <div
        class={tw`w-full border-1 mb-4 border-gray-300 dark:(border-gray-600) rounded overflow-hidden bg-gray-50 ${props.class}`}
        style={Object.assign({ breakInside: 'avoid' }, props.style)}
      >
        <div>
          <slot name="demo"></slot>
        </div>

        <div
          class={tw`border-t-1 border-gray-200 dark:(border-gray-600) border-solid px-2 text-sm mb-3`}
        >
          <h3
            class={tw`font-bold relative -top-2.5 inline-block px-2 bg-gray-50`}
          >
            {props.title}
          </h3>
          <p  class={tw`px-2`}>{props.describe}</p>
          <div className={tw`text-right`}>
            <span class={tw`mt-3 mb-2`}>
              {props.url ? <a href={props.url}>
                <o-icon-code className={tw`w-6 h-6 mr-2`}>
                </o-icon-code>
              </a> : null}
              {props.code ? (<>
                <o-icon-file-copy className={tw`w-3 h-3 mr-2 relative -top-1 cursor-pointer`} onClick={() => {
                  this.copy(props.code.replace('```jsx', '').replace('```', '').trim())
                }} />
                <o-toggle-icon is-on={this.isOn} icons={['keyboard-arrow-down', 'keyboard-arrow-up']}
                  className={tw`w-6 h-6 mr-2`}
                  onChange={() => {
                    this.openedA = !this.openedA
                    this.isOn = !this.isOn
                    this.update()
                  }}
                ></o-toggle-icon>
              </>) : null}
            </span>
          </div>
        </div>
        <o-collapse
            opened={this.openedA}
            className={tw``}
          >
            <div>
              <admin-docs
                css={`
              .docs {
                padding: 0 !important;
              }
            `}
                mdContent={props.code}
              ></admin-docs>
            </div>
          </o-collapse>
      </div>

    )
  }
}


