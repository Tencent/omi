(function () {
	'use strict';

	/** Virtual DOM Node */
	function VNode() {}

	function getGlobal() {
		if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
			if (typeof self !== 'undefined') {
				return self;
			} else if (typeof window !== 'undefined') {
				return window;
			} else if (typeof global !== 'undefined') {
				return global;
			}
			return function () {
				return this;
			}();
		}
		return global;
	}

	/** Global options
	 *	@public
	 *	@namespace options {Object}
	 */
	var options = {

		store: null,

		root: getGlobal()
		//componentChange(component, element) { },
		/** If `true`, `prop` changes trigger synchronous component updates.
	  *	@name syncComponentUpdates
	  *	@type Boolean
	  *	@default true
	  */
		//syncComponentUpdates: true,

		/** Processes all created VNodes.
	  *	@param {VNode} vnode	A newly-created VNode to normalize/process
	  */
		//vnode(vnode) { }

		/** Hook invoked after a component is mounted. */
		//afterMount(component) { },

		/** Hook invoked after the DOM is updated with a component's latest render. */
		//afterUpdate(component) { }

		/** Hook invoked immediately before a component is unmounted. */
		// beforeUnmount(component) { }
	};

	var stack = [];
	var EMPTY_CHILDREN = [];

	function h(nodeName, attributes) {
		var children = EMPTY_CHILDREN,
		    lastSimple = void 0,
		    child = void 0,
		    simple = void 0,
		    i = void 0;
		for (i = arguments.length; i-- > 2;) {
			stack.push(arguments[i]);
		}
		if (attributes && attributes.children != null) {
			if (!stack.length) stack.push(attributes.children);
			delete attributes.children;
		}
		while (stack.length) {
			if ((child = stack.pop()) && child.pop !== undefined) {
				for (i = child.length; i--;) {
					stack.push(child[i]);
				}
			} else {
				if (typeof child === 'boolean') child = null;

				if (simple = typeof nodeName !== 'function') {
					if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
				}

				if (simple && lastSimple) {
					children[children.length - 1] += child;
				} else if (children === EMPTY_CHILDREN) {
					children = [child];
				} else {
					children.push(child);
				}

				lastSimple = simple;
			}
		}

		var p = new VNode();
		p.nodeName = nodeName;
		p.children = children;
		p.attributes = attributes == null ? undefined : attributes;
		p.key = attributes == null ? undefined : attributes.key;

		// if a "vnode hook" is defined, pass every created VNode to it
		if (options.vnode !== undefined) options.vnode(p);

		return p;
	}

	/**
	 * @license
	 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 */

	/**
	 * This shim allows elements written in, or compiled to, ES5 to work on native
	 * implementations of Custom Elements v1. It sets new.target to the value of
	 * this.constructor so that the native HTMLElement constructor can access the
	 * current under-construction element's definition.
	 */
	(function () {
		if (
		// No Reflect, no classes, no need for shim because native custom elements
		// require ES2015 classes or Reflect.
		window.Reflect === undefined || window.customElements === undefined ||
		// The webcomponentsjs custom elements polyfill doesn't require
		// ES2015-compatible construction (`super()` or `Reflect.construct`).
		window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
			return;
		}
		var BuiltInHTMLElement = HTMLElement;
		window.HTMLElement = function HTMLElement() {
			return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
		};
		HTMLElement.prototype = BuiltInHTMLElement.prototype;
		HTMLElement.prototype.constructor = HTMLElement;
		Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
	})();

	function cssToDom(css) {
		var node = document.createElement('style');
		node.textContent = css;
		return node;
	}

	function npn(str) {
		return str.replace(/-(\w)/g, function ($, $1) {
			return $1.toUpperCase();
		});
	}

	/** Invoke or update a ref, depending on whether it is a function or object ref.
	 *  @param {object|function} [ref=null]
	 *  @param {any} [value]
	 */
	function applyRef(ref, value) {
		if (ref != null) {
			if (typeof ref == 'function') ref(value);else ref.current = value;
		}
	}

	/**
	 * Call a function asynchronously, as soon as possible. Makes
	 * use of HTML Promise to schedule the callback if available,
	 * otherwise falling back to `setTimeout` (mainly for IE<11).
	 * @type {(callback: function) => void}
	 */
	var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

	function isArray(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}

	function nProps(props) {
		if (!props || isArray(props)) return {};
		var result = {};
		Object.keys(props).forEach(function (key) {
			result[key] = props[key].value;
		});
		return result;
	}

	// render modes

	var ATTR_KEY = '__preactattr_';

	// DOM properties that should NOT have "px" added when numeric
	var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

	/**
	 * Check if two nodes are equivalent.
	 *
	 * @param {Node} node			DOM Node to compare
	 * @param {VNode} vnode			Virtual DOM node to compare
	 * @param {boolean} [hydrating=false]	If true, ignores component constructors when comparing.
	 * @private
	 */
	function isSameNodeType(node, vnode, hydrating) {
	  if (typeof vnode === 'string' || typeof vnode === 'number') {
	    return node.splitText !== undefined;
	  }
	  if (typeof vnode.nodeName === 'string') {
	    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	  }
	  return hydrating || node._componentConstructor === vnode.nodeName;
	}

	/**
	 * Check if an Element has a given nodeName, case-insensitively.
	 *
	 * @param {Element} node	A DOM Element to inspect the name of.
	 * @param {String} nodeName	Unnormalized name to compare against.
	 */
	function isNamedNode(node, nodeName) {
	  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	}

	/**
	 * A DOM event listener
	 * @typedef {(e: Event) => void} EventListner
	 */

	/**
	 * A mapping of event types to event listeners
	 * @typedef {Object.<string, EventListener>} EventListenerMap
	 */

	/**
	 * Properties Preact adds to elements it creates
	 * @typedef PreactElementExtensions
	 * @property {string} [normalizedNodeName] A normalized node name to use in diffing
	 * @property {EventListenerMap} [_listeners] A map of event listeners added by components to this DOM node
	 * @property {import('../component').Component} [_component] The component that rendered this DOM node
	 * @property {function} [_componentConstructor] The constructor of the component that rendered this DOM node
	 */

	/**
	 * A DOM element that has been extended with Preact properties
	 * @typedef {Element & ElementCSSInlineStyle & PreactElementExtensions} PreactElement
	 */

	/**
	 * Create an element with the given nodeName.
	 * @param {string} nodeName The DOM node to create
	 * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
	 *  namespace.
	 * @returns {PreactElement} The created DOM node
	 */
	function createNode(nodeName, isSvg) {
		/** @type {PreactElement} */
		var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
		node.normalizedNodeName = nodeName;
		return node;
	}

	/**
	 * Remove a child node from its parent if attached.
	 * @param {Node} node The node to remove
	 */
	function removeNode(node) {
		var parentNode = node.parentNode;
		if (parentNode) parentNode.removeChild(node);
	}

	/**
	 * Set a named attribute on the given Node, with special behavior for some names
	 * and event handlers. If `value` is `null`, the attribute/handler will be
	 * removed.
	 * @param {PreactElement} node An element to mutate
	 * @param {string} name The name/key to set, such as an event or attribute name
	 * @param {*} old The last value that was set for this name/node pair
	 * @param {*} value An attribute value, such as a function to be used as an
	 *  event handler
	 * @param {boolean} isSvg Are we currently diffing inside an svg?
	 * @private
	 */
	function setAccessor(node, name, old, value, isSvg) {
		if (name === 'className') name = 'class';

		if (name === 'key') {
			// ignore
		} else if (name === 'ref') {
			applyRef(old, null);
			applyRef(value, node);
		} else if (name === 'class' && !isSvg) {
			node.className = value || '';
		} else if (name === 'style') {
			if (!value || typeof value === 'string' || typeof old === 'string') {
				node.style.cssText = value || '';
			}
			if (value && typeof value === 'object') {
				if (typeof old !== 'string') {
					for (var i in old) {
						if (!(i in value)) node.style[i] = '';
					}
				}
				for (var _i in value) {
					node.style[_i] = typeof value[_i] === 'number' && IS_NON_DIMENSIONAL.test(_i) === false ? value[_i] + 'px' : value[_i];
				}
			}
		} else if (name === 'dangerouslySetInnerHTML') {
			if (value) node.innerHTML = value.__html || '';
		} else if (name[0] == 'o' && name[1] == 'n') {
			var useCapture = name !== (name = name.replace(/Capture$/, ''));
			name = name.toLowerCase().substring(2);
			if (value) {
				if (!old) node.addEventListener(name, eventProxy, useCapture);
			} else {
				node.removeEventListener(name, eventProxy, useCapture);
			}
			(node._listeners || (node._listeners = {}))[name] = value;
		} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
			// Attempt to set a DOM property to the given value.
			// IE & FF throw for certain property-value combinations.
			try {
				node[name] = value == null ? '' : value;
			} catch (e) {}
			if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
		} else {
			var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
			// spellcheck is treated differently than all other boolean values and
			// should not be removed when the value is `false`. See:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
			if (value == null || value === false) {
				if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
			} else if (typeof value === 'string') {
				if (ns) {
					node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
				} else {
					node.setAttribute(name, value);
				}
			}
		}
	}

	/**
	 * Proxy an event to hooked event handlers
	 * @param {Event} e The event object from the browser
	 * @private
	 */
	function eventProxy(e) {
		return this._listeners[e.type](options.event && options.event(e) || e);
	}

	/** Diff recursion count, used to track the end of the diff cycle. */
	var diffLevel = 0;

	/** Global flag indicating if the diff is currently within an SVG */
	var isSvgMode = false;

	/** Global flag indicating if the diff is performing hydration */
	var hydrating = false;

	/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
	 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
	 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
	 *	@returns {Element} dom			The created/mutated element
	 *	@private
	 */
	function diff(dom, vnode, context, mountAll, parent, componentRoot) {
		// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
		if (!diffLevel++) {
			// when first starting the diff, check if we're diffing an SVG or within an SVG
			isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

			// hydration is indicated by the existing element to be diffed not having a prop cache
			hydrating = dom != null && !(ATTR_KEY in dom);
		}

		var ret = idiff(dom, vnode, context, mountAll, componentRoot);

		// append the element if its a new parent
		if (parent && ret.parentNode !== parent) parent.appendChild(ret);

		// diffLevel being reduced to 0 means we're exiting the diff
		if (! --diffLevel) {
			hydrating = false;
			// invoke queued componentDidMount lifecycle methods
		}

		return ret;
	}

	/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
	function idiff(dom, vnode, context, mountAll, componentRoot) {
		var out = dom,
		    prevSvgMode = isSvgMode;

		// empty values (null, undefined, booleans) render as empty Text nodes
		if (vnode == null || typeof vnode === 'boolean') vnode = '';

		// Fast case: Strings & Numbers create/update Text nodes.
		if (typeof vnode === 'string' || typeof vnode === 'number') {

			// update if it's already a Text node:
			if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
				/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
				if (dom.nodeValue != vnode) {
					dom.nodeValue = vnode;
				}
			} else {
				// it wasn't a Text node: replace it with one and recycle the old Element
				out = document.createTextNode(vnode);
				if (dom) {
					if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
					recollectNodeTree(dom, true);
				}
			}

			out[ATTR_KEY] = true;

			return out;
		}

		// If the VNode represents a Component, perform a component diff:
		var vnodeName = vnode.nodeName;

		// Tracks entering and exiting SVG namespace when descending through the tree.
		isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

		// If there's no existing element or it's the wrong type, create a new one:
		vnodeName = String(vnodeName);
		if (!dom || !isNamedNode(dom, vnodeName)) {
			out = createNode(vnodeName, isSvgMode);

			if (dom) {
				// move children into the replacement node
				while (dom.firstChild) {
					out.appendChild(dom.firstChild);
				} // if the previous Element was mounted into the DOM, replace it inline
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

				// recycle the old element (skips non-Element node types)
				recollectNodeTree(dom, true);
			}
		}

		var fc = out.firstChild,
		    props = out[ATTR_KEY],
		    vchildren = vnode.children;

		if (props == null) {
			props = out[ATTR_KEY] = {};
			for (var a = out.attributes, i = a.length; i--;) {
				props[a[i].name] = a[i].value;
			}
		}

		// Optimization: fast-path for elements containing a single TextNode:
		if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
			if (fc.nodeValue != vchildren[0]) {
				fc.nodeValue = vchildren[0];
			}
		}
		// otherwise, if there are existing or new children, diff them:
		else if (vchildren && vchildren.length || fc != null) {
				innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
			}

		// Apply attributes/props from VNode to the DOM Element:
		diffAttributes(out, vnode.attributes, props);

		// restore previous SVG mode: (in case we're exiting an SVG namespace)
		isSvgMode = prevSvgMode;

		return out;
	}

	/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
	 *	@param {Element} dom			Element whose children should be compared & mutated
	 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
	 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
	 *	@param {Boolean} mountAll
	 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
	 */
	function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
		var originalChildren = dom.childNodes,
		    children = [],
		    keyed = {},
		    keyedLen = 0,
		    min = 0,
		    len = originalChildren.length,
		    childrenLen = 0,
		    vlen = vchildren ? vchildren.length : 0,
		    j = void 0,
		    c = void 0,
		    f = void 0,
		    vchild = void 0,
		    child = void 0;

		// Build up a map of keyed children and an Array of unkeyed children:
		if (len !== 0) {
			for (var i = 0; i < len; i++) {
				var _child = originalChildren[i],
				    props = _child[ATTR_KEY],
				    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
				if (key != null) {
					keyedLen++;
					keyed[key] = _child;
				} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
					children[childrenLen++] = _child;
				}
			}
		}

		if (vlen !== 0) {
			for (var _i = 0; _i < vlen; _i++) {
				vchild = vchildren[_i];
				child = null;

				// attempt to find a node based on key matching
				var _key = vchild.key;
				if (_key != null) {
					if (keyedLen && keyed[_key] !== undefined) {
						child = keyed[_key];
						keyed[_key] = undefined;
						keyedLen--;
					}
				}
				// attempt to pluck a node of the same type from the existing children
				else if (!child && min < childrenLen) {
						for (j = min; j < childrenLen; j++) {
							if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
								child = c;
								children[j] = undefined;
								if (j === childrenLen - 1) childrenLen--;
								if (j === min) min++;
								break;
							}
						}
					}

				// morph the matched/found/created DOM child to match vchild (deep)
				child = idiff(child, vchild, context, mountAll);

				f = originalChildren[_i];
				if (child && child !== dom && child !== f) {
					if (f == null) {
						dom.appendChild(child);
					} else if (child === f.nextSibling) {
						removeNode(f);
					} else {
						dom.insertBefore(child, f);
					}
				}
			}
		}

		// remove unused keyed children:
		if (keyedLen) {
			for (var _i2 in keyed) {
				if (keyed[_i2] !== undefined) recollectNodeTree(keyed[_i2], false);
			}
		}

		// remove orphaned unkeyed children:
		while (min <= childrenLen) {
			if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
		}
	}

	/** Recursively recycle (or just unmount) a node and its descendants.
	 *	@param {Node} node						DOM node to start unmount/removal from
	 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
	 */
	function recollectNodeTree(node, unmountOnly) {

		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node[ATTR_KEY] != null && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);

		if (unmountOnly === false || node[ATTR_KEY] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}

	/** Recollect/unmount all children.
	 *	- we use .lastChild here because it causes less reflow than .firstChild
	 *	- it's also cheaper than accessing the .childNodes Live NodeList
	 */
	function removeChildren(node) {
		node = node.lastChild;
		while (node) {
			var next = node.previousSibling;
			recollectNodeTree(node, true);
			node = next;
		}
	}

	/** Apply differences in attributes from a VNode to the given DOM Element.
	 *	@param {Element} dom		Element with attributes to diff `attrs` against
	 *	@param {Object} attrs		The desired end-state key-value attribute pairs
	 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
	 */
	function diffAttributes(dom, attrs, old) {
		var name = void 0;
		var update = false;
		var isWeElement = dom.update;
		// remove attributes no longer present on the vnode by setting them to undefined
		for (name in old) {
			if (!(attrs && attrs[name] != null) && old[name] != null) {
				setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
				if (isWeElement) {
					delete dom.props[name];
					update = true;
				}
			}
		}

		// add new & update changed attributes
		for (name in attrs) {
			//diable when using store system?
			//!dom.store &&
			if (isWeElement && typeof attrs[name] === 'object') {
				dom.props[npn(name)] = attrs[name];
				update = true;
			} else if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
				setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
				if (isWeElement) {
					dom.props[npn(name)] = attrs[name];
					update = true;
				}
			}
		}

		dom.parentNode && update && isWeElement && dom.update();
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WeElement = function (_HTMLElement) {
		_inherits(WeElement, _HTMLElement);

		function WeElement() {
			_classCallCheck(this, WeElement);

			var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

			_this.props = nProps(_this.constructor.props);
			_this.data = _this.constructor.data || {};
			return _this;
		}

		WeElement.prototype.connectedCallback = function connectedCallback() {
			if (!this.constructor.pure) {
				var p = this.parentNode;
				while (p && !this.store) {
					this.store = p.store;
					p = p.parentNode || p.host;
				}
				if (this.store) {
					this.store.instances.push(this);
				}
			}

			this.install();
			options.afterInstall && options.afterInstall(this);
			var shadowRoot = this.attachShadow({ mode: 'open' });

			this.css && shadowRoot.appendChild(cssToDom(this.css()));
			this.host = diff(null, this.render(this.props, !this.constructor.pure && this.store ? this.store.data : this.data), {}, false, null, false);
			shadowRoot.appendChild(this.host);

			this.installed();
			this._isInstalled = true;
		};

		WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
			this.uninstall();
			if (this.store) {
				for (var i = 0, len = this.store.instances.length; i < len; i++) {
					if (this.store.instances[i] === this) {
						this.store.instances.splice(i, 1);
						break;
					}
				}
			}
		};

		WeElement.prototype.update = function update() {
			this.beforeUpdate();
			diff(this.host, this.render(this.props, !this.constructor.pure && this.store ? this.store.data : this.data));
			this.afterUpdate();
		};

		WeElement.prototype.fire = function fire(name, data) {
			this.dispatchEvent(new CustomEvent(name, { detail: data }));
		};

		WeElement.prototype.install = function install() {};

		WeElement.prototype.installed = function installed() {};

		WeElement.prototype.uninstall = function uninstall() {};

		WeElement.prototype.beforeUpdate = function beforeUpdate() {};

		WeElement.prototype.afterUpdate = function afterUpdate() {};

		return WeElement;
	}(HTMLElement);

	/*!
	 * https://github.com/Palindrom/JSONPatcherProxy
	 * (c) 2017 Starcounter
	 * MIT license
	 */

	/** Class representing a JS Object observer  */
	var JSONPatcherProxy = function () {
		/**
	  * Deep clones your object and returns a new object.
	  */
		function deepClone(obj) {
			switch (typeof obj) {
				case 'object':
					return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
				case 'undefined':
					return null; //this is how JSON.stringify behaves for array items
				default:
					return obj; //no need to clone primitives
			}
		}
		JSONPatcherProxy.deepClone = deepClone;

		function escapePathComponent(str) {
			if (str.indexOf('/') == -1 && str.indexOf('~') == -1) return str;
			return str.replace(/~/g, '~0').replace(/\//g, '~1');
		}
		JSONPatcherProxy.escapePathComponent = escapePathComponent;

		/**
	   * Walk up the parenthood tree to get the path
	   * @param {JSONPatcherProxy} instance
	   * @param {Object} obj the object you need to find its path
	   */
		function findObjectPath(instance, obj) {
			var pathComponents = [];
			var parentAndPath = instance.parenthoodMap.get(obj);
			while (parentAndPath && parentAndPath.path) {
				// because we're walking up-tree, we need to use the array as a stack
				pathComponents.unshift(parentAndPath.path);
				parentAndPath = instance.parenthoodMap.get(parentAndPath.parent);
			}
			if (pathComponents.length) {
				var path = pathComponents.join('/');
				return '/' + path;
			}
			return '';
		}
		/**
	   * A callback to be used as th proxy set trap callback.
	   * It updates parenthood map if needed, proxifies nested newly-added objects, calls default callbacks with the changes occurred.
	   * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
	   * @param {Object} target the affected object
	   * @param {String} key the effect property's name
	   * @param {Any} newValue the value being set
	   */
		function setTrap(instance, target, key, newValue) {
			var parentPath = findObjectPath(instance, target);

			var destinationPropKey = parentPath + '/' + escapePathComponent(key);

			if (instance.proxifiedObjectsMap.has(newValue)) {
				var newValueOriginalObject = instance.proxifiedObjectsMap.get(newValue);

				instance.parenthoodMap.set(newValueOriginalObject.originalObject, {
					parent: target,
					path: key
				});
			}
			/*
	        mark already proxified values as inherited.
	        rationale: proxy.arr.shift()
	        will emit
	        {op: replace, path: '/arr/1', value: arr_2}
	        {op: remove, path: '/arr/2'}
	         by default, the second operation would revoke the proxy, and this renders arr revoked.
	        That's why we need to remember the proxies that are inherited.
	      */
			var revokableInstance = instance.proxifiedObjectsMap.get(newValue);
			/*
	    Why do we need to check instance.isProxifyingTreeNow?
	     We need to make sure we mark revokables as inherited ONLY when we're observing,
	    because throughout the first proxification, a sub-object is proxified and then assigned to
	    its parent object. This assignment of a pre-proxified object can fool us into thinking
	    that it's a proxified object moved around, while in fact it's the first assignment ever.
	     Checking isProxifyingTreeNow ensures this is not happening in the first proxification,
	    but in fact is is a proxified object moved around the tree
	    */
			if (revokableInstance && !instance.isProxifyingTreeNow) {
				revokableInstance.inherited = true;
			}

			// if the new value is an object, make sure to watch it
			if (newValue && typeof newValue == 'object' && !instance.proxifiedObjectsMap.has(newValue)) {
				instance.parenthoodMap.set(newValue, {
					parent: target,
					path: key
				});
				newValue = instance._proxifyObjectTreeRecursively(target, newValue, key);
			}
			// let's start with this operation, and may or may not update it later
			var operation = {
				op: 'remove',
				path: destinationPropKey
			};
			if (typeof newValue == 'undefined') {
				// applying De Morgan's laws would be a tad faster, but less readable
				if (!Array.isArray(target) && !target.hasOwnProperty(key)) {
					// `undefined` is being set to an already undefined value, keep silent
					return Reflect.set(target, key, newValue);
				}
				// when array element is set to `undefined`, should generate replace to `null`
				if (Array.isArray(target)) {
					// undefined array elements are JSON.stringified to `null`
					operation.op = 'replace', operation.value = null;
				}
				var oldValue = instance.proxifiedObjectsMap.get(target[key]);
				// was the deleted a proxified object?
				if (oldValue) {
					instance.parenthoodMap.delete(target[key]);
					instance.disableTrapsForProxy(oldValue);
					instance.proxifiedObjectsMap.delete(oldValue);
				}
			} else {
				if (Array.isArray(target) && !Number.isInteger(+key.toString())) {
					/* array props (as opposed to indices) don't emit any patches, to avoid needless `length` patches */
					if (key != 'length') {
						console.warn('JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch');
					}
					return Reflect.set(target, key, newValue);
				}
				operation.op = 'add';
				if (target.hasOwnProperty(key)) {
					if (typeof target[key] !== 'undefined' || Array.isArray(target)) {
						operation.op = 'replace'; // setting `undefined` array elements is a `replace` op
					}
				}
				operation.value = newValue;
			}
			var reflectionResult = Reflect.set(target, key, newValue);
			instance.defaultCallback(operation);
			return reflectionResult;
		}
		/**
	   * A callback to be used as th proxy delete trap callback.
	   * It updates parenthood map if needed, calls default callbacks with the changes occurred.
	   * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
	   * @param {Object} target the effected object
	   * @param {String} key the effected property's name
	   */
		function deleteTrap(instance, target, key) {
			if (typeof target[key] !== 'undefined') {
				var parentPath = findObjectPath(instance, target);
				var destinationPropKey = parentPath + '/' + escapePathComponent(key);

				var revokableProxyInstance = instance.proxifiedObjectsMap.get(target[key]);

				if (revokableProxyInstance) {
					if (revokableProxyInstance.inherited) {
						/*
	            this is an inherited proxy (an already proxified object that was moved around),
	            we shouldn't revoke it, because even though it was removed from path1, it is still used in path2.
	            And we know that because we mark moved proxies with `inherited` flag when we move them
	             it is a good idea to remove this flag if we come across it here, in deleteProperty trap.
	            We DO want to revoke the proxy if it was removed again.
	          */
						revokableProxyInstance.inherited = false;
					} else {
						instance.parenthoodMap.delete(revokableProxyInstance.originalObject);
						instance.disableTrapsForProxy(revokableProxyInstance);
						instance.proxifiedObjectsMap.delete(target[key]);
					}
				}
				var reflectionResult = Reflect.deleteProperty(target, key);

				instance.defaultCallback({
					op: 'remove',
					path: destinationPropKey
				});

				return reflectionResult;
			}
		}
		/* pre-define resume and pause functions to enhance constructors performance */
		function resume() {
			var _this = this;

			this.defaultCallback = function (operation) {
				_this.isRecording && _this.patches.push(operation);
				_this.userCallback && _this.userCallback(operation);
			};
			this.isObserving = true;
		}
		function pause() {
			this.defaultCallback = function () {};
			this.isObserving = false;
		}
		/**
	    * Creates an instance of JSONPatcherProxy around your object of interest `root`.
	    * @param {Object|Array} root - the object you want to wrap
	    * @param {Boolean} [showDetachedWarning = true] - whether to log a warning when a detached sub-object is modified @see {@link https://github.com/Palindrom/JSONPatcherProxy#detached-objects}
	    * @returns {JSONPatcherProxy}
	    * @constructor
	    */
		function JSONPatcherProxy(root, showDetachedWarning) {
			this.isProxifyingTreeNow = false;
			this.isObserving = false;
			this.proxifiedObjectsMap = new Map();
			this.parenthoodMap = new Map();
			// default to true
			if (typeof showDetachedWarning !== 'boolean') {
				showDetachedWarning = true;
			}

			this.showDetachedWarning = showDetachedWarning;
			this.originalObject = root;
			this.cachedProxy = null;
			this.isRecording = false;
			this.userCallback;
			/**
	     * @memberof JSONPatcherProxy
	     * Restores callback back to the original one provided to `observe`.
	     */
			this.resume = resume.bind(this);
			/**
	     * @memberof JSONPatcherProxy
	     * Replaces your callback with a noop function.
	     */
			this.pause = pause.bind(this);
		}

		JSONPatcherProxy.prototype.generateProxyAtPath = function (parent, obj, path) {
			var _this2 = this;

			if (!obj) {
				return obj;
			}
			var traps = {
				set: function set(target, key, value, receiver) {
					return setTrap(_this2, target, key, value, receiver);
				},
				deleteProperty: function deleteProperty(target, key) {
					return deleteTrap(_this2, target, key);
				}
			};
			var revocableInstance = Proxy.revocable(obj, traps);
			// cache traps object to disable them later.
			revocableInstance.trapsInstance = traps;
			revocableInstance.originalObject = obj;

			/* keeping track of object's parent and path */

			this.parenthoodMap.set(obj, { parent: parent, path: path });

			/* keeping track of all the proxies to be able to revoke them later */
			this.proxifiedObjectsMap.set(revocableInstance.proxy, revocableInstance);
			return revocableInstance.proxy;
		};
		// grab tree's leaves one by one, encapsulate them into a proxy and return
		JSONPatcherProxy.prototype._proxifyObjectTreeRecursively = function (parent, root, path) {
			for (var key in root) {
				if (root.hasOwnProperty(key)) {
					if (root[key] instanceof Object) {
						root[key] = this._proxifyObjectTreeRecursively(root, root[key], escapePathComponent(key));
					}
				}
			}
			return this.generateProxyAtPath(parent, root, path);
		};
		// this function is for aesthetic purposes
		JSONPatcherProxy.prototype.proxifyObjectTree = function (root) {
			/*
	    while proxyifying object tree,
	    the proxyifying operation itself is being
	    recorded, which in an unwanted behavior,
	    that's why we disable recording through this
	    initial process;
	    */
			this.pause();
			this.isProxifyingTreeNow = true;
			var proxifiedObject = this._proxifyObjectTreeRecursively(undefined, root, '');
			/* OK you can record now */
			this.isProxifyingTreeNow = false;
			this.resume();
			return proxifiedObject;
		};
		/**
	   * Turns a proxified object into a forward-proxy object; doesn't emit any patches anymore, like a normal object
	   * @param {Proxy} proxy - The target proxy object
	   */
		JSONPatcherProxy.prototype.disableTrapsForProxy = function (revokableProxyInstance) {
			if (this.showDetachedWarning) {
				var message = "You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";

				revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
					console.warn(message);
					return Reflect.set(targetObject, propKey, newValue);
				};
				revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
					console.warn(message);
					return Reflect.set(targetObject, propKey, newValue);
				};
				revokableProxyInstance.trapsInstance.deleteProperty = function (targetObject, propKey) {
					return Reflect.deleteProperty(targetObject, propKey);
				};
			} else {
				delete revokableProxyInstance.trapsInstance.set;
				delete revokableProxyInstance.trapsInstance.get;
				delete revokableProxyInstance.trapsInstance.deleteProperty;
			}
		};
		/**
	   * Proxifies the object that was passed in the constructor and returns a proxified mirror of it. Even though both parameters are options. You need to pass at least one of them.
	   * @param {Boolean} [record] - whether to record object changes to a later-retrievable patches array.
	   * @param {Function} [callback] - this will be synchronously called with every object change with a single `patch` as the only parameter.
	   */
		JSONPatcherProxy.prototype.observe = function (record, callback) {
			if (!record && !callback) {
				throw new Error('You need to either record changes or pass a callback');
			}
			this.isRecording = record;
			this.userCallback = callback;
			/*
	    I moved it here to remove it from `unobserve`,
	    this will also make the constructor faster, why initiate
	    the array before they decide to actually observe with recording?
	    They might need to use only a callback.
	    */
			if (record) this.patches = [];
			this.cachedProxy = this.proxifyObjectTree(this.originalObject);
			return this.cachedProxy;
		};
		/**
	   * If the observed is set to record, it will synchronously return all the patches and empties patches array.
	   */
		JSONPatcherProxy.prototype.generate = function () {
			if (!this.isRecording) {
				throw new Error('You should set record to true to get patches later');
			}
			return this.patches.splice(0, this.patches.length);
		};
		/**
	   * Revokes all proxies rendering the observed object useless and good for garbage collection @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable}
	   */
		JSONPatcherProxy.prototype.revoke = function () {
			this.proxifiedObjectsMap.forEach(function (el) {
				el.revoke();
			});
		};
		/**
	   * Disables all proxies' traps, turning the observed object into a forward-proxy object, like a normal object that you can modify silently.
	   */
		JSONPatcherProxy.prototype.disableTraps = function () {
			this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy, this);
		};
		return JSONPatcherProxy;
	}();

	var timeout = null;
	var patchs = {};

	var handler = function handler(patch, store) {

		clearTimeout(timeout);
		if (patch.op === 'remove') {
			//fix arr splice
			var kv = getArrayPatch(patch.path, store);
			patchs[kv.k] = kv.v;
			timeout = setTimeout(function () {
				update(patchs, store);
				patchs = {};
			});
		} else {
			var key = fixPath(patch.path);
			patchs[key] = patch.value;
			timeout = setTimeout(function () {
				update(patchs, store);
				patchs = {};
			});
		}
	};

	function render(vnode, parent, store) {
		parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
		if (store) {
			store.instances = [];
			extendStoreUpate(store);
			store.data = new JSONPatcherProxy(store.data).observe(true, function (patch) {
				handler(patch, store);
			});
			parent.store = store;
		}
		diff(null, vnode, {}, false, parent, false);
	}

	function update(patch, store) {
		store.update(patch);
	}

	function extendStoreUpate(store) {
		store.update = function (patch) {
			var _this = this;

			var updateAll = matchGlobalData(this.globalData, patch);

			if (Object.keys(patch).length > 0) {
				this.instances.forEach(function (instance) {
					if (updateAll || _this.updateAll || instance.constructor.updatePath && needUpdate(patch, instance.constructor.updatePath)) {
						instance.update();
					}
				});
				this.onChange && this.onChange(patch);
			}
		};
	}

	function matchGlobalData(globalData, diffResult) {
		if (!globalData) return false;
		for (var keyA in diffResult) {
			if (globalData.indexOf(keyA) > -1) {
				return true;
			}
			for (var i = 0, len = globalData.length; i < len; i++) {
				if (includePath(keyA, globalData[i])) {
					return true;
				}
			}
		}
		return false;
	}

	function needUpdate(diffResult, updatePath) {
		for (var keyA in diffResult) {
			if (updatePath[keyA]) {
				return true;
			}
			for (var keyB in updatePath) {
				if (includePath(keyA, keyB)) {
					return true;
				}
			}
		}
		return false;
	}

	function includePath(pathA, pathB) {
		if (pathA.indexOf(pathB) === 0) {
			var next = pathA.substr(pathB.length, 1);
			if (next === '[' || next === '.') {
				return true;
			}
		}
		return false;
	}

	function fixPath(path) {
		var mpPath = '';
		var arr = path.replace('/', '').split('/');
		arr.forEach(function (item, index) {
			if (index) {
				if (isNaN(Number(item))) {
					mpPath += '.' + item;
				} else {
					mpPath += '[' + item + ']';
				}
			} else {
				mpPath += item;
			}
		});
		return mpPath;
	}

	function getArrayPatch(path, store) {
		var arr = path.replace('/', '').split('/');
		var current = store.data[arr[0]];
		for (var i = 1, len = arr.length; i < len - 1; i++) {
			current = current[arr[i]];
		}
		return { k: fixArrPath(path), v: current };
	}

	function fixArrPath(path) {
		var mpPath = '';
		var arr = path.replace('/', '').split('/');
		var len = arr.length;
		arr.forEach(function (item, index) {
			if (index < len - 1) {
				if (index) {
					if (isNaN(Number(item))) {
						mpPath += '.' + item;
					} else {
						mpPath += '[' + item + ']';
					}
				} else {
					mpPath += item;
				}
			}
		});
		return mpPath;
	}

	var OBJECTTYPE = '[object Object]';
	var ARRAYTYPE = '[object Array]';

	function define(name, ctor) {
		customElements.define(name, ctor);
		if (ctor.data && !ctor.pure) {
			ctor.updatePath = getUpdatePath(ctor.data);
		}
	}

	function getUpdatePath(data) {
		var result = {};
		dataToPath(data, result);
		return result;
	}

	function dataToPath(data, result) {
		Object.keys(data).forEach(function (key) {
			result[key] = true;
			var type = Object.prototype.toString.call(data[key]);
			if (type === OBJECTTYPE) {
				_objToPath(data[key], key, result);
			} else if (type === ARRAYTYPE) {
				_arrayToPath(data[key], key, result);
			}
		});
	}

	function _objToPath(data, path, result) {
		Object.keys(data).forEach(function (key) {
			result[path + '.' + key] = true;
			delete result[path];
			var type = Object.prototype.toString.call(data[key]);
			if (type === OBJECTTYPE) {
				_objToPath(data[key], path + '.' + key, result);
			} else if (type === ARRAYTYPE) {
				_arrayToPath(data[key], path + '.' + key, result);
			}
		});
	}

	function _arrayToPath(data, path, result) {
		data.forEach(function (item, index) {
			result[path + '[' + index + ']'] = true;
			delete result[path];
			var type = Object.prototype.toString.call(item);
			if (type === OBJECTTYPE) {
				_objToPath(item, path + '[' + index + ']', result);
			} else if (type === ARRAYTYPE) {
				_arrayToPath(item, path + '[' + index + ']', result);
			}
		});
	}

	function tag(name, pure) {
		return function (target) {
			target.pure = pure;
			define(name, target);
		};
	}

	options.root.Omi = {
		tag: tag,
		WeElement: WeElement,
		render: render,
		h: h,
		createElement: h,
		options: options,
		define: define
	};

	options.root.Omi.version = '4.0.3';

	/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = Object.setPrototypeOf ||
	    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = Object.assign || function __assign(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	    }
	    return t;
	};

















	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	var enumerableDescriptorCache = {};
	var nonEnumerableDescriptorCache = {};
	function createPropertyInitializerDescriptor(prop, enumerable) {
	    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
	    return (cache[prop] ||
	        (cache[prop] = {
	            configurable: true,
	            enumerable: enumerable,
	            get: function () {
	                initializeInstance(this);
	                return this[prop];
	            },
	            set: function (value) {
	                initializeInstance(this);
	                this[prop] = value;
	            }
	        }));
	}
	function initializeInstance(target) {
	    if (target.__mobxDidRunLazyInitializers === true)
	        return;
	    var decorators = target.__mobxDecorators;
	    if (decorators) {
	        addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
	        for (var key in decorators) {
	            var d = decorators[key];
	            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
	        }
	    }
	}
	function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
	    return function decoratorFactory() {
	        var decoratorArguments;
	        var decorator = function decorate(target, prop, descriptor, applyImmediately
	        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
	        // as the instance to apply the decorator to equals the target
	        ) {
	            if (applyImmediately === true) {
	                propertyCreator(target, prop, descriptor, target, decoratorArguments);
	                return null;
	            }
	            if (process.env.NODE_ENV !== "production" && !quacksLikeADecorator(arguments))
	                fail$1("This function is a decorator, but it wasn't invoked like a decorator");
	            if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
	                var inheritedDecorators = target.__mobxDecorators;
	                addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
	            }
	            target.__mobxDecorators[prop] = {
	                prop: prop,
	                propertyCreator: propertyCreator,
	                descriptor: descriptor,
	                decoratorTarget: target,
	                decoratorArguments: decoratorArguments
	            };
	            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
	        };
	        if (quacksLikeADecorator(arguments)) {
	            // @decorator
	            decoratorArguments = EMPTY_ARRAY;
	            return decorator.apply(null, arguments);
	        }
	        else {
	            // @decorator(args)
	            decoratorArguments = Array.prototype.slice.call(arguments);
	            return decorator;
	        }
	    };
	}
	function quacksLikeADecorator(args) {
	    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
	        (args.length === 4 && args[3] === true));
	}

	function isSpyEnabled() {
	    return !!globalState.spyListeners.length;
	}
	function spyReport(event) {
	    if (!globalState.spyListeners.length)
	        return;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    var change = __assign({}, event, { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (change)
	        spyReport(__assign({}, change, { spyReportEnd: true }));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    globalState.spyListeners.push(listener);
	    return once(function () {
	        globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
	    });
	}

	function createAction(actionName, fn) {
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof fn === "function", "`action` can only be invoked on functions");
	        if (typeof actionName !== "string" || !actionName)
	            fail$1("actions should have valid names, got: '" + actionName + "'");
	    }
	    var res = function () {
	        return executeAction(actionName, fn, this, arguments);
	    };
	    res.isMobxAction = true;
	    return res;
	}
	function executeAction(actionName, fn, scope, args) {
	    var runInfo = startAction(actionName, fn, scope, args);
	    try {
	        return fn.apply(scope, args);
	    }
	    finally {
	        endAction(runInfo);
	    }
	}
	function startAction(actionName, fn, scope, args) {
	    var notifySpy = isSpyEnabled() && !!actionName;
	    var startTime = 0;
	    if (notifySpy) {
	        startTime = Date.now();
	        var l = (args && args.length) || 0;
	        var flattendArgs = new Array(l);
	        if (l > 0)
	            for (var i = 0; i < l; i++)
	                flattendArgs[i] = args[i];
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            object: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevDerivation = untrackedStart();
	    startBatch();
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    return {
	        prevDerivation: prevDerivation,
	        prevAllowStateChanges: prevAllowStateChanges,
	        notifySpy: notifySpy,
	        startTime: startTime
	    };
	}
	function endAction(runInfo) {
	    allowStateChangesEnd(runInfo.prevAllowStateChanges);
	    endBatch();
	    untrackedEnd(runInfo.prevDerivation);
	    if (runInfo.notifySpy)
	        spyReportEnd({ time: Date.now() - runInfo.startTime });
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}

	var toString = Object.prototype.toString;
	function deepEqual(a, b) {
	    return eq(a, b);
	}
	// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
	// Internal recursive comparison function for `isEqual`.
	function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b)
	        return a !== 0 || 1 / a === 1 / b;
	    // `null` or `undefined` only equal to itself (strict comparison).
	    if (a == null || b == null)
	        return false;
	    // `NaN`s are equivalent, but non-reflexive.
	    if (a !== a)
	        return b !== b;
	    // Exhaust primitive checks
	    var type = typeof a;
	    if (type !== "function" && type !== "object" && typeof b != "object")
	        return false;
	    return deepEq(a, b, aStack, bStack);
	}
	// Internal recursive comparison function for `isEqual`.
	function deepEq(a, b, aStack, bStack) {
	    // Unwrap any wrapped objects.
	    a = unwrap(a);
	    b = unwrap(b);
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b))
	        return false;
	    switch (className) {
	        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	        case "[object RegExp]":
	        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	        case "[object String]":
	            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	            // equivalent to `new String("5")`.
	            return "" + a === "" + b;
	        case "[object Number]":
	            // `NaN`s are equivalent, but non-reflexive.
	            // Object(NaN) is equivalent to NaN.
	            if (+a !== +a)
	                return +b !== +b;
	            // An `egal` comparison is performed for other numeric values.
	            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	        case "[object Date]":
	        case "[object Boolean]":
	            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	            // millisecond representations. Note that invalid dates with millisecond representations
	            // of `NaN` are not equivalent.
	            return +a === +b;
	        case "[object Symbol]":
	            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
	    }
	    var areArrays = className === "[object Array]";
	    if (!areArrays) {
	        if (typeof a != "object" || typeof b != "object")
	            return false;
	        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	        // from different frames are.
	        var aCtor = a.constructor, bCtor = b.constructor;
	        if (aCtor !== bCtor &&
	            !(typeof aCtor === "function" &&
	                aCtor instanceof aCtor &&
	                typeof bCtor === "function" &&
	                bCtor instanceof bCtor) &&
	            ("constructor" in a && "constructor" in b)) {
	            return false;
	        }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	        // Linear search. Performance is inversely proportional to the number of
	        // unique nested structures.
	        if (aStack[length] === a)
	            return bStack[length] === b;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	        // Compare array lengths to determine if a deep comparison is necessary.
	        length = a.length;
	        if (length !== b.length)
	            return false;
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (length--) {
	            if (!eq(a[length], b[length], aStack, bStack))
	                return false;
	        }
	    }
	    else {
	        // Deep compare objects.
	        var keys$$1 = Object.keys(a), key;
	        length = keys$$1.length;
	        // Ensure that both objects contain the same number of properties before comparing deep equality.
	        if (Object.keys(b).length !== length)
	            return false;
	        while (length--) {
	            // Deep compare each member
	            key = keys$$1[length];
	            if (!(has$$1(b, key) && eq(a[key], b[key], aStack, bStack)))
	                return false;
	        }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	}
	function unwrap(a) {
	    if (isObservableArray(a))
	        return a.peek();
	    if (isES6Map(a) || isObservableMap(a))
	        return iteratorToArray(a.entries());
	    return a;
	}
	function has$$1(a, key) {
	    return Object.prototype.hasOwnProperty.call(a, key);
	}

	function identityComparer(a, b) {
	    return a === b;
	}
	function structuralComparer(a, b) {
	    return deepEqual(a, b);
	}
	function defaultComparer(a, b) {
	    return areBothNaN(a, b) || identityComparer(a, b);
	}
	var comparer = {
	    identity: identityComparer,
	    structural: structuralComparer,
	    default: defaultComparer
	};

	/**
	 * Creates a named reactive view and keeps it alive, so that the view is always
	 * updated if one of the dependencies changes, even when the view is not further used by something else.
	 * @param view The reactive view
	 * @returns disposer function, which can be used to stop the view from being updated in the future.
	 */
	function autorun(view, opts) {
	    if (opts === void 0) { opts = EMPTY_OBJECT; }
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof view === "function", "Autorun expects a function as first argument");
	        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
	    }
	    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
	    var runSync = !opts.scheduler && !opts.delay;
	    var reaction;
	    if (runSync) {
	        // normal autorun
	        reaction = new Reaction(name, function () {
	            this.track(reactionRunner);
	        }, opts.onError);
	    }
	    else {
	        var scheduler_1 = createSchedulerFromOptions(opts);
	        // debounced autorun
	        var isScheduled_1 = false;
	        reaction = new Reaction(name, function () {
	            if (!isScheduled_1) {
	                isScheduled_1 = true;
	                scheduler_1(function () {
	                    isScheduled_1 = false;
	                    if (!reaction.isDisposed)
	                        reaction.track(reactionRunner);
	                });
	            }
	        }, opts.onError);
	    }
	    function reactionRunner() {
	        view(reaction);
	    }
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	var run = function (f) { return f(); };
	function createSchedulerFromOptions(opts) {
	    return opts.scheduler
	        ? opts.scheduler
	        : opts.delay ? function (f) { return setTimeout(f, opts.delay); } : run;
	}

	/**
	 * A node in the state dependency root that observes other nodes, and can be observed itself.
	 *
	 * ComputedValue will remember the result of the computation for the duration of the batch, or
	 * while being observed.
	 *
	 * During this time it will recompute only when one of its direct dependencies changed,
	 * but only when it is being accessed with `ComputedValue.get()`.
	 *
	 * Implementation description:
	 * 1. First time it's being accessed it will compute and remember result
	 *    give back remembered result until 2. happens
	 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
	 * 3. When it's being accessed, recompute if any shallow dependency changed.
	 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
	 *    go to step 2. either way
	 *
	 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
	 */
	var ComputedValue = /** @class */ (function () {
	    /**
	     * Create a new computed value based on a function expression.
	     *
	     * The `name` property is for debug purposes only.
	     *
	     * The `equals` property specifies the comparer function to use to determine if a newly produced
	     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
	     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
	     * Structural comparison can be convenient if you always produce a new aggregated object and
	     * don't want to notify observers if it is structurally the same.
	     * This is useful for working with vectors, mouse coordinates etc.
	     */
	    function ComputedValue(options) {
	        this.dependenciesState = IDerivationState.NOT_TRACKING;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = null; // during tracking it's an array with new observed observers
	        this.isBeingObserved = false;
	        this.isPendingUnobservation = false;
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.runId = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = IDerivationState.UP_TO_DATE;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.value = new CaughtException(null);
	        this.isComputing = false; // to check for cycles
	        this.isRunningSetter = false;
	        this.isTracing = TraceMode.NONE;
	        this.firstGet = true;
	        if (process.env.NODE_ENV !== "production" && !options.get)
	            return fail$1("missing option for computed: get");
	        this.derivation = options.get;
	        this.name = options.name || "ComputedValue@" + getNextId();
	        if (options.set)
	            this.setter = createAction(this.name + "-setter", options.set);
	        this.equals =
	            options.equals ||
	                (options.compareStructural || options.struct
	                    ? comparer.structural
	                    : comparer.default);
	        this.scope = options.context;
	        this.requiresReaction = !!options.requiresReaction;
	        this.keepAlive = !!options.keepAlive;
	    }
	    ComputedValue.prototype.onBecomeStale = function () {
	        propagateMaybeChanged(this);
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () { };
	    ComputedValue.prototype.onBecomeObserved = function () { };
	    /**
	     * Returns the current value of this computed value.
	     * Will evaluate its computation first if needed.
	     */
	    ComputedValue.prototype.get = function () {
	        var _this = this;
	        if (this.keepAlive && this.firstGet) {
	            this.firstGet = false;
	            autorun(function () { return _this.get(); });
	        }
	        if (this.isComputing)
	            fail$1("Cycle detected in computation " + this.name + ": " + this.derivation);
	        if (globalState.inBatch === 0 && this.observers.length === 0) {
	            if (shouldCompute(this)) {
	                this.warnAboutUntrackedRead();
	                startBatch(); // See perf test 'computed memoization'
	                this.value = this.computeValue(false);
	                endBatch();
	            }
	        }
	        else {
	            reportObserved(this);
	            if (shouldCompute(this))
	                if (this.trackAndCompute())
	                    propagateChangeConfirmed(this);
	        }
	        var result = this.value;
	        if (isCaughtException(result))
	            throw result.cause;
	        return result;
	    };
	    ComputedValue.prototype.peek = function () {
	        var res = this.computeValue(false);
	        if (isCaughtException(res))
	            throw res.cause;
	        return res;
	    };
	    ComputedValue.prototype.set = function (value) {
	        if (this.setter) {
	            invariant(!this.isRunningSetter, "The setter of computed value '" + this
	                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
	            this.isRunningSetter = true;
	            try {
	                this.setter.call(this.scope, value);
	            }
	            finally {
	                this.isRunningSetter = false;
	            }
	        }
	        else
	            invariant(false, process.env.NODE_ENV !== "production" &&
	                "[ComputedValue '" + this
	                    .name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled()) {
	            spyReport({
	                object: this.scope,
	                type: "compute",
	                name: this.name
	            });
	        }
	        var oldValue = this.value;
	        var wasSuspended = 
	        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
	        var newValue = this.computeValue(true);
	        var changed = wasSuspended ||
	            isCaughtException(oldValue) ||
	            isCaughtException(newValue) ||
	            !this.equals(oldValue, newValue);
	        if (changed) {
	            this.value = newValue;
	        }
	        return changed;
	    };
	    ComputedValue.prototype.computeValue = function (track) {
	        this.isComputing = true;
	        globalState.computationDepth++;
	        var res;
	        if (track) {
	            res = trackDerivedFunction(this, this.derivation, this.scope);
	        }
	        else {
	            if (globalState.disableErrorBoundaries === true) {
	                res = this.derivation.call(this.scope);
	            }
	            else {
	                try {
	                    res = this.derivation.call(this.scope);
	                }
	                catch (e) {
	                    res = new CaughtException(e);
	                }
	            }
	        }
	        globalState.computationDepth--;
	        this.isComputing = false;
	        return res;
	    };
	    ComputedValue.prototype.suspend = function () {
	        clearObserving(this);
	        this.value = undefined; // don't hold on to computed value!
	    };
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener({
	                    type: "update",
	                    object: _this,
	                    newValue: newValue,
	                    oldValue: prevValue
	                });
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.warnAboutUntrackedRead = function () {
	        if (process.env.NODE_ENV === "production")
	            return;
	        if (this.requiresReaction === true) {
	            fail$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
	        }
	        if (this.isTracing !== TraceMode.NONE) {
	            console.log("[mobx.trace] '" + this
	                .name + "' is being read outside a reactive context. Doing a full recompute");
	        }
	        if (globalState.computedRequiresReaction) {
	            console.warn("[mobx] Computed value " + this
	                .name + " is being read outside a reactive context. Doing a full recompute");
	        }
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    return ComputedValue;
	}());
	ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
	var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

	function hasInterceptors(interceptable) {
	    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    try {
	        var interceptors = interceptable.interceptors;
	        if (interceptors)
	            for (var i = 0, l = interceptors.length; i < l; i++) {
	                change = interceptors[i](change);
	                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	                if (!change)
	                    break;
	            }
	        return change;
	    }
	    finally {
	        untrackedEnd(prevU);
	    }
	}

	function hasListeners(listenable) {
	    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	        listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}

	var UNCHANGED = {};
	declareAtom();
	var ObservableValue = /** @class */ (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, enhancer, name, notifySpy) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        var _this = _super.call(this, name) || this;
	        _this.enhancer = enhancer;
	        _this.hasUnreportedChange = false;
	        _this.value = enhancer(value, undefined, name);
	        if (notifySpy && isSpyEnabled()) {
	            // only notify spy if this is a stand-alone observable
	            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
	        }
	        return _this;
	    }
	    ObservableValue.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy) {
	                spyReportStart({
	                    type: "update",
	                    name: this.name,
	                    newValue: newValue,
	                    oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        checkIfStateModificationsAreAllowed(this);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this,
	                type: "update",
	                newValue: newValue
	            });
	            if (!change)
	                return UNCHANGED;
	            newValue = change.newValue;
	        }
	        // apply modifier
	        newValue = this.enhancer(newValue, this.value, this.name);
	        return this.value !== newValue ? newValue : UNCHANGED;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this)) {
	            notifyListeners(this, {
	                type: "update",
	                object: this,
	                newValue: newValue,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.dehanceValue(this.value);
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener({
	                object: this,
	                type: "update",
	                newValue: this.value,
	                oldValue: undefined
	            });
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    ObservableValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    return ObservableValue;
	}(Atom));
	ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
	var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

	var ObservableObjectAdministration = /** @class */ (function () {
	    function ObservableObjectAdministration(target, name, defaultEnhancer) {
	        this.target = target;
	        this.name = name;
	        this.defaultEnhancer = defaultEnhancer;
	        this.values = {};
	    }
	    ObservableObjectAdministration.prototype.read = function (owner, key) {
	        if (process.env.NODE_ENV === "production" && this.target !== owner) {
	            this.illegalAccess(owner, key);
	            if (!this.values[key])
	                return undefined;
	        }
	        return this.values[key].get();
	    };
	    ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
	        var instance = this.target;
	        if (process.env.NODE_ENV === "production" && instance !== owner) {
	            this.illegalAccess(owner, key);
	        }
	        var observable = this.values[key];
	        if (observable instanceof ComputedValue) {
	            observable.set(newValue);
	            return;
	        }
	        // intercept
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "update",
	                object: instance,
	                name: key,
	                newValue: newValue
	            });
	            if (!change)
	                return;
	            newValue = change.newValue;
	        }
	        newValue = observable.prepareNewValue(newValue);
	        // notify spy & observers
	        if (newValue !== UNCHANGED) {
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: instance,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableObjectAdministration.prototype.remove = function (key) {
	        if (!this.values[key])
	            return;
	        var target = this.target;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: target,
	                name: key,
	                type: "remove"
	            });
	            if (!change)
	                return;
	        }
	        try {
	            startBatch();
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var oldValue = this.values[key].get();
	            if (this.keys)
	                this.keys.remove(key);
	            delete this.values[key];
	            delete this.target[key];
	            var change = notify || notifySpy
	                ? {
	                    type: "remove",
	                    object: target,
	                    oldValue: oldValue,
	                    name: key
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	        finally {
	            endBatch();
	        }
	    };
	    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
	        /**
	         * This happens if a property is accessed through the prototype chain, but the property was
	         * declared directly as own property on the prototype.
	         *
	         * E.g.:
	         * class A {
	         * }
	         * extendObservable(A.prototype, { x: 1 })
	         *
	         * classB extens A {
	         * }
	         * console.log(new B().x)
	         *
	         * It is unclear whether the property should be considered 'static' or inherited.
	         * Either use `console.log(A.x)`
	         * or: decorate(A, { x: observable })
	         *
	         * When using decorate, the property will always be redeclared as own property on the actual instance
	         */
	        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        process.env.NODE_ENV !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableObjectAdministration.prototype.getKeys = function () {
	        var _this = this;
	        if (this.keys === undefined) {
	            this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) { return _this.values[key] instanceof ObservableValue; }), referenceEnhancer, "keys(" + this.name + ")", true);
	        }
	        return this.keys.slice();
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name, defaultEnhancer) {
	    if (name === void 0) { name = ""; }
	    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
	    var adm = target.$mobx;
	    if (adm)
	        return adm;
	    process.env.NODE_ENV !== "production" &&
	        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
	    if (!isPlainObject(target))
	        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
	    addHiddenFinalProp(target, "$mobx", adm);
	    return adm;
	}
	function defineObservableProperty(target, propName, newValue, enhancer) {
	    var adm = asObservableObject(target);
	    assertPropertyConfigurable(target, propName);
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            object: target,
	            name: propName,
	            type: "add",
	            newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
	    newValue = observable.value; // observableValue might have changed it
	    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
	    if (adm.keys)
	        adm.keys.push(propName);
	    notifyPropertyAddition(adm, target, propName, newValue);
	}
	function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
	propName, options) {
	    var adm = asObservableObject(target);
	    options.name = adm.name + "." + propName;
	    options.context = target;
	    adm.values[propName] = new ComputedValue(options);
	    Object.defineProperty(target, propName, generateComputedPropConfig(propName));
	}
	var observablePropertyConfigs = Object.create(null);
	var computedPropertyConfigs = Object.create(null);
	function generateObservablePropConfig(propName) {
	    return (observablePropertyConfigs[propName] ||
	        (observablePropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: true,
	            get: function () {
	                return this.$mobx.read(this, propName);
	            },
	            set: function (v) {
	                this.$mobx.write(this, propName, v);
	            }
	        }));
	}
	function getAdministrationForComputedPropOwner(owner) {
	    var adm = owner.$mobx;
	    if (!adm) {
	        // because computed props are declared on proty,
	        // the current instance might not have been initialized yet
	        initializeInstance(owner);
	        return owner.$mobx;
	    }
	    return adm;
	}
	function generateComputedPropConfig(propName) {
	    return (computedPropertyConfigs[propName] ||
	        (computedPropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                return getAdministrationForComputedPropOwner(this).read(this, propName);
	            },
	            set: function (v) {
	                getAdministrationForComputedPropOwner(this).write(this, propName, v);
	            }
	        }));
	}
	function notifyPropertyAddition(adm, object, key, newValue) {
	    var notify = hasListeners(adm);
	    var notifySpy = isSpyEnabled();
	    var change = notify || notifySpy
	        ? {
	            type: "add",
	            object: object,
	            name: key,
	            newValue: newValue
	        }
	        : null;
	    if (notifySpy)
	        spyReportStart(__assign({}, change, { name: adm.name, key: key }));
	    if (notify)
	        notifyListeners(adm, change);
	    if (notifySpy)
	        spyReportEnd();
	}
	var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
	function isObservableObject(thing) {
	    if (isObject(thing)) {
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        return isObservableObjectAdministration(thing.$mobx);
	    }
	    return false;
	}

	function createDecoratorForEnhancer(enhancer) {
	    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
	        if (process.env.NODE_ENV !== "production") {
	            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
	        }
	        var initialValue = descriptor
	            ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value
	            : undefined;
	        defineObservableProperty(target, propertyName, initialValue, enhancer);
	    });
	    var res = 
	    // Extra process checks, as this happens during module initialization
	    typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production"
	        ? function observableDecorator() {
	            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
	            // and simply return the created prop decorator
	            if (arguments.length < 2)
	                return fail$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
	            return decorator.apply(null, arguments);
	        }
	        : decorator;
	    res.enhancer = enhancer;
	    return res;
	}

	function _isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (process.env.NODE_ENV !== "production" &&
	            (isObservableMap(value) || isObservableArray(value)))
	            return fail$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
	        if (isObservableObject(value)) {
	            var o = value.$mobx;
	            return o.values && !!o.values[property];
	        }
	        return false;
	    }
	    // For first check, see #701
	    return (isObservableObject(value) ||
	        !!value.$mobx ||
	        isAtom(value) ||
	        isReaction(value) ||
	        isComputedValue(value));
	}
	function isObservable(value) {
	    if (arguments.length !== 1)
	        fail$1(process.env.NODE_ENV !== "production" &&
	            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isObservable(value);
	}

	function _isComputed(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableObject(value) === false)
	            return false;
	        if (!value.$mobx.values[property])
	            return false;
	        var atom = getAtom(value, property);
	        return isComputedValue(atom);
	    }
	    return isComputedValue(value);
	}
	function isComputed(value) {
	    if (arguments.length > 1)
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isComputed(value);
	}

	var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
	    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
	    // Optimization: faster on decorator target or instance? Assuming target
	    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
	    var options = decoratorArgs[0] || {};
	    defineComputedProperty(instance, propertyName, __assign({ get: get, set: set }, options));
	});
	var computedStructDecorator = computedDecorator({ equals: comparer.structural });
	function extendObservable(target, properties, decorators, options) {
	    if (process.env.NODE_ENV !== "production") {
	        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
	        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
	        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
	        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
	        if (decorators)
	            for (var key in decorators)
	                if (!(key in properties))
	                    fail$1("Trying to declare a decorator for unspecified property '" + key + "'");
	    }
	    options = asCreateObservableOptions(options);
	    var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
	    initializeInstance(target);
	    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
	    startBatch();
	    try {
	        for (var key in properties) {
	            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
	            if (process.env.NODE_ENV !== "production") {
	                if (Object.getOwnPropertyDescriptor(target, key))
	                    fail$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
	                if (isComputed(descriptor.value))
	                    fail$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
	            }
	            var decorator = decorators && key in decorators
	                ? decorators[key]
	                : descriptor.get ? computedDecorator : defaultDecorator;
	            if (process.env.NODE_ENV !== "production" && typeof decorator !== "function")
	                return fail$1("Not a valid decorator for '" + key + "', got: " + decorator);
	            var resultDescriptor = decorator(target, key, descriptor, true);
	            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
	            )
	                Object.defineProperty(target, key, resultDescriptor);
	        }
	    }
	    finally {
	        endBatch();
	    }
	    return target;
	}

	// Predefined bags of create observable options, to avoid allocating temporarily option objects
	// in the majority of cases
	var defaultCreateObservableOptions = {
	    deep: true,
	    name: undefined,
	    defaultDecorator: undefined
	};
	var shallowCreateObservableOptions = {
	    deep: false,
	    name: undefined,
	    defaultDecorator: undefined
	};
	Object.freeze(defaultCreateObservableOptions);
	Object.freeze(shallowCreateObservableOptions);
	function assertValidOption(key) {
	    if (!/^(deep|name|defaultDecorator)$/.test(key))
	        fail$1("invalid option for (extend)observable: " + key);
	}
	function asCreateObservableOptions(thing) {
	    if (thing === null || thing === undefined)
	        return defaultCreateObservableOptions;
	    if (typeof thing === "string")
	        return { name: thing, deep: true };
	    if (process.env.NODE_ENV !== "production") {
	        if (typeof thing !== "object")
	            return fail$1("expected options object");
	        Object.keys(thing).forEach(assertValidOption);
	    }
	    return thing;
	}
	function getEnhancerFromOptions(options) {
	    return options.defaultDecorator
	        ? options.defaultDecorator.enhancer
	        : options.deep === false ? referenceEnhancer : deepEnhancer;
	}
	var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
	var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
	var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
	var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
	/**
	 * Turns an object, array or function into a reactive structure.
	 * @param v the value which should become observable.
	 */
	function createObservable(v, arg2, arg3) {
	    // @observable someProp;
	    if (typeof arguments[1] === "string") {
	        return deepDecorator.apply(null, arguments);
	    }
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    var res = isPlainObject(v)
	        ? observable.object(v, arg2, arg3)
	        : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : v;
	    // this value could be converted to a new observable data structure, return it
	    if (res !== v)
	        return res;
	    // otherwise, just box it
	    fail$1(process.env.NODE_ENV !== "production" &&
	        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
	}
	var observableFactories = {
	    box: function (value, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("box");
	        var o = asCreateObservableOptions(options);
	        return new ObservableValue(value, getEnhancerFromOptions(o), o.name);
	    },
	    shallowBox: function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowBox");
	        deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
	        return observable.box(value, { name: name, deep: false });
	    },
	    array: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("array");
	        var o = asCreateObservableOptions(options);
	        return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    shallowArray: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowArray");
	        deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
	        return observable.array(initialValues, { name: name, deep: false });
	    },
	    map: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("map");
	        var o = asCreateObservableOptions(options);
	        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    shallowMap: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowMap");
	        deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
	        return observable.map(initialValues, { name: name, deep: false });
	    },
	    object: function (props, decorators, options) {
	        if (typeof arguments[1] === "string")
	            incorrectlyUsedAsDecorator("object");
	        var o = asCreateObservableOptions(options);
	        return extendObservable({}, props, decorators, o);
	    },
	    shallowObject: function (props, name) {
	        if (typeof arguments[1] === "string")
	            incorrectlyUsedAsDecorator("shallowObject");
	        deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
	        return observable.object(props, {}, { name: name, deep: false });
	    },
	    ref: refDecorator,
	    shallow: shallowDecorator,
	    deep: deepDecorator,
	    struct: refStructDecorator
	};
	var observable = createObservable;
	// weird trick to keep our typings nicely with our funcs, and still extend the observable function
	Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
	function incorrectlyUsedAsDecorator(methodName) {
	    fail$1(
	    // process.env.NODE_ENV !== "production" &&
	    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
	}

	function deepEnhancer(v, _, name) {
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    if (Array.isArray(v))
	        return observable.array(v, { name: name });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name });
	    if (isES6Map(v))
	        return observable.map(v, { name: name });
	    return v;
	}
	function shallowEnhancer(v, _, name) {
	    if (v === undefined || v === null)
	        return v;
	    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.array(v, { name: name, deep: false });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name, deep: false });
	    if (isES6Map(v))
	        return observable.map(v, { name: name, deep: false });
	    return fail$1(process.env.NODE_ENV !== "production" &&
	        "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
	}
	function referenceEnhancer(newValue) {
	    // never turn into an observable
	    return newValue;
	}
	function refStructEnhancer(v, oldValue, name) {
	    if (process.env.NODE_ENV !== "production" && isObservable(v))
	        throw "observable.struct should not be used with observable values";
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    return v;
	}

	function iteratorSymbol() {
	    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
	}

	function declareIterator(prototType, iteratorFactory) {
	    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
	}
	function makeIterable(iterator) {
	    iterator[iteratorSymbol()] = self$1;
	    return iterator;
	}
	function self$1() {
	    return this;
	}

	/**
	 * During a transaction no views are updated until the end of the transaction.
	 * The transaction will be run synchronously nonetheless.
	 *
	 * @param action a function that updates some reactive state
	 * @returns any value that was returned by the 'action' parameter.
	 */
	function transaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    startBatch();
	    try {
	        return action.apply(thisArg);
	    }
	    finally {
	        endBatch();
	    }
	}

	var ObservableMapMarker = {};
	var ObservableMap = /** @class */ (function () {
	    function ObservableMap(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
	        this.enhancer = enhancer;
	        this.name = name;
	        this.$mobx = ObservableMapMarker;
	        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
	        if (typeof Map !== "function") {
	            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
	        }
	        this._data = new Map();
	        this._hasMap = new Map();
	        this.merge(initialData);
	    }
	    ObservableMap.prototype._has = function (key) {
	        return this._data.has(key);
	    };
	    ObservableMap.prototype.has = function (key) {
	        if (this._hasMap.has(key))
	            return this._hasMap.get(key).get();
	        return this._updateHasMapEntry(key, false).get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        var hasKey = this._has(key);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return this;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	        return this;
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return false;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "delete",
	                    object: this,
	                    oldValue: this._data.get(key).value,
	                    name: key
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            transaction(function () {
	                _this._keys.remove(key);
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data.get(key);
	                observable.setNewValue(undefined);
	                _this._data.delete(key);
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
	        var entry = this._hasMap.get(key);
	        if (entry) {
	            entry.setNewValue(value);
	        }
	        else {
	            entry = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
	            this._hasMap.set(key, entry);
	        }
	        return entry;
	    };
	    ObservableMap.prototype._updateValue = function (key, newValue) {
	        var observable = this._data.get(key);
	        newValue = observable.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: this,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (key, newValue) {
	        var _this = this;
	        transaction(function () {
	            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + key, false);
	            _this._data.set(key, observable);
	            newValue = observable.value; // value might have been changed
	            _this._updateHasMapEntry(key, true);
	            _this._keys.push(key);
	        });
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                type: "add",
	                object: this,
	                name: key,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(__assign({}, change, { name: this.name, key: key }));
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        if (this.has(key))
	            return this.dehanceValue(this._data.get(key).get());
	        return this.dehanceValue(undefined);
	    };
	    ObservableMap.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined) {
	            return this.dehancer(value);
	        }
	        return value;
	    };
	    ObservableMap.prototype.keys = function () {
	        return this._keys[iteratorSymbol()]();
	    };
	    ObservableMap.prototype.values = function () {
	        var self = this;
	        var nextIndex = 0;
	        return makeIterable({
	            next: function () {
	                return nextIndex < self._keys.length
	                    ? { value: self.get(self._keys[nextIndex++]), done: false }
	                    : { value: undefined, done: true };
	            }
	        });
	    };
	    ObservableMap.prototype.entries = function () {
	        var self = this;
	        var nextIndex = 0;
	        return makeIterable({
	            next: function () {
	                if (nextIndex < self._keys.length) {
	                    var key = self._keys[nextIndex++];
	                    return {
	                        value: [key, self.get(key)],
	                        done: false
	                    };
	                }
	                return { done: true };
	            }
	        });
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var _this = this;
	        this._keys.forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
	    };
	    /** Merge another object into this object, returns this. */
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        if (isObservableMap(other)) {
	            other = other.toJS();
	        }
	        transaction(function () {
	            if (isPlainObject(other))
	                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
	            else if (Array.isArray(other))
	                other.forEach(function (_a) {
	                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
	                    return _this.set(key, value);
	                });
	            else if (isES6Map(other))
	                other.forEach(function (value, key) { return _this.set(key, value); });
	            else if (other !== null && other !== undefined)
	                fail$1("Cannot initialize map from " + other);
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                _this._keys.slice().forEach(function (key) { return _this.delete(key); });
	            });
	        });
	    };
	    ObservableMap.prototype.replace = function (values) {
	        var _this = this;
	        transaction(function () {
	            // grab all the keys that are present in the new map but not present in the current map
	            // and delete them from the map, then merge the new map
	            // this will cause reactions only on changed values
	            var newKeys = getMapLikeKeys(values);
	            var oldKeys = _this._keys;
	            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
	            missingKeys.forEach(function (k) { return _this.delete(k); });
	            _this.merge(values);
	        });
	        return this;
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns a plain object that represents this map.
	     * Note that all the keys being stringified.
	     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
	     */
	    ObservableMap.prototype.toPOJO = function () {
	        var _this = this;
	        var res = {};
	        this._keys.forEach(function (key) { return (res["" + key] = _this.get(key)); });
	        return res;
	    };
	    /**
	     * Returns a shallow non observable object clone of this map.
	     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
	     */
	    ObservableMap.prototype.toJS = function () {
	        var _this = this;
	        var res = new Map();
	        this._keys.forEach(function (key) { return res.set(key, _this.get(key)); });
	        return res;
	    };
	    ObservableMap.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toPOJO();
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return (this.name +
	            "[{ " +
	            this._keys.map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
	            " }]");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        process.env.NODE_ENV !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	declareIterator(ObservableMap.prototype, function () {
	    return this.entries();
	});
	addHiddenFinalProp(ObservableMap.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Map");
	/* 'var' fixes small-build issue */
	var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            if (property !== undefined)
	                fail$1(process.env.NODE_ENV !== "production" &&
	                    "It is not possible to get index atoms from arrays");
	            return thing.$mobx.atom;
	        }
	        if (isObservableMap(thing)) {
	            var anyThing = thing;
	            if (property === undefined)
	                return getAtom(anyThing._keys);
	            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
	            if (!observable)
	                fail$1(process.env.NODE_ENV !== "production" &&
	                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        if (property && !thing.$mobx)
	            thing[property]; // See #1072
	        if (isObservableObject(thing)) {
	            if (!property)
	                return fail$1(process.env.NODE_ENV !== "production" && "please specify a property");
	            var observable = thing.$mobx.values[property];
	            if (!observable)
	                fail$1(process.env.NODE_ENV !== "production" &&
	                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (isReaction(thing.$mobx)) {
	            // disposer function
	            return thing.$mobx;
	        }
	    }
	    return fail$1(process.env.NODE_ENV !== "production" && "Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    if (!thing)
	        fail$1("Expecting some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
	        return thing;
	    if (isObservableMap(thing))
	        return thing;
	    // Initializers run lazily when transpiling to babel, so make sure they are run...
	    initializeInstance(thing);
	    if (thing.$mobx)
	        return thing.$mobx;
	    fail$1(process.env.NODE_ENV !== "production" && "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing); // valid for arrays as well
	    return named.name;
	}

	/**
	 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
	 *
	 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
	 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
	 */
	var Atom;
	var isAtom;
	function declareAtom() {
	    if (Atom)
	        return;
	    Atom = /** @class */ (function () {
	        /**
	         * Create a new atom. For debugging purposes it is recommended to give it a name.
	         * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
	         */
	        function AtomImpl(name) {
	            if (name === void 0) { name = "Atom@" + getNextId(); }
	            this.name = name;
	            this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
	            this.isBeingObserved = false;
	            this.observers = [];
	            this.observersIndexes = {};
	            this.diffValue = 0;
	            this.lastAccessedBy = 0;
	            this.lowestObserverState = IDerivationState.NOT_TRACKING;
	        }
	        AtomImpl.prototype.onBecomeUnobserved = function () {
	            // noop
	        };
	        AtomImpl.prototype.onBecomeObserved = function () {
	            /* noop */
	        };
	        /**
	     * Invoke this method to notify mobx that your atom has been used somehow.
	     * Returns true if there is currently a reactive context.
	     */
	        AtomImpl.prototype.reportObserved = function () {
	            return reportObserved(this);
	        };
	        /**
	     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
	     */
	        AtomImpl.prototype.reportChanged = function () {
	            startBatch();
	            propagateChanged(this);
	            endBatch();
	        };
	        AtomImpl.prototype.toString = function () {
	            return this.name;
	        };
	        return AtomImpl;
	    }());
	    isAtom = createInstanceofPredicate("Atom", Atom);
	}

	var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
	// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
	var safariPrototypeSetterInheritanceBug = (function () {
	    var v = false;
	    var p = {};
	    Object.defineProperty(p, "0", {
	        set: function () {
	            v = true;
	        }
	    });
	    Object.create(p)["0"] = 1;
	    return v === false;
	})();
	/**
	 * This array buffer contains two lists of properties, so that all arrays
	 * can recycle their property definitions, which significantly improves performance of creating
	 * properties on the fly.
	 */
	var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
	// Typescript workaround to make sure ObservableArray extends Array
	var StubArray = /** @class */ (function () {
	    function StubArray() {
	    }
	    return StubArray;
	}());
	function inherit(ctor, proto) {
	    if (typeof Object["setPrototypeOf"] !== "undefined") {
	        Object["setPrototypeOf"](ctor.prototype, proto);
	    }
	    else if (typeof ctor.prototype.__proto__ !== "undefined") {
	        ctor.prototype.__proto__ = proto;
	    }
	    else {
	        ctor["prototype"] = proto;
	    }
	}
	inherit(StubArray, Array.prototype);
	// Weex freeze Array.prototype
	// Make them writeable and configurable in prototype chain
	// https://github.com/alibaba/weex/pull/1529
	if (Object.isFrozen(Array)) {
	    
	    [
	        "constructor",
	        "push",
	        "shift",
	        "concat",
	        "pop",
	        "unshift",
	        "replace",
	        "find",
	        "findIndex",
	        "splice",
	        "reverse",
	        "sort"
	    ].forEach(function (key) {
	        Object.defineProperty(StubArray.prototype, key, {
	            configurable: true,
	            writable: true,
	            value: Array.prototype[key]
	        });
	    });
	}
	var ObservableArrayAdministration = /** @class */ (function () {
	    function ObservableArrayAdministration(name, enhancer, array, owned) {
	        this.array = array;
	        this.owned = owned;
	        this.values = [];
	        this.lastKnownLength = 0;
	        this.atom = new Atom(name || "ObservableArray@" + getNextId());
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
	    }
	    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
	        if (this.dehancer !== undefined && this.values.length > 0)
	            return values.map(this.dehancer);
	        return values;
	    };
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.array,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength) {
	            var newItems = new Array(newLength - currentLength);
	            for (var i = 0; i < newLength - currentLength; i++)
	                newItems[i] = undefined; // No Array.fill everywhere...
	            this.spliceWithArray(currentLength, 0, newItems);
	        }
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    // adds / removes the necessary numeric properties to this object
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
	        this.lastKnownLength += delta;
	        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
	            reserveArrayBuffer(oldLength + delta + 1);
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this.atom);
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = EMPTY_ARRAY;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems =
	            newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
	        var lengthDelta = newItems.length - deleteCount;
	        this.updateArrayLength(length, lengthDelta); // create or remove new entries
	        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return this.dehanceValues(res);
	    };
	    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
	        if (newItems.length < MAX_SPLICE_SIZE) {
	            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
	        }
	        else {
	            var res = this.values.slice(index, index + deleteCount);
	            this.values = this.values
	                .slice(0, index)
	                .concat(newItems, this.values.slice(index + deleteCount));
	            return res;
	        }
	        var _a;
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.array,
	                type: "update",
	                index: index,
	                newValue: newValue,
	                oldValue: oldValue
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(__assign({}, change, { name: this.atom.name }));
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removed: removed,
	                added: added,
	                removedCount: removed.length,
	                addedCount: added.length
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(__assign({}, change, { name: this.atom.name }));
	        this.atom.reportChanged();
	        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var ObservableArray = /** @class */ (function (_super) {
	    __extends(ObservableArray, _super);
	    function ObservableArray(initialValues, enhancer, name, owned) {
	        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
	        if (owned === void 0) { owned = false; }
	        var _this = _super.call(this) || this;
	        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
	        addHiddenFinalProp(_this, "$mobx", adm);
	        if (initialValues && initialValues.length) {
	            var prev = allowStateChangesStart(true);
	            _this.spliceWithArray(0, 0, initialValues);
	            allowStateChangesEnd(prev);
	        }
	        if (safariPrototypeSetterInheritanceBug) {
	            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
	            // defined on the instance. After that it works fine, even if this property is deleted.
	            Object.defineProperty(adm.array, "0", ENTRY_0);
	        }
	        return _this;
	    }
	    ObservableArray.prototype.intercept = function (handler) {
	        return this.$mobx.intercept(handler);
	    };
	    ObservableArray.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        return this.$mobx.observe(listener, fireImmediately);
	    };
	    ObservableArray.prototype.clear = function () {
	        return this.splice(0);
	    };
	    ObservableArray.prototype.concat = function () {
	        var arrays = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arrays[_i] = arguments[_i];
	        }
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
	    };
	    ObservableArray.prototype.replace = function (newItems) {
	        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
	    };
	    /**
	     * Converts this array back to a (shallow) javascript structure.
	     * For a deep clone use mobx.toJS
	     */
	    ObservableArray.prototype.toJS = function () {
	        return this.slice();
	    };
	    ObservableArray.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toJS();
	    };
	    ObservableArray.prototype.peek = function () {
	        this.$mobx.atom.reportObserved();
	        return this.$mobx.dehanceValues(this.$mobx.values);
	    };
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        if (arguments.length === 3)
	            deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
	        var idx = this.findIndex.apply(this, arguments);
	        return idx === -1 ? undefined : this.get(idx);
	    };
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        if (arguments.length === 3)
	            deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
	        var items = this.peek(), l = items.length;
	        for (var i = fromIndex; i < l; i++)
	            if (predicate.call(thisArg, items[i], i, this))
	                return i;
	        return -1;
	    };
	    /*
	     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
	     * since these functions alter the inner structure of the array, the have side effects.
	     * Because the have side effects, they should not be used in computed function,
	     * and for that reason the do not call dependencyState.notifyObserved
	     */
	    ObservableArray.prototype.splice = function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return this.$mobx.spliceWithArray(index);
	            case 2:
	                return this.$mobx.spliceWithArray(index, deleteCount);
	        }
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.pop = function () {
	        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
	    };
	    ObservableArray.prototype.shift = function () {
	        return this.splice(0, 1)[0];
	    };
	    ObservableArray.prototype.unshift = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.reverse = function () {
	        // reverse by default mutates in place before returning the result
	        // which makes it both a 'derivation' and a 'mutation'.
	        // so we deviate from the default and just make it an dervitation
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    };
	    ObservableArray.prototype.sort = function (compareFn) {
	        // sort by default mutates in place before returning the result
	        // which goes against all good practices. Let's not change the array in place!
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    };
	    ObservableArray.prototype.remove = function (value) {
	        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    };
	    ObservableArray.prototype.move = function (fromIndex, toIndex) {
	        deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
	        function checkIndex(index) {
	            if (index < 0) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
	            }
	            var length = this.$mobx.values.length;
	            if (index >= length) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
	            }
	        }
	        checkIndex.call(this, fromIndex);
	        checkIndex.call(this, toIndex);
	        if (fromIndex === toIndex) {
	            return;
	        }
	        var oldItems = this.$mobx.values;
	        var newItems;
	        if (fromIndex < toIndex) {
	            newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [
	                oldItems[fromIndex]
	            ], oldItems.slice(toIndex + 1));
	        }
	        else {
	            // toIndex < fromIndex
	            newItems = __spread(oldItems.slice(0, toIndex), [
	                oldItems[fromIndex]
	            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
	        }
	        this.replace(newItems);
	    };
	    // See #734, in case property accessors are unreliable...
	    ObservableArray.prototype.get = function (index) {
	        var impl = this.$mobx;
	        if (impl) {
	            if (index < impl.values.length) {
	                impl.atom.reportObserved();
	                return impl.dehanceValue(impl.values[index]);
	            }
	            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
	                .values
	                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
	        }
	        return undefined;
	    };
	    // See #734, in case property accessors are unreliable...
	    ObservableArray.prototype.set = function (index, newValue) {
	        var adm = this.$mobx;
	        var values = adm.values;
	        if (index < values.length) {
	            // update at index in range
	            checkIfStateModificationsAreAllowed(adm.atom);
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: this,
	                    index: index,
	                    newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.enhancer(newValue, oldValue);
	            var changed = newValue !== oldValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            // add a new item
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else {
	            // out of bounds
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	        }
	    };
	    return ObservableArray;
	}(StubArray));
	declareIterator(ObservableArray.prototype, function () {
	    
	    this.$mobx.atom.reportObserved();
	    var self = this;
	    var nextIndex = 0;
	    return makeIterable({
	        next: function () {
	            return nextIndex < self.length
	                ? { value: self[nextIndex++], done: false }
	                : { done: true, value: undefined };
	        }
	    });
	});
	Object.defineProperty(ObservableArray.prototype, "length", {
	    enumerable: false,
	    configurable: true,
	    get: function () {
	        return this.$mobx.getArrayLength();
	    },
	    set: function (newLength) {
	        this.$mobx.setArrayLength(newLength);
	    }
	});
	if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
	    addHiddenProp(ObservableArray.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Array");
	}
	// Internet Explorer on desktop doesn't support this.....
	// So, let's don't do this to avoid different semantics
	// See #1395
	// addHiddenProp(
	//     ObservableArray.prototype,
	//     typeof Symbol !== "undefined" ? Symbol.isConcatSpreadable as any : "@@isConcatSpreadable",
	//     {
	//         enumerable: false,
	//         configurable: true,
	//         value: true
	//     }
	// )
	/**
	 * Wrap function from prototype
	 */

	[
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some",
	    "toString",
	    "toLocaleString"
	].forEach(function (funcName) {
	    var baseFunc = Array.prototype[funcName];
	    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
	    addHiddenProp(ObservableArray.prototype, funcName, function () {
	        return baseFunc.apply(this.peek(), arguments);
	    });
	});
	/**
	 * We don't want those to show up in `for (const key in ar)` ...
	 */
	makeNonEnumerable(ObservableArray.prototype, [
	    "constructor",
	    "intercept",
	    "observe",
	    "clear",
	    "concat",
	    "get",
	    "replace",
	    "toJS",
	    "toJSON",
	    "peek",
	    "find",
	    "findIndex",
	    "splice",
	    "spliceWithArray",
	    "push",
	    "pop",
	    "set",
	    "shift",
	    "unshift",
	    "reverse",
	    "sort",
	    "remove",
	    "move",
	    "toString",
	    "toLocaleString"
	]);
	// See #364
	var ENTRY_0 = createArrayEntryDescriptor(0);
	function createArrayEntryDescriptor(index) {
	    return {
	        enumerable: false,
	        configurable: false,
	        get: function () {
	            return this.get(index);
	        },
	        set: function (value) {
	            this.set(index, value);
	        }
	    };
	}
	function createArrayBufferItem(index) {
	    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
	}
	function reserveArrayBuffer(max) {
	    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
	        createArrayBufferItem(index);
	    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
	}
	reserveArrayBuffer(1000);
	var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
	function isObservableArray(thing) {
	    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
	}

	var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	var EMPTY_OBJECT = {};
	Object.freeze(EMPTY_OBJECT);
	function getGlobal$1() {
	    return typeof window !== "undefined" ? window : global;
	}
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function fail$1(message) {
	    invariant(false, message);
	    throw "X"; // unreachable
	}
	function invariant(check, message) {
	    if (!check)
	        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
	}
	/**
	 * Prints a deprecation message, but only one time.
	 * Returns false if the deprecated message was already printed before
	 */
	var deprecatedMessages = [];
	function deprecated(msg, thing) {
	    if (process.env.NODE_ENV === "production")
	        return false;
	    if (thing) {
	        return deprecated("'" + msg + "', use '" + thing + "' instead.");
	    }
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return false;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	    return true;
	}
	/**
	 * Makes sure that the provided function is invoked at most once.
	 */
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function isObject(value) {
	    return value !== null && typeof value === "object";
	}
	function isPlainObject(value) {
	    if (value === null || typeof value !== "object")
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    return proto === Object.prototype || proto === null;
	}
	function makeNonEnumerable(object, propNames) {
	    for (var i = 0; i < propNames.length; i++) {
	        addHiddenProp(object, propNames[i], object[propNames[i]]);
	    }
	}
	function addHiddenProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: true,
	        configurable: true,
	        value: value
	    });
	}
	function addHiddenFinalProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: false,
	        configurable: true,
	        value: value
	    });
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    if (process.env.NODE_ENV !== "production" && !isPropertyConfigurable(object, prop))
	        fail$1("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
	}
	function createInstanceofPredicate(name, clazz) {
	    var propName = "isMobX" + name;
	    clazz.prototype[propName] = true;
	    return function (x) {
	        return isObject(x) && x[propName] === true;
	    };
	}
	function areBothNaN(a, b) {
	    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	function isES6Map(thing) {
	    if (getGlobal$1().Map !== undefined && thing instanceof getGlobal$1().Map)
	        return true;
	    return false;
	}
	function getMapLikeKeys(map) {
	    if (isPlainObject(map))
	        return Object.keys(map);
	    if (Array.isArray(map))
	        return map.map(function (_a) {
	            var _b = __read(_a, 1), key = _b[0];
	            return key;
	        });
	    if (isES6Map(map) || isObservableMap(map))
	        return iteratorToArray(map.keys());
	    return fail$1("Cannot get keys from '" + map + "'");
	}
	// use Array.from in Mobx 5
	function iteratorToArray(it) {
	    var res = [];
	    while (true) {
	        var r = it.next();
	        if (r.done)
	            break;
	        res.push(r.value);
	    }
	    return res;
	}
	function primitiveSymbol() {
	    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
	}
	function toPrimitive(value) {
	    return value === null ? null : typeof value === "object" ? "" + value : value;
	}
	var MobXGlobals = /** @class */ (function () {
	    function MobXGlobals() {
	        /**
	         * MobXGlobals version.
	         * MobX compatiblity with other versions loaded in memory as long as this version matches.
	         * It indicates that the global state still stores similar information
	         *
	         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
	         * internal state storage of MobX, and can be the same across many different package versions
	         */
	        this.version = 5;
	        /**
	         * Currently running derivation
	         */
	        this.trackingDerivation = null;
	        /**
	         * Are we running a computation currently? (not a reaction)
	         */
	        this.computationDepth = 0;
	        /**
	         * Each time a derivation is tracked, it is assigned a unique run-id
	         */
	        this.runId = 0;
	        /**
	         * 'guid' for general purpose. Will be persisted amongst resets.
	         */
	        this.mobxGuid = 0;
	        /**
	         * Are we in a batch block? (and how many of them)
	         */
	        this.inBatch = 0;
	        /**
	         * Observables that don't have observers anymore, and are about to be
	         * suspended, unless somebody else accesses it in the same batch
	         *
	         * @type {IObservable[]}
	         */
	        this.pendingUnobservations = [];
	        /**
	         * List of scheduled, not yet executed, reactions.
	         */
	        this.pendingReactions = [];
	        /**
	         * Are we currently processing reactions?
	         */
	        this.isRunningReactions = false;
	        /**
	         * Is it allowed to change observables at this point?
	         * In general, MobX doesn't allow that when running computations and React.render.
	         * To ensure that those functions stay pure.
	         */
	        this.allowStateChanges = true;
	        /**
	         * If strict mode is enabled, state changes are by default not allowed
	         */
	        this.enforceActions = false;
	        /**
	         * Spy callbacks
	         */
	        this.spyListeners = [];
	        /**
	         * Globally attached error handlers that react specifically to errors in reactions
	         */
	        this.globalReactionErrorHandlers = [];
	        /**
	         * Warn if computed values are accessed outside a reactive context
	         */
	        this.computedRequiresReaction = false;
	        /*
	         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
	         * the stack when an exception occurs while debugging.
	         */
	        this.disableErrorBoundaries = false;
	    }
	    return MobXGlobals;
	}());
	var canMergeGlobalState = true;
	var isolateCalled = false;
	var globalState = (function () {
	    var global = getGlobal$1();
	    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
	        canMergeGlobalState = false;
	    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
	        canMergeGlobalState = false;
	    if (!canMergeGlobalState) {
	        setTimeout(function () {
	            if (!isolateCalled) {
	                fail$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
	            }
	        }, 1);
	        return new MobXGlobals();
	    }
	    else if (global.__mobxGlobals) {
	        global.__mobxInstanceCount += 1;
	        return global.__mobxGlobals;
	    }
	    else {
	        global.__mobxInstanceCount = 1;
	        return (global.__mobxGlobals = new MobXGlobals());
	    }
	})();

	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length > 0)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	// function invariantObservers(observable: IObservable) {
	//     const list = observable.observers
	//     const map = observable.observersIndexes
	//     const l = list.length
	//     for (let i = 0; i < l; i++) {
	//         const id = list[i].__mapid
	//         if (i) {
	//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
	//         } else {
	//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
	//         }
	//     }
	//     invariant(
	//         list.length === 0 || Object.keys(map).length === list.length - 1,
	//         "INTERNAL ERROR there is no junk in map"
	//     )
	// }
	function addObserver(observable, node) {
	    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
	    // invariantObservers(observable);
	    var l = observable.observers.length;
	    if (l) {
	        // because object assignment is relatively expensive, let's not store data about index 0.
	        observable.observersIndexes[node.__mapid] = l;
	    }
	    observable.observers[l] = node;
	    if (observable.lowestObserverState > node.dependenciesState)
	        observable.lowestObserverState = node.dependenciesState;
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
	}
	function removeObserver(observable, node) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
	    // invariantObservers(observable);
	    if (observable.observers.length === 1) {
	        // deleting last observer
	        observable.observers.length = 0;
	        queueForUnobservation(observable);
	    }
	    else {
	        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
	        var list = observable.observers;
	        var map = observable.observersIndexes;
	        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
	        if (filler !== node) {
	            // otherwise node was the last element, which already got removed from array
	            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
	            if (index) {
	                // map store all indexes but 0, see comment in `addObserver`
	                map[filler.__mapid] = index;
	            }
	            else {
	                delete map[filler.__mapid];
	            }
	            list[index] = filler;
	        }
	        delete map[node.__mapid];
	    }
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
	}
	function queueForUnobservation(observable) {
	    if (observable.isPendingUnobservation === false) {
	        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
	        observable.isPendingUnobservation = true;
	        globalState.pendingUnobservations.push(observable);
	    }
	}
	/**
	 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
	 * During a batch `onBecomeUnobserved` will be called at most once per observable.
	 * Avoids unnecessary recalculations.
	 */
	function startBatch() {
	    globalState.inBatch++;
	}
	function endBatch() {
	    if (--globalState.inBatch === 0) {
	        runReactions();
	        // the batch is actually about to finish, all unobserving should happen here.
	        var list = globalState.pendingUnobservations;
	        for (var i = 0; i < list.length; i++) {
	            var observable = list[i];
	            observable.isPendingUnobservation = false;
	            if (observable.observers.length === 0) {
	                if (observable.isBeingObserved) {
	                    // if this observable had reactive observers, trigger the hooks
	                    observable.isBeingObserved = false;
	                    observable.onBecomeUnobserved();
	                }
	                if (observable instanceof ComputedValue) {
	                    // computed values are automatically teared down when the last observer leaves
	                    // this process happens recursively, this computed might be the last observabe of another, etc..
	                    observable.suspend();
	                }
	            }
	        }
	        globalState.pendingUnobservations = [];
	    }
	}
	function reportObserved(observable) {
	    var derivation = globalState.trackingDerivation;
	    if (derivation !== null) {
	        /**
	         * Simple optimization, give each derivation run an unique id (runId)
	         * Check if last time this observable was accessed the same runId is used
	         * if this is the case, the relation is already known
	         */
	        if (derivation.runId !== observable.lastAccessedBy) {
	            observable.lastAccessedBy = derivation.runId;
	            derivation.newObserving[derivation.unboundDepsCount++] = observable;
	            if (!observable.isBeingObserved) {
	                observable.isBeingObserved = true;
	                observable.onBecomeObserved();
	            }
	        }
	        return true;
	    }
	    else if (observable.observers.length === 0 && globalState.inBatch > 0) {
	        queueForUnobservation(observable);
	    }
	    return false;
	}
	// function invariantLOS(observable: IObservable, msg: string) {
	//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
	//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
	//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
	//     throw new Error(
	//         "lowestObserverState is wrong for " +
	//             msg +
	//             " because " +
	//             min +
	//             " < " +
	//             observable.lowestObserverState
	//     )
	// }
	/**
	 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
	 * It will propagate changes to observers from previous run
	 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
	 * Hopefully self reruning autoruns aren't a feature people should depend on
	 * Also most basic use cases should be ok
	 */
	// Called by Atom when its value changes
	function propagateChanged(observable) {
	    // invariantLOS(observable, "changed start");
	    if (observable.lowestObserverState === IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	        d.dependenciesState = IDerivationState.STALE;
	    }
	    // invariantLOS(observable, "changed end");
	}
	// Called by ComputedValue when it recalculate and its value changed
	function propagateChangeConfirmed(observable) {
	    // invariantLOS(observable, "confirmed start");
	    if (observable.lowestObserverState === IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
	            d.dependenciesState = IDerivationState.STALE;
	        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
	        )
	            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
	    }
	    // invariantLOS(observable, "confirmed end");
	}
	// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
	function propagateMaybeChanged(observable) {
	    // invariantLOS(observable, "maybe start");
	    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
	        return;
	    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
	            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	    }
	    // invariantLOS(observable, "maybe end");
	}
	function logTraceInfo(derivation, observable) {
	    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
	    if (derivation.isTracing === TraceMode.BREAK) {
	        var lines = [];
	        printDepTree(getDependencyTree(derivation), lines, 1);
	        // prettier-ignore
	        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
	    }
	}
	function printDepTree(tree, lines, depth) {
	    if (lines.length >= 1000) {
	        lines.push("(and many more)");
	        return;
	    }
	    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
	    if (tree.dependencies)
	        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
	}

	var IDerivationState;
	(function (IDerivationState) {
	    // before being run or (outside batch and not being observed)
	    // at this point derivation is not holding any data about dependency tree
	    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
	    // no shallow dependency changed since last computation
	    // won't recalculate derivation
	    // this is what makes mobx fast
	    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
	    // some deep dependency changed, but don't know if shallow dependency changed
	    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
	    // currently only ComputedValue will propagate POSSIBLY_STALE
	    //
	    // having this state is second big optimization:
	    // don't have to recompute on every dependency change, but only when it's needed
	    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
	    // A shallow dependency has changed since last computation and the derivation
	    // will need to recompute when it's needed next.
	    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
	})(IDerivationState || (IDerivationState = {}));
	var TraceMode;
	(function (TraceMode) {
	    TraceMode[TraceMode["NONE"] = 0] = "NONE";
	    TraceMode[TraceMode["LOG"] = 1] = "LOG";
	    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
	})(TraceMode || (TraceMode = {}));
	var CaughtException = /** @class */ (function () {
	    function CaughtException(cause) {
	        this.cause = cause;
	        // Empty
	    }
	    return CaughtException;
	}());
	function isCaughtException(e) {
	    return e instanceof CaughtException;
	}
	/**
	 * Finds out whether any dependency of the derivation has actually changed.
	 * If dependenciesState is 1 then it will recalculate dependencies,
	 * if any dependency changed it will propagate it by changing dependenciesState to 2.
	 *
	 * By iterating over the dependencies in the same order that they were reported and
	 * stopping on the first change, all the recalculations are only called for ComputedValues
	 * that will be tracked by derivation. That is because we assume that if the first x
	 * dependencies of the derivation doesn't change then the derivation should run the same way
	 * up until accessing x-th dependency.
	 */
	function shouldCompute(derivation) {
	    switch (derivation.dependenciesState) {
	        case IDerivationState.UP_TO_DATE:
	            return false;
	        case IDerivationState.NOT_TRACKING:
	        case IDerivationState.STALE:
	            return true;
	        case IDerivationState.POSSIBLY_STALE: {
	            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
	            var obs = derivation.observing, l = obs.length;
	            for (var i = 0; i < l; i++) {
	                var obj = obs[i];
	                if (isComputedValue(obj)) {
	                    if (globalState.disableErrorBoundaries) {
	                        obj.get();
	                    }
	                    else {
	                        try {
	                            obj.get();
	                        }
	                        catch (e) {
	                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
	                            untrackedEnd(prevUntracked);
	                            return true;
	                        }
	                    }
	                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
	                    // and `derivation` is an observer of `obj`
	                    // invariantShouldCompute(derivation)
	                    if (derivation.dependenciesState === IDerivationState.STALE) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                }
	            }
	            changeDependenciesStateTo0(derivation);
	            untrackedEnd(prevUntracked);
	            return false;
	        }
	    }
	}
	function checkIfStateModificationsAreAllowed(atom) {
	    var hasObservers$$1 = atom.observers.length > 0;
	    // Should never be possible to change an observed observable from inside computed, see #798
	    if (globalState.computationDepth > 0 && hasObservers$$1)
	        fail$1(process.env.NODE_ENV !== "production" &&
	            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
	    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
	    if (!globalState.allowStateChanges && (hasObservers$$1 || globalState.enforceActions === "strict"))
	        fail$1(process.env.NODE_ENV !== "production" &&
	            (globalState.enforceActions
	                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
	                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
	                atom.name);
	}
	/**
	 * Executes the provided function `f` and tracks which observables are being accessed.
	 * The tracking information is stored on the `derivation` object and the derivation is registered
	 * as observer of any of the accessed observables.
	 */
	function trackDerivedFunction(derivation, f, context) {
	    // pre allocate array allocation + room for variation in deps
	    // array will be trimmed by bindDependencies
	    changeDependenciesStateTo0(derivation);
	    derivation.newObserving = new Array(derivation.observing.length + 100);
	    derivation.unboundDepsCount = 0;
	    derivation.runId = ++globalState.runId;
	    var prevTracking = globalState.trackingDerivation;
	    globalState.trackingDerivation = derivation;
	    var result;
	    if (globalState.disableErrorBoundaries === true) {
	        result = f.call(context);
	    }
	    else {
	        try {
	            result = f.call(context);
	        }
	        catch (e) {
	            result = new CaughtException(e);
	        }
	    }
	    globalState.trackingDerivation = prevTracking;
	    bindDependencies(derivation);
	    return result;
	}
	/**
	 * diffs newObserving with observing.
	 * update observing to be newObserving with unique observables
	 * notify observers that become observed/unobserved
	 */
	function bindDependencies(derivation) {
	    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
	    var prevObserving = derivation.observing;
	    var observing = (derivation.observing = derivation.newObserving);
	    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
	    // Go through all new observables and check diffValue: (this list can contain duplicates):
	    //   0: first occurrence, change to 1 and keep it
	    //   1: extra occurrence, drop it
	    var i0 = 0, l = derivation.unboundDepsCount;
	    for (var i = 0; i < l; i++) {
	        var dep = observing[i];
	        if (dep.diffValue === 0) {
	            dep.diffValue = 1;
	            if (i0 !== i)
	                observing[i0] = dep;
	            i0++;
	        }
	        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
	        // not hitting the condition
	        if (dep.dependenciesState > lowestNewObservingDerivationState) {
	            lowestNewObservingDerivationState = dep.dependenciesState;
	        }
	    }
	    observing.length = i0;
	    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
	    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
	    //   0: it's not in new observables, unobserve it
	    //   1: it keeps being observed, don't want to notify it. change to 0
	    l = prevObserving.length;
	    while (l--) {
	        var dep = prevObserving[l];
	        if (dep.diffValue === 0) {
	            removeObserver(dep, derivation);
	        }
	        dep.diffValue = 0;
	    }
	    // Go through all new observables and check diffValue: (now it should be unique)
	    //   0: it was set to 0 in last loop. don't need to do anything.
	    //   1: it wasn't observed, let's observe it. set back to 0
	    while (i0--) {
	        var dep = observing[i0];
	        if (dep.diffValue === 1) {
	            dep.diffValue = 0;
	            addObserver(dep, derivation);
	        }
	    }
	    // Some new observed derivations may become stale during this derivation computation
	    // so they have had no chance to propagate staleness (#916)
	    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
	        derivation.dependenciesState = lowestNewObservingDerivationState;
	        derivation.onBecomeStale();
	    }
	}
	function clearObserving(derivation) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
	    var obs = derivation.observing;
	    derivation.observing = [];
	    var i = obs.length;
	    while (i--)
	        removeObserver(obs[i], derivation);
	    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    var res = action();
	    untrackedEnd(prev);
	    return res;
	}
	function untrackedStart() {
	    var prev = globalState.trackingDerivation;
	    globalState.trackingDerivation = null;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.trackingDerivation = prev;
	}
	/**
	 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
	 *
	 */
	function changeDependenciesStateTo0(derivation) {
	    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
	        return;
	    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
	}

	function trace() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var enterBreakPoint = false;
	    if (typeof args[args.length - 1] === "boolean")
	        enterBreakPoint = args.pop();
	    var derivation = getAtomFromArgs(args);
	    if (!derivation) {
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
	    }
	    if (derivation.isTracing === TraceMode.NONE) {
	        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
	    }
	    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
	}
	function getAtomFromArgs(args) {
	    switch (args.length) {
	        case 0:
	            return globalState.trackingDerivation;
	        case 1:
	            return getAtom(args[0]);
	        case 2:
	            return getAtom(args[0], args[1]);
	    }
	}

	var Reaction = /** @class */ (function () {
	    function Reaction(name, onInvalidate, errorHandler) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.errorHandler = errorHandler;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = [];
	        this.dependenciesState = IDerivationState.NOT_TRACKING;
	        this.diffValue = 0;
	        this.runId = 0;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	        this.isTracing = TraceMode.NONE;
	    }
	    Reaction.prototype.onBecomeStale = function () {
	        this.schedule();
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this._isScheduled;
	    };
	    /**
	     * internal, use schedule() if you intend to kick off a reaction
	     */
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            startBatch();
	            this._isScheduled = false;
	            if (shouldCompute(this)) {
	                this._isTrackPending = true;
	                try {
	                    this.onInvalidate();
	                    if (this._isTrackPending && isSpyEnabled()) {
	                        // onInvalidate didn't trigger track right away..
	                        spyReport({
	                            name: this.name,
	                            type: "scheduled-reaction"
	                        });
	                    }
	                }
	                catch (e) {
	                    this.reportExceptionInDerivation(e);
	                }
	            }
	            endBatch();
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        startBatch();
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify) {
	            startTime = Date.now();
	            spyReportStart({
	                name: this.name,
	                type: "reaction"
	            });
	        }
	        this._isRunning = true;
	        var result = trackDerivedFunction(this, fn, undefined);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (this.isDisposed) {
	            // disposed during last run. Clean up everything that was bound after the dispose call.
	            clearObserving(this);
	        }
	        if (isCaughtException(result))
	            this.reportExceptionInDerivation(result.cause);
	        if (notify) {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	        endBatch();
	    };
	    Reaction.prototype.reportExceptionInDerivation = function (error) {
	        var _this = this;
	        if (this.errorHandler) {
	            this.errorHandler(error, this);
	            return;
	        }
	        if (globalState.disableErrorBoundaries)
	            throw error;
	        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
	        console.error(message, error);
	        /** If debugging brought you here, please, read the above message :-). Tnx! */
	        if (isSpyEnabled()) {
	            spyReport({
	                type: "error",
	                name: this.name,
	                message: message,
	                error: "" + error
	            });
	        }
	        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            if (!this._isRunning) {
	                // if disposed while running, clean up later. Maybe not optimal, but rare case
	                startBatch();
	                clearObserving(this);
	                endBatch();
	            }
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r.$mobx = this;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.trace = function (enterBreakPoint) {
	        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
	        trace(this, enterBreakPoint);
	    };
	    return Reaction;
	}());
	/**
	 * Magic number alert!
	 * Defines within how many times a reaction is allowed to re-trigger itself
	 * until it is assumed that this is gonna be a never ending loop...
	 */
	var MAX_REACTION_ITERATIONS = 100;
	var reactionScheduler = function (f) { return f(); };
	function runReactions() {
	    // Trampolining, if runReactions are already running, new reactions will be picked up
	    if (globalState.inBatch > 0 || globalState.isRunningReactions)
	        return;
	    reactionScheduler(runReactionsHelper);
	}
	function runReactionsHelper() {
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    // While running reactions, new reactions might be triggered.
	    // Hence we work with two variables and check whether
	    // we converge to no remaining reactions after a while.
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS) {
	            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
	                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
	            allReactions.splice(0); // clear reactions
	        }
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var isReaction = createInstanceofPredicate("Reaction", Reaction);

	/**
	 * (c) Michel Weststrate 2015 - 2016
	 * MIT Licensed
	 *
	 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
	 * this is a good place to start:
	 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
	 *
	 * Source folders:
	 * ===============
	 *
	 * - api/     Most of the public static methods exposed by the module can be found here.
	 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
	 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
	 * - utils/   Utility stuff.
	 *
	 */
	try {
	    // define process.env if needed
	    // if this is not a production build in the first place
	    // (in which case the expression below would be substituted with 'production')
	    process.env.NODE_ENV;
	}
	catch (e) {
	    var g = typeof window !== "undefined" ? window : global;
	    if (typeof process === "undefined")
	        g.process = {};
	    g.process.env = {};
	}

	// This line should come after all the imports as well, for the same reason
	// as noted above. I will file a bug with rollupjs - @rossipedia
	// Devtools support
	if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	    // See: https://github.com/andykog/mobx-devtools/
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
	        spy: spy,
	        extras: {
	            getDebugName: getDebugName
	        }
	    });
	}
	// TODO: remove in some future build
	if (process.env.NODE_ENV !== "production" &&
	    typeof module !== "undefined" &&
	    typeof module.exports !== "undefined") {
	    var warnedAboutDefaultExport_1 = false;
	    Object.defineProperty(module.exports, "default", {
	        enumerable: false,
	        get: function () {
	            if (!warnedAboutDefaultExport_1) {
	                warnedAboutDefaultExport_1 = true;
	                console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
	            }
	            return undefined;
	        }
	    });
	    [
	        "extras",
	        "Atom",
	        "BaseAtom",
	        "asFlat",
	        "asMap",
	        "asReference",
	        "asStructure",
	        "autorunAsync",
	        "createTranformer",
	        "expr",
	        "isModifierDescriptor",
	        "isStrictModeEnabled",
	        "map",
	        "useStrict",
	        "whyRun"
	    ].forEach(function (prop) {
	        Object.defineProperty(module.exports, prop, {
	            enumerable: false,
	            get: function () {
	                fail$1("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
	            },
	            set: function () { }
	        });
	    });
	}

	/*!
	 * Copyright 2015 Google Inc. All rights reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	 * or implied. See the License for the specific language governing
	 * permissions and limitations under the License.
	 */

	/*
	 * @see https://developers.google.com/web/updates/2015/08/using-requestidlecallback
	 */
	window.requestIdleCallback = window.requestIdleCallback || function (cb) {
	    return setTimeout(function () {
	        var start = Date.now();
	        cb({
	            didTimeout: false,
	            timeRemaining: function timeRemaining() {
	                return Math.max(0, 50 - (Date.now() - start));
	            }
	        });
	    }, 1);
	};

	window.cancelIdleCallback = window.cancelIdleCallback || function (id) {
	    clearTimeout(id);
	};

	options.afterInstall = function (ele) {
	    if (ele.constructor.observe) {
	        oba(ele.data, ele);
	    }
	};

	var idleId = null;
	var updateList = [];

	function oba(data, ele) {
	    var o = observable(data);

	    autorun(function () {
	        JSON.stringify(o);
	        if (ele._isInstalled) {
	            updateList.push(ele);
	            cancelIdleCallback(idleId);
	            idleId = requestIdleCallback(backgroundTask);
	        }
	    });

	    ele.data = o;
	}

	function backgroundTask(deadline) {
	    while (deadline.timeRemaining() > 0 && updateList.length > 0) {
	        updateList.shift().update();
	    }

	    if (updateList.length > 0) {
	        idleId = requestIdleCallback(backgroundTask);
	    }
	}

	function observe$1(target) {
	    target.observe = true;
	}

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _dec2, _class2;

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoList = (_dec = tag('todo-list'), _dec(_class = function (_WeElement) {
	    _inherits$1(TodoList, _WeElement);

	    function TodoList() {
	        _classCallCheck$1(this, TodoList);

	        return _possibleConstructorReturn$1(this, _WeElement.apply(this, arguments));
	    }

	    TodoList.prototype.render = function render$$1(props) {
	        return Omi.h(
	            'ul',
	            null,
	            props.items.map(function (item) {
	                return Omi.h(
	                    'li',
	                    { key: item.id },
	                    item.text
	                );
	            })
	        );
	    };

	    return TodoList;
	}(WeElement)) || _class);
	var TodoApp = (_dec2 = tag('todo-app'), observe$1(_class2 = _dec2(_class2 = function (_WeElement2) {
	    _inherits$1(TodoApp, _WeElement2);

	    function TodoApp() {
	        var _temp, _this2, _ret;

	        _classCallCheck$1(this, TodoApp);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this2 = _possibleConstructorReturn$1(this, _WeElement2.call.apply(_WeElement2, [this].concat(args))), _this2), _this2.handleChange = function (e) {
	            _this2.data.text = e.target.value;
	        }, _this2.handleSubmit = function (e) {
	            e.preventDefault();
	            if (!_this2.data.text.trim().length) {
	                return;
	            }
	            _this2.data.items.push({
	                text: _this2.data.text,
	                id: Date.now()
	            });
	            _this2.data.text = '';
	        }, _temp), _possibleConstructorReturn$1(_this2, _ret);
	    }

	    TodoApp.prototype.render = function render$$1() {
	        console.log('render');
	        return Omi.h(
	            'div',
	            null,
	            Omi.h(
	                'h3',
	                null,
	                'TODO'
	            ),
	            Omi.h('todo-list', { items: this.data.items }),
	            Omi.h(
	                'form',
	                { onSubmit: this.handleSubmit },
	                Omi.h('input', {
	                    id: 'new-todo',
	                    onChange: this.handleChange,
	                    value: this.data.text
	                }),
	                Omi.h(
	                    'button',
	                    null,
	                    'Add #',
	                    this.data.items.length + 1
	                )
	            )
	        );
	    };

	    _createClass(TodoApp, null, [{
	        key: 'data',
	        get: function get() {
	            return { items: [], text: '' };
	        }
	    }]);

	    return TodoApp;
	}(WeElement)) || _class2) || _class2);


	render(Omi.h('todo-app', null), 'body');

}());
//# sourceMappingURL=b.js.map
