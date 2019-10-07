import WeElement from './we-element'
import options from './options'

export function define(name, ctor) {
  if (options.mapping[name]) {
    return
  }
  if (ctor.is === 'WeElement') {
    customElements.define(name, ctor)
    options.mapping[name] = ctor

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

    customElements.define(name, Ele)
    options.mapping[name] = Ele
  }
}



