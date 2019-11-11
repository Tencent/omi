export function getUsing(data, paths) {
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
          tempPath.forEach(path => {
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
  const arr = path
    .replace(/]/g, '')
    .replace(/\[/g, '.')
    .split('.')
  let current = origin
  for (let i = 0, len = arr.length; i < len; i++) {
    current = current[arr[i]]
  }
  return current
}

export function getPath(obj, out, name) {
  const result = {}
  obj.forEach(item => {
    if (typeof item === 'string') {
      result[item] = true
    } else {
      const tempPath = item[Object.keys(item)[0]]
      if (typeof tempPath === 'string') {
        result[tempPath] = true
      } else if (typeof tempPath[0] === 'string') {
        result[tempPath[0]] = true
      } else {
        tempPath[0].forEach(path => (result[path] = true))
      }
    }
  })
  out && (out[name] = result)
  return result
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
