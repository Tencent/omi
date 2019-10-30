import options from './options'
import Component from './component'

const storeHelpers = ['use', 'useSelf']

export function define(name, ctor, config) {
  if(ctor.is === 'WeElement'){
    options.mapping[name] = ctor
  } else {

    if(typeof config === 'string'){
      config = { css: config }
		} else {
      config = config || {}
    }

    class Comp extends Component {

      static css = config.css

			static propTypes = config.propTypes

			static defaultProps = config.defaultProps

			compute = config.compute

      render() {
        return ctor.call(this, this)
      }

		}

		for (let key in config) {
			if (typeof config[key] === 'function') {
				Comp.prototype[key] = function () {
					return config[key].apply(this, arguments)
				}
			}
		}

		storeHelpers.forEach(func => {
			if (config[func] && config[func] !== 'function') {
				Comp.prototype[func] = function () {
					return config[func]
				}
			}
		})


    options.mapping[name] = Comp
  }
}
