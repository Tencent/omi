/**
 * m-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */

import { tag, WeElement, h } from 'omi'

interface Props {
  appear: boolean,
  active?: boolean,
  name: string
}

interface Data {

}

@tag('m-transition')
export default class Transition extends WeElement<Props, Data>{

  static css = `  
  :host {
    display: inline-block;
  }`

  static propTypes = {
    name: String,
    appear: Boolean,
    active: Boolean

  }

  static defaultProps = {
    name: 'm',
    appear: false,
    active: false
  }

  install() {
    if (this.props.appear)
      this.appearing()
  }

  toggle() {
    this.props.active = !this.props.active
    if (this.props.active)
      this.enter()
    else
      this.leave()
  }

  callback: () => void

  appearing() {
    this.fire('m-before-appear')
    this.classList.add(this.props.name + '-appear')
    this.classList.add(this.props.name + '-appear-active')

    this.callback = function () {
      this.classList.remove(this.props.name + '-appear-to')
      this.classList.remove(this.props.name + '-appear-active')
      this.fire('m-after-appear')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-appear')
      this.classList.add(this.props.name + '-appear-to')
      this.fire('m-appear')
    }.bind(this), 0)
  }

  enter() {
    this.fire('m-before-enter')
    this.classList.remove(this.props.name + '-leave-active')
    this.classList.remove(this.props.name + '-leave-to')
    this.classList.add(this.props.name + '-enter')
    this.classList.add(this.props.name + '-enter-active')

    this.callback = function () {
      this.classList.remove(this.props.name + '-enter-active')
      this.fire('m-after-enter')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-enter')
      this.classList.add(this.props.name + '-enter-to')
      this.fire('m-enter')
    }.bind(this), 0)
  }

  leave() {
    this.fire('m-before-leave')
    this.classList.remove(this.props.name + '-enter-active')
    this.classList.remove(this.props.name + '-enter-to')
    this.classList.add(this.props.name + '-leave')
    this.classList.add(this.props.name + '-leave-active')

    this.callback = function (e) {
      this.classList.remove(this.props.name + '-leave-active')
      this.fire('m-after-leave')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-leave')
      this.classList.add(this.props.name + '-leave-to')
      this.fire('m-leave')
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
    return <slot></slot>
  }
}
