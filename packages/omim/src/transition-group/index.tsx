//todo duration and delay support

import { tag, WeElement, h, getHost, render } from 'omi'

interface Props {
  appear?: boolean,
  show?: boolean,
  name: string,
  remove?: boolean
}

interface Data {

}

@tag('m-transition-group')
export default class TransitionGroup extends WeElement<Props, Data>{

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
    //@ts-ignore 不是 slot，所以需要共享一下 host 的 css
    this.css = getHost(this).constructor.css
  }

  callback: () => void

  receiveProps() {
    //find the leave item
    let el
    let vel
    let insertIndex


    const arr = []
    this.shadowRoot.childNodes.forEach(node => {
      if (node['__omiattr_'] && node['__omiattr_'].hasOwnProperty('key')) {
        arr.push(node)
      }
    })

    const vnodes = this.render(this.props)
    const len = vnodes.length

    //insert
    if (len > arr.length) {
      for (let i = 0; i < len; i++) {
        if (i === len - 1) {
          vel = vnodes[i]
          insertIndex = i
          break
        } else if (vnodes[i].attributes.key !== arr[i]['__omiattr_'].key) {
          vel = vnodes[i]
          insertIndex = i
          break
        }
      }
    } else if (len < arr.length) { //delete
      for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
          el = arr[i]
        } else if (vnodes[i].attributes.key !== arr[i]['__omiattr_'].key) {
          el = arr[i]
          break
        }
      }
    }

    if (el) {

      // bind end event and trigger this.update()
      this.callback = function () {
        el.parentNode.removeChild(el)
        this.update()
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
    } else {

      let iel = render(vel, null)

      // bind end event and trigger this.update()
      this.callback = function () {

        //@ts-ignore
        this.shadowRoot.removeChild(iel)

        this.update()

      }.bind(this)
      this.elOnce(iel, 'transitionend', this.callback)
      this.elOnce(iel, 'animationend', this.callback)

      insertChildAtIndex(this.shadowRoot, iel, insertIndex + 1)
      
      iel.classList.add(this.props.name + '-enter')
      iel.classList.add(this.props.name + '-enter-active')

      window.setTimeout(() => {
        iel.classList.remove(this.props.name + '-enter')
        iel.classList.add(this.props.name + '-enter-to')
      }, 0)

    }




    return false
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

  render(props) {
    return props.children
  }
}

function insertChildAtIndex(parent, child, index) {
  if (!index) index = 0
  if (index >= parent.children.length) {
    parent.appendChild(child)
  } else {
    console.log(parent.children[index],parent.children)
    parent.insertBefore(child, parent.children[index])
  }
}