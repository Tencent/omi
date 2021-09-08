import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'

// todo: move to common?
type OmiProps<T> = T & { children?: any }

interface Props {
  dot: boolean
  content: string
  x: number
  y: number
}

@tag('o-badge')
export default class Badge extends WeElement<Props> {
  static css = css.default

  static defaultProps = {
    dot: false,
    content: '',
    x: 0,
    y: 0
  }

  static propTypes = {
    dot: Boolean,
    content: String,
    x: Number,
    y: Number
  }

  installed() {}

  uninstall() {}

  render(props: OmiProps<Props>) {
    if (props.content) {
      return (
        <div {...extractClass(props, 'o-badge')}>
          {props.children ? props.children[0] : <slot></slot>}
          <span
            class="badge"
            style={`right:${props.x * -1}px;top:${props.y}px;`}
          >
            {props.content}
          </span>
        </div>
      )
    }

    if (props.dot) {
      return (
        <div class="o-badge">
          {props.children ? props.children[0] : <slot></slot>}
          <span
            style={`right:${props.x * -1}px;top:${props.y}px;`}
            class="circle badge"
          ></span>
        </div>
      )
    }
    return (
      <div class="o-badge">
        {props.children ? props.children[0] : <slot></slot>}
      </div>
    )
  }
}
