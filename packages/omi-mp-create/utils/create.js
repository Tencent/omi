/*!
 *  omi-mp-create v0.1.0 by dntzhang
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
*/

import obaa from './obaa'
import mitt from './mitt'

function _Page(option) {
  const onLoad = option.onLoad
  option.onLoad = function (e) {
    this.store = option.store
    this.oData = JSON.parse(JSON.stringify(option.data))
    observe(this)
    onLoad && onLoad.call(this, e)
  }
  Page(option)
}

function _Component(option) {
  const ready = option.ready
  option.ready = function () {
    const page = getCurrentPages()[getCurrentPages().length - 1]
    this.store = option.store || page.store
    this.oData = JSON.parse(JSON.stringify(option.data))
    observe(this)
    ready && ready.call(this)
  }
  Component(option)
}

function fixPath(path) {
  let mpPath = ''
  const arr = path.replace('#-', '').split('-')
  arr.forEach((item, index) => {
    if (index) {
      if (isNaN(parseInt(item))) {
        mpPath += '.' + item
      } else {
        mpPath += '[' + item + ']'
      }
    } else {
      mpPath += item
    }
  })
  return mpPath
}

function observe(ele) {
  let timeout = null
  let patch = {}
  obaa(ele.oData, (prop, value, old, path) => {
    clearTimeout(timeout)
    if (prop.indexOf('Array-push') === 0) {
      let dl = value.length - old.length
      for (let i = 0; i < dl; i++) {
        patch[fixPath(path + '-' + (old.length + i))] = value[(old.length + i)]
      }
    } else if (prop.indexOf('Array-') === 0) {
      patch[fixPath(path)] = value
    } else {
      patch[fixPath(path + '-' + prop)] = value
    }

    timeout = setTimeout(() => {
      ele.setData(patch)
      patch = {}
    }, 0)
  })
}

export default {
  Page: _Page,
  Component: _Component,
  obaa: obaa,
  mitt: mitt,
  emitter: mitt()
}