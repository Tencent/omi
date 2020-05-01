import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '@omiu/transition'

interface Props {
  type?: 'success' | 'warning' | 'info' | 'error'
  message: string
  showClose: boolean
  center: boolean
  duration: number
}

@tag('o-message')
export default class Message extends WeElement<Props>{
  static css = css


  static defaultProps = {
    duration: 3000
  }


  static propTypes = {
    showClose: Boolean,
    type: String,
    message: String,
    center: Boolean,
    duration: Number
  }

  onAfterLeave = () => {
    this.parentElement.removeChild(this)
  }

  render(props) {

    return (
      <o-transition appear onafter-leave={this.onAfterLeave} leaving-time={props.duration} auto-remove name="fade">
        <div  {...extractClass(props, 'o-message', {
          ['o-message--' + props.type]: props.type,
          'is-closable': props.closable,
          'is-center': props.center
        })}
          style="top: 20px; z-index: 2000;">
          {/* <i class="o-message__icon o-icon-success"></i> */}
          <p class="o-message__content">{props.message}</p>
          {props.showClose && <i class="o-message__closeBtn o-icon-close"></i>}
        </div>
      </o-transition>
    )


  }
}
