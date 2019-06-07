//todo duration and delay support

import { tag, WeElement, h, getHost } from 'omi'

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
    if (this.props.appear) {
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

  receiveProps() {
    console.log('receiveProps')
    //find the leave item

    let el
    // bind end event and trigger this.update()
    this.callback = function () {
      el.classList.remove(this.props.name + '-leave-to')
      el.classList.remove(this.props.name + '-leave-active')
      this.update()
    }.bind(this)

    const arr = []
    this.shadowRoot.childNodes.forEach(node=>{
      if(node['__omiattr_'] && node['__omiattr_'].hasOwnProperty('key')){
        //map[node['__omiattr_'].key] = node
        arr.push(node)
      }
    })
    
    

    const vnodes = this.render(this.props)
    const len = vnodes.length
    console.log(len)
    console.log(arr)
    //insert
    if(len > arr.length){
      for(let i=0;i<len;i++){
        if(vnodes[i].attributes.key!== arr[i]['__omiattr_'].key){
          console.log(vnodes[i])
          break
        }
      }
    }else if(len < arr.length){ //delete
      for(let i=0;i<arr.length;i++){
        if(i === arr.length-1){
          el = arr[i]
        } else if(vnodes[i].attributes.key!== arr[i]['__omiattr_'].key){
          console.log(111)
          el = arr[i]
          break
        }
      }
    }
    


    this.elOnce(el, 'transitionend', this.callback)
    this.elOnce(el, 'animationend', this.callback)
    // add leave class
    el.classList.add(this.props.name + '-leave')
    el.classList.add(this.props.name + '-leave-active')
    

    window.setTimeout( ()=> {
      el.classList.remove(this.props.name + '-leave')
      el.classList.add(this.props.name + '-leave-to')
    }, 0)
    return false
  }


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
    if (this.props.remove && this.children.length == 0) {
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
      if (this.props.remove) {
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
