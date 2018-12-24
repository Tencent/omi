/**
 * omi v1.0.3  http://omijs.org
 * Omi === Preact + Scoped CSS + Store System + Native Support in 3kb javascript.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

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
  scopedStyle: true,
  mapping: {},
  isWeb: true,
  staticStyleMapping: {},
  doc: typeof document === 'object' ? document : null,
  root: getGlobal(),
  //styleCache :[{ctor:ctor,ctorName:ctorName,style:style}]
  styleCache: []
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

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
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
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
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
  p.attributes = attributes == null ? undefined : attributes;
  if (children && typeof children[0] === 'string' && !options.isWeb) {
    if (p.attributes) {
      p.attributes.value = children[0];
    } else {
      p.attributes = { value: children[0] };
    }
  } else {
    p.children = children;
  }
  p.key = attributes == null ? undefined : attributes.key;

  // if a "vnode hook" is defined, pass every created VNode to it
  if (options.vnode !== undefined) options.vnode(p);

  return p;
}

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function assign(target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
}

if (!Element.prototype.addEventListener) {
  var runListeners = function runListeners(oEvent) {
    if (!oEvent) {
      oEvent = window.event;
    }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
          oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
        }
        break;
      }
    }
  };

  var oListeners = {};

  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;break;
        }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) {
            return;
          }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) {
      return;
    }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        nElIdx = iElId;break;
      }
    }
    if (nElIdx === -1) {
      return;
    }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) {
        aElListeners.splice(iLstId, 1);
      }
    }
  };
}

if (typeof Object.create !== 'function') {
  Object.create = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
      throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }

    // if (typeof propertiesObject != 'undefined') {
    //     throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
    // }

    function F() {}
    F.prototype = proto;

    return new F();
  };
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */

var usePromise = typeof Promise == 'function';

// for native
if (typeof document !== 'object' && typeof global !== 'undefined' && global.__config__) {
  if (global.__config__.platform === 'android') {
    usePromise = true;
  } else {
    var systemVersion = global.__config__.systemVersion && global.__config__.systemVersion.split('.')[0] || 0;
    if (systemVersion > 8) {
      usePromise = true;
    }
  }
}

var defer = usePromise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

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

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virtual DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
  if (items.push(component) == 1) {
(options.debounceRendering || defer)(rerender);
  }
}

function rerender() {
  var p,
      list = items;
  items = [];
  var element;
  while (p = list.pop()) {
    element = p.base;
    renderComponent(p);
  }
  if (!list.length) {
    if (options.componentChange) options.componentChange(p, element);
  }
}

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
  var ctor = options.mapping[vnode.nodeName];
  if (ctor) {
    return hydrating || node._componentConstructor === ctor;
  }
  return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
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
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
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

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
  var node = isSvg ? options.doc.createElementNS('http://www.w3.org/2000/svg', nodeName) : options.doc.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}

function parseCSSText(cssText) {
  var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ');
  var style = {},
      _ref = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [a, b, cssTxt],
      a = _ref[0],
      b = _ref[1],
      rule = _ref[2];

  var cssToJs = function cssToJs(s) {
    return s.replace(/\W+\w/g, function (match) {
      return match.slice(-1).toUpperCase();
    });
  };
  var properties = rule.split(';').map(function (o) {
    return o.split(':').map(function (x) {
      return x && x.trim();
    });
  });
  for (var i = properties, i = Array.isArray(i), i = 0, i = i ? i : i[Symbol.iterator]();;) {
    var _ref3;

    if (i) {
      if (i >= i.length) break;
      _ref3 = i[i++];
    } else {
      i = i.next();
      if (i.done) break;
      _ref3 = i.value;
    }

    var _ref2 = _ref3;
    var property = _ref2[0];
    var value = _ref2[1];
    style[cssToJs(property)] = value;
  }return style;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
  if (name === 'className') name = 'class';

  if (name === 'key') {
    // ignore
  } else if (name === 'ref') {
    if (old) old(null);
    if (value) value(node);
  } else if (name === 'class' && !isSvg) {
    node.className = value || '';
  } else if (name === 'style') {
    if (options.isWeb) {
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
    } else {
      var oldJson = old,
          currentJson = value;
      if (typeof old === 'string') {
        oldJson = parseCSSText(old);
      }
      if (typeof value == 'string') {
        currentJson = parseCSSText(value);
      }

      var result = {},
          changed = false;

      if (oldJson) {
        for (var key in oldJson) {
          if (typeof currentJson == 'object' && !(key in currentJson)) {
            result[key] = '';
            changed = true;
          }
        }

        for (var ckey in currentJson) {
          if (currentJson[ckey] !== oldJson[ckey]) {
            result[ckey] = currentJson[ckey];
            changed = true;
          }
        }

        if (changed) {
          node.setStyles(result);
        }
      } else {
        node.setStyles(currentJson);
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
    setProperty(node, name, value == null ? '' : value);
    if (value == null || value === false) node.removeAttribute(name);
  } else {
    var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
    if (value == null || value === false) {
      if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
    } else if (typeof value !== 'function') {
      if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
    }
  }
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
  try {
    node[name] = value;
  } catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
  return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
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
  while (c = mounts.pop()) {
    if (options.afterMount) options.afterMount(c);
    if (c.componentDidMount) c.componentDidMount();
    if (c.installed) c.installed();
  }
}

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
    hydrating = dom != null && !('__preactattr_' in dom);
  }
  var ret;

  if (isArray(vnode)) {
    vnode = {
      nodeName: 'span',
      children: vnode
    };
  }

  ret = idiff(dom, vnode, context, mountAll, componentRoot);
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

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
  var out = dom,
      prevSvgMode = isSvgMode;

  // empty values (null, undefined, booleans) render as empty Text nodes
  if (vnode == null || typeof vnode === 'boolean') vnode = '';

  // If the VNode represents a Component, perform a component diff:
  var vnodeName = vnode.nodeName;
  if (options.mapping[vnodeName]) {
    vnode.nodeName = options.mapping[vnodeName];
    return buildComponentFromVNode(dom, vnode, context, mountAll);
  }

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

    //ie8 error
    try {
      out['__preactattr_'] = true;
    } catch (e) {}

    return out;
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
      props = out['__preactattr_'],
      vchildren = vnode.children;

  if (props == null) {
    props = out['__preactattr_'] = {};
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
      j,
      c,
      f,
      vchild,
      child;

  // Build up a map of keyed children and an Array of unkeyed children:
  if (len !== 0) {
    for (var i = 0; i < len; i++) {
      var _child = originalChildren[i],
          props = _child['__preactattr_'],
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
  var component = node._component;
  if (component) {
    // if node is owned by a Component, unmount that component (ends up recursing back here)
    unmountComponent(component);
  } else {
    // If the node's VNode had a ref function, invoke it with null here.
    // (this is part of the React spec, and smart for unsetting references)
    if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

    if (unmountOnly === false || node['__preactattr_'] == null) {
      removeNode(node);
    }

    removeChildren(node);
  }
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

  // remove attributes no longer present on the vnode by setting them to undefined
  for (name in old) {
    if (!(attrs && attrs[name] != null) && old[name] != null) {
      setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
    }
  }

  // add new & update changed attributes
  for (name in attrs) {
    if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
      setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
  }
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
  var name = component.constructor.name;(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
  var list = components[Ctor.name],
      inst;

  if (Ctor.prototype && Ctor.prototype.render) {
    inst = new Ctor(props, context);
    Component.call(inst, props, context);
  } else {
    inst = new Component(props, context);
    inst.constructor = Ctor;
    inst.render = doRender;
  }

  if (list) {
    for (var i = list.length; i--;) {
      if (list[i].constructor === Ctor) {
        inst.nextBase = list[i].nextBase;
        list.splice(i, 1);
        break;
      }
    }
  }
  return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, data, context) {
  return this.constructor(props, context);
}

var styleId = 0;

function getCtorName(ctor) {
  for (var i = 0, len = options.styleCache.length; i < len; i++) {
    var item = options.styleCache[i];

    if (item.ctor === ctor) {
      return item.attrName;
    }
  }

  var attrName = 'static_' + styleId;
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

function addStyleWithoutId(cssText) {
  var head = document.getElementsByTagName('head')[0];
  var someThingStyles = document.createElement('style');
  head.appendChild(someThingStyles);
  someThingStyles.setAttribute('type', 'text/css');

  if (window.ActiveXObject) {
    someThingStyles.styleSheet.cssText = cssText;
  } else {
    someThingStyles.textContent = cssText;
  }
}

function addScopedAttr(vdom, style, attr, component) {
  if (options.scopedStyle) {
    scopeVdom(attr, vdom);
    style = scoper(style, attr);
    if (style !== component._preCss) {
      addStyle(style, attr);
    }
  } else if (style !== component._preCss) {
    addStyleWithoutId(style);
  }
  component._preCss = style;
}

function addScopedAttrStatic(vdom, style, attr) {
  if (options.scopedStyle) {
    scopeVdom(attr, vdom);
    if (!options.staticStyleMapping[attr]) {
      addStyle(scoper(style, attr), attr);
      options.staticStyleMapping[attr] = true;
    }
  } else if (!options.staticStyleMapping[attr]) {
    addStyleWithoutId(style);
    options.staticStyleMapping[attr] = true;
  }
}

function scopeVdom(attr, vdom) {
  if (typeof vdom === 'object') {
    vdom.attributes = vdom.attributes || {};
    vdom.attributes[attr] = '';
    vdom.children.forEach(function (child) {
      return scopeVdom(attr, child);
    });
  }
}

/* obaa 1.0.0
 * By dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

var obaa = function obaa(target, arr, callback) {
  var _observe = function _observe(target, arr, callback) {
    if (!target.$observer) target.$observer = this;
    var $observer = target.$observer;
    var eventPropArr = [];
    if (obaa.isArray(target)) {
      if (target.length === 0) {
        target.$observeProps = {};
        target.$observeProps.$observerPath = '#';
      }
      $observer.mock(target);
    }
    for (var prop in target) {
      if (target.hasOwnProperty(prop)) {
        if (callback) {
          if (obaa.isArray(arr) && obaa.isInArray(arr, prop)) {
            eventPropArr.push(prop);
            $observer.watch(target, prop);
          } else if (obaa.isString(arr) && prop == arr) {
            eventPropArr.push(prop);
            $observer.watch(target, prop);
          }
        } else {
          eventPropArr.push(prop);
          $observer.watch(target, prop);
        }
      }
    }
    $observer.target = target;
    if (!$observer.propertyChangedHandler) $observer.propertyChangedHandler = [];
    var propChanged = callback ? callback : arr;
    $observer.propertyChangedHandler.push({
      all: !callback,
      propChanged: propChanged,
      eventPropArr: eventPropArr
    });
  };
  _observe.prototype = {
    onPropertyChanged: function onPropertyChanged(prop, value, oldValue, target, path) {
      if (value !== oldValue && this.propertyChangedHandler) {
        var rootName = obaa._getRootName(prop, path);
        for (var i = 0, len = this.propertyChangedHandler.length; i < len; i++) {
          var handler = this.propertyChangedHandler[i];
          if (handler.all || obaa.isInArray(handler.eventPropArr, rootName) || rootName.indexOf('Array-') === 0) {
            handler.propChanged.call(this.target, prop, value, oldValue, path);
          }
        }
      }
      if (prop.indexOf('Array-') !== 0 && typeof value === 'object') {
        this.watch(target, prop, target.$observeProps.$observerPath);
      }
    },
    mock: function mock(target) {
      var self = this;
      obaa.methods.forEach(function (item) {
        target[item] = function () {
          var old = Array.prototype.slice.call(this, 0);
          var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
          if (new RegExp('\\b' + item + '\\b').test(obaa.triggerStr)) {
            for (var cprop in this) {
              if (this.hasOwnProperty(cprop) && !obaa.isFunction(this[cprop])) {
                self.watch(this, cprop, this.$observeProps.$observerPath);
              }
            }
            //todo
            self.onPropertyChanged('Array-' + item, this, old, this, this.$observeProps.$observerPath);
          }
          return result;
        };
        target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function () {
          return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
        };
      });
    },
    watch: function watch(target, prop, path) {
      if (prop === '$observeProps' || prop === '$observer') return;
      if (obaa.isFunction(target[prop])) return;
      if (!target.$observeProps) target.$observeProps = {};
      if (path !== undefined) {
        target.$observeProps.$observerPath = path;
      } else {
        target.$observeProps.$observerPath = '#';
      }
      var self = this;
      var currentValue = target.$observeProps[prop] = target[prop];
      Object.defineProperty(target, prop, {
        get: function get() {
          return this.$observeProps[prop];
        },
        set: function set(value) {
          var old = this.$observeProps[prop];
          this.$observeProps[prop] = value;
          self.onPropertyChanged(prop, value, old, this, target.$observeProps.$observerPath);
        }
      });
      if (typeof currentValue == 'object') {
        if (obaa.isArray(currentValue)) {
          this.mock(currentValue);
          if (currentValue.length === 0) {
            if (!currentValue.$observeProps) currentValue.$observeProps = {};
            if (path !== undefined) {
              currentValue.$observeProps.$observerPath = path;
            } else {
              currentValue.$observeProps.$observerPath = '#';
            }
          }
        }
        for (var cprop in currentValue) {
          if (currentValue.hasOwnProperty(cprop)) {
            this.watch(currentValue, cprop, target.$observeProps.$observerPath + '-' + prop);
          }
        }
      }
    }
  };
  return new _observe(target, arr, callback);
};

obaa.methods = ['concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size'];
obaa.triggerStr = ['concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size'].join(',');

obaa.isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

obaa.isString = function (obj) {
  return typeof obj === 'string';
};

obaa.isInArray = function (arr, item) {
  for (var i = arr.length; --i > -1;) {
    if (item === arr[i]) return true;
  }
  return false;
};

obaa.isFunction = function (obj) {
  return Object.prototype.toString.call(obj) == '[object Function]';
};

obaa._getRootName = function (prop, path) {
  if (path === '#') {
    return prop;
  }
  return path.split('-')[1];
};

obaa.add = function (obj, prop) {
  var $observer = obj.$observer;
  $observer.watch(obj, prop);
};

obaa.set = function (obj, prop, value, exec) {
  if (!exec) {
    obj[prop] = value;
  }
  var $observer = obj.$observer;
  $observer.watch(obj, prop);
  if (exec) {
    obj[prop] = value;
  }
};

Array.prototype.size = function (length) {
  this.length = length;
};

var callbacks = [];
var nextTickCallback = [];

function fireTick() {
  callbacks.forEach(function (item) {
    item.fn.call(item.scope);
  });

  nextTickCallback.forEach(function (nextItem) {
    nextItem.fn.call(nextItem.scope);
  });
  nextTickCallback.length = 0;
}

function proxyUpdate(ele) {
  var timeout = null;
  obaa(ele.data, function () {
    if (ele._willUpdate) {
      return;
    }
    if (ele.constructor.mergeUpdate) {
      clearTimeout(timeout);

      timeout = setTimeout(function () {
        ele.update();
        fireTick();
      }, 0);
    } else {
      ele.update();
      fireTick();
    }
  });
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
  if (component._disable) return;
  component._disable = true;

  if (component.__ref = props.ref) delete props.ref;
  if (component.__key = props.key) delete props.key;

  if (!component.base || mountAll) {
    if (component.componentWillMount) component.componentWillMount();
    if (component.beforeInstall) component.beforeInstall();
    if (component.install) component.install();
    if (component.constructor.observe) {
      proxyUpdate(component);
    }
  } else if (component.receiveProps) {
    component.receiveProps(props, component.data, component.props);
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props, context);
  }

  if (context && context !== component.context) {
    if (!component.prevContext) component.prevContext = component.context;
    component.context = context;
  }

  if (!component.prevProps) component.prevProps = component.props;
  component.props = props;

  component._disable = false;

  if (opts !== 0) {
    if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
      renderComponent(component, 1, mountAll);
    } else {
      enqueueRender(component);
    }
  }

  if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
  if (component._disable) return;

  var props = component.props,
      data = component.data,
      context = component.context,
      previousProps = component.prevProps || props,
      previousState = component.prevState || data,
      previousContext = component.prevContext || context,
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
    component.data = previousState;
    component.context = previousContext;
    if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, data, context) === false) {
      skip = true;
    } else if (component.componentWillUpdate) {
      component.componentWillUpdate(props, data, context);
    } else if (component.beforeUpdate) {
      component.beforeUpdate(props, data, context);
    }
    component.props = props;
    component.data = data;
    component.context = context;
  }

  component.prevProps = component.prevState = component.prevContext = component.nextBase = null;

  if (!skip) {
    component.beforeRender && component.beforeRender();
    rendered = component.render(props, data, context);

    //don't rerender
    if (component.staticCss) {
      addScopedAttrStatic(rendered, component.staticCss(), '_style_' + getCtorName(component.constructor));
    }

    if (component.css) {
      addScopedAttr(rendered, component.css(), '_style_' + component.elementId, component);
    }

    // context to pass to the child, can be updated via (grand-)parent component
    if (component.getChildContext) {
      context = extend(extend({}, context), component.getChildContext());
    }

    var childComponent = rendered && rendered.nodeName,
        toUnmount,
        base,
        ctor = options.mapping[childComponent];

    if (ctor) {
      // set up high order component link

      var childProps = getNodeProps(rendered);
      inst = initialChildComponent;

      if (inst && inst.constructor === ctor && childProps.key == inst.__key) {
        setComponentProps(inst, childProps, 1, context, false);
      } else {
        toUnmount = inst;

        component._component = inst = createComponent(ctor, childProps, context);
        inst.nextBase = inst.nextBase || nextBase;
        inst._parentComponent = component;
        setComponentProps(inst, childProps, 0, context, false);
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

      if (initialBase || opts === 1) {
        if (cbase) cbase._component = null;
        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
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
    mounts.unshift(component);
  } else if (!skip) {
    // Ensure that pending componentDidMount() hooks of child components
    // are called before the componentDidUpdate() hook in the parent.
    // Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
    // flushMounts();

    if (component.componentDidUpdate) {
      component.componentDidUpdate(previousProps, previousState, previousContext);
    }
    if (component.afterUpdate) {
      //deprecated
      component.afterUpdate(previousProps, previousState, previousContext);
    }
    if (component.updated) {
      component.updated(previousProps, previousState, previousContext);
    }
    if (options.afterUpdate) options.afterUpdate(component);
  }

  if (component._renderCallbacks != null) {
    while (component._renderCallbacks.length) {
      component._renderCallbacks.pop().call(component);
    }
  }

  if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
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
    setComponentProps(c, props, 3, context, mountAll);
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
    setComponentProps(c, props, 1, context, mountAll);
    dom = c.base;

    if (oldDom && dom !== oldDom) {
      oldDom._component = null;
      recollectNodeTree(oldDom, false);
    }
  }

  return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
  if (options.beforeUnmount) options.beforeUnmount(component);

  var base = component.base;

  component._disable = true;

  if (component.componentWillUnmount) component.componentWillUnmount();
  if (component.uninstall) component.uninstall();

  component.base = null;

  // recursively tear down & recollect high-order component children:
  var inner = component._component;
  if (inner) {
    unmountComponent(inner);
  } else if (base) {
    if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

    component.nextBase = base;

    removeNode(base);
    collectComponent(component);

    removeChildren(base);
  }

  if (component.__ref) component.__ref(null);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var id = 0;

var Component = function () {
  function Component(props, store) {
    _classCallCheck(this, Component);

    this.props = assign(nProps(this.constructor.props), this.constructor.defaultProps, props);
    this.elementId = id++;
    this.data = this.constructor.data || this.data || {};

    this._preCss = null;

    this.store = store;
  }

  Component.prototype.update = function update(callback) {
    this._willUpdate = true;
    if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
    renderComponent(this, 2);
    if (options.componentChange) options.componentChange(this, this.base);
    this._willUpdate = false;
  };

  Component.prototype.fire = function fire(type, data) {
    var _this = this;

    Object.keys(this.props).every(function (key) {
      if ('on' + type === key.toLowerCase()) {
        _this.props[key]({ detail: data });
        return false;
      }
      return true;
    });
  };

  Component.prototype.render = function render() {};

  return Component;
}();

Component.is = 'WeElement';

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {object} [store]
 *	@public
 */
function render(vnode, parent, store) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent;

  if (store && store.merge) {
    store.merge = typeof store.merge === 'string' ? document.querySelector(store.merge) : store.merge;
  }

  return diff(store && store.merge, vnode, store, false, parent, false);
}

function define(name, ctor) {
  options.mapping[name] = ctor;
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
    if (type === '[object Object]') {
      _objToPath(data[key], key, result);
    } else if (type === '[object Array]') {
      _arrayToPath(data[key], key, result);
    }
  });
}

function _objToPath(data, path, result) {
  Object.keys(data).forEach(function (key) {
    result[path + '.' + key] = true;
    delete result[path];
    var type = Object.prototype.toString.call(data[key]);
    if (type === '[object Object]') {
      _objToPath(data[key], path + '.' + key, result);
    } else if (type === '[object Array]') {
      _arrayToPath(data[key], path + '.' + key, result);
    }
  });
}

function _arrayToPath(data, path, result) {
  data.forEach(function (item, index) {
    result[path + '[' + index + ']'] = true;
    delete result[path];
    var type = Object.prototype.toString.call(item);
    if (type === '[object Object]') {
      _objToPath(item, path + '[' + index + ']', result);
    } else if (type === '[object Array]') {
      _arrayToPath(item, path + '[' + index + ']', result);
    }
  });
}

function rpx(str) {
  return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
    return window.innerWidth * Number(b) / 750 + 'px';
  });
}

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelView = function (_Component) {
  _inherits(ModelView, _Component);

  function ModelView() {
    _classCallCheck$1(this, ModelView);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ModelView.prototype.beforeInstall = function beforeInstall() {
    this.data = this.vm.data;
  };

  return ModelView;
}(Component);

ModelView.observe = true;
ModelView.mergeUpdate = true;

var WeElement = Component;
var defineElement = define;

options.root.Omi = {
  h: h,
  createElement: h,
  cloneElement: cloneElement,
  Component: Component,
  render: render,
  rerender: rerender,
  options: options,
  WeElement: WeElement,
  define: define,
  rpx: rpx,
  ModelView: ModelView,
  defineElement: defineElement
};

options.root.Omi.version = 'omio-1.0.3';

var omi = {
  h: h,
  createElement: h,
  cloneElement: cloneElement,
  Component: Component,
  render: render,
  rerender: rerender,
  options: options,
  WeElement: WeElement,
  define: define,
  rpx: rpx,
  ModelView: ModelView,
  defineElement: defineElement
};

export default omi;
export { h, h as createElement, cloneElement, Component, render, rerender, options, WeElement, define, rpx, ModelView, defineElement };
//# sourceMappingURL=omi.esm.js.map
