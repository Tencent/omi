/*!
 *  omi-router v2.0.2 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
 */

const p2r = require('path-to-regexp')
const mapping = {}
const root = getGlobal()

root.route = route
root.route.params = null

root.route.to = function (path) {
  if (path[0] === '#') {
    location.hash = path
  } else {
    location.hash = '#' + path
  }
}

window.addEventListener('hashchange', change)

function change() {
  const path = window.location.hash.replace('#', '')
  let notFound = true
  Object.keys(mapping).every(key => {
    const toArr = path.match(mapping[key].reg)
    if (toArr) {
      const pathArr = key.match(mapping[key].reg)
      root.route.params = getParams(toArr, pathArr)
      mapping[key].callback(root.route.params)
      notFound = false
      return false
    }
    return true
  })

  if (notFound) {
    mapping['*'] && mapping['*'].callback()
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
    callback,
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

