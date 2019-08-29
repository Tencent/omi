import WeElement from './we-element'
import options from './options'

const OBJECTTYPE = '[object Object]'
const ARRAYTYPE = '[object Array]'

export function define(name, ctor) {
  if (ctor.is === 'WeElement') {
    if(options.mapping[name]){
      return
    }
    customElements.define(name, ctor)
    options.mapping[name] = ctor
    if (ctor.use) {
      ctor.updatePath = getPath(ctor.use)
    }
  } else {
    let depPaths
    let options = {}
    const len = arguments.length
    if(len === 3){
      if(typeof arguments[1] === 'function'){
        ctor = arguments[1]
        options = arguments[2]
      } else {
        depPaths = arguments[1]
        ctor = arguments[2]
      }
    } else if(len === 4){
      depPaths = arguments[1]
      ctor = arguments[2]
      options = arguments[3]
    }
    if(typeof options === 'string'){
      options = { css: options }
		}

    class Ele extends WeElement {
      static use = depPaths

      static css = options.css

			static propTypes = options.propTypes

			static defaultProps = options.defaultProps

      render() {
        return ctor.call(this, this)
      }

      install() {
        options.install && options.install.apply(this, arguments)
      }

      installed() {
        options.installed && options.installed.apply(this, arguments)
      }

      uninstall() {
        options.uninstall && options.uninstall.apply(this, arguments)
      }

      beforeUpdate() {
        options.beforeUpdate && options.beforeUpdate.apply(this, arguments)
      }

      updated() {
        options.updated && options.updated.apply(this, arguments)
      }

      beforeRender() {
        options.beforeRender && options.beforeRender.apply(this, arguments)
      }

      rendered() {
        options.rendered && options.rendered.apply(this, arguments)
      }

      receiveProps() {
				if(options.receiveProps){
					return options.receiveProps.apply(this, arguments)
				}
      }

		}

		if(options.use){
			if(typeof options.use  === 'function'){
				Ele.prototype.use = function(){
				 return options.use.apply(this, arguments)
				}
			} else {
				Ele.use = options.use
			}
		}

    if(Ele.use){
      Ele.updatePath = getPath(Ele.use)
		}

    customElements.define(name, Ele)
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
