import WeElement from './we-element'
import options from './options'

const storeHelpers = ['use', 'useSelf']

export function define(name, ctor, config) {
  if (customElements.get(name)) {
    return
  }
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
      config = config || {}
    }

    class Ele extends WeElement {
      static css = config.css

      static propTypes = config.propTypes

      static defaultProps = config.defaultProps

      static isLightDOM = config.isLightDOM

      compute = config.compute

      render() {
        return ctor.call(this, this)
      }
    }

    for (let key in config) {
      if (typeof config[key] === 'function') {
        Ele.prototype[key] = function () {
          return config[key].apply(this, arguments)
        }
      }
    }

    storeHelpers.forEach(func => {
      if (config[func] && config[func] !== 'function') {
        Ele.prototype[func] = function () {
          return config[func]
        }
      }
    })

    customElements.define(name, Ele)
    options.mapping[name] = Ele
  }
}
