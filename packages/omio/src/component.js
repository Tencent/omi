import { FORCE_RENDER } from './constants'
import { renderComponent } from './vdom/component'
import options from './options'
import { nProps, assign } from './util'

let id = 0

export default class Component {
  static is = 'WeElement'

  constructor(props, store) {
    this.props = assign({ },
      this.constructor.defaultProps,
      props
    )
    this.elementId = id++

    this._preCss = null

		this.store = store
		this.computed = {}
  }

  update(ignoreAttrs, updateSelf, callback) {
    if(this._willUpdate) return
    this._willUpdate = true
    if (callback)
      (this._renderCallbacks = this._renderCallbacks || []).push(callback)
    renderComponent(this, FORCE_RENDER)
    if (options.componentChange) options.componentChange(this, this.base)
    this._willUpdate = false
  }

  updateSelf() {
    if(this._willUpdateSelf) return
    this._willUpdateSelf = true
    renderComponent(this, FORCE_RENDER, null, null, true)
    this._willUpdateSelf = false
  }


  fire(type, data) {
    Object.keys(this.props).every(key => {
      if ('on' + type.toLowerCase() === key.toLowerCase()) {
        this.props[key]({ detail: data })
        return false
      }
      return true
    })
  }

  render() {}
}
