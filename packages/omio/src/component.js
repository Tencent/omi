import { FORCE_RENDER } from './constants'
import { extend } from './util'
import { renderComponent } from './vdom/component'
import { enqueueRender } from './render-queue'
import options from './options'

let id = 0
function getId() {
  return id++
}
/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, data) {
 *			return <div />;
 *		}
 *	}
 */
export function Component(props, context) {
  /** @public
   *	@type {object}
   */
  this.context = context

  /** @public
   *	@type {object}
   */
  this.props = props

  /** @public
   *	@type {object}
   */
  this.data = this.data || {}

  this._id = getId()

  this._preStyle = null

  this.store = null
}

Component.is = 'WeElement'

extend(Component.prototype, {
  /** Immediately perform a synchronous re-render of the component.
   *	@param {function} callback		A function to be called after component is re-rendered.
   *	@private
   */
  forceUpdate(callback) {
    if (callback)
      (this._renderCallbacks = this._renderCallbacks || []).push(callback)
    renderComponent(this, FORCE_RENDER)
    if (options.componentChange) options.componentChange(this, this.base)
  },

  update(callback) {
    this.forceUpdate(callback)
  },

  /** Accepts `props` and `data`, and returns a new Virtual DOM tree to build.
   *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
   *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
   *	@param {object} data		The component's current data
   *	@param {object} context		Context object (if a parent component has provided context)
   *	@returns VNode
   */
  render() {}
})
