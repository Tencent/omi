import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../../docs/admin-docs'
import '@omiu/collapse'
import '@omiu/icon/keyboard-arrow-down'
import '@omiu/icon/keyboard-arrow-up'
import '@omiu/icon/code'
import '@omiu/icon/file-copy'
import '@omiu/toggle-icon'
import * as copy from 'copy-to-clipboard';
interface Props {
  title: string
  describe: string
  code: string
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

  render(props) {
    return (
      <div
        class={tw`w-full border-1 mb-4 border-gray-300 rounded overflow-hidden ${props.class}`}
        style={Object.assign({ breakInside: 'avoid' }, props.style)}
      >
        <div>
          <slot name="demo"></slot>
        </div>

        <div
          class={tw`border-t-1 border-gray-200 border-solid px-2 text-sm mb-3`}
        >
          <h3
            class={tw`font-bold bg-white relative -top-2.5 inline-block px-2`}
          >
            {props.title}
          </h3>
          <p>{props.describe}</p>
          <o-collapse
            opened={this.openedA}
            class={tw`m-3 mb-0`}
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
          <span class={tw`float-right mt-3 mb-2`}>
            {props.url ? <o-icon-code class={tw`w-6 h-6 mr-2`}  >
              <a href={props.url}></a>
            </o-icon-code> : null}
            {props.code ? (<><o-icon-file-copy class={tw`w-6 h-6 mr-2`} onClick={() => {
              copy(props.code)
            }} />
              <o-toggle-icon icons={['keyboard-arrow-down', 'keyboard-arrow-up']} class={tw`w-6 h-6 mr-2`}
              onChange={() => {
                this.openedA = !this.openedA
                this.update()
              }}
              ></o-toggle-icon>
            </>) : null}
          </span>
        </div>
      </div >
    )
  }
}


