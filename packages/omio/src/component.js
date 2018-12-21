import { FORCE_RENDER } from './constants'
import { renderComponent } from './vdom/component'
import options from './options'
import { nProps, assign } from './util'

let id = 0

export default class Component {
  static is = 'WeElement'

  constructor(props, store) {
    this.props = assign(
      nProps(this.constructor.props),
      this.constructor.defaultProps,
      props
    )
    this.elementId = id++
    this.data = this.constructor.data || this.data || {}

    this._preCss = null

    this.store = store
  }

  update(callback) {
    this._willUpdate = true
    if (callback)
      (this._renderCallbacks = this._renderCallbacks || []).push(callback)
    renderComponent(this, FORCE_RENDER)
    if (options.componentChange) options.componentChange(this, this.base)
    this._willUpdate = false
  }

  fire(type, data) {
    Object.keys(this.props).every(key => {
      if ('on' + type === key.toLowerCase()) {
        this.props[key]({ detail: data })
        return false
      }
      return true
    })
  }

  render() {}
}
