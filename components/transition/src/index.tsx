/**
 * o-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */

//todo duration and delay support

import { tag, WeElement } from 'omi'
import * as _domReady from 'dready'
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupDomReady } from 'dready'

const domReady = _rollupDomReady || _domReady

interface Props {
  name: string
  leavingTime?: number
  autoRemove?: boolean
  appear?: boolean
}

@tag('o-transition')
export default class Transition extends WeElement<Props>{

  static propTypes = {
    name: String,
    leavingTime: Number,
    autoRemove: Boolean,
    appear: Boolean
  }

  static isLightDom = true

  static defaultProps = {
    name: 'o'
  }

  transitionTarget

  installed() {

    if (this.props.appear) {
      domReady(() => {

        this.transitionTarget = this.children[0]

        this.enter()

        if (this.props.leavingTime) {
          setTimeout(() => {
            this.leave()
          }, this.props.leavingTime)
        }
      })
    }

  }

  callback: () => void

  enter() {

    this.fire('before-enter')
    this.transitionTarget.classList.remove(this.props.name + '-leave-active')
    this.transitionTarget.classList.remove(this.props.name + '-leave-to')
    this.transitionTarget.classList.add(this.props.name + '-enter')
    this.transitionTarget.classList.add(this.props.name + '-enter-active')

    this.callback = function () {
      this.transitionTarget.classList.remove(this.props.name + '-enter-active')
      this.fire('after-enter')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.transitionTarget.classList.remove(this.props.name + '-enter')
      this.transitionTarget.classList.add(this.props.name + '-enter-to')
      this.fire('enter')
    }.bind(this), 0)
  }

  leave() {
    this.fire('before-leave')
    this.transitionTarget.classList.remove(this.props.name + '-enter-active')
    this.transitionTarget.classList.remove(this.props.name + '-enter-to')
    this.transitionTarget.classList.add(this.props.name + '-leave')
    this.transitionTarget.classList.add(this.props.name + '-leave-active')

    this.callback = function (e) {

      this.transitionTarget.classList.remove(this.props.name + '-leave-active')

      this.fire('after-leave')
      if (this.props.autoRemove && this.parentNode) {
        this.parentNode.removeChild(this)
      }

    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.transitionTarget.classList.remove(this.props.name + '-leave')
      this.transitionTarget.classList.add(this.props.name + '-leave-to')
      this.fire('leave')
    }.bind(this), 0)
  }

  once(name, callback) {
    const wrapCall = function () {
      this.removeEventListener(name, wrapCall)
      callback()
    }.bind(this)
    this.addEventListener(name, wrapCall)
  }

  render() {
    return
  }
}
