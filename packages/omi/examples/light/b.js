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
    mapping: {},
    isMultiStore: false,
    //when set true, using props of hypescript, don't use getAttribute
    //if you render all the node tree by omi self, set it
    ignoreAttrs: false
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

  function getUse(data, paths, out, name) {
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
    if (out) out[name] = obj;
    return obj;
  }

  function pathToArr(path) {
    if (typeof path !== 'string' || !path) return [];
    // return path.split(/\.|\[|\]/).filter(name => !!name)
    return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
  }

  function getTargetByPath(origin, path) {
    var arr = pathToArr(path);
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

  function getValByPath(path, current) {
    var arr = pathToArr(path);
    arr.forEach(function (prop) {
      current = current[prop];
    });
    return current;
  }

  function getPath(obj, out, name) {
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
    if (out) out[name] = result;
    return result;
  }

  function removeItem(item, arr) {
    if (!arr) return;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        break;
      }
    }
  }

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
      attributes: attributes == null ? undefined : attributes,
      key: attributes == null ? undefined : attributes.key

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
  function setAccessor(node, name, old, value, isSvg, component) {
    if (name === 'className') name = 'class';

    if (name[0] == 'o' && name[1] == '-') {
      if (extension[name]) {
        extension[name](node, value, component);
      }
    } else if (name === 'key') {
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
      var nameLower = name.toLowerCase();
      name = (nameLower in node ? nameLower : name).slice(2);
      if (value) {
        if (!old) {
          node.addEventListener(name, eventProxy$1, useCapture);
          if (name == 'tap') {
            node.addEventListener('touchstart', touchStart, useCapture);
            node.addEventListener('touchend', touchEnd, useCapture);
          }
        }
      } else {
        node.removeEventListener(name, eventProxy$1, useCapture);
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
   *  @param {Element} [dom=null]    A DOM node to mutate into the shape of the `vnode`
   *  @param {VNode} vnode      A VNode (with descendants forming a tree) representing the desired DOM structure
   *  @returns {Element} dom      The created/mutated element
   *  @private
   */
  function diff(dom, vnode, parent, component, updateSelf) {
    //first render return undefined
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
        var styles = parent.querySelectorAll('style');
        styles.forEach(function (s) {
          parent.removeChild(s);
        });
        innerDiffNode(parent, vnode, hydrating, component, updateSelf);

        for (var i = styles.length - 1; i >= 0; i--) {
          parent.firstChild ? parent.insertBefore(styles[i], parent.firstChild) : parent.appendChild(style[i]);
        }
      } else {
        ret = [];
        vnode.forEach(function (item, index) {
          var ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
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
        innerDiffNode(out, vchildren, hydrating || props.dangerouslySetInnerHTML != null, component, updateSelf);
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
        if (isWeElement) {
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

  var _class, _temp;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var id = 0;

  var WeElement = (_temp = _class = function (_HTMLElement) {
    _inherits(WeElement, _HTMLElement);

    function WeElement() {
      _classCallCheck(this, WeElement);

      var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

      _this.props = Object.assign({}, _this.constructor.defaultProps);
      _this.elementId = id++;
      _this.computed = {};
      return _this;
    }

    WeElement.prototype.connectedCallback = function connectedCallback() {
      var p = this.parentNode;
      while (p && !this.store) {
        this.store = p.store;
        p = p.parentNode || p.host;
      }

      this.attrsToProps();

      if (this.props.use) {
        this.use = this.props.use;
      }

      if (this.props.useSelf) {
        this.use = this.props.useSelf;
      }

      if (this.use) {
        var use = typeof this.use === 'function' ? this.use() : this.use;

        if (options.isMultiStore) {
          var _updatePath = {};
          var using = {};
          for (var storeName in use) {
            _updatePath[storeName] = {};
            using[storeName] = {};
            getPath(use[storeName], _updatePath, storeName);
            getUse(this.store[storeName].data, use[storeName], using, storeName);
            this.store[storeName].instances.push(this);
          }
          this.using = using;
          this._updatePath = _updatePath;
        } else {
          this._updatePath = getPath(use);
          this.using = getUse(this.store.data, use);
          this.store.instances.push(this);
        }
      }
      if (this.useSelf) {
        var _use = typeof this.useSelf === 'function' ? this.useSelf() : this.useSelf;
        if (options.isMultiStore) {
          var _updatePath2 = {};
          var _using = {};
          for (var _storeName in _use) {
            getPath(_use[_storeName], _updatePath2, _storeName);
            getUse(this.store[_storeName].data, _use[_storeName], _using, _storeName);
            this.store[_storeName].updateSelfInstances.push(this);
          }
          this.usingSelf = _using;
          this._updateSelfPath = _updatePath2;
        } else {
          this._updateSelfPath = getPath(_use);
          this.usingSelf = getUse(this.store.data, _use);
          this.store.updateSelfInstances.push(this);
        }
      }

      if (this.compute) {
        for (var key in this.compute) {
          this.computed[key] = this.compute[key].call(options.isMultiStore ? this.store : this.store.data);
        }
      }

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

        if (this.constructor.css) {
          shadowRoot.appendChild(cssToDom(this.constructor.css));
        } else if (this.css) {
          shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
        }
      }

      this.beforeRender();
      options.afterInstall && options.afterInstall(this);

      var rendered = this.render(this.props, this.store);
      this.__hasChildren = Object.prototype.toString.call(rendered) === '[object Array]' && rendered.length > 0;

      this.rootNode = diff(null, rendered, null, this);
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
        this.rootNode && shadowRoot.appendChild(this.rootNode);
      }
      this.installed();
      this._isInstalled = true;
    };

    WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
      this.uninstall();
      this._isInstalled = false;
      if (this.store) {
        if (options.isMultiStore) {
          for (var key in this.store) {
            var current = this.store[key];
            removeItem(this, current.instances);
            removeItem(this, current.updateSelfInstances);
          }
        } else {
          removeItem(this, this.store.instances);
          removeItem(this, this.store.updateSelfInstances);
        }
      }
    };

    WeElement.prototype.update = function update(ignoreAttrs, updateSelf) {
      this._willUpdate = true;
      this.beforeUpdate();
      this.beforeRender();
      //fix null !== undefined
      if (this._customStyleContent != this.props.css) {
        this._customStyleContent = this.props.css;
        this._customStyleElement.textContent = this._customStyleContent;
      }
      this.attrsToProps(ignoreAttrs);

      var rendered = this.render(this.props, this.store);
      this.rendered();
      this.__hasChildren = this.__hasChildren || Object.prototype.toString.call(rendered) === '[object Array]' && rendered.length > 0;

      this.rootNode = diff(this.rootNode, rendered, this.shadowRoot, this, updateSelf);
      this._willUpdate = false;
      this.updated();
    };

    WeElement.prototype.forceUpdate = function forceUpdate() {
      this.update(true);
    };

    WeElement.prototype.updateProps = function updateProps(obj) {
      var _this2 = this;

      Object.keys(obj).forEach(function (key) {
        _this2.props[key] = obj[key];
        if (_this2.prevProps) {
          _this2.prevProps[key] = obj[key];
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
      if (options.ignoreAttrs || ignoreAttrs) return;
      var ele = this;
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
              if (val[0] === ':') {
                ele.props[key] = getValByPath(val.substr(1), Omi.$);
              } else {
                ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
              }
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
      this.dispatchEvent(new CustomEvent(name, {
        detail: data
      }));
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
      this.defaultCallback = function () { };
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

  function render(vnode, parent, store) {
    parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
    if (store) {
      if (store.data) {
        observeStore(store);
      } else {
        options.isMultiStore = true;
        //Multi-store injection
        for (var key in store) {
          observeStore(store[key], key);
        }
      }
      parent.store = store;
    }
    return diff(null, vnode, parent, false);
  }

  function observeStore(store, key) {
    store.instances = [];
    store.updateSelfInstances = [];
    extendStoreUpdate(store, key);

    store.data = new JSONPatcherProxy(store.data).observe(false, function (patch) {
      var patchs = {};
      if (patch.op === 'remove') {
        // fix arr splice
        var kv = getArrayPatch(patch.path, store);
        patchs[kv.k] = kv.v;

        update(patchs, store);
      } else {
        var _key = fixPath(patch.path);
        patchs[_key] = patch.value;

        update(patchs, store);
      }
    });
  }

  function update(patch, store) {
    store.update(patch);
  }

  function extendStoreUpdate(store, key) {
    store.update = function (patch) {
      if (Object.keys(patch).length > 0) {
        this.instances.forEach(function (instance) {
          compute(instance, key);
          if (key) {
            if (instance._updatePath && instance._updatePath[key] && needUpdate(patch, instance._updatePath[key])) {
              if (instance.use) {
                getUse(store.data, (typeof instance.use === 'function' ? instance.use() : instance.use)[key], instance.using, key);
              }

              instance.update();
            }
          } else {
            if (instance._updatePath && needUpdate(patch, instance._updatePath)) {
              if (instance.use) {
                instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use);
              }

              instance.update();
            }
          }
        });

        this.updateSelfInstances.forEach(function (instance) {
          compute(instance, key);
          if (key) {
            if (instance._updateSelfPath && instance._updateSelfPath[key] && needUpdate(patch, instance._updateSelfPath[key])) {
              if (instance.useSelf) {
                getUse(store.data, (typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf)[key], instance.usingSelf, key);
              }

              instance.updateSelf();
            }
          } else {
            if (instance._updateSelfPath && needUpdate(patch, instance._updateSelfPath)) {
              instance.usingSelf = getUse(store.data, typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf);
              instance.updateSelf();
            }
          }
        });
        this.onChange && this.onChange(patch);
      }
    };
  }

  function compute(instance, isMultiStore) {
    if (instance.compute) {
      for (var ck in instance.compute) {
        instance.computed[ck] = instance.compute[ck].call(isMultiStore ? instance.store : instance.store.data);
      }
    }
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
    return {
      k: fixArrPath(path),
      v: current
    };
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

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var storeHelpers = ['use', 'useSelf'];

  function define(name, ctor, config) {
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
      }(WeElement), _class.css = config.css, _class.propTypes = config.propTypes, _class.defaultProps = config.defaultProps, _temp2);

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

  function tag(name, pure) {
    return function (target) {
      target.pure = pure;
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

  var n = function (t, r, u, e) { for (var p = 1; p < r.length; p++) { var s = r[p], h = "number" == typeof s ? u[s] : s, a = r[++p]; 1 === a ? e[0] = h : 3 === a ? e[1] = Object.assign(e[1] || {}, h) : 5 === a ? (e[1] = e[1] || {})[r[++p]] = h : 6 === a ? e[1][r[++p]] += h + "" : e.push(a ? t.apply(null, n(t, h, u, ["", null])) : h); } return e }, t = function (n) { for (var t, r, u = 1, e = "", p = "", s = [0], h = function (n) { 1 === u && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? s.push(n || e, 0) : 3 === u && (n || e) ? (s.push(n || e, 1), u = 2) : 2 === u && "..." === e && n ? s.push(n, 3) : 2 === u && e && !n ? s.push(!0, 5, e) : u >= 5 && ((e || !n && 5 === u) && (s.push(e, u, r), u = 6), n && (s.push(n, u, r), u = 6)), e = ""; }, a = 0; a < n.length; a++) { a && (1 === u && h(), h(a)); for (var f = 0; f < n[a].length; f++)t = n[a][f], 1 === u ? "<" === t ? (h(), s = [s], u = 3) : e += t : 4 === u ? "--" === e && ">" === t ? (u = 1, e = "") : e = t + e[0] : p ? t === p ? p = "" : e += t : '"' === t || "'" === t ? p = t : ">" === t ? (h(), u = 1) : u && ("=" === t ? (u = 5, r = e, e = "") : "/" === t && (u < 5 || ">" === n[a][f + 1]) ? (h(), 3 === u && (s = s[0]), u = s, (s = s[0]).push(u, 2), u = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (h(), u = 2) : e += t), 3 === u && "!--" === e && (u = 4, s = s[0]); } return h(), s }, r = "function" == typeof Map, u = r ? new Map : {}, e = r ? function (n) { var r = u.get(n); return r || u.set(n, r = t(n)), r } : function (n) { for (var r = "", e = 0; e < n.length; e++)r += n[e].length + "-" + n[e]; return u[r] || (u[r] = t(n)) }; function htm(t) { var r = n(this, e(t), arguments, []); return r.length > 1 ? r : r[0] }

  h.f = Fragment;

  var html = htm.bind(h);

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
    html: html,
    htm: htm,
    o: o,
    elements: elements,
    $: $,
    extend: extend$1,
    get: get,
    set: set,
    bind: bind,
    unbind: unbind,
    JSONProxy: JSONPatcherProxy
  };

  options.root.Omi = omi;
  options.root.omi = omi;
  options.root.Omi.version = '6.18.0';

  var _class$1, _temp$1;

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  define('my-component', (_temp$1 = _class$1 = function (_WeElement) {
    _inherits$2(XX, _WeElement);

    function XX() {
      _classCallCheck$2(this, XX);

      return _possibleConstructorReturn$2(this, _WeElement.apply(this, arguments));
    }

    XX.prototype.render = function render$$1(props) {
      return Omi.h(
        'div',
        null,
        'Hello, World! I\'m ',
        props.first,
        ', ',
        props.last
      );
    };

    return XX;
  }(WeElement), _class$1.propTypes = {
    first: String,
    last: String
  }, _class$1.isLightDOM = true, _temp$1));

}());
//# sourceMappingURL=b.js.map
