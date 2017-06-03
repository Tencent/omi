/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _list = __webpack_require__(1);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var list = new _list2['default']({
	    title: '标签',
	    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
	});

	Omi.render(list, '#test');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _indexArt = __webpack_require__(2);

	var _indexArt2 = _interopRequireDefault(_indexArt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_Omi$Component) {
	    _inherits(List, _Omi$Component);

	    function List(data) {
	        _classCallCheck(this, List);

	        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, data));
	    }

	    _createClass(List, [{
	        key: 'style',
	        value: function style() {
	            return '\n        h1 { color:red; }\n        li{\n         color:green;\n         cursor:pointer;\n        }\n        ';
	        }
	    }, {
	        key: 'showMe',
	        value: function showMe(value) {
	            alert(value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '<h1>{{title}}</h1>\n                <ul>\n                    {{each list value i}}\n                    <li onclick="showMe(\'{{value}}\')">\u7D22\u5F15 {{i + 1}} \uFF1A{{value}}</li>\n                    {{/each}}\n                </ul>';
	        }
	    }]);

	    return List;
	}(_indexArt2['default'].Component);

	exports['default'] = List;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _omi = __webpack_require__(3);

	var _omi2 = _interopRequireDefault(_omi);

	var _artTemplate = __webpack_require__(4);

	var _artTemplate2 = _interopRequireDefault(_artTemplate);

	var _component = __webpack_require__(7);

	var _component2 = _interopRequireDefault(_component);

	var _store = __webpack_require__(12);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	_omi2['default'].template = function (tpl, data) {
	    return _artTemplate2['default'].compile(tpl)(data);
	};

	_omi2['default'].Store = _store2['default'];
	_omi2['default'].Component = _component2['default'];
	if (window.Omi) {
	    module.exports = window.Omi;
	} else {
	    window.Omi = _omi2['default'];
	    module.exports = _omi2['default'];
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Omi = {};
	Omi.instances = {};
	Omi._instanceId = 0;
	Omi.getInstanceId = function () {
	    return Omi._instanceId++;
	};
	Omi.customTags = [];
	Omi.mapping = {};

	Omi.STYLEPREFIX = "omi_style_";
	Omi.STYLESCOPEDPREFIX = "omi_scoped_";

	Omi.style = {};

	Omi.componentConstructor = {};

	//fix ie bug
	if (typeof Object.assign != 'function') {
	    Object.assign = function (target) {
	        'use strict';

	        if (target == null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        target = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source != null) {
	                for (var key in source) {
	                    if (Object.prototype.hasOwnProperty.call(source, key)) {
	                        target[key] = source[key];
	                    }
	                }
	            }
	        }
	        return target;
	    };
	}

	/**
	 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
	 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
	 * (technically, since host objects have been implementation-dependent,
	 * at least before ES6, IE hasn't needed to work this way).
	 * Also works on strings, fixes IE < 9 to allow an explicit undefined
	 * for the 2nd argument (as in Firefox), and prevents errors when
	 * called on other DOM objects.
	 */
	(function () {
	    'use strict';

	    var _slice = Array.prototype.slice;

	    try {
	        // Can't be used with DOM elements in IE < 9
	        _slice.call(document.documentElement);
	    } catch (e) {
	        // Fails in IE < 9
	        // This will work for genuine arrays, array-like objects,
	        // NamedNodeMap (attributes, entities, notations),
	        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
	        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
	        Array.prototype.slice = function (begin, end) {
	            // IE < 9 gets unhappy with an undefined end argument
	            end = typeof end !== 'undefined' ? end : this.length;

	            // For native Array objects, we use the native slice function
	            if (Object.prototype.toString.call(this) === '[object Array]') {
	                return _slice.call(this, begin, end);
	            }

	            // For array like object we handle it ourselves.
	            var i,
	                cloned = [],
	                size,
	                len = this.length;

	            // Handle negative value for "begin"
	            var start = begin || 0;
	            start = start >= 0 ? start : len + start;

	            // Handle negative value for "end"
	            var upTo = end ? end : len;
	            if (end < 0) {
	                upTo = len + end;
	            }

	            // Actual expected size of the slice
	            size = upTo - start;

	            if (size > 0) {
	                cloned = new Array(size);
	                if (this.charAt) {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this.charAt(start + i);
	                    }
	                } else {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this[start + i];
	                    }
	                }
	            }

	            return cloned;
	        };
	    }
	})();

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function toArr(obj) {
	    var arr = [];
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            arr.push({ key: key, value: obj[key] });
	        }
	    }
	    return arr;
	}

	Omi.create = function (tagName, parent, setting) {
	    var u_setting = parent,
	        u_parent = Omi.Component;
	    if (arguments.length > 2) {
	        u_setting = setting;
	        u_parent = parent;
	    }
	    Omi.componentConstructor[tagName] = function (parent) {
	        _inherits(Obj, parent);

	        function Obj(data, server) {
	            _classCallCheck(this, Obj);
	            this.___omi_constructor_name = tagName;
	            return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this, data, server));
	        }

	        _createClass(Obj, toArr(u_setting));

	        return Obj;
	    }(u_parent);

	    Omi.customTags.push(tagName);

	    return Omi.componentConstructor[tagName];
	};

	Omi.createStore = function (option) {

	    var Store = function (parent) {
	        _inherits(Obj, parent);

	        function Obj(data, isReady) {
	            _classCallCheck(this, Obj);
	            this.data = data;
	            option.methods.install && option.methods.install.call(this);
	            return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this, data, isReady));
	        }

	        _createClass(Obj, toArr(option.methods));

	        return Obj;
	    }(Omi.Store);

	    return new Store(option.data, true);
	};

	Omi.mixIndex = function (array, key) {
	    var len = array.length,
	        indexName = key || "index";
	    for (var i = 0; i < len; i++) {
	        var item = array[i];
	        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
	            item[indexName] = i;
	        } else {
	            array[i] = { value: item };
	            array[i][indexName] = i;
	        }
	    }
	    return array;
	};

	Omi.$ = function (selector, context) {
	    if (context) {
	        return context.querySelector(selector);
	    } else {
	        return document.querySelector(selector);
	    }
	};

	Omi.$$ = function (selector, context) {
	    if (context) {
	        return Array.prototype.slice.call(context.querySelectorAll(selector));
	    } else {
	        return Array.prototype.slice.call(document.querySelectorAll(selector));
	    }
	};

	Omi.getClassFromString = function (str) {
	    if (str.indexOf('.') !== -1) {
	        //root is window
	        var arr = str.split('.');
	        var len = arr.length;
	        var current = window[arr[0]];
	        for (var i = 1; i < len; i++) {
	            current = current[arr[i]];
	        }
	        return current;
	    } else {
	        return Omi.componentConstructor[str];
	    }
	};

	//以前是Component的静态方法，移到omi下来，不然makehtml 在ie下child访问不到父亲的静态方法
	Omi.makeHTML = function (name, ctor) {
	    Omi.componentConstructor[name] = ctor;
	    Omi.componentConstructor[name.toLowerCase()] = ctor;
	    Omi.customTags.push(name, name.toLowerCase());
	    if (document.documentMode < 9) {
	        document.createElement(name.toLowerCase());
	    }
	};

	Omi.tag = Omi.makeHTML;

	Omi.render = function (component, renderTo, incrementOrOption) {
	    component.renderTo = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo;
	    if (typeof incrementOrOption === 'boolean') {
	        component._omi_increment = incrementOrOption;
	    } else if (incrementOrOption) {
	        component._omi_increment = incrementOrOption.increment;
	        if (incrementOrOption.store) {
	            if (incrementOrOption.store instanceof Omi.Store) {
	                component.$store = incrementOrOption.store;
	            } else {
	                component.$store = Omi.createStore(incrementOrOption.store);
	            }
	        }
	        component._omi_autoStoreToData = incrementOrOption.autoStoreToData;
	    }
	    component.install();
	    component._render(true);
	    component._childrenInstalled(component);
	    component.installed();
	    component._execInstalledHandlers();
	    return component;
	};

	Omi.get = function (name) {
	    return Omi.mapping[name];
	};

	Omi.plugins = {};

	Omi.extendPlugin = function (name, handler) {
	    Omi.plugins[name] = handler;
	};

	Omi.getParameters = function (dom, instance, types) {
	    var data = {};
	    var noop = function noop() {};
	    var methodMapping = {
	        stringType: function stringType(value) {
	            return value;
	        },
	        numberType: function numberType(value) {
	            return Number(value);
	        },
	        booleanType: function booleanType(value) {
	            if (value === 'true') {
	                return true;
	            } else if (value === 'false') {
	                return false;
	            } else {
	                return Boolean(value);
	            }
	        },
	        functionType: function functionType(value) {
	            if (value) {
	                var handler = instance[value.replace(/Omi.instances\[\d\]./, '')];
	                if (handler) {
	                    return handler.bind(instance);
	                } else {
	                    console.warn('You do not define [ ' + value + ' ] method in following component');
	                    console.warn(instance);
	                }
	            } else {
	                return noop;
	            }
	        }
	    };
	    Object.keys(types).forEach(function (type) {
	        types[type].forEach(function (name) {
	            var attr = dom.getAttribute(name);
	            if (attr !== null) {
	                data[name] = methodMapping[type](attr);
	            }
	        });
	    });

	    return data;
	};

	Omi.mixIndexToArray = function (arr, indexName) {
	    arr.forEach(function (item, index) {
	        item[indexName || 'index'] = index;
	    });
	};

	Omi.deletePlugin = function (name) {
	    delete Omi.plugins[name];
	};

	module.exports = Omi;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! art-template@4.10.1 for browser | https://github.com/aui/art-template */
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.template = t() : e.template = t();
	}(undefined, function () {
	  return function (e) {
	    function t(r) {
	      if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
	    }var n = {};return t.m = e, t.c = n, t.i = function (e) {
	      return e;
	    }, t.d = function (e, n, r) {
	      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
	    }, t.n = function (e) {
	      var n = e && e.__esModule ? function () {
	        return e["default"];
	      } : function () {
	        return e;
	      };return t.d(n, "a", n), n;
	    }, t.o = function (e, t) {
	      return Object.prototype.hasOwnProperty.call(e, t);
	    }, t.p = "", t(t.s = 22);
	  }([function (e, t, n) {
	    (function (t) {
	      e.exports = !1;try {
	        e.exports = "[object process]" === Object.prototype.toString.call(t.process);
	      } catch (n) {}
	    }).call(t, n(4));
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(17),
	        o = n(2),
	        i = n(18),
	        s = function s(e, t) {
	      t.onerror(e, t);var n = function n() {
	        return "{Template Error}";
	      };return n.mappings = [], n.sourcesContent = [], n;
	    },
	        a = function c(e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};"string" != typeof e ? t = e : t.source = e, t = o.$extend(t), e = t.source, t.debug && (t.cache = !1, t.bail = !1, t.minimize = !1, t.compileDebug = !0), t.compileDebug && (t.minimize = !1), t.filename && (t.filename = t.resolveFilename(t.filename, t));var n = t.filename,
	          a = t.cache,
	          u = t.caches;if (a && n) {
	        var p = u.get(n);if (p) return p;
	      }if (!e) try {
	        e = t.loader(n, t), t.source = e;
	      } catch (d) {
	        var f = new i({ name: "CompileError", path: n, message: "template not found: " + d.message, stack: d.stack });if (t.bail) throw f;return s(f, t);
	      }var l = void 0,
	          h = new r(t);try {
	        l = h.build();
	      } catch (f) {
	        if (f = new i(f), t.bail) throw f;return s(f, t);
	      }var m = function m(e, n) {
	        try {
	          return l(e, n);
	        } catch (f) {
	          if (!t.compileDebug) return t.cache = !1, t.compileDebug = !0, c(t)(e, n);if (f = new i(f), t.bail) throw f;return s(f, t)();
	        }
	      };return m.mappings = l.mappings, m.sourcesContent = l.sourcesContent, m.toString = function () {
	        return l.toString();
	      }, a && n && u.set(n, m), m;
	    };a.Compiler = r, e.exports = a;
	  }, function (e, t, n) {
	    "use strict";
	    function r() {
	      this.$extend = function (e) {
	        return e = e || {}, s(e, e instanceof r ? e : this);
	      };
	    }var o = n(0),
	        i = n(20),
	        s = n(9),
	        a = n(11),
	        c = n(13),
	        u = n(8),
	        p = n(12),
	        f = n(15),
	        l = n(16),
	        h = n(10),
	        m = n(14),
	        d = { source: null, filename: null, rules: [l, f], escape: !0, debug: !!o && "production" !== process.env.NODE_ENV, bail: !1, cache: !0, minimize: !0, compileDebug: !1, resolveFilename: m, include: a, htmlMinifier: h, htmlMinifierOptions: { collapseWhitespace: !0, minifyCSS: !0, minifyJS: !0, ignoreCustomFragments: [] }, onerror: c, loader: p, caches: u, root: "/", extname: ".art", ignore: [], imports: i };r.prototype = d, e.exports = new r();
	  }, function (e, t) {}, function (e, t) {
	    var n;n = function () {
	      return this;
	    }();try {
	      n = n || Function("return this")() || (0, eval)("this");
	    } catch (r) {
	      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
	    }e.exports = n;
	  }, function (e, t) {
	    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
	      var t = { type: "invalid", value: e[0] };return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    e.exports = n(2);
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1),
	        o = function o(e, t, n) {
	      return r(e, n)(t);
	    };e.exports = o;
	  }, function (e, t, n) {
	    "use strict";
	    var r = { __data: Object.create(null), set: function set(e, t) {
	        this.__data[e] = t;
	      }, get: function get(e) {
	        return this.__data[e];
	      }, reset: function reset() {
	        this.__data = {};
	      } };e.exports = r;
	  }, function (e, t, n) {
	    "use strict";
	    var r = Object.prototype.toString,
	        o = function o(e) {
	      return null === e ? "Null" : r.call(e).slice(8, -1);
	    },
	        i = function s(e, t) {
	      var n = void 0,
	          r = o(e);if ("Object" === r ? n = Object.create(t || {}) : "Array" === r && (n = [].concat(t || [])), n) {
	        for (var i in e) {
	          e.hasOwnProperty(i) && (n[i] = s(e[i], n[i]));
	        }return n;
	      }return e;
	    };e.exports = i;
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(0),
	        o = function o(e, t) {
	      if (r) {
	        var o,
	            i = n(23).minify,
	            s = t.htmlMinifierOptions,
	            a = t.rules.map(function (e) {
	          return e.test;
	        });(o = s.ignoreCustomFragments).push.apply(o, a), e = i(e, s);
	      }return e;
	    };e.exports = o;
	  }, function (e, t, n) {
	    "use strict";
	    var r = function r(e, t, _r, o) {
	      var i = n(1);return o = o.$extend({ filename: o.resolveFilename(e, o), bail: !0, source: null }), i(o)(t, _r);
	    };e.exports = r;
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(0),
	        o = function o(e) {
	      if (r) {
	        return n(3).readFileSync(e, "utf8");
	      }var t = document.getElementById(e);return t.value || t.innerHTML;
	    };e.exports = o;
	  }, function (e, t, n) {
	    "use strict";
	    var r = function r(e) {
	      console.error(e.name, e.message);
	    };e.exports = r;
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(0),
	        o = /^\.+\//,
	        i = function i(e, t) {
	      if (r) {
	        var i = n(3),
	            s = t.root,
	            a = t.extname;if (o.test(e)) {
	          var c = t.filename,
	              u = !c || e === c,
	              p = u ? s : i.dirname(c);e = i.resolve(p, e);
	        } else e = i.resolve(s, e);i.extname(e) || (e += a);
	      }return e;
	    };e.exports = i;
	  }, function (e, t, n) {
	    "use strict";
	    var r = { test: /{{[ \t]*([@#]?)(\/?)([\w\W]*?)[ \t]*}}/, use: function use(e, t, n, o) {
	        var i = this,
	            s = i.options,
	            a = i.getEsTokens(o.trim()),
	            c = a.map(function (e) {
	          return e.value;
	        }),
	            u = {},
	            p = void 0,
	            f = !!t && "raw",
	            l = n + c.shift(),
	            h = function h(t, n) {
	          console && console.warn && console.warn((s.filename || "anonymous") + ":" + (e.line + 1) + ":" + (e.start + 1) + "\nTemplate upgrade: {{" + t + "}} -> {{" + n + "}}");
	        };switch ("#" === t && h("#value", "@value"), l) {case "set":
	            o = "var " + c.join("");break;case "if":
	            o = "if(" + c.join("") + "){";break;case "else":
	            var m = c.indexOf("if");m > -1 ? (c.splice(0, m + 1), o = "}else if(" + c.join("") + "){") : o = "}else{";break;case "/if":
	            o = "}";break;case "each":
	            p = r._split(a), p.shift(), "as" === p[1] && (h("each object as value index", "each object value index"), p.splice(1, 1));var d = p[0] || "$data",
	                v = p[1] || "$value",
	                g = p[2] || "$index";o = "$each(" + d + ",function(" + v + "," + g + "){";break;case "/each":
	            o = "})";break;case "echo":
	            l = "print", h("echo value", "value");case "print":case "include":case "extend":
	            p = r._split(a), p.shift(), o = l + "(" + p.join(",") + ")";break;case "block":
	            o = "block(" + c.join("") + ",function(){";break;case "/block":
	            o = "})";break;default:
	            if (-1 !== c.indexOf("|")) {
	              for (var y = l, b = [], x = c.filter(function (e) {
	                return !/^\s+$/.test(e);
	              }); "|" !== x[0];) {
	                y += x.shift();
	              }x.filter(function (e) {
	                return ":" !== e;
	              }).forEach(function (e) {
	                "|" === e ? b.push([]) : b[b.length - 1].push(e);
	              }), b.reduce(function (e, t) {
	                var n = t.shift();return t.unshift(e), o = "$imports." + n + "(" + t.join(",") + ")";
	              }, y);
	            } else o = "" + l + c.join("");f || (f = "escape");}return u.code = o, u.output = f, u;
	      }, _split: function _split(e) {
	        for (var t = 0, n = e.shift(), r = [[n]]; t < e.length;) {
	          var o = e[t],
	              i = o.type;"whitespace" !== i && "comment" !== i && ("punctuator" === n.type && "]" !== n.value || "punctuator" === i ? r[r.length - 1].push(o) : r.push([o]), n = o), t++;
	        }return r.map(function (e) {
	          return e.map(function (e) {
	            return e.value;
	          }).join("");
	        });
	      } };e.exports = r;
	  }, function (e, t, n) {
	    "use strict";
	    var r = { test: /<%(#?)((?:==|=#|[=-])?)([\w\W]*?)(-?)%>/, use: function use(e, t, n, r) {
	        return n = { "-": "raw", "=": "escape", "": !1, "==": "raw", "=#": "raw" }[n], t && (r = "/*" + e + "*/", n = !1), { code: r, output: n };
	      } };e.exports = r;
	  }, function (e, t, n) {
	    "use strict";
	    function r(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }var o = n(19),
	        i = n(21),
	        s = "$data",
	        a = "$imports",
	        c = "print",
	        u = "include",
	        p = "extend",
	        f = "block",
	        l = "$$out",
	        h = "$$line",
	        m = "$$blocks",
	        d = "$$slice",
	        v = "$$from",
	        g = "$$options",
	        y = function y(e, t) {
	      return e.hasOwnProperty(t);
	    },
	        b = JSON.stringify,
	        x = function () {
	      function e(t) {
	        var n,
	            o,
	            y = this;r(this, e);var b = t.source,
	            x = t.minimize,
	            w = t.htmlMinifier;if (this.options = t, this.stacks = [], this.context = [], this.scripts = [], this.CONTEXT_MAP = {}, this.ignore = [s, a, g].concat(t.ignore), this.internal = (n = {}, n[l] = "''", n[h] = "[0,0]", n[m] = "arguments[1]||{}", n[v] = "null", n[c] = "function(){var s=''.concat.apply('',arguments);" + l + "+=s;return s}", n[u] = "function(src,data){var s=" + g + ".include(src,data||" + s + ",arguments[2]||" + m + "," + g + ");" + l + "+=s;return s}", n[p] = "function(from){" + v + "=from}", n[d] = "function(c,p,s){p=" + l + ";" + l + "='';c();s=" + l + ";" + l + "=p+s;return s}", n[f] = "function(){var a=arguments,s;if(typeof a[0]==='function'){return " + d + "(a[0])}else if(" + v + "){" + m + "[a[0]]=" + d + "(a[1])}else{s=" + m + "[a[0]];if(typeof s==='string'){" + l + "+=s}else{s=" + d + "(a[1])}return s}}", n), this.dependencies = (o = {}, o[c] = [l], o[u] = [l, g, s, m], o[p] = [v, u], o[f] = [d, v, l, m], o), this.importContext(l), t.compileDebug && this.importContext(h), x) try {
	          b = w(b, t);
	        } catch (E) {}this.source = b, this.getTplTokens(b, t.rules, this).forEach(function (e) {
	          e.type === i.TYPE_STRING ? y.parseString(e) : y.parseExpression(e);
	        });
	      }return e.prototype.getTplTokens = function () {
	        return i.apply(undefined, arguments);
	      }, e.prototype.getEsTokens = function (e) {
	        return o(e);
	      }, e.prototype.getVariables = function (e) {
	        var t = !1;return e.filter(function (e) {
	          return "whitespace" !== e.type && "comment" !== e.type;
	        }).filter(function (e) {
	          return "name" === e.type && !t || (t = "punctuator" === e.type && "." === e.value, !1);
	        }).map(function (e) {
	          return e.value;
	        });
	      }, e.prototype.importContext = function (e) {
	        var t = this,
	            n = "",
	            r = this.internal,
	            o = this.dependencies,
	            i = this.ignore,
	            c = this.context,
	            u = this.options,
	            p = u.imports,
	            f = this.CONTEXT_MAP;y(f, e) || -1 !== i.indexOf(e) || (y(r, e) ? (n = r[e], y(o, e) && o[e].forEach(function (e) {
	          return t.importContext(e);
	        })) : n = "$escape" === e || "$each" === e || y(p, e) ? a + "." + e : s + "." + e, f[e] = n, c.push({ name: e, value: n }));
	      }, e.prototype.parseString = function (e) {
	        var t = e.value;if (t) {
	          var n = l + "+=" + b(t);this.scripts.push({ source: t, tplToken: e, code: n });
	        }
	      }, e.prototype.parseExpression = function (e) {
	        var t = this,
	            n = e.value,
	            r = e.script,
	            o = r.output,
	            s = r.code;o && (s = !1 === escape || o === i.TYPE_RAW ? l + "+=" + r.code : l + "+=$escape(" + r.code + ")");var a = this.getEsTokens(s);this.getVariables(a).forEach(function (e) {
	          return t.importContext(e);
	        }), this.scripts.push({ source: n, tplToken: e, code: s });
	      }, e.prototype.checkExpression = function (e) {
	        for (var t = [[/^\s*}[\w\W]*?{?[\s;]*$/, ""], [/(^[\w\W]*?\([\w\W]*?(?:=>|\([\w\W]*?\))\s*{[\s;]*$)/, "$1})"], [/(^[\w\W]*?\([\w\W]*?\)\s*{[\s;]*$)/, "$1}"]], n = 0; n < t.length;) {
	          if (t[n][0].test(e)) {
	            var r;e = (r = e).replace.apply(r, t[n]);break;
	          }n++;
	        }try {
	          return new Function(e), !0;
	        } catch (o) {
	          return !1;
	        }
	      }, e.prototype.build = function () {
	        var e = this.options,
	            t = this.context,
	            n = this.scripts,
	            r = this.stacks,
	            o = this.source,
	            c = e.filename,
	            f = e.imports,
	            d = [],
	            x = y(this.CONTEXT_MAP, p),
	            w = 0,
	            E = function E(e, t) {
	          var n = t.line,
	              o = t.start,
	              i = { generated: { line: r.length + w + 1, column: 1 }, original: { line: n + 1, column: o + 1 } };return w += e.split(/\n/).length - 1, i;
	        },
	            k = function k(e) {
	          return e.replace(/^[\t ]+|[\t ]$/g, "");
	        };r.push("function(" + s + "){"), r.push("'use strict'"), r.push(s + "=" + s + "||{}"), r.push("var " + t.map(function (e) {
	          return e.name + "=" + e.value;
	        }).join(",")), e.compileDebug ? (r.push("try{"), n.forEach(function (e) {
	          e.tplToken.type === i.TYPE_EXPRESSION && r.push(h + "=[" + [e.tplToken.line, e.tplToken.start].join(",") + "]"), d.push(E(e.code, e.tplToken)), r.push(k(e.code));
	        }), r.push("}catch(error){"), r.push("throw {" + ["name:'RuntimeError'", "path:" + b(c), "message:error.message", "line:" + h + "[0]+1", "column:" + h + "[1]+1", "source:" + b(o), "stack:error.stack"].join(",") + "}"), r.push("}")) : n.forEach(function (e) {
	          d.push(E(e.code, e.tplToken)), r.push(k(e.code));
	        }), x && (r.push(l + "=''"), r.push(u + "(" + v + "," + s + "," + m + ")")), r.push("return " + l), r.push("}");var T = r.join("\n");try {
	          var $ = new Function(a, g, "return " + T)(f, e);return $.mappings = d, $.sourcesContent = [o], $;
	        } catch (_) {
	          for (var O = 0, j = 0, S = 0; O < n.length;) {
	            var C = n[O];if (!this.checkExpression(C.code)) {
	              j = C.tplToken.line, S = C.tplToken.start;break;
	            }O++;
	          }throw { name: "CompileError", path: c, message: _.message, line: j + 1, column: S + 1, source: o, generated: T, stack: _.stack };
	        }
	      }, e;
	    }();x.CONSTS = { DATA: s, IMPORTS: a, PRINT: c, INCLUDE: u, EXTEND: p, BLOCK: f, OPTIONS: g, OUT: l, LINE: h, BLOCKS: m, SLICE: d, FROM: v, ESCAPE: "$escape", EACH: "$each" }, e.exports = x;
	  }, function (e, t, n) {
	    "use strict";
	    function r(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function o(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function i(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }function s(e) {
	      var t = e.name,
	          n = e.source,
	          r = e.path,
	          o = e.line,
	          i = e.column,
	          s = e.message;if (!n) return s;var a = n.split(/\n/),
	          c = Math.max(o - 3, 0),
	          u = Math.min(a.length, o + 3),
	          p = a.slice(c, u).map(function (e, t) {
	        var n = t + c + 1;return (n === o ? " >> " : "    ") + n + "| " + e;
	      }).join("\n");return (r || "anonymous") + ":" + o + ":" + i + "\n" + p + "\n\n" + t + ": " + s;
	    }var a = function (e) {
	      function t(n) {
	        r(this, t);var i = o(this, e.call(this, n.message));return i.name = "TemplateError", i.message = s(n), Error.captureStackTrace && Error.captureStackTrace(i, i.constructor), i;
	      }return i(t, e), t;
	    }(Error);e.exports = a;
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(24),
	        o = n(5)["default"],
	        i = n(5).matchToToken,
	        s = function s(e) {
	      return e.match(o).map(function (e) {
	        return o.lastIndex = 0, i(o.exec(e));
	      }).map(function (e) {
	        return "name" === e.type && r(e.value) && (e.type = "keyword"), e;
	      });
	    };e.exports = s;
	  }, function (e, t, n) {
	    "use strict";
	    (function (t) {
	      function r(e) {
	        return "string" != typeof e && (e = e === undefined || null === e ? "" : "function" == typeof e ? r(e.call(e)) : JSON.stringify(e)), e;
	      }function o(e) {
	        var t = "" + e,
	            n = a.exec(t);if (!n) return e;var r = "",
	            o = void 0,
	            i = void 0,
	            s = void 0;for (o = n.index, i = 0; o < t.length; o++) {
	          switch (t.charCodeAt(o)) {case 34:
	              s = "&#34;";break;case 38:
	              s = "&#38;";break;case 39:
	              s = "&#39;";break;case 60:
	              s = "&#60;";break;case 62:
	              s = "&#62;";break;default:
	              continue;}i !== o && (r += t.substring(i, o)), i = o + 1, r += s;
	        }return i !== o ? r + t.substring(i, o) : r;
	      } /*! art-template@runtime | https://github.com/aui/art-template */
	      var i = n(0),
	          s = Object.create(i ? t : window),
	          a = /["&'<>]/;s.$escape = function (e) {
	        return o(r(e));
	      }, s.$each = function (e, t) {
	        if (Array.isArray(e)) for (var n = 0, r = e.length; n < r; n++) {
	          t(e[n], n);
	        } else for (var o in e) {
	          t(e[o], o);
	        }
	      }, e.exports = s;
	    }).call(t, n(4));
	  }, function (e, t, n) {
	    "use strict";
	    function r(e, t, n, r) {
	      this.content = e, this.line = t, this.start = n, this.end = r;
	    }r.prototype.toString = function () {
	      return this.content;
	    };var o = function o(e, t) {
	      for (var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, o = [{ type: "string", value: e, line: 0, start: 0, end: e.length }], i = 0; i < t.length; i++) {
	        !function (e) {
	          for (var t = e.test.ignoreCase ? "ig" : "g", i = e.test.source + "|^$|[\\w\\W]", s = new RegExp(i, t), a = 0; a < o.length; a++) {
	            if ("string" === o[a].type) {
	              for (var c = o[a].line, u = o[a].start, p = o[a].end, f = o[a].value.match(s), l = [], h = 0; h < f.length; h++) {
	                var m = f[h];e.test.lastIndex = 0;var d = e.test.exec(m),
	                    v = d ? "expression" : "string",
	                    g = l[l.length - 1],
	                    y = g || o[a],
	                    b = y.value;u = y.line === c ? g ? g.end : u : b.length - b.lastIndexOf("\n") - 1, p = u + m.length;var x = { type: v, value: m, line: c, start: u, end: p };if ("string" === v) g && "string" === g.type ? (g.value += m, g.end += m.length) : l.push(x);else {
	                  d[0] = new r(d[0], c, u, p);var w = e.use.apply(n, d);x.script = w, l.push(x);
	                }c += m.split(/\n/).length - 1;
	              }o.splice.apply(o, [a, 1].concat(l)), a += l.length - 1;
	            }
	          }
	        }(t[i]);
	      }return o;
	    };o.TYPE_STRING = "string", o.TYPE_EXPRESSION = "expression", o.TYPE_RAW = "raw", o.TYPE_ESCAPE = "escape", e.exports = o;
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(7),
	        o = n(1),
	        i = n(6),
	        s = function s(e, t) {
	      return t instanceof Object ? r({ filename: e }, t) : o({ filename: e, source: t });
	    };s.render = r, s.compile = o, s.defaults = i, e.exports = s;
	  }, function (e, t) {
	    !function (e) {
	      e.noop = function () {};
	    }("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports : window);
	  }, function (e, t, n) {
	    "use strict";
	    var r = { "abstract": !0, "await": !0, "boolean": !0, "break": !0, "byte": !0, "case": !0, "catch": !0, "char": !0, "class": !0, "const": !0, "continue": !0, "debugger": !0, "default": !0, "delete": !0, "do": !0, "double": !0, "else": !0, "enum": !0, "export": !0, "extends": !0, "false": !0, "final": !0, "finally": !0, "float": !0, "for": !0, "function": !0, "goto": !0, "if": !0, "implements": !0, "import": !0, "in": !0, "instanceof": !0, "int": !0, "interface": !0, "let": !0, "long": !0, "native": !0, "new": !0, "null": !0, "package": !0, "private": !0, "protected": !0, "public": !0, "return": !0, "short": !0, "static": !0, "super": !0, "switch": !0, "synchronized": !0, "this": !0, "throw": !0, "transient": !0, "true": !0, "try": !0, "typeof": !0, "var": !0, "void": !0, "volatile": !0, "while": !0, "with": !0, "yield": !0 };e.exports = function (e) {
	      return r.hasOwnProperty(e);
	    };
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

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
	function defaultClearTimeout() {
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
	})();
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
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
	    while (len) {
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(3);

	var _omi2 = _interopRequireDefault(_omi);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	var _event = __webpack_require__(9);

	var _event2 = _interopRequireDefault(_event);

	var _morphdom = __webpack_require__(10);

	var _morphdom2 = _interopRequireDefault(_morphdom);

	var _html2json = __webpack_require__(11);

	var _html2json2 = _interopRequireDefault(_html2json);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	    function Component(data, option) {
	        _classCallCheck(this, Component);

	        var componentOption = Object.assign({
	            server: false,
	            ignoreStoreData: false,
	            preventSelfUpdate: false,
	            selfDataFirst: false,
	            domDiffDisabled: false,
	            scopedSelfCSS: false
	        }, option);
	        this._omi_scopedSelfCSS = componentOption.scopedSelfCSS;
	        this._omi_preventSelfUpdate = componentOption.preventSelfUpdate;
	        this._omi_domDiffDisabled = componentOption.domDiffDisabled;
	        this._omi_ignoreStoreData = componentOption.ignoreStoreData;
	        //re render the server-side rendering html on the client-side
	        var type = Object.prototype.toString.call(data);
	        var isReRendering = type !== '[object Object]' && type !== '[object Undefined]';
	        if (isReRendering) {
	            this.renderTo = typeof data === "string" ? document.querySelector(data) : data;
	            this._hidden = this.renderTo.querySelector('.omi_scoped__hidden_data');
	            this.id = this._hidden.dataset.omiId;
	            this.data = JSON.parse(this._hidden.value);
	        } else {
	            this.data = data || {};
	            this._omi_server_rendering = componentOption.server;
	            this.id = this._omi_server_rendering ? 1000000 + _omi2['default'].getInstanceId() : _omi2['default'].getInstanceId();
	        }
	        this.refs = {};
	        this.children = [];

	        this.HTML = null;

	        _omi2['default'].instances[this.id] = this;
	        this.selfDataFirst = componentOption.selfDataFirst;

	        this._omi_scoped_attr = _omi2['default'].STYLESCOPEDPREFIX + this.id;
	        //this.BODY_ELEMENT = document.createElement('body')
	        this._preCSS = null;
	        this._omiGroupDataCounter = {};
	        this._omi_installedHandlers = null;
	        if (this._omi_server_rendering || isReRendering) {
	            this.install();
	            this._render(true);
	            this._childrenInstalled(this);
	            this.installed();
	            this._execInstalledHandlers();
	        }
	    }

	    _createClass(Component, [{
	        key: 'install',
	        value: function install() {}
	    }, {
	        key: 'installed',
	        value: function installed() {}
	    }, {
	        key: 'onInstalled',
	        value: function onInstalled(handler) {
	            if (!this._omi_installedHandlers) {
	                this._omi_installedHandlers = [];
	            }
	            this._omi_installedHandlers.push(handler);
	        }
	    }, {
	        key: '_execInstalledHandlers',
	        value: function _execInstalledHandlers() {
	            this._omi_installedHandlers && this._omi_installedHandlers.forEach(function (handler) {
	                handler();
	            });
	        }
	    }, {
	        key: 'uninstall',
	        value: function uninstall() {}
	    }, {
	        key: 'afterUpdate',
	        value: function afterUpdate() {}
	    }, {
	        key: 'beforeUpdate',
	        value: function beforeUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {}
	    }, {
	        key: 'style',
	        value: function style() {}
	    }, {
	        key: 'beforeRender',
	        value: function beforeRender() {}
	    }, {
	        key: 'useStore',
	        value: function useStore(store) {
	            var _this = this;

	            this.$$store = store;
	            var isInclude = false;
	            store.instances.forEach(function (instance) {
	                if (instance.id === _this.id) {
	                    isInclude = true;
	                }
	            });
	            if (!isInclude) {
	                store.instances.push(this);
	            }
	        }
	    }, {
	        key: 'updateSelf',
	        value: function updateSelf() {
	            this.beforeUpdate();
	            if (this.renderTo) {
	                this._render(false, true);
	            } else {
	                if (this._omi_preventSelfUpdate) return;
	                // update child node
	                if (this._omi_removed) {
	                    var hdNode = this._createHiddenNode();
	                    this.node.parentNode.replaceChild(hdNode, this.node);
	                    this.node = hdNode;
	                } else {
	                    (0, _morphdom2['default'])(this.node, (0, _event2['default'])(this._childRender(this._omiChildStr, true), this.id), {
	                        ignoreAttr: this._getIgnoreAttr()
	                    });

	                    this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
	                    this._queryElements(this);
	                    this._fixForm();
	                }
	            }
	            this.afterUpdate();
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.beforeUpdate();
	            this._childrenBeforeUpdate(this);
	            this._omiGroupDataCounter = {};
	            if (this.renderTo) {
	                this._render();
	            } else {
	                if (this._omi_preventSelfUpdate) return;
	                // update child node
	                if (this._omi_removed) {
	                    var hdNode = this._createHiddenNode();
	                    this.node.parentNode.replaceChild(hdNode, this.node);
	                    this.node = hdNode;
	                } else {
	                    if (this._omi_domDiffDisabled) {
	                        this.node.parentNode.replaceChild(_morphdom2['default'].toElement((0, _event2['default'])(this._childRender(this._omiChildStr), this.id)), this.node);
	                    } else {
	                        (0, _morphdom2['default'])(this.node, (0, _event2['default'])(this._childRender(this._omiChildStr), this.id));
	                    }
	                    this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
	                    this._queryElements(this);
	                    this._fixForm();
	                }
	            }

	            this._childrenAfterUpdate(this);
	            this.afterUpdate();
	        }
	    }, {
	        key: '_childrenBeforeUpdate',
	        value: function _childrenBeforeUpdate(root) {
	            var _this2 = this;

	            root.children.forEach(function (child) {
	                child.beforeUpdate();
	                child._omiGroupDataCounter = {};
	                _this2._childrenBeforeUpdate(child);
	            });
	        }
	    }, {
	        key: '_childrenAfterUpdate',
	        value: function _childrenAfterUpdate(root) {
	            var _this3 = this;

	            root.children.forEach(function (child) {
	                _this3._childrenAfterUpdate(child);
	                child.afterUpdate();
	            });
	        }
	    }, {
	        key: 'setData',
	        value: function setData(data, update) {
	            this.data = data;
	            if (update) {
	                this.update();
	            }
	        }
	    }, {
	        key: 'removeChild',
	        value: function removeChild(indexOrChild) {
	            var child = indexOrChild;
	            if (typeof indexOrChild === 'number') {
	                child = this.children[indexOrChild];
	            }

	            child.remove();
	        }
	    }, {
	        key: 'restoreChild',
	        value: function restoreChild(indexOrChild) {
	            var child = indexOrChild;
	            if (typeof indexOrChild === 'number') {
	                child = this.children[indexOrChild];
	            }

	            child.restore();
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            this._omi_removed = true;
	            this.update();
	            this.uninstall();
	        }
	    }, {
	        key: 'restore',
	        value: function restore() {
	            this._omi_removed = false;
	            this.update();
	            this.installed();
	            this._execInstalledHandlers();
	        }
	    }, {
	        key: '_render',
	        value: function _render(isFirst, isSelf) {
	            var _this4 = this;

	            if (this._omi_removed) {
	                var node = this._createHiddenNode();
	                if (!isFirst) {
	                    this.node.parentNode.replaceChild(node, this.node);
	                    this.node = node;
	                } else if (this.renderTo) {
	                    this.renderTo.appendChild(node);
	                }
	                return;
	            }
	            if (this._omi_autoStoreToData) {
	                if (!this._omi_ignoreStoreData) {
	                    this.data = this.$store.data;
	                }
	            }
	            this.beforeRender();
	            this._generateHTMLCSS();
	            if (!isSelf) {
	                this._extractChildren(this);
	            } else {
	                this._extractChildrenString(this);
	            }

	            this.children.forEach(function (item) {
	                _this4.HTML = _this4.HTML.replace(item._omiChildStr, isSelf ? item.node.outerHTML : item.HTML);
	            });

	            this.HTML = (0, _event2['default'])(this.HTML, this.id);
	            if (isFirst) {
	                if (this.renderTo) {
	                    if (this._omi_increment) {
	                        this.renderTo.insertAdjacentHTML('beforeend', this.HTML);
	                    } else {
	                        this.renderTo.innerHTML = this.HTML;
	                    }
	                }
	            } else {
	                if (this.HTML !== "") {
	                    if (this._omi_domDiffDisabled) {
	                        this.renderTo.innerHTML = this.HTML;
	                    } else {
	                        (0, _morphdom2['default'])(this.node, this.HTML, isSelf ? {
	                            ignoreAttr: this._getIgnoreAttr()
	                        } : null);
	                    }
	                } else {
	                    (0, _morphdom2['default'])(this.node, this._createHiddenNode());
	                }
	            }
	            //get node prop from parent node
	            if (this.renderTo) {
	                this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
	                this._queryElements(this);
	                this._fixForm();
	            }
	        }
	    }, {
	        key: '_getIgnoreAttr',
	        value: function _getIgnoreAttr() {
	            var arr = [];
	            this.children.forEach(function (child) {
	                arr.push(child._omi_scoped_attr);
	            });
	            return arr;
	        }
	    }, {
	        key: '_childRender',
	        value: function _childRender(childStr, isSelf) {
	            var _this5 = this;

	            if (this._omi_removed) {
	                this.HTML = '<input type="hidden" omi_scoped_' + this.id + ' >';
	                return this.HTML;
	            }
	            //childStr = childStr.replace("<child", "<div").replace("/>", "></div>")
	            this._mergeData(childStr);
	            if (this.parent._omi_autoStoreToData) {
	                this._omi_autoStoreToData = true;
	                if (!this._omi_ignoreStoreData) {
	                    this.data = this.$store.data;
	                }
	            }
	            this.beforeRender();
	            this._fixSlot(this._generateHTMLCSS());
	            if (!isSelf) {
	                this._extractChildren(this);
	            } else {
	                this._extractChildrenString(this);
	            }

	            this.children.forEach(function (item) {
	                _this5.HTML = _this5.HTML.replace(item._omiChildStr, isSelf ? item.node.outerHTML : item.HTML);
	            });
	            this.HTML = (0, _event2['default'])(this.HTML, this.id);
	            return this.HTML;
	        }
	    }, {
	        key: '_fixSlot',
	        value: function _fixSlot(shareAttr) {
	            var _this6 = this;

	            if (!this._omi_slotContent) return;
	            this._omi_slotContent = this._scopedAttr(this._omi_slotContent, this._omi_scoped_attr, shareAttr);
	            var nodes = _morphdom2['default'].toElements(this._omi_slotContent);
	            var slotMatch = this.HTML.match(/<slot[\s\S]*?<\/slot>/g);
	            if (nodes.length === 1 && slotMatch && slotMatch.length === 1) {
	                this.HTML = this.HTML.replace(/<slot[\s\S]*?<\/slot>/, this._omi_slotContent);
	            } else {
	                nodes.sort(function (a, b) {
	                    return parseInt(a.getAttribute('slot-index')) - parseInt(b.getAttribute('slot-index'));
	                });
	                nodes.forEach(function (node) {
	                    _this6.HTML = _this6.HTML.replace(/<slot[\s\S]*?<\/slot>/, node.outerHTML);
	                });
	            }
	        }
	    }, {
	        key: '_queryElements',
	        value: function _queryElements(current) {
	            current._mixRefs();
	            current._execPlugins();
	            current.children.forEach(function (item) {
	                item.node = current.node.querySelector("[" + _omi2['default'].STYLESCOPEDPREFIX + item.id + "]");
	                //recursion get node prop from parent node
	                item.node && current._queryElements(item);
	            });
	        }
	    }, {
	        key: '_mixRefs',
	        value: function _mixRefs() {
	            var _this7 = this;

	            var nodes = _omi2['default'].$$('*[ref]', this.node);
	            nodes.forEach(function (node) {
	                if (node.hasAttribute(_this7._omi_scoped_attr)) {
	                    _this7.refs[node.getAttribute('ref')] = node;
	                }
	            });
	            var attr = this.node.getAttribute('ref');
	            if (attr) {
	                this.refs[attr] = this.node;
	            }
	        }
	    }, {
	        key: '_execPlugins',
	        value: function _execPlugins() {
	            var _this8 = this;

	            Object.keys(_omi2['default'].plugins).forEach(function (item) {
	                var nodes = _omi2['default'].$$('*[' + item + ']', _this8.node);
	                nodes.forEach(function (node) {
	                    if (node.hasAttribute(_this8._omi_scoped_attr)) {
	                        _omi2['default'].plugins[item](node, _this8);
	                    }
	                });
	                if (_this8.node.hasAttribute(item)) {
	                    _omi2['default'].plugins[item](_this8.node, _this8);
	                }
	            });
	        }
	    }, {
	        key: '_childrenInstalled',
	        value: function _childrenInstalled(root) {
	            var _this9 = this;

	            root.children.forEach(function (child) {
	                _this9._childrenInstalled(child);
	                child.installed();
	                child._execInstalledHandlers();
	            });
	        }
	    }, {
	        key: '_fixForm',
	        value: function _fixForm() {

	            _omi2['default'].$$('input', this.node).forEach(function (element) {
	                var type = element.type.toLowerCase();
	                if (element.getAttribute('value') === '') {
	                    element.value = '';
	                }
	                if (type === 'checked' || type === 'radio') {
	                    if (element.hasAttribute('checked')) {
	                        element.checked = 'checked';
	                    } else {
	                        element.checked = false;
	                    }
	                }
	            });

	            _omi2['default'].$$('textarea', this.node).forEach(function (textarea) {
	                textarea.value = textarea.getAttribute('value');
	            });

	            _omi2['default'].$$('select', this.node).forEach(function (select) {
	                var value = select.getAttribute('value');
	                if (value) {
	                    _omi2['default'].$$('option', select).forEach(function (option) {
	                        if (value === option.getAttribute('value')) {
	                            option.setAttribute('selected', 'selected');
	                        }
	                    });
	                } else {
	                    var firstOption = _omi2['default'].$$('option', select)[0];
	                    firstOption && firstOption.setAttribute('selected', 'selected');
	                }
	            });
	        }
	    }, {
	        key: '_replaceTags',
	        value: function _replaceTags(array, html, updateSelf) {
	            var _this10 = this;

	            if (_omi2['default'].customTags.length === 0) return;
	            var str = array.join("|");
	            var reg = new RegExp('<(' + str + '+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>\\s]+))?)*)\\s*((\\/>)|>(([\\s\\S]*?)<\\/\\1>))', 'g');
	            var index = 0;
	            return html.replace(reg, function (m, a, b, c, d, e, f) {
	                if (updateSelf) {
	                    var cmi = _this10.children[index];
	                    if (cmi && cmi.___omi_constructor_name === a) {
	                        cmi._omiChildStr = m;
	                    }
	                } else {
	                    _this10._initComponentByString(a, m, f, index++, _this10);
	                }
	            });
	        }
	    }, {
	        key: '_createHiddenNode',
	        value: function _createHiddenNode() {
	            var hdNode = document.createElement("input");
	            hdNode.setAttribute("type", "hidden");
	            hdNode.setAttribute(this._omi_scoped_attr, '');
	            return hdNode;
	        }
	    }, {
	        key: '_mergeData',
	        value: function _mergeData(childStr) {
	            if (this.selfDataFirst) {
	                this.data = Object.assign({}, this._getDataset(childStr), this.data);
	            } else {
	                this.data = Object.assign({}, this.data, this._getDataset(childStr));
	            }
	        }
	    }, {
	        key: '_generateHTMLCSS',
	        value: function _generateHTMLCSS() {
	            this.CSS = (this.style() || '').replace(/<\/?style>/g, '');
	            var shareAttr = this.___omi_constructor_name ? _omi2['default'].STYLESCOPEDPREFIX + this.___omi_constructor_name.toLowerCase() : this._omi_scoped_attr;
	            if (this.CSS) {
	                if (this._omi_scopedSelfCSS || !_omi2['default'].style[shareAttr]) {
	                    this.CSS = _style2['default'].scoper(this.CSS, this._omi_scopedSelfCSS ? "[" + this._omi_scoped_attr + "]" : "[" + shareAttr + "]");
	                    _omi2['default'].style[shareAttr] = this.CSS;
	                    if (this.CSS !== this._preCSS && !this._omi_server_rendering) {
	                        _style2['default'].addStyle(this.CSS, this.id);
	                        this._preCSS = this.CSS;
	                    }
	                }
	            }
	            var tpl = this.render();
	            this.HTML = this._scopedAttr(_omi2['default'].template(tpl ? tpl : "", this.data), this._omi_scoped_attr, shareAttr).trim();
	            if (this._omi_server_rendering) {
	                this.HTML = '\r\n<style id="' + _omi2['default'].STYLEPREFIX + this.id + '">\r\n' + this.CSS + '\r\n</style>\r\n' + this.HTML;
	                this.HTML += '\r\n<input type="hidden" data-omi-id="' + this.id + '" class="' + _omi2['default'].STYLESCOPEDPREFIX + '_hidden_data" value=\'' + JSON.stringify(this.data) + '\'  />\r\n';
	            }

	            return shareAttr;
	        }
	    }, {
	        key: '_scopedAttr',
	        value: function _scopedAttr(html, id, shareAtrr) {
	            var _this11 = this;

	            return html.replace(/<[^/]([A-Za-z]*)[^>]*>/g, function (m) {
	                var str = m.split(" ")[0].replace(">", "");
	                if (_this11._omi_scopedSelfCSS || !_this11.___omi_constructor_name) {
	                    return m.replace(str, str + " " + id);
	                } else {
	                    return m.replace(str, str + " " + id + " " + shareAtrr);
	                }
	            });
	        }
	    }, {
	        key: '_getDataset',
	        value: function _getDataset(childStr) {
	            var _this12 = this;

	            var json = (0, _html2json2['default'])(childStr);
	            var attr = json.child[0].attr;
	            var baseData = {};
	            Object.keys(attr).forEach(function (key) {
	                var value = attr[key];
	                if (key.indexOf('on') === 0) {
	                    var handler = _this12.parent[value];
	                    if (handler) {
	                        baseData[_this12._capitalize(key)] = handler.bind(_this12.parent);
	                    }
	                } else if (key.indexOf('data-') === 0) {
	                    _this12._dataset[_this12._capitalize(key.replace('data-', ''))] = value;
	                } else if (key.indexOf(':data-') === 0) {
	                    _this12._dataset[_this12._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')');
	                } else if (key.indexOf('::data-') === 0) {
	                    _this12._dataset[_this12._capitalize(key.replace('::data-', ''))] = _this12._extractPropertyFromString(value, _this12.parent);
	                } else if (key === 'data') {
	                    _this12._dataset = _this12._extractPropertyFromString(value, _this12.parent);
	                } else if (key === ':data') {
	                    _this12._dataset = eval('(' + value + ')');
	                } else if (key === 'group-data') {
	                    _this12._dataset = _this12._extractPropertyFromString(value, _this12.parent)[_this12._omi_groupDataIndex];
	                }
	            });

	            return Object.assign(baseData, this._dataset);
	        }
	    }, {
	        key: '_capitalize',
	        value: function _capitalize(str) {
	            str = str.toLowerCase();
	            str = str.replace(/\b\w+\b/g, function (word) {
	                return word.substring(0, 1).toUpperCase() + word.substring(1);
	            }).replace(/-/g, '');
	            return str.substring(0, 1).toLowerCase() + str.substring(1);
	        }
	    }, {
	        key: '_extractPropertyFromString',
	        value: function _extractPropertyFromString(str, instance) {
	            var arr = str.replace(/['|"|\]]/g, '').replace(/\[/g, '.').split('.');
	            var current = instance;
	            arr.forEach(function (prop) {
	                current = current[prop];
	            });
	            arr = null;
	            return current;
	        }
	    }, {
	        key: '_extractChildrenString',
	        value: function _extractChildrenString(child) {
	            this._replaceTags(_omi2['default'].customTags, child.HTML, true);
	        }
	    }, {
	        key: '_extractChildren',
	        value: function _extractChildren(child) {
	            this._replaceTags(_omi2['default'].customTags, child.HTML);
	        }
	    }, {
	        key: '_initComponentByString',
	        value: function _initComponentByString(name, childStr, slotContent, i, child) {
	            var _this13 = this;

	            var json = (0, _html2json2['default'])(childStr);
	            var attr = json.child[0].attr;
	            var cmi = this.children[i];
	            //if not first time to invoke _extractChildren method
	            if (cmi && cmi.___omi_constructor_name === name) {
	                cmi._omiChildStr = childStr;
	                cmi._omi_slotContent = slotContent;
	                Object.keys(attr).forEach(function (key) {
	                    var value = attr[key];
	                    if (key === 'group-data') {
	                        if (child._omiGroupDataCounter.hasOwnProperty(value)) {
	                            child._omiGroupDataCounter[value]++;
	                        } else {
	                            child._omiGroupDataCounter[value] = 0;
	                        }
	                        cmi._omi_groupDataIndex = child._omiGroupDataCounter[value];
	                    }
	                });

	                cmi._childRender(childStr);
	            } else {
	                var baseData = {};
	                var dataset = {};

	                var groupDataIndex = null;
	                var omiID = null;
	                var instanceName = null;
	                var _omi_option = {};

	                Object.keys(attr).forEach(function (key) {
	                    var value = attr[key];
	                    if (key.indexOf('on') === 0) {
	                        var handler = child[value];
	                        if (handler) {
	                            baseData[_this13._capitalize(key)] = handler.bind(child);
	                        }
	                    } else if (key === 'omi-id') {
	                        omiID = value;
	                    } else if (key === 'name') {
	                        instanceName = value;
	                    } else if (key === 'group-data') {
	                        if (child._omiGroupDataCounter.hasOwnProperty(value)) {
	                            child._omiGroupDataCounter[value]++;
	                        } else {
	                            child._omiGroupDataCounter[value] = 0;
	                        }
	                        groupDataIndex = child._omiGroupDataCounter[value];
	                        dataset = _this13._extractPropertyFromString(value, child)[groupDataIndex];
	                    } else if (key.indexOf('data-') === 0) {
	                        dataset[_this13._capitalize(key.replace('data-', ''))] = value;
	                    } else if (key.indexOf(':data-') === 0) {
	                        dataset[_this13._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')');
	                    } else if (key.indexOf('::data-') === 0) {
	                        dataset[_this13._capitalize(key.replace('::data-', ''))] = _this13._extractPropertyFromString(value, child);
	                    } else if (key === 'data') {
	                        dataset = _this13._extractPropertyFromString(value, child);
	                    } else if (key === ':data') {
	                        dataset = eval('(' + value + ')');
	                    } else if (key === 'preventSelfUpdate' || key === 'psu' || key === 'preventselfupdate') {
	                        _omi_option.preventSelfUpdate = true;
	                    } else if (key === 'selfDataFirst' || key === 'sdf' || key === 'selfdatafirst') {
	                        _omi_option.selfDataFirst = true;
	                    } else if (key === 'domDiffDisabled' || key === 'ddd' || key === 'domdiffdisabled') {
	                        _omi_option.domDiffDisabled = true;
	                    } else if (key === 'ignoreStoreData' || key === 'isd' || key === 'ignorestoredata') {
	                        _omi_option.ignoreStoreData = true;
	                    } else if (key === 'scopedSelfCSS' || key === 'ssc' || key === 'scopedselfcss') {
	                        _omi_option.scopedSelfCSS = true;
	                    }
	                });

	                var ChildClass = _omi2['default'].getClassFromString(name);
	                if (!ChildClass) throw "Can't find Class called [" + name + "]";
	                var sub_child = new ChildClass(Object.assign(baseData, dataset), _omi_option);
	                sub_child._omi_groupDataIndex = groupDataIndex;
	                sub_child._omiChildStr = childStr;
	                sub_child._omi_slotContent = slotContent;
	                sub_child.parent = child;
	                sub_child.$store = child.$store;
	                sub_child.___omi_constructor_name = name;
	                sub_child._dataset = {};
	                sub_child.install();

	                omiID && (_omi2['default'].mapping[omiID] = sub_child);
	                instanceName && (child[instanceName] = sub_child);

	                if (!cmi) {
	                    child.children.push(sub_child);
	                } else {
	                    child.children[i] = sub_child;
	                }

	                sub_child._childRender(childStr);
	            }
	        }
	    }]);

	    return Component;
	}();

	exports['default'] = Component;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _omi = __webpack_require__(3);

	var _omi2 = _interopRequireDefault(_omi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	//many thanks to https://github.com/thomaspark/scoper/
	function scoper(css, prefix) {
	    //https://www.w3.org/TR/css-syntax-3/#lexical
	    css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');

	    var re = new RegExp("([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)", "g");
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
	        if (typeof g2 === "undefined") {
	            g2 = "";
	        }

	        if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
	            return g1 + g2 + g3;
	        }

	        var appendClass = g1.replace(/(\s*)$/, "") + prefix + g2;
	        var prependClass = prefix + " " + g1.trim() + g2;
	        return appendClass + "," + prependClass + g3;
	    });

	    return css;
	}

	function addStyle(cssText, id) {
	    var ele = document.getElementById(_omi2['default'].STYLEPREFIX + id),
	        head = document.getElementsByTagName('head')[0];
	    if (ele && ele.parentNode === head) {
	        head.removeChild(ele);
	    }

	    var someThingStyles = document.createElement('style');
	    head.appendChild(someThingStyles);
	    someThingStyles.setAttribute('type', 'text/css');
	    someThingStyles.setAttribute('id', _omi2['default'].STYLEPREFIX + id);
	    if (!!window.ActiveXObject) {
	        someThingStyles.styleSheet.cssText = cssText;
	    } else {
	        someThingStyles.textContent = cssText;
	    }
	}

	exports['default'] = {
	    scoper: scoper,
	    addStyle: addStyle
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function scopedEvent(tpl, id) {
	    return tpl.replace(/<[\s\S]*?>/g, function (item) {
	        return item.replace(/on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave|Abort|Blur|Cancel|CanPlay|CanPlayThrough|Change|Click|Close|ContextMenu|CueChange|DblClick|Drag|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|DurationChange|Emptied|Ended|Error|Focus|Input|Invalid|KeyDown|KeyPress|KeyUp|Load|LoadedData|LoadedMetadata|LoadStart|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Pause|Play|Playing|Progress|RateChange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|TimeUpdate|Toggle|VolumeChange|Waiting|AutoComplete|AutoCompleteError|BeforeCopy|BeforeCut|BeforePaste|Copy|Cut|Paste|Search|SelectStart|Wheel|WebkitFullScreenChange|WebkitFullScreenError|TouchStart|TouchMove|TouchEnd|TouchCancel|PointerDown|PointerUp|PointerCancel|PointerMove|PointerOver|PointerOut|PointerEnter|PointerLeave)=(('([\s\S]*?)')|("([\s\S]*?)"))/g, function (eventStr, b, c) {
	            if (c.indexOf('Omi.instances[') === 1) {
	                return eventStr;
	            } else if (c.lastIndexOf(')') === c.length - 2) {
	                return eventStr.replace(/=(['|"])/, '=$1Omi.instances[' + id + '].');
	            } else {
	                var str = eventStr.replace(/=(['|"])/, '=$1Omi.instances[' + id + '].');
	                return str.substr(0, str.length - 1) + "(event)" + str.substr(str.length - 1, 1);
	            }
	        });
	    });
	}

	exports['default'] = scopedEvent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.morphdom = factory();
	})(undefined, function () {
	    'use strict';

	    var range; // Create a range object for efficently rendering strings to elements.
	    var NS_XHTML = 'http://www.w3.org/1999/xhtml';

	    var doc = typeof document === 'undefined' ? undefined : document;

	    var testEl = doc ? doc.body || doc.createElement('div') : {};

	    // Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
	    // (IE7+ support) <=IE7 does not support el.hasAttribute(name)
	    var actualHasAttributeNS;

	    if (testEl.hasAttributeNS) {
	        actualHasAttributeNS = function actualHasAttributeNS(el, namespaceURI, name) {
	            return el.hasAttributeNS(namespaceURI, name);
	        };
	    } else if (testEl.hasAttribute) {
	        actualHasAttributeNS = function actualHasAttributeNS(el, namespaceURI, name) {
	            return el.hasAttribute(name);
	        };
	    } else {
	        actualHasAttributeNS = function actualHasAttributeNS(el, namespaceURI, name) {
	            return el.getAttributeNode(namespaceURI, name) != null;
	        };
	    }

	    var hasAttributeNS = actualHasAttributeNS;

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

	    function toElements(str) {
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

	        var arr = [],
	            i = 0,
	            len = fragment.childNodes.length;
	        for (; i < len; i++) {
	            var item = fragment.childNodes[i];
	            if (item.nodeType === 1) {
	                arr.push(item);
	            }
	        }
	        return arr;
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

	        if (toEl.actualize && fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
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
	        return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
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

	    function morphAttrs(fromNode, toNode) {
	        var attrs = toNode.attributes;
	        var i;
	        var attr;
	        var attrName;
	        var attrNamespaceURI;
	        var attrValue;
	        var fromValue;

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

	                    if (!hasAttributeNS(toNode, attrNamespaceURI, attrName)) {
	                        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
	                    }
	                } else {
	                    if (!hasAttributeNS(toNode, null, attrName)) {
	                        fromNode.removeAttribute(attrName);
	                    }
	                }
	            }
	        }
	    }

	    function syncBooleanAttrProp(fromEl, toEl, name) {
	        if (fromEl[name] !== toEl[name]) {
	            fromEl[name] = toEl[name];
	            if (fromEl[name]) {
	                fromEl.setAttribute(name, '');
	            } else {
	                fromEl.removeAttribute(name, '');
	            }
	        }
	    }

	    var specialElHandlers = {
	        /**
	         * Needed for IE. Apparently IE doesn't think that "selected" is an
	         * attribute when reading over the attributes using selectEl.attributes
	         */
	        OPTION: function OPTION(fromEl, toEl) {
	            syncBooleanAttrProp(fromEl, toEl, 'selected');
	        },
	        /**
	         * The "value" attribute is special for the <input> element since it sets
	         * the initial value. Changing the "value" attribute without changing the
	         * "value" property will have no effect since it is only used to the set the
	         * initial value.  Similar for the "checked" attribute, and "disabled".
	         */
	        INPUT: function INPUT(fromEl, toEl) {
	            syncBooleanAttrProp(fromEl, toEl, 'checked');
	            syncBooleanAttrProp(fromEl, toEl, 'disabled');

	            if (fromEl.value !== toEl.value) {
	                fromEl.value = toEl.value;
	            }

	            if (!hasAttributeNS(toEl, null, 'value')) {
	                fromEl.removeAttribute('value');
	            }
	        },

	        TEXTAREA: function TEXTAREA(fromEl, toEl) {
	            var newValue = toEl.value;
	            if (fromEl.value !== newValue) {
	                fromEl.value = newValue;
	            }

	            if (fromEl.firstChild) {
	                // Needed for IE. Apparently IE sets the placeholder as the
	                // node value and vise versa. This ignores an empty update.
	                if (newValue === '' && fromEl.firstChild.nodeValue === fromEl.placeholder) {
	                    return;
	                }

	                fromEl.firstChild.nodeValue = newValue;
	            }
	        },
	        SELECT: function SELECT(fromEl, toEl) {
	            if (!hasAttributeNS(toEl, null, 'multiple')) {
	                var selectedIndex = -1;
	                var i = 0;
	                var curChild = toEl.firstChild;
	                while (curChild) {
	                    var nodeName = curChild.nodeName;
	                    if (nodeName && nodeName.toUpperCase() === 'OPTION') {
	                        if (hasAttributeNS(curChild, null, 'selected')) {
	                            selectedIndex = i;
	                            break;
	                        }
	                        i++;
	                    }
	                    curChild = curChild.nextSibling;
	                }

	                fromEl.selectedIndex = i;
	            }
	        }
	    };

	    var ELEMENT_NODE = 1;
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
	            var ignoreAttr = options.ignoreAttr;
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
	                if (node.nodeType === ELEMENT_NODE) {
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

	            function morphEl(fromEl, toEl, childrenOnly) {
	                if (ignoreAttr) {
	                    var ignoreF = false,
	                        ignoreT = false,
	                        attrF = null,
	                        attrT = null;
	                    for (var _i = 0, _len = ignoreAttr.length; _i < _len; _i++) {
	                        var selector = ignoreAttr[_i];
	                        if (!ignoreF && fromEl.getAttribute(selector) !== null) {
	                            ignoreF = true;
	                            attrF = selector;
	                        }
	                        if (!ignoreT && toEl.getAttribute(selector) !== null) {
	                            ignoreT = true;
	                            attrT = selector;
	                        }
	                        if (ignoreF && ignoreT) break;
	                    }
	                    if (ignoreF && ignoreT && attrF === attrT) {
	                        return;
	                    }
	                }
	                var toElKey = getNodeKey(toEl);
	                var curFromNodeKey;

	                if (toElKey) {
	                    // If an element with an ID is being morphed then it is will be in the final
	                    // DOM so clear it out of the saved elements collection
	                    delete fromNodesLookup[toElKey];
	                }

	                if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
	                    return;
	                }

	                if (!childrenOnly) {
	                    if (onBeforeElUpdated(fromEl, toEl) === false) {
	                        return;
	                    }

	                    morphAttrs(fromEl, toEl);
	                    onElUpdated(fromEl);

	                    if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
	                        return;
	                    }
	                }

	                if (fromEl.nodeName !== 'TEXTAREA') {
	                    var curToNodeChild = toEl.firstChild;
	                    var curFromNodeChild = fromEl.firstChild;
	                    var curToNodeKey;

	                    var fromNextSibling;
	                    var toNextSibling;
	                    var matchingFromEl;

	                    outer: while (curToNodeChild) {
	                        toNextSibling = curToNodeChild.nextSibling;
	                        curToNodeKey = getNodeKey(curToNodeChild);

	                        while (curFromNodeChild) {
	                            fromNextSibling = curFromNodeChild.nextSibling;

	                            if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
	                                curToNodeChild = toNextSibling;
	                                curFromNodeChild = fromNextSibling;
	                                continue outer;
	                            }

	                            curFromNodeKey = getNodeKey(curFromNodeChild);

	                            var curFromNodeType = curFromNodeChild.nodeType;

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
	                                            if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
	                                                if (curFromNodeChild.nextSibling === matchingFromEl) {
	                                                    // Special case for single element removals. To avoid removing the original
	                                                    // DOM node out of the tree (since that can break CSS transitions, etc.),
	                                                    // we will instead discard the current node and wait until the next
	                                                    // iteration to properly match up the keyed target element with its matching
	                                                    // element in the original tree
	                                                    isCompatible = false;
	                                                } else {
	                                                    // We found a matching keyed element somewhere in the original DOM tree.
	                                                    // Let's moving the original DOM node into the current position and morph
	                                                    // it.

	                                                    // NOTE: We use insertBefore instead of replaceChild because we want to go through
	                                                    // the `removeNode()` function for the node that is being discarded so that
	                                                    // all lifecycle hooks are correctly invoked
	                                                    fromEl.insertBefore(matchingFromEl, curFromNodeChild);

	                                                    fromNextSibling = curFromNodeChild.nextSibling;

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
	                                        morphEl(curFromNodeChild, curToNodeChild);
	                                    }
	                                } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
	                                    // Both nodes being compared are Text or Comment nodes
	                                    isCompatible = true;
	                                    // Simply update nodeValue on the original node to
	                                    // change the text value
	                                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
	                                }
	                            }

	                            if (isCompatible) {
	                                // Advance both the "to" child and the "from" child since we found a match
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
	                        }

	                        // If we got this far then we did not find a candidate match for
	                        // our "to node" and we exhausted all of the children "from"
	                        // nodes. Therefore, we will just append the current "to" node
	                        // to the end
	                        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
	                            fromEl.appendChild(matchingFromEl);
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

	                    // We have processed all of the "to nodes". If curFromNodeChild is
	                    // non-null then we still have some from nodes left over that need
	                    // to be removed
	                    while (curFromNodeChild) {
	                        fromNextSibling = curFromNodeChild.nextSibling;
	                        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
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

	                var specialElHandler = specialElHandlers[fromEl.nodeName];
	                if (specialElHandler) {
	                    specialElHandler(fromEl, toEl);
	                }
	            } // END: morphEl(...)

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
	                } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
	                    // Text or comment node
	                    if (toNodeType === morphedNodeType) {
	                        morphedNode.nodeValue = toNode.nodeValue;
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
	                    for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
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
	    morphdom.toElement = toElement;
	    morphdom.toElements = toElements;
	    return morphdom;
	});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	 *  html2json for omi
	 *  https://github.com/AlloyTeam/omi
	 *
	 *  Original code by John Resig (ejohn.org)
	 *  http://ejohn.org/blog/pure-javascript-html-parser/
	 *  Original code by Erik Arvidsson, Mozilla Public License
	 *  http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 *  Original code by Jxck
	 *  https://github.com/Jxck/html2json
	 */

	// Regular Expressions for parsing tags and attributes
	var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
	    endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
	    attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

	var HTMLParser = function HTMLParser(html, handler) {
	    var index,
	        chars,
	        match,
	        stack = [],
	        last = html;
	    stack.last = function () {
	        return this[this.length - 1];
	    };

	    while (html) {
	        chars = true;

	        // Make sure we're not in a script or style element
	        if (!stack.last()) {

	            if (html.indexOf("</") == 0) {
	                match = html.match(endTag);

	                if (match) {
	                    html = html.substring(match[0].length);
	                    match[0].replace(endTag, parseEndTag);
	                    chars = false;
	                }

	                // start tag
	            } else if (html.indexOf("<") == 0) {
	                match = html.match(startTag);

	                if (match) {
	                    html = html.substring(match[0].length);
	                    match[0].replace(startTag, parseStartTag);
	                    chars = false;
	                }
	            }

	            if (chars) {
	                index = html.indexOf("<");

	                var text = index < 0 ? html : html.substring(0, index);
	                html = index < 0 ? "" : html.substring(index);

	                if (handler.chars) handler.chars(text);
	            }
	        } else {
	            html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {

	                if (handler.chars) handler.chars(text);

	                return "";
	            });

	            parseEndTag("", stack.last());
	        }

	        if (html == last) throw "Parse Error: " + html;
	        last = html;
	    }

	    // Clean up any remaining tags
	    parseEndTag();

	    function parseStartTag(tag, tagName, rest, unary) {
	        //tagName = tagName.toLowerCase();

	        unary = !!unary;

	        if (!unary) stack.push(tagName);

	        if (handler.start) {
	            var attrs = [];

	            rest.replace(attr, function (match, name) {
	                var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : "";

	                attrs.push({
	                    name: name,
	                    value: value,
	                    escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
	                });
	            });

	            if (handler.start) handler.start(tagName, attrs, unary);
	        }
	    }

	    function parseEndTag(tag, tagName) {
	        // If no tag name is provided, clean shop
	        if (!tagName) var pos = 0;

	        // Find the closest opened tag of the same type
	        else for (var pos = stack.length - 1; pos >= 0; pos--) {
	                if (stack[pos] == tagName) break;
	            }if (pos >= 0) {
	            // Close all the open elements, up the stack
	            for (var i = stack.length - 1; i >= pos; i--) {
	                if (handler.end) handler.end(stack[i]);
	            } // Remove the open elements from the stack
	            stack.length = pos;
	        }
	    }
	};

	var DEBUG = false;
	var debug = DEBUG ? console.log.bind(console) : function () {};

	// Production steps of ECMA-262, Edition 5, 15.4.4.21
	// Reference: http://es5.github.io/#x15.4.4.21
	if (!Array.prototype.reduce) {
	    Array.prototype.reduce = function (callback /*, initialValue*/) {
	        'use strict';

	        if (this == null) {
	            throw new TypeError('Array.prototype.reduce called on null or undefined');
	        }
	        if (typeof callback !== 'function') {
	            throw new TypeError(callback + ' is not a function');
	        }
	        var t = Object(this),
	            len = t.length >>> 0,
	            k = 0,
	            value;
	        if (arguments.length == 2) {
	            value = arguments[1];
	        } else {
	            while (k < len && !(k in t)) {
	                k++;
	            }
	            if (k >= len) {
	                throw new TypeError('Reduce of empty array with no initial value');
	            }
	            value = t[k++];
	        }
	        for (; k < len; k++) {
	            if (k in t) {
	                value = callback(value, t[k], k, t);
	            }
	        }
	        return value;
	    };
	}

	var html2json = function html2json(html) {

	    var bufArray = [];
	    var results = {
	        node: 'root',
	        child: []
	    };
	    HTMLParser(html, {
	        start: function start(tag, attrs, unary) {
	            debug(tag, attrs, unary);
	            // node for this element
	            var node = {
	                node: 'element',
	                tag: tag
	            };
	            if (attrs.length !== 0) {
	                node.attr = attrs.reduce(function (pre, attr) {
	                    var name = attr.name;
	                    var value = attr.value;

	                    pre[name] = value;
	                    return pre;
	                }, {});
	            }
	            if (unary) {
	                // if this tag dosen't have end tag
	                // like <img src="hoge.png"/>
	                // add to parents
	                var parent = bufArray[0] || results;
	                if (parent.child === undefined) {
	                    parent.child = [];
	                }
	                parent.child.push(node);
	            } else {
	                bufArray.unshift(node);
	            }
	        },
	        end: function end(tag) {
	            debug(tag);
	            // merge into parent tag
	            var node = bufArray.shift();
	            if (node.tag !== tag) console.error('invalid state: mismatch end tag');

	            if (bufArray.length === 0) {
	                results.child.push(node);
	            } else {
	                var parent = bufArray[0];
	                if (parent.child === undefined) {
	                    parent.child = [];
	                }
	                parent.child.push(node);
	            }
	        },
	        chars: function chars(text) {
	            debug(text);
	            var node = {
	                node: 'text',
	                text: text
	            };
	            if (bufArray.length === 0) {
	                results.child.push(node);
	            } else {
	                var parent = bufArray[0];
	                if (parent.child === undefined) {
	                    parent.child = [];
	                }
	                parent.child.push(node);
	            }
	        }
	    });
	    return results;
	};

	exports["default"] = html2json;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Store = function () {
	    function Store(isReady) {
	        _classCallCheck(this, Store);

	        this.readyHandlers = [];
	        this.isReady = isReady;
	        this.instances = [];
	        this.updateSelfInstances = [];
	    }

	    _createClass(Store, [{
	        key: "ready",
	        value: function ready(readyHandler) {
	            if (this.isReady) {
	                readyHandler();
	                return;
	            }
	            this.readyHandlers.push(readyHandler);
	        }
	    }, {
	        key: "addSelfView",
	        value: function addSelfView(view) {
	            var added = false;

	            for (var i = 0, len = this.updateSelfInstances.length; i < len; i++) {
	                if (this.updateSelfInstances[i].id === view.id) {
	                    added = true;
	                    break;
	                }
	            }
	            if (!added) {
	                this.updateSelfInstances.push(view);
	            }
	        }
	    }, {
	        key: "addView",
	        value: function addView(view) {
	            var added = false;

	            for (var i = 0, len = this.instances.length; i < len; i++) {
	                if (this.instances[i].id === view.id) {
	                    added = true;
	                    break;
	                }
	            }
	            if (!added) {
	                this.instances.push(view);
	            }
	        }
	    }, {
	        key: "beReady",
	        value: function beReady() {
	            this.isReady = true;
	            this.readyHandlers.forEach(function (handler) {
	                return handler();
	            });
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            this._mergeInstances();
	            this._mergeSelfInstances();
	            this.instances.forEach(function (instance) {
	                return instance.update();
	            });
	            this.updateSelfInstances.forEach(function (instance) {
	                return instance.updateSelf();
	            });
	        }
	    }, {
	        key: "_mergeSelfInstances",
	        value: function _mergeSelfInstances() {
	            var _this = this;

	            var arr = [];
	            this.updateSelfInstances.forEach(function (instance) {
	                if (!_this._checkSelfUpdateInstance(instance)) {
	                    arr.push(instance);
	                }
	            });
	            this.updateSelfInstances = arr;
	        }
	    }, {
	        key: "_mergeInstances",
	        value: function _mergeInstances() {
	            var _this2 = this;

	            var arr = [];
	            this.idArr = [];
	            this.instances.forEach(function (instance) {
	                _this2.idArr.push(instance.id);
	            });

	            this.instances.forEach(function (instance) {
	                if (!instance.parent) {
	                    arr.push(instance);
	                } else {
	                    if (!_this2._isSubInstance(instance)) {
	                        arr.push(instance);
	                    }
	                }
	            });

	            this.instances = arr;
	        }
	    }, {
	        key: "_checkSelfUpdateInstance",
	        value: function _checkSelfUpdateInstance(instance) {
	            if (this.idArr.indexOf(instance.id) !== -1) {
	                return true;
	            } else if (instance.parent) {
	                return this._checkSelfUpdateInstance(instance.parent);
	            }
	        }
	    }, {
	        key: "_isSubInstance",
	        value: function _isSubInstance(instance) {
	            if (this.idArr.indexOf(instance.parent.id) !== -1) {
	                return true;
	            } else if (instance.parent.parent) {
	                return this._isSubInstance(instance.parent);
	            }
	        }
	    }]);

	    return Store;
	}();

	exports["default"] = Store;

/***/ })
/******/ ]);