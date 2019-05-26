(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MRow"] = factory(require("omi"));
	else
		root["MRow"] = factory(root["Omi"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/row/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/row/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/row/index.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col {\n  display: block;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.block {\n  display: block; }\n\n.block > div {\n  float: left; }\n\n.flex {\n  display: flex; }\n\n.col1 {\n  width: 4.16666667%;\n  *width: 4.16666667%; }\n\n.col2 {\n  width: 8.33333333%;\n  *width: 8.33333333%; }\n\n.col3 {\n  width: 12.5%;\n  *width: 12.5%; }\n\n.col4 {\n  width: 16.66666667%;\n  *width: 16.66666667%; }\n\n.col5 {\n  width: 20.83333333%;\n  *width: 20.83333333%; }\n\n.col6 {\n  width: 25%;\n  *width: 25%; }\n\n.col7 {\n  width: 29.16666667%;\n  *width: 29.16666667%; }\n\n.col8 {\n  width: 33.33333333%;\n  *width: 33.33333333%; }\n\n.col9 {\n  width: 37.5%;\n  *width: 37.5%; }\n\n.col10 {\n  width: 41.66666667%;\n  *width: 41.66666667%; }\n\n.col11 {\n  width: 45.83333333%;\n  *width: 45.83333333%; }\n\n.col12 {\n  width: 50%;\n  *width: 50%; }\n\n.col13 {\n  width: 54.16666667%;\n  *width: 54.16666667%; }\n\n.col14 {\n  width: 58.33333333%;\n  *width: 58.33333333%; }\n\n.col15 {\n  width: 62.5%;\n  *width: 62.5%; }\n\n.col16 {\n  width: 66.66666667%;\n  *width: 66.66666667%; }\n\n.col17 {\n  width: 70.83333333%;\n  *width: 70.83333333%; }\n\n.col18 {\n  width: 75%;\n  *width: 75%; }\n\n.col19 {\n  width: 79.16666667%;\n  *width: 79.16666667%; }\n\n.col20 {\n  width: 83.33333333%;\n  *width: 83.33333333%; }\n\n.col21 {\n  width: 87.5%;\n  *width: 87.5%; }\n\n.col22 {\n  width: 91.66666667%;\n  *width: 91.66666667%; }\n\n.col23 {\n  width: 95.83333333%;\n  *width: 95.83333333%; }\n\n.col24 {\n  width: 100%;\n  *width: 100%; }\n", ""]);

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

/***/ "./src/row/index.scss":
/*!****************************!*\
  !*** ./src/row/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/row/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/row/index.tsx":
/*!***************************!*\
  !*** ./src/row/index.tsx ***!
  \***************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/row/index.scss");
//@ts-ignore
var theme_ts_1 = __webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function (props) {
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, props.type === 'flex' ? 'flex' : 'block')), props.cols.map(function (_, index) { return omi_1.h("div", { class: "col col" + (_.span === undefined ? _ : _.span) },
            omi_1.h("slot", { name: index })); })));
    };
    Row.css = theme_ts_1.theme() + css;
    Row.propTypes = {
        cols: Object
    };
    Row = __decorate([
        omi_1.tag('m-row')
    ], Row);
    return Row;
}(omi_1.WeElement));
exports.default = Row;


/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (typeof window === 'object') {
    window.OmimThemePrimary = window.OmimThemePrimary || '#0052d9';
    window.OmimThemeSecondary = window.OmimThemeSecondary || '#1890ff';
    window.OmimThemeError = window.OmimThemeError || '#f5222d';
    window.OmimThemeSurface = window.OmimThemeSurface || '#ffffff';
    window.OmimThemeOnPrimary = window.OmimThemeOnPrimary || '#ffffff';
    window.OmimThemeOnSecondary = window.OmimThemeOnSecondary || '#ffffff';
    window.OmimThemeOnError = window.OmimThemeOnError || '#ffffff';
    window.OmimThemeOnSurface = window.OmimThemeOnSurface || '#000000';
    window.OmimThemeBackground = window.OmimThemeBackground || '#ffffff';
    window.OmimShapeSmallComponentRadius = window.OmimShapeSmallComponentRadius || '4px';
    window.OmimShapeMediumComponentRadius = window.OmimShapeMediumComponentRadius || '4px';
    window.OmimShapeLargeComponentRadius = window.OmimShapeLargeComponentRadius || '0px';
    window.OmimTypographyFontFamily = window.OmimTypographyFontFamily || 'Roboto, sans-serif;';
}
function theme() {
    if (typeof window === 'object') {
        return "* {\n  --mdc-theme-primary: " + window.OmimThemePrimary + ";\n  --mdc-theme-secondary: " + window.OmimThemeSecondary + ";\n  --mdc-theme-error: " + window.OmimThemeError + ";\n  --mdc-theme-surface: " + window.OmimThemeSurface + ";\n\n  --mdc-theme-on-primary: " + window.OmimThemeOnPrimary + ";\n  --mdc-theme-on-secondary: " + window.OmimThemeOnSecondary + ";\n  --mdc-theme-on-error: " + window.OmimThemeOnError + ";\n  --mdc-theme-on-surface: " + window.OmimThemeOnSurface + ";\n  --mdc-theme-background: " + window.OmimThemeBackground + ";\n\n  --mdc-shape-small-component-radius: " + window.OmimShapeSmallComponentRadius + ";\n  --mdc-shape-medium-component-radius: " + window.OmimShapeMediumComponentRadius + ";\n  --mdc-shape-large-component-radius: " + window.OmimShapeLargeComponentRadius + ";\n  --mdc-typography--font-family: " + window.OmimTypographyFontFamily + ";\n}";
    }
}
exports.theme = theme;


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map