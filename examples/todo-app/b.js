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
	  node.innerText = css;
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
			} else if (typeof value !== 'function') {
				if (ns) {
					node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
					node.props[npn(name.toLowerCase())] = value;
				} else {
					node.setAttribute(name, value);
					node.props[npn(name)] = value;
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

		// remove attributes no longer present on the vnode by setting them to undefined
		for (name in old) {
			if (!(attrs && attrs[name] != null) && old[name] != null) {
				setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
				delete dom.props[name];
			}
		}
		var update = false;
		// add new & update changed attributes
		for (name in attrs) {
			if (typeof attrs[name] === 'object') {
				// todo diff??
				dom.props[npn(name)] = attrs[name];
				update = true;
			} else if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
				setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
			}
		}

		update && dom.update();
	}

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
	        this.install();

	        var shadowRoot = this.attachShadow({ mode: 'open' });

	        this.css && shadowRoot.appendChild(cssToDom(this.css()));
	        this.host = diff(null, this.render(this.props, this.data), {}, false, null, false);
	        shadowRoot.appendChild(this.host);

	        this.installed();
	    };

	    //chain transfer through this method


	    WeElement.prototype.attributeChangedCallback = function attributeChangedCallback(name, pre, current) {
	        this.props[npn(name)] = current;
	        this.update();
	    };

	    WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
	        this.uninstall();
	    };

	    WeElement.prototype.update = function update() {
	        this.beforeUpdate();
	        diff(this.host, this.render(this.props, this.data));
	        this.afterUpdate();
	    };

	    WeElement.prototype.fire = function fire(name, data) {
	        this.dispatchEvent(new CustomEvent(name, { detail: data }));
	    };

	    WeElement.prototype.install = function install() {};

	    WeElement.prototype.installed = function installed() {};

	    WeElement.prototype.beforeUpdate = function beforeUpdate() {};

	    WeElement.prototype.afterUpdate = function afterUpdate() {};

	    _createClass(WeElement, null, [{
	        key: 'observedAttributes',
	        get: function get() {
	            if (!this.props) return;
	            if (isArray(this.props)) {
	                return this.props;
	            } else {
	                return Object.keys(this.props);
	            }
	        }
	    }]);

	    return WeElement;
	}(HTMLElement);

	function render(vnode, parent) {
		parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
		diff(null, vnode, {}, false, parent, false);
	}

	function define(name, ctor) {
	    customElements.define(name, ctor);
	}

	var instances = [];

	options.root.Omi = {
		h: h,
		createElement: h,
		WeElement: WeElement,
		render: render,
		options: options,
		instances: instances,
		define: define
	};

	options.root.Omi.version = '4.0.0';

	var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoList = function (_WeElement) {
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
	}(WeElement);

	define('todo-list', TodoList);

	var TodoApp = function (_WeElement2) {
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
	            if (!_this2.data.text.length) {
	                return;
	            }
	            _this2.data.items.push({
	                text: _this2.data.text,
	                id: Date.now()
	            });
	            _this2.data.text = '';
	            _this2.update();
	        }, _temp), _possibleConstructorReturn$1(_this2, _ret);
	    }

	    TodoApp.prototype.render = function render$$1() {
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

	    _createClass$1(TodoApp, null, [{
	        key: 'data',
	        get: function get() {
	            return { items: [], text: '' };
	        }
	    }]);

	    return TodoApp;
	}(WeElement);

	define('todo-app', TodoApp);

	render(Omi.h('todo-app', null), 'body');

}());
//# sourceMappingURL=b.js.map
