
import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

interface Props {
  number: number
  unit: string
  describe: string
}

const tagName = 'simple-card'
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


  render(props) {
    return (

      <div class={tw`pl-4 pt-6 pr-4 bg-white shadow rounded`} style="height: 144px;">
        <div class={tw`flex justify-between mb-6`}>
          <span >
            <span class={tw`text-sm text-gray-600`}>{props.describe}</span>
          </span>
          <span >
            <slot name="right-top"></slot>
          </span>
        </div>

        <div class={tw`flex justify-between`}>

          <div class={tw`whitespace-nowrap`}>
            <span class={tw`text-3xl mx-0.5 `}>{props.number}</span>
            <span class={tw`text-sm text-gray-600`}>{props.unit}</span>
          </div>
          <div>
            <slot name="right-bottom"></slot>
          </div>
        </div>

      </div>
    )
  }
}

