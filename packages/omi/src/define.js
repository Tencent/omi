import WeElement from './we-element'
const OBJECTTYPE = "[object Object]"
const ARRAYTYPE = "[object Array]"
const FUNCTION = "function"

export function define(name, ctor) {
  if (typeof ctor === FUNCTION) {
    if (window.Reflect === undefined) {
      throw 'Do not use pure element in browsers that do not support Reflect.'
    }
    
    function CustomElement() {
      return Reflect.construct(WeElement, [], CustomElement)
    }

    CustomElement.pure = true
    CustomElement.prototype.render = ctor
    Object.setPrototypeOf(CustomElement.prototype, WeElement.prototype)
    Object.setPrototypeOf(CustomElement, WeElement)

    customElements.define(name, CustomElement)
  } else {
    customElements.define(name, ctor)
    if (ctor.data && !ctor.pure) {
      ctor.updatePath = getUpdatePath(ctor.data)
    }
  }
}

export function getUpdatePath(data) {
  const result = {}
  dataToPath(data, result)
  return result
}

function dataToPath(data, result) {
  Object.keys(data).forEach(key => {
    result[key] = true
    const type = Object.prototype.toString.call(data[key])
    if (type === OBJECTTYPE) {
      _objToPath(data[key], key, result)
    } else if (type === ARRAYTYPE) {
      _arrayToPath(data[key], key, result)
    }
  })
}

function _objToPath(data, path, result) {
  Object.keys(data).forEach(key => {
    result[path + "." + key] = true
    delete result[path]
    const type = Object.prototype.toString.call(data[key])
    if (type === OBJECTTYPE) {
      _objToPath(data[key], path + "." + key, result)
    } else if (type === ARRAYTYPE) {
      _arrayToPath(data[key], path + "." + key, result)
    }
  })
}

function _arrayToPath(data, path, result) {
  data.forEach((item, index) => {
    result[path + "[" + index + "]"] = true
    delete result[path]
    const type = Object.prototype.toString.call(item)
    if (type === OBJECTTYPE) {
      _objToPath(item, path + "[" + index + "]", result)
    } else if (type === ARRAYTYPE) {
      _arrayToPath(item, path + "[" + index + "]", result)
    }
  })
}
