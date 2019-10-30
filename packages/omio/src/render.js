import { diff } from './vdom/diff'
import obaa from './obaa'
import { getUse } from './util'
import options from './options'

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {object} [store]
 *	@public
 */
export function render(vnode, parent, store, empty, merge) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent

  if (store) {
    if (store.data) {
      obsStore(store)
    } else {
      options.isMultiStore = true
      for (let key in store) {
        if (store[key].data) {
          obsStore(store[key], key)
        }
      }
    }
  }


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

function obsStore(store, storeName){

  store.instances = []
  store.updateSelfInstances = []
  extendStoreUpate(store, storeName)

  obaa(store.data, (prop, val, old, path) => {
    const patchs = {}
    const key = fixPath(path + '-' + prop)
    patchs[key] = true
    store.update(patchs)
  })
}

export function merge(vnode, merge, store) {
  obsStore(store)

  merge =
    typeof merge === 'string'
      ? document.querySelector(merge)
      : merge

  return diff(merge, vnode, store)
}

function extendStoreUpate(store, key) {
  store.update = function(patch) {
    if (Object.keys(patch).length > 0) {
      this.instances.forEach(instance => {
				compute(instance, key)
        if (key) {
					if ((
							instance._updatePath && instance._updatePath[key] && needUpdate(patch, instance._updatePath[key]))) {
						if (instance.use) {
							getUse(store.data, (typeof instance.use === 'function' ? instance.use() : instance.use)[key], instance.using, key)
						}

						instance.update()
					}
				} else {
          if (instance._updatePath && needUpdate(patch, instance._updatePath)) {
            if(instance.use){
              instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use)
            }
            instance.update()
          }
        }
      })

      this.updateSelfInstances.forEach(instance => {
				compute(instance, key)
        if (key) {
					if ((
							instance._updateSelfPath && instance._updateSelfPath[key] && needUpdate(patch, instance._updateSelfPath[key]))) {
						if (instance.useSelf) {
							getUse(store.data, (typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf)[key], instance.usingSelf, key)
						}

						instance.updateSelf()
					}
				} else {
          if (instance._updateSelfPath && needUpdate(patch, instance._updateSelfPath)) {
            instance.usingSelf = getUse(store.data, typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf)
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
			instance.computed[ck] = instance.compute[ck].call(isMultiStore ? instance.store : instance.store.data)
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

