/*
    westore 2.0 
*/

import JSONProxy from './proxy'

let globalStore = null
let currentData = null
let timeout = null
let patchs = {}

const fnMapping = {}
const fnPreResult = {}
const fnCurrentResult = {}

const handler = function (patch) {
    clearTimeout(timeout)
    if (patch.op === 'remove') {//fix arr splice 
        const kv = getArrayPatch(patch.path)
        patchs[kv.k] = kv.v
        timeout = setTimeout(function () {
            _update(patchs)
            patchs = {}
        })
    } else {
        const key = fixPath(patch.path)
        patchs[key] = patch.value
        timeout = setTimeout(function () {
            _update(patchs)
            patchs = {}
        })
    }
}

export default function create(store, option) {
    if (arguments.length === 2) {
        if (option.data && Object.keys(option.data).length > 0) {
            Object.assign(store.data, option.data)
        }
        if (!store.instances) {
            store.instances = {}
            store.update = update
        }

        getApp().globalData && (getApp().globalData.store = store)
        globalStore = store
        option.data = store.data
        currentData = store.data
        const jp = new JSONProxy(store.data, handler)
        const onLoad = option.onLoad
        setFnMapping(globalStore.data)
        option.onLoad = function (e) {
            this.update = update
            this.store = store
            this.store.data = jp.observe(true, handler)
            store.instances[this.route] = []
            store.instances[this.route].push(this)
            onLoad && onLoad.call(this, e)
        }
        Page(option)
    } else {
        const ready = store.ready
        store.ready = function () {
            this.update = update
            this.page = getCurrentPages()[getCurrentPages().length - 1]
            this.store = this.page.store
            Object.assign(this.store.data, store.data)
            setFnMapping(store.data)
            this.setData.call(this, this.store.data)

            this.store.instances[this.page.route].push(this)
            ready && ready.call(this)
        }
        Component(store)
    }
}

function _update(kv) {
    defineFnProp()
    Object.keys(fnCurrentResult).forEach(key => {
        const v = fnCurrentResult[key]
        if(v !== fnPreResult[key]){
            kv[key] = v
            fnPreResult[key] = v
        }
    })
    setFnMapping(globalStore.data)
    for (let key in globalStore.instances) {
        globalStore.instances[key].forEach(ins => {
            ins.setData.call(ins, kv)
        })
    }
    globalStore.onChange && globalStore.onChange(kv)
}

function update(patch) {
    if (patch) {
        for (let key in patch) {
            updateByPath(globalStore.data, key, patch[key])
        }
    }
}

function setFnMapping(data) {
    Object.keys(data).forEach(key => {
        const fn = data[key]
        if (typeof fn == 'function') {
            fnMapping[key] = () => {
                return fn.call(globalStore.data)
            }
        }
    })
}

function defineFnProp(){
    Object.keys(fnMapping).forEach(key => {
        fnCurrentResult[key] = fnMapping[key]()
    })
}

function getArrayPatch(path) {
    const arr = path.replace('/', '').split('/')
    let current = currentData[arr[0]]
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

function updateByPath(origin, path, value) {
    const arr = path.replace(/]/g,'').replace(/\[/g, '.').split('.')
    
    let current = origin
    for (let i = 0, len = arr.length; i < len; i++) {
        if (i === len - 1) {
            current[arr[i]] = value
        } else {
            current = current[arr[i]]
        }
    }
}