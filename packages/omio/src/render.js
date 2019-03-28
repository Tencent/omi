import { diff } from './vdom/diff'
import obaa from './obaa'
import { getUse } from './util'

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {object} [store]
 *	@public
 */
export function render(vnode, parent, store, empty, merge) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent
  obsStore(store)

  if (empty) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  if (merge) {
    merge =
      typeof merge === 'string'
        ? document.querySelector(merge)
        : merge
  }

  return diff(merge, vnode, store, false, parent, false)
}

function obsStore(store){
  if (store && store.data) {
    store.instances = []
    extendStoreUpate(store)
    let timeout = null
    let patchs = {}
    obaa(store.data, (prop, val, old, path) => {
      clearTimeout(timeout)
      const key = fixPath(path + '-' + prop)
      patchs[key] = true
      timeout = setTimeout(() => {
        store.update(patchs)
        patchs = {}
      }, 0)
    })
  }
}

export function merge(vnode, merge, store) {
  obsStore(store)
  
  merge =
    typeof merge === 'string'
      ? document.querySelector(merge)
      : merge

  return diff(merge, vnode, store)
}

function extendStoreUpate(store) {
  store.update = function(patch) {
    const updateAll = matchGlobalData(this.globalData, patch)
    if (Object.keys(patch).length > 0) {
      this.instances.forEach(instance => {
        if (
          updateAll ||
          this.updateAll ||
          (instance.constructor.updatePath &&
            needUpdate(patch, instance.constructor.updatePath))
        ) {
          //update this.use
          instance.use = getUse(store.data, instance.constructor.use)
          instance.update()
        }
      })
      this.onChange && this.onChange(patch)
    }
  }
}

export function matchGlobalData(globalData, diffResult) {
  if (!globalData) return false
  for (let keyA in diffResult) {
    if (globalData.indexOf(keyA) > -1) {
      return true
    }
    for (let i = 0, len = globalData.length; i < len; i++) {
      if (includePath(keyA, globalData[i])) {
        return true
      }
    }
  }
  return false
}

export function needUpdate(diffResult, updatePath) {
  for (let keyA in diffResult) {
    if (updatePath[keyA]) {
      return true
    }
    for (let keyB in updatePath) {
      if (includePath(keyA, keyB)) {
        return true
      }
    }
  }
  return false
}

function includePath(pathA, pathB) {
  if (pathA.indexOf(pathB) === 0) {
    const next = pathA.substr(pathB.length, 1)
    if (next === '[' || next === '.') {
      return true
    }
  }
  return false
}

export function fixPath(path) {
  let mpPath = ''
  const arr = path.replace('#-', '').split('-')
  arr.forEach((item, index) => {
    if (index) {
      if (isNaN(Number(item))) {
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

function getArrayPatch(path, store) {
  const arr = path.replace('/', '').split('/')
  let current = store.data[arr[0]]
  for (let i = 1, len = arr.length; i < len - 1; i++) {
    current = current[arr[i]]
  }
  return { k: fixArrPath(path), v: current }
}

function fixArrPath(path) {
  let mpPath = ''
  const arr = path.replace('/', '').split('/')
  const len = arr.length
  arr.forEach((item, index) => {
    if (index < len - 1) {
      if (index) {
        if (isNaN(Number(item))) {
          mpPath += '.' + item
        } else {
          mpPath += '[' + item + ']'
        }
      } else {
        mpPath += item
      }
    }
  })
  return mpPath
}
