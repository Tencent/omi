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

  columnCount = 2

  installed() {
    window.addEventListener('resize', this.onResize)
  }

  uninstall() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.columnCount = window.innerWidth < 768 ? 1 : 2
    this.updateSelf()
  }

  render(props) {
    return (
      <div
        class={props.class}
        style={Object.assign(
          {
            columnCount: this.columnCount,
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
