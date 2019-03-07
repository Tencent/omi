import { render } from 'omi'
import ajax from '@fdaciuk/ajax'


function noop() { }

const wx = {}

wx.canIUse = function () {
  return false
}

wx.getStorageSync = noop
wx.setStorageSync = noop
wx.login = noop
wx.getSetting = noop

wx.getSystemInfoSync = function () {
  return {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    pixelRatio: window.devicePixelRadio
  }
}

wx.getSystemInfo = function (options) {
  options.success({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    pixelRatio: window.devicePixelRadio
  })
}

wx.getUserInfo = function () {
  console.warn('wx.getUserInfo method cannot be invoked in browser.')
}

wx.navigateTo = function (option) {
  route.query = getUrlParams(option.url)
  route.to(option.url.replace('../','/pages/'), option)
}

function getUrlParam(name, url) {
  if (!name) {
    return ''
  }
  url = url || location.search
  name = name.replace(/(?=[\\^$*+?.():|{}])/, '\\')
  var reg = new RegExp('(?:[?&]|^)' + name + '=([^?&#]*)', 'i')
  var match = url.match(reg)
  return !match ? '' : match[1]
}

wx.setNavigationBarTitle = function (option) {
  document.title = option.title
}

wx.navigateBack = function (option) {
  history.go(option.delta * -1)
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

wx.currentPage = null

export function routeUpdate(vnode, selector, byNative, root) {
  root.childNodes.forEach(child => {
    if (child.style.display !== 'none') {
      child.style.display = 'none'
      child.onHide && child.onHide()
    }
  })
  if (byNative) {
    const ele = document.querySelector(selector)
    if (ele) {
      ele.style.display = 'block'
      ele.onShow && ele.onShow()
      wx.currentPage = ele
      document.documentElement.scrollTop = ele._preScrollTop
      document.body.scrollTop = ele._preScrollTop
      //set twice
      setTimeout(function () {
        document.documentElement.scrollTop = ele._preScrollTop
        document.body.scrollTop = ele._preScrollTop
      }, 0)
    } else {
      const node = render(vnode, root)
      node.onShow && node.onShow()
      wx.currentPage = node
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  } else {
    const ele = document.querySelector(selector)
    ele && ele.parentNode.removeChild(ele)
    const node = render(vnode, root)
    node.onShow && node.onShow()
    wx.currentPage = node
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
}

wx.request = function (options) {
  const request = ajax({
    method: options.method || 'GET',
    url: options.url,
    data: options.data,
    headers: options.header
  })

  request.then((data, xhr) => {
    options.success({
      data: data,
      statusCode: xhr.status
    })
  })
}

wx._bindReachBottom = function (callback, context) {
  window.addEventListener('scroll', () => {
    if (getScrollHeight() - getScrollTop() - getWindowHeight() < 30) {
      if(context === wx.currentPage){
        throttle(callback, context)
      }
    }
  })
}

function getScrollHeight() {
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

function getScrollTop() {
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

function getWindowHeight() {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

function throttle(method, scope) {
  clearTimeout(method.tId);
  method.tId= setTimeout(function(){
      method.call(scope);
  }, 300);
}

window.wx = wx
