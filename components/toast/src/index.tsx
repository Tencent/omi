import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  label?: string
  loading?: boolean
  done?: boolean
  duration: number
  autoClose: boolean
  show: boolean
}



@tag('o-toast')
export default class Button extends WeElement<Props>{
  static css = css

  static defaultProps = {
    duration: 2000,
    autoClose: false,
    show: true
  }

  static propTypes = {
    label: String,
    loading: Boolean,
    done: Boolean,
    duration: Number,
    autoClose: Boolean,
    show: Boolean
  }

  fadeEnter

  installed() {

    if (this.props.autoClose) {
      this.close()
    }

  }

  close() {
    setTimeout(() => {
      this.fadeEnter = true
      this.update()
    }, this.props.duration + 400)


    setTimeout(() => {
      this.parentNode.removeChild(this)
    }, this.props.duration + 400 + 400)
  }

  render(props) {

    if (!props.show) return
    return [
      <div class="o-mask-transparent"></div>,
      <div {...extractClass(props, 'o-toast', {
        ['o-toast--' + props.type]: props.type,
        'o-toast-fade-leave-active': this.fadeEnter
      })}>
        <slot />
        {props.loading && <i class="o-loading"></i>}
        {props.done && <i class="o-done"></i>}
        <p class="o-toast-content">{props.label}</p>
      </div>
    ]
  }
}
