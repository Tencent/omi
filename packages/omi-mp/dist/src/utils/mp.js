import omi from 'omi'
import 'omi-router';

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

wx.navigateTo = function(option){
  route.to(option.url)
}

window.wx = wx
window.App = App
window.getApp = getApp
window.Page = Page
window.Component = Component
