(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OInput"] = factory(require("omi"));
	else
		root["OInput"] = factory(root["Omi"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\n:host([block]) {\n  display: block; }\n\n.o-textarea {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  vertical-align: bottom;\n  font-size: 14px; }\n\n.o-textarea__inner {\n  display: block;\n  resize: vertical;\n  padding: 5px 15px;\n  line-height: 1.5;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  font-size: inherit;\n  color: #606266;\n  background-color: #FFF;\n  background-image: none;\n  border: 1px solid #DCDFE6;\n  border-radius: 4px;\n  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.o-textarea__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner:hover {\n  border-color: #C0C4CC; }\n\n.o-textarea__inner:focus {\n  outline: 0;\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160); }\n\n.o-textarea .o-input__count {\n  color: #909399;\n  background: #FFF;\n  position: absolute;\n  font-size: 12px;\n  bottom: 5px;\n  right: 10px; }\n\n.o-textarea.is-disabled .o-textarea__inner {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.o-textarea.is-disabled .o-textarea__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-disabled .o-textarea__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-disabled .o-textarea__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-disabled .o-textarea__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-exceed .o-textarea__inner {\n  border-color: #F56C6C; }\n\n.o-textarea.is-exceed .o-input__count {\n  color: #F56C6C; }\n\n.o-input {\n  position: relative;\n  font-size: 14px;\n  display: inline-block;\n  width: 100%; }\n\n.o-input::-webkit-scrollbar {\n  z-index: 11;\n  width: 6px; }\n\n.o-input::-webkit-scrollbar:horizontal {\n  height: 6px; }\n\n.o-input::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  width: 6px;\n  background: #b4bccc; }\n\n.o-input::-webkit-scrollbar-corner {\n  background: #fff; }\n\n.o-input::-webkit-scrollbar-track {\n  background: #fff; }\n\n.o-input::-webkit-scrollbar-track-piece {\n  background: #fff;\n  width: 6px; }\n\n.o-input .o-input__clear {\n  color: #C0C4CC;\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.o-input .o-input__clear:hover {\n  color: #909399; }\n\n.o-input .o-input__count {\n  height: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: #909399;\n  font-size: 12px; }\n\n.o-input .o-input__count .o-input__count-inner {\n  background: #FFF;\n  line-height: initial;\n  display: inline-block;\n  padding: 0 5px; }\n\n.o-input__inner {\n  -webkit-appearance: none;\n  background-color: #FFF;\n  background-image: none;\n  border-radius: 4px;\n  border: 1px solid #DCDFE6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #606266;\n  display: inline-block;\n  font-size: inherit;\n  height: 40px;\n  line-height: 40px;\n  outline: 0;\n  padding: 0 15px;\n  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 100%; }\n\n.o-input__prefix,\n.o-input__suffix {\n  position: absolute;\n  top: 0;\n  -webkit-transition: all .3s;\n  text-align: center;\n  height: 100%;\n  color: #C0C4CC; }\n\n.o-input__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner:hover {\n  border-color: #C0C4CC; }\n\n.o-input.is-active .o-input__inner,\n.o-input__inner:focus {\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160);\n  outline: 0; }\n\n.o-input__suffix {\n  right: 5px;\n  transition: all .3s;\n  pointer-events: none; }\n\n.o-input__suffix-inner {\n  pointer-events: all; }\n\n.o-input__prefix {\n  left: 5px;\n  transition: all .3s; }\n\n.o-input__icon {\n  position: absolute;\n  width: 35px;\n  height: 100%;\n  right: 0;\n  top: 0;\n  padding-top: 0.215em;\n  text-align: center;\n  color: #bfcbd9;\n  transition: all .3s; }\n\n.o-input--small .o-input__icon,\n.o-input--medium .o-input__icon {\n  padding-top: 0.135em; }\n\n.o-input--mini .o-input__icon {\n  padding-top: 0.125em; }\n\n.o-input__icon.is-prefix {\n  left: 0; }\n\n.o-input.o-input-prefix input {\n  padding-left: 30px; }\n\n.o-input.o-input-suffix input {\n  padding-right: 30px; }\n\n.o-input__icon:after {\n  content: '';\n  height: 100%;\n  width: 0;\n  display: inline-block;\n  vertical-align: middle; }\n\n.o-input__validateIcon {\n  pointer-events: none; }\n\n.o-input.is-disabled .o-input__inner {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.o-input.is-disabled .o-input__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__icon {\n  cursor: not-allowed; }\n\n.o-input.is-exceed .o-input__inner {\n  border-color: #F56C6C; }\n\n.o-input.is-exceed .o-input__suffix .o-input__count {\n  color: #F56C6C; }\n\n.o-input--suffix .o-input__inner {\n  padding-right: 30px; }\n\n.o-input--prefix .o-input__inner {\n  padding-left: 30px; }\n\n.o-input--medium {\n  font-size: 14px; }\n\n.o-input--medium .o-input__inner {\n  height: 36px;\n  line-height: 36px; }\n\n.o-input--medium .o-input__icon {\n  line-height: 36px; }\n\n.o-input--small {\n  font-size: 13px; }\n\n.o-input--small .o-input__inner {\n  height: 32px;\n  line-height: 32px; }\n\n.o-input--small .o-input__icon {\n  line-height: 32px; }\n\n.o-input--mini {\n  font-size: 12px; }\n\n.o-input--mini .o-input__inner {\n  height: 28px;\n  line-height: 28px; }\n\n.o-input--mini .o-input__icon {\n  line-height: 28px; }\n\n.o-input-group {\n  line-height: normal;\n  display: inline-table;\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0; }\n\n.o-input-group > .o-input__inner {\n  vertical-align: middle;\n  display: table-cell; }\n\n.o-input-group__append,\n.o-input-group__prepend {\n  background-color: #F5F7FA;\n  color: #909399;\n  vertical-align: middle;\n  display: table-cell;\n  position: relative;\n  border: 1px solid #DCDFE6;\n  border-radius: 4px;\n  padding: 0 20px;\n  width: 1px;\n  white-space: nowrap; }\n\n.o-input-group--prepend .o-input__inner,\n.o-input-group__append {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.o-input-group--append .o-input__inner,\n.o-input-group__prepend {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.o-input-group__append:focus,\n.o-input-group__prepend:focus {\n  outline: 0; }\n\n.o-input-group__append .o-button,\n.o-input-group__append .o-select,\n.o-input-group__prepend .o-button,\n.o-input-group__prepend .o-select {\n  display: inline-block;\n  margin: -10px -20px; }\n\n.o-input-group__append button.o-button,\n.o-input-group__append div.o-select .o-input__inner,\n.o-input-group__append div.o-select:hover .o-input__inner,\n.o-input-group__prepend button.o-button,\n.o-input-group__prepend div.o-select .o-input__inner,\n.o-input-group__prepend div.o-select:hover .o-input__inner {\n  border-color: transparent;\n  background-color: transparent;\n  color: inherit;\n  border-top: 0;\n  border-bottom: 0; }\n\n.o-input-group__append .o-button,\n.o-input-group__append .o-input,\n.o-input-group__prepend .o-button,\n.o-input-group__prepend .o-input {\n  font-size: inherit; }\n\n.o-input-group__prepend {\n  border-right: 0; }\n\n.o-input-group__append {\n  border-left: 0; }\n\n.o-input-group--append .o-select .o-input.is-focus .o-input__inner,\n.o-input-group--prepend .o-select .o-input.is-focus .o-input__inner {\n  border-color: transparent; }\n\n.o-input__inner::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0; }\n\n.o-icon-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -0.5em;\n  cursor: pointer;\n  color: #bfcbd9;\n  display: none;\n  border-radius: 50%;\n  width: 1em;\n  height: 1em; }\n\n.o-icon-clear:hover {\n  background: #b1b4b9;\n  color: white; }\n\n.o-input:hover .o-icon-clear {\n  display: block;\n  cursor: pointer; }\n\n.o-input .o-input__count {\n  position: absolute;\n  top: 0px;\n  right: 4px; }\n\n.o-input.is-block {\n  display: block;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onGetValue = function () {
            return _this.__$value;
        };
        _this._onSetValue = function (value) {
            _this.__$value = value;
            _this.props.value = value;
            _this.setAttribute('value', value);
        };
        _this.valueLength = 0;
        _this.handleBlur = function (evt) {
            if (_this.props.onBlur) {
                _this.props.onBlur(evt);
            }
            else {
                _this.fire('blur', _this.props.value);
            }
        };
        _this.handleFocus = function (evt) {
            if (_this.props.onFocus) {
                _this.props.onFocus(evt);
            }
            else {
                _this.fire('focus', _this.props.value);
            }
        };
        _this.handleChange = function (evt) {
            _this.__$value = evt.target.value;
            _this.props.value = evt.target.value;
            if (_this.props.onChange) {
                _this.props.onChange(evt);
            }
            else {
                _this.fire('change', _this.props.value);
            }
        };
        _this.handleInput = function (evt) {
            evt.stopPropagation();
            _this.__$value = evt.target.value;
            _this.props.value = evt.target.value;
            if (_this.props.onInput) {
                _this.props.onInput(evt);
            }
            else {
                _this.fire('input', _this.props.value);
            }
            if (_this.props.maxLength) {
                _this.valueLength = evt.target.value.length;
                _this.update();
            }
        };
        _this.clearInput = function () {
            _this.updateProps({
                value: ''
            });
            _this.__$value = '';
        };
        return _this;
    }
    Input.prototype.install = function () {
        this.__$value = this.props.value;
        Object.defineProperty(this, 'value', {
            get: this._onGetValue,
            set: this._onSetValue
        });
    };
    Input.prototype.focus = function () {
        this.shadowRoot.querySelector('input').focus();
    };
    Input.prototype.blur = function () {
        this.shadowRoot.querySelector('input').blur();
    };
    Input.prototype.render = function (props) {
        var _a;
        var type = props.type, size = props.size, suffixIcon = props.suffixIcon, prefixIcon = props.prefixIcon, autoComplete = props.autoComplete, validating = props.validating, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, trim = props.trim, otherProps = __rest(props, ["type", "size", "suffixIcon", "prefixIcon", "autoComplete", "validating", "onMouseEnter", "onMouseLeave", "trim"]);
        this._tempTagName = 'o-icon-' + (suffixIcon || prefixIcon);
        this._tempInputTagName = type === 'textarea' ? 'textarea' : 'input';
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-input', (_a = {},
            _a["o-input--" + size] = props.size,
            _a['is-disabled'] = this.props.disabled,
            _a['o-input-suffix'] = suffixIcon,
            _a['o-input-prefix'] = prefixIcon,
            _a['is-block'] = props.block,
            _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
            (prefixIcon || suffixIcon) && omi_1.h(this._tempTagName, __assign({ css: "svg{\n            width: 1em;\n          }" }, omi_1.extractClass(props, 'o-input__icon', {
                'is-prefix': prefixIcon,
                'is-suffix': suffixIcon
            }))),
            omi_1.h(this._tempInputTagName, __assign({}, otherProps, { 
                // ref="input"
                type: type, class: "o-" + this._tempInputTagName + "__inner", autocomplete: autoComplete, maxLength: props.maxLength, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput })),
            props.clearable && omi_1.h("svg", { onClick: this.clearInput, class: "o-icon-clear", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                omi_1.h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })),
            props.maxLength && omi_1.h("span", { class: "o-input__count" },
                omi_1.h("span", { class: "o-input__count-inner" },
                    this.valueLength,
                    "/",
                    props.maxLength))));
    };
    Input.css = css;
    Input.defaultProps = {
        value: '',
        type: 'text',
        autosize: false,
        rows: 2,
        trim: false,
        autoComplete: 'off',
        block: false
    };
    Input.propTypes = {
        disabled: Boolean,
        type: String,
        placeholder: String,
        clearable: Boolean,
        suffixIcon: String,
        size: String,
        prefixIcon: String,
        maxLength: Number,
        autoComplete: String,
        block: Boolean,
        value: String
    };
    Input = __decorate([
        omi_1.tag('o-input')
    ], Input);
    return Input;
}(omi_1.WeElement));
exports.default = Input;


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map