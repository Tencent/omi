/*!
 *  omi-router v2.0.8 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
 */

var p2r = require('path-to-regexp')
var mapping = {}
var root = getGlobal()

root.route = route
root.route.params = null
root.historyLength = 0

root.route.to = function (path, data) {
  root.route._routeByTo = true
  root.route.data = data
  if (path[0] === '#') {
    location.hash = path
  } else {
    location.hash = '#' + path
  }
}

window.addEventListener('hashchange', change)

function change(evt) {
  var byNative = false
  //need to fix a line by omi-link
  if(window.history.length === root.historyLength && !root.route._routeByTo){
    //keep alive mode
    byNative = true
  }
  root.route._routeByTo = false
  root.historyLength = window.history.length
  var prevent = false
  if (evt.type === 'hashchange' && root.route.before) {
    prevent = root.route.before(evt) === false
  }
  if (prevent) return
  var path = window.location.hash.replace('#', '')
  var notFound = true
  Object.keys(mapping).every(function(key){
    var toArr = path.split('?')[0].match(mapping[key].reg)
    if (toArr) {
      var pathArr = key.match(mapping[key].reg)
      root.route.params = getParams(toArr, pathArr)
      root.route.query = getUrlParams(path)
      mapping[key].callback({
        params: root.route.params,
        query: getUrlParams(path),
        data: root.route.data,
        byNative: byNative
      })
      root.route.data = null
      notFound = false
      return false
    }
    return true
  })

  if (notFound) {
    mapping['*'] && mapping['*'].callback({ byNative: byNative })
  }

  if (evt.type === 'hashchange' && root.route.after) {
    root.route.after(evt)
  }
}

document.addEventListener('DOMContentLoaded', change)

function getParams(toArr, pathArr) {
  var params = {}
  toArr.forEach(function (item, index) {
    if (index > 0) {
      params[pathArr[index].replace(':', '')] = item
    }
  })
  return params
}


export default function route(path, callback) {
  mapping[path] = {
    callback: callback,
    reg: p2r(path)
  }
}

function getGlobal() {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    return (
      self ||
      window ||
      global ||
      (function () {
        return this
      })()
    )
  }
  return global
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
