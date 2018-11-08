import omi from 'omi'

function App() { }

function getApp() { }

function Page(option) {
  return option
}

function Component(option) {
  return option
}

function noop() { }
const wx = {}
wx.canIUse = function () {
  return false
}

wx.getSystemInfoSync = function () {
  return {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }
}

//用户可以有个开关不转
window.rpx2px = function (str) {
  return str.replace(/([0-9]*)rpx/g, function (a, b) {
    return window.innerWidth * Number(b) / 750 + 'px'
  })
}

window.wx = wx
window.App = App
window.getApp = getApp
window.Page = Page
window.Component = Component
