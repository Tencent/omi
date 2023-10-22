import { tag, Component } from 'omi'

interface Props {
  name: string
  leavingTime?: number
  autoRemove?: boolean
  delay?: number
  show: boolean
}

@tag('o-transition')
export class Transition extends Component<Props>{

  static propTypes = {
    name: String,
    leavingTime: Number,
    autoRemove: Boolean,
    delay: Number,
    show: Boolean
  }

  static isLightDOM = true

  static defaultProps = {
    name: 'o',
    delay: 0
  }
  prevDisplay: string | undefined


  installed() {
    const el = this.children[0] as HTMLElement
    if (el) {
      this.prevDisplay = getComputedStyle(el).display
    }

    this.addEventListener('transitionend', debounce(this.onTransitionEnd.bind(this), 0))
    this.addEventListener('animationend', debounce(this.onTransitionEnd.bind(this), 0))

    if (!this.props.show) {
      el.style.display = 'none'
    }

    ready(() => {
      if (this.props.show) {
        this.enter()
      }
      if (this.props.leavingTime) {
        setTimeout(() => {
          this.leave()
        }, this.props.leavingTime)
      }
    })
  }

  receiveProps() {
    if (this.props.show) {
      this.enter()
    } else {
      this.leave()
    }
  }

  callback: (() => void) | undefined

  enter() {
    (this.children[0] as HTMLElement).style.display = this.prevDisplay as string || ''

    const el = this.children[0]
    if (el) {
      this.fire('before-enter')
      el.classList.remove(this.props.name + '-leave-active')
      el.classList.remove(this.props.name + '-leave-to')
      el.classList.add(this.props.name + '-enter-from')

      window.setTimeout(() => {
        el.classList.add(this.props.name + '-enter-active')
        el.classList.remove(this.props.name + '-enter-from')
        el.classList.add(this.props.name + '-enter-to')
        this.fire('enter')
      }, this.props.delay)
    }
  }

  onTransitionEnd() {
    // opacity 和 transform 各会执行一次，所以需要 debounce
    const el = this.children[0] as HTMLElement
    if (this.props.show) {
      el.classList.remove(this.props.name + '-enter-active')
      this.fire('after-enter')
    } else {
      el.classList.remove(this.props.name + '-leave-active')
      this.fire('after-leave')
      el.style.display = 'none'
      if (this.props.autoRemove && this.parentNode) {
        this.parentNode.removeChild(this)
      }
    }
  }

  leave() {
    const el = this.children[0]
    if (el) {
      this.fire('before-leave')
      el.classList.remove(this.props.name + '-enter-active')
      el.classList.remove(this.props.name + '-enter-to')
      el.classList.add(this.props.name + '-leave-from')

      window.setTimeout(() => {
        el.classList.add(this.props.name + '-leave-active')
        el.classList.remove(this.props.name + '-leave-from')
        el.classList.add(this.props.name + '-leave-to')
        this.fire('leave')
      }, this.props.delay)
    }
  }

  render() {
    return
  }
}

function ready(callback: () => void): void {
  if (document.readyState !== 'loading') {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | null
  return function (...args: any[]) {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait);
  }
}
