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
    obaa(this.oData, (prop, value, old, path) => {
      const data = {}
      if (prop.indexOf('Array-') === 0) {
        data[fixPath(path)] = value
      } else {
        data[fixPath(path + '-' + prop)] = value
      }
      this.setData(data)
    })
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
    obaa(this.oData, (prop, value, old, path) => {
      const data = {}
      if (prop.indexOf('Array-') === 0) {
        data[fixPath(path)] = value
      } else {
        data[fixPath(path + '-' + prop)] = value
      }
      this.setData(data)
    })
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

export default {
  Page: _Page,
  Component: _Component,
  obaa: obaa,
  mitt: mitt,
  emitter: mitt()
}