(function () {
  'use strict';

  /** Virtual DOM Node */
  function VNode() {}

  function getGlobal() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
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
    root: getGlobal(),
    mapping: {}
  };

  var stack = [];

  function h(nodeName, attributes) {
    var children = [],
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
        } else if (children.length === 0) {
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

  var hyphenateRE = /\B([A-Z])/g;
  function hyphenate(str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  }

  // render modes

  var ATTR_KEY = 'prevProps';

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
    } else if (typeof vnode.nodeName === 'function') {
      return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
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
   * Create an element with the given nodeName.
   * @param {string} nodeName The DOM node to create
   * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
   *  namespace.
   * @returns {Element} The created DOM node
   */
  function createNode(nodeName, isSvg) {
    /** @type {Element} */
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
   * @param {Element} node An element to mutate
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
        if (!old) {
          node.addEventListener(name, eventProxy, useCapture);
          if (name == 'tap') {
            node.addEventListener('touchstart', touchStart, useCapture);
            node.addEventListener('touchend', touchEnd, useCapture);
          }
        }
      } else {
        node.removeEventListener(name, eventProxy, useCapture);
        if (name == 'tap') {
          node.removeEventListener('touchstart', touchStart, useCapture);
          node.removeEventListener('touchend', touchEnd, useCapture);
        }
      }
  (node._listeners || (node._listeners = {}))[name] = value;
    } else if (node.nodeName === 'INPUT' && name === 'value') {
      node[name] = value == null ? '' : value;
    } else if (name !== 'list' && name !== 'type' && name !== 'css' && !isSvg && name in node && value !== '') {
      //value !== '' fix for selected, disabled, checked with pure element
      // Attempt to set a DOM property to the given value.
      // IE & FF throw for certain property-value combinations.
      try {
        node[name] = value == null ? '' : value;
      } catch (e) {}
      if ((value == null || value === false) && name != 'spellcheck') node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
    } else {
      var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
      // spellcheck is treated differently than all other boolean values and
      // should not be removed when the value is `false`. See:
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
      if (value == null || value === false) {
        if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
      } else if (typeof value !== 'function') {
        if (ns) {
          node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
        } else {
          node.pureSetAttribute ? node.pureSetAttribute(name, value) : node.setAttribute(name, value);
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

  function touchStart(e) {
    this.___touchX = e.touches[0].pageX;
    this.___touchY = e.touches[0].pageY;
    this.___scrollTop = document.body.scrollTop;
  }

  function touchEnd(e) {
    if (Math.abs(e.changedTouches[0].pageX - this.___touchX) < 30 && Math.abs(e.changedTouches[0].pageY - this.___touchY) < 30 && Math.abs(document.body.scrollTop - this.___scrollTop) < 30) {
      this.dispatchEvent(new CustomEvent('tap', { detail: e }));
    }
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
    var ret = void 0;
    if (!diffLevel++) {
      // when first starting the diff, check if we're diffing an SVG or within an SVG
      isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

      // hydration is indicated by the existing element to be diffed not having a prop cache
      hydrating = dom != null && !(ATTR_KEY in dom);
    }
    if (isArray(vnode)) {
      if (parent) {
        var styles = parent.querySelectorAll('style');
        styles.forEach(function (s) {
          parent.removeChild(s);
        });
        innerDiffNode(parent, vnode);

        for (var i = styles.length - 1; i >= 0; i--) {
          parent.firstChild ? parent.insertBefore(styles[i], parent.firstChild) : parent.appendChild(style[i]);
        }
      } else {

        ret = [];
        vnode.forEach(function (item, index) {
          var ele = idiff(index === 0 ? dom : null, item, context, mountAll, componentRoot);
          ret.push(ele);
          parent && parent.appendChild(ele);
        });
      }
    } else {
      if (isArray(dom)) {
        dom.forEach(function (one, index) {
          if (index === 0) {
            ret = idiff(one, vnode, context, mountAll, componentRoot);
          } else {
            recollectNodeTree(one, false);
          }
        });
      } else {
        ret = idiff(dom, vnode, context, mountAll, componentRoot);
      }
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
    if (dom && vnode && dom.props) {
      dom.props.children = vnode.children;
    }
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
    if (typeof vnodeName === 'function') {
      for (var key in options.mapping) {
        if (options.mapping[key] === vnodeName) {
          vnodeName = key;
          vnode.nodeName = key;
          break;
        }
      }
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
        if (!(out.constructor.is == 'WeElement' && out.constructor.noSlot)) {
          innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
        }
      }

    // Apply attributes/props from VNode to the DOM Element:
    diffAttributes(out, vnode.attributes, props);
    if (out.props) {
      out.props.children = vnode.children;
    }
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
    if (node[ATTR_KEY] != null && node[ATTR_KEY].ref) {
      if (typeof node[ATTR_KEY].ref === 'function') {
        node[ATTR_KEY].ref(null);
      } else if (node[ATTR_KEY].ref.current) {
        node[ATTR_KEY].ref.current = null;
      }
    }

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
    var oldClone = void 0;
    if (dom.receiveProps) {
      oldClone = Object.assign({}, old);
    }
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
      if (isWeElement && typeof attrs[name] === 'object' && name !== 'ref') {
        if (name === 'style') {
          setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
        }
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

    if (isWeElement && dom.parentNode) {
      //__hasChildren is not accuracy when it was empty at first, so add dom.children.length > 0 condition
      if (update || dom.__hasChildren || dom.children.length > 0 || dom.store && !dom.store.data) {
        if (dom.receiveProps(dom.props, oldClone) !== false) {
          dom.update();
        }
      }
    }
  }

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
      operation.oldValue = target[key];
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

  var callbacks = [];
  var nextTickCallback = [];

  function tick(fn, scope) {
    callbacks.push({ fn: fn, scope: scope });
  }

  function fireTick() {
    callbacks.forEach(function (item) {
      item.fn.call(item.scope);
    });

    nextTickCallback.forEach(function (nextItem) {
      nextItem.fn.call(nextItem.scope);
    });
    nextTickCallback.length = 0;
  }

  function nextTick(fn, scope) {
    nextTickCallback.push({ fn: fn, scope: scope });
  }

  function observe(target) {
    target.observe = true;
  }

  function proxyUpdate(ele) {
    var timeout = null;
    ele.data = new JSONPatcherProxy(ele.data).observe(false, function () {
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

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var OBJECTTYPE = '[object Object]';
  var ARRAYTYPE = '[object Array]';

  function define(name, ctor) {
    if (ctor.is === 'WeElement') {
      if (options.mapping[name]) {
        // if(options.mapping[name] === ctor){
        //   console.warn(`You redefine custom elements named [${name}], redundant JS files may be referenced.`)
        // } else {
        //   console.warn(`This custom elements name [${name}] has already been used, please rename it.`)
        // }
        return;
      }
      customElements.define(name, ctor);
      options.mapping[name] = ctor;
      if (ctor.use) {
        ctor.updatePath = getPath(ctor.use);
      } else if (ctor.data) {
        //Compatible with older versions
        ctor.updatePath = getUpdatePath(ctor.data);
      }
    } else {
      var Element = function (_WeElement) {
        _inherits(Element, _WeElement);

        function Element() {
          var _temp, _this, _ret;

          _classCallCheck(this, Element);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this._useId = 0, _this._useMap = {}, _this._preCss = null, _temp), _possibleConstructorReturn(_this, _ret);
        }

        Element.prototype.render = function render(props, data) {
          return ctor.call(this, props, data);
        };

        Element.prototype.beforeRender = function beforeRender() {
          this._useId = 0;
        };

        Element.prototype.useCss = function useCss(css) {
          if (css === this._preCss) {
            return;
          }
          this._preCss = css;
          var style = this.shadowRoot.querySelector('style');
          style && this.shadowRoot.removeChild(style);
          this.shadowRoot.appendChild(cssToDom(css));
        };

        Element.prototype.useData = function useData(data) {
          return this.use({ data: data });
        };

        Element.prototype.use = function use(option) {
          var _this2 = this;

          this._useId++;
          var updater = function updater(newValue) {
            var item = _this2._useMap[updater.id];

            item.data = newValue;

            _this2.update();
            item.effect && item.effect();
          };

          updater.id = this._useId;
          if (!this._isInstalled) {
            this._useMap[this._useId] = option;
            return [option.data, updater];
          }

          return [this._useMap[this._useId].data, updater];
        };

        Element.prototype.installed = function installed() {
          this._isInstalled = true;
        };

        return Element;
      }(WeElement);

      customElements.define(name, Element);
    }
  }

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

  var _class, _temp;

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var id = 0;

  var WeElement = (_temp = _class = function (_HTMLElement) {
    _inherits$1(WeElement, _HTMLElement);

    function WeElement() {
      _classCallCheck$1(this, WeElement);

      var _this = _possibleConstructorReturn$1(this, _HTMLElement.call(this));

      _this.props = Object.assign(nProps(_this.constructor.props), _this.constructor.defaultProps);
      _this.elementId = id++;
      _this.data = {};
      return _this;
    }

    WeElement.prototype.connectedCallback = function connectedCallback() {
      var p = this.parentNode;
      while (p && !this.store) {
        this.store = p.store;
        p = p.parentNode || p.host;
      }
      if (this.store) {
        this.store.instances.push(this);
      }

      if (this.initUse) {
        var use = this.initUse();
        this._updatePath = getPath(use);
        this.use = getUse(this.store.data, use);
      } else {
        this.constructor.use && (this.use = getUse(this.store.data, this.constructor.use));
      }
      this.attrsToProps();
      this.beforeInstall();
      this.install();
      this.afterInstall();

      var shadowRoot = void 0;
      if (!this.shadowRoot) {
        shadowRoot = this.attachShadow({
          mode: 'open'
        });
      } else {
        shadowRoot = this.shadowRoot;
        var fc = void 0;
        while (fc = shadowRoot.firstChild) {
          shadowRoot.removeChild(fc);
        }
      }

      if (this.constructor.css) {
        shadowRoot.appendChild(cssToDom(this.constructor.css));
      } else if (this.css) {
        shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
      }
      this.beforeRender();
      options.afterInstall && options.afterInstall(this);
      if (this.constructor.observe) {
        this.beforeObserve();
        proxyUpdate(this);
        this.observed();
      }

      var rendered = this.render(this.props, this.data, this.store);
      this.__hasChildren = Object.prototype.toString.call(rendered) === '[object Array]' && rendered.length > 0;

      this.rootNode = diff(null, rendered, {}, false, null, false);
      this.rendered();

      if (this.props.css) {
        this._customStyleElement = cssToDom(this.props.css);
        this._customStyleContent = this.props.css;
        shadowRoot.appendChild(this._customStyleElement);
      }

      if (isArray(this.rootNode)) {
        this.rootNode.forEach(function (item) {
          shadowRoot.appendChild(item);
        });
      } else {
        shadowRoot.appendChild(this.rootNode);
      }
      this.installed();
      this._isInstalled = true;
    };

    WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
      this.uninstall();
      this._isInstalled = false;
      if (this.store) {
        for (var i = 0, len = this.store.instances.length; i < len; i++) {
          if (this.store.instances[i] === this) {
            this.store.instances.splice(i, 1);
            break;
          }
        }
      }
    };

    WeElement.prototype.update = function update(ignoreAttrs) {
      this._willUpdate = true;
      this.beforeUpdate();
      this.beforeRender();
      //fix null !== undefined
      if (this._customStyleContent != this.props.css) {
        this._customStyleContent = this.props.css;
        this._customStyleElement.textContent = this._customStyleContent;
      }
      this.attrsToProps(ignoreAttrs);

      var rendered = this.render(this.props, this.data, this.store);
      this.__hasChildren = this.__hasChildren || Object.prototype.toString.call(rendered) === '[object Array]' && rendered.length > 0;

      this.rootNode = diff(this.rootNode, rendered, null, null, this.shadowRoot);
      this._willUpdate = false;
      this.updated();
    };

    WeElement.prototype.removeAttribute = function removeAttribute(key) {
      _HTMLElement.prototype.removeAttribute.call(this, key);
      //Avoid executing removeAttribute methods before connectedCallback
      this._isInstalled && this.update();
    };

    WeElement.prototype.setAttribute = function setAttribute(key, val) {
      if (val && typeof val === 'object') {
        _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val));
      } else {
        _HTMLElement.prototype.setAttribute.call(this, key, val);
      }
      //Avoid executing setAttribute methods before connectedCallback
      this._isInstalled && this.update();
    };

    WeElement.prototype.pureRemoveAttribute = function pureRemoveAttribute(key) {
      _HTMLElement.prototype.removeAttribute.call(this, key);
    };

    WeElement.prototype.pureSetAttribute = function pureSetAttribute(key, val) {
      _HTMLElement.prototype.setAttribute.call(this, key, val);
    };

    WeElement.prototype.attrsToProps = function attrsToProps(ignoreAttrs) {
      var ele = this;
      if (ele.normalizedNodeName || ignoreAttrs) return;
      ele.props['css'] = ele.getAttribute('css');
      var attrs = this.constructor.propTypes;
      if (!attrs) return;
      Object.keys(attrs).forEach(function (key) {
        var type = attrs[key];
        var val = ele.getAttribute(hyphenate(key));
        if (val !== null) {
          switch (type) {
            case String:
              ele.props[key] = val;
              break;
            case Number:
              ele.props[key] = Number(val);
              break;
            case Boolean:
              if (val === 'false' || val === '0') {
                ele.props[key] = false;
              } else {
                ele.props[key] = true;
              }
              break;
            case Array:
            case Object:
              ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
              break;
          }
        } else {
          if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
            ele.props[key] = ele.constructor.defaultProps[key];
          } else {
            ele.props[key] = null;
          }
        }
      });
    };

    WeElement.prototype.fire = function fire(name, data) {
      this.dispatchEvent(new CustomEvent(name.replace(/-/g, '').toLowerCase(), { detail: data }));
    };

    WeElement.prototype.beforeInstall = function beforeInstall() {};

    WeElement.prototype.install = function install() {};

    WeElement.prototype.afterInstall = function afterInstall() {};

    WeElement.prototype.installed = function installed() {};

    WeElement.prototype.uninstall = function uninstall() {};

    WeElement.prototype.beforeUpdate = function beforeUpdate() {};

    WeElement.prototype.updated = function updated() {};

    WeElement.prototype.beforeRender = function beforeRender() {};

    WeElement.prototype.rendered = function rendered() {};

    WeElement.prototype.receiveProps = function receiveProps() {};

    WeElement.prototype.beforeObserve = function beforeObserve() {};

    WeElement.prototype.observed = function observed() {};

    return WeElement;
  }(HTMLElement), _class.is = 'WeElement', _temp);

  function render(vnode, parent, store) {
    parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
    if (store) {
      store.instances = [];
      extendStoreUpate(store);

      store.data = new JSONPatcherProxy(store.data).observe(false, function (patch) {
        var patchs = {};
        if (patch.op === 'remove') {
          // fix arr splice
          var kv = getArrayPatch(patch.path, store);
          patchs[kv.k] = kv.v;

          update(patchs, store);
        } else {
          var key = fixPath(patch.path);
          patchs[key] = patch.value;

          update(patchs, store);
        }
      });
      parent.store = store;
    }
    return diff(null, vnode, {}, false, parent, false);
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
          if (updateAll || _this.updateAll || instance.constructor.updatePath && needUpdate(patch, instance.constructor.updatePath) || instance._updatePath && needUpdate(patch, instance._updatePath)) {
            //update this.use
            if (instance.constructor.use) {
              instance.use = getUse(store.data, instance.constructor.use);
            } else if (instance.initUse) {
              instance.use = getUse(store.data, instance.initUse());
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

  function tag(name, pure) {
    return function (target) {
      target.pure = pure;
      define(name, target);
    };
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

  function getHost(ele) {
    var p = ele.parentNode;
    while (p) {
      if (p.host) {
        return p.host;
      } else if (p.shadowRoot && p.shadowRoot.host) {
        return p.shadowRoot.host;
      } else {
        p = p.parentNode;
      }
    }
  }

  function rpx(str) {
    return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
      return window.innerWidth * Number(b) / 750 + 'px';
    });
  }

  var _class$1, _temp$1;

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ModelView = (_temp$1 = _class$1 = function (_WeElement) {
    _inherits$2(ModelView, _WeElement);

    function ModelView() {
      _classCallCheck$2(this, ModelView);

      return _possibleConstructorReturn$2(this, _WeElement.apply(this, arguments));
    }

    ModelView.prototype.beforeInstall = function beforeInstall() {
      this.data = this.vm.data;
    };

    ModelView.prototype.observed = function observed() {
      this.vm.data = this.data;
    };

    return ModelView;
  }(WeElement), _class$1.observe = true, _class$1.mergeUpdate = false, _temp$1);

  /**
   * classNames based on https://github.com/JedWatson/classnames
   * by Jed Watson
   * Licensed under the MIT License
   * https://github.com/JedWatson/classnames/blob/master/LICENSE
   * modified by dntzhang
   */

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  function extractClass() {
    var _Array$prototype$slic = Array.prototype.slice.call(arguments, 0),
        props = _Array$prototype$slic[0],
        args = _Array$prototype$slic.slice(1);

    if (props.class) {
      args.unshift(props.class);
      delete props.class;
    } else if (props.className) {
      args.unshift(props.className);
      delete props.className;
    }
    if (args.length > 0) {
      return { class: classNames.apply(null, args) };
    }
  }

  function o(obj) {
    return JSON.stringify(obj);
  }

  var n=function(t,r,u,e){for(var p=1;p<r.length;p++){var s=r[p++],a="number"==typeof s?u[s]:s;1===r[p]?e[0]=a:2===r[p]?(e[1]=e[1]||{})[r[++p]]=a:3===r[p]?e[1]=Object.assign(e[1]||{},a):e.push(r[p]?t.apply(null,n(t,a,u,["",null])):a);}return e},t=function(n){for(var t,r,u=1,e="",p="",s=[0],a=function(n){1===u&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(n||e,0):3===u&&(n||e)?(s.push(n||e,1), u=2):2===u&&"..."===e&&n?s.push(n,3):2===u&&e&&!n?s.push(!0,2,e):4===u&&r&&(s.push(n||e,2,r), r=""), e="";},f=0;f<n.length;f++){f&&(1===u&&a(), a(f));for(var h=0;h<n[f].length;h++)t=n[f][h], 1===u?"<"===t?(a(), s=[s], u=3):e+=t:p?t===p?p="":e+=t:'"'===t||"'"===t?p=t:">"===t?(a(), u=1):u&&("="===t?(u=4, r=e, e=""):"/"===t?(a(), 3===u&&(s=s[0]), u=s, (s=s[0]).push(u,4), u=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(), u=2):e+=t);}return a(), s},r="function"==typeof Map,u=r?new Map:{},e=r?function(n){var r=u.get(n);return r||u.set(n,r=t(n)), r}:function(n){for(var r="",e=0;e<n.length;e++)r+=n[e].length+"-"+n[e];return u[r]||(u[r]=t(n))};function htm(t){var r=n(this,e(t),arguments,[]);return r.length>1?r:r[0]}

  var html = htm.bind(h);

  function createRef() {
    return {};
  }

  var Component = WeElement;
  var defineElement = define;
  var elements = options.mapping;

  var omi = {
    tag: tag,
    WeElement: WeElement,
    Component: Component,
    render: render,
    h: h,
    createElement: h,
    options: options,
    define: define,
    observe: observe,
    cloneElement: cloneElement,
    getHost: getHost,
    rpx: rpx,
    tick: tick,
    nextTick: nextTick,
    ModelView: ModelView,
    defineElement: defineElement,
    classNames: classNames,
    extractClass: extractClass,
    createRef: createRef,
    html: html,
    htm: htm,
    o: o,
    elements: elements
  };

  options.root.Omi = omi;
  options.root.omi = omi;
  options.root.Omi.version = '6.6.9';

  // List of valid entities

  /*eslint quotes:0*/
  var entities = {
    "Aacute":"\u00C1",
    "aacute":"\u00E1",
    "Abreve":"\u0102",
    "abreve":"\u0103",
    "ac":"\u223E",
    "acd":"\u223F",
    "acE":"\u223E\u0333",
    "Acirc":"\u00C2",
    "acirc":"\u00E2",
    "acute":"\u00B4",
    "Acy":"\u0410",
    "acy":"\u0430",
    "AElig":"\u00C6",
    "aelig":"\u00E6",
    "af":"\u2061",
    "Afr":"\uD835\uDD04",
    "afr":"\uD835\uDD1E",
    "Agrave":"\u00C0",
    "agrave":"\u00E0",
    "alefsym":"\u2135",
    "aleph":"\u2135",
    "Alpha":"\u0391",
    "alpha":"\u03B1",
    "Amacr":"\u0100",
    "amacr":"\u0101",
    "amalg":"\u2A3F",
    "AMP":"\u0026",
    "amp":"\u0026",
    "And":"\u2A53",
    "and":"\u2227",
    "andand":"\u2A55",
    "andd":"\u2A5C",
    "andslope":"\u2A58",
    "andv":"\u2A5A",
    "ang":"\u2220",
    "ange":"\u29A4",
    "angle":"\u2220",
    "angmsd":"\u2221",
    "angmsdaa":"\u29A8",
    "angmsdab":"\u29A9",
    "angmsdac":"\u29AA",
    "angmsdad":"\u29AB",
    "angmsdae":"\u29AC",
    "angmsdaf":"\u29AD",
    "angmsdag":"\u29AE",
    "angmsdah":"\u29AF",
    "angrt":"\u221F",
    "angrtvb":"\u22BE",
    "angrtvbd":"\u299D",
    "angsph":"\u2222",
    "angst":"\u00C5",
    "angzarr":"\u237C",
    "Aogon":"\u0104",
    "aogon":"\u0105",
    "Aopf":"\uD835\uDD38",
    "aopf":"\uD835\uDD52",
    "ap":"\u2248",
    "apacir":"\u2A6F",
    "apE":"\u2A70",
    "ape":"\u224A",
    "apid":"\u224B",
    "apos":"\u0027",
    "ApplyFunction":"\u2061",
    "approx":"\u2248",
    "approxeq":"\u224A",
    "Aring":"\u00C5",
    "aring":"\u00E5",
    "Ascr":"\uD835\uDC9C",
    "ascr":"\uD835\uDCB6",
    "Assign":"\u2254",
    "ast":"\u002A",
    "asymp":"\u2248",
    "asympeq":"\u224D",
    "Atilde":"\u00C3",
    "atilde":"\u00E3",
    "Auml":"\u00C4",
    "auml":"\u00E4",
    "awconint":"\u2233",
    "awint":"\u2A11",
    "backcong":"\u224C",
    "backepsilon":"\u03F6",
    "backprime":"\u2035",
    "backsim":"\u223D",
    "backsimeq":"\u22CD",
    "Backslash":"\u2216",
    "Barv":"\u2AE7",
    "barvee":"\u22BD",
    "Barwed":"\u2306",
    "barwed":"\u2305",
    "barwedge":"\u2305",
    "bbrk":"\u23B5",
    "bbrktbrk":"\u23B6",
    "bcong":"\u224C",
    "Bcy":"\u0411",
    "bcy":"\u0431",
    "bdquo":"\u201E",
    "becaus":"\u2235",
    "Because":"\u2235",
    "because":"\u2235",
    "bemptyv":"\u29B0",
    "bepsi":"\u03F6",
    "bernou":"\u212C",
    "Bernoullis":"\u212C",
    "Beta":"\u0392",
    "beta":"\u03B2",
    "beth":"\u2136",
    "between":"\u226C",
    "Bfr":"\uD835\uDD05",
    "bfr":"\uD835\uDD1F",
    "bigcap":"\u22C2",
    "bigcirc":"\u25EF",
    "bigcup":"\u22C3",
    "bigodot":"\u2A00",
    "bigoplus":"\u2A01",
    "bigotimes":"\u2A02",
    "bigsqcup":"\u2A06",
    "bigstar":"\u2605",
    "bigtriangledown":"\u25BD",
    "bigtriangleup":"\u25B3",
    "biguplus":"\u2A04",
    "bigvee":"\u22C1",
    "bigwedge":"\u22C0",
    "bkarow":"\u290D",
    "blacklozenge":"\u29EB",
    "blacksquare":"\u25AA",
    "blacktriangle":"\u25B4",
    "blacktriangledown":"\u25BE",
    "blacktriangleleft":"\u25C2",
    "blacktriangleright":"\u25B8",
    "blank":"\u2423",
    "blk12":"\u2592",
    "blk14":"\u2591",
    "blk34":"\u2593",
    "block":"\u2588",
    "bne":"\u003D\u20E5",
    "bnequiv":"\u2261\u20E5",
    "bNot":"\u2AED",
    "bnot":"\u2310",
    "Bopf":"\uD835\uDD39",
    "bopf":"\uD835\uDD53",
    "bot":"\u22A5",
    "bottom":"\u22A5",
    "bowtie":"\u22C8",
    "boxbox":"\u29C9",
    "boxDL":"\u2557",
    "boxDl":"\u2556",
    "boxdL":"\u2555",
    "boxdl":"\u2510",
    "boxDR":"\u2554",
    "boxDr":"\u2553",
    "boxdR":"\u2552",
    "boxdr":"\u250C",
    "boxH":"\u2550",
    "boxh":"\u2500",
    "boxHD":"\u2566",
    "boxHd":"\u2564",
    "boxhD":"\u2565",
    "boxhd":"\u252C",
    "boxHU":"\u2569",
    "boxHu":"\u2567",
    "boxhU":"\u2568",
    "boxhu":"\u2534",
    "boxminus":"\u229F",
    "boxplus":"\u229E",
    "boxtimes":"\u22A0",
    "boxUL":"\u255D",
    "boxUl":"\u255C",
    "boxuL":"\u255B",
    "boxul":"\u2518",
    "boxUR":"\u255A",
    "boxUr":"\u2559",
    "boxuR":"\u2558",
    "boxur":"\u2514",
    "boxV":"\u2551",
    "boxv":"\u2502",
    "boxVH":"\u256C",
    "boxVh":"\u256B",
    "boxvH":"\u256A",
    "boxvh":"\u253C",
    "boxVL":"\u2563",
    "boxVl":"\u2562",
    "boxvL":"\u2561",
    "boxvl":"\u2524",
    "boxVR":"\u2560",
    "boxVr":"\u255F",
    "boxvR":"\u255E",
    "boxvr":"\u251C",
    "bprime":"\u2035",
    "Breve":"\u02D8",
    "breve":"\u02D8",
    "brvbar":"\u00A6",
    "Bscr":"\u212C",
    "bscr":"\uD835\uDCB7",
    "bsemi":"\u204F",
    "bsim":"\u223D",
    "bsime":"\u22CD",
    "bsol":"\u005C",
    "bsolb":"\u29C5",
    "bsolhsub":"\u27C8",
    "bull":"\u2022",
    "bullet":"\u2022",
    "bump":"\u224E",
    "bumpE":"\u2AAE",
    "bumpe":"\u224F",
    "Bumpeq":"\u224E",
    "bumpeq":"\u224F",
    "Cacute":"\u0106",
    "cacute":"\u0107",
    "Cap":"\u22D2",
    "cap":"\u2229",
    "capand":"\u2A44",
    "capbrcup":"\u2A49",
    "capcap":"\u2A4B",
    "capcup":"\u2A47",
    "capdot":"\u2A40",
    "CapitalDifferentialD":"\u2145",
    "caps":"\u2229\uFE00",
    "caret":"\u2041",
    "caron":"\u02C7",
    "Cayleys":"\u212D",
    "ccaps":"\u2A4D",
    "Ccaron":"\u010C",
    "ccaron":"\u010D",
    "Ccedil":"\u00C7",
    "ccedil":"\u00E7",
    "Ccirc":"\u0108",
    "ccirc":"\u0109",
    "Cconint":"\u2230",
    "ccups":"\u2A4C",
    "ccupssm":"\u2A50",
    "Cdot":"\u010A",
    "cdot":"\u010B",
    "cedil":"\u00B8",
    "Cedilla":"\u00B8",
    "cemptyv":"\u29B2",
    "cent":"\u00A2",
    "CenterDot":"\u00B7",
    "centerdot":"\u00B7",
    "Cfr":"\u212D",
    "cfr":"\uD835\uDD20",
    "CHcy":"\u0427",
    "chcy":"\u0447",
    "check":"\u2713",
    "checkmark":"\u2713",
    "Chi":"\u03A7",
    "chi":"\u03C7",
    "cir":"\u25CB",
    "circ":"\u02C6",
    "circeq":"\u2257",
    "circlearrowleft":"\u21BA",
    "circlearrowright":"\u21BB",
    "circledast":"\u229B",
    "circledcirc":"\u229A",
    "circleddash":"\u229D",
    "CircleDot":"\u2299",
    "circledR":"\u00AE",
    "circledS":"\u24C8",
    "CircleMinus":"\u2296",
    "CirclePlus":"\u2295",
    "CircleTimes":"\u2297",
    "cirE":"\u29C3",
    "cire":"\u2257",
    "cirfnint":"\u2A10",
    "cirmid":"\u2AEF",
    "cirscir":"\u29C2",
    "ClockwiseContourIntegral":"\u2232",
    "CloseCurlyDoubleQuote":"\u201D",
    "CloseCurlyQuote":"\u2019",
    "clubs":"\u2663",
    "clubsuit":"\u2663",
    "Colon":"\u2237",
    "colon":"\u003A",
    "Colone":"\u2A74",
    "colone":"\u2254",
    "coloneq":"\u2254",
    "comma":"\u002C",
    "commat":"\u0040",
    "comp":"\u2201",
    "compfn":"\u2218",
    "complement":"\u2201",
    "complexes":"\u2102",
    "cong":"\u2245",
    "congdot":"\u2A6D",
    "Congruent":"\u2261",
    "Conint":"\u222F",
    "conint":"\u222E",
    "ContourIntegral":"\u222E",
    "Copf":"\u2102",
    "copf":"\uD835\uDD54",
    "coprod":"\u2210",
    "Coproduct":"\u2210",
    "COPY":"\u00A9",
    "copy":"\u00A9",
    "copysr":"\u2117",
    "CounterClockwiseContourIntegral":"\u2233",
    "crarr":"\u21B5",
    "Cross":"\u2A2F",
    "cross":"\u2717",
    "Cscr":"\uD835\uDC9E",
    "cscr":"\uD835\uDCB8",
    "csub":"\u2ACF",
    "csube":"\u2AD1",
    "csup":"\u2AD0",
    "csupe":"\u2AD2",
    "ctdot":"\u22EF",
    "cudarrl":"\u2938",
    "cudarrr":"\u2935",
    "cuepr":"\u22DE",
    "cuesc":"\u22DF",
    "cularr":"\u21B6",
    "cularrp":"\u293D",
    "Cup":"\u22D3",
    "cup":"\u222A",
    "cupbrcap":"\u2A48",
    "CupCap":"\u224D",
    "cupcap":"\u2A46",
    "cupcup":"\u2A4A",
    "cupdot":"\u228D",
    "cupor":"\u2A45",
    "cups":"\u222A\uFE00",
    "curarr":"\u21B7",
    "curarrm":"\u293C",
    "curlyeqprec":"\u22DE",
    "curlyeqsucc":"\u22DF",
    "curlyvee":"\u22CE",
    "curlywedge":"\u22CF",
    "curren":"\u00A4",
    "curvearrowleft":"\u21B6",
    "curvearrowright":"\u21B7",
    "cuvee":"\u22CE",
    "cuwed":"\u22CF",
    "cwconint":"\u2232",
    "cwint":"\u2231",
    "cylcty":"\u232D",
    "Dagger":"\u2021",
    "dagger":"\u2020",
    "daleth":"\u2138",
    "Darr":"\u21A1",
    "dArr":"\u21D3",
    "darr":"\u2193",
    "dash":"\u2010",
    "Dashv":"\u2AE4",
    "dashv":"\u22A3",
    "dbkarow":"\u290F",
    "dblac":"\u02DD",
    "Dcaron":"\u010E",
    "dcaron":"\u010F",
    "Dcy":"\u0414",
    "dcy":"\u0434",
    "DD":"\u2145",
    "dd":"\u2146",
    "ddagger":"\u2021",
    "ddarr":"\u21CA",
    "DDotrahd":"\u2911",
    "ddotseq":"\u2A77",
    "deg":"\u00B0",
    "Del":"\u2207",
    "Delta":"\u0394",
    "delta":"\u03B4",
    "demptyv":"\u29B1",
    "dfisht":"\u297F",
    "Dfr":"\uD835\uDD07",
    "dfr":"\uD835\uDD21",
    "dHar":"\u2965",
    "dharl":"\u21C3",
    "dharr":"\u21C2",
    "DiacriticalAcute":"\u00B4",
    "DiacriticalDot":"\u02D9",
    "DiacriticalDoubleAcute":"\u02DD",
    "DiacriticalGrave":"\u0060",
    "DiacriticalTilde":"\u02DC",
    "diam":"\u22C4",
    "Diamond":"\u22C4",
    "diamond":"\u22C4",
    "diamondsuit":"\u2666",
    "diams":"\u2666",
    "die":"\u00A8",
    "DifferentialD":"\u2146",
    "digamma":"\u03DD",
    "disin":"\u22F2",
    "div":"\u00F7",
    "divide":"\u00F7",
    "divideontimes":"\u22C7",
    "divonx":"\u22C7",
    "DJcy":"\u0402",
    "djcy":"\u0452",
    "dlcorn":"\u231E",
    "dlcrop":"\u230D",
    "dollar":"\u0024",
    "Dopf":"\uD835\uDD3B",
    "dopf":"\uD835\uDD55",
    "Dot":"\u00A8",
    "dot":"\u02D9",
    "DotDot":"\u20DC",
    "doteq":"\u2250",
    "doteqdot":"\u2251",
    "DotEqual":"\u2250",
    "dotminus":"\u2238",
    "dotplus":"\u2214",
    "dotsquare":"\u22A1",
    "doublebarwedge":"\u2306",
    "DoubleContourIntegral":"\u222F",
    "DoubleDot":"\u00A8",
    "DoubleDownArrow":"\u21D3",
    "DoubleLeftArrow":"\u21D0",
    "DoubleLeftRightArrow":"\u21D4",
    "DoubleLeftTee":"\u2AE4",
    "DoubleLongLeftArrow":"\u27F8",
    "DoubleLongLeftRightArrow":"\u27FA",
    "DoubleLongRightArrow":"\u27F9",
    "DoubleRightArrow":"\u21D2",
    "DoubleRightTee":"\u22A8",
    "DoubleUpArrow":"\u21D1",
    "DoubleUpDownArrow":"\u21D5",
    "DoubleVerticalBar":"\u2225",
    "DownArrow":"\u2193",
    "Downarrow":"\u21D3",
    "downarrow":"\u2193",
    "DownArrowBar":"\u2913",
    "DownArrowUpArrow":"\u21F5",
    "DownBreve":"\u0311",
    "downdownarrows":"\u21CA",
    "downharpoonleft":"\u21C3",
    "downharpoonright":"\u21C2",
    "DownLeftRightVector":"\u2950",
    "DownLeftTeeVector":"\u295E",
    "DownLeftVector":"\u21BD",
    "DownLeftVectorBar":"\u2956",
    "DownRightTeeVector":"\u295F",
    "DownRightVector":"\u21C1",
    "DownRightVectorBar":"\u2957",
    "DownTee":"\u22A4",
    "DownTeeArrow":"\u21A7",
    "drbkarow":"\u2910",
    "drcorn":"\u231F",
    "drcrop":"\u230C",
    "Dscr":"\uD835\uDC9F",
    "dscr":"\uD835\uDCB9",
    "DScy":"\u0405",
    "dscy":"\u0455",
    "dsol":"\u29F6",
    "Dstrok":"\u0110",
    "dstrok":"\u0111",
    "dtdot":"\u22F1",
    "dtri":"\u25BF",
    "dtrif":"\u25BE",
    "duarr":"\u21F5",
    "duhar":"\u296F",
    "dwangle":"\u29A6",
    "DZcy":"\u040F",
    "dzcy":"\u045F",
    "dzigrarr":"\u27FF",
    "Eacute":"\u00C9",
    "eacute":"\u00E9",
    "easter":"\u2A6E",
    "Ecaron":"\u011A",
    "ecaron":"\u011B",
    "ecir":"\u2256",
    "Ecirc":"\u00CA",
    "ecirc":"\u00EA",
    "ecolon":"\u2255",
    "Ecy":"\u042D",
    "ecy":"\u044D",
    "eDDot":"\u2A77",
    "Edot":"\u0116",
    "eDot":"\u2251",
    "edot":"\u0117",
    "ee":"\u2147",
    "efDot":"\u2252",
    "Efr":"\uD835\uDD08",
    "efr":"\uD835\uDD22",
    "eg":"\u2A9A",
    "Egrave":"\u00C8",
    "egrave":"\u00E8",
    "egs":"\u2A96",
    "egsdot":"\u2A98",
    "el":"\u2A99",
    "Element":"\u2208",
    "elinters":"\u23E7",
    "ell":"\u2113",
    "els":"\u2A95",
    "elsdot":"\u2A97",
    "Emacr":"\u0112",
    "emacr":"\u0113",
    "empty":"\u2205",
    "emptyset":"\u2205",
    "EmptySmallSquare":"\u25FB",
    "emptyv":"\u2205",
    "EmptyVerySmallSquare":"\u25AB",
    "emsp":"\u2003",
    "emsp13":"\u2004",
    "emsp14":"\u2005",
    "ENG":"\u014A",
    "eng":"\u014B",
    "ensp":"\u2002",
    "Eogon":"\u0118",
    "eogon":"\u0119",
    "Eopf":"\uD835\uDD3C",
    "eopf":"\uD835\uDD56",
    "epar":"\u22D5",
    "eparsl":"\u29E3",
    "eplus":"\u2A71",
    "epsi":"\u03B5",
    "Epsilon":"\u0395",
    "epsilon":"\u03B5",
    "epsiv":"\u03F5",
    "eqcirc":"\u2256",
    "eqcolon":"\u2255",
    "eqsim":"\u2242",
    "eqslantgtr":"\u2A96",
    "eqslantless":"\u2A95",
    "Equal":"\u2A75",
    "equals":"\u003D",
    "EqualTilde":"\u2242",
    "equest":"\u225F",
    "Equilibrium":"\u21CC",
    "equiv":"\u2261",
    "equivDD":"\u2A78",
    "eqvparsl":"\u29E5",
    "erarr":"\u2971",
    "erDot":"\u2253",
    "Escr":"\u2130",
    "escr":"\u212F",
    "esdot":"\u2250",
    "Esim":"\u2A73",
    "esim":"\u2242",
    "Eta":"\u0397",
    "eta":"\u03B7",
    "ETH":"\u00D0",
    "eth":"\u00F0",
    "Euml":"\u00CB",
    "euml":"\u00EB",
    "euro":"\u20AC",
    "excl":"\u0021",
    "exist":"\u2203",
    "Exists":"\u2203",
    "expectation":"\u2130",
    "ExponentialE":"\u2147",
    "exponentiale":"\u2147",
    "fallingdotseq":"\u2252",
    "Fcy":"\u0424",
    "fcy":"\u0444",
    "female":"\u2640",
    "ffilig":"\uFB03",
    "fflig":"\uFB00",
    "ffllig":"\uFB04",
    "Ffr":"\uD835\uDD09",
    "ffr":"\uD835\uDD23",
    "filig":"\uFB01",
    "FilledSmallSquare":"\u25FC",
    "FilledVerySmallSquare":"\u25AA",
    "fjlig":"\u0066\u006A",
    "flat":"\u266D",
    "fllig":"\uFB02",
    "fltns":"\u25B1",
    "fnof":"\u0192",
    "Fopf":"\uD835\uDD3D",
    "fopf":"\uD835\uDD57",
    "ForAll":"\u2200",
    "forall":"\u2200",
    "fork":"\u22D4",
    "forkv":"\u2AD9",
    "Fouriertrf":"\u2131",
    "fpartint":"\u2A0D",
    "frac12":"\u00BD",
    "frac13":"\u2153",
    "frac14":"\u00BC",
    "frac15":"\u2155",
    "frac16":"\u2159",
    "frac18":"\u215B",
    "frac23":"\u2154",
    "frac25":"\u2156",
    "frac34":"\u00BE",
    "frac35":"\u2157",
    "frac38":"\u215C",
    "frac45":"\u2158",
    "frac56":"\u215A",
    "frac58":"\u215D",
    "frac78":"\u215E",
    "frasl":"\u2044",
    "frown":"\u2322",
    "Fscr":"\u2131",
    "fscr":"\uD835\uDCBB",
    "gacute":"\u01F5",
    "Gamma":"\u0393",
    "gamma":"\u03B3",
    "Gammad":"\u03DC",
    "gammad":"\u03DD",
    "gap":"\u2A86",
    "Gbreve":"\u011E",
    "gbreve":"\u011F",
    "Gcedil":"\u0122",
    "Gcirc":"\u011C",
    "gcirc":"\u011D",
    "Gcy":"\u0413",
    "gcy":"\u0433",
    "Gdot":"\u0120",
    "gdot":"\u0121",
    "gE":"\u2267",
    "ge":"\u2265",
    "gEl":"\u2A8C",
    "gel":"\u22DB",
    "geq":"\u2265",
    "geqq":"\u2267",
    "geqslant":"\u2A7E",
    "ges":"\u2A7E",
    "gescc":"\u2AA9",
    "gesdot":"\u2A80",
    "gesdoto":"\u2A82",
    "gesdotol":"\u2A84",
    "gesl":"\u22DB\uFE00",
    "gesles":"\u2A94",
    "Gfr":"\uD835\uDD0A",
    "gfr":"\uD835\uDD24",
    "Gg":"\u22D9",
    "gg":"\u226B",
    "ggg":"\u22D9",
    "gimel":"\u2137",
    "GJcy":"\u0403",
    "gjcy":"\u0453",
    "gl":"\u2277",
    "gla":"\u2AA5",
    "glE":"\u2A92",
    "glj":"\u2AA4",
    "gnap":"\u2A8A",
    "gnapprox":"\u2A8A",
    "gnE":"\u2269",
    "gne":"\u2A88",
    "gneq":"\u2A88",
    "gneqq":"\u2269",
    "gnsim":"\u22E7",
    "Gopf":"\uD835\uDD3E",
    "gopf":"\uD835\uDD58",
    "grave":"\u0060",
    "GreaterEqual":"\u2265",
    "GreaterEqualLess":"\u22DB",
    "GreaterFullEqual":"\u2267",
    "GreaterGreater":"\u2AA2",
    "GreaterLess":"\u2277",
    "GreaterSlantEqual":"\u2A7E",
    "GreaterTilde":"\u2273",
    "Gscr":"\uD835\uDCA2",
    "gscr":"\u210A",
    "gsim":"\u2273",
    "gsime":"\u2A8E",
    "gsiml":"\u2A90",
    "GT":"\u003E",
    "Gt":"\u226B",
    "gt":"\u003E",
    "gtcc":"\u2AA7",
    "gtcir":"\u2A7A",
    "gtdot":"\u22D7",
    "gtlPar":"\u2995",
    "gtquest":"\u2A7C",
    "gtrapprox":"\u2A86",
    "gtrarr":"\u2978",
    "gtrdot":"\u22D7",
    "gtreqless":"\u22DB",
    "gtreqqless":"\u2A8C",
    "gtrless":"\u2277",
    "gtrsim":"\u2273",
    "gvertneqq":"\u2269\uFE00",
    "gvnE":"\u2269\uFE00",
    "Hacek":"\u02C7",
    "hairsp":"\u200A",
    "half":"\u00BD",
    "hamilt":"\u210B",
    "HARDcy":"\u042A",
    "hardcy":"\u044A",
    "hArr":"\u21D4",
    "harr":"\u2194",
    "harrcir":"\u2948",
    "harrw":"\u21AD",
    "Hat":"\u005E",
    "hbar":"\u210F",
    "Hcirc":"\u0124",
    "hcirc":"\u0125",
    "hearts":"\u2665",
    "heartsuit":"\u2665",
    "hellip":"\u2026",
    "hercon":"\u22B9",
    "Hfr":"\u210C",
    "hfr":"\uD835\uDD25",
    "HilbertSpace":"\u210B",
    "hksearow":"\u2925",
    "hkswarow":"\u2926",
    "hoarr":"\u21FF",
    "homtht":"\u223B",
    "hookleftarrow":"\u21A9",
    "hookrightarrow":"\u21AA",
    "Hopf":"\u210D",
    "hopf":"\uD835\uDD59",
    "horbar":"\u2015",
    "HorizontalLine":"\u2500",
    "Hscr":"\u210B",
    "hscr":"\uD835\uDCBD",
    "hslash":"\u210F",
    "Hstrok":"\u0126",
    "hstrok":"\u0127",
    "HumpDownHump":"\u224E",
    "HumpEqual":"\u224F",
    "hybull":"\u2043",
    "hyphen":"\u2010",
    "Iacute":"\u00CD",
    "iacute":"\u00ED",
    "ic":"\u2063",
    "Icirc":"\u00CE",
    "icirc":"\u00EE",
    "Icy":"\u0418",
    "icy":"\u0438",
    "Idot":"\u0130",
    "IEcy":"\u0415",
    "iecy":"\u0435",
    "iexcl":"\u00A1",
    "iff":"\u21D4",
    "Ifr":"\u2111",
    "ifr":"\uD835\uDD26",
    "Igrave":"\u00CC",
    "igrave":"\u00EC",
    "ii":"\u2148",
    "iiiint":"\u2A0C",
    "iiint":"\u222D",
    "iinfin":"\u29DC",
    "iiota":"\u2129",
    "IJlig":"\u0132",
    "ijlig":"\u0133",
    "Im":"\u2111",
    "Imacr":"\u012A",
    "imacr":"\u012B",
    "image":"\u2111",
    "ImaginaryI":"\u2148",
    "imagline":"\u2110",
    "imagpart":"\u2111",
    "imath":"\u0131",
    "imof":"\u22B7",
    "imped":"\u01B5",
    "Implies":"\u21D2",
    "in":"\u2208",
    "incare":"\u2105",
    "infin":"\u221E",
    "infintie":"\u29DD",
    "inodot":"\u0131",
    "Int":"\u222C",
    "int":"\u222B",
    "intcal":"\u22BA",
    "integers":"\u2124",
    "Integral":"\u222B",
    "intercal":"\u22BA",
    "Intersection":"\u22C2",
    "intlarhk":"\u2A17",
    "intprod":"\u2A3C",
    "InvisibleComma":"\u2063",
    "InvisibleTimes":"\u2062",
    "IOcy":"\u0401",
    "iocy":"\u0451",
    "Iogon":"\u012E",
    "iogon":"\u012F",
    "Iopf":"\uD835\uDD40",
    "iopf":"\uD835\uDD5A",
    "Iota":"\u0399",
    "iota":"\u03B9",
    "iprod":"\u2A3C",
    "iquest":"\u00BF",
    "Iscr":"\u2110",
    "iscr":"\uD835\uDCBE",
    "isin":"\u2208",
    "isindot":"\u22F5",
    "isinE":"\u22F9",
    "isins":"\u22F4",
    "isinsv":"\u22F3",
    "isinv":"\u2208",
    "it":"\u2062",
    "Itilde":"\u0128",
    "itilde":"\u0129",
    "Iukcy":"\u0406",
    "iukcy":"\u0456",
    "Iuml":"\u00CF",
    "iuml":"\u00EF",
    "Jcirc":"\u0134",
    "jcirc":"\u0135",
    "Jcy":"\u0419",
    "jcy":"\u0439",
    "Jfr":"\uD835\uDD0D",
    "jfr":"\uD835\uDD27",
    "jmath":"\u0237",
    "Jopf":"\uD835\uDD41",
    "jopf":"\uD835\uDD5B",
    "Jscr":"\uD835\uDCA5",
    "jscr":"\uD835\uDCBF",
    "Jsercy":"\u0408",
    "jsercy":"\u0458",
    "Jukcy":"\u0404",
    "jukcy":"\u0454",
    "Kappa":"\u039A",
    "kappa":"\u03BA",
    "kappav":"\u03F0",
    "Kcedil":"\u0136",
    "kcedil":"\u0137",
    "Kcy":"\u041A",
    "kcy":"\u043A",
    "Kfr":"\uD835\uDD0E",
    "kfr":"\uD835\uDD28",
    "kgreen":"\u0138",
    "KHcy":"\u0425",
    "khcy":"\u0445",
    "KJcy":"\u040C",
    "kjcy":"\u045C",
    "Kopf":"\uD835\uDD42",
    "kopf":"\uD835\uDD5C",
    "Kscr":"\uD835\uDCA6",
    "kscr":"\uD835\uDCC0",
    "lAarr":"\u21DA",
    "Lacute":"\u0139",
    "lacute":"\u013A",
    "laemptyv":"\u29B4",
    "lagran":"\u2112",
    "Lambda":"\u039B",
    "lambda":"\u03BB",
    "Lang":"\u27EA",
    "lang":"\u27E8",
    "langd":"\u2991",
    "langle":"\u27E8",
    "lap":"\u2A85",
    "Laplacetrf":"\u2112",
    "laquo":"\u00AB",
    "Larr":"\u219E",
    "lArr":"\u21D0",
    "larr":"\u2190",
    "larrb":"\u21E4",
    "larrbfs":"\u291F",
    "larrfs":"\u291D",
    "larrhk":"\u21A9",
    "larrlp":"\u21AB",
    "larrpl":"\u2939",
    "larrsim":"\u2973",
    "larrtl":"\u21A2",
    "lat":"\u2AAB",
    "lAtail":"\u291B",
    "latail":"\u2919",
    "late":"\u2AAD",
    "lates":"\u2AAD\uFE00",
    "lBarr":"\u290E",
    "lbarr":"\u290C",
    "lbbrk":"\u2772",
    "lbrace":"\u007B",
    "lbrack":"\u005B",
    "lbrke":"\u298B",
    "lbrksld":"\u298F",
    "lbrkslu":"\u298D",
    "Lcaron":"\u013D",
    "lcaron":"\u013E",
    "Lcedil":"\u013B",
    "lcedil":"\u013C",
    "lceil":"\u2308",
    "lcub":"\u007B",
    "Lcy":"\u041B",
    "lcy":"\u043B",
    "ldca":"\u2936",
    "ldquo":"\u201C",
    "ldquor":"\u201E",
    "ldrdhar":"\u2967",
    "ldrushar":"\u294B",
    "ldsh":"\u21B2",
    "lE":"\u2266",
    "le":"\u2264",
    "LeftAngleBracket":"\u27E8",
    "LeftArrow":"\u2190",
    "Leftarrow":"\u21D0",
    "leftarrow":"\u2190",
    "LeftArrowBar":"\u21E4",
    "LeftArrowRightArrow":"\u21C6",
    "leftarrowtail":"\u21A2",
    "LeftCeiling":"\u2308",
    "LeftDoubleBracket":"\u27E6",
    "LeftDownTeeVector":"\u2961",
    "LeftDownVector":"\u21C3",
    "LeftDownVectorBar":"\u2959",
    "LeftFloor":"\u230A",
    "leftharpoondown":"\u21BD",
    "leftharpoonup":"\u21BC",
    "leftleftarrows":"\u21C7",
    "LeftRightArrow":"\u2194",
    "Leftrightarrow":"\u21D4",
    "leftrightarrow":"\u2194",
    "leftrightarrows":"\u21C6",
    "leftrightharpoons":"\u21CB",
    "leftrightsquigarrow":"\u21AD",
    "LeftRightVector":"\u294E",
    "LeftTee":"\u22A3",
    "LeftTeeArrow":"\u21A4",
    "LeftTeeVector":"\u295A",
    "leftthreetimes":"\u22CB",
    "LeftTriangle":"\u22B2",
    "LeftTriangleBar":"\u29CF",
    "LeftTriangleEqual":"\u22B4",
    "LeftUpDownVector":"\u2951",
    "LeftUpTeeVector":"\u2960",
    "LeftUpVector":"\u21BF",
    "LeftUpVectorBar":"\u2958",
    "LeftVector":"\u21BC",
    "LeftVectorBar":"\u2952",
    "lEg":"\u2A8B",
    "leg":"\u22DA",
    "leq":"\u2264",
    "leqq":"\u2266",
    "leqslant":"\u2A7D",
    "les":"\u2A7D",
    "lescc":"\u2AA8",
    "lesdot":"\u2A7F",
    "lesdoto":"\u2A81",
    "lesdotor":"\u2A83",
    "lesg":"\u22DA\uFE00",
    "lesges":"\u2A93",
    "lessapprox":"\u2A85",
    "lessdot":"\u22D6",
    "lesseqgtr":"\u22DA",
    "lesseqqgtr":"\u2A8B",
    "LessEqualGreater":"\u22DA",
    "LessFullEqual":"\u2266",
    "LessGreater":"\u2276",
    "lessgtr":"\u2276",
    "LessLess":"\u2AA1",
    "lesssim":"\u2272",
    "LessSlantEqual":"\u2A7D",
    "LessTilde":"\u2272",
    "lfisht":"\u297C",
    "lfloor":"\u230A",
    "Lfr":"\uD835\uDD0F",
    "lfr":"\uD835\uDD29",
    "lg":"\u2276",
    "lgE":"\u2A91",
    "lHar":"\u2962",
    "lhard":"\u21BD",
    "lharu":"\u21BC",
    "lharul":"\u296A",
    "lhblk":"\u2584",
    "LJcy":"\u0409",
    "ljcy":"\u0459",
    "Ll":"\u22D8",
    "ll":"\u226A",
    "llarr":"\u21C7",
    "llcorner":"\u231E",
    "Lleftarrow":"\u21DA",
    "llhard":"\u296B",
    "lltri":"\u25FA",
    "Lmidot":"\u013F",
    "lmidot":"\u0140",
    "lmoust":"\u23B0",
    "lmoustache":"\u23B0",
    "lnap":"\u2A89",
    "lnapprox":"\u2A89",
    "lnE":"\u2268",
    "lne":"\u2A87",
    "lneq":"\u2A87",
    "lneqq":"\u2268",
    "lnsim":"\u22E6",
    "loang":"\u27EC",
    "loarr":"\u21FD",
    "lobrk":"\u27E6",
    "LongLeftArrow":"\u27F5",
    "Longleftarrow":"\u27F8",
    "longleftarrow":"\u27F5",
    "LongLeftRightArrow":"\u27F7",
    "Longleftrightarrow":"\u27FA",
    "longleftrightarrow":"\u27F7",
    "longmapsto":"\u27FC",
    "LongRightArrow":"\u27F6",
    "Longrightarrow":"\u27F9",
    "longrightarrow":"\u27F6",
    "looparrowleft":"\u21AB",
    "looparrowright":"\u21AC",
    "lopar":"\u2985",
    "Lopf":"\uD835\uDD43",
    "lopf":"\uD835\uDD5D",
    "loplus":"\u2A2D",
    "lotimes":"\u2A34",
    "lowast":"\u2217",
    "lowbar":"\u005F",
    "LowerLeftArrow":"\u2199",
    "LowerRightArrow":"\u2198",
    "loz":"\u25CA",
    "lozenge":"\u25CA",
    "lozf":"\u29EB",
    "lpar":"\u0028",
    "lparlt":"\u2993",
    "lrarr":"\u21C6",
    "lrcorner":"\u231F",
    "lrhar":"\u21CB",
    "lrhard":"\u296D",
    "lrm":"\u200E",
    "lrtri":"\u22BF",
    "lsaquo":"\u2039",
    "Lscr":"\u2112",
    "lscr":"\uD835\uDCC1",
    "Lsh":"\u21B0",
    "lsh":"\u21B0",
    "lsim":"\u2272",
    "lsime":"\u2A8D",
    "lsimg":"\u2A8F",
    "lsqb":"\u005B",
    "lsquo":"\u2018",
    "lsquor":"\u201A",
    "Lstrok":"\u0141",
    "lstrok":"\u0142",
    "LT":"\u003C",
    "Lt":"\u226A",
    "lt":"\u003C",
    "ltcc":"\u2AA6",
    "ltcir":"\u2A79",
    "ltdot":"\u22D6",
    "lthree":"\u22CB",
    "ltimes":"\u22C9",
    "ltlarr":"\u2976",
    "ltquest":"\u2A7B",
    "ltri":"\u25C3",
    "ltrie":"\u22B4",
    "ltrif":"\u25C2",
    "ltrPar":"\u2996",
    "lurdshar":"\u294A",
    "luruhar":"\u2966",
    "lvertneqq":"\u2268\uFE00",
    "lvnE":"\u2268\uFE00",
    "macr":"\u00AF",
    "male":"\u2642",
    "malt":"\u2720",
    "maltese":"\u2720",
    "Map":"\u2905",
    "map":"\u21A6",
    "mapsto":"\u21A6",
    "mapstodown":"\u21A7",
    "mapstoleft":"\u21A4",
    "mapstoup":"\u21A5",
    "marker":"\u25AE",
    "mcomma":"\u2A29",
    "Mcy":"\u041C",
    "mcy":"\u043C",
    "mdash":"\u2014",
    "mDDot":"\u223A",
    "measuredangle":"\u2221",
    "MediumSpace":"\u205F",
    "Mellintrf":"\u2133",
    "Mfr":"\uD835\uDD10",
    "mfr":"\uD835\uDD2A",
    "mho":"\u2127",
    "micro":"\u00B5",
    "mid":"\u2223",
    "midast":"\u002A",
    "midcir":"\u2AF0",
    "middot":"\u00B7",
    "minus":"\u2212",
    "minusb":"\u229F",
    "minusd":"\u2238",
    "minusdu":"\u2A2A",
    "MinusPlus":"\u2213",
    "mlcp":"\u2ADB",
    "mldr":"\u2026",
    "mnplus":"\u2213",
    "models":"\u22A7",
    "Mopf":"\uD835\uDD44",
    "mopf":"\uD835\uDD5E",
    "mp":"\u2213",
    "Mscr":"\u2133",
    "mscr":"\uD835\uDCC2",
    "mstpos":"\u223E",
    "Mu":"\u039C",
    "mu":"\u03BC",
    "multimap":"\u22B8",
    "mumap":"\u22B8",
    "nabla":"\u2207",
    "Nacute":"\u0143",
    "nacute":"\u0144",
    "nang":"\u2220\u20D2",
    "nap":"\u2249",
    "napE":"\u2A70\u0338",
    "napid":"\u224B\u0338",
    "napos":"\u0149",
    "napprox":"\u2249",
    "natur":"\u266E",
    "natural":"\u266E",
    "naturals":"\u2115",
    "nbsp":"\u00A0",
    "nbump":"\u224E\u0338",
    "nbumpe":"\u224F\u0338",
    "ncap":"\u2A43",
    "Ncaron":"\u0147",
    "ncaron":"\u0148",
    "Ncedil":"\u0145",
    "ncedil":"\u0146",
    "ncong":"\u2247",
    "ncongdot":"\u2A6D\u0338",
    "ncup":"\u2A42",
    "Ncy":"\u041D",
    "ncy":"\u043D",
    "ndash":"\u2013",
    "ne":"\u2260",
    "nearhk":"\u2924",
    "neArr":"\u21D7",
    "nearr":"\u2197",
    "nearrow":"\u2197",
    "nedot":"\u2250\u0338",
    "NegativeMediumSpace":"\u200B",
    "NegativeThickSpace":"\u200B",
    "NegativeThinSpace":"\u200B",
    "NegativeVeryThinSpace":"\u200B",
    "nequiv":"\u2262",
    "nesear":"\u2928",
    "nesim":"\u2242\u0338",
    "NestedGreaterGreater":"\u226B",
    "NestedLessLess":"\u226A",
    "NewLine":"\u000A",
    "nexist":"\u2204",
    "nexists":"\u2204",
    "Nfr":"\uD835\uDD11",
    "nfr":"\uD835\uDD2B",
    "ngE":"\u2267\u0338",
    "nge":"\u2271",
    "ngeq":"\u2271",
    "ngeqq":"\u2267\u0338",
    "ngeqslant":"\u2A7E\u0338",
    "nges":"\u2A7E\u0338",
    "nGg":"\u22D9\u0338",
    "ngsim":"\u2275",
    "nGt":"\u226B\u20D2",
    "ngt":"\u226F",
    "ngtr":"\u226F",
    "nGtv":"\u226B\u0338",
    "nhArr":"\u21CE",
    "nharr":"\u21AE",
    "nhpar":"\u2AF2",
    "ni":"\u220B",
    "nis":"\u22FC",
    "nisd":"\u22FA",
    "niv":"\u220B",
    "NJcy":"\u040A",
    "njcy":"\u045A",
    "nlArr":"\u21CD",
    "nlarr":"\u219A",
    "nldr":"\u2025",
    "nlE":"\u2266\u0338",
    "nle":"\u2270",
    "nLeftarrow":"\u21CD",
    "nleftarrow":"\u219A",
    "nLeftrightarrow":"\u21CE",
    "nleftrightarrow":"\u21AE",
    "nleq":"\u2270",
    "nleqq":"\u2266\u0338",
    "nleqslant":"\u2A7D\u0338",
    "nles":"\u2A7D\u0338",
    "nless":"\u226E",
    "nLl":"\u22D8\u0338",
    "nlsim":"\u2274",
    "nLt":"\u226A\u20D2",
    "nlt":"\u226E",
    "nltri":"\u22EA",
    "nltrie":"\u22EC",
    "nLtv":"\u226A\u0338",
    "nmid":"\u2224",
    "NoBreak":"\u2060",
    "NonBreakingSpace":"\u00A0",
    "Nopf":"\u2115",
    "nopf":"\uD835\uDD5F",
    "Not":"\u2AEC",
    "not":"\u00AC",
    "NotCongruent":"\u2262",
    "NotCupCap":"\u226D",
    "NotDoubleVerticalBar":"\u2226",
    "NotElement":"\u2209",
    "NotEqual":"\u2260",
    "NotEqualTilde":"\u2242\u0338",
    "NotExists":"\u2204",
    "NotGreater":"\u226F",
    "NotGreaterEqual":"\u2271",
    "NotGreaterFullEqual":"\u2267\u0338",
    "NotGreaterGreater":"\u226B\u0338",
    "NotGreaterLess":"\u2279",
    "NotGreaterSlantEqual":"\u2A7E\u0338",
    "NotGreaterTilde":"\u2275",
    "NotHumpDownHump":"\u224E\u0338",
    "NotHumpEqual":"\u224F\u0338",
    "notin":"\u2209",
    "notindot":"\u22F5\u0338",
    "notinE":"\u22F9\u0338",
    "notinva":"\u2209",
    "notinvb":"\u22F7",
    "notinvc":"\u22F6",
    "NotLeftTriangle":"\u22EA",
    "NotLeftTriangleBar":"\u29CF\u0338",
    "NotLeftTriangleEqual":"\u22EC",
    "NotLess":"\u226E",
    "NotLessEqual":"\u2270",
    "NotLessGreater":"\u2278",
    "NotLessLess":"\u226A\u0338",
    "NotLessSlantEqual":"\u2A7D\u0338",
    "NotLessTilde":"\u2274",
    "NotNestedGreaterGreater":"\u2AA2\u0338",
    "NotNestedLessLess":"\u2AA1\u0338",
    "notni":"\u220C",
    "notniva":"\u220C",
    "notnivb":"\u22FE",
    "notnivc":"\u22FD",
    "NotPrecedes":"\u2280",
    "NotPrecedesEqual":"\u2AAF\u0338",
    "NotPrecedesSlantEqual":"\u22E0",
    "NotReverseElement":"\u220C",
    "NotRightTriangle":"\u22EB",
    "NotRightTriangleBar":"\u29D0\u0338",
    "NotRightTriangleEqual":"\u22ED",
    "NotSquareSubset":"\u228F\u0338",
    "NotSquareSubsetEqual":"\u22E2",
    "NotSquareSuperset":"\u2290\u0338",
    "NotSquareSupersetEqual":"\u22E3",
    "NotSubset":"\u2282\u20D2",
    "NotSubsetEqual":"\u2288",
    "NotSucceeds":"\u2281",
    "NotSucceedsEqual":"\u2AB0\u0338",
    "NotSucceedsSlantEqual":"\u22E1",
    "NotSucceedsTilde":"\u227F\u0338",
    "NotSuperset":"\u2283\u20D2",
    "NotSupersetEqual":"\u2289",
    "NotTilde":"\u2241",
    "NotTildeEqual":"\u2244",
    "NotTildeFullEqual":"\u2247",
    "NotTildeTilde":"\u2249",
    "NotVerticalBar":"\u2224",
    "npar":"\u2226",
    "nparallel":"\u2226",
    "nparsl":"\u2AFD\u20E5",
    "npart":"\u2202\u0338",
    "npolint":"\u2A14",
    "npr":"\u2280",
    "nprcue":"\u22E0",
    "npre":"\u2AAF\u0338",
    "nprec":"\u2280",
    "npreceq":"\u2AAF\u0338",
    "nrArr":"\u21CF",
    "nrarr":"\u219B",
    "nrarrc":"\u2933\u0338",
    "nrarrw":"\u219D\u0338",
    "nRightarrow":"\u21CF",
    "nrightarrow":"\u219B",
    "nrtri":"\u22EB",
    "nrtrie":"\u22ED",
    "nsc":"\u2281",
    "nsccue":"\u22E1",
    "nsce":"\u2AB0\u0338",
    "Nscr":"\uD835\uDCA9",
    "nscr":"\uD835\uDCC3",
    "nshortmid":"\u2224",
    "nshortparallel":"\u2226",
    "nsim":"\u2241",
    "nsime":"\u2244",
    "nsimeq":"\u2244",
    "nsmid":"\u2224",
    "nspar":"\u2226",
    "nsqsube":"\u22E2",
    "nsqsupe":"\u22E3",
    "nsub":"\u2284",
    "nsubE":"\u2AC5\u0338",
    "nsube":"\u2288",
    "nsubset":"\u2282\u20D2",
    "nsubseteq":"\u2288",
    "nsubseteqq":"\u2AC5\u0338",
    "nsucc":"\u2281",
    "nsucceq":"\u2AB0\u0338",
    "nsup":"\u2285",
    "nsupE":"\u2AC6\u0338",
    "nsupe":"\u2289",
    "nsupset":"\u2283\u20D2",
    "nsupseteq":"\u2289",
    "nsupseteqq":"\u2AC6\u0338",
    "ntgl":"\u2279",
    "Ntilde":"\u00D1",
    "ntilde":"\u00F1",
    "ntlg":"\u2278",
    "ntriangleleft":"\u22EA",
    "ntrianglelefteq":"\u22EC",
    "ntriangleright":"\u22EB",
    "ntrianglerighteq":"\u22ED",
    "Nu":"\u039D",
    "nu":"\u03BD",
    "num":"\u0023",
    "numero":"\u2116",
    "numsp":"\u2007",
    "nvap":"\u224D\u20D2",
    "nVDash":"\u22AF",
    "nVdash":"\u22AE",
    "nvDash":"\u22AD",
    "nvdash":"\u22AC",
    "nvge":"\u2265\u20D2",
    "nvgt":"\u003E\u20D2",
    "nvHarr":"\u2904",
    "nvinfin":"\u29DE",
    "nvlArr":"\u2902",
    "nvle":"\u2264\u20D2",
    "nvlt":"\u003C\u20D2",
    "nvltrie":"\u22B4\u20D2",
    "nvrArr":"\u2903",
    "nvrtrie":"\u22B5\u20D2",
    "nvsim":"\u223C\u20D2",
    "nwarhk":"\u2923",
    "nwArr":"\u21D6",
    "nwarr":"\u2196",
    "nwarrow":"\u2196",
    "nwnear":"\u2927",
    "Oacute":"\u00D3",
    "oacute":"\u00F3",
    "oast":"\u229B",
    "ocir":"\u229A",
    "Ocirc":"\u00D4",
    "ocirc":"\u00F4",
    "Ocy":"\u041E",
    "ocy":"\u043E",
    "odash":"\u229D",
    "Odblac":"\u0150",
    "odblac":"\u0151",
    "odiv":"\u2A38",
    "odot":"\u2299",
    "odsold":"\u29BC",
    "OElig":"\u0152",
    "oelig":"\u0153",
    "ofcir":"\u29BF",
    "Ofr":"\uD835\uDD12",
    "ofr":"\uD835\uDD2C",
    "ogon":"\u02DB",
    "Ograve":"\u00D2",
    "ograve":"\u00F2",
    "ogt":"\u29C1",
    "ohbar":"\u29B5",
    "ohm":"\u03A9",
    "oint":"\u222E",
    "olarr":"\u21BA",
    "olcir":"\u29BE",
    "olcross":"\u29BB",
    "oline":"\u203E",
    "olt":"\u29C0",
    "Omacr":"\u014C",
    "omacr":"\u014D",
    "Omega":"\u03A9",
    "omega":"\u03C9",
    "Omicron":"\u039F",
    "omicron":"\u03BF",
    "omid":"\u29B6",
    "ominus":"\u2296",
    "Oopf":"\uD835\uDD46",
    "oopf":"\uD835\uDD60",
    "opar":"\u29B7",
    "OpenCurlyDoubleQuote":"\u201C",
    "OpenCurlyQuote":"\u2018",
    "operp":"\u29B9",
    "oplus":"\u2295",
    "Or":"\u2A54",
    "or":"\u2228",
    "orarr":"\u21BB",
    "ord":"\u2A5D",
    "order":"\u2134",
    "orderof":"\u2134",
    "ordf":"\u00AA",
    "ordm":"\u00BA",
    "origof":"\u22B6",
    "oror":"\u2A56",
    "orslope":"\u2A57",
    "orv":"\u2A5B",
    "oS":"\u24C8",
    "Oscr":"\uD835\uDCAA",
    "oscr":"\u2134",
    "Oslash":"\u00D8",
    "oslash":"\u00F8",
    "osol":"\u2298",
    "Otilde":"\u00D5",
    "otilde":"\u00F5",
    "Otimes":"\u2A37",
    "otimes":"\u2297",
    "otimesas":"\u2A36",
    "Ouml":"\u00D6",
    "ouml":"\u00F6",
    "ovbar":"\u233D",
    "OverBar":"\u203E",
    "OverBrace":"\u23DE",
    "OverBracket":"\u23B4",
    "OverParenthesis":"\u23DC",
    "par":"\u2225",
    "para":"\u00B6",
    "parallel":"\u2225",
    "parsim":"\u2AF3",
    "parsl":"\u2AFD",
    "part":"\u2202",
    "PartialD":"\u2202",
    "Pcy":"\u041F",
    "pcy":"\u043F",
    "percnt":"\u0025",
    "period":"\u002E",
    "permil":"\u2030",
    "perp":"\u22A5",
    "pertenk":"\u2031",
    "Pfr":"\uD835\uDD13",
    "pfr":"\uD835\uDD2D",
    "Phi":"\u03A6",
    "phi":"\u03C6",
    "phiv":"\u03D5",
    "phmmat":"\u2133",
    "phone":"\u260E",
    "Pi":"\u03A0",
    "pi":"\u03C0",
    "pitchfork":"\u22D4",
    "piv":"\u03D6",
    "planck":"\u210F",
    "planckh":"\u210E",
    "plankv":"\u210F",
    "plus":"\u002B",
    "plusacir":"\u2A23",
    "plusb":"\u229E",
    "pluscir":"\u2A22",
    "plusdo":"\u2214",
    "plusdu":"\u2A25",
    "pluse":"\u2A72",
    "PlusMinus":"\u00B1",
    "plusmn":"\u00B1",
    "plussim":"\u2A26",
    "plustwo":"\u2A27",
    "pm":"\u00B1",
    "Poincareplane":"\u210C",
    "pointint":"\u2A15",
    "Popf":"\u2119",
    "popf":"\uD835\uDD61",
    "pound":"\u00A3",
    "Pr":"\u2ABB",
    "pr":"\u227A",
    "prap":"\u2AB7",
    "prcue":"\u227C",
    "prE":"\u2AB3",
    "pre":"\u2AAF",
    "prec":"\u227A",
    "precapprox":"\u2AB7",
    "preccurlyeq":"\u227C",
    "Precedes":"\u227A",
    "PrecedesEqual":"\u2AAF",
    "PrecedesSlantEqual":"\u227C",
    "PrecedesTilde":"\u227E",
    "preceq":"\u2AAF",
    "precnapprox":"\u2AB9",
    "precneqq":"\u2AB5",
    "precnsim":"\u22E8",
    "precsim":"\u227E",
    "Prime":"\u2033",
    "prime":"\u2032",
    "primes":"\u2119",
    "prnap":"\u2AB9",
    "prnE":"\u2AB5",
    "prnsim":"\u22E8",
    "prod":"\u220F",
    "Product":"\u220F",
    "profalar":"\u232E",
    "profline":"\u2312",
    "profsurf":"\u2313",
    "prop":"\u221D",
    "Proportion":"\u2237",
    "Proportional":"\u221D",
    "propto":"\u221D",
    "prsim":"\u227E",
    "prurel":"\u22B0",
    "Pscr":"\uD835\uDCAB",
    "pscr":"\uD835\uDCC5",
    "Psi":"\u03A8",
    "psi":"\u03C8",
    "puncsp":"\u2008",
    "Qfr":"\uD835\uDD14",
    "qfr":"\uD835\uDD2E",
    "qint":"\u2A0C",
    "Qopf":"\u211A",
    "qopf":"\uD835\uDD62",
    "qprime":"\u2057",
    "Qscr":"\uD835\uDCAC",
    "qscr":"\uD835\uDCC6",
    "quaternions":"\u210D",
    "quatint":"\u2A16",
    "quest":"\u003F",
    "questeq":"\u225F",
    "QUOT":"\u0022",
    "quot":"\u0022",
    "rAarr":"\u21DB",
    "race":"\u223D\u0331",
    "Racute":"\u0154",
    "racute":"\u0155",
    "radic":"\u221A",
    "raemptyv":"\u29B3",
    "Rang":"\u27EB",
    "rang":"\u27E9",
    "rangd":"\u2992",
    "range":"\u29A5",
    "rangle":"\u27E9",
    "raquo":"\u00BB",
    "Rarr":"\u21A0",
    "rArr":"\u21D2",
    "rarr":"\u2192",
    "rarrap":"\u2975",
    "rarrb":"\u21E5",
    "rarrbfs":"\u2920",
    "rarrc":"\u2933",
    "rarrfs":"\u291E",
    "rarrhk":"\u21AA",
    "rarrlp":"\u21AC",
    "rarrpl":"\u2945",
    "rarrsim":"\u2974",
    "Rarrtl":"\u2916",
    "rarrtl":"\u21A3",
    "rarrw":"\u219D",
    "rAtail":"\u291C",
    "ratail":"\u291A",
    "ratio":"\u2236",
    "rationals":"\u211A",
    "RBarr":"\u2910",
    "rBarr":"\u290F",
    "rbarr":"\u290D",
    "rbbrk":"\u2773",
    "rbrace":"\u007D",
    "rbrack":"\u005D",
    "rbrke":"\u298C",
    "rbrksld":"\u298E",
    "rbrkslu":"\u2990",
    "Rcaron":"\u0158",
    "rcaron":"\u0159",
    "Rcedil":"\u0156",
    "rcedil":"\u0157",
    "rceil":"\u2309",
    "rcub":"\u007D",
    "Rcy":"\u0420",
    "rcy":"\u0440",
    "rdca":"\u2937",
    "rdldhar":"\u2969",
    "rdquo":"\u201D",
    "rdquor":"\u201D",
    "rdsh":"\u21B3",
    "Re":"\u211C",
    "real":"\u211C",
    "realine":"\u211B",
    "realpart":"\u211C",
    "reals":"\u211D",
    "rect":"\u25AD",
    "REG":"\u00AE",
    "reg":"\u00AE",
    "ReverseElement":"\u220B",
    "ReverseEquilibrium":"\u21CB",
    "ReverseUpEquilibrium":"\u296F",
    "rfisht":"\u297D",
    "rfloor":"\u230B",
    "Rfr":"\u211C",
    "rfr":"\uD835\uDD2F",
    "rHar":"\u2964",
    "rhard":"\u21C1",
    "rharu":"\u21C0",
    "rharul":"\u296C",
    "Rho":"\u03A1",
    "rho":"\u03C1",
    "rhov":"\u03F1",
    "RightAngleBracket":"\u27E9",
    "RightArrow":"\u2192",
    "Rightarrow":"\u21D2",
    "rightarrow":"\u2192",
    "RightArrowBar":"\u21E5",
    "RightArrowLeftArrow":"\u21C4",
    "rightarrowtail":"\u21A3",
    "RightCeiling":"\u2309",
    "RightDoubleBracket":"\u27E7",
    "RightDownTeeVector":"\u295D",
    "RightDownVector":"\u21C2",
    "RightDownVectorBar":"\u2955",
    "RightFloor":"\u230B",
    "rightharpoondown":"\u21C1",
    "rightharpoonup":"\u21C0",
    "rightleftarrows":"\u21C4",
    "rightleftharpoons":"\u21CC",
    "rightrightarrows":"\u21C9",
    "rightsquigarrow":"\u219D",
    "RightTee":"\u22A2",
    "RightTeeArrow":"\u21A6",
    "RightTeeVector":"\u295B",
    "rightthreetimes":"\u22CC",
    "RightTriangle":"\u22B3",
    "RightTriangleBar":"\u29D0",
    "RightTriangleEqual":"\u22B5",
    "RightUpDownVector":"\u294F",
    "RightUpTeeVector":"\u295C",
    "RightUpVector":"\u21BE",
    "RightUpVectorBar":"\u2954",
    "RightVector":"\u21C0",
    "RightVectorBar":"\u2953",
    "ring":"\u02DA",
    "risingdotseq":"\u2253",
    "rlarr":"\u21C4",
    "rlhar":"\u21CC",
    "rlm":"\u200F",
    "rmoust":"\u23B1",
    "rmoustache":"\u23B1",
    "rnmid":"\u2AEE",
    "roang":"\u27ED",
    "roarr":"\u21FE",
    "robrk":"\u27E7",
    "ropar":"\u2986",
    "Ropf":"\u211D",
    "ropf":"\uD835\uDD63",
    "roplus":"\u2A2E",
    "rotimes":"\u2A35",
    "RoundImplies":"\u2970",
    "rpar":"\u0029",
    "rpargt":"\u2994",
    "rppolint":"\u2A12",
    "rrarr":"\u21C9",
    "Rrightarrow":"\u21DB",
    "rsaquo":"\u203A",
    "Rscr":"\u211B",
    "rscr":"\uD835\uDCC7",
    "Rsh":"\u21B1",
    "rsh":"\u21B1",
    "rsqb":"\u005D",
    "rsquo":"\u2019",
    "rsquor":"\u2019",
    "rthree":"\u22CC",
    "rtimes":"\u22CA",
    "rtri":"\u25B9",
    "rtrie":"\u22B5",
    "rtrif":"\u25B8",
    "rtriltri":"\u29CE",
    "RuleDelayed":"\u29F4",
    "ruluhar":"\u2968",
    "rx":"\u211E",
    "Sacute":"\u015A",
    "sacute":"\u015B",
    "sbquo":"\u201A",
    "Sc":"\u2ABC",
    "sc":"\u227B",
    "scap":"\u2AB8",
    "Scaron":"\u0160",
    "scaron":"\u0161",
    "sccue":"\u227D",
    "scE":"\u2AB4",
    "sce":"\u2AB0",
    "Scedil":"\u015E",
    "scedil":"\u015F",
    "Scirc":"\u015C",
    "scirc":"\u015D",
    "scnap":"\u2ABA",
    "scnE":"\u2AB6",
    "scnsim":"\u22E9",
    "scpolint":"\u2A13",
    "scsim":"\u227F",
    "Scy":"\u0421",
    "scy":"\u0441",
    "sdot":"\u22C5",
    "sdotb":"\u22A1",
    "sdote":"\u2A66",
    "searhk":"\u2925",
    "seArr":"\u21D8",
    "searr":"\u2198",
    "searrow":"\u2198",
    "sect":"\u00A7",
    "semi":"\u003B",
    "seswar":"\u2929",
    "setminus":"\u2216",
    "setmn":"\u2216",
    "sext":"\u2736",
    "Sfr":"\uD835\uDD16",
    "sfr":"\uD835\uDD30",
    "sfrown":"\u2322",
    "sharp":"\u266F",
    "SHCHcy":"\u0429",
    "shchcy":"\u0449",
    "SHcy":"\u0428",
    "shcy":"\u0448",
    "ShortDownArrow":"\u2193",
    "ShortLeftArrow":"\u2190",
    "shortmid":"\u2223",
    "shortparallel":"\u2225",
    "ShortRightArrow":"\u2192",
    "ShortUpArrow":"\u2191",
    "shy":"\u00AD",
    "Sigma":"\u03A3",
    "sigma":"\u03C3",
    "sigmaf":"\u03C2",
    "sigmav":"\u03C2",
    "sim":"\u223C",
    "simdot":"\u2A6A",
    "sime":"\u2243",
    "simeq":"\u2243",
    "simg":"\u2A9E",
    "simgE":"\u2AA0",
    "siml":"\u2A9D",
    "simlE":"\u2A9F",
    "simne":"\u2246",
    "simplus":"\u2A24",
    "simrarr":"\u2972",
    "slarr":"\u2190",
    "SmallCircle":"\u2218",
    "smallsetminus":"\u2216",
    "smashp":"\u2A33",
    "smeparsl":"\u29E4",
    "smid":"\u2223",
    "smile":"\u2323",
    "smt":"\u2AAA",
    "smte":"\u2AAC",
    "smtes":"\u2AAC\uFE00",
    "SOFTcy":"\u042C",
    "softcy":"\u044C",
    "sol":"\u002F",
    "solb":"\u29C4",
    "solbar":"\u233F",
    "Sopf":"\uD835\uDD4A",
    "sopf":"\uD835\uDD64",
    "spades":"\u2660",
    "spadesuit":"\u2660",
    "spar":"\u2225",
    "sqcap":"\u2293",
    "sqcaps":"\u2293\uFE00",
    "sqcup":"\u2294",
    "sqcups":"\u2294\uFE00",
    "Sqrt":"\u221A",
    "sqsub":"\u228F",
    "sqsube":"\u2291",
    "sqsubset":"\u228F",
    "sqsubseteq":"\u2291",
    "sqsup":"\u2290",
    "sqsupe":"\u2292",
    "sqsupset":"\u2290",
    "sqsupseteq":"\u2292",
    "squ":"\u25A1",
    "Square":"\u25A1",
    "square":"\u25A1",
    "SquareIntersection":"\u2293",
    "SquareSubset":"\u228F",
    "SquareSubsetEqual":"\u2291",
    "SquareSuperset":"\u2290",
    "SquareSupersetEqual":"\u2292",
    "SquareUnion":"\u2294",
    "squarf":"\u25AA",
    "squf":"\u25AA",
    "srarr":"\u2192",
    "Sscr":"\uD835\uDCAE",
    "sscr":"\uD835\uDCC8",
    "ssetmn":"\u2216",
    "ssmile":"\u2323",
    "sstarf":"\u22C6",
    "Star":"\u22C6",
    "star":"\u2606",
    "starf":"\u2605",
    "straightepsilon":"\u03F5",
    "straightphi":"\u03D5",
    "strns":"\u00AF",
    "Sub":"\u22D0",
    "sub":"\u2282",
    "subdot":"\u2ABD",
    "subE":"\u2AC5",
    "sube":"\u2286",
    "subedot":"\u2AC3",
    "submult":"\u2AC1",
    "subnE":"\u2ACB",
    "subne":"\u228A",
    "subplus":"\u2ABF",
    "subrarr":"\u2979",
    "Subset":"\u22D0",
    "subset":"\u2282",
    "subseteq":"\u2286",
    "subseteqq":"\u2AC5",
    "SubsetEqual":"\u2286",
    "subsetneq":"\u228A",
    "subsetneqq":"\u2ACB",
    "subsim":"\u2AC7",
    "subsub":"\u2AD5",
    "subsup":"\u2AD3",
    "succ":"\u227B",
    "succapprox":"\u2AB8",
    "succcurlyeq":"\u227D",
    "Succeeds":"\u227B",
    "SucceedsEqual":"\u2AB0",
    "SucceedsSlantEqual":"\u227D",
    "SucceedsTilde":"\u227F",
    "succeq":"\u2AB0",
    "succnapprox":"\u2ABA",
    "succneqq":"\u2AB6",
    "succnsim":"\u22E9",
    "succsim":"\u227F",
    "SuchThat":"\u220B",
    "Sum":"\u2211",
    "sum":"\u2211",
    "sung":"\u266A",
    "Sup":"\u22D1",
    "sup":"\u2283",
    "sup1":"\u00B9",
    "sup2":"\u00B2",
    "sup3":"\u00B3",
    "supdot":"\u2ABE",
    "supdsub":"\u2AD8",
    "supE":"\u2AC6",
    "supe":"\u2287",
    "supedot":"\u2AC4",
    "Superset":"\u2283",
    "SupersetEqual":"\u2287",
    "suphsol":"\u27C9",
    "suphsub":"\u2AD7",
    "suplarr":"\u297B",
    "supmult":"\u2AC2",
    "supnE":"\u2ACC",
    "supne":"\u228B",
    "supplus":"\u2AC0",
    "Supset":"\u22D1",
    "supset":"\u2283",
    "supseteq":"\u2287",
    "supseteqq":"\u2AC6",
    "supsetneq":"\u228B",
    "supsetneqq":"\u2ACC",
    "supsim":"\u2AC8",
    "supsub":"\u2AD4",
    "supsup":"\u2AD6",
    "swarhk":"\u2926",
    "swArr":"\u21D9",
    "swarr":"\u2199",
    "swarrow":"\u2199",
    "swnwar":"\u292A",
    "szlig":"\u00DF",
    "Tab":"\u0009",
    "target":"\u2316",
    "Tau":"\u03A4",
    "tau":"\u03C4",
    "tbrk":"\u23B4",
    "Tcaron":"\u0164",
    "tcaron":"\u0165",
    "Tcedil":"\u0162",
    "tcedil":"\u0163",
    "Tcy":"\u0422",
    "tcy":"\u0442",
    "tdot":"\u20DB",
    "telrec":"\u2315",
    "Tfr":"\uD835\uDD17",
    "tfr":"\uD835\uDD31",
    "there4":"\u2234",
    "Therefore":"\u2234",
    "therefore":"\u2234",
    "Theta":"\u0398",
    "theta":"\u03B8",
    "thetasym":"\u03D1",
    "thetav":"\u03D1",
    "thickapprox":"\u2248",
    "thicksim":"\u223C",
    "ThickSpace":"\u205F\u200A",
    "thinsp":"\u2009",
    "ThinSpace":"\u2009",
    "thkap":"\u2248",
    "thksim":"\u223C",
    "THORN":"\u00DE",
    "thorn":"\u00FE",
    "Tilde":"\u223C",
    "tilde":"\u02DC",
    "TildeEqual":"\u2243",
    "TildeFullEqual":"\u2245",
    "TildeTilde":"\u2248",
    "times":"\u00D7",
    "timesb":"\u22A0",
    "timesbar":"\u2A31",
    "timesd":"\u2A30",
    "tint":"\u222D",
    "toea":"\u2928",
    "top":"\u22A4",
    "topbot":"\u2336",
    "topcir":"\u2AF1",
    "Topf":"\uD835\uDD4B",
    "topf":"\uD835\uDD65",
    "topfork":"\u2ADA",
    "tosa":"\u2929",
    "tprime":"\u2034",
    "TRADE":"\u2122",
    "trade":"\u2122",
    "triangle":"\u25B5",
    "triangledown":"\u25BF",
    "triangleleft":"\u25C3",
    "trianglelefteq":"\u22B4",
    "triangleq":"\u225C",
    "triangleright":"\u25B9",
    "trianglerighteq":"\u22B5",
    "tridot":"\u25EC",
    "trie":"\u225C",
    "triminus":"\u2A3A",
    "TripleDot":"\u20DB",
    "triplus":"\u2A39",
    "trisb":"\u29CD",
    "tritime":"\u2A3B",
    "trpezium":"\u23E2",
    "Tscr":"\uD835\uDCAF",
    "tscr":"\uD835\uDCC9",
    "TScy":"\u0426",
    "tscy":"\u0446",
    "TSHcy":"\u040B",
    "tshcy":"\u045B",
    "Tstrok":"\u0166",
    "tstrok":"\u0167",
    "twixt":"\u226C",
    "twoheadleftarrow":"\u219E",
    "twoheadrightarrow":"\u21A0",
    "Uacute":"\u00DA",
    "uacute":"\u00FA",
    "Uarr":"\u219F",
    "uArr":"\u21D1",
    "uarr":"\u2191",
    "Uarrocir":"\u2949",
    "Ubrcy":"\u040E",
    "ubrcy":"\u045E",
    "Ubreve":"\u016C",
    "ubreve":"\u016D",
    "Ucirc":"\u00DB",
    "ucirc":"\u00FB",
    "Ucy":"\u0423",
    "ucy":"\u0443",
    "udarr":"\u21C5",
    "Udblac":"\u0170",
    "udblac":"\u0171",
    "udhar":"\u296E",
    "ufisht":"\u297E",
    "Ufr":"\uD835\uDD18",
    "ufr":"\uD835\uDD32",
    "Ugrave":"\u00D9",
    "ugrave":"\u00F9",
    "uHar":"\u2963",
    "uharl":"\u21BF",
    "uharr":"\u21BE",
    "uhblk":"\u2580",
    "ulcorn":"\u231C",
    "ulcorner":"\u231C",
    "ulcrop":"\u230F",
    "ultri":"\u25F8",
    "Umacr":"\u016A",
    "umacr":"\u016B",
    "uml":"\u00A8",
    "UnderBar":"\u005F",
    "UnderBrace":"\u23DF",
    "UnderBracket":"\u23B5",
    "UnderParenthesis":"\u23DD",
    "Union":"\u22C3",
    "UnionPlus":"\u228E",
    "Uogon":"\u0172",
    "uogon":"\u0173",
    "Uopf":"\uD835\uDD4C",
    "uopf":"\uD835\uDD66",
    "UpArrow":"\u2191",
    "Uparrow":"\u21D1",
    "uparrow":"\u2191",
    "UpArrowBar":"\u2912",
    "UpArrowDownArrow":"\u21C5",
    "UpDownArrow":"\u2195",
    "Updownarrow":"\u21D5",
    "updownarrow":"\u2195",
    "UpEquilibrium":"\u296E",
    "upharpoonleft":"\u21BF",
    "upharpoonright":"\u21BE",
    "uplus":"\u228E",
    "UpperLeftArrow":"\u2196",
    "UpperRightArrow":"\u2197",
    "Upsi":"\u03D2",
    "upsi":"\u03C5",
    "upsih":"\u03D2",
    "Upsilon":"\u03A5",
    "upsilon":"\u03C5",
    "UpTee":"\u22A5",
    "UpTeeArrow":"\u21A5",
    "upuparrows":"\u21C8",
    "urcorn":"\u231D",
    "urcorner":"\u231D",
    "urcrop":"\u230E",
    "Uring":"\u016E",
    "uring":"\u016F",
    "urtri":"\u25F9",
    "Uscr":"\uD835\uDCB0",
    "uscr":"\uD835\uDCCA",
    "utdot":"\u22F0",
    "Utilde":"\u0168",
    "utilde":"\u0169",
    "utri":"\u25B5",
    "utrif":"\u25B4",
    "uuarr":"\u21C8",
    "Uuml":"\u00DC",
    "uuml":"\u00FC",
    "uwangle":"\u29A7",
    "vangrt":"\u299C",
    "varepsilon":"\u03F5",
    "varkappa":"\u03F0",
    "varnothing":"\u2205",
    "varphi":"\u03D5",
    "varpi":"\u03D6",
    "varpropto":"\u221D",
    "vArr":"\u21D5",
    "varr":"\u2195",
    "varrho":"\u03F1",
    "varsigma":"\u03C2",
    "varsubsetneq":"\u228A\uFE00",
    "varsubsetneqq":"\u2ACB\uFE00",
    "varsupsetneq":"\u228B\uFE00",
    "varsupsetneqq":"\u2ACC\uFE00",
    "vartheta":"\u03D1",
    "vartriangleleft":"\u22B2",
    "vartriangleright":"\u22B3",
    "Vbar":"\u2AEB",
    "vBar":"\u2AE8",
    "vBarv":"\u2AE9",
    "Vcy":"\u0412",
    "vcy":"\u0432",
    "VDash":"\u22AB",
    "Vdash":"\u22A9",
    "vDash":"\u22A8",
    "vdash":"\u22A2",
    "Vdashl":"\u2AE6",
    "Vee":"\u22C1",
    "vee":"\u2228",
    "veebar":"\u22BB",
    "veeeq":"\u225A",
    "vellip":"\u22EE",
    "Verbar":"\u2016",
    "verbar":"\u007C",
    "Vert":"\u2016",
    "vert":"\u007C",
    "VerticalBar":"\u2223",
    "VerticalLine":"\u007C",
    "VerticalSeparator":"\u2758",
    "VerticalTilde":"\u2240",
    "VeryThinSpace":"\u200A",
    "Vfr":"\uD835\uDD19",
    "vfr":"\uD835\uDD33",
    "vltri":"\u22B2",
    "vnsub":"\u2282\u20D2",
    "vnsup":"\u2283\u20D2",
    "Vopf":"\uD835\uDD4D",
    "vopf":"\uD835\uDD67",
    "vprop":"\u221D",
    "vrtri":"\u22B3",
    "Vscr":"\uD835\uDCB1",
    "vscr":"\uD835\uDCCB",
    "vsubnE":"\u2ACB\uFE00",
    "vsubne":"\u228A\uFE00",
    "vsupnE":"\u2ACC\uFE00",
    "vsupne":"\u228B\uFE00",
    "Vvdash":"\u22AA",
    "vzigzag":"\u299A",
    "Wcirc":"\u0174",
    "wcirc":"\u0175",
    "wedbar":"\u2A5F",
    "Wedge":"\u22C0",
    "wedge":"\u2227",
    "wedgeq":"\u2259",
    "weierp":"\u2118",
    "Wfr":"\uD835\uDD1A",
    "wfr":"\uD835\uDD34",
    "Wopf":"\uD835\uDD4E",
    "wopf":"\uD835\uDD68",
    "wp":"\u2118",
    "wr":"\u2240",
    "wreath":"\u2240",
    "Wscr":"\uD835\uDCB2",
    "wscr":"\uD835\uDCCC",
    "xcap":"\u22C2",
    "xcirc":"\u25EF",
    "xcup":"\u22C3",
    "xdtri":"\u25BD",
    "Xfr":"\uD835\uDD1B",
    "xfr":"\uD835\uDD35",
    "xhArr":"\u27FA",
    "xharr":"\u27F7",
    "Xi":"\u039E",
    "xi":"\u03BE",
    "xlArr":"\u27F8",
    "xlarr":"\u27F5",
    "xmap":"\u27FC",
    "xnis":"\u22FB",
    "xodot":"\u2A00",
    "Xopf":"\uD835\uDD4F",
    "xopf":"\uD835\uDD69",
    "xoplus":"\u2A01",
    "xotime":"\u2A02",
    "xrArr":"\u27F9",
    "xrarr":"\u27F6",
    "Xscr":"\uD835\uDCB3",
    "xscr":"\uD835\uDCCD",
    "xsqcup":"\u2A06",
    "xuplus":"\u2A04",
    "xutri":"\u25B3",
    "xvee":"\u22C1",
    "xwedge":"\u22C0",
    "Yacute":"\u00DD",
    "yacute":"\u00FD",
    "YAcy":"\u042F",
    "yacy":"\u044F",
    "Ycirc":"\u0176",
    "ycirc":"\u0177",
    "Ycy":"\u042B",
    "ycy":"\u044B",
    "yen":"\u00A5",
    "Yfr":"\uD835\uDD1C",
    "yfr":"\uD835\uDD36",
    "YIcy":"\u0407",
    "yicy":"\u0457",
    "Yopf":"\uD835\uDD50",
    "yopf":"\uD835\uDD6A",
    "Yscr":"\uD835\uDCB4",
    "yscr":"\uD835\uDCCE",
    "YUcy":"\u042E",
    "yucy":"\u044E",
    "Yuml":"\u0178",
    "yuml":"\u00FF",
    "Zacute":"\u0179",
    "zacute":"\u017A",
    "Zcaron":"\u017D",
    "zcaron":"\u017E",
    "Zcy":"\u0417",
    "zcy":"\u0437",
    "Zdot":"\u017B",
    "zdot":"\u017C",
    "zeetrf":"\u2128",
    "ZeroWidthSpace":"\u200B",
    "Zeta":"\u0396",
    "zeta":"\u03B6",
    "Zfr":"\u2128",
    "zfr":"\uD835\uDD37",
    "ZHcy":"\u0416",
    "zhcy":"\u0436",
    "zigrarr":"\u21DD",
    "Zopf":"\u2124",
    "zopf":"\uD835\uDD6B",
    "Zscr":"\uD835\uDCB5",
    "zscr":"\uD835\uDCCF",
    "zwj":"\u200D",
    "zwnj":"\u200C"
  };

  /**
   * Utility functions
   */

  function typeOf(obj) {
    return Object.prototype.toString.call(obj);
  }

  function isString(obj) {
    return typeOf(obj) === '[object String]';
  }

  var hasOwn$1 = Object.prototype.hasOwnProperty;

  function has(object, key) {
    return object
      ? hasOwn$1.call(object, key)
      : false;
  }

  // Extend objects
  //
  function assign(obj /*from1, from2, from3, ...*/) {
    var sources = [].slice.call(arguments, 1);

    sources.forEach(function (source) {
      if (!source) { return; }

      if (typeof source !== 'object') {
        throw new TypeError(source + 'must be object');
      }

      Object.keys(source).forEach(function (key) {
        obj[key] = source[key];
      });
    });

    return obj;
  }

  ////////////////////////////////////////////////////////////////////////////////

  var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

  function unescapeMd(str) {
    if (str.indexOf('\\') < 0) { return str; }
    return str.replace(UNESCAPE_MD_RE, '$1');
  }

  ////////////////////////////////////////////////////////////////////////////////

  function isValidEntityCode(c) {
    /*eslint no-bitwise:0*/
    // broken sequence
    if (c >= 0xD800 && c <= 0xDFFF) { return false; }
    // never used
    if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
    if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
    // control codes
    if (c >= 0x00 && c <= 0x08) { return false; }
    if (c === 0x0B) { return false; }
    if (c >= 0x0E && c <= 0x1F) { return false; }
    if (c >= 0x7F && c <= 0x9F) { return false; }
    // out of range
    if (c > 0x10FFFF) { return false; }
    return true;
  }

  function fromCodePoint(c) {
    /*eslint no-bitwise:0*/
    if (c > 0xffff) {
      c -= 0x10000;
      var surrogate1 = 0xd800 + (c >> 10),
          surrogate2 = 0xdc00 + (c & 0x3ff);

      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c);
  }

  var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;


  function replaceEntityPattern(match, name) {
    var code = 0;

    if (has(entities, name)) {
      return entities[name];
    } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
      code = name[1].toLowerCase() === 'x' ?
        parseInt(name.slice(2), 16)
      :
        parseInt(name.slice(1), 10);
      if (isValidEntityCode(code)) {
        return fromCodePoint(code);
      }
    }
    return match;
  }

  function replaceEntities(str) {
    if (str.indexOf('&') < 0) { return str; }

    return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
  }

  ////////////////////////////////////////////////////////////////////////////////

  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  };

  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }

  function escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }

  ////////////////////////////////////////////////////////////////////////////////

  var assign_1            = assign;
  var isString_1          = isString;
  var has_1               = has;
  var unescapeMd_1        = unescapeMd;
  var isValidEntityCode_1 = isValidEntityCode;
  var fromCodePoint_1     = fromCodePoint;
  var replaceEntities_1   = replaceEntities;
  var escapeHtml_1        = escapeHtml;

  var utils = {
  	assign: assign_1,
  	isString: isString_1,
  	has: has_1,
  	unescapeMd: unescapeMd_1,
  	isValidEntityCode: isValidEntityCode_1,
  	fromCodePoint: fromCodePoint_1,
  	replaceEntities: replaceEntities_1,
  	escapeHtml: escapeHtml_1
  };

  /**
   * Local dependencies
   */

  var has$1             = utils.has;
  var unescapeMd$1      = utils.unescapeMd;
  var replaceEntities$1 = utils.replaceEntities;
  var escapeHtml$1      = utils.escapeHtml;

  /**
   * Renderer rules cache
   */

  var rules = {};

  /**
   * Blockquotes
   */

  rules.blockquote_open = function(/* tokens, idx, options, env */) {
    return '<blockquote>\n';
  };

  rules.blockquote_close = function(tokens, idx /*, options, env */) {
    return '</blockquote>' + getBreak(tokens, idx);
  };

  /**
   * Code
   */

  rules.code = function(tokens, idx /*, options, env */) {
    if (tokens[idx].block) {
      return '<pre><code>' + escapeHtml$1(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
    }
    return '<code>' + escapeHtml$1(tokens[idx].content) + '</code>';
  };

  /**
   * Fenced code blocks
   */

  rules.fence = function(tokens, idx, options, env, instance) {
    var token = tokens[idx];
    var langClass = '';
    var langPrefix = options.langPrefix;
    var langName = '', fences, fenceName;
    var highlighted;

    if (token.params) {

      //
      // ```foo bar
      //
      // Try custom renderer "foo" first. That will simplify overwrite
      // for diagrams, latex, and any other fenced block with custom look
      //

      fences = token.params.split(/\s+/g);
      fenceName = fences.join(' ');

      if (has$1(instance.rules.fence_custom, fences[0])) {
        return instance.rules.fence_custom[fences[0]](tokens, idx, options, env, instance);
      }

      langName = escapeHtml$1(replaceEntities$1(unescapeMd$1(fenceName)));
      langClass = ' class="' + langPrefix + langName + '"';
    }

    if (options.highlight) {
      highlighted = options.highlight.apply(options.highlight, [ token.content ].concat(fences))
        || escapeHtml$1(token.content);
    } else {
      highlighted = escapeHtml$1(token.content);
    }

    return '<pre><code' + langClass + '>'
          + highlighted
          + '</code></pre>'
          + getBreak(tokens, idx);
  };

  rules.fence_custom = {};

  /**
   * Headings
   */

  rules.heading_open = function(tokens, idx /*, options, env */) {
    return '<h' + tokens[idx].hLevel + '>';
  };
  rules.heading_close = function(tokens, idx /*, options, env */) {
    return '</h' + tokens[idx].hLevel + '>\n';
  };

  /**
   * Horizontal rules
   */

  rules.hr = function(tokens, idx, options /*, env */) {
    return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
  };

  /**
   * Bullets
   */

  rules.bullet_list_open = function(/* tokens, idx, options, env */) {
    return '<ul>\n';
  };
  rules.bullet_list_close = function(tokens, idx /*, options, env */) {
    return '</ul>' + getBreak(tokens, idx);
  };

  /**
   * List items
   */

  rules.list_item_open = function(/* tokens, idx, options, env */) {
    return '<li>';
  };
  rules.list_item_close = function(/* tokens, idx, options, env */) {
    return '</li>\n';
  };

  /**
   * Ordered list items
   */

  rules.ordered_list_open = function(tokens, idx /*, options, env */) {
    var token = tokens[idx];
    var order = token.order > 1 ? ' start="' + token.order + '"' : '';
    return '<ol' + order + '>\n';
  };
  rules.ordered_list_close = function(tokens, idx /*, options, env */) {
    return '</ol>' + getBreak(tokens, idx);
  };

  /**
   * Paragraphs
   */

  rules.paragraph_open = function(tokens, idx /*, options, env */) {
    return tokens[idx].tight ? '' : '<p>';
  };
  rules.paragraph_close = function(tokens, idx /*, options, env */) {
    var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
    return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
  };

  /**
   * Links
   */

  rules.link_open = function(tokens, idx, options /* env */) {
    var title = tokens[idx].title ? (' title="' + escapeHtml$1(replaceEntities$1(tokens[idx].title)) + '"') : '';
    var target = options.linkTarget ? (' target="' + options.linkTarget + '"') : '';
    return '<a href="' + escapeHtml$1(tokens[idx].href) + '"' + title + target + '>';
  };
  rules.link_close = function(/* tokens, idx, options, env */) {
    return '</a>';
  };

  /**
   * Images
   */

  rules.image = function(tokens, idx, options /*, env */) {
    var src = ' src="' + escapeHtml$1(tokens[idx].src) + '"';
    var title = tokens[idx].title ? (' title="' + escapeHtml$1(replaceEntities$1(tokens[idx].title)) + '"') : '';
    var alt = ' alt="' + (tokens[idx].alt ? escapeHtml$1(replaceEntities$1(unescapeMd$1(tokens[idx].alt))) : '') + '"';
    var suffix = options.xhtmlOut ? ' /' : '';
    return '<img' + src + alt + title + suffix + '>';
  };

  /**
   * Tables
   */

  rules.table_open = function(/* tokens, idx, options, env */) {
    return '<table>\n';
  };
  rules.table_close = function(/* tokens, idx, options, env */) {
    return '</table>\n';
  };
  rules.thead_open = function(/* tokens, idx, options, env */) {
    return '<thead>\n';
  };
  rules.thead_close = function(/* tokens, idx, options, env */) {
    return '</thead>\n';
  };
  rules.tbody_open = function(/* tokens, idx, options, env */) {
    return '<tbody>\n';
  };
  rules.tbody_close = function(/* tokens, idx, options, env */) {
    return '</tbody>\n';
  };
  rules.tr_open = function(/* tokens, idx, options, env */) {
    return '<tr>';
  };
  rules.tr_close = function(/* tokens, idx, options, env */) {
    return '</tr>\n';
  };
  rules.th_open = function(tokens, idx /*, options, env */) {
    var token = tokens[idx];
    return '<th'
      + (token.align ? ' style="text-align:' + token.align + '"' : '')
      + '>';
  };
  rules.th_close = function(/* tokens, idx, options, env */) {
    return '</th>';
  };
  rules.td_open = function(tokens, idx /*, options, env */) {
    var token = tokens[idx];
    return '<td'
      + (token.align ? ' style="text-align:' + token.align + '"' : '')
      + '>';
  };
  rules.td_close = function(/* tokens, idx, options, env */) {
    return '</td>';
  };

  /**
   * Bold
   */

  rules.strong_open = function(/* tokens, idx, options, env */) {
    return '<strong>';
  };
  rules.strong_close = function(/* tokens, idx, options, env */) {
    return '</strong>';
  };

  /**
   * Italicize
   */

  rules.em_open = function(/* tokens, idx, options, env */) {
    return '<em>';
  };
  rules.em_close = function(/* tokens, idx, options, env */) {
    return '</em>';
  };

  /**
   * Strikethrough
   */

  rules.del_open = function(/* tokens, idx, options, env */) {
    return '<del>';
  };
  rules.del_close = function(/* tokens, idx, options, env */) {
    return '</del>';
  };

  /**
   * Insert
   */

  rules.ins_open = function(/* tokens, idx, options, env */) {
    return '<ins>';
  };
  rules.ins_close = function(/* tokens, idx, options, env */) {
    return '</ins>';
  };

  /**
   * Highlight
   */

  rules.mark_open = function(/* tokens, idx, options, env */) {
    return '<mark>';
  };
  rules.mark_close = function(/* tokens, idx, options, env */) {
    return '</mark>';
  };

  /**
   * Super- and sub-script
   */

  rules.sub = function(tokens, idx /*, options, env */) {
    return '<sub>' + escapeHtml$1(tokens[idx].content) + '</sub>';
  };
  rules.sup = function(tokens, idx /*, options, env */) {
    return '<sup>' + escapeHtml$1(tokens[idx].content) + '</sup>';
  };

  /**
   * Breaks
   */

  rules.hardbreak = function(tokens, idx, options /*, env */) {
    return options.xhtmlOut ? '<br />\n' : '<br>\n';
  };
  rules.softbreak = function(tokens, idx, options /*, env */) {
    return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
  };

  /**
   * Text
   */

  rules.text = function(tokens, idx /*, options, env */) {
    return escapeHtml$1(tokens[idx].content);
  };

  /**
   * Content
   */

  rules.htmlblock = function(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };
  rules.htmltag = function(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };

  /**
   * Abbreviations, initialism
   */

  rules.abbr_open = function(tokens, idx /*, options, env */) {
    return '<abbr title="' + escapeHtml$1(replaceEntities$1(tokens[idx].title)) + '">';
  };
  rules.abbr_close = function(/* tokens, idx, options, env */) {
    return '</abbr>';
  };

  /**
   * Footnotes
   */

  rules.footnote_ref = function(tokens, idx) {
    var n = Number(tokens[idx].id + 1).toString();
    var id = 'fnref' + n;
    if (tokens[idx].subId > 0) {
      id += ':' + tokens[idx].subId;
    }
    return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
  };
  rules.footnote_block_open = function(tokens, idx, options) {
    var hr = options.xhtmlOut
      ? '<hr class="footnotes-sep" />\n'
      : '<hr class="footnotes-sep">\n';
    return hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
  };
  rules.footnote_block_close = function() {
    return '</ol>\n</section>\n';
  };
  rules.footnote_open = function(tokens, idx) {
    var id = Number(tokens[idx].id + 1).toString();
    return '<li id="fn' + id + '"  class="footnote-item">';
  };
  rules.footnote_close = function() {
    return '</li>\n';
  };
  rules.footnote_anchor = function(tokens, idx) {
    var n = Number(tokens[idx].id + 1).toString();
    var id = 'fnref' + n;
    if (tokens[idx].subId > 0) {
      id += ':' + tokens[idx].subId;
    }
    return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
  };

  /**
   * Definition lists
   */

  rules.dl_open = function() {
    return '<dl>\n';
  };
  rules.dt_open = function() {
    return '<dt>';
  };
  rules.dd_open = function() {
    return '<dd>';
  };
  rules.dl_close = function() {
    return '</dl>\n';
  };
  rules.dt_close = function() {
    return '</dt>\n';
  };
  rules.dd_close = function() {
    return '</dd>\n';
  };

  /**
   * Helper functions
   */

  function nextToken(tokens, idx) {
    if (++idx >= tokens.length - 2) {
      return idx;
    }
    if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
        (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
        (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
      return nextToken(tokens, idx + 2);
    }
    return idx;
  }

  /**
   * Check to see if `\n` is needed before the next token.
   *
   * @param  {Array} `tokens`
   * @param  {Number} `idx`
   * @return {String} Empty string or newline
   * @api private
   */

  var getBreak = rules.getBreak = function getBreak(tokens, idx) {
    idx = nextToken(tokens, idx);
    if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
      return '';
    }
    return '\n';
  };

  /**
   * Expose `rules`
   */

  var rules_1 = rules;

  /**
   * Local dependencies
   */




  /**
   * Expose `Renderer`
   */

  var renderer = Renderer;

  /**
   * Renderer class. Renders HTML and exposes `rules` to allow
   * local modifications.
   */

  function Renderer() {
    this.rules = utils.assign({}, rules_1);

    // exported helper, for custom rules only
    this.getBreak = rules_1.getBreak;
  }

  /**
   * Render a string of inline HTML with the given `tokens` and
   * `options`.
   *
   * @param  {Array} `tokens`
   * @param  {Object} `options`
   * @param  {Object} `env`
   * @return {String}
   * @api public
   */

  Renderer.prototype.renderInline = function (tokens, options, env) {
    var _rules = this.rules;
    var len = tokens.length, i = 0;
    var result = '';

    while (len--) {
      result += _rules[tokens[i].type](tokens, i++, options, env, this);
    }

    return result;
  };

  /**
   * Render a string of HTML with the given `tokens` and
   * `options`.
   *
   * @param  {Array} `tokens`
   * @param  {Object} `options`
   * @param  {Object} `env`
   * @return {String}
   * @api public
   */

  Renderer.prototype.render = function (tokens, options, env) {
    var _rules = this.rules;
    var len = tokens.length, i = -1;
    var result = '';

    while (++i < len) {
      if (tokens[i].type === 'inline') {
        result += this.renderInline(tokens[i].children, options, env);
      } else {
        result += _rules[tokens[i].type](tokens, i, options, env, this);
      }
    }
    return result;
  };

  /**
   * Ruler is a helper class for building responsibility chains from
   * parse rules. It allows:
   *
   *   - easy stack rules chains
   *   - getting main chain and named chains content (as arrays of functions)
   *
   * Helper methods, should not be used directly.
   * @api private
   */

  function Ruler() {
    // List of added rules. Each element is:
    //
    // { name: XXX,
    //   enabled: Boolean,
    //   fn: Function(),
    //   alt: [ name2, name3 ] }
    //
    this.__rules__ = [];

    // Cached rule chains.
    //
    // First level - chain name, '' for default.
    // Second level - digital anchor for fast filtering by charcodes.
    //
    this.__cache__ = null;
  }

  /**
   * Find the index of a rule by `name`.
   *
   * @param  {String} `name`
   * @return {Number} Index of the given `name`
   * @api private
   */

  Ruler.prototype.__find__ = function (name) {
    var len = this.__rules__.length;
    var i = -1;

    while (len--) {
      if (this.__rules__[++i].name === name) {
        return i;
      }
    }
    return -1;
  };

  /**
   * Build the rules lookup cache
   *
   * @api private
   */

  Ruler.prototype.__compile__ = function () {
    var self = this;
    var chains = [ '' ];

    // collect unique names
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) {
        return;
      }

      rule.alt.forEach(function (altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      });
    });

    self.__cache__ = {};

    chains.forEach(function (chain) {
      self.__cache__[chain] = [];
      self.__rules__.forEach(function (rule) {
        if (!rule.enabled) {
          return;
        }

        if (chain && rule.alt.indexOf(chain) < 0) {
          return;
        }
        self.__cache__[chain].push(rule.fn);
      });
    });
  };

  /**
   * Ruler public methods
   * ------------------------------------------------
   */

  /**
   * Replace rule function
   *
   * @param  {String} `name` Rule name
   * @param  {Function `fn`
   * @param  {Object} `options`
   * @api private
   */

  Ruler.prototype.at = function (name, fn, options) {
    var idx = this.__find__(name);
    var opt = options || {};

    if (idx === -1) {
      throw new Error('Parser rule not found: ' + name);
    }

    this.__rules__[idx].fn = fn;
    this.__rules__[idx].alt = opt.alt || [];
    this.__cache__ = null;
  };

  /**
   * Add a rule to the chain before given the `ruleName`.
   *
   * @param  {String}   `beforeName`
   * @param  {String}   `ruleName`
   * @param  {Function} `fn`
   * @param  {Object}   `options`
   * @api private
   */

  Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
    var idx = this.__find__(beforeName);
    var opt = options || {};

    if (idx === -1) {
      throw new Error('Parser rule not found: ' + beforeName);
    }

    this.__rules__.splice(idx, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };

  /**
   * Add a rule to the chain after the given `ruleName`.
   *
   * @param  {String}   `afterName`
   * @param  {String}   `ruleName`
   * @param  {Function} `fn`
   * @param  {Object}   `options`
   * @api private
   */

  Ruler.prototype.after = function (afterName, ruleName, fn, options) {
    var idx = this.__find__(afterName);
    var opt = options || {};

    if (idx === -1) {
      throw new Error('Parser rule not found: ' + afterName);
    }

    this.__rules__.splice(idx + 1, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };

  /**
   * Add a rule to the end of chain.
   *
   * @param  {String}   `ruleName`
   * @param  {Function} `fn`
   * @param  {Object}   `options`
   * @return {String}
   */

  Ruler.prototype.push = function (ruleName, fn, options) {
    var opt = options || {};

    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };

  /**
   * Enable a rule or list of rules.
   *
   * @param  {String|Array} `list` Name or array of rule names to enable
   * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
   * @api private
   */

  Ruler.prototype.enable = function (list, strict) {
    list = !Array.isArray(list)
      ? [ list ]
      : list;

    // In strict mode disable all existing rules first
    if (strict) {
      this.__rules__.forEach(function (rule) {
        rule.enabled = false;
      });
    }

    // Search by name and enable
    list.forEach(function (name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        throw new Error('Rules manager: invalid rule name ' + name);
      }
      this.__rules__[idx].enabled = true;
    }, this);

    this.__cache__ = null;
  };


  /**
   * Disable a rule or list of rules.
   *
   * @param  {String|Array} `list` Name or array of rule names to disable
   * @api private
   */

  Ruler.prototype.disable = function (list) {
    list = !Array.isArray(list)
      ? [ list ]
      : list;

    // Search by name and disable
    list.forEach(function (name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        throw new Error('Rules manager: invalid rule name ' + name);
      }
      this.__rules__[idx].enabled = false;
    }, this);

    this.__cache__ = null;
  };

  /**
   * Get a rules list as an array of functions.
   *
   * @param  {String} `chainName`
   * @return {Object}
   * @api private
   */

  Ruler.prototype.getRules = function (chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[chainName] || [];
  };

  /**
   * Expose `Ruler`
   */

  var ruler = Ruler;

  var block = function block(state) {

    if (state.inlineMode) {
      state.tokens.push({
        type: 'inline',
        content: state.src.replace(/\n/g, ' ').trim(),
        level: 0,
        lines: [ 0, 1 ],
        children: []
      });

    } else {
      state.block.parse(state.src, state.options, state.env, state.tokens);
    }
  };

  // Inline parser state

  function StateInline(src, parserInline, options, env, outTokens) {
    this.src = src;
    this.env = env;
    this.options = options;
    this.parser = parserInline;
    this.tokens = outTokens;
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = '';
    this.pendingLevel = 0;

    this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
                            // optimization of pairs parse (emphasis, strikes).

    // Link parser state vars

    this.isInLabel = false; // Set true when seek link label - we should disable
                            // "paired" rules (emphasis, strikes) to not skip
                            // tailing `]`

    this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
                            // nesting in definitions

    this.linkContent = '';  // Temporary storage for link url

    this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
                                   // (backtrack optimization)
  }

  // Flush pending text
  //
  StateInline.prototype.pushPending = function () {
    this.tokens.push({
      type: 'text',
      content: this.pending,
      level: this.pendingLevel
    });
    this.pending = '';
  };

  // Push new token to "stream".
  // If pending text exists - flush it as text token
  //
  StateInline.prototype.push = function (token) {
    if (this.pending) {
      this.pushPending();
    }

    this.tokens.push(token);
    this.pendingLevel = this.level;
  };

  // Store value to cache.
  // !!! Implementation has parser-specific optimizations
  // !!! keys MUST be integer, >= 0; values MUST be integer, > 0
  //
  StateInline.prototype.cacheSet = function (key, val) {
    for (var i = this.cache.length; i <= key; i++) {
      this.cache.push(0);
    }

    this.cache[key] = val;
  };

  // Get cache value
  //
  StateInline.prototype.cacheGet = function (key) {
    return key < this.cache.length ? this.cache[key] : 0;
  };

  var state_inline = StateInline;

  /**
   * Parse link labels
   *
   * This function assumes that first character (`[`) already matches;
   * returns the end of the label.
   *
   * @param  {Object} state
   * @param  {Number} start
   * @api private
   */

  var parse_link_label = function parseLinkLabel(state, start) {
    var level, found, marker,
        labelEnd = -1,
        max = state.posMax,
        oldPos = state.pos,
        oldFlag = state.isInLabel;

    if (state.isInLabel) { return -1; }

    if (state.labelUnmatchedScopes) {
      state.labelUnmatchedScopes--;
      return -1;
    }

    state.pos = start + 1;
    state.isInLabel = true;
    level = 1;

    while (state.pos < max) {
      marker = state.src.charCodeAt(state.pos);
      if (marker === 0x5B /* [ */) {
        level++;
      } else if (marker === 0x5D /* ] */) {
        level--;
        if (level === 0) {
          found = true;
          break;
        }
      }

      state.parser.skipToken(state);
    }

    if (found) {
      labelEnd = state.pos;
      state.labelUnmatchedScopes = 0;
    } else {
      state.labelUnmatchedScopes = level - 1;
    }

    // restore old state
    state.pos = oldPos;
    state.isInLabel = oldFlag;

    return labelEnd;
  };

  function parseAbbr(str, parserInline, options, env) {
    var state, labelEnd, pos, max, label, title;

    if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
    if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }

    if (str.indexOf(']:') === -1) { return -1; }

    state = new state_inline(str, parserInline, options, env, []);
    labelEnd = parse_link_label(state, 1);

    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

    max = state.posMax;

    // abbr title is always one line, so looking for ending "\n" here
    for (pos = labelEnd + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 0x0A) { break; }
    }

    label = str.slice(2, labelEnd);
    title = str.slice(labelEnd + 2, pos).trim();
    if (title.length === 0) { return -1; }
    if (!env.abbreviations) { env.abbreviations = {}; }
    // prepend ':' to avoid conflict with Object.prototype members
    if (typeof env.abbreviations[':' + label] === 'undefined') {
      env.abbreviations[':' + label] = title;
    }

    return pos;
  }

  var abbr = function abbr(state) {
    var tokens = state.tokens, i, l, content, pos;

    if (state.inlineMode) {
      return;
    }

    // Parse inlines
    for (i = 1, l = tokens.length - 1; i < l; i++) {
      if (tokens[i - 1].type === 'paragraph_open' &&
          tokens[i].type === 'inline' &&
          tokens[i + 1].type === 'paragraph_close') {

        content = tokens[i].content;
        while (content.length) {
          pos = parseAbbr(content, state.inline, state.options, state.env);
          if (pos < 0) { break; }
          content = content.slice(pos).trim();
        }

        tokens[i].content = content;
        if (!content.length) {
          tokens[i - 1].tight = true;
          tokens[i + 1].tight = true;
        }
      }
    }
  };

  var replaceEntities$2 = utils.replaceEntities;

  var normalize_link = function normalizeLink(url) {
    var normalized = replaceEntities$2(url);
    // We shouldn't care about the result of malformed URIs,
    // and should not throw an exception.
    try {
      normalized = decodeURI(normalized);
    } catch (err) {}
    return encodeURI(normalized);
  };

  var unescapeMd$2    = utils.unescapeMd;

  /**
   * Parse link destination
   *
   *   - on success it returns a string and updates state.pos;
   *   - on failure it returns null
   *
   * @param  {Object} state
   * @param  {Number} pos
   * @api private
   */

  var parse_link_destination = function parseLinkDestination(state, pos) {
    var code, level, link,
        start = pos,
        max = state.posMax;

    if (state.src.charCodeAt(pos) === 0x3C /* < */) {
      pos++;
      while (pos < max) {
        code = state.src.charCodeAt(pos);
        if (code === 0x0A /* \n */) { return false; }
        if (code === 0x3E /* > */) {
          link = normalize_link(unescapeMd$2(state.src.slice(start + 1, pos)));
          if (!state.parser.validateLink(link)) { return false; }
          state.pos = pos + 1;
          state.linkContent = link;
          return true;
        }
        if (code === 0x5C /* \ */ && pos + 1 < max) {
          pos += 2;
          continue;
        }

        pos++;
      }

      // no closing '>'
      return false;
    }

    // this should be ... } else { ... branch

    level = 0;
    while (pos < max) {
      code = state.src.charCodeAt(pos);

      if (code === 0x20) { break; }

      if (code > 0x08 && code < 0x0e) { break; }

      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      if (code === 0x28 /* ( */) {
        level++;
        if (level > 1) { break; }
      }

      if (code === 0x29 /* ) */) {
        level--;
        if (level < 0) { break; }
      }

      pos++;
    }

    if (start === pos) { return false; }

    link = unescapeMd$2(state.src.slice(start, pos));
    if (!state.parser.validateLink(link)) { return false; }

    state.linkContent = link;
    state.pos = pos;
    return true;
  };

  var unescapeMd$3 = utils.unescapeMd;

  /**
   * Parse link title
   *
   *   - on success it returns a string and updates state.pos;
   *   - on failure it returns null
   *
   * @param  {Object} state
   * @param  {Number} pos
   * @api private
   */

  var parse_link_title = function parseLinkTitle(state, pos) {
    var code,
        start = pos,
        max = state.posMax,
        marker = state.src.charCodeAt(pos);

    if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }

    pos++;

    // if opening marker is "(", switch it to closing marker ")"
    if (marker === 0x28) { marker = 0x29; }

    while (pos < max) {
      code = state.src.charCodeAt(pos);
      if (code === marker) {
        state.pos = pos + 1;
        state.linkContent = unescapeMd$3(state.src.slice(start + 1, pos));
        return true;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    return false;
  };

  var normalize_reference = function normalizeReference(str) {
    // use .toUpperCase() instead of .toLowerCase()
    // here to avoid a conflict with Object.prototype
    // members (most notably, `__proto__`)
    return str.trim().replace(/\s+/g, ' ').toUpperCase();
  };

  function parseReference(str, parser, options, env) {
    var state, labelEnd, pos, max, code, start, href, title, label;

    if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }

    if (str.indexOf(']:') === -1) { return -1; }

    state = new state_inline(str, parser, options, env, []);
    labelEnd = parse_link_label(state, 0);

    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

    max = state.posMax;

    // [label]:   destination   'title'
    //         ^^^ skip optional whitespace here
    for (pos = labelEnd + 2; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    // [label]:   destination   'title'
    //            ^^^^^^^^^^^ parse this
    if (!parse_link_destination(state, pos)) { return -1; }
    href = state.linkContent;
    pos = state.pos;

    // [label]:   destination   'title'
    //                       ^^^ skipping those spaces
    start = pos;
    for (pos = pos + 1; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    // [label]:   destination   'title'
    //                          ^^^^^^^ parse this
    if (pos < max && start !== pos && parse_link_title(state, pos)) {
      title = state.linkContent;
      pos = state.pos;
    } else {
      title = '';
      pos = start;
    }

    // ensure that the end of the line is empty
    while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
    if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }

    label = normalize_reference(str.slice(1, labelEnd));
    if (typeof env.references[label] === 'undefined') {
      env.references[label] = { title: title, href: href };
    }

    return pos;
  }


  var references = function references(state) {
    var tokens = state.tokens, i, l, content, pos;

    state.env.references = state.env.references || {};

    if (state.inlineMode) {
      return;
    }

    // Scan definitions in paragraph inlines
    for (i = 1, l = tokens.length - 1; i < l; i++) {
      if (tokens[i].type === 'inline' &&
          tokens[i - 1].type === 'paragraph_open' &&
          tokens[i + 1].type === 'paragraph_close') {

        content = tokens[i].content;
        while (content.length) {
          pos = parseReference(content, state.inline, state.options, state.env);
          if (pos < 0) { break; }
          content = content.slice(pos).trim();
        }

        tokens[i].content = content;
        if (!content.length) {
          tokens[i - 1].tight = true;
          tokens[i + 1].tight = true;
        }
      }
    }
  };

  var inline = function inline(state) {
    var tokens = state.tokens, tok, i, l;

    // Parse inlines
    for (i = 0, l = tokens.length; i < l; i++) {
      tok = tokens[i];
      if (tok.type === 'inline') {
        state.inline.parse(tok.content, state.options, state.env, tok.children);
      }
    }
  };

  var footnote_tail = function footnote_block(state) {
    var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
        level = 0,
        insideRef = false,
        refTokens = {};

    if (!state.env.footnotes) { return; }

    state.tokens = state.tokens.filter(function(tok) {
      if (tok.type === 'footnote_reference_open') {
        insideRef = true;
        current = [];
        currentLabel = tok.label;
        return false;
      }
      if (tok.type === 'footnote_reference_close') {
        insideRef = false;
        // prepend ':' to avoid conflict with Object.prototype members
        refTokens[':' + currentLabel] = current;
        return false;
      }
      if (insideRef) { current.push(tok); }
      return !insideRef;
    });

    if (!state.env.footnotes.list) { return; }
    list = state.env.footnotes.list;

    state.tokens.push({
      type: 'footnote_block_open',
      level: level++
    });
    for (i = 0, l = list.length; i < l; i++) {
      state.tokens.push({
        type: 'footnote_open',
        id: i,
        level: level++
      });

      if (list[i].tokens) {
        tokens = [];
        tokens.push({
          type: 'paragraph_open',
          tight: false,
          level: level++
        });
        tokens.push({
          type: 'inline',
          content: '',
          level: level,
          children: list[i].tokens
        });
        tokens.push({
          type: 'paragraph_close',
          tight: false,
          level: --level
        });
      } else if (list[i].label) {
        tokens = refTokens[':' + list[i].label];
      }

      state.tokens = state.tokens.concat(tokens);
      if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
        lastParagraph = state.tokens.pop();
      } else {
        lastParagraph = null;
      }

      t = list[i].count > 0 ? list[i].count : 1;
      for (j = 0; j < t; j++) {
        state.tokens.push({
          type: 'footnote_anchor',
          id: i,
          subId: j,
          level: level
        });
      }

      if (lastParagraph) {
        state.tokens.push(lastParagraph);
      }

      state.tokens.push({
        type: 'footnote_close',
        level: --level
      });
    }
    state.tokens.push({
      type: 'footnote_block_close',
      level: --level
    });
  };

  // Enclose abbreviations in <abbr> tags


  var PUNCT_CHARS = ' \n()[]\'".,!?-';


  // from Google closure library
  // http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
  function regEscape(s) {
    return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
  }


  var abbr2 = function abbr2(state) {
    var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
        blockTokens = state.tokens;

    if (!state.env.abbreviations) { return; }
    if (!state.env.abbrRegExp) {
      regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
              + '(' + Object.keys(state.env.abbreviations).map(function (x) {
                        return x.substr(1);
                      }).sort(function (a, b) {
                        return b.length - a.length;
                      }).map(regEscape).join('|') + ')'
              + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
      state.env.abbrRegExp = new RegExp(regText, 'g');
    }
    reg = state.env.abbrRegExp;

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') { continue; }
      tokens = blockTokens[j].children;

      // We scan from the end, to keep position when new tags added.
      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];
        if (token.type !== 'text') { continue; }

        pos = 0;
        text = token.content;
        reg.lastIndex = 0;
        level = token.level;
        nodes = [];

        while ((m = reg.exec(text))) {
          if (reg.lastIndex > pos) {
            nodes.push({
              type: 'text',
              content: text.slice(pos, m.index + m[1].length),
              level: level
            });
          }

          nodes.push({
            type: 'abbr_open',
            title: state.env.abbreviations[':' + m[2]],
            level: level++
          });
          nodes.push({
            type: 'text',
            content: m[2],
            level: level
          });
          nodes.push({
            type: 'abbr_close',
            level: --level
          });
          pos = reg.lastIndex - m[3].length;
        }

        if (!nodes.length) { continue; }

        if (pos < text.length) {
          nodes.push({
            type: 'text',
            content: text.slice(pos),
            level: level
          });
        }

        // replace current node
        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
      }
    }
  };

  // Simple typographical replacements

  // TODO:
  // - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
  // - miltiplication 2 x 4 -> 2 × 4

  var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

  var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
  var SCOPED_ABBR = {
    'c': '©',
    'r': '®',
    'p': '§',
    'tm': '™'
  };

  function replaceScopedAbbr(str) {
    if (str.indexOf('(') < 0) { return str; }

    return str.replace(SCOPED_ABBR_RE, function(match, name) {
      return SCOPED_ABBR[name.toLowerCase()];
    });
  }


  var replacements = function replace(state) {
    var i, token, text, inlineTokens, blkIdx;

    if (!state.options.typographer) { return; }

    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

      if (state.tokens[blkIdx].type !== 'inline') { continue; }

      inlineTokens = state.tokens[blkIdx].children;

      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === 'text') {
          text = token.content;

          text = replaceScopedAbbr(text);

          if (RARE_RE.test(text)) {
            text = text
              .replace(/\+-/g, '±')
              // .., ..., ....... -> …
              // but ?..... & !..... -> ?.. & !..
              .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
              .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
              // em-dash
              .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
              // en-dash
              .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
              .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
          }

          token.content = text;
        }
      }
    }
  };

  // Convert straight quotation marks to typographic ones


  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var PUNCT_RE = /[-\s()\[\]]/;
  var APOSTROPHE = '’';

  // This function returns true if the character at `pos`
  // could be inside a word.
  function isLetter(str, pos) {
    if (pos < 0 || pos >= str.length) { return false; }
    return !PUNCT_RE.test(str[pos]);
  }


  function replaceAt(str, index, ch) {
    return str.substr(0, index) + ch + str.substr(index + 1);
  }


  var smartquotes = function smartquotes(state) {
    /*eslint max-depth:0*/
    var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
        canOpen, canClose, j, isSingle, blkIdx, tokens,
        stack;

    if (!state.options.typographer) { return; }

    stack = [];

    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

      if (state.tokens[blkIdx].type !== 'inline') { continue; }

      tokens = state.tokens[blkIdx].children;
      stack.length = 0;

      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];

        if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }

        thisLevel = tokens[i].level;

        for (j = stack.length - 1; j >= 0; j--) {
          if (stack[j].level <= thisLevel) { break; }
        }
        stack.length = j + 1;

        text = token.content;
        pos = 0;
        max = text.length;

        /*eslint no-labels:0,block-scoped-var:0*/
        OUTER:
        while (pos < max) {
          QUOTE_RE.lastIndex = pos;
          t = QUOTE_RE.exec(text);
          if (!t) { break; }

          lastSpace = !isLetter(text, t.index - 1);
          pos = t.index + 1;
          isSingle = (t[0] === "'");
          nextSpace = !isLetter(text, pos);

          if (!nextSpace && !lastSpace) {
            // middle of word
            if (isSingle) {
              token.content = replaceAt(token.content, t.index, APOSTROPHE);
            }
            continue;
          }

          canOpen = !nextSpace;
          canClose = !lastSpace;

          if (canClose) {
            // this could be a closing quote, rewind the stack to get a match
            for (j = stack.length - 1; j >= 0; j--) {
              item = stack[j];
              if (stack[j].level < thisLevel) { break; }
              if (item.single === isSingle && stack[j].level === thisLevel) {
                item = stack[j];
                if (isSingle) {
                  tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
                  token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
                } else {
                  tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
                  token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
                }
                stack.length = j;
                continue OUTER;
              }
            }
          }

          if (canOpen) {
            stack.push({
              token: i,
              pos: t.index,
              single: isSingle,
              level: thisLevel
            });
          } else if (canClose && isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
        }
      }
    }
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var Autolinker = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
    if (typeof undefined === 'function' && undefined.amd) {
      // AMD. Register as an anonymous module unless amdModuleId is set
      undefined([], function () {
        return (root['Autolinker'] = factory());
      });
    } else {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory();
    }
  }(commonjsGlobal, function () {

  /*!
   * Autolinker.js
   * 0.15.3
   *
   * Copyright(c) 2015 Gregory Jacobs <greg@greg-jacobs.com>
   * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
   *
   * https://github.com/gregjacobs/Autolinker.js
   */
  /**
   * @class Autolinker
   * @extends Object
   * 
   * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in 
   * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
   * 
   * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
   * will configure how the {@link #link link()} method will process the links.
   * 
   * For example:
   * 
   *     var autolinker = new Autolinker( {
   *         newWindow : false,
   *         truncate  : 30
   *     } );
   *     
   *     var html = autolinker.link( "Joe went to www.yahoo.com" );
   *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
   * 
   * 
   * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
   * be more convenient for one-off uses. For example:
   * 
   *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
   *         newWindow : false,
   *         truncate  : 30
   *     } );
   *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
   * 
   * 
   * ## Custom Replacements of Links
   * 
   * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
   * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
   * 
   * For example:
   * 
   *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
   *     
   *     var linkedText = Autolinker.link( input, {
   *         replaceFn : function( autolinker, match ) {
   *             console.log( "href = ", match.getAnchorHref() );
   *             console.log( "text = ", match.getAnchorText() );
   *         
   *             switch( match.getType() ) {
   *                 case 'url' : 
   *                     console.log( "url: ", match.getUrl() );
   *                     
   *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
   *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
   *                         tag.setAttr( 'rel', 'nofollow' );
   *                         tag.addClass( 'external-link' );
   *                         
   *                         return tag;
   *                         
   *                     } else {
   *                         return true;  // let Autolinker perform its normal anchor tag replacement
   *                     }
   *                     
   *                 case 'email' :
   *                     var email = match.getEmail();
   *                     console.log( "email: ", email );
   *                     
   *                     if( email === "my@own.address" ) {
   *                         return false;  // don't auto-link this particular email address; leave as-is
   *                     } else {
   *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
   *                     }
   *                 
   *                 case 'twitter' :
   *                     var twitterHandle = match.getTwitterHandle();
   *                     console.log( twitterHandle );
   *                     
   *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
   *             }
   *         }
   *     } );
   * 
   * 
   * The function may return the following values:
   * 
   * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
   * - `false` (Boolean): Do not replace the current match at all - leave as-is.
   * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
   *   the match.
   * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
   * 
   * @constructor
   * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
   */
  var Autolinker = function( cfg ) {
  	Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.
  };


  Autolinker.prototype = {
  	constructor : Autolinker,  // fix constructor property
  	
  	/**
  	 * @cfg {Boolean} urls
  	 * 
  	 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
  	 */
  	urls : true,
  	
  	/**
  	 * @cfg {Boolean} email
  	 * 
  	 * `true` if email addresses should be automatically linked, `false` if they should not be.
  	 */
  	email : true,
  	
  	/**
  	 * @cfg {Boolean} twitter
  	 * 
  	 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
  	 */
  	twitter : true,
  	
  	/**
  	 * @cfg {Boolean} newWindow
  	 * 
  	 * `true` if the links should open in a new window, `false` otherwise.
  	 */
  	newWindow : true,
  	
  	/**
  	 * @cfg {Boolean} stripPrefix
  	 * 
  	 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text, 
  	 * `false` otherwise.
  	 */
  	stripPrefix : true,
  	
  	/**
  	 * @cfg {Number} truncate
  	 * 
  	 * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of 
  	 * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by 
  	 * adding a two period ellipsis ('..') to the end of the string.
  	 * 
  	 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
  	 * something like this: 'yahoo.com/some/long/pat..'
  	 */
  	truncate : undefined,
  	
  	/**
  	 * @cfg {String} className
  	 * 
  	 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
  	 * plus url/email/twitter suffixes for styling url/email/twitter links differently.
  	 * 
  	 * For example, if this config is provided as "myLink", then:
  	 * 
  	 * - URL links will have the CSS classes: "myLink myLink-url"
  	 * - Email links will have the CSS classes: "myLink myLink-email", and
  	 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
  	 */
  	className : "",
  	
  	/**
  	 * @cfg {Function} replaceFn
  	 * 
  	 * A function to individually process each URL/Email/Twitter match found in the input string.
  	 * 
  	 * See the class's description for usage.
  	 * 
  	 * This function is called with the following parameters:
  	 * 
  	 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
  	 *   as the instance's {@link #getTagBuilder tag builder}).
  	 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
  	 *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
  	 *   match that the `replaceFn` is currently processing.
  	 */
  	
  	
  	/**
  	 * @private
  	 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
  	 * 
  	 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
  	 * in the {@link #getHtmlParser} method.
  	 */
  	htmlParser : undefined,
  	
  	/**
  	 * @private
  	 * @property {Autolinker.matchParser.MatchParser} matchParser
  	 * 
  	 * The MatchParser instance used to find URL/email/Twitter matches in the text nodes of an input string passed to
  	 * {@link #link}. This is lazily instantiated in the {@link #getMatchParser} method.
  	 */
  	matchParser : undefined,
  	
  	/**
  	 * @private
  	 * @property {Autolinker.AnchorTagBuilder} tagBuilder
  	 * 
  	 * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
  	 * in the {@link #getTagBuilder} method.
  	 */
  	tagBuilder : undefined,
  	
  	
  	/**
  	 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
  	 * Does not link URLs found within HTML tags.
  	 * 
  	 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
  	 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
  	 * 
  	 * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
  	 * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
  	 * 
  	 * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
  	 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
  	 * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
  	 */
  	link : function( textOrHtml ) {
  		var htmlParser = this.getHtmlParser(),
  		    htmlNodes = htmlParser.parse( textOrHtml ),
  		    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
  		    resultHtml = [];
  		
  		for( var i = 0, len = htmlNodes.length; i < len; i++ ) {
  			var node = htmlNodes[ i ],
  			    nodeType = node.getType(),
  			    nodeText = node.getText();
  			
  			if( nodeType === 'element' ) {
  				// Process HTML nodes in the input `textOrHtml`
  				if( node.getTagName() === 'a' ) {
  					if( !node.isClosing() ) {  // it's the start <a> tag
  						anchorTagStackCount++;
  					} else {   // it's the end </a> tag
  						anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
  					}
  				}
  				resultHtml.push( nodeText );  // now add the text of the tag itself verbatim
  				
  			} else if( nodeType === 'entity' ) {
  				resultHtml.push( nodeText );  // append HTML entity nodes (such as '&nbsp;') verbatim
  				
  			} else {
  				// Process text nodes in the input `textOrHtml`
  				if( anchorTagStackCount === 0 ) {
  					// If we're not within an <a> tag, process the text node to linkify
  					var linkifiedStr = this.linkifyStr( nodeText );
  					resultHtml.push( linkifiedStr );
  					
  				} else {
  					// `text` is within an <a> tag, simply append the text - we do not want to autolink anything 
  					// already within an <a>...</a> tag
  					resultHtml.push( nodeText );
  				}
  			}
  		}
  		
  		return resultHtml.join( "" );
  	},
  	
  	
  	/**
  	 * Process the text that lies in between HTML tags, performing the anchor tag replacements for matched 
  	 * URLs/emails/Twitter handles, and returns the string with the replacements made. 
  	 * 
  	 * This method does the actual wrapping of URLs/emails/Twitter handles with anchor tags.
  	 * 
  	 * @private
  	 * @param {String} str The string of text to auto-link.
  	 * @return {String} The text with anchor tags auto-filled.
  	 */
  	linkifyStr : function( str ) {
  		return this.getMatchParser().replace( str, this.createMatchReturnVal, this );
  	},
  	
  	
  	/**
  	 * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
  	 * 
  	 * This method handles the {@link #replaceFn}, if one was provided.
  	 * 
  	 * @private
  	 * @param {Autolinker.match.Match} match The Match object that represents the match.
  	 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
  	 *   may be the `matchStr` itself if the match is not to be replaced.
  	 */
  	createMatchReturnVal : function( match ) {
  		// Handle a custom `replaceFn` being provided
  		var replaceFnResult;
  		if( this.replaceFn ) {
  			replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
  		}
  		
  		if( typeof replaceFnResult === 'string' ) {
  			return replaceFnResult;  // `replaceFn` returned a string, use that
  			
  		} else if( replaceFnResult === false ) {
  			return match.getMatchedText();  // no replacement for the match
  			
  		} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
  			return replaceFnResult.toString();
  		
  		} else {  // replaceFnResult === true, or no/unknown return value from function
  			// Perform Autolinker's default anchor tag generation
  			var tagBuilder = this.getTagBuilder(),
  			    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance
  			
  			return anchorTag.toString();
  		}
  	},
  	
  	
  	/**
  	 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
  	 * 
  	 * @protected
  	 * @return {Autolinker.htmlParser.HtmlParser}
  	 */
  	getHtmlParser : function() {
  		var htmlParser = this.htmlParser;
  		
  		if( !htmlParser ) {
  			htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();
  		}
  		
  		return htmlParser;
  	},
  	
  	
  	/**
  	 * Lazily instantiates and returns the {@link #matchParser} instance for this Autolinker instance.
  	 * 
  	 * @protected
  	 * @return {Autolinker.matchParser.MatchParser}
  	 */
  	getMatchParser : function() {
  		var matchParser = this.matchParser;
  		
  		if( !matchParser ) {
  			matchParser = this.matchParser = new Autolinker.matchParser.MatchParser( {
  				urls : this.urls,
  				email : this.email,
  				twitter : this.twitter,
  				stripPrefix : this.stripPrefix
  			} );
  		}
  		
  		return matchParser;
  	},
  	
  	
  	/**
  	 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
  	 * if it does not yet exist.
  	 * 
  	 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that 
  	 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
  	 * 
  	 *     var html = Autolinker.link( "Test google.com", {
  	 *         replaceFn : function( autolinker, match ) {
  	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
  	 *             tag.setAttr( 'rel', 'nofollow' );
  	 *             
  	 *             return tag;
  	 *         }
  	 *     } );
  	 *     
  	 *     // generated html:
  	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
  	 * 
  	 * @return {Autolinker.AnchorTagBuilder}
  	 */
  	getTagBuilder : function() {
  		var tagBuilder = this.tagBuilder;
  		
  		if( !tagBuilder ) {
  			tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
  				newWindow   : this.newWindow,
  				truncate    : this.truncate,
  				className   : this.className
  			} );
  		}
  		
  		return tagBuilder;
  	}

  };


  /**
   * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
   * Does not link URLs found within HTML tags.
   * 
   * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
   * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
   * 
   * Example:
   * 
   *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
   *     // Produces: "Go to <a href="http://google.com">google.com</a>"
   * 
   * @static
   * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
   *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
   * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
   *   See the class description for an example call.
   * @return {String} The HTML text, with URLs automatically linked
   */
  Autolinker.link = function( textOrHtml, options ) {
  	var autolinker = new Autolinker( options );
  	return autolinker.link( textOrHtml );
  };


  // Autolinker Namespaces
  Autolinker.match = {};
  Autolinker.htmlParser = {};
  Autolinker.matchParser = {};
  /*global Autolinker */
  /*jshint eqnull:true, boss:true */
  /**
   * @class Autolinker.Util
   * @singleton
   * 
   * A few utility methods for Autolinker.
   */
  Autolinker.Util = {
  	
  	/**
  	 * @property {Function} abstractMethod
  	 * 
  	 * A function object which represents an abstract method.
  	 */
  	abstractMethod : function() { throw "abstract"; },
  	
  	
  	/**
  	 * Assigns (shallow copies) the properties of `src` onto `dest`.
  	 * 
  	 * @param {Object} dest The destination object.
  	 * @param {Object} src The source object.
  	 * @return {Object} The destination object (`dest`)
  	 */
  	assign : function( dest, src ) {
  		for( var prop in src ) {
  			if( src.hasOwnProperty( prop ) ) {
  				dest[ prop ] = src[ prop ];
  			}
  		}
  		
  		return dest;
  	},
  	
  	
  	/**
  	 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
  	 * 
  	 * @param {Function} superclass The constructor function for the superclass.
  	 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
  	 *   special property `constructor`, which will be used as the new subclass's constructor function.
  	 * @return {Function} The new subclass function.
  	 */
  	extend : function( superclass, protoProps ) {
  		var superclassProto = superclass.prototype;
  		
  		var F = function() {};
  		F.prototype = superclassProto;
  		
  		var subclass;
  		if( protoProps.hasOwnProperty( 'constructor' ) ) {
  			subclass = protoProps.constructor;
  		} else {
  			subclass = function() { superclassProto.constructor.apply( this, arguments ); };
  		}
  		
  		var subclassProto = subclass.prototype = new F();  // set up prototype chain
  		subclassProto.constructor = subclass;  // fix constructor property
  		subclassProto.superclass = superclassProto;
  		
  		delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
  		Autolinker.Util.assign( subclassProto, protoProps );
  		
  		return subclass;
  	},
  	
  	
  	/**
  	 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
  	 * end of the string (by default, two periods: '..'). If the `str` length does not exceed 
  	 * `len`, the string will be returned unchanged.
  	 * 
  	 * @param {String} str The string to truncate and add an ellipsis to.
  	 * @param {Number} truncateLen The length to truncate the string at.
  	 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
  	 *   when truncated. Defaults to '..'
  	 */
  	ellipsis : function( str, truncateLen, ellipsisChars ) {
  		if( str.length > truncateLen ) {
  			ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
  			str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
  		}
  		return str;
  	},
  	
  	
  	/**
  	 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
  	 * 
  	 * @param {Array} arr The array to find an element of.
  	 * @param {*} element The element to find in the array, and return the index of.
  	 * @return {Number} The index of the `element`, or -1 if it was not found.
  	 */
  	indexOf : function( arr, element ) {
  		if( Array.prototype.indexOf ) {
  			return arr.indexOf( element );
  			
  		} else {
  			for( var i = 0, len = arr.length; i < len; i++ ) {
  				if( arr[ i ] === element ) return i;
  			}
  			return -1;
  		}
  	},
  	
  	
  	
  	/**
  	 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
  	 * with a regular expression that contains capturing parenthesis.
  	 * 
  	 * For example:
  	 * 
  	 *     // Modern browsers: 
  	 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
  	 *     
  	 *     // Old IE (including IE8):
  	 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
  	 *     
  	 * This method emulates the functionality of modern browsers for the old IE case.
  	 * 
  	 * @param {String} str The string to split.
  	 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
  	 *   character(s) will be spliced into the array, as in the "modern browsers" example in the 
  	 *   description of this method. 
  	 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
  	 *   Note #2: for simplicity's sake, the regular expression does not need 
  	 *   to contain capturing parenthesis - it will be assumed that any match has them.
  	 * @return {String[]} The split array of strings, with the splitting character(s) included.
  	 */
  	splitAndCapture : function( str, splitRegex ) {
  		if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );
  		
  		var result = [],
  		    lastIdx = 0,
  		    match;
  		
  		while( match = splitRegex.exec( str ) ) {
  			result.push( str.substring( lastIdx, match.index ) );
  			result.push( match[ 0 ] );  // push the splitting char(s)
  			
  			lastIdx = match.index + match[ 0 ].length;
  		}
  		result.push( str.substring( lastIdx ) );
  		
  		return result;
  	}
  	
  };
  /*global Autolinker */
  /*jshint boss:true */
  /**
   * @class Autolinker.HtmlTag
   * @extends Object
   * 
   * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
   * 
   * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
   * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
   * 
   * ## Examples
   * 
   * Example instantiation:
   * 
   *     var tag = new Autolinker.HtmlTag( {
   *         tagName : 'a',
   *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
   *         innerHtml : 'Google'
   *     } );
   *     
   *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
   *     
   *     // Individual accessor methods
   *     tag.getTagName();                 // 'a'
   *     tag.getAttr( 'href' );            // 'http://google.com'
   *     tag.hasClass( 'external-link' );  // true
   * 
   * 
   * Using mutator methods (which may be used in combination with instantiation config properties):
   * 
   *     var tag = new Autolinker.HtmlTag();
   *     tag.setTagName( 'a' );
   *     tag.setAttr( 'href', 'http://google.com' );
   *     tag.addClass( 'external-link' );
   *     tag.setInnerHtml( 'Google' );
   *     
   *     tag.getTagName();                 // 'a'
   *     tag.getAttr( 'href' );            // 'http://google.com'
   *     tag.hasClass( 'external-link' );  // true
   *     
   *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
   *     
   * 
   * ## Example use within a {@link Autolinker#replaceFn replaceFn}
   * 
   *     var html = Autolinker.link( "Test google.com", {
   *         replaceFn : function( autolinker, match ) {
   *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
   *             tag.setAttr( 'rel', 'nofollow' );
   *             
   *             return tag;
   *         }
   *     } );
   *     
   *     // generated html:
   *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
   *     
   *     
   * ## Example use with a new tag for the replacement
   * 
   *     var html = Autolinker.link( "Test google.com", {
   *         replaceFn : function( autolinker, match ) {
   *             var tag = new Autolinker.HtmlTag( {
   *                 tagName : 'button',
   *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
   *                 innerHtml : 'Load URL: ' + match.getAnchorText()
   *             } );
   *             
   *             return tag;
   *         }
   *     } );
   *     
   *     // generated html:
   *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
   */
  Autolinker.HtmlTag = Autolinker.Util.extend( Object, {
  	
  	/**
  	 * @cfg {String} tagName
  	 * 
  	 * The tag name. Ex: 'a', 'button', etc.
  	 * 
  	 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
  	 * is executed.
  	 */
  	
  	/**
  	 * @cfg {Object.<String, String>} attrs
  	 * 
  	 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
  	 * values are the attribute values.
  	 */
  	
  	/**
  	 * @cfg {String} innerHtml
  	 * 
  	 * The inner HTML for the tag. 
  	 * 
  	 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym 
  	 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
  	 * if you prefer, but this one is recommended.
  	 */
  	
  	/**
  	 * @cfg {String} innerHTML
  	 * 
  	 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
  	 * for acronym names.
  	 */
  	
  	
  	/**
  	 * @protected
  	 * @property {RegExp} whitespaceRegex
  	 * 
  	 * Regular expression used to match whitespace in a string of CSS classes.
  	 */
  	whitespaceRegex : /\s+/,
  	
  	
  	/**
  	 * @constructor
  	 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
  	 */
  	constructor : function( cfg ) {
  		Autolinker.Util.assign( this, cfg );
  		
  		this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
  	},
  	
  	
  	/**
  	 * Sets the tag name that will be used to generate the tag with.
  	 * 
  	 * @param {String} tagName
  	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
  	 */
  	setTagName : function( tagName ) {
  		this.tagName = tagName;
  		return this;
  	},
  	
  	
  	/**
  	 * Retrieves the tag name.
  	 * 
  	 * @return {String}
  	 */
  	getTagName : function() {
  		return this.tagName || "";
  	},
  	
  	
  	/**
  	 * Sets an attribute on the HtmlTag.
  	 * 
  	 * @param {String} attrName The attribute name to set.
  	 * @param {String} attrValue The attribute value to set.
  	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
  	 */
  	setAttr : function( attrName, attrValue ) {
  		var tagAttrs = this.getAttrs();
  		tagAttrs[ attrName ] = attrValue;
  		
  		return this;
  	},
  	
  	
  	/**
  	 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
  	 * 
  	 * @param {String} name The attribute name to retrieve.
  	 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
  	 */
  	getAttr : function( attrName ) {
  		return this.getAttrs()[ attrName ];
  	},
  	
  	
  	/**
  	 * Sets one or more attributes on the HtmlTag.
  	 * 
  	 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
  	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
  	 */
  	setAttrs : function( attrs ) {
  		var tagAttrs = this.getAttrs();
  		Autolinker.Util.assign( tagAttrs, attrs );
  		
  		return this;
  	},
  	
  	
  	/**
  	 * Retrieves the attributes Object (map) for the HtmlTag.
  	 * 
  	 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
  	 */
  	getAttrs : function() {
  		return this.attrs || ( this.attrs = {} );
  	},
  	
  	
  	/**
  	 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
  	 * 
  	 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
  	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
  	 */
  	setClass : function( cssClass ) {
  		return this.setAttr( 'class', cssClass );
  	},
  	
  	
  	/**
  	 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
  	 * 
  	 * @param {String} cssClass One or more space-separated CSS classes to add.
  	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
  	 */
  	addClass : function( cssClass ) {
  		var classAttr = this.getClass(),
  		    whitespaceRegex = this.whitespaceRegex,
  		    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
  		    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
  		    newClasses = cssClass.split( whitespaceRegex ),
  		    newClass;
  		
  		while( newClass = newClasses.shift() ) {
  			if( indexOf( classes, newClass ) === -1 ) {
  				classes.push( newClass );
  			}
  		}
  		
  		this.getAttrs()[ 'class' ] = classes.join( " " );
  		return this;
  	},
  	
  	
  	/**
  	 * Convenience method to remove one or more CSS classes from the HtmlTag.
  	 * 
  	 * @param {String} cssClass One or more space-separated CSS classes to remove.
  	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
  	 */
  	removeClass : function( cssClass ) {
  		var classAttr = this.getClass(),
  		    whitespaceRegex = this.whitespaceRegex,
  		    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
  		    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
  		    removeClasses = cssClass.split( whitespaceRegex ),
  		    removeClass;
  		
  		while( classes.length && ( removeClass = removeClasses.shift() ) ) {
  			var idx = indexOf( classes, removeClass );
  			if( idx !== -1 ) {
  				classes.splice( idx, 1 );
  			}
  		}
  		
  		this.getAttrs()[ 'class' ] = classes.join( " " );
  		return this;
  	},
  	
  	
  	/**
  	 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
  	 * there are multiple.
  	 * 
  	 * @return {String}
  	 */
  	getClass : function() {
  		return this.getAttrs()[ 'class' ] || "";
  	},
  	
  	
  	/**
  	 * Convenience method to check if the tag has a CSS class or not.
  	 * 
  	 * @param {String} cssClass The CSS class to check for.
  	 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
  	 */
  	hasClass : function( cssClass ) {
  		return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
  	},
  	
  	
  	/**
  	 * Sets the inner HTML for the tag.
  	 * 
  	 * @param {String} html The inner HTML to set.
  	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
  	 */
  	setInnerHtml : function( html ) {
  		this.innerHtml = html;
  		
  		return this;
  	},
  	
  	
  	/**
  	 * Retrieves the inner HTML for the tag.
  	 * 
  	 * @return {String}
  	 */
  	getInnerHtml : function() {
  		return this.innerHtml || "";
  	},
  	
  	
  	/**
  	 * Override of superclass method used to generate the HTML string for the tag.
  	 * 
  	 * @return {String}
  	 */
  	toString : function() {
  		var tagName = this.getTagName(),
  		    attrsStr = this.buildAttrsStr();
  		
  		attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes
  		
  		return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
  	},
  	
  	
  	/**
  	 * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate 
  	 * the stringified HtmlTag.
  	 * 
  	 * @protected
  	 * @return {String} Example return: `attr1="value1" attr2="value2"`
  	 */
  	buildAttrsStr : function() {
  		if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string
  		
  		var attrs = this.getAttrs(),
  		    attrsArr = [];
  		
  		for( var prop in attrs ) {
  			if( attrs.hasOwnProperty( prop ) ) {
  				attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
  			}
  		}
  		return attrsArr.join( " " );
  	}
  	
  } );
  /*global Autolinker */
  /*jshint sub:true */
  /**
   * @protected
   * @class Autolinker.AnchorTagBuilder
   * @extends Object
   * 
   * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
   * 
   * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may 
   * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
   * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
   * 
   *     var html = Autolinker.link( "Test google.com", {
   *         replaceFn : function( autolinker, match ) {
   *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
   *             tag.setAttr( 'rel', 'nofollow' );
   *             
   *             return tag;
   *         }
   *     } );
   *     
   *     // generated html:
   *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
   */
  Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {
  	
  	/**
  	 * @cfg {Boolean} newWindow
  	 * @inheritdoc Autolinker#newWindow
  	 */
  	
  	/**
  	 * @cfg {Number} truncate
  	 * @inheritdoc Autolinker#truncate
  	 */
  	
  	/**
  	 * @cfg {String} className
  	 * @inheritdoc Autolinker#className
  	 */
  	
  	
  	/**
  	 * @constructor
  	 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
  	 */
  	constructor : function( cfg ) {
  		Autolinker.Util.assign( this, cfg );
  	},
  	
  	
  	/**
  	 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
  	 * via its `match` object.
  	 * 
  	 * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
  	 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
  	 */
  	build : function( match ) {
  		var tag = new Autolinker.HtmlTag( {
  			tagName   : 'a',
  			attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
  			innerHtml : this.processAnchorText( match.getAnchorText() )
  		} );
  		
  		return tag;
  	},
  	
  	
  	/**
  	 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
  	 * 
  	 * @protected
  	 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
  	 * @param {String} href The href for the anchor tag.
  	 * @return {Object} A key/value Object (map) of the anchor tag's attributes. 
  	 */
  	createAttrs : function( matchType, anchorHref ) {
  		var attrs = {
  			'href' : anchorHref  // we'll always have the `href` attribute
  		};
  		
  		var cssClass = this.createCssClass( matchType );
  		if( cssClass ) {
  			attrs[ 'class' ] = cssClass;
  		}
  		if( this.newWindow ) {
  			attrs[ 'target' ] = "_blank";
  		}
  		
  		return attrs;
  	},
  	
  	
  	/**
  	 * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
  	 * config.
  	 * 
  	 * @private
  	 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
  	 * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
  	 *   was configured, returns an empty string.
  	 */
  	createCssClass : function( matchType ) {
  		var className = this.className;
  		
  		if( !className ) 
  			return "";
  		else
  			return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
  	},
  	
  	
  	/**
  	 * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
  	 * 
  	 * @private
  	 * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
  	 * @return {String} The processed `anchorText`.
  	 */
  	processAnchorText : function( anchorText ) {
  		anchorText = this.doTruncate( anchorText );
  		
  		return anchorText;
  	},
  	
  	
  	/**
  	 * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
  	 * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
  	 * 
  	 * @private
  	 * @param {String} text The anchor tag's text (i.e. what will be displayed).
  	 * @return {String} The truncated anchor text.
  	 */
  	doTruncate : function( anchorText ) {
  		return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
  	}
  	
  } );
  /*global Autolinker */
  /**
   * @private
   * @class Autolinker.htmlParser.HtmlParser
   * @extends Object
   * 
   * An HTML parser implementation which simply walks an HTML string and returns an array of 
   * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
   * 
   * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, effectively ignoring / "walking
   * around" HTML tags.
   */
  Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {
  	
  	/**
  	 * @private
  	 * @property {RegExp} htmlRegex
  	 * 
  	 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
  	 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
  	 * 
  	 * Capturing groups:
  	 * 
  	 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
  	 * 2. If it is an end tag, this group will have the '/'.
  	 * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
  	 */
  	htmlRegex : (function() {
  		var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
  		    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
  		    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
  		    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'
  		
  		return new RegExp( [
  			// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
  			'(?:',
  				'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag
  					
  					// Zero or more attributes following the tag name
  					'(?:',
  						'\\s+',  // one or more whitespace chars before an attribute
  						
  						// Either:
  						// A. attr="value", or 
  						// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
  						'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
  					')*',
  				'>',
  			')',
  			
  			'|',
  			
  			// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
  			'(?:',
  				'<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag. 
  				          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
  			
  					// *** Capturing Group 3 - The tag name
  					'(' + tagNameRegex.source + ')',
  					
  					// Zero or more attributes following the tag name
  					'(?:',
  						'\\s+',                // one or more whitespace chars before an attribute
  						nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
  					')*',
  					
  					'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
  				'>',
  			')'
  		].join( "" ), 'gi' );
  	} )(),
  	
  	/**
  	 * @private
  	 * @property {RegExp} htmlCharacterEntitiesRegex
  	 *
  	 * The regular expression that matches common HTML character entities.
  	 * 
  	 * Ignoring &amp; as it could be part of a query string -- handling it separately.
  	 */
  	htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
  	
  	
  	/**
  	 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes} to represent
  	 * the HTML structure of the input string. 
  	 * 
  	 * @param {String} html The HTML to parse.
  	 * @return {Autolinker.htmlParser.HtmlNode[]}
  	 */
  	parse : function( html ) {
  		var htmlRegex = this.htmlRegex,
  		    currentResult,
  		    lastIndex = 0,
  		    textAndEntityNodes,
  		    nodes = [];  // will be the result of the method
  		
  		while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
  			var tagText = currentResult[ 0 ],
  			    tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img") 
  			    isClosingTag = !!currentResult[ 2 ],
  			    inBetweenTagsText = html.substring( lastIndex, currentResult.index );
  			
  			// Push TextNodes and EntityNodes for any text found between tags
  			if( inBetweenTagsText ) {
  				textAndEntityNodes = this.parseTextAndEntityNodes( inBetweenTagsText );
  				nodes.push.apply( nodes, textAndEntityNodes );
  			}
  			
  			// Push the ElementNode
  			nodes.push( this.createElementNode( tagText, tagName, isClosingTag ) );
  			
  			lastIndex = currentResult.index + tagText.length;
  		}
  		
  		// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
  		if( lastIndex < html.length ) {
  			var text = html.substring( lastIndex );
  			
  			// Push TextNodes and EntityNodes for any text found between tags
  			if( text ) {
  				textAndEntityNodes = this.parseTextAndEntityNodes( text );
  				nodes.push.apply( nodes, textAndEntityNodes );
  			}
  		}
  		
  		return nodes;
  	},
  	
  	
  	/**
  	 * Parses text and HTML entity nodes from a given string. The input string should not have any HTML tags (elements)
  	 * within it.
  	 * 
  	 * @private
  	 * @param {String} text The text to parse.
  	 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to represent the 
  	 *   {@link Autolinker.htmlParser.TextNode TextNodes} and {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
  	 */
  	parseTextAndEntityNodes : function( text ) {
  		var nodes = [],
  		    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array
  		
  		// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
  		// For example: an input `text` of "Test &quot;this&quot; today" would turn into the 
  		//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
  		for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {
  			var textToken = textAndEntityTokens[ i ],
  			    entityToken = textAndEntityTokens[ i + 1 ];
  			
  			if( textToken ) nodes.push( this.createTextNode( textToken ) );
  			if( entityToken ) nodes.push( this.createEntityNode( entityToken ) );
  		}
  		return nodes;
  	},
  	
  	
  	/**
  	 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
  	 * 
  	 * @private
  	 * @param {String} tagText The full text of the tag (element) that was matched, including its attributes.
  	 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would be passed to this method as "img".
  	 * @param {Boolean} isClosingTag `true` if it's a closing tag, false otherwise.
  	 * @return {Autolinker.htmlParser.ElementNode}
  	 */
  	createElementNode : function( tagText, tagName, isClosingTag ) {
  		return new Autolinker.htmlParser.ElementNode( {
  			text    : tagText,
  			tagName : tagName.toLowerCase(),
  			closing : isClosingTag
  		} );
  	},
  	
  	
  	/**
  	 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
  	 * 
  	 * @private
  	 * @param {String} text The text that was matched for the HTML entity (such as '&amp;nbsp;').
  	 * @return {Autolinker.htmlParser.EntityNode}
  	 */
  	createEntityNode : function( text ) {
  		return new Autolinker.htmlParser.EntityNode( { text: text } );
  	},
  	
  	
  	/**
  	 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
  	 * 
  	 * @private
  	 * @param {String} text The text that was matched.
  	 * @return {Autolinker.htmlParser.TextNode}
  	 */
  	createTextNode : function( text ) {
  		return new Autolinker.htmlParser.TextNode( { text: text } );
  	}
  	
  } );
  /*global Autolinker */
  /**
   * @abstract
   * @class Autolinker.htmlParser.HtmlNode
   * 
   * Represents an HTML node found in an input string. An HTML node is one of the following:
   * 
   * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents HTML tags.
   * 2. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text outside or within HTML tags.
   * 3. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents one of the known HTML
   *    entities that Autolinker looks for. This includes common ones such as &amp;quot; and &amp;nbsp;
   */
  Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {
  	
  	/**
  	 * @cfg {String} text (required)
  	 * 
  	 * The original text that was matched for the HtmlNode. 
  	 * 
  	 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode}, this will be the tag's
  	 *   text.
  	 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this will be the text itself.
  	 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode}, this will be the text of
  	 *   the HTML entity.
  	 */
  	text : "",
  	
  	
  	/**
  	 * @constructor
  	 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
  	 */
  	constructor : function( cfg ) {
  		Autolinker.Util.assign( this, cfg );
  	},

  	
  	/**
  	 * Returns a string name for the type of node that this class represents.
  	 * 
  	 * @abstract
  	 * @return {String}
  	 */
  	getType : Autolinker.Util.abstractMethod,
  	
  	
  	/**
  	 * Retrieves the {@link #text} for the HtmlNode.
  	 * 
  	 * @return {String}
  	 */
  	getText : function() {
  		return this.text;
  	}

  } );
  /*global Autolinker */
  /**
   * @class Autolinker.htmlParser.ElementNode
   * @extends Autolinker.htmlParser.HtmlNode
   * 
   * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
   * 
   * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
   */
  Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
  	
  	/**
  	 * @cfg {String} tagName (required)
  	 * 
  	 * The name of the tag that was matched.
  	 */
  	tagName : '',
  	
  	/**
  	 * @cfg {Boolean} closing (required)
  	 * 
  	 * `true` if the element (tag) is a closing tag, `false` if its an opening tag.
  	 */
  	closing : false,

  	
  	/**
  	 * Returns a string name for the type of node that this class represents.
  	 * 
  	 * @return {String}
  	 */
  	getType : function() {
  		return 'element';
  	},
  	

  	/**
  	 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag, returns "img".
  	 * 
  	 * @return {String}
  	 */
  	getTagName : function() {
  		return this.tagName;
  	},
  	
  	
  	/**
  	 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt; returns
  	 * `false`, while &lt;/div&gt; returns `true`.
  	 * 
  	 * @return {Boolean}
  	 */
  	isClosing : function() {
  		return this.closing;
  	}
  	
  } );
  /*global Autolinker */
  /**
   * @class Autolinker.htmlParser.EntityNode
   * @extends Autolinker.htmlParser.HtmlNode
   * 
   * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
   * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText} method.
   * 
   * Note that this class will only be returned from the HtmlParser for the set of checked HTML entity nodes 
   * defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
   * 
   * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
   */
  Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
  	
  	/**
  	 * Returns a string name for the type of node that this class represents.
  	 * 
  	 * @return {String}
  	 */
  	getType : function() {
  		return 'entity';
  	}
  	
  } );
  /*global Autolinker */
  /**
   * @class Autolinker.htmlParser.TextNode
   * @extends Autolinker.htmlParser.HtmlNode
   * 
   * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
   * 
   * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
   */
  Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
  	
  	/**
  	 * Returns a string name for the type of node that this class represents.
  	 * 
  	 * @return {String}
  	 */
  	getType : function() {
  		return 'text';
  	}
  	
  } );
  /*global Autolinker */
  /**
   * @private
   * @class Autolinker.matchParser.MatchParser
   * @extends Object
   * 
   * Used by Autolinker to parse {@link #urls URLs}, {@link #emails email addresses}, and {@link #twitter Twitter handles}, 
   * given an input string of text.
   * 
   * The MatchParser is fed a non-HTML string in order to search out URLs, email addresses and Twitter handles. Autolinker
   * first uses the {@link HtmlParser} to "walk around" HTML tags, and then the text around the HTML tags is passed into
   * the MatchParser in order to find the actual matches.
   */
  Autolinker.matchParser.MatchParser = Autolinker.Util.extend( Object, {
  	
  	/**
  	 * @cfg {Boolean} urls
  	 * 
  	 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
  	 */
  	urls : true,
  	
  	/**
  	 * @cfg {Boolean} email
  	 * 
  	 * `true` if email addresses should be automatically linked, `false` if they should not be.
  	 */
  	email : true,
  	
  	/**
  	 * @cfg {Boolean} twitter
  	 * 
  	 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
  	 */
  	twitter : true,
  	
  	/**
  	 * @cfg {Boolean} stripPrefix
  	 * 
  	 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text
  	 * in {@link Autolinker.match.Url URL matches}, `false` otherwise.
  	 * 
  	 * TODO: Handle this before a URL Match object is instantiated.
  	 */
  	stripPrefix : true,
  	
  	
  	/**
  	 * @private
  	 * @property {RegExp} matcherRegex
  	 * 
  	 * The regular expression that matches URLs, email addresses, and Twitter handles.
  	 * 
  	 * This regular expression has the following capturing groups:
  	 * 
  	 * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its 
  	 *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information 
  	 *    about the Twitter handle match.
  	 * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
  	 *    JS regular expressions, and can be used to reconstruct the original string in a replace().
  	 * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
  	 * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full 
  	 *    address. Ex: 'me@my.com'
  	 * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
  	 *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
  	 * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
  	 *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
  	 * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a 
  	 *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
  	 *    or the // was in a string we don't want to auto-link.
  	 * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a 
  	 *    protocol-relative match. See #6 for more info. 
  	 */
  	matcherRegex : (function() {
  		var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs
  		    
  		    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)
  		    
  		    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
  		    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
  		    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
  		    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)
  		    
  		    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
  		    // http://blog.codinghorror.com/the-problem-with-urls/
  		    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
  		
  		return new RegExp( [
  			'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace() 
  				// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and 
  				// *** Capturing group $3, which matches the actual twitter handle
  				twitterRegex.source,
  			')',
  			
  			'|',
  			
  			'(',  // *** Capturing group $4, which is used to determine an email match
  				emailRegex.source,
  				domainNameRegex.source,
  				tldRegex.source,
  			')',
  			
  			'|',
  			
  			'(',  // *** Capturing group $5, which is used to match a URL
  				'(?:', // parens to cover match for protocol (optional), and domain
  					'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
  						protocolRegex.source,
  						domainNameRegex.source,
  					')',
  					
  					'|',
  					
  					'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
  						'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
  						wwwRegex.source,
  						domainNameRegex.source,
  					')',
  					
  					'|',
  					
  					'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
  						'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
  						domainNameRegex.source,
  						tldRegex.source,
  					')',
  				')',
  				
  				'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
  			')'
  		].join( "" ), 'gi' );
  	} )(),
  	
  	/**
  	 * @private
  	 * @property {RegExp} charBeforeProtocolRelMatchRegex
  	 * 
  	 * The regular expression used to retrieve the character before a protocol-relative URL match.
  	 * 
  	 * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
  	 * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
  	 * from the URL.
  	 */
  	charBeforeProtocolRelMatchRegex : /^(.)?\/\//,
  	
  	/**
  	 * @private
  	 * @property {Autolinker.MatchValidator} matchValidator
  	 * 
  	 * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
  	 * {@link Autolinker.MatchValidator} for details.
  	 */
  	
  	
  	/**
  	 * @constructor
  	 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
  	 */
  	constructor : function( cfg ) {
  		Autolinker.Util.assign( this, cfg );
  	
  		this.matchValidator = new Autolinker.MatchValidator();
  	},
  	
  	
  	/**
  	 * Parses the input `text` to search for URLs/emails/Twitter handles, and calls the `replaceFn`
  	 * to allow replacements of the matches. Returns the `text` with matches replaced.
  	 * 
  	 * @param {String} text The text to search and repace matches in.
  	 * @param {Function} replaceFn The iterator function to handle the replacements. The function takes a
  	 *   single argument, a {@link Autolinker.match.Match} object, and should return the text that should
  	 *   make the replacement.
  	 * @param {Object} [contextObj=window] The context object ("scope") to run the `replaceFn` in.
  	 * @return {String}
  	 */
  	replace : function( text, replaceFn, contextObj ) {
  		var me = this;  // for closure
  		
  		return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
  			var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // "match description" object
  			
  			// Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are 
  			// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
  			if( !matchDescObj ) {
  				return matchStr;
  				
  			} else {
  				// Generate replacement text for the match from the `replaceFn`
  				var replaceStr = replaceFn.call( contextObj, matchDescObj.match );
  				return matchDescObj.prefixStr + replaceStr + matchDescObj.suffixStr;
  			}
  		} );
  	},
  	
  	
  	/**
  	 * Processes a candidate match from the {@link #matcherRegex}. 
  	 * 
  	 * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
  	 * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
  	 * 
  	 * @private
  	 * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
  	 * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
  	 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This 
  	 *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
  	 * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
  	 * @param {String} emailAddressMatch The matched email address for an email address match.
  	 * @param {String} urlMatch The matched URL string for a URL match.
  	 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
  	 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
  	 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that 
  	 *   comes before the '//'.
  	 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with 
  	 *   the character that comes before the '//'.
  	 *   
  	 * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
  	 *   Otherwise, this will be an Object (map) with the following properties:
  	 * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
  	 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
  	 *   the replacement stream.
  	 * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
  	 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
  	 *   the replacement stream.
  	 * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
  	 */
  	processCandidateMatch : function( 
  		matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, 
  		emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
  	) {
  		// Note: The `matchStr` variable wil be fixed up to remove characters that are no longer needed (which will 
  		// be added to `prefixStr` and `suffixStr`).
  		
  		var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
  		    match,  // Will be an Autolinker.match.Match object
  		    
  		    prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
  		    suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.
  		    
  		
  		// Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are 
  		// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
  		if(
  			( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
  			!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch ) 
  		) {
  			return null;
  		}
  		
  		// Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
  		// in the match itself. 
  		if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
  			matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
  			suffixStr = ")";  // this will be added after the generated <a> tag
  		}
  		
  		
  		if( emailAddressMatch ) {
  			match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );
  			
  		} else if( twitterMatch ) {
  			// fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match 
  			// itself (since there are no look-behinds in JS regexes)
  			if( twitterHandlePrefixWhitespaceChar ) {
  				prefixStr = twitterHandlePrefixWhitespaceChar;
  				matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
  			}
  			match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );
  			
  		} else {  // url match
  			// If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
  			// to match due to the lack of a negative look-behind in JavaScript regular expressions)
  			if( protocolRelativeMatch ) {
  				var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";
  				
  				if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
  					prefixStr = charBeforeMatch;
  					matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
  				}
  			}
  			
  			match = new Autolinker.match.Url( {
  				matchedText : matchStr,
  				url : matchStr,
  				protocolUrlMatch : !!protocolUrlMatch,
  				protocolRelativeMatch : !!protocolRelativeMatch,
  				stripPrefix : this.stripPrefix
  			} );
  		}
  		
  		return {
  			prefixStr : prefixStr,
  			suffixStr : suffixStr,
  			match     : match
  		};
  	},
  	
  	
  	/**
  	 * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
  	 * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
  	 * 
  	 * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
  	 * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked. 
  	 * 
  	 * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
  	 * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL 
  	 * itself, and this method will return `true`.
  	 * 
  	 * @private
  	 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
  	 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
  	 */
  	matchHasUnbalancedClosingParen : function( matchStr ) {
  		var lastChar = matchStr.charAt( matchStr.length - 1 );
  		
  		if( lastChar === ')' ) {
  			var openParensMatch = matchStr.match( /\(/g ),
  			    closeParensMatch = matchStr.match( /\)/g ),
  			    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
  			    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;
  			
  			if( numOpenParens < numCloseParens ) {
  				return true;
  			}
  		}
  		
  		return false;
  	}
  	
  } );
  /*global Autolinker */
  /*jshint scripturl:true */
  /**
   * @private
   * @class Autolinker.MatchValidator
   * @extends Object
   * 
   * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
   * 
   * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
   * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
   * false positives that have been matched by the {@link Autolinker#matcherRegex}.
   */
  Autolinker.MatchValidator = Autolinker.Util.extend( Object, {
  	
  	/**
  	 * @private
  	 * @property {RegExp} invalidProtocolRelMatchRegex
  	 * 
  	 * The regular expression used to check a potential protocol-relative URL match, coming from the 
  	 * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
  	 * 
  	 * This regular expression checks to see if there is a word character before the '//' match in order to determine if 
  	 * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in 
  	 * JavaScript regular expressions. 
  	 * 
  	 * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something 
  	 * like "abc//google.com"
  	 */
  	invalidProtocolRelMatchRegex : /^[\w]\/\//,
  	
  	/**
  	 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
  	 * 
  	 * @private
  	 * @property {RegExp} hasFullProtocolRegex
  	 */
  	hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
  	
  	/**
  	 * Regex to find the URI scheme, such as 'mailto:'.
  	 * 
  	 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
  	 * 
  	 * @private
  	 * @property {RegExp} uriSchemeRegex
  	 */
  	uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,
  	
  	/**
  	 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
  	 * 
  	 * @private
  	 * @property {RegExp} hasWordCharAfterProtocolRegex
  	 */
  	hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,
  	
  	
  	/**
  	 * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
  	 * 
  	 * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over 
  	 *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
  	 * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
  	 *    matches like "git:1.0").
  	 * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character 
  	 *    (effectively skipping over strings like "abc//google.com")
  	 * 
  	 * Otherwise, returns `true`.
  	 * 
  	 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
  	 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
  	 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
  	 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
  	 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
  	 *   preceding the '//'.
  	 * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or 
  	 *   should just not be processed.
  	 */
  	isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
  		if(
  			( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
  			this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
  			this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
  			this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
  		) {
  			return false;
  		}
  		
  		return true;
  	},
  	
  	
  	/**
  	 * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is 
  	 * 'javascript:' or 'vbscript:'
  	 * 
  	 * @private
  	 * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com' 
  	 *   or 'mailto:a@a.com'.
  	 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
  	 */
  	isValidUriScheme : function( uriSchemeMatch ) {
  		var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();
  		
  		return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
  	},
  	
  	
  	/**
  	 * Determines if a URL match does not have either:
  	 * 
  	 * a) a full protocol (i.e. 'http://'), or
  	 * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
  	 * 
  	 * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
  	 * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
  	 * 
  	 * @private
  	 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
  	 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
  	 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
  	 * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
  	 *   match.
  	 */
  	urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
  		return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
  	},
  	
  	
  	/**
  	 * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
  	 * 
  	 * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something 
  	 * like "git:1.0"
  	 * 
  	 * @private
  	 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
  	 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
  	 *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
  	 *   separator (':').
  	 * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
  	 *   otherwise.
  	 */
  	urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
  		if( urlMatch && protocolUrlMatch ) {
  			return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
  		} else {
  			return false;
  		}
  	},
  	
  	
  	/**
  	 * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
  	 * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
  	 * order to be considered valid).
  	 * 
  	 * @private
  	 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
  	 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
  	 *   preceding the '//'.
  	 * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
  	 */
  	isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
  		return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
  	}

  } );
  /*global Autolinker */
  /**
   * @abstract
   * @class Autolinker.match.Match
   * 
   * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
   * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
   * 
   * For example:
   * 
   *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
   *     
   *     var linkedText = Autolinker.link( input, {
   *         replaceFn : function( autolinker, match ) {
   *             console.log( "href = ", match.getAnchorHref() );
   *             console.log( "text = ", match.getAnchorText() );
   *         
   *             switch( match.getType() ) {
   *                 case 'url' : 
   *                     console.log( "url: ", match.getUrl() );
   *                     
   *                 case 'email' :
   *                     console.log( "email: ", match.getEmail() );
   *                     
   *                 case 'twitter' :
   *                     console.log( "twitter: ", match.getTwitterHandle() );
   *             }
   *         }
   *     } );
   *     
   * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
   */
  Autolinker.match.Match = Autolinker.Util.extend( Object, {
  	
  	/**
  	 * @cfg {String} matchedText (required)
  	 * 
  	 * The original text that was matched.
  	 */
  	
  	
  	/**
  	 * @constructor
  	 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
  	 */
  	constructor : function( cfg ) {
  		Autolinker.Util.assign( this, cfg );
  	},

  	
  	/**
  	 * Returns a string name for the type of match that this class represents.
  	 * 
  	 * @abstract
  	 * @return {String}
  	 */
  	getType : Autolinker.Util.abstractMethod,
  	
  	
  	/**
  	 * Returns the original text that was matched.
  	 * 
  	 * @return {String}
  	 */
  	getMatchedText : function() {
  		return this.matchedText;
  	},
  	

  	/**
  	 * Returns the anchor href that should be generated for the match.
  	 * 
  	 * @abstract
  	 * @return {String}
  	 */
  	getAnchorHref : Autolinker.Util.abstractMethod,
  	
  	
  	/**
  	 * Returns the anchor text that should be generated for the match.
  	 * 
  	 * @abstract
  	 * @return {String}
  	 */
  	getAnchorText : Autolinker.Util.abstractMethod

  } );
  /*global Autolinker */
  /**
   * @class Autolinker.match.Email
   * @extends Autolinker.match.Match
   * 
   * Represents a Email match found in an input string which should be Autolinked.
   * 
   * See this class's superclass ({@link Autolinker.match.Match}) for more details.
   */
  Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {
  	
  	/**
  	 * @cfg {String} email (required)
  	 * 
  	 * The email address that was matched.
  	 */
  	

  	/**
  	 * Returns a string name for the type of match that this class represents.
  	 * 
  	 * @return {String}
  	 */
  	getType : function() {
  		return 'email';
  	},
  	
  	
  	/**
  	 * Returns the email address that was matched.
  	 * 
  	 * @return {String}
  	 */
  	getEmail : function() {
  		return this.email;
  	},
  	

  	/**
  	 * Returns the anchor href that should be generated for the match.
  	 * 
  	 * @return {String}
  	 */
  	getAnchorHref : function() {
  		return 'mailto:' + this.email;
  	},
  	
  	
  	/**
  	 * Returns the anchor text that should be generated for the match.
  	 * 
  	 * @return {String}
  	 */
  	getAnchorText : function() {
  		return this.email;
  	}
  	
  } );
  /*global Autolinker */
  /**
   * @class Autolinker.match.Twitter
   * @extends Autolinker.match.Match
   * 
   * Represents a Twitter match found in an input string which should be Autolinked.
   * 
   * See this class's superclass ({@link Autolinker.match.Match}) for more details.
   */
  Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {
  	
  	/**
  	 * @cfg {String} twitterHandle (required)
  	 * 
  	 * The Twitter handle that was matched.
  	 */
  	

  	/**
  	 * Returns the type of match that this class represents.
  	 * 
  	 * @return {String}
  	 */
  	getType : function() {
  		return 'twitter';
  	},
  	
  	
  	/**
  	 * Returns a string name for the type of match that this class represents.
  	 * 
  	 * @return {String}
  	 */
  	getTwitterHandle : function() {
  		return this.twitterHandle;
  	},
  	

  	/**
  	 * Returns the anchor href that should be generated for the match.
  	 * 
  	 * @return {String}
  	 */
  	getAnchorHref : function() {
  		return 'https://twitter.com/' + this.twitterHandle;
  	},
  	
  	
  	/**
  	 * Returns the anchor text that should be generated for the match.
  	 * 
  	 * @return {String}
  	 */
  	getAnchorText : function() {
  		return '@' + this.twitterHandle;
  	}
  	
  } );
  /*global Autolinker */
  /**
   * @class Autolinker.match.Url
   * @extends Autolinker.match.Match
   * 
   * Represents a Url match found in an input string which should be Autolinked.
   * 
   * See this class's superclass ({@link Autolinker.match.Match}) for more details.
   */
  Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {
  	
  	/**
  	 * @cfg {String} url (required)
  	 * 
  	 * The url that was matched.
  	 */
  	
  	/**
  	 * @cfg {Boolean} protocolUrlMatch (required)
  	 * 
  	 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
  	 * known TLD match.
  	 */
  	
  	/**
  	 * @cfg {Boolean} protocolRelativeMatch (required)
  	 * 
  	 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
  	 * and will be either http:// or https:// based on the protocol that the site is loaded under.
  	 */
  	
  	/**
  	 * @cfg {Boolean} stripPrefix (required)
  	 * @inheritdoc Autolinker#stripPrefix
  	 */
  	

  	/**
  	 * @private
  	 * @property {RegExp} urlPrefixRegex
  	 * 
  	 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
  	 */
  	urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
  	
  	/**
  	 * @private
  	 * @property {RegExp} protocolRelativeRegex
  	 * 
  	 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
  	 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
  	 */
  	protocolRelativeRegex : /^\/\//,
  	
  	/**
  	 * @private
  	 * @property {Boolean} protocolPrepended
  	 * 
  	 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
  	 * {@link #url} did not have a protocol)
  	 */
  	protocolPrepended : false,
  	

  	/**
  	 * Returns a string name for the type of match that this class represents.
  	 * 
  	 * @return {String}
  	 */
  	getType : function() {
  		return 'url';
  	},
  	
  	
  	/**
  	 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
  	 * match was missing a protocol.
  	 * 
  	 * @return {String}
  	 */
  	getUrl : function() {
  		var url = this.url;
  		
  		// if the url string doesn't begin with a protocol, assume 'http://'
  		if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
  			url = this.url = 'http://' + url;
  			
  			this.protocolPrepended = true;
  		}
  		
  		return url;
  	},
  	

  	/**
  	 * Returns the anchor href that should be generated for the match.
  	 * 
  	 * @return {String}
  	 */
  	getAnchorHref : function() {
  		var url = this.getUrl();
  		
  		return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
  	},
  	
  	
  	/**
  	 * Returns the anchor text that should be generated for the match.
  	 * 
  	 * @return {String}
  	 */
  	getAnchorText : function() {
  		var anchorText = this.getUrl();
  		
  		if( this.protocolRelativeMatch ) {
  			// Strip off any protocol-relative '//' from the anchor text
  			anchorText = this.stripProtocolRelativePrefix( anchorText );
  		}
  		if( this.stripPrefix ) {
  			anchorText = this.stripUrlPrefix( anchorText );
  		}
  		anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one
  		
  		return anchorText;
  	},
  	
  	
  	// ---------------------------------------
  	
  	// Utility Functionality
  	
  	/**
  	 * Strips the URL prefix (such as "http://" or "https://") from the given text.
  	 * 
  	 * @private
  	 * @param {String} text The text of the anchor that is being generated, for which to strip off the
  	 *   url prefix (such as stripping off "http://")
  	 * @return {String} The `anchorText`, with the prefix stripped.
  	 */
  	stripUrlPrefix : function( text ) {
  		return text.replace( this.urlPrefixRegex, '' );
  	},
  	
  	
  	/**
  	 * Strips any protocol-relative '//' from the anchor text.
  	 * 
  	 * @private
  	 * @param {String} text The text of the anchor that is being generated, for which to strip off the
  	 *   protocol-relative prefix (such as stripping off "//")
  	 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
  	 */
  	stripProtocolRelativePrefix : function( text ) {
  		return text.replace( this.protocolRelativeRegex, '' );
  	},
  	
  	
  	/**
  	 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
  	 * 
  	 * @private
  	 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
  	 *   slash ('/') that may exist.
  	 * @return {String} The `anchorText`, with the trailing slash removed.
  	 */
  	removeTrailingSlash : function( anchorText ) {
  		if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
  			anchorText = anchorText.slice( 0, -1 );
  		}
  		return anchorText;
  	}
  	
  } );
  return Autolinker;

  }));
  });

  var LINK_SCAN_RE = /www|@|\:\/\//;


  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }

  // Stupid fabric to avoid singletons, for thread safety.
  // Required for engines like Nashorn.
  //
  function createLinkifier() {
    var links = [];
    var autolinker = new Autolinker({
      stripPrefix: false,
      url: true,
      email: true,
      twitter: false,
      replaceFn: function (linker, match) {
        // Only collect matched strings but don't change anything.
        switch (match.getType()) {
          /*eslint default-case:0*/
          case 'url':
            links.push({
              text: match.matchedText,
              url: match.getUrl()
            });
            break;
          case 'email':
            links.push({
              text: match.matchedText,
              // normalize email protocol
              url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
            });
            break;
        }
        return false;
      }
    });

    return {
      links: links,
      autolinker: autolinker
    };
  }


  var linkify = function linkify(state) {
    var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
        blockTokens = state.tokens,
        linkifier = null, links, autolinker;

    if (!state.options.linkify) { return; }

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') { continue; }
      tokens = blockTokens[j].children;

      htmlLinkLevel = 0;

      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];

        // Skip content of markdown links
        if (token.type === 'link_close') {
          i--;
          while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
            i--;
          }
          continue;
        }

        // Skip content of html tag links
        if (token.type === 'htmltag') {
          if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
            htmlLinkLevel--;
          }
          if (isLinkClose(token.content)) {
            htmlLinkLevel++;
          }
        }
        if (htmlLinkLevel > 0) { continue; }

        if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {

          // Init linkifier in lazy manner, only if required.
          if (!linkifier) {
            linkifier = createLinkifier();
            links = linkifier.links;
            autolinker = linkifier.autolinker;
          }

          text = token.content;
          links.length = 0;
          autolinker.link(text);

          if (!links.length) { continue; }

          // Now split string to nodes
          nodes = [];
          level = token.level;

          for (ln = 0; ln < links.length; ln++) {

            if (!state.inline.validateLink(links[ln].url)) { continue; }

            pos = text.indexOf(links[ln].text);

            if (pos) {
              level = level;
              nodes.push({
                type: 'text',
                content: text.slice(0, pos),
                level: level
              });
            }
            nodes.push({
              type: 'link_open',
              href: links[ln].url,
              title: '',
              level: level++
            });
            nodes.push({
              type: 'text',
              content: links[ln].text,
              level: level
            });
            nodes.push({
              type: 'link_close',
              level: --level
            });
            text = text.slice(pos + links[ln].text.length);
          }
          if (text.length) {
            nodes.push({
              type: 'text',
              content: text,
              level: level
            });
          }

          // replace current node
          blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
        }
      }
    }
  };

  /**
   * Local dependencies
   */



  /**
   * Core parser `rules`
   */

  var _rules = [
    [ 'block',          block          ],
    [ 'abbr',           abbr           ],
    [ 'references',     references     ],
    [ 'inline',         inline         ],
    [ 'footnote_tail',  footnote_tail  ],
    [ 'abbr2',          abbr2          ],
    [ 'replacements',   replacements   ],
    [ 'smartquotes',    smartquotes    ],
    [ 'linkify',        linkify        ]
  ];

  /**
   * Class for top level (`core`) parser rules
   *
   * @api private
   */

  function Core() {
    this.options = {};
    this.ruler = new ruler();
    for (var i = 0; i < _rules.length; i++) {
      this.ruler.push(_rules[i][0], _rules[i][1]);
    }
  }

  /**
   * Process rules with the given `state`
   *
   * @param  {Object} `state`
   * @api private
   */

  Core.prototype.process = function (state) {
    var i, l, rules;
    rules = this.ruler.getRules('');
    for (i = 0, l = rules.length; i < l; i++) {
      rules[i](state);
    }
  };

  /**
   * Expose `Core`
   */

  var parser_core = Core;

  // Parser state class


  function StateBlock(src, parser, options, env, tokens) {
    var ch, s, start, pos, len, indent, indent_found;

    this.src = src;

    // Shortcuts to simplify nested calls
    this.parser = parser;

    this.options = options;

    this.env = env;

    //
    // Internal state vartiables
    //

    this.tokens = tokens;

    this.bMarks = [];  // line begin offsets for fast jumps
    this.eMarks = [];  // line end offsets for fast jumps
    this.tShift = [];  // indent for each line

    // block parser variables
    this.blkIndent  = 0; // required block content indent
                         // (for example, if we are in list)
    this.line       = 0; // line index in src
    this.lineMax    = 0; // lines count
    this.tight      = false;  // loose/tight mode for lists
    this.parentType = 'root'; // if `list`, block parser stops on two newlines
    this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

    this.level = 0;

    // renderer
    this.result = '';

    // Create caches
    // Generate markers.
    s = this.src;
    indent = 0;
    indent_found = false;

    for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
      ch = s.charCodeAt(pos);

      if (!indent_found) {
        if (ch === 0x20/* space */) {
          indent++;
          continue;
        } else {
          indent_found = true;
        }
      }

      if (ch === 0x0A || pos === len - 1) {
        if (ch !== 0x0A) { pos++; }
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);

        indent_found = false;
        indent = 0;
        start = pos + 1;
      }
    }

    // Push fake entry to simplify cache bounds checks
    this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);

    this.lineMax = this.bMarks.length - 1; // don't count last fake line
  }

  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };

  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }
    return from;
  };

  // Skip spaces from given position.
  StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
    }
    return pos;
  };

  // Skip char codes from given position
  StateBlock.prototype.skipChars = function skipChars(pos, code) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code) { break; }
    }
    return pos;
  };

  // Skip char codes reverse from given position - 1
  StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
    if (pos <= min) { return pos; }

    while (pos > min) {
      if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
    }
    return pos;
  };

  // cut lines range from source.
  StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    var i, first, last, queue, shift,
        line = begin;

    if (begin >= end) {
      return '';
    }

    // Opt: don't use push queue for single line;
    if (line + 1 === end) {
      first = this.bMarks[line] + Math.min(this.tShift[line], indent);
      last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
      return this.src.slice(first, last);
    }

    queue = new Array(end - begin);

    for (i = 0; line < end; line++, i++) {
      shift = this.tShift[line];
      if (shift > indent) { shift = indent; }
      if (shift < 0) { shift = 0; }

      first = this.bMarks[line] + shift;

      if (line + 1 < end || keepLastLF) {
        // No need for bounds check because we have fake entry on tail.
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }

      queue[i] = this.src.slice(first, last);
    }

    return queue.join('');
  };


  var state_block = StateBlock;

  // Code block (4 spaces padded)


  var code = function code(state, startLine, endLine/*, silent*/) {
    var nextLine, last;

    if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

    last = nextLine = startLine + 1;

    while (nextLine < endLine) {
      if (state.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }
      if (state.tShift[nextLine] - state.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }
      break;
    }

    state.line = nextLine;
    state.tokens.push({
      type: 'code',
      content: state.getLines(startLine, last, 4 + state.blkIndent, true),
      block: true,
      lines: [ startLine, state.line ],
      level: state.level
    });

    return true;
  };

  // fences (``` lang, ~~~ lang)


  var fences = function fences(state, startLine, endLine, silent) {
    var marker, len, params, nextLine, mem,
        haveEndMarker = false,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    if (pos + 3 > max) { return false; }

    marker = state.src.charCodeAt(pos);

    if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
      return false;
    }

    // scan marker length
    mem = pos;
    pos = state.skipChars(pos, marker);

    len = pos - mem;

    if (len < 3) { return false; }

    params = state.src.slice(pos, max).trim();

    if (params.indexOf('`') >= 0) { return false; }

    // Since start is found, we can report success here in validation mode
    if (silent) { return true; }

    // search end of block
    nextLine = startLine;

    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max && state.tShift[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (state.src.charCodeAt(pos) !== marker) { continue; }

      if (state.tShift[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      pos = state.skipChars(pos, marker);

      // closing code fence must be at least as long as the opening one
      if (pos - mem < len) { continue; }

      // make sure tail has spaces only
      pos = state.skipSpaces(pos);

      if (pos < max) { continue; }

      haveEndMarker = true;
      // found!
      break;
    }

    // If a fence has heading spaces, they should be removed from its inner block
    len = state.tShift[startLine];

    state.line = nextLine + (haveEndMarker ? 1 : 0);
    state.tokens.push({
      type: 'fence',
      params: params,
      content: state.getLines(startLine + 1, nextLine, len, true),
      lines: [ startLine, state.line ],
      level: state.level
    });

    return true;
  };

  // Block quotes


  var blockquote = function blockquote(state, startLine, endLine, silent) {
    var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
        terminatorRules,
        i, l, terminate,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    if (pos > max) { return false; }

    // check the block quote marker
    if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

    if (state.level >= state.options.maxNesting) { return false; }

    // we know that it's going to be a valid blockquote,
    // so no point trying to find the end of it in silent mode
    if (silent) { return true; }

    // skip one optional space after '>'
    if (state.src.charCodeAt(pos) === 0x20) { pos++; }

    oldIndent = state.blkIndent;
    state.blkIndent = 0;

    oldBMarks = [ state.bMarks[startLine] ];
    state.bMarks[startLine] = pos;

    // check if we have an empty blockquote
    pos = pos < max ? state.skipSpaces(pos) : pos;
    lastLineEmpty = pos >= max;

    oldTShift = [ state.tShift[startLine] ];
    state.tShift[startLine] = pos - state.bMarks[startLine];

    terminatorRules = state.parser.ruler.getRules('blockquote');

    // Search the end of the block
    //
    // Block ends with either:
    //  1. an empty line outside:
    //     ```
    //     > test
    //
    //     ```
    //  2. an empty line inside:
    //     ```
    //     >
    //     test
    //     ```
    //  3. another tag
    //     ```
    //     > test
    //      - - -
    //     ```
    for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos >= max) {
        // Case 1: line is not inside the blockquote, and this line is empty.
        break;
      }

      if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
        // This line is inside the blockquote.

        // skip one optional space after '>'
        if (state.src.charCodeAt(pos) === 0x20) { pos++; }

        oldBMarks.push(state.bMarks[nextLine]);
        state.bMarks[nextLine] = pos;

        pos = pos < max ? state.skipSpaces(pos) : pos;
        lastLineEmpty = pos >= max;

        oldTShift.push(state.tShift[nextLine]);
        state.tShift[nextLine] = pos - state.bMarks[nextLine];
        continue;
      }

      // Case 2: line is not inside the blockquote, and the last line was empty.
      if (lastLineEmpty) { break; }

      // Case 3: another tag found.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }

      oldBMarks.push(state.bMarks[nextLine]);
      oldTShift.push(state.tShift[nextLine]);

      // A negative number means that this is a paragraph continuation;
      //
      // Any negative number will do the job here, but it's better for it
      // to be large enough to make any bugs obvious.
      state.tShift[nextLine] = -1337;
    }

    oldParentType = state.parentType;
    state.parentType = 'blockquote';
    state.tokens.push({
      type: 'blockquote_open',
      lines: lines = [ startLine, 0 ],
      level: state.level++
    });
    state.parser.tokenize(state, startLine, nextLine);
    state.tokens.push({
      type: 'blockquote_close',
      level: --state.level
    });
    state.parentType = oldParentType;
    lines[1] = state.line;

    // Restore original tShift; this might not be necessary since the parser
    // has already been here, but just to make sure we can do that.
    for (i = 0; i < oldTShift.length; i++) {
      state.bMarks[i + startLine] = oldBMarks[i];
      state.tShift[i + startLine] = oldTShift[i];
    }
    state.blkIndent = oldIndent;

    return true;
  };

  // Horizontal rule


  var hr = function hr(state, startLine, endLine, silent) {
    var marker, cnt, ch,
        pos = state.bMarks[startLine],
        max = state.eMarks[startLine];

    pos += state.tShift[startLine];

    if (pos > max) { return false; }

    marker = state.src.charCodeAt(pos++);

    // Check hr marker
    if (marker !== 0x2A/* * */ &&
        marker !== 0x2D/* - */ &&
        marker !== 0x5F/* _ */) {
      return false;
    }

    // markers can be mixed with spaces, but there should be at least 3 one

    cnt = 1;
    while (pos < max) {
      ch = state.src.charCodeAt(pos++);
      if (ch !== marker && ch !== 0x20/* space */) { return false; }
      if (ch === marker) { cnt++; }
    }

    if (cnt < 3) { return false; }

    if (silent) { return true; }

    state.line = startLine + 1;
    state.tokens.push({
      type: 'hr',
      lines: [ startLine, state.line ],
      level: state.level
    });

    return true;
  };

  // Lists


  // Search `[-+*][\n ]`, returns next pos arter marker on success
  // or -1 on fail.
  function skipBulletListMarker(state, startLine) {
    var marker, pos, max;

    pos = state.bMarks[startLine] + state.tShift[startLine];
    max = state.eMarks[startLine];

    if (pos >= max) { return -1; }

    marker = state.src.charCodeAt(pos++);
    // Check bullet
    if (marker !== 0x2A/* * */ &&
        marker !== 0x2D/* - */ &&
        marker !== 0x2B/* + */) {
      return -1;
    }

    if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
      // " 1.test " - is not a list item
      return -1;
    }

    return pos;
  }

  // Search `\d+[.)][\n ]`, returns next pos arter marker on success
  // or -1 on fail.
  function skipOrderedListMarker(state, startLine) {
    var ch,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    if (pos + 1 >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

    for (;;) {
      // EOL -> fail
      if (pos >= max) { return -1; }

      ch = state.src.charCodeAt(pos++);

      if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
        continue;
      }

      // found valid marker
      if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
        break;
      }

      return -1;
    }


    if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
      // " 1.test " - is not a list item
      return -1;
    }
    return pos;
  }

  function markTightParagraphs(state, idx) {
    var i, l,
        level = state.level + 2;

    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
      if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
        state.tokens[i + 2].tight = true;
        state.tokens[i].tight = true;
        i += 2;
      }
    }
  }


  var list = function list(state, startLine, endLine, silent) {
    var nextLine,
        indent,
        oldTShift,
        oldIndent,
        oldTight,
        oldParentType,
        start,
        posAfterMarker,
        max,
        indentAfterMarker,
        markerValue,
        markerCharCode,
        isOrdered,
        contentStart,
        listTokIdx,
        prevEmptyEnd,
        listLines,
        itemLines,
        tight = true,
        terminatorRules,
        i, l, terminate;

    // Detect list type and position after marker
    if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
      isOrdered = true;
    } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
      isOrdered = false;
    } else {
      return false;
    }

    if (state.level >= state.options.maxNesting) { return false; }

    // We should terminate list on style change. Remember first one to compare.
    markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

    // For validation mode we can terminate immediately
    if (silent) { return true; }

    // Start list
    listTokIdx = state.tokens.length;

    if (isOrdered) {
      start = state.bMarks[startLine] + state.tShift[startLine];
      markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

      state.tokens.push({
        type: 'ordered_list_open',
        order: markerValue,
        lines: listLines = [ startLine, 0 ],
        level: state.level++
      });

    } else {
      state.tokens.push({
        type: 'bullet_list_open',
        lines: listLines = [ startLine, 0 ],
        level: state.level++
      });
    }

    //
    // Iterate list items
    //

    nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state.parser.ruler.getRules('list');

    while (nextLine < endLine) {
      contentStart = state.skipSpaces(posAfterMarker);
      max = state.eMarks[nextLine];

      if (contentStart >= max) {
        // trimming space in "-    \n  3" case, indent is 1 here
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = contentStart - posAfterMarker;
      }

      // If we have more than 4 spaces, the indent is 1
      // (the rest is just indented code block)
      if (indentAfterMarker > 4) { indentAfterMarker = 1; }

      // If indent is less than 1, assume that it's one, example:
      //  "-\n  test"
      if (indentAfterMarker < 1) { indentAfterMarker = 1; }

      // "  -  test"
      //  ^^^^^ - calculating total length of this thing
      indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

      // Run subparser & write tokens
      state.tokens.push({
        type: 'list_item_open',
        lines: itemLines = [ startLine, 0 ],
        level: state.level++
      });

      oldIndent = state.blkIndent;
      oldTight = state.tight;
      oldTShift = state.tShift[startLine];
      oldParentType = state.parentType;
      state.tShift[startLine] = contentStart - state.bMarks[startLine];
      state.blkIndent = indent;
      state.tight = true;
      state.parentType = 'list';

      state.parser.tokenize(state, startLine, endLine, true);

      // If any of list item is tight, mark list as tight
      if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish
      prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

      state.blkIndent = oldIndent;
      state.tShift[startLine] = oldTShift;
      state.tight = oldTight;
      state.parentType = oldParentType;

      state.tokens.push({
        type: 'list_item_close',
        level: --state.level
      });

      nextLine = startLine = state.line;
      itemLines[1] = nextLine;
      contentStart = state.bMarks[startLine];

      if (nextLine >= endLine) { break; }

      if (state.isEmpty(nextLine)) {
        break;
      }

      //
      // Try to check if list is terminated or continued.
      //
      if (state.tShift[nextLine] < state.blkIndent) { break; }

      // fail if terminating block found
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }

      // fail if list has another type
      if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state, nextLine);
        if (posAfterMarker < 0) { break; }
      } else {
        posAfterMarker = skipBulletListMarker(state, nextLine);
        if (posAfterMarker < 0) { break; }
      }

      if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
    }

    // Finilize list
    state.tokens.push({
      type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
      level: --state.level
    });
    listLines[1] = nextLine;

    state.line = nextLine;

    // mark paragraphs tight if needed
    if (tight) {
      markTightParagraphs(state, listTokIdx);
    }

    return true;
  };

  // Process footnote reference list


  var footnote = function footnote(state, startLine, endLine, silent) {
    var oldBMark, oldTShift, oldParentType, pos, label,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // line should be at least 5 chars - "[^x]:"
    if (start + 4 > max) { return false; }

    if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 0x20) { return false; }
      if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
        break;
      }
    }

    if (pos === start + 2) { return false; } // no empty footnote labels
    if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
    if (silent) { return true; }
    pos++;

    if (!state.env.footnotes) { state.env.footnotes = {}; }
    if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
    label = state.src.slice(start + 2, pos - 2);
    state.env.footnotes.refs[':' + label] = -1;

    state.tokens.push({
      type: 'footnote_reference_open',
      label: label,
      level: state.level++
    });

    oldBMark = state.bMarks[startLine];
    oldTShift = state.tShift[startLine];
    oldParentType = state.parentType;
    state.tShift[startLine] = state.skipSpaces(pos) - pos;
    state.bMarks[startLine] = pos;
    state.blkIndent += 4;
    state.parentType = 'footnote';

    if (state.tShift[startLine] < state.blkIndent) {
      state.tShift[startLine] += state.blkIndent;
      state.bMarks[startLine] -= state.blkIndent;
    }

    state.parser.tokenize(state, startLine, endLine, true);

    state.parentType = oldParentType;
    state.blkIndent -= 4;
    state.tShift[startLine] = oldTShift;
    state.bMarks[startLine] = oldBMark;

    state.tokens.push({
      type: 'footnote_reference_close',
      level: --state.level
    });

    return true;
  };

  // heading (#, ##, ...)


  var heading = function heading(state, startLine, endLine, silent) {
    var ch, level, tmp,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    if (pos >= max) { return false; }

    ch  = state.src.charCodeAt(pos);

    if (ch !== 0x23/* # */ || pos >= max) { return false; }

    // count heading level
    level = 1;
    ch = state.src.charCodeAt(++pos);
    while (ch === 0x23/* # */ && pos < max && level <= 6) {
      level++;
      ch = state.src.charCodeAt(++pos);
    }

    if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

    if (silent) { return true; }

    // Let's cut tails like '    ###  ' from the end of string

    max = state.skipCharsBack(max, 0x20, pos); // space
    tmp = state.skipCharsBack(max, 0x23, pos); // #
    if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
      max = tmp;
    }

    state.line = startLine + 1;

    state.tokens.push({ type: 'heading_open',
      hLevel: level,
      lines: [ startLine, state.line ],
      level: state.level
    });

    // only if header is not empty
    if (pos < max) {
      state.tokens.push({
        type: 'inline',
        content: state.src.slice(pos, max).trim(),
        level: state.level + 1,
        lines: [ startLine, state.line ],
        children: []
      });
    }
    state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });

    return true;
  };

  // lheading (---, ===)


  var lheading = function lheading(state, startLine, endLine/*, silent*/) {
    var marker, pos, max,
        next = startLine + 1;

    if (next >= endLine) { return false; }
    if (state.tShift[next] < state.blkIndent) { return false; }

    // Scan next line

    if (state.tShift[next] - state.blkIndent > 3) { return false; }

    pos = state.bMarks[next] + state.tShift[next];
    max = state.eMarks[next];

    if (pos >= max) { return false; }

    marker = state.src.charCodeAt(pos);

    if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

    pos = state.skipChars(pos, marker);

    pos = state.skipSpaces(pos);

    if (pos < max) { return false; }

    pos = state.bMarks[startLine] + state.tShift[startLine];

    state.line = next + 1;
    state.tokens.push({
      type: 'heading_open',
      hLevel: marker === 0x3D/* = */ ? 1 : 2,
      lines: [ startLine, state.line ],
      level: state.level
    });
    state.tokens.push({
      type: 'inline',
      content: state.src.slice(pos, state.eMarks[startLine]).trim(),
      level: state.level + 1,
      lines: [ startLine, state.line - 1 ],
      children: []
    });
    state.tokens.push({
      type: 'heading_close',
      hLevel: marker === 0x3D/* = */ ? 1 : 2,
      level: state.level
    });

    return true;
  };

  // List of valid html blocks names, accorting to commonmark spec

  var html_blocks = {};

  [
    'article',
    'aside',
    'button',
    'blockquote',
    'body',
    'canvas',
    'caption',
    'col',
    'colgroup',
    'dd',
    'div',
    'dl',
    'dt',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'iframe',
    'li',
    'map',
    'object',
    'ol',
    'output',
    'p',
    'pre',
    'progress',
    'script',
    'section',
    'style',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'tr',
    'thead',
    'ul',
    'video'
  ].forEach(function (name) { html_blocks[name] = true; });


  var html_blocks_1 = html_blocks;

  var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
  var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

  function isLetter$1(ch) {
    /*eslint no-bitwise:0*/
    var lc = ch | 0x20; // to lower case
    return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
  }

  var htmlblock = function htmlblock(state, startLine, endLine, silent) {
    var ch, match, nextLine,
        pos = state.bMarks[startLine],
        max = state.eMarks[startLine],
        shift = state.tShift[startLine];

    pos += shift;

    if (!state.options.html) { return false; }

    if (shift > 3 || pos + 2 >= max) { return false; }

    if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
      // Directive start / comment start / processing instruction start
      if (silent) { return true; }

    } else if (ch === 0x2F/* / */ || isLetter$1(ch)) {

      // Probably start or end of tag
      if (ch === 0x2F/* \ */) {
        // closing tag
        match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
        if (!match) { return false; }
      } else {
        // opening tag
        match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
        if (!match) { return false; }
      }
      // Make sure tag name is valid
      if (html_blocks_1[match[1].toLowerCase()] !== true) { return false; }
      if (silent) { return true; }

    } else {
      return false;
    }

    // If we are here - we detected HTML block.
    // Let's roll down till empty line (block end).
    nextLine = startLine + 1;
    while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
      nextLine++;
    }

    state.line = nextLine;
    state.tokens.push({
      type: 'htmlblock',
      level: state.level,
      lines: [ startLine, state.line ],
      content: state.getLines(startLine, nextLine, 0, true)
    });

    return true;
  };

  // GFM table, non-standard


  function getLine(state, line) {
    var pos = state.bMarks[line] + state.blkIndent,
        max = state.eMarks[line];

    return state.src.substr(pos, max - pos);
  }

  var table = function table(state, startLine, endLine, silent) {
    var ch, lineText, pos, i, nextLine, rows, cell,
        aligns, t, tableLines, tbodyLines;

    // should have at least three lines
    if (startLine + 2 > endLine) { return false; }

    nextLine = startLine + 1;

    if (state.tShift[nextLine] < state.blkIndent) { return false; }

    // first character of the second line should be '|' or '-'

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    if (pos >= state.eMarks[nextLine]) { return false; }

    ch = state.src.charCodeAt(pos);
    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

    lineText = getLine(state, startLine + 1);
    if (!/^[-:| ]+$/.test(lineText)) { return false; }

    rows = lineText.split('|');
    if (rows <= 2) { return false; }
    aligns = [];
    for (i = 0; i < rows.length; i++) {
      t = rows[i].trim();
      if (!t) {
        // allow empty columns before and after table, but not in between columns;
        // e.g. allow ` |---| `, disallow ` ---||--- `
        if (i === 0 || i === rows.length - 1) {
          continue;
        } else {
          return false;
        }
      }

      if (!/^:?-+:?$/.test(t)) { return false; }
      if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
        aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
      } else if (t.charCodeAt(0) === 0x3A/* : */) {
        aligns.push('left');
      } else {
        aligns.push('');
      }
    }

    lineText = getLine(state, startLine).trim();
    if (lineText.indexOf('|') === -1) { return false; }
    rows = lineText.replace(/^\||\|$/g, '').split('|');
    if (aligns.length !== rows.length) { return false; }
    if (silent) { return true; }

    state.tokens.push({
      type: 'table_open',
      lines: tableLines = [ startLine, 0 ],
      level: state.level++
    });
    state.tokens.push({
      type: 'thead_open',
      lines: [ startLine, startLine + 1 ],
      level: state.level++
    });

    state.tokens.push({
      type: 'tr_open',
      lines: [ startLine, startLine + 1 ],
      level: state.level++
    });
    for (i = 0; i < rows.length; i++) {
      state.tokens.push({
        type: 'th_open',
        align: aligns[i],
        lines: [ startLine, startLine + 1 ],
        level: state.level++
      });
      state.tokens.push({
        type: 'inline',
        content: rows[i].trim(),
        lines: [ startLine, startLine + 1 ],
        level: state.level,
        children: []
      });
      state.tokens.push({ type: 'th_close', level: --state.level });
    }
    state.tokens.push({ type: 'tr_close', level: --state.level });
    state.tokens.push({ type: 'thead_close', level: --state.level });

    state.tokens.push({
      type: 'tbody_open',
      lines: tbodyLines = [ startLine + 2, 0 ],
      level: state.level++
    });

    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state.tShift[nextLine] < state.blkIndent) { break; }

      lineText = getLine(state, nextLine).trim();
      if (lineText.indexOf('|') === -1) { break; }
      rows = lineText.replace(/^\||\|$/g, '').split('|');

      state.tokens.push({ type: 'tr_open', level: state.level++ });
      for (i = 0; i < rows.length; i++) {
        state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
        // 0x7c === '|'
        cell = rows[i].substring(
            rows[i].charCodeAt(0) === 0x7c ? 1 : 0,
            rows[i].charCodeAt(rows[i].length - 1) === 0x7c ? rows[i].length - 1 : rows[i].length
        ).trim();
        state.tokens.push({
          type: 'inline',
          content: cell,
          level: state.level,
          children: []
        });
        state.tokens.push({ type: 'td_close', level: --state.level });
      }
      state.tokens.push({ type: 'tr_close', level: --state.level });
    }
    state.tokens.push({ type: 'tbody_close', level: --state.level });
    state.tokens.push({ type: 'table_close', level: --state.level });

    tableLines[1] = tbodyLines[1] = nextLine;
    state.line = nextLine;
    return true;
  };

  // Definition lists


  // Search `[:~][\n ]`, returns next pos after marker on success
  // or -1 on fail.
  function skipMarker(state, line) {
    var pos, marker,
        start = state.bMarks[line] + state.tShift[line],
        max = state.eMarks[line];

    if (start >= max) { return -1; }

    // Check bullet
    marker = state.src.charCodeAt(start++);
    if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

    pos = state.skipSpaces(start);

    // require space after ":"
    if (start === pos) { return -1; }

    // no empty definitions, e.g. "  : "
    if (pos >= max) { return -1; }

    return pos;
  }

  function markTightParagraphs$1(state, idx) {
    var i, l,
        level = state.level + 2;

    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
      if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
        state.tokens[i + 2].tight = true;
        state.tokens[i].tight = true;
        i += 2;
      }
    }
  }

  var deflist = function deflist(state, startLine, endLine, silent) {
    var contentStart,
        ddLine,
        dtLine,
        itemLines,
        listLines,
        listTokIdx,
        nextLine,
        oldIndent,
        oldDDIndent,
        oldParentType,
        oldTShift,
        oldTight,
        prevEmptyEnd,
        tight;

    if (silent) {
      // quirk: validation mode validates a dd block only, not a whole deflist
      if (state.ddIndent < 0) { return false; }
      return skipMarker(state, startLine) >= 0;
    }

    nextLine = startLine + 1;
    if (state.isEmpty(nextLine)) {
      if (++nextLine > endLine) { return false; }
    }

    if (state.tShift[nextLine] < state.blkIndent) { return false; }
    contentStart = skipMarker(state, nextLine);
    if (contentStart < 0) { return false; }

    if (state.level >= state.options.maxNesting) { return false; }

    // Start list
    listTokIdx = state.tokens.length;

    state.tokens.push({
      type: 'dl_open',
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });

    //
    // Iterate list items
    //

    dtLine = startLine;
    ddLine = nextLine;

    // One definition list can contain multiple DTs,
    // and one DT can be followed by multiple DDs.
    //
    // Thus, there is two loops here, and label is
    // needed to break out of the second one
    //
    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    for (;;) {
      tight = true;
      prevEmptyEnd = false;

      state.tokens.push({
        type: 'dt_open',
        lines: [ dtLine, dtLine ],
        level: state.level++
      });
      state.tokens.push({
        type: 'inline',
        content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
        level: state.level + 1,
        lines: [ dtLine, dtLine ],
        children: []
      });
      state.tokens.push({
        type: 'dt_close',
        level: --state.level
      });

      for (;;) {
        state.tokens.push({
          type: 'dd_open',
          lines: itemLines = [ nextLine, 0 ],
          level: state.level++
        });

        oldTight = state.tight;
        oldDDIndent = state.ddIndent;
        oldIndent = state.blkIndent;
        oldTShift = state.tShift[ddLine];
        oldParentType = state.parentType;
        state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
        state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
        state.tight = true;
        state.parentType = 'deflist';

        state.parser.tokenize(state, ddLine, endLine, true);

        // If any of list item is tight, mark list as tight
        if (!state.tight || prevEmptyEnd) {
          tight = false;
        }
        // Item become loose if finish with empty line,
        // but we should filter last element, because it means list finish
        prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

        state.tShift[ddLine] = oldTShift;
        state.tight = oldTight;
        state.parentType = oldParentType;
        state.blkIndent = oldIndent;
        state.ddIndent = oldDDIndent;

        state.tokens.push({
          type: 'dd_close',
          level: --state.level
        });

        itemLines[1] = nextLine = state.line;

        if (nextLine >= endLine) { break OUTER; }

        if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
        contentStart = skipMarker(state, nextLine);
        if (contentStart < 0) { break; }

        ddLine = nextLine;

        // go to the next loop iteration:
        // insert DD tag and repeat checking
      }

      if (nextLine >= endLine) { break; }
      dtLine = nextLine;

      if (state.isEmpty(dtLine)) { break; }
      if (state.tShift[dtLine] < state.blkIndent) { break; }

      ddLine = dtLine + 1;
      if (ddLine >= endLine) { break; }
      if (state.isEmpty(ddLine)) { ddLine++; }
      if (ddLine >= endLine) { break; }

      if (state.tShift[ddLine] < state.blkIndent) { break; }
      contentStart = skipMarker(state, ddLine);
      if (contentStart < 0) { break; }

      // go to the next loop iteration:
      // insert DT and DD tags and repeat checking
    }

    // Finilize list
    state.tokens.push({
      type: 'dl_close',
      level: --state.level
    });
    listLines[1] = nextLine;

    state.line = nextLine;

    // mark paragraphs tight if needed
    if (tight) {
      markTightParagraphs$1(state, listTokIdx);
    }

    return true;
  };

  // Paragraph


  var paragraph = function paragraph(state, startLine/*, endLine*/) {
    var endLine, content, terminate, i, l,
        nextLine = startLine + 1,
        terminatorRules;

    endLine = state.lineMax;

    // jump line-by-line until empty one or EOF
    if (nextLine < endLine && !state.isEmpty(nextLine)) {
      terminatorRules = state.parser.ruler.getRules('paragraph');

      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        // this would be a code block normally, but after paragraph
        // it's considered a lazy continuation regardless of what's there
        if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

        // Some tags can terminate paragraph without empty line.
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) { break; }
      }
    }

    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

    state.line = nextLine;
    if (content.length) {
      state.tokens.push({
        type: 'paragraph_open',
        tight: false,
        lines: [ startLine, state.line ],
        level: state.level
      });
      state.tokens.push({
        type: 'inline',
        content: content,
        level: state.level + 1,
        lines: [ startLine, state.line ],
        children: []
      });
      state.tokens.push({
        type: 'paragraph_close',
        tight: false,
        level: state.level
      });
    }

    return true;
  };

  /**
   * Local dependencies
   */




  /**
   * Parser rules
   */

  var _rules$1 = [
    [ 'code',       code ],
    [ 'fences',     fences,     [ 'paragraph', 'blockquote', 'list' ] ],
    [ 'blockquote', blockquote, [ 'paragraph', 'blockquote', 'list' ] ],
    [ 'hr',         hr,         [ 'paragraph', 'blockquote', 'list' ] ],
    [ 'list',       list,       [ 'paragraph', 'blockquote' ] ],
    [ 'footnote',   footnote,   [ 'paragraph' ] ],
    [ 'heading',    heading,    [ 'paragraph', 'blockquote' ] ],
    [ 'lheading',   lheading ],
    [ 'htmlblock',  htmlblock,  [ 'paragraph', 'blockquote' ] ],
    [ 'table',      table,      [ 'paragraph' ] ],
    [ 'deflist',    deflist,    [ 'paragraph' ] ],
    [ 'paragraph',  paragraph ]
  ];

  /**
   * Block Parser class
   *
   * @api private
   */

  function ParserBlock() {
    this.ruler = new ruler();
    for (var i = 0; i < _rules$1.length; i++) {
      this.ruler.push(_rules$1[i][0], _rules$1[i][1], {
        alt: (_rules$1[i][2] || []).slice()
      });
    }
  }

  /**
   * Generate tokens for the given input range.
   *
   * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
   * @param  {Number} `startLine`
   * @param  {Number} `endLine`
   * @api private
   */

  ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
    var rules = this.ruler.getRules('');
    var len = rules.length;
    var line = startLine;
    var hasEmptyLines = false;
    var ok, i;

    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);
      if (line >= endLine) {
        break;
      }

      // Termination condition for nested calls.
      // Nested calls currently used for blockquotes & lists
      if (state.tShift[line] < state.blkIndent) {
        break;
      }

      // Try all possible rules.
      // On success, rule should:
      //
      // - update `state.line`
      // - update `state.tokens`
      // - return true

      for (i = 0; i < len; i++) {
        ok = rules[i](state, line, endLine, false);
        if (ok) {
          break;
        }
      }

      // set state.tight iff we had an empty line before current tag
      // i.e. latest empty line should not count
      state.tight = !hasEmptyLines;

      // paragraph might "eat" one newline after it in nested lists
      if (state.isEmpty(state.line - 1)) {
        hasEmptyLines = true;
      }

      line = state.line;

      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;

        // two empty lines should stop the parser in list mode
        if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
        state.line = line;
      }
    }
  };

  var TABS_SCAN_RE = /[\n\t]/g;
  var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
  var SPACES_RE    = /\u00a0/g;

  /**
   * Tokenize the given `str`.
   *
   * @param  {String} `str` Source string
   * @param  {Object} `options`
   * @param  {Object} `env`
   * @param  {Array} `outTokens`
   * @api private
   */

  ParserBlock.prototype.parse = function (str, options, env, outTokens) {
    var state, lineStart = 0, lastTabPos = 0;
    if (!str) { return []; }

    // Normalize spaces
    str = str.replace(SPACES_RE, ' ');

    // Normalize newlines
    str = str.replace(NEWLINES_RE, '\n');

    // Replace tabs with proper number of spaces (1..4)
    if (str.indexOf('\t') >= 0) {
      str = str.replace(TABS_SCAN_RE, function (match, offset) {
        var result;
        if (str.charCodeAt(offset) === 0x0A) {
          lineStart = offset + 1;
          lastTabPos = 0;
          return match;
        }
        result = '    '.slice((offset - lineStart - lastTabPos) % 4);
        lastTabPos = offset - lineStart + 1;
        return result;
      });
    }

    state = new state_block(str, this, options, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
  };

  /**
   * Expose `ParserBlock`
   */

  var parser_block = ParserBlock;

  // Skip text characters for text token, place those to pending buffer

  // Rule to skip pure text
  // '{}$%@~+=:' reserved for extentions

  function isTerminatorChar(ch) {
    switch (ch) {
      case 0x0A/* \n */:
      case 0x5C/* \ */:
      case 0x60/* ` */:
      case 0x2A/* * */:
      case 0x5F/* _ */:
      case 0x5E/* ^ */:
      case 0x5B/* [ */:
      case 0x5D/* ] */:
      case 0x21/* ! */:
      case 0x26/* & */:
      case 0x3C/* < */:
      case 0x3E/* > */:
      case 0x7B/* { */:
      case 0x7D/* } */:
      case 0x24/* $ */:
      case 0x25/* % */:
      case 0x40/* @ */:
      case 0x7E/* ~ */:
      case 0x2B/* + */:
      case 0x3D/* = */:
      case 0x3A/* : */:
        return true;
      default:
        return false;
    }
  }

  var text = function text(state, silent) {
    var pos = state.pos;

    while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
      pos++;
    }

    if (pos === state.pos) { return false; }

    if (!silent) { state.pending += state.src.slice(state.pos, pos); }

    state.pos = pos;

    return true;
  };

  // Proceess '\n'

  var newline = function newline(state, silent) {
    var pmax, max, pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

    pmax = state.pending.length - 1;
    max = state.posMax;

    // '  \n' -> hardbreak
    // Lookup in pending chars is bad practice! Don't copy to other rules!
    // Pending string is stored in concat mode, indexed lookups will cause
    // convertion to flat mode.
    if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
          // Strip out all trailing spaces on this line.
          for (var i = pmax - 2; i >= 0; i--) {
            if (state.pending.charCodeAt(i) !== 0x20) {
              state.pending = state.pending.substring(0, i + 1);
              break;
            }
          }
          state.push({
            type: 'hardbreak',
            level: state.level
          });
        } else {
          state.pending = state.pending.slice(0, -1);
          state.push({
            type: 'softbreak',
            level: state.level
          });
        }

      } else {
        state.push({
          type: 'softbreak',
          level: state.level
        });
      }
    }

    pos++;

    // skip heading spaces for next line
    while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

    state.pos = pos;
    return true;
  };

  // Proceess escaped chars and hardbreaks

  var ESCAPED = [];

  for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

  '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
    .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


  var _escape = function escape(state, silent) {
    var ch, pos = state.pos, max = state.posMax;

    if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

    pos++;

    if (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch < 256 && ESCAPED[ch] !== 0) {
        if (!silent) { state.pending += state.src[pos]; }
        state.pos += 2;
        return true;
      }

      if (ch === 0x0A) {
        if (!silent) {
          state.push({
            type: 'hardbreak',
            level: state.level
          });
        }

        pos++;
        // skip leading whitespaces from next line
        while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

        state.pos = pos;
        return true;
      }
    }

    if (!silent) { state.pending += '\\'; }
    state.pos++;
    return true;
  };

  // Parse backticks

  var backticks = function backticks(state, silent) {
    var start, max, marker, matchStart, matchEnd,
        pos = state.pos,
        ch = state.src.charCodeAt(pos);

    if (ch !== 0x60/* ` */) { return false; }

    start = pos;
    pos++;
    max = state.posMax;

    while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

    marker = state.src.slice(start, pos);

    matchStart = matchEnd = pos;

    while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
      matchEnd = matchStart + 1;

      while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

      if (matchEnd - matchStart === marker.length) {
        if (!silent) {
          state.push({
            type: 'code',
            content: state.src.slice(pos, matchStart)
                                .replace(/[ \n]+/g, ' ')
                                .trim(),
            block: false,
            level: state.level
          });
        }
        state.pos = matchEnd;
        return true;
      }
    }

    if (!silent) { state.pending += marker; }
    state.pos += marker.length;
    return true;
  };

  // Process ~~deleted text~~

  var del = function del(state, silent) {
    var found,
        pos,
        stack,
        max = state.posMax,
        start = state.pos,
        lastChar,
        nextChar;

    if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode
    if (start + 4 >= max) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
    nextChar = state.src.charCodeAt(start + 2);

    if (lastChar === 0x7E/* ~ */) { return false; }
    if (nextChar === 0x7E/* ~ */) { return false; }
    if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

    pos = start + 2;
    while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
    if (pos > start + 3) {
      // sequence of 4+ markers taking as literal, same as in a emphasis
      state.pos += pos - start;
      if (!silent) { state.pending += state.src.slice(start, pos); }
      return true;
    }

    state.pos = start + 2;
    stack = 1;

    while (state.pos + 1 < max) {
      if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
        if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
          lastChar = state.src.charCodeAt(state.pos - 1);
          nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
          if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
            if (lastChar !== 0x20 && lastChar !== 0x0A) {
              // closing '~~'
              stack--;
            } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
              // opening '~~'
              stack++;
            } // else {
              //  // standalone ' ~~ ' indented with spaces
              // }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }

      state.parser.skipToken(state);
    }

    if (!found) {
      // parser failed to find ending tag, so it's not valid emphasis
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 2;

    if (!silent) {
      state.push({ type: 'del_open', level: state.level++ });
      state.parser.tokenize(state);
      state.push({ type: 'del_close', level: --state.level });
    }

    state.pos = state.posMax + 2;
    state.posMax = max;
    return true;
  };

  // Process ++inserted text++

  var ins = function ins(state, silent) {
    var found,
        pos,
        stack,
        max = state.posMax,
        start = state.pos,
        lastChar,
        nextChar;

    if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode
    if (start + 4 >= max) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
    nextChar = state.src.charCodeAt(start + 2);

    if (lastChar === 0x2B/* + */) { return false; }
    if (nextChar === 0x2B/* + */) { return false; }
    if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

    pos = start + 2;
    while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
    if (pos !== start + 2) {
      // sequence of 3+ markers taking as literal, same as in a emphasis
      state.pos += pos - start;
      if (!silent) { state.pending += state.src.slice(start, pos); }
      return true;
    }

    state.pos = start + 2;
    stack = 1;

    while (state.pos + 1 < max) {
      if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
        if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
          lastChar = state.src.charCodeAt(state.pos - 1);
          nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
          if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
            if (lastChar !== 0x20 && lastChar !== 0x0A) {
              // closing '++'
              stack--;
            } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
              // opening '++'
              stack++;
            } // else {
              //  // standalone ' ++ ' indented with spaces
              // }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }

      state.parser.skipToken(state);
    }

    if (!found) {
      // parser failed to find ending tag, so it's not valid emphasis
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 2;

    if (!silent) {
      state.push({ type: 'ins_open', level: state.level++ });
      state.parser.tokenize(state);
      state.push({ type: 'ins_close', level: --state.level });
    }

    state.pos = state.posMax + 2;
    state.posMax = max;
    return true;
  };

  // Process ==highlighted text==

  var mark = function del(state, silent) {
    var found,
        pos,
        stack,
        max = state.posMax,
        start = state.pos,
        lastChar,
        nextChar;

    if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode
    if (start + 4 >= max) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
    nextChar = state.src.charCodeAt(start + 2);

    if (lastChar === 0x3D/* = */) { return false; }
    if (nextChar === 0x3D/* = */) { return false; }
    if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

    pos = start + 2;
    while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
    if (pos !== start + 2) {
      // sequence of 3+ markers taking as literal, same as in a emphasis
      state.pos += pos - start;
      if (!silent) { state.pending += state.src.slice(start, pos); }
      return true;
    }

    state.pos = start + 2;
    stack = 1;

    while (state.pos + 1 < max) {
      if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
        if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
          lastChar = state.src.charCodeAt(state.pos - 1);
          nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
          if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
            if (lastChar !== 0x20 && lastChar !== 0x0A) {
              // closing '=='
              stack--;
            } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
              // opening '=='
              stack++;
            } // else {
              //  // standalone ' == ' indented with spaces
              // }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }

      state.parser.skipToken(state);
    }

    if (!found) {
      // parser failed to find ending tag, so it's not valid emphasis
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 2;

    if (!silent) {
      state.push({ type: 'mark_open', level: state.level++ });
      state.parser.tokenize(state);
      state.push({ type: 'mark_close', level: --state.level });
    }

    state.pos = state.posMax + 2;
    state.posMax = max;
    return true;
  };

  // Process *this* and _that_


  function isAlphaNum(code) {
    return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
           (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
           (code >= 0x61 /* a */ && code <= 0x7A /* z */);
  }

  // parse sequence of emphasis markers,
  // "start" should point at a valid marker
  function scanDelims(state, start) {
    var pos = start, lastChar, nextChar, count,
        can_open = true,
        can_close = true,
        max = state.posMax,
        marker = state.src.charCodeAt(start);

    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

    while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
    if (pos >= max) { can_open = false; }
    count = pos - start;

    if (count >= 4) {
      // sequence of four or more unescaped markers can't start/end an emphasis
      can_open = can_close = false;
    } else {
      nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

      // check whitespace conditions
      if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
      if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }

      if (marker === 0x5F /* _ */) {
        // check if we aren't inside the word
        if (isAlphaNum(lastChar)) { can_open = false; }
        if (isAlphaNum(nextChar)) { can_close = false; }
      }
    }

    return {
      can_open: can_open,
      can_close: can_close,
      delims: count
    };
  }

  var emphasis = function emphasis(state, silent) {
    var startCount,
        count,
        found,
        oldCount,
        newCount,
        stack,
        res,
        max = state.posMax,
        start = state.pos,
        marker = state.src.charCodeAt(start);

    if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode

    res = scanDelims(state, start);
    startCount = res.delims;
    if (!res.can_open) {
      state.pos += startCount;
      if (!silent) { state.pending += state.src.slice(start, state.pos); }
      return true;
    }

    if (state.level >= state.options.maxNesting) { return false; }

    state.pos = start + startCount;
    stack = [ startCount ];

    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === marker) {
        res = scanDelims(state, state.pos);
        count = res.delims;
        if (res.can_close) {
          oldCount = stack.pop();
          newCount = count;

          while (oldCount !== newCount) {
            if (newCount < oldCount) {
              stack.push(oldCount - newCount);
              break;
            }

            // assert(newCount > oldCount)
            newCount -= oldCount;

            if (stack.length === 0) { break; }
            state.pos += oldCount;
            oldCount = stack.pop();
          }

          if (stack.length === 0) {
            startCount = oldCount;
            found = true;
            break;
          }
          state.pos += count;
          continue;
        }

        if (res.can_open) { stack.push(count); }
        state.pos += count;
        continue;
      }

      state.parser.skipToken(state);
    }

    if (!found) {
      // parser failed to find ending tag, so it's not valid emphasis
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + startCount;

    if (!silent) {
      if (startCount === 2 || startCount === 3) {
        state.push({ type: 'strong_open', level: state.level++ });
      }
      if (startCount === 1 || startCount === 3) {
        state.push({ type: 'em_open', level: state.level++ });
      }

      state.parser.tokenize(state);

      if (startCount === 1 || startCount === 3) {
        state.push({ type: 'em_close', level: --state.level });
      }
      if (startCount === 2 || startCount === 3) {
        state.push({ type: 'strong_close', level: --state.level });
      }
    }

    state.pos = state.posMax + startCount;
    state.posMax = max;
    return true;
  };

  // Process ~subscript~

  // same as UNESCAPE_MD_RE plus a space
  var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

  var sub = function sub(state, silent) {
    var found,
        content,
        max = state.posMax,
        start = state.pos;

    if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode
    if (start + 2 >= max) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    state.pos = start + 1;

    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
        found = true;
        break;
      }

      state.parser.skipToken(state);
    }

    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }

    content = state.src.slice(start + 1, state.pos);

    // don't allow unescaped spaces/newlines inside
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 1;

    if (!silent) {
      state.push({
        type: 'sub',
        level: state.level,
        content: content.replace(UNESCAPE_RE, '$1')
      });
    }

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  };

  // Process ^superscript^

  // same as UNESCAPE_MD_RE plus a space
  var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

  var sup = function sup(state, silent) {
    var found,
        content,
        max = state.posMax,
        start = state.pos;

    if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode
    if (start + 2 >= max) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    state.pos = start + 1;

    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
        found = true;
        break;
      }

      state.parser.skipToken(state);
    }

    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }

    content = state.src.slice(start + 1, state.pos);

    // don't allow unescaped spaces/newlines inside
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 1;

    if (!silent) {
      state.push({
        type: 'sup',
        level: state.level,
        content: content.replace(UNESCAPE_RE$1, '$1')
      });
    }

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  };

  var links = function links(state, silent) {
    var labelStart,
        labelEnd,
        label,
        href,
        title,
        pos,
        ref,
        code,
        isImage = false,
        oldPos = state.pos,
        max = state.posMax,
        start = state.pos,
        marker = state.src.charCodeAt(start);

    if (marker === 0x21/* ! */) {
      isImage = true;
      marker = state.src.charCodeAt(++start);
    }

    if (marker !== 0x5B/* [ */) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    labelStart = start + 1;
    labelEnd = parse_link_label(state, start);

    // parser failed to find ']', so it's not a valid link
    if (labelEnd < 0) { return false; }

    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
      //
      // Inline link
      //

      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
      pos++;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }
      if (pos >= max) { return false; }

      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
      start = pos;
      if (parse_link_destination(state, pos)) {
        href = state.linkContent;
        pos = state.pos;
      } else {
        href = '';
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      if (pos < max && start !== pos && parse_link_title(state, pos)) {
        title = state.linkContent;
        pos = state.pos;

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (code !== 0x20 && code !== 0x0A) { break; }
        }
      } else {
        title = '';
      }

      if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
        state.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      //
      // Link reference
      //

      // do not allow nested reference links
      if (state.linkLevel > 0) { return false; }

      // [foo]  [bar]
      //      ^^ optional whitespace (can include newlines)
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }

      if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
        start = pos + 1;
        pos = parse_link_label(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = start - 1;
        }
      }

      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
      if (!label) {
        if (typeof label === 'undefined') {
          pos = labelEnd + 1;
        }
        label = state.src.slice(labelStart, labelEnd);
      }

      ref = state.env.references[normalize_reference(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }

    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      state.pos = labelStart;
      state.posMax = labelEnd;

      if (isImage) {
        state.push({
          type: 'image',
          src: href,
          title: title,
          alt: state.src.substr(labelStart, labelEnd - labelStart),
          level: state.level
        });
      } else {
        state.push({
          type: 'link_open',
          href: href,
          title: title,
          level: state.level++
        });
        state.linkLevel++;
        state.parser.tokenize(state);
        state.linkLevel--;
        state.push({ type: 'link_close', level: --state.level });
      }
    }

    state.pos = pos;
    state.posMax = max;
    return true;
  };

  var footnote_inline = function footnote_inline(state, silent) {
    var labelStart,
        labelEnd,
        footnoteId,
        oldLength,
        max = state.posMax,
        start = state.pos;

    if (start + 2 >= max) { return false; }
    if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    labelStart = start + 2;
    labelEnd = parse_link_label(state, start + 1);

    // parser failed to find ']', so it's not a valid note
    if (labelEnd < 0) { return false; }

    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      if (!state.env.footnotes) { state.env.footnotes = {}; }
      if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
      footnoteId = state.env.footnotes.list.length;

      state.pos = labelStart;
      state.posMax = labelEnd;

      state.push({
        type: 'footnote_ref',
        id: footnoteId,
        level: state.level
      });
      state.linkLevel++;
      oldLength = state.tokens.length;
      state.parser.tokenize(state);
      state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
      state.linkLevel--;
    }

    state.pos = labelEnd + 1;
    state.posMax = max;
    return true;
  };

  // Process footnote references ([^...])


  var footnote_ref = function footnote_ref(state, silent) {
    var label,
        pos,
        footnoteId,
        footnoteSubId,
        max = state.posMax,
        start = state.pos;

    // should be at least 4 chars - "[^x]"
    if (start + 3 > max) { return false; }

    if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
    if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
    if (state.level >= state.options.maxNesting) { return false; }

    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 0x20) { return false; }
      if (state.src.charCodeAt(pos) === 0x0A) { return false; }
      if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
        break;
      }
    }

    if (pos === start + 2) { return false; } // no empty footnote labels
    if (pos >= max) { return false; }
    pos++;

    label = state.src.slice(start + 2, pos - 1);
    if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

    if (!silent) {
      if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

      if (state.env.footnotes.refs[':' + label] < 0) {
        footnoteId = state.env.footnotes.list.length;
        state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
        state.env.footnotes.refs[':' + label] = footnoteId;
      } else {
        footnoteId = state.env.footnotes.refs[':' + label];
      }

      footnoteSubId = state.env.footnotes.list[footnoteId].count;
      state.env.footnotes.list[footnoteId].count++;

      state.push({
        type: 'footnote_ref',
        id: footnoteId,
        subId: footnoteSubId,
        level: state.level
      });
    }

    state.pos = pos;
    state.posMax = max;
    return true;
  };

  // List of valid url schemas, accorting to commonmark spec


  var url_schemas = [
    'coap',
    'doi',
    'javascript',
    'aaa',
    'aaas',
    'about',
    'acap',
    'cap',
    'cid',
    'crid',
    'data',
    'dav',
    'dict',
    'dns',
    'file',
    'ftp',
    'geo',
    'go',
    'gopher',
    'h323',
    'http',
    'https',
    'iax',
    'icap',
    'im',
    'imap',
    'info',
    'ipp',
    'iris',
    'iris.beep',
    'iris.xpc',
    'iris.xpcs',
    'iris.lwz',
    'ldap',
    'mailto',
    'mid',
    'msrp',
    'msrps',
    'mtqp',
    'mupdate',
    'news',
    'nfs',
    'ni',
    'nih',
    'nntp',
    'opaquelocktoken',
    'pop',
    'pres',
    'rtsp',
    'service',
    'session',
    'shttp',
    'sieve',
    'sip',
    'sips',
    'sms',
    'snmp',
    'soap.beep',
    'soap.beeps',
    'tag',
    'tel',
    'telnet',
    'tftp',
    'thismessage',
    'tn3270',
    'tip',
    'tv',
    'urn',
    'vemmi',
    'ws',
    'wss',
    'xcon',
    'xcon-userid',
    'xmlrpc.beep',
    'xmlrpc.beeps',
    'xmpp',
    'z39.50r',
    'z39.50s',
    'adiumxtra',
    'afp',
    'afs',
    'aim',
    'apt',
    'attachment',
    'aw',
    'beshare',
    'bitcoin',
    'bolo',
    'callto',
    'chrome',
    'chrome-extension',
    'com-eventbrite-attendee',
    'content',
    'cvs',
    'dlna-playsingle',
    'dlna-playcontainer',
    'dtn',
    'dvb',
    'ed2k',
    'facetime',
    'feed',
    'finger',
    'fish',
    'gg',
    'git',
    'gizmoproject',
    'gtalk',
    'hcp',
    'icon',
    'ipn',
    'irc',
    'irc6',
    'ircs',
    'itms',
    'jar',
    'jms',
    'keyparc',
    'lastfm',
    'ldaps',
    'magnet',
    'maps',
    'market',
    'message',
    'mms',
    'ms-help',
    'msnim',
    'mumble',
    'mvn',
    'notes',
    'oid',
    'palm',
    'paparazzi',
    'platform',
    'proxy',
    'psyc',
    'query',
    'res',
    'resource',
    'rmi',
    'rsync',
    'rtmp',
    'secondlife',
    'sftp',
    'sgn',
    'skype',
    'smb',
    'soldat',
    'spotify',
    'ssh',
    'steam',
    'svn',
    'teamspeak',
    'things',
    'udp',
    'unreal',
    'ut2004',
    'ventrilo',
    'view-source',
    'webcal',
    'wtai',
    'wyciwyg',
    'xfire',
    'xri',
    'ymsgr'
  ];

  /*eslint max-len:0*/
  var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
  var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


  var autolink = function autolink(state, silent) {
    var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

    tail = state.src.slice(pos);

    if (tail.indexOf('>') < 0) { return false; }

    linkMatch = tail.match(AUTOLINK_RE);

    if (linkMatch) {
      if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

      url = linkMatch[0].slice(1, -1);
      fullUrl = normalize_link(url);
      if (!state.parser.validateLink(url)) { return false; }

      if (!silent) {
        state.push({
          type: 'link_open',
          href: fullUrl,
          level: state.level
        });
        state.push({
          type: 'text',
          content: url,
          level: state.level + 1
        });
        state.push({ type: 'link_close', level: state.level });
      }

      state.pos += linkMatch[0].length;
      return true;
    }

    emailMatch = tail.match(EMAIL_RE);

    if (emailMatch) {

      url = emailMatch[0].slice(1, -1);

      fullUrl = normalize_link('mailto:' + url);
      if (!state.parser.validateLink(fullUrl)) { return false; }

      if (!silent) {
        state.push({
          type: 'link_open',
          href: fullUrl,
          level: state.level
        });
        state.push({
          type: 'text',
          content: url,
          level: state.level + 1
        });
        state.push({ type: 'link_close', level: state.level });
      }

      state.pos += emailMatch[0].length;
      return true;
    }

    return false;
  };

  // Regexps to match html elements


  function replace(regex, options) {
    regex = regex.source;
    options = options || '';

    return function self(name, val) {
      if (!name) {
        return new RegExp(regex, options);
      }
      val = val.source || val;
      regex = regex.replace(name, val);
      return self;
    };
  }


  var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;

  var unquoted      = /[^"'=<>`\x00-\x20]+/;
  var single_quoted = /'[^']*'/;
  var double_quoted = /"[^"]*"/;

  /*eslint no-spaced-func:0*/
  var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
                      ('unquoted', unquoted)
                      ('single_quoted', single_quoted)
                      ('double_quoted', double_quoted)
                      ();

  var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
                      ('attr_name', attr_name)
                      ('attr_value', attr_value)
                      ();

  var open_tag    = replace(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
                      ('attribute', attribute)
                      ();

  var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
  var comment     = /<!--([^-]+|[-][^-]+)*-->/;
  var processing  = /<[?].*?[?]>/;
  var declaration = /<![A-Z]+\s+[^>]*>/;
  var cdata       = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/;

  var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
    ('open_tag', open_tag)
    ('close_tag', close_tag)
    ('comment', comment)
    ('processing', processing)
    ('declaration', declaration)
    ('cdata', cdata)
    ();


  var HTML_TAG_RE_1 = HTML_TAG_RE;

  var html_re = {
  	HTML_TAG_RE: HTML_TAG_RE_1
  };

  var HTML_TAG_RE$1 = html_re.HTML_TAG_RE;


  function isLetter$2(ch) {
    /*eslint no-bitwise:0*/
    var lc = ch | 0x20; // to lower case
    return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
  }


  var htmltag = function htmltag(state, silent) {
    var ch, match, max, pos = state.pos;

    if (!state.options.html) { return false; }

    // Check start
    max = state.posMax;
    if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
        pos + 2 >= max) {
      return false;
    }

    // Quick fail on second char
    ch = state.src.charCodeAt(pos + 1);
    if (ch !== 0x21/* ! */ &&
        ch !== 0x3F/* ? */ &&
        ch !== 0x2F/* / */ &&
        !isLetter$2(ch)) {
      return false;
    }

    match = state.src.slice(pos).match(HTML_TAG_RE$1);
    if (!match) { return false; }

    if (!silent) {
      state.push({
        type: 'htmltag',
        content: state.src.slice(pos, pos + match[0].length),
        level: state.level
      });
    }
    state.pos += match[0].length;
    return true;
  };

  var has$2               = utils.has;
  var isValidEntityCode$1 = utils.isValidEntityCode;
  var fromCodePoint$1     = utils.fromCodePoint;


  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
  var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


  var entity = function entity(state, silent) {
    var ch, code, match, pos = state.pos, max = state.posMax;

    if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

    if (pos + 1 < max) {
      ch = state.src.charCodeAt(pos + 1);

      if (ch === 0x23 /* # */) {
        match = state.src.slice(pos).match(DIGITAL_RE);
        if (match) {
          if (!silent) {
            code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
            state.pending += isValidEntityCode$1(code) ? fromCodePoint$1(code) : fromCodePoint$1(0xFFFD);
          }
          state.pos += match[0].length;
          return true;
        }
      } else {
        match = state.src.slice(pos).match(NAMED_RE);
        if (match) {
          if (has$2(entities, match[1])) {
            if (!silent) { state.pending += entities[match[1]]; }
            state.pos += match[0].length;
            return true;
          }
        }
      }
    }

    if (!silent) { state.pending += '&'; }
    state.pos++;
    return true;
  };

  /**
   * Local dependencies
   */





  /**
   * Inline Parser `rules`
   */

  var _rules$2 = [
    [ 'text',            text ],
    [ 'newline',         newline ],
    [ 'escape',          _escape ],
    [ 'backticks',       backticks ],
    [ 'del',             del ],
    [ 'ins',             ins ],
    [ 'mark',            mark ],
    [ 'emphasis',        emphasis ],
    [ 'sub',             sub ],
    [ 'sup',             sup ],
    [ 'links',           links ],
    [ 'footnote_inline', footnote_inline ],
    [ 'footnote_ref',    footnote_ref ],
    [ 'autolink',        autolink ],
    [ 'htmltag',         htmltag ],
    [ 'entity',          entity ]
  ];

  /**
   * Inline Parser class. Note that link validation is stricter
   * in Remarkable than what is specified by CommonMark. If you
   * want to change this you can use a custom validator.
   *
   * @api private
   */

  function ParserInline() {
    this.ruler = new ruler();
    for (var i = 0; i < _rules$2.length; i++) {
      this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
    }

    // Can be overridden with a custom validator
    this.validateLink = validateLink;
  }

  /**
   * Skip a single token by running all rules in validation mode.
   * Returns `true` if any rule reports success.
   *
   * @param  {Object} `state`
   * @api privage
   */

  ParserInline.prototype.skipToken = function (state) {
    var rules = this.ruler.getRules('');
    var len = rules.length;
    var pos = state.pos;
    var i, cached_pos;

    if ((cached_pos = state.cacheGet(pos)) > 0) {
      state.pos = cached_pos;
      return;
    }

    for (i = 0; i < len; i++) {
      if (rules[i](state, true)) {
        state.cacheSet(pos, state.pos);
        return;
      }
    }

    state.pos++;
    state.cacheSet(pos, state.pos);
  };

  /**
   * Generate tokens for the given input range.
   *
   * @param  {Object} `state`
   * @api private
   */

  ParserInline.prototype.tokenize = function (state) {
    var rules = this.ruler.getRules('');
    var len = rules.length;
    var end = state.posMax;
    var ok, i;

    while (state.pos < end) {

      // Try all possible rules.
      // On success, the rule should:
      //
      // - update `state.pos`
      // - update `state.tokens`
      // - return true
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);

        if (ok) {
          break;
        }
      }

      if (ok) {
        if (state.pos >= end) { break; }
        continue;
      }

      state.pending += state.src[state.pos++];
    }

    if (state.pending) {
      state.pushPending();
    }
  };

  /**
   * Parse the given input string.
   *
   * @param  {String} `str`
   * @param  {Object} `options`
   * @param  {Object} `env`
   * @param  {Array} `outTokens`
   * @api private
   */

  ParserInline.prototype.parse = function (str, options, env, outTokens) {
    var state = new state_inline(str, this, options, env, outTokens);
    this.tokenize(state);
  };

  /**
   * Validate the given `url` by checking for bad protocols.
   *
   * @param  {String} `url`
   * @return {Boolean}
   */

  function validateLink(url) {
    var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file', 'data' ];
    var str = url.trim().toLowerCase();
    // Care about digital entities "javascript&#x3A;alert(1)"
    str = utils.replaceEntities(str);
    if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
      return false;
    }
    return true;
  }

  /**
   * Expose `ParserInline`
   */

  var parser_inline = ParserInline;

  // Remarkable default options


  var _default = {
    options: {
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />)
      breaks:       false,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // autoconvert URL-like texts to links
      linkTarget:   '',           // set target to open link in

      // Enable some language-neutral replacements + quotes beautification
      typographer:  false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: '“”‘’',

      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,

      maxNesting:   20            // Internal protection, recursion limit
    },

    components: {

      core: {
        rules: [
          'block',
          'inline',
          'references',
          'replacements',
          'linkify',
          'smartquotes',
          'references',
          'abbr2',
          'footnote_tail'
        ]
      },

      block: {
        rules: [
          'blockquote',
          'code',
          'fences',
          'footnote',
          'heading',
          'hr',
          'htmlblock',
          'lheading',
          'list',
          'paragraph',
          'table'
        ]
      },

      inline: {
        rules: [
          'autolink',
          'backticks',
          'del',
          'emphasis',
          'entity',
          'escape',
          'footnote_ref',
          'htmltag',
          'links',
          'newline',
          'text'
        ]
      }
    }
  };

  // Remarkable default options


  var full = {
    options: {
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />)
      breaks:       false,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // autoconvert URL-like texts to links
      linkTarget:   '',           // set target to open link in

      // Enable some language-neutral replacements + quotes beautification
      typographer:  false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes:       '“”‘’',

      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight:     null,

      maxNesting:    20            // Internal protection, recursion limit
    },

    components: {
      // Don't restrict core/block/inline rules
      core: {},
      block: {},
      inline: {}
    }
  };

  // Commonmark default options


  var commonmark = {
    options: {
      html:         true,         // Enable HTML tags in source
      xhtmlOut:     true,         // Use '/' to close single tags (<br />)
      breaks:       false,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // autoconvert URL-like texts to links
      linkTarget:   '',           // set target to open link in

      // Enable some language-neutral replacements + quotes beautification
      typographer:  false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: '“”‘’',

      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,

      maxNesting:   20            // Internal protection, recursion limit
    },

    components: {

      core: {
        rules: [
          'block',
          'inline',
          'references',
          'abbr2'
        ]
      },

      block: {
        rules: [
          'blockquote',
          'code',
          'fences',
          'heading',
          'hr',
          'htmlblock',
          'lheading',
          'list',
          'paragraph'
        ]
      },

      inline: {
        rules: [
          'autolink',
          'backticks',
          'emphasis',
          'entity',
          'escape',
          'htmltag',
          'links',
          'newline',
          'text'
        ]
      }
    }
  };

  /**
   * Local dependencies
   */

  var assign$1       = utils.assign;






  /**
   * Preset configs
   */

  var config = {
    'default':    _default,
    'full':       full,
    'commonmark': commonmark
  };

  /**
   * The `StateCore` class manages state.
   *
   * @param {Object} `instance` Remarkable instance
   * @param {String} `str` Markdown string
   * @param {Object} `env`
   */

  function StateCore(instance, str, env) {
    this.src = str;
    this.env = env;
    this.options = instance.options;
    this.tokens = [];
    this.inlineMode = false;

    this.inline = instance.inline;
    this.block = instance.block;
    this.renderer = instance.renderer;
    this.typographer = instance.typographer;
  }

  /**
   * The main `Remarkable` class. Create an instance of
   * `Remarkable` with a `preset` and/or `options`.
   *
   * @param {String} `preset` If no preset is given, `default` is used.
   * @param {Object} `options`
   */

  function Remarkable(preset, options) {
    if (typeof preset !== 'string') {
      options = preset;
      preset = 'default';
    }

    this.inline   = new parser_inline();
    this.block    = new parser_block();
    this.core     = new parser_core();
    this.renderer = new renderer();
    this.ruler    = new ruler();

    this.options  = {};
    this.configure(config[preset]);
    this.set(options || {});
  }

  /**
   * Set options as an alternative to passing them
   * to the constructor.
   *
   * ```js
   * md.set({typographer: true});
   * ```
   * @param {Object} `options`
   * @api public
   */

  Remarkable.prototype.set = function (options) {
    assign$1(this.options, options);
  };

  /**
   * Batch loader for components rules states, and options
   *
   * @param  {Object} `presets`
   */

  Remarkable.prototype.configure = function (presets) {
    var self = this;

    if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }
    if (presets.options) { self.set(presets.options); }
    if (presets.components) {
      Object.keys(presets.components).forEach(function (name) {
        if (presets.components[name].rules) {
          self[name].ruler.enable(presets.components[name].rules, true);
        }
      });
    }
  };

  /**
   * Use a plugin.
   *
   * ```js
   * var md = new Remarkable();
   *
   * md.use(plugin1)
   *   .use(plugin2, opts)
   *   .use(plugin3);
   * ```
   *
   * @param  {Function} `plugin`
   * @param  {Object} `options`
   * @return {Object} `Remarkable` for chaining
   */

  Remarkable.prototype.use = function (plugin, options) {
    plugin(this, options);
    return this;
  };


  /**
   * Parse the input `string` and return a tokens array.
   * Modifies `env` with definitions data.
   *
   * @param  {String} `string`
   * @param  {Object} `env`
   * @return {Array} Array of tokens
   */

  Remarkable.prototype.parse = function (str, env) {
    var state = new StateCore(this, str, env);
    this.core.process(state);
    return state.tokens;
  };

  /**
   * The main `.render()` method that does all the magic :)
   *
   * @param  {String} `string`
   * @param  {Object} `env`
   * @return {String} Rendered HTML.
   */

  Remarkable.prototype.render = function (str, env) {
    env = env || {};
    return this.renderer.render(this.parse(str, env), this.options, env);
  };

  /**
   * Parse the given content `string` as a single string.
   *
   * @param  {String} `string`
   * @param  {Object} `env`
   * @return {Array} Array of tokens
   */

  Remarkable.prototype.parseInline = function (str, env) {
    var state = new StateCore(this, str, env);
    state.inlineMode = true;
    this.core.process(state);
    return state.tokens;
  };

  /**
   * Render a single content `string`, without wrapping it
   * to paragraphs
   *
   * @param  {String} `str`
   * @param  {Object} `env`
   * @return {String}
   */

  Remarkable.prototype.renderInline = function (str, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(str, env), this.options, env);
  };

  /**
   * Expose `Remarkable`
   */

  var lib = Remarkable;

  /**
   * Expose `utils`, Useful helper functions for custom
   * rendering.
   */

  var utils$1 = utils;
  lib.utils = utils$1;

  var _remarkable_1_7_1_remarkable = lib;

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  define('markdown-editor', function (_WeElement) {
    _inherits$3(_class2, _WeElement);

    function _class2() {
      var _temp, _this, _ret;

      _classCallCheck$3(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.value = 'Hello, **world**!', _this.handleInput = function (e) {
        _this.value = e.target.value;
        _this.update();
      }, _temp), _possibleConstructorReturn$3(_this, _ret);
    }

    _class2.prototype.getRawMarkup = function getRawMarkup() {
      var md = new _remarkable_1_7_1_remarkable();
      return { __html: md.render(this.value) };
    };

    _class2.prototype.render = function render$$1() {
      return Omi.h(
        'div',
        { className: 'MarkdownEditor' },
        Omi.h(
          'h3',
          null,
          'Input'
        ),
        Omi.h(
          'div',
          { htmlFor: 'markdown-content' },
          'Enter some markdown'
        ),
        Omi.h('textarea', { style: {
            width: 300,
            height: 140
          },
          id: 'markdown-content',
          onInput: this.handleInput,
          defaultValue: this.value
        }),
        Omi.h(
          'h3',
          null,
          'Output'
        ),
        Omi.h('div', {
          className: 'content',
          dangerouslySetInnerHTML: this.getRawMarkup()
        })
      );
    };

    return _class2;
  }(WeElement));

  render(Omi.h('markdown-editor', null), 'body');

}());
//# sourceMappingURL=b.js.map
