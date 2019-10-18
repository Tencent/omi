/**
 * omis v1.0.3  https://tencent.github.io/omi/
 * Omi === Preact + Scoped CSS + Store System + Native Support in 3kb javascript.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omis
 * MIT Licensed.
 */

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
	 * @property {(event: Event) => Event | void} [event] Hook invoked before any Omi event listeners. The return value (if any) replaces the native browser event given to event listeners
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

    function addStyle(cssText, id, parent) {
	  id = id.toLowerCase();
	  var ele = document.getElementById(id);
	  var head = parent || document.getElementsByTagName('head')[0];
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

    function addStyleToHead(style, attr, parent) {
	  //parent is shadowroot
	  if (parent || !options.staticStyleMapping[attr]) {
	    "undefined" != typeof wx && wx.getSystemInfoSync || addStyle(scoper(style, attr), attr, parent);
	    //don't cache when is shadowroot
	    if (!parent) {
	      options.staticStyleMapping[attr] = true;
	    }
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
		if (options.runTimeComponent) {
			if (options.runTimeComponent.constructor.css) {
				p.attributes[getCtorName(options.runTimeComponent.constructor)] = '';
			}
			if (options.runTimeComponent.props && options.runTimeComponent.props.css) {
				p.attributes['_ds' + options.runTimeComponent.elementId] = '';
			}
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

    function getPath(obj) {
	  if (Object.prototype.toString.call(obj) === '[object Array]') {
	    var result = {};
	    obj.forEach(function (item) {
	      if (typeof item === 'string') {
	        result[item] = true;
	      } else {
	        var tempPath = item[Object.keys(item)[0]];
	        if (typeof tempPath === 'string') {
	          result[tempPath] = true;
	        } else {
	          if (typeof tempPath[0] === 'string') {
	            result[tempPath[0]] = true;
	          } else {
	            tempPath[0].forEach(function (path) {
	              return result[path] = true;
	            });
	          }
	        }
	      }
	    });
	    return result;
	  } else {
	    return getUpdatePath(obj);
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

    function getUse(data, paths) {
	  var obj = [];
	  paths.forEach(function (path, index) {
	    var isPath = typeof path === 'string';
	    if (isPath) {
	      obj[index] = getTargetByPath(data, path);
	    } else {
	      var key = Object.keys(path)[0];
	      var value = path[key];
	      if (typeof value === 'string') {
	        obj[index] = getTargetByPath(data, value);
	      } else {
	        var tempPath = value[0];
	        if (typeof tempPath === 'string') {
	          var tempVal = getTargetByPath(data, tempPath);
	          obj[index] = value[1] ? value[1](tempVal) : tempVal;
	        } else {
	          var args = [];
	          tempPath.forEach(function (path) {
	            args.push(getTargetByPath(data, path));
	          });
	          obj[index] = value[1].apply(null, args);
	        }
	      }
	      obj[key] = obj[index];
	    }
	  });
	  return obj;
	}

    function getTargetByPath(origin, path) {
	  var arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.');
	  var current = origin;
	  for (var i = 0, len = arr.length; i < len; i++) {
	    current = current[arr[i]];
	  }
	  return current;
	}

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
		var p;
		while (p = items.pop()) {
			if (p._dirty) renderComponent(p);
		}
	}

    /**
	 * Check if two nodes are equivalent.
	 * @param {import('../dom').OmiElement} node DOM Node to compare
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
	 * @param {import('../dom').OmiElement} node A DOM Element to inspect the name of.
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
	 * Properties Omi adds to elements it creates
	 * @typedef OmiElementExtensions
	 * @property {string} [normalizedNodeName] A normalized node name to use in diffing
	 * @property {EventListenerMap} [_listeners] A map of event listeners added by components to this DOM node
	 * @property {import('../component').Component} [_component] The component that rendered this DOM node
	 * @property {function} [_componentConstructor] The constructor of the component that rendered this DOM node
	 */

    /**
	 * A DOM element that has been extended with Omi properties
	 * @typedef {Element & ElementCSSInlineStyle & OmiElementExtensions} OmiElement
	 */

    /**
	 * Create an element with the given nodeName.
	 * @param {string} nodeName The DOM node to create
	 * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
	 *  namespace.
	 * @returns {OmiElement} The created DOM node
	 */
    function createNode(nodeName, isSvg) {
		/** @type {OmiElement} */
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
	 * @param {OmiElement} node An element to mutate
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
				for (var i in value) {
					node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
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
			(node._listeners || (node._listeners = {}))[name] = value && store ? value.bind(store) : value;
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
		var c;
		while (c = mounts.shift()) {
			if (c.constructor.css) {
				addStyleToHead(c.constructor.css, getCtorName(c.constructor));
			}
			if (c.props.css) {
				addStyleToHead(c.props.css, '_ds' + c.elementId);
			}
			if (options.afterMount) options.afterMount(c);
			//if (c.componentDidMount) c.componentDidMount();
			if (c.store.installed) c.store.installed();
		}
	}

    /**
	 * Apply differences in a given vnode (and it's deep children) to a real DOM Node.
	 * @param {import('../dom').OmiElement} dom A DOM node to mutate into the shape of a `vnode`
	 * @param {import('../vnode').VNode} vnode A VNode (with descendants forming a tree) representing
	 *  the desired DOM structure
	 * @param {object} $ The current $
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @param {Element} parent ?
	 * @param {boolean} componentRoot ?
	 * @returns {import('../dom').OmiElement} The created/mutated element
	 * @private
	 */
    function diff(dom, vnode, $, mountAll, parent, componentRoot, store) {
		// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
		if (!diffLevel++) {
			// when first starting the diff, check if we're diffing an SVG or within an SVG
			isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

			// hydration is indicated by the existing element to be diffed not having a prop cache
			hydrating = dom != null && !('prevProps' in dom);
		}

		var ret = idiff(dom, vnode, $, mountAll, componentRoot, store);

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
	 * @param {import('../dom').OmiElement} dom A DOM node to mutate into the shape of a `vnode`
	 * @param {import('../vnode').VNode} vnode A VNode (with descendants forming a tree) representing the desired DOM structure
	 * @param {object} $ The current $
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @param {boolean} [componentRoot] ?
	 * @private
	 */
    function idiff(dom, vnode, $, mountAll, componentRoot, store) {
		var out = dom,
		    prevSvgMode = isSvgMode;

		// empty values (null, undefined, booleans) render as empty Text nodes
		if (vnode == null || typeof vnode === 'boolean') vnode = '';

		// Fast case: Strings & Numbers create/update Text nodes.
		if (typeof vnode === 'string' || typeof vnode === 'number') {

			// update if it's already a Text node:
			if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
				/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/Omi/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
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

			out['prevProps'] = true;

			return out;
		}

		// If the VNode represents a Component, perform a component diff:
		var vnodeName = vnode.nodeName;
		if (typeof vnodeName === 'function') {
			return buildComponentFromVNode(dom, vnode, $, mountAll);
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
		    props = out['prevProps'],
		    vchildren = vnode.children;

		if (props == null) {
			props = out['prevProps'] = {};
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
				innerDiffNode(out, vchildren, $, mountAll, hydrating || props.dangerouslySetInnerHTML != null, store);
			}

		// Apply attributes/props from VNode to the DOM Element:
		diffAttributes(out, vnode.attributes, props, store);

		// restore previous SVG mode: (in case we're exiting an SVG namespace)
		isSvgMode = prevSvgMode;

		return out;
	}

    /**
	 * Apply child and attribute changes between a VNode and a DOM Node to the DOM.
	 * @param {import('../dom').OmiElement} dom Element whose children should be compared & mutated
	 * @param {Array<import('../vnode').VNode>} vchildren Array of VNodes to compare to `dom.childNodes`
	 * @param {object} $ Implicitly descendant $ object (from most
	 *  recent `getChildContext()`)
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @param {boolean} isHydrating if `true`, consumes externally created elements
	 *  similar to hydration
	 */
    function innerDiffNode(dom, vchildren, $, mountAll, isHydrating, store) {
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
				    props = _child['prevProps'],
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
				child = idiff(child, vchild, $, mountAll, null, store);

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

    /**
	 * Recursively recycle (or just unmount) a node and its descendants.
	 * @param {import('../dom').OmiElement} node DOM node to start
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
			if (node['prevProps'] != null) applyRef(node['prevProps'].ref, null);

			if (unmountOnly === false || node['prevProps'] == null) {
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
	 * @param {import('../dom').OmiElement} dom Element with attributes to diff `attrs` against
	 * @param {object} attrs The desired end-state key-value attribute pairs
	 * @param {object} old Current/previous attributes (from previous VNode or
	 *  element's prop cache)
	 */
    function diffAttributes(dom, attrs, old, store) {
		var name;

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
	 * @param {object} $ The initial $ of the component
	 * @returns {import('../component').Component}
	 */
    function createComponent(Ctor, props, $) {
		var inst,
		    i = recyclerComponents.length;

		inst = new Component(props, $);
		inst.constructor = Ctor;
		inst.render = doRender;
		if (Ctor.store) {
			inst.store = Ctor.store(inst, $);
			inst.store.update = inst.update.bind(inst);
		}

		if (inst.$ && inst.$.data) {

			if (inst.constructor.use) {
				inst.constructor.updatePath = getPath(inst.constructor.use);
				inst.using = getUse(inst.$.data, inst.constructor.use);
				inst.$.instances.push(inst);
			} else if (inst.use) {
				var use = typeof inst.use === 'function' ? inst.use() : inst.use;
				inst._updatePath = getPath(use);
				inst.using = getUse(inst.$.data, use);
				inst.$.instances.push(inst);
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
    function doRender(props, $) {
		return this.constructor(props, this.store, this, $);
	}

    /**
	 * Set a component's `props` and possibly re-render the component
	 * @param {import('../component').Component} component The Component to set props on
	 * @param {object} props The new props
	 * @param {number} renderMode Render options - specifies how to re-render the component
	 * @param {object} $ The new $
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 */
    function setComponentProps(component, props, renderMode, $, mountAll) {
		if (component._disable) return;
		component._disable = true;

		component.__ref = props.ref;
		component.__key = props.key;
		delete props.ref;
		delete props.key;

		if (!component.base || mountAll) {
			//if (component.componentWillMount) component.componentWillMount();
			if (component.store.install) component.store.install();
		} else {
			// if (component.componentWillReceiveProps) {
			// 	component.componentWillReceiveProps(props, $);
			// }
			if (component.store.receiveProps) {
				component.__needUpdate_ = component.store.receiveProps(props, $);
			}
		}

		if ($ && $ !== component.$) {
			component.$ = $;
		}

		if (!component.prevProps) component.prevProps = component.props;
		component.props = props;

		component._disable = false;

		if (renderMode !== 0) {
			if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
				renderComponent(component, 1, mountAll);
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
		    $ = component.$,
		    previousProps = component.prevProps || props,
		    isUpdate = component.base,
		    nextBase = component.nextBase,
		    initialBase = isUpdate || nextBase,
		    initialChildComponent = component._component,
		    skip = false,
		    rendered,
		    inst,
		    cbase;

		// if updating
		if (isUpdate) {
			component.props = previousProps;

			if (component.__needUpdate_ !== false) {
				skip = false;
				if (component.store.beforeUpdate) {
					component.store.beforeUpdate(props, $);
				}
			} else {
				skip = true;
			}
			delete component.__needUpdate_;

			component.props = props;
		}

		component.prevProps = component.prevContext = component.nextBase = null;
		component._dirty = false;

		if (!skip) {
			options.runTimeComponent = component;
			if (component.store.beforeRender) {
				component.store.beforeRender();
			}
			rendered = component.render(props, $);
			options.runTimeComponent = null;

			var childComponent = rendered && rendered.nodeName,
			    toUnmount,
			    base;

			if (typeof childComponent === 'function') {
				// set up high order component link

				var childProps = getNodeProps(rendered);
				inst = initialChildComponent;

				if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
					setComponentProps(inst, childProps, 1, $, false);
				} else {
					toUnmount = inst;

					component._component = inst = createComponent(childComponent, childProps, $);
					inst.nextBase = inst.nextBase || nextBase;
					inst._parentComponent = component;
					setComponentProps(inst, childProps, 0, $, false);
					renderComponent(inst, 1, mountAll, true);
				}

				base = inst.base;
			} else {
				cbase = initialBase;

				// destroy high order component link
				toUnmount = initialChildComponent;
				if (toUnmount) {
					cbase = component._component = null;
				}

				if (initialBase || renderMode === 1) {
					if (cbase) cbase._component = null;
					base = diff(cbase, rendered, $, mountAll || !isUpdate, initialBase && initialBase.parentNode, true, component.store);
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
			// Note: disabled as it causes duplicate hooks, see https://github.com/developit/Omi/issues/750
			// flushMounts();

			if (component.store.updated) {
				component.store.updated(previousProps);
			}
			if (options.afterUpdate) options.afterUpdate(component);
		}

		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}if (!diffLevel && !isChild) flushMounts();
	}

    /**
	 * Apply the Component referenced by a VNode to the DOM.
	 * @param {import('../dom').OmiElement} dom The DOM node to mutate
	 * @param {import('../vnode').VNode} vnode A Component-referencing VNode
	 * @param {object} $ The current $
	 * @param {boolean} mountAll Whether or not to immediately mount all components
	 * @returns {import('../dom').OmiElement} The created/mutated element
	 * @private
	 */
    function buildComponentFromVNode(dom, vnode, $, mountAll) {
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
			setComponentProps(c, props, 3, $, mountAll);
			dom = c.base;
		} else {
			if (originalComponent && !isDirectOwner) {
				unmountComponent(originalComponent);
				dom = oldDom = null;
			}

			c = createComponent(vnode.nodeName, props, $);
			if (dom && !c.nextBase) {
				c.nextBase = dom;
				// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
				oldDom = null;
			}
			setComponentProps(c, props, 1, $, mountAll);
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

		//if (component.componentWillUnmount) component.componentWillUnmount();
		if (component.store.uninstall) component.store.uninstall();
		component.base = null;

		// recursively tear down & recollect high-order component children:
		var inner = component._component;
		if (inner) {
			unmountComponent(inner);
		} else if (base) {
			if (base['prevProps'] != null) applyRef(base['prevProps'].ref, null);

			component.nextBase = base;

			removeNode(base);
			recyclerComponents.push(component);

			removeChildren(base);
		}

		applyRef(component.__ref, null);
	}

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

    var id = 0;

    function Component(props, $) {
		this._dirty = true;
		this.elementId = id++;
		/**
	  * @public
	  * @type {object}
	  */
		this.store = {};
		this.$ = $;
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
		update: function update(callback) {
			if (callback) this._renderCallbacks.push(callback);
			renderComponent(this, 2);
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
		render: function render() {}
	});

    /* 
	 * obaa 2.0.3
	 * By dntzhang
	 * Github: https://github.com/Tencent/omi/tree/master/packages/obaa
	 * MIT Licensed.
	 */

    // $_r: root
    // $_c: prop change callback
    // $_p: path

    function obaa(target, arr, callback) {

	  var eventPropArr = [];
	  if (isArray(target)) {
	    if (target.length === 0) {
	      target.$_o = {
	        $_r: target,
	        $_p: '#'
	      };
	    }
	    mock(target, target);
	  }
	  for (var prop in target) {
	    if (target.hasOwnProperty(prop)) {
	      if (callback) {
	        if (isArray(arr) && isInArray(arr, prop)) {
	          eventPropArr.push(prop);
	          watch(target, prop, null, target);
	        } else if (isString(arr) && prop == arr) {
	          eventPropArr.push(prop);
	          watch(target, prop, null, target);
	        }
	      } else {
	        eventPropArr.push(prop);
	        watch(target, prop, null, target);
	      }
	    }
	  }
	  if (!target.$_c) {
	    target.$_c = [];
	  }
	  var propChanged = callback ? callback : arr;
	  target.$_c.push({
	    all: !callback,
	    propChanged: propChanged,
	    eventPropArr: eventPropArr
	  });
	}

    var triggerStr = ['concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size'].join(',');

    var methods = ['concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size'];

    function mock(target, root) {
	  methods.forEach(function (item) {
	    target[item] = function () {
	      var old = Array.prototype.slice.call(this, 0);
	      var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
	      if (new RegExp('\\b' + item + '\\b').test(triggerStr)) {
	        for (var cprop in this) {
	          if (this.hasOwnProperty(cprop) && !isFunction(this[cprop])) {
	            watch(this, cprop, this.$_o.$_p, root);
	          }
	        }
	        //todo
	        onPropertyChanged('Array-' + item, this, old, this, this.$_o.$_p, root);
	      }
	      return result;
	    };
	    target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function () {
	      return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
	    };
	  });
	}

    function watch(target, prop, path, root) {
	  if (prop === '$_o') return;
	  if (isFunction(target[prop])) return;
	  if (!target.$_o) target.$_o = {
	    $_r: root
	  };
	  if (path !== undefined && path !== null) {
	    target.$_o.$_p = path;
	  } else {
	    target.$_o.$_p = '#';
	  }

	  var currentValue = target.$_o[prop] = target[prop];
	  Object.defineProperty(target, prop, {
	    get: function get() {
	      return this.$_o[prop];
	    },
	    set: function set(value) {
	      var old = this.$_o[prop];
	      this.$_o[prop] = value;
	      onPropertyChanged(prop, value, old, this, target.$_o.$_p, root);
	    },
	    configurable: true,
	    enumerable: true
	  });
	  if (typeof currentValue == 'object') {
	    if (isArray(currentValue)) {
	      mock(currentValue, root);
	      if (currentValue.length === 0) {
	        if (!currentValue.$_o) currentValue.$_o = {};
	        if (path !== undefined && path !== null) {
	          currentValue.$_o.$_p = path + '-' + prop;
	        } else {
	          currentValue.$_o.$_p = '#' + '-' + prop;
	        }
	      }
	    }
	    for (var cprop in currentValue) {
	      if (currentValue.hasOwnProperty(cprop)) {
	        watch(currentValue, cprop, target.$_o.$_p + '-' + prop, root);
	      }
	    }
	  }
	}

    function onPropertyChanged(prop, value, oldValue, target, path, root) {
	  if (value !== oldValue && root.$_c) {
	    var rootName = getRootName(prop, path);
	    for (var i = 0, len = root.$_c.length; i < len; i++) {
	      var handler = root.$_c[i];
	      if (handler.all || isInArray(handler.eventPropArr, rootName) || rootName.indexOf('Array-') === 0) {
	        handler.propChanged.call(target, prop, value, oldValue, path);
	      }
	    }
	  }

	  if (prop.indexOf('Array-') !== 0 && typeof value === 'object') {
	    watch(target, prop, target.$_o.$_p, root);
	  }
	}

    function isFunction(obj) {
	  return Object.prototype.toString.call(obj) == '[object Function]';
	}

    function isArray(obj) {
	  return Object.prototype.toString.call(obj) === '[object Array]';
	}

    function isString(obj) {
	  return typeof obj === 'string';
	}

    function isInArray(arr, item) {
	  for (var i = arr.length; --i > -1;) {
	    if (item === arr[i]) return true;
	  }
	  return false;
	}

    function getRootName(prop, path) {
	  if (path === '#') {
	    return prop;
	  }
	  return path.split('-')[1];
	}

    obaa.add = function (obj, prop) {
	  watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r);
	};

    obaa.set = function (obj, prop, value) {
	  watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r);
	  obj[prop] = value;
	};

    Array.prototype.size = function (length) {
	  this.length = length;
	};

    /**
	 * Render JSX into a `parent` Element.
	 * @param {import('./vnode').VNode} vnode A (JSX) VNode to render
	 * @param {import('./dom').OmiElement} parent DOM element to render into
	 * @param {import('./dom').OmiElement} [merge] Attempt to re-use an existing DOM tree rooted at
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
    function render(vnode, parent, globalStore) {
	  obsStore(globalStore);
	  return diff(null, vnode, globalStore, false, typeof parent === 'string' ? document.querySelector(parent) : parent, false);
	}

    function obsStore(store) {
	  if (store && store.data) {
	    store.instances = [];
	    extendStoreUpate(store);

	    obaa(store.data, function (prop, val, old, path) {
	      var patchs = {};
	      var key = fixPath(path + '-' + prop);
	      patchs[key] = true;
	      store.update(patchs);
	    });
	  }
	}

    function extendStoreUpate(store) {
	  store.update = function (patch) {
	    var _this = this;

	    var updateAll = matchGlobalData(this.globalData, patch);
	    if (Object.keys(patch).length > 0) {

	      this.instances.forEach(function (instance) {
	        if (updateAll || _this.updateAll || instance.constructor.updatePath && needUpdate(patch, instance.constructor.updatePath) || instance._updatePath && needUpdate(patch, instance._updatePath)) {
	          //update this.using
	          if (instance.constructor.use) {
	            instance.using = getUse(store.data, instance.constructor.use);
	          } else if (instance.use) {
	            instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use);
	          }

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
	  var arr = path.replace('#-', '').split('-');
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

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
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

    function define(name, Component) {
		customElements.define(name, function (_HTMLElement) {
			_inherits(_class, _HTMLElement);

			function _class() {
				_classCallCheck(this, _class);

				return _possibleConstructorReturn(this, _HTMLElement.apply(this, arguments));
			}

			_class.prototype.connectedCallback = function connectedCallback() {
				var shadowRoot = this.attachShadow({
					mode: 'open'
				});
				this.props = {};
				this.attrsToProps();

				//Component.css = null
				if (Component.css) {
					addStyleToHead(Component.css, getCtorName(Component), shadowRoot);
				}

				this._ele = render(h(Component, this.props), shadowRoot);

				if (this.props.css) {
					addStyleToHead(this.props.css, '_ds' + this._ele._component.elementId, shadowRoot);
				}
			};

			_class.prototype.disconnectedCallback = function disconnectedCallback() {};

			_class.prototype.addEventListener = function addEventListener(name, callback) {
				this._ele._component.props['on' + name.charAt(0).toUpperCase() + name.slice(1)] = callback;
			};

			_class.prototype.removeEventListener = function removeEventListener(name, callback) {
				var props = this._ele._component.props;
				var eventName = 'on' + name.charAt(0).toUpperCase() + name.slice(1);
				for (var key in props) {
					if (key === eventName && callback === props[key]) {
						delete props[key];
						break;
					}
				}
			};

			_class.prototype.removeAttribute = function removeAttribute(key) {
				_HTMLElement.prototype.removeAttribute.call(this, key);
				delete this._ele._component.props[key];
				if (Component.defaultProps.hasOwnProperty(key)) {
					this._ele._component.props[key] = Component.defaultProps[key];
				}
				this._ele._component.update();
			};

			_class.prototype.setAttribute = function setAttribute(key, val) {
				if (val && typeof val === 'object') {
					val = JSON.stringify(val);
					_HTMLElement.prototype.setAttribute.call(this, key, val);
				} else {
					val = val.toString();
					_HTMLElement.prototype.setAttribute.call(this, key, val);
				}
				this.attrToProp(key, val, this._ele._component.props);
				this._ele._component.update();
			};

			_class.prototype.attrToProp = function attrToProp(key, val, props) {
				var type = Component.propTypes[key];
				switch (type) {
					case String:
						props[key] = val;
						break;
					case Number:
						props[key] = Number(val);
						break;
					case Boolean:
						if (val === 'false' || val === '0') {
							props[key] = false;
						} else {
							props[key] = true;
						}
						break;
					case Array:
					case Object:
						props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
						break;
				}
			};

			_class.prototype.attrsToProps = function attrsToProps() {
				var _this2 = this;

				this.props['css'] = this.getAttribute('css');
				var attrs = Component.propTypes;
				if (!attrs) return;
				Object.keys(attrs).forEach(function (key) {
					var type = attrs[key];
					var val = _this2.getAttribute(hyphenate(key));
					if (val !== null) {
						switch (type) {
							case String:
								_this2.props[key] = val;
								break;
							case Number:
								_this2.props[key] = Number(val);
								break;
							case Boolean:
								if (val === 'false' || val === '0') {
									_this2.props[key] = false;
								} else {
									_this2.props[key] = true;
								}
								break;
							case Array:
							case Object:
								_this2.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
								break;
						}
					} else {
						if (Component.defaultProps && Component.defaultProps.hasOwnProperty(key)) {
							_this2.props[key] = Component.defaultProps[key];
						} else {
							_this2.props[key] = null;
						}
					}
				});
			};

			return _class;
		}(HTMLElement));
	}

    function hyphenate(str) {
		return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
	}

    function createRef() {
		return {};
	}

    var Omis = {
		h: h,
		createElement: h,
		cloneElement: cloneElement,
		createRef: createRef,
		Component: Component,
		render: render,
		rerender: rerender,
		options: options,
		define: define,
		obaa: obaa
	};

    if (typeof window !== 'undefined') {
		window.Omis = {
			h: h,
			createElement: h,
			cloneElement: cloneElement,
			createRef: createRef,
			Component: Component,
			render: render,
			rerender: rerender,
			options: options,
			define: define,
			obaa: obaa
		};
	}

    if (typeof module != 'undefined') module.exports = Omis;else self.Omis = Omis;
}());
//# sourceMappingURL=omis.dev.js.map
