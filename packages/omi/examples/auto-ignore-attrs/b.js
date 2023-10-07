(function () {
  'use strict';

  function getGlobal() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
      return self || window || global || function () {
        return this;
      }();
    }
    return global;
  }

  /** Global options
   *  @public
   *  @namespace options {Object}
   */
  var options = {
    store: null,
    root: getGlobal(),
    mapping: {}
  };

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

  function camelCase(str) {
    return str.replace(/-(\w)/g, function ($, $1) {
      return $1.toUpperCase();
    });
  }

  function Fragment(props) {
    return props.children;
  }

  function extend(obj, props) {
    for (var i in props) {
      obj[i] = props[i];
    } return obj;
  }

  /** Invoke or update a ref, depending on whether it is a function or object ref.
   *  @param {object|function} [ref=null]
   *  @param {any} [value]
   */
  function applyRef(ref, value) {
    if (ref != null) {
      if (typeof ref == 'function') ref(value); else ref.current = value;
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

  function pathToArr(path) {
    if (typeof path !== 'string' || !path) return [];
    // return path.split(/\.|\[|\]/).filter(name => !!name)
    return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
  }

  var hyphenateRE = /\B([A-Z])/g;
  function hyphenate(str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  }

  function capitalize(name) {
    return name.replace(/\-(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    }).replace(/^\S/, function (s) {
      return s.toUpperCase();
    });
  }

  function getValByPath(path, current) {
    var arr = pathToArr(path);
    arr.forEach(function (prop) {
      current = current[prop];
    });
    return current;
  }

  function createStyleSheet(style) {
    var styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(style);
    return styleSheet;
  }

  var stack = [];

  function h(nodeName, attributes) {
    var children = [],
      lastSimple = void 0,
      child = void 0,
      simple = void 0,
      i = void 0;

    // jsx 嵌套的元素自动忽略  attrs
    if (attributes) {
      attributes.ignoreAttrs = true;
    } else {
      attributes = { ignoreAttrs: true };
    }
    for (i = arguments.length; i-- > 2;) {
      stack.push(arguments[i]);
    }
    if (attributes.children != null) {
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
          if (child == null) child = ''; else if (typeof child === 'number') child = String(child); else if (typeof child !== 'string') simple = false;
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

    if (nodeName === Fragment) {
      return children;
    }

    var p = {
      nodeName: nodeName,
      children: children,
      attributes: attributes,
      key: attributes.key

      // if a "vnode hook" is defined, pass every created VNode to it
    }; if (options.vnode !== undefined) options.vnode(p);

    return p;
  }

  // render modes

  var ATTR_KEY = 'prevProps';

  // DOM properties that should NOT have "px" added when numeric
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

  /**
   * Check if two nodes are equivalent.
   *
   * @param {Node} node      DOM Node to compare
   * @param {VNode} vnode      Virtual DOM node to compare
   * @param {boolean} [hydrating=false]  If true, ignores component constructors when comparing.
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
   * @param {Element} node  A DOM Element to inspect the name of.
   * @param {String} nodeName  Unnormalized name to compare against.
   */
  function isNamedNode(node, nodeName) {
    return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
  }

  var extension = {};

  function extend$1(name, handler) {
    extension['o-' + name] = handler;
  }

  function set(origin, path, value) {
    var arr = pathToArr(path);
    var current = origin;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (i === len - 1) {
        current[arr[i]] = value;
      } else {
        current = current[arr[i]];
      }
    }
  }

  function get(origin, path) {
    var arr = pathToArr(path);
    var current = origin;
    for (var i = 0, len = arr.length; i < len; i++) {
      current = current[arr[i]];
    }

    return current;
  }

  function eventProxy(e) {
    return this._listeners[e.type](e);
  }

  function bind(el, type, handler) {
    el._listeners = el._listeners || {};
    el._listeners[type] = handler;
    el.addEventListener(type, eventProxy);
  }

  function unbind(el, type) {
    el.removeEventListener(type, eventProxy);
  }

  /**
   * Create an element with the given nodeName.
   * @param {string} nodeName The DOM node to create
   * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
   *  namespace.
   * @returns {Element} The created DOM node
   */
  function createNode(nodeName, isSvg, options$$1) {
    /** @type {Element} */
    var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName, options$$1);
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
  function setAccessor(node, name, old, value, isSvg, component) {
    if (name === 'className') name = 'class';

    if (name[0] == 'o' && name[1] == '-') {
      if (extension[name]) {
        extension[name](node, value, component);
      }
    } else if (name === 'key' || name === 'ignoreAttrs') {
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
    } else if (name === 'unsafeHTML') {
      if (value) node.innerHTML = value.html || value || '';
    } else if (name === 'dangerouslySetInnerHTML') {
      if (value) node.innerHTML = value.__html || '';
    } else if (name[0] == 'o' && name[1] == 'n') {
      bindEvent(node, name, value, old);
    } else if (node.nodeName === 'INPUT' && name === 'value') {
      node[name] = value == null ? '' : value;
    } else if (name !== 'list' && name !== 'type' && name !== 'css' && !isSvg && name in node && value !== '') {
      //value !== '' fix for selected, disabled, checked with pure element
      // Attempt to set a DOM property to the given value.
      // IE & FF throw for certain property-value combinations.
      try {
        node[name] = value == null ? '' : value;
      } catch (e) { }
      if ((value == null || value === false) && name != 'spellcheck') node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
    } else {
      var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
      // spellcheck is treated differently than all other boolean values and
      // should not be removed when the value is `false`. See:
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
      if (value == null || value === false) {
        if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
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
  function eventProxy$1(e) {
    return this._listeners[e.type](options.event && options.event(e) || e);
  }

  function bindEvent(node, name, value, old) {
    var useCapture = name !== (name = name.replace(/Capture$/, ''));
    var nameLower = name.toLowerCase();
    name = (nameLower in node ? nameLower : name).slice(2);
    if (value) {
      if (!old) {
        node.addEventListener(name, eventProxy$1, useCapture);
      }
    } else {
      node.removeEventListener(name, eventProxy$1, useCapture);
    }
    (node._listeners || (node._listeners = {}))[name] = value;
  }

  /** Diff recursion count, used to track the end of the diff cycle. */
  var diffLevel = 0;

  /** Global flag indicating if the diff is currently within an SVG */
  var isSvgMode = false;

  /** Global flag indicating if the diff is performing hydration */
  var hydrating = false;

  /** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
   *  @param {Element} [dom=null]    A DOM node to mutate into the shape of the `vnode`
   *  @param {VNode} vnode      A VNode (with descendants forming a tree) representing the desired DOM structure
   *  @returns {Element} dom      The created/mutated element
   *  @private
   */
  function diff(dom, vnode, parent, component, updateSelf) {
    // first render return undefined
    if (!dom && !vnode) return;
    // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
    var ret = void 0;
    if (!diffLevel++) {
      // when first starting the diff, check if we're diffing an SVG or within an SVG
      isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

      // hydration is indicated by the existing element to be diffed not having a prop cache
      hydrating = dom != null && !(ATTR_KEY in dom);
    }
    if (vnode && vnode.nodeName === Fragment) {
      vnode = vnode.children;
    }
    if (isArray(vnode)) {
      if (parent) {
        // don't use css and props.css when using h.f
        // diff node list and vnode list
        innerDiffNode(parent, vnode, hydrating, component, updateSelf);
      } else {
        // connectedCallback 的时候 parent 为 null
        ret = [];
        vnode.forEach(function (item, index) {
          var ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
          // 返回数组的情况下，在 WeElement 中进行了 shadowRoot.appendChild
          // 所有不会出现 vnode index 大于 0 丢失的情况
          ret.push(ele);
        });
      }
    } else {
      if (isArray(dom)) {
        dom.forEach(function (one, index) {
          if (index === 0) {
            ret = idiff(one, vnode, component, updateSelf);
          } else {
            recollectNodeTree(one, false);
          }
        });
      } else {
        ret = idiff(dom, vnode, component, updateSelf);
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
  function idiff(dom, vnode, component, updateSelf) {
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
      if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || component)) {
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
        innerDiffNode(out, vchildren, hydrating || props.unsafeHTML != null || props.dangerouslySetInnerHTML != null, component, updateSelf);
      }
    }

    // Apply attributes/props from VNode to the DOM Element:
    diffAttributes(out, vnode.attributes, props, component, updateSelf);
    if (out.props) {
      out.props.children = vnode.children;
    }
    // restore previous SVG mode: (in case we're exiting an SVG namespace)
    isSvgMode = prevSvgMode;

    return out;
  }

  /** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
   *  @param {Element} dom      Element whose children should be compared & mutated
   *  @param {Array} vchildren    Array of VNodes to compare to `dom.childNodes`
   *  @param {Boolean} isHydrating  If `true`, consumes externally created elements similar to hydration
   */
  function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
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

        if (vchild) {
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
        }

        // morph the matched/found/created DOM child to match vchild (deep)
        child = idiff(child, vchild, component, updateSelf);

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
   *  @param {Node} node            DOM node to start unmount/removal from
   *  @param {Boolean} [unmountOnly=false]  If `true`, only triggers unmount lifecycle, skips removal
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
   *  - we use .lastChild here because it causes less reflow than .firstChild
   *  - it's also cheaper than accessing the .childNodes Live NodeList
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
   *  @param {Element} dom    Element with attributes to diff `attrs` against
   *  @param {Object} attrs    The desired end-state key-value attribute pairs
   *  @param {Object} old      Current/previous attributes (from previous VNode or element's prop cache)
   */
  function diffAttributes(dom, attrs, old, component, updateSelf) {
    var name = void 0;
    //let update = false
    var isWeElement = dom.update;
    var oldClone = void 0;
    if (dom.receiveProps) {
      oldClone = Object.assign({}, old);
    }
    // remove attributes no longer present on the vnode by setting them to undefined
    for (name in old) {
      if (!(attrs && attrs[name] != null) && old[name] != null) {
        setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, component);
        if (isWeElement) {
          delete dom.props[name];
          //update = true
        }
      }
    }

    // add new & update changed attributes
    for (name in attrs) {
      if (isWeElement && typeof attrs[name] === 'object' && name !== 'ref') {
        if (name === 'style') {
          setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, component);
        }
        var ccName = camelCase(name);
        dom.props[ccName] = old[ccName] = attrs[name];
        //update = true
      } else if (name !== 'children' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
        setAccessor(dom, name, old[name], attrs[name], isSvgMode, component);
        //fix lazy load props missing
        if (dom.nodeName.indexOf('-') !== -1) {
          dom.props = dom.props || {};
          var _ccName = camelCase(name);
          dom.props[_ccName] = old[_ccName] = attrs[name];
          //update = true
        } else {
          old[name] = attrs[name];
        }
      }
    }

    if (isWeElement && !updateSelf && dom.parentNode) {
      //__hasChildren is not accuracy when it was empty at first, so add dom.children.length > 0 condition
      //if (update || dom.__hasChildren || dom.children.length > 0 || (dom.store && !dom.store.data)) {
      if (dom.receiveProps(dom.props, oldClone) !== false) {
        dom.update();
      }
      //}
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */

  (function (self) {

    if (self.WeakMap) {
      return;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && (function () {
      try {
        // Avoid IE8's broken Object.defineProperty
        return Object.defineProperty({}, 'x', { value: 1 }).x === 1;
      } catch (e) { }
    })();

    var defineProperty = function (object, name, value) {
      if (hasDefine) {
        Object.defineProperty(object, name, {
          configurable: true,
          writable: true,
          value: value
        });
      } else {
        object[name] = value;
      }
    };

    self.WeakMap = (function () {

      // ECMA-262 23.3 WeakMap Objects
      function WeakMap() {
        if (this === void 0) {
          throw new TypeError("Constructor WeakMap requires 'new'");
        }

        defineProperty(this, '_id', genId('_WeakMap'));

        // ECMA-262 23.3.1.1 WeakMap([iterable])
        if (arguments.length > 0) {
          // Currently, WeakMap `iterable` argument is not supported
          throw new TypeError('WeakMap iterable is not supported');
        }
      }

      // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
      defineProperty(WeakMap.prototype, 'delete', function (key) {
        checkInstance(this, 'delete');

        if (!isObject(key)) {
          return false;
        }

        var entry = key[this._id];
        if (entry && entry[0] === key) {
          delete key[this._id];
          return true;
        }

        return false;
      });

      // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
      defineProperty(WeakMap.prototype, 'get', function (key) {
        checkInstance(this, 'get');

        if (!isObject(key)) {
          return void 0;
        }

        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return entry[1];
        }

        return void 0;
      });

      // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
      defineProperty(WeakMap.prototype, 'has', function (key) {
        checkInstance(this, 'has');

        if (!isObject(key)) {
          return false;
        }

        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return true;
        }

        return false;
      });

      // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
      defineProperty(WeakMap.prototype, 'set', function (key, value) {
        checkInstance(this, 'set');

        if (!isObject(key)) {
          throw new TypeError('Invalid value used as weak map key');
        }

        var entry = key[this._id];
        if (entry && entry[0] === key) {
          entry[1] = value;
          return this;
        }

        defineProperty(key, this._id, [key, value]);
        return this;
      });

      function checkInstance(x, methodName) {
        if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
          throw new TypeError(
            methodName + ' method called on incompatible receiver ' +
            typeof x
          );
        }
      }

      function genId(prefix) {
        return prefix + '_' + rand() + '.' + rand();
      }

      function rand() {
        return Math.random().toString().substring(2);
      }

      defineProperty(WeakMap, '_polyfill', true);
      return WeakMap;
    })();

    function isObject(x) {
      return Object(x) === x;
    }

  })(
    typeof globalThis !== 'undefined' ? globalThis :
      typeof self !== 'undefined' ? self :
        typeof window !== 'undefined' ? window :
          typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal
  );

  var _class, _temp;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var id = 0;

  var adoptedStyleSheetsMap = new WeakMap();
  var WeElement = (_temp = _class = function (_HTMLElement) {
    _inherits(WeElement, _HTMLElement);

    function WeElement() {
      _classCallCheck(this, WeElement);

      // fix lazy load props missing
      var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

      _this.props = Object.assign({}, _this.constructor.defaultProps, _this.props);
      _this.elementId = id++;
      _this.computed = {};
      _this.isInstalled = false;
      return _this;
    }

    WeElement.prototype.connectedCallback = function connectedCallback() {
      var _this2 = this;

      var p = this.parentNode;
      while (p && !this.store) {
        this.store = p.store;
        p = p.parentNode || p.host;
      }

      if (this.inject) {
        this.injection = {};
        p = this.parentNode;
        var provide = void 0;
        while (p && !provide) {
          provide = p.provide;
          p = p.parentNode || p.host;
        }
        if (provide) {
          this.inject.forEach(function (injectKey) {
            _this2.injection[injectKey] = provide[injectKey];
          });
        } else {
          throw 'The provide prop was not found on the parent node or the provide type is incorrect.';
        }
      }

      this.attrsToProps();

      this.beforeInstall();
      this.install();
      this.afterInstall();

      var shadowRoot = void 0;
      if (this.constructor.isLightDOM) {
        shadowRoot = this;
      } else {
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
      }

      if (!adoptedStyleSheetsMap.has(this.constructor)) {
        var css = this.constructor.css;
        if (css) {
          var styleSheets = [];
          if (typeof css === 'string') {
            styleSheets = [createStyleSheet(css)];
          } else if (isArray(css)) {
            styleSheets = css.map(function (styleSheet) {
              if (typeof styleSheet === 'string') {
                return createStyleSheet(styleSheet);
              } else if (styleSheet.default && typeof styleSheet.default === 'string') {
                return createStyleSheet(styleSheet.default);
              } else {
                return styleSheet;
              }
            });
          } else if (css.default && typeof css.default === 'string') {
            styleSheets = [createStyleSheet(css.default)];
          } else {
            styleSheets = [css];
          }
          shadowRoot.adoptedStyleSheets = styleSheets;
          adoptedStyleSheetsMap.set(this.constructor, styleSheets);
        }
      } else {
        shadowRoot.adoptedStyleSheets = adoptedStyleSheetsMap.get(this.constructor);
      }

      this.beforeRender();
      options.afterInstall && options.afterInstall(this);

      var rendered = this.render(this.props, this.store);

      this.rootNode = diff(null, rendered, null, this);
      this.rendered();

      if (this.css) {
        shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
      }

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
        this.rootNode && shadowRoot.appendChild(this.rootNode);
      }
      this.installed();
      this.isInstalled = true;
    };

    WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
      this.uninstall();
      this.isInstalled = false;
    };

    WeElement.prototype.update = function update(ignoreAttrs, updateSelf) {
      this._willUpdate = true;
      this.beforeUpdate();
      this.beforeRender();
      //fix null !== undefined
      if (this._customStyleContent != this.props.css) {
        this._customStyleContent = this.props.css;
        if (this._customStyleElement) {
          this._customStyleElement.textContent = this._customStyleContent;
        } else {
          // 当 prop css 开始没有值，后来有值
          this._customStyleElement = cssToDom(this.props.css);
          this.shadowRoot.appendChild(this._customStyleElement);
        }
      }
      this.attrsToProps(ignoreAttrs);

      var rendered = this.render(this.props, this.store);
      this.rendered();

      this.rootNode = diff(this.rootNode, rendered, this.constructor.isLightDOM ? this : this.shadowRoot, this, updateSelf);
      this._willUpdate = false;
      this.updated();
    };

    WeElement.prototype.forceUpdate = function forceUpdate() {
      this.update(true);
    };

    WeElement.prototype.updateProps = function updateProps(obj) {
      var _this3 = this;

      Object.keys(obj).forEach(function (key) {
        _this3.props[key] = obj[key];
        if (_this3.prevProps) {
          _this3.prevProps[key] = obj[key];
        }
      });
      this.forceUpdate();
    };

    WeElement.prototype.updateSelf = function updateSelf(ignoreAttrs) {
      this.update(ignoreAttrs, true);
    };

    WeElement.prototype.removeAttribute = function removeAttribute(key) {
      _HTMLElement.prototype.removeAttribute.call(this, key);
      //Avoid executing removeAttribute methods before connectedCallback
      this.isInstalled && this.update();
    };

    WeElement.prototype.setAttribute = function setAttribute(key, val) {
      if (val && typeof val === 'object') {
        _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val));
      } else {
        _HTMLElement.prototype.setAttribute.call(this, key, val);
      }
      //Avoid executing setAttribute methods before connectedCallback
      this.isInstalled && this.update();
    };

    WeElement.prototype.pureRemoveAttribute = function pureRemoveAttribute(key) {
      _HTMLElement.prototype.removeAttribute.call(this, key);
    };

    WeElement.prototype.pureSetAttribute = function pureSetAttribute(key, val) {
      _HTMLElement.prototype.setAttribute.call(this, key, val);
    };

    WeElement.prototype.attrsToProps = function attrsToProps(ignoreAttrs) {
      if (ignoreAttrs || this.store && this.store.ignoreAttrs || this.props.ignoreAttrs) return;
      var ele = this;
      ele.props['css'] = ele.getAttribute('css');
      var attrs = this.constructor.propTypes;
      if (!attrs) return;
      Object.keys(attrs).forEach(function (key) {
        var types = isArray(attrs[key]) ? attrs[key] : [attrs[key]];
        var val = ele.getAttribute(hyphenate(key));
        if (val !== null) {
          for (var i = 0; i < types.length; i++) {
            var type = types[i];
            var matched = false;
            switch (type) {
              case String:
                ele.props[key] = val;
                matched = true;
                break;
              case Number:
                ele.props[key] = Number(val);
                matched = true;
                break;
              case Boolean:
                if (val === 'false' || val === '0') {
                  ele.props[key] = false;
                } else {
                  ele.props[key] = true;
                }
                matched = true;
                break;
              case Array:
              case Object:
                if (val[0] === ':') {
                  ele.props[key] = getValByPath(val.substr(1), Omi.$);
                } else {
                  try {
                    ele.props[key] = JSON.parse(val);
                  } catch (e) {
                    console.warn('The ' + key + ' object prop does not comply with the JSON specification, the incorrect string is [' + val + '].');
                  }
                }
                matched = true;
                break;
            }
            if (matched) break;
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
      var handler = this.props['on' + capitalize(name)];
      if (handler) {
        handler(new CustomEvent(name, {
          detail: data
        }));
      } else {
        this.dispatchEvent(new CustomEvent(name, {
          detail: data
        }));
      }
    };

    WeElement.prototype.beforeInstall = function beforeInstall() { };

    WeElement.prototype.install = function install() { };

    WeElement.prototype.afterInstall = function afterInstall() { };

    WeElement.prototype.installed = function installed() { };

    WeElement.prototype.uninstall = function uninstall() { };

    WeElement.prototype.beforeUpdate = function beforeUpdate() { };

    WeElement.prototype.updated = function updated() { };

    WeElement.prototype.beforeRender = function beforeRender() { };

    WeElement.prototype.rendered = function rendered() { };

    WeElement.prototype.receiveProps = function receiveProps() { };

    return WeElement;
  }(HTMLElement), _class.is = 'WeElement', _temp);

  function render(vnode, parent, store) {
    parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
    if (store) {
      parent.store = store;
    }
    return diff(null, vnode, parent, false);
  }

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var storeHelpers = ['use', 'useSelf'];

  function define(name, ctor, config) {
    if (customElements.get(name)) {
      return;
    }
    if (options.mapping[name]) {
      return;
    }
    if (ctor.is === 'WeElement') {
      customElements.define(name, ctor);
      options.mapping[name] = ctor;
    } else {
      var _class, _temp2;

      if (typeof config === 'string') {
        config = { css: config };
      } else {
        config = config || {};
      }

      var Ele = (_temp2 = _class = function (_WeElement) {
        _inherits$1(Ele, _WeElement);

        function Ele() {
          var _temp, _this, _ret;

          _classCallCheck$1(this, Ele);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.compute = config.compute, _temp), _possibleConstructorReturn$1(_this, _ret);
        }

        Ele.prototype.render = function render() {
          return ctor.call(this, this);
        };

        return Ele;
      }(WeElement), _class.css = config.css, _class.propTypes = config.propTypes, _class.defaultProps = config.defaultProps, _class.isLightDOM = config.isLightDOM, _temp2);

      var _loop = function _loop(key) {
        if (typeof config[key] === 'function') {
          Ele.prototype[key] = function () {
            return config[key].apply(this, arguments);
          };
        }
      };

      for (var key in config) {
        _loop(key);
      }

      storeHelpers.forEach(function (func) {
        if (config[func] && config[func] !== 'function') {
          Ele.prototype[func] = function () {
            return config[func];
          };
        }
      });

      customElements.define(name, Ele);
      options.mapping[name] = Ele;
    }
  }

  function tag(name) {
    return function (target) {
      define(name, target);
    };
  }

  /**
   * Clones the given VNode, optionally adding attributes/props and replacing its children.
   * @param {VNode} vnode    The virtual DOM element to clone
   * @param {Object} props  Attributes/props to add when cloning
   * @param {VNode} rest    Any additional arguments will be used as replacement children.
   */
  function cloneElement(vnode, props) {
    return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
  }

  function getHost(ele) {
    var root = ele.getRootNode();
    return root && root.host;
  }

  function rpx(css) {
    return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
      return window.innerWidth * Number(b) / 750 + 'px';
    });
  }

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

  (function () {

    if (typeof document === 'undefined' || 'adoptedStyleSheets' in document) { return; }

    var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
    var bootstrapper = document.implementation.createHTMLDocument('boot');
    var closedShadowRootRegistry = new WeakMap();
    var _DOMException = typeof DOMException === 'object' ? Error : DOMException;

    var defineProperty = Object.defineProperty;
    var forEach = Array.prototype.forEach;
    var importPattern = /@import.+?;?$/gm;
    function rejectImports(contents) {
      var _contents = contents.replace(importPattern, '');
      if (_contents !== contents) {
        console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
      }
      return _contents.trim();
    }
    function clearRules(sheet) {
      for (var i = 0; i < sheet.cssRules.length; i++) {
        sheet.deleteRule(0);
      }
    }
    function insertAllRules(from, to) {
      forEach.call(from.cssRules, function (rule, i) {
        to.insertRule(rule.cssText, i);
      });
    }
    function isElementConnected(element) {
      return 'isConnected' in element
        ? element.isConnected
        : document.contains(element);
    }
    function unique(arr) {
      return arr.filter(function (value, index) { return arr.indexOf(value) === index; });
    }
    function diff(arr1, arr2) {
      return arr1.filter(function (value) { return arr2.indexOf(value) === -1; });
    }
    function removeNode(node) {
      node.parentNode.removeChild(node);
    }
    function getShadowRoot(element) {
      return element.shadowRoot || closedShadowRootRegistry.get(element);
    }

    var cssStyleSheetMethods = [
      'addImport',
      'addPageRule',
      'addRule',
      'deleteRule',
      'insertRule',
      'removeImport',
      'removeRule',
    ];
    var NonConstructedStyleSheet = CSSStyleSheet;
    var nonConstructedProto = NonConstructedStyleSheet.prototype;
    nonConstructedProto.replace = function () {
      return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
    };
    nonConstructedProto.replaceSync = function () {
      throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
    };
    function isCSSStyleSheetInstance(instance) {
      return typeof instance === 'object'
        ? proto$2.isPrototypeOf(instance) ||
        nonConstructedProto.isPrototypeOf(instance)
        : false;
    }
    function isNonConstructedStyleSheetInstance(instance) {
      return typeof instance === 'object'
        ? nonConstructedProto.isPrototypeOf(instance)
        : false;
    }
    var $basicStyleSheet = new WeakMap();
    var $locations = new WeakMap();
    var $adoptersByLocation = new WeakMap();
    function addAdopterLocation(sheet, location) {
      var adopter = document.createElement('style');
      $adoptersByLocation.get(sheet).set(location, adopter);
      $locations.get(sheet).push(location);
      return adopter;
    }
    function getAdopterByLocation(sheet, location) {
      return $adoptersByLocation.get(sheet).get(location);
    }
    function removeAdopterLocation(sheet, location) {
      $adoptersByLocation.get(sheet).delete(location);
      $locations.set(sheet, $locations.get(sheet).filter(function (_location) { return _location !== location; }));
    }
    function restyleAdopter(sheet, adopter) {
      requestAnimationFrame(function () {
        clearRules(adopter.sheet);
        insertAllRules($basicStyleSheet.get(sheet), adopter.sheet);
      });
    }
    function checkInvocationCorrectness(self) {
      if (!$basicStyleSheet.has(self)) {
        throw new TypeError('Illegal invocation');
      }
    }
    function ConstructedStyleSheet() {
      var self = this;
      var style = document.createElement('style');
      bootstrapper.body.appendChild(style);
      $basicStyleSheet.set(self, style.sheet);
      $locations.set(self, []);
      $adoptersByLocation.set(self, new WeakMap());
    }
    var proto$2 = ConstructedStyleSheet.prototype;
    proto$2.replace = function replace(contents) {
      try {
        this.replaceSync(contents);
        return Promise.resolve(this);
      }
      catch (e) {
        return Promise.reject(e);
      }
    };
    proto$2.replaceSync = function replaceSync(contents) {
      checkInvocationCorrectness(this);
      if (typeof contents === 'string') {
        var self_1 = this;
        var style = $basicStyleSheet.get(self_1).ownerNode;
        style.textContent = rejectImports(contents);
        $basicStyleSheet.set(self_1, style.sheet);
        $locations.get(self_1).forEach(function (location) {
          if (location.isConnected()) {
            restyleAdopter(self_1, getAdopterByLocation(self_1, location));
          }
        });
      }
    };
    defineProperty(proto$2, 'cssRules', {
      configurable: true,
      enumerable: true,
      get: function cssRules() {
        checkInvocationCorrectness(this);
        return $basicStyleSheet.get(this).cssRules;
      },
    });
    cssStyleSheetMethods.forEach(function (method) {
      proto$2[method] = function () {
        var self = this;
        checkInvocationCorrectness(self);
        var args = arguments;
        var basic = $basicStyleSheet.get(self);
        var locations = $locations.get(self);
        var result = basic[method].apply(basic, args);
        locations.forEach(function (location) {
          if (location.isConnected()) {
            var sheet = getAdopterByLocation(self, location).sheet;
            sheet[method].apply(sheet, args);
          }
        });
        return result;
      };
    });
    defineProperty(ConstructedStyleSheet, Symbol.hasInstance, {
      configurable: true,
      value: isCSSStyleSheetInstance,
    });

    var defaultObserverOptions = {
      childList: true,
      subtree: true,
    };
    var locations = new WeakMap();
    function getAssociatedLocation(element) {
      var location = locations.get(element);
      if (!location) {
        location = new Location(element);
        locations.set(element, location);
      }
      return location;
    }
    function attachAdoptedStyleSheetProperty(constructor) {
      defineProperty(constructor.prototype, 'adoptedStyleSheets', {
        configurable: true,
        enumerable: true,
        get: function () {
          return getAssociatedLocation(this).sheets;
        },
        set: function (sheets) {
          getAssociatedLocation(this).update(sheets);
        },
      });
    }
    function traverseWebComponents(node, callback) {
      var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function (foundNode) {
        return getShadowRoot(foundNode)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
        null, false);
      for (var next = void 0; (next = iter.nextNode());) {
        callback(getShadowRoot(next));
      }
    }
    var $element = new WeakMap();
    var $uniqueSheets = new WeakMap();
    var $observer = new WeakMap();
    function isExistingAdopter(self, element) {
      return (element instanceof HTMLStyleElement &&
        $uniqueSheets.get(self).some(function (sheet) { return getAdopterByLocation(sheet, self); }));
    }
    function getAdopterContainer(self) {
      var element = $element.get(self);
      return element instanceof Document ? element.body : element;
    }
    function adopt(self) {
      var styleList = document.createDocumentFragment();
      var sheets = $uniqueSheets.get(self);
      var observer = $observer.get(self);
      var container = getAdopterContainer(self);
      observer.disconnect();
      sheets.forEach(function (sheet) {
        styleList.appendChild(getAdopterByLocation(sheet, self) || addAdopterLocation(sheet, self));
      });
      container.insertBefore(styleList, null);
      observer.observe(container, defaultObserverOptions);
      sheets.forEach(function (sheet) {
        restyleAdopter(sheet, getAdopterByLocation(sheet, self));
      });
    }
    function Location(element) {
      var self = this;
      self.sheets = [];
      $element.set(self, element);
      $uniqueSheets.set(self, []);
      $observer.set(self, new MutationObserver(function (mutations, observer) {
        if (!document) {
          observer.disconnect();
          return;
        }
        mutations.forEach(function (mutation) {
          if (!hasShadyCss) {
            forEach.call(mutation.addedNodes, function (node) {
              if (!(node instanceof Element)) {
                return;
              }
              traverseWebComponents(node, function (root) {
                getAssociatedLocation(root).connect();
              });
            });
          }
          forEach.call(mutation.removedNodes, function (node) {
            if (!(node instanceof Element)) {
              return;
            }
            if (isExistingAdopter(self, node)) {
              adopt(self);
            }
            if (!hasShadyCss) {
              traverseWebComponents(node, function (root) {
                getAssociatedLocation(root).disconnect();
              });
            }
          });
        });
      }));
    }
    var proto$1 = Location.prototype;
    proto$1.isConnected = function isConnected() {
      var element = $element.get(this);
      return element instanceof Document
        ? element.readyState !== 'loading'
        : isElementConnected(element.host);
    };
    proto$1.connect = function connect() {
      var container = getAdopterContainer(this);
      $observer.get(this).observe(container, defaultObserverOptions);
      if ($uniqueSheets.get(this).length > 0) {
        adopt(this);
      }
      traverseWebComponents(container, function (root) {
        getAssociatedLocation(root).connect();
      });
    };
    proto$1.disconnect = function disconnect() {
      $observer.get(this).disconnect();
    };
    proto$1.update = function update(sheets) {
      var self = this;
      var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
      if (!Array.isArray(sheets)) {
        throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
      }
      if (!sheets.every(isCSSStyleSheetInstance)) {
        throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
      }
      if (sheets.some(isNonConstructedStyleSheetInstance)) {
        throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
      }
      self.sheets = sheets;
      var oldUniqueSheets = $uniqueSheets.get(self);
      var uniqueSheets = unique(sheets);
      var removedSheets = diff(oldUniqueSheets, uniqueSheets);
      removedSheets.forEach(function (sheet) {
        removeNode(getAdopterByLocation(sheet, self));
        removeAdopterLocation(sheet, self);
      });
      $uniqueSheets.set(self, uniqueSheets);
      if (self.isConnected() && uniqueSheets.length > 0) {
        adopt(self);
      }
    };

    window.CSSStyleSheet = ConstructedStyleSheet;
    attachAdoptedStyleSheetProperty(Document);
    if ('ShadowRoot' in window) {
      attachAdoptedStyleSheetProperty(ShadowRoot);
      var proto = Element.prototype;
      var attach_1 = proto.attachShadow;
      proto.attachShadow = function attachShadow(init) {
        var root = attach_1.call(this, init);
        if (init.mode === 'closed') {
          closedShadowRootRegistry.set(this, root);
        }
        return root;
      };
    }
    var documentLocation = getAssociatedLocation(document);
    if (documentLocation.isConnected()) {
      documentLocation.connect();
    }
    else {
      document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
    }

  }());

  h.f = Fragment;

  function createRef() {
    return {};
  }

  var $ = {};
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
    cloneElement: cloneElement,
    getHost: getHost,
    rpx: rpx,
    defineElement: defineElement,
    classNames: classNames,
    extractClass: extractClass,
    createRef: createRef,
    o: o,
    elements: elements,
    $: $,
    extend: extend$1,
    get: get,
    set: set,
    bind: bind,
    unbind: unbind
  };

  options.root.Omi = omi;
  options.root.omi = omi;
  options.root.Omi.version = '6.25.18';

  var _class$1, _temp2, _class2, _temp3;

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  define('my-counter', (_temp2 = _class$1 = function (_WeElement) {
    _inherits$2(_class, _WeElement);

    function _class() {
      var _temp, _this, _ret;

      _classCallCheck$2(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.sub = function () {
        _this.count--;
        _this.update();
      }, _this.add = function () {
        _this.count++;
        _this.update();
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }

    _class.prototype.install = function install() {
      this.count = this.props.count;
    };

    _class.prototype.render = function render$$1() {
      return Omi.h(
        h.f,
        null,
        Omi.h(
          'button',
          { onClick: this.sub },
          '-'
        ),
        Omi.h(
          'span',
          null,
          this.count
        ),
        Omi.h('my-child', { obj: { name: '1111' } })
      );
    };

    return _class;
  }(WeElement), _class$1.css = '\n    span {\n      color: red;\n    }', _class$1.propTypes = {
    count: Number
  }, _temp2));

  define('my-child', (_temp3 = _class2 = function (_WeElement2) {
    _inherits$2(_class2, _WeElement2);

    function _class2() {
      _classCallCheck$2(this, _class2);

      return _possibleConstructorReturn$2(this, _WeElement2.apply(this, arguments));
    }

    _class2.prototype.render = function render$$1(props) {
      return Omi.h(
        h.f,
        null,
        Omi.h(
          'span',
          null,
          'name:',
          this.props.obj.name
        )
      );
    };

    return _class2;
  }(WeElement), _class2.propTypes = {
    obj: Object
  }, _temp3));

}());
//# sourceMappingURL=b.js.map
