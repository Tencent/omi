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
import * as domReady from 'dready'

interface Props {
  name: string
  leavingTime?: number
  autoRemove?: boolean
}

@tag('o-transition')
export default class Transition extends WeElement<Props>{

  static propTypes = {
    name: String,
    leavingTime: Number,
    autoRemove: Boolean
  }

  static isLightDom = true

  static defaultProps = {
    name: 'o'
  }

  transitionTarget

  installed() {

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

  callback: () => void

  enter() {

    this.fire('BeforeEnter')
    this.transitionTarget.classList.remove(this.props.name + '-leave-active')
    this.transitionTarget.classList.remove(this.props.name + '-leave-to')
    this.transitionTarget.classList.add(this.props.name + '-enter')
    this.transitionTarget.classList.add(this.props.name + '-enter-active')

    this.callback = function () {
      this.transitionTarget.classList.remove(this.props.name + '-enter-active')
      this.fire('AfterEnter')
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
    this.fire('BeforeLeave')
    this.transitionTarget.classList.remove(this.props.name + '-enter-active')
    this.transitionTarget.classList.remove(this.props.name + '-enter-to')
    this.transitionTarget.classList.add(this.props.name + '-leave')
    this.transitionTarget.classList.add(this.props.name + '-leave-active')

    this.callback = function (e) {

      this.transitionTarget.classList.remove(this.props.name + '-leave-active')

      this.fire('AfterLeave')
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
