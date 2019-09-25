(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MStep"] = factory(require("omi"));
	else
		root["MStep"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/step/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/step/index.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/step/index.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.m-step {\n  width: 100%;\n  display: inline-block;\n  white-space: nowrap; }\n\n*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n._item-icon {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  border-radius: 32px;\n  font-size: 16px;\n  margin-right: 8px;\n  display: inline-block;\n  vertical-align: top; }\n\n._item-content {\n  display: inline-block;\n  position: relative;\n  top: 5px;\n  vertical-align: top; }\n\n._item-finish ._item-icon {\n  border-color: #0072d9;\n  background-color: #fff; }\n\n._item-process ._item-icon {\n  color: white;\n  border-color: #0072d9;\n  background-color: #0072d9; }\n\n._item-wait {\n  color: rgba(0, 0, 0, 0.45); }\n\n._item-block ._item-icon {\n  border-color: #f5222d;\n  background-color: #fff; }\n\n._item-block {\n  color: #f5222d; }\n\n._item-block ._item-description {\n  color: #f5222d; }\n\n._item-description {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px; }\n\n.finish-icon {\n  position: relative;\n  top: 2px; }\n\n.error-icon {\n  position: relative;\n  top: 2px; }\n\n._item-finish > ._item-content > ._item-title:after {\n  background-color: #0072d9; }\n\n._item.next-error ._item-title:after {\n  background: #f5222d; }\n\n._item-title:after {\n  content: '';\n  height: 1px;\n  width: 9999px;\n  background: #e8e8e8;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 100%; }\n\n._item {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: top;\n  height: 60px;\n  margin-right: 16px;\n  white-space: nowrap; }\n\n._item:last-child ._item-title:after {\n  display: none; }\n\n._item-title {\n  position: relative;\n  display: inline-block;\n  padding-right: 16px; }\n\n.vertical ._item {\n  display: block;\n  overflow: visible; }\n\n.vertical ._item-tail::after {\n  display: inline-block;\n  background: #e8e8e8;\n  border-radius: 1px;\n  -webkit-transition: background .3s;\n  transition: background .3s;\n  content: '';\n  width: 1px;\n  height: 100%; }\n\n.vertical ._item-finish ._item-tail::after {\n  background: #0072d9; }\n\n.vertical .next-error ._item-tail::after {\n  background: #f5222d; }\n\n.vertical ._item-title:after {\n  display: none; }\n\n.vertical > ._item:not(:last-child) > ._item-tail {\n  display: block; }\n\n.vertical > ._item > ._item-tail {\n  position: absolute;\n  top: 0px;\n  left: 16px;\n  width: 1px;\n  height: 100%;\n  padding: 38px 0 6px; }\n\n._item-tail {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: 100%;\n  padding: 0 10px;\n  display: none; }\n\n.vertical > _item:not(:last-child) > ._item-tail {\n  display: block; }\n", ""]);

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

/***/ "./src/step/index.scss":
/*!*****************************!*\
  !*** ./src/step/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/step/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/step/index.tsx":
/*!****************************!*\
  !*** ./src/step/index.tsx ***!
  \****************************/
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
var css = __webpack_require__(/*! ./index.scss */ "./src/step/index.scss");
//@ts-ignore
__webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var state = {
    DONE: 0,
    ERROR: 1,
    DOING: 2,
    TODO: 3
};
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Step.prototype.render = function (props) {
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'm-step', {
            'vertical': props.vertical
        })), props.items.map(function (item, index) {
            return omi_1.h("div", { class: omi_1.classNames('_item', {
                    '_item-finish': item.state === state.DONE,
                    '_item-block': item.state === state.ERROR,
                    '_item-process': item.state === state.DOING,
                    '_item-wait': item.state === state.TODO,
                    'next-error': props.items[index + 1] && props.items[index + 1].state === state.ERROR
                }) },
                omi_1.h("div", { class: "_item-tail" }),
                omi_1.h("div", { class: "_item-icon" },
                    omi_1.h("span", { class: "icon" },
                        item.state === state.DONE && omi_1.h("i", { class: "anticon anticon-check finish-icon" },
                            omi_1.h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "check", width: "1em", height: "1em", fill: document.body.style.getPropertyValue('--mdc-theme-primary'), "aria-hidden": "true" },
                                omi_1.h("path", { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" }))),
                        item.state === state.ERROR && omi_1.h("i", { class: "anticon anticon-close error-icon" },
                            omi_1.h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "close", width: "1em", height: "1em", fill: document.body.style.getPropertyValue('--mdc-theme-error'), "aria-hidden": "true" },
                                omi_1.h("path", { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" }))),
                        (item.state === state.DOING || item.state === state.TODO) && omi_1.h("span", { class: "icon" }, index + 1))),
                omi_1.h("div", { class: "_item-content" },
                    omi_1.h("div", { class: "_item-title" }, item.name),
                    omi_1.h("div", { class: "_item-description" }, item.description)));
        })));
    };
    Step.css = css;
    Step.propTypes = {
        items: Object,
        vertical: Boolean
    };
    Step = __decorate([
        omi_1.tag('m-step')
    ], Step);
    return Step;
}(omi_1.WeElement));
exports.default = state;


/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

theme();
document.addEventListener('DOMContentLoaded', function () {
    theme();
});
function theme() {
    if (document.body && !document.body.style.getPropertyValue('--mdc-theme-primary')) {
        document.body.style.setProperty('--mdc-theme-primary', '#0072d9');
        document.body.style.setProperty('--mdc-theme-secondary', '#2170b8');
        document.body.style.setProperty('--mdc-theme-error', '#f5222d');
        document.body.style.setProperty('--mdc-theme-surface', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-primary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-secondary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-error', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-surface', '#000000');
        document.body.style.setProperty('--mdc-theme-background', '#ffffff');
        document.body.style.setProperty('--mdc-shape-small-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-medium-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-large-component-radius', '0px');
        document.body.style.setProperty('--mdc-typography--font-family', 'Roboto, sans-serif');
    }
}


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