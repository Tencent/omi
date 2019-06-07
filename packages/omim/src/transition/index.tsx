/**
 * m-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */

//todo duration and delay support

import { tag, WeElement, h } from 'omi'

interface Props {
  appear?: boolean,
  show?: boolean,
  name: string,
  remove?: boolean
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
    show: Boolean,
    remove: Boolean

  }

  static defaultProps = {
    name: 'm',
    appear: false,
    show: false
  }

  install() {
    if (this.props.appear){
      this.appear()
      this.props.show = true
    }
  }

  toggle() {
    this.props.show = !this.props.show
    if (this.props.show)
      this.enter()
    else
      this.leave()
  }

  callback: () => void

  appear() {
    this.fire('before-appear')
    this.classList.add(this.props.name + '-appear')
    this.classList.add(this.props.name + '-appear-active')

    this.callback = function () {
      this.classList.remove(this.props.name + '-appear-to')
      this.classList.remove(this.props.name + '-appear-active')
      this.fire('after-appear')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-appear')
      this.classList.add(this.props.name + '-appear-to')
      this.fire('appear')
    }.bind(this), 0)
  }

  _tempNode: HTMLElement

  enter() {
    if(this.props.remove && this.children.length == 0){
      this.appendChild(this._tempNode)
    }
    this.fire('before-enter')
    this.classList.remove(this.props.name + '-leave-active')
    this.classList.remove(this.props.name + '-leave-to')
    this.classList.add(this.props.name + '-enter')
    this.classList.add(this.props.name + '-enter-active')

    this.callback = function () {
      this.classList.remove(this.props.name + '-enter-active')
      this.fire('after-enter')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-enter')
      this.classList.add(this.props.name + '-enter-to')
      this.fire('enter')
    }.bind(this), 0)
  }

  leave() {
    this.fire('before-leave')
    this.classList.remove(this.props.name + '-enter-active')
    this.classList.remove(this.props.name + '-enter-to')
    this.classList.add(this.props.name + '-leave')
    this.classList.add(this.props.name + '-leave-active')

    this.callback = function (e) {
      this.classList.remove(this.props.name + '-leave-active')
      this.fire('after-leave')
      this._tempNode = this.children[0]
      if(this.props.remove){
        this._tempNode.parentNode.removeChild(this._tempNode)
      }
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-leave')
      this.classList.add(this.props.name + '-leave-to')
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
    return <slot></slot>
  }
}
