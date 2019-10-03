/*!
 *  omix v2.0.0 by dntzhang
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
*/

import obaa from './obaa'

const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'


function create(store, option) {
  if (arguments.length === 2) {
    if (!store.instances) {
      store.instances = {}
    }

    getApp().globalData && (getApp().globalData.store = store)
   
    option.data = store.data
    observeStore(store)
    const onLoad = option.onLoad

    option.onLoad = function (e) {
      this.store = store


      store.instances[this.route] = []
      store.instances[this.route].push(this)
      if (!option.data.___walked) {
        walk(this.store.data)
      }
      this.setData.call(this, option.data)
      onLoad && onLoad.call(this, e)
    }
    Page(option)
  } else {
    const ready = (store.lifetimes && store.lifetimes.ready) || store.ready
    store.lifetimes = store.lifetimes || {}
    store.ready = store.lifetimes.ready = function () {
      const page = getCurrentPages()[getCurrentPages().length - 1]
 
      this.store = page.store

      store.data = this.store.data
      this.setData.call(this, store.data)

      this.store.instances[page.route].push(this)
      ready && ready.call(this)
    }
    Component(store)
  }
}


function observeStore(store) {
  obaa(store.data, (prop, value, old, path) => {
    let patch = {}
    if (prop.indexOf('Array-push') === 0) {
      let dl = value.length - old.length
      for (let i = 0; i < dl; i++) {
        patch[ fixPath(path + '-' + (old.length + i))] = value[(old.length + i)]
      }
    } else if (prop.indexOf('Array-') === 0) {
      patch[ fixPath(path)] = value
    } else {
      patch[ fixPath(path + '-' + prop)] = value
    }

    _update(patch, store)
    
    
  })
}

function _update(kv, store) {
  for (let key in store.instances) {
    store.instances[key].forEach(ins => {
      ins.setData.call(ins, kv)
      updateStoreByFnProp(ins, store.data)
    })
  }
  store.onChange && store.onChange(kv)
  store.debug && storeChangeLogger(store)
}

function storeChangeLogger (store) {
    store.onChange = (diffResult) => {
        try {
            const preState = wx.getStorageSync(`CurrentState`) || {}
            const title = `State Changed`
            console.groupCollapsed(`%c  ${ title } %c ${ Object.keys(diffResult) }`, 'color:#e0c184; font-weight: bold', 'color:#f0a139; font-weight: bold')
            console.log(`%c    Pre State`, 'color:#ff65af; font-weight: bold', preState)
            console.log(`%c Change State`, 'color:#3d91cf; font-weight: bold', diffResult)
            console.log(`%c   Next State`, 'color:#2c9f67; font-weight: bold', store.data)
            console.groupEnd()
            wx.setStorageSync(`CurrentState`, store.data)
        } catch (e) {
            console.log(e)
        }
    }
}

function updateStoreByFnProp(ele, data) {
  if(data){
    let patch = {}
    for (let key in data.__fnMapping) {
      patch[key] = data.__fnMapping[key].call(data)
    }
    ele.setData(patch)
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

function walk(data) {
  //___walked 用于标记是否已经观察遍历了
  data.___walked = true
  Object.keys(data).forEach(key => {
    const obj = data[key]
    const tp = type(obj)
    if (tp == FUNCTIONTYPE) {
      setProp(key, obj, data)
    } else if (tp == OBJECTTYPE) {
      Object.keys(obj).forEach(subKey => {
        _walk(obj[subKey], key + '.' + subKey, data)
      })

    } else if (tp == ARRAYTYPE) {
      obj.forEach((item, index) => {
        _walk(item, key + '[' + index + ']', data)
      })

    }
  })
}

function _walk(obj, path, data) {
  const tp = type(obj)
  if (tp == FUNCTIONTYPE) {
    setProp(path, obj, data)
  } else if (tp == OBJECTTYPE) {
    Object.keys(obj).forEach(subKey => {
      _walk(obj[subKey], path + '.' + subKey, data)
    })

  } else if (tp == ARRAYTYPE) {
    obj.forEach((item, index) => {
      _walk(item, path + '[' + index + ']', data)
    })

  }
}

function setProp(path, fn, data) {
  const ok = getObjByPath(path, data)

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
  

}

function type(obj) {
  return Object.prototype.toString.call(obj)
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



function updateByFnProp(ele, data) {
  let patch = {}
  for (let key in data.__fnMapping) {
    patch[key] = data.__fnMapping[key].call(ele.oData)
  }
  ele.setData(patch)
}


create.obaa = obaa


export default create
