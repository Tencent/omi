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


let globalStore = null

function create(store, option) {
  if (arguments.length === 2) {
    if (option.data && Object.keys(option.data).length > 0) {
      Object.assign(store.data, JSON.parse(JSON.stringify(option.data)))
    }
    if (!store.instances) {
      store.instances = {}
    }

    getApp().globalData && (getApp().globalData.store = store)
    globalStore = store
    option.data = store.data
    observeStore(store)
    const onLoad = option.onLoad

    option.onLoad = function (e) {
      this.store = store

      store.instances[this.route] = []
      store.instances[this.route].push(this)
      onLoad && onLoad.call(this, e)
    }
    Page(option)
  } else {
    const ready = store.ready
    store.ready = function () {
      this.page = getCurrentPages()[getCurrentPages().length - 1]
      this.store = this.page.store
      Object.assign(this.store.data, JSON.parse(JSON.stringify(store.data)))

      this.setData.call(this, this.store.data)

      this.store.instances[this.page.route].push(this)
      ready && ready.call(this)
    }
    Component(store)
  }
}


function observeStore(store) {
  let timeout = null
  let patch = {}
  obaa(store.data, (prop, value, old, path) => {
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
      _update(patch)
      patch = {}
    }, 0)
  })
}

function _update(kv) {
  for (let key in globalStore.instances) {
    globalStore.instances[key].forEach(ins => {
      ins.setData.call(ins, kv)
    })
  }
  globalStore.onChange && globalStore.onChange(kv)
}


create.Page = _Page
create.Component = _Component
create.obaa = obaa
create.mitt = mitt
create.emitter = mitt()


export default create