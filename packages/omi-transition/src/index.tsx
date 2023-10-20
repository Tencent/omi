import { tag, WeElement } from 'omi'

interface Props {
  name: string
  leaving?: number
  leavingTime?: number
  autoRemove?: boolean
  appear?: boolean
  disappear?: boolean
  delay?: number
}

@tag('o-transition')
export default class Transition extends WeElement<Props>{

  static propTypes = {
    name: String,
    leavingTime: Number,
    autoRemove: Boolean,
    appear: Boolean,
    disappear: Boolean,
    delay: Number
  }

  static isLightDOM = true

  static defaultProps = {
    name: 'o',
    delay: 0
  }

  _show = true

  installed() {

    ready(() => {
      if (this.props.appear) {
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
    if (this.props.appear) {
      this.enter()
    }

    if (this.props.disappear) {
      this.leave()
    }
  }

  async toggle() {
    this._show = !this._show
    if (this._show)
      return await this.enter()
    else
      return await this.leave()
  }

  callback: (() => void) | undefined

  async enter() {
    return new Promise((resolve) => {
      const el = this.children[0]
      if (el) {
        this.fire('before-enter')
        el.classList.remove(this.props.name + '-leave-active')
        el.classList.remove(this.props.name + '-leave-to')
        el.classList.add(this.props.name + '-enter-from')

        this.callback = () => {
          el.classList.remove(this.props.name + '-enter-active')
          this.fire('after-enter')
          this._show = true
          resolve(null)
        }

        this.once('transitionend', this.callback)
        this.once('animationend', this.callback)

        window.setTimeout(() => {
          el.classList.add(this.props.name + '-enter-active')
          el.classList.remove(this.props.name + '-enter-from')
          el.classList.add(this.props.name + '-enter-to')
          this.fire('enter')
        }, this.props.delay)
      }
    })
  }

  async leave() {
    return new Promise((resolve) => {
      const el = this.children[0]
      if (el) {
        this.fire('before-leave')
        el.classList.remove(this.props.name + '-enter-active')
        el.classList.remove(this.props.name + '-enter-to')
        el.classList.add(this.props.name + '-leave-from')

        this.callback = () => {
          el.classList.remove(this.props.name + '-leave-active')
          this.fire('after-leave')
          this._show = false
          if (this.props.autoRemove && this.parentNode) {
            this.parentNode.removeChild(this)
          }
          resolve(null)
        }

        this.once('transitionend', this.callback)
        this.once('animationend', this.callback)

        window.setTimeout(() => {
          el.classList.add(this.props.name + '-leave-active')
          el.classList.remove(this.props.name + '-leave-from')
          el.classList.add(this.props.name + '-leave-to')
          this.fire('leave')
        }, this.props.delay)
      }
    })
  }

  once(name: string, callback: Function) {
    const wrapCall =  () => {
      this.removeEventListener(name, wrapCall)
      callback()
    }
    this.addEventListener(name, wrapCall)
  }

  render() {
    return
  }
}


function ready(callback: () => void): void {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

