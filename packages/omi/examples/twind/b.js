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
      }

      if (this.constructor.css) {
        if (typeof this.constructor.css === 'string') {
          console.log(1111);
          this.styleSheet = new CSSStyleSheet();
          this.styleSheet.replaceSync(this.constructor.css);
        } else {
          console.log(this.constructor.css);
          this.styleSheet = this.constructor.css;
        }
        shadowRoot.adoptedStyleSheets = [this.styleSheet];
      }

      if (this.css) {
        shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
      }

      this.beforeRender();
      options.afterInstall && options.afterInstall(this);

      var rendered = this.render(this.props, this.store);

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

      this.rootNode = diff(this.rootNode, rendered, this.constructor.isLightDOM ? this : this.shadowRoot, this, updateSelf);
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

  (function () {

    if ('adoptedStyleSheets' in document) { return; }

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
  options.root.Omi.version = '6.19.3';

  var i = new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]); function r$1(r) { return i.get(r) } function n$1(i) { var r = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|(?:mask(?:$|-[ispro]|-cl)))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(i); return r ? r[1] ? 1 : r[2] ? 2 : r[3] ? 3 : 5 : 0 } function t$1(i, r) { var n = /^(?:(pos)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(i); return n ? n[1] ? /^sti/i.test(r) ? 1 : 0 : n[2] ? /^image-/i.test(r) ? 1 : 0 : n[3] ? "-" === r[3] ? 2 : 0 : /^(inline-)?grid$/i.test(r) ? 4 : 0 : 0 }

  // src/internal/util.ts
  var includes = (value, search) => !!~value.indexOf(search);
  var join = (parts, separator = "-") => parts.join(separator);
  var joinTruthy = (parts, separator) => join(parts.filter(Boolean), separator);
  var tail = (array, startIndex = 1) => array.slice(startIndex);
  var identity = (value) => value;
  var noop = () => {
  };
  var capitalize = (value) => value[0].toUpperCase() + tail(value);
  var hyphenate$1 = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
  var evalThunk = (value, context) => {
    while (typeof value == "function") {
      value = value(context);
    }
    return value;
  };
  var ensureMaxSize = (map, max) => {
    if (map.size > max) {
      map.delete(map.keys().next().value);
    }
  };
  var isCSSProperty = (key, value) => !includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
  var merge = (target, source, context) => source ? Object.keys(source).reduce((target2, key) => {
    const value = evalThunk(source[key], context);
    if (isCSSProperty(key, value)) {
      target2[hyphenate$1(key)] = value;
    } else {
      target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge(target2[key] || {}, value, context);
    }
    return target2;
  }, target) : target;
  var escape = typeof CSS !== "undefined" && CSS.escape || ((className) => className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  var buildMediaQuery = (screen) => {
    if (!Array.isArray(screen)) {
      screen = [screen];
    }
    return "@media " + join(screen.map((screen2) => {
      if (typeof screen2 == "string") {
        screen2 = { min: screen2 };
      }
      return screen2.raw || join(Object.keys(screen2).map((feature) => `(${feature}-width:${screen2[feature]})`), " and ");
    }), ",");
  };
  var cyrb32 = (value) => {
    for (var h = 9, index = value.length; index--;) {
      h = Math.imul(h ^ value.charCodeAt(index), 1597334677);
    }
    return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
  };
  var sortedInsertionIndex = (array, element) => {
    for (var low = 0, high = array.length; low < high;) {
      const pivot = high + low >> 1;
      if (array[pivot] <= element) {
        low = pivot + 1;
      } else {
        high = pivot;
      }
    }
    return high;
  };

  // src/twind/parse.ts
  var groupings;
  var rules;
  var startGrouping = (value = "") => {
    groupings.push(value);
    return "";
  };
  var endGrouping = (isWhitespace) => {
    groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
  };
  var onlyPrefixes = (s) => s && !includes("!:", s[0]);
  var onlyVariants = (s) => s[0] == ":";
  var addRule = (directive2, negate) => {
    rules.push({
      v: groupings.filter(onlyVariants),
      d: directive2,
      n: negate,
      i: includes(groupings, "!"),
      $: ""
    });
  };
  var saveRule = (buffer) => {
    const negate = buffer[0] == "-";
    if (negate) {
      buffer = tail(buffer);
    }
    const prefix = join(groupings.filter(onlyPrefixes));
    addRule(buffer == "&" ? prefix : (prefix && prefix + "-") + buffer, negate);
    return "";
  };
  var parseString = (token, isVariant) => {
    let buffer = "";
    for (let char, dynamic = false, position2 = 0; char = token[position2++];) {
      if (dynamic || char == "[") {
        buffer += char;
        dynamic = char != "]";
        continue;
      }
      switch (char) {
        case ":":
          buffer = buffer && startGrouping(":" + (token[position2] == char ? token[position2++] : "") + buffer);
          break;
        case "(":
          buffer = buffer && startGrouping(buffer);
          startGrouping();
          break;
        case "!":
          startGrouping(char);
          break;
        case ")":
        case " ":
        case "	":
        case "\n":
        case "\r":
          buffer = buffer && saveRule(buffer);
          endGrouping(char !== ")");
          break;
        default:
          buffer += char;
      }
    }
    if (buffer) {
      if (isVariant) {
        startGrouping(":" + buffer);
      } else if (buffer.slice(-1) == "-") {
        startGrouping(buffer.slice(0, -1));
      } else {
        saveRule(buffer);
      }
    }
  };
  var parseGroupedToken = (token) => {
    startGrouping();
    parseToken(token);
    endGrouping();
  };
  var parseGroup = (key, token) => {
    if (token) {
      startGrouping();
      const isVariant = includes("tbu", (typeof token)[1]);
      parseString(key, isVariant);
      if (isVariant) {
        parseGroupedToken(token);
      }
      endGrouping();
    }
  };
  var parseToken = (token) => {
    switch (typeof token) {
      case "string":
        parseString(token);
        break;
      case "function":
        addRule(token);
        break;
      case "object":
        if (Array.isArray(token)) {
          token.forEach(parseGroupedToken);
        } else if (token) {
          Object.keys(token).forEach((key) => {
            parseGroup(key, token[key]);
          });
        }
    }
  };
  var staticsCaches = new WeakMap();
  var buildStatics = (strings) => {
    let statics = staticsCaches.get(strings);
    if (!statics) {
      let slowModeIndex = NaN;
      let buffer = "";
      statics = strings.map((token, index) => {
        if (slowModeIndex !== slowModeIndex && (token.slice(-1) == "[" || includes(":-(", (strings[index + 1] || "")[0]))) {
          slowModeIndex = index;
        }
        if (index >= slowModeIndex) {
          return (interpolation) => {
            if (index == slowModeIndex) {
              buffer = "";
            }
            buffer += token;
            if (includes("rg", (typeof interpolation)[5])) {
              buffer += interpolation;
            } else if (interpolation) {
              parseString(buffer);
              buffer = "";
              parseToken(interpolation);
            }
            if (index == strings.length - 1) {
              parseString(buffer);
            }
          };
        }
        const staticRules = rules = [];
        parseString(token);
        const activeGroupings = [...groupings];
        rules = [];
        return (interpolation) => {
          rules.push(...staticRules);
          groupings = [...activeGroupings];
          if (interpolation) {
            parseToken(interpolation);
          }
        };
      });
      staticsCaches.set(strings, statics);
    }
    return statics;
  };
  var parse = (tokens) => {
    groupings = [];
    rules = [];
    if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) {
      buildStatics(tokens[0]).forEach((apply2, index) => apply2(tokens[index + 1]));
    } else {
      parseToken(tokens);
    }
    return rules;
  };

  // src/twind/directive.ts
  var isFunctionFree;
  var detectFunction = (key, value) => {
    if (typeof value == "function") {
      isFunctionFree = false;
    }
    return value;
  };
  var stringify = (data) => {
    isFunctionFree = true;
    const key = JSON.stringify(data, detectFunction);
    return isFunctionFree && key;
  };
  var cacheByFactory = new WeakMap();
  var directive = (factory, data) => {
    const key = stringify(data);
    let directive2;
    if (key) {
      var cache = cacheByFactory.get(factory);
      if (!cache) {
        cacheByFactory.set(factory, cache = new Map());
      }
      directive2 = cache.get(key);
    }
    if (!directive2) {
      directive2 = Object.defineProperty((params, context) => {
        context = Array.isArray(params) ? context : params;
        return evalThunk(factory(data, context), context);
      }, "toJSON", {
        value: () => key || data
      });
      if (cache) {
        cache.set(key, directive2);
        ensureMaxSize(cache, 1e4);
      }
    }
    return directive2;
  };

  // src/twind/apply.ts
  var applyFactory = (tokens, { css }) => css(parse(tokens));
  var apply = (...tokens) => directive(applyFactory, tokens);

  // src/twind/helpers.ts
  var positions = (resolve) => (value, position2, prefix, suffix) => {
    if (value) {
      const properties = position2 && resolve(position2);
      if (properties && properties.length > 0) {
        return properties.reduce((declarations, property2) => {
          declarations[joinTruthy([prefix, property2, suffix])] = value;
          return declarations;
        }, {});
      }
    }
  };
  var corners = /* @__PURE__ */ positions((key) => ({
    t: ["top-left", "top-right"],
    r: ["top-right", "bottom-right"],
    b: ["bottom-left", "bottom-right"],
    l: ["bottom-left", "top-left"],
    tl: ["top-left"],
    tr: ["top-right"],
    bl: ["bottom-left"],
    br: ["bottom-right"]
  })[key]);
  var expandEdges = (key) => {
    const parts = ({ x: "lr", y: "tb" }[key] || key || "").split("").sort();
    for (let index = parts.length; index--;) {
      if (!(parts[index] = {
        t: "top",
        r: "right",
        b: "bottom",
        l: "left"
      }[parts[index]]))
        return;
    }
    if (parts.length)
      return parts;
  };
  var edges = /* @__PURE__ */ positions(expandEdges);

  // src/twind/plugins.ts
  var _;
  var __;
  var $$1;
  var toColumnsOrRows = (x) => x == "cols" ? "columns" : "rows";
  var property = (property2) => (params, context, id) => ({
    [property2]: id + ((_ = join(params)) && "-" + _)
  });
  var propertyValue = (property2, separator) => (params, context, id) => (_ = join(params, separator)) && {
    [property2 || id]: _
  };
  var themeProperty = (section) => (params, { theme: theme2 }, id) => (_ = theme2(section || id, params)) && {
    [section || id]: _
  };
  var themePropertyFallback = (section, separator) => (params, { theme: theme2 }, id) => (_ = theme2(section || id, params, join(params, separator))) && {
    [section || id]: _
  };
  var alias = (handler, name) => (params, context) => handler(params, context, name);
  var display = property("display");
  var position = property("position");
  var textTransform = property("textTransform");
  var textDecoration = property("textDecoration");
  var fontStyle = property("fontStyle");
  var fontVariantNumeric = (key) => (params, context, id) => ({
    ["--tw-" + key]: id,
    fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
  });
  var inset = (params, { theme: theme2 }, id) => (_ = theme2("inset", params)) && { [id]: _ };
  var opacityProperty = (params, theme2, id, section = id) => (_ = theme2(section + "Opacity", tail(params))) && {
    [`--tw-${id}-opacity`]: _
  };
  var parseColorComponent = (chars, factor) => Math.round(parseInt(chars, 16) * factor);
  var asRGBA = (color, opacityProperty2, opacityDefault) => {
    if (color && color[0] == "#" && (_ = (color.length - 1) / 3) && ($$1 = [17, 1, 0.062272][_ - 1])) {
      return `rgba(${parseColorComponent(color.substr(1, _), $$1)},${parseColorComponent(color.substr(1 + _, _), $$1)},${parseColorComponent(color.substr(1 + 2 * _, _), $$1)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
    }
    return color;
  };
  var withOpacityFallback = (property2, kind, color) => color && typeof color == "string" ? (_ = asRGBA(color, kind + "-opacity")) && _ !== color ? {
    [`--tw-${kind}-opacity`]: "1",
    [property2]: [color, _]
  } : { [property2]: color } : void 0;
  var transparentTo = (color) => ($$1 = asRGBA(color, "", "0")) == _ ? "transparent" : $$1;
  var reversableEdge = (params, { theme: theme2 }, id, section, prefix, suffix) => (_ = { x: ["right", "left"], y: ["bottom", "top"] }[params[0]]) && ($$1 = `--tw-${id}-${params[0]}-reverse`) ? params[1] == "reverse" ? {
    [$$1]: "1"
  } : {
    [$$1]: "0",
    [joinTruthy([prefix, _[0], suffix])]: (__ = theme2(section, tail(params))) && `calc(${__} * var(${$$1}))`,
    [joinTruthy([prefix, _[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$$1})))`]
  } : void 0;
  var placeHelper = (property2, params) => params[0] && {
    [property2]: (includes("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
  };
  var contentPluginFor = (property2) => (params) => includes(["start", "end"], params[0]) ? { [property2]: "flex-" + params[0] } : placeHelper(property2, params);
  var gridPlugin = (kind) => (params, { theme: theme2 }) => {
    if (_ = theme2("grid" + capitalize(kind), params, "")) {
      return { ["grid-" + kind]: _ };
    }
    switch (params[0]) {
      case "span":
        return params[1] && {
          ["grid-" + kind]: `span ${params[1]} / span ${params[1]}`
        };
      case "start":
      case "end":
        return (_ = theme2("grid" + capitalize(kind) + capitalize(params[0]), tail(params), join(tail(params)))) && {
          [`grid-${kind}-${params[0]}`]: _
        };
    }
  };
  var border = (params, { theme: theme2 }, id) => {
    switch (params[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return propertyValue("borderStyle")(params);
      case "collapse":
      case "separate":
        return propertyValue("borderCollapse")(params);
      case "opacity":
        return opacityProperty(params, theme2, id);
    }
    return (_ = theme2(id + "Width", params, "")) ? { borderWidth: _ } : withOpacityFallback("borderColor", id, theme2(id + "Color", params));
  };
  var transform = (gpu) => (gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
  var transformXYFunction = (params, context, id) => params[0] && (_ = context.theme(id, params[1] || params[0])) && {
    [`--tw-${id}-x`]: params[0] !== "y" && _,
    [`--tw-${id}-y`]: params[0] !== "x" && _,
    transform: [`${id}${params[1] ? params[0].toUpperCase() : ""}(${_})`, transform()]
  };
  var edgesPluginFor = (key) => (params, context, id) => id[1] ? edges(context.theme(key, params), id[1], key) : themeProperty(key)(params, context, id);
  var padding = edgesPluginFor("padding");
  var margin = edgesPluginFor("margin");
  var minMax = (params, { theme: theme2 }, id) => (_ = { w: "width", h: "height" }[params[0]]) && {
    [_ = `${id}${capitalize(_)}`]: theme2(_, tail(params))
  };
  var filter = (params, { theme: theme2 }, id) => {
    const parts = id.split("-");
    const prefix = parts[0] == "backdrop" ? parts[0] + "-" : "";
    if (!prefix) {
      params.unshift(...parts);
    }
    if (params[0] == "filter") {
      const filters = [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        prefix && "opacity",
        "saturate",
        "sepia",
        !prefix && "drop-shadow"
      ].filter(Boolean);
      return params[1] == "none" ? { [prefix + "filter"]: "none" } : filters.reduce((css, key) => {
        css["--tw-" + prefix + key] = "var(--tw-empty,/*!*/ /*!*/)";
        return css;
      }, {
        [prefix + "filter"]: filters.map((key) => `var(--tw-${prefix}${key})`).join(" ")
      });
    }
    $$1 = params.shift();
    if (includes(["hue", "drop"], $$1))
      $$1 += capitalize(params.shift());
    return (_ = theme2(prefix ? "backdrop" + capitalize($$1) : $$1, params)) && {
      ["--tw-" + prefix + $$1]: (Array.isArray(_) ? _ : [_]).map((_4) => `${hyphenate$1($$1)}(${_4})`).join(" ")
    };
  };
  var corePlugins = {
    group: (params, { tag }, id) => tag(join([id, ...params])),
    hidden: alias(display, "none"),
    inline: display,
    block: display,
    contents: display,
    flow: display,
    table: (params, context, id) => includes(["auto", "fixed"], params[0]) ? { tableLayout: params[0] } : display(params, context, id),
    flex(params, context, id) {
      switch (params[0]) {
        case "row":
        case "col":
          return {
            flexDirection: join(params[0] == "col" ? ["column", ...tail(params)] : params)
          };
        case "nowrap":
        case "wrap":
          return { flexWrap: join(params) };
        case "grow":
        case "shrink":
          _ = context.theme("flex" + capitalize(params[0]), tail(params), params[1] || 1);
          return _ != null && {
            ["flex-" + params[0]]: "" + _
          };
      }
      return (_ = context.theme("flex", params, "")) ? { flex: _ } : display(params, context, id);
    },
    grid(params, context, id) {
      switch (params[0]) {
        case "cols":
        case "rows":
          return (_ = context.theme("gridTemplate" + capitalize(toColumnsOrRows(params[0])), tail(params), params.length == 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join(tail(params)))) && {
            ["gridTemplate-" + toColumnsOrRows(params[0])]: _
          };
        case "flow":
          return params.length > 1 && {
            gridAutoFlow: join(params[1] == "col" ? ["column", ...tail(params, 2)] : tail(params), " ")
          };
      }
      return display(params, context, id);
    },
    auto: (params, { theme: theme2 }) => includes(["cols", "rows"], params[0]) && (_ = theme2("gridAuto" + capitalize(toColumnsOrRows(params[0])), tail(params), join(tail(params)))) && {
      ["gridAuto-" + toColumnsOrRows(params[0])]: _
    },
    static: position,
    fixed: position,
    absolute: position,
    relative: position,
    sticky: position,
    visible: { visibility: "visible" },
    invisible: { visibility: "hidden" },
    antialiased: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    "subpixel-antialiased": {
      WebkitFontSmoothing: "auto",
      MozOsxFontSmoothing: "auto"
    },
    truncate: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    "sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      clip: "rect(0,0,0,0)",
      borderWidth: "0"
    },
    "not-sr-only": {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      whiteSpace: "normal",
      clip: "auto"
    },
    resize: (params) => ({
      resize: { x: "horizontal", y: "vertical" }[params[0]] || params[0] || "both"
    }),
    box: (params) => params[0] && { boxSizing: params[0] + "-box" },
    appearance: propertyValue(),
    cursor: themePropertyFallback(),
    float: propertyValue(),
    clear: propertyValue(),
    decoration: propertyValue("boxDecorationBreak"),
    isolate: { isolation: "isolate" },
    isolation: propertyValue(),
    "mix-blend": propertyValue("mixBlendMode"),
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    inset: (params, { theme: theme2 }) => (_ = expandEdges(params[0])) ? edges(theme2("inset", tail(params)), params[0]) : (_ = theme2("inset", params)) && {
      top: _,
      right: _,
      bottom: _,
      left: _
    },
    underline: textDecoration,
    "line-through": textDecoration,
    "no-underline": alias(textDecoration, "none"),
    "text-underline": alias(textDecoration, "underline"),
    "text-no-underline": alias(textDecoration, "none"),
    "text-line-through": alias(textDecoration, "line-through"),
    uppercase: textTransform,
    lowercase: textTransform,
    capitalize: textTransform,
    "normal-case": alias(textTransform, "none"),
    "text-normal-case": alias(textTransform, "none"),
    italic: fontStyle,
    "not-italic": alias(fontStyle, "normal"),
    "font-italic": alias(fontStyle, "italic"),
    "font-not-italic": alias(fontStyle, "normal"),
    font: (params, context, id) => (_ = context.theme("fontFamily", params, "")) ? { fontFamily: _ } : themeProperty("fontWeight")(params, context, id),
    items: (params) => params[0] && {
      alignItems: includes(["start", "end"], params[0]) ? "flex-" + params[0] : join(params)
    },
    "justify-self": propertyValue(),
    "justify-items": propertyValue(),
    justify: contentPluginFor("justifyContent"),
    content: contentPluginFor("alignContent"),
    self: contentPluginFor("alignSelf"),
    place: (params) => params[0] && placeHelper("place-" + params[0], tail(params)),
    overscroll: (params) => params[0] && {
      ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
    },
    col: gridPlugin("column"),
    row: gridPlugin("row"),
    duration: themeProperty("transitionDuration"),
    delay: themeProperty("transitionDelay"),
    tracking: themeProperty("letterSpacing"),
    leading: themeProperty("lineHeight"),
    z: themeProperty("zIndex"),
    opacity: themeProperty(),
    ease: themeProperty("transitionTimingFunction"),
    p: padding,
    py: padding,
    px: padding,
    pt: padding,
    pr: padding,
    pb: padding,
    pl: padding,
    m: margin,
    my: margin,
    mx: margin,
    mt: margin,
    mr: margin,
    mb: margin,
    ml: margin,
    w: themeProperty("width"),
    h: themeProperty("height"),
    min: minMax,
    max: minMax,
    fill: themeProperty(),
    order: themeProperty(),
    origin: themePropertyFallback("transformOrigin", " "),
    select: propertyValue("userSelect"),
    "pointer-events": propertyValue(),
    align: propertyValue("verticalAlign"),
    whitespace: propertyValue("whiteSpace"),
    "normal-nums": { fontVariantNumeric: "normal" },
    ordinal: fontVariantNumeric("ordinal"),
    "slashed-zero": fontVariantNumeric("slashed-zero"),
    "lining-nums": fontVariantNumeric("numeric-figure"),
    "oldstyle-nums": fontVariantNumeric("numeric-figure"),
    "proportional-nums": fontVariantNumeric("numeric-spacing"),
    "tabular-nums": fontVariantNumeric("numeric-spacing"),
    "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
    "stacked-fractions": fontVariantNumeric("numeric-fraction"),
    overflow: (params, context, id) => includes(["ellipsis", "clip"], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? { ["overflow-" + params[0]]: params[1] } : propertyValue()(params, context, id),
    transform: (params) => params[0] == "none" ? { transform: "none" } : {
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      transform: transform(params[0] == "gpu")
    },
    rotate: (params, { theme: theme2 }) => (_ = theme2("rotate", params)) && {
      "--tw-rotate": _,
      transform: [`rotate(${_})`, transform()]
    },
    scale: transformXYFunction,
    translate: transformXYFunction,
    skew: transformXYFunction,
    gap: (params, context, id) => (_ = { x: "column", y: "row" }[params[0]]) ? { [_ + "Gap"]: context.theme("gap", tail(params)) } : themeProperty("gap")(params, context, id),
    stroke: (params, context, id) => (_ = context.theme("stroke", params, "")) ? { stroke: _ } : themeProperty("strokeWidth")(params, context, id),
    outline: (params, { theme: theme2 }) => (_ = theme2("outline", params)) && {
      outline: _[0],
      outlineOffset: _[1]
    },
    "break-normal": {
      wordBreak: "normal",
      overflowWrap: "normal"
    },
    "break-words": { overflowWrap: "break-word" },
    "break-all": { wordBreak: "break-all" },
    text(params, { theme: theme2 }, id) {
      switch (params[0]) {
        case "left":
        case "center":
        case "right":
        case "justify":
          return { textAlign: params[0] };
        case "uppercase":
        case "lowercase":
        case "capitalize":
          return textTransform([], _, params[0]);
        case "opacity":
          return opacityProperty(params, theme2, id);
      }
      const fontSize = theme2("fontSize", params, "");
      if (fontSize) {
        return typeof fontSize == "string" ? { fontSize } : {
          fontSize: fontSize[0],
          ...typeof fontSize[1] == "string" ? { lineHeight: fontSize[1] } : fontSize[1]
        };
      }
      return withOpacityFallback("color", "text", theme2("textColor", params));
    },
    bg(params, { theme: theme2 }, id) {
      switch (params[0]) {
        case "fixed":
        case "local":
        case "scroll":
          return propertyValue("backgroundAttachment", ",")(params);
        case "bottom":
        case "center":
        case "left":
        case "right":
        case "top":
          return propertyValue("backgroundPosition", " ")(params);
        case "no":
          return params[1] == "repeat" && propertyValue("backgroundRepeat")(params);
        case "repeat":
          return includes("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : { backgroundRepeat: params[1] || params[0] };
        case "opacity":
          return opacityProperty(params, theme2, id, "background");
        case "clip":
        case "origin":
          return params[1] && {
            ["background-" + params[0]]: params[1] + (params[1] == "text" ? "" : "-box")
          };
        case "blend":
          return propertyValue("background-blend-mode")(tail(params));
        case "gradient":
          if (params[1] == "to" && (_ = expandEdges(params[2]))) {
            return {
              backgroundImage: `linear-gradient(to ${join(_, " ")},var(--tw-gradient-stops))`
            };
          }
      }
      return (_ = theme2("backgroundPosition", params, "")) ? { backgroundPosition: _ } : (_ = theme2("backgroundSize", params, "")) ? { backgroundSize: _ } : (_ = theme2("backgroundImage", params, "")) ? { backgroundImage: _ } : withOpacityFallback("backgroundColor", "bg", theme2("backgroundColor", params));
    },
    from: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-from": _,
      "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_)})`
    },
    via: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-stops": `var(--tw-gradient-from),${_},var(--tw-gradient-to,${transparentTo(_)})`
    },
    to: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-to": _
    },
    border: (params, context, id) => expandEdges(params[0]) ? edges(context.theme("borderWidth", tail(params)), params[0], "border", "width") : border(params, context, id),
    divide: (params, context, id) => (_ = reversableEdge(params, context, id, "divideWidth", "border", "width") || border(params, context, id)) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    space: (params, context, id) => (_ = reversableEdge(params, context, id, "space", "margin")) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    placeholder: (params, { theme: theme2 }, id) => (_ = params[0] == "opacity" ? opacityProperty(params, theme2, id) : withOpacityFallback("color", "placeholder", theme2("placeholderColor", params))) && {
      "&::placeholder": _
    },
    shadow: (params, { theme: theme2 }) => (_ = theme2("boxShadow", params)) && {
      ":global": {
        "*": {
          "--tw-shadow": "0 0 transparent"
        }
      },
      "--tw-shadow": _ == "none" ? "0 0 transparent" : _,
      boxShadow: [
        _,
        `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
      ]
    },
    animate: (params, { theme: theme2, tag }) => {
      if ($$1 = theme2("animation", params)) {
        const parts = $$1.split(" ");
        if ((_ = theme2("keyframes", parts[0], __ = {})) !== __) {
          return ($$1 = tag(parts[0])) && {
            animation: $$1 + " " + join(tail(parts), " "),
            ["@keyframes " + $$1]: _
          };
        }
        return { animation: $$1 };
      }
    },
    ring(params, { theme: theme2 }, id) {
      switch (params[0]) {
        case "inset":
          return { "--tw-ring-inset": "inset" };
        case "opacity":
          return opacityProperty(params, theme2, id);
        case "offset":
          return (_ = theme2("ringOffsetWidth", tail(params), "")) ? {
            "--tw-ring-offset-width": _
          } : {
            "--tw-ring-offset-color": theme2("ringOffsetColor", tail(params))
          };
      }
      return (_ = theme2("ringWidth", params, "")) ? {
        "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
        "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
        boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
        ":global": {
          "*": {
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": theme2("ringOffsetWidth", "", "0px"),
            "--tw-ring-offset-color": theme2("ringOffsetColor", "", "#fff"),
            "--tw-ring-color": asRGBA(theme2("ringColor", "", "#93c5fd"), "ring-opacity", theme2("ringOpacity", "", "0.5")),
            "--tw-ring-offset-shadow": "0 0 transparent",
            "--tw-ring-shadow": "0 0 transparent"
          }
        }
      } : {
        "--tw-ring-opacity": "1",
        "--tw-ring-color": asRGBA(theme2("ringColor", params), "ring-opacity")
      };
    },
    object: (params, context, id) => includes(["contain", "cover", "fill", "none", "scale-down"], join(params)) ? { objectFit: join(params) } : themePropertyFallback("objectPosition", " ")(params, context, id),
    list: (params, context, id) => join(params) == "item" ? display(params, context, id) : includes(["inside", "outside"], join(params)) ? { listStylePosition: params[0] } : themePropertyFallback("listStyleType")(params, context, id),
    rounded: (params, context, id) => corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id),
    "transition-none": { transitionProperty: "none" },
    transition: (params, { theme: theme2 }) => ({
      transitionProperty: theme2("transitionProperty", params),
      transitionTimingFunction: theme2("transitionTimingFunction", ""),
      transitionDuration: theme2("transitionDuration", "")
    }),
    container: (params, { theme: theme2 }) => {
      const { screens = theme2("screens"), center, padding: padding2 } = theme2("container");
      const paddingFor = (screen) => (_ = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
        paddingRight: _,
        paddingLeft: _
      } : {};
      return Object.keys(screens).reduce((rules2, screen) => {
        if (($$1 = screens[screen]) && typeof $$1 == "string") {
          rules2[buildMediaQuery($$1)] = {
            "&": {
              "max-width": $$1,
              ...paddingFor(screen)
            }
          };
        }
        return rules2;
      }, {
        width: "100%",
        ...center ? { marginRight: "auto", marginLeft: "auto" } : {},
        ...paddingFor("xs")
      });
    },
    filter,
    blur: filter,
    brightness: filter,
    contrast: filter,
    grayscale: filter,
    "hue-rotate": filter,
    invert: filter,
    saturate: filter,
    sepia: filter,
    "drop-shadow": filter,
    backdrop: filter
  };

  // src/twind/preflight.ts
  var createPreflight = (theme2) => ({
    ":root": { tabSize: 4 },
    "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" },
    button: { backgroundColor: "transparent", backgroundImage: "none" },
    'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" },
    "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] },
    "fieldset,ol,ul,legend": { padding: "0" },
    "ol,ul": { listStyle: "none" },
    html: {
      lineHeight: "1.5",
      WebkitTextSizeAdjust: "100%",
      fontFamily: theme2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
    },
    body: { fontFamily: "inherit", lineHeight: "inherit" },
    "*,::before,::after": {
      boxSizing: "border-box",
      border: `0 solid ${theme2("borderColor.DEFAULT", "currentColor")}`
    },
    hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
    img: { borderStyle: "solid" },
    textarea: { resize: "vertical" },
    "input::placeholder,textarea::placeholder": {
      opacity: "1",
      color: theme2("placeholderColor.DEFAULT", theme2("colors.gray.400", "#a1a1aa"))
    },
    'button,[role="button"]': { cursor: "pointer" },
    table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" },
    "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" },
    a: { color: "inherit", textDecoration: "inherit" },
    "button,input,optgroup,select,textarea": {
      fontFamily: "inherit",
      fontSize: "100%",
      margin: "0",
      padding: "0",
      lineHeight: "inherit",
      color: "inherit"
    },
    "button,select": { textTransform: "none" },
    "::-moz-focus-inner": { borderStyle: "none", padding: "0" },
    ":-moz-focusring": { outline: "1px dotted ButtonText" },
    ":-moz-ui-invalid": { boxShadow: "none" },
    progress: { verticalAlign: "baseline" },
    "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" },
    '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
    "::-webkit-search-decoration": { WebkitAppearance: "none" },
    "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" },
    summary: { display: "list-item" },
    "abbr[title]": { textDecoration: "underline dotted" },
    "b,strong": { fontWeight: "bolder" },
    "pre,code,kbd,samp": {
      fontFamily: theme2("fontFamily", "mono", "ui-monospace,monospace"),
      fontSize: "1em"
    },
    "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" },
    sub: { bottom: "-0.25em" },
    sup: { top: "-0.5em" },
    "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" },
    "img,video": { maxWidth: "100%", height: "auto" }
  });

  // src/twind/variants.ts
  var coreVariants = {
    dark: "@media (prefers-color-scheme:dark)",
    sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
    "motion-reduce": "@media (prefers-reduced-motion:reduce)",
    "motion-safe": "@media (prefers-reduced-motion:no-preference)",
    first: "&:first-child",
    last: "&:last-child",
    even: "&:nth-child(2n)",
    odd: "&:nth-child(odd)",
    children: "&>*",
    siblings: "&~*",
    sibling: "&+*",
    override: "&&"
  };

  // src/internal/dom.ts
  var STYLE_ELEMENT_ID = "__twind";
  var getStyleElement = (nonce) => {
    let element = self[STYLE_ELEMENT_ID];
    if (!element) {
      element = document.head.appendChild(document.createElement("style"));
      element.id = STYLE_ELEMENT_ID;
      nonce && (element.nonce = nonce);
      element.appendChild(document.createTextNode(""));
    }
    return element;
  };

  // src/twind/sheets.ts
  var cssomSheet = ({
    nonce,
    target = getStyleElement(nonce).sheet
  } = {}) => {
    const offset = target.cssRules.length;
    return {
      target,
      insert: (rule, index) => target.insertRule(rule, offset + index)
    };
  };
  var voidSheet = () => ({
    target: null,
    insert: noop
  });

  // src/twind/modes.ts
  var mode = (report) => ({
    unknown(section, key = [], optional, context) {
      if (!optional) {
        this.report({ id: "UNKNOWN_THEME_VALUE", key: section + "." + join(key) }, context);
      }
    },
    report({ id, ...info }) {
      return report(`[${id}] ${JSON.stringify(info)}`);
    }
  });
  var warn = /* @__PURE__ */ mode((message) => console.warn(message));
  var strict = /* @__PURE__ */ mode((message) => {
    throw new Error(message);
  });
  var silent = /* @__PURE__ */ mode(noop);
  var noprefix = (property2, value, important) => `${property2}:${value}${important ? " !important" : ""}`;
  var autoprefix = (property2, value, important) => {
    let cssText = "";
    const propertyAlias = r$1(property2);
    if (propertyAlias)
      cssText += `${noprefix(propertyAlias, value, important)};`;
    let flags = n$1(property2);
    if (flags & 1)
      cssText += `-webkit-${noprefix(property2, value, important)};`;
    if (flags & 2)
      cssText += `-moz-${noprefix(property2, value, important)};`;
    if (flags & 4)
      cssText += `-ms-${noprefix(property2, value, important)};`;
    flags = t$1(property2, value);
    if (flags & 1)
      cssText += `${noprefix(property2, `-webkit-${value}`, important)};`;
    if (flags & 2)
      cssText += `${noprefix(property2, `-moz-${value}`, important)};`;
    if (flags & 4)
      cssText += `${noprefix(property2, `-ms-${value}`, important)};`;
    cssText += noprefix(property2, value, important);
    return cssText;
  };

  // src/twind/theme.ts
  var ratios = (start, end) => {
    const result = {};
    do {
      for (let dividend = 1; dividend < start; dividend++) {
        result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
      }
    } while (++start <= end);
    return result;
  };
  var exponential = (stop, unit, start = 0) => {
    const result = {};
    for (; start <= stop; start = start * 2 || 1) {
      result[start] = start + unit;
    }
    return result;
  };
  var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1, result = {}) => {
    for (; start <= stop; start += step) {
      result[start] = start / divideBy + unit;
    }
    return result;
  };
  var alias2 = (section) => (theme2) => theme2(section);
  var defaultTheme = {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
      },
      yellow: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
      },
      green: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
      },
      purple: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
      }
    },
    spacing: {
      px: "1px",
      0: "0px",
      .../* @__PURE__ */ linear(4, "rem", 4, 0.5, 0.5),
      .../* @__PURE__ */ linear(12, "rem", 4, 5),
      14: "3.5rem",
      .../* @__PURE__ */ linear(64, "rem", 4, 16, 4),
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    durations: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    backdropBlur: /* @__PURE__ */ alias2("blur"),
    backdropBrightness: /* @__PURE__ */ alias2("brightness"),
    backdropContrast: /* @__PURE__ */ alias2("contrast"),
    backdropGrayscale: /* @__PURE__ */ alias2("grayscale"),
    backdropHueRotate: /* @__PURE__ */ alias2("hueRotate"),
    backdropInvert: /* @__PURE__ */ alias2("invert"),
    backdropOpacity: /* @__PURE__ */ alias2("opacity"),
    backdropSaturate: /* @__PURE__ */ alias2("saturate"),
    backdropSepia: /* @__PURE__ */ alias2("sepia"),
    backgroundColor: /* @__PURE__ */ alias2("colors"),
    backgroundImage: {
      none: "none"
    },
    backgroundOpacity: /* @__PURE__ */ alias2("opacity"),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    brightness: {
      .../* @__PURE__ */ linear(200, "", 100, 0, 50),
      .../* @__PURE__ */ linear(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25"
    },
    borderColor: (theme2) => ({
      ...theme2("colors"),
      DEFAULT: theme2("colors.gray.200", "currentColor")
    }),
    borderOpacity: /* @__PURE__ */ alias2("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "1/2": "50%",
      full: "9999px"
    },
    borderWidth: {
      DEFAULT: "1px",
      .../* @__PURE__ */ exponential(8, "px")
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none"
    },
    contrast: {
      .../* @__PURE__ */ linear(200, "", 100, 0, 50),
      75: "0.75",
      125: "1.25"
    },
    divideColor: /* @__PURE__ */ alias2("borderColor"),
    divideOpacity: /* @__PURE__ */ alias2("borderOpacity"),
    divideWidth: /* @__PURE__ */ alias2("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgba(0,0,0,0.05)",
      DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
      md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
      lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
      xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
      "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
      none: "0 0 #0000"
    },
    fill: { current: "currentColor" },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    fontFamily: {
      sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
      serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
      mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridAutoColumns: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridAutoRows: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gridRow: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gap: /* @__PURE__ */ alias2("spacing"),
    gradientColorStops: /* @__PURE__ */ alias2("colors"),
    height: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 6),
      full: "100%",
      screen: "100vh"
    }),
    inset: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 4),
      full: "100%"
    }),
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)"
        },
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "0%": {
          transform: "scale(1)",
          opacity: "1"
        },
        "75%,100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "0%,100%": {
          opacity: "1"
        },
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      .../* @__PURE__ */ linear(10, "rem", 4, 3)
    },
    margin: (theme2) => ({
      auto: "auto",
      ...theme2("spacing")
    }),
    maxHeight: (theme2) => ({
      ...theme2("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    maxWidth: (theme2, { breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme2("screens"))
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content"
    },
    opacity: {
      .../* @__PURE__ */ linear(100, "", 100, 0, 10),
      5: "0.05",
      25: "0.25",
      75: "0.75",
      95: "0.95"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      .../* @__PURE__ */ linear(12, "", 1, 1)
    },
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"]
    },
    padding: /* @__PURE__ */ alias2("spacing"),
    placeholderColor: /* @__PURE__ */ alias2("colors"),
    placeholderOpacity: /* @__PURE__ */ alias2("opacity"),
    ringColor: (theme2) => ({
      DEFAULT: theme2("colors.blue.500", "#3b82f6"),
      ...theme2("colors")
    }),
    ringOffsetColor: /* @__PURE__ */ alias2("colors"),
    ringOffsetWidth: /* @__PURE__ */ exponential(8, "px"),
    ringOpacity: (theme2) => ({
      DEFAULT: "0.5",
      ...theme2("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      .../* @__PURE__ */ exponential(8, "px")
    },
    rotate: {
      .../* @__PURE__ */ exponential(2, "deg"),
      .../* @__PURE__ */ exponential(12, "deg", 3),
      .../* @__PURE__ */ exponential(180, "deg", 45)
    },
    saturate: /* @__PURE__ */ linear(200, "", 100, 0, 50),
    scale: {
      .../* @__PURE__ */ linear(150, "", 100, 0, 50),
      .../* @__PURE__ */ linear(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25"
    },
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      .../* @__PURE__ */ exponential(2, "deg"),
      .../* @__PURE__ */ exponential(12, "deg", 3)
    },
    space: /* @__PURE__ */ alias2("spacing"),
    stroke: {
      current: "currentColor"
    },
    strokeWidth: /* @__PURE__ */ linear(2),
    textColor: /* @__PURE__ */ alias2("colors"),
    textOpacity: /* @__PURE__ */ alias2("opacity"),
    transitionDuration: (theme2) => ({
      DEFAULT: "150ms",
      ...theme2("durations")
    }),
    transitionDelay: /* @__PURE__ */ alias2("durations"),
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
      colors: "background-color,border-color,color,fill,stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
      linear: "linear",
      in: "cubic-bezier(0.4,0,1,1)",
      out: "cubic-bezier(0,0,0.2,1)",
      "in-out": "cubic-bezier(0.4,0,0.2,1)"
    },
    translate: (theme2) => ({
      ...theme2("spacing"),
      ...ratios(2, 4),
      full: "100%"
    }),
    width: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 6),
      ...ratios(12, 12),
      screen: "100vw",
      full: "100%",
      min: "min-content",
      max: "max-content"
    }),
    zIndex: {
      auto: "auto",
      .../* @__PURE__ */ linear(50, "", 1, 0, 10)
    }
  };
  var flattenColorPalette = (colors, target = {}, prefix = []) => {
    Object.keys(colors).forEach((property2) => {
      const value = colors[property2];
      if (property2 == "DEFAULT") {
        target[join(prefix)] = value;
        target[join(prefix, ".")] = value;
      }
      const key = [...prefix, property2];
      target[join(key)] = value;
      target[join(key, ".")] = value;
      if (value && typeof value == "object") {
        flattenColorPalette(value, target, key);
      }
    }, target);
    return target;
  };
  var resolveContext = {
    negative: () => ({}),
    breakpoints: (screens) => Object.keys(screens).filter((key) => typeof screens[key] == "string").reduce((target, key) => {
      target["screen-" + key] = screens[key];
      return target;
    }, {})
  };
  var handleArbitraryValues = (section, key) => (key = key[0] == "[" && key.slice(-1) == "]" && key.slice(1, -1)) && includes(section, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(key) && (includes(key, "calc(") ? key.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : key);
  var makeThemeResolver = (config) => {
    const cache = new Map();
    const theme2 = { ...defaultTheme, ...config };
    const deref = (theme3, section) => {
      const base = theme3 && theme3[section];
      const value = typeof base == "function" ? base(resolve, resolveContext) : base;
      return value && section == "colors" ? flattenColorPalette(value) : value;
    };
    const resolve = (section, key, defaultValue) => {
      const keypath = section.split(".");
      section = keypath[0];
      if (keypath.length > 1) {
        defaultValue = key;
        key = join(tail(keypath), ".");
      }
      let base = cache.get(section);
      if (!base) {
        cache.set(section, base = { ...deref(theme2, section) });
        Object.assign(base, deref(theme2.extend, section));
      }
      if (key != null) {
        key = (Array.isArray(key) ? join(key) : key) || "DEFAULT";
        const value = handleArbitraryValues(section, key) || base[key];
        return value == null ? defaultValue : Array.isArray(value) && !includes(["fontSize", "outline", "dropShadow"], section) ? join(value, ",") : value;
      }
      return base;
    };
    return resolve;
  };

  // src/twind/translate.ts
  var translate = (plugins, context) => (rule, isTranslating) => {
    if (typeof rule.d == "function") {
      return rule.d(context);
    }
    const parameters = rule.d.split(/-(?![^[]*])/g);
    if (!isTranslating && parameters[0] == "tw" && rule.$ == rule.d) {
      return rule.$;
    }
    for (let index = parameters.length; index; index--) {
      const id = join(parameters.slice(0, index));
      const plugin = plugins[id];
      if (plugin) {
        return typeof plugin == "function" ? plugin(tail(parameters, index), context, id) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
      }
    }
  };

  // src/twind/decorate.ts
  var _2;
  var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
  var NOT_PREFIX_RE = /^(:not)-(.+)/;
  var prepareVariantSelector = (variant) => variant[1] == "[" ? tail(variant) : variant;
  var decorate = (darkMode, variants, { theme: theme2, tag }) => {
    const applyVariant = (translation, variant) => {
      if (_2 = theme2("screens", tail(variant), "")) {
        return { [buildMediaQuery(_2)]: translation };
      }
      if (variant == ":dark" && darkMode == "class") {
        return { ".dark &": translation };
      }
      if (_2 = GROUP_RE.exec(variant)) {
        return { [`.${escape(tag(_2[1]))}:${_2[2]} &`]: translation };
      }
      return {
        [variants[tail(variant)] || "&" + variant.replace(NOT_PREFIX_RE, (_4, not, variant2) => not + "(" + prepareVariantSelector(":" + variant2) + ")")]: translation
      };
    };
    return (translation, rule) => rule.v.reduceRight(applyVariant, translation);
  };

  // src/twind/presedence.ts
  var _3;
  var responsivePrecedence = (css) => (((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
  var seperatorPrecedence = (string) => {
    _3 = 0;
    for (let index = string.length; index--;) {
      _3 += includes("-:,", string[index]);
    }
    return _3;
  };
  var atRulePresedence = (css) => (seperatorPrecedence(css) & 15) << 18;
  var PRECEDENCES_BY_PSEUDO_CLASS = [
    "rst",
    "st",
    "en",
    "d",
    "nk",
    "sited",
    "pty",
    "ecked",
    "cus-w",
    "ver",
    "cus",
    "cus-v",
    "tive",
    "sable",
    "ad-on",
    "tiona",
    "quire"
  ];
  var pseudoPrecedence = (pseudoClass) => 1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
  var makeVariantPresedenceCalculator = (theme2, variants) => (presedence, variant) => presedence | ((_3 = theme2("screens", tail(variant), "")) ? 1 << 27 | responsivePrecedence(buildMediaQuery(_3)) : variant == ":dark" ? 1 << 30 : (_3 = variants[variant] || variant.replace(NOT_PREFIX_RE, ":$2"))[0] == "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
  var declarationPropertyPrecedence = (property2) => property2[0] == "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;

  // src/twind/serialize.ts
  var stringifyBlock = (body, selector) => selector + "{" + body + "}";
  var serialize = (prefix, variants, context) => {
    const { theme: theme2, tag } = context;
    const tagVar = (_4, property2) => "--" + tag(property2);
    const tagVars = (value) => `${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
    const stringifyDeclaration = (property2, value, important) => {
      property2 = tagVars(property2);
      return Array.isArray(value) ? join(value.filter(Boolean).map((value2) => prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
    };
    let rules2;
    const stringify3 = (atRules, selector, presedence, css, important) => {
      if (Array.isArray(css)) {
        css.forEach((css2) => css2 && stringify3(atRules, selector, presedence, css2, important));
        return;
      }
      let declarations = "";
      let maxPropertyPresedence = 0;
      let numberOfDeclarations = 0;
      if (css["@apply"]) {
        css = merge(evalThunk(apply(css["@apply"]), context), { ...css, "@apply": void 0 }, context);
      }
      Object.keys(css).forEach((key) => {
        const value = evalThunk(css[key], context);
        if (isCSSProperty(key, value)) {
          if (value !== "" && key.length > 1) {
            const property2 = hyphenate$1(key);
            numberOfDeclarations += 1;
            maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
            declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
          }
        } else if (value) {
          if (key == ":global") {
            key = "@global";
          }
          if (key[0] == "@") {
            if (key[1] == "g") {
              stringify3([], "", 0, value, important);
            } else if (key[1] == "f") {
              stringify3([], key, 0, value, important);
            } else if (key[1] == "k") {
              const currentSize = rules2.length;
              stringify3([], "", 0, value, important);
              const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
              rules2.push({
                r: stringifyBlock(join(waypoints.map((p) => p.r), ""), key),
                p: waypoints.reduce((sum, p) => sum + p.p, 0)
              });
            } else if (key[1] == "i") {
              (Array.isArray(value) ? value : [value]).forEach((value2) => value2 && rules2.push({ p: 0, r: `${key} ${value2};` }));
            } else {
              if (key[2] == "c") {
                key = buildMediaQuery(context.theme("screens", tail(key, 8).trim()));
              }
              stringify3([...atRules, key], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
            }
          } else {
            stringify3(atRules, selector ? join(selector.split(/,(?![^[]*])/g).map((selectorPart) => join(key.split(/,(?![^[]*])/g).map((keyPart) => includes(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart), ",")), ",") : key, presedence, value, important);
          }
        }
      });
      if (numberOfDeclarations) {
        rules2.push({
          r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
          p: presedence * (1 << 8) + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
        });
      }
    };
    const variantPresedence = makeVariantPresedenceCalculator(theme2, variants);
    return (css, className, rule, layer = 0) => {
      layer <<= 28;
      rules2 = [];
      stringify3([], className ? "." + escape(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css, rule && rule.i);
      return rules2;
    };
  };

  // src/twind/inject.ts
  var inject = (sheet, mode2, init, context) => {
    let sortedPrecedences;
    init((value = []) => sortedPrecedences = value);
    let insertedRules;
    init((value = new Set()) => insertedRules = value);
    return ({ r: css, p: presedence }) => {
      if (!insertedRules.has(css)) {
        insertedRules.add(css);
        const index = sortedInsertionIndex(sortedPrecedences, presedence);
        try {
          sheet.insert(css, index);
          sortedPrecedences.splice(index, 0, presedence);
        } catch (error) {
          if (!/:-[mwo]/.test(css)) {
            mode2.report({ id: "INJECT_CSS_ERROR", css, error }, context);
          }
        }
      }
    };
  };

  // src/twind/configure.ts
  var sanitize = (value, defaultValue, disabled, enabled = defaultValue) => value === false ? disabled : value === true ? enabled : value || defaultValue;
  var loadMode = (mode2) => (typeof mode2 == "string" ? { t: strict, a: warn, i: silent }[mode2[1]] : mode2) || warn;
  var stringifyVariant = (selector, variant) => selector + (variant[1] == ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
  var stringify2 = (rule, directive2 = rule.d) => typeof directive2 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.i ? "!" : "") + (rule.n ? "-" : "") + directive2;
  var COMPONENT_PROPS = { _: { value: "", writable: true } };
  var configure = (config = {}) => {
    const theme2 = makeThemeResolver(config.theme);
    const mode2 = loadMode(config.mode);
    const hash = sanitize(config.hash, false, false, cyrb32);
    const important = config.important;
    let activeRule = { v: [] };
    let translateDepth = 0;
    const lastTranslations = [];
    const context = {
      tw: (...tokens) => process(tokens),
      theme: (section, key, defaultValue) => {
        var _a;
        const value = (_a = theme2(section, key, defaultValue)) != null ? _a : mode2.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
        return activeRule.n && value && includes("rg", (typeof value)[5]) ? `calc(${value} * -1)` : value;
      },
      tag: (value) => hash ? hash(value) : value,
      css: (rules2) => {
        translateDepth++;
        const lastTranslationsIndex = lastTranslations.length;
        try {
          (typeof rules2 == "string" ? parse([rules2]) : rules2).forEach(convert);
          const css = Object.create(null, COMPONENT_PROPS);
          for (let index = lastTranslationsIndex; index < lastTranslations.length; index++) {
            const translation = lastTranslations[index];
            if (translation) {
              switch (typeof translation) {
                case "object":
                  merge(css, translation, context);
                  break;
                case "string":
                  css._ += (css._ && " ") + translation;
              }
            }
          }
          return css;
        } finally {
          lastTranslations.length = lastTranslationsIndex;
          translateDepth--;
        }
      }
    };
    const translate2 = translate({ ...corePlugins, ...config.plugins }, context);
    const doTranslate = (rule) => {
      const parentRule = activeRule;
      activeRule = rule;
      try {
        return evalThunk(translate2(rule), context);
      } finally {
        activeRule = parentRule;
      }
    };
    const variants = { ...coreVariants, ...config.variants };
    const decorate2 = decorate(config.darkMode || "media", variants, context);
    const serialize2 = serialize(sanitize(config.prefix, autoprefix, noprefix), variants, context);
    const sheet = config.sheet || (typeof window == "undefined" ? voidSheet() : cssomSheet(config));
    const { init = (callback) => callback() } = sheet;
    const inject2 = inject(sheet, mode2, init, context);
    let idToClassName;
    init((value = new Map()) => idToClassName = value);
    const inlineDirectiveName = new WeakMap();
    const evaluateFunctions = (key, value) => key == "_" ? void 0 : typeof value == "function" ? JSON.stringify(evalThunk(value, context), evaluateFunctions) : value;
    const convert = (rule) => {
      if (!translateDepth && activeRule.v.length) {
        rule = { ...rule, v: [...activeRule.v, ...rule.v], $: "" };
      }
      if (!rule.$) {
        rule.$ = stringify2(rule, inlineDirectiveName.get(rule.d));
      }
      let className = translateDepth ? null : idToClassName.get(rule.$);
      if (className == null) {
        let translation = doTranslate(rule);
        if (!rule.$) {
          rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
          inlineDirectiveName.set(rule.d, rule.$);
          rule.$ = stringify2(rule, rule.$);
        }
        if (translation && typeof translation == "object") {
          rule.v = rule.v.map(prepareVariantSelector);
          if (important)
            rule.i = important;
          translation = decorate2(translation, rule);
          if (translateDepth) {
            lastTranslations.push(translation);
          } else {
            const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
            className = hash || typeof rule.d == "function" ? (hash || cyrb32)(layer + rule.$) : rule.$;
            serialize2(translation, className, rule, layer).forEach(inject2);
            if (translation._) {
              className += " " + translation._;
            }
          }
        } else {
          if (typeof translation == "string") {
            className = translation;
          } else {
            className = rule.$;
            mode2.report({ id: "UNKNOWN_DIRECTIVE", rule: className }, context);
          }
          if (translateDepth && typeof rule.d !== "function") {
            lastTranslations.push(className);
          }
        }
        if (!translateDepth) {
          idToClassName.set(rule.$, className);
          ensureMaxSize(idToClassName, 3e4);
        }
      }
      return className;
    };
    const process = (tokens) => join(parse(tokens).map(convert).filter(Boolean), " ");
    const preflight = sanitize(config.preflight, identity, false);
    if (preflight) {
      const css = createPreflight(theme2);
      const styles = serialize2(typeof preflight == "function" ? evalThunk(preflight(css, context), context) || css : { ...css, ...preflight });
      init((injected = (styles.forEach(inject2), true)) => injected);
    }
    return {
      init: () => mode2.report({ id: "LATE_SETUP_CALL" }, context),
      process
    };
  };

  // src/twind/instance.ts
  var create = (config) => {
    let process = (tokens) => {
      init();
      return process(tokens);
    };
    let init = (config2) => {
      ({ process, init } = configure(config2));
    };
    if (config)
      init(config);
    let context;
    const fromContext = (key) => () => {
      if (!context) {
        process([
          (_4) => {
            context = _4;
            return "";
          }
        ]);
      }
      return context[key];
    };
    return {
      tw: Object.defineProperties((...tokens) => process(tokens), {
        theme: {
          get: fromContext("theme")
        }
      }),
      setup: (config2) => init(config2)
    };
  };

  // src/twind/default.ts
  var { tw, setup } = /* @__PURE__ */ create();

  var _class$1, _temp$1;

  var _templateObject = _taggedTemplateLiteralLoose(['bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'], ['bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded']);

  function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var sheet = cssomSheet({ target: new CSSStyleSheet() });

  var _create = create({ sheet: sheet }),
    tw$1 = _create.tw;

  define('twind-button', (_temp$1 = _class$1 = function (_WeElement) {
    _inherits$2(_class, _WeElement);

    function _class() {
      _classCallCheck$2(this, _class);

      return _possibleConstructorReturn$2(this, _WeElement.apply(this, arguments));
    }

    _class.prototype.render = function render$$1() {
      return Omi.h(
        'button',
        { 'class': tw$1(_templateObject) },
        'twind button'
      );
    };

    return _class;
  }(WeElement), _class$1.css = sheet.target, _temp$1));

}());
//# sourceMappingURL=b.js.map
