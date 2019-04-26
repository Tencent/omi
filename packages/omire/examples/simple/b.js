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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

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

  var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
  60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
  function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d);}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
  function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}var H=G.prototype=new F;
  H.constructor=G;objectAssign(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
  function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref), void 0!==b.key&&(g=""+b.key), b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps, f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
  function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
  function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
  function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return d(c,a,""===b?"."+T(a,0):b), 1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c);}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"], f="function"===typeof f?f:null), "function"===typeof f)for(a=f.call(a), h=
  0;!(e=a.next()).done;)e=e.value, f=b+T(e,h++), g+=S(e,f,d,c);else"object"===e&&(d=""+a, B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++);}
  function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)), c.push(a));}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b);}function W(){var a=I.current;null===a?B("321"):void 0;return a}
  var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
  _currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
  b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
  b){void 0!==b.ref&&(h=b.ref, f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l;}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
  unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

  var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
  });

  var scheduler_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a);}}
  function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c;}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c();}finally{g=f, l=Q;}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null}, null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next;}while(a!==d);null===c?c=d:c===d&&(d=h, p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
  b;}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1, null!==d?p():n=!1;}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1, e=b, null!==d?p():n=!1, v();}}
  var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b);});D=y(function(){B(C);a(exports.unstable_now());},100);}
  if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()};}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof commonjsGlobal&&(G=commonjsGlobal);
  if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3];}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a);}finally{I=null;}};r=function(a){null!==I?setTimeout(r,0,a):(I=a, setTimeout(J,0,!1));};q=function(){I=null;};w=function(){return!1};}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0, E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f);}finally{O=!1;}}};
  var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8), S=b<R?R:b):R=b;P=a+S;L||(L=!0, U.postMessage(void 0));}else N=!1;};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0, E(V));};q=function(){K=null;L=!1;M=-1;};}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
  exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c, k=f, v();}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g;}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c, k=f, v();}};
  exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3;}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a, p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next;}while(f!==d);null===c?c=d:c===d&&(d=a, p());
  b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b;}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c;}a.next=a.previous=null;}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c, k=f, v();}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
  exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p();};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};
  });

  unwrapExports(scheduler_production_min);
  var scheduler_production_min_1 = scheduler_production_min.unstable_now;
  var scheduler_production_min_2 = scheduler_production_min.unstable_ImmediatePriority;
  var scheduler_production_min_3 = scheduler_production_min.unstable_UserBlockingPriority;
  var scheduler_production_min_4 = scheduler_production_min.unstable_NormalPriority;
  var scheduler_production_min_5 = scheduler_production_min.unstable_IdlePriority;
  var scheduler_production_min_6 = scheduler_production_min.unstable_LowPriority;
  var scheduler_production_min_7 = scheduler_production_min.unstable_runWithPriority;
  var scheduler_production_min_8 = scheduler_production_min.unstable_next;
  var scheduler_production_min_9 = scheduler_production_min.unstable_scheduleCallback;
  var scheduler_production_min_10 = scheduler_production_min.unstable_cancelCallback;
  var scheduler_production_min_11 = scheduler_production_min.unstable_wrapCallback;
  var scheduler_production_min_12 = scheduler_production_min.unstable_getCurrentPriorityLevel;
  var scheduler_production_min_13 = scheduler_production_min.unstable_shouldYield;
  var scheduler_production_min_14 = scheduler_production_min.unstable_continueExecution;
  var scheduler_production_min_15 = scheduler_production_min.unstable_pauseExecution;
  var scheduler_production_min_16 = scheduler_production_min.unstable_getFirstCallbackNode;

  var scheduler = createCommonjsModule(function (module) {

  {
    module.exports = scheduler_production_min;
  }
  });

  function ba$1(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
  function x$1(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba$1(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c);}react?void 0:x$1("227");function ca$1(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k);}catch(m){this.onError(m);}}
  var da$1=!1,ea$1=null,fa$1=!1,ha=null,ia={onError:function(a){da$1=!0;ea$1=a;}};function ja(a,b,c,d,e,f,g,h,l){da$1=!1;ea$1=null;ca$1.apply(ia,arguments);}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da$1){if(da$1){var k=ea$1;da$1=!1;ea$1=null;}else x$1("198"), k=void 0;fa$1||(fa$1=!0, ha=k);}}var la=null,ma={};
  function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x$1("96",a);if(!oa[c]){b.extractEvents?void 0:x$1("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x$1("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0;}else f.registrationName?(qa(f.registrationName,g,h), e=!0):e=!1;e?void 0:x$1("98",d,a);}}}}
  function qa(a,b,c){ra[a]?x$1("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies;}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null;}function xa(a,b){null==b?x$1("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b), a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
  function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}
  var Ba={injectEventPluginOrder:function(a){la?x$1("101"):void 0;la=Array.prototype.slice.call(a);na();},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x$1("102",c):void 0, ma[c]=d, b=!0);}b&&na();}};
  function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type, d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;c&&"function"!==typeof c?x$1("231",b,typeof c):void 0;
  return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa), za?x$1("95"):void 0, fa$1))throw a=ha, fa$1=!1, ha=null, a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
  function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x$1("33");}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b), c._dispatchInstances=xa(c._dispatchInstances,a);}
  function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b), b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a);}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b), c._dispatchInstances=xa(c._dispatchInstances,a));}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a);}
  function Qa(a){ya(a,Na);}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
  Ra&&(Va=document.createElement("div").style, "AnimationEvent"in window||(delete Ta.animationend.animation, delete Ta.animationiteration.animation, delete Ta.animationstart.animation), "TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
  var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
  function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
  function y$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
  objectAssign(y$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1), this.isDefaultPrevented=fb);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0), this.isPropagationStopped=fb);},persist:function(){this.isPersistent=fb;},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
  b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null;}});y$1.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
  y$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y$1);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x$1("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}
  function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb;}var kb=y$1.extend({data:null}),lb=y$1.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
  var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
  captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
  function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data, a===rb&&tb?null:a;default:return null}}
  function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(), db=cb=bb=null, wb=!1, a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
  var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0;}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d, cb="value"in bb?bb.value:bb.textContent, wb=
  !0)), e=kb.getPooled(e,b,c,d), f?e.data=f:(f=vb(c), null!==f&&(e.data=f)), Qa(e), f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d), b.data=a, Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x$1("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b);}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a;}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a]);}}
  function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1, null!==Bb||null!==Cb)Ib(), Fb();}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
  function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"), b.setAttribute(a,"return;"), b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
  function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
  null;delete a[b];}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a));}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a), !0):!1}var Tb=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
  var Ub=/^(.*)[\\\/]/,z$1="function"===typeof Symbol&&Symbol.for,Vb=z$1?Symbol.for("react.element"):60103,Wb=z$1?Symbol.for("react.portal"):60106,Xb=z$1?Symbol.for("react.fragment"):60107,Yb=z$1?Symbol.for("react.strict_mode"):60108,Zb=z$1?Symbol.for("react.profiler"):60114,$b=z$1?Symbol.for("react.provider"):60109,ac=z$1?Symbol.for("react.context"):60110,bc=z$1?Symbol.for("react.concurrent_mode"):60111,cc=z$1?Symbol.for("react.forward_ref"):60112,dc=z$1?Symbol.for("react.suspense"):60113,ec=z$1?Symbol.for("react.memo"):
  60115,fc=z$1?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
  function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
  ")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}
  var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
  function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
  function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C$1(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;}var D$1={};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D$1[a]=new C$1(a,0,!1,a,null);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D$1[b]=new C$1(b,1,!1,a[1],null);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D$1[a]=new C$1(a,2,!1,a.toLowerCase(),null);});
  ["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D$1[a]=new C$1(a,2,!1,a,null);});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D$1[a]=new C$1(a,3,!1,a.toLowerCase(),null);});["checked","multiple","muted","selected"].forEach(function(a){D$1[a]=new C$1(a,3,!0,a,null);});
  ["capture","download"].forEach(function(a){D$1[a]=new C$1(a,4,!1,a,null);});["cols","rows","size","span"].forEach(function(a){D$1[a]=new C$1(a,6,!1,a,null);});["rowSpan","start"].forEach(function(a){D$1[a]=new C$1(a,5,!1,a.toLowerCase(),null);});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
  sc);D$1[b]=new C$1(b,1,!1,a,null);});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D$1[b]=new C$1(b,1,!1,a,"http://www.w3.org/1999/xlink");});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D$1[b]=new C$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace");});["tabIndex","crossOrigin"].forEach(function(a){D$1[a]=new C$1(a,1,!1,a.toLowerCase(),null);});
  function tc(a,b,c,d){var e=D$1.hasOwnProperty(b)?D$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null), d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName, d=e.attributeNamespace, null===c?a.removeAttribute(b):(e=e.type, c=3===e||4===e&&!0===c?"":""+c, d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
  function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
  function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1);}
  function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
  function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
  function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y$1.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a);}
  function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc), Ec=Dc=null);}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)), Kb(Fc,a));}function Lc(a,b,c){"focus"===a?(Jc(), Dc=b, Ec=c, Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc();}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
  function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
  var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc, g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value);}},Qc=y$1.extend({view:null,detail:null}),Rc={Alt:"altKey",
  Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
  var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0, 0)},movementY:function(a){if("movementY"in a)return a.movementY;
  var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0, 0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
  dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b, b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc, h=$c.mouseLeave, l=$c.mouseEnter, k="mouse";
  else if("pointerout"===a||"pointerover"===a)g=Zc, h=$c.pointerLeave, l=$c.pointerEnter, k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b), k--;for(;0<g-k;)e=La(e), g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e);}b=null;}else b=null;e=b;for(b=[];f&&f!==e;){k=
  f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f);}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d);}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
  function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return, 0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x$1("188"):void 0;}
  function gd(a){var b=a.alternate;if(!b)return b=ed(a), 3===b?x$1("188"):void 0, 1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e), a;if(g===d)return fd(e), b;g=g.sibling;}x$1("188");}if(c.return!==d.return)c=e, d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}g?
  void 0:x$1("189");}}c.alternate!==d?x$1("190"):void 0;}3!==c.tag?x$1("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b, b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
  var id=y$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y$1.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode, 0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
  var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
  116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a), 13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
  a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y$1.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
  a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
  ["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
  ["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b;}
  [["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
  ["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0);});td.forEach(function(a){wd(a,!1);});
  var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
  pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y$1;}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
  zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l));}Da(g);}}var Bd=!0;
  function E$1(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1);}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0);}function Cd(a,b){Hb(Dd,a,b);}
  function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d;}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a);}finally{a.topLevelType=null, a.nativeEvent=null, a.targetInst=null, a.ancestors.length=0, 10>zd.length&&zd.push(a);}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
  function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++, Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
  function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Kd(c);}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
  function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Jd(a.document);}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
  function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType, e.nodeType;}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
  if(null===(t=m.firstChild))break;p=m;m=t;}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode;}m=t;}b=-1===g||-1===h?null:{start:g,end:h};}else b=null;}b=b||{start:0,end:0};}else b=null;return{focusedElem:a,selectionRange:b}}
  function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start, a=d.end, void 0===a&&(a=b), "selectionStart"in c)c.selectionStart=b, c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window, a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d, d=f, f=e);e=Ld(c,f);var g=Ld(c,
  d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(), b.setStart(e.node,e.offset), a.removeAllRanges(), f>d?(a.addRange(b), a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset), a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c], a.element.scrollLeft=a.left, a.element.scrollTop=a.top;}}
  var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
  function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(), c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c, a=y$1.getPooled(Sd.select,Ud,a,b), a.type="select", a.target=Td, Qa(a), a)}
  var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0;}f=!e;}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e, Ud=b, Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1, Xd(c,d);case "selectionchange":if(Rd)break;
  case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}
  function $d(a,b){a=objectAssign({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value), a[c].selected!==e&&(a[c].selected=e), e&&d&&(a[c].defaultSelected=!0);}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
  function be(a,b){null!=b.dangerouslySetInnerHTML?x$1("91"):void 0;return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue, b=b.children, null!=b&&(null!=c?x$1("92"):void 0, Array.isArray(b)&&(1>=b.length?void 0:x$1("93"), b=b[0]), c=b), null==c&&(c=""));a._wrapperState={initialValue:uc(c)};}
  function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c, c!==a.value&&(a.value=c), null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b);}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
  function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
  var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
  function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
  var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
  floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a];});});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
  function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var pe=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
  function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x$1("137",a,""):void 0), null!=b.dangerouslySetInnerHTML&&(null!=b.children?x$1("60"):void 0, "object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x$1("61")), null!=b.style&&"object"!==typeof b.style?x$1("62",""):void 0);}
  function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
  function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E$1(e,a);}c[e]=!0;}}}function te(){}var ue=null,ve=null;
  function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
  var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=scheduler.unstable_scheduleCallback,Be=scheduler.unstable_cancelCallback;
  function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d);}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple, a._wrapperState.wasMultiple=!!e.multiple, c=e.value, null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
  !0):ae(a,!!e.multiple,e.multiple?[]:"",!1));}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}var Fe=[],Ge=-1;function F$1(a){0>Ge||(a.current=Fe[Ge], Fe[Ge]=null, Ge--);}function G$1(a,b){Ge++;Fe[Ge]=a.current;a.current=b;}var He={},H$1={current:He},I$1={current:!1},Ie=He;
  function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext=b, a.__reactInternalMemoizedMaskedChildContext=e);return e}function J$1(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F$1(I$1,a);F$1(H$1,a);}function Le(a){F$1(I$1,a);F$1(H$1,a);}
  function Me(a,b,c){H$1.current!==He?x$1("168"):void 0;G$1(H$1,b,a);G$1(I$1,c,a);}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x$1("108",ic(b)||"Unknown",e);return objectAssign({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H$1.current;G$1(H$1,b,a);G$1(I$1,I$1.current,a);return!0}
  function Pe(a,b,c){var d=a.stateNode;d?void 0:x$1("169");c?(b=Ne(a,b,Ie), d.__reactInternalMemoizedMergedChildContext=b, F$1(I$1,a), F$1(H$1,a), G$1(H$1,b,a)):F$1(I$1,a);G$1(I$1,c,a);}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
  function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)});}catch(d){}return!0}
  function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function K$1(a,b,c,d){return new Ue(a,b,c,d)}
  function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
  function Xe(a,b){var c=a.alternate;null===c?(c=K$1(a.tag,b,a.key,a.mode), c.elementType=a.elementType, c.type=a.type, c.stateNode=a.stateNode, c.alternate=a, a.alternate=c):(c.pendingProps=b, c.effectTag=0, c.nextEffect=null, c.firstEffect=null, c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
  c.index=a.index;c.ref=a.ref;return c}
  function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K$1(12,c,b,e|4), a.elementType=Zb, a.type=Zb, a.expirationTime=f, a;case dc:return a=K$1(13,c,b,e), a.elementType=dc, a.type=dc, a.expirationTime=f, a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
  14;break a;case fc:g=16;d=null;break a}x$1("130",null==a?a:typeof a,"");}b=K$1(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K$1(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K$1(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K$1(6,a,null,b);a.expirationTime=c;return a}
  function bf(a,b,c){b=K$1(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a);}
  function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0, a.latestPendingTime=0, a.earliestSuspendedTime=0, a.latestSuspendedTime=0, a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0, a.latestSuspendedTime=0, a.latestPingedTime=0, cf(a,b)):
  b>c&&cf(a,b);}df(0,a);}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a);}
  function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a;}function L$1(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}
  function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default, a._status=1, a._result=b);},function(b){0===a._status&&(a._status=2, a._result=b);});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new react.Component).refs;
  function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c);}
  var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
  sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c);}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
  function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M$1(f):(e=J$1(b)?Ie:H$1.current, d=b.contextTypes, f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext=e, a.__reactInternalMemoizedMaskedChildContext=f);return b}
  function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null);}
  function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M$1(f):(f=J$1(b)?Ie:H$1.current, e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d), e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c), e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
  typeof e.componentWillMount||(b=e.state, "function"===typeof e.componentWillMount&&e.componentWillMount(), "function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(), b!==e.state&&tf.enqueueReplaceState(e,e.state,null), f=a.updateQueue, null!==f&&(yf(a,f,c,e,d), e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var zf=Array.isArray;
  function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x$1("309"):void 0, d=c.stateNode);d?void 0:x$1("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}"string"!==typeof a?x$1("284"):void 0;c._owner?void 0:x$1("290",a);}return a}
  function Bf(a,b){"textarea"!==a.type&&x$1("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
  function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c, b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d), d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b), b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index, d<c?(b.effectTag=
  2, c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d), b.return=a, b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d), d.ref=Af(a,b,c), d.return=a, d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
  c.implementation)return b=bf(c,a.mode,d), b.return=a, b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f), b.return=a, b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c), b.return=a, b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c), c.ref=Af(a,null,b), c.return=a, c;case Wb:return b=bf(b,a.mode,c), b.return=a, b}if(zf(b)||
  hc(b))return b=Ze(b,a.mode,c,null), b.return=a, b;Bf(a,b);}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c);}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
  a.get(c)||null, h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null, d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null, k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null, m(b,a,d,e,null);Bf(b,d);}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q, q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
  q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B;}if(u===h.length)return c(e,q), l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u), null===m?l=q:m.sibling=q, m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key), g=f(B,g,u), null===m?l=B:m.sibling=B, m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x$1("150"):void 0;h=l.call(h);null==h?x$1("151"):void 0;
  for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++, w=h.next()){q.index>u?(B=q, q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B;}if(w.done)return c(e,q), l;if(null===q){for(;!w.done;u++, w=h.next())w=p(e,w.value,k), null!==w&&(g=f(w,g,u), null===m?l=w:m.sibling=w, m=w);return l}for(q=d(e,q);!w.done;u++, w=h.next())w=A(q,e,u,w.value,k), null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
  w.key), g=f(w,g,u), null===m?l=w:m.sibling=w, m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
  k.sibling;}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key), d.return=a, a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h), h.ref=Af(a,d,f), h.return=a, a=h);}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling;}d=bf(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
  ""+f, null!==d&&6===d.tag?(c(a,d.sibling), d=e(d,f,h), d.return=a, a=d):(c(a,d), d=af(f,a.mode,h), d.return=a, a=d), g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type, x$1("152",h.displayName||h.name||"Component");}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N$1={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x$1("174"):void 0;return a}
  function Jf(a,b){G$1(Hf,b,a);G$1(Gf,a,a);G$1(N$1,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b, b=c.namespaceURI||null, c=c.tagName, b=he(b,c);}F$1(N$1,a);G$1(N$1,b,a);}function Kf(a){F$1(N$1,a);F$1(Gf,a);F$1(Hf,a);}function Lf(a){If(Hf.current);var b=If(N$1.current);var c=he(b,a.type);b!==c&&(G$1(Gf,a,a), G$1(N$1,c,a));}function Mf(a){Gf.current===a&&(F$1(N$1,a), F$1(Gf,a));}
  var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O$1=null,P$1=null,Yf=null,Q$1=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x$1("321");}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
  function hg(a,b,c,d,e,f){Wf=f;Xf=b;P$1=null!==a?a.memoizedState:null;Vf.current=null===P$1?ig:jg;b=c(d,e);if(cg){do cg=!1, eg+=1, P$1=null!==a?a.memoizedState:null, Zf=Yf, ag=Q$1=O$1=null, Vf.current=jg, b=c(d,e);while(cg);dg=null;eg=0;}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O$1&&null!==O$1.next;Wf=0;Zf=Q$1=Yf=P$1=O$1=Xf=null;$f=0;ag=null;bg=0;a?x$1("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q$1=Yf=P$1=O$1=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0;}
  function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q$1?Yf=Q$1=a:Q$1=Q$1.next=a;return Q$1}function ng(){if(null!==Zf)Q$1=Zf, Zf=Q$1.next, O$1=P$1, P$1=null!==O$1?O$1.next:null;else{null===P$1?x$1("310"):void 0;O$1=P$1;var a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,queue:O$1.queue,baseUpdate:O$1.baseUpdate,next:null};Q$1=null===Q$1?Yf=a:Q$1.next=a;P$1=O$1.next;}return Q$1}function og(a,b){return"function"===typeof b?b(a):b}
  function pg(a){var b=ng(),c=b.queue;null===c?x$1("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action), e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null), d=g.next):d=null!==d?d.next:null;if(null!==
  d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0, h=g, e=f), m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next;}while(null!==l&&l!==d);k||(h=g, e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f;}return[b.memoizedState,c.dispatch]}
  function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null}, ag.lastEffect=a.next=a):(b=ag.lastEffect, null===b?ag.lastEffect=a.next=a:(c=b.next, b.next=a, a.next=c, ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d);}
  function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d);}function ug(a,b){if("function"===typeof b)return a=a(), b(a), function(){b(null);};if(null!==b&&void 0!==b)return a=a(), b.current=a, function(){b.current=null;}}function vg(){}
  function wg(a,b,c){25>eg?void 0:x$1("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0, a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null}, null===dg&&(dg=new Map), c=dg.get(b), void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a;}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f;}b.last=f;if(0===a.expirationTime&&(null===
  d||0===d.expirationTime)&&(d=b.lastRenderedReducer, null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e);}}
  var kg={readContext:M$1,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M$1,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M$1,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
  useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
  lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M$1,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M$1,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
  b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
  function Ag(a,b){var c=K$1(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c, a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b, !0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b, null!==b?(a.stateNode=b, !0):!1;case 13:return!1;default:return!1}}
  function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c);}xg=a;yg=Ee(b);}else a.effectTag|=2, zg=!1, xg=a;}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a;}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a), zg=!0, !1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b), b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1;}
  var Gg=Tb.ReactCurrentOwner,qg=!1;function S$1(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d);}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue, b.effectTag&=-517, a.expirationTime<=e&&(a.expirationTime=0), Jg(a,b,e);b.effectTag|=1;S$1(a,b,d,e);return b.child}
  function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15, b.type=g, Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps, c=c.compare, c=null!==c?c:dd, c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
  function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1, e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function Mg(a,b,c,d,e){var f=J$1(c)?Ie:H$1.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue, b.effectTag&=-517, a.expirationTime<=e&&(a.expirationTime=0), Jg(a,b,e);b.effectTag|=1;S$1(a,b,c,e);return b.child}
  function Og(a,b,c,d,e){if(J$1(c)){var f=!0;Oe(b);}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null, b.alternate=null, b.effectTag|=2), vf(b,c,d,e), xf(b,c,d,e), d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M$1(k):(k=J$1(c)?Ie:H$1.current, k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
  "function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e), l=b.memoizedState);h!==d||t!==l||I$1.current||Pg?("function"===typeof m&&(kf(b,c,m,d), l=b.memoizedState), (h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(), "function"===typeof g.UNSAFE_componentWillMount&&
  g.UNSAFE_componentWillMount()), "function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4), b.memoizedProps=d, b.memoizedState=l), g.props=d, g.state=l, g.context=k, d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4), d=!1);}else g=b.stateNode, h=b.memoizedProps, g.props=b.type===b.elementType?h:L$1(b.type,h), l=g.context, k=c.contextType, "object"===typeof k&&null!==k?k=M$1(k):(k=J$1(c)?Ie:H$1.current, k=Je(b,k)), m=c.getDerivedStateFromProps, (p="function"===
  typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k), Pg=!1, l=b.memoizedState, t=g.state=l, A=b.updateQueue, null!==A&&(yf(b,A,d,g,e), t=b.memoizedState), h!==d||l!==t||I$1.current||Pg?("function"===typeof m&&(kf(b,c,m,d), t=b.memoizedState), (m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
  typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k), "function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)), "function"===typeof g.componentDidUpdate&&(b.effectTag|=4), "function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4), "function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256), b.memoizedProps=d, b.memoizedState=
  t), g.props=d, g.state=t, g.context=k, d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4), "function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256), d=!1);return Qg(a,b,c,d,f,e)}
  function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1), Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f), b.child=Df(b,null,h,f)):S$1(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo);}
  function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1;}else f={timedOutAt:null!==f?f.timedOutAt:0}, g=!0, b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b;}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child, h=d.sibling, g?(c=e.fallback, e=Xe(d,d.pendingProps,0), 0===(b.mode&1)&&(g=null!==
  b.memoizedState?b.child.child:b.child, g!==d.child&&(e.child=g)), d=e.sibling=Xe(h,c,h.expirationTime), c=e, e.childExpirationTime=0, c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child, g?(g=e.fallback, e=Ze(null,d,0,null), e.child=h, 0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child), d=e.sibling=Ze(g,d,c,null), d.effectTag|=2, c=e, e.childExpirationTime=0, c.return=d.return=b):d=c=Df(b,h,e.children,c)), b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
  function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x$1("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling, c=c.sibling=Xe(a,a.pendingProps,a.expirationTime), c.return=b;c.sibling=null;}return b.child}
  function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I$1.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J$1(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
  b.elementType;null!==a&&(a.alternate=null, b.alternate=null, b.effectTag|=2);a=b.pendingProps;var e=Je(b,H$1.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J$1(d)){var f=!0;Oe(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
  c);}else b.tag=0, S$1(null,b,e,c), b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null, b.alternate=null, b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L$1(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L$1(a.type,f),d,c);break;default:x$1("306",a,"");}return g;case 0:return d=b.type, e=b.pendingProps, e=b.elementType===d?e:L$1(d,e), Mg(a,b,d,e,c);case 1:return d=b.type, e=b.pendingProps, e=b.elementType===d?e:L$1(d,e), Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x$1("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(), b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo), xg=b, e=zg=!0;e?(b.effectTag|=2, b.child=Ef(b,null,d,c)):(S$1(a,b,d,c), Fg());b=b.child;}return b;case 5:return Lf(b), null===a&&Cg(b), d=b.type, e=b.pendingProps, f=null!==a?a.memoizedProps:null, g=e.children, xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16), Ng(a,b), 1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1, b=null):(S$1(a,b,g,c), b=b.child), b;case 6:return null===a&&Cg(b), null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo), d=b.pendingProps, null===a?b.child=Df(b,null,d,c):S$1(a,b,d,c), b.child;case 11:return d=b.type, e=b.pendingProps, e=b.elementType===d?e:L$1(d,e), Hg(a,b,d,e,c);case 7:return S$1(a,b,b.pendingProps,c), b.child;case 8:return S$1(a,b,b.pendingProps.children,
  c), b.child;case 12:return S$1(a,b,b.pendingProps.children,c), b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I$1.current){b=Jg(a,b,c);break a}}else for(h=b.child, null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
  (k.observedBits&f)){1===h.tag&&(k=nf(c), k.tag=sf, pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k, null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return;}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next;}}else g=10===h.tag?h.type===b.type?
  null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}}S$1(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type, f=b.pendingProps, d=f.children, Ig(b,c), e=M$1(e,f.unstable_observedBits), d=d(e), b.effectTag|=1, S$1(a,b,d,c), b.child;case 14:return e=b.type, f=L$1(e,b.pendingProps), f=L$1(e.type,f), Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type, e=b.pendingProps, e=b.elementType===
  d?e:L$1(d,e), null!==a&&(a.alternate=null, b.alternate=null, b.effectTag|=2), b.tag=1, J$1(d)?(a=!0, Oe(b)):a=!1, Ig(b,c), vf(b,d,e,c), xf(b,d,e,c), Qg(null,b,d,!0,a,c)}x$1("156");}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G$1(Vg,c._currentValue,a);c._currentValue=b;}function Zg(a){var b=Vg.current;F$1(Vg,a);a.type._context._currentValue=b;}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null;}
  function M$1(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a, b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x$1("308"):void 0, Xg=b, Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b;}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
  function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b, a.lastUpdate=b);}
  function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState));}else d=a.updateQueue, e=c.updateQueue, null===d?null===e?(d=a.updateQueue=bh(a.memoizedState), e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b), dh(e,b)):(dh(d,b), e.lastUpdate=b);}
  function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b, c.lastCapturedUpdate=b);}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
  function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload, "function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return objectAssign({},d,e);case sf:Pg=!0;}return d}
  function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l, f=k), h<m&&(h=m)):(k=gh(a,b,l,k,c,d), null!==l.callback&&(a.effectTag|=32, l.nextEffect=null, null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l, b.lastEffect=l)));l=l.next;}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l, null===g&&(f=k)), h<p&&(h=p)):(k=gh(a,b,l,k,c,d), null!==l.callback&&(a.effectTag|=
  32, l.nextEffect=null, null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l, b.lastCapturedEffect=l)));l=l.next;}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k;}
  function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate, b.lastUpdate=b.lastCapturedUpdate), b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null;}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x$1("191",c):void 0;c.call(d);}a=a.nextEffect;}}
  function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4;}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};mh=function(){};
  nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N$1.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te);}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
  c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}), h[g]="");}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}), h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
  (h={}), h[g]=k[g]);}else h||(a||(a=[]), a.push(c,h)), h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0, l=l?l.__html:void 0, null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c), a||l===k||(a=[])):(a=a||[]).push(c,k));}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b);}};oh=function(a,b,c,d){c!==d&&kh(b);};
  var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){sh(a,c);}else b.current=null;}
  function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e();}(d.tag&b)!==Nf&&(e=d.create, d.destroy=e());d=d.next;}while(d!==c)}}
  function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
  c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
  function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect, null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d();}catch(f){sh(e,f);}}c=c.next;}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps, b.state=a.memoizedState, b.componentWillUnmount();}catch(f){sh(a,f);}break;case 5:rh(a);break;case 4:wh(a);}}
  function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
  function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return;}x$1("160");c=void 0;}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x$1("161");}c.effectTag&16&&(ke(b,""), c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
  2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c, c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h);}else b.insertBefore(e.stateNode,c);else d?(g=b, h=e.stateNode, 8===g.nodeType?(f=g.parentNode, f.insertBefore(h,g)):(f=g, f.appendChild(h)), g=g._reactRootContainer, null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
  else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}}
  function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x$1("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return;}c=!0;}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g), null!==g.child&&4!==g.tag)g.child.return=g, g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return;}g.sibling.return=g.return;g=g.sibling;}e?
  (f=d, g=b.stateNode, 8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode);}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b), null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1);}b.sibling.return=b.return;b=b.sibling;}}
  function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b);}break;case 6:null===b.stateNode?x$1("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0, a=b.child, 0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
  b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a), a.then(c,c));});}break;case 17:break;default:x$1("163");}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b);};return c}
  function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""});});return c}
  function Gh(a){switch(a.tag){case 1:J$1(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64, a):null;case 3:return Kf(a), Le(a), b=a.effectTag, 0!==(b&64)?x$1("285"):void 0, a.effectTag=b&-2049|64, a;case 5:return Mf(a), null;case 13:return b=a.effectTag, b&2048?(a.effectTag=b&-2049|64, a):null;case 18:return null;case 4:return Kf(a), null;case 10:return Zg(a), null;default:return null}}
  var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T$1=null,Lh=null,U$1=0,Mh=-1,Nh=!1,V$1=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T$1)for(var a=T$1.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b);}a=a.return;}Lh=null;U$1=0;Mh=-1;Nh=!1;T$1=null;}
  function Th(){for(;null!==V$1;){var a=V$1.effectTag;a&16&&ke(V$1.stateNode,"");if(a&128){var b=V$1.alternate;null!==b&&(b=b.ref, null!==b&&("function"===typeof b?b(null):b.current=null));}switch(a&14){case 2:yh(V$1);V$1.effectTag&=-3;break;case 6:yh(V$1);V$1.effectTag&=-3;zh(V$1.alternate,V$1);break;case 4:zh(V$1.alternate,V$1);break;case 8:a=V$1, wh(a), a.return=null, a.child=null, a.memoizedState=null, a.updateQueue=null, a=a.alternate, null!==a&&(a.return=null, a.child=null, a.memoizedState=null, a.updateQueue=null);}V$1=V$1.nextEffect;}}
  function Uh(){for(;null!==V$1;){if(V$1.effectTag&256)a:{var a=V$1.alternate,b=V$1;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L$1(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x$1("163");}}V$1=V$1.nextEffect;}}
  function Vh(a,b){for(;null!==V$1;){var c=V$1.effectTag;if(c&36){var d=V$1.alternate,e=V$1,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L$1(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate);}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
  e.child.stateNode;break;case 1:g=e.child.stateNode;}hh(e,d,g,f);}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x$1("163");}}c&128&&(e=V$1.ref, null!==e&&(f=V$1.stateNode, "function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V$1=V$1.nextEffect;}}
  function Wh(a,b){Rh=Qh=Ph=null;var c=W$1;W$1=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f);}catch(g){d=!0, e=g;}d&&sh(b,e);}b=b.nextEffect;}while(null!==b);W$1=c;c=a.expirationTime;0!==c&&Xh(a,c);X$1||W$1||Yh(1073741823,!1);}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh();}
  function Zh(a,b){Oh=Kh=!0;a.current===b?x$1("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x$1("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b, d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V$1=d;null!==V$1;){e=!1;var f=void 0;try{Uh();}catch(h){e=!0, f=h;}e&&(null===V$1?x$1("178"):void 0, sh(V$1,f), null!==V$1&&(V$1=V$1.nextEffect));}for(V$1=d;null!==V$1;){e=!1;
  f=void 0;try{Th();}catch(h){e=!0, f=h;}e&&(null===V$1?x$1("178"):void 0, sh(V$1,f), null!==V$1&&(V$1=V$1.nextEffect));}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V$1=d;null!==V$1;){e=!1;f=void 0;try{Vh(a,c);}catch(h){e=!0, f=h;}e&&(null===V$1?x$1("178"):void 0, sh(V$1,f), null!==V$1&&(V$1=V$1.nextEffect));}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=scheduler.unstable_runWithPriority(scheduler.unstable_NormalPriority,function(){return Ae(g)});Rh=g;}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
  b>c?b:c;0===b&&(Fh=null);$h(a,b);}
  function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T$1=a;a:{var e=b;b=a;var f=U$1;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J$1(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext, g.pendingContext=null);if(null===e||null===e.child)Eg(b), b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h), e.ref!==b.ref&&(b.effectTag|=
  128);else if(g){var l=If(N$1.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E$1("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E$1(ab[k],e);break;case "source":E$1("error",e);break;case "img":case "image":case "link":E$1("error",e);E$1("load",e);break;case "form":E$1("reset",e);E$1("submit",e);break;case "details":E$1("toggle",e);break;case "input":wc(e,m);E$1("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
  {wasMultiple:!!m.multiple};E$1("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m), E$1("invalid",e), se(p,"onChange");}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f], "children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
  (e.onclick=te);}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b);}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"), e.innerHTML="<script>\x3c/script>", k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p), "select"===p&&(p=k, e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E$1("load",
  p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E$1(ab[h],p);h=m;break;case "source":E$1("error",p);h=m;break;case "img":case "image":case "link":E$1("error",p);E$1("load",p);h=m;break;case "form":E$1("reset",p);E$1("submit",p);h=m;break;case "details":E$1("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E$1("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=objectAssign({},m,{value:void 0});E$1("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
  m);h=be(p,m);E$1("invalid",p);se(t,"onChange");break;default:h=m;}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0, null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A));}switch(k){case "input":Rb(p);
  Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te);}(g=we(f,g))&&kh(b);b.stateNode=e;}null!==b.ref&&(b.effectTag|=128);}else null===b.stateNode?x$1("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
  typeof g&&(null===b.stateNode?x$1("166"):void 0), e=If(Hf.current), If(N$1.current), Eg(b)?(g=b, f=g.stateNode, e=g.memoizedProps, f[Fa]=g, (g=f.nodeValue!==e)&&kh(b)):(f=b, g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g), g[Fa]=b, f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T$1=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling, null!==e&&(h=b.firstEffect, null!==h?(b.firstEffect=e, e.nextEffect=h):(b.firstEffect=
  b.lastEffect=e, e.nextEffect=null), e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J$1(b.type)&&Ke(b);break;case 18:break;default:x$1("156");}T$1=null;}b=a;if(1===U$1||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime, h=f.childExpirationTime, e>g&&(g=e), h>g&&(g=h), f=f.sibling;b.childExpirationTime=g;}if(null!==T$1)return T$1;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
  (c.firstEffect=a.firstEffect), null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect), c.lastEffect=a.lastEffect), 1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a, c.lastEffect=a));}else{a=Gh(a,U$1);if(null!==a)return a.effectTag&=1023, a;null!==c&&(c.firstEffect=c.lastEffect=null, c.effectTag|=1024);}if(null!==d)return d;if(null!==c)a=c;else break}return null}
  function bi(a){var b=Tg(a.alternate,a,U$1);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
  function ci(a,b){Kh?x$1("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U$1||a!==Lh||null===T$1)Sh(), Lh=a, U$1=d, T$1=Xe(Lh.current,null,U$1), a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T$1&&!di();)T$1=bi(T$1);else for(;null!==T$1;)T$1=bi(T$1);}catch(u){if(Yg=Xg=Wg=null, lg(), null===T$1)e=!0, Dh(u);else{null===T$1?x$1("271"):void 0;var f=T$1,g=f.return;if(null===g)e=!0, Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U$1;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
  m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState, null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v;}m=m.return;}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set, l.add(p), m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
  64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823), g.tag=sf, pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh, v=new Set, R.set(p,v)):(v=R.get(p), void 0===v&&(v=new Set, R.set(p,v)));v.has(l)||(v.add(l), k=ei.bind(null,k,p,l), p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3), h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return;}while(null!==m);m=Error((ic(k.type)||"A React component")+
  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k));}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m, A=h.type, k=h.stateNode, 0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
  h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return;}while(null!==h)}T$1=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null, a.finishedWork=null;else if(null!==T$1)a.finishedWork=null;else{c=a.current.alternate;null===c?x$1("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
  b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d), b=10*(1073741822-gf(a,d)), b<Mh&&(Mh=b), b=10*(1073741822-lf()), b=Mh-b, fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d, a.finishedWork=c);}}
  function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return;}3===a.tag&&(c=jh(b,a), c=Ch(a,c,1073741823), pf(a,c), qf(a,1073741823));}
  function mf(a,b){var c=scheduler.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U$1;else{switch(c){case scheduler.unstable_ImmediatePriority:d=1073741823;break;case scheduler.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case scheduler.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case scheduler.unstable_LowPriority:case scheduler.unstable_IdlePriority:d=1;break;default:x$1("313");}null!==Lh&&d===U$1&&--d;}c===scheduler.unstable_UserBlockingPriority&&
  (0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U$1===c)Lh=null;else if(b=a.earliestSuspendedTime, d=a.latestSuspendedTime, 0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c);}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b), b=a.expirationTime, 0!==b&&Xh(a,b));}
  function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}return e}
  function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U$1&&b>U$1&&Sh(), cf(a,b), Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime), ii>ji&&(ii=0, x$1("185")));}function ki(a,b,c,d,e){return scheduler.unstable_runWithPriority(scheduler.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y$1=null,mi=0,ni=void 0,W$1=!1,oi=null,Z$1=0,gi=0,pi=!1,qi=null,X$1=!1,ri=!1,si=null,ti=scheduler.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((scheduler.unstable_now()-ti)/10|0);}
  function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&scheduler.unstable_cancelCallback(ni);}mi=b;a=scheduler.unstable_now()-ti;ni=scheduler.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a});}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c, a.finishedWork=b);}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c);}function $h(a,b){a.expirationTime=b;a.finishedWork=null;}
  function lf(){if(W$1)return vi;Ci();if(0===Z$1||1===Z$1)xi(), vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b, null===Y$1?(li=Y$1=a, a.nextScheduledRoot=a):(Y$1=Y$1.nextScheduledRoot=a, Y$1.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W$1||(X$1?ri&&(oi=a, Z$1=1073741823, Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b));}
  function Ci(){var a=0,b=null;if(null!==Y$1)for(var c=Y$1,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y$1?x$1("244"):void 0;if(d===d.nextScheduledRoot){li=Y$1=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot, Y$1.nextScheduledRoot=e, d.nextScheduledRoot=null;else if(d===Y$1){Y$1=c;Y$1.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot, d.nextScheduledRoot=null;d=c.nextScheduledRoot;}else{e>a&&(a=e, b=d);if(d===Y$1)break;if(1073741823===
  a)break;c=d;d=d.nextScheduledRoot;}}oi=b;Z$1=a;}var Ei=!1;function di(){return Ei?!0:scheduler.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot;}while(a!==li)}Yh(0,!0);}finally{Ei=!1;}}
  function Yh(a,b){Ci();if(b)for(xi(), vi=ui;null!==oi&&0!==Z$1&&a<=Z$1&&!(Ei&&ui>Z$1);)Di(oi,Z$1,ui>Z$1), Ci(), xi(), vi=ui;else for(;null!==oi&&0!==Z$1&&a<=Z$1;)Di(oi,Z$1,!1), Ci();b&&(mi=0, ni=null);0!==Z$1&&yi(oi,Z$1);ii=0;wi=null;if(null!==si)for(a=si, si=null, b=0;b<a.length;b++){var c=a[b];try{c._onComplete();}catch(d){pi||(pi=!0, qi=d);}}if(pi)throw a=qi, qi=null, pi=!1, a;}function Bi(a,b){W$1?x$1("253"):void 0;oi=a;Z$1=b;Di(a,b,!1);Yh(1073741823,!1);}
  function Di(a,b,c){W$1?x$1("245"):void 0;W$1=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null, d=a.timeoutHandle, -1!==d&&(a.timeoutHandle=-1, ze(d)), ci(a,c), d=a.finishedWork, null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)));}else d=a.finishedWork, null!==d?Fi(a,d,b):(a.finishedWork=null, d=a.timeoutHandle, -1!==d&&(a.timeoutHandle=-1, ze(d)), ci(a,c), d=a.finishedWork, null!==d&&Fi(a,d,b));W$1=!1;}
  function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d), d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a, ii=0);scheduler.unstable_runWithPriority(scheduler.unstable_ImmediatePriority,function(){Zh(a,b);});}function Dh(a){null===oi?x$1("246"):void 0;oi.expirationTime=0;pi||(pi=!0, qi=a);}function Gi(a,b){var c=X$1;X$1=!0;try{return a(b)}finally{(X$1=c)||W$1||Yh(1073741823,!1);}}
  function Hi(a,b){if(X$1&&!ri){ri=!0;try{return a(b)}finally{ri=!1;}}return a(b)}function Ii(a,b,c){X$1||W$1||0===gi||(Yh(gi,!1), gi=0);var d=X$1;X$1=!0;try{return scheduler.unstable_runWithPriority(scheduler.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X$1=d)||W$1||Yh(1073741823,!1);}}
  function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x$1("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J$1(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return;}while(null!==g);x$1("171");g=void 0;}if(1===c.tag){var h=c.type;if(J$1(h)){c=Ne(c,h,g);break a}}c=g;}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
  of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
  Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x$1("90");Sb(d);yc(d,e);}}}break;case "textarea":de(a,c);break;case "select":b=c.value, null!=b&&ae(a,!!c.multiple,b,!1);}};
  function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0;}Ni.prototype.render=function(a){this._defer?void 0:x$1("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
  Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
  Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x$1("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime, this.render(this._children));for(var d=null,e=b;e!==this;)d=e, e=e._next;null===d?x$1("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this;}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children);}else this._next=
  null, this._defer=!1;};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0, a[b])();}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this);}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
  Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x$1("191",c):void 0;c();}}};
  function Pi(a,b,c){b=K$1(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a;}
  Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
  Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a, a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d, d=d._next;a._next=d;null!==c&&(c._next=a);}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W$1||0===gi||(Yh(gi,!1), gi=0);};
  function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null, b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
  function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a);};}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a);};}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);});}return Li(f._internalRoot)}
  function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x$1("200");return Mi(a,b,null,c)}
  var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x$1("188"):x$1("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x$1("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x$1("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x$1("200");null==a||void 0===a._reactInternalFiber?
  x$1("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x$1("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null;});}), !0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W$1?x$1("187"):void 0;var c=X$1;X$1=!0;try{return ki(a,b)}finally{X$1=c, Yh(1073741823,!1);}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
  X$1;X$1=!0;try{ki(a);}finally{(X$1=b)||W$1||Yh(1073741823,!1);}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa);},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x$1("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
  (function(a){var b=a.findFiberByHostInstance;return Te(objectAssign({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;var reactDom_production_min=Xi.default||Xi;

  var reactDom = createCommonjsModule(function (module) {

  function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    ) {
      return;
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }

  {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    module.exports = reactDom_production_min;
  }
  });

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
        var cpt = reactDom.render(vnode, div);
        div.firstChild._reactComponent = cpt;
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
        var out = idiff(child, vchild, context, mountAll);
        if (out._reactComponent) {
          var diffIt = false;
          for (var k = 0, cl = dom.childNodes.length; k < cl; k++) {
            if (dom.childNodes[_i] && dom.childNodes[_i]._reactComponent.constructor === out._reactComponent.constructor) {
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

  var reactEvents = ["onAbort", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onAuxClick", "onBlur", "onChange", "onClick", "onClose", "onContextMenu", "onDoubleClick", "onError", "onFocus", "onGotPointerCapture", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onLoad", "onLoadEnd", "onLoadStart", "onLostPointerCapture", "onMouseDown", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onPointerCancel", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerMove", "onPointerOut", "onPointerOver", "onPointerUp", "onReset", "onResize", "onScroll", "onSelect", "onSelectionChange", "onSelectStart", "onSubmit", "onTouchCancel", "onTouchMove", "onTouchStart", "onTransitionCancel", "onTransitionEnd", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onFocusOut"];

  var divergentNativeEvents = {
      onDoubleClick: 'dblclick'
  };

  var mimickedReactEvents = {
      onInput: 'onChange',
      onFocusOut: 'onBlur',
      onSelectionChange: 'onSelect'
  };

  function retargetEvents(shadowRoot) {

      reactEvents.forEach(function (reactEventName) {

          var nativeEventName = getNativeEventName(reactEventName);

          shadowRoot.addEventListener(nativeEventName, function (event) {

              var path = event.path || event.composedPath && event.composedPath() || composedPath(event.target);

              for (var i = 0; i < path.length; i++) {

                  var el = path[i];
                  var reactComponent = findReactComponent(el);
                  var props = findReactProps(reactComponent);

                  if (reactComponent && props) {
                      dispatchEvent(event, reactEventName, props);
                  }

                  if (reactComponent && props && mimickedReactEvents[reactEventName]) {
                      dispatchEvent(event, mimickedReactEvents[reactEventName], props);
                  }

                  if (event.cancelBubble) {
                      break;
                  }

                  if (el === shadowRoot) {
                      break;
                  }
              }
          }, false);
      });
  }
  function findReactComponent(item) {
      for (var key in item) {
          if (item.hasOwnProperty(key) && key.indexOf('_reactInternal') !== -1) {
              return item[key];
          }
      }
  }

  function findReactProps(component) {
      if (!component) return undefined;
      if (component.memoizedProps) return component.memoizedProps; // React 16 Fiber
      if (component._currentElement && component._currentElement.props) return component._currentElement.props; // React <=15
  }

  function dispatchEvent(event, eventType, componentProps) {
      if (componentProps[eventType]) {
          componentProps[eventType](event);
      }
  }

  function getNativeEventName(reactEventName) {
      if (divergentNativeEvents[reactEventName]) {
          return divergentNativeEvents[reactEventName];
      }
      return reactEventName.replace(/^on/, '').toLowerCase();
  }

  function composedPath(el) {
      var path = [];
      while (el) {
          path.push(el);
          if (el.tagName === 'HTML') {
              path.push(document);
              path.push(window);
              return path;
          }
          el = el.parentElement;
      }
  }

  var _class, _temp;

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var id$1 = 0;

  var WeElement = (_temp = _class = function (_HTMLElement) {
    _inherits$1(WeElement, _HTMLElement);

    function WeElement() {
      _classCallCheck$1(this, WeElement);

      var _this = _possibleConstructorReturn$1(this, _HTMLElement.call(this));

      _this.props = Object.assign(nProps(_this.constructor.props), _this.constructor.defaultProps);
      _this.elementId = id$1++;
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
      retargetEvents(shadowRoot);
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

  var n$1=function(t,r,u,e){for(var p=1;p<r.length;p++){var s=r[p++],a="number"==typeof s?u[s]:s;1===r[p]?e[0]=a:2===r[p]?(e[1]=e[1]||{})[r[++p]]=a:3===r[p]?e[1]=Object.assign(e[1]||{},a):e.push(r[p]?t.apply(null,n$1(t,a,u,["",null])):a);}return e},t$1=function(n){for(var t,r,u=1,e="",p="",s=[0],a=function(n){1===u&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(n||e,0):3===u&&(n||e)?(s.push(n||e,1), u=2):2===u&&"..."===e&&n?s.push(n,3):2===u&&e&&!n?s.push(!0,2,e):4===u&&r&&(s.push(n||e,2,r), r=""), e="";},f=0;f<n.length;f++){f&&(1===u&&a(), a(f));for(var h=0;h<n[f].length;h++)t=n[f][h], 1===u?"<"===t?(a(), s=[s], u=3):e+=t:p?t===p?p="":e+=t:'"'===t||"'"===t?p=t:">"===t?(a(), u=1):u&&("="===t?(u=4, r=e, e=""):"/"===t?(a(), 3===u&&(s=s[0]), u=s, (s=s[0]).push(u,4), u=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(), u=2):e+=t);}return a(), s},r$1="function"==typeof Map,u$1=r$1?new Map:{},e=r$1?function(n){var r=u$1.get(n);return r||u$1.set(n,r=t$1(n)), r}:function(n){for(var r="",e=0;e<n.length;e++)r+=n[e].length+"-"+n[e];return u$1[r]||(u$1[r]=t$1(n))};function htm(t){var r=n$1(this,e(t),arguments,[]);return r.length>1?r:r[0]}

  var html = htm.bind(h);
  var h = react.createElement;
  var createElement = react.createElement;
  var cloneElement = react.cloneElement;

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
    h: h,
    createElement: createElement,
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
    htm: htm
  };

  options.root.Omi = omi;
  options.root.omi = omi;
  options.root.Omi.version = '6.1.1';

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
