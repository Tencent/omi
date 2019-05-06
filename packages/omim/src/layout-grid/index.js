(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MLayoutGrid"] = factory(require("omi"));
	else
		root["MLayoutGrid"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/layout-grid/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/layout-grid/index.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/layout-grid/index.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px; }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px); } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px); } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px); } }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1); }\n    @supports (display: grid) {\n      .mdc-layout-grid__inner {\n        display: grid;\n        margin: 0;\n        grid-gap: 24px;\n        grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n        grid-template-columns: repeat(12, minmax(0, 1fr)); } } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1); }\n    @supports (display: grid) {\n      .mdc-layout-grid__inner {\n        display: grid;\n        margin: 0;\n        grid-gap: 16px;\n        grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n        grid-template-columns: repeat(8, minmax(0, 1fr)); } } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1); }\n    @supports (display: grid) {\n      .mdc-layout-grid__inner {\n        display: grid;\n        margin: 0;\n        grid-gap: 16px;\n        grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n        grid-template-columns: repeat(4, minmax(0, 1fr)); } } }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    width: calc(33.33333% - 24px);\n    width: calc(33.33333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2); }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        width: auto;\n        grid-column-end: span 4; } }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        margin: 0; } }\n    .mdc-layout-grid__cell--span-1,\n    .mdc-layout-grid__cell--span-1-desktop {\n      width: calc(8.33333% - 24px);\n      width: calc(8.33333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1,\n        .mdc-layout-grid__cell--span-1-desktop {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2,\n    .mdc-layout-grid__cell--span-2-desktop {\n      width: calc(16.66667% - 24px);\n      width: calc(16.66667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2,\n        .mdc-layout-grid__cell--span-2-desktop {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3,\n    .mdc-layout-grid__cell--span-3-desktop {\n      width: calc(25% - 24px);\n      width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3,\n        .mdc-layout-grid__cell--span-3-desktop {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4,\n    .mdc-layout-grid__cell--span-4-desktop {\n      width: calc(33.33333% - 24px);\n      width: calc(33.33333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4,\n        .mdc-layout-grid__cell--span-4-desktop {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5,\n    .mdc-layout-grid__cell--span-5-desktop {\n      width: calc(41.66667% - 24px);\n      width: calc(41.66667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5,\n        .mdc-layout-grid__cell--span-5-desktop {\n          width: auto;\n          grid-column-end: span 5; } }\n    .mdc-layout-grid__cell--span-6,\n    .mdc-layout-grid__cell--span-6-desktop {\n      width: calc(50% - 24px);\n      width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6,\n        .mdc-layout-grid__cell--span-6-desktop {\n          width: auto;\n          grid-column-end: span 6; } }\n    .mdc-layout-grid__cell--span-7,\n    .mdc-layout-grid__cell--span-7-desktop {\n      width: calc(58.33333% - 24px);\n      width: calc(58.33333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7,\n        .mdc-layout-grid__cell--span-7-desktop {\n          width: auto;\n          grid-column-end: span 7; } }\n    .mdc-layout-grid__cell--span-8,\n    .mdc-layout-grid__cell--span-8-desktop {\n      width: calc(66.66667% - 24px);\n      width: calc(66.66667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8,\n        .mdc-layout-grid__cell--span-8-desktop {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-9,\n    .mdc-layout-grid__cell--span-9-desktop {\n      width: calc(75% - 24px);\n      width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9,\n        .mdc-layout-grid__cell--span-9-desktop {\n          width: auto;\n          grid-column-end: span 9; } }\n    .mdc-layout-grid__cell--span-10,\n    .mdc-layout-grid__cell--span-10-desktop {\n      width: calc(83.33333% - 24px);\n      width: calc(83.33333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10,\n        .mdc-layout-grid__cell--span-10-desktop {\n          width: auto;\n          grid-column-end: span 10; } }\n    .mdc-layout-grid__cell--span-11,\n    .mdc-layout-grid__cell--span-11-desktop {\n      width: calc(91.66667% - 24px);\n      width: calc(91.66667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11,\n        .mdc-layout-grid__cell--span-11-desktop {\n          width: auto;\n          grid-column-end: span 11; } }\n    .mdc-layout-grid__cell--span-12,\n    .mdc-layout-grid__cell--span-12-desktop {\n      width: calc(100% - 24px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12,\n        .mdc-layout-grid__cell--span-12-desktop {\n          width: auto;\n          grid-column-end: span 12; } } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2); }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        width: auto;\n        grid-column-end: span 4; } }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        margin: 0; } }\n    .mdc-layout-grid__cell--span-1,\n    .mdc-layout-grid__cell--span-1-tablet {\n      width: calc(12.5% - 16px);\n      width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1,\n        .mdc-layout-grid__cell--span-1-tablet {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2,\n    .mdc-layout-grid__cell--span-2-tablet {\n      width: calc(25% - 16px);\n      width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2,\n        .mdc-layout-grid__cell--span-2-tablet {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3,\n    .mdc-layout-grid__cell--span-3-tablet {\n      width: calc(37.5% - 16px);\n      width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3,\n        .mdc-layout-grid__cell--span-3-tablet {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4,\n    .mdc-layout-grid__cell--span-4-tablet {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4,\n        .mdc-layout-grid__cell--span-4-tablet {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5,\n    .mdc-layout-grid__cell--span-5-tablet {\n      width: calc(62.5% - 16px);\n      width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5,\n        .mdc-layout-grid__cell--span-5-tablet {\n          width: auto;\n          grid-column-end: span 5; } }\n    .mdc-layout-grid__cell--span-6,\n    .mdc-layout-grid__cell--span-6-tablet {\n      width: calc(75% - 16px);\n      width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6,\n        .mdc-layout-grid__cell--span-6-tablet {\n          width: auto;\n          grid-column-end: span 6; } }\n    .mdc-layout-grid__cell--span-7,\n    .mdc-layout-grid__cell--span-7-tablet {\n      width: calc(87.5% - 16px);\n      width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7,\n        .mdc-layout-grid__cell--span-7-tablet {\n          width: auto;\n          grid-column-end: span 7; } }\n    .mdc-layout-grid__cell--span-8,\n    .mdc-layout-grid__cell--span-8-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8,\n        .mdc-layout-grid__cell--span-8-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-9,\n    .mdc-layout-grid__cell--span-9-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9,\n        .mdc-layout-grid__cell--span-9-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-10,\n    .mdc-layout-grid__cell--span-10-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10,\n        .mdc-layout-grid__cell--span-10-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-11,\n    .mdc-layout-grid__cell--span-11-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11,\n        .mdc-layout-grid__cell--span-11-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-12,\n    .mdc-layout-grid__cell--span-12-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12,\n        .mdc-layout-grid__cell--span-12-tablet {\n          width: auto;\n          grid-column-end: span 8; } } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid__cell {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2); }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        width: auto;\n        grid-column-end: span 4; } }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        margin: 0; } }\n    .mdc-layout-grid__cell--span-1,\n    .mdc-layout-grid__cell--span-1-phone {\n      width: calc(25% - 16px);\n      width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1,\n        .mdc-layout-grid__cell--span-1-phone {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2,\n    .mdc-layout-grid__cell--span-2-phone {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2,\n        .mdc-layout-grid__cell--span-2-phone {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3,\n    .mdc-layout-grid__cell--span-3-phone {\n      width: calc(75% - 16px);\n      width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3,\n        .mdc-layout-grid__cell--span-3-phone {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4,\n    .mdc-layout-grid__cell--span-4-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4,\n        .mdc-layout-grid__cell--span-4-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5,\n    .mdc-layout-grid__cell--span-5-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5,\n        .mdc-layout-grid__cell--span-5-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-6,\n    .mdc-layout-grid__cell--span-6-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6,\n        .mdc-layout-grid__cell--span-6-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-7,\n    .mdc-layout-grid__cell--span-7-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7,\n        .mdc-layout-grid__cell--span-7-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-8,\n    .mdc-layout-grid__cell--span-8-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8,\n        .mdc-layout-grid__cell--span-8-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-9,\n    .mdc-layout-grid__cell--span-9-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9,\n        .mdc-layout-grid__cell--span-9-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-10,\n    .mdc-layout-grid__cell--span-10-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10,\n        .mdc-layout-grid__cell--span-10-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-11,\n    .mdc-layout-grid__cell--span-11-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11,\n        .mdc-layout-grid__cell--span-11-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-12,\n    .mdc-layout-grid__cell--span-12-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12,\n        .mdc-layout-grid__cell--span-12-phone {\n          width: auto;\n          grid-column-end: span 4; } } }\n\n.mdc-layout-grid__cell--order-1 {\n  order: 1; }\n\n.mdc-layout-grid__cell--order-2 {\n  order: 2; }\n\n.mdc-layout-grid__cell--order-3 {\n  order: 3; }\n\n.mdc-layout-grid__cell--order-4 {\n  order: 4; }\n\n.mdc-layout-grid__cell--order-5 {\n  order: 5; }\n\n.mdc-layout-grid__cell--order-6 {\n  order: 6; }\n\n.mdc-layout-grid__cell--order-7 {\n  order: 7; }\n\n.mdc-layout-grid__cell--order-8 {\n  order: 8; }\n\n.mdc-layout-grid__cell--order-9 {\n  order: 9; }\n\n.mdc-layout-grid__cell--order-10 {\n  order: 10; }\n\n.mdc-layout-grid__cell--order-11 {\n  order: 11; }\n\n.mdc-layout-grid__cell--order-12 {\n  order: 12; }\n\n.mdc-layout-grid__cell--align-top {\n  align-self: flex-start; }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--align-top {\n      align-self: start; } }\n\n.mdc-layout-grid__cell--align-middle {\n  align-self: center; }\n\n.mdc-layout-grid__cell--align-bottom {\n  align-self: flex-end; }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--align-bottom {\n      align-self: end; } }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2); } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2); } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2); } }\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0; }\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto; }\n", ""]);

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

/***/ "./src/layout-grid/index.scss":
/*!************************************!*\
  !*** ./src/layout-grid/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/layout-grid/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/layout-grid/index.tsx":
/*!***********************************!*\
  !*** ./src/layout-grid/index.tsx ***!
  \***********************************/
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
var css = __webpack_require__(/*! ./index.scss */ "./src/layout-grid/index.scss");
var parser = new DOMParser();
var LayoutGrid = /** @class */ (function (_super) {
    __extends(LayoutGrid, _super);
    function LayoutGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayoutGrid.prototype.install = function () {
        var _this = this;
        document.addEventListener('DOMContentLoaded', function () {
            _this.update();
        });
    };
    LayoutGrid.prototype.renderChild = function (child) {
        var _this = this;
        var arr = Array.prototype.slice.call(child.childNodes, 0);
        arr = arr.filter(function (item) {
            return item.nodeName === 'cell';
        });
        if (arr.length > 0) {
            return omi_1.h("div", { class: "mdc-layout-grid__cell" },
                omi_1.h("div", { class: "mdc-layout-grid__inner" }, arr.map(function (item) {
                    return _this.renderChild(item);
                })));
        }
        else {
            var cell = omi_1.h("div", { class: omi_1.classNames('mdc-layout-grid__cell', {
                    "mdc-layout-grid__cell--align-top": child.hasAttribute('align-top'),
                    "mdc-layout-grid__cell--align-middle": child.hasAttribute('align-middle'),
                    "mdc-layout-grid__cell--align-bottom": child.hasAttribute('align-bottom')
                }) });
            for (var i = 0, len = child.childNodes.length; i < len; i++) {
                if (child.childNodes[i].nodeType === 3) {
                    cell.children.push(child.childNodes[i].nodeValue);
                }
                else {
                    cell.children.push(processNode(child.childNodes[i]));
                }
            }
            return cell;
        }
    };
    LayoutGrid.prototype.render = function (props) {
        var _this = this;
        if (!this.innerHTML.trim())
            return;
        var doc = parser.parseFromString("<div>" + this.innerHTML + "</div>", "text/xml");
        var arr = Array.prototype.slice.call(doc.childNodes[0].childNodes, 0);
        arr = arr.filter(function (item) {
            return item.nodeName === 'cell';
        });
        console.log(props);
        // mdc-layout-grid--align-right
        //dom -> vdom
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'mdc-layout-grid', {
            'mdc-layout-grid--align-right': props.alignRight,
            'mdc-layout-grid--align-left': props.alignLeft
        })),
            omi_1.h("div", { class: "mdc-layout-grid__inner" }, arr.map(function (item) {
                return _this.renderChild(item);
            }))));
    };
    LayoutGrid.css = css;
    LayoutGrid.propTypes = {
        alignLeft: Boolean,
        alignRight: Boolean
    };
    LayoutGrid = __decorate([
        omi_1.tag('m-layout-grid')
    ], LayoutGrid);
    return LayoutGrid;
}(omi_1.WeElement));
exports.default = LayoutGrid;
function processNode(node) {
    if (node.nodeType === 1) {
        var i, child, attributes = {}, children = [];
        for (i = 0; (child = node.attributes[i]); ++i) {
            attributes[child.nodeName] = child.nodeValue;
        }
        for (i = 0; (child = node.childNodes[i]); ++i) {
            children.push(processNode(child));
        }
        return {
            nodeName: node.tagName,
            attributes: attributes,
            children: children
        };
    }
    if (node.nodeType === 3) {
        return node.nodeValue;
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

/******/ });
});
//# sourceMappingURL=index.js.map