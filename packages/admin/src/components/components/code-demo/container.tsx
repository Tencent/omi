import { WeElement, h, tag } from 'omi'

interface Props {
  class?: string
  style?: string | object
}

const tagName = 'code-demo-container'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = null

  render(props: Props) {
    return (
      <div
        class={props.class}
        style={Object.assign(
          {
            columnCount: 2,
            columnGap: '1rem',
            padding: '1rem'
          },
          props.style
        )}
      >
        <slot></slot>
      </div>
    )
  }
}
