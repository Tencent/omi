import WeElement from './we-element'
import options from './options'

export function define(name, ctor, config) {
  if (options.mapping[name]) {
    return
  }
  if (ctor.is === 'WeElement') {
    customElements.define(name, ctor)
    options.mapping[name] = ctor

  } else {
   
    if (typeof config === 'string') {
      config = { css: config }
    } else {
      config = config || { }
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



