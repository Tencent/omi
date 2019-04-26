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
   *	@public
   *	@namespace options {Object}
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
    if (typeof vnode.type === 'string') {
      return !node._componentConstructor && isNamedNode(node, vnode.type);
    } else if (typeof vnode.type === 'function') {
      return options.mapping[node.nodeName.toLowerCase()] === vnode.type;
    }
    return hydrating || node._componentConstructor === vnode.type;
  }

  /**
   * Check if an Element has a given type, case-insensitively.
   *
   * @param {Element} node	A DOM Element to inspect the name of.
   * @param {String} type	Unnormalized name to compare against.
   */
  function isNamedNode(node, type) {
    return node.normalizedNodeName === type || node.nodeName.toLowerCase() === type.toLowerCase();
  }

  /**
   * Create an element with the given type.
   * @param {string} type The DOM node to create
   * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
   *  namespace.
   * @returns {Element} The created DOM node
   */
  function createNode(type, isSvg) {
    /** @type {Element} */
    var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', type) : document.createElement(type);
    node.normalizedNodeName = type;
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
        if (ns) {
          node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
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

  var l,n,u,i,t,r={},e=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function o(l,n){for(var u in n)l[u]=n[u];return l}function c(l){var n=l.parentNode;n&&n.removeChild(l);}function s(l,n,u){var i,t,r,e,f=arguments;if(null==n&&(n={}), arguments.length>3)for(u=[u], i=3;i<arguments.length;i++)u.push(f[i]);if(null!=u&&(n.children=u), null!=l&&null!=l.defaultProps)for(t in l.defaultProps)void 0===n[t]&&(n[t]=l.defaultProps[t]);return(r=n.ref)&&delete n.ref, (e=n.key)&&delete n.key, a(l,n,null,e,r)}function a(n,u,i,t,r){var e={type:n,props:u,text:i,key:t,ref:r,__k:null,__e:null,l:null,__c:null};return l.vnode&&l.vnode(e), e}function v(){}function y(l){if(null==l||"boolean"==typeof l)return null;if("string"==typeof l||"number"==typeof l)return a(null,null,l,null,null);if(Array.isArray(l))return s(v,null,l);if(null!=l.__e){var n=a(l.type,l.props,l.text,l.key,null);return n.__e=l.__e, n}return l}function p(l,n){this.props=l, this.context=n;}function d(i){!i.__d&&(i.__d=!0)&&1===n.push(i)&&(l.debounceRendering||u)(m);}function m(){var l;for(n.sort(function(l,n){return n.__b-l.__b});l=n.pop();)l.__d&&l.forceUpdate(!1);}function w(l,n,u,i,t,f,o,s,a){var h,p,d,m,w,k,b,x,A,C,N=n.__k||g(n.props.children,n.__k=[],y,!0),T=null!=u&&u!=r&&u.__k||e,$=T.length;if(a==r)if(a=null, null!=f){for(p=0;p<f.length;p++)if(null!=f[p]){a=f[p];break}}else for(p=0;p<$;p++)if(T[p]&&T[p].__e){a=T[p].__e;break}for(p=0;p<N.length;p++){if(h=N[p]=y(N[p]), k=w=null, m=T[p], null!=h)if(null===m||null!=m&&(null==h.key&&null==m.key?h.type===m.type:h.key===m.key))w=p;else for(d=0;d<$;d++)if(null!=(m=T[d])&&(null==h.key&&null==m.key?h.type===m.type:h.key===m.key)){w=d;break}if(null!=w&&(k=T[w], T[w]=void 0), x=null!=a&&a.nextSibling, b=_(null==k?null:k.__e,l,h,k,i,t,f,o,s,null,a), null!=h&&null!=b){if(C=document.activeElement, null!=h.l)b=h.l;else if(f==k||b!=a||null==b.parentNode)l:if(null==a||a.parentNode!==l)l.appendChild(b);else{for(A=a, d=0;(A=A.nextSibling)&&d++<$/2;)if(A===b)break l;l.insertBefore(b,a);}C!==document.activeElement&&C.focus(), a=null!=b?b.nextSibling:x;}}if(null!=f&&n.type!==v)for(p=f.length;p--;)null!=f[p]&&c(f[p]);for(p=$;p--;)null!=T[p]&&P(T[p],s);}function g(l,n,u,i){if(null==n&&(n=[]), null==l||"boolean"==typeof l)i&&n.push(null);else if(Array.isArray(l))for(var t=0;t<l.length;t++)g(l[t],n,u,i);else n.push(u?u(l):l);return n}function k(l,n,u,i){var t,r;for(t in n)"children"===t||"key"===t||u&&("value"===t||"checked"===t?l:u)[t]===n[t]||b(l,t,n[t],u[t],i);for(r in u)"children"===r||"key"===r||n&&r in n||b(l,r,null,u[r],i);}function b(l,n,u,t,r){var e,o,c,s,a,h;if("class"!==n&&"className"!==n||(n=r?"class":"className"), "style"===n)if(o=l.style, "string"==typeof u)o.cssText=u;else{if("string"==typeof t)o.cssText="";else for(c in t)null!=u&&c in u||o.setProperty(c.replace(i,"-"),"");for(s in u)e=u[s], null!=t&&e===t[s]||o.setProperty(s.replace(i,"-"),"number"==typeof e&&!1===f.test(s)?e+"px":e);}else{if("dangerouslySetInnerHTML"===n)return;"o"===n[0]&&"n"===n[1]?(a=n!==(n=n.replace(/Capture$/,"")), h=n.toLowerCase(), n=(h in l?h:n).substring(2), u?t||l.addEventListener(n,x,a):l.removeEventListener(n,x,a), (l.u||(l.u={}))[n]=u):"list"!==n&&"tagName"!==n&&!r&&n in l?l[n]=null==u?"":u:null==u||!1===u?n!==(n=n.replace(/^xlink:?/,""))?l.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):l.removeAttribute(n):"function"!=typeof u&&(n!==(n=n.replace(/^xlink:?/,""))?l.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),u):l.setAttribute(n,u));}}function x(n){return this.u[n.type](l.event?l.event(n):n)}function _(n,u,i,t,e,f,c,s,a,h,d){var m,g,k,b,x,A,j,z,D,H,I,L,M,O;if(null==t||null==i||t.type!==i.type||t.key!==i.key){if(null!=t&&P(t,a), null==i)return null;n=null, t=r;}l.diff&&l.diff(i), k=!1, j=i.type;try{l:if(t.type===v||j===v)w(u,i,t,e,f,c,s,m,d), n=null, i.__k.length&&null!=i.__k[0]&&(n=i.__k[0].__e, i.l=(g=i.__k[i.__k.length-1]).l||g.__e);else if("function"==typeof j){if(H=(D=j.contextType)&&e[D.__c], I=null!=D?H?H.props.value:D.__p:e, t.__c?(z=(m=i.__c=t.__c).__p, n=i.__e=t.__e):(j.prototype&&j.prototype.render?i.__c=m=new j(i.props,I):(i.__c=m=new p(i.props,I), m.constructor=j, m.render=T), m.__a=a, H&&H.sub(m), m.props=i.props, m.state||(m.state={}), m.context=I, m.__n=e, k=m.__d=!0, m.__h=[]), m.__v=i, L=m.__s||m.state, null!=j.getDerivedStateFromProps&&(x=o({},m.state), L===m.state&&(L=m.__s=o({},L)), o(L,j.getDerivedStateFromProps(i.props,L))), k)null==j.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(), null!=m.componentDidMount&&s.push(m);else{if(null==j.getDerivedStateFromProps&&null==h&&null!=m.componentWillReceiveProps&&(m.componentWillReceiveProps(i.props,I), L=m.__s||m.state), !h&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(i.props,L,I)){n=i.__e, m.props=i.props, m.state=L, m.__d=!1, i.l=t.l;break l}null!=m.componentWillUpdate&&m.componentWillUpdate(i.props,L,I);}b=m.props, x||(x=m.state), m.context=I, m.props=i.props, m.state=L, l.render&&l.render(i), M=m.__t||null, O=m.__t=y(m.render(m.props,m.state,m.context)), m.__d=!1, null!=m.getChildContext&&(e=o(o({},e),m.getChildContext())), k||null==m.getSnapshotBeforeUpdate||(A=m.getSnapshotBeforeUpdate(b,x)), m.__b=a?(a.__b||0)+1:0, m.base=n=_(n,u,O,M,e,f,c,s,m,null,d), null!=O&&(i.l=O.l), m.__P=u, i.ref&&N(i.ref,m,a);}else n=C(n,i,t,e,f,c,s,a), i.ref&&t.ref!==i.ref&&N(i.ref,n,a);if(i.__e=n, null!=m){for(;g=m.__h.pop();)g.call(m);k||null==b||null==m.componentDidUpdate||m.componentDidUpdate(b,x,A);}z&&(m.__p=null), l.diffed&&l.diffed(i);}catch(l){$(l,a);}return n}function A(n,u){for(var i;i=n.pop();)try{i.componentDidMount();}catch(l){$(l,i.__a);}l.commit&&l.commit(u);}function C(l,n,u,i,t,f,o,c){var s,a,h,v,y,p,d,m,g=l;if(t="svg"===n.type||t, null==l&&null!=f)for(s=0;s<f.length;s++)if(null!=(a=f[s])&&(null===n.type?3===a.nodeType:a.localName===n.type)){l=a, f[s]=null;break}if(null==l&&(l=null===n.type?document.createTextNode(n.text):t?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type), f=null), n.__e=l, null===n.type)null!==g&&l!==g||n.text===u.text||(l.data=n.text);else if(null!=f&&null!=l.childNodes&&(f=e.slice.call(l.childNodes)), n!==u){if(v=n.props, null==(h=u.props)&&(h={}, null!=f))for(p=0;p<l.attributes.length;p++)h["class"==(y=l.attributes[p].name)&&v.className?"className":y]=l.attributes[p].value;d=h.dangerouslySetInnerHTML, ((m=v.dangerouslySetInnerHTML)||d)&&(m&&d&&m.__html==d.__html||(l.innerHTML=m&&m.__html||"")), v.multiple&&(l.multiple=v.multiple), w(l,n,u,i,"foreignObject"!==n.type&&t,f,o,c,r), k(l,v,h,t);}return l}function N(l,n,u){try{"function"==typeof l?l(n):l.current=n;}catch(l){$(l,u);}}function P(n,u,i){var t,r,e;if(l.unmount&&l.unmount(n), (t=n.ref)&&N(t,null,u), i||null!=n.l||(i=null!=(r=n.__e)), n.__e=n.l=null, null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){$(l,u);}t.base=t.__P=null, (t=t.__t)&&P(t,u,i);}else if(t=n.__k)for(e=0;e<t.length;e++)t[e]&&P(t[e],u,i);null!=r&&c(r);}function T(l,n,u){return this.constructor(l,u)}function $(l,n){for(;n;n=n.__a)if(!n.__p)try{if(null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(l));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(l);}return d(n.__p=n)}catch(n){l=n;}throw l}function j(n,u){var i,t;l.root&&l.root(n,u), i=u.__t, n=s(v,null,[n]), t=[], w(u,u.__t=n,i,r,void 0!==u.ownerSVGElement,i?null:e.slice.call(u.childNodes),t,n,r), A(t,n);}function D(l,n){return n=o(o({},l.props),n), arguments.length>2&&(n.children=e.slice.call(arguments,2)), a(l.type,n,null,n.key||l.key,n.ref||l.ref)}l={}, p.prototype.setState=function(l,n){var u=this.__s!==this.state&&this.__s||(this.__s=o({},this.state));("function"!=typeof l||(l=l(u,this.props)))&&o(u,l), null!=l&&this.__v&&(n&&this.__h.push(n), d(this));}, p.prototype.forceUpdate=function(l){var n,u=this.__v,i=this.__v.__e,t=this.__P;t&&(null!=(i=_(i,t,u,u,this.__n,void 0!==t.ownerSVGElement,null,n=[],this.__a,!1!==l,i))&&i.parentNode!==t&&t.appendChild(i), A(n,u)), l&&l();}, p.prototype.render=v, n=[], u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout, i=/-?(?=[A-Z])/g, t=0;//# sourceMappingURL=preact.module.js.map

  function morphAttrs(fromNode, toNode) {
      var attrs = toNode.attributes;
      var i;
      var attr;
      var attrName;
      var attrNamespaceURI;
      var attrValue;
      var fromValue;

      // update attributes on original DOM element
      for (i = attrs.length - 1; i >= 0; --i) {
          attr = attrs[i];
          attrName = attr.name;
          attrNamespaceURI = attr.namespaceURI;
          attrValue = attr.value;

          if (attrNamespaceURI) {
              attrName = attr.localName || attrName;
              fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

              if (fromValue !== attrValue) {
                  fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
              }
          } else {
              fromValue = fromNode.getAttribute(attrName);

              if (fromValue !== attrValue) {
                  fromNode.setAttribute(attrName, attrValue);
              }
          }
      }

      // Remove any extra attributes found on the original DOM element that
      // weren't found on the target element.
      attrs = fromNode.attributes;

      for (i = attrs.length - 1; i >= 0; --i) {
          attr = attrs[i];
          if (attr.specified !== false) {
              attrName = attr.name;
              attrNamespaceURI = attr.namespaceURI;

              if (attrNamespaceURI) {
                  attrName = attr.localName || attrName;

                  if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                      fromNode.removeAttributeNS(attrNamespaceURI, attrName);
                  }
              } else {
                  if (!toNode.hasAttribute(attrName)) {
                      fromNode.removeAttribute(attrName);
                  }
              }
          }
      }
  }

  var range; // Create a range object for efficently rendering strings to elements.
  var NS_XHTML = 'http://www.w3.org/1999/xhtml';

  var doc = typeof document === 'undefined' ? undefined : document;

  /**
   * This is about the same
   * var html = new DOMParser().parseFromString(str, 'text/html');
   * return html.body.firstChild;
   *
   * @method toElement
   * @param {String} str
   */
  function toElement(str) {
      if (!range && doc.createRange) {
          range = doc.createRange();
          range.selectNode(doc.body);
      }

      var fragment;
      if (range && range.createContextualFragment) {
          fragment = range.createContextualFragment(str);
      } else {
          fragment = doc.createElement('body');
          fragment.innerHTML = str;
      }
      return fragment.childNodes[0];
  }

  /**
   * Returns true if two node's names are the same.
   *
   * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
   *       nodeName and different namespace URIs.
   *
   * @param {Element} a
   * @param {Element} b The target element
   * @return {boolean}
   */
  function compareNodeNames(fromEl, toEl) {
      var fromNodeName = fromEl.nodeName;
      var toNodeName = toEl.nodeName;

      if (fromNodeName === toNodeName) {
          return true;
      }

      if (toEl.actualize &&
          fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
          toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
          // If the target element is a virtual DOM node then we may need to normalize the tag name
          // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
          // are converted to upper case
          return fromNodeName === toNodeName.toUpperCase();
      } else {
          return false;
      }
  }

  /**
   * Create an element, optionally with a known namespace URI.
   *
   * @param {string} name the element name, e.g. 'div' or 'svg'
   * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
   * its `xmlns` attribute or its inferred namespace.
   *
   * @return {Element}
   */
  function createElementNS(name, namespaceURI) {
      return !namespaceURI || namespaceURI === NS_XHTML ?
          doc.createElement(name) :
          doc.createElementNS(namespaceURI, name);
  }

  /**
   * Copies the children of one DOM element to another DOM element
   */
  function moveChildren(fromEl, toEl) {
      var curChild = fromEl.firstChild;
      while (curChild) {
          var nextChild = curChild.nextSibling;
          toEl.appendChild(curChild);
          curChild = nextChild;
      }
      return toEl;
  }

  function syncBooleanAttrProp(fromEl, toEl, name) {
      if (fromEl[name] !== toEl[name]) {
          fromEl[name] = toEl[name];
          if (fromEl[name]) {
              fromEl.setAttribute(name, '');
          } else {
              fromEl.removeAttribute(name);
          }
      }
  }

  var specialElHandlers = {
      OPTION: function(fromEl, toEl) {
          var parentNode = fromEl.parentNode;
          if (parentNode) {
              var parentName = parentNode.nodeName.toUpperCase();
              if (parentName === 'OPTGROUP') {
                  parentNode = parentNode.parentNode;
                  parentName = parentNode && parentNode.nodeName.toUpperCase();
              }
              if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
                  if (fromEl.hasAttribute('selected') && !toEl.selected) {
                      // Workaround for MS Edge bug where the 'selected' attribute can only be
                      // removed if set to a non-empty value:
                      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
                      fromEl.setAttribute('selected', 'selected');
                      fromEl.removeAttribute('selected');
                  }
                  // We have to reset select element's selectedIndex to -1, otherwise setting
                  // fromEl.selected using the syncBooleanAttrProp below has no effect.
                  // The correct selectedIndex will be set in the SELECT special handler below.
                  parentNode.selectedIndex = -1;
              }
          }
          syncBooleanAttrProp(fromEl, toEl, 'selected');
      },
      /**
       * The "value" attribute is special for the <input> element since it sets
       * the initial value. Changing the "value" attribute without changing the
       * "value" property will have no effect since it is only used to the set the
       * initial value.  Similar for the "checked" attribute, and "disabled".
       */
      INPUT: function(fromEl, toEl) {
          syncBooleanAttrProp(fromEl, toEl, 'checked');
          syncBooleanAttrProp(fromEl, toEl, 'disabled');

          if (fromEl.value !== toEl.value) {
              fromEl.value = toEl.value;
          }

          if (!toEl.hasAttribute('value')) {
              fromEl.removeAttribute('value');
          }
      },

      TEXTAREA: function(fromEl, toEl) {
          var newValue = toEl.value;
          if (fromEl.value !== newValue) {
              fromEl.value = newValue;
          }

          var firstChild = fromEl.firstChild;
          if (firstChild) {
              // Needed for IE. Apparently IE sets the placeholder as the
              // node value and vise versa. This ignores an empty update.
              var oldValue = firstChild.nodeValue;

              if (oldValue == newValue || (!newValue && oldValue == fromEl.placeholder)) {
                  return;
              }

              firstChild.nodeValue = newValue;
          }
      },
      SELECT: function(fromEl, toEl) {
          if (!toEl.hasAttribute('multiple')) {
              var selectedIndex = -1;
              var i = 0;
              // We have to loop through children of fromEl, not toEl since nodes can be moved
              // from toEl to fromEl directly when morphing.
              // At the time this special handler is invoked, all children have already been morphed
              // and appended to / removed from fromEl, so using fromEl here is safe and correct.
              var curChild = fromEl.firstChild;
              var optgroup;
              var nodeName;
              while(curChild) {
                  nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
                  if (nodeName === 'OPTGROUP') {
                      optgroup = curChild;
                      curChild = optgroup.firstChild;
                  } else {
                      if (nodeName === 'OPTION') {
                          if (curChild.hasAttribute('selected')) {
                              selectedIndex = i;
                              break;
                          }
                          i++;
                      }
                      curChild = curChild.nextSibling;
                      if (!curChild && optgroup) {
                          curChild = optgroup.nextSibling;
                          optgroup = null;
                      }
                  }
              }

              fromEl.selectedIndex = selectedIndex;
          }
      }
  };

  var ELEMENT_NODE = 1;
  var DOCUMENT_FRAGMENT_NODE = 11;
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;

  function noop() {}

  function defaultGetNodeKey(node) {
      return node.id;
  }

  function morphdomFactory(morphAttrs) {

      return function morphdom(fromNode, toNode, options) {
          if (!options) {
              options = {};
          }

          if (typeof toNode === 'string') {
              if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
                  var toNodeHtml = toNode;
                  toNode = doc.createElement('html');
                  toNode.innerHTML = toNodeHtml;
              } else {
                  toNode = toElement(toNode);
              }
          }

          var getNodeKey = options.getNodeKey || defaultGetNodeKey;
          var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
          var onNodeAdded = options.onNodeAdded || noop;
          var onBeforeElUpdated = options.onBeforeElUpdated || noop;
          var onElUpdated = options.onElUpdated || noop;
          var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
          var onNodeDiscarded = options.onNodeDiscarded || noop;
          var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
          var childrenOnly = options.childrenOnly === true;

          // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
          var fromNodesLookup = {};
          var keyedRemovalList;

          function addKeyedRemoval(key) {
              if (keyedRemovalList) {
                  keyedRemovalList.push(key);
              } else {
                  keyedRemovalList = [key];
              }
          }

          function walkDiscardedChildNodes(node, skipKeyedNodes) {
              if (node.nodeType === ELEMENT_NODE) {
                  var curChild = node.firstChild;
                  while (curChild) {

                      var key = undefined;

                      if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                          // If we are skipping keyed nodes then we add the key
                          // to a list so that it can be handled at the very end.
                          addKeyedRemoval(key);
                      } else {
                          // Only report the node as discarded if it is not keyed. We do this because
                          // at the end we loop through all keyed elements that were unmatched
                          // and then discard them in one final pass.
                          onNodeDiscarded(curChild);
                          if (curChild.firstChild) {
                              walkDiscardedChildNodes(curChild, skipKeyedNodes);
                          }
                      }

                      curChild = curChild.nextSibling;
                  }
              }
          }

          /**
           * Removes a DOM node out of the original DOM
           *
           * @param  {Node} node The node to remove
           * @param  {Node} parentNode The nodes parent
           * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
           * @return {undefined}
           */
          function removeNode(node, parentNode, skipKeyedNodes) {
              if (onBeforeNodeDiscarded(node) === false) {
                  return;
              }

              if (parentNode) {
                  parentNode.removeChild(node);
              }

              onNodeDiscarded(node);
              walkDiscardedChildNodes(node, skipKeyedNodes);
          }

          // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
          // function indexTree(root) {
          //     var treeWalker = document.createTreeWalker(
          //         root,
          //         NodeFilter.SHOW_ELEMENT);
          //
          //     var el;
          //     while((el = treeWalker.nextNode())) {
          //         var key = getNodeKey(el);
          //         if (key) {
          //             fromNodesLookup[key] = el;
          //         }
          //     }
          // }

          // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
          //
          // function indexTree(node) {
          //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
          //     var el;
          //     while((el = nodeIterator.nextNode())) {
          //         var key = getNodeKey(el);
          //         if (key) {
          //             fromNodesLookup[key] = el;
          //         }
          //     }
          // }

          function indexTree(node) {
              if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE) {
                  var curChild = node.firstChild;
                  while (curChild) {
                      var key = getNodeKey(curChild);
                      if (key) {
                          fromNodesLookup[key] = curChild;
                      }

                      // Walk recursively
                      indexTree(curChild);

                      curChild = curChild.nextSibling;
                  }
              }
          }

          indexTree(fromNode);

          function handleNodeAdded(el) {
              onNodeAdded(el);

              var curChild = el.firstChild;
              while (curChild) {
                  var nextSibling = curChild.nextSibling;

                  var key = getNodeKey(curChild);
                  if (key) {
                      var unmatchedFromEl = fromNodesLookup[key];
                      if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                          curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                          morphEl(unmatchedFromEl, curChild);
                      }
                  }

                  handleNodeAdded(curChild);
                  curChild = nextSibling;
              }
          }

          function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
              // We have processed all of the "to nodes". If curFromNodeChild is
              // non-null then we still have some from nodes left over that need
              // to be removed
              while (curFromNodeChild) {
                  var fromNextSibling = curFromNodeChild.nextSibling;
                  if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                      // Since the node is keyed it might be matched up later so we defer
                      // the actual removal to later
                      addKeyedRemoval(curFromNodeKey);
                  } else {
                      // NOTE: we skip nested keyed nodes from being removed since there is
                      //       still a chance they will be matched up later
                      removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                  }
                  curFromNodeChild = fromNextSibling;
              }
          }

          function morphEl(fromEl, toEl, childrenOnly) {
              var toElKey = getNodeKey(toEl);

              if (toElKey) {
                  // If an element with an ID is being morphed then it will be in the final
                  // DOM so clear it out of the saved elements collection
                  delete fromNodesLookup[toElKey];
              }

              if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
                  return;
              }

              if (!childrenOnly) {
                  // optional
                  if (onBeforeElUpdated(fromEl, toEl) === false) {
                      return;
                  }

                  // update attributes on original DOM element first
                  morphAttrs(fromEl, toEl);
                  // optional
                  onElUpdated(fromEl);

                  if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                      return;
                  }
              }
              if (fromEl.nodeName !== 'TEXTAREA') {
                morphChildren(fromEl, toEl);
              } else {
                specialElHandlers.TEXTAREA(fromEl, toEl);
              }
          }

          function morphChildren(fromEl, toEl) {
              var curToNodeChild = toEl.firstChild;
              var curFromNodeChild = fromEl.firstChild;
              var curToNodeKey;
              var curFromNodeKey;

              var fromNextSibling;
              var toNextSibling;
              var matchingFromEl;

              // walk the children
              outer: while (curToNodeChild) {
                  toNextSibling = curToNodeChild.nextSibling;
                  curToNodeKey = getNodeKey(curToNodeChild);

                  // walk the fromNode children all the way through
                  while (curFromNodeChild) {
                      fromNextSibling = curFromNodeChild.nextSibling;

                      if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                          curToNodeChild = toNextSibling;
                          curFromNodeChild = fromNextSibling;
                          continue outer;
                      }

                      curFromNodeKey = getNodeKey(curFromNodeChild);

                      var curFromNodeType = curFromNodeChild.nodeType;

                      // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
                      var isCompatible = undefined;

                      if (curFromNodeType === curToNodeChild.nodeType) {
                          if (curFromNodeType === ELEMENT_NODE) {
                              // Both nodes being compared are Element nodes

                              if (curToNodeKey) {
                                  // The target node has a key so we want to match it up with the correct element
                                  // in the original DOM tree
                                  if (curToNodeKey !== curFromNodeKey) {
                                      // The current element in the original DOM tree does not have a matching key so
                                      // let's check our lookup to see if there is a matching element in the original
                                      // DOM tree
                                      if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                          if (fromNextSibling === matchingFromEl) {
                                              // Special case for single element removals. To avoid removing the original
                                              // DOM node out of the tree (since that can break CSS transitions, etc.),
                                              // we will instead discard the current node and wait until the next
                                              // iteration to properly match up the keyed target element with its matching
                                              // element in the original tree
                                              isCompatible = false;
                                          } else {
                                              // We found a matching keyed element somewhere in the original DOM tree.
                                              // Let's move the original DOM node into the current position and morph
                                              // it.

                                              // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                              // the `removeNode()` function for the node that is being discarded so that
                                              // all lifecycle hooks are correctly invoked
                                              fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                              // fromNextSibling = curFromNodeChild.nextSibling;

                                              if (curFromNodeKey) {
                                                  // Since the node is keyed it might be matched up later so we defer
                                                  // the actual removal to later
                                                  addKeyedRemoval(curFromNodeKey);
                                              } else {
                                                  // NOTE: we skip nested keyed nodes from being removed since there is
                                                  //       still a chance they will be matched up later
                                                  removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                              }

                                              curFromNodeChild = matchingFromEl;
                                          }
                                      } else {
                                          // The nodes are not compatible since the "to" node has a key and there
                                          // is no matching keyed node in the source tree
                                          isCompatible = false;
                                      }
                                  }
                              } else if (curFromNodeKey) {
                                  // The original has a key
                                  isCompatible = false;
                              }

                              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                              if (isCompatible) {
                                  // We found compatible DOM elements so transform
                                  // the current "from" node to match the current
                                  // target DOM node.
                                  // MORPH
                                  morphEl(curFromNodeChild, curToNodeChild);
                              }

                          } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                              // Both nodes being compared are Text or Comment nodes
                              isCompatible = true;
                              // Simply update nodeValue on the original node to
                              // change the text value
                              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                                  curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                              }

                          }
                      }

                      if (isCompatible) {
                          // Advance both the "to" child and the "from" child since we found a match
                          // Nothing else to do as we already recursively called morphChildren above
                          curToNodeChild = toNextSibling;
                          curFromNodeChild = fromNextSibling;
                          continue outer;
                      }

                      // No compatible match so remove the old node from the DOM and continue trying to find a
                      // match in the original DOM. However, we only do this if the from node is not keyed
                      // since it is possible that a keyed node might match up with a node somewhere else in the
                      // target tree and we don't want to discard it just yet since it still might find a
                      // home in the final DOM tree. After everything is done we will remove any keyed nodes
                      // that didn't find a home
                      if (curFromNodeKey) {
                          // Since the node is keyed it might be matched up later so we defer
                          // the actual removal to later
                          addKeyedRemoval(curFromNodeKey);
                      } else {
                          // NOTE: we skip nested keyed nodes from being removed since there is
                          //       still a chance they will be matched up later
                          removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                      }

                      curFromNodeChild = fromNextSibling;
                  } // END: while(curFromNodeChild) {}

                  // If we got this far then we did not find a candidate match for
                  // our "to node" and we exhausted all of the children "from"
                  // nodes. Therefore, we will just append the current "to" node
                  // to the end
                  if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                      fromEl.appendChild(matchingFromEl);
                      // MORPH
                      morphEl(matchingFromEl, curToNodeChild);
                  } else {
                      var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                      if (onBeforeNodeAddedResult !== false) {
                          if (onBeforeNodeAddedResult) {
                              curToNodeChild = onBeforeNodeAddedResult;
                          }

                          if (curToNodeChild.actualize) {
                              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                          }
                          fromEl.appendChild(curToNodeChild);
                          handleNodeAdded(curToNodeChild);
                      }
                  }

                  curToNodeChild = toNextSibling;
                  curFromNodeChild = fromNextSibling;
              }

              cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);

              var specialElHandler = specialElHandlers[fromEl.nodeName];
              if (specialElHandler) {
                  specialElHandler(fromEl, toEl);
              }
          } // END: morphChildren(...)

          var morphedNode = fromNode;
          var morphedNodeType = morphedNode.nodeType;
          var toNodeType = toNode.nodeType;

          if (!childrenOnly) {
              // Handle the case where we are given two DOM nodes that are not
              // compatible (e.g. <div> --> <span> or <div> --> TEXT)
              if (morphedNodeType === ELEMENT_NODE) {
                  if (toNodeType === ELEMENT_NODE) {
                      if (!compareNodeNames(fromNode, toNode)) {
                          onNodeDiscarded(fromNode);
                          morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                      }
                  } else {
                      // Going from an element node to a text node
                      morphedNode = toNode;
                  }
              } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                  if (toNodeType === morphedNodeType) {
                      if (morphedNode.nodeValue !== toNode.nodeValue) {
                          morphedNode.nodeValue = toNode.nodeValue;
                      }

                      return morphedNode;
                  } else {
                      // Text node to something else
                      morphedNode = toNode;
                  }
              }
          }

          if (morphedNode === toNode) {
              // The "to node" was not compatible with the "from node" so we had to
              // toss out the "from node" and use the "to node"
              onNodeDiscarded(fromNode);
          } else {
              morphEl(morphedNode, toNode, childrenOnly);

              // We now need to loop over any keyed nodes that might need to be
              // removed. We only do the removal if we know that the keyed node
              // never found a match. When a keyed node is matched up we remove
              // it out of fromNodesLookup and we use fromNodesLookup to determine
              // if a keyed node has been matched up or not
              if (keyedRemovalList) {
                  for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                      var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                      if (elToRemove) {
                          removeNode(elToRemove, elToRemove.parentNode, false);
                      }
                  }
              }
          }

          if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
              if (morphedNode.actualize) {
                  morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
              }
              // If we had to swap out the from node with a new node because the old
              // node was not compatible with the target node then we need to
              // replace the old DOM node in the original DOM tree. This is only
              // possible if the original DOM node was part of a DOM tree which
              // we know is the case if it has a parent node.
              fromNode.parentNode.replaceChild(morphedNode, fromNode);
          }

          return morphedNode;
      };
  }

  var morphdom = morphdomFactory(morphAttrs);

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
      ret = [];
      var parentNode = null;
      if (isArray(dom)) {
        var domLength = dom.length;
        var vnodeLength = vnode.length;
        var maxLength = domLength >= vnodeLength ? domLength : vnodeLength;
        parentNode = dom[0].parentNode;
        for (var i = 0; i < maxLength; i++) {
          var ele = idiff(dom[i], vnode[i], context, mountAll, componentRoot);
          ret.push(ele);
          if (i > domLength - 1) {
            parentNode.appendChild(ele);
          }
        }
      } else {
        vnode.forEach(function (item) {
          var ele = idiff(dom, item, context, mountAll, componentRoot);
          ret.push(ele);
          parent && parent.appendChild(ele);
        });
      }
    } else {
      if (isArray(dom)) {
        ret = idiff(dom[0], vnode, context, mountAll, componentRoot);
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
      dom.props.children = vnode.props.children;
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
    var vnodeName = vnode.type;

    if (typeof vnodeName === 'function') {

      var isReact = true;
      for (var key in options.mapping) {
        if (options.mapping[key] === vnodeName) {
          vnodeName = key;
          vnode.type = key;
          isReact = false;
          break;
        }
      }
      if (isReact) {
        var div = document.createElement('div');
        j(vnode, div);
        return div.firstChild;
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
        vchildren = vnode.props.children;

    if (props == null) {
      props = out[ATTR_KEY] = {};
      for (var a = out.attributes, i = a.length; i--;) {
        props[a[i].name] = a[i].value;
      }
    }
    if (vchildren && vchildren.length === undefined) {
      vchildren = [vchildren];
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
    diffAttributes(out, vnode.props, props, vnode.props.children);
    if (out.props) {
      out.props.children = vnode.props.children;
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
        j$$1 = void 0,
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
            for (j$$1 = min; j$$1 < childrenLen; j$$1++) {
              if (children[j$$1] !== undefined && isSameNodeType(c = children[j$$1], vchild, isHydrating)) {
                child = c;
                children[j$$1] = undefined;
                if (j$$1 === childrenLen - 1) childrenLen--;
                if (j$$1 === min) min++;
                break;
              }
            }
          }

        // morph the matched/found/created DOM child to match vchild (deep)
        var out = idiff(child, vchild, context, mountAll);

        if (out === -1) {
          var diffIt = false;
          for (var k = 0, cl = dom.childNodes.length; k < cl; k++) {
            if (dom.childNodes[_i] && dom.childNodes[_i]._component.constructor === out._component.constructor) {
              diffIt = true;
              morphdom(dom.childNodes[_i], out);
              break;
            }
          }

          !diffIt && dom.appendChild(out);
        } else {
          f = originalChildren[_i];
          if (out && out !== dom && out !== f) {
            if (f == null) {
              dom.appendChild(out);
            } else if (out === f.nextSibling) {
              removeNode(f);
            } else {
              dom.insertBefore(out, f);
            }
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
  function diffAttributes(dom, attrs, old, children) {
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
      if (update || children.length > 0 || dom.store) {
        dom.receiveProps(dom.props, dom.data, oldClone);
        dom.update();
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
      this.beforeInstall();
      !this._isInstalled && this.install();
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
      !this._isInstalled && this.beforeRender();
      options.afterInstall && options.afterInstall(this);
      if (this.constructor.observe) {
        this.beforeObserve();
        proxyUpdate(this);
        this.observed();
      }
      this._host = diff(null, this.render(this.props, this.data, this.store), {}, false, null, false);
      this.rendered();
      if (isArray(this._host)) {
        this._host.forEach(function (item) {
          shadowRoot.appendChild(item);
        });
      } else {
        shadowRoot.appendChild(this._host);
      }
      !this._isInstalled && this.installed();
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
      this._host = diff(this._host, this.render(this.props, this.data, this.store), null, null, this.shadowRoot);
      this._willUpdate = false;
      this.updated();
    };

    WeElement.prototype.fire = function fire(name, data) {
      this.dispatchEvent(new CustomEvent(name.toLowerCase(), { detail: data }));
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

  var n$1=function(t,r,u,e){for(var p=1;p<r.length;p++){var s=r[p++],a="number"==typeof s?u[s]:s;1===r[p]?e[0]=a:2===r[p]?(e[1]=e[1]||{})[r[++p]]=a:3===r[p]?e[1]=Object.assign(e[1]||{},a):e.push(r[p]?t.apply(null,n$1(t,a,u,["",null])):a);}return e},t$1=function(n){for(var t,r,u=1,e="",p="",s=[0],a=function(n){1===u&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(n||e,0):3===u&&(n||e)?(s.push(n||e,1), u=2):2===u&&"..."===e&&n?s.push(n,3):2===u&&e&&!n?s.push(!0,2,e):4===u&&r&&(s.push(n||e,2,r), r=""), e="";},f=0;f<n.length;f++){f&&(1===u&&a(), a(f));for(var h=0;h<n[f].length;h++)t=n[f][h], 1===u?"<"===t?(a(), s=[s], u=3):e+=t:p?t===p?p="":e+=t:'"'===t||"'"===t?p=t:">"===t?(a(), u=1):u&&("="===t?(u=4, r=e, e=""):"/"===t?(a(), 3===u&&(s=s[0]), u=s, (s=s[0]).push(u,4), u=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(), u=2):e+=t);}return a(), s},r$1="function"==typeof Map,u$1=r$1?new Map:{},e$1=r$1?function(n){var r=u$1.get(n);return r||u$1.set(n,r=t$1(n)), r}:function(n){for(var r="",e=0;e<n.length;e++)r+=n[e].length+"-"+n[e];return u$1[r]||(u$1[r]=t$1(n))};function htm(t){var r=n$1(this,e$1(t),arguments,[]);return r.length>1?r:r[0]}

  var html = htm.bind(s);

  function createRef() {
    return {};
  }

  var Component = WeElement;
  var defineElement = define;

  var omi = {
    tag: tag,
    WeElement: WeElement,
    Component: Component,
    render: render,
    h: s,
    createElement: s,
    options: options,
    define: define,
    observe: observe,
    cloneElement: D,
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
    htm: htm
  };

  options.root.Omi = omi;
  options.root.omi = omi;
  options.root.Omi.version = '6.1.1';

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
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

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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
  };

  var n$2="function"===typeof Symbol&&Symbol.for,p$1=n$2?Symbol.for("react.element"):60103,q=n$2?Symbol.for("react.portal"):60106,r$2=n$2?Symbol.for("react.fragment"):60107,t$2=n$2?Symbol.for("react.strict_mode"):60108,u$2=n$2?Symbol.for("react.profiler"):60114,v$1=n$2?Symbol.for("react.provider"):60109,w$1=n$2?Symbol.for("react.context"):60110,x$1=n$2?Symbol.for("react.concurrent_mode"):60111,y$1=n$2?Symbol.for("react.forward_ref"):60112,z$1=n$2?Symbol.for("react.suspense"):60113,aa=n$2?Symbol.for("react.memo"):
  60115,ba=n$2?Symbol.for("react.lazy"):60116,A$1="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
  function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d);}var C$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D$1={};
  function E(a,b,d){this.props=a;this.context=b;this.refs=D$1;this.updater=d||C$1;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D$1;this.updater=d||C$1;}var H$1=G.prototype=new F;
  H$1.constructor=G;objectAssign(H$1,E.prototype);H$1.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
  function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref), void 0!==b.key&&(g=""+b.key), b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps, f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p$1,type:a,key:g,ref:h,props:e,_owner:J.current}}
  function da(a,b){return{$$typeof:p$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N$1(a){return"object"===typeof a&&null!==a&&a.$$typeof===p$1}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P$1=[];function Q(a,b,d,c){if(P$1.length){var e=P$1.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
  function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P$1.length&&P$1.push(a);}
  function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p$1:case q:g=!0;}}if(g)return d(c,a,""===b?"."+T$1(a,0):b), 1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T$1(e,h);g+=S(e,f,d,c);}else if(null===a||"object"!==typeof a?f=null:(f=A$1&&a[A$1]||a["@@iterator"], f="function"===typeof f?f:null), "function"===typeof f)for(a=f.call(a), h=
  0;!(e=a.next()).done;)e=e.value, f=b+T$1(e,h++), g+=S(e,f,d,c);else"object"===e&&(d=""+a, B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T$1(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++);}
  function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N$1(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)), c.push(a));}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b);}function W(){var a=I.current;null===a?B("321"):void 0;return a}
  var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N$1(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w$1,_calculateChangedBits:b,
  _currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v$1,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y$1,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
  b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r$2,StrictMode:t$2,Suspense:z$1,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
  b){void 0!==b.ref&&(h=b.ref, f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l;}return{$$typeof:p$1,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N$1,version:"16.8.6",
  unstable_ConcurrentMode:x$1,unstable_Profiler:u$2,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

  var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
  });

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var HelloMessage = function (_React$Component) {
    _inherits$3(HelloMessage, _React$Component);

    function HelloMessage() {
      var _temp, _this, _ret;

      _classCallCheck$3(this, HelloMessage);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.clickHandler = function () {
        console.log('click');
      }, _temp), _possibleConstructorReturn$3(_this, _ret);
    }

    HelloMessage.prototype.render = function render() {
      return Omi.h(
        'div',
        { onClick: this.clickHandler },
        'Hello ',
        this.props.name
      );
    };

    return HelloMessage;
  }(react.Component);

  var _class$2, _temp2;

  function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  define('my-app', (_temp2 = _class$2 = function (_WeElement) {
    _inherits$4(_class, _WeElement);

    function _class() {
      var _temp, _this, _ret;

      _classCallCheck$4(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$4(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.name = 'Reomi', _this.name2 = 'Reomi2', _this.onClick = function () {
        _this.name = 'React + Omi';
        _this.name2 = 'abc';
        _this.update();
      }, _temp), _possibleConstructorReturn$4(_this, _ret);
    }

    _class.prototype.render = function render$$1(props, data) {
      return Omi.h(
        'div',
        { onClick: this.onClick },
        Omi.h(HelloMessage, { name: this.name })
      );
    };

    return _class;
  }(WeElement), _class$2.css = '\n         div{\n             color: green;\n         }', _temp2));

  render(Omi.h('my-app', null), document.body);

}());
//# sourceMappingURL=b.js.map
