import { diff } from './vdom/diff'
import JSONProxy from './proxy'
import { getUse } from './util'
import options from './options'

export function render(vnode, parent, store) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent
  if (store) {
    if (store.data) {
      observeStore(store)
    } else {
      options.isMultiStore = true
      //Multi-store injection
      for (let key in store) {
        observeStore(store[key], key)
      }
    }
    parent.store = store
  }
  return diff(null, vnode, parent, false)
}

function observeStore(store, key) {
  store.instances = []
  store.updateSelfInstances = []
  extendStoreUpdate(store, key)

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
}

function update(patch, store) {
  store.update(patch)
}

function extendStoreUpdate(store, key) {
  store.update = function(patch) {
    if (Object.keys(patch).length > 0) {
      this.instances.forEach(instance => {
        compute(instance, key)
        if (key) {
          if (
            instance._updatePath &&
            instance._updatePath[key] &&
            needUpdate(patch, instance._updatePath[key])
          ) {
            if (instance.use) {
              getUse(
                store.data,
                (typeof instance.use === 'function'
                  ? instance.use()
                  : instance.use)[key],
                instance.using,
                key
              )
            }

            instance.update()
          }
        } else {
          if (instance._updatePath && needUpdate(patch, instance._updatePath)) {
            if (instance.use) {
              instance.using = getUse(
                store.data,
                typeof instance.use === 'function'
                  ? instance.use()
                  : instance.use
              )
            }

            instance.update()
          }
        }
      })

      this.updateSelfInstances.forEach(instance => {
        compute(instance, key)
        if (key) {
          if (
            instance._updateSelfPath &&
            instance._updateSelfPath[key] &&
            needUpdate(patch, instance._updateSelfPath[key])
          ) {
            if (instance.useSelf) {
              getUse(
                store.data,
                (typeof instance.useSelf === 'function'
                  ? instance.useSelf()
                  : instance.useSelf)[key],
                instance.usingSelf,
                key
              )
            }

            instance.updateSelf()
          }
        } else {
          if (
            instance._updateSelfPath &&
            needUpdate(patch, instance._updateSelfPath)
          ) {
            instance.usingSelf = getUse(
              store.data,
              typeof instance.useSelf === 'function'
                ? instance.useSelf()
                : instance.useSelf
            )
            instance.updateSelf()
          }
        }
      })
      this.onChange && this.onChange(patch)
    }
  }
}

function compute(instance, isMultiStore) {
  if (instance.compute) {
    for (let ck in instance.compute) {
      instance.computed[ck] = instance.compute[ck].call(
        isMultiStore ? instance.store : instance.store.data
      )
    }
  }
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
  return {
    k: fixArrPath(path),
    v: current
  }
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
