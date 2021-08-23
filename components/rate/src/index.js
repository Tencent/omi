(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["ORate"] = factory(require("omi"));
	else
		root["ORate"] = factory(root["Omi"]);
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

/***/ "./node_modules/_@omiu_o-icon@0.0.1@@omiu/o-icon/src/index.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@omiu_o-icon@0.0.1@@omiu/o-icon/src/index.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @omiu/o-icon v0.0.1 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `:host {
  display: inline-block; }

.o-icon {
  text-align: center;
  display: inline-block; }

.o-icon svg {
  display: inline-block;
  vertical-align: top; }

.rotate {
  display: inline-block;
  -webkit-animation: rotate 1s infinite linear;
  animation: rotate 1s infinite linear; }

i div {
  font-style: normal; }

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }
`


var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function (props) {
        return (Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("i", __assign({}, Object(omi__WEBPACK_IMPORTED_MODULE_0__["extractClass"])(props, 'o-icon')),
            Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: '0 0 ' + props.view + ' ' + props.view, class: Object(omi__WEBPACK_IMPORTED_MODULE_0__["classNames"])({ rotate: props.rotate }), width: props.scale + 'em', height: props.scale + 'em', fill: props.color, "aria-hidden": "true" }, props.paths ? (props.paths.map(function (item) {
                var attrs = { d: item.path, fill: props.color || 'black' };
                if (item.color)
                    attrs.fill = item.color;
                return Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", __assign({}, attrs));
            })) : Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: props.path })),
            props.children && (Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: "color:" + (props.color || 'black') + ";" }, props.children[0]))));
    };
    Icon.css = css;
    Icon.defaultProps = {
        view: 1024,
        scale: 2
    };
    Icon.propTypes = {
        path: String,
        paths: Object,
        view: Number,
        scale: Number,
        color: String,
        rotate: Boolean
    };
    Icon = __decorate([
        Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-icon')
    ], Icon);
    return Icon;
}(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));

/* harmony default export */ __webpack_exports__["default"] = (Icon);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rate {\n  position: absolute;\n  left: 30px;\n  top: 10px; }\n\n.rating {\n  overflow: hidden;\n  float: left; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
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


        var result = __webpack_require__(/*! !../node_modules/_css-loader@1.0.1@css-loader!../node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss");

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
__webpack_require__(/*! @omiu/o-icon */ "./node_modules/_@omiu_o-icon@0.0.1@@omiu/o-icon/src/index.esm.js");
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var state = function (data, base) { return new Proxy(data, {
    set: function (target, propKey, value, receiver) {
        Reflect.set(target, propKey, value, receiver);
        base.update();
        return true;
    }
}); };
var Rate = /** @class */ (function (_super) {
    __extends(Rate, _super);
    function Rate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMousemove = function (evt) {
            if (!_this.props.disabled && !_this.props.readonly) {
                _this.state.value = evt.target.dataset['rate'];
            }
        };
        _this.handleMouseleave = function (evt) {
            if (!_this.props.disabled && !_this.props.readonly) {
                _this.state.value = _this.props.value;
            }
        };
        return _this;
    }
    Rate.prototype.install = function () {
        this.state = state({
            value: this.props.value
        }, this);
    };
    Rate.prototype.submit = function (index) {
        if (!this.props.disabled) {
            this.updateProps({
                value: index,
                readonly: !this.props.readonly
            });
        }
    };
    Rate.prototype.render = function (props) {
        var _this = this;
        var value = this.state.value;
        var arr = Array.from({ length: props.max * 2 - 1 }).reduce(function (pre, cur) { return __spreadArrays(pre, [pre[pre.length - 1] + 0.5]); }, [0.5]);
        var that = this;
        function getCls(value, max) {
            if (value <= max)
                return that.props.color;
            if (value > max)
                return '#ccc';
        }
        return (omi_1.h("div", { class: "rate" }, arr.map(function (rate, index) { return (omi_1.h("div", { class: "rating", style: { width: props.width / 2, paddingRight: (index % 2 == 0 ? 0 : props.width / 4) + "px" }, onMousemove: _this.handleMousemove, onMouseleave: _this.handleMouseleave, onClick: _this.submit.bind(_this, rate), "data-rate": rate },
            omi_1.h("svg", { t: "1627617455331", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "1209", width: props.width, height: props.width, fill: getCls(rate, value), "data-rate": rate, style: { transform: "translateX(" + (index % 2 == 0 ? 0 : props.width / 2 * -1) + "px)" } },
                omi_1.h("path", { d: "M964.685714 330.4l-290.171428-42.171429L544.8 25.257143c-3.542857-7.2-9.371429-13.028571-16.571429-16.571429-18.057143-8.914286-40-1.485714-49.028571 16.571429L349.485714 288.228571l-290.171428 42.171429c-8 1.142857-15.314286 4.914286-20.914286 10.628571a36.628571 36.628571 0 0 0 0.685714 51.771429l209.942857 204.685714-49.6 289.028572a36.514286 36.514286 0 0 0 53.028572 38.514285L512 788.571429l259.542857 136.457142c7.085714 3.771429 15.314286 5.028571 23.2 3.657143 19.885714-3.428571 33.257143-22.285714 29.828572-42.171428l-49.6-289.028572 209.942857-204.685714c5.714286-5.6 9.485714-12.914286 10.628571-20.914286 3.085714-20-10.857143-38.514286-30.857143-41.485714z", "p-id": "1210", "data-rate": rate })))); })));
    };
    Rate.css = css;
    Rate.defaultProps = {
        size: 10,
        value: 1,
        max: 10,
        half: true,
        disabled: false,
        readonly: false,
        color: '#f7e620',
        width: 32
    };
    Rate.propTypes = {
        value: Number,
        max: Number,
        half: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        icon: String,
        color: String,
        width: Number
    };
    Rate = __decorate([
        omi_1.tag('o-rate')
    ], Rate);
    return Rate;
}(omi_1.WeElement));
exports.default = Rate;


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