/*!
 *  omix v2.0.0 by dntzhang
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
*/

import obaa from './obaa'
import { getPath, needUpdate, fixPath, getUsing } from './path'

const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'
const changes = []

function create(store, option) {
  if (arguments.length === 2) {
    if (!store.instances) {
      store.instances = {}
    }

    if(!store.onChange){
      store.onChange = function(fn){
        changes.push(fn)
      }
    }

    if(!store.offChange){
      store.offChange = function(fn){
        for(let i = 0,len =changes.length;i<len;i++){
          if(changes[i] === fn){
            changes.splice(i, 1)
            break
          }
        }
      }
    }
   
    option.data = store.data
    observeStore(store)
    const onLoad = option.onLoad

    option.onLoad = function (e) {
      this.store = store

      option.use && (this.__updatePath = getPath(option.use))
      this.__use = option.use
      store.instances[this.route] = []
      store.instances[this.route].push(this)
      if (!option.data.___walked) {
        walk(this.store.data)
      }
      this.setData(option.data)
      const using = getUsing(store.data, option.use)
      using && this.setData(using)
      onLoad && onLoad.call(this, e)
    }
    Page(option)
  } else {
    const ready = (store.lifetimes && store.lifetimes.ready) || store.ready
    store.lifetimes = store.lifetimes || {}
    store.ready = store.lifetimes.ready = function () {
      const page = getCurrentPages()[getCurrentPages().length - 1]
      store.use && (this.__updatePath = getPath(store.use))
      this.store = page.store
      this.__use = store.use
      store.data = this.store.data
      this.setData(store.data)
      const using = getUsing(this.store.data, store.use)
      using && this.setData(using)
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
      if(store.updateAll || ins.__updatePath && needUpdate(kv,ins.__updatePath)){
        ins.setData.call(ins, kv)

        const using = getUsing(store.data, ins.__use)
        using && ins.setData(using)

        //即将废弃
        updateStoreByFnProp(ins, store.data)
      }
    })
  }
  changes.forEach(change => {
    change(kv)
  })
  store.debug && storeChangeLogger(store, kv)
}

function storeChangeLogger (store, diffResult) {
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







function updateByFnProp(ele, data) {
  let patch = {}
  for (let key in data.__fnMapping) {
    patch[key] = data.__fnMapping[key].call(ele.oData)
  }
  ele.setData(patch)
}


create.obaa = obaa


export default create
