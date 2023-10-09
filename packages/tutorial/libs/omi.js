!function () {
  'use strict';
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
    for (var i in props) obj[i] = props[i];
    return obj;
  }
  function applyRef(ref, value) {
    if (null != ref) if ('function' == typeof ref) ref(value); else ref.current = value;
  }
  function isArray(obj) {
    return '[object Array]' === Object.prototype.toString.call(obj);
  }
  function pathToArr(path) {
    if ('string' != typeof path || !path) return []; else return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
  }
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
  function h(nodeName, attributes) {
    var lastSimple, child, simple, i, children = [];
    if (attributes) attributes.ignoreAttrs = !0; else attributes = {
      ignoreAttrs: !0
    };
    for (i = arguments.length; i-- > 2;) stack.push(arguments[i]);
    if (null != attributes.children) {
      if (!stack.length) stack.push(attributes.children);
      delete attributes.children;
    }
    while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--;) stack.push(child[i]); else {
      if ('boolean' == typeof child) child = null;
      if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
      if (simple && lastSimple) children[children.length - 1] += child; else if (0 === children.length) children = [child]; else children.push(child);
      lastSimple = simple;
    }
    if (nodeName === Fragment) return children;
    var p = {
      nodeName: nodeName,
      children: children,
      attributes: attributes,
      key: attributes.key
    };
    if (void 0 !== options.vnode) options.vnode(p);
    return p;
  }
  function isSameNodeType(node, vnode, hydrating) {
    if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
    if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else if ('function' == typeof vnode.nodeName) return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
    return hydrating || node._componentConstructor === vnode.nodeName;
  }
  function isNamedNode(node, nodeName) {
    return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
  }
  function extend$1(name, handler) {
    extension['o-' + name] = handler;
  }
  function set(origin, path, value) {
    var arr = pathToArr(path);
    var current = origin;
    for (var i = 0, len = arr.length; i < len; i++) if (i === len - 1) current[arr[i]] = value; else current = current[arr[i]];
  }
  function get(origin, path) {
    var arr = pathToArr(path);
    var current = origin;
    for (var i = 0, len = arr.length; i < len; i++) current = current[arr[i]];
    return current;
  }
  function eventProxy(e) {
    return this.__l[e.type](e);
  }
  function bind(el, type, handler) {
    el.__l = el.__l || {};
    el.__l[type] = handler;
    el.addEventListener(type, eventProxy);
  }
  function unbind(el, type) {
    el.removeEventListener(type, eventProxy);
  }
  function createNode(nodeName, isSvg, options$$1) {
    var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName, options$$1);
    node.normalizedNodeName = nodeName;
    return node;
  }
  function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode) parentNode.removeChild(node);
  }
  function setAccessor(node, name, old, value, isSvg, component) {
    if ('className' === name) name = 'class';
    if ('o' == name[0] && '-' == name[1]) {
      if (extension[name]) extension[name](node, value, component);
    } else if ('key' === name || 'ignoreAttrs' === name); else if ('ref' === name) {
      applyRef(old, null);
      applyRef(value, node);
    } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
      if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
      if (value && 'object' == typeof value) {
        if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
        for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
      }
    } else if ('unsafeHTML' === name) {
      if (value) node.innerHTML = value.html || value || '';
    } else if ('dangerouslySetInnerHTML' === name) {
      if (value) node.innerHTML = value.__html || '';
    } else if ('o' == name[0] && 'n' == name[1]) bindEvent(node, name, value, old); else if ('INPUT' === node.nodeName && 'value' === name) node[name] = null == value ? '' : value; else if ('list' !== name && 'type' !== name && 'css' !== name && !isSvg && name in node && '' !== value) {
      try {
        node[name] = null == value ? '' : value;
      } catch (e) { }
      if ((null == value || !1 === value) && 'spellcheck' != name) node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
    } else {
      var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
      if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.pureSetAttribute ? node.pureSetAttribute(name, value) : node.setAttribute(name, value);
    }
  }
  function eventProxy$1(e) {
    return this.__l[e.type](options.event && options.event(e) || e);
  }
  function bindEvent(node, name, value, old) {
    var useCapture = name !== (name = name.replace(/Capture$/, ''));
    var nameLower = name.toLowerCase();
    name = (DOM_EVENT_MAP[nameLower] || nameLower in node ? nameLower : name).slice(2);
    if (value) {
      if (!old) node.addEventListener(name, eventProxy$1, useCapture);
    } else node.removeEventListener(name, eventProxy$1, useCapture);
    (node.__l || (node.__l = {}))[name] = value;
  }
  function diff(dom, vnode, parent, component, updateSelf) {
    if (dom || vnode) {
      var ret;
      if (!diffLevel++) {
        isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
        hydrating = null != dom && !('prevProps' in dom);
      }
      if (vnode && vnode.nodeName === Fragment) vnode = vnode.children;
      if (isArray(vnode)) if (parent) innerDiffNode(parent, vnode, hydrating, component, updateSelf); else {
        ret = [];
        vnode.forEach(function (item, index) {
          var ele = idiff(0 === index ? dom : null, item, component, updateSelf);
          ret.push(ele);
        });
      } else {
        if (isArray(dom)) dom.forEach(function (one, index) {
          if (0 === index) ret = idiff(one, vnode, component, updateSelf); else recollectNodeTree(one, !1);
        }); else ret = idiff(dom, vnode, component, updateSelf);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
      }
      if (!--diffLevel) hydrating = !1;
      return ret;
    }
  }
  function idiff(dom, vnode, component, updateSelf) {
    if (dom && vnode && dom.props) dom.props.children = vnode.children;
    var out = dom, prevSvgMode = isSvgMode, prevForeignObject = isForeignObject;
    if (null == vnode || 'boolean' == typeof vnode) vnode = '';
    if ('string' == typeof vnode || 'number' == typeof vnode) {
      if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || component)) {
        if (dom.nodeValue != vnode) dom.nodeValue = vnode;
      } else {
        out = document.createTextNode(vnode);
        if (dom) {
          if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
          recollectNodeTree(dom, !0);
        }
      }
      out.prevProps = !0;
      return out;
    }
    var vnodeName = vnode.nodeName;
    if ('function' == typeof vnodeName) for (var key in options.mapping) if (options.mapping[key] === vnodeName) {
      vnodeName = key;
      vnode.nodeName = key;
      break;
    }
    isForeignObject = 'foreignObject' === vnodeName;
    isSvgMode = 'svg' === vnodeName ? !0 : isForeignObject ? !1 : isSvgMode;
    vnodeName = String(vnodeName);
    if (!dom || !isNamedNode(dom, vnodeName)) {
      out = createNode(vnodeName, isForeignObject || isSvgMode);
      if (dom) {
        while (dom.firstChild) out.appendChild(dom.firstChild);
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
        recollectNodeTree(dom, !0);
      }
    }
    var fc = out.firstChild, props = out.prevProps, vchildren = vnode.children;
    if (null == props) {
      props = out.prevProps = {};
      for (var a = out.attributes, i = a.length; i--;) props[a[i].name] = a[i].value;
    }
    if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
      if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
    } else if (vchildren && vchildren.length || null != fc) if ('WeElement' != out.constructor.is || !out.constructor.noSlot) innerDiffNode(out, vchildren, hydrating || null != props.unsafeHTML || null != props.dangerouslySetInnerHTML, component, updateSelf);
    diffAttributes(out, vnode.attributes, props, component, updateSelf);
    if (out.props) out.props.children = vnode.children;
    isSvgMode = prevSvgMode;
    isForeignObject = prevForeignObject;
    return out;
  }
  function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
    var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
    if (0 !== len) for (var i = 0; i < len; i++) {
      var _child = originalChildren[i], props = _child.prevProps, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
      if (null != key) {
        keyedLen++;
        keyed[key] = _child;
      } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
    }
    if (0 !== vlen) for (var i = 0; i < vlen; i++) {
      vchild = vchildren[i];
      child = null;
      if (vchild) {
        var key = vchild.key;
        if (null != key) {
          if (keyedLen && void 0 !== keyed[key]) {
            child = keyed[key];
            keyed[key] = void 0;
            keyedLen--;
          }
        } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
          child = c;
          children[j] = void 0;
          if (j === childrenLen - 1) childrenLen--;
          if (j === min) min++;
          break;
        }
      }
      child = idiff(child, vchild, component, updateSelf);
      f = originalChildren[i];
      if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
    }
    if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
    while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
  }
  function recollectNodeTree(node, unmountOnly) {
    if (null != node.prevProps && node.prevProps.ref) if ('function' == typeof node.prevProps.ref) node.prevProps.ref(null); else if (node.prevProps.ref.current) node.prevProps.ref.current = null;
    if (!1 === unmountOnly || null == node.prevProps) removeNode(node);
    removeChildren(node);
  }
  function removeChildren(node) {
    node = node.lastChild;
    while (node) {
      var next = node.previousSibling;
      recollectNodeTree(node, !0);
      node = next;
    }
  }
  function diffAttributes(dom, attrs, old, component, updateSelf) {
    var name;
    var isWeElement = dom.update;
    var oldClone;
    if (dom.receiveProps) oldClone = Object.assign({}, old);
    for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) {
      setAccessor(dom, name, old[name], old[name] = void 0, isForeignObject || isSvgMode, component);
      if (isWeElement) delete dom.props[name];
    }
    for (name in attrs) if (isWeElement && 'object' == typeof attrs[name] && 'ref' !== name) {
      if ('style' === name) setAccessor(dom, name, old[name], old[name] = attrs[name], isForeignObject || isSvgMode, component);
      var ccName = camelCase(name);
      dom.props[ccName] = old[ccName] = attrs[name];
    } else if (!('children' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) {
      setAccessor(dom, name, old[name], attrs[name], isForeignObject || isSvgMode, component);
      if (-1 !== dom.nodeName.indexOf('-')) {
        dom.props = dom.props || {};
        var _ccName = camelCase(name);
        dom.props[_ccName] = old[_ccName] = attrs[name];
      } else old[name] = attrs[name];
    }
    if (isWeElement && !updateSelf && dom.parentNode) if (!1 !== dom.receiveProps(dom.props, oldClone)) dom.update();
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && ("object" == typeof call || "function" == typeof call) ? call : self;
  }
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  function render(vnode, parent, store) {
    parent = 'string' == typeof parent ? document.querySelector(parent) : parent;
    if (store) parent.store = store;
    return diff(null, vnode, parent, !1);
  }
  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn$1(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && ("object" == typeof call || "function" == typeof call) ? call : self;
  }
  function _inherits$1(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  function define(name, ctor, config) {
    if (!customElements.get(name)) if (!options.mapping[name]) if ('WeElement' === ctor.is) {
      customElements.define(name, ctor);
      options.mapping[name] = ctor;
    } else {
      if ('string' == typeof config) config = {
        css: config
      }; else config = config || {};
      var Ele = function (_WeElement) {
        function Ele() {
          var _temp, _this, _ret;
          _classCallCheck$1(this, Ele);
          for (var _len = arguments.length, args = Array(_len), key = 0; key < _len; key++) args[key] = arguments[key];
          return _ret = (_temp = _this = _possibleConstructorReturn$1(this, _WeElement.call.apply(_WeElement, [this].concat(args))),
            _this.compute = config.compute, _temp), _possibleConstructorReturn$1(_this, _ret);
        }
        _inherits$1(Ele, _WeElement);
        Ele.prototype.render = function () {
          return ctor.call(this, this);
        };
        return Ele;
      }(WeElement);
      Ele.css = config.css;
      Ele.propTypes = config.propTypes;
      Ele.defaultProps = config.defaultProps;
      Ele.isLightDOM = config.isLightDOM;
      for (var key in config) !function (key) {
        if ('function' == typeof config[key]) Ele.prototype[key] = function () {
          return config[key].apply(this, arguments);
        };
      }(key);
      storeHelpers.forEach(function (func) {
        if (config[func] && 'function' !== config[func]) Ele.prototype[func] = function () {
          return config[func];
        };
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
  function classNames() {
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg) {
        var argType = typeof arg;
        if ('string' === argType || 'number' === argType) classes.push(arg); else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) classes.push(inner);
        } else if ('object' === argType) for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
      }
    }
    return classes.join(' ');
  }
  function extractClass() {
    var _Array$prototype$slic = Array.prototype.slice.call(arguments, 0), props = _Array$prototype$slic[0], args = _Array$prototype$slic.slice(1);
    if (props.class) {
      args.unshift(props.class);
      delete props.class;
    } else if (props.className) {
      args.unshift(props.className);
      delete props.className;
    }
    if (args.length > 0) return {
      class: classNames.apply(null, args)
    };
  }
  function o(obj) {
    return JSON.stringify(obj);
  }
  function createRef() {
    return {};
  }
  var options = {
    store: null,
    root: function () {
      if ('object' != typeof global || !global || global.Math !== Math || global.Array !== Array) return self || window || global || function () {
        return this;
      }(); else return global;
    }(),
    mapping: {}
  };
  !function () {
    if (void 0 !== window.Reflect && void 0 !== window.customElements && !window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
      var BuiltInHTMLElement = HTMLElement;
      window.HTMLElement = function () {
        return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
      };
      HTMLElement.prototype = BuiltInHTMLElement.prototype;
      HTMLElement.prototype.constructor = HTMLElement;
      Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
    }
  }();
  'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
  var hyphenateRE = /\B([A-Z])/g;
  var stack = [];
  var DOM_EVENT_MAP = {
    onanimationcancel: 1,
    oncompositionend: 1,
    oncompositionstart: 1,
    oncompositionupdate: 1,
    onfocusin: 1,
    onfocusout: 1,
    onscrollend: 1,
    ontouchcancel: 1,
    ontouchend: 1,
    ontouchmove: 1,
    ontouchstart: 1
  };
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
  var extension = {};
  var diffLevel = 0;
  var isSvgMode = !1;
  var isForeignObject = !1;
  var hydrating = !1;
  !function (self) {
    function isObject(x) {
      return Object(x) === x;
    }
    if (!self.WeakMap) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var hasDefine = Object.defineProperty && function () {
        try {
          return 1 === Object.defineProperty({}, 'x', {
            value: 1
          }).x;
        } catch (e) { }
      }();
      var defineProperty = function (object, name, value) {
        if (hasDefine); else object[name] = value;
      };
      self.WeakMap = function () {
        function WeakMap() {
          if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
          defineProperty(this, '_id', genId('_WeakMap'));
          if (arguments.length > 0) throw new TypeError('WeakMap iterable is not supported');
        }
        function checkInstance(x, methodName) {
          if (!isObject(x) || !hasOwnProperty.call(x, '_id')) throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
        }
        function genId(prefix) {
          return prefix + '_' + rand() + '.' + rand();
        }
        function rand() {
          return Math.random().toString().substring(2);
        }
        defineProperty(WeakMap.prototype, 'delete', function (key) {
          checkInstance(this, 'delete');
          if (!isObject(key)) return !1;
          var entry = key[this.s];
          if (entry && entry[0] === key) {
            delete key[this.s];
            return !0;
          }
          return !1;
        });
        defineProperty(WeakMap.prototype, 'get', function (key) {
          checkInstance(this, 'get');
          if (isObject(key)) {
            var entry = key[this.s];
            if (entry && entry[0] === key) return entry[1]; else return;
          }
        });
        defineProperty(WeakMap.prototype, 'has', function (key) {
          checkInstance(this, 'has');
          if (!isObject(key)) return !1;
          var entry = key[this.s];
          if (entry && entry[0] === key) return !0; else return !1;
        });
        defineProperty(WeakMap.prototype, 'set', function (key, value) {
          checkInstance(this, 'set');
          if (!isObject(key)) throw new TypeError('Invalid value used as weak map key');
          var entry = key[this.s];
          if (entry && entry[0] === key) {
            entry[1] = value;
            return this;
          }
          defineProperty(key, this.s, [key, value]);
          return this;
        });
        defineProperty(WeakMap, '_polyfill', !0);
        return WeakMap;
      }();
    }
  }('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : void 0);
  var id = 0;
  var adoptedStyleSheetsMap = new WeakMap();
  var WeElement = function (_HTMLElement) {
    function WeElement() {
      _classCallCheck(this, WeElement);
      var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));
      _this.props = Object.assign({}, _this.constructor.defaultProps, _this.props);
      _this.elementId = id++;
      _this.computed = {};
      _this.isInstalled = !1;
      return _this;
    }
    _inherits(WeElement, _HTMLElement);
    WeElement.prototype.connectedCallback = function () {
      var _this2 = this;
      var p = this.parentNode;
      while (p && !this.store) {
        this.store = p.store;
        p = p.parentNode || p.host;
      }
      if (this.inject) {
        this.injection = {};
        p = this.parentNode;
        var provide;
        while (p && !provide) {
          provide = p.provide;
          p = p.parentNode || p.host;
        }
        if (provide) this.inject.forEach(function (injectKey) {
          _this2.injection[injectKey] = provide[injectKey];
        });
      }
      this.attrsToProps();
      this.beforeInstall();
      this.install();
      this.afterInstall();
      var shadowRoot;
      if (this.constructor.isLightDOM) shadowRoot = this; else if (!this.shadowRoot) shadowRoot = this.attachShadow({
        mode: 'open'
      }); else {
        shadowRoot = this.shadowRoot;
        var fc;
        while (fc = shadowRoot.firstChild) shadowRoot.removeChild(fc);
      }
      if (!adoptedStyleSheetsMap.has(this.constructor)) {
        var css = this.constructor.css;
        if (css) {
          var styleSheets = [];
          if ('string' == typeof css) styleSheets = [createStyleSheet(css)]; else if (isArray(css)) styleSheets = css.map(function (styleSheet) {
            if ('string' == typeof styleSheet) return createStyleSheet(styleSheet); else if (styleSheet.default && 'string' == typeof styleSheet.default) return createStyleSheet(styleSheet.default); else return styleSheet;
          }); else if (css.default && 'string' == typeof css.default) styleSheets = [createStyleSheet(css.default)]; else styleSheets = [css];
          shadowRoot.adoptedStyleSheets = styleSheets;
          adoptedStyleSheetsMap.set(this.constructor, styleSheets);
        }
      } else shadowRoot.adoptedStyleSheets = adoptedStyleSheetsMap.get(this.constructor);
      this.beforeRender();
      options.afterInstall && options.afterInstall(this);
      var rendered = this.render(this.props, this.store);
      this.rootElement = diff(null, rendered, null, this);
      this.rendered();
      if (this.css) shadowRoot.appendChild(cssToDom('function' == typeof this.css ? this.css() : this.css));
      if (this.props.css) {
        this.N = cssToDom(this.props.css);
        this.O = this.props.css;
        shadowRoot.appendChild(this.N);
      }
      if (isArray(this.rootElement)) this.rootElement.forEach(function (item) {
        shadowRoot.appendChild(item);
      }); else this.rootElement && shadowRoot.appendChild(this.rootElement);
      this.installed();
      this.isInstalled = !0;
    };
    WeElement.prototype.disconnectedCallback = function () {
      this.uninstall();
      this.isInstalled = !1;
    };
    WeElement.prototype.update = function (updateSelf) {
      this.J = !0;
      this.beforeUpdate();
      this.beforeRender();
      if (this.O != this.props.css) {
        this.O = this.props.css;
        if (this.N) this.N.textContent = this.O; else {
          this.N = cssToDom(this.props.css);
          this.shadowRoot.appendChild(this.N);
        }
      }
      this.attrsToProps();
      var rendered = this.render(this.props, this.store);
      this.rendered();
      this.rootElement = diff(this.rootElement, rendered, this.constructor.isLightDOM ? this : this.shadowRoot, this, updateSelf);
      this.J = !1;
      this.updated();
    };
    WeElement.prototype.updateProps = function (obj) {
      var _this3 = this;
      Object.keys(obj).forEach(function (key) {
        _this3.props[key] = obj[key];
        if (_this3.prevProps) _this3.prevProps[key] = obj[key];
      });
      this.update();
    };
    WeElement.prototype.updateSelf = function () {
      this.update(!0);
    };
    WeElement.prototype.removeAttribute = function (key) {
      _HTMLElement.prototype.removeAttribute.call(this, key);
      this.isInstalled && this.update();
    };
    WeElement.prototype.setAttribute = function (key, val) {
      if (val && 'object' == typeof val) _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val)); else _HTMLElement.prototype.setAttribute.call(this, key, val);
      this.isInstalled && this.update();
    };
    WeElement.prototype.pureRemoveAttribute = function (key) {
      _HTMLElement.prototype.removeAttribute.call(this, key);
    };
    WeElement.prototype.pureSetAttribute = function (key, val) {
      _HTMLElement.prototype.setAttribute.call(this, key, val);
    };
    WeElement.prototype.attrsToProps = function () {
      if (!this.props.ignoreAttrs) {
        var ele = this;
        ele.props.css = ele.getAttribute('css');
        var attrs = this.constructor.propTypes;
        if (attrs) Object.keys(attrs).forEach(function (key) {
          var types = isArray(attrs[key]) ? attrs[key] : [attrs[key]];
          var val = ele.getAttribute(hyphenate(key));
          if (null !== val) for (var i = 0; i < types.length; i++) {
            var type = types[i];
            var matched = !1;
            switch (type) {
              case String:
                ele.props[key] = val;
                matched = !0;
                break;

              case Number:
                ele.props[key] = Number(val);
                matched = !0;
                break;

              case Boolean:
                if ('false' === val || '0' === val) ele.props[key] = !1; else ele.props[key] = !0;
                matched = !0;
                break;

              case Array:
              case Object:
                if (':' === val[0]) ele.props[key] = getValByPath(val.substr(1), Omi.$); else try {
                  ele.props[key] = JSON.parse(val);
                } catch (e) {
                  console.warn('The ' + key + ' object prop does not comply with the JSON specification, the incorrect string is [' + val + '].');
                }
                matched = !0;
            }
            if (matched) break;
          } else if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) ele.props[key] = ele.constructor.defaultProps[key]; else ele.props[key] = null;
        });
      }
    };
    WeElement.prototype.fire = function (name, data) {
      var handler = this.props['on' + capitalize(name)];
      if (handler) handler(new CustomEvent(name, {
        detail: data
      })); else this.dispatchEvent(new CustomEvent(name, {
        detail: data
      }));
    };
    WeElement.prototype.beforeInstall = function () { };
    WeElement.prototype.install = function () { };
    WeElement.prototype.afterInstall = function () { };
    WeElement.prototype.installed = function () { };
    WeElement.prototype.uninstall = function () { };
    WeElement.prototype.beforeUpdate = function () { };
    WeElement.prototype.updated = function () { };
    WeElement.prototype.beforeRender = function () { };
    WeElement.prototype.rendered = function () { };
    WeElement.prototype.receiveProps = function () { };
    return WeElement;
  }(HTMLElement);
  WeElement.is = 'WeElement';
  var storeHelpers = ['use', 'useSelf'];
  var hasOwn = {}.hasOwnProperty;
  !function () {
    function rejectImports(contents) {
      var _contents = contents.replace(importPattern, '');
      if (_contents !== contents) console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
      return _contents.trim();
    }
    function clearRules(sheet) {
      for (var i = 0; i < sheet.cssRules.length; i++) sheet.deleteRule(0);
    }
    function insertAllRules(from, to) {
      forEach.call(from.cssRules, function (rule, i) {
        to.insertRule(rule.cssText, i);
      });
    }
    function isElementConnected(element) {
      return 'isConnected' in element ? element.isConnected : document.contains(element);
    }
    function unique(arr) {
      return arr.filter(function (value, index) {
        return arr.indexOf(value) === index;
      });
    }
    function diff(arr1, arr2) {
      return arr1.filter(function (value) {
        return -1 === arr2.indexOf(value);
      });
    }
    function removeNode(node) {
      node.parentNode.removeChild(node);
    }
    function getShadowRoot(element) {
      return element.shadowRoot || closedShadowRootRegistry.get(element);
    }
    function isCSSStyleSheetInstance(instance) {
      return 'object' == typeof instance ? proto$2.isPrototypeOf(instance) || nonConstructedProto.isPrototypeOf(instance) : !1;
    }
    function isNonConstructedStyleSheetInstance(instance) {
      return 'object' == typeof instance ? nonConstructedProto.isPrototypeOf(instance) : !1;
    }
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
      $locations.set(sheet, $locations.get(sheet).filter(function (_location) {
        return _location !== location;
      }));
    }
    function restyleAdopter(sheet, adopter) {
      requestAnimationFrame(function () {
        clearRules(adopter.sheet);
        insertAllRules($basicStyleSheet.get(sheet), adopter.sheet);
      });
    }
    function checkInvocationCorrectness(self) {
      if (!$basicStyleSheet.has(self)) throw new TypeError('Illegal invocation');
    }
    function ConstructedStyleSheet() {
      var self = this;
      var style = document.createElement('style');
      bootstrapper.body.appendChild(style);
      $basicStyleSheet.set(self, style.sheet);
      $locations.set(self, []);
      $adoptersByLocation.set(self, new WeakMap());
    }
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
        configurable: !0,
        enumerable: !0,
        get: function () {
          return getAssociatedLocation(this).sheets;
        },
        set: function (sheets) {
          getAssociatedLocation(this).update(sheets);
        }
      });
    }
    function traverseWebComponents(node, callback) {
      var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function (foundNode) {
        return getShadowRoot(foundNode) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }, null, !1);
      for (var next = void 0; next = iter.nextNode();) callback(getShadowRoot(next));
    }
    function isExistingAdopter(self, element) {
      return element instanceof HTMLStyleElement && $uniqueSheets.get(self).some(function (sheet) {
        return getAdopterByLocation(sheet, self);
      });
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
        if (document) mutations.forEach(function (mutation) {
          if (!hasShadyCss) forEach.call(mutation.addedNodes, function (node) {
            if (node instanceof Element) traverseWebComponents(node, function (root) {
              getAssociatedLocation(root).connect();
            });
          });
          forEach.call(mutation.removedNodes, function (node) {
            if (node instanceof Element) {
              if (isExistingAdopter(self, node)) adopt(self);
              if (!hasShadyCss) traverseWebComponents(node, function (root) {
                getAssociatedLocation(root).disconnect();
              });
            }
          });
        }); else observer.disconnect();
      }));
    }
    if (!('undefined' == typeof document || 'adoptedStyleSheets' in document)) {
      var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
      var bootstrapper = document.implementation.createHTMLDocument('boot');
      var closedShadowRootRegistry = new WeakMap();
      var _DOMException = 'object' == typeof DOMException ? Error : DOMException;
      var defineProperty = Object.defineProperty;
      var forEach = Array.prototype.forEach;
      var importPattern = /@import.+?;?$/gm;
      var cssStyleSheetMethods = ['addImport', 'addPageRule', 'addRule', 'deleteRule', 'insertRule', 'removeImport', 'removeRule'];
      var NonConstructedStyleSheet = CSSStyleSheet;
      var nonConstructedProto = NonConstructedStyleSheet.prototype;
      nonConstructedProto.replace = function () {
        return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
      };
      nonConstructedProto.replaceSync = function () {
        throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
      };
      var $basicStyleSheet = new WeakMap();
      var $locations = new WeakMap();
      var $adoptersByLocation = new WeakMap();
      var proto$2 = ConstructedStyleSheet.prototype;
      proto$2.replace = function (contents) {
        try {
          this.replaceSync(contents);
          return Promise.resolve(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      proto$2.replaceSync = function (contents) {
        checkInvocationCorrectness(this);
        if ('string' == typeof contents) {
          var self_1 = this;
          var style = $basicStyleSheet.get(self_1).ownerNode;
          style.textContent = rejectImports(contents);
          $basicStyleSheet.set(self_1, style.sheet);
          $locations.get(self_1).forEach(function (location) {
            if (location.isConnected()) restyleAdopter(self_1, getAdopterByLocation(self_1, location));
          });
        }
      };
      defineProperty(proto$2, 'cssRules', {
        configurable: !0,
        enumerable: !0,
        get: function () {
          checkInvocationCorrectness(this);
          return $basicStyleSheet.get(this).cssRules;
        }
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
        configurable: !0,
        value: isCSSStyleSheetInstance
      });
      var defaultObserverOptions = {
        childList: !0,
        subtree: !0
      };
      var locations = new WeakMap();
      var $element = new WeakMap();
      var $uniqueSheets = new WeakMap();
      var $observer = new WeakMap();
      var proto$1 = Location.prototype;
      proto$1.isConnected = function () {
        var element = $element.get(this);
        return element instanceof Document ? 'loading' !== element.readyState : isElementConnected(element.host);
      };
      proto$1.connect = function () {
        var container = getAdopterContainer(this);
        $observer.get(this).observe(container, defaultObserverOptions);
        if ($uniqueSheets.get(this).length > 0) adopt(this);
        traverseWebComponents(container, function (root) {
          getAssociatedLocation(root).connect();
        });
      };
      proto$1.disconnect = function () {
        $observer.get(this).disconnect();
      };
      proto$1.update = function (sheets) {
        var self = this;
        var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
        if (!Array.isArray(sheets)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
        if (!sheets.every(isCSSStyleSheetInstance)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
        if (sheets.some(isNonConstructedStyleSheetInstance)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
        self.sheets = sheets;
        var oldUniqueSheets = $uniqueSheets.get(self);
        var uniqueSheets = unique(sheets);
        var removedSheets = diff(oldUniqueSheets, uniqueSheets);
        removedSheets.forEach(function (sheet) {
          removeNode(getAdopterByLocation(sheet, self));
          removeAdopterLocation(sheet, self);
        });
        $uniqueSheets.set(self, uniqueSheets);
        if (self.isConnected() && uniqueSheets.length > 0) adopt(self);
      };
      window.CSSStyleSheet = ConstructedStyleSheet;
      attachAdoptedStyleSheetProperty(Document);
      if ('ShadowRoot' in window) {
        attachAdoptedStyleSheetProperty(ShadowRoot);
        var proto = Element.prototype;
        var attach_1 = proto.attachShadow;
        proto.attachShadow = function (init) {
          var root = attach_1.call(this, init);
          if ('closed' === init.mode) closedShadowRootRegistry.set(this, root);
          return root;
        };
      }
      var documentLocation = getAssociatedLocation(document);
      if (documentLocation.isConnected()) documentLocation.connect(); else document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
    }
  }();
  h.f = Fragment;
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
  options.root.Omi.version = '6.25.23';
  if ('undefined' != typeof module) module.exports = omi; else self.Omi = omi;
}();
//# sourceMappingURL=omi.js.map
