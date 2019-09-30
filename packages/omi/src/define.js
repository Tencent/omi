import WeElement from './we-element'
import options from './options'

const getType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

export function define(name, ctor) {
  if (options.mapping[name]) {
    return
  }
  if (ctor.is === 'WeElement') {
    customElements.define(name, ctor)
    options.mapping[name] = ctor
    if (ctor.use) {
      ctor.updatePath = getPath(ctor.use)
    }
  } else {
    let depPaths
    let config = {}
    const len = arguments.length
    if (len === 3) {
      if (typeof arguments[1] === 'function') {
        ctor = arguments[1]
        config = arguments[2]
      } else {
        depPaths = arguments[1]
        ctor = arguments[2]
      }
    } else if (len === 4) {
      depPaths = arguments[1]
      ctor = arguments[2]
      config = arguments[3]
    }
    if (typeof config === 'string') {
      config = { css: config }
    }

    class Ele extends WeElement {
      static use = depPaths

      static css = config.css

      static propTypes = config.propTypes

      static defaultProps = config.defaultProps

      render() {
        return ctor.call(this, this)
      }

      receiveProps() {
        if (config.receiveProps) {
          return config.receiveProps.apply(this, arguments)
        }
      }
    }

    const eleHooks = ['install', 'installed', 'uninstall', 'beforeUpdate', 'updated', 'beforeRender', 'rendered'],
      storeHelpers = ['use', 'useSelf']

    eleHooks.forEach(hook => {
      if (config[hook]) {
        Ele.prototype[hook] = function () {
          config[hook].apply(this, arguments)
        }
      }
    })

    storeHelpers.forEach(func => {
      if (config[func]) {
        Ele.prototype[func] = function () {
          return typeof config[func] === 'function'
            ? config[func].apply(this, arguments)
            : config[func]
        }
      }
    })


    if (Ele.use) {
      Ele.updatePath = getPath(Ele.use)
    }

    customElements.define(name, Ele)
    options.mapping[name] = Ele
  }
}

export function getPath(obj) {
  if (getType(obj) === 'Array') {
    const result = {}
    obj.forEach(item => {
      if (typeof item === 'string') {
        result[item] = true
      } else {
        const tempPath = item[Object.keys(item)[0]]
        if (typeof tempPath === 'string') {
          result[tempPath] = true
        } else {
          if (typeof tempPath[0] === 'string') {
            result[tempPath[0]] = true
          } else {
            tempPath[0].forEach(path => (result[path] = true))
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
    const type = getType(data[key])
    if (type === 'Object') {
      _objToPath(data[key], key, result)
    } else if (type === 'Array') {
      _arrayToPath(data[key], key, result)
    }
  })
}

function _objToPath(data, path, result) {
  Object.keys(data).forEach(key => {
    result[path + '.' + key] = true
    delete result[path]
    const type = getType(data[key])
    if (type === 'Object') {
      _objToPath(data[key], path + '.' + key, result)
    } else if (type === 'Array') {
      _arrayToPath(data[key], path + '.' + key, result)
    }
  })
}

function _arrayToPath(data, path, result) {
  data.forEach((item, index) => {
    result[path + '[' + index + ']'] = true
    delete result[path]
    const type = getType(item)
    if (type === 'Object') {
      _objToPath(item, path + '[' + index + ']', result)
    } else if (type === 'Array') {
      _arrayToPath(item, path + '[' + index + ']', result)
    }
  })
}
