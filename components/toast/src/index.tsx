import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '@omiu/loading'
import '@omiu/transition'

interface Props {
  content?: string
  loading?: boolean
  success?: boolean
  warning?: boolean
  duration: number
  autoHide: boolean
  show: boolean
}



@tag('o-toast')
export default class Toast extends WeElement<Props>{
  static css = css

  static defaultProps = {
    duration: 2000,
    autoHide: false,
    show: true,
    content: ''
  }

  static propTypes = {
    content: String,
    loading: Boolean,
    success: Boolean,
    warning: Boolean,
    duration: Number,
    autoHide: Boolean,
    show: Boolean
  }


  installed() {

    if (this.props.autoHide) {
      setTimeout(() => {
        this.hide()
      }, this.props.duration + 200)

      setTimeout(() => {
        this.parentNode.removeChild(this)
      }, this.props.duration + 200 * 2)
    }

  }

  hide() {

    this.setAttribute('show', false)
    setTimeout(() => {
      this.parentNode.removeChild(this)
    }, 200)
  }

  render(props) {
    return <o-transition appear={props.show} name="fade">
      <div>
        <div class="o-mask-transparent"></div>
        <div {...extractClass(props, 'o-toast')}>
          <slot />
          {props.loading && <o-loading size={40} color="white"></o-loading>}
          {props.success && <i class="o-success"></i>}
          {props.warning && <i class="o-warning"></i>}
          <p class="o-toast-content">{props.content || (props.loading ? '加载中' : '')}</p>
        </div>
      </div>
    </o-transition>
  }
}

Toast.showLoading = showLoading
Toast.hideLoading = hideLoading

let el

export function showLoading(content) {
  remove()
  el = document.createElement('o-toast')
  el.setAttribute('show', '1')
  el.setAttribute('loading', '1')
  if (typeof content === 'string') {
    el.setAttribute('content', content)
  }
  document.body.appendChild(el)

  return el
}

export function hideLoading() {
  hide()
}


export function showSuccess(content) {
  remove()
  el = document.createElement('o-toast')
  el.setAttribute('show', '1')
  el.setAttribute('success', '1')
  if (typeof content === 'string') {
    el.setAttribute('content', content)
  }
  document.body.appendChild(el)

  return el
}

export function hideSuccess() {
  hide()
}


export function showWarning(content) {
  remove()
  el = document.createElement('o-toast')
  el.setAttribute('show', '1')
  el.setAttribute('warning', '1')
  if (typeof content === 'string') {
    el.setAttribute('content', content)
  }
  document.body.appendChild(el)

  return el
}

export function hideWarning() {
  hide()
}

function hide() {
  if (el) {
    el.hide()
    el = null
  }
}

function remove() {
  if (el) {
    el.parentNode.removeChild(el)
  }
}
