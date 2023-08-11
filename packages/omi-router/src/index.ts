/*!
 *  omi-router v3.0.5 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
 */

import * as p2r from 'path-to-regexp'
const mapping = {}
const root = getGlobal()

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

window.addEventListener('hashchange', hashChange)

export function hashChange(evt) {
  let byNative = false
  //need to fix a line by omi-link
  if (window.history.length === root.historyLength && !root.route._routeByTo) {
    //keep alive mode
    byNative = true
  }
  root.route._routeByTo = false
  root.historyLength = window.history.length
  let prevent = false
  if (root.route.before) {
    prevent = root.route.before(evt) === false
  }
  if (prevent) return
  let path = window.location.hash.replace('#', '')
  if (path === '') path = '/'
  let notFound = true
  Object.keys(mapping).every(function (key) {
    const toArr = path.split('?')[0].match(mapping[key].reg)
    if (toArr) {
      let pathArr = key.match(mapping[key].reg)
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

  if (root.route.after) {
    root.route.after(evt)
  }
}

document.addEventListener('DOMContentLoaded', hashChange)

function getParams(toArr, pathArr) {
  const params = {}
  toArr.forEach(function (item, index) {
    if (index > 0) {
      params[pathArr[index].replace(':', '')] = item
    }
  })
  return params
}



export function route(path, callback) {
  mapping[path] = {
    callback: callback,
    reg: p2r.default ? p2r.default(path) : p2r(path)
  }
}

const router = { route, hashChange }
export default router

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
  let queryArray = url.split(/[?&]/).slice(1)
  let i, args = {}
  for (i = 0; i < queryArray.length; i++) {
    let match = queryArray[i].match(/([^=]+)=([^=]+)/)
    if (match !== null) {
      args[match[1]] = decodeURIComponent(match[2])
    }
  }
  return args
}
