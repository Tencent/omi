import { diff } from './vdom/diff'
import JSONProxy from './proxy'
import { getUse } from './util'

export function render(vnode, parent, store) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent
  if (store) {
    store.instances = []
    extendStoreUpate(store)

    store.data = new JSONProxy(store.data).observe(false, function(patch) {
			const patchs = {}
      if (patch.op === 'remove') {
        // fix arr splice
        const kv = getArrayPatch(patch.path, store)
        patchs[kv.k] = kv.v

				update(patchs, store)

      } else {
        const key = fixPath(patch.path)
        patchs[key] = patch.value

				update(patchs, store)

      }
    })
    parent.store = store
  }
  return diff(null, vnode, {}, false, parent, false)
}

function update(patch, store) {
  store.update(patch)
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
            needUpdate(patch, instance.constructor.updatePath)) ||(
							instance._updatePath &&  needUpdate(patch, instance._updatePath))
        ) {
          //update this.use
          instance.constructor.use && (instance.use = getUse(store.data, instance.constructor.use))
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
  const arr = path.replace('/', '').split('/')
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
