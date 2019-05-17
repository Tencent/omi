(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MChips"] = factory(require("omi"));
	else
		root["MChips"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/chips/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/chips/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/chips/index.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdc-chip__icon--leading {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mdc-chip__icon--trailing {\n  color: rgba(0, 0, 0, 0.54); }\n  .mdc-chip__icon--trailing:hover {\n    color: rgba(0, 0, 0, 0.62); }\n  .mdc-chip__icon--trailing:focus {\n    color: rgba(0, 0, 0, 0.87); }\n\n.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {\n  width: 20px;\n  height: 20px;\n  font-size: 20px; }\n\n.mdc-chip__icon.mdc-chip__icon--trailing {\n  width: 18px;\n  height: 18px;\n  font-size: 18px; }\n\n.mdc-chip__icon--trailing {\n  margin: 0 -4px 0 4px; }\n\n.mdc-chip {\n  border-radius: 16px;\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.01786em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  height: 32px;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 7px 12px;\n  outline: none;\n  cursor: pointer;\n  overflow: hidden; }\n  .mdc-chip:hover {\n    color: rgba(0, 0, 0, 0.87); }\n  .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,\n  .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {\n    /* @noflip */\n    margin-left: -4px;\n    /* @noflip */\n    margin-right: 4px;\n    margin-top: -4px;\n    margin-bottom: -4px; }\n    [dir=\"rtl\"] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark, .mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=\"rtl\"], [dir=\"rtl\"]\n    .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),\n    .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=\"rtl\"] {\n      /* @noflip */\n      margin-left: 4px;\n      /* @noflip */\n      margin-right: -4px; }\n  .mdc-chip:hover {\n    color: #000;\n    /* @alternate */\n    color: var(--mdc-theme-on-surface, #000); }\n\n.mdc-chip--exit {\n  transition: opacity 75ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear, margin 100ms linear;\n  opacity: 0; }\n\n.mdc-chip__text {\n  white-space: nowrap; }\n\n.mdc-chip__icon {\n  border-radius: 50%;\n  outline: none;\n  vertical-align: middle; }\n\n.mdc-chip__checkmark {\n  height: 20px; }\n\n.mdc-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke-width: 2px;\n  stroke-dashoffset: 29.78334;\n  stroke-dasharray: 29.78334; }\n\n.mdc-chip--selected .mdc-chip__checkmark-path {\n  stroke-dashoffset: 0; }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected {\n  color: #0052d9;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #0052d9); }\n  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading {\n    color: rgba(0, 82, 217, 0.54); }\n  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover {\n    color: #0052d9;\n    /* @alternate */\n    color: var(--mdc-theme-primary, #0052d9); }\n\n.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path {\n  stroke: #0052d9;\n  /* @alternate */\n  stroke: var(--mdc-theme-primary, #0052d9); }\n\n.mdc-chip-set--choice .mdc-chip--selected {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff); }\n\n.mdc-chip__checkmark-svg {\n  width: 0;\n  height: 20px;\n  transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.mdc-chip--selected .mdc-chip__checkmark-svg {\n  width: 20px; }\n\n.mdc-chip-set--filter .mdc-chip__icon--leading {\n  transition: opacity 75ms linear;\n  transition-delay: -50ms;\n  opacity: 1; }\n  .mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark {\n    transition: opacity 75ms linear;\n    transition-delay: 80ms;\n    opacity: 0; }\n    .mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark .mdc-chip__checkmark-svg {\n      transition: width 0ms; }\n\n.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading {\n  opacity: 0; }\n  .mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading + .mdc-chip__checkmark {\n    width: 0;\n    opacity: 1; }\n\n.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading {\n  width: 0;\n  opacity: 0; }\n  .mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading + .mdc-chip__checkmark {\n    width: 20px; }\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0); } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0); }\n  to {\n    opacity: 0; } }\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden; }\n  .mdc-ripple-surface--test-edge-var-bug::before {\n    border: var(--mdc-ripple-surface-test-edge-var); }\n\n.mdc-chip {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity; }\n  .mdc-chip::before, .mdc-chip::after {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-chip::before {\n    transition: opacity 15ms linear, background-color 15ms linear;\n    z-index: 1; }\n  .mdc-chip.mdc-ripple-upgraded::before {\n    transform: scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-chip.mdc-ripple-upgraded::after {\n    top: 0;\n    /* @noflip */\n    left: 0;\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-chip.mdc-ripple-upgraded--unbounded::after {\n    top: var(--mdc-ripple-top, 0);\n    /* @noflip */\n    left: var(--mdc-ripple-left, 0); }\n  .mdc-chip.mdc-ripple-upgraded--foreground-activation::after {\n    animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards; }\n  .mdc-chip.mdc-ripple-upgraded--foreground-deactivation::after {\n    animation: mdc-ripple-fg-opacity-out 150ms;\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-chip::before, .mdc-chip::after {\n    top: calc(50% - 100%);\n    /* @noflip */\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%; }\n  .mdc-chip.mdc-ripple-upgraded::after {\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: var(--mdc-ripple-fg-size, 100%); }\n  .mdc-chip::before, .mdc-chip::after {\n    background-color: rgba(0, 0, 0, 0.87); }\n  .mdc-chip:hover::before {\n    opacity: 0.04; }\n  .mdc-chip:not(.mdc-ripple-upgraded):focus::before, .mdc-chip.mdc-ripple-upgraded--background-focused::before {\n    transition-duration: 75ms;\n    opacity: 0.12; }\n  .mdc-chip:not(.mdc-ripple-upgraded)::after {\n    transition: opacity 150ms linear; }\n  .mdc-chip:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 75ms;\n    opacity: 0.12; }\n  .mdc-chip.mdc-ripple-upgraded {\n    --mdc-ripple-fg-opacity: 0.12; }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before {\n  opacity: 0.08; }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after {\n  background-color: #0052d9; }\n  @supports not (-ms-ime-align: auto) {\n    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after {\n      /* @alternate */\n      background-color: var(--mdc-theme-primary, #0052d9); } }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover::before {\n  opacity: 0.12; }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.2; }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear; }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.2; }\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.2; }\n\n@keyframes mdc-chip-entry {\n  from {\n    transform: scale(0.8);\n    opacity: .4; }\n  to {\n    transform: scale(1);\n    opacity: 1; } }\n\n.mdc-chip-set {\n  padding: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box; }\n  .mdc-chip-set .mdc-chip {\n    margin: 4px; }\n\n.mdc-chip-set--input .mdc-chip {\n  animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1); }\n", ""]);

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

/***/ "./src/chips/index.scss":
/*!******************************!*\
  !*** ./src/chips/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/chips/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/chips/index.tsx":
/*!*****************************!*\
  !*** ./src/chips/index.tsx ***!
  \*****************************/
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
var css = __webpack_require__(/*! ./index.scss */ "./src/chips/index.scss");
__webpack_require__(/*! ../icon */ "./src/icon/index.js");
var chipSet = /** @class */ (function (_super) {
    __extends(chipSet, _super);
    function chipSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    chipSet.prototype.installed = function () {
    };
    chipSet.prototype.render = function (props) {
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'mdc-chip-set', {
            'mdc-chip-set--input': props.input,
            'mdc-chip-set--choice': props.choice,
            'mdc-chip-set--filter': props.filter
        })), props.chips.map(function (item) {
            return omi_1.h("div", __assign({}, omi_1.extractClass(props, 'mdc-chip', {
                'mdc-chip--selected': item.selected
            })),
                (item.leading) && omi_1.h("i", { class: omi_1.classNames('material-icons', 'mdc-chip__icon', 'mdc-chip__icon--leading', { 'mdc-chip__icon--leading-hidden': props.filter && item.checkmark && item.selected }) }, (item.leading.icon) && omi_1.h("m-icon", __assign({ class: 'm-icon' }, item.leading.icon))),
                (props.filter && item.checkmark) && omi_1.h("div", { class: "mdc-chip__checkmark" },
                    omi_1.h("svg", { class: "mdc-chip__checkmark-svg", viewBox: "-2 -3 30 30" },
                        omi_1.h("path", { class: "mdc-chip__checkmark-path", fill: "none", stroke: "black", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }))),
                omi_1.h("div", { class: "mdc-chip__text" }, item.text),
                (item.trailing) && omi_1.h("i", { class: "material-icons mdc-chip__icon mdc-chip__icon--trailing" }, (item.trailing.icon) && omi_1.h("m-icon", __assign({ class: 'm-icon' }, item.trailing.icon))));
        })));
    };
    chipSet.css = css;
    chipSet.propTypes = {
        chips: Object,
        input: Boolean,
        choice: Boolean,
        filter: Boolean
    };
    chipSet = __decorate([
        omi_1.tag('m-chips')
    ], chipSet);
    return chipSet;
}(omi_1.WeElement));
exports.default = chipSet;


/***/ }),

/***/ "./src/icon/index.js":
/*!***************************!*\
  !*** ./src/icon/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
    if (true)
        module.exports = factory(__webpack_require__(/*! omi */ "omi"));
    else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
    return /******/ (function (modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
                /******/ }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
                /******/ 
            };
            /******/
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/ 
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function (exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/ }
            /******/ 
        };
        /******/
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function (exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function (value, mode) {
            /******/ if (mode & 1)
                value = __webpack_require__(value);
            /******/ if (mode & 8)
                return value;
            /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            /******/ if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
            /******/ return ns;
            /******/ 
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function (module) {
            /******/ var getter = module && module.__esModule ?
                /******/ function getDefault() { return module['default']; } :
                /******/ function getModuleExports() { return module; };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
            /******/ 
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = "./src/icon/index.tsx");
        /******/ 
    })({
        /***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/icon/index.scss": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/icon/index.scss ***!
          \**********************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
            // imports
            // module
            exports.push([module.i, ".m-icon {\n  text-align: center;\n  display: inline-block; }\n\n.m-icon svg {\n  display: inline-block;\n  vertical-align: top; }\n\n.rotate {\n  display: inline-block;\n  -webkit-animation: rotate 1s infinite linear;\n  animation: rotate 1s infinite linear; }\n\ni div {\n  font-style: normal; }\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);
            // exports
            /***/ 
        }),
        /***/ "./node_modules/css-loader/lib/css-base.js": 
        /*!*************************************************!*\
          !*** ./node_modules/css-loader/lib/css-base.js ***!
          \*************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /*
                MIT License http://www.opensource.org/licenses/mit-license.php
                Author Tobias Koppers @sokra
            */
            // css base code, injected by the css-loader
            module.exports = function (useSourceMap) {
                var list = [];
                // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function (item) {
                        var content = cssWithMappingToString(item, useSourceMap);
                        if (item[2]) {
                            return "@media " + item[2] + "{" + content + "}";
                        }
                        else {
                            return content;
                        }
                    }).join("");
                };
                // import a list of modules into the list
                list.i = function (modules, mediaQuery) {
                    if (typeof modules === "string")
                        modules = [[null, modules, ""]];
                    var alreadyImportedModules = {};
                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if (typeof id === "number")
                            alreadyImportedModules[id] = true;
                    }
                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            }
                            else if (mediaQuery) {
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
                        return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
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
            /***/ 
        }),
        /***/ "./src/icon/index.scss": 
        /*!*****************************!*\
          !*** ./src/icon/index.scss ***!
          \*****************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/icon/index.scss");
            if (typeof result === "string") {
                module.exports = result;
            }
            else {
                module.exports = result.toString();
            }
            /***/ 
        }),
        /***/ "./src/icon/index.tsx": 
        /*!****************************!*\
          !*** ./src/icon/index.tsx ***!
          \****************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var __extends = (this && this.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b)
                            if (b.hasOwnProperty(p))
                                d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var __assign = (this && this.__assign) || function () {
                __assign = Object.assign || function (t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var omi_1 = __webpack_require__(/*! omi */ "omi");
            var css = __webpack_require__(/*! ./index.scss */ "./src/icon/index.scss");
            var Icon = /** @class */ (function (_super) {
                __extends(Icon, _super);
                function Icon() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Icon.prototype.render = function (props) {
                    return (omi_1.h("i", __assign({}, omi_1.extractClass(props, 'm-icon')), omi_1.h("svg", { viewBox: '0 0 ' + props.view + ' ' + props.view, class: omi_1.classNames({ rotate: props.rotate }), width: props.scale + 'em', height: props.scale + 'em', fill: props.color, "aria-hidden": "true" }, props.paths ? (props.paths.map(function (item) {
                        var attrs = { d: item.path, fill: props.color || 'black' };
                        if (item.color)
                            attrs.fill = item.color;
                        return omi_1.h("path", __assign({}, attrs));
                    })) : omi_1.h("path", { d: props.path })), props.children && (omi_1.h("div", { style: "color:" + (props.color || 'black') + ";" }, props.children[0]))));
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
                    color: String
                };
                Icon = __decorate([
                    omi_1.tag('m-icon')
                ], Icon);
                return Icon;
            }(omi_1.WeElement));
            exports.default = Icon;
            /***/ 
        }),
        /***/ "omi": 
        /*!******************************************************************************!*\
          !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
          \******************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;
            /***/ 
        })
        /******/ 
    });
});
//# sourceMappingURL=index.js.map


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