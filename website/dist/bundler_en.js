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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _frame = __webpack_require__(1);

	var _frame2 = _interopRequireDefault(_frame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	Omi.render(new _frame2['default']({ lan: "en" }), 'body', true);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _content = __webpack_require__(10);

	var _content2 = _interopRequireDefault(_content);

	var _sidebar = __webpack_require__(42);

	var _sidebar2 = _interopRequireDefault(_sidebar);

	var _head = __webpack_require__(44);

	var _head2 = _interopRequireDefault(_head);

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_index2['default'].makeHTML('Content', _content2['default']);
	_index2['default'].makeHTML('Sidebar', _sidebar2['default']);
	_index2['default'].makeHTML('Head', _head2['default']);

	var Frame = function (_Omi$Component) {
	    _inherits(Frame, _Omi$Component);

	    function Frame(data) {
	        _classCallCheck(this, Frame);

	        return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, data));
	    }

	    _createClass(Frame, [{
	        key: 'install',
	        value: function install() {
	            this.setViewport();
	            //window.onresize = ()=> {
	            //    this.setViewport();
	            //    this.update();
	            //}
	        }
	    }, {
	        key: 'setViewport',
	        value: function setViewport() {
	            if (window.innerWidth < 768) {
	                this.data.width = '95%';
	            } else {
	                this.data.width = window.innerWidth - 220 + 'px';
	            }
	        }
	    }, {
	        key: 'installed',
	        value: function installed() {
	            this.highlightBlock(true);
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return '\n        .main{\n            position: absolute;\n            left:220px;\n            top:45px;\n            overflow-x:hidden;\n            overflow-y:auto;\n            -webkit-overflow-scrolling : touch;\n        }\n\n        @media only screen and (max-width: 768px) {\n            .main{\n                left:2%;\n            }\n\n\n        }\n        ';
	        }
	    }, {
	        key: 'afterUpdate',
	        value: function afterUpdate() {
	            this.highlightBlock();
	        }
	    }, {
	        key: '_$$',
	        value: function _$$(expr, con) {
	            return Array.prototype.slice.call((con || document).querySelectorAll(expr));
	        }
	    }, {
	        key: 'highlightBlock',
	        value: function highlightBlock(lh) {
	            if (this.data.lan === 'en') return;
	            var codes = document.querySelectorAll("code");
	            for (var i = 0, len = codes.length; i < len; i++) {
	                //innerText bug��ie11 remove the \r\n??
	                // detail:  http://www.cnblogs.com/fsjohnhuang/p/4319635.html
	                // so textContent
	                var html = Prism.highlight(codes[i].textContent, Prism.languages.javascript);
	                codes[i].innerHTML = html;
	                codes[i].classList.add('language-js');
	            }

	            var pres = document.querySelectorAll("pre");
	            var highlight = _config2['default'].highlight;

	            for (var key in _config2['default'].highlight) {
	                pres[key] && pres[key].setAttribute("data-line", highlight[key]);
	            }

	            this._$$('pre').forEach(function (item) {
	                item.classList.add('language-js');
	            });

	            if (!lh) lineHighLight();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '<div>\n                <Head data-lan="{{lan}}" />\n                <div class="main"  style="width:{{width}};">\n                  <Content data-lan="{{lan}}" />\n                </div>\n                <Sidebar omi-id="sidebar" data-lan="{{lan}}" />\n                </div>';
	        }
	    }]);

	    return Frame;
	}(_index2['default'].Component);

	exports['default'] = Frame;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _omi = __webpack_require__(3);

	var _omi2 = _interopRequireDefault(_omi);

	var _mustache = __webpack_require__(4);

	var _mustache2 = _interopRequireDefault(_mustache);

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	_omi2['default'].template = _mustache2['default'].render;

	_omi2['default'].Component = _component2['default'];

	window.Omi = _omi2['default'];
	module.exports = _omi2['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

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
	    Omi[tagName] = function (parent) {
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

	    return Omi[tagName];
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
	    if (str.indexOf('.') !== 0) {
	        var arr = str.split('.');
	        var len = arr.length;
	        var current = Omi[arr[0]];
	        for (var i = 1; i < len; i++) {
	            current = current[arr[i]];
	        }
	        return current;
	    } else {
	        return Omi[str];
	    }
	};

	//��ǰ��Component�ľ�̬�������Ƶ�omi��������Ȼmakehtml ��ie��child���ʲ������׵ľ�̬����
	Omi.makeHTML = function (name, ctor) {
	    Omi[name] = ctor;
	    Omi.customTags.push(name);
	};

	Omi.render = function (component, renderTo, increment) {
	    component.renderTo = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo;
	    component._omi_increment = increment;
	    component.install();
	    component._render(true);
	    component.installed();
	    component._childrenInstalled(component);
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

	module.exports = Omi;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache(global, factory) {
	    if (( false ? 'undefined' : _typeof(exports)) === 'object' && exports && typeof exports.nodeName !== 'string') {
	        factory(exports); // CommonJS
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else {
	        global.Mustache = {};
	        factory(global.Mustache); // script, wsh, asp
	    }
	})(undefined, function mustacheFactory(mustache) {

	    var objectToString = Object.prototype.toString;
	    var isArray = Array.isArray || function isArrayPolyfill(object) {
	        return objectToString.call(object) === '[object Array]';
	    };

	    function isFunction(object) {
	        return typeof object === 'function';
	    }

	    /**
	     * More correct typeof string handling array
	     * which normally returns typeof 'object'
	     */
	    function typeStr(obj) {
	        return isArray(obj) ? 'array' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    }

	    function escapeRegExp(string) {
	        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	    }

	    /**
	     * Null safe way of checking whether or not an object,
	     * including its prototype, has a given property
	     */
	    function hasProperty(obj, propName) {
	        return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && propName in obj;
	    }

	    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	    // See https://github.com/janl/mustache.js/issues/189
	    var regExpTest = RegExp.prototype.test;
	    function testRegExp(re, string) {
	        return regExpTest.call(re, string);
	    }

	    var nonSpaceRe = /\S/;
	    function isWhitespace(string) {
	        return !testRegExp(nonSpaceRe, string);
	    }

	    var entityMap = {
	        '&': '&amp;',
	        '<': '&lt;',
	        '>': '&gt;',
	        '"': '&quot;',
	        "'": '&#39;',
	        '/': '&#x2F;',
	        '`': '&#x60;',
	        '=': '&#x3D;'
	    };

	    function escapeHtml(string) {
	        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
	            return entityMap[s];
	        });
	    }

	    var whiteRe = /\s*/;
	    var spaceRe = /\s+/;
	    var equalsRe = /\s*=/;
	    var curlyRe = /\s*\}/;
	    var tagRe = /#|\^|\/|>|\{|&|=|!/;

	    /**
	     * Breaks up the given `template` string into a tree of tokens. If the `tags`
	     * argument is given here it must be an array with two string values: the
	     * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	     * course, the default is to use mustaches (i.e. mustache.tags).
	     *
	     * A token is an array with at least 4 elements. The first element is the
	     * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	     * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	     * all text that appears outside a symbol this element is "text".
	     *
	     * The second element of a token is its "value". For mustache tags this is
	     * whatever else was inside the tag besides the opening symbol. For text tokens
	     * this is the text itself.
	     *
	     * The third and fourth elements of the token are the start and end indices,
	     * respectively, of the token in the original template.
	     *
	     * Tokens that are the root node of a subtree contain two more elements: 1) an
	     * array of tokens in the subtree and 2) the index in the original template at
	     * which the closing tag for that section begins.
	     */
	    function parseTemplate(template, tags) {
	        if (!template) return [];

	        var sections = []; // Stack to hold section tokens
	        var tokens = []; // Buffer to hold the tokens
	        var spaces = []; // Indices of whitespace tokens on the current line
	        var hasTag = false; // Is there a {{tag}} on the current line?
	        var nonSpace = false; // Is there a non-space char on the current line?

	        // Strips all whitespace tokens array for the current line
	        // if there was a {{#tag}} on it and otherwise only space.
	        function stripSpace() {
	            if (hasTag && !nonSpace) {
	                while (spaces.length) {
	                    delete tokens[spaces.pop()];
	                }
	            } else {
	                spaces = [];
	            }

	            hasTag = false;
	            nonSpace = false;
	        }

	        var openingTagRe, closingTagRe, closingCurlyRe;
	        function compileTags(tagsToCompile) {
	            if (typeof tagsToCompile === 'string') tagsToCompile = tagsToCompile.split(spaceRe, 2);

	            if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error('Invalid tags: ' + tagsToCompile);

	            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	            closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	            closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	        }

	        compileTags(tags || mustache.tags);

	        var scanner = new Scanner(template);

	        var start, type, value, chr, token, openSection;
	        while (!scanner.eos()) {
	            start = scanner.pos;

	            // Match any text between tags.
	            value = scanner.scanUntil(openingTagRe);

	            if (value) {
	                for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	                    chr = value.charAt(i);

	                    if (isWhitespace(chr)) {
	                        spaces.push(tokens.length);
	                    } else {
	                        nonSpace = true;
	                    }

	                    tokens.push(['text', chr, start, start + 1]);
	                    start += 1;

	                    // Check for whitespace on the current line.
	                    if (chr === '\n') stripSpace();
	                }
	            }

	            // Match the opening tag.
	            if (!scanner.scan(openingTagRe)) break;

	            hasTag = true;

	            // Get the tag type.
	            type = scanner.scan(tagRe) || 'name';
	            scanner.scan(whiteRe);

	            // Get the tag value.
	            if (type === '=') {
	                value = scanner.scanUntil(equalsRe);
	                scanner.scan(equalsRe);
	                scanner.scanUntil(closingTagRe);
	            } else if (type === '{') {
	                value = scanner.scanUntil(closingCurlyRe);
	                scanner.scan(curlyRe);
	                scanner.scanUntil(closingTagRe);
	                type = '&';
	            } else {
	                value = scanner.scanUntil(closingTagRe);
	            }

	            // Match the closing tag.
	            if (!scanner.scan(closingTagRe)) throw new Error('Unclosed tag at ' + scanner.pos);

	            token = [type, value, start, scanner.pos];
	            tokens.push(token);

	            if (type === '#' || type === '^') {
	                sections.push(token);
	            } else if (type === '/') {
	                // Check section nesting.
	                openSection = sections.pop();

	                if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);

	                if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	            } else if (type === 'name' || type === '{' || type === '&') {
	                nonSpace = true;
	            } else if (type === '=') {
	                // Set the tags for the next time around.
	                compileTags(value);
	            }
	        }

	        // Make sure there are no open sections when we're done.
	        openSection = sections.pop();

	        if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	        return nestTokens(squashTokens(tokens));
	    }

	    /**
	     * Combines the values of consecutive text tokens in the given `tokens` array
	     * to a single token.
	     */
	    function squashTokens(tokens) {
	        var squashedTokens = [];

	        var token, lastToken;
	        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	            token = tokens[i];

	            if (token) {
	                if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	                    lastToken[1] += token[1];
	                    lastToken[3] = token[3];
	                } else {
	                    squashedTokens.push(token);
	                    lastToken = token;
	                }
	            }
	        }

	        return squashedTokens;
	    }

	    /**
	     * Forms the given array of `tokens` into a nested tree structure where
	     * tokens that represent a section have two additional items: 1) an array of
	     * all tokens that appear in that section and 2) the index in the original
	     * template that represents the end of that section.
	     */
	    function nestTokens(tokens) {
	        var nestedTokens = [];
	        var collector = nestedTokens;
	        var sections = [];

	        var token, section;
	        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	            token = tokens[i];

	            switch (token[0]) {
	                case '#':
	                case '^':
	                    collector.push(token);
	                    sections.push(token);
	                    collector = token[4] = [];
	                    break;
	                case '/':
	                    section = sections.pop();
	                    section[5] = token[2];
	                    collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	                    break;
	                default:
	                    collector.push(token);
	            }
	        }

	        return nestedTokens;
	    }

	    /**
	     * A simple string scanner that is used by the template parser to find
	     * tokens in template strings.
	     */
	    function Scanner(string) {
	        this.string = string;
	        this.tail = string;
	        this.pos = 0;
	    }

	    /**
	     * Returns `true` if the tail is empty (end of string).
	     */
	    Scanner.prototype.eos = function eos() {
	        return this.tail === '';
	    };

	    /**
	     * Tries to match the given regular expression at the current position.
	     * Returns the matched text if it can match, the empty string otherwise.
	     */
	    Scanner.prototype.scan = function scan(re) {
	        var match = this.tail.match(re);

	        if (!match || match.index !== 0) return '';

	        var string = match[0];

	        this.tail = this.tail.substring(string.length);
	        this.pos += string.length;

	        return string;
	    };

	    /**
	     * Skips all text until the given regular expression can be matched. Returns
	     * the skipped string, which is the entire tail if no match can be made.
	     */
	    Scanner.prototype.scanUntil = function scanUntil(re) {
	        var index = this.tail.search(re),
	            match;

	        switch (index) {
	            case -1:
	                match = this.tail;
	                this.tail = '';
	                break;
	            case 0:
	                match = '';
	                break;
	            default:
	                match = this.tail.substring(0, index);
	                this.tail = this.tail.substring(index);
	        }

	        this.pos += match.length;

	        return match;
	    };

	    /**
	     * Represents a rendering context by wrapping a view object and
	     * maintaining a reference to the parent context.
	     */
	    function Context(view, parentContext) {
	        this.view = view;
	        this.cache = { '.': this.view };
	        this.parent = parentContext;
	    }

	    /**
	     * Creates a new context using the given view with this context
	     * as the parent.
	     */
	    Context.prototype.push = function push(view) {
	        return new Context(view, this);
	    };

	    /**
	     * Returns the value of the given name in this context, traversing
	     * up the context hierarchy if the value is absent in this context's view.
	     */
	    Context.prototype.lookup = function lookup(name) {
	        var cache = this.cache;

	        var value;
	        if (cache.hasOwnProperty(name)) {
	            value = cache[name];
	        } else {
	            var context = this,
	                names,
	                index,
	                lookupHit = false;

	            while (context) {
	                if (name.indexOf('.') > 0) {
	                    value = context.view;
	                    names = name.split('.');
	                    index = 0;

	                    /**
	                     * Using the dot notion path in `name`, we descend through the
	                     * nested objects.
	                     *
	                     * To be certain that the lookup has been successful, we have to
	                     * check if the last object in the path actually has the property
	                     * we are looking for. We store the result in `lookupHit`.
	                     *
	                     * This is specially necessary for when the value has been set to
	                     * `undefined` and we want to avoid looking up parent contexts.
	                     **/
	                    while (value != null && index < names.length) {
	                        if (index === names.length - 1) lookupHit = hasProperty(value, names[index]);

	                        value = value[names[index++]];
	                    }
	                } else {
	                    value = context.view[name];
	                    lookupHit = hasProperty(context.view, name);
	                }

	                if (lookupHit) break;

	                context = context.parent;
	            }

	            cache[name] = value;
	        }

	        if (isFunction(value)) value = value.call(this.view);

	        return value;
	    };

	    /**
	     * A Writer knows how to take a stream of tokens and render them to a
	     * string, given a context. It also maintains a cache of templates to
	     * avoid the need to parse the same template twice.
	     */
	    function Writer() {
	        this.cache = {};
	    }

	    /**
	     * Clears all cached templates in this writer.
	     */
	    Writer.prototype.clearCache = function clearCache() {
	        this.cache = {};
	    };

	    /**
	     * Parses and caches the given `template` and returns the array of tokens
	     * that is generated from the parse.
	     */
	    Writer.prototype.parse = function parse(template, tags) {
	        var cache = this.cache;
	        var tokens = cache[template];

	        if (tokens == null) tokens = cache[template] = parseTemplate(template, tags);

	        return tokens;
	    };

	    /**
	     * High-level method that is used to render the given `template` with
	     * the given `view`.
	     *
	     * The optional `partials` argument may be an object that contains the
	     * names and templates of partials that are used in the template. It may
	     * also be a function that is used to load partial templates on the fly
	     * that takes a single argument: the name of the partial.
	     */
	    Writer.prototype.render = function render(template, view, partials) {
	        var tokens = this.parse(template);
	        var context = view instanceof Context ? view : new Context(view);
	        return this.renderTokens(tokens, context, partials, template);
	    };

	    /**
	     * Low-level method that renders the given array of `tokens` using
	     * the given `context` and `partials`.
	     *
	     * Note: The `originalTemplate` is only ever used to extract the portion
	     * of the original template that was contained in a higher-order section.
	     * If the template doesn't use higher-order sections, this argument may
	     * be omitted.
	     */
	    Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
	        var buffer = '';

	        var token, symbol, value;
	        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	            value = undefined;
	            token = tokens[i];
	            symbol = token[0];

	            if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);else if (symbol === '&') value = this.unescapedValue(token, context);else if (symbol === 'name') value = this.escapedValue(token, context);else if (symbol === 'text') value = this.rawValue(token);

	            if (value !== undefined) buffer += value;
	        }

	        return buffer;
	    };

	    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
	        var self = this;
	        var buffer = '';
	        var value = context.lookup(token[1]);

	        // This function is used to render an arbitrary template
	        // in the current context by higher-order sections.
	        function subRender(template) {
	            return self.render(template, context, partials);
	        }

	        if (!value) return;

	        if (isArray(value)) {
	            for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	            }
	        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'string' || typeof value === 'number') {
	            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	        } else if (isFunction(value)) {
	            if (typeof originalTemplate !== 'string') throw new Error('Cannot use higher-order sections without the original template');

	            // Extract the portion of the original template that the section contains.
	            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	            if (value != null) buffer += value;
	        } else {
	            buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	        }
	        return buffer;
	    };

	    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
	        var value = context.lookup(token[1]);

	        // Use JavaScript's definition of falsy. Include empty arrays.
	        // See https://github.com/janl/mustache.js/issues/186
	        if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate);
	    };

	    Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
	        if (!partials) return;

	        var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	        if (value != null) return this.renderTokens(this.parse(value), context, partials, value);
	    };

	    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
	        var value = context.lookup(token[1]);
	        if (value != null) return value;
	    };

	    Writer.prototype.escapedValue = function escapedValue(token, context) {
	        var value = context.lookup(token[1]);
	        if (value != null) return mustache.escape(value);
	    };

	    Writer.prototype.rawValue = function rawValue(token) {
	        return token[1];
	    };

	    mustache.name = 'mustache.js';
	    mustache.version = '2.3.0';
	    mustache.tags = ['{{', '}}'];

	    // All high-level mustache.* functions use this writer.
	    var defaultWriter = new Writer();

	    /**
	     * Clears all cached templates in the default writer.
	     */
	    mustache.clearCache = function clearCache() {
	        return defaultWriter.clearCache();
	    };

	    /**
	     * Parses and caches the given template in the default writer and returns the
	     * array of tokens it contains. Doing this ahead of time avoids the need to
	     * parse templates on the fly as they are rendered.
	     */
	    mustache.parse = function parse(template, tags) {
	        return defaultWriter.parse(template, tags);
	    };

	    /**
	     * Renders the `template` with the given `view` and `partials` using the
	     * default writer.
	     */
	    mustache.render = function render(template, view, partials) {
	        if (typeof template !== 'string') {
	            throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + 'argument for mustache#render(template, view, partials)');
	        }

	        return defaultWriter.render(template, view, partials);
	    };

	    // This is here for backwards compatibility with 0.4.x.,
	    /*eslint-disable */ // eslint wants camel cased function name
	    mustache.to_html = function to_html(template, view, partials, send) {
	        /*eslint-enable*/

	        var result = mustache.render(template, view, partials);

	        if (isFunction(send)) {
	            send(result);
	        } else {
	            return result;
	        }
	    };

	    // Export the escaping function so that the user may override it.
	    // See https://github.com/janl/mustache.js/issues/244
	    mustache.escape = escapeHtml;

	    // Export these mainly for testing, but also for advanced usage.
	    mustache.Scanner = Scanner;
	    mustache.Context = Context;
	    mustache.Writer = Writer;

	    return mustache;
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(3);

	var _omi2 = _interopRequireDefault(_omi);

	var _style = __webpack_require__(6);

	var _style2 = _interopRequireDefault(_style);

	var _event = __webpack_require__(7);

	var _event2 = _interopRequireDefault(_event);

	var _diff = __webpack_require__(8);

	var _diff2 = _interopRequireDefault(_diff);

	var _html2json = __webpack_require__(9);

	var _html2json2 = _interopRequireDefault(_html2json);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	    function Component(data, server) {
	        _classCallCheck(this, Component);

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
	            this._omi_server_rendering = server;
	            this.id = this._omi_server_rendering ? 1000000 + _omi2['default'].getInstanceId() : _omi2['default'].getInstanceId();
	        }
	        this.refs = {};
	        this.children = [];
	        this.childrenData = [];
	        this.HTML = null;
	        this._addedItems = [];
	        this._omi_order = [];
	        _omi2['default'].instances[this.id] = this;
	        this.dataFirst = true;
	        this._omi_scoped_attr = _omi2['default'].STYLESCOPEDPREFIX + this.id;
	        //this.BODY_ELEMENT = document.createElement('body');
	        this._preCSS = null;
	        this._omiGroupDataCounter = {};
	        if (this._omi_server_rendering || isReRendering) {
	            this.install();
	            this._render(true);
	            this.installed();
	            this._childrenInstalled(this);
	        }
	    }

	    _createClass(Component, [{
	        key: 'install',
	        value: function install() {}
	    }, {
	        key: 'installed',
	        value: function installed() {}
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
	        key: 'update',
	        value: function update() {
	            this.beforeUpdate();
	            if (this.renderTo) {
	                this._render();
	            } else {
	                // update child node
	                if (this._omi_removed) {
	                    var hdNode = this._createHiddenNode();
	                    this.node.parentNode.replaceChild(hdNode, this.node);
	                    this.node = hdNode;
	                } else {
	                    (0, _diff2['default'])(this.node, (0, _event2['default'])(this._childRender(this._omiChildStr), this.id));

	                    this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
	                    this._queryElements(this);
	                    this._fixForm();
	                }
	            }
	            //update added components
	            this._renderAddedChildren();
	            this.afterUpdate();
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
	        key: 'setComponentOrder',
	        value: function setComponentOrder(arr) {
	            var _this = this;

	            arr.forEach(function (item, index) {
	                _this._omi_order[index] = item;
	            });
	            this.update();
	        }
	        //beforeBegin,beforeEnd,afterBegin,afterEnd

	    }, {
	        key: 'addComponent',
	        value: function addComponent(position, el, component) {
	            this._addedItems.push({ position: position, el: el, component: component });
	            this.update();
	        }
	    }, {
	        key: 'removeComponent',
	        value: function removeComponent(component) {
	            for (var i = 0, len = this._addedItems.length; i < len; i++) {
	                if (component.id === this._addedItems[i].component.id) {
	                    this._addedItems.splice(i, 1);
	                    break;
	                }
	            }
	            this.update();
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
	        }
	    }, {
	        key: '_renderAddedChildren',
	        value: function _renderAddedChildren() {
	            var _this2 = this;

	            this._addedItems.forEach(function (item) {
	                var target = typeof item.el === "string" ? _this2.node.querySelector(item.el) : item.el;
	                item.component.install();
	                item.component._render(true);
	                item.component.installed();
	                item.component._childrenInstalled(item.component);
	                target.insertAdjacentHTML(item.position, item.component.HTML);
	            });
	            this.children.forEach(function (child) {
	                child._renderAddedChildren();
	            });
	        }
	    }, {
	        key: '_render',
	        value: function _render(isFirst) {
	            var _this3 = this;

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
	            this._generateHTMLCSS();
	            this._extractChildren(this);
	            if (isFirst) {
	                this.children.forEach(function (item, index) {
	                    _this3._omi_order[index] = index;
	                });
	            }
	            this.children.forEach(function (item, index) {
	                _this3.HTML = _this3.HTML.replace(item._omiChildStr, _this3.children[_this3._omi_order[index]].HTML);
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
	                    (0, _diff2['default'])(this.node, this.HTML);
	                } else {
	                    (0, _diff2['default'])(this.node, this._createHiddenNode());
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
	        key: '_childRender',
	        value: function _childRender(childStr, isFirst) {
	            var _this4 = this;

	            if (this._omi_removed) {
	                this.HTML = '<input type="hidden" omi_scoped_' + this.id + ' >';
	                return this.HTML;
	            }
	            //childStr = childStr.replace("<child", "<div").replace("/>", "></div>");
	            this._mergeData(childStr);
	            this._generateHTMLCSS();
	            this._extractChildren(this);
	            if (isFirst) {
	                this.children.forEach(function (item, index) {
	                    _this4._omi_order[index] = index;
	                });
	            }
	            this.children.forEach(function (item, index) {
	                _this4.HTML = _this4.HTML.replace(item._omiChildStr, _this4.children[_this4._omi_order[index]].HTML);
	            });
	            this.HTML = (0, _event2['default'])(this.HTML, this.id);
	            return this.HTML;
	        }
	    }, {
	        key: '_queryElements',
	        value: function _queryElements(current) {
	            current._mixRefs();
	            current._execPlugins();
	            current.children.forEach(function (item) {
	                item.node = current.node.querySelector("[" + _omi2['default'].STYLESCOPEDPREFIX + item.id + "]");
	                //recursion get node prop from parent node
	                current._queryElements(item);
	            });
	        }
	    }, {
	        key: '_mixRefs',
	        value: function _mixRefs() {
	            var _this5 = this;

	            var nodes = _omi2['default'].$$('*[ref]', this.node);
	            nodes.forEach(function (node) {
	                if (node.hasAttribute(_this5._omi_scoped_attr)) {
	                    _this5.refs[node.getAttribute('ref')] = node;
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
	            var _this6 = this;

	            Object.keys(_omi2['default'].plugins).forEach(function (item) {
	                var nodes = _omi2['default'].$$('*[' + item + ']', _this6.node);
	                nodes.forEach(function (node) {
	                    if (node.hasAttribute(_this6._omi_scoped_attr)) {
	                        _omi2['default'].plugins[item](node, _this6);
	                    }
	                });
	                if (_this6.node.hasAttribute(item)) {
	                    _omi2['default'].plugins[item](_this6.node, _this6);
	                }
	            });
	        }
	    }, {
	        key: '_childrenInstalled',
	        value: function _childrenInstalled(root) {
	            var _this7 = this;

	            root.children.forEach(function (child) {
	                child.installed();
	                _this7._childrenInstalled(child);
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
	        value: function _replaceTags(array, html) {
	            var str = array.join("|");
	            var reg = new RegExp('<(' + str + '+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>\\s]+))?)*)\\s*(\\/?)>', 'g');
	            return html.replace(reg, function (m, a) {
	                var d = m.length - 2;
	                if (d >= 0 && m.lastIndexOf('/>') === m.length - 2) {
	                    return m.replace('<' + a, '<child tag="' + a + '"').substr(0, m.length + 10) + '></child>';
	                } else if (m.lastIndexOf('>') === m.length - 1) {
	                    return m.replace('<' + a, '<child tag="' + a + '"') + '</child>';
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
	            if (this.dataFirst) {
	                this.data = Object.assign({}, this._getDataset(childStr), this.data);
	            } else {
	                this.data = Object.assign({}, this.data, this._getDataset(childStr));
	            }
	        }
	    }, {
	        key: '_generateHTMLCSS',
	        value: function _generateHTMLCSS() {
	            this.CSS = this.style() || '';
	            if (this.CSS) {
	                this.CSS = _style2['default'].scoper(this.CSS, "[" + this._omi_scoped_attr + "]");
	                if (this.CSS !== this._preCSS && !this._omi_server_rendering) {
	                    _style2['default'].addStyle(this.CSS, this.id);
	                    this._preCSS = this.CSS;
	                }
	            }
	            var tpl = this.render();
	            this.HTML = this._scopedAttr(_omi2['default'].template(tpl ? tpl : "", this.data), this._omi_scoped_attr).trim();
	            if (this._omi_server_rendering) {
	                this.HTML = '\r\n<style id="' + _omi2['default'].STYLEPREFIX + this.id + '">\r\n' + this.CSS + '\r\n</style>\r\n' + this.HTML;
	                this.HTML += '\r\n<input type="hidden" data-omi-id="' + this.id + '" class="' + _omi2['default'].STYLESCOPEDPREFIX + '_hidden_data" value=\'' + JSON.stringify(this.data) + '\'  />\r\n';
	            }
	        }
	    }, {
	        key: '_scopedAttr',
	        value: function _scopedAttr(html, id) {
	            return html.replace(/<[^/]([A-Za-z]*)[^>]*>/g, function (m) {
	                var str = m.split(" ")[0].replace(">", "");
	                return m.replace(str, str + " " + id);
	            });
	        }
	    }, {
	        key: '_getDataset',
	        value: function _getDataset(childStr) {
	            var _this8 = this;

	            var json = (0, _html2json2['default'])(childStr);
	            var attr = json.child[0].attr;
	            Object.keys(attr).forEach(function (key) {
	                if (key.indexOf('data-') === 0) {
	                    _this8._dataset[_this8._capitalize(key.replace('data-', ''))] = attr[key];
	                }
	            });
	            return this._dataset;
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
	        key: '_extractChildren',
	        value: function _extractChildren(child) {
	            var _this9 = this;

	            if (_omi2['default'].customTags.length > 0) {
	                child.HTML = this._replaceTags(_omi2['default'].customTags, child.HTML);
	            }
	            var arr = child.HTML.match(/<child[^>][\s\S]*?tag=['|"](\S*)['|"][\s\S]*?><\/child>/g);

	            if (arr) {
	                arr.forEach(function (childStr, i) {
	                    var json = (0, _html2json2['default'])(childStr);
	                    var attr = json.child[0].attr;
	                    var name = attr.tag;
	                    delete attr.tag;
	                    var cmi = _this9.children[i];
	                    //if not first time to invoke _extractChildren method
	                    if (cmi && cmi.___omi_constructor_name === name) {
	                        cmi._childRender(childStr);
	                    } else {
	                        (function () {
	                            var baseData = {};
	                            var dataset = {};
	                            var dataFromParent = {};
	                            var groupData = {};
	                            var omiID = null;
	                            var instanceName = null;
	                            Object.keys(attr).forEach(function (key) {
	                                var value = attr[key];
	                                if (key.indexOf('on') === 0) {
	                                    var handler = child[value];
	                                    if (handler) {
	                                        baseData[key] = handler.bind(child);
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
	                                    groupData = _this9._extractPropertyFromString(value, child)[child._omiGroupDataCounter[value]];
	                                } else if (key.indexOf('data-') === 0) {
	                                    dataset[_this9._capitalize(key.replace('data-', ''))] = value;
	                                } else if (key === 'data') {
	                                    dataFromParent = _this9._extractPropertyFromString(value, child);
	                                }
	                            });

	                            var ChildClass = _omi2['default'].getClassFromString(name);
	                            if (!ChildClass) throw "Can't find Class called [" + name + "]";
	                            var sub_child = new ChildClass(Object.assign(baseData, child.childrenData[i], dataset, dataFromParent, groupData), false);
	                            sub_child._omiChildStr = childStr;
	                            sub_child.parent = child;
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

	                            sub_child._childRender(childStr, true);
	                        })();
	                    }
	                });
	            }
	        }
	    }]);

	    return Component;
	}();

	exports['default'] = Component;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _omi = __webpack_require__(3);

	var _omi2 = _interopRequireDefault(_omi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//many thanks to https://github.com/thomaspark/scoper/
	function scoper(css, prefix) {
	    var re = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)", "g");
	    css = css.replace(re, function (g0, g1, g2) {

	        if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
	            return g1 + g2;
	        }

	        if (g1.match(/:scope/)) {
	            g1 = g1.replace(/([^\s]*):scope/, function (h0, h1) {
	                if (h1 === "") {
	                    return "> *";
	                } else {
	                    return "> " + h1;
	                }
	            });
	        }

	        g1 = g1.replace(/^(\s*)/, g1.trim() + prefix + "," + "$1" + prefix + " ").replace(/\s+/g, ' ');
	        return g1 + g2;
	    });

	    return css;
	}

	function addStyle(cssText, id) {
	    var ele = document.getElementById(_omi2["default"].STYLEPREFIX + id),
	        head = document.getElementsByTagName('head')[0];
	    if (ele && ele.parentNode === head) {
	        head.removeChild(ele);
	    }

	    var someThingStyles = document.createElement('style');
	    head.appendChild(someThingStyles);
	    someThingStyles.setAttribute('type', 'text/css');
	    someThingStyles.setAttribute('id', _omi2["default"].STYLEPREFIX + id);
	    if (!!window.ActiveXObject) {
	        someThingStyles.styleSheet.cssText = cssText;
	    } else {
	        someThingStyles.textContent = cssText;
	    }
	}

	exports["default"] = {
	    scoper: scoper,
	    addStyle: addStyle
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function scopedEvent(tpl, id) {
	    return tpl.replace(/<[\s\S]*?>/g, function (item) {
	        return item.replace(/on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave|Abort|Blur|Cancel|CanPlay|CanPlayThrough|Change|Click|Close|ContextMenu|CueChange|DblClick|Drag|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|DurationChange|Emptied|Ended|Error|Focus|Input|Invalid|KeyDown|KeyPress|KeyUp|Load|LoadedData|LoadedMetadata|LoadStart|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Pause|Play|Playing|Progress|RateChange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|TimeUpdate|Toggle|VolumeChange|Waiting|AutoComplete|AutoCompleteError|BeforeCopy|BeforeCut|BeforePaste|Copy|Cut|Paste|Search|SelectStart|Wheel|WebkitFullScreenChange|WebkitFullScreenError|TouchStart|TouchMove|TouchEnd|TouchCancel|PointerDown|PointerUp|PointerCancel|PointerMove|PointerOver|PointerOut|PointerEnter|PointerLeave)=('|")([\s\S]*?)\([\s\S]*?\)/g, function (eventStr, b, c, d) {
	            if (d.indexOf('Omi.instances[') === 0) {
	                return eventStr;
	            } else {
	                return eventStr.replace(/=(['|"])/, '=$1Omi.instances[' + id + '].');
	            }
	        });
	    });
	};

	exports['default'] = scopedEvent;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var NODE_INDEX = '__set-dom-index__';
	var ELEMENT_TYPE = 1;
	var DOCUMENT_TYPE = 9;
	var HTML_ELEMENT = document.createElement('html');
	var BODY_ELEMENT = document.createElement('body');

	var isIE = function isIE(ver) {
	    var b = document.createElement('b');
	    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
	    return b.getElementsByTagName('i').length === 1;
	};

	/**
	 * @description
	 * Updates existing dom to match a new dom.
	 *
	 * @param {HTMLEntity} prev - The html entity to update.
	 * @param {String|HTMLEntity} next - The updated html(entity).
	 */
	function setDOM(prev, next) {
	    // Ensure a realish dom node is provided.
	    assert(prev && prev.nodeType, 'You must provide a valid node to update.');

	    // Alias document element with document.
	    if (prev.nodeType === DOCUMENT_TYPE) prev = prev.documentElement;

	    // If a string was provided we will parse it as dom.
	    if (typeof next === 'string') {
	        if (prev === document.documentElement) {
	            HTML_ELEMENT.innerHTML = next;
	            next = HTML_ELEMENT;
	        } else {
	            BODY_ELEMENT.innerHTML = next;
	            next = BODY_ELEMENT.firstChild;
	        }
	    }

	    if (isIE(8)) {
	        prev.parentNode.replaceChild(next, prev);
	        return;
	    }
	    // Update the node.
	    setNode(prev, next);
	}

	/**
	 * @private
	 * @description
	 * Updates a specific htmlNode and does whatever it takes to convert it to another one.
	 *
	 * @param {HTMLEntity} prev - The previous HTMLNode.
	 * @param {HTMLEntity} next - The updated HTMLNode.
	 */
	function setNode(prev, next) {
	    // Handle regular element node updates.
	    if (prev.nodeType === ELEMENT_TYPE) {
	        // Update all children (and subchildren).
	        setChildNodes(prev, prev.childNodes, next.childNodes);

	        // Update the elements attributes / tagName.
	        if (prev.nodeName === next.nodeName) {
	            // If we have the same nodename then we can directly update the attributes.
	            setAttributes(prev, prev.attributes, next.attributes);
	        } else {
	            // Otherwise clone the new node to use as the existing node.
	            var newPrev = next.cloneNode();
	            // Copy over all existing children from the original node.
	            while (prev.firstChild) {
	                newPrev.appendChild(prev.firstChild);
	            } // Replace the original node with the new one with the right tag.
	            prev.parentNode.replaceChild(newPrev, prev);
	        }
	    } else if (prev.nodeType === next.nodeType) {
	        // Handle other types of node updates (text/comments/etc).
	        // If both are the same type of node we can update directly.
	        prev.nodeValue = next.nodeValue;
	    } else {
	        // we have to replace the node.
	        prev.parentNode.replaceChild(next, prev);
	    }
	}

	/*
	 * @private
	 * @description
	 * Utility that will update one list of attributes to match another.
	 *
	 * @param {HTMLEntity} parent - The current parentNode being updated.
	 * @param {Attributes} prev - The previous attributes.
	 * @param {Attributes} next - The updated attributes.
	 */
	function setAttributes(parent, prev, next) {
	    var i, a, b, ns;

	    // Remove old attributes.
	    for (i = prev.length; i--;) {
	        a = prev[i];
	        ns = a.namespaceURI;
	        b = next.getNamedItemNS(ns, a.name);
	        if (!b) prev.removeNamedItemNS(ns, a.name);
	    }

	    // Set new attributes.
	    for (i = next.length; i--;) {
	        a = next[i];
	        ns = a.namespaceURI;
	        b = prev.getNamedItemNS(ns, a.name);
	        if (!b) {
	            // Add a new attribute.
	            next.removeNamedItemNS(ns, a.name);
	            prev.setNamedItemNS(a);
	        } else if (b.value !== a.value) {
	            // Update existing attribute.
	            b.value = a.value;
	        }
	    }
	}

	/*
	 * @private
	 * @description
	 * Utility that will update one list of childNodes to match another.
	 *
	 * @param {HTMLEntity} parent - The current parentNode being updated.
	 * @param {NodeList} prevChildNodes - The previous children.
	 * @param {NodeList} nextChildNodes - The updated children.
	 */
	function setChildNodes(parent, prevChildNodes, nextChildNodes) {
	    var key, a, b, oldPosition, newPosition;

	    // Convert nodelists into a usuable map.
	    var prev = keyNodes(prevChildNodes);
	    var next = keyNodes(nextChildNodes);

	    // Remove old nodes.
	    for (key in prev) {
	        if (next[key]) continue;
	        parent.removeChild(prev[key]);
	    }

	    // Set new nodes.
	    for (key in next) {
	        a = prev[key];
	        b = next[key];
	        if (a) {
	            // Update an existing node.
	            setNode(a, b);
	            // Check if the node has moved in the tree.
	            oldPosition = a[NODE_INDEX];
	            newPosition = b[NODE_INDEX];
	            if (oldPosition === newPosition) continue;
	            // Check if the node has already been properly positioned.
	            if (prevChildNodes[newPosition] === a) continue;
	            // Reposition node.
	            parent.insertBefore(a, prevChildNodes[newPosition]);
	        } else {
	            // Append the new node.
	            parent.appendChild(b);
	        }
	    }
	}

	/**
	 * @private
	 * @description
	 * Converts a nodelist into a keyed map.
	 * This is used for diffing while keeping elements with 'data-key' or 'id' if possible.
	 *
	 * @param {NodeList} childNodes - The childNodes to convert.
	 * @return {Object}
	 */
	function keyNodes(childNodes) {
	    var result = {};

	    for (var i = childNodes.length, el; i--;) {
	        el = childNodes[i];
	        el[NODE_INDEX] = i;
	        result[getKey(el) || i] = el;
	    }

	    return result;
	}

	/**
	 * @private
	 * @description
	 * Utility to try to pull a key out of an element.
	 * (Uses 'id' if possible and falls back to 'data-key')
	 *
	 * @param {HTMLEntity} node - The node to get the key for.
	 * @return {String}
	 */
	function getKey(node) {
	    if (node.nodeType !== ELEMENT_TYPE) return;
	    return node.getAttribute('data-key') || node.id;
	}

	/**
	 * Confirm that a value is truthy, throws an error message otherwise.
	 *
	 * @param {*} val - the val to test.
	 * @param {String} msg - the error message on failure.
	 * @throws Error
	 */
	function assert(val, msg) {
	    if (!val) throw new Error('set-dom: ' + msg);
	}

	exports['default'] = setDOM;

/***/ },
/* 9 */
/***/ function(module, exports) {

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
	        tagName = tagName.toLowerCase();

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getMarkDown(name, lan) {
	    var md = __webpack_require__(12)("./" + lan + "_" + name + ".md");
	    return md.substring(0, md.length - 1).replace(/\\r\\n/g, "\r\n").replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace('module.exports = "', "").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	}

	function getMarkDownByArr(arr, lan) {
	    var md = "";
	    arr.forEach(function (item) {
	        md += getMarkDown(item, lan) + "\r\n \r\n";
	    });

	    return md;
	}

	var Content = function (_Omi$Component) {
	    _inherits(Content, _Omi$Component);

	    function Content(data) {
	        _classCallCheck(this, Content);

	        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, data));
	    }

	    _createClass(Content, [{
	        key: 'install',
	        value: function install() {
	            this.data.html = marked(getMarkDownByArr(_config2['default'].mds[this.data.lan], this.data.lan));
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return '\n        .content{\n             width: 80%;\n        }\n        h2{\n            padding-top:55px;\n        }\n        h3{\n            color:#444444;\n        }\n        pre{\n            border: 1px solid #eee;\n            width: 100%;\n        }\n        li{\n            text-indent: 20px;\n            list-style:disc inside ;\n        }\n\n         @media only screen and (max-width: 768px) {\n           .content{\n             width: 100%;\n           }\n\n\n        }\n        ';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n        <div class="content">\n            {{{html}}}\n        </div>\n        ';
	        }
	    }]);

	    return Content;
	}(_index2['default'].Component);

	exports['default'] = Content;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var config = {
	    //1,5-6,8
	    highlight: {
	        3: '6',
	        6: '5',
	        9: '3,9,34',
	        10: '35',
	        11: '5,11',
	        12: '16-18,28',
	        13: '5,11,12',
	        14: '9,15-17',
	        15: '14-18,32,33',
	        16: '8',
	        17: '8,15',
	        22: '30',
	        23: '22',
	        25: '6-12',
	        27: '8',
	        28: '9-11',
	        29: '5-7',
	        34: '20',
	        35: '7',
	        37: '16-18',
	        38: '13,18'
	    },
	    mds: {
	        cn: ['installation', 'hello_world', 'components', 'communication', 'lifecycle', 'events', 'condition', 'loop', 'form', 'inherit', 'template', 'get_dom', 'plugin', 'thinking_in_omi', 'pr_env', 'pr_hello'],
	        en: ['installation', 'hello_world', 'components', 'communication', 'lifecycle', 'events', 'condition', 'loop', 'form', 'inherit', 'template']
	    },
	    menus: {
	        cn: [{ title: "快速开始", list: [{ "name": "安装" }, { "name": "Hello World" }, { "name": "组件" }, { "name": "组件通讯" }, { "name": "生命周期" }, { "name": "事件处理" }, { "name": "条件判断" }, { "name": "循环遍历" }, { "name": "表单" }, { "name": "继承" },
	            //{"name": "容器系统"},
	            { "name": "模板切换" }, { "name": "获取DOM节点" }, { "name": "插件体系" },
	            //{"name": "服务器端渲染"},
	            { "name": "Omi的理念" }] }, { title: "Omi原理", list: [{ "name": "环境搭建" }, { "name": "Hello Omi" }, { "name": "未完待续.." }, { "name": "..." }] }],
	        en: [{ title: "QUICK START", list: [{ "name": "Installation" }, { "name": "Hello World" }, { "name": "Components" }, { "name": "Communication" }, { "name": "Lifecycle" }, { "name": "Handling Events" }, { "name": "Conditional Rendering" }, { "name": "Loop" },
	            //{"name": "Lists and Keys"},
	            { "name": "Forms" }, { "name": "Inheritance" }, { "name": "Templates" }
	            //{"name": "Sever-side Rendering"},
	            //{"name": "Thinking In Omi"}
	            ] }, { title: "Principle of Omi", list: [{ "name": "Coming soom.." }] }]
	    }

	};

	exports['default'] = config;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./README.md": 13,
		"./cn_communication.md": 14,
		"./cn_components.md": 15,
		"./cn_condition.md": 16,
		"./cn_events.md": 17,
		"./cn_form.md": 18,
		"./cn_get_dom.md": 19,
		"./cn_hello_world.md": 20,
		"./cn_inherit.md": 21,
		"./cn_installation.md": 22,
		"./cn_lifecycle.md": 23,
		"./cn_loop.md": 24,
		"./cn_plugin.md": 25,
		"./cn_pr_env.md": 26,
		"./cn_pr_hello.md": 27,
		"./cn_pr_nearby.md": 28,
		"./cn_template.md": 29,
		"./cn_thinking_in_omi.md": 30,
		"./en_communication.md": 31,
		"./en_components.md": 32,
		"./en_condition.md": 33,
		"./en_events.md": 34,
		"./en_form.md": 35,
		"./en_hello_world.md": 36,
		"./en_inherit.md": 37,
		"./en_installation.md": 38,
		"./en_lifecycle.md": 39,
		"./en_loop.md": 40,
		"./en_template.md": 41
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 12;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"# Omi使用文档\\r\\n* [安装](./cn_installation.md)\\r\\n* [Hello World](./cn_hello_world.md)\\r\\n* [组件](./cn_components.md)\\r\\n* [组件通讯](./cn_communication.md)\\r\\n* [生命周期](./cn_lifecycle.md)\\r\\n* [事件处理](./cn_events.md)\\r\\n* [条件判断](./cn_condition.md)\\r\\n* [循环遍历](./cn_loop.md)\\r\\n* [表单](./cn_form.md)\\r\\n* [继承](./cn_inhrit.md)\\r\\n* [模板切换](./cn_template.md)\\r\\n* [获取DOM节点](./cn_get_dom.md)\\r\\n* [插件体系](./cn_plugin.md)\\r\\n* [Omi理念](./cn_thinking_in_omi.md)\\r\\n\\r\\n# 从零一步步打造Web组件化框架Omi\\r\\n\\r\\n（待续...）\\r\\n\\r\\n* [环境搭建](./cn_pr_env.md)\\r\\n* [Hello Omi](./cn_pr_hello.md)\\r\\n* 局部CSS揭秘\\r\\n* 组件嵌套揭秘\\r\\n* 事件处理揭秘\\r\\n* 服务器端渲染揭秘\\r\\n* 模板切换揭秘\\r\\n* 容器系统揭秘\""

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"组件通讯\\\">组件通讯</h2>\\r\\n\\r\\n[Omi框架](https://github.com/AlloyTeam/omi)组建间的通讯非常遍历灵活，因为有许多可选方案进行通讯：\\r\\n\\r\\n* 通过在组件上声明 data-* 传递给子节点 \\r\\n* 通过在组件上声明 data 传递给子节点 （支持复杂数据类型的映射）\\r\\n* 父容器设置 childrenData 自动传递给子节点\\r\\n* 声明 group-data 传递（支持复杂数据类型的映射）\\r\\n* 完全面向对象，可以非常容易地拿到对象的实例，之后可以设置实例属性和调用实例的方法\\r\\n\\r\\n所以通讯变得畅通无阻，下面一一来举例说明。\\r\\n\\r\\n### data-*通讯 \\r\\n\\r\\n```js\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n      super(data);\\r\\n    }\\r\\n    style () {\\r\\n      return  `\\r\\n      h1{\\r\\n      \\tcursor:pointer;\\r\\n      }\\r\\n      `;\\r\\n    }\\r\\n    handleClick(target, evt){\\r\\n      alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n      return  `\\r\\n      <div>\\r\\n      \\t<h1 onclick=\\\"handleClick(this, event)\\\">Hello ,{{name}}!</h1>\\r\\n      </div>\\r\\n  \\t\\t`;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.makeHTML('Hello', Hello);\\r\\n\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello data-name=\\\"Omi\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n一般data-*用来传递值类型，如string、number。值得注意的是，通过data-*接收到的数据类型都是string，需要自行转成number类型。\\r\\n通常情况下，data-*能满足我们的要求，但是遇到复杂的数据类型是没有办法通过大量data-*去表达，所以可以通过data通讯，请往下看。\\r\\n\\r\\n### data通讯 \\r\\n\\r\\n如上面代码所示，通过 data-name=\\\"Omi\\\"可以把name传递给子组件。下面的代码也可以达到同样的效果。\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n      super(data);\\r\\n      this.helloData = { name : 'Omi' };\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello data=\\\"helloData\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n使用data声明，会去组件的instance（也就是this）下找对应的属性，this下可以挂载任意复杂的对象。所以这也就突破了data-*的局限性。\\r\\n\\r\\n如果instance下面的某个属性下面的某个属性下面的某个数组的第一个元素的某个属性要作为data传递Hello怎么办？\\r\\n没关系，data声明是支持复杂类型的，使用方式如下:\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.complexData ={\\r\\n            a:{\\r\\n                b:{\\r\\n                    c:[\\r\\n                        {\\r\\n                            e:[{\\r\\n                                name:'ComplexData Support1'\\r\\n                            },{\\r\\n                                name:'ComplexData Support2'\\r\\n                            }]\\r\\n                        },\\r\\n                        {\\r\\n                            name: 'ComplexData Support3'\\r\\n                        }\\r\\n                    ]\\r\\n                }\\r\\n            }\\r\\n        };\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello data=\\\"complexData.a.b.c[1]\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=data_complex\\\" target=\\\"_blank\\\">点击这里→data映射复杂数据</a>\\r\\n\\r\\n### childrenData通讯\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n      super(data);\\r\\n      this.childrenData = [{ name : 'Omi' } , { name : 'dntzhang' }];\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello  />\\r\\n            <Hello  />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n使用this.childrenData传递data给子组件，childrenData是一个数组类型，所以支持同时给多个组件传递data，与render里面的组件会一一对应上。\\r\\n\\r\\n### group-data通讯\\r\\n\\r\\nchildrenData的方式可以批量传递数据给组件，但是有很多场景下data的来源不一定非要都从childrenData来，childrenData是个数组，会和组件的顺序一一对应，这就给不同传递方式的data必须全部集中的childrenData中，非常不方便。group-data专门为解决上面的痛点而生，专门是为了给一组组件批量传递data。\\r\\n\\r\\n```js\\r\\nimport Hello from './hello.js';\\r\\n\\r\\n\\r\\nOmi.makeHTML('Hello', Hello);\\r\\n\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello group-data=\\\"testData\\\" />\\r\\n            <Hello group-data=\\\"testData\\\" />\\r\\n            <Hello group-data=\\\"testData\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n只需要在声明的子组件上标记group-data，就会去当前组件的instance（也就是this）下面找对应的属性，然后根据当前的位置，和对应数组的位置会一一对应起来。\\r\\n\\r\\n运行结果如下：\\r\\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170216110701535-1698390390.png)\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data\\\" target=\\\"_blank\\\">点击这里→group-data</a>\\r\\n\\r\\n同样group-data支持复杂数据类型的映射，需要注意的是，group-data映射的终点必须是一个数组:\\r\\n\\r\\n```js\\r\\nimport Hello from './hello.js';\\r\\n\\r\\n\\r\\nOmi.makeHTML('Hello', Hello);\\r\\n\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.complexData ={\\r\\n            a:{\\r\\n                b:{\\r\\n                    c:[\\r\\n                        {\\r\\n                            e:[{\\r\\n                                name:'ComplexData Support1'\\r\\n                            },{\\r\\n                                name:'ComplexData Support2'\\r\\n                            }]\\r\\n                        },\\r\\n                        {\\r\\n                            name: 'ComplexData Support3'\\r\\n                        }\\r\\n                    ]\\r\\n                }\\r\\n            }\\r\\n        };\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello group-data=\\\"complexData.a.b.c[0].e\\\" />\\r\\n            <Hello group-data=\\\"complexData.a.b.c[0].e\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex\\\" target=\\\"_blank\\\">点击这里→group-data映射复杂数据</a>\\r\\n\\r\\n### 通过对象实例\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    \\r\\n    installed(){\\r\\n        this.hello.data.name = \\\"Omi\\\";\\r\\n        this.update()\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello name=\\\"hello\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n### 通过omi-id\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    \\r\\n    installed(){\\r\\n        Omi.get(\\\"hello\\\").data.name = \\\"Omi\\\";\\r\\n        this.update()\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello omi-id=\\\"hello\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n通过在组件上声明omi-id，在程序任何地方拿到该对象的实例。这个可以算是跨任意组件通讯神器。\\r\\n\\r\\n### 特别强调\\r\\n\\r\\n* 通过childrenData或者data方式通讯都是一锤子买卖。后续变更只能通过组件实例下的data属性去更新组件\\r\\n* 通过data-✼通讯也是一锤子买卖。后续变更只能通过组件实例下的data属性去更新组件。\\r\\n* 关于data-✼通讯也可以不是一锤子买卖，但是要设置组件实例的dataFirst为false，这样的话data-✼就会覆盖组件实例的data对应的属性\\r\\n\\r\\n关于上面的第三条也就是这样的逻辑伪代码：\\r\\n```js\\r\\nif(this.dataFirst){\\r\\n    this.data = Object.assign({},data-✼ ,this.data);\\r\\n}else{\\r\\n    this.data = Object.assign({},this.data, data-✼);\\r\\n}\\r\\n```\""

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"组件\\\">组件</h2>\\r\\n\\r\\n[Omi框架](https://github.com/AlloyTeam/omi)完全基于组件体系设计，我们希望开发者可以像搭积木一样制作Web程序，一切皆是组件，组件也可以嵌套子组件形成新的组件，新的组件又可以当作子组件嵌套至任意组件形成新的组件...\\r\\n\\r\\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170210093427338-1536910080.png)\\r\\n\\r\\n### 简单组件\\r\\n\\r\\n这里使用Todo的例子来讲解Omi组件体系的使用。\\r\\n\\r\\n```js\\r\\nclass Todo extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    add (evt) {\\r\\n        evt.preventDefault();\\r\\n        this.data.items.push(this.data.text);\\r\\n        this.data.text = '';\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h3 { color:red; }\\r\\n        button{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n        this.data.text = target.value;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h3>TODO</h3>\\r\\n                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\\r\\n                    <form onsubmit=\\\"add(event)\\\" >\\r\\n                        <input type=\\\"text\\\" onchange=\\\"handleChange(this)\\\"  value=\\\"{{text}}\\\"  />\\r\\n                        <button>Add #{{items.length}}</button>\\r\\n                    </form>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Todo({ items: [] ,text : '' }),\\\"body\\\");\\r\\n```\\r\\n\\r\\n组件生成的HTML最终会插入到body中。上面的例子展示了Omi的部分特性:\\r\\n\\r\\n- data传递: new Todo(data,..)的data可以直接提供给render方法里的模板\\r\\n- 局部CSS: h3只对render里的h3生效，不会污染外面的h3；button也是同样的\\r\\n- 声明式事件绑定: onchange调用的就是组件内的handleChange，this可以拿到当然的DOM元素,还可以拿到当前的event\\r\\n- 需要手动调用update方法才能更新组件\\r\\n\\r\\n这里需要特别强调的是，为了更加的自由和灵活度。Omi没有内置数据变更的自动更新，需要开发者自己调用update方法。\\r\\n你也可以和[oba](https://github.com/dntzhang/oba)或者mobx一起使用来实现自动更新。\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=todo\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\\r\\n## 组件嵌套\\r\\n\\r\\n如果页面超级简单的话，可以没有组件嵌套。但是绝大部分Web网页或者Web应用，需要嵌套定义的组件来完成所有的功能和展示。比如上面的Todo，我们也是可以抽取出List。\\r\\n这样让程序易维护、可扩展、方便复用。如，我们抽取出List：\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n怎么使用这个List？我们需要使用Omi.makeHTML把List制作成可以声明式的标签，在render方法中就能直接使用该标签。如下所示：\\r\\n\\r\\n```js\\r\\nimport List from './list.js';\\r\\n\\r\\nOmi.makeHTML('List', List);\\r\\n\\r\\nclass Todo extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.data.length = this.data.items.length;\\r\\n        this.listData = { items : this.data.items };\\r\\n    }\\r\\n\\r\\n    add (evt) {\\r\\n        evt.preventDefault();\\r\\n        this.list.data.items.push(this.data.text);\\r\\n        this.data.length = this.list.data.items.length;\\r\\n        this.data.text = '';\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h3 { color:red; }\\r\\n        button{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n        this.data.text = target.value;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h3>TODO</h3>\\r\\n                    <List  name=\\\"list\\\" data=\\\"listData\\\" />\\r\\n                    <form onsubmit=\\\"add(event)\\\" >\\r\\n                        <input type=\\\"text\\\" onchange=\\\"handleChange(this)\\\"  value=\\\"{{text}}\\\"  />\\r\\n                        <button>Add #{{length}}</button>\\r\\n                    </form>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n* 第3行，通过makeHTML方法把组件制作成可以在render中使用的标签。当然Omi.makeHTML('List', List);也可以写在List组件的代码下面。\\r\\n* 第34行，在父组件上定义listData属性用来传递给子组件。\\r\\n* 第34行，在render方法中使用List组件。其中name方法可以让你在代码里通过this快速方法到该组件的实例。data=\\\"listData\\\"可以让你把this.listData传递给子组件。\\r\\n\\r\\n需要注意的是，父组件的this.listData会被通过Object.assign浅拷贝到子组件。\\r\\n这样做的目的主要是希望以后DOM的变更都尽量修改子组件自身的data，然后再调用其update方法，而不是去更改父组件的listData。\\r\\n\\r\\n关于Omi组件通讯其实有4种方案，这个后续教程会专门来讲。\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=todo_nest\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\""

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"条件判断\\\">条件判断</h2>\\r\\n\\r\\n我们经常需要根据不同的状态呈现不同的界面，比如有的用户是vip要显示vip的Logo。Omi有许多种方式满足你的要求。\\r\\n\\r\\n### 方式一\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `{{#isVip}}\\r\\n                    <div>you are VIP.</div>\\r\\n                {{/isVip}}\\r\\n                {{^isVip}}\\r\\n                    <div>you are not VIP.</div>\\r\\n                {{/isVip}}`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n上面完全使用mustachejs的条件判断的语法。当然Omi不强制你使用mustachejs。你可以是omi.lite.js，然后重写Omi.template方法去使用任意你喜爱的模板引擎。\\r\\n\\r\\n### 方式二\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        if(this.data.isVip){\\r\\n            return '<div>you are VIP.</div>';\\r\\n        }else{\\r\\n            return '<div>you are not VIP.</div>';\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\nrender就是提供了很好的可编程性，里面可以写任意js逻辑代码。对了，差点忘了，style方法里面也可以写js逻辑的。\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    style (){\\r\\n        if(this.data.isVip){\\r\\n            return 'div{ color : red; }';\\r\\n        }else{\\r\\n            return 'div{ color : green; }';\\r\\n        }\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        if(this.data.isVip){\\r\\n            return '<div>you are VIP.</div>';\\r\\n        }else{\\r\\n            return '<div>you are not VIP.</div>';\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\""

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"事件处理\\\">事件处理</h2>\\r\\n\\r\\nOmi的事件分内置事件和自定义事件。在内置事件处理方面巧妙地利用了浏览器自身的管线机制，可以通过event和this轻松拿到事件实例和触发该事件的元素。\\r\\n\\r\\n### 内置事件\\r\\n\\r\\n什么算内置事件？只要下面正则能匹配到就算内置事件。\\r\\n\\r\\n```js\\r\\non(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)\\r\\n```\\r\\n\\r\\n内置事件怎么绑定？如下所示：\\r\\n\\r\\n```js\\r\\nclass EventTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    handleClick(dom, evt){\\r\\n        alert(dom.innerHTML);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div onclick=\\\"handleClick(this, event)\\\">Hello, Omi!</div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n### 自定义事件\\r\\n\\r\\n开发者自己定义的组件的事件，称为自定义事件，自定义事件必须以on开头，即onXXXX的格式，不然Omi识别不到。这里拿分页作为例子：\\r\\n\\r\\n```js\\r\\nimport Omi from '../../src/index.js';\\r\\nimport Pagination from './pagination.js';\\r\\nimport Content from './content.js';\\r\\n\\r\\nOmi.makeHTML('Pagination', Pagination);\\r\\nOmi.makeHTML('Content', Content);\\r\\n\\r\\nclass Main extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    installed(){\\r\\n        this.content.goto(this.pagination.data.currentPage+1);\\r\\n    }\\r\\n    handlePageChange(index){\\r\\n        this.content.goto(index+1);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h1>Pagination Example</h1>\\r\\n                    <Content name=\\\"content\\\" />\\r\\n                    <Pagination\\r\\n                        name=\\\"pagination\\\"\\r\\n                        data-total=\\\"100\\\"\\r\\n                        data-page-size=\\\"10\\\"\\r\\n                        data-num-edge=\\\"1\\\"\\r\\n                        data-num-display=\\\"4\\\"　　　　　\\r\\n                        onPageChange=\\\"handlePageChange\\\" />\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render( new Main(),'body');\\r\\n```\\r\\n\\r\\n如上面的onPageChange就是自定义事件，触发会执行handlePageChange。onPageChange方法是在Pagination中执行：\\r\\n\\r\\n```js\\r\\nimport Omi from '../../src/index.js';\\r\\n\\r\\nclass Pagination extends Omi.Component {\\r\\n    ...\\r\\n    ...\\r\\n    ...\\r\\n            linkTo: \\\"#\\\",\\r\\n            prevText: \\\"Prev\\\",\\r\\n            nextText: \\\"Next\\\",\\r\\n            ellipseText: \\\"...\\\",\\r\\n            prevShow: true,\\r\\n            nextShow: true,\\r\\n            onPageChange: function () { return false; }\\r\\n        }, this.data);\\r\\n\\r\\n        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);\\r\\n    }\\r\\n    goto (index,evt) {\\r\\n        evt.preventDefault();\\r\\n        this.data.currentPage=index;\\r\\n        this.update();\\r\\n        this.data.onPageChange(index);\\r\\n    }\\r\\n    ...\\r\\n    ...\\r\\n    ...\\r\\n}\\r\\n```\\r\\n\\r\\n这里取了Pagination组件的部分代码。高亮的就是执行onPageChange的地方。\\r\\n\\r\\n### 相关地址\\r\\n\\r\\n* [演示地址](http://alloyteam.github.io/omi/example/pagination/)\\r\\n* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/pagination)\\r\\n\""

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"表单\\\">表单</h2>\\r\\n\\r\\nOmi让一些表单操控起来更加方便，特别是select！\\r\\n\\r\\n### select标签\\r\\n\\r\\n以前，我们需要像如下的方式选中一个选项：\\r\\n\\r\\n```html\\r\\n<select>\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option selected value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\n第三个option由于加上了selected，所有会被选中。这样带来的问题就是，开发者写的程序可能要操遍历每个option。而使用Omi，你只需要这样子：\\r\\n\\r\\n```html\\r\\n<select value=\\\"coconut\\\">\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\n这样就能达到同样的效果。比如你想选择第一项：\\r\\n\\r\\n```html\\r\\n<select value=\\\"grapefruit\\\">\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\n是不是非常方便？\\r\\n\\r\\n###  举个例子\\r\\n\\r\\n```js\\r\\nclass FormTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n       \\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n      console.log(target.value)\\r\\n      this.data.value = target.value;\\r\\n    }\\r\\n\\r\\n    handleSubmit(evt) {\\r\\n      alert('Your favorite flavor is: ' + this.data.value);\\r\\n      evt.preventDefault();\\r\\n    }\\r\\n  \\r\\n    render () {\\r\\n        return `\\r\\n        <form onsubmit=\\\"handleSubmit(event)\\\">\\r\\n        <label>\\r\\n          Pick your favorite La Croix flavor:\\r\\n          <select value=\\\"{{value}}\\\" onchange=\\\"handleChange(this)\\\">\\r\\n            <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n            <option value=\\\"lime\\\">Lime</option>\\r\\n            <option value=\\\"coconut\\\">Coconut</option>\\r\\n            <option value=\\\"mango\\\">Mango</option>\\r\\n          </select>\\r\\n        </label>\\r\\n        <input type=\\\"submit\\\" value=\\\"Submit\\\" />\\r\\n      </form>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new FormTest({ value: 'mango' }),'#container');\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=form\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\""

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"获取DOM节点\\\">获取DOM节点</h2>\\r\\n\\r\\n虽然绝大部分情况下，开发者不需要去查找获取DOM，但是还是有需要获取DOM的场景，所以Omi提供了方便获取DOM节点的方式。\\r\\n\\r\\n### ref和refs\\r\\n\\r\\n```js\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    style () {\\r\\n        return  `\\r\\n            h1{\\r\\n                cursor:pointer;\\r\\n            }\\r\\n         `;\\r\\n    }\\r\\n    handleClick(){\\r\\n        alert(this.refs.abc.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <h1 ref=\\\"abc\\\" onclick=\\\"handleClick()\\\">Hello ,{{name}}!</h1>\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Hello({ name : \\\"Omi\\\" }),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n可以看到通过在HTML中标记ref为abc，那么就通过this.refs.abc访问到该DOM节点。\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=ref\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\""

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Hello World\\\">Hello World</h2>\\r\\n\\r\\n你可以使用ES6+或者ES5的方式编写Omi程序来搭建你的Web程序。\\r\\n\\r\\n### Hello World with ES6+\\r\\n\\r\\n你可以使用 [webpack](https://webpack.github.io/) 打包工具，webpack会把你的模块代码打成一个很小的包，优化加载时间。使用[babel](http://babeljs.io/)，让你立刻马上使用ES6+来编写你的web程序。你只需要在webpack配置的module设置好[babel-loader](https://github.com/babel/babel-loader)便可。\\r\\n\\r\\n一个Omi的简短的例子如下所示:\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\n\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    style () {\\r\\n        return  `\\r\\n            h1{\\r\\n                cursor:pointer;\\r\\n            }\\r\\n         `;\\r\\n    }\\r\\n    handleClick(target, evt){\\r\\n        alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <h1 onclick=\\\"handleClick(this, event)\\\">Hello ,{{name}}!</h1>\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Hello({ name : \\\"Omi\\\" }),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n组件生成的HTML最终会插入到#container中。上面的例子展示了Omi的部分特性:\\r\\n\\r\\n- data传递: new Hello(data,..)的data可以直接提供给render方法里的模板\\r\\n- 局部CSS: h1只对render里的h1生效，不会污染外面的h1\\r\\n- 声明式事件绑定: onclick调用的就是组件内的handleClick，this可以拿到当然的DOM元素,还可以拿到当前的event\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=hello\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\\r\\n你可以使用Omi.makeHTML来生成组件标签用于嵌套。\\r\\n```js\\r\\n    Omi.makeHTML('Hello', Hello);\\r\\n```\\r\\n那么你就在其他组件中使用，如\\r\\n```js\\r\\n  ...\\r\\n  render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <div>Test</div>\\r\\n            <Hello data-name=\\\"Omi\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n    ...\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=hello_nest\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\\r\\n###  Hello World with ES5\\r\\n\\r\\n当然Omi没有抛弃ES5的用户。你可以使用ES5的方式编写Omi。如，在你的HTML中引用omi.js：\\r\\n\\r\\n```html\\r\\n<script src=\\\"omi.js\\\"></script>\\r\\n```\\r\\n\\r\\n然后：\\r\\n\\r\\n```js\\r\\nvar Hello =  Omi.create(\\\"Hello\\\", {\\r\\n    style: function () {\\r\\n        return \\\"h1{ cursor:pointer }\\\";\\r\\n    },\\r\\n    handleClick: function (dom) {\\r\\n        alert(dom.innerHTML);\\r\\n    },\\r\\n    render: function () {\\r\\n        return '<div>\\\\\\r\\n                    <h1 onclick=\\\"handleClick(this, event)\\\">Hello ,{{name}}!</h1>\\\\\\r\\n                </div>';\\r\\n    }\\r\\n});\\r\\n\\r\\nOmi.render(new Hello({ name : \\\"Omi\\\" }),\\\"#container\\\");\\r\\n```\\r\\n当然除了在HTML引入脚本，你还可以使用AMD、CMD或者CommonJS的方式引入Omi，这里就不再一一列举。\\r\\n\\r\\n需要注意的是，Omi.create的第一个参数Hello是用来生成Tag Name的。你可以在其他地方嵌入你的组件。如：\\r\\n\\r\\n```js\\r\\n  ...\\r\\n  render:function() {\\r\\n        return  '<div>\\\\\\r\\n                    <div>Test</div>\\\\\\r\\n                    <Hello  data-name=\\\"Omi\\\" />\\\\\\r\\n                </div>';\\r\\n    }\\r\\n    ...\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=hello_es5\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\""

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"继承\\\">继承</h2>\\r\\n\\r\\n通过继承机制，可以利用已有的数据类型来定义新的数据类型。所定义的新的数据类型不仅拥有新定义的成员，而且还同时拥有旧的成员。我们称已存在的用来派生新类的类为基类，又称为父类。由已存在的类派生出的新类称为派生类，又称为子类。\\r\\n\\r\\n### 举个例子\\r\\n\\r\\n```js\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    style () {\\r\\n        return  `\\r\\n            div{\\r\\n                cursor:pointer;\\r\\n            }\\r\\n         `;\\r\\n    }\\r\\n    handleClick(target, evt){\\r\\n        alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n       return  ' <div onclick=\\\"handleClick(this,event)\\\">Hello {{name}}!</div>'\\r\\n    }\\r\\n}\\r\\n\\r\\nclass SubHello extends Hello {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\\r\\n###  ES5下的继承\\r\\n\\r\\n```js\\r\\nvar Hello =  Omi.create(\\\"Hello\\\",{\\r\\n  render:function(){\\r\\n    return  ' <div>Hello {{name}}!</div>'\\r\\n  }\\r\\n})\\r\\n\\r\\nvar SubHello =  Omi.create(\\\"SubHello\\\",Hello,{ });\\r\\n\\r\\n\\r\\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit_es5\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\""

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"安装\\\">安装</h2>\\n\\n[Omi](https://github.com/AlloyTeam/omi)（读音 / [ˈomɪ] /, 汉字类似于 欧米） 是一款用于创建用户界面的组件化框架，开放并且现代，故得名：Omi。\\n\\n### 安装 Omi\\n\\n我们推荐使用  [npm](https://www.npmjs.com/) 来管理你的前端依赖.\\n\\n通过npm安装Omi，你只需要执行下面的命令:\\n\\n``` js\\nnpm install omi\\n```\""

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"生命周期\\\">生命周期</h2>\\r\\n\\r\\n|name   |avatars   |company   | \\r\\n|---|---|---|\\r\\n| constructor  | 构造函数 | new的时候 |\\r\\n| install  | 初始化安装，这可以拿到用户传进的data进行处理 | 实例化 |\\r\\n| installed    | 安装完成，HTML已经插入页面之后执行  |  实例化  |\\r\\n| uninstall | 卸载组件。执行remove方法会触发该事件    |   销毁时 |\\r\\n| beforeUpdate | 更新前     |   存在期 |\\r\\n| afterUpdate | 更新后     |    存在期 |\\r\\n\\r\\n## 示意图\\r\\n\\r\\n![lc](http://images2015.cnblogs.com/blog/105416/201701/105416-20170119153018546-1566368987.png)\\r\\n       \\r\\n### 举个例子\\r\\n\\r\\n```js\\r\\nclass Timer extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    install () {\\r\\n        this.data = {secondsElapsed: 0};\\r\\n    }\\r\\n\\r\\n    tick() {\\r\\n        this.data.secondsElapsed++;\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    installed(){\\r\\n        this.interval = setInterval(() => this.tick(), 1000);\\r\\n    }\\r\\n\\r\\n    uninstall() {\\r\\n        clearInterval(this.interval);\\r\\n    }\\r\\n\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        .num { color:red; }\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>Seconds Elapsed:<span class=\\\"num\\\"> {{secondsElapsed}}</span></div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\""

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"循环遍历\\\">循环遍历</h2>\\r\\n\\r\\n下面介绍mustache.js的方式和javascript遍历的方式。\\r\\n\\r\\n### 方式一\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <ul> {{#items}} <li id=\\\"{{id}}\\\">{{text}}</li> {{/items}}</ul>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new List({\\r\\n    items: [\\r\\n        {id: 1, text: 'Omi'},\\r\\n        {id: 2, text: 'dntzhang'},\\r\\n        {id: 3, text: 'AlloyTeam'}\\r\\n    ]\\r\\n}),\\\"body\\\");\\r\\n```\\r\\n\\r\\nmustache.js更详细的循环遍历使用可看[https://github.com/janl/mustache.js#non-empty-lists](https://github.com/janl/mustache.js#non-empty-lists)。 比如还支持：\\r\\n\\r\\n* 如果items的每一项是字符串，可以直接**{{.}}**的方式来输出每一项\\r\\n* 循环的时候调用定义好的函数\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=list\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\\r\\n### 方式二\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return `<div>\\r\\n                    <ul>\\r\\n                    ` + this.data.items.map(item =>\\r\\n                        '<li id=\\\"' + item.id + '\\\">' + item.text + '</li>'\\r\\n                    ).join(\\\"\\\") + `\\r\\n                    </ul>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new List({\\r\\n    items: [\\r\\n        {id: 1, text: 'Omi'},\\r\\n        {id: 2, text: 'dntzhang'},\\r\\n        {id: 3, text: 'AlloyTeam'}\\r\\n    ]\\r\\n}),\\\"body\\\");\\r\\n```\\r\\n\\r\\n当然你也可以在map里面也使用template string\\r\\n\\r\\n```js\\r\\n...\\r\\nrender() {\\r\\n    return `<div>\\r\\n                <ul>\\r\\n                ` + this.data.items.map(item =>\\r\\n                    `<li id=\\\"${item.id}\\\">${item.text}</li>`\\r\\n                ).join(\\\"\\\") + `\\r\\n                </ul>\\r\\n            </div>`;\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\n你将在页面看到如下效果:\\r\\n\\r\\n![pv](http://images2015.cnblogs.com/blog/105416/201701/105416-20170122095724129-2059595233.png)\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=list2\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\""

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"插件体系\\\">插件体系</h2>\\r\\n\\r\\n[Omi](https://github.com/AlloyTeam/omi)是Web组件化框架，怎么又来了个插件的概念？\\r\\n\\r\\n可以这么理解: Omi插件体系可以赋予dom元素一些能力，并且可以和组件的实例产生关联。\\r\\n\\r\\n### omi-drag\\r\\n\\r\\n且看这个例子:\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=plugin\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\\r\\n```js\\r\\nimport OmiDrag from './omi-drag.js';\\r\\n\\r\\nOmiDrag.init();\\r\\n\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <div omi-drag class=\\\"test\\\">Drag Me</div>\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n\\r\\n    style(){\\r\\n       return `\\r\\n        .test{\\r\\n            width:100px;\\r\\n            height:100px;\\r\\n            color:white;\\r\\n            line-height:90px;\\r\\n            text-align:center;\\r\\n            background-color:#00BFF3;\\r\\n        }\\r\\n        `\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n如上面的代码所示，通过在div上标记omi-drag，这个div就能够被用户使用鼠标拖拽。我们称omi-drag.js为omi插件。\\r\\n是不是非常方便？那么这个omi-drag是怎么实现的？\\r\\n\\r\\n## Omi.extendPlugin\\r\\n\\r\\n核心方法: Omi.extendPlugin( pluginName, handler )\\r\\n\\r\\n下面的代码就是展示了如何通过 Omi.extendPlugin 赋予dom拖拽的能力:\\r\\n\\r\\n```js\\r\\n;(function () {\\r\\n\\r\\n    var OmiDrag = {};\\r\\n    var Omi = typeof require === 'function'\\r\\n        ? require('omi')\\r\\n        : window.Omi;\\r\\n\\r\\n    OmiDrag.init = function(){\\r\\n        Omi.extendPlugin('omi-drag',function(dom, instance){\\r\\n            dom.style.cursor='move';\\r\\n            var isMouseDown = false,\\r\\n                preX = null,\\r\\n                preY = null,\\r\\n                currentX = null,\\r\\n                currentY = null,\\r\\n                translateX = 0,\\r\\n                translateY = 0;\\r\\n\\r\\n            dom.addEventListener('mousedown',function(evt){\\r\\n                isMouseDown = true;\\r\\n                preX = evt.pageX;\\r\\n                preY = evt.pageY;\\r\\n                evt.stopPropagation();\\r\\n            },false);\\r\\n\\r\\n            window.addEventListener('mousemove',function(evt){\\r\\n                if(isMouseDown){\\r\\n                    currentX = evt.pageX;\\r\\n                    currentY = evt.pageY;\\r\\n                    if(preX != null){\\r\\n                        translateX += currentX - preX;\\r\\n                        translateY += currentY - preY;\\r\\n                        dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\\r\\n                    }\\r\\n                    preX = currentX;\\r\\n                    preY = currentY;\\r\\n                    evt.preventDefault();\\r\\n                }\\r\\n            },false);\\r\\n\\r\\n            window.addEventListener('mouseup',function(){\\r\\n                isMouseDown = false;\\r\\n                preX = preY = currentX = currentY = null;\\r\\n            },false);\\r\\n        });\\r\\n    }\\r\\n\\r\\n    OmiDrag.destroy = function(){\\r\\n        delete Omi.plugins['omi-drag'];\\r\\n    };\\r\\n\\r\\n    if (typeof exports == \\\"object\\\") {\\r\\n        module.exports = OmiDrag;\\r\\n    } else if (typeof define == \\\"function\\\" && define.amd) {\\r\\n        define([], function(){ return OmiDrag });\\r\\n    } else {\\r\\n        window.OmiDrag = OmiDrag;\\r\\n    }\\r\\n\\r\\n})();\\r\\n```\\r\\n\\r\\n方法: Omi.extendPlugin( pluginName, handler )\\r\\n\\r\\n其中pluginName为插件的名称\\r\\n其中handler为处理器。handler可以拿到标记了pluginName的dom以及dom所在的组件的实例，即 dom 和 instance。\\r\\n\\r\\n通过 Omi.extendPlugin，可以赋予dom元素一些能力，也可以和组件的实例(instance)产生关联。\\r\\n但是上面的例子没有和instance产生关联，我们接下来试试:\\r\\n\\r\\n## 关联instance\\r\\n\\r\\n我们想在组件里面能够监听到move并且执行回调。如下:\\r\\n\\r\\n```js\\r\\n...\\r\\n...\\r\\nmoveHandler(){\\r\\n    console.log('moving');\\r\\n}\\r\\n\\r\\nrender() {\\r\\n    return  `\\r\\n    <div>\\r\\n        <div omi-drag class=\\\"test\\\">Drag Me</div>\\r\\n    </div>\\r\\n    `;\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\n主要被拖动过程中，moveHandler就不断地被执行。插件代码需要修改:\\r\\n\\r\\n```js\\r\\n...\\r\\nwindow.addEventListener('mousemove',function(evt){\\r\\n    if(isMouseDown){\\r\\n        currentX = evt.pageX;\\r\\n        currentY = evt.pageY;\\r\\n        if(preX != null){\\r\\n            translateX += currentX - preX;\\r\\n            translateY += currentY - preY;\\r\\n            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\\r\\n        }\\r\\n        preX = currentX;\\r\\n        preY = currentY;\\r\\n        evt.preventDefault();\\r\\n        instance.moveHandler(evt);\\r\\n    }\\r\\n},false);\\r\\n```\\r\\n\\r\\n我们在里面增加了instance.moveHandler(evt);方法，用来执行组件实例上的moveHandler方法。\\r\\n这样的话:就是组件的实例(instance)产生关联。但是还是有问题？如果标记了多个omi-drag 就会有问题！如:\\r\\n\\r\\n```js\\r\\n...\\r\\nrender() {\\r\\n    return  `\\r\\n    <div>\\r\\n        <div omi-drag class=\\\"test\\\">Drag Me</div>\\r\\n        <div omi-drag class=\\\"test\\\">Drag Me</div>\\r\\n    </div>\\r\\n    `;\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\n通常我们系统每个omi-drag都能对应一个回调函数，如：\\r\\n\\r\\n```js\\r\\n...\\r\\n...\\r\\nmoveHandlerA(){\\r\\n    console.log('moving');\\r\\n}\\r\\n\\r\\nmoveHandlerB(){\\r\\n    console.log('moving');\\r\\n}\\r\\n\\r\\nrender() {\\r\\n    return  `\\r\\n    <div>\\r\\n        <div omi-drag class=\\\"test\\\">Drag Me A</div>\\r\\n        <div omi-drag class=\\\"test\\\">Drag Me B</div>\\r\\n    </div>\\r\\n    `;\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\n怎么办？怎么实现？有办法！通过dom传递数据给插件。\\r\\n\\r\\n## 传递数据\\r\\n\\r\\n先来看最后实现的效果:\\r\\n\\r\\n```js\\r\\n...\\r\\n...\\r\\nmoveHandlerA(){\\r\\n    console.log('moving');\\r\\n}\\r\\n\\r\\nmoveHandlerB(){\\r\\n    console.log('moving');\\r\\n}\\r\\n\\r\\nrender() {\\r\\n    return  `\\r\\n    <div>\\r\\n        <div omi-drag class=\\\"test\\\" dragMove=\\\"moveHandlerA\\\" >Drag Me A</div>\\r\\n        <div omi-drag class=\\\"test\\\" dragMove=\\\"moveHandlerB\\\" >Drag Me B</div>\\r\\n    </div>\\r\\n    `;\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\nomi-drag修改的地方:\\r\\n\\r\\n```js\\r\\n...\\r\\nvar handlerName = dom.getAttribute('dragMove');\\r\\n\\r\\nwindow.addEventListener('mousemove',function(evt){\\r\\n    if(isMouseDown){\\r\\n        currentX = evt.pageX;\\r\\n        currentY = evt.pageY;\\r\\n        if(preX != null){\\r\\n            translateX += currentX - preX;\\r\\n            translateY += currentY - preY;\\r\\n            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\\r\\n        }\\r\\n        preX = currentX;\\r\\n        preY = currentY;\\r\\n        evt.preventDefault();\\r\\n        instance[handlerName](evt);\\r\\n    }\\r\\n},false);\\r\\n...\\r\\n```\\r\\n\\r\\n* 通过 var handlerName = dom.getAttribute('dragMove') 拿到dom上声明的dragMove\\r\\n* 通过 instance[handlerName](evt) 去执行对应的方法\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=plugin\\\" target=\\\"_blank\\\">点击这里→在线试试</a>\\r\\n\\r\\n## 更多插件\\r\\n\\r\\n* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势\\r\\n* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) Omi的[transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性\\r\\n* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）\\r\\n* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker) Omi的时间选择插件，支持各种时间或者时间区域选择\\r\\n\""

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"环境搭建\\\">环境搭建</h2>\\r\\n\\r\\n[Omi框架](https://github.com/AlloyTeam/omi)使用 Webpack + ES6 的方式去开发；使用karma+jasmine来作为Omi的测试工具。\\r\\n\\r\\n## Karma介绍\\r\\n\\r\\nKarma是一个基于Node.js的JavaScript测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流Web浏览器，也可集成到CI（Continuous integration）工具，也可和其他代码编辑器一起使用。这个测试工具的一个强大特性就是，它可以监控(Watch)文件的变化，然后自行执行。但是集成到travis ci要把singleRun设置成true,让其只执行一遍。\\r\\n\\r\\n## Jasmine介绍\\r\\nJasmine 是一款 JavaScript BDD（行为驱动开发）测试框架，它不依赖于其他任何 JavaScript 组件。它有干净清晰的语法，让您可以很简单的写出测试代码。\\r\\n\\r\\n## 开发依赖包\\r\\n\\r\\n在package.json中，有如下配置:\\r\\n\\r\\n```js\\r\\n  \\\"devDependencies\\\": {\\r\\n    \\\"babel-core\\\": \\\"^6.0.20\\\",\\r\\n    \\\"babel-loader\\\": \\\"^6.0.1\\\",\\r\\n    \\\"babel-preset-es2015\\\": \\\"^6.0.15\\\",\\r\\n    \\\"node-libs-browser\\\": \\\"^0.5.3\\\",\\r\\n    \\\"webpack\\\": \\\"^1.14.0\\\",\\r\\n    \\\"jasmine-core\\\": \\\"^2.5.2\\\",\\r\\n    \\\"karma\\\": \\\"^1.3.0\\\",\\r\\n    \\\"karma-chrome-launcher\\\": \\\"^2.0.0\\\",\\r\\n    \\\"karma-jasmine\\\": \\\"^1.1.0\\\",\\r\\n    \\\"karma-webpack\\\": \\\"^1.8.1\\\"\\r\\n  }\\r\\n```\\r\\n\\r\\n* ES6+相关依赖有babel-core、babel-loader和babel-preset-es2015\\r\\n\\r\\n在webpack.config.js中配置js文件使用babel-loader编译。\\r\\n```js\\r\\nloaders: [\\r\\n    {\\r\\n        loader: 'babel-loader',\\r\\n        test: /\\\\.js$/,\\r\\n        query: {\\r\\n            presets: 'es2015',\\r\\n        }\\r\\n    }\\r\\n]\\r\\n```\\r\\n\\r\\n* webpack相关依赖有node-libs-browser和webpack\\r\\n* 其余都是单元测试相关依赖\\r\\n\\r\\n        注意，这里使用了karma-webpack。因为使用Omi框架支持ES6+和ES5,使用karma-webpack是为了在单元测试里面使用ES6+的import和Class等语法。\\r\\n\\r\\n在karma.conf.js中配置webpack:\\r\\n\\r\\n```js\\r\\n    webpack: webpackConfig,\\r\\n    webpackMiddleware:{\\r\\n      noInfo:false\\r\\n    },\\r\\n    plugins: [\\r\\n        'karma-webpack',\\r\\n        'karma-jasmine',\\r\\n        'karma-chrome-launcher'\\r\\n    ]\\r\\n```\\r\\n\\r\\n具体配置看test目录下的[karma.conf.js](https://github.com/AlloyTeam/omi/blob/master/test/karma.conf.js)和[webpack.test.config.js](https://github.com/AlloyTeam/omi/blob/master/test/webpack.test.config.js)便可。\\r\\n\\r\\n注意，karma.conf.js需要设置\\r\\n\\r\\n```js\\r\\n// if true, Karma captures browsers, runs the tests and exits\\r\\nsingleRun: true,\\r\\n```\\r\\n\\r\\n不然，travis ci脚本执行的时候不会中断导致执行超时异常。\\r\\n\\r\\n## npm 脚本\\r\\n\\r\\n```js\\r\\n  \\\"scripts\\\": {\\r\\n    \\\"build\\\": \\\"webpack -w\\\",\\r\\n    \\\"test\\\": \\\"karma start test/karma.conf.js\\\",\\r\\n    \\\"hello\\\": \\\"webpack -w\\\",\\r\\n    \\\"todo\\\": \\\"webpack -w\\\"\\r\\n  }\\r\\n```\\r\\n\\r\\n其中：\\r\\n* npm run build : 生成dist目录的omi.js文件\\r\\n* npm run test : 执行单元测试\\r\\n* npm run hello : 编译hello的demo\\r\\n* npm run todo : 编译todo的demo\\r\\n\\r\\n在webpack.config.js中，会根据 process.env.npm_lifecycle_event去设置不同的入口文件。所以同样是执行webpack -w，执行结果可以不一样。\\r\\n\\r\\n来看下build的相关webpack配置:\\r\\n\\r\\n```js\\r\\nif(ENV === 'build'){\\r\\n    config = {\\r\\n        entry: {\\r\\n            omi: './src/index.js'\\r\\n        },\\r\\n        output: {\\r\\n            path: 'dist/',\\r\\n            library:'Omi',\\r\\n            libraryTarget: 'umd',\\r\\n            filename:  '[name].js'\\r\\n        },\\r\\n```\\r\\n\\r\\n这里把libraryTarget设置成了umd，webpack会帮助我们build出umd的Omi。\\r\\n\\r\\n如果是打包demo（npm run hello 和 npm run todo）的话，会进入下面的条件判断：\\r\\n\\r\\n```js\\r\\nelse {\\r\\n    config.entry = './example/' + ENV + '/main.js';\\r\\n    config.output.path = './example/' + ENV + '/';\\r\\n}\\r\\n```\\r\\n\\r\\n会去example下对应的目录查找main.js作为webpack入口文件。\\r\\n\\r\\n这里可以看到，我们不仅用webpack build出Omi框架，也使用webpack build所有demo。\\r\\n详细配置参考[webpack.config.js](https://github.com/AlloyTeam/omi/blob/master/webpack.config.js)的配置。\\r\\n\\r\\n## 参考文档\\r\\n\\r\\n* [http://www.cnblogs.com/cqhaibin/p/5867125.html](http://www.cnblogs.com/cqhaibin/p/5867125.html)\\r\\n* [https://karma-runner.github.io/latest/intro/installation.html](https://karma-runner.github.io/latest/intro/installation.html)\\r\\n* [https://karma-runner.github.io/latest/intro/configuration.html](https://karma-runner.github.io/latest/intro/configuration.html)\\r\\n\\r\\n\""

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Hello Omi\\\">Hello Omi</h2>\\r\\n\\r\\n[Omi框架](https://github.com/AlloyTeam/omi)的每个组件都继承自Omi.Component，本篇会去完成Omi的Component的基本锥形，让其能够渲染第一个组件。\\r\\n\\r\\n## omi.js实现\\r\\n\\r\\n```js\\r\\nvar Omi = {};\\r\\nOmi._instanceId = 0;\\r\\nOmi.getInstanceId = function () {\\r\\n    return Omi._instanceId++;\\r\\n};\\r\\n\\r\\nOmi.render = function(component, renderTo){\\r\\n    component.renderTo = typeof renderTo === \\\"string\\\" ? document.querySelector(renderTo) : renderTo;\\r\\n    component._render();\\r\\n    return component;\\r\\n};\\r\\n\\r\\nmodule.exports = Omi;\\r\\n```\\r\\n\\r\\n* Omi.getInstanceId 用来给每个组件生成自增的ID\\r\\n* Omi.render 用来把组件渲染到页面\\r\\n\\r\\n## 基类Omi.Component实现\\r\\n\\r\\n所有的组件都是继承自Omi.Component。\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\n\\r\\nclass Component {\\r\\n    constructor(data) {\\r\\n        this.data = data || {};\\r\\n        this.id = Omi.getInstanceId();\\r\\n        this.HTML = null;\\r\\n        this.renderTo = null;\\r\\n    }\\r\\n\\r\\n    _render() {\\r\\n        this.HTML = this.render();\\r\\n        this.renderTo.innerHTML = this.HTML;\\r\\n    }\\r\\n}\\r\\n\\r\\nexport default Component;\\r\\n```\\r\\n\\r\\n* Omi使用完全面向对象的方式去开发组件，这里约定好带有下划线的方法是用于内部实现调用，不建议Omi框架的使用者去调用。\\r\\n* 其中，_render为私有方法用于内部实现调用,会去调用组件的真正render方法用于生成HTML,并且把生成的HTML插入到renderTo容器里面。\\r\\n* 注意，这里目前没有引入dom diff，不管第几次渲染都是无脑设置innerHTML，复杂HTML结构对浏览器的开销很大，这里后续会引入diff。\\r\\n\\r\\n## index.js整合\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\nimport Component from './component.js';\\r\\n\\r\\nOmi.Component = Component;\\r\\n\\r\\nwindow.Omi = Omi;\\r\\nmodule.exports = Omi;\\r\\n```\\r\\n\\r\\n这里把Omi给直接暴露在window下，因为每个组件都生成了唯一的ID，后续实现事件作用域以及对象实例获取都要通过window下的Omi获取。\\r\\n\\r\\n## 最后使用\\r\\n\\r\\n实现完omi.js和component.js以及index.js之后，你就可以实现Hello Omi拉:\\r\\n\\r\\n```js\\r\\nimport Omi from 'index.js'; \\r\\n//或者使用webpack build之后的omi.js \\r\\n//import Omi from 'omi.js';\\r\\n\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n      <div>\\r\\n      \\t<h1>Hello ,`+ this.data.name +`!</h1>\\r\\n      </div>\\r\\n  \\t\\t`;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Hello({ name : 'Omi' }),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n什么？都2017年了还在拼接字符串？！虽然ES6+的template string让多行字符串拼接更加得心应手，但是template string+模板引擎可以让更加优雅方便。既然用了template string，也可以写成这样子：\\r\\n\\r\\n```js\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n      <div>\\r\\n        <h1>Hello ,${this.data.name}!</h1>\\r\\n      </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Hello({ name : 'Omi' }),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n## 引入mustachejs模板引擎\\r\\n\\r\\nOmi支持任意模板引擎。可以看到，上面是通过拼接字符串的形式生成HTML，这里当然可以使用模板引擎。\\r\\n\\r\\n修改一下index.js:\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\nimport Mustache from './mustache.js';\\r\\nimport Component from './component.js';\\r\\n\\r\\nOmi.template = Mustache.render;\\r\\nOmi.Component = Component;\\r\\n\\r\\nwindow.Omi=Omi;\\r\\nmodule.exports = Omi;\\r\\n```\\r\\n\\r\\n这里把Mustache.render挂载在Omi.template下。再修改一下component.js:\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\n\\r\\nclass Component {\\r\\n    constructor(data) {\\r\\n        this.data = data || {};\\r\\n        this.id = Omi.getInstanceId();\\r\\n        this.HTML = null;\\r\\n    }\\r\\n\\r\\n    _render() {\\r\\n        this.HTML = Omi.template(this.render(), this.data);\\r\\n        this.renderTo.innerHTML = this.HTML;\\r\\n    }\\r\\n}\\r\\n\\r\\nexport default Component;\\r\\n```\\r\\n\\r\\nOmi.template（即Mustache.render）需要接受两个参数，第一个参数是模板，第二个参数是模板使用的数据。\\r\\n\\r\\n现在，你便可以使用mustachejs模板引擎的语法了：\\r\\n\\r\\n```js\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n      <div>\\r\\n      \\t<h1>Hello ,{{name}}!</h1>\\r\\n      </div>\\r\\n  \\t\\t`;\\r\\n\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n从上面的代码可以看到，你完全可以重写Omi.template方法去使用任意模板引擎。重写Omi.template的话，建议使用omi.lite.js，因为omi.lite.js是不包含任何模板引擎的。那么怎么build出两个版本的omi？且看webpack里设置的多入口:\\r\\n\\r\\n```js\\r\\n entry: {\\r\\n    omi: './src/index.js',\\r\\n    'omi.lite': './src/index.lite.js'\\r\\n},\\r\\noutput: {\\r\\n    path: 'dist/',\\r\\n    library:'Omi',\\r\\n    libraryTarget: 'umd',\\r\\n    filename:  '[name].js'\\r\\n},\\r\\n```\\r\\n\\r\\nindex.lite.js的代码如下：\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\nimport Component from './component.js';\\r\\n\\r\\nOmi.template = function(tpl, data){\\r\\n    return tpl;\\r\\n}\\r\\n\\r\\nOmi.Component = Component;\\r\\n\\r\\nwindow.Omi=Omi;\\r\\nmodule.exports = Omi;\\r\\n```\\r\\n\\r\\n可以看到Omi.template没有对tpl做任何处理直接返回，开发者可以重写该方法。\\r\\n\\r\\n## 总结\\r\\n\\r\\n到目前为止，已经实现了：\\r\\n\\r\\n* 第一个组件的渲染\\r\\n* 模板引擎的接入\\r\\n* 多入口打包omi.js和omi.lite.js\\r\\n\\r\\n下片，将介绍《Omi原理-局部CSS》，欢迎关注...\\r\\n\""

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"## 写在前面\\r\\nOmi很适合大型复杂的Web页面开发，例如一些Web在线工具的开发。但是制作这种简单的QQ附近用户列表Web页，也不会有大炮哄蚊子的感觉。\\r\\n\\r\\n项目开始之前，实现选择一个脚手架。这个项目用的就是[Omi Github上的scaffolding](https://github.com/AlloyTeam/omi/tree/master/scaffolding)作为其项目脚手架。主要基于 Gulp + Webpack + Babel + BrowserSync 进行开发和部署。（ps：目前脚手架先上github弄下来，pasturn和Aresn正在开发omi-cli，不久就要发布了）\\r\\n\\r\\nGulp用来串联整个流程，Webpack + Babel让你可以写ES6和打包，BrowserSync用来帮你刷浏览器，不用F5了。\\r\\n\\r\\n这里需要注意的是，BrowserSync会启动localhost:3000导致你的AJAX请求跨域而无法拿到数据。\\r\\n\\r\\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184323476-1150194475.png)\\r\\n\\r\\n\\r\\n所以，要使用Fiddler并配置Extention：\\r\\n\\r\\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184331445-1124037886.png)\\r\\n\\r\\n\\r\\n## 目录\\r\\n\\r\\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184337726-1825094998.png)\\r\\n\\r\\n\\r\\n目录结构也是和[Omi Github上的scaffolding](https://github.com/AlloyTeam/omi/tree/master/scaffolding)一样。\\r\\n组件全放在component目录，公共的工具库放在common，其他资源文件放在asset里。\\r\\n\\r\\n## 命令\\r\\n\\r\\n开发\\r\\n```js\\r\\nnpm run dev\\r\\n```\\r\\n\\r\\n发布\\r\\n```js\\r\\nnpm run dist\\r\\n```\\r\\n\\r\\n## 开始写码\\r\\n\\r\\n万事具备，开始写码。先写组件：\\r\\n\\r\\n```js\\r\\nimport Omi from 'omi'\\r\\n\\r\\nclass UserList extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data)\\r\\n    }\\r\\n\\r\\n    install() {\\r\\n        this.data.uin_info || (this.data.uin_info = [])\\r\\n        this.data.uin_info.forEach(user => {\\r\\n            this.prepareData(user)\\r\\n        })\\r\\n    }\\r\\n    \\r\\n    prepareData(user){\\r\\n        user.desc_d = user.desc.split(\\\"&nbsp;\\\")[0]\\r\\n        user.desc_t = user.desc.split(\\\"&nbsp;\\\")[1]\\r\\n        user.isBoy = user.sex === \\\"男\\\"\\r\\n        user.qlogo = user.url.replace(\\\"http://\\\", location.protocol + \\\"//\\\").replace(/&amp;/g, \\\"&\\\")\\r\\n        if (user.profession_desc) {\\r\\n            user.hasProfession_desc = true\\r\\n        }\\r\\n    }\\r\\n    \\r\\n    appendUsers (users) {\\r\\n        users.uin_info && users.uin_info.forEach(user =>{\\r\\n            this.prepareData(user)\\r\\n            this.data.uin_info.push(user)\\r\\n        })\\r\\n        this.update()\\r\\n    }\\r\\n\\r\\n    sendGift(uin, nick, qlogo) {\\r\\n        //送礼物并关闭webview,此处省略\\r\\n        //..\\r\\n        //..\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return `\\r\\n<div class=\\\"user_list\\\">\\r\\n    {{#uin_info}}\\r\\n    <div class=\\\"item\\\" onclick=\\\"sendGift('{{uin}}','{{nick}}','{{qlogo}}')\\\">\\r\\n        <div class=\\\"qlogo\\\">\\r\\n            <img style=\\\"width: 70px;\\\" src=\\\"{{qlogo}}\\\" />\\r\\n        </div>\\r\\n        <div class=\\\"main b1 bb\\\">\\r\\n            <div class=\\\"nick\\\">{{{nick}}}</div>\\r\\n            <div class=\\\"icons\\\">\\r\\n                {{#isBoy}}<span class=\\\"boy_age\\\"><img src=\\\"component/user_list/boy.png\\\" alt=\\\"\\\" /><span>{{age}}</span></span> {{/isBoy}}\\r\\n               {{^isBoy}}<span class=\\\"girl_age\\\"><img src=\\\"component/user_list/girl.png\\\" alt=\\\"\\\" /><span>{{age}}</span></span> {{/isBoy}}\\r\\n                {{#hasProfession_desc}} <span class=\\\"profession\\\"><span>{{profession_desc}}</span></span> {{/hasProfession_desc}}\\r\\n            </div>\\r\\n            <div class=\\\"action\\\">{{{intro}}}</div>\\r\\n        </div>\\r\\n        <div class=\\\"distance_info\\\">{{desc_d}} · {{desc_t}}</div>\\r\\n    </div>\\r\\n    {{/uin_info}}\\r\\n    <div style=\\\"text-align:center;font-size:13px;line-height:30px;height:30px;\\\"><span class=\\\"loading\\\"></span> 加载中...</div>\\r\\n</div>\\r\\n`\\r\\n    }\\r\\n\\r\\n    style() {\\r\\n        return `\\r\\n\\r\\n\\r\\n.qlogo {\\r\\n    overflow: hidden;\\r\\n    width: 70px;\\r\\n    height: 70px;\\r\\n    -webkit-border-radius: 50%;\\r\\n    border-radius: 50%;\\r\\n    position: absolute;\\r\\n    top: 10px;\\r\\n    left: 12px;\\r\\n}\\r\\n...\\r\\n...\\r\\n..这里省略大量.....\\r\\n...\\r\\n...\\r\\n\\r\\n.distance_info {\\r\\n    position: absolute;\\r\\n    top: 15px;\\r\\n    right: 9px;\\r\\n    color: #7B7B84;\\r\\n    font-size: 10px;\\r\\n}\\r\\n\\r\\n        `\\r\\n    }\\r\\n}\\r\\n\\r\\nexport default UserList\\r\\n```\\r\\n\\r\\n组件里面有5个方法:\\r\\n\\r\\n* constructor 组件的构造函数，生命周期的一部分，其实在super上面和super调用下面可以对data做一些处理。super之上不能拿到this\\r\\n* install 组件的初始化安装，生命周期的一部分，这里也可以拿到用户传进的data进行处理\\r\\n* prepareData 对数据进行一些处理来满足模板的渲染\\r\\n* appendUsers 新增数据，用来处理用户向下滚动的load more 的行为的时候调用\\r\\n* sendGift 送礼物，点击每一项的时候会有送礼物的行为，业务相关，可以无视..\\r\\n\\r\\n其他两个方法的render和style用来生成组件的HTML和局部CSS，不再叙述。\\r\\nrender里面使用了[mustache.js](https://github.com/janl/mustache.js)模板引擎；\\r\\n如果使用omi.lite.js版本(不包含[mustache.js](https://github.com/janl/mustache.js)模板引擎)的话，你也可以使用ES6 map去遍历数据生成HTML，或者重写 Omi.template去使用任意你喜欢的模板引擎，非常灵活方便。\\r\\n\\r\\n这里友情提醒一下，如果使用webstorm的话，可以把js version设置成JSX Harmony或者ECMAScript 6，这样才是写ES6+的姿势。\\r\\n\\r\\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184433148-472636444.png)\\r\\n\\r\\n\\r\\n下面来看index.js:\\r\\n\\r\\n```js\\r\\nimport Root from './config.js'\\r\\nimport Omi from 'omi'\\r\\nimport UserList from '../component/user_list/index.js'\\r\\n\\r\\nOmi.makeHTML('UserList', UserList)\\r\\n\\r\\nclass Main extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data)\\r\\n    }\\r\\n\\r\\n    installed() {\\r\\n        window.onscroll = () => this.loadMore()\\r\\n        this.requestData(data => this.list.appendUsers(data))\\r\\n    }\\r\\n\\r\\n    loadMore() {\\r\\n        const body = document.body,\\r\\n            html = document.documentElement,\\r\\n            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),\\r\\n            vp_height = window.innerHeight\\r\\n\\r\\n        if (height - document.body.scrollTop - vp_height < 200) {\\r\\n            this.requestData(data => this.list.appendUsers(data))\\r\\n        }\\r\\n    }\\r\\n\\r\\n    requestData(callback) {\\r\\n        if (Root.isDev) {\\r\\n            require.ensure([], ()=> {\\r\\n                callback(require('./mock_data.js').default)\\r\\n            })\\r\\n        }else{\\r\\n        \\t//ajax 请求数据，这里省略\\r\\n        }\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return `\\r\\n    <div class=\\\"main\\\">\\r\\n        <UserList name=\\\"list\\\" />\\r\\n    </div>`\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Main(),'body')\\r\\n```\\r\\n\\r\\n通过Omi.makeHTML('UserList', UserList)这句代码，UserList变成了可以嵌套至render方法中的标签。如：\\r\\n\\r\\n```js\\r\\n render() {\\r\\n        return `\\r\\n    <div class=\\\"main\\\">\\r\\n        <UserList name=\\\"list\\\" />\\r\\n    </div>`\\r\\n    }\\r\\n```\\r\\n\\r\\n下面这行代码，是监听滚动，快滚动到底部的时候在loadMore里面会去请求。\\r\\n\\r\\n```js\\r\\nwindow.onscroll = () => this.loadMore()\\r\\n```\\r\\n\\r\\n通过height - document.body.scrollTop - vp_height < 200判断用户快要滚动底部，滚动到底部有个加载更多的行为，即：\\r\\n\\r\\n```js\\r\\nif (height - document.body.scrollTop - vp_height < 200) {\\r\\n    this.requestData(data => this.list.appendUsers(data))\\r\\n}\\r\\n```\\r\\n\\r\\nrequestData是去服务器请求分页的数据，请求成功，会去调用this.list.appendUsers进行数据的添加。\\r\\n慢着？this.list哪里来的？appendUsers又是哪里定义的方法？且看下面：\\r\\n\\r\\n```js\\r\\n <UserList name=\\\"list\\\" />\\r\\n```\\r\\n\\r\\n上面标记的name，让你可以直接通过this.list访问到UserList对象的实例，所以也就可以调用它的appendUsers方法！\\r\\n\\r\\n再来看下数据模拟：\\r\\n\\r\\n```js\\r\\nif (Root.isDev) {\\r\\n        require.ensure([], ()=> {\\r\\n            callback(require('./mock_data.js').default)\\r\\n        })\\r\\n    }\\r\\n```\\r\\n\\r\\n这里在dev环境下是mock数据，使用了require.ensure，这样当你npm run dist的时候，mock的数据就不会被打包进js里了！！\\r\\n\\r\\n## 最后\\r\\n\\r\\n好了，就这么多，Omi让代码真心方便简洁~~~\\r\\n\\r\\n### 相关地址\\r\\n\\r\\n* [演示地址](http://alloyteam.github.io/omi/example/qq_nearby/dev/index.html)\\r\\n* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/qq_nearby)\""

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"模板切换\\\">模板切换</h2>\\r\\n\\r\\nOmi有三个版本。其中的omi.js和omi.lite.js属于Web端使用的版本。\\r\\n\\r\\n* omi.js内置了[mustache.js](https://github.com/janl/mustache.js)作为模版引擎\\r\\n* omi.lite.js不包含任何模版引擎\\r\\n\\r\\nOmi不强制开发者使用mustache.js，你可以根据业务场景使用任意模板引擎或者不使用模板引擎。\\r\\n\\r\\n那么怎么使用别的模板引擎？下面拿[artTemplate](https://github.com/aui/artTemplate)作为例子。\\r\\n\\r\\n### 使用artTemplate\\r\\n\\r\\n```js\\r\\nOmi.template = function(tpl, data){\\r\\n    return artTemplate.compile(tpl)(data);\\r\\n}\\r\\n```\\r\\n重写Omi.template方法，tpl为传入的模板，data为模板所需的数据，返回值为HTML。\\r\\n重写完毕后就能在render使用artTemplate的语法，如：\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h1 { color:red; }\\r\\n        li{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<h1>{{title}}</h1>\\r\\n                <ul>\\r\\n                    {{each list as value i}}\\r\\n                    <li>索引 {{i + 1}} ：{{value}}</li>\\r\\n                    {{/each}}\\r\\n                </ul>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n### 相关地址\\r\\n\\r\\n* [演示地址](http://alloyteam.github.io/omi/example/artTemplate/)\\r\\n* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/artTemplate)\""

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Omi的理念\\\">Omi的理念</h2>\\r\\n\\r\\nOmi的理念是基于面向对象编程体系，内建积木系统。\\r\\n 传统的单向数据流或者抛出event的组件通讯方式增加了系统的稳定性，但是丧失了灵活性。一定程度上也降低了组建的复用。所谓鱼和熊掌不可兼得。\\r\\n 面向对象体系需要多一个逻辑层，可以自由操作所有组件的instance，instance之间的逻辑关系构建出了整个程序。这样组建间的逻辑，通信，复用就全部迎刃而解。组建也更加单一职责，更松耦合。\\r\\n\\r\\n对比函数式编程、命令式编程与面向对象编程，可以归纳总结出下面几条：\\r\\n\\r\\n- 命令式编程干脆直接，利用循环条件等控制流程，强调执行过程\\r\\n- 命令式编程对硬件执行友好，运行更容易，却阻碍了复杂程序的设计\\r\\n- 函数式强调输入和输出，并非执行过程\\r\\n- 函数式倡导多个简单执行单元组合成复杂运算程序\\r\\n- 面向对象编程将对象作为程序的基本单元，更具有重用性、灵活性和扩展性\\r\\n\\r\\nJavascript是哪种类型的语言？现在ES6+已经有了class。那么他是面向对象语言？\\r\\n但是JS可以在任意地方定义函数并且当作把函数当作值来传递。那么他是函数式编程语言？\\r\\n所以，没有精准的定义，取决于你的用法和姿势。其次，Web组件化架构层面编程模型和语言层面编程模型是非常自由的关系。意思就是，你可以用Javascript构建函数式编程框架如React，也可以基于面向对象体系搭建Omi。\\r\\n\\r\\n### 函数式编程 VS 面向对象编程\\r\\n\\r\\n在UI组件框架层面，函数式编程的代表有React，Omi属于面向对象编程体系。那么他们各有什么优缺点？下面做了个对比（其实也是函数式编程与面向对象编程的对比）：\\r\\n\\r\\n|    | React        | Omi  |\\r\\n| ------------- |:-------------:|:-----:|\\r\\n| 组件通信  | ★★★★☆| ★★★★★ |\\r\\n| 稳定性    | ★★★★★    |   ★★★★☆ |\\r\\n| 灵活性  | ★★★★☆| ★★★★★ |\\r\\n| 扩展性 | ★★★★☆     |   ★★★★★ |\\r\\n| 测试性 | ★★★★★     |   ★★★★☆ |\\r\\n| 文件大小 | ★★★☆☆    |   ★★★★★ |\\r\\n| 功能特性 | ★★★☆☆    |   ★★★★☆ |\\r\\n| DOM性能 | ★★★★★    |   ★★★★☆ |\\r\\n| 动画性能 | ★★★★☆    |   ★★★★★ |\\r\\n| 抽象复杂度 | ★★★★☆    |   ★★★★★ |\\r\\n| 异步编程 | ★★★★★    |   ★★★★☆ |\\r\\n\\r\\n可以看得出，鱼和熊掌不可兼得。面向对象编程更具有重用性、灵活性和扩展性，带来的问题就是更加难测试。\\r\\n具体来说，如函数式编程，其测试面积是state1 + state2 + ... + stateN；在面向对象编程中，其测试面积是state1×event1 + state2×event2 + ... + stateN×eventN。\\r\\n\\r\\n总结来说，更加推荐使用面向对象的方式去搭建UI组件化框架。\\r\\n\\r\\n<hr/>\\r\\n\\r\\n### 全文结束，感谢阅读。[开始Omi之旅吧!](https://github.com/AlloyTeam/omi) 或者继续往看下[Omi原理↓↓↓](http://alloyteam.github.io/omi/website/docs.html#环境搭建)\\r\\n\\r\\n\""

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Communication\\\">Component Communication</h2>\\r\\n\\r\\nCommunication between [Omi](https://github.com/AlloyTeam/omi) components is very flexible, there are many options:\\r\\n\\r\\n- By declaring `data-*` on the component to pass data to child node\\r\\n- By declaring `data` on the component to pass data to child node (support complex data types mapping)\\r\\n- By declaring `childrenData` on parent component to automatically pass data to child node\\r\\n- By declaring `group-data` (support complex data types mapping)\\r\\n- It's completely object-oriented, you can easily get the object instance, then you can set the instance of the property or call the instance of the method\\r\\n\\r\\nLet's see some examples.\\r\\n\\r\\n### Communicate by `data-*`\\r\\n\\r\\n```js\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n      super(data);\\r\\n    }\\r\\n    style () {\\r\\n      return  `\\r\\n      h1{\\r\\n      \\tcursor:pointer;\\r\\n      }\\r\\n      `;\\r\\n    }\\r\\n    handleClick(target, evt){\\r\\n      alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n      return  `\\r\\n      <div>\\r\\n      \\t<h1 onclick=\\\"handleClick(this, event)\\\">Hello ,{{name}}!</h1>\\r\\n      </div>\\r\\n  \\t\\t`;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.makeHTML('Hello', Hello);\\r\\n\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello data-name=\\\"Omi\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\nGenerally `data-*` is used to pass value types such as string and number. It is worth noting that, through `data-*`, received data types are string. You need to manually transform it to the number type.\\r\\n\\r\\nNormally, communicate by `data-*` is enough, but sometimes we may need to use complex data types, then we can use `data` to communicate.\\r\\n\\r\\n### Communicate by `data`\\r\\n\\r\\nAs shown in the above code, name can be passed to the subcomponent by `data-name=\\\"Omi\\\"`. The following code can also achieve the same effect.\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n      super(data);\\r\\n      this.helloData = { name : 'Omi' };\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello data=\\\"helloData\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\nUse the `data` tag, it will find the property from the component instance (that is, this), this can be mounted with any complex objects. This also broke the limitations of `data-*`.\\r\\n\\r\\nThen how do we pass `data` that is in a deep depth of the instance to the Hello? No worries, `data` tag can be a complex statement:\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.complexData ={\\r\\n            a:{\\r\\n                b:{\\r\\n                    c:[\\r\\n                        {\\r\\n                            e:[{\\r\\n                                name:'ComplexData Support1'\\r\\n                            },{\\r\\n                                name:'ComplexData Support2'\\r\\n                            }]\\r\\n                        },\\r\\n                        {\\r\\n                            name: 'ComplexData Support3'\\r\\n                        }\\r\\n                    ]\\r\\n                }\\r\\n            }\\r\\n        };\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello data=\\\"complexData.a.b.c[1]\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=data_complex\\\" target=\\\"_blank\\\">Click me for the complex data mapping</a>\\r\\n\\r\\n### Communicate by `childrenData`\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n      super(data);\\r\\n      this.childrenData = [{ name : 'Omi' } , { name : 'dntzhang' }];\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello  />\\r\\n            <Hello  />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\nWe can use `this.childrenData` to transfer data to the sub-component. In this case, `childrenData` is an array, so it can pass data to multiple components in the same time. In the meanwhile, the data will be passed to components one by one.\\r\\n\\r\\n### Communicate by `group-data`\\r\\n\\r\\n`childrenData` can pass data to multiple components. However, there are many scenes where the source of data does not have to be from `childrenData`. `childrenData` is an array, and it should be the same order with the components, so that the data must all concentrated in `childrenData`, it's very inconvenient. `group-data` dedicated to solve the above pain points, specifically to pass data to a group of components.\\r\\n\\r\\n```js\\r\\nimport Hello from './hello.js';\\r\\n\\r\\n\\r\\nOmi.makeHTML('Hello', Hello);\\r\\n\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello group-data=\\\"testData\\\" />\\r\\n            <Hello group-data=\\\"testData\\\" />\\r\\n            <Hello group-data=\\\"testData\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\nBy declaring a `group-data` tag in the sub-components, it will go to the current instance of the component (that is, `this`) to find the corresponding property. Then according to the current location, the data will pass to the positions one by one.\\r\\n\\r\\nThe results are as follows:\\r\\n\\r\\n![group-data results](http://images2015.cnblogs.com/blog/105416/201702/105416-20170216110701535-1698390390.png)\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data\\\" target=\\\"_blank\\\">Click me for the group-data example</a>\\r\\n\\r\\nSimilarly, `group-data` supports the mapping of complex data types. It should be noted that the end of the group-data mapping must be an array:\\r\\n\\r\\n```js\\r\\nimport Hello from './hello.js';\\r\\n\\r\\n\\r\\nOmi.makeHTML('Hello', Hello);\\r\\n\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.complexData ={\\r\\n            a:{\\r\\n                b:{\\r\\n                    c:[\\r\\n                        {\\r\\n                            e:[{\\r\\n                                name:'ComplexData Support1'\\r\\n                            },{\\r\\n                                name:'ComplexData Support2'\\r\\n                            }]\\r\\n                        },\\r\\n                        {\\r\\n                            name: 'ComplexData Support3'\\r\\n                        }\\r\\n                    ]\\r\\n                }\\r\\n            }\\r\\n        };\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello group-data=\\\"complexData.a.b.c[0].e\\\" />\\r\\n            <Hello group-data=\\\"complexData.a.b.c[0].e\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex\\\" target=\\\"_blank\\\">Click me for the complex group-data mapping</a>\\r\\n\\r\\n### By object instance\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    \\r\\n    installed(){\\r\\n        this.hello.data.name = \\\"Omi\\\";\\r\\n        this.update()\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello name=\\\"hello\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n### By omi-id\\r\\n\\r\\n```js\\r\\n...\\r\\nclass App extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    \\r\\n    installed(){\\r\\n        Omi.get(\\\"hello\\\").data.name = \\\"Omi\\\";\\r\\n        this.update()\\r\\n    }\\r\\n  \\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <Hello omi-id=\\\"hello\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new App(),\\\"#container\\\");\\r\\n```\\r\\n\\r\\nBy declaring `omi-id` on the component, we can get the instance of the object anywhere in the program. This can be regarded as any component communication artifacts.\\r\\n\\r\\n### Warm Tips\\r\\n\\r\\n- The data that passed by `childrenData` or `data` is shadow copied to sub-components. In order to update it, we need to update the `data` attribute of the component instance.\\r\\n- The data that passed by `data-*` is also shadow copied to sub-components. In order to update it, we need to update the `data` attribute of the component instance.\\r\\n- If we set the `dataFirst` property of the component instance to `false`, then `data-*` will override the `data` of component instance.\\r\\n\\r\\nFor the third tip, please checkout the pseudo-code:\\r\\n\\r\\n```js\\r\\nif(this.dataFirst){\\r\\n    this.data = Object.assign({},data-✼ ,this.data);\\r\\n}else{\\r\\n    this.data = Object.assign({},this.data, data-✼);\\r\\n}\\r\\n```\""

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Components\\\">Components</h2>\\r\\n\\r\\n[Omi](https://github.com/AlloyTeam/omi) is based entirely on component architecture, which allows developers to build web applications like building blocks. Everything is components, components can be nested to create new components.\\r\\n\\r\\n![Omi Components System](http://images2015.cnblogs.com/blog/105416/201702/105416-20170210093427338-1536910080.png)\\r\\n\\r\\n### Simple Components\\r\\n\\r\\nLet's explore a simple Todo example to learn the components system in Omi.\\r\\n\\r\\n```js\\r\\nclass Todo extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    add (evt) {\\r\\n        evt.preventDefault();\\r\\n        this.data.items.push(this.data.text);\\r\\n        this.data.text = '';\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h3 { color:red; }\\r\\n        button{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n        this.data.text = target.value;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h3>TODO</h3>\\r\\n                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\\r\\n                    <form onsubmit=\\\"add(event)\\\" >\\r\\n                        <input type=\\\"text\\\" onchange=\\\"handleChange(this)\\\"  value=\\\"{{text}}\\\"  />\\r\\n                        <button>Add #{{items.length}}</button>\\r\\n                    </form>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Todo({ items: [] ,text : '' }),\\\"body\\\");\\r\\n```\\r\\n\\r\\nThe HTML generated by the component will eventually be inserted into the body. The above example shows some of the features of Omi:\\r\\n\\r\\n- Data flow: `data` in `new Todo(data,..)` can be used directly in the template in render method.\\r\\n- Partial CSS: `h3` in `style()` only effect inside of render. It'll never pollute `h3`  outside of this component. The same rule applies to `button`.\\r\\n- Declarative event binding: `onchange` will call `handleChange` that inside of the component. `this` refers to the current DOM element, `event` refers to the current DOM Event Object.\\r\\n- You need to manually call the `this.update()` method to update the component\\r\\n\\r\\nIt is important to note that, for more freedom and flexibility, Omi does not automatically update DOM while data changes. Developers need to call the `update` method manually.\\r\\n\\r\\nYou can also use [oba] (https://github.com/dntzhang/oba) or mobx to implement automatic updates.\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=todo\\\" target=\\\"_blank\\\">Click me for the live demo</a>\\r\\n\\r\\n## Component Nesting\\r\\n\\r\\nIt's ok to not use nesting component if your page is super simple. However, for most of webpages and web applications, it is a necessary to define the nesting Components to implement complex features.\\r\\n\\r\\nFor instance, we can extract a `List` component form the Todo example. This brings maintainable, scalable and reuseable to our project:\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\nThen how to use this `List`? We need to use `Omi.makeHTML` to make the `List` to a tag which can be used in render method:\\r\\n\\r\\n```js\\r\\nimport List from './list.js';\\r\\n\\r\\nOmi.makeHTML('List', List);\\r\\n\\r\\nclass Todo extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.data.length = this.data.items.length;\\r\\n        this.listData = { items : this.data.items };\\r\\n    }\\r\\n\\r\\n    add (evt) {\\r\\n        evt.preventDefault();\\r\\n        this.list.data.items.push(this.data.text);\\r\\n        this.data.length = this.list.data.items.length;\\r\\n        this.data.text = '';\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h3 { color:red; }\\r\\n        button{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n        this.data.text = target.value;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h3>TODO</h3>\\r\\n                    <List name=\\\"list\\\" data=\\\"listData\\\" />\\r\\n                    <form onsubmit=\\\"add(event)\\\" >\\r\\n                        <input type=\\\"text\\\" onchange=\\\"handleChange(this)\\\"  value=\\\"{{text}}\\\"  />\\r\\n                        <button>Add #{{length}}</button>\\r\\n                    </form>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n- In line 3, we use `makeHTML` to make the component to a tag which can be used in render method. Of course, `Omi.makeHTML('List', List);` can also be written in the end of List component.\\r\\n- In line 9, the parent component defines the 'listData' property\\r\\n- In line 34, we use List component in the render method. `name` attribute allows us easily find the instance of the component by using `this`.`data=\\\"listData\\\"` attribute allows us easily pass `this.listData`  to the sub component from parent component.\\r\\n\\r\\nIt should be noted that the `data` passed from `data=\\\"listData\\\"` is cloned to the subcomponents by Object.assign(shallow  copy) , which means if we want to change the DOM, we recommend  that first update the `data` of the instance of subcomponent(not the parent component's `listData` ) and secondly call the `update` method.\\r\\n\\r\\nIn fact there are 4 way to communicate between components, it'll be explained later.\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=todo_nest\\\" target=\\\"_blank\\\">Click me for the live demo</a>\\r\\n\""

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Conditional Rendering\\\">Conditional Rendering</h2>\\r\\n\\r\\nIn most case, we need to show different layouts according to different states. For example, some users are vip and we need to show vip logo for them. Omi has many ways to meet this kind of requirements.\\r\\n\\r\\n### First Option\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `{{#isVip}}\\r\\n                    <div>you are VIP.</div>\\r\\n                {{/isVip}}\\r\\n                {{^isVip}}\\r\\n                    <div>you are not VIP.</div>\\r\\n                {{/isVip}}`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\nIn the above case, we use the condition in mustachejs for rendering. Of course Omi does not force you to use mustachejs. You can use omi.lite.js and then override the `Omi.template` method to use any of your favorite template engines.\\r\\n\\r\\n### Second Option\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        if(this.data.isVip){\\r\\n            return '<div>you are VIP.</div>';\\r\\n        }else{\\r\\n            return '<div>you are not VIP.</div>';\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n`render` provides a very good programmability, which can write any js code inside. Oh, don't forget that `style` method can also have js code inside it.\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    style (){\\r\\n        if(this.data.isVip){\\r\\n            return 'div{ color : red; }';\\r\\n        }else{\\r\\n            return 'div{ color : green; }';\\r\\n        }\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        if(this.data.isVip){\\r\\n            return '<div>you are VIP.</div>';\\r\\n        }else{\\r\\n            return '<div>you are not VIP.</div>';\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\""

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Handling Events\\\">Handling Events</h2>\\r\\n\\r\\nThere are two types of events in Omi, built-in events and custom events. Built-in events clever use of the browser's own pipeline mechanism, you can easily get events instance and the triggered event elements through `event` and `this`.\\r\\n\\r\\n### Built-in events\\r\\n\\r\\nWhat is the built-in event? As long as the it can match the following regular expression.\\r\\n\\r\\n```js\\r\\non(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)\\r\\n```\\r\\n\\r\\nHow to bind built-in events? As follows:\\r\\n\\r\\n```js\\r\\nclass EventTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    handleClick(dom, evt){\\r\\n        alert(dom.innerHTML);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div onclick=\\\"handleClick(this, event)\\\">Hello, Omi!</div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n### Custom events\\r\\n\\r\\nEvents that defined by developers is the custom events. Here is the pagination example:\\r\\n\\r\\n```js\\r\\nimport Omi from '../../src/index.js';\\r\\nimport Pagination from './pagination.js';\\r\\nimport Content from './content.js';\\r\\n\\r\\nOmi.makeHTML('Pagination', Pagination);\\r\\nOmi.makeHTML('Content', Content);\\r\\n\\r\\nclass Main extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    installed(){\\r\\n        this.content.goto(this.pagination.data.currentPage+1);\\r\\n    }\\r\\n    handlePageChange(index){\\r\\n        this.content.goto(index+1);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h1>Pagination Example</h1>\\r\\n                    <Content name=\\\"content\\\" />\\r\\n                    <Pagination\\r\\n                        name=\\\"pagination\\\"\\r\\n                        data-total=\\\"100\\\"\\r\\n                        data-page-size=\\\"10\\\"\\r\\n                        data-num-edge=\\\"1\\\"\\r\\n                        data-num-display=\\\"4\\\"　　　　　\\r\\n                        onPageChange=\\\"handlePageChange\\\" />\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render( new Main(),'body');\\r\\n```\\r\\n\\r\\nAs we can see, the `onPageChange` is a custom event, `handlePageChange` will being executed when `onPageChange` is triggered. The `onPageChange` method is executed in `Pagination`:\\r\\n\\r\\n```js\\r\\nimport Omi from '../../src/index.js';\\r\\n\\r\\nclass Pagination extends Omi.Component {\\r\\n    ...\\r\\n    ...\\r\\n    ...\\r\\n            linkTo: \\\"#\\\",\\r\\n            prevText: \\\"Prev\\\",\\r\\n            nextText: \\\"Next\\\",\\r\\n            ellipseText: \\\"...\\\",\\r\\n            prevShow: true,\\r\\n            nextShow: true,\\r\\n            onPageChange: function () { return false; }\\r\\n        }, this.data);\\r\\n\\r\\n        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);\\r\\n    }\\r\\n    goto (index,evt) {\\r\\n        evt.preventDefault();\\r\\n        this.data.currentPage=index;\\r\\n        this.update();\\r\\n        this.data.onPageChange(index);\\r\\n    }\\r\\n    ...\\r\\n    ...\\r\\n    ...\\r\\n}\\r\\n```\\r\\n\\r\\nThis is a part of `Pagination` code. Highlight is the place to execute `onPageChange`.\\r\\n\\r\\n### Links\\r\\n\\r\\n- [Demo](http://alloyteam.github.io/omi/example/pagination/)\\r\\n- [Source](https://github.com/AlloyTeam/omi/tree/master/example/pagination)\""

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Forms\\\">Forms</h2>\\r\\n\\r\\nIt's much more convenient to control forms in Omi, especially `<select>`!\\r\\n\\r\\n### select element\\r\\n\\r\\nIn the past, we needed to select an option in the following way:\\r\\n\\r\\n```html\\r\\n<select>\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option selected value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\nThe third option is selected because it is being set to `selected` attribute. The problem is that developers need to traversed each option. While using Omi, you can write code like this:\\r\\n\\r\\n```html\\r\\n<select value=\\\"coconut\\\">\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\nThis will achieve the same effect. For example, you want to choose the first item:\\r\\n\\r\\n```html\\r\\n<select value=\\\"grapefruit\\\">\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\nIsn't it very convenient?\\r\\n\\r\\n### For Example\\r\\n\\r\\n```js\\r\\nclass FormTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n       \\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n      console.log(target.value)\\r\\n      this.data.value = target.value;\\r\\n    }\\r\\n\\r\\n    handleSubmit(evt) {\\r\\n      alert('Your favorite flavor is: ' + this.data.value);\\r\\n      evt.preventDefault();\\r\\n    }\\r\\n  \\r\\n    render () {\\r\\n        return `\\r\\n        <form onsubmit=\\\"handleSubmit(event)\\\">\\r\\n        <label>\\r\\n          Pick your favorite La Croix flavor:\\r\\n          <select value=\\\"{{value}}\\\" onchange=\\\"handleChange(this)\\\">\\r\\n            <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n            <option value=\\\"lime\\\">Lime</option>\\r\\n            <option value=\\\"coconut\\\">Coconut</option>\\r\\n            <option value=\\\"mango\\\">Mango</option>\\r\\n          </select>\\r\\n        </label>\\r\\n        <input type=\\\"submit\\\" value=\\\"Submit\\\" />\\r\\n      </form>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new FormTest({ value: 'mango' }),'#container');\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=form\\\" target=\\\"_blank\\\">Click me for a live demo</a>\""

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Hello World\\\">Hello World</h2>\\r\\n\\r\\n\\r\\n### Hello World with ES20XX \\r\\n\\r\\nWe recommend using a bundler like [webpack](https://webpack.github.io/) or [Browserify](http://browserify.org/) so you can write modular code and bundle it together into small packages to optimize load time.\\r\\n\\r\\nThe small Omi example looks like this:\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\n\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    style () {\\r\\n        return  `\\r\\n            h1{\\r\\n                cursor:pointer;\\r\\n            }\\r\\n         `;\\r\\n    }\\r\\n    handleClick(target){\\r\\n        alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <h1 onclick=\\\"handleClick(this)\\\">Hello ,{{name}}!</h1>\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Hello({ name : \\\"Omi\\\" }),\\\"body\\\");\\r\\n\\r\\n```\\r\\n\\r\\nThis code renders into body element. \\r\\n\\r\\n\\r\\n###  Hello World with ES5\\r\\n\\r\\n\\r\\n```html\\r\\n<script src=\\\"omi.js\\\"></script>\\r\\n```\""

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Inheritance\\\">Inheritance</h2>\\r\\n\\r\\nThrough the inheritance mechanism, we can define new classes base on old classes. The new classes not only have newly defined members, but also have old members at the same time.\\r\\n\\r\\nWe call the existing class the base class, also known as the parent class. And the new class derived from the existing class is called a derived class, also known as a subclass.\\r\\n\\r\\n### For Example\\r\\n\\r\\n```js\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    style () {\\r\\n        return  `\\r\\n            div{\\r\\n                cursor:pointer;\\r\\n            }\\r\\n         `;\\r\\n    }\\r\\n    handleClick(target, evt){\\r\\n        alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n       return  ' <div onclick=\\\"handleClick(this,event)\\\">Hello {{name}}!</div>'\\r\\n    }\\r\\n}\\r\\n\\r\\nclass SubHello extends Hello {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit\\\" target=\\\"_blank\\\">Click me for the live demo</a>\\r\\n\\r\\n### inherit in ES5\\r\\n\\r\\n```js\\r\\nvar Hello =  Omi.create(\\\"Hello\\\",{\\r\\n  render:function(){\\r\\n    return  ' <div>Hello {{name}}!</div>'\\r\\n  }\\r\\n})\\r\\n\\r\\nvar SubHello =  Omi.create(\\\"SubHello\\\",Hello,{ });\\r\\n\\r\\n\\r\\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit_es5\\\" target=\\\"_blank\\\">Click me for the live demo</a>\""

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Installation\\\">Installation</h2>\\r\\n\\r\\n[Omi](https://github.com/AlloyTeam/omi) is open and modern framework  for building user interfaces.\\r\\n\\r\\n### Installing Omi\\r\\n\\r\\nWe recommend using  [npm](https://www.npmjs.com/) for managing front-end dependencies. If you're new to package managers.\\r\\n\\r\\nTo install Omi with npm, run:\\r\\n\\r\\n``` js\\r\\nnpm install omi\\r\\n```\""

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Lifecycle\\\">Lifecycle</h2>\\r\\n\\r\\n| Name | Meaning | Occasion |\\r\\n| :-------------: | :-------------: | :-----: |\\r\\n| constructor | The constructor | When new a constructor |\\r\\n| install | The installation. We can process the data that user pass | When instantiate |\\r\\n| installed | Complete the installation. It'll trigger after HTML being inserted to the page. Please note that it'll trigger when component being removed and restored | **Instantiation and existence** |\\r\\n| uninstall | Uninstall the component. It'll trigger when remove is executed | When destroy |\\r\\n| beforeUpdate | Before update | When existence |\\r\\n| afterUpdate | After update | When existence |\\r\\n\\r\\n## Illustration\\r\\n\\r\\n![lc](http://images2015.cnblogs.com/blog/105416/201701/105416-20170119153018546-1566368987.png)\\r\\n\\r\\nIt should be noted that the installed will be executed during the instantiation, which is not shown above. For example, it'll executed when a component is removed and restored, or when the new component is being added.\\r\\n\\r\\n### Examples\\r\\n\\r\\n```js\\r\\nclass Timer extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    install () {\\r\\n        this.data = {secondsElapsed: 0};\\r\\n    }\\r\\n\\r\\n    tick() {\\r\\n        this.data.secondsElapsed++;\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    installed(){\\r\\n        this.interval = setInterval(() => this.tick(), 1000);\\r\\n    }\\r\\n\\r\\n    uninstall() {\\r\\n        clearInterval(this.interval);\\r\\n    }\\r\\n\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        .num { color:red; }\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>Seconds Elapsed:<span class=\\\"num\\\"> {{secondsElapsed}}</span></div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle\\\" target=\\\"_blank\\\">Click me for the live demo</a>\""

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Loop\\\">Loop</h2>\\r\\n\\r\\nThe following describes how to traverses in mustache.js and javascript.\\r\\n\\r\\n### First Option\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <ul> {{#items}} <li id=\\\"{{id}}\\\">{{text}}</li> {{/items}}</ul>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new List({\\r\\n    items: [\\r\\n        {id: 1, text: 'Omi'},\\r\\n        {id: 2, text: 'dntzhang'},\\r\\n        {id: 3, text: 'AlloyTeam'}\\r\\n    ]\\r\\n}),\\\"body\\\");\\r\\n```\\r\\n\\r\\nMustache.js more detailed loop traversal use can see \\r\\n\\r\\nFor more details for traversal in mustache.js please view [https://github.com/janl/mustache.js#non-empty-lists](https://github.com/janl/mustache.js#non-empty-lists).\\r\\n\\r\\nFor example, it also support:\\r\\n\\r\\n- If each item of items is a string, you can directly use **{{.}}** to output each item\\r\\n- Call the defined function when looping\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=list\\\" target=\\\"_blank\\\">Click me for the live demo</a>\\r\\n\\r\\n### Second Option\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return `<div>\\r\\n                    <ul>\\r\\n                    ` + this.data.items.map(item =>\\r\\n                        '<li id=\\\"' + item.id + '\\\">' + item.text + '</li>'\\r\\n                    ).join(\\\"\\\") + `\\r\\n                    </ul>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new List({\\r\\n    items: [\\r\\n        {id: 1, text: 'Omi'},\\r\\n        {id: 2, text: 'dntzhang'},\\r\\n        {id: 3, text: 'AlloyTeam'}\\r\\n    ]\\r\\n}),\\\"body\\\");\\r\\n```\\r\\n\\r\\nOf course, you can also use template string inside the `map`\\r\\n\\r\\n```js\\r\\n...\\r\\nrender() {\\r\\n    return `<div>\\r\\n                <ul>\\r\\n                ` + this.data.items.map(item =>\\r\\n                    `<li id=\\\"${item.id}\\\">${item.text}</li>`\\r\\n                ).join(\\\"\\\") + `\\r\\n                </ul>\\r\\n            </div>`;\\r\\n}\\r\\n...\\r\\n```\\r\\n\\r\\nYou will see the following page:\\r\\n\\r\\n![pv](http://images2015.cnblogs.com/blog/105416/201701/105416-20170122095724129-2059595233.png)\\r\\n\\r\\n<a href=\\\"http://alloyteam.github.io/omi/website/redirect.html?type=list2\\\" target=\\\"_blank\\\">Click me for the live demo</a>\""

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Templates\\\">Templates</h2>\\r\\n\\r\\nThere are three types of Omi. omi.js and omi.lite.js is for web side.\\r\\n\\r\\n- omi.js has a built-in [mustache.js](https://github.com/janl/mustache.js) as the template engine\\r\\n- omi.lite.js doesn't have any template engines\\r\\n\\r\\nOmi does not force developers to use mustache.js, you can use any template engine based on business scenarios or do not use any template engines.\\r\\n\\r\\nHow to use other template engines? Let's see the [artTemplate](https://github.com/aui/artTemplate) example.\\r\\n\\r\\n### Use artTemplate\\r\\n\\r\\n```js\\r\\nOmi.template = function(tpl, data){\\r\\n    return artTemplate.compile(tpl)(data);\\r\\n}\\r\\n```\\r\\n\\r\\nWe need to rewrite the `Omi.template` method, the `tpl` is the incoming template, the `data` is the required data for the template, and the return value is HTML.\\r\\n\\r\\nAfter rewriting, you can use the artTemplate syntax in `render`, such as:\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h1 { color:red; }\\r\\n        li{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<h1>{{title}}</h1>\\r\\n                <ul>\\r\\n                    {{each list as value i}}\\r\\n                    <li># {{i + 1}} ：{{value}}</li>\\r\\n                    {{/each}}\\r\\n                </ul>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n### Links\\r\\n\\r\\n* [Demo Link](http://alloyteam.github.io/omi/example/artTemplate/)\\r\\n* [Source Code](https://github.com/AlloyTeam/omi/tree/master/example/artTemplate)\""

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _list = __webpack_require__(43);

	var _list2 = _interopRequireDefault(_list);

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_index2['default'].makeHTML('List', _list2['default']);

	var Sidebar = function (_Omi$Component) {
	    _inherits(Sidebar, _Omi$Component);

	    function Sidebar(data) {
	        _classCallCheck(this, Sidebar);

	        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, data));
	    }

	    _createClass(Sidebar, [{
	        key: 'install',
	        value: function install() {
	            this.data.items = _config2['default']['menus'][this.data.lan];
	            this.data.height = window.innerHeight - 45;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return '\n        @media only screen and (max-width: 768px) {\n            .list{\n                transform: translateX(-100%);\n                background-color:white;\n\n                -moz-transition: all .6s ease;\n                -o-transition: all .6s ease;\n                -webkit-transition: all .6s ease;\n                transition: all .6s ease;\n            }\n\n               .list.show {\n                -moz-transform: translateX(0%) translateZ(0);\n                -ms-transform: translateX(0%) translateZ(0);\n                -o-transform: translateX(0%) translateZ(0);\n                -webkit-transform: translateX(0%) translateZ(0);\n                transform: translateX(0%) translateZ(0);\n\n            }\n\n\n\n        }\n        .list{\n            width:200px;\n            text-indent: 20px;\n            border-right: 1px solid #eee;\n            overflow-x: hidden;\n            overflow-y: auto;\n            position:fixed;\n            top:45px;\n        }\n        .version{\n            height:20px;\n        }\n        ';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n        <div class="list" style="height:{{height}}px;">\n           <div class="version"></div>\n          {{#items}}<List group-data="data.items" /> {{/items}}\n        </div>';
	        }
	    }]);

	    return Sidebar;
	}(_index2['default'].Component);

	exports['default'] = Sidebar;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

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
	            return '\n        li.title{\n            font-size: 16px;\n            font-weight: bold;\n            margin-bottom:10px;\n            margin-top:10px;\n            text-indent: 23px;\n        }\n        li{\n            margin-bottom:3px;\n            text-indent: 33px;\n        }\n        li a{\n            display:block;\n            font-size:14px;\n            height:20px;\n            line-height:20px;\n            color: #666;\n        }\n        li a:hover{\n            background-color:#b3d4fc;\n            color:white;\n        }\n        ';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n        <ul>\n            <li class="title">{{title}}</li>\n            {{#list}} <li><a href="#{{name}}">{{name}}</a></li> {{/list}}\n        </ul>';
	        }
	    }]);

	    return List;
	}(_index2['default'].Component);

	exports['default'] = List;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Head = function (_Omi$Component) {
	    _inherits(Head, _Omi$Component);

	    function Head(data) {
	        _classCallCheck(this, Head);

	        return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, data));
	    }

	    _createClass(Head, [{
	        key: 'install',
	        value: function install() {
	            var _this2 = this;

	            this.data.isEnLan = this.data.lan === 'en';
	            document.body.addEventListener('click', function () {
	                _this2.removeClass(_index2['default'].get('sidebar').node, 'show');
	            }, false);
	        }
	    }, {
	        key: 'toggleMenus',
	        value: function toggleMenus(evt) {
	            this.toggleClass(_index2['default'].get('sidebar').node, 'show');
	            evt.stopPropagation();
	        }
	    }, {
	        key: 'toggleClass',
	        value: function toggleClass(element, className) {
	            if (!element || !className) {
	                return;
	            }

	            var classString = element.className,
	                nameIndex = classString.indexOf(className);
	            if (nameIndex == -1) {
	                classString += ' ' + className;
	            } else {
	                classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
	            }
	            element.className = classString;
	        }
	    }, {
	        key: 'removeClass',
	        value: function removeClass(element, className) {
	            var classString = element.className,
	                nameIndex = classString.indexOf(className);
	            if (nameIndex !== -1) {
	                classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
	            }
	            element.className = classString;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return '\n        .head{\n            position:fixed;\n            height:45px;\n            line-height: 45px;\n            border-bottom: 1px solid #eee;\n            width:100%;\n            background-color:#303030;\n            z-index:100;\n\n        }\n        ul,li{\n            display: inline-block;\n        }\n        .logo_box{\n            width:100px;\n            display: inline-block;\n            text-align:center;\n            line-height: 60px;\n        }\n         .menu a,.logo_box a{\n            display: inline-block;\n            height:45px;\n            color:#ddd;\n        }\n        .menu{\n            position: absolute;\n            right:20px;\n        }\n        .menu li{\n            margin-left:15px;\n        }\n        .logo_box a{\n            font-size: 34px;\n            font-weight: bold;\n            color: #00bff3;\n            padding: 0px 15px;\n            line-height: 45px;\n            cursor: pointer;\n        }\n        .menu a:hover{\n            color: white;\n        }\n\n        .m_menu{\n          position:fixed;\n            display:none;\n        }\n\n         @media only screen and (max-width: 768px) {\n           .menu li{\n             display:none;\n           }\n            .menu .m_show{\n             display:block;\n           }\n\n           .logo_box{\n            display:inline-block;\n           }\n\n           .head{\n            text-align:center;\n           }\n\n           .m_menu{\n\n            top:0;\n            left:0;\n            display:block;\n            width:50px;\n            height:50px;\n            padding-top: 6px;\n           }\n           .m_menu img{\n                width:30px;\n           }\n\n        }\n        ';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n    <div class="head bord-btm">\n        <div class="m_menu" onclick="toggleMenus(event)"> <img src="../asset/menu.png" alt="" /></div>\n        <div class="logo_box">\n            <a href="https://github.com/AlloyTeam/omi">Omi</a>\n        </div>\n        <ul class="menu">\n\n            <li class="github_li"><a href="https://github.com/AlloyTeam/omi">Github</a>\n            <li><a href="http://alloyteam.github.io/omi/example/playground/">Playground</a></li>\n            <li><a href="https://github.com/AlloyTeam/omi/tree/master/docs">[Edit the Docs]</a></li>\n             {{#isEnLan}}\n                <li class="github_li m_show"><a href="docs.html">\u4E2D\u6587</a>\n            {{/isEnLan}}\n            {{^isEnLan}}\n                <li class="github_li m_show"><a href="docs_en.html">English</a>\n            {{/isEnLan}}\n            </li>\n        </ul>\n    </div>';
	        }
	    }]);

	    return Head;
	}(_index2['default'].Component);

	exports['default'] = Head;

/***/ }
/******/ ]);