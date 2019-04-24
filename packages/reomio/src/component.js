import { FORCE_RENDER } from './constants'
import { renderComponent } from './vdom/component'
import options from './options'
import { enqueueRender } from './render-queue'
import { nProps, assign } from './util'
/**
 * Base Component class.
 * Provides `setState()` and `forceUpdate()`, which trigger rendering.
 * @typedef {object} Component
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components' getChildContext
 * @public
 *
 * @example
 * class MyFoo extends Component {
 *   render(props, state) {
 *     return <div />;
 *   }
 * }
 */

let id = 0

export default class Component {
  static is = 'WeElement'

  constructor(props, store) {
    this._dirty = true
    this.context = store
    this.props = assign(
      nProps(this.constructor.props),
      this.constructor.defaultProps,
      props
    )
    this.elementId = id++
    this.data = this.constructor.data || this.data || this.state || {}
    this.state = this.data
    this._preCss = null

    this.store = store
    this._renderCallbacks = []
  }

  update(callback) {
    this._willUpdate = true
    if (callback)
      (this._renderCallbacks = this._renderCallbacks || []).push(callback)
    renderComponent(this, FORCE_RENDER)
    if (options.componentChange) options.componentChange(this, this.base)
    this._willUpdate = false
  }

  setState(state, callback) {
    if (!this.prevState) this.prevState = this.state
    this.state = extend(
      extend({}, this.state),
      typeof state === 'function' ? state(this.state, this.props) : state
    )
    this.data = this.state
    if (callback) this._renderCallbacks.push(callback)
    enqueueRender(this)
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

  forceUpdate(callback) {
    if (callback) this._renderCallbacks.push(callback)
    renderComponent(this, FORCE_RENDER)
  }

  render() {}
}
