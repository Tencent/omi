import { diff } from './vdom/diff';
import { obaa } from './obaa'
import { getUse } from './util'

/**
 * Render JSX into a `parent` Element.
 * @param {import('./vnode').VNode} vnode A (JSX) VNode to render
 * @param {import('./dom').OmiElement} parent DOM element to render into
 * @param {import('./dom').OmiElement} [merge] Attempt to re-use an existing DOM tree rooted at
 *  `merge`
 * @public
 *
 * @example
 * // render a div into <body>:
 * render(<div id="hello">hello!</div>, document.body);
 *
 * @example
 * // render a "Thing" component into #foo:
 * const Thing = ({ name }) => <span>{ name }</span>;
 * render(<Thing name="one" />, document.querySelector('#foo'));
 */
export function render(vnode, parent, globalStore) {
	obsStore(globalStore)
	return diff(null, vnode, globalStore, false, typeof parent === 'string' ? document.querySelector(parent) : parent, false);
}


function obsStore(store){
  if (store && store.data) {
    store.instances = []
    extendStoreUpate(store)

    obaa(store.data, (prop, val, old, path) => {
			const patchs = {}
      const key = fixPath(path + '-' + prop)
      patchs[key] = true
			store.update(patchs)
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
						needUpdate(patch, instance.constructor.updatePath)) ||
						(instance._updatePath &&
							needUpdate(patch, instance._updatePath))
        ) {
					//update this.using
					if(instance.constructor.use){
						instance.using = getUse(store.data, instance.constructor.use)
					} else if(instance.use){
						instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use)
					}

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
