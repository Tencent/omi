import { h, h as createElement } from './h'
import { cloneElement } from './clone-element'
import Component from './component'
import { render, merge } from './render'
import { rerender } from './render-queue'
import options from './options'
import { define } from './define'
import { rpx } from './rpx'
import { tag } from './tag'
import ModelView from './model-view'
import { classNames, extractClass } from './class'
import { getHost } from './get-host'
import { renderToString } from './render-to-string'
import htm from 'htm'
import Children from './children'
import { extend } from './util'
import createContext from './create-context'

const html = htm.bind(h)

const WeElement = Component
const defineElement = define
function createRef() {
  return {}
}

const REACT_ELEMENT_TYPE = (typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

function isValidElement(element) {
  return element && ((element instanceof VNode) || element.$$typeof === REACT_ELEMENT_TYPE);
}

class ContextProvider {
	getChildContext() {
		return this.props.context;
	}
	render(props) {
		return props.children[0];
	}
}

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	let wrap = h(ContextProvider, { context: parentComponent.context }, vnode);
	let renderContainer = render(wrap, container);
	let component = renderContainer._component || renderContainer.base;
	if (callback) callback.call(component, renderContainer);
	return component;
}

const unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return h(Portal, { vnode, container });
}

function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}

function unmountComponentAtNode(container) {
	let existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		render(h(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



function shallowDiffers(a, b) {
	for (let i in a) if (!(i in b)) return true;
	for (let i in b) if (a[i]!==b[i]) return true;
	return false;
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		let ret;
		for (let i=0; i<hooks.length; i++) {
			let r = callMethod(this, hooks[i], arguments);

			if (skipDuplicates && r!=null) {
				if (!ret) ret = {};
				for (let key in r) if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				}
			}
			else if (typeof r!=='undefined') ret = r;
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) return;

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	let c = props.children;
	if (c && Array.isArray(c) && c.length===1 && (typeof c[0]==='string' || typeof c[0]==='function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		let ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		const displayName = this.displayName || ctor.name;

		// if (propTypes) {
		// 	PropTypes.checkPropTypes(propTypes, props, 'prop', displayName);
		// }
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}


function _Component(props, context, opts) {
	Component.call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(_Component.prototype = new Component(), {
	constructor: _Component,

	isReactComponent: {},

	replaceState(state, callback) {
		this.setState(state, callback);
		for (let i in this.state) {
			if (!(i in state)) {
				delete this.state[i];
			}
		}
	},

	getDOMNode() {
		return this.base;
	},

	isMounted() {
		return !!this.base;
	}
});


function F(){}

function PureComponent(props, context) {
	_Component.call(this, props, context);
}
F.prototype = _Component.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

options.root.Omi = {
  h,
  createElement,
  cloneElement,
  createRef,
  Component,
  render,
  rerender,
  options,
  WeElement,
  define,
  rpx,
  ModelView,
  defineElement,
  classNames,
  extractClass,
  getHost,
  renderToString,
  tag,
  merge,
  html,
  htm,
  Children,
  isValidElement,
  createPortal,
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer,
  PureComponent,
  createContext
}
options.root.omi = options.root.Omi
options.root.Omi.version = 'reomio-1.0.1'

export default {
  h,
  createElement,
  cloneElement,
  createRef,
  Component,
  render,
  rerender,
  options,
  WeElement,
  define,
  rpx,
  ModelView,
  defineElement,
  classNames,
  extractClass,
  getHost,
  renderToString,
  tag,
  merge,
  html,
  htm,
  Children,
  isValidElement,
  createPortal,
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer,
  PureComponent,
  createContext
}

export {
  h,
  createElement,
  cloneElement,
  createRef,
  Component,
  render,
  rerender,
  options,
  WeElement,
  define,
  rpx,
  ModelView,
  defineElement,
  classNames,
  extractClass,
  getHost,
  renderToString,
  tag,
  merge,
  html,
  htm,
  Children,
  isValidElement,
  createPortal,
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer,
  PureComponent,
  createContext
}
