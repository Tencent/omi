(function () {
	'use strict';

	/**
	 * Virtual DOM Node
	 * @typedef VNode
	 * @property {string | function} nodeName The string of the DOM node to create or Component constructor to render
	 * @property {Array<VNode | string>} children The children of node
	 * @property {string | number | undefined} key The key used to identify this VNode in a list
	 * @property {object} attributes The properties of this VNode
	 */
	var VNode = function VNode() {};

	/**
	 * @typedef {import('./component').Component} Component
	 * @typedef {import('./vnode').VNode} VNode
	 */

	/**
	 * Global options
	 * @public
	 * @typedef Options
	 * @property {boolean} [syncComponentUpdates] If `true`, `prop` changes trigger synchronous component updates. Defaults to true.
	 * @property {(vnode: VNode) => void} [vnode] Processes all created VNodes.
	 * @property {(component: Component) => void} [afterMount] Hook invoked after a component is mounted.
	 * @property {(component: Component) => void} [afterUpdate] Hook invoked after the DOM is updated with a component's latest render.
	 * @property {(component: Component) => void} [beforeUnmount] Hook invoked immediately before a component is unmounted.
	 * @property {(rerender: function) => void} [debounceRendering] Hook invoked whenever a rerender is requested. Can be used to debounce rerenders.
	 * @property {(event: Event) => Event | void} [event] Hook invoked before any Preact event listeners. The return value (if any) replaces the native browser event given to event listeners
	 */

	/** @type {Options}  */
	var options = {
	  runTimeComponent: {},
	  styleCache: [],
	  staticStyleMapping: {}
	};

	var styleId = 0;

	function getCtorName(ctor) {
	  for (var i = 0, len = options.styleCache.length; i < len; i++) {
	    var item = options.styleCache[i];

	    if (item.ctor === ctor) {
	      return item.attrName;
	    }
	  }

	  var attrName = '_ss' + styleId;
	  options.styleCache.push({ ctor: ctor, attrName: attrName });
	  styleId++;

	  return attrName;
	}

	// many thanks to https://github.com/thomaspark/scoper/
	function scoper(css, prefix) {
	  prefix = '[' + prefix.toLowerCase() + ']';
	  // https://www.w3.org/TR/css-syntax-3/#lexical
	  css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');
	  // eslint-disable-next-line
	  var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g');
	  /**
	   * Example:
	   *
	   * .classname::pesudo { color:red }
	   *
	   * g1 is normal selector `.classname`
	   * g2 is pesudo class or pesudo element
	   * g3 is the suffix
	   */
	  css = css.replace(re, function (g0, g1, g2, g3) {
	    if (typeof g2 === 'undefined') {
	      g2 = '';
	    }

	    /* eslint-ignore-next-line */
	    if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) {
	      return g1 + g2 + g3;
	    }

	    var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
	    //let prependClass = prefix + ' ' + g1.trim() + g2;

	    return appendClass + g3;
	    //return appendClass + ',' + prependClass + g3;
	  });

	  return css;
	}

	function addStyle(cssText, id) {
	  id = id.toLowerCase();
	  var ele = document.getElementById(id);
	  var head = document.getElementsByTagName('head')[0];
	  if (ele && ele.parentNode === head) {
	    head.removeChild(ele);
	  }

	  var someThingStyles = document.createElement('style');
	  head.appendChild(someThingStyles);
	  someThingStyles.setAttribute('type', 'text/css');
	  someThingStyles.setAttribute('id', id);
	  if (window.ActiveXObject) {
	    someThingStyles.styleSheet.cssText = cssText;
	  } else {
	    someThingStyles.textContent = cssText;
	  }
	}

	function addStyleToHead(style, attr) {

	  if (!options.staticStyleMapping[attr]) {
	    addStyle(scoper(style, attr), attr);
	    options.staticStyleMapping[attr] = true;
	  }
	}

	var stack = [];

	var EMPTY_CHILDREN = [];

	/**
	 * JSX/hyperscript reviver.
	 * @see http://jasonformat.com/wtf-is-jsx
	 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
	 *
	 * Note: this is exported as both `h()` and `createElement()` for compatibility
	 * reasons.
	 *
	 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a
	 * lightweight representation of the structure of a DOM tree. This structure can
	 * be realized by recursively comparing it against the current _actual_ DOM
	 * structure, and applying only the differences.
	 *
	 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
	 * and optionally children to append to the element.
	 *
	 * @example The following DOM tree
	 *
	 * `<div id="foo" name="bar">Hello!</div>`
	 *
	 * can be constructed using this function as:
	 *
	 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
	 *
	 * @param {string | function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
	 * @param {object | null} attributes Any attributes/props to set on the created element.
	 * @param {VNode[]} [rest] Additional arguments are taken to be children to
	 *  append. Can be infinitely nested Arrays.
	 *
	 * @public
	 */
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
		p.attributes = attributes == null ? {} : attributes;
		if (options.runTimeComponent.constructor.css) {
			p.attributes[getCtorName(options.runTimeComponent.constructor)] = '';
		}
		if (options.runTimeComponent.props && options.runTimeComponent.props.css) {
			p.attributes['_ds' + options.runTimeComponent.elementId] = '';
		}

		p.key = p.attributes.key;

		// if a "vnode hook" is defined, pass every created VNode to it
		if (options.vnode !== undefined) options.vnode(p);

		return p;
	}

	/**
	 * Copy all properties from `props` onto `obj`.
	 * @param {object} obj Object onto which properties should be copied.
	 * @param {object} props Object from which to copy properties.
	 * @returns {object}
	 * @private
	 */
	function extend(obj, props) {
	  for (var i in props) {
	    obj[i] = props[i];
	  }return obj;
	}

	/** Invoke or update a ref, depending on whether it is a function or object ref.
	 *  @param {object|function} [ref=null]
	 *  @param {any} [value]
	 */
	function applyRef(ref, value) {
	  if (ref) {
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

	/**
	 * Clones the given VNode, optionally adding attributes/props and replacing its
	 * children.
	 * @param {import('./vnode').VNode} vnode The virtual DOM element to clone
	 * @param {object} props Attributes/props to add when cloning
	 * @param {Array<import('./vnode').VNode>} [rest] Any additional arguments will be used as replacement
	 *  children.
	 */
	function cloneElement(vnode, props) {
	  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	}

	// render modes

	/** Do not re-render a component */
	var NO_RENDER = 0;
	/** Synchronously re-render a component and its children */
	var SYNC_RENDER = 1;
	/** Synchronously re-render a component, even if its lifecycle methods attempt to prevent it. */
	var FORCE_RENDER = 2;
	/** Queue asynchronous re-render of a component and it's children */
	var ASYNC_RENDER = 3;

	var ATTR_KEY = 'prevProps';

	/** DOM properties that should NOT have "px" added when numeric */
	var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

	/**
	 * Managed queue of dirty components to be re-rendered
	 * @type {Array<import('./component').Component>}
	 */
	var items = [];

	/**
	 * Enqueue a rerender of a component
	 * @param {import('./component').Component} component The component to rerender
	 */
	function enqueueRender(component) {
		if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
			(options.debounceRendering || defer)(rerender);
		}
	}

	/** Rerender all enqueued dirty components */
	function rerender() {
		var p = void 0;
		while (p = items.pop()) {
			if (p._dirty) renderComponent(p);
		}
	}

	/**
	 * Check if two nodes are equivalent.
	 * @param {import('../dom').PreactElement} node DOM Node to compare
	 * @param {import('../vnode').VNode} vnode Virtual DOM node to compare
	 * @param {boolean} [hydrating=false] If true, ignores component constructors
	 *  when comparing.
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
	 * @param {import('../dom').PreactElement} node A DOM Element to inspect the name of.
	 * @param {string} nodeName Unnormalized name to compare against.
	 */
	function isNamedNode(node, nodeName) {
		return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	}

	/**
	 * Reconstruct Component-style `props` from a VNode.
	 * Ensures default/fallback values from `defaultProps`:
	 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
	 * @param {import('../vnode').VNode} vnode The VNode to get props for
	 * @returns {object} The props to use for this VNode
	 */
	function getNodeProps(vnode) {
		var props = extend({}, vnode.attributes);
		props.children = vnode.children;

		var defaultProps = vnode.nodeName.defaultProps;
		if (defaultProps !== undefined) {
			for (var i in defaultProps) {
				if (props[i] === undefined) {
					props[i] = defaultProps[i];
				}
			}
		}

		return props;
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
	function setAccessor(node, name, old, value, isSvg, store) {
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
			(node._listeners || (node._listeners = {}))[name] = value ? value.bind(store) : value;
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
				if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
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

	/**
	 * Queue of components that have been mounted and are awaiting componentDidMount
	 * @type {Array<import('../component').Component>}
	 */
	var mounts = [];

	/** Diff recursion count, used to track the end of the diff cycle. */
	var diffLevel = 0;

	/** Global flag indicating if the diff is currently within an SVG */
	var isSvgMode = false;

	/** Global flag indicating if the diff is performing hydration */
	var hydrating = false;

	/** Invoke queued componentDidMount lifecycle methods */
	function flushMounts() {
		var c = void 0;
		while (c = mounts.shift()) {
			if (c.constructor.css) {
				addStyleToHead(c.constructor.css, getCtorName(c.constructor));
			}
			if (c.props.css) {
				addStyleToHead(c.props.css, '_ds' + c.elementId);
			}
			if (options.afterMount) options.afterMount(c);
			if (c.componentDidMount) c.componentDidMount();
		}
	}

	/**
	 * Apply differences in a given vnode (and it's deep children) to a real DOM Node.
	 * @param {import('../dom').PreactElement} dom A DOM node to mutate into the shape of a `vnode`
	 * @param {import('../vnode').VNode} vnode A VNode (with descendants forming a tree) representing
	 *  the desired DOM structure
	 * @param {object} context The current context
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @param {Element} parent ?
	 * @param {boolean} componentRoot ?
	 * @returns {import('../dom').PreactElement} The created/mutated element
	 * @private
	 */
	function diff(dom, vnode, context, mountAll, parent, componentRoot, store) {
		// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
		if (!diffLevel++) {
			// when first starting the diff, check if we're diffing an SVG or within an SVG
			isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

			// hydration is indicated by the existing element to be diffed not having a prop cache
			hydrating = dom != null && !(ATTR_KEY in dom);
		}

		var ret = idiff(dom, vnode, context, mountAll, componentRoot, store);

		// append the element if its a new parent
		if (parent && ret.parentNode !== parent) parent.appendChild(ret);

		// diffLevel being reduced to 0 means we're exiting the diff
		if (! --diffLevel) {
			hydrating = false;
			// invoke queued componentDidMount lifecycle methods
			if (!componentRoot) flushMounts();
		}

		return ret;
	}

	/**
	 * Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing.
	 * @param {import('../dom').PreactElement} dom A DOM node to mutate into the shape of a `vnode`
	 * @param {import('../vnode').VNode} vnode A VNode (with descendants forming a tree) representing the desired DOM structure
	 * @param {object} context The current context
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @param {boolean} [componentRoot] ?
	 * @private
	 */
	function idiff(dom, vnode, context, mountAll, componentRoot, store) {
		var out = dom,
		    prevSvgMode = isSvgMode;

		// empty values (null, undefined, booleans) render as empty Text nodes
		if (vnode == null || typeof vnode === 'boolean') vnode = '';

		// Fast case: Strings & Numbers create/update Text nodes.
		if (typeof vnode === 'string' || typeof vnode === 'number') {

			// update if it's already a Text node:
			if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
				/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/omis/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
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
		if (typeof vnodeName === 'function') {
			return buildComponentFromVNode(dom, vnode, context, mountAll);
		}

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
				innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null, store);
			}

		// Apply attributes/props from VNode to the DOM Element:
		diffAttributes(out, vnode.attributes, props, store);

		// restore previous SVG mode: (in case we're exiting an SVG namespace)
		isSvgMode = prevSvgMode;

		return out;
	}

	/**
	 * Apply child and attribute changes between a VNode and a DOM Node to the DOM.
	 * @param {import('../dom').PreactElement} dom Element whose children should be compared & mutated
	 * @param {Array<import('../vnode').VNode>} vchildren Array of VNodes to compare to `dom.childNodes`
	 * @param {object} context Implicitly descendant context object (from most
	 *  recent `getChildContext()`)
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @param {boolean} isHydrating if `true`, consumes externally created elements
	 *  similar to hydration
	 */
	function innerDiffNode(dom, vchildren, context, mountAll, isHydrating, store) {
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
				else if (min < childrenLen) {
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
				child = idiff(child, vchild, context, mountAll, null, store);

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

	/**
	 * Recursively recycle (or just unmount) a node and its descendants.
	 * @param {import('../dom').PreactElement} node DOM node to start
	 *  unmount/removal from
	 * @param {boolean} [unmountOnly=false] If `true`, only triggers unmount
	 *  lifecycle, skips removal
	 */
	function recollectNodeTree(node, unmountOnly) {
		var component = node._component;
		if (component) {
			// if node is owned by a Component, unmount that component (ends up recursing back here)
			unmountComponent(component);
		} else {
			// If the node's VNode had a ref function, invoke it with null here.
			// (this is part of the React spec, and smart for unsetting references)
			if (node[ATTR_KEY] != null) applyRef(node[ATTR_KEY].ref, null);

			if (unmountOnly === false || node[ATTR_KEY] == null) {
				removeNode(node);
			}

			removeChildren(node);
		}
	}

	/**
	 * Recollect/unmount all children.
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

	/**
	 * Apply differences in attributes from a VNode to the given DOM Element.
	 * @param {import('../dom').PreactElement} dom Element with attributes to diff `attrs` against
	 * @param {object} attrs The desired end-state key-value attribute pairs
	 * @param {object} old Current/previous attributes (from previous VNode or
	 *  element's prop cache)
	 */
	function diffAttributes(dom, attrs, old, store) {
		var name = void 0;

		// remove attributes no longer present on the vnode by setting them to undefined
		for (name in old) {
			if (!(attrs && attrs[name] != null) && old[name] != null) {
				setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, store);
			}
		}

		// add new & update changed attributes
		for (name in attrs) {
			if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
				setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, store);
			}
		}
	}

	/**
	 * Retains a pool of Components for re-use.
	 * @type {Component[]}
	 * @private
	 */
	var recyclerComponents = [];

	/**
	 * Create a component. Normalizes differences between PFC's and classful
	 * Components.
	 * @param {function} Ctor The constructor of the component to create
	 * @param {object} props The initial props of the component
	 * @param {object} context The initial context of the component
	 * @returns {import('../component').Component}
	 */
	function createComponent(Ctor, props, context) {
		var inst = void 0,
		    i = recyclerComponents.length;

		if (Ctor.prototype && Ctor.prototype.render) {
			inst = new Ctor(props, context);
			Component.call(inst, props, context);
		} else {
			inst = new Component(props, context);
			inst.constructor = Ctor;
			inst.render = doRender;
			if (Ctor.store) {
				inst.store = Ctor.store(inst);
				inst.store.update = inst.forceUpdate.bind(inst);
			}
		}

		while (i--) {
			if (recyclerComponents[i].constructor === Ctor) {
				inst.nextBase = recyclerComponents[i].nextBase;
				recyclerComponents.splice(i, 1);
				return inst;
			}
		}

		return inst;
	}

	/** The `.render()` method for a PFC backing instance. */
	function doRender(props) {
		return this.constructor(props, this.store);
	}

	/**
	 * Set a component's `props` and possibly re-render the component
	 * @param {import('../component').Component} component The Component to set props on
	 * @param {object} props The new props
	 * @param {number} renderMode Render options - specifies how to re-render the component
	 * @param {object} context The new context
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 */
	function setComponentProps(component, props, renderMode, context, mountAll) {
		if (component._disable) return;
		component._disable = true;

		component.__ref = props.ref;
		component.__key = props.key;
		delete props.ref;
		delete props.key;

		if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
			if (!component.base || mountAll) {
				if (component.componentWillMount) component.componentWillMount();
			} else if (component.componentWillReceiveProps) {
				component.componentWillReceiveProps(props, context);
			}
		}

		if (context && context !== component.context) {
			if (!component.prevContext) component.prevContext = component.context;
			component.context = context;
		}

		if (!component.prevProps) component.prevProps = component.props;
		component.props = props;

		component._disable = false;

		if (renderMode !== NO_RENDER) {
			if (renderMode === SYNC_RENDER || options.syncComponentUpdates !== false || !component.base) {
				renderComponent(component, SYNC_RENDER, mountAll);
			} else {
				enqueueRender(component);
			}
		}

		applyRef(component.__ref, component);
	}

	/**
	 * Render a Component, triggering necessary lifecycle events and taking
	 * High-Order Components into account.
	 * @param {import('../component').Component} component The component to render
	 * @param {number} [renderMode] render mode, see constants.js for available options.
	 * @param {boolean} [mountAll] Whether or not to immediately mount all components
	 * @param {boolean} [isChild] ?
	 * @private
	 */
	function renderComponent(component, renderMode, mountAll, isChild) {
		if (component._disable) return;

		var props = component.props,
		    state = component.state,
		    context = component.context,
		    previousProps = component.prevProps || props,
		    previousState = component.prevState || state,
		    previousContext = component.prevContext || context,
		    isUpdate = component.base,
		    nextBase = component.nextBase,
		    initialBase = isUpdate || nextBase,
		    initialChildComponent = component._component,
		    skip = false,
		    snapshot = previousContext,
		    rendered = void 0,
		    inst = void 0,
		    cbase = void 0;

		if (component.constructor.getDerivedStateFromProps) {
			state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
			component.state = state;
		}

		// if updating
		if (isUpdate) {
			component.props = previousProps;
			component.state = previousState;
			component.context = previousContext;
			if (renderMode !== FORCE_RENDER && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
				skip = true;
			} else if (component.componentWillUpdate) {
				component.componentWillUpdate(props, state, context);
			}
			component.props = props;
			component.state = state;
			component.context = context;
		}

		component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
		component._dirty = false;

		if (!skip) {
			options.runTimeComponent = component;
			rendered = component.render(props, state, context);
			options.runTimeComponent = null;

			// context to pass to the child, can be updated via (grand-)parent component
			if (component.getChildContext) {
				context = extend(extend({}, context), component.getChildContext());
			}

			if (isUpdate && component.getSnapshotBeforeUpdate) {
				snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
			}

			var childComponent = rendered && rendered.nodeName,
			    toUnmount = void 0,
			    base = void 0;

			if (typeof childComponent === 'function') {
				// set up high order component link

				var childProps = getNodeProps(rendered);
				inst = initialChildComponent;

				if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
					setComponentProps(inst, childProps, SYNC_RENDER, context, false);
				} else {
					toUnmount = inst;

					component._component = inst = createComponent(childComponent, childProps, context);
					inst.nextBase = inst.nextBase || nextBase;
					inst._parentComponent = component;
					setComponentProps(inst, childProps, NO_RENDER, context, false);
					renderComponent(inst, SYNC_RENDER, mountAll, true);
				}

				base = inst.base;
			} else {
				cbase = initialBase;

				// destroy high order component link
				toUnmount = initialChildComponent;
				if (toUnmount) {
					cbase = component._component = null;
				}

				if (initialBase || renderMode === SYNC_RENDER) {
					if (cbase) cbase._component = null;
					base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true, component.store);
				}
			}

			if (initialBase && base !== initialBase && inst !== initialChildComponent) {
				var baseParent = initialBase.parentNode;
				if (baseParent && base !== baseParent) {
					baseParent.replaceChild(base, initialBase);

					if (!toUnmount) {
						initialBase._component = null;
						recollectNodeTree(initialBase, false);
					}
				}
			}

			if (toUnmount) {
				unmountComponent(toUnmount);
			}

			component.base = base;
			if (base && !isChild) {
				var componentRef = component,
				    t = component;
				while (t = t._parentComponent) {
					(componentRef = t).base = base;
				}
				base._component = componentRef;
				base._componentConstructor = componentRef.constructor;
			}
		}

		if (!isUpdate || mountAll) {
			mounts.push(component);
		} else if (!skip) {
			// Ensure that pending componentDidMount() hooks of child components
			// are called before the componentDidUpdate() hook in the parent.
			// Note: disabled as it causes duplicate hooks, see https://github.com/developit/omis/issues/750
			// flushMounts();

			if (component.componentDidUpdate) {
				component.componentDidUpdate(previousProps, previousState, snapshot);
			}
			if (options.afterUpdate) options.afterUpdate(component);
		}

		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}if (!diffLevel && !isChild) flushMounts();
	}

	/**
	 * Apply the Component referenced by a VNode to the DOM.
	 * @param {import('../dom').PreactElement} dom The DOM node to mutate
	 * @param {import('../vnode').VNode} vnode A Component-referencing VNode
	 * @param {object} context The current context
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @returns {import('../dom').PreactElement} The created/mutated element
	 * @private
	 */
	function buildComponentFromVNode(dom, vnode, context, mountAll) {
		var c = dom && dom._component,
		    originalComponent = c,
		    oldDom = dom,
		    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
		    isOwner = isDirectOwner,
		    props = getNodeProps(vnode);
		while (c && !isOwner && (c = c._parentComponent)) {
			isOwner = c.constructor === vnode.nodeName;
		}

		if (c && isOwner && (!mountAll || c._component)) {
			setComponentProps(c, props, ASYNC_RENDER, context, mountAll);
			dom = c.base;
		} else {
			if (originalComponent && !isDirectOwner) {
				unmountComponent(originalComponent);
				dom = oldDom = null;
			}

			c = createComponent(vnode.nodeName, props, context);
			if (dom && !c.nextBase) {
				c.nextBase = dom;
				// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
				oldDom = null;
			}
			setComponentProps(c, props, SYNC_RENDER, context, mountAll);
			dom = c.base;

			if (oldDom && dom !== oldDom) {
				oldDom._component = null;
				recollectNodeTree(oldDom, false);
			}
		}

		return dom;
	}

	/**
	 * Remove a component from the DOM and recycle it.
	 * @param {import('../component').Component} component The Component instance to unmount
	 * @private
	 */
	function unmountComponent(component) {
		if (options.beforeUnmount) options.beforeUnmount(component);

		var base = component.base;

		component._disable = true;

		if (component.componentWillUnmount) component.componentWillUnmount();

		component.base = null;

		// recursively tear down & recollect high-order component children:
		var inner = component._component;
		if (inner) {
			unmountComponent(inner);
		} else if (base) {
			if (base[ATTR_KEY] != null) applyRef(base[ATTR_KEY].ref, null);

			component.nextBase = base;

			removeNode(base);
			recyclerComponents.push(component);

			removeChildren(base);
		}

		applyRef(component.__ref, null);
	}

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

	var id = 0;

	function Component(props, context) {
		this._dirty = true;
		this.elementId = id++;
		/**
	  * @public
	  * @type {object}
	  */
		this.context = context;

		/**
	  * @public
	  * @type {object}
	  */
		this.props = props;

		/**
	  * @public
	  * @type {object}
	  */
		this.state = this.state || {};

		this._renderCallbacks = [];
	}

	extend(Component.prototype, {

		/**
	  * Update component state and schedule a re-render.
	  * @param {object} state A dict of state properties to be shallowly merged
	  * 	into the current state, or a function that will produce such a dict. The
	  * 	function is called with the current state and props.
	  * @param {() => void} callback A function to be called once component state is
	  * 	updated
	  */
		setState: function setState(state, callback) {
			if (!this.prevState) this.prevState = this.state;
			this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
			if (callback) this._renderCallbacks.push(callback);
			enqueueRender(this);
		},


		/**
	  * Immediately perform a synchronous re-render of the component.
	  * @param {() => void} callback A function to be called after component is
	  * 	re-rendered.
	  * @private
	  */
		forceUpdate: function forceUpdate(callback) {
			if (callback) this._renderCallbacks.push(callback);
			renderComponent(this, FORCE_RENDER);
		},


		/**
	  * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
	  * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
	  * @param {object} props Props (eg: JSX attributes) received from parent
	  * 	element/component
	  * @param {object} state The component's current state
	  * @param {object} context Context object, as returned by the nearest
	  *  ancestor's `getChildContext()`
	  * @returns {import('./vnode').VNode | void}
	  */
		render: function render() {}
	});

	/**
	 * Render JSX into a `parent` Element.
	 * @param {import('./vnode').VNode} vnode A (JSX) VNode to render
	 * @param {import('./dom').PreactElement} parent DOM element to render into
	 * @param {import('./dom').PreactElement} [merge] Attempt to re-use an existing DOM tree rooted at
	 *  `merge`
	 * @public
	 *
	 * @example
	 * // render a div into <body>:
	 * render(<div id="hello">hello!</div>, document.body);
	 *
	 * @example
	 * // render a "Thing" component into #foo:
	 * const Thing = ({ name }) => <span>{ name }</span>;
	 * render(<Thing name="one" />, document.querySelector('#foo'));
	 */
	function render(vnode, parent, merge) {
	  return diff(merge, vnode, {}, false, typeof parent === 'string' ? document.querySelector(parent) : parent, false);
	}

	function createRef() {
		return {};
	}

	if (typeof window !== 'undefined') {
		window.Omis = {
			h: h,
			createElement: h,
			cloneElement: cloneElement,
			createRef: createRef,
			Component: Component,
			render: render,
			rerender: rerender,
			options: options
		};
	}

	var TreeNode = function TreeNode(props, store) {
		return Omis.h(
			'ul',
			null,
			createNode$1(store.data, '#', store)
		);
	};

	function createNode$1(node, path, store) {

		var children = node.children;
		var canOpen = children && children.length;
		return Omis.h(
			'li',
			null,
			Omis.h(
				'h4',
				{ ondblclick: function ondblclick(e) {
						return store.extend(path);
					} },
				node.name,
				canOpen && Omis.h(
					'span',
					{ onclick: function onclick(e) {
							return store.open(path);
						} },
					'[',
					node.open ? '-' : '+',
					']'
				)
			),
			canOpen && node.open && Omis.h(
				'ul',
				null,
				children.map(function (child, index) {
					return createNode$1(child, path + '-' + index, store);
				}),
				Omis.h(
					'li',
					{ 'class': 'add', onclick: function onclick(e) {
							return store.addChild(path);
						} },
					'+'
				)
			)
		);
	}

	TreeNode.store = function (_) {
		return {
			data: {
				name: 'my-tree',
				data: { x: 1 },
				open: true,
				children: [{
					name: 'a-1'
				}, {
					name: 'a-2',
					children: [{
						name: 'a-2-1'
					}]
				}]
			},
			open: function open(path) {
				var node = this.getNodeByPath(path);
				node.open = !node.open;
				this.update();
			},
			getNodeByPath: function getNodeByPath(path) {
				if (path === '#') {
					return this.data;
				}
				var arr = path.split('-');
				arr.shift();
				var current = this.data;
				var item = void 0;
				while (item = arr.shift()) {
					current = current.children[item];
				}
				return current;
			},
			extend: function extend(path) {
				var node = this.getNodeByPath(path);
				if (node) {
					node.open = !node.open;
					this.update();
				}
			},
			addChild: function addChild(path) {
				var node = this.getNodeByPath(path);
				node.children.push({ name: 'new child' });
				this.update();
			}
		};
	};

	TreeNode.css = '\nh4{\n\tcursor:pointer;\n}\n\n.add{\n\tcursor:pointer;\n}\n';

	render(Omis.h(TreeNode, null), 'body');

}());
//# sourceMappingURL=b.js.map
