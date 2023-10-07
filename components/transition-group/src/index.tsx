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

  static isLightDOM = true

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

    this.prevChildNodes = Array.prototype.slice.call(this.childNodes, 0)

  }

  callback: () => void

  enter(node, index) {
    node.classList.remove(this.props.name + '-leave-active')
    node.classList.remove(this.props.name + '-leave-to')
    node.classList.add(this.props.name + '-enter')
    node.classList.add(this.props.name + '-enter-active')

    this.callback = function () {
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

  update(parent) {

    //find the leave item
    let el
    let vel
    let insertIndex

    const arr = this.prevChildNodes

    const vnodes = this.props.list.map(this.props.renderItem)
    const len = vnodes.length

    //insert
    if (len > arr.length) {
      for (let i = 0; i < len; i++) {
        if (i === len - 1) {
          vel = vnodes[i]
          insertIndex = i
          break
        } else if (vnodes[i].attributes.key !== arr[i].prevProps.key) {
          vel = vnodes[i]
          insertIndex = i
          break
        }
      }
    } else if (len < arr.length) { //delete
      for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
          el = arr[i]
        } else if (vnodes[i].attributes.key !== arr[i].prevProps.key) {
          el = arr[i]
          break
        }
      }
    }

    if (el) {

      // bind end event and trigger this.update()
      this.callback = function () {
        el.parentNode.removeChild(el)
        this.prevChildNodes = Array.prototype.slice.call(this.childNodes, 0)
        //更新父亲，校正索引，不然 list.splice 的索引还是老的
        parent.update()
      }.bind(this)
      this.elOnce(el, 'transitionend', this.callback)
      this.elOnce(el, 'animationend', this.callback)
      // add leave class
      el.classList.add(this.props.name + '-leave')
      el.classList.add(this.props.name + '-leave-active')


      window.setTimeout(() => {
        el.classList.remove(this.props.name + '-leave')
        el.classList.add(this.props.name + '-leave-to')
      }, 0)
    } else if (vel) {

      let iel = render(vel, null)

      // bind end event and trigger this.update()
      this.callback = function () {

        //@ts-ignore
        this.removeChild(iel)

        this.update()

      }.bind(this)
      this.elOnce(iel, 'transitionend', this.callback)
      this.elOnce(iel, 'animationend', this.callback)

      insertChildAtIndex(this, iel, insertIndex + 1)

      iel.classList.add(this.props.name + '-enter')
      iel.classList.add(this.props.name + '-enter-active')

      window.setTimeout(() => {
        iel.classList.remove(this.props.name + '-enter')
        iel.classList.add(this.props.name + '-enter-to')
      }, 0)

    }

  }
  render() {
  }


}

function insertChildAtIndex(parent, child, index) {
  if (!index) index = 0
  if (index >= parent.children.length) {
    parent.appendChild(child)
  } else {
    parent.insertBefore(child, parent.children[index])
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

  list = [
    { name: 'ItemA' },
    { name: 'ItemB' },
    { name: 'ItemC' }
  ]

  removeItem = (item, index) => {
    this.list.splice(index, 1)
    //立即更新
    //this.update()
    //过渡更新
    this.tgRef.update(this)
  }

  addItem = () => {

  }


  renderItem = (item, index) => {
    return <li key={item.name}>{item.name}<button onClick={_ => { this.removeItem(item, index) }}>☓</button></li>
  }

  render() {
    return (
      <div>
        <ul>
          <o-transition-group ref={_ => this.tgRef = _} list={this.list} renderItem={this.renderItem} name="fade" delay={300}>
            {this.list.map(this.renderItem)}
          </o-transition-group>
        </ul>
        <button onClick={this.addItem}>+</button>
      </div>
    )
  }

}
