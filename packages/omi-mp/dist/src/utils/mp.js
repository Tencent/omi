import omi from 'omi'

function App() {}

function getApp() {}

function Page(option) {
  return option
}

function Component(option) {
  return option
}

function noop() {}
const wx = {}
wx.canIUse = noop

window.wx = wx
window.App = App
window.getApp = getApp
window.Page = Page
window.Component = Component
