import WeElement from './we-element'
import { cssToDom } from './util'

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

      render(props, data) {
        return ctor.call(this, props, data)
      }

      beforeRender() {
        this._useId = 0
      }

      useCss(css) {
        const style = this.shadowRoot.querySelector('style')
        style && this.shadowRoot.removeChild(style)
        this.shadowRoot.appendChild(cssToDom(css))
      }

      useData(data) {
        return this.use({ data: data })
      }

      use(option) {
        this._useId++
        const updater = newValue => {
          const item = this._useMap[updater.id]

          item.data = newValue

          this.update()
          item.effect && item.effect()
        }

        updater.id = this._useId
        if (!this._isInstalled) {
          this._useMap[this._useId] = option
          return [option.data, updater]
        }

        return [this._useMap[this._useId].data, updater]
      }

      installed() {
        this._isInstalled = true
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
