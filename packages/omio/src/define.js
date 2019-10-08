import options from './options'
import Component from './component'


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
				Comp.prototype.use = function(){
          return config.use
        }
			}
    }
    
    if(config.useSelf){
			if(typeof config.useSelf  === 'function'){
				Comp.prototype.useSelf = function(){
				 return config.useSelf.apply(this, arguments)
				}
			} else {
				Comp.prototype.useSelf = function(){
          return config.useSelf
        }
			}
		}

    options.mapping[name] = Comp
  }
}
