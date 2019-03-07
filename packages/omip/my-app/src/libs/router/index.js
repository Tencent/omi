import { WeElement, define, render } from 'omi'
import 'omi-router'

let currentPage = null
let stackList = []

window.stackList = stackList
define('o-router', class extends WeElement {

  _firstTime = true

  installed() {
    const root = document.querySelector('#app')
    let main
    this.props.routes.forEach(current => {
      route(current.path, (evt) => {
        current.componentLoader()
          .then(res => {
            const arr = current.path.replace(/pages/, 'page').split('/')
            const selector = current.path.replace(/\//g, '-')
            routeUpdate({ nodeName: arr[1] + '-' + arr[2], attributes: { className: selector } }, selector, evt.byNative, root)
          }).catch(res => {
            console.log(res)
          })
      })
      if (current.isIndex) {
        main = current
        current.componentLoader()
          .then(res => {
            const arr = this.props.routes[0].path.replace(/pages/, 'page').split('/')
            const selector = main.path.replace(/\//g, '-')

            this.vd = { nodeName: arr[1] + '-' + arr[2] }
            this.update()
            const ele = root.childNodes[root.childNodes.length - 1]
            stackList.push({ slt: selector, ele: ele, display: window.getComputedStyle(ele).display, scrollTop: 0 })

          }).catch(res => {
            console.log(res)
          })
      }
    })

    route('*', (evt) => {
      main.componentLoader()
        .then(res => {
          const arr = main.path.replace(/pages/, 'page').split('/')
          const selector = main.path.replace(/\//g, '-')
          routeUpdate({ nodeName: arr[1] + '-' + arr[2] }, selector, evt.byNative, root)
        }).catch(res => {
          console.log(res)
        })
    })
  }


  render() {
    if (this._firstTime) {
      this._firstTime = false
      return null
    } else {
      return this.vd
    }
  }
})




export function routeUpdate(vnode, selector, byNative, root) {
  root.childNodes.forEach(child => {
    if (child.style.display !== 'none') {
      child.style.display = 'none'
      child.onHide && child.onHide()
    }
  })
  const item = getElement(selector)
  if (byNative) {
    //浏览器后退
    if (item && item.ele) {
      const ele = item.ele
      ele.style.display = item.display
      ele.onShow && ele.onShow()
      currentPage = ele
      document.documentElement.scrollTop = item.scrollTop
      document.body.scrollTop = item.scrollTop
      //set twice
      setTimeout(function () {
        document.documentElement.scrollTop = item.scrollTop
        document.body.scrollTop = item.scrollTop
      }, 0)
    } else {
      const node = render(vnode, root)
      node.onShow && node.onShow()
      currentPage = node
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  } else {
    //前进
    if (item && item.ele) {
      item.ele.parentNode.removeChild(item.ele)
      remove(item)
    }
    const node = render(vnode, root)
    node.onShow && node.onShow()
    currentPage = node

    const ele = root.childNodes[root.childNodes.length - 1]
    stackList.push({ slt: selector, ele: ele, display: window.getComputedStyle(ele).display, scrollTop: 0 })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
}

function getElement(slt) {
  for (let i = 0, length = stackList.length; i < length; i++) {
    if (stackList[i].slt === slt) {
      return stackList[i]
    }
  }
}

function remove(item) {
  for (let i = 0, length = stackList.length; i < length; i++) {
    if (stackList[i] === item) {
      stackList.splice(i, 1)
      return
    }
  }
}


window.onscroll = function () {
  const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  for (let i = 0, length = stackList.length; i < length; i++) {
    if (stackList[i].ele === currentPage) {
      stackList[i].scrollTop = top
      return
    }
  }
}