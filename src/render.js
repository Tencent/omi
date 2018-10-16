
import { diff } from './vdom/diff'
import options from './options'
import JSONProxy from './proxy';

let timeout = null
let patchs = {}

const handler = function (patch) {

    clearTimeout(timeout)
    if (patch.op === 'remove') {//fix arr splice 
        const kv = getArrayPatch(patch.path)
        patchs[kv.k] = kv.v
        timeout = setTimeout(function () {
            update(patchs)
            patchs = {}
        })
    } else {
        const key = fixPath(patch.path)
        patchs[key] = patch.value
        timeout = setTimeout(function () {
            update(patchs)
            patchs = {}
        })
    }
}

export function render(vnode, parent, store) {
    parent = typeof parent === 'string' ? document.querySelector(parent) : parent
    if (store) {
        store.instances = []
        extendStoreUpate(store)
        options.store = store
        store.data = new JSONProxy(store.data).observe(true, handler)
    }
    diff(null, vnode, {}, false, parent, false)
}

function update(patch) {
    options.store.update(patch)
}

function extendStoreUpate(store) {
    store.update = function (patch) {
        const updateAll = matchGlobalData(this.globalData, patch)

        if (Object.keys(patch).length > 0) {
            this.instances.forEach(instance => {
                if (updateAll || this.updateAll || instance.constructor.updatePath && needUpdate(patch, instance.constructor.updatePath)) {
                    instance.update()
                }
            })
            this.onChange && this.onChange(patch)
        }
    }
}

function matchGlobalData(globalData, diffResult) {
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

function needUpdate(diffResult, updatePath) {
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

function updateByPath(origin, path, value) {
    const arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.')
    let current = origin
    for (let i = 0, len = arr.length; i < len; i++) {
        if (i === len - 1) {
            current[arr[i]] = value
        } else {
            current = current[arr[i]]
        }
    }
}

function fixPath(path) {
    let mpPath = ''
    const arr = path.replace('/', '').split('/')
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

function getArrayPatch(path) {
    const arr = path.replace('/', '').split('/')
    let current = options.store.data[arr[0]]
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
                if (isNaN(parseInt(item))) {
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