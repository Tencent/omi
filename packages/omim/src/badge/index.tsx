import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'
import '../icon'
//@ts-ignore
import '../theme.ts'

interface Props {
  dot?: boolean,
  content?: string,
  x?: number,
  y?: number
}

interface Data {

}

@tag('m-badge')
export default class Badge extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    x: 0,
    y: 0
  }

  static propTypes = {
    dot: Boolean,
    content: String,
    x: Number,
    y: Number
  }


  installed() {

  }

  uninstall() {

  }


  render(props) {
    if (props.content) {
      return <div {...extractClass(props, 'm-badge')}>
        {props.children ? props.children[0] : <slot></slot>}
        <span class="badge" style={`right:${props.x * -1}px;top:${props.y}px;`}>{props.content}</span>
      </div>
    }

    if (props.dot) {
      return (
        <div class="m-badge">
          {props.children ? props.children[0] : <slot></slot>}
          <span style={`right:${props.x * -1}px;top:${props.y}px;`} class="circle badge"></span>
        </div>
      )
    }
    return <div class="m-badge">{props.children ? props.children[0] : <slot></slot>}</div>
  }
}

