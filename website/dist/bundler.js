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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Omi.render(new _frame2.default({ lan: "cn" }), 'body', true);

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

	var _content = __webpack_require__(9);

	var _content2 = _interopRequireDefault(_content);

	var _sidebar = __webpack_require__(24);

	var _sidebar2 = _interopRequireDefault(_sidebar);

	var _head = __webpack_require__(26);

	var _head2 = _interopRequireDefault(_head);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_index2.default.makeHTML(_content2.default);
	_index2.default.makeHTML(_sidebar2.default);
	_index2.default.makeHTML(_head2.default);

	var Frame = function (_Omi$Component) {
	    _inherits(Frame, _Omi$Component);

	    function Frame(data) {
	        _classCallCheck(this, Frame);

	        return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, data));
	    }

	    _createClass(Frame, [{
	        key: 'install',
	        value: function install() {
	            var _this2 = this;

	            this.data.height = window.innerHeight - 45;
	            this.data.width = window.innerWidth - 220;

	            window.onresize = function () {
	                _this2.data.height = window.innerHeight - 45;
	                _this2.data.width = window.innerWidth - 220;
	                _this2.update();
	            };
	        }
	    }, {
	        key: 'installed',
	        value: function installed() {
	            this.highlightBlock(true);
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return '\n        .main{\n             position: absolute;\n            left:220px;\n            top:45px;\n            overflow-x:hidden;\n            overflow-y:auto;\n\n        }';
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
	            var codes = document.querySelectorAll("code");
	            for (var i = 0, len = codes.length; i < len; i++) {
	                //innerText bug��ie11 remove the \r\n??
	                // detail:  http://www.cnblogs.com/fsjohnhuang/p/4319635.html
	                // so textContent
	                var html = Prism.highlight(codes[i].textContent, Prism.languages.javascript);
	                codes[i].innerHTML = html;

	                codes[i].classList.add('language-js');
	            }
	            //1,5-6,8
	            var mapping = { 3: '6', 6: '5', 9: '3,9,34', 14: '22', 17: '6-12' };
	            var pres = document.querySelectorAll("pre");
	            for (var key in mapping) {
	                pres[key].setAttribute("data-line", mapping[key]);
	            }

	            this._$$('pre').forEach(function (item) {

	                item.classList.add('language-js');
	            });

	            if (!lh) lineHighLight();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '<div>\n                <Head />\n                <div class="main"  style="height:{{height}}px;width:{{width}}px;">\n                  <Content data-lan="{{lan}}" />\n                </div>\n                <Sidebar data-lan="{{lan}}" />\n                </div>';
	        }
	    }]);

	    return Frame;
	}(_index2.default.Component);

	exports.default = Frame;

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_omi2.default.template = _mustache2.default.render;

	_omi2.default.Component = _component2.default;

	window.Omi = _omi2.default;
	module.exports = _omi2.default;

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
	Omi.makeHTML = function (ctor, name) {
	    var tagName = name || ctor.name;
	    // fix ie tagName is undefined
	    if (!tagName) {
	        tagName = (ctor + "").split("(")[0].replace("function", "").trim();
	    }
	    Omi[tagName] = ctor;
	    Omi.customTags.push(tagName);

	    return tagName;
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	            this.id = _omi2.default.getInstanceId();
	            this.refs = {};
	        }
	        this.children = [];
	        this.childrenData = [];
	        this.HTML = null;
	        this._addedItems = [];
	        this._omi_order = [];
	        _omi2.default.instances[this.id] = this;
	        this.BODY_ELEMENT = document.createElement('body');
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
	                    (0, _diff2.default)(this.node, (0, _event2.default)(this._childRender(this._omiChildStr), this.id));
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
	            this.HTML = (0, _event2.default)(this.HTML, this.id);
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
	                    (0, _diff2.default)(this.node, this.HTML);
	                } else {
	                    (0, _diff2.default)(this.node, this._createHiddenNode());
	                }
	            }
	            //get node prop from parent node
	            if (this.renderTo) {
	                this.node = document.querySelector("[" + _omi2.default.STYLESCOPEDPREFIX + this.id + "]");
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
	            childStr = childStr.replace("<child", "<div").replace("/>", "></div>");
	            this._mergeData(childStr, isFirst);
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
	            this.HTML = (0, _event2.default)(this.HTML, this.id);
	            return this.HTML;
	        }
	    }, {
	        key: '_queryElements',
	        value: function _queryElements(current) {
	            current._mixRefs();
	            current.children.forEach(function (item) {
	                item.node = current.node.querySelector("[" + _omi2.default.STYLESCOPEDPREFIX + item.id + "]");
	                //recursion get node prop from parent node
	                current._queryElements(item);
	            });
	        }
	    }, {
	        key: '_mixRefs',
	        value: function _mixRefs() {
	            var nodes = this.node.querySelectorAll('*[ref]');
	            var len = nodes.length;
	            if (len > 0) {
	                for (var i = 0; i < len; i++) {
	                    var node = nodes[i];
	                    this.refs[node.getAttribute("ref")] = node;
	                }
	            }
	        }
	    }, {
	        key: '_childrenInstalled',
	        value: function _childrenInstalled(root) {
	            var _this5 = this;

	            root.children.forEach(function (child) {
	                child.installed();
	                _this5._childrenInstalled(child);
	            });
	        }
	    }, {
	        key: '_getConstructorNameByMagic',
	        value: function _getConstructorNameByMagic(c) {
	            return (c + "").split("(")[0].replace("function", "").trim();
	        }
	    }, {
	        key: '_fixForm',
	        value: function _fixForm() {

	            _omi2.default.$$('input', this.node).forEach(function (element) {
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

	            _omi2.default.$$('select', this.node).forEach(function (select) {
	                var value = select.getAttribute('value');
	                if (value) {
	                    _omi2.default.$$('option', select).forEach(function (option) {
	                        if (value === option.getAttribute('value')) {
	                            option.setAttribute('selected', 'selected');
	                        }
	                    });
	                } else {
	                    var firstOption = _omi2.default.$$('option', select)[0];
	                    firstOption && firstOption.setAttribute('selected', 'selected');
	                }
	            });
	        }
	    }, {
	        key: '_replaceTags',
	        value: function _replaceTags(array, html) {
	            var str = array.join("|");
	            var reg = new RegExp("(<(" + str + "))[^a-zA-Z>][\\s\\S]*?/>", "g");
	            return html.replace(reg, function (m, a, b) {
	                return m.replace(a, '<child tag="' + b + '" ');
	            });
	        }
	    }, {
	        key: '_createHiddenNode',
	        value: function _createHiddenNode() {
	            var hdNode = document.createElement("input");
	            hdNode.setAttribute("type", "hidden");
	            hdNode.setAttribute(_omi2.default.STYLESCOPEDPREFIX + this.id, "");
	            return hdNode;
	        }
	    }, {
	        key: '_mergeData',
	        value: function _mergeData(childStr, isFirst) {
	            this.data = Object.assign({}, this._getDataset(childStr), this.data);
	            isFirst && this.install();
	        }
	    }, {
	        key: '_generateHTMLCSS',
	        value: function _generateHTMLCSS() {
	            this.CSS = this.style();
	            var css = "";
	            if (this.CSS) {
	                css = _style2.default.scoper(this.CSS, "[" + _omi2.default.STYLESCOPEDPREFIX + this.id + "]");
	                if (!this._omi_server_rendering) {
	                    _style2.default.addStyle(css, this.id);
	                }
	            }
	            var tpl = this.render();
	            this.HTML = this._scopedAttr(_omi2.default.template(tpl ? tpl : "", this.data), _omi2.default.STYLESCOPEDPREFIX + this.id).trim();
	            if (this._omi_server_rendering) {
	                this.HTML = '\r\n<style id="' + _omi2.default.STYLEPREFIX + this.id + '">\r\n' + css + '\r\n</style>\r\n' + this.HTML;
	                this.HTML += '\r\n<input type="hidden" data-omi-id="' + this.id + '" class="' + _omi2.default.STYLESCOPEDPREFIX + '_hidden_data" value=\'' + JSON.stringify(this.data) + '\'  />\r\n';
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
	        value: function _getDataset(str) {
	            this.BODY_ELEMENT.innerHTML = str;
	            return this.BODY_ELEMENT.firstChild.dataset;
	        }
	    }, {
	        key: '_extractChildren',
	        value: function _extractChildren(child) {
	            if (_omi2.default.customTags.length > 0) {
	                child.HTML = this._replaceTags(_omi2.default.customTags, child.HTML);
	            }
	            var arr = child.HTML.match(/<child[^>][\s\S]*?tag=['|"](\S*)['|"][\s\S]*?\/>/g);

	            if (arr) {
	                var len = arr.length;

	                for (var i = 0; i < len; i++) {
	                    var childStr = arr[i];
	                    childStr.match(/\s*tag=['|"](\S*)['|"]/);

	                    var name = RegExp.$1;
	                    var cmi = this.children[i];
	                    //if not first time to invoke _extractChildren method
	                    //___omi_constructor_name for es5
	                    if (cmi && (cmi.constructor.name === name || cmi.___omi_constructor_name === name || this._getConstructorNameByMagic(cmi.constructor))) {
	                        cmi._childRender(childStr);
	                        continue;
	                    } else {
	                        (function () {
	                            var ChildClass = _omi2.default.getClassFromString(name);
	                            if (!ChildClass) throw "Can't find Class called [" + name + "]";
	                            var sub_child = new ChildClass(child.childrenData[i] || {}, false);
	                            sub_child._omiChildStr = childStr;
	                            sub_child.parent = child;

	                            var evtArr = childStr.match(/[\s\t\n]+on(\S*)=['|"](\S*)['|"]/g);
	                            if (evtArr) {
	                                evtArr.forEach(function (item) {
	                                    var evtArr = item.trim().split("=");
	                                    var hdName = evtArr[1].replace(/['|"]/g, "");
	                                    var handler = sub_child.parent[hdName];
	                                    if (handler) {
	                                        sub_child.data[evtArr[0]] = handler.bind(sub_child.parent);
	                                    }
	                                });
	                            }
	                            sub_child._childRender(childStr, true);

	                            var mo_ids = childStr.match(/omi-id=['|"](\S*)['|"]/);
	                            if (mo_ids) {
	                                _omi2.default.mapping[RegExp.$1] = sub_child;
	                            }
	                            if (!cmi) {
	                                child.children.push(sub_child);
	                            } else {
	                                child.children[i] = sub_child;
	                            }

	                            childStr.match(/\s*name=['|"](\S*)['|"]/);

	                            if (RegExp.$1) {
	                                child[RegExp.$1] = sub_child;
	                            }
	                        })();
	                    }
	                }
	            }
	        }
	    }]);

	    return Component;
	}();

	exports.default = Component;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _omi = __webpack_require__(3);

	var _omi2 = _interopRequireDefault(_omi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    var ele = document.getElementById(_omi2.default.STYLEPREFIX + id),
	        head = document.getElementsByTagName('head')[0];
	    if (ele && ele.parentNode === head) {
	        head.removeChild(ele);
	    }

	    var someThingStyles = document.createElement('style');
	    head.appendChild(someThingStyles);
	    someThingStyles.setAttribute('type', 'text/css');
	    someThingStyles.setAttribute('id', _omi2.default.STYLEPREFIX + id);
	    if (!!window.ActiveXObject) {
	        someThingStyles.styleSheet.cssText = cssText;
	    } else {
	        someThingStyles.textContent = cssText;
	    }
	}

	exports.default = {
	    scoper: scoper,
	    addStyle: addStyle
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function scopedEvent(tpl, id) {
	    return tpl.replace(/<[\s\S]*?>/g, function (item) {
	        return item.replace(/on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave|Abort|Blur|Cancel|Canplay|Canplaythrough|Change|Click|Close|Contextmenu|Cuechange|Dblclick|Drag|Dragend|Dragenter|Dragleave|Dragover|Dragstart|Drop|Durationchange|Emptied|Ended|Error|Focus|Input|Invalid|Keydown|Keypress|Keyup|Load|Loadeddata|Loadedmetadata|Loadstart|Mousedown|Mouseenter|Mouseleave|Mousemove|Mouseout|Mouseover|Mouseup|Mousewheel|Pause|Play|Playing|Progress|Ratechange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|Timeupdate|Toggle|Volumechange|Waiting|Autocomplete|Autocompleteerror|Beforecopy|Beforecut|Beforepaste|Copy|Cut|Paste|Search|Selectstart|Wheel|Webkitfullscreenchange|Webkitfullscreenerror|Touchstart|Touchmove|Touchend|Touchcancel|Pointerdown|Pointerup|Pointercancel|Pointermove|Pointerover|Pointerout|Pointerenter|Pointerleave)=('|")/g, function (eventStr, b, c, d, e) {
	            if (e.substr(eventStr.length + d, 14) === "Omi.instances[") return eventStr;
	            return eventStr += "Omi.instances[" + id + "].";
	        });
	    });
	};

	exports.default = scopedEvent;

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

	exports.default = setDOM;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getMarkDown(name, lan) {
	    var md = __webpack_require__(10)("./" + lan + "_" + name + ".md");
	    return md.substring(0, md.length - 1).replace(/\\r\\n/g, "\r\n").replace(/\\n/g, "\n").replace('module.exports = "', "").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
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
	        key: "install",
	        value: function install() {
	            this.data.html = marked(getMarkDownByArr(['installation', 'hello_world', 'components', 'lifecycle', 'events', 'condition', 'loop', 'form', 'template', 'thinking_in_omi'], 'cn'));
	        }
	    }, {
	        key: "style",
	        value: function style() {
	            return "\n        .content{\n             width: 80%;\n        }\n        h2{\n            padding-top:20px;\n        }\n        h3{\n            color:#444444;\n        }\n        pre{\n            border: 1px solid #eee;\n            width: 100%;\n        }\n        li{\n            text-indent: 20px;\n            list-style:disc inside ;\n        }\n        ";
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return "\n        <div class=\"content\">\n            {{{html}}}\n        </div>\n        ";
	        }
	    }]);

	    return Content;
	}(_index2.default.Component);

	exports.default = Content;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./README.md": 11,
		"./cn_components.md": 12,
		"./cn_condition.md": 13,
		"./cn_events.md": 14,
		"./cn_form.md": 15,
		"./cn_hello_world.md": 16,
		"./cn_installation.md": 17,
		"./cn_lifecycle.md": 18,
		"./cn_loop.md": 19,
		"./cn_template.md": 20,
		"./cn_thinking_in_omi.md": 21,
		"./en_hello_world.md": 22,
		"./en_installation.md": 23
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
	webpackContext.id = 10;


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"# Omi使用文档\\r\\n* [安装](./cn_installation.md)\\r\\n* [Hello World](./cn_hello_world.md)\\r\\n* [组件](./cn_components.md)\\r\\n* [生命周期](./cn_lifecycle.md)\\r\\n* [事件处理](./cn_events.md)\\r\\n* [条件判断](./cn_condition.md)\\r\\n* [循环遍历](./cn_loop.md)\\r\\n* [表单](./cn_form.md)\\r\\n* 继承\\r\\n* 容器系统\\r\\n* [模板切换](./cn_template.md)\\r\\n* 服务端同构渲染\\r\\n* [Omi理念](./cn_thinking_in_omi.md)\\r\\n\\r\\n# 从零一步步打造Web组件化框架Omi\\r\\n\\r\\n* 局部CSS揭秘\\r\\n* 组件嵌套揭秘\\r\\n* 事件处理揭秘\\r\\n* 服务器端渲染揭秘\\r\\n* 模板切换揭秘\\r\\n* 容器系统揭秘\""

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"组件\\\">组件</h2>\\r\\n\\r\\n我们希望开发者可以像搭积木一样制作Web程序，所以一切皆组件。\\r\\n\\r\\n### 简单组件\\r\\n\\r\\n这里我们使用Todo的例子来讲解Omi组件体系的使用。\\r\\n\\r\\n```js\\r\\nclass Todo extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    add (evt) {\\r\\n        evt.preventDefault();\\r\\n        this.data.items.push(this.data.text);\\r\\n        this.data.text = '';\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h3 { color:red; }\\r\\n        button{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n        this.data.text = target.value;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h3>TODO</h3>\\r\\n                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\\r\\n                    <form onsubmit=\\\"add(event)\\\" >\\r\\n                        <input type=\\\"text\\\" onchange=\\\"handleChange(this)\\\"  value=\\\"{{text}}\\\"  />\\r\\n                        <button>Add #{{items.length}}</button>\\r\\n                    </form>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Todo({ items: [] ,text : '' }),\\\"body\\\");\\r\\n```\\r\\n\\r\\n组件生成的HTML最终会插入到body中。上面的例子展示了Omi的部分特性:\\r\\n\\r\\n- data传递: new Todo(data,..)的data可以直接提供给render方法里的模板\\r\\n- 局部CSS: h3只对render里的h3生效，不会污染外面的h3；button也是同样的\\r\\n- 声明式事件绑定: onchange调用的就是组件内的handleChange，this可以拿到当然的DOM元素,还可以拿到当前的event\\r\\n- 需要手动调用update方法才能更新组件\\r\\n\\r\\n这里需要特别强调的是，为了更加的自由和灵活度。Omi没有内置数据变更的自动更新，需要开发者自己调用update方法。\\r\\n你也可以和[oba](https://github.com/kmdjs/oba)或者mobx一起使用来实现自动更新。\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=todo)\\r\\n\\r\\n###  组件嵌套\\r\\n\\r\\n几乎所有的Web网页或者Web应用，我们需要嵌套我们定义的组件来完成所有的功能和展示。比如上面的Todo，我们也是可以抽取出List。\\r\\n这样有什么好处？易维护、可扩展、方便复用。如，我们抽取去List：\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n怎么使用这个List？\\r\\n\\r\\n```js\\r\\nimport List from './list.js';\\r\\n\\r\\nOmi.makeHTML(List);\\r\\n\\r\\nclass Todo extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n        this.data.length = this.data.items.length;\\r\\n        this.childrenData = [ { items : this.data.items } ];\\r\\n    }\\r\\n\\r\\n    add (evt) {\\r\\n        evt.preventDefault();\\r\\n        this.list.data.items.push(this.data.text);\\r\\n        this.data.length = this.list.data.items.length;\\r\\n        this.data.text = '';\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h3 { color:red; }\\r\\n        button{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n        this.data.text = target.value;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h3>TODO</h3>\\r\\n                    <List omi-id=\\\"list\\\" name=\\\"list\\\" />\\r\\n                    <form onsubmit=\\\"add(event)\\\" >\\r\\n                        <input type=\\\"text\\\" onchange=\\\"handleChange(this)\\\"  value=\\\"{{text}}\\\"  />\\r\\n                        <button>Add #{{length}}</button>\\r\\n                    </form>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n* 第3行，通过makeHTML方法把组件制作成可以在render中使用的标签。当然Omi.makeHTML(List);也可以写在List组件的代码下面。\\r\\n* 第9行，通过设置this.childrenData可以把参数传递给子组件。this.childrenData是个数组，这样就支持多child的情况。\\r\\n* 第36行，在render方法中使用List组件。其中name方法可以让你在代码里通过this快速方法到该组件的实例。omi-id可以让你通过Omi.mapping['list']快速访问到组件对象的实例。\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=todo_nest)\""

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"条件判断\\\">条件判断</h2>\\r\\n\\r\\n我们经常需要根据不同的状态呈现不同的界面，比如有的用户是vip要显示vip的Logo。Omi有许多种方式满足你的要求。\\r\\n\\r\\n### 方式一\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `{{#isVip}}\\r\\n                    <div>you are VIP.</div>\\r\\n                {{/isVip}}\\r\\n                {{^isVip}}\\r\\n                    <div>you are not VIP.</div>\\r\\n                {{/isVip}}`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n上面完全使用mustachejs的条件判断的语法。当然Omi不强制你使用mustachejs。你可以是omi.lite.js，然后重写Omi.template方法去使用任意你喜爱的模板引擎。\\r\\n\\r\\n### 方式二\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        if(this.data.isVip){\\r\\n            return '<div>you are VIP.</div>';\\r\\n        }else{\\r\\n            return '<div>you are not VIP.</div>';\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\nrender就是提供了很好的可编程性，里面可以写任意js逻辑代码。对了，差点忘了，style方法里面也可以写js逻辑的。\\r\\n\\r\\n```js\\r\\nclass ConditionTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    style (){\\r\\n        if(this.data.isVip){\\r\\n            return 'div{ color : red; }';\\r\\n        }else{\\r\\n            return 'div{ color : green; }';\\r\\n        }\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        if(this.data.isVip){\\r\\n            return '<div>you are VIP.</div>';\\r\\n        }else{\\r\\n            return '<div>you are not VIP.</div>';\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\""

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"事件处理\\\">事件处理</h2>\\r\\n\\r\\nOmi的事件分内置事件和自定义事件。在内置事件处理方面巧妙地利用了浏览器自身的管线机制，可以通过event和this轻松拿到事件实例和触发该事件的元素。\\r\\n\\r\\n### 内置事件\\r\\n\\r\\n什么算内置事件？只要下面正则能匹配到就算内置事件。\\r\\n\\r\\n```js\\r\\non(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)\\r\\n```\\r\\n\\r\\n内置事件怎么绑定？如下所示：\\r\\n\\r\\n```js\\r\\nclass EventTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    handleClick(dom, evt){\\r\\n        alert(dom.innerHTML);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div onclick=\\\"handleClick(this, event)\\\">Hello, Omi!</div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n### 自定义事件\\r\\n\\r\\n开发者自己定义的组件的事件，称为自定义事件。这里拿分页作为例子：\\r\\n\\r\\n```js\\r\\nimport Omi from '../../src/index.js';\\r\\nimport Pagination from './pagination.js';\\r\\nimport Content from './content.js';\\r\\n\\r\\nOmi.makeHTML(Pagination);\\r\\nOmi.makeHTML(Content);\\r\\n\\r\\nclass Main extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    installed(){\\r\\n        this.content.goto(this.pagination.data.currentPage+1);\\r\\n    }\\r\\n    handlePageChange(index){\\r\\n        this.content.goto(index+1);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <h1>Pagination Example</h1>\\r\\n                    <Content name=\\\"content\\\" />\\r\\n                    <Pagination\\r\\n                        name=\\\"pagination\\\"\\r\\n                        data-total=\\\"100\\\"\\r\\n                        data-page-size=\\\"10\\\"\\r\\n                        data-num-edge=\\\"1\\\"\\r\\n                        data-num-display=\\\"4\\\"　　　　　\\r\\n                        onPageChange=\\\"handlePageChange\\\" />\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render( new Main(),'body');\\r\\n```\\r\\n\\r\\n如上面的onPageChange就是自定义事件，触发会执行handlePageChange。onPageChange方法是在Pagination中执行：\\r\\n\\r\\n```js\\r\\nimport Omi from '../../src/index.js';\\r\\n\\r\\nclass Pagination extends Omi.Component {\\r\\n    ...\\r\\n    ...\\r\\n    ...\\r\\n            linkTo: \\\"#\\\",\\r\\n            prevText: \\\"Prev\\\",\\r\\n            nextText: \\\"Next\\\",\\r\\n            ellipseText: \\\"...\\\",\\r\\n            prevShow: true,\\r\\n            nextShow: true,\\r\\n            onPageChange: function () { return false; }\\r\\n        }, this.data);\\r\\n\\r\\n        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);\\r\\n    }\\r\\n    goto (index,evt) {\\r\\n        evt.preventDefault();\\r\\n        this.data.currentPage=index;\\r\\n        this.update();\\r\\n        this.data.onPageChange(index);\\r\\n    }\\r\\n    ...\\r\\n    ...\\r\\n    ...\\r\\n}\\r\\n```\\r\\n\\r\\n这里取了Pagination组件的部分代码。高亮的就是执行onPageChange的地方。\\r\\n\\r\\n### 相关地址\\r\\n\\r\\n* [演示地址](http://alloyteam.github.io/omi/example/pagination/)\\r\\n* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/pagination)\""

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"表单\\\">表单</h2>\\r\\n\\r\\nOmi让一些表单操控起来更加方便，特别是select！\\r\\n\\r\\n### select标签\\r\\n\\r\\n以前，我们需要像如下的方式选中一个选项：\\r\\n\\r\\n```html\\r\\n<select>\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option selected value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\n第三个option由于加上了selected，所有会被选中。这样带来的问题就是，开发者写的程序可能要操遍历每个option。而使用Omi，你只需要这样子：\\r\\n\\r\\n```html\\r\\n<select value=\\\"coconut\\\">\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\n这样就能达到同样的效果。比如你想选择第一项：\\r\\n\\r\\n```html\\r\\n<select value=\\\"grapefruit\\\">\\r\\n  <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n  <option value=\\\"lime\\\">Lime</option>\\r\\n  <option value=\\\"coconut\\\">Coconut</option>\\r\\n  <option value=\\\"mango\\\">Mango</option>\\r\\n</select>\\r\\n```\\r\\n\\r\\n是不是非常方便？\\r\\n\\r\\n###  举个例子\\r\\n\\r\\n```js\\r\\nclass FormTest extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n       \\r\\n    }\\r\\n\\r\\n    handleChange(target){\\r\\n      console.log(target.value)\\r\\n      this.data.value = target.value;\\r\\n    }\\r\\n\\r\\n    handleSubmit(evt) {\\r\\n      alert('Your favorite flavor is: ' + this.data.value);\\r\\n      evt.preventDefault();\\r\\n    }\\r\\n  \\r\\n    render () {\\r\\n        return `\\r\\n        <form onsubmit=\\\"handleSubmit(event)\\\">\\r\\n        <label>\\r\\n          Pick your favorite La Croix flavor:\\r\\n          <select value=\\\"{{value}}\\\" onchange=\\\"handleChange(this)\\\">\\r\\n            <option value=\\\"grapefruit\\\">Grapefruit</option>\\r\\n            <option value=\\\"lime\\\">Lime</option>\\r\\n            <option value=\\\"coconut\\\">Coconut</option>\\r\\n            <option value=\\\"mango\\\">Mango</option>\\r\\n          </select>\\r\\n        </label>\\r\\n        <input type=\\\"submit\\\" value=\\\"Submit\\\" />\\r\\n      </form>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new FormTest({ value: 'mango' }),'#container');\\r\\n```\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=form)\""

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Hello World\\\">Hello World</h2>\\r\\n\\r\\n你可以使用ES6+或者ES5的方式编写Omi程序来搭建你的Web程序。\\r\\n\\r\\n### Hello World with ES6+\\r\\n\\r\\n你可以使用 [webpack](https://webpack.github.io/) 打包工具，webpack会把你的模块代码打成一个很小的包，优化加载时间。使用[babel](http://babeljs.io/)，让你立刻马上使用ES6+来编写你的web程序。你只需要在webpack配置的module设置好[babel-loader](https://github.com/babel/babel-loader)便可。\\r\\n\\r\\n一个Omi的简短的例子如下所示:\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\n\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    style () {\\r\\n        return  `\\r\\n            h1{\\r\\n                cursor:pointer;\\r\\n            }\\r\\n         `;\\r\\n    }\\r\\n    handleClick(target, evt){\\r\\n        alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <h1 onclick=\\\"handleClick(this, event)\\\">Hello ,{{name}}!</h1>\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Hello({ name : \\\"Omi\\\" }),\\\"#container\\\");\\r\\n```\\r\\n\\r\\n组件生成的HTML最终会插入到#container中。上面的例子展示了Omi的部分特性:\\r\\n\\r\\n- data传递: new Hello(data,..)的data可以直接提供给render方法里的模板\\r\\n- 局部CSS: h1只对render里的h1生效，不会污染外面的h1\\r\\n- 声明式事件绑定: onclick调用的就是组件内的handleClick，this可以拿到当然的DOM元素,还可以拿到当前的event\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=hello)\\r\\n\\r\\n你可以使用Omi.makeHTML来生成组件标签用于嵌套。\\r\\n```js\\r\\n    Omi.makeHTML(Hello);\\r\\n```\\r\\n那么你就在其他组件中使用，如\\r\\n```js\\r\\n  ...\\r\\n  render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <div>Test</div>\\r\\n            <Hello data-name=\\\"Omi\\\" />\\r\\n        </div>\\r\\n        `;\\r\\n    }\\r\\n    ...\\r\\n```\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_nest)\\r\\n\\r\\n###  Hello World with ES5\\r\\n\\r\\n当然Omi没有抛弃ES5的用户。你可以使用ES5的方式编写Omi。如，在你的HTML中引用omi.js：\\r\\n\\r\\n```html\\r\\n<script src=\\\"omi.js\\\"></script>\\r\\n```\\r\\n\\r\\n然后：\\r\\n\\r\\n```js\\r\\nvar Hello =  Omi.create(\\\"Hello\\\", {\\r\\n    style: function () {\\r\\n        return \\\"h1{ cursor:pointer }\\\";\\r\\n    },\\r\\n    handleClick: function (dom) {\\r\\n        alert(dom.innerHTML);\\r\\n    },\\r\\n    render: function () {\\r\\n        return '<div>\\\\\\r\\n                    <h1 onclick=\\\"handleClick(this, event)\\\">Hello ,{{name}}!</h1>\\\\\\r\\n                </div>';\\r\\n    }\\r\\n});\\r\\n\\r\\nOmi.render(new Hello({ name : \\\"Omi\\\" }),\\\"#container\\\");\\r\\n```\\r\\n当然除了在HTML引入脚步，你还可以使用AMD、CMD或者CommonJS的方式引入Omi，这里就不再一一列举。\\r\\n\\r\\n需要注意的是，Omi.create的第一个参数Hello是用来生成Tag Name的。你可以在其他地方嵌入你的组件。如：\\r\\n\\r\\n```js\\r\\n  ...\\r\\n  render:function() {\\r\\n        return  '<div>\\\\\\r\\n                    <div>Test</div>\\\\\\r\\n                    <Hello  data-name=\\\"Omi\\\" />\\\\\\r\\n                </div>';\\r\\n    }\\r\\n    ...\\r\\n```\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_es5)\""

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"安装\\\">安装</h2>\\n\\nOmi是一款用于创建用户界面的组件化框架，开放并且现代，故得名：Omi。\\n\\n### 安装 Omi\\n\\n我们推荐使用  [npm](https://www.npmjs.com/) 来管理你的前端依赖.\\n\\n通过npm安装Omi，你只需要执行下面的命令:\\n\\n``` js\\nnpm install omi\\n```\""

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"生命周期\\\">生命周期</h2>\\r\\n\\r\\n\\r\\n|  名称  | 含义        | 时机  |\\r\\n| :-------------: |:-------------:|: -----:|\\r\\n| constructor  | 构造函数 | new的时候 |\\r\\n| install  | 初始化安装，这可以拿到用户传进的data进行处理 | 实例化 |\\r\\n| installed    | 安装完成，HTML已经插入页面之后执行。注意：组件被remove之后再进行restore也会执行   |   ** 实例化和存在期 ** |\\r\\n| uninstall | 卸载组件。执行remove方法会触发该事件    |   销毁时 |\\r\\n| beforeUpdate | 更新前     |   存在期 |\\r\\n| afterUpdate | 更新后     |    存在期 |\\r\\n\\r\\n## 示意图\\r\\n\\r\\n![lc](http://images2015.cnblogs.com/blog/105416/201701/105416-20170119153018546-1566368987.png)\\r\\n    \\r\\n需要注意的是installed在实例化期也会执行，上图没有标出。比如组件被移除再进行还原会执行，再比如新增新的组件也会执行。\\r\\n    \\r\\n### 举个例子\\r\\n\\r\\n```js\\r\\nclass Timer extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    install () {\\r\\n        this.data = {secondsElapsed: 0};\\r\\n    }\\r\\n\\r\\n    tick() {\\r\\n        this.data.secondsElapsed++;\\r\\n        this.update();\\r\\n    }\\r\\n\\r\\n    installed(){\\r\\n        this.interval = setInterval(() => this.tick(), 1000);\\r\\n    }\\r\\n\\r\\n    uninstall() {\\r\\n        clearInterval(this.interval);\\r\\n    }\\r\\n\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        .num { color:red; }\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>Seconds Elapsed:<span class=\\\"num\\\"> {{secondsElapsed}}</span></div>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle)\""

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"循环遍历\\\">循环遍历</h2>\\r\\n\\r\\n下面介绍mustache.js的方式和javascript遍历的方式。\\r\\n\\r\\n### 方式一\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<div>\\r\\n                    <ul> {{#items}} <li id=\\\"{{id}}\\\">{{text}}</li> {{/items}}</ul>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new List({\\r\\n    items: [\\r\\n        {id: 1, text: 'Omi'},\\r\\n        {id: 2, text: 'dntzhang'},\\r\\n        {id: 3, text: 'AlloyTeam'}\\r\\n    ]\\r\\n}),\\\"body\\\");\\r\\n```\\r\\n\\r\\nmustache.js更详细的循环遍历使用可看[https://github.com/janl/mustache.js#non-empty-lists](https://github.com/janl/mustache.js#non-empty-lists)。 比如还支持：\\r\\n\\r\\n* 如果items的每一项是字符串，可以直接**{{.}}**的方式来输出每一项\\r\\n* 循环的时候调用定义好的函数\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=list)\\r\\n\\r\\n### 方式二\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    render() {\\r\\n        return `<div>\\r\\n                    <ul>\\r\\n                    ` + this.data.items.map(item =>\\r\\n                        '<li id=\\\"' + item.id + '\\\">' + item.text + '</li>'\\r\\n                    ).join(\\\"\\\") + `\\r\\n                    </ul>\\r\\n                </div>`;\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new List({\\r\\n    items: [\\r\\n        {id: 1, text: 'Omi'},\\r\\n        {id: 2, text: 'dntzhang'},\\r\\n        {id: 3, text: 'AlloyTeam'}\\r\\n    ]\\r\\n}),\\\"body\\\");\\r\\n```\\r\\n\\r\\n你将在页面看到如下效果:\\r\\n\\r\\n![pv](http://images2015.cnblogs.com/blog/105416/201701/105416-20170122095724129-2059595233.png)\\r\\n\\r\\n[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=list2)\""

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"模板切换\\\">模板切换</h2>\\r\\n\\r\\nOmi有三个版本。其中的omi.js和omi.lite.js属于Web端使用的版本。\\r\\n\\r\\n* omi.js内置了[mustache.js](https://github.com/janl/mustache.js)作为模版引擎\\r\\n* omi.lite.js不包含任何模版引擎\\r\\n\\r\\nOmi不强制开发者使用mustache.js，你可以根据业务场景使用任意模板引擎或者不使用模板引擎。\\r\\n\\r\\n那么怎么使用别的模板引擎？下面拿[artTemplate](https://github.com/aui/artTemplate)作为例子。\\r\\n\\r\\n### 使用artTemplate\\r\\n\\r\\n```js\\r\\nOmi.template = function(tpl, data){\\r\\n    return artTemplate.compile(tpl)(data);\\r\\n}\\r\\n```\\r\\n重写Omi.template方法，tpl为传入的模板，data为模板所需的数据，返回值为HTML。\\r\\n重写完毕后就能在render使用artTemplate的语法，如：\\r\\n\\r\\n```js\\r\\nclass List extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n\\r\\n    style () {\\r\\n        return `\\r\\n        h1 { color:red; }\\r\\n        li{ color:green;}\\r\\n        `;\\r\\n    }\\r\\n\\r\\n    render () {\\r\\n        return `<h1>{{title}}</h1>\\r\\n                <ul>\\r\\n                    {{each list as value i}}\\r\\n                    <li>索引 {{i + 1}} ：{{value}}</li>\\r\\n                    {{/each}}\\r\\n                </ul>`;\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n### 相关地址\\r\\n\\r\\n* [演示地址](http://alloyteam.github.io/omi/example/artTemplate/)\\r\\n* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/artTemplate)\""

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Omi的理念\\\">Omi的理念</h2>\\r\\n\\r\\nOmi的理念是基于面向对象编程体系，内建积木系统。\\r\\n 传统的单向数据流或者抛出event的组件通讯方式增加了系统的稳定性，但是丧失了灵活性。一定程度上也降低了组建的复用。所谓鱼和熊掌不可兼得。\\r\\n 面向对象体系需要多一个逻辑层，可以自由操作所有组件的instance，instance之间的逻辑关系构建出了整个程序。这样组建间的逻辑，通信，复用就全部迎刃而解。组建也更加单一职责，更松耦合。\\r\\n\\r\\n对比函数式编程、命令式编程与面向对象编程，可以归纳总结出下面几条：\\r\\n\\r\\n- 命令式编程干脆直接，利用循环条件等控制流程，强调执行过程\\r\\n- 命令式编程对硬件执行友好，运行更容易，却阻碍了复杂程序的设计\\r\\n- 函数式强调输入和输出，并非执行过程\\r\\n- 函数式倡导多个简单执行单元组合成复杂运算程序\\r\\n- 面向对象编程将对象作为程序的基本单元，更具有重用性、灵活性和扩展性\\r\\n\\r\\n Javascript是哪种类型的语言？现在ES6+已经有了class。那么他是面向对象语言？\\r\\n但是JS可以在任意地方定义函数并且当作把函数当作值来传递。那么他是函数式编程语言？\\r\\n所以，没有精准的定义，取决于你的用法和姿势。其次，Web组件化架构层面编程模型和语言层面编程模型是非常自由的关系。意思就是，你可以用Javascript构建函数式编程框架如React，也可以基于面向对象体系搭建Omi。\\r\\n\\r\\n### 函数式编程 VS 面向对象编程\\r\\n\\r\\n在UI组件框架层面，函数式编程的代表有React，Omi属于面向对象编程体系。那么他们各有什么优缺点？下面做了个对比（其实也是函数式编程与面向对象编程的对比）：\\r\\n\\r\\n|    | React        | Omi  |\\r\\n| ------------- |:-------------:|:-----:|\\r\\n| 组件通信  | ★★★★☆| ★★★★★ |\\r\\n| 稳定性    | ★★★★★    |   ★★★★☆ |\\r\\n| 灵活性  | ★★★★☆| ★★★★★ |\\r\\n| 扩展性 | ★★★★☆     |   ★★★★★ |\\r\\n| 测试性 | ★★★★★     |   ★★★★☆ |\\r\\n| 文件大小 | ★★★☆☆    |   ★★★★★ |\\r\\n| 功能特性 | ★★★☆☆    |   ★★★★☆ |\\r\\n| DOM性能 | ★★★★★    |   ★★★★☆ |\\r\\n| 动画性能 | ★★★★☆    |   ★★★★★ |\\r\\n| 抽象复杂度 | ★★★★☆    |   ★★★★★ |\\r\\n| 异步编程 | ★★★★★    |   ★★★★☆ |\\r\\n\\r\\n可以看得出，鱼和熊掌不可兼得。面向对象编程更具有重用性、灵活性和扩展性，带来的问题就是更加难测试。\\r\\n具体来说，如函数式编程，其测试面积是state1 + state2 + ... + stateN；在面向对象编程中，其测试面积是state1×event1 + state2×event2 + ... + stateN×eventN。\\r\\n\\r\\n总结来说，更加推荐使用面向对象的方式去搭建UI组件化框架。\\r\\n\\r\\n<hr/>\\r\\n\\r\\n### 全文结束，感谢阅读。[开始Omi之旅吧!](https://github.com/AlloyTeam/omi)\\r\\n\\r\\n\""

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Hello World\\\">Hello World</h2>\\r\\n\\r\\n\\r\\n### Hello World with ES20XX \\r\\n\\r\\nWe recommend using a bundler like [webpack](https://webpack.github.io/) or [Browserify](http://browserify.org/) so you can write modular code and bundle it together into small packages to optimize load time.\\r\\n\\r\\nThe small Omi example looks like this:\\r\\n\\r\\n```js\\r\\nimport Omi from './omi.js';\\r\\n\\r\\nclass Hello extends Omi.Component {\\r\\n    constructor(data) {\\r\\n        super(data);\\r\\n    }\\r\\n    style () {\\r\\n        return  `\\r\\n            h1{\\r\\n                cursor:pointer;\\r\\n            }\\r\\n         `;\\r\\n    }\\r\\n    handleClick(target){\\r\\n        alert(target.innerHTML);\\r\\n    }\\r\\n    render() {\\r\\n        return  `\\r\\n        <div>\\r\\n            <h1 onclick=\\\"handleClick(this)\\\">Hello ,{{name}}!</h1>\\r\\n        </div>\\r\\n        `;\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\nOmi.render(new Hello({ name : \\\"Omi\\\" }),\\\"body\\\");\\r\\n\\r\\n```\\r\\n\\r\\nThis code renders into body element. \\r\\n\\r\\n\\r\\n###  Hello World with ES5\\r\\n\\r\\n\\r\\n```html\\r\\n<script src=\\\"omi.js\\\"></script>\\r\\n```\""

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<h2 id=\\\"Installation\\\">Installation</h2>\\r\\n\\r\\nOmi is open and modern framework  for building user interfaces.\\r\\n\\r\\n### Installing Omi\\r\\n\\r\\nWe recommend using  [npm](https://www.npmjs.com/) for managing front-end dependencies. If you're new to package managers.\\r\\n\\r\\nTo install Omi with npm, run:\\r\\n\\r\\n``` js\\r\\nnpm install omi\\r\\n```\""

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _list = __webpack_require__(25);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_index2.default.makeHTML(_list2.default);

	var Sidebar = function (_Omi$Component) {
	    _inherits(Sidebar, _Omi$Component);

	    function Sidebar(data) {
	        _classCallCheck(this, Sidebar);

	        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, data));
	    }

	    _createClass(Sidebar, [{
	        key: 'install',
	        value: function install() {
	            if (this.data.lan === "cn") {
	                this.data.items = [{ title: "快速开始", list: [{ "name": "安装" }, { "name": "Hello World" }, { "name": "组件" }, { "name": "生命周期" }, { "name": "事件处理" }, { "name": "条件判断" }, { "name": "循环遍历" }, { "name": "表单" }, { "name": "继承" }, { "name": "容器系统" }, { "name": "模板切换" }, { "name": "服务器端渲染" }, { "name": "Omi的理念" }] }, { title: "Omi原理", list: [{ "name": "局部CSS" }] }];
	            } else {
	                this.data.items = [{ title: "QUICK START", list: [{ "name": "Installation" }, { "name": "Hello World" }, { "name": "Components" }, { "name": "Lifecycle" }, { "name": "Handling Events" }, { "name": "Conditional Rendering" }, { "name": "Lists and Keys" }, { "name": "Forms" }, { "name": "Inheritance" }, { "name": "Sever-side Rendering" }, { "name": "Thinking In Omi" }] }, { title: "Omi's Principle", list: [{ "name": "Scroped CSS" }] }];
	            }

	            this.data.height = window.innerHeight - 45;
	            this.childrenData = this.data.items;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return '\n        .list{\n            width:200px;\n            text-indent: 20px;\n            border-right: 1px solid #eee;\n            overflow-x: hidden;\n            overflow-y: auto;\n            position:fixed;\n            top:45px;\n        }\n        .version{\n            height:20px;\n        }\n        ';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n        <div class="list" style="height:{{height}}px;">\n           <div class="version"></div>\n          {{#items}}<List /> {{/items}}\n        </div>';
	        }
	    }]);

	    return Sidebar;
	}(_index2.default.Component);

	exports.default = Sidebar;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	}(_index2.default.Component);

	exports.default = List;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        key: 'style',
	        value: function style() {
	            return '\n        .head{\n            position:fixed;\n            height:45px;\n            line-height: 45px;\n            border-bottom: 1px solid #eee;\n            width:100%;\n            background-color:#303030;\n            z-index:100;\n\n        }\n        ul,li{\n            display: inline-block;\n        }\n        .logo_box{\n            width:100px;\n            display: inline-block;\n            text-align:center;\n            line-height: 60px;\n        }\n         .menu a,.logo_box a{\n            display: inline-block;\n            height:45px;\n            color:#ddd;\n        }\n        .menu{\n            position: absolute;\n            right:20px;\n        }\n        .menu li{\n            margin-left:15px;\n        }\n        .logo_box a{\n            font-size: 34px;\n            font-weight: bold;\n            color: #00bff3;\n            padding: 0px 15px;\n            line-height: 45px;\n            cursor: pointer;\n        }\n        .menu a:hover{\n            color: white;\n        }\n        ';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n    <div class="head bord-btm">\n        <div class="logo_box">\n            <a href="https://github.com/AlloyTeam/omi">Omi</a>\n        </div>\n        <ul class="menu">\n            <li class="github_li"><a href="https://github.com/AlloyTeam/omi">Github</a>\n            <li><a href="http://alloyteam.github.io/omi/example/playground/">Playground</a></li>\n            <li><a href="https://github.com/AlloyTeam/omi/tree/master/docs">[Edit the Docs]</a></li>\n            </li>\n        </ul>\n    </div>';
	        }
	    }]);

	    return Head;
	}(_index2.default.Component);

	exports.default = Head;

/***/ }
/******/ ]);