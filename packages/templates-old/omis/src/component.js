import { FORCE_RENDER } from './constants';
import { extend } from './util';
import { renderComponent } from './vdom/component';
/**
 * Base Component class.
 * Provides `update()`, which trigger rendering.
 * @typedef {object} Component
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components' getChildContext
 * @public
 *
 * @example
 * class MyFoo extends Component {
 *   render(props) {
 *     return <div />;
 *   }
 * }
 */

 let id = 0

export function Component(props, $) {
	this._dirty = true;
	this.elementId = id++
	/**
	 * @public
	 * @type {object}
	 */
	this.store = {}
	this.$ = $
	/**
	 * @public
	 * @type {object}
	 */
	this.props = props;

	this._renderCallbacks = [];
}


extend(Component.prototype, {

	/**
	 * Immediately perform a synchronous re-render of the component.
	 * @param {() => void} callback A function to be called after component is
	 * 	re-rendered.
	 * @private
	 */
	update(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, FORCE_RENDER);
	},

	/**
	 * Accepts `props`, and returns a new Virtual DOM tree to build.
	 * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
	 * @param {object} props Props (eg: JSX attributes) received from parent
	 * 	element/component
	 * @param {object} context Context object, as returned by the nearest
	 *  ancestor's `getChildContext()`
	 * @returns {import('./vnode').VNode | void}
	 */
	render() {}

});
