import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'
import '../icon'

interface Props {

}

interface Data {

}

@tag('m-badge')
export default class Badge extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    dot: Boolean,
    content: String
  }


  installed() {

  }

  uninstall() {

  }


  render(props) {
    if (props.content) {
      return <div {...extractClass(props, 'm-badge')}>
        {props.children ? props.children[0] : <slot></slot>}
        <span class="badge">{props.content}</span>
      </div>

    }
    if (props.dot) {
      return (
        <div class="m-badge">
          {props.children ? props.children[0] : <slot></slot>}
          <span class="circle badge"></span>
        </div>
      )
    }
    return <div class="m-badge">{props.children ? props.children[0] : <slot></slot>}</div>
  }
}

