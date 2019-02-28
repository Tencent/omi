/*!
 *  omix v1.0.0 by dntzhang
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
*/

import obaa from './obaa'
import mitt from './mitt'

const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'

function _Page(option) {
  const onLoad = option.onLoad
  option.onLoad = function (e) {
    this.context = option.context
    this.oData = JSON.parse(JSON.stringify(option.data))
    if (!option.data.___walked) {
      walk(option.data, true)
    }
    //fn prop
    this.setData(option.data)
    observe(this, option.data)
    onLoad && onLoad.call(this, e)
  }
  Page(option)
}

function _Component(option) {
  const ready = option.ready
  option.ready = function () {
    const page = getCurrentPages()[getCurrentPages().length - 1]
    this.context = option.context || page.context
    this.oData = JSON.parse(JSON.stringify(option.data))
    if (!option.data.___walked) {
      walk(option.data, true)
    }
    observe(this, option.data)
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

function observe(ele, data) {
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
      //update fn prop
      updateByFnProp(ele, data)
    }, 0)
  })
}

function updateByFnProp(ele, data) {
  let patch = {}
  for (let key in data.__fnMapping) {
    patch[key] = data.__fnMapping[key].call(ele.oData)
  }
  ele.setData(patch)
}

let globalStore = null

function create(store, option) {
  if (arguments.length === 2) {
    if (!store.instances) {
      store.instances = {}
    }

    getApp().globalData && (getApp().globalData.store = store)
    globalStore = store
    option.data = option.data || {}
    option.data.store = store.data
    observeStore(store)
    const onLoad = option.onLoad

    option.onLoad = function (e) {
      this.store = store

      this.context = option.context
      const temp = option.data.store
      delete option.data.store
      this.oData = JSON.parse(JSON.stringify(option.data))
      if (!option.data.___walked) {
        walk(option.data, true)
      }
      observe(this, option.data)
      option.data.store = temp

      store.instances[this.route] = []
      store.instances[this.route].push(this)
      if (!option.data.store.___walked) {
        walk(this.store.data)
      }
      this.setData.call(this, option.data)
      onLoad && onLoad.call(this, e)
    }
    Page(option)
  } else {
    const ready = store.ready
    store.ready = function () {
      const page = getCurrentPages()[getCurrentPages().length - 1]
      this.context = store.context || page.context
      this.store = page.store

      store.data = store.data || {}
      store.data.store = this.store.data
      this.setData.call(this, store.data)

      this.store.instances[page.route].push(this)
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
        patch['store.' + fixPath(path + '-' + (old.length + i))] = value[(old.length + i)]
      }
    } else if (prop.indexOf('Array-') === 0) {
      patch['store.' + fixPath(path)] = value
    } else {
      patch['store.' + fixPath(path + '-' + prop)] = value
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
      updateStoreByFnProp(ins, globalStore.data)
    })
  }
  globalStore.onChange && globalStore.onChange(kv)
}

function updateStoreByFnProp(ele, data) {
  let patch = {}
  for (let key in data.store.__fnMapping) {
    patch['store.' + key] = data.store.__fnMapping[key].call(data)
  }
  ele.setData(patch)
}


function extendStoreMethod(data) {
  data.method = function (path, fn) {
    //fnMapping[path] = fn
    //data??
    data.__fnMapping = data.__fnMapping || {}
    data.__fnMapping[path] = fn
    let ok = getObjByPath(path, data)
    Object.defineProperty(ok.obj, ok.key, {
      enumerable: true,
      get: () => {
        return fn.call(data)
      },
      set: () => {
        console.warn('Please using this.data.method to set method prop of data!')
      }
    })
  }
}

function getObjByPath(path, data) {
  const arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.')
  const len = arr.length
  if (len > 1) {
    let current = data[arr[0]]
    for (let i = 1; i < len - 1; i++) {
      current = current[arr[i]]
    }
    return { obj: current, key: arr[len - 1] }
  } else {
    return { obj: data, key: arr[0] }
  }
}

function walk(data, tag) {
  data.___walked = true
  Object.keys(data).forEach(key => {
    const obj = data[key]
    const tp = type(obj)
    if (tp == FUNCTIONTYPE) {
      setProp(key, obj, data, tag)
    } else if (tp == OBJECTTYPE) {
      Object.keys(obj).forEach(subKey => {
        _walk(obj[subKey], key + '.' + subKey, data, tag)
      })

    } else if (tp == ARRAYTYPE) {
      obj.forEach((item, index) => {
        _walk(item, key + '[' + index + ']', data, tag)
      })

    }
  })
}

function _walk(obj, path, data, tag) {
  const tp = type(obj)
  if (tp == FUNCTIONTYPE) {
    setProp(path, obj, data, tag)
  } else if (tp == OBJECTTYPE) {
    Object.keys(obj).forEach(subKey => {
      _walk(obj[subKey], path + '.' + subKey, data, tag)
    })

  } else if (tp == ARRAYTYPE) {
    obj.forEach((item, index) => {
      _walk(item, path + '[' + index + ']', data, tag)
    })

  }
}

function setProp(path, fn, data, tag) {
  const ok = getObjByPath(path, data)

  if (tag) {
    data.__fnMapping = data.__fnMapping || {}
    data.__fnMapping[path] = fn
    Object.defineProperty(ok.obj, ok.key, {
      enumerable: true,
      get: () => {
        return fn.call(ok.obj)
      },
      set: () => {
        console.warn('Please using this.data.method to set method prop of data!')
      }
    })
  } else {
    data.store = data.store || {}
    data.store.__fnMapping = data.store.__fnMapping || {}
    data.store.__fnMapping[path] = fn
    Object.defineProperty(ok.obj.store, ok.key, {
      enumerable: true,
      get: () => {
        return fn.call(ok.obj)
      },
      set: () => {
        console.warn('Please using this.data.method to set method prop of data!')
      }
    })
  }

}

function type(obj) {
  return Object.prototype.toString.call(obj)
}

create.Page = _Page
create.Component = _Component
create.obaa = obaa
create.mitt = mitt
create.emitter = mitt()


export default create
