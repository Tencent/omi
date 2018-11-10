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

//用户可以有个开关不转
window.rpx2px = function(str) {
  return str.replace(/([0-9]*)rpx/g, (a, b) => {
    return (window.innerWidth * Number(b)) / 750 + 'px'
  })
}

wx.navigateTo = function(option) {
  route.to(option.url.split('?')[0], getUrlParams(option.url))
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
