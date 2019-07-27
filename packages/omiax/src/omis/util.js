/**
 * Copy all properties from `props` onto `obj`.
 * @param {object} obj Object onto which properties should be copied.
 * @param {object} props Object from which to copy properties.
 * @returns {object}
 * @private
 */
export function extend(obj, props) {
	for (let i in props) obj[i] = props[i];
	return obj;
}

/** Invoke or update a ref, depending on whether it is a function or object ref.
 *  @param {object|function} [ref=null]
 *  @param {any} [value]
 */
export function applyRef(ref, value) {
	if (ref) {
		if (typeof ref=='function') ref(value);
		else ref.current = value;
	}
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 * @type {(callback: function) => void}
 */
export const defer = typeof Promise=='function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

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



export function getUse(data, paths) {
  const obj = []
  paths.forEach((path, index) => {
    const isPath = typeof path === 'string'
    if (isPath) {
      obj[index] = getTargetByPath(data, path)
    } else {
      const key = Object.keys(path)[0]
      const value = path[key]
      if (typeof value === 'string') {
        obj[index] = getTargetByPath(data, value)
      } else {
        const tempPath = value[0]
        if (typeof tempPath === 'string') {
          const tempVal = getTargetByPath(data, tempPath)
          obj[index] = value[1] ? value[1](tempVal) : tempVal
        } else {
          const args = []
          tempPath.forEach(path =>{
            args.push(getTargetByPath(data, path))
          })
          obj[index] = value[1].apply(null, args)
        }
      }
      obj[key] = obj[index]
    }
  })
  return obj
}

export function getTargetByPath(origin, path) {
  const arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.')
  let current = origin
  for (let i = 0, len = arr.length; i < len; i++) {
    current = current[arr[i]]
  }
  return current
}
