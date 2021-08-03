import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../../docs/admin-docs'

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

  render(props: Props) {
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
        </div>

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
      </div>
    )
  }
}
