/*!
 *  omiu v0.0.0 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["Omiu"] = factory(require("omi"));
	else
		root["Omiu"] = factory(root["omi"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _omi = __webpack_require__(2);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-button', (_temp = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          type = _props.type,
          size = _props.size,
          plain = _props.plain,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'children']);

      var className = this.props['class'];

      var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
      var cls = type === 'vcode' ? (0, _classnames2['default'])('weui-vcode-btn', _defineProperty({}, className, className)) : (0, _classnames2['default'])(_defineProperty({
        'weui-btn': true,
        'weui-btn_mini': size === 'small',
        'weui-btn_primary': type === 'primary' && !plain,
        'weui-btn_default': type === 'default' && !plain,
        'weui-btn_warn': type === 'warn',
        'weui-btn_plain-primary': type === 'primary' && plain,
        'weui-btn_plain-default': type === 'default' && plain,
        'weui-btn_disabled': this.props.disabled && !plain,
        'weui-btn_plain-disabled': this.props.disabled && plain
      }, className, className));

      return Omi.h(
        Component,
        _extends({}, others, { className: cls }),
        children
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  disabled: false,
  type: 'primary',
  size: 'normal'
}, _temp));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
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

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(5);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "\r\n.disabled {\r\n  background-color:#9CE6BF;\r\n  color: #D7F5E5;\r\n}\r\n\r\n\r\nbutton.weui-btn,\r\ninput.weui-btn{\r\n  width:100%;\r\n  border-width:0;\r\n  outline:0;\r\n  -webkit-appearance:none;\r\n}\r\nbutton.weui-btn:focus,\r\ninput.weui-btn:focus{\r\n  outline:0;\r\n}\r\nbutton.weui-btn_inline,\r\ninput.weui-btn_inline,\r\nbutton.weui-btn_mini,\r\ninput.weui-btn_mini{\r\n  width:auto;\r\n}\r\nbutton.weui-btn_plain-primary,\r\ninput.weui-btn_plain-primary,\r\nbutton.weui-btn_plain-default,\r\ninput.weui-btn_plain-default{\r\n  border-width:1px;\r\n  background-color:transparent;\r\n}\r\n\r\n\r\n.weui-btn{\r\n  position:relative;\r\n  display:block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  padding-left:14px;\r\n  padding-right:14px;\r\n  box-sizing:border-box;\r\n  font-size:18px;\r\n  text-align:center;\r\n  text-decoration:none;\r\n  color:#FFFFFF;\r\n  line-height:2.55555556;\r\n  border-radius:3px;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n  overflow:hidden;\r\n}\r\n.weui-btn:after{\r\n  content:\" \";\r\n  width:200%;\r\n  height:200%;\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  /* border:1px solid rgba(0, 0, 0, 0.2); */\r\n  -webkit-transform:scale(0.5);\r\n          transform:scale(0.5);\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  box-sizing:border-box;\r\n  border-radius:10px;\r\n}\r\n.weui-btn_inline{\r\n  display:inline-block;\r\n}\r\n.weui-btn_default{\r\n  background-color: #F8F7F8;\r\n  color:black;\r\n}\r\n.weui-btn_default:not(.weui-btn_disabled):visited{\r\n  color:#000000;\r\n}\r\n.weui-btn_default:not(.weui-btn_disabled):active{\r\n  background-color: rgb(243, 239, 239);\r\n}\r\n.weui-btn_primary{\r\n  background-color:#07C160;\r\n}\r\n.weui-btn_primary:not(.weui-btn_disabled):visited{\r\n  color:#FFFFFF;\r\n}\r\n.weui-btn_primary:not(.weui-btn_disabled):active{\r\n  background-color: rgb(5, 202, 100);;\r\n}\r\n.weui-btn_warn{\r\n  background-color:#F95050;\r\n}\r\n.weui-btn_warn:not(.weui-btn_disabled):visited{\r\n  color:#FFFFFF;\r\n}\r\n.weui-btn_warn:not(.weui-btn_disabled):active{\r\n  color:rgba(255, 255, 255, 0.6);\r\n  background-color:#F95050;\r\n}\r\n.weui-btn_disabled{\r\n  background-color:#9CE6BF;\r\n  color: #D7F5E5;\r\n}\r\n.weui-btn_disabled.weui-btn_default{\r\n  color:rgba(0, 0, 0, 0.3);\r\n  background-color:#F7F7F7;\r\n}\r\n.weui-btn_disabled.weui-btn_primary{\r\n  background-color:#9CE6BF;\r\n  color: #D7F5E5;\r\n}\r\n.weui-btn_disabled.weui-btn_warn{\r\n  background-color:rgb(240, 158, 157);\r\n}\r\n.weui-btn_loading .weui-loading{\r\n  margin:-0.2em 0.34em 0 0;\r\n}\r\n.weui-btn_loading.weui-btn_primary,\r\n.weui-btn_loading.weui-btn_warn{\r\n  color:rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.weui-btn_loading.weui-btn_warn{\r\n  background-color:#F95050;\r\n}\r\n.weui-btn_plain-primary{\r\n  color:#07C160;\r\n  border:1px solid #07C160;\r\n}\r\n.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{\r\n  color:#9ED99D;\r\n  border-color:#9ED99D;\r\n}\r\n.weui-btn_plain-primary:after{\r\n  border-width:0;\r\n}\r\n.weui-btn_plain-default{\r\n  color:#353535;\r\n  border:1px solid #353535;\r\n}\r\n.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{\r\n  color:rgba(53, 53, 53, 0.6);\r\n  border-color:rgba(53, 53, 53, 0.6);\r\n}\r\n.weui-btn_plain-default:after{\r\n  border-width:0;\r\n}\r\n.weui-btn_plain-disabled{\r\n  color:rgba(0, 0, 0, 0.2);\r\n  border-color:rgba(0, 0, 0, 0.2);\r\n}\r\nbutton.weui-btn,{\r\n  width:100%;\r\n  border-width:0;\r\n  outline:0;\r\n  -webkit-appearance:none;\r\n}\r\nbutton.weui-btn:focus,{\r\n  outline:0;\r\n}\r\nbutton.weui-btn_inline,\r\ninput.weui-btn_inline,\r\nbutton.weui-btn_mini,\r\ninput.weui-btn_mini{\r\n  width:auto;\r\n}\r\nbutton.weui-btn_plain-primary,\r\ninput.weui-btn_plain-primary,\r\nbutton.weui-btn_plain-default,\r\ninput.weui-btn_plain-default{\r\n  border-width:1px;\r\n  background-color:transparent;\r\n}\r\n.weui-btn_mini{\r\n  display:inline-block;\r\n  padding:0 1.32em;\r\n  line-height:2.3;\r\n  font-size:13px;\r\n}\r\n.weui-btn + .weui-btn{\r\n  margin-top:15px;\r\n}\r\n.weui-btn.weui-btn_inline + .weui-btn.weui-btn_inline{\r\n  margin-top:auto;\r\n  margin-left:15px;\r\n}\r\n.weui-btn-area{\r\n  margin:1.17647059em 15px 0.3em;\r\n}\r\n.weui-btn-area_inline{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n}\r\n.weui-btn-area_inline .weui-btn{\r\n  margin-top:auto;\r\n  margin-right:15px;\r\n  width:100%;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n}\r\n.weui-btn-area_inline .weui-btn:last-child{\r\n  margin-right:0;\r\n}\r\n", ""]);



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});