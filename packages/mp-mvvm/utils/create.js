import JSONProxy from './proxy'

const create = {}

create.Page = function (vm, options) {
  options.data = vm.data

  const onLoad = options.onLoad
  let timeout = null
  let patchs = {}
  options.onLoad = function (e) {
    vm.data = new JSONProxy(vm.data).observe(false, patch => {
      clearTimeout(timeout)
      if (patch.op === 'remove') {//fix arr splice 
        const kv = getArrayPatch(patch.path)
        patchs[kv.k] = kv.v
        timeout = setTimeout(() => {
          this.setData(patchs)
          patchs = {}
        })
      } else {
        const key = fixPath(patch.path)
        patchs[key] = patch.value
        timeout = setTimeout(() => {
          this.setData(patchs)
          patchs = {}
        })
      }
    })
    this.setData(vm.data)
    onLoad && onLoad.call(this, e)
  }
  Page(options)
}

create.Component = function (vm, options) {

  const ready = options.ready
  let timeout = null
  let patchs = {}

  options.ready = function (e) {
    vm.data = new JSONProxy(vm.data).observe(false, patch => {
      clearTimeout(timeout)
      if (patch.op === 'remove') {//fix arr splice 
        const kv = getArrayPatch(patch.path)
        patchs[kv.k] = kv.v
        timeout = setTimeout(() => {
          this.setData(patchs)
          patchs = {}
        })
      } else {
        const key = fixPath(patch.path)
        patchs[key] = patch.value
        timeout = setTimeout(() => {
          this.setData(patchs)
          patchs = {}
        })
      }
    })
    this.setData(vm.data)
    ready && ready.call(this, e)
  }
  Component(options)
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


if (typeof exports == 'object') {
  module.exports = create
} else if (typeof define == 'function' && define.amd) {
  define([], function () {
    return create
  })
} else {
  window.create = create
}