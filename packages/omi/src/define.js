import WeElement from './we-element'

const OBJECTTYPE = '[object Object]'
const ARRAYTYPE = '[object Array]'

export function define(name, ctor) {
  if (ctor.is === 'WeElement') {
    customElements.define(name, ctor)
    if (ctor.data && !ctor.pure) {
      ctor.updatePath = getUpdatePath(ctor.data)
    }
  } else {
    class Element extends WeElement {
      _useId = 0

      _useMap = {}

      render() {
        return ctor.call(this)
      }

      useData(value) {
        const updater = newValue => {
          this._useMap[this._useId] = newValue
          this.update()
          this._effectFn()
        }

        if (!this._isInstalled) {
          return [value, updater]
        }
        return [this._useMap[this._useId++], updater]
      }

      installed() {
        this._isInstalled = true
      }
      useEffect(fn) {
        this._effectFn = fn
      }
    }
    customElements.define(name, Element)
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
