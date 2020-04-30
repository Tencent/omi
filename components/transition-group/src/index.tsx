import { tag, WeElement, h } from 'omi'

interface Props {
  name: string
  leavingTime?: number
  autoRemove?: boolean
  delay?: number
}

@tag('o-transition-group')
export default class TransitionGroup extends WeElement<Props>{

  static propTypes = {
    name: String,
    leavingTime: Number,
    autoRemove: Boolean,
    delay: Number
  }

  static isLightDom = true

  static defaultProps = {
    name: 'o'
  }

  transitionTarget

  installed() {

    this.childNodes.forEach((node, index) => {
      this.enter(node, index)
    })


    if (this.props.leavingTime) {
      setTimeout(() => {
        this.childNodes.forEach((node, index) => {
          this.leave(node, index)
        })
      }, this.props.leavingTime)
    }
  }

  callback: () => void

  enter(node, index) {
    node.classList.remove(this.props.name + '-leave-active')
    node.classList.remove(this.props.name + '-leave-to')
    node.classList.add(this.props.name + '-enter')
    node.classList.add(this.props.name + '-enter-active')

    this.callback = function () {
      node.classList.remove(this.props.name + '-enter-to')
      node.classList.remove(this.props.name + '-enter-active')

    }.bind(this)
    this.elOnce(node, 'transitionend', this.callback)
    this.elOnce(node, 'animationend', this.callback)

    window.setTimeout(function () {
      node.classList.remove(this.props.name + '-enter')
      node.classList.add(this.props.name + '-enter-to')
    }.bind(this), index * this.props.delay)
  }

  leave(node, index) {
    node.classList.remove(this.props.name + '-enter-active')
    node.classList.remove(this.props.name + '-enter-to')
    node.classList.add(this.props.name + '-leave')
    node.classList.add(this.props.name + '-leave-active')

    this.callback = function () {
      node.classList.remove(this.props.name + '-leave-to')
      node.classList.remove(this.props.name + '-leave-active')

    }.bind(this)
    this.elOnce(node, 'transitionend', this.callback)
    this.elOnce(node, 'animationend', this.callback)

    window.setTimeout(function () {
      node.classList.remove(this.props.name + '-leave')
      node.classList.add(this.props.name + '-leave-to')
    }.bind(this), index * this.props.delay)
  }


  once(name, callback) {
    const wrapCall = function () {
      this.removeEventListener(name, wrapCall)
      callback()
    }.bind(this)
    this.addEventListener(name, wrapCall)
  }

  elOnce(el, name, callback) {
    const wrapCall = function () {
      el.removeEventListener(name, wrapCall)
      callback()
    }.bind(el)
    el.addEventListener(name, wrapCall)
  }

  render() {
    return
  }
}


@tag('o-test-tg')
class TestTG extends WeElement {

  static css = `
  .fade-leave-to, .fade-enter {
    opacity: 0;
    transform: translateX(15px);
  }

  .fade-leave-active, .fade-enter-active {
    transition: all 500ms ease-in;
  }`

  render() {
    return (
      <ul>
        <o-transition-group name="fade" delay={300}>
          <li>aa</li>
          <li>bb</li>
          <li>cc</li>
        </o-transition-group>
      </ul>
    )
  }

}
