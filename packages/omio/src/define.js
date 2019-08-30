import options from './options'
import Component from './component'

const OBJECTTYPE = '[object Object]'
const ARRAYTYPE = '[object Array]'

export function define(name, ctor) {
  if(ctor.is === 'WeElement'){
    options.mapping[name] = ctor
    if (ctor.use) {
      ctor.updatePath = getPath(ctor.use)
    }  
  } else {
    let depPaths
    let config = {}
    const len = arguments.length
    if(len === 3){
      if(typeof arguments[1] === 'function'){
        ctor = arguments[1]
        config = arguments[2]
      } else {
        depPaths = arguments[1]
        ctor = arguments[2]
      }
    } else if(len === 4){
      depPaths = arguments[1]
      ctor = arguments[2]
      config = arguments[3]
    }
    if(typeof config === 'string'){
      config = { css: config }
		}

    class Comp extends Component {
      static use = depPaths

      static css = config.css

			static propTypes = config.propTypes

			static defaultProps = config.defaultProps

      render() {
        return ctor.call(this, this)
      }

      install() {
        config.install && config.install.apply(this, arguments)
      }

      installed() {
        config.installed && config.installed.apply(this, arguments)
      }

      uninstall() {
        config.uninstall && config.uninstall.apply(this, arguments)
      }

      beforeUpdate() {
        config.beforeUpdate && config.beforeUpdate.apply(this, arguments)
      }

      updated() {
        config.updated && config.updated.apply(this, arguments)
      }

      beforeRender() {
        config.beforeRender && config.beforeRender.apply(this, arguments)
      }

      rendered() {
        config.rendered && config.rendered.apply(this, arguments)
      }

      receiveProps() {
				if(config.receiveProps){
					return config.receiveProps.apply(this, arguments)
				}
      }

		}

		if(config.use){
			if(typeof config.use  === 'function'){
				Comp.prototype.use = function(){
				 return config.use.apply(this, arguments)
				}
			} else {
				Comp.use = config.use
			}
		}

    if(Comp.use){
      Comp.updatePath = getPath(Comp.use)
    }

    options.mapping[name] = Comp
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
