(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OComponent"] = factory(require("omi"));
	else
		root["OComponent"] = factory(root["Omi"]);
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
exports.push([module.i, "/**\n * omiu tip css based on element ui css\n * Licensed under the MIT License\n * https://github.com/ElemeFE/element/blob/dev/LICENSE\n *\n * modified by dntzhang\n */\n:host {\n  display: inline-block; }\n\n.tip.show {\n  display: block; }\n\n.tip {\n  border: 1px solid #888;\n  position: absolute;\n  border-radius: 4px;\n  padding: 10px;\n  z-index: 2000;\n  font-size: 12px;\n  line-height: 1.2;\n  min-width: 10px;\n  word-wrap: break-word;\n  display: none; }\n\n.tip .tip-arrow,\n.tip .tip-arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tip .tip-arrow {\n  border-width: 6px; }\n\n.tip .tip-arrow::after {\n  content: \" \";\n  border-width: 5px; }\n\n.tip[data-popper-placement^=top] {\n  margin-bottom: 12px; }\n\n.tip[data-popper-placement^=top] .tip-arrow {\n  bottom: -6px;\n  border-top-color: #303133;\n  border-bottom-width: 0; }\n\n.tip[data-popper-placement^=top] .tip-arrow::after {\n  bottom: 1px;\n  margin-left: -5px;\n  border-top-color: #303133;\n  border-bottom-width: 0; }\n\n.tip[data-popper-placement^=bottom] {\n  margin-top: 12px; }\n\n.tip[data-popper-placement^=bottom] .tip-arrow {\n  top: -6px;\n  border-top-width: 0;\n  border-bottom-color: #303133; }\n\n.tip[data-popper-placement^=bottom] .tip-arrow::after {\n  top: 1px;\n  margin-left: -5px;\n  border-top-width: 0;\n  border-bottom-color: #303133; }\n\n.tip[data-popper-placement^=right] {\n  margin-left: 12px; }\n\n.tip[data-popper-placement^=right] .tip-arrow {\n  left: -6px;\n  border-right-color: #303133;\n  border-left-width: 0; }\n\n.tip[data-popper-placement^=right] .tip-arrow::after {\n  bottom: -5px;\n  left: 1px;\n  border-right-color: #303133;\n  border-left-width: 0; }\n\n.tip[data-popper-placement^=left] {\n  margin-right: 12px; }\n\n.tip[data-popper-placement^=left] .tip-arrow {\n  right: -6px;\n  border-right-width: 0;\n  border-left-color: #303133; }\n\n.tip[data-popper-placement^=left] .tip-arrow::after {\n  right: 1px;\n  bottom: -5px;\n  margin-left: -5px;\n  border-right-width: 0;\n  border-left-color: #303133; }\n\n.tip.is-dark {\n  background: #303133;\n  color: #FFF; }\n\n.tip.is-light {\n  background: #FFF;\n  border: 1px solid #303133; }\n\n.tip.is-light[data-popper-placement^=top] .tip-arrow {\n  border-top-color: #303133; }\n\n.tip.is-light[data-popper-placement^=top] .tip-arrow::after {\n  border-top-color: #FFF; }\n\n.tip.is-light[data-popper-placement^=bottom] .tip-arrow {\n  border-bottom-color: #303133; }\n\n.tip.is-light[data-popper-placement^=bottom] .tip-arrow::after {\n  border-bottom-color: #FFF; }\n\n.tip.is-light[data-popper-placement^=left] .tip-arrow {\n  border-left-color: #303133; }\n\n.tip.is-light[data-popper-placement^=left] .tip-arrow::after {\n  border-left-color: #FFF; }\n\n.tip.is-light[data-popper-placement^=right] .tip-arrow {\n  border-right-color: #303133; }\n\n.tip.is-light[data-popper-placement^=right] .tip-arrow::after {\n  border-right-color: #FFF; }\n", ""]);

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.prototype.installed = function () {
    };
    Image.prototype.render = function (props) {
        return omi_1.h("div", null,
            omi_1.h("img", { src: props.src }),
            omi_1.h("div", null, props.errorMsg),
            omi_1.h("slot", { name: "error" }),
            omi_1.h("slot", { name: "placeholder" }));
    };
    Image.css = css;
    Image.defaultProps = {};
    Image.propTypes = {
        src: String,
    };
    Image = __decorate([
        omi_1.tag('o-image')
    ], Image);
    return Image;
}(omi_1.WeElement));
exports.default = Image;


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