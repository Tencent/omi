import { render } from 'omi'

let appOption = null
function App(option) {
  appOption = option
}

function getApp() {
  return appOption
}

function Page(option) {
  return option
}

function Component(option) {
  return option
}

function noop() {}
const wx = {}
wx.canIUse = function() {
  return false
}

wx.getStorageSync = noop

wx.getSystemInfoSync = function() {
  return {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }
}

wx.getUserInfo = function() {}

wx.navigateTo = function(option) {
  route.query = getUrlParams(option.url)
  route.to(option.url, option)
}

window.wx = wx
window.App = App
window.getApp = getApp
window.Page = Page
window.Component = Component

function getUrlParam(name, url){
  if(!name){
      return ''
  }
  url = url || location.search
  name = name.replace(/(?=[\\^$*+?.():|{}])/, '\\')
  var reg = new RegExp('(?:[?&]|^)' + name + '=([^?&#]*)', 'i')
  var match = url.match(reg)
  return !match ? '' : match[1]
}

wx.setNavigationBarTitle = function(option){
  document.title = option.title
}

function getUrlParams(url) {
  url = url.replace(/#.*$/, '')
  var queryArray = url.split(/[?&]/).slice(1)
  var i, args = {}
  for (i = 0; i < queryArray.length; i++) {
      var match = queryArray[i].match(/([^=]+)=([^=]+)/)
      if (match !== null) {
          args[match[1]] = decodeURIComponent(match[2])
      }
  }
  return args
}

export function routeUpdate(node, selector, byNative, root) {
  root.childNodes.forEach(child => {
    if(child.style.display !== 'none'){
      child._preScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    }
    child.style.display = 'none'
  })
  if (byNative) {
    const ele = document.querySelector(selector)
    if (ele) {
      ele.style.display = 'block'
      document.documentElement.scrollTop = ele._preScrollTop
      document.body.scrollTop = ele._preScrollTop
      //set twice
      setTimeout(function(){
        document.documentElement.scrollTop = ele._preScrollTop
        document.body.scrollTop = ele._preScrollTop
      }, 0)
    } else {
      render(node, root)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  } else {
    const ele = document.querySelector(selector)
    ele && ele.parentNode.removeChild(ele)
    render(node, root)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
}
