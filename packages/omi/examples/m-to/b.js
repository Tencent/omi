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

  var ATTR_KEY = '__omiattr_';

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
        if (dom.receiveProps) {
          try {
            old[name] = JSON.parse(JSON.stringify(attrs[name]));
          } catch (e) {
            console.warn('When using receiveProps, you cannot pass prop of cyclic dependencies down.');
          }
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
        if (dom.receiveProps(dom.props, dom.data, oldClone) !== false) {
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

      this._host = diff(null, rendered, {}, false, null, false);
      this.rendered();

      if (this.props.css) {
        this._customStyleElement = cssToDom(this.props.css);
        this._customStyleContent = this.props.css;
        shadowRoot.appendChild(this._customStyleElement);
      }

      if (isArray(this._host)) {
        this._host.forEach(function (item) {
          shadowRoot.appendChild(item);
        });
      } else {
        shadowRoot.appendChild(this._host);
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

    WeElement.prototype.update = function update() {
      this._willUpdate = true;
      this.beforeUpdate();
      this.beforeRender();
      //fix null !== undefined
      if (this._customStyleContent != this.props.css) {
        this._customStyleContent = this.props.css;
        this._customStyleElement.textContent = this._customStyleContent;
      }
      this.attrsToProps();

      var rendered = this.render(this.props, this.data, this.store);
      this.__hasChildren = this.__hasChildren || Object.prototype.toString.call(rendered) === '[object Array]' && rendered.length > 0;

      this._host = diff(this._host, rendered, null, null, this.shadowRoot);
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

    WeElement.prototype.attrsToProps = function attrsToProps() {
      var ele = this;
      if (ele.normalizedNodeName) return;
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
  options.root.Omi.version = '6.6.2';

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var to = createCommonjsModule(function (module, exports) {
  /*!
   *  to2to v1.0.2 
   *  By https://github.com/dntzhang 
   *  Github: https://github.com/dntzhang/cax
   *  MIT Licensed.
   */
  (function webpackUniversalModuleDefinition(root, factory) {
  	module.exports = factory();
  })(typeof self !== 'undefined' ? self : commonjsGlobal, function() {
  return /******/ (function(modules) { // webpackBootstrap
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
  /******/ 	return __webpack_require__(__webpack_require__.s = 2);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {


  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _tween = __webpack_require__(1);

  var _tween2 = _interopRequireDefault(_tween);

  var _rafInterval = __webpack_require__(4);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var To = function () {
    function To(element) {
      _classCallCheck(this, To);

      this.element = element;
      this.cmds = [];
      this.index = 0;
      this.tweens = [];
      this._pause = false;
      this.loop = (0, _rafInterval.setRafInterval)(function () {
        _tween2.default.update();
      }, 15);
      this.cycleCount = 0;
    }

    _createClass(To, [{
      key: 'to',
      value: function to(target, duration, easing) {
        this.cmds.push(['to']);
        if (arguments.length !== 0) {
          for (var key in target) {
            this.set(key, target[key], duration, easing);
          }
        }
        return this;
      }
    }, {
      key: 'set',
      value: function set(prop, value, duration, easing) {
        this.cmds[this.cmds.length - 1].push([prop, [value, duration, easing]]);
        return this;
      }
    }, {
      key: 'x',
      value: function x() {
        this.cmds[this.cmds.length - 1].push(['x', arguments]);
        return this;
      }
    }, {
      key: 'y',
      value: function y() {
        this.cmds[this.cmds.length - 1].push(['y', arguments]);
        return this;
      }
    }, {
      key: 'z',
      value: function z() {
        this.cmds[this.cmds.length - 1].push(['z', arguments]);
        return this;
      }
    }, {
      key: 'rotation',
      value: function rotation() {
        this.cmds[this.cmds.length - 1].push(['rotation', arguments]);
        return this;
      }
    }, {
      key: 'scaleX',
      value: function scaleX() {
        this.cmds[this.cmds.length - 1].push(['scaleX', arguments]);
        return this;
      }
    }, {
      key: 'scaleY',
      value: function scaleY() {
        this.cmds[this.cmds.length - 1].push(['scaleY', arguments]);
        return this;
      }
    }, {
      key: 'skewX',
      value: function skewX() {
        this.cmds[this.cmds.length - 1].push(['skewX', arguments]);
        return this;
      }
    }, {
      key: 'skewY',
      value: function skewY() {
        this.cmds[this.cmds.length - 1].push(['skewY', arguments]);
        return this;
      }
    }, {
      key: 'originX',
      value: function originX() {
        this.cmds[this.cmds.length - 1].push(['originX', arguments]);
        return this;
      }
    }, {
      key: 'originY',
      value: function originY() {
        this.cmds[this.cmds.length - 1].push(['originY', arguments]);
        return this;
      }
    }, {
      key: 'alpha',
      value: function alpha() {
        this.cmds[this.cmds.length - 1].push(['alpha', arguments]);
        return this;
      }
    }, {
      key: 'begin',
      value: function begin(fn) {
        this.cmds[this.cmds.length - 1].begin = fn;
        return this;
      }
    }, {
      key: 'progress',
      value: function progress(fn) {
        this.cmds[this.cmds.length - 1].progress = fn;
        return this;
      }
    }, {
      key: 'end',
      value: function end(fn) {
        this.cmds[this.cmds.length - 1].end = fn;
        return this;
      }
    }, {
      key: 'wait',
      value: function wait() {
        this.cmds.push(['wait', arguments]);
        return this;
      }
    }, {
      key: 'then',
      value: function then() {
        this.cmds.push(['then', arguments]);
        return this;
      }
    }, {
      key: 'cycle',
      value: function cycle() {
        this.cmds.push(['cycle', arguments]);
        return this;
      }
    }, {
      key: 'start',
      value: function start() {
        if (this._pause) return;
        var len = this.cmds.length;
        if (this.index < len) {
          this.exec(this.cmds[this.index], this.index === len - 1);
        } else {
          (0, _rafInterval.clearRafInterval)(this.loop);
        }
        return this;
      }
    }, {
      key: 'pause',
      value: function pause() {
        this._pause = true;
        for (var i = 0, len = this.tweens.length; i < len; i++) {
          this.tweens[i].pause();
        }
        if (this.currentTask === 'wait') {
          this.timeout -= new Date() - this.currentTaskBegin;
          this.currentTaskBegin = new Date();
        }
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if (this._pause) {
          this.play();
        } else {
          this.pause();
        }
      }
    }, {
      key: 'play',
      value: function play() {
        this._pause = false;
        for (var i = 0, len = this.tweens.length; i < len; i++) {
          this.tweens[i].play();
        }
        var self = this;
        if (this.currentTask === 'wait') {
          setTimeout(function () {
            if (self._pause) return;
            self.index++;
            self.start();
            if (self.index === self.cmds.length && self.complete) self.complete();
          }, this.timeout);
        }
      }
    }, {
      key: 'stop',
      value: function stop() {
        for (var i = 0, len = this.tweens.length; i < len; i++) {
          this.tweens[i].stop();
        }
        this.cmds.length = 0;
      }
    }, {
      key: 'animate',
      value: function animate(name) {
        this.cmds = this.cmds.concat(To.animationMap[name] || []);
        return this;
      }
    }, {
      key: 'exec',
      value: function exec(cmd, last) {
        var len = cmd.length,
            self = this;
        this.currentTask = cmd[0];
        switch (this.currentTask) {
          case 'to':
            self.stepCompleteCount = 0;
            for (var i = 1; i < len; i++) {
              var task = cmd[i];
              var ease = task[1][2];
              var target = {};
              var prop = task[0];
              target[prop] = task[1][0];

              var t = new _tween2.default.Tween(this.element).to(target, task[1][1]).onStart(function () {
                if (cmd.begin) cmd.begin.call(self.element, self.element);
              }).onUpdate(function () {
                if (cmd.progress) cmd.progress.call(self.element, self.element);
                // self.element[prop] = this[prop];
              }).easing(ease || _tween2.default.Easing.Linear.None).onComplete(function () {
                self.stepCompleteCount++;
                if (self.stepCompleteCount === len - 1) {
                  if (cmd.end) cmd.end.call(self.element, self.element);
                  if (last && self.complete) self.complete();
                  self.index++;
                  self.start();
                }
              }).start();
              this.tweens.push(t);
            }
            break;
          case 'wait':
            this.currentTaskBegin = new Date();
            this.timeout = cmd[1][0];
            setTimeout(function () {
              if (self._pause) return;
              self.index++;
              self.start();
              if (cmd.end) cmd.end.call(self.element, self.element);
              if (last && self.complete) self.complete();
            }, cmd[1][0]);
            break;
          case 'then':
            var arg = cmd[1][0];
            arg.index = 0;
            arg.complete = function () {
              self.index++;
              self.start();
              if (last && self.complete) self.complete();
            };
            arg.start();
            break;
          case 'cycle':
            var count = cmd[1][1];
            if (count === undefined) {
              self.index = cmd[1][0] || 0;
              self.start();
            } else {
              if (count && self.cycleCount === count) {
                self.index++;
                self.start();
                if (last && self.complete) self.complete();
              } else {
                self.cycleCount++;
                self.index = cmd[1][0];
                self.start();
              }
            }
            break;
        }
      }
    }]);

    return To;
  }();

  To.get = function (element) {
    var to = new To(element);
    return to;
  };

  To.animationMap = {};
  To.extend = function (animationName, cmds) {
    To.animationMap[animationName] = cmds;
  };

  exports.default = To;

  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  /* WEBPACK VAR INJECTION */(function(process) {

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */

  var _Group = function _Group() {
    this._tweens = {};
    this._tweensAddedDuringUpdate = {};
  };

  _Group.prototype = {
    getAll: function getAll() {
      return Object.keys(this._tweens).map(function (tweenId) {
        return this._tweens[tweenId];
      }.bind(this));
    },

    removeAll: function removeAll() {
      this._tweens = {};
    },

    add: function add(tween) {
      this._tweens[tween.getId()] = tween;
      this._tweensAddedDuringUpdate[tween.getId()] = tween;
    },

    remove: function remove(tween) {
      delete this._tweens[tween.getId()];
      delete this._tweensAddedDuringUpdate[tween.getId()];
    },

    update: function update(time, preserve) {
      var tweenIds = Object.keys(this._tweens);

      if (tweenIds.length === 0) {
        return false;
      }

      time = time !== undefined ? time : TWEEN.now();

      // Tweens are updated in "batches". If you add a new tween during an update, then the
      // new tween will be updated in the next batch.
      // If you remove a tween during an update, it may or may not be updated. However,
      // if the removed tween was added during the current batch, then it will not be updated.
      while (tweenIds.length > 0) {
        this._tweensAddedDuringUpdate = {};

        for (var i = 0; i < tweenIds.length; i++) {
          var tween = this._tweens[tweenIds[i]];

          if (tween && tween.update(time) === false) {
            tween._isPlaying = false;

            if (!preserve) {
              delete this._tweens[tweenIds[i]];
            }
          }
        }

        tweenIds = Object.keys(this._tweensAddedDuringUpdate);
      }

      return true;
    }
  };

  var TWEEN = new _Group();

  TWEEN.Group = _Group;
  TWEEN._nextId = 0;
  TWEEN.nextId = function () {
    return TWEEN._nextId++;
  };

  // Include a performance.now polyfill.
  // In node.js, use process.hrtime.
  if (typeof window === 'undefined' && typeof process !== 'undefined') {
    if (typeof wx !== 'undefined') {
      TWEEN.now = Date.now;
    } else {
      TWEEN.now = function () {
        var time = process.hrtime();

        // Convert [seconds, nanoseconds] to milliseconds.
        return time[0] * 1000 + time[1] / 1000000;
      };
    }
  } else if (typeof window !== 'undefined' &&
  // In a browser, use window.performance.now if it is available.
  window.performance !== undefined && window.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    TWEEN.now = window.performance.now.bind(window.performance);
  } else if (Date.now !== undefined) {
    // Use Date.now if it is available.
    TWEEN.now = Date.now;
  } else {
    // Otherwise, use 'new Date().getTime()'.
    TWEEN.now = function () {
      return new Date().getTime();
    };
  }

  TWEEN.Tween = function (object, group) {
    this._object = object;
    this._valuesStart = {};
    this._valuesEnd = {};
    this._valuesStartRepeat = {};
    this._duration = 1000;
    this._repeat = 0;
    this._repeatDelayTime = undefined;
    this._yoyo = false;
    this._isPlaying = false;
    this._reversed = false;
    this._delayTime = 0;
    this._startTime = null;
    this._easingFunction = TWEEN.Easing.Linear.None;
    this._interpolationFunction = TWEEN.Interpolation.Linear;
    this._chainedTweens = [];
    this._onStartCallback = null;
    this._onStartCallbackFired = false;
    this._onUpdateCallback = null;
    this._onCompleteCallback = null;
    this._onStopCallback = null;
    this._group = group || TWEEN;
    this._id = TWEEN.nextId();

    this._paused = false;
    this._passTime = null;
  };

  TWEEN.Tween.prototype = {
    getId: function getId() {
      return this._id;
    },

    toggle: function toggle() {
      if (this._paused) {
        this.play();
      } else {
        this.pause();
      }
    },


    pause: function pause() {
      this._paused = true;
      var pauseTime = TWEEN.now();
      this._passTime = pauseTime - this._startTime;
    },

    play: function play() {
      this._paused = false;
      var nowTime = TWEEN.now();
      this._startTime = nowTime - this._passTime;
    },

    isPlaying: function isPlaying() {
      return this._isPlaying;
    },

    to: function to(properties, duration) {
      this._valuesEnd = properties;

      if (duration !== undefined) {
        this._duration = duration;
      }

      return this;
    },

    start: function start(time) {
      this._group.add(this);

      this._isPlaying = true;

      this._onStartCallbackFired = false;

      this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
      this._startTime += this._delayTime;

      for (var property in this._valuesEnd) {
        // Check if an Array was provided as property value
        if (this._valuesEnd[property] instanceof Array) {
          if (this._valuesEnd[property].length === 0) {
            continue;
          }

          // Create a local copy of the Array with the start value at the front
          this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
        }

        // If `to()` specifies a property that doesn't exist in the source object,
        // we should not set that property in the object
        if (this._object[property] === undefined) {
          continue;
        }

        // Save the starting value.
        this._valuesStart[property] = this._object[property];

        if (this._valuesStart[property] instanceof Array === false) {
          this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
        }

        this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
      }

      return this;
    },

    stop: function stop() {
      if (!this._isPlaying) {
        return this;
      }

      this._group.remove(this);
      this._isPlaying = false;

      if (this._onStopCallback !== null) {
        this._onStopCallback(this._object);
      }

      this.stopChainedTweens();
      return this;
    },

    end: function end() {
      this.update(this._startTime + this._duration);
      return this;
    },

    stopChainedTweens: function stopChainedTweens() {
      for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
        this._chainedTweens[i].stop();
      }
    },

    group: function group(group) {
      this._group = group;
      return this;
    },

    delay: function delay(amount) {
      this._delayTime = amount;
      return this;
    },

    repeat: function repeat(times) {
      this._repeat = times;
      return this;
    },

    repeatDelay: function repeatDelay(amount) {
      this._repeatDelayTime = amount;
      return this;
    },

    yoyo: function yoyo(yy) {
      this._yoyo = yy;
      return this;
    },

    easing: function easing(eas) {
      this._easingFunction = eas;
      return this;
    },

    interpolation: function interpolation(inter) {
      this._interpolationFunction = inter;
      return this;
    },

    chain: function chain() {
      this._chainedTweens = arguments;
      return this;
    },

    onStart: function onStart(callback) {
      this._onStartCallback = callback;
      return this;
    },

    onUpdate: function onUpdate(callback) {
      this._onUpdateCallback = callback;
      return this;
    },

    onComplete: function onComplete(callback) {
      this._onCompleteCallback = callback;
      return this;
    },

    onStop: function onStop(callback) {
      this._onStopCallback = callback;
      return this;
    },

    update: function update(time) {
      if (this._paused) return true;
      var property;
      var elapsed;
      var value;

      if (time < this._startTime) {
        return true;
      }

      if (this._onStartCallbackFired === false) {
        if (this._onStartCallback !== null) {
          this._onStartCallback(this._object);
        }

        this._onStartCallbackFired = true;
      }

      elapsed = (time - this._startTime) / this._duration;
      elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;

      value = this._easingFunction(elapsed);

      for (property in this._valuesEnd) {
        // Don't update properties that do not exist in the source object
        if (this._valuesStart[property] === undefined) {
          continue;
        }

        var start = this._valuesStart[property] || 0;
        var end = this._valuesEnd[property];

        if (end instanceof Array) {
          this._object[property] = this._interpolationFunction(end, value);
        } else {
          // Parses relative end values with start as base (e.g.: +10, -3)
          if (typeof end === 'string') {
            if (end.charAt(0) === '+' || end.charAt(0) === '-') {
              end = start + parseFloat(end);
            } else {
              end = parseFloat(end);
            }
          }

          // Protect against non numeric properties.
          if (typeof end === 'number') {
            this._object[property] = start + (end - start) * value;
          }
        }
      }

      if (this._onUpdateCallback !== null) {
        this._onUpdateCallback(this._object);
      }

      if (elapsed === 1) {
        if (this._repeat > 0) {
          if (isFinite(this._repeat)) {
            this._repeat--;
          }

          // Reassign starting values, restart by making startTime = now
          for (property in this._valuesStartRepeat) {
            if (typeof this._valuesEnd[property] === 'string') {
              this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
            }

            if (this._yoyo) {
              var tmp = this._valuesStartRepeat[property];

              this._valuesStartRepeat[property] = this._valuesEnd[property];
              this._valuesEnd[property] = tmp;
            }

            this._valuesStart[property] = this._valuesStartRepeat[property];
          }

          if (this._yoyo) {
            this._reversed = !this._reversed;
          }

          if (this._repeatDelayTime !== undefined) {
            this._startTime = time + this._repeatDelayTime;
          } else {
            this._startTime = time + this._delayTime;
          }

          return true;
        } else {
          if (this._onCompleteCallback !== null) {
            this._onCompleteCallback(this._object);
          }

          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            // Make the chained tweens start exactly at the time they should,
            // even if the `update()` method was called way past the duration of the tween
            this._chainedTweens[i].start(this._startTime + this._duration);
          }

          return false;
        }
      }

      return true;
    }
  };

  TWEEN.Easing = {

    Linear: {

      None: function None(k) {
        return k;
      }

    },

    Quadratic: {

      In: function In(k) {
        return k * k;
      },

      Out: function Out(k) {
        return k * (2 - k);
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k;
        }

        return -0.5 * (--k * (k - 2) - 1);
      }

    },

    Cubic: {

      In: function In(k) {
        return k * k * k;
      },

      Out: function Out(k) {
        return --k * k * k + 1;
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k + 2);
      }

    },

    Quartic: {

      In: function In(k) {
        return k * k * k * k;
      },

      Out: function Out(k) {
        return 1 - --k * k * k * k;
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k;
        }

        return -0.5 * ((k -= 2) * k * k * k - 2);
      }

    },

    Quintic: {

      In: function In(k) {
        return k * k * k * k * k;
      },

      Out: function Out(k) {
        return --k * k * k * k * k + 1;
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k * k * k + 2);
      }

    },

    Sinusoidal: {

      In: function In(k) {
        return 1 - Math.cos(k * Math.PI / 2);
      },

      Out: function Out(k) {
        return Math.sin(k * Math.PI / 2);
      },

      InOut: function InOut(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }

    },

    Exponential: {

      In: function In(k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
      },

      Out: function Out(k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
      },

      InOut: function InOut(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        if ((k *= 2) < 1) {
          return 0.5 * Math.pow(1024, k - 1);
        }

        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
      }

    },

    Circular: {

      In: function In(k) {
        return 1 - Math.sqrt(1 - k * k);
      },

      Out: function Out(k) {
        return Math.sqrt(1 - --k * k);
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }

        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
      }

    },

    Elastic: {

      In: function In(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      },

      Out: function Out(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
      },

      InOut: function InOut(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        k *= 2;

        if (k < 1) {
          return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        }

        return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
      }

    },

    Back: {

      In: function In(k) {
        var s = 1.70158;

        return k * k * ((s + 1) * k - s);
      },

      Out: function Out(k) {
        var s = 1.70158;

        return --k * k * ((s + 1) * k + s) + 1;
      },

      InOut: function InOut(k) {
        var s = 1.70158 * 1.525;

        if ((k *= 2) < 1) {
          return 0.5 * (k * k * ((s + 1) * k - s));
        }

        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
      }

    },

    Bounce: {

      In: function In(k) {
        return 1 - TWEEN.Easing.Bounce.Out(1 - k);
      },

      Out: function Out(k) {
        if (k < 1 / 2.75) {
          return 7.5625 * k * k;
        } else if (k < 2 / 2.75) {
          return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
        } else if (k < 2.5 / 2.75) {
          return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
        } else {
          return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
        }
      },

      InOut: function InOut(k) {
        if (k < 0.5) {
          return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
        }

        return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
      }

    }

  };

  TWEEN.Interpolation = {

    Linear: function Linear(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = TWEEN.Interpolation.Utils.Linear;

      if (k < 0) {
        return fn(v[0], v[1], f);
      }

      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }

      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },

    Bezier: function Bezier(v, k) {
      var b = 0;
      var n = v.length - 1;
      var pw = Math.pow;
      var bn = TWEEN.Interpolation.Utils.Bernstein;

      for (var i = 0; i <= n; i++) {
        b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
      }

      return b;
    },

    CatmullRom: function CatmullRom(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = TWEEN.Interpolation.Utils.CatmullRom;

      if (v[0] === v[m]) {
        if (k < 0) {
          i = Math.floor(f = m * (1 + k));
        }

        return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
      } else {
        if (k < 0) {
          return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
        }

        if (k > 1) {
          return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
        }

        return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
      }
    },

    Utils: {

      Linear: function Linear(p0, p1, t) {
        return (p1 - p0) * t + p0;
      },

      Bernstein: function Bernstein(n, i) {
        var fc = TWEEN.Interpolation.Utils.Factorial;

        return fc(n) / fc(i) / fc(n - i);
      },

      Factorial: function () {
        var a = [1];

        return function (n) {
          var s = 1;

          if (a[n]) {
            return a[n];
          }

          for (var i = n; i > 1; i--) {
            s *= i;
          }

          a[n] = s;
          return s;
        };
      }(),

      CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        var t2 = t * t;
        var t3 = t * t2;

        return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
      }

    }

  };

  // UMD (Universal Module Definition)
  (function (root) {
    if (typeof module !== 'undefined' && ( _typeof(exports)) === 'object') {
      // Node.js
      module.exports = TWEEN;
    } else if (root !== undefined) {
      // Global variable
      root.TWEEN = TWEEN;
    }
  })(undefined);
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)));

  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {


  var _to = __webpack_require__(0);

  var _to2 = _interopRequireDefault(_to);

  __webpack_require__(5);

  var _tween = __webpack_require__(1);

  var _tween2 = _interopRequireDefault(_tween);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _to2.default.easing = {
      linear: _tween2.default.Easing.Linear.None
  };

  ['Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce'].forEach(function (item) {
      var itemLower = item.toLowerCase();
      _to2.default.easing[itemLower + 'In'] = _tween2.default.Easing[item].In;
      _to2.default.easing[itemLower + 'Out'] = _tween2.default.Easing[item].Out;
      _to2.default.easing[itemLower + 'InOut'] = _tween2.default.Easing[item].InOut;
  });

  module.exports = _to2.default;

  /***/ }),
  /* 3 */
  /***/ (function(module, exports) {

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
  function defaultClearTimeout () {
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
  } ());
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
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
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
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
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
      while(len) {
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

  process.listeners = function (name) { return [] };

  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };

  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };


  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {


  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setRafInterval = setRafInterval;
  exports.clearRafInterval = clearRafInterval;
  /*!
   *  raf-interval v0.3.0 By dntzhang
   *  Github: https://github.com/dntzhang/raf-interval
   *  MIT Licensed.
   */

  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }

  var queue = [],
      id = -1,
      ticking = false,
      tickId = null,
      now = Date.now,
      lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'],
      x = 0,
      isWeapp = typeof wx !== 'undefined' && !wx.createCanvas,
      isWegame = typeof wx !== 'undefined' && wx.createCanvas,
      isBrowser = typeof window !== 'undefined';

  var raf = isBrowser ? window.requestAnimationFrame : null;
  var caf = isBrowser ? window.cancelAnimationFrame : null;

  function mockRaf(callback, element) {
    var currTime = now();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  }

  function mockCaf(id) {
    clearTimeout(id);
  }

  if (isBrowser) {
    window.setRafInterval = setRafInterval;
    window.clearRafInterval = clearRafInterval;

    for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!raf) {
      raf = mockRaf;
      caf = mockCaf;
      window.requestAnimationFrame = raf;
      window.cancelAnimationFrame = caf;
    }
  } else if (isWeapp) {
    raf = mockRaf;
    caf = mockCaf;
  } else if (isWegame) {
    raf = requestAnimationFrame;
    caf = cancelAnimationFrame;
  }

  function setRafInterval(fn, interval) {
    id++;
    queue.push({ id: id, fn: fn, interval: interval, lastTime: now() });
    if (!ticking) {
      var tick = function tick() {
        tickId = raf(tick);
        each(queue, function (item) {
          if (item.interval < 17 || now() - item.lastTime >= item.interval) {
            item.fn();
            item.lastTime = now();
          }
        });
      };
      ticking = true;
      tick();
    }
    return id;
  }

  function clearRafInterval(id) {
    var i = 0,
        len = queue.length;

    for (; i < len; i++) {
      if (id === queue[i].id) {
        queue.splice(i, 1);
        break;
      }
    }

    if (queue.length === 0) {
      caf(tickId);
      ticking = false;
    }
  }

  function each(arr, fn) {
    if (Array.prototype.forEach) {
      arr.forEach(fn);
    } else {
      var i = 0,
          len = arr.length;
      for (; i < len; i++) {
        fn(arr[i], i);
      }
    }
  }

  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {


  var _to = __webpack_require__(0);

  var _to2 = _interopRequireDefault(_to);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _to2.default.extend('rubber', [['to', ['scaleX', {
    '0': 1.25,
    '1': 300
  }], ['scaleY', {
    '0': 0.75,
    '1': 300
  }]], ['to', ['scaleX', {
    '0': 0.75,
    '1': 100
  }], ['scaleY', {
    '0': 1.25,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1.15,
    '1': 100
  }], ['scaleY', {
    '0': 0.85,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 0.95,
    '1': 150
  }], ['scaleY', {
    '0': 1.05,
    '1': 150
  }]], ['to', ['scaleX', {
    '0': 1.05,
    '1': 100
  }], ['scaleY', {
    '0': 0.95,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1,
    '1': 250
  }], ['scaleY', {
    '0': 1,
    '1': 250
  }]]]);

  _to2.default.extend('bounceIn', [['to', ['scaleX', {
    '0': 0,
    '1': 0
  }], ['scaleY', {
    '0': 0,
    '1': 0
  }]], ['to', ['scaleX', {
    '0': 1.35,
    '1': 200
  }], ['scaleY', {
    '0': 1.35,
    '1': 200
  }]], ['to', ['scaleX', {
    '0': 0.9,
    '1': 100
  }], ['scaleY', {
    '0': 0.9,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1.1,
    '1': 100
  }], ['scaleY', {
    '0': 1.1,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 0.95,
    '1': 100
  }], ['scaleY', {
    '0': 0.95,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1,
    '1': 100
  }], ['scaleY', {
    '0': 1,
    '1': 100
  }]]]);

  _to2.default.extend('flipInX', [['to', ['rotateX', {
    '0': -90,
    '1': 0
  }]], ['to', ['rotateX', {
    '0': 20,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': -20,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': 10,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': -5,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': 0,
    '1': 300
  }]]]);

  _to2.default.extend('zoomOut', [['to', ['scaleX', {
    '0': 0,
    '1': 400
  }], ['scaleY', {
    '0': 0,
    '1': 400
  }]]]);

  /***/ })
  /******/ ]);
  });
  });

  var To = unwrapExports(to);

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  define('m-to', function (_WeElement) {
    _inherits$3(_class2, _WeElement);

    function _class2() {
      var _temp, _this, _ret;

      _classCallCheck$3(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.to = null, _temp), _possibleConstructorReturn$3(_this, _ret);
    }

    _class2.prototype.receiveProps = function receiveProps(props, a, b) {
      var _this2 = this;

      if (!(JSON.stringify(props.from) === JSON.stringify(b.from) && JSON.stringify(props.to) === JSON.stringify(b.to))) {
        if (this.to) this.to.stop();
        this.to = To.get(props.from).to(props.to, props.duration).progress(function (obj) {
          Object.assign(props.out, obj);
          _this2.fire('progress');
        }).start();
      }
    };

    _class2.prototype.render = function render$$1(props) {
      return props.children;
    };

    return _class2;
  }(WeElement));

  define('my-timer', function (_WeElement2) {
    _inherits$3(_class4, _WeElement2);

    function _class4() {
      var _temp2, _this3, _ret2;

      _classCallCheck$3(this, _class4);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn$3(this, _WeElement2.call.apply(_WeElement2, [this].concat(args))), _this3), _this3.number = 2, _this3.from = _this3.number, _this3.to = _this3.number, _this3.out = {
        number: _this3.number
      }, _this3.onInput = function (e) {
        _this3.to = Number(e.target.value);
        _this3.from = _this3.out.number;
        _this3.number = _this3.to;
        _this3.update();
      }, _this3.onProgress = function () {
        _this3.update();
      }, _temp2), _possibleConstructorReturn$3(_this3, _ret2);
    }

    _class4.prototype.render = function render$$1() {
      return Omi.h(
        'div',
        null,
        Omi.h('input', { type: 'number', onInput: this.onInput, value: this.number, step: 2 }),
        Omi.h(
          'div',
          null,
          this.out.number.toFixed(0)
        ),
        Omi.h(
          'div',
          null,
          this.out.number.toFixed(0),
          '*',
          this.out.number.toFixed(0),
          '=',
          (this.out.number * this.out.number).toFixed(0)
        ),
        Omi.h('m-to', { from: { number: this.from }, onProgress: this.onProgress, to: { number: this.to }, out: this.out, duration: 1000 })
      );
    };

    return _class4;
  }(WeElement));

  render(Omi.h('my-timer', null), 'body');

}());
//# sourceMappingURL=b.js.map
