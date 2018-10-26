/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _omi = __webpack_require__(1);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyApp = (_dec = (0, _omi.tag)('my-app'), _dec(_class = function (_WeElement) {
    _inherits(MyApp, _WeElement);

    function MyApp() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MyApp);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call.apply(_ref, [this].concat(args))), _this), _this.index = function (ctx) {
            _this.data.path = ctx.path;
            _this.update();
        }, _this.about = function (ctx) {
            _this.data.path = ctx.path;
            _this.update();
        }, _this.contact = function (ctx) {
            _this.data.path = ctx.path;
            _this.update();
        }, _this.notfound = function (ctx) {
            _this.data.path = ctx.path;
            _this.update();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MyApp, [{
        key: 'installed',
        value: function installed() {
            console.log(_index2.default);
            (0, _index2.default)('/', this.index);
            (0, _index2.default)('/about', this.about);
            (0, _index2.default)('/contact', this.contact);
            (0, _index2.default)('/contact/:contactName', this.contact);
            (0, _index2.default)('*', this.notfound);
            (0, _index2.default)();
        }
    }, {
        key: 'render',
        value: function render() {
            return Omi.h(
                'div',
                null,
                Omi.h(
                    'ul',
                    null,
                    Omi.h(
                        'li',
                        null,
                        Omi.h(
                            'a',
                            { href: '/' },
                            '/'
                        )
                    ),
                    Omi.h(
                        'li',
                        null,
                        Omi.h(
                            'a',
                            { href: '/about' },
                            '/about'
                        )
                    ),
                    Omi.h(
                        'li',
                        null,
                        Omi.h(
                            'a',
                            { href: '/contact' },
                            '/contact'
                        )
                    ),
                    Omi.h(
                        'li',
                        null,
                        Omi.h(
                            'a',
                            { href: '/contact/me' },
                            '/contact/me'
                        )
                    ),
                    Omi.h(
                        'li',
                        null,
                        Omi.h(
                            'a',
                            { href: '/contact/me?a=b' },
                            '/contact/me?a=b'
                        )
                    ),
                    Omi.h(
                        'li',
                        null,
                        Omi.h(
                            'a',
                            { href: '/not-found?foo=bar' },
                            '/not-found'
                        )
                    )
                ),
                Omi.h(
                    'p',
                    null,
                    this.data.path
                )
            );
        }
    }]);

    return MyApp;
}(_omi.WeElement)) || _class);


(0, _omi.render)(Omi.h('my-app', null), 'body');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * omi v4.0.7  http://omijs.org
 * Omi === Preact + Scoped CSS + Store System + Native Support in 3kb javascript.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

/** Virtual DOM Node */
function VNode() {}

function getGlobal() {
	if ((typeof global === "undefined" ? "undefined" : _typeof(global)) !== "object" || !global || global.Math !== Math || global.Array !== Array) {
		return self || window || global || function () {
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
};

var stack = [];
var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
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
			if (typeof child === "boolean") child = null;

			if (simple = typeof nodeName !== "function") {
				if (child == null) child = "";else if (typeof child === "number") child = String(child);else if (typeof child !== "string") simple = false;
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
	window.customElements.hasOwnProperty("polyfillWrapFlushCallback")) {
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
	var node = document.createElement("style");
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
		if (typeof ref == "function") ref(value);else ref.current = value;
	}
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 * @type {(callback: function) => void}
 */
var defer = typeof Promise == "function" ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function isArray(obj) {
	return Object.prototype.toString.call(obj) === "[object Array]";
}

function nProps(props) {
	if (!props || isArray(props)) return {};
	var result = {};
	Object.keys(props).forEach(function (key) {
		result[key] = props[key].value;
	});
	return result;
}

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
	if (typeof vnode === "string" || typeof vnode === "number") {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === "string") {
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
	var node = isSvg ? document.createElementNS("http://www.w3.org/2000/svg", nodeName) : document.createElement(nodeName);
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
	if (name === "className") name = "class";

	if (name === "key") {
		// ignore
	} else if (name === "ref") {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === "class" && !isSvg) {
		node.className = value || "";
	} else if (name === "style") {
		if (!value || typeof value === "string" || typeof old === "string") {
			node.style.cssText = value || "";
		}
		if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
			if (typeof old !== "string") {
				for (var i in old) {
					if (!(i in value)) node.style[i] = "";
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === "number" && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + "px" : value[i];
			}
		}
	} else if (name === "dangerouslySetInnerHTML") {
		if (value) node.innerHTML = value.__html || "";
	} else if (name[0] == "o" && name[1] == "n") {
		var useCapture = name !== (name = name.replace(/Capture$/, ""));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== "list" && name !== "type" && !isSvg && name in node) {
		// Attempt to set a DOM property to the given value.
		// IE & FF throw for certain property-value combinations.
		try {
			node[name] = value == null ? "" : value;
		} catch (e) {}
		if ((value == null || value === false) && name != "spellcheck") node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ""));
		// spellcheck is treated differently than all other boolean values and
		// should not be removed when the value is `false`. See:
		// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS("http://www.w3.org/1999/xlink", name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value === "string") {
			if (ns) {
				node.setAttributeNS("http://www.w3.org/1999/xlink", name.toLowerCase(), value);
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
	var ret;
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !("__preactattr_" in dom);
	}
	if (isArray(vnode)) {
		ret = [];
		var parentNode = null;
		if (isArray(dom)) {
			parentNode = dom[0].parentNode;
			dom.forEach(function (item, index) {
				ret.push(idiff(item, vnode[index], context, mountAll, componentRoot));
			});
		} else {
			vnode.forEach(function (item) {
				ret.push(idiff(dom, item, context, mountAll, componentRoot));
			});
		}if (parent) {
			ret.forEach(function (vnode) {
				parent.appendChild(vnode);
			});
		} else if (isArray(dom)) {
			dom.forEach(function (node) {
				parentNode.appendChild(node);
			});
		}
	} else {
		ret = idiff(dom, vnode, context, mountAll, componentRoot);
		// append the element if its a new parent
		if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	}

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
	if (vnode == null || typeof vnode === "boolean") vnode = "";

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === "string" || typeof vnode === "number") {
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

		out["__preactattr_"] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === "svg" ? true : vnodeName === "foreignObject" ? false : isSvgMode;

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
	    props = out["__preactattr_"],
	    vchildren = vnode.children;

	if (props == null) {
		props = out["__preactattr_"] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === "string" && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
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

	out.props && (out.props.children = vnode.children);

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
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child["__preactattr_"],
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
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
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

			f = originalChildren[i];
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
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
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
	if (node["__preactattr_"] != null && node["__preactattr_"].ref) node["__preactattr_"].ref(null);

	if (unmountOnly === false || node["__preactattr_"] == null) {
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
	var name;
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
		if (isWeElement && _typeof(attrs[name]) === "object") {
			dom.props[npn(name)] = attrs[name];
			update = true;
		} else if (name !== "children" && name !== "innerHTML" && (!(name in old) || attrs[name] !== (name === "value" || name === "checked" ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
			if (isWeElement) {
				dom.props[npn(name)] = attrs[name];
				update = true;
			}
		}
	}

	dom.parentNode && update && isWeElement && dom.update();
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
		var shadowRoot = this.attachShadow({ mode: "open" });

		this.css && shadowRoot.appendChild(cssToDom(this.css()));
		this.beforeRender();
		this.host = diff(null, this.render(this.props, !this.constructor.pure && this.store ? this.store.data : this.data), {}, false, null, false);
		if (isArray(this.host)) {
			this.host.forEach(function (item) {
				shadowRoot.appendChild(item);
			});
		} else {
			shadowRoot.appendChild(this.host);
		}
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
		this.beforeRender();
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

	WeElement.prototype.beforeRender = function beforeRender() {};

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
		switch (typeof obj === "undefined" ? "undefined" : _typeof(obj)) {
			case "object":
				return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
			case "undefined":
				return null; //this is how JSON.stringify behaves for array items
			default:
				return obj; //no need to clone primitives
		}
	}
	JSONPatcherProxy.deepClone = deepClone;

	function escapePathComponent(str) {
		if (str.indexOf("/") == -1 && str.indexOf("~") == -1) return str;
		return str.replace(/~/g, "~0").replace(/\//g, "~1");
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
			var path = pathComponents.join("/");
			return "/" + path;
		}
		return "";
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

		var destinationPropKey = parentPath + "/" + escapePathComponent(key);

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
		if (newValue && (typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) == "object" && !instance.proxifiedObjectsMap.has(newValue)) {
			instance.parenthoodMap.set(newValue, {
				parent: target,
				path: key
			});
			newValue = instance._proxifyObjectTreeRecursively(target, newValue, key);
		}
		// let's start with this operation, and may or may not update it later
		var operation = {
			op: "remove",
			path: destinationPropKey
		};
		if (typeof newValue == "undefined") {
			// applying De Morgan's laws would be a tad faster, but less readable
			if (!Array.isArray(target) && !target.hasOwnProperty(key)) {
				// `undefined` is being set to an already undefined value, keep silent
				return Reflect.set(target, key, newValue);
			}
			// when array element is set to `undefined`, should generate replace to `null`
			if (Array.isArray(target)) {
				// undefined array elements are JSON.stringified to `null`
				operation.op = "replace", operation.value = null;
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
				if (key != "length") {
					console.warn("JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch");
				}
				return Reflect.set(target, key, newValue);
			}
			operation.op = "add";
			if (target.hasOwnProperty(key)) {
				if (typeof target[key] !== "undefined" || Array.isArray(target)) {
					operation.op = "replace"; // setting `undefined` array elements is a `replace` op
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
		if (typeof target[key] !== "undefined") {
			var parentPath = findObjectPath(instance, target);
			var destinationPropKey = parentPath + "/" + escapePathComponent(key);

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
				op: "remove",
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
		if (typeof showDetachedWarning !== "boolean") {
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
		var proxifiedObject = this._proxifyObjectTreeRecursively(undefined, root, "");
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
			throw new Error("You need to either record changes or pass a callback");
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
			throw new Error("You should set record to true to get patches later");
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
	if (patch.op === "remove") {
		// fix arr splice
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
	parent = typeof parent === "string" ? document.querySelector(parent) : parent;
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
		if (next === "[" || next === ".") {
			return true;
		}
	}
	return false;
}

function fixPath(path) {
	var mpPath = "";
	var arr = path.replace("/", "").split("/");
	arr.forEach(function (item, index) {
		if (index) {
			if (isNaN(Number(item))) {
				mpPath += "." + item;
			} else {
				mpPath += "[" + item + "]";
			}
		} else {
			mpPath += item;
		}
	});
	return mpPath;
}

function getArrayPatch(path, store) {
	var arr = path.replace("/", "").split("/");
	var current = store.data[arr[0]];
	for (var i = 1, len = arr.length; i < len - 1; i++) {
		current = current[arr[i]];
	}
	return { k: fixArrPath(path), v: current };
}

function fixArrPath(path) {
	var mpPath = "";
	var arr = path.replace("/", "").split("/");
	var len = arr.length;
	arr.forEach(function (item, index) {
		if (index < len - 1) {
			if (index) {
				if (isNaN(Number(item))) {
					mpPath += "." + item;
				} else {
					mpPath += "[" + item + "]";
				}
			} else {
				mpPath += item;
			}
		}
	});
	return mpPath;
}

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
		if (type === "[object Object]") {
			_objToPath(data[key], key, result);
		} else if (type === "[object Array]") {
			_arrayToPath(data[key], key, result);
		}
	});
}

function _objToPath(data, path, result) {
	Object.keys(data).forEach(function (key) {
		result[path + "." + key] = true;
		delete result[path];
		var type = Object.prototype.toString.call(data[key]);
		if (type === "[object Object]") {
			_objToPath(data[key], path + "." + key, result);
		} else if (type === "[object Array]") {
			_arrayToPath(data[key], path + "." + key, result);
		}
	});
}

function _arrayToPath(data, path, result) {
	data.forEach(function (item, index) {
		result[path + "[" + index + "]"] = true;
		delete result[path];
		var type = Object.prototype.toString.call(item);
		if (type === "[object Object]") {
			_objToPath(item, path + "[" + index + "]", result);
		} else if (type === "[object Array]") {
			_arrayToPath(item, path + "[" + index + "]", result);
		}
	});
}

function tag(name, pure) {
	return function (target) {
		target.pure = pure;
		define(name, target);
	};
}

var omi = {
	tag: tag,
	WeElement: WeElement,
	render: render,
	h: h,
	createElement: h,
	options: options,
	define: define
};

options.root.Omi = omi;
options.root.Omi.version = "4.0.7";

exports.default = omi;
exports.tag = tag;
exports.WeElement = WeElement;
exports.render = render;
exports.h = h;
exports.createElement = h;
exports.options = options;
exports.define = define;
//# sourceMappingURL=omi.esm.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {

    var page =  true ? __webpack_require__(4) : window.page;

    //todo extend page method
    //todo define element named <omi-page></omi-page>
    //...

    if (( false ? 'undefined' : _typeof(exports)) == "object") {
        module.exports = page;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return page;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        window.page = page;
    }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.page = factory();
})(undefined, function () {
  'use strict';

  var isarray = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

  /**
   * Expose `pathToRegexp`.
   */
  var pathToRegexp_1 = pathToRegexp;
  var parse_1 = parse;
  var compile_1 = compile;
  var tokensToFunction_1 = tokensToFunction;
  var tokensToRegExp_1 = tokensToRegExp;

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {String} str
   * @return {Array}
   */
  function parse(str) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var res;

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        continue;
      }

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
      }

      var prefix = res[2];
      var name = res[3];
      var capture = res[4];
      var group = res[5];
      var suffix = res[6];
      var asterisk = res[7];

      var repeat = suffix === '+' || suffix === '*';
      var optional = suffix === '?' || suffix === '*';
      var delimiter = prefix || '/';
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: escapeGroup(pattern)
      });
    }

    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index);
    }

    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path);
    }

    return tokens;
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {String}   str
   * @return {Function}
   */
  function compile(str) {
    return tokensToFunction(parse(str));
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction(tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (_typeof(tokens[i]) === 'object') {
        matches[i] = new RegExp('^' + tokens[i].pattern + '$');
      }
    }

    return function (obj) {
      var path = '';
      var data = obj || {};

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;

          continue;
        }

        var value = data[token.name];
        var segment;

        if (value == null) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined');
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"');
          }

          if (value.length === 0) {
            if (token.optional) {
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encodeURIComponent(value[j]);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue;
        }

        segment = encodeURIComponent(value);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
        }

        path += token.prefix + segment;
      }

      return path;
    };
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {String} str
   * @return {String}
   */
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1');
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {String} group
   * @return {String}
   */
  function escapeGroup(group) {
    return group.replace(/([=!:$\/()])/g, '\\$1');
  }

  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {RegExp} re
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function attachKeys(re, keys) {
    re.keys = keys;
    return re;
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {String}
   */
  function flags(options) {
    return options.sensitive ? '' : 'i';
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {RegExp} path
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function regexpToRegexp(path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        });
      }
    }

    return attachKeys(path, keys);
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {Array}  path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function arrayToRegexp(path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

    return attachKeys(regexp, keys);
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {String} path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function stringToRegexp(path, keys, options) {
    var tokens = parse(path);
    var re = tokensToRegExp(tokens, options);

    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i]);
      }
    }

    return attachKeys(re, keys);
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {Array}  tokens
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function tokensToRegExp(tokens, options) {
    options = options || {};

    var strict = options.strict;
    var end = options.end !== false;
    var route = '';
    var lastToken = tokens[tokens.length - 1];
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
      } else {
        var prefix = escapeString(token.prefix);
        var capture = token.pattern;

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*';
        }

        if (token.optional) {
          if (prefix) {
            capture = '(?:' + prefix + '(' + capture + '))?';
          } else {
            capture = '(' + capture + ')?';
          }
        } else {
          capture = prefix + '(' + capture + ')';
        }

        route += capture;
      }
    }

    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
    }

    if (end) {
      route += '$';
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)';
    }

    return new RegExp('^' + route, flags(options));
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(String|RegExp|Array)} path
   * @param  {Array}                 [keys]
   * @param  {Object}                [options]
   * @return {RegExp}
   */
  function pathToRegexp(path, keys, options) {
    keys = keys || [];

    if (!isarray(keys)) {
      options = keys;
      keys = [];
    } else if (!options) {
      options = {};
    }

    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys, options);
    }

    if (isarray(path)) {
      return arrayToRegexp(path, keys, options);
    }

    return stringToRegexp(path, keys, options);
  }

  pathToRegexp_1.parse = parse_1;
  pathToRegexp_1.compile = compile_1;
  pathToRegexp_1.tokensToFunction = tokensToFunction_1;
  pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

  /**
     * Module dependencies.
     */

  /**
   * Short-cuts for global-object checks
   */

  var hasDocument = 'undefined' !== typeof document;
  var hasWindow = 'undefined' !== typeof window;
  var hasHistory = 'undefined' !== typeof history;
  var hasProcess = typeof process !== 'undefined';

  /**
   * Detect click event
   */
  var clickEvent = hasDocument && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var isLocation = hasWindow && !!(window.history.location || window.location);

  /**
   * The page instance
   * @api private
   */
  function Page(options) {
    // public things
    this.callbacks = [];
    this.exits = [];
    this.current = '';
    this.len = 0;

    // private things
    this._dispatch = true;
    this._decodeURLComponents = true;
    this._base = '';
    this._strict = false;
    this._running = false;
    this._hashbang = false;

    // bound functions
    this.clickHandler = this.clickHandler.bind(this);
    this._onpopstate = this._onpopstate.bind(this);

    this.configure(options);
  }

  /**
   * Configure the instance of page. This can be called multiple times.
   *
   * @param {Object} options
   * @api public
   */

  Page.prototype.configure = function (options) {
    var opts = options || {};

    this._window = opts.window || hasWindow && window;
    this._dispatch = opts.dispatch !== false;
    this._decodeURLComponents = opts.decodeURLComponents !== false;
    this._popstate = opts.popstate !== false && hasWindow;
    this._click = opts.click !== false && hasDocument;
    this._hashbang = !!opts.hashbang;

    var _window = this._window;
    if (this._popstate) {
      _window.addEventListener('popstate', this._onpopstate, false);
    } else if (hasWindow) {
      _window.removeEventListener('popstate', this._onpopstate, false);
    }

    if (this._click) {
      _window.document.addEventListener(clickEvent, this.clickHandler, false);
    } else if (hasDocument) {
      _window.document.removeEventListener(clickEvent, this.clickHandler, false);
    }

    if (this._hashbang && hasWindow && !hasHistory) {
      _window.addEventListener('hashchange', this._onpopstate, false);
    } else if (hasWindow) {
      _window.removeEventListener('hashchange', this._onpopstate, false);
    }
  };

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  Page.prototype.base = function (path) {
    if (0 === arguments.length) return this._base;
    this._base = path;
  };

  /**
   * Gets the `base`, which depends on whether we are using History or
   * hashbang routing.
    * @api private
   */
  Page.prototype._getBase = function () {
    var base = this._base;
    if (!!base) return base;
    var loc = hasWindow && this._window && this._window.location;

    if (hasWindow && this._hashbang && loc && loc.protocol === 'file:') {
      base = loc.pathname;
      base = base.substring(0, base.lastIndexOf('/'));
    }

    return base;
  };

  /**
   * Get or set strict path matching to `enable`
   *
   * @param {boolean} enable
   * @api public
   */

  Page.prototype.strict = function (enable) {
    if (0 === arguments.length) return this._strict;
    this._strict = enable;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  Page.prototype.start = function (options) {
    this.configure(options);

    if (!this._dispatch) return;
    this._running = true;

    var url;
    if (isLocation) {
      var window = this._window;
      var loc = window.location;

      if (this._hashbang && ~loc.hash.indexOf('#!')) {
        url = loc.hash.substr(2) + loc.search;
      } else if (this._hashbang) {
        url = loc.search + loc.hash;
      } else {
        url = loc.pathname + loc.search + loc.hash;
      }
    }

    this.replace(url, null, true, this._dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  Page.prototype.stop = function () {
    if (!this._running) return;
    this.current = '';
    this.len = 0;
    this._running = false;

    var window = this._window;
    hasDocument && window.document.removeEventListener(clickEvent, this.clickHandler, false);
    hasWindow && window.removeEventListener('popstate', this._onpopstate, false);
    hasWindow && window.removeEventListener('hashchange', this._onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  Page.prototype.show = function (path, state, dispatch, push) {
    var ctx = new Context(path, state, this),
        prev = this.prevContext;
    this.prevContext = ctx;
    this.current = ctx.path;
    if (this._dispatch) this.dispatch(ctx, prev);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  Page.prototype.back = function (path, state) {
    var page = this;
    if (this.len > 0) {
      var window = this._window;
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      hasHistory && window.history.back();
      this.len--;
    } else if (path) {
      setTimeout(function () {
        page.show(path, state);
      });
    } else {
      setTimeout(function () {
        page.show(page._getBase(), state);
      });
    }
  };

  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  Page.prototype.redirect = function (from, to) {
    var inst = this;

    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page.call(this, from, function (e) {
        setTimeout(function () {
          inst.replace( /** @type {!string} */to);
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function () {
        inst.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */

  Page.prototype.replace = function (path, state, init, dispatch) {
    var ctx = new Context(path, state, this),
        prev = this.prevContext;
    this.prevContext = ctx;
    this.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) this.dispatch(ctx, prev);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */

  Page.prototype.dispatch = function (ctx, prev) {
    var i = 0,
        j = 0,
        page = this;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled.call(page, ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  Page.prototype.exit = function (path, fn) {
    if (typeof path === 'function') {
      return this.exit('*', path);
    }

    var route = new Route(path, null, this);
    for (var i = 1; i < arguments.length; ++i) {
      this.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Handle "click" events.
   */

  /* jshint +W054 */
  Page.prototype.clickHandler = function (e) {
    if (1 !== this._which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;

    // ensure link
    // use shadow dom when available if not, fall back to composedPath()
    // for browsers that only have shady
    var el = e.target;
    var eventPath = e.path || (e.composedPath ? e.composedPath() : null);

    if (eventPath) {
      for (var i = 0; i < eventPath.length; i++) {
        if (!eventPath[i].nodeName) continue;
        if (eventPath[i].nodeName.toUpperCase() !== 'A') continue;
        if (!eventPath[i].href) continue;

        el = eventPath[i];
        break;
      }
    }

    // continue ensure link
    // el.nodeName for svg links are 'a' instead of 'A'
    while (el && 'A' !== el.nodeName.toUpperCase()) {
      el = el.parentNode;
    }if (!el || 'A' !== el.nodeName.toUpperCase()) return;

    // check if link is inside an svg
    // in this case, both href and target are always inside an object
    var svg = _typeof(el.href) === 'object' && el.href.constructor.name === 'SVGAnimatedString';

    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!this._hashbang && this._samePath(el) && (el.hash || '#' === link)) return;

    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    // svg target is an object and its desired value is in .baseVal property
    if (svg ? el.target.baseVal : el.target) return;

    // x-origin
    // note: svg links that are not relative don't call click events (and skip page.js)
    // consequently, all svg links tested inside page.js are relative and in the same origin
    if (!svg && !this.sameOrigin(el.href)) return;

    // rebuild path
    // There aren't .pathname and .search properties in svg links, so we use href
    // Also, svg href is an object and its desired value is in .baseVal property
    var path = svg ? el.href.baseVal : el.pathname + el.search + (el.hash || '');

    path = path[0] !== '/' ? '/' + path : path;

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (hasProcess && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;
    var pageBase = this._getBase();

    if (path.indexOf(pageBase) === 0) {
      path = path.substr(pageBase.length);
    }

    if (this._hashbang) path = path.replace('#!', '');

    if (pageBase && orig === path && (!isLocation || this._window.location.protocol !== 'file:')) {
      return;
    }

    e.preventDefault();
    this.show(orig);
  };

  /**
   * Handle "populate" events.
   * @api private
   */

  Page.prototype._onpopstate = function () {
    var loaded = false;
    if (!hasWindow) {
      return function () {};
    }
    if (hasDocument && document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function () {
        setTimeout(function () {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      var page = this;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else if (isLocation) {
        var loc = page._window.location;
        page.show(loc.pathname + loc.search + loc.hash, undefined, undefined, false);
      }
    };
  }();

  /**
   * Event button.
   */
  Page.prototype._which = function (e) {
    e = e || hasWindow && this._window.event;
    return null == e.which ? e.button : e.which;
  };

  /**
   * Convert to a URL object
   * @api private
   */
  Page.prototype._toURL = function (href) {
    var window = this._window;
    if (typeof URL === 'function' && isLocation) {
      return new URL(href, window.location.toString());
    } else if (hasDocument) {
      var anc = window.document.createElement('a');
      anc.href = href;
      return anc;
    }
  };

  /**
   * Check if `href` is the same origin.
   * @param {string} href
   * @api public
   */

  Page.prototype.sameOrigin = function (href) {
    if (!href || !isLocation) return false;

    var url = this._toURL(href);
    var window = this._window;

    var loc = window.location;
    return loc.protocol === url.protocol && loc.hostname === url.hostname && loc.port === url.port;
  };

  /**
   * @api private
   */
  Page.prototype._samePath = function (url) {
    if (!isLocation) return false;
    var window = this._window;
    var loc = window.location;
    return url.pathname === loc.pathname && url.search === loc.search;
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   * @api private
   */
  Page.prototype._decodeURLEncodedURIComponent = function (val) {
    if (typeof val !== 'string') {
      return val;
    }
    return this._decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  };

  /**
   * Create a new `page` instance and function
   */
  function createPage(options) {
    var pageInstance = new Page();

    function pageFn() /* args */{
      return page.apply(pageInstance, arguments);
    }

    // Copy all of the things over. In 2.0 maybe we use setPrototypeOf
    pageFn.callbacks = pageInstance.callbacks;
    pageFn.exits = pageInstance.exits;
    pageFn.base = pageInstance.base.bind(pageInstance);
    pageFn.strict = pageInstance.strict.bind(pageInstance);
    pageFn.start = pageInstance.start.bind(pageInstance);
    pageFn.stop = pageInstance.stop.bind(pageInstance);
    pageFn.show = pageInstance.show.bind(pageInstance);
    pageFn.back = pageInstance.back.bind(pageInstance);
    pageFn.redirect = pageInstance.redirect.bind(pageInstance);
    pageFn.replace = pageInstance.replace.bind(pageInstance);
    pageFn.dispatch = pageInstance.dispatch.bind(pageInstance);
    pageFn.exit = pageInstance.exit.bind(pageInstance);
    pageFn.configure = pageInstance.configure.bind(pageInstance);
    pageFn.sameOrigin = pageInstance.sameOrigin.bind(pageInstance);
    pageFn.clickHandler = pageInstance.clickHandler.bind(pageInstance);

    pageFn.create = createPage;

    Object.defineProperty(pageFn, 'len', {
      get: function get() {
        return pageInstance.len;
      },
      set: function set(val) {
        pageInstance.len = val;
      }
    });

    Object.defineProperty(pageFn, 'current', {
      get: function get() {
        return pageInstance.current;
      },
      set: function set(val) {
        pageInstance.current = val;
      }
    });

    // In 2.0 these can be named exports
    pageFn.Context = Context;
    pageFn.Route = Route;

    return pageFn;
  }

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page.call(this, '*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route( /** @type {string} */path, null, this);
      for (var i = 1; i < arguments.length; ++i) {
        this.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      this['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      this.start(path);
    }
  }

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;
    var page = this;
    var window = page._window;

    if (page._hashbang) {
      current = isLocation && this._getBase() + window.location.hash.replace('#!', '');
    } else {
      current = isLocation && window.location.pathname + window.location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    isLocation && (window.location.href = ctx.canonicalPath);
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state, pageInstance) {
    var _page = this.page = pageInstance || page;
    var window = _page._window;
    var hashbang = _page._hashbang;

    var pageBase = _page._getBase();
    if ('/' === path[0] && 0 !== path.indexOf(pageBase)) path = pageBase + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(pageBase, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = hasDocument && window.document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? _page._decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = _page._decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = this.pathname = parts[0];
      this.hash = _page._decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function () {
    var page = this.page;
    var window = page._window;
    var hashbang = page._hashbang;

    page.len++;
    if (hasHistory) {
      window.history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function () {
    var page = this.page;
    if (hasHistory && page._window.location.protocol !== 'file:') {
      page._window.history.replaceState(this.state, this.title, page._hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options, page) {
    var _page = this.page = page || globalPage;
    var opts = options || {};
    opts.strict = opts.strict || page._strict;
    this.path = path === '*' ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathToRegexp_1(this.path, this.keys = [], opts);
  }

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function (fn) {
    var self = this;
    return function (ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function (path, params) {
    var keys = this.keys,
        qsIndex = path.indexOf('?'),
        pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
        m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = this.page._decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !hasOwnProperty.call(params, key.name)) {
        params[key.name] = val;
      }
    }

    return true;
  };

  /**
   * Module exports.
   */

  var globalPage = createPage();
  var page_js = globalPage;
  page.default = globalPage;

  return page_js;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ })
/******/ ]);