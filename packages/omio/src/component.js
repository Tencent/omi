import { FORCE_RENDER } from './constants'
import { renderComponent } from './vdom/component'
import options from './options'
import { nProps } from './util'

let id = 0

export default class Component {
  static is = 'WeElement'

  constructor() {
    this.props = Object.assign(
      nProps(this.constructor.props),
      this.constructor.defaultProps
    )
    this.elementId = id++
    this.data = this.constructor.data || {}

    this._preCss = null

    this.store = null
  }

  update(callback) {
    if (callback)
      (this._renderCallbacks = this._renderCallbacks || []).push(callback)
    renderComponent(this, FORCE_RENDER)
    if (options.componentChange) options.componentChange(this, this.base)
  }

  render() { }
}

