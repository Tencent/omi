import options from './options'

const OBJECTTYPE = '[object Object]'
const ARRAYTYPE = '[object Array]'

export function define(name, ctor) {
  options.mapping[name] = ctor
  if (ctor.use) {
    ctor.updatePath = getPath(ctor.use)
  } else if (ctor.data) { //Compatible with older versions
    ctor.updatePath = getUpdatePath(ctor.data)
  }
}

export function getPath(obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    const result = {}
    obj.forEach(item => {
      if (typeof item === 'string') {
        result[item] = true
      } else {
        const tempPath = item[Object.keys(item)[0]]
        if (typeof tempPath === 'string') {
          result[tempPath] = true
        } else {
          if(typeof tempPath[0] === 'string'){
            result[tempPath[0]] = true
          }else{
            tempPath[0].forEach(path => result[path] = true)
          }
        }
      }
    })
    return result
  } else {
    return getUpdatePath(obj)
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
    result[path + '.' + key] = true
    delete result[path]
    const type = Object.prototype.toString.call(data[key])
    if (type === OBJECTTYPE) {
      _objToPath(data[key], path + '.' + key, result)
    } else if (type === ARRAYTYPE) {
      _arrayToPath(data[key], path + '.' + key, result)
    }
  })
}

function _arrayToPath(data, path, result) {
  data.forEach((item, index) => {
    result[path + '[' + index + ']'] = true
    delete result[path]
    const type = Object.prototype.toString.call(item)
    if (type === OBJECTTYPE) {
      _objToPath(item, path + '[' + index + ']', result)
    } else if (type === ARRAYTYPE) {
      _arrayToPath(item, path + '[' + index + ']', result)
    }
  })
}
