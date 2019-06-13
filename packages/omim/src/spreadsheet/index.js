(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MSpreadsheet"] = factory(require("omi"));
	else
		root["MSpreadsheet"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/spreadsheet/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.less":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.less ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../_css-loader@1.0.1@css-loader/lib/url/escape.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n}\n.x-spreadsheet {\n  font-size: 13px;\n  line-height: normal;\n  user-select: none;\n  -moz-user-select: none;\n  font-family: 'Lato', 'Source Sans Pro', Roboto, Helvetica, Arial, sans-serif;\n  box-sizing: content-box;\n  background: #fff;\n  -webkit-font-smoothing: antialiased;\n}\n.x-spreadsheet textarea {\n  font: 400 13px Arial, 'Lato', 'Source Sans Pro', Roboto, Helvetica, sans-serif;\n}\n.x-spreadsheet-sheet {\n  position: relative;\n  overflow: hidden;\n}\n.x-spreadsheet-table {\n  vertical-align: bottom;\n}\n.x-spreadsheet-tooltip {\n  font-family: inherit;\n  position: absolute;\n  padding: 5px 10px;\n  color: #fff;\n  border-radius: 1px;\n  background: #000000;\n  font-size: 12px;\n  z-index: 201;\n}\n.x-spreadsheet-tooltip:before {\n  pointer-events: none;\n  position: absolute;\n  left: calc(50% - 4px);\n  top: -4px;\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  background: inherit;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  z-index: 1;\n  box-shadow: 1px 1px 3px -1px rgba(0, 0, 0, 0.3);\n}\n.x-spreadsheet-color-palette {\n  padding: 5px;\n}\n.x-spreadsheet-color-palette table {\n  margin: 0;\n  padding: 0;\n  border-collapse: separate;\n  border-spacing: 2;\n  background: #fff;\n}\n.x-spreadsheet-color-palette table td {\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.x-spreadsheet-color-palette table td:hover {\n  border-color: #ddd;\n}\n.x-spreadsheet-color-palette table td .x-spreadsheet-color-palette-cell {\n  width: 16px;\n  height: 16px;\n}\n.x-spreadsheet-border-palette {\n  padding: 6px;\n}\n.x-spreadsheet-border-palette table {\n  margin: 0;\n  padding: 0;\n  border-collapse: separate;\n  border-spacing: 0;\n  background: #fff;\n  table-layout: fixed;\n}\n.x-spreadsheet-border-palette table td {\n  margin: 0;\n}\n.x-spreadsheet-border-palette .x-spreadsheet-border-palette-left {\n  border-right: 1px solid #eee;\n  padding-right: 6px;\n}\n.x-spreadsheet-border-palette .x-spreadsheet-border-palette-left .x-spreadsheet-border-palette-cell {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  text-align: center;\n}\n.x-spreadsheet-border-palette .x-spreadsheet-border-palette-left .x-spreadsheet-border-palette-cell .x-spreadsheet-icon-img {\n  opacity: 0.8;\n}\n.x-spreadsheet-border-palette .x-spreadsheet-border-palette-left .x-spreadsheet-border-palette-cell:hover {\n  background-color: #eee;\n}\n.x-spreadsheet-border-palette .x-spreadsheet-border-palette-right {\n  padding-left: 6px;\n}\n.x-spreadsheet-border-palette .x-spreadsheet-border-palette-right .x-spreadsheet-toolbar-btn {\n  margin-top: 0;\n  margin-bottom: 3px;\n}\n.x-spreadsheet-border-palette .x-spreadsheet-border-palette-right .x-spreadsheet-line-type {\n  position: relative;\n  left: 0;\n  top: -3px;\n}\n.x-spreadsheet-dropdown {\n  position: relative;\n}\n.x-spreadsheet-dropdown .x-spreadsheet-dropdown-content {\n  position: absolute;\n  z-index: 200;\n  background: #fff;\n  box-shadow: 1px 2px 5px 2px rgba(51, 51, 51, 0.15);\n}\n.x-spreadsheet-dropdown.bottom-left .x-spreadsheet-dropdown-content {\n  top: calc(100% + 5px);\n  left: 0;\n}\n.x-spreadsheet-dropdown.bottom-right .x-spreadsheet-dropdown-content {\n  top: calc(100% + 5px);\n  right: 0;\n}\n.x-spreadsheet-dropdown .x-spreadsheet-dropdown-title {\n  padding: 0 5px;\n  display: inline-block;\n}\n.x-spreadsheet-dropdown .x-spreadsheet-dropdown-header .x-spreadsheet-icon.arrow-left {\n  margin-left: 4px;\n}\n.x-spreadsheet-dropdown .x-spreadsheet-dropdown-header .x-spreadsheet-icon.arrow-right {\n  width: 10px;\n  margin-right: 4px;\n}\n.x-spreadsheet-dropdown .x-spreadsheet-dropdown-header .x-spreadsheet-icon.arrow-right .arrow-down {\n  left: -130px;\n}\n/* resizer **/\n.x-spreadsheet-resizer {\n  position: absolute;\n  z-index: 11;\n}\n.x-spreadsheet-resizer .x-spreadsheet-resizer-hover {\n  background-color: rgba(75, 137, 255, 0.25);\n}\n.x-spreadsheet-resizer .x-spreadsheet-resizer-line {\n  position: absolute;\n}\n.x-spreadsheet-resizer.horizontal {\n  cursor: row-resize;\n}\n.x-spreadsheet-resizer.horizontal .x-spreadsheet-resizer-line {\n  border-bottom: 2px dashed #4b89ff;\n  left: 0;\n  bottom: 0;\n}\n.x-spreadsheet-resizer.vertical {\n  cursor: col-resize;\n}\n.x-spreadsheet-resizer.vertical .x-spreadsheet-resizer-line {\n  border-right: 2px dashed #4b89ff;\n  top: 0;\n  right: 0;\n}\n/* scrollbar */\n.x-spreadsheet-scrollbar {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #f4f5f8;\n  opacity: 0.9;\n  z-index: 12;\n}\n.x-spreadsheet-scrollbar.horizontal {\n  right: 15px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.x-spreadsheet-scrollbar.vertical {\n  bottom: 15px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n/* @{css-prefix}-overlayer */\n.x-spreadsheet-overlayer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 10;\n}\n.x-spreadsheet-overlayer .x-spreadsheet-overlayer-content {\n  position: absolute;\n  overflow: hidden;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n.x-spreadsheet-editor,\n.x-spreadsheet-selector {\n  position: absolute;\n  overflow: hidden;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/* @{css-prefix}-selector */\n.x-spreadsheet-selector .x-spreadsheet-selector-area {\n  position: absolute;\n  border: 2px solid #4b89ff;\n  background: rgba(75, 137, 255, 0.1);\n}\n.x-spreadsheet-selector .x-spreadsheet-selector-clipboard,\n.x-spreadsheet-selector .x-spreadsheet-selector-autofill {\n  position: absolute;\n  background: transparent;\n  z-index: 100;\n}\n.x-spreadsheet-selector .x-spreadsheet-selector-clipboard {\n  border: 2px dashed #4b89ff;\n}\n.x-spreadsheet-selector .x-spreadsheet-selector-autofill {\n  border: 1px dashed rgba(0, 0, 0, 0.45);\n}\n.x-spreadsheet-selector .x-spreadsheet-selector-corner {\n  pointer-events: auto;\n  position: absolute;\n  cursor: crosshair;\n  font-size: 0;\n  height: 5px;\n  width: 5px;\n  right: -5px;\n  bottom: -5px;\n  border: 2px solid #ffffff;\n  background: #4b89ff;\n}\n.x-spreadsheet-editor {\n  z-index: 20;\n}\n.x-spreadsheet-editor .x-spreadsheet-editor-area {\n  position: absolute;\n  text-align: left;\n  border: 2px solid #4b89ff;\n  line-height: 0;\n  z-index: 100;\n  pointer-events: auto;\n}\n.x-spreadsheet-editor .x-spreadsheet-editor-area textarea {\n  box-sizing: content-box;\n  border: none;\n  padding: 0 3px;\n  outline-width: 0;\n  resize: none;\n  text-align: start;\n  overflow-y: hidden;\n  font: 400 13px Arial, 'Lato', 'Source Sans Pro', Roboto, Helvetica, sans-serif;\n  color: inherit;\n  white-space: normal;\n  word-wrap: break-word;\n  line-height: 22px;\n  margin: 0;\n}\n.x-spreadsheet-editor .x-spreadsheet-editor-area .textline {\n  overflow: hidden;\n  visibility: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.x-spreadsheet-item {\n  user-select: none;\n  background: 0;\n  border: 1px solid transparent;\n  outline: none;\n  height: 26px;\n  color: rgba(0, 0, 0, 0.9);\n  line-height: 26px;\n  list-style: none;\n  padding: 2px 10px;\n  cursor: default;\n  text-align: left;\n}\n.x-spreadsheet-item.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.x-spreadsheet-item:hover,\n.x-spreadsheet-item.active {\n  background: rgba(0, 0, 0, 0.05);\n}\n.x-spreadsheet-item.divider {\n  height: 0;\n  padding: 0;\n  margin: 5px 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.x-spreadsheet-item .label {\n  float: right;\n  opacity: 0.65;\n  font-size: 1em;\n}\n.x-spreadsheet-item.state,\n.x-spreadsheet-header.state {\n  padding-left: 35px!important;\n  position: relative;\n}\n.x-spreadsheet-item.state:before,\n.x-spreadsheet-header.state:before {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  left: 12px;\n  top: calc(50% - 5px);\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 2px;\n}\n.x-spreadsheet-item.state.checked:before,\n.x-spreadsheet-header.state.checked:before {\n  background: #4b89ff;\n}\n.x-spreadsheet-checkbox {\n  position: relative;\n  display: inline-block;\n  backface-visibility: hidden;\n  outline: 0;\n  vertical-align: baseline;\n  font-style: normal;\n  font-size: 1rem;\n  line-height: 1em;\n}\n.x-spreadsheet-checkbox > input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0!important;\n  outline: 0;\n  z-index: -1;\n}\n.x-spreadsheet-suggest,\n.x-spreadsheet-contextmenu,\n.x-spreadsheet-sort-filter {\n  position: absolute;\n  box-shadow: 1px 2px 5px 2px rgba(51, 51, 51, 0.15);\n  background: #fff;\n  z-index: 100;\n  width: 260px;\n  pointer-events: auto;\n  overflow: auto;\n}\n.x-spreadsheet-suggest {\n  width: 200px;\n}\n.x-spreadsheet-filter {\n  border: 1px solid #e9e9e9;\n  font-size: 12px;\n  margin: 10px;\n}\n.x-spreadsheet-filter .x-spreadsheet-header {\n  padding: 0.5em 0.75em;\n  background: #f8f8f9;\n  border-bottom: 1px solid #e9e9e9;\n  border-left: 1px solid transparent;\n}\n.x-spreadsheet-filter .x-spreadsheet-body {\n  height: 200px;\n  overflow-y: auto;\n}\n.x-spreadsheet-filter .x-spreadsheet-body .x-spreadsheet-item {\n  height: 20px;\n  line-height: 20px;\n}\n.x-spreadsheet-sort-filter .x-spreadsheet-buttons {\n  margin: 10px;\n}\n.x-spreadsheet-toolbar,\n.x-spreadsheet-bottombar {\n  height: 40px;\n  padding: 0 30px;\n  text-align: left;\n  background: #f5f6f7;\n  display: flex;\n}\n.x-spreadsheet-bottombar {\n  border-top: 1px solid #e0e2e4;\n}\n.x-spreadsheet-toolbar {\n  border-bottom: 1px solid #e0e2e4;\n}\n.x-spreadsheet-toolbar .x-spreadsheet-toolbar-btns {\n  display: inline-flex;\n}\n.x-spreadsheet-toolbar .x-spreadsheet-toolbar-more {\n  padding: 0 6px 6px;\n  text-align: left;\n}\n.x-spreadsheet-toolbar .x-spreadsheet-toolbar-more .x-spreadsheet-toolbar-divider {\n  margin-top: 0;\n}\n.x-spreadsheet-toolbar .x-spreadsheet-toolbar-btn {\n  flex: 0 0 auto;\n  display: inline-block;\n  border: 1px solid transparent;\n  height: 26px;\n  line-height: 26px;\n  min-width: 26px;\n  margin: 6px 1px 0;\n  padding: 0;\n  text-align: center;\n  border-radius: 2px;\n}\n.x-spreadsheet-toolbar .x-spreadsheet-toolbar-btn.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.x-spreadsheet-toolbar .x-spreadsheet-toolbar-btn:hover,\n.x-spreadsheet-toolbar .x-spreadsheet-toolbar-btn.active {\n  background: rgba(0, 0, 0, 0.08);\n}\n.x-spreadsheet-toolbar-divider {\n  display: inline-block;\n  border-right: 1px solid #e0e2e4;\n  width: 0;\n  vertical-align: middle;\n  height: 18px;\n  margin: 12px 3px 0;\n}\n.x-spreadsheet-calendar {\n  color: rgba(0, 0, 0, 0.65);\n  background: #ffffff;\n  user-select: none;\n}\n.x-spreadsheet-calendar .calendar-header {\n  font-weight: 700;\n  line-height: 30px;\n  text-align: center;\n  width: 100%;\n  float: left;\n  background: #f9fafb;\n}\n.x-spreadsheet-calendar .calendar-header .calendar-header-left {\n  padding-left: 5px;\n  float: left;\n}\n.x-spreadsheet-calendar .calendar-header .calendar-header-right {\n  float: right;\n}\n.x-spreadsheet-calendar .calendar-header .calendar-header-right a {\n  padding: 3px 0;\n  margin-right: 2px;\n  border-radius: 2px;\n}\n.x-spreadsheet-calendar .calendar-header .calendar-header-right a:hover {\n  background: rgba(0, 0, 0, 0.08);\n}\n.x-spreadsheet-calendar .calendar-body {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.x-spreadsheet-calendar .calendar-body th,\n.x-spreadsheet-calendar .calendar-body td {\n  width: 14.28571429%;\n  min-width: 32px;\n  text-align: center;\n  font-weight: 700;\n  line-height: 30px;\n  padding: 0;\n}\n.x-spreadsheet-calendar .calendar-body td > .cell:hover {\n  background: #ecf6fd;\n}\n.x-spreadsheet-calendar .calendar-body td > .cell.active,\n.x-spreadsheet-calendar .calendar-body td > .cell.active:hover {\n  background: #ecf6fd;\n  color: #2185D0;\n}\n.x-spreadsheet-calendar .calendar-body td > .cell.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.x-spreadsheet-datepicker {\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  left: 0;\n  top: calc(100% + 5px);\n  z-index: 10;\n  width: auto;\n}\n.x-spreadsheet-buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n.x-spreadsheet-buttons .x-spreadsheet-button {\n  margin-left: 8px;\n}\n.x-spreadsheet-button {\n  display: inline-block;\n  border-radius: 3px;\n  line-height: 1em;\n  min-height: 1em;\n  white-space: nowrap;\n  text-align: center;\n  cursor: pointer;\n  font-size: 1em;\n  font-weight: 700;\n  padding: 0.75em 1em;\n  color: rgba(0, 0, 0, 0.6);\n  background: #E0E1E2;\n  text-decoration: none;\n  font-family: \"Lato\", \"proxima-nova\", \"Helvetica Neue\", Arial, sans-serif;\n  outline: none;\n  vertical-align: baseline;\n  zoom: 1;\n  user-select: none;\n  transition: all 0.1s linear;\n}\n.x-spreadsheet-button.active,\n.x-spreadsheet-button:hover {\n  background-color: #C0C1C2;\n  color: rgba(0, 0, 0, 0.8);\n}\n.x-spreadsheet-button.primary {\n  color: #fff;\n  background-color: #2185D0;\n}\n.x-spreadsheet-button.primary:hover,\n.x-spreadsheet-button.primary.active {\n  color: #fff;\n  background-color: #1678c2;\n}\n.x-spreadsheet-form-input {\n  font-size: 1em;\n  position: relative;\n  font-weight: 400;\n  display: inline-flex;\n  color: rgba(0, 0, 0, 0.87);\n}\n.x-spreadsheet-form-input input {\n  z-index: 1;\n  margin: 0;\n  max-width: 100%;\n  flex: 1 0 auto;\n  outline: 0;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  text-align: left;\n  line-height: 30px;\n  height: 30px;\n  padding: 0 8px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  border-radius: 3px;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, 0.06);\n}\n.x-spreadsheet-form-input input:focus {\n  border-color: #4b89ff;\n  box-shadow: inset 0 1px 2px rgba(75, 137, 255, 0.2);\n}\n.x-spreadsheet-form-select {\n  position: relative;\n  display: inline-block;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  border-radius: 2px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.87);\n  user-select: none;\n  box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, 0.06);\n}\n.x-spreadsheet-form-select .input-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 60px;\n  width: auto;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 8px;\n}\n.x-spreadsheet-form-fields {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.x-spreadsheet-form-fields .x-spreadsheet-form-field {\n  flex: 0 1 auto;\n}\n.x-spreadsheet-form-fields .x-spreadsheet-form-field .label {\n  display: inline-block;\n  margin: 0 10px 0 0;\n}\n.x-spreadsheet-form-field {\n  display: block;\n  vertical-align: middle;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n.x-spreadsheet-form-field:first-child {\n  margin-left: 0;\n}\n.x-spreadsheet-form-field.error .x-spreadsheet-form-select,\n.x-spreadsheet-form-field.error input {\n  border-color: #f04134;\n}\n.x-spreadsheet-form-field .tip {\n  color: #f04134;\n  font-size: 0.9em;\n}\n.x-spreadsheet-dimmer {\n  display: none;\n  position: absolute;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  transition: background-color 0.5s linear;\n  user-select: none;\n  z-index: 1000;\n}\n.x-spreadsheet-dimmer.active {\n  display: block;\n  opacity: 1;\n}\n.x-spreadsheet-modal,\n.x-spreadsheet-toast {\n  font-size: 13px;\n  position: fixed;\n  z-index: 1001;\n  text-align: left;\n  line-height: 1.25em;\n  min-width: 360px;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: 'Lato', 'Source Sans Pro', Roboto, Helvetica, Arial, sans-serif;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  background-clip: padding-box;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;\n}\n.x-spreadsheet-toast {\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.x-spreadsheet-modal-header,\n.x-spreadsheet-toast-header {\n  font-weight: 600;\n  background-clip: padding-box;\n  background-color: rgba(255, 255, 255, 0.85);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 4px 4px 0 0;\n}\n.x-spreadsheet-modal-header .x-spreadsheet-icon,\n.x-spreadsheet-toast-header .x-spreadsheet-icon {\n  position: absolute;\n  right: 0.8em;\n  top: 0.65em;\n  border-radius: 18px;\n}\n.x-spreadsheet-modal-header .x-spreadsheet-icon:hover,\n.x-spreadsheet-toast-header .x-spreadsheet-icon:hover {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.08);\n}\n.x-spreadsheet-toast-header {\n  color: #F2711C;\n}\n.x-spreadsheet-modal-header {\n  border-bottom: 1px solid #e0e2e4;\n  background: rgba(0, 0, 0, 0.08);\n  font-size: 1.0785em;\n}\n.x-spreadsheet-modal-header,\n.x-spreadsheet-modal-content,\n.x-spreadsheet-toast-header,\n.x-spreadsheet-toast-content {\n  padding: 0.75em 1em;\n}\n@media screen and (min-width: 320px) and (max-width: 480px) {\n  .x-spreadsheet-toolbar {\n    display: none;\n  }\n}\n.x-spreadsheet-icon {\n  width: 18px;\n  height: 18px;\n  margin: 1px 1px 2px 1px;\n  text-align: center;\n  vertical-align: middle;\n  user-select: none;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img {\n  background-image: url(" + escape(__webpack_require__(/*! ../assets/sprite.svg */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/assets/sprite.svg")) + ");\n  position: absolute;\n  width: 262px;\n  height: 444px;\n  opacity: 0.56;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.undo {\n  left: 0;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.redo {\n  left: -18px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.print {\n  left: -36px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.paintformat {\n  left: -54px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.clearformat {\n  left: -72px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.font-bold {\n  left: -90px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.font-italic {\n  left: -108px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.underline {\n  left: -126px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.strike {\n  left: -144px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.color {\n  left: -162px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.bgcolor {\n  left: -180px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.merge {\n  left: -198px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.align-left {\n  left: -216px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.align-center {\n  left: -234px;\n  top: 0;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.align-right {\n  left: 0;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.align-top {\n  left: -18px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.align-middle {\n  left: -36px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.align-bottom {\n  left: -54px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.textwrap {\n  left: -72px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.autofilter {\n  left: -90px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.formula {\n  left: -108px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.arrow-down {\n  left: -126px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.arrow-right {\n  left: -144px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.link {\n  left: -162px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.chart {\n  left: -180px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.freeze {\n  left: -198px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.ellipsis {\n  left: -216px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.add {\n  left: -234px;\n  top: -18px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-all {\n  left: 0;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-inside {\n  left: -18px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-horizontal {\n  left: -36px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-vertical {\n  left: -54px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-outside {\n  left: -72px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-left {\n  left: -90px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-top {\n  left: -108px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-right {\n  left: -126px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-bottom {\n  left: -144px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.border-none {\n  left: -162px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.line-color {\n  left: -180px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.line-type {\n  left: -198px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.close {\n  left: -234px;\n  top: -36px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.chevron-down {\n  left: 0;\n  top: -54px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.chevron-up {\n  left: -18px;\n  top: -54px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.chevron-left {\n  left: -36px;\n  top: -54px;\n}\n.x-spreadsheet-icon .x-spreadsheet-icon-img.chevron-right {\n  left: -54px;\n  top: -54px;\n}\n", ""]);

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

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/url/escape.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/url/escape.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/assets/sprite.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/assets/sprite.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjYycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDI2MiA3MiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNTY1NjM5MSw0LjQzNDM2MDg4IEw5LDcgTDE2LDcgTDE2LDAgTDEzLjA0MTg0MjQsMi45NTgxNTc1OCBDMTEuNTkzNjc4NywxLjczNjM1OTU5IDkuNzIyNjA3NzUsMSA3LjY3OTU1MDgzLDEgQzQuMjIxMjYyNTgsMSAxLjI1NTc1NTk5LDMuMTA5ODQ5MDggMCw2IEwyLDcgQzIuOTM2NTg3NzUsNC42MDk3NDQwNiA1LjEyOTQzNjk3LDMuMDgwMTEyMjkgNy42Nzk1NTA4MywzIEM5LjE0ODgxMjQ3LDMuMDUyODc0NyAxMC40OTk0NzgzLDMuNTc4NjIwNTMgMTEuNTY1NjM5MSw0LjQzNDM2MDg4IFoiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDE3IDUpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCwwKSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNTY1NjM5MSw0LjQzNDM2MDg4IEw5LDcgTDE2LDcgTDE2LDAgTDEzLjA0MTg0MjQsMi45NTgxNTc1OCBDMTEuNTkzNjc4NywxLjczNjM1OTU5IDkuNzIyNjA3NzUsMSA3LjY3OTU1MDgzLDEgQzQuMjIxMjYyNTgsMSAxLjI1NTc1NTk5LDMuMTA5ODQ5MDggMCw2IEwyLDcgQzIuOTM2NTg3NzUsNC42MDk3NDQwNiA1LjEyOTQzNjk3LDMuMDgwMTEyMjkgNy42Nzk1NTA4MywzIEM5LjE0ODgxMjQ3LDMuMDUyODc0NyAxMC40OTk0NzgzLDMuNTc4NjIwNTMgMTEuNTY1NjM5MSw0LjQzNDM2MDg4IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgNSkiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2LDApIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMywxNCBMMywxNCBMMywxMSBMMCwxMSBMMCw2LjAwNTkxOTA1IEMwLDQuODk4MDgwNTUgMC44OTQ1MTM3NTYsNCAxLjk5NDA2MDI4LDQgTDE0LjAwNTkzOTcsNCBDMTUuMTA3MjI4OCw0IDE2LDQuODg2NTU0ODQgMTYsNi4wMDU5MTkwNSBMMTYsMTEgTDEzLDExIEwxMywxNCBaIE01LDkgTDExLDkgTDExLDEyIEw1LDEyIEw1LDkgWiBNMywwIEwxMywwIEwxMywzIEwzLDMgTDMsMCBaIE0xMiw2IEwxNCw2IEwxNCw4IEwxMiw4IEwxMiw2IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMikiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LDApIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LDAgTDEsMCBDMC40NSwwIDAsMC40NSAwLDEgTDAsNCBDMCw0LjU1IDAuNDUsNSAxLDUgTDksNSBDOS41NSw1IDEwLDQuNTUgMTAsNCBMMTAsMyBMMTEsMyBMMTEsNiBMNCw2IEw0LDE0IEw2LDE0IEw2LDggTDEzLDggTDEzLDIgTDEwLDIgTDEwLDEgQzEwLDAuNDUgOS41NSwwIDksMCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDIpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MiwwKSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMC4yNywxLjU1IEw1LjQzLDYuNyBMMywxMiBMNS41LDEyIEw3LjE0LDguNDIgTDExLjczLDEzIEwxMywxMS43MyBMMS41NSwwLjI3IEwwLjI3LDEuNTUgTDAuMjcsMS41NSBaIE0zLjgyLDAgTDUuODIsMiBMNy41OCwyIEw3LjAzLDMuMjEgTDguNzQsNC45MiBMMTAuMDgsMiBMMTQsMiBMMTQsMCBMMy44MiwwIEwzLjgyLDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAzKSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAsMCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTksMy41IEM5LDEuNTcgNy40MywwIDUuNSwwIEwxLjc3NjM1Njg0ZS0xNSwwIEwxLjc3NjM1Njg0ZS0xNSwxMiBMNi4yNSwxMiBDOC4wNCwxMiA5LjUsMTAuNTQgOS41LDguNzUgQzkuNSw3LjQ1IDguNzMsNi4zNCA3LjYzLDUuODIgQzguNDYsNS4yNCA5LDQuMzggOSwzLjUgWiBNNSwyIEM1LjgyOTk5OTkyLDIgNi41LDIuNjcgNi41LDMuNSBDNi41LDQuMzMgNS44Mjk5OTk5Miw1IDUsNSBMMyw1IEwzLDIgTDUsMiBaIE0zLDEwIEwzLDcgTDUuNSw3IEM2LjMyOTk5OTkyLDcgNyw3LjY3IDcsOC41IEM3LDkuMzMgNi4zMjk5OTk5MiwxMCA1LjUsMTAgTDMsMTAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAzKSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4LDApIj48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iNCAwIDQgMiA2LjU4IDIgMi45MiAxMCAwIDEwIDAgMTIgOCAxMiA4IDEwIDUuNDIgMTAgOS4wOCAyIDEyIDIgMTIgMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAzKSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI2LDApIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNiwxMiBDOC43NiwxMiAxMSw5Ljc2IDExLDcgTDExLDAgTDksMCBMOSw3IEM5LDguNzUwMjk5MTYgNy40OTkxMjgwNywxMCA2LDEwIEM0LjUwMDg3MTkzLDEwIDMsOC43NTgzNzQ4NiAzLDcgTDMsMCBMMSwwIEwxLDcgQzEsOS43NiAzLjI0LDEyIDYsMTIgWiBNMCwxMyBMMCwxNSBMMTIsMTUgTDEyLDEzIEwwLDEzIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NCwwKSI+PHBhdGggZmlsbD0iIzAxMDEwMSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi44ODc1LDMuMDYgQzIuODg3NSwyLjYwMjUgMi45ODUsMi4xODYyNSAzLjE4Mzc1LDEuODA3NSBDMy4zODI1LDEuNDI4NzUgMy42NiwxLjEwNjI1IDQuMDIsMC44NCBDNC4zOCwwLjU3Mzc1IDQuODAzNzUsMC4zNjc1IDUuMjk4NzUsMC4yMjEyNSBDNS43OTM3NSwwLjA3NSA2LjMzMzc1LDAgNi45MjYyNSwwIEM3LjUzMzc1LDAgOC4wODUsMC4wODI1IDguNTgsMC4yNTEyNSBDOS4wNzUsMC40MiA5LjQ5ODc1LDAuNjUyNSA5Ljg1MTI1LDAuOTU2MjUgQzEwLjIwMzc1LDEuMjU2MjUgMTAuNDczNzUsMS42MTI1IDEwLjY2NSwyLjAyODc1IEMxMC44NTYyNSwyLjQ0MTI1IDEwLjk1LDIuODk1IDEwLjk1LDMuMzg2MjUgTDguNjkyNSwzLjM4NjI1IEM4LjY5MjUsMy4xNTc1IDguNjU1LDIuOTQzNzUgOC41ODM3NSwyLjc0ODc1IEM4LjUxMjUsMi41NSA4LjQsMi4zODEyNSA4LjI1LDIuMjQyNSBDOC4xLDIuMTAzNzUgNy45MTI1LDEuOTkxMjUgNy42ODc1LDEuOTE2MjUgQzcuNDYyNSwxLjgzNzUgNy4xOTYyNSwxLjggNi44ODg3NSwxLjggQzYuNTkyNSwxLjggNi4zMzc1LDEuODMzNzUgNi4xMTYyNSwxLjg5NzUgQzUuODk4NzUsMS45NjEyNSA1LjcxODc1LDIuMDUxMjUgNS41NzYyNSwyLjE2NzUgQzUuNDMzNzUsMi4yODM3NSA1LjMyNSwyLjQxODc1IDUuMjUzNzUsMi41NzI1IEM1LjE4MjUsMi43MjYyNSA1LjE0NSwyLjg5NSA1LjE0NSwzLjA2NzUgQzUuMTQ1LDMuNDI3NSA1LjMyODc1LDMuNzMxMjUgNS42OTYyNSwzLjk3NSBDNS43MTc4MDIwMywzLjk4OTA4MDY2IDUuNzM5NDIwMTIsNC4wMDMxMTcyOCA1Ljc2MTE4MzU3LDQuMDE3MzMzMTUgQzYuMDIzNDI5MjMsNC4xODg2MzE4NSA2LjUsNC41IDcsNSBMNCw1IEM0LDUgMy4yMTM3NSw0LjM3NjI1IDMuMTc2MjUsNC4zMDg3NSBDMi45ODUsMy45NTI1IDIuODg3NSwzLjUzNjI1IDIuODg3NSwzLjA2IFogTTE0LDYgTDAsNiBMMCw4IEw3LjIxODc1LDggQzcuMzUzNzUsOC4wNTI1IDcuNTE4NzUsOC4xMDUgNy42MzEyNSw4LjE1Mzc1IEM3LjkwODc1LDguMjc3NSA4LjEyNjI1LDguNDA4NzUgOC4yODM3NSw4LjUzNjI1IEM4LjQ0MTI1LDguNjY3NSA4LjU0NjI1LDguODEgOC42MDI1LDguOTYgQzguNjU4NzUsOS4xMTM3NSA4LjY4NSw5LjI4NjI1IDguNjg1LDkuNDczNzUgQzguNjg1LDkuNjUgOC42NTEyNSw5LjgxNSA4LjU4Mzc1LDkuOTY1IEM4LjUxNjI1LDEwLjExODc1IDguNDExMjUsMTAuMjUgOC4yNzI1LDEwLjM1ODc1IEM4LjEzMzc1LDEwLjQ2NzUgNy45NTM3NSwxMC41NTM3NSA3Ljc0LDEwLjYxNzUgQzcuNTIyNSwxMC42ODEyNSA3LjI3MTI1LDEwLjcxMTI1IDYuOTc4NzUsMTAuNzExMjUgQzYuNjUyNSwxMC43MTEyNSA2LjM1NjI1LDEwLjY3NzUgNi4wOSwxMC42MTM3NSBDNS44MjM3NSwxMC41NSA1LjU5ODc1LDEwLjQ0NSA1LjQxMTI1LDEwLjMwMjUgQzUuMjIzNzUsMTAuMTYgNS4wNzc1LDkuOTcyNSA0Ljk3MjUsOS43NDM3NSBDNC44Njc1LDkuNTE1IDQuNzgxMjUsOS4xNyA0Ljc4MTI1LDkgTDIuNTUsOSBDMi41NSw5LjI1MjUgMi42MSw5LjY4NzUgMi43MjYyNSwxMC4wMjUgQzIuODQyNSwxMC4zNjI1IDMuMDA3NSwxMC42NjYyNSAzLjIxMzc1LDEwLjkzMjUgQzMuNDIsMTEuMTk4NzUgMy42Njc1LDExLjQyNzUgMy45NDg3NSwxMS42MjI1IEM0LjIzLDExLjgxNzUgNC41MzM3NSwxMS45ODI1IDQuODYzNzUsMTIuMTEgQzUuMTkzNzUsMTIuMjQxMjUgNS41MzUsMTIuMzM4NzUgNS44OTg3NSwxMi4zOTg3NSBDNi4yNTg3NSwxMi40NjI1IDYuNjIyNSwxMi40OTI1IDYuOTgyNSwxMi40OTI1IEM3LjU4MjUsMTIuNDkyNSA4LjEzLDEyLjQyNSA4LjYxNzUsMTIuMjg2MjUgQzkuMTA1LDEyLjE0NzUgOS41MjUsMTEuOTQ4NzUgOS44NywxMS42OTM3NSBDMTAuMjE1LDExLjQzNSAxMC40ODEyNSwxMS4xMiAxMC42NzI1LDEwLjc0MTI1IEMxMC44NjM3NSwxMC4zNjI1IDEwLjk1Mzc1LDkuOTM1IDEwLjk1Mzc1LDkuNDU1IEMxMC45NTM3NSw5LjAwNSAxMC44NzUsOC42IDEwLjcyMTI1LDguMjQzNzUgQzEwLjY4Mzc1LDguMTU3NSAxMC42NDI1LDguMDc1IDEwLjU5Mzc1LDcuOTkyNSBMMTQsOCBMMTQsNiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDMpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjIsMCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcsMCBMNSwwIEwwLjUsMTIgTDIuNSwxMiBMMy42Miw5IEw4LjM3LDkgTDkuNDksMTIgTDExLjQ5LDEyIEw3LDAgTDcsMCBaIE00LjM4LDcgTDYsMi42NyBMNy42Miw3IEw0LjM4LDcgTDQuMzgsNyBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDEpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsMCkiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTQuNSw4Ljg3IEMxNC41LDguODcgMTMsMTAuNDkgMTMsMTEuNDkgQzEzLDEyLjMyIDEzLjY3LDEyLjk5IDE0LjUsMTIuOTkgQzE1LjMzLDEyLjk5IDE2LDEyLjMyIDE2LDExLjQ5IEMxNiwxMC41IDE0LjUsOC44NyAxNC41LDguODcgTDE0LjUsOC44NyBaIE0xMi43MSw2Ljc5IEw1LjkxLDAgTDQuODUsMS4wNiBMNi40NCwyLjY1IEwyLjI5LDYuNzkgQzEuOSw3LjE4IDEuOSw3LjgxIDIuMjksOC4yIEw2Ljc5LDEyLjcgQzYuOTksMTIuOSA3LjI0LDEzIDcuNSwxMyBDNy43NiwxMyA4LjAxLDEyLjkgOC4yMSwxMi43MSBMMTIuNzEsOC4yMSBDMTMuMSw3LjgyIDEzLjEsNy4xOCAxMi43MSw2Ljc5IEwxMi43MSw2Ljc5IFogTTQuMjEsNyBMNy41LDMuNzEgTDEwLjc5LDcgTDQuMjEsNyBMNC4yMSw3IFoiLz4KICA8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTgsMCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMsNiBMMSw2IEwxLDIgTDgsMiBMOCw0IEwzLDQgTDMsNiBaIE0xMCw0IEwxMCwyIEwxNywyIEwxNyw2IEwxNSw2IEwxNSw0IEwxMCw0IFogTTEwLDE0IEwxNSwxNCBMMTUsMTIgTDE3LDEyIEwxNywxNiBMMTAsMTYgTDEwLDE0IFogTTEsMTIgTDMsMTIgTDMsMTQgTDgsMTQgTDgsMTYgTDEsMTYgTDEsMTIgWiBNMSw4IEw1LDggTDUsNiBMOCw5IEw1LDEyIEw1LDEwIEwxLDEwIEwxLDggWiBNMTAsOSBMMTMsNiBMMTMsOCBMMTcsOCBMMTcsMTAgTDEzLDEwIEwxMywxMiBMMTAsOSBaIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTYsMCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAsMTQgTDEwLDE0IEwxMCwxMiBMMCwxMiBMMCwxNCBaIE0xMCw0IEwwLDQgTDAsNiBMMTAsNiBMMTAsNCBaIE0wLDAgTDAsMiBMMTQsMiBMMTQsMCBMMCwwIFogTTAsMTAgTDE0LDEwIEwxNCw4IEwwLDggTDAsMTAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM0LDApIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLDEyIEwyLDE0IEwxMiwxNCBMMTIsMTIgTDIsMTIgWiBNMiw0IEwyLDYgTDEyLDYgTDEyLDQgTDIsNCBaIE0wLDEwIEwxNCwxMCBMMTQsOCBMMCw4IEwwLDEwIFogTTAsMCBMMCwyIEwxNCwyIEwxNCwwIEwwLDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxOCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQsMTQgTDE0LDE0IEwxNCwxMiBMNCwxMiBMNCwxNCBaIE0wLDEwIEwxNCwxMCBMMTQsOCBMMCw4IEwwLDEwIFogTTAsMCBMMCwyIEwxNCwyIEwxNCwwIEwwLDAgWiBNNCw2IEwxNCw2IEwxNCw0IEw0LDQgTDQsNiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCwxOCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAsMCBMMCwyIEwxMiwyIEwxMiwwIEwwLDAgTDAsMCBaIE0yLjUsNyBMNSw3IEw1LDE0IEw3LDE0IEw3LDcgTDkuNSw3IEw2LDMuNSBMMi41LDcgTDIuNSw3IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2LDE4KSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS41LDMgTDcsMyBMNywwIEw1LDAgTDUsMyBMMi41LDMgTDYsNi41IEw5LjUsMyBMOS41LDMgWiBNMCw4IEwwLDEwIEwxMiwxMCBMMTIsOCBMMCw4IEwwLDggWiBNMi41LDE1IEw1LDE1IEw1LDE4IEw3LDE4IEw3LDE1IEw5LjUsMTUgTDYsMTEuNSBMMi41LDE1IEwyLjUsMTUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMykiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LDE4KSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS41LDcgTDcsNyBMNywwIEw1LDAgTDUsNyBMMi41LDcgTDYsMTAuNSBMOS41LDcgTDkuNSw3IFogTTAsMTIgTDAsMTQgTDEyLDE0IEwxMiwxMiBMMCwxMiBMMCwxMiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDIpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MiwxOCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LDAgTDAsMCBMMCwyIEwxNCwyIEwxNCwwIFogTTAsMTIgTDQsMTIgTDQsMTAgTDAsMTAgTDAsMTIgWiBNMTEuNSw1IEwwLDUgTDAsNyBMMTEuNzUsNyBDMTIuNTgsNyAxMy4yNSw3LjY3IDEzLjI1LDguNSBDMTMuMjUsOS4zMyAxMi41OCwxMCAxMS43NSwxMCBMOSwxMCBMOSw4IEw2LDExIEw5LDE0IEw5LDEyIEwxMS41LDEyIEMxMy40MywxMiAxNSwxMC40MyAxNSw4LjUgQzE1LDYuNTcgMTMuNDMsNSAxMS41LDUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAzKSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAsMTgpIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLDAgTDAsMSBMNiw3IEw2LDEyIEw4LDExIEw4LDcgTDE0LDEgTDE0LDAgTDAsMCBaIE00LDMgTDEwLDMgTDcsNiBMNCwzIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOCwxOCkiPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSIxMCAwIDAgMCAwIDEuOCA1LjUgNyAwIDEyLjIgMCAxNCAxMCAxNCAxMCAxMiAzLjEgMTIgOCA3IDMuMSAyIDEwIDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNiwxOCkiPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSIwIDAgNCA0IDggMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA3KSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LDE4KSI+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9Ii0yIDIgMiA2IDYgMiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDggMykiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MiwxOCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEuOSw0IEMxLjksMi44NCAyLjg0LDEuOSA0LDEuOSBMOCwxLjkgTDgsMCBMNCwwIEMxLjc5LDAgMCwxLjc5IDAsNCBDMCw2LjIxIDEuNzksOCA0LDggTDgsOCBMOCw2LjEgTDQsNi4xIEMyLjg0LDYuMSAxLjksNS4xNiAxLjksNCBMMS45LDQgWiBNMTQsMCBMMTAsMCBMMTAsMS45IEwxNCwxLjkgQzE1LjE2LDEuOSAxNi4xLDIuODQgMTYuMSw0IEMxNi4xLDUuMTYgMTUuMTYsNi4xIDE0LDYuMSBMMTAsNi4xIEwxMCw4IEwxNCw4IEMxNi4yMSw4IDE4LDYuMjEgMTgsNCBDMTgsMS43OSAxNi4yMSwwIDE0LDAgTDE0LDAgWiBNNiw1IEwxMiw1IEwxMiwzIEw2LDMgTDYsNSBMNiw1IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNSkiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4MCwxOCkiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LDAgQzE1LjU1LDAgMTYsMC40NSAxNiwxIEwxNiwxNSBDMTYsMTUuNTUgMTUuNTUsMTYgMTUsMTYgTDEsMTYgQzAuNDUsMTYgMCwxNS41NSAwLDE1IEwwLDEgQzAsMC40NSAwLjQ1LDAgMSwwIEwxNSwwIFogTTIsMiBMMiwxNCBMMTQsMTQgTDE0LDIgTDIsMiBaIE02LDEyIEw0LDEyIEw0LDcgTDYsNyBMNiwxMiBMNiwxMiBaIE05LDEyIEw3LDEyIEw3LDQgTDksNCBMOSwxMiBMOSwxMiBaIE0xMiwxMiBMMTAsMTIgTDEwLDggTDEyLDggTDEyLDEyIEwxMiwxMiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTgsMTgpIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMS41IDMuNUgxNi41VjE1LjVIMS41eiIvPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTYgOEg3VjE1SDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRDhEOEQ4IiBkPSJNMiA0SDE2VjdIMnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0yIDdIMTZWOEgyek0yIDExSDE2VjEySDJ6Ii8+CiAgPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE2LDE4KSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMiwwLjUgQzEuMTcsMC41IDAuNSwxLjE3IDAuNSwyIEMwLjUsMi44MyAxLjE3LDMuNSAyLDMuNSBDMi44MywzLjUgMy41LDIuODMgMy41LDIgQzMuNSwxLjE3IDIuODMsMC41IDIsMC41IEwyLDAuNSBaIE0xMiwwLjUgQzExLjE3LDAuNSAxMC41LDEuMTcgMTAuNSwyIEMxMC41LDIuODMgMTEuMTcsMy41IDEyLDMuNSBDMTIuODMsMy41IDEzLjUsMi44MyAxMy41LDIgQzEzLjUsMS4xNyAxMi44MywwLjUgMTIsMC41IEwxMiwwLjUgWiBNNywwLjUgQzYuMTcsMC41IDUuNSwxLjE3IDUuNSwyIEM1LjUsMi44MyA2LjE3LDMuNSA3LDMuNSBDNy44MywzLjUgOC41LDIuODMgOC41LDIgQzguNSwxLjE3IDcuODMsMC41IDcsMC41IEw3LDAuNSBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDcpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzQsMTgpIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LDQgTDYsMCBMNCwwIEw0LDQgTDAsNCBMMCw2IEw0LDYgTDQsMTAgTDYsMTAgTDYsNiBMMTAsNiBMMTAsNCBMNiw0IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzYpIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLDAgTDAsMTQgTDE0LDE0IEwxNCwwIEwwLDAgTDAsMCBaIE02LDEyIEwyLDEyIEwyLDggTDYsOCBMNiwxMiBMNiwxMiBaIE02LDYgTDIsNiBMMiwyIEw2LDIgTDYsNiBMNiw2IFogTTEyLDEyIEw4LDEyIEw4LDggTDEyLDggTDEyLDEyIEwxMiwxMiBaIE0xMiw2IEw4LDYgTDgsMiBMMTIsMiBMMTIsNiBMMTIsNiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCwzNikiPgogIDxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSI+CiAgICA8cGF0aCBkPSJNMCwxNCBMMiwxNCBMMiwxMiBMMCwxMiBMMCwxNCBMMCwxNCBaIE0yLDMgTDAsMyBMMCw1IEwyLDUgTDIsMyBMMiwzIFogTTMsMTQgTDUsMTQgTDUsMTIgTDMsMTIgTDMsMTQgTDMsMTQgWiBNMTEsMCBMOSwwIEw5LDIgTDExLDIgTDExLDAgTDExLDAgWiBNMiwwIEwwLDAgTDAsMiBMMiwyIEwyLDAgTDIsMCBaIE01LDAgTDMsMCBMMywyIEw1LDIgTDUsMCBMNSwwIFogTTAsMTEgTDIsMTEgTDIsOSBMMCw5IEwwLDExIEwwLDExIFogTTksMTQgTDExLDE0IEwxMSwxMiBMOSwxMiBMOSwxNCBMOSwxNCBaIE0xMiwwIEwxMiwyIEwxNCwyIEwxNCwwIEwxMiwwIEwxMiwwIFogTTEyLDUgTDE0LDUgTDE0LDMgTDEyLDMgTDEyLDUgTDEyLDUgWiBNMTIsMTQgTDE0LDE0IEwxNCwxMiBMMTIsMTIgTDEyLDE0IEwxMiwxNCBaIE0xMiwxMSBMMTQsMTEgTDE0LDkgTDEyLDkgTDEyLDExIEwxMiwxMSBaIiBvcGFjaXR5PSIuNTQiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iOCAwIDYgMCA2IDYgMCA2IDAgOCA2IDggNiAxNCA4IDE0IDggOCAxNCA4IDE0IDYgOCA2Ii8+CiAgPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYsMzYpIj4KICA8ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiPgogICAgPHBhdGggZD0iTTYsMTQgTDgsMTQgTDgsMTIgTDYsMTIgTDYsMTQgTDYsMTQgWiBNMywyIEw1LDIgTDUsMCBMMywwIEwzLDIgTDMsMiBaIE02LDExIEw4LDExIEw4LDkgTDYsOSBMNiwxMSBMNiwxMSBaIE0zLDE0IEw1LDE0IEw1LDEyIEwzLDEyIEwzLDE0IEwzLDE0IFogTTAsNSBMMiw1IEwyLDMgTDAsMyBMMCw1IEwwLDUgWiBNMCwxNCBMMiwxNCBMMiwxMiBMMCwxMiBMMCwxNCBMMCwxNCBaIE0wLDIgTDIsMiBMMiwwIEwwLDAgTDAsMiBMMCwyIFogTTAsMTEgTDIsMTEgTDIsOSBMMCw5IEwwLDExIEwwLDExIFogTTEyLDExIEwxNCwxMSBMMTQsOSBMMTIsOSBMMTIsMTEgTDEyLDExIFogTTEyLDE0IEwxNCwxNCBMMTQsMTIgTDEyLDEyIEwxMiwxNCBMMTIsMTQgWiBNMTIsNSBMMTQsNSBMMTQsMyBMMTIsMyBMMTIsNSBMMTIsNSBaIE0xMiwwIEwxMiwyIEwxNCwyIEwxNCwwIEwxMiwwIEwxMiwwIFogTTYsMiBMOCwyIEw4LDAgTDYsMCBMNiwyIEw2LDIgWiBNOSwyIEwxMSwyIEwxMSwwIEw5LDAgTDksMiBMOSwyIFogTTYsNSBMOCw1IEw4LDMgTDYsMyBMNiw1IEw2LDUgWiBNOSwxNCBMMTEsMTQgTDExLDEyIEw5LDEyIEw5LDE0IEw5LDE0IFoiIG9wYWNpdHk9Ii41NCIvPgogICAgPHBvbHlnb24gcG9pbnRzPSIwIDggMTQgOCAxNCA2IDAgNiIvPgogIDwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LDM2KSI+CiAgPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIj4KICAgIDxwYXRoIGQ9Ik0zLDE0IEw1LDE0IEw1LDEyIEwzLDEyIEwzLDE0IEwzLDE0IFogTTAsNSBMMiw1IEwyLDMgTDAsMyBMMCw1IEwwLDUgWiBNMCwyIEwyLDIgTDIsMCBMMCwwIEwwLDIgTDAsMiBaIE0zLDggTDUsOCBMNSw2IEwzLDYgTDMsOCBMMyw4IFogTTMsMiBMNSwyIEw1LDAgTDMsMCBMMywyIEwzLDIgWiBNMCwxNCBMMiwxNCBMMiwxMiBMMCwxMiBMMCwxNCBMMCwxNCBaIE0wLDggTDIsOCBMMiw2IEwwLDYgTDAsOCBMMCw4IFogTTAsMTEgTDIsMTEgTDIsOSBMMCw5IEwwLDExIEwwLDExIFogTTEyLDAgTDEyLDIgTDE0LDIgTDE0LDAgTDEyLDAgTDEyLDAgWiBNMTIsOCBMMTQsOCBMMTQsNiBMMTIsNiBMMTIsOCBMMTIsOCBaIE0xMiwxNCBMMTQsMTQgTDE0LDEyIEwxMiwxMiBMMTIsMTQgTDEyLDE0IFogTTEyLDUgTDE0LDUgTDE0LDMgTDEyLDMgTDEyLDUgTDEyLDUgWiBNMTIsMTEgTDE0LDExIEwxNCw5IEwxMiw5IEwxMiwxMSBMMTIsMTEgWiBNOSwxNCBMMTEsMTQgTDExLDEyIEw5LDEyIEw5LDE0IEw5LDE0IFogTTksOCBMMTEsOCBMMTEsNiBMOSw2IEw5LDggTDksOCBaIE05LDIgTDExLDIgTDExLDAgTDksMCBMOSwyIEw5LDIgWiIgb3BhY2l0eT0iLjU0Ii8+CiAgICA8cG9seWdvbiBwb2ludHM9IjYgMTQgOCAxNCA4IDAgNiAwIi8+CiAgPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIsMzYpIj4KICA8ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiPgogICAgPHBhdGggZD0iTTgsMyBMNiwzIEw2LDUgTDgsNSBMOCwzIEw4LDMgWiBNMTEsNiBMOSw2IEw5LDggTDExLDggTDExLDYgTDExLDYgWiBNOCw2IEw2LDYgTDYsOCBMOCw4IEw4LDYgTDgsNiBaIE04LDkgTDYsOSBMNiwxMSBMOCwxMSBMOCw5IEw4LDkgWiBNNSw2IEwzLDYgTDMsOCBMNSw4IEw1LDYgTDUsNiBaIiBvcGFjaXR5PSIuNTQiLz4KICAgIDxwYXRoIGQ9Ik0wLDAgTDE0LDAgTDE0LDE0IEwwLDE0IEwwLDAgWiBNMTIsMTIgTDEyLDIgTDIsMiBMMiwxMiBMMTIsMTIgWiIvPgogIDwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkwLDM2KSI+CiAgPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIj4KICAgIDxwYXRoIGQ9Ik02LDggTDgsOCBMOCw2IEw2LDYgTDYsOCBMNiw4IFogTTYsNSBMOCw1IEw4LDMgTDYsMyBMNiw1IEw2LDUgWiBNNiwxMSBMOCwxMSBMOCw5IEw2LDkgTDYsMTEgTDYsMTEgWiBNNiwxNCBMOCwxNCBMOCwxMiBMNiwxMiBMNiwxNCBMNiwxNCBaIE0zLDE0IEw1LDE0IEw1LDEyIEwzLDEyIEwzLDE0IEwzLDE0IFogTTMsMiBMNSwyIEw1LDAgTDMsMCBMMywyIEwzLDIgWiBNMyw4IEw1LDggTDUsNiBMMyw2IEwzLDggTDMsOCBaIE0xMiwxNCBMMTQsMTQgTDE0LDEyIEwxMiwxMiBMMTIsMTQgTDEyLDE0IFogTTEyLDggTDE0LDggTDE0LDYgTDEyLDYgTDEyLDggTDEyLDggWiBNMTIsMTEgTDE0LDExIEwxNCw5IEwxMiw5IEwxMiwxMSBMMTIsMTEgWiBNMTIsNSBMMTQsNSBMMTQsMyBMMTIsMyBMMTIsNSBMMTIsNSBaIE02LDIgTDgsMiBMOCwwIEw2LDAgTDYsMiBMNiwyIFogTTEyLDAgTDEyLDIgTDE0LDIgTDE0LDAgTDEyLDAgTDEyLDAgWiBNOSwxNCBMMTEsMTQgTDExLDEyIEw5LDEyIEw5LDE0IEw5LDE0IFogTTksOCBMMTEsOCBMMTEsNiBMOSw2IEw5LDggTDksOCBaIE05LDIgTDExLDIgTDExLDAgTDksMCBMOSwyIEw5LDIgWiIgb3BhY2l0eT0iLjU0Ii8+CiAgICA8cG9seWdvbiBwb2ludHM9IjAgMTQgMiAxNCAyIDAgMCAwIi8+CiAgPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4LDM2KSI+CiAgPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIj4KICAgIDxwYXRoIGQ9Ik0zLDggTDUsOCBMNSw2IEwzLDYgTDMsOCBMMyw4IFogTTAsMTQgTDIsMTQgTDIsMTIgTDAsMTIgTDAsMTQgTDAsMTQgWiBNNiwxNCBMOCwxNCBMOCwxMiBMNiwxMiBMNiwxNCBMNiwxNCBaIE02LDExIEw4LDExIEw4LDkgTDYsOSBMNiwxMSBMNiwxMSBaIE0zLDE0IEw1LDE0IEw1LDEyIEwzLDEyIEwzLDE0IEwzLDE0IFogTTAsMTEgTDIsMTEgTDIsOSBMMCw5IEwwLDExIEwwLDExIFogTTYsOCBMOCw4IEw4LDYgTDYsNiBMNiw4IEw2LDggWiBNMCw1IEwyLDUgTDIsMyBMMCwzIEwwLDUgTDAsNSBaIE0wLDggTDIsOCBMMiw2IEwwLDYgTDAsOCBMMCw4IFogTTEyLDggTDE0LDggTDE0LDYgTDEyLDYgTDEyLDggTDEyLDggWiBNMTIsMTEgTDE0LDExIEwxNCw5IEwxMiw5IEwxMiwxMSBMMTIsMTEgWiBNMTIsNSBMMTQsNSBMMTQsMyBMMTIsMyBMMTIsNSBMMTIsNSBaIE02LDUgTDgsNSBMOCwzIEw2LDMgTDYsNSBMNiw1IFogTTksMTQgTDExLDE0IEwxMSwxMiBMOSwxMiBMOSwxNCBMOSwxNCBaIE05LDggTDExLDggTDExLDYgTDksNiBMOSw4IEw5LDggWiBNMTIsMTQgTDE0LDE0IEwxNCwxMiBMMTIsMTIgTDEyLDE0IEwxMiwxNCBaIiBvcGFjaXR5PSIuNTQiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwIDAgMiAxNCAyIDE0IDAiLz4KICA8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjYsMzYpIj4KICA8ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiPgogICAgPHBhdGggZD0iTTAsMiBMMiwyIEwyLDAgTDAsMCBMMCwyIEwwLDIgWiBNMywyIEw1LDIgTDUsMCBMMywwIEwzLDIgTDMsMiBaIE0zLDggTDUsOCBMNSw2IEwzLDYgTDMsOCBMMyw4IFogTTMsMTQgTDUsMTQgTDUsMTIgTDMsMTIgTDMsMTQgTDMsMTQgWiBNMCw1IEwyLDUgTDIsMyBMMCwzIEwwLDUgTDAsNSBaIE0wLDggTDIsOCBMMiw2IEwwLDYgTDAsOCBMMCw4IFogTTAsMTQgTDIsMTQgTDIsMTIgTDAsMTIgTDAsMTQgTDAsMTQgWiBNMCwxMSBMMiwxMSBMMiw5IEwwLDkgTDAsMTEgTDAsMTEgWiBNOSw4IEwxMSw4IEwxMSw2IEw5LDYgTDksOCBMOSw4IFogTTYsMTQgTDgsMTQgTDgsMTIgTDYsMTIgTDYsMTQgTDYsMTQgWiBNOSwxNCBMMTEsMTQgTDExLDEyIEw5LDEyIEw5LDE0IEw5LDE0IFogTTYsMiBMOCwyIEw4LDAgTDYsMCBMNiwyIEw2LDIgWiBNOSwyIEwxMSwyIEwxMSwwIEw5LDAgTDksMiBMOSwyIFogTTYsMTEgTDgsMTEgTDgsOSBMNiw5IEw2LDExIEw2LDExIFogTTYsNSBMOCw1IEw4LDMgTDYsMyBMNiw1IEw2LDUgWiBNNiw4IEw4LDggTDgsNiBMNiw2IEw2LDggTDYsOCBaIiBvcGFjaXR5PSIuNTQiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMTIgMCAxMiAxNCAxNCAxNCAxNCAwIi8+CiAgPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LDM2KSI+CiAgPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIj4KICAgIDxwYXRoIGQ9Ik01LDAgTDMsMCBMMywyIEw1LDIgTDUsMCBMNSwwIFogTTgsNiBMNiw2IEw2LDggTDgsOCBMOCw2IEw4LDYgWiBNOCw5IEw2LDkgTDYsMTEgTDgsMTEgTDgsOSBMOCw5IFogTTExLDYgTDksNiBMOSw4IEwxMSw4IEwxMSw2IEwxMSw2IFogTTUsNiBMMyw2IEwzLDggTDUsOCBMNSw2IEw1LDYgWiBNMTEsMCBMOSwwIEw5LDIgTDExLDIgTDExLDAgTDExLDAgWiBNOCwzIEw2LDMgTDYsNSBMOCw1IEw4LDMgTDgsMyBaIE04LDAgTDYsMCBMNiwyIEw4LDIgTDgsMCBMOCwwIFogTTIsOSBMMCw5IEwwLDExIEwyLDExIEwyLDkgTDIsOSBaIE0xMiwxMSBMMTQsMTEgTDE0LDkgTDEyLDkgTDEyLDExIEwxMiwxMSBaIE0xMiw1IEwxNCw1IEwxNCwzIEwxMiwzIEwxMiw1IEwxMiw1IFogTTEyLDggTDE0LDggTDE0LDYgTDEyLDYgTDEyLDggTDEyLDggWiBNMTIsMCBMMTIsMiBMMTQsMiBMMTQsMCBMMTIsMCBMMTIsMCBaIE0yLDAgTDAsMCBMMCwyIEwyLDIgTDIsMCBMMiwwIFogTTIsMyBMMCwzIEwwLDUgTDIsNSBMMiwzIEwyLDMgWiBNMiw2IEwwLDYgTDAsOCBMMiw4IEwyLDYgTDIsNiBaIiBvcGFjaXR5PSIuNTQiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMCAxNCAxNCAxNCAxNCAxMiAwIDEyIi8+CiAgPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYyLDM2KSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNiwxNCBMOCwxNCBMOCwxMiBMNiwxMiBMNiwxNCBMNiwxNCBaIE0zLDggTDUsOCBMNSw2IEwzLDYgTDMsOCBMMyw4IFogTTMsMiBMNSwyIEw1LDAgTDMsMCBMMywyIEwzLDIgWiBNNiwxMSBMOCwxMSBMOCw5IEw2LDkgTDYsMTEgTDYsMTEgWiBNMywxNCBMNSwxNCBMNSwxMiBMMywxMiBMMywxNCBMMywxNCBaIE0wLDUgTDIsNSBMMiwzIEwwLDMgTDAsNSBMMCw1IFogTTAsMTQgTDIsMTQgTDIsMTIgTDAsMTIgTDAsMTQgTDAsMTQgWiBNMCwyIEwyLDIgTDIsMCBMMCwwIEwwLDIgTDAsMiBaIE0wLDggTDIsOCBMMiw2IEwwLDYgTDAsOCBMMCw4IFogTTYsOCBMOCw4IEw4LDYgTDYsNiBMNiw4IEw2LDggWiBNMCwxMSBMMiwxMSBMMiw5IEwwLDkgTDAsMTEgTDAsMTEgWiBNMTIsMTEgTDE0LDExIEwxNCw5IEwxMiw5IEwxMiwxMSBMMTIsMTEgWiBNMTIsMTQgTDE0LDE0IEwxNCwxMiBMMTIsMTIgTDEyLDE0IEwxMiwxNCBaIE0xMiw4IEwxNCw4IEwxNCw2IEwxMiw2IEwxMiw4IEwxMiw4IFogTTEyLDUgTDE0LDUgTDE0LDMgTDEyLDMgTDEyLDUgTDEyLDUgWiBNMTIsMCBMMTIsMiBMMTQsMiBMMTQsMCBMMTIsMCBMMTIsMCBaIE02LDIgTDgsMiBMOCwwIEw2LDAgTDYsMiBMNiwyIFogTTksMiBMMTEsMiBMMTEsMCBMOSwwIEw5LDIgTDksMiBaIE02LDUgTDgsNSBMOCwzIEw2LDMgTDYsNSBMNiw1IFogTTksMTQgTDExLDE0IEwxMSwxMiBMOSwxMiBMOSwxNCBMOSwxNCBaIE05LDggTDExLDggTDExLDYgTDksNiBMOSw4IEw5LDggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIgb3BhY2l0eT0iLjU0Ii8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsMzYpIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUsMy42MiBMMCwxMC4xMiBMMCwxMyBMMi44OCwxMyBMOS4zOCw2LjUgTDYuNSwzLjYyIFogTTExLjg1LDQuMDIgQzEyLjA1LDMuODIgMTIuMDUsMy41MSAxMS44NSwzLjMxIEw5LjY4LDEuMTQgQzkuNDgsMC45NCA5LjE3LDAuOTQgOC45NywxLjE0IEw3LjYyLDIuNSBMMTAuNSw1LjM4IEwxMS44NSw0LjAyIEwxMS44NSw0LjAyIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTgsMzYpIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLDAgTDE0LDAgTDE0LDIgTDAsMiBMMCwwIFogTTAsNCBMNiw0IEw2LDYgTDAsNiBMMCw0IFogTTAsOCBMMiw4IEwyLDEwIEwwLDEwIEwwLDggWiBNOCw0IEwxNCw0IEwxNCw2IEw4LDYgTDgsNCBaIE00LDggTDYsOCBMNiwxMCBMNCwxMCBMNCw4IFogTTgsOCBMMTAsOCBMMTAsMTAgTDgsMTAgTDgsOCBaIE0xMiw4IEwxNCw4IEwxNCwxMCBMMTIsMTAgTDEyLDggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiA0KSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE2LDM2KSI+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9Ii0yIDIgMiA2IDYgMiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMyAxMCkiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNCwzNikiPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSI3LjUzIDEuNTMgNi40NyAuNDcgNCAyLjk0IDEuNTMgLjQ3IC40NyAxLjUzIDIuOTQgNCAuNDcgNi40NyAxLjUzIDcuNTMgNCA1LjA2IDYuNDcgNy41MyA3LjUzIDYuNDcgNS4wNiA0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1IDUpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDU0KSI+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjguNDQgLjQ0IDUgMy44OCAxLjU2IC40NCAuNSAxLjUgNSA2IDkuNSAxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNikiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LDU0KSI+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjUgMCAuNSA0LjUgMS41NiA1LjU2IDUgMi4xMiA4LjQ0IDUuNTYgOS41IDQuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCA2KSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYsNTQpIj48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iOC40NCAuNDQgNSAzLjg4IDEuNTYgLjQ0IC41IDEuNSA1IDYgOS41IDEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNCA4KSIvPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQsNTQpIj48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iNSAwIC41IDQuNSAxLjU2IDUuNTYgNSAyLjEyIDguNDQgNS41NiA5LjUgNC41IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA0IDgpIi8+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Miw1NCkiPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSIxMiA1IDMuMTI1IDUgNy4wNiAxLjA2IDYgMCAwIDYgNiAxMiA3LjA2IDEwLjk0IDMuMTI1IDcgMTIgNyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUgMykiLz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkwLDU0KSI+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjEyIDUgMy4xMjUgNSA3LjA2IDEuMDYgNiAwIDAgNiA2IDEyIDcuMDYgMTAuOTQgMy4xMjUgNyAxMiA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDMpIi8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/canvas/draw.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/canvas/draw.js ***!
  \***************************************************************************************/
/*! exports provided: default, Draw, DrawBox, thinLineWidth, npx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawBox", function() { return DrawBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thinLineWidth", function() { return thinLineWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "npx", function() { return npx; });
/* global window */
function dpr() {
  return window.devicePixelRatio || 1;
}

function thinLineWidth() {
  return dpr() - 0.5;
}

function npx(px) {
  return parseInt(px * dpr(), 10);
}

function npxLine(px) {
  const n = npx(px);
  return n > 0 ? n - 0.5 : 0.5;
}

class DrawBox {
  constructor(x, y, w, h, padding = 0) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.padding = padding;
    this.bgcolor = '#ffffff';
    // border: [width, style, color]
    this.borderTop = null;
    this.borderRight = null;
    this.borderBottom = null;
    this.borderLeft = null;
  }

  setBorders({
    top, bottom, left, right,
  }) {
    if (top) this.borderTop = top;
    if (right) this.borderRight = right;
    if (bottom) this.borderBottom = bottom;
    if (left) this.borderLeft = left;
  }

  innerWidth() {
    return this.width - (this.padding * 2);
  }

  innerHeight() {
    return this.height - (this.padding * 2);
  }

  textx(align) {
    const { width, padding } = this;
    let { x } = this;
    if (align === 'left') {
      x += padding;
    } else if (align === 'center') {
      x += width / 2;
    } else if (align === 'right') {
      x += width - padding;
    }
    return x;
  }

  texty(align, fontSize, hoffset) {
    const { height, padding } = this;
    let { y } = this;
    if (align === 'top') {
      y += padding;
    } else if (align === 'middle') {
      y = y + height / 2 - hoffset;
      // y = y1;
      // const y2 = y + padding + fontSize / 2 + 1;
      // if (y1 < y2) y = y2;
      // else y = y1;
    } else if (align === 'bottom') {
      y += height - hoffset * 2 - padding;
    }
    return y;
  }

  topxys() {
    const { x, y, width } = this;
    return [[x, y], [x + width, y]];
  }

  rightxys() {
    const {
      x, y, width, height,
    } = this;
    return [[x + width, y], [x + width, y + height]];
  }

  bottomxys() {
    const {
      x, y, width, height,
    } = this;
    return [[x, y + height], [x + width, y + height]];
  }

  leftxys() {
    const {
      x, y, height,
    } = this;
    return [[x, y], [x, y + height]];
  }
}

function drawFontLine(type, tx, ty, align, valign, blheight, blwidth) {
  const floffset = { x: 0, y: 0 };
  if (type === 'underline') {
    if (valign === 'bottom') {
      floffset.y = 0;
    } else if (valign === 'top') {
      floffset.y = -(blheight + 2);
    } else {
      floffset.y = -blheight / 2;
    }
  } else if (type === 'strike') {
    if (valign === 'bottom') {
      floffset.y = blheight / 2;
    } else if (valign === 'top') {
      floffset.y = -((blheight / 2) + 2);
    }
  }

  if (align === 'center') {
    floffset.x = blwidth / 2;
  } else if (align === 'right') {
    floffset.x = blwidth;
  }
  this.line(
    [tx - floffset.x, ty - floffset.y],
    [tx - floffset.x + blwidth, ty - floffset.y],
  );
}

class Draw {
  constructor(el, width, height) {
    this.el = el;
    this.ctx = el.getContext('2d');
    this.resize(width, height);
    this.ctx.scale(dpr(), dpr());
  }

  resize(width, height) {
    // console.log('dpr:', dpr);
    this.el.style.width = `${width}px`;
    this.el.style.height = `${height}px`;
    this.el.width = npx(width);
    this.el.height = npx(height);
  }

  clear() {
    const { width, height } = this.el;
    this.ctx.clearRect(0, 0, width, height);
    return this;
  }

  attr(options) {
    Object.assign(this.ctx, options);
    return this;
  }

  save() {
    this.ctx.save();
    this.ctx.beginPath();
    return this;
  }

  restore() {
    this.ctx.restore();
    return this;
  }

  beginPath() {
    this.ctx.beginPath();
    return this;
  }

  translate(x, y) {
    this.ctx.translate(npx(x), npx(y));
    return this;
  }

  clearRect(x, y, w, h) {
    this.ctx.clearRect(x, y, w, h);
    return this;
  }

  fillRect(x, y, w, h) {
    this.ctx.fillRect(npx(x) - 0.5, npx(y) - 0.5, npx(w), npx(h));
    return this;
  }

  fillText(text, x, y) {
    this.ctx.fillText(text, npx(x), npx(y));
    return this;
  }

  /*
    txt: render text
    box: DrawBox
    attr: {
      align: left | center | right
      valign: top | middle | bottom
      color: '#333333',
      strike: false,
      font: {
        name: 'Arial',
        size: 14,
        bold: false,
        italic: false,
      }
    }
    textWrap: text wrapping
  */
  text(txt, box, attr = {}, textWrap = true) {
    const { ctx } = this;
    const {
      align, valign, font, color, strike, underline,
    } = attr;
    const tx = box.textx(align);
    ctx.save();
    ctx.beginPath();
    this.attr({
      textAlign: align,
      textBaseline: valign,
      font: `${font.italic ? 'italic' : ''} ${font.bold ? 'bold' : ''} ${npx(font.size)}px ${font.name}`,
      fillStyle: color,
      strokeStyle: color,
    });
    const txtWidth = ctx.measureText(txt).width;
    let hoffset = 0;
    if (textWrap) {
      const n = Math.ceil(txtWidth / box.innerWidth());
      hoffset = ((n - 1) * font.size) / 2;
    }
    let ty = box.texty(valign, font.size, hoffset);
    // console.log('tx: ', tx, ', ty:', ty);
    if (textWrap && txtWidth > box.innerWidth()) {
      const textLine = { len: 0, start: 0 };
      for (let i = 0; i < txt.length; i += 1) {
        if (textLine.len >= box.innerWidth()) {
          this.fillText(txt.substring(textLine.start, i), tx, ty);
          if (strike) {
            drawFontLine.call(this, 'strike', tx, ty, align, valign, font.size, textLine.len);
          }
          if (underline) {
            drawFontLine.call(this, 'underline', tx, ty, align, valign, font.size, textLine.len);
          }
          ty += font.size + 2;
          textLine.len = 0;
          textLine.start = i;
        }
        textLine.len += ctx.measureText(txt[i]).width;
      }
      if (textLine.len > 0) {
        this.fillText(txt.substring(textLine.start), tx, ty);
        if (strike) {
          drawFontLine.call(this, 'strike', tx, ty, align, valign, font.size, textLine.len);
        }
        if (underline) {
          drawFontLine.call(this, 'underline', tx, ty, align, valign, font.size, textLine.len);
        }
      }
    } else {
      this.fillText(txt, tx, ty);
      if (strike) {
        drawFontLine.call(this, 'striket', tx, ty, align, valign, font.size, txtWidth);
      }
      if (underline) {
        drawFontLine.call(this, 'underline', tx, ty, align, valign, font.size, txtWidth);
      }
    }
    ctx.restore();
    return this;
  }

  border(style, color) {
    const { ctx } = this;
    ctx.lineWidth = thinLineWidth;
    ctx.strokeStyle = color;
    // console.log('style:', style);
    if (style === 'medium') {
      ctx.lineWidth = npx(2) - 0.5;
    } else if (style === 'thick') {
      ctx.lineWidth = npx(3);
    } else if (style === 'dashed') {
      ctx.setLineDash([npx(3), npx(2)]);
    } else if (style === 'dotted') {
      ctx.setLineDash([npx(1), npx(1)]);
    } else if (style === 'double') {
      ctx.setLineDash([npx(2), 0]);
    }
    return this;
  }

  line(...xys) {
    const { ctx } = this;
    if (xys.length > 1) {
      const [x, y] = xys[0];
      ctx.moveTo(npxLine(x), npxLine(y));
      for (let i = 1; i < xys.length; i += 1) {
        const [x1, y1] = xys[i];
        ctx.lineTo(npxLine(x1), npxLine(y1));
      }
      ctx.stroke();
    }
    return this;
  }

  strokeBorders(box) {
    const { ctx } = this;
    ctx.save();
    ctx.beginPath();
    // border
    const {
      borderTop, borderRight, borderBottom, borderLeft,
    } = box;
    if (borderTop) {
      this.border(...borderTop);
      // console.log('box.topxys:', box.topxys());
      this.line(...box.topxys());
    }
    if (borderRight) {
      this.border(...borderRight);
      this.line(...box.rightxys());
    }
    if (borderBottom) {
      this.border(...borderBottom);
      this.line(...box.bottomxys());
    }
    if (borderLeft) {
      this.border(...borderLeft);
      this.line(...box.leftxys());
    }
    ctx.restore();
  }

  dropdown(box) {
    const { ctx } = this;
    const {
      x, y, width, height,
    } = box;
    const sx = x + width - 15;
    const sy = y + height - 15;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(npx(sx), npx(sy));
    ctx.lineTo(npx(sx + 8), npx(sy));
    ctx.lineTo(npx(sx + 4), npx(sy + 6));
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 0, 0, .45)';
    ctx.fill();
    ctx.restore();
  }

  error(box) {
    const { ctx } = this;
    const { x, y, width } = box;
    const sx = x + width - 1;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(npx(sx - 8), npx(y - 1));
    ctx.lineTo(npx(sx), npx(y - 1));
    ctx.lineTo(npx(sx), npx(y + 8));
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 0, 0, .65)';
    ctx.fill();
    ctx.restore();
  }

  rect(box, dtextcb) {
    const { ctx } = this;
    const {
      x, y, width, height, bgcolor,
    } = box;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = bgcolor || '#fff';
    ctx.rect(npxLine(x + 1), npxLine(y + 1), npx(width - 2), npx(height - 2));
    ctx.clip();
    ctx.fill();
    dtextcb();
    ctx.restore();
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/border_palette.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/border_palette.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BorderPalette; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _dropdown_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown_color */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_color.js");
/* harmony import */ var _dropdown_linetype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown_linetype */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_linetype.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");






function buildTable(...trs) {
  return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('table', '').child(
    Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tbody', '').children(...trs),
  );
}

function buildTd(iconName) {
  return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('td', '').child(
    Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_4__["cssPrefix"]}-border-palette-cell`).child(
      new _icon__WEBPACK_IMPORTED_MODULE_1__["default"](`border-${iconName}`),
    ).on('click', () => {
      this.mode = iconName;
      const { mode, style, color } = this;
      this.change({ mode, style, color });
    }),
  );
}

class BorderPalette {
  constructor() {
    this.color = '#000';
    this.style = 'thin';
    this.mode = 'all';
    this.change = () => {};
    this.ddColor = new _dropdown_color__WEBPACK_IMPORTED_MODULE_2__["default"]('line-color', this.color);
    this.ddColor.change = (color) => {
      this.color = color;
    };
    this.ddType = new _dropdown_linetype__WEBPACK_IMPORTED_MODULE_3__["default"](this.style);
    this.ddType.change = ([s]) => {
      this.style = s;
    };
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_4__["cssPrefix"]}-border-palette`);
    const table = buildTable(
      Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', '').children(
        Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('td', `${_config__WEBPACK_IMPORTED_MODULE_4__["cssPrefix"]}-border-palette-left`).child(
          buildTable(
            Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', '').children(
              ...['all', 'inside', 'horizontal', 'vertical', 'outside'].map(it => buildTd.call(this, it)),
            ),
            Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', '').children(
              ...['left', 'top', 'right', 'bottom', 'none'].map(it => buildTd.call(this, it)),
            ),
          ),
        ),
        Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('td', `${_config__WEBPACK_IMPORTED_MODULE_4__["cssPrefix"]}-border-palette-right`).children(
          Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_4__["cssPrefix"]}-toolbar-btn`).child(this.ddColor.el),
          Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_4__["cssPrefix"]}-toolbar-btn`).child(this.ddType.el),
        ),
      ),
    );
    this.el.child(table);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/button.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/button.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");




class Button extends _element__WEBPACK_IMPORTED_MODULE_0__["Element"] {
  // type: primary
  constructor(title, type = '') {
    super('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-button ${type}`);
    this.child(Object(_locale_locale__WEBPACK_IMPORTED_MODULE_2__["t"])(`button.${title}`));
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/calendar.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/calendar.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");




function addMonth(date, step) {
  date.setMonth(date.getMonth() + step);
}

function weekday(date, index) {
  const d = new Date(date);
  d.setDate(index - date.getDay() + 1);
  return d;
}

function monthDays(year, month, cdate) {
  // the first day of month
  const startDate = new Date(year, month, 1, 23, 59, 59);
  const datess = [[], [], [], [], [], []];
  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 7; j += 1) {
      const index = i * 7 + j;
      const d = weekday(startDate, index);
      const disabled = d.getMonth() !== month;
      // console.log('d:', d, ', cdate:', cdate);
      const active = d.getMonth() === cdate.getMonth() && d.getDate() === cdate.getDate();
      datess[i][j] = { d, disabled, active };
    }
  }
  return datess;
}

class Calendar {
  constructor(value) {
    this.value = value;
    this.cvalue = new Date(value);

    this.headerLeftEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'calendar-header-left');
    this.bodyEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tbody', '');
    this.buildAll();
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'x-spreadsheet-calendar')
      .children(
        Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'calendar-header').children(
          this.headerLeftEl,
          Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'calendar-header-right').children(
            Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('a', 'calendar-prev')
              .on('click.stop', () => this.prev())
              .child(new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]('chevron-left')),
            Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('a', 'calendar-next')
              .on('click.stop', () => this.next())
              .child(new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]('chevron-right')),
          ),
        ),
        Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('table', 'calendar-body').children(
          Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('thead', '').child(
            Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', '').children(
              ...Object(_locale_locale__WEBPACK_IMPORTED_MODULE_2__["t"])('calendar.weeks').map(week => Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('th', 'cell').child(week)),
            ),
          ),
          this.bodyEl,
        ),
      );
    this.selectChange = () => {};
  }

  setValue(value) {
    this.value = value;
    this.cvalue = new Date(value);
    this.buildAll();
  }

  prev() {
    const { value } = this;
    addMonth(value, -1);
    this.buildAll();
  }

  next() {
    const { value } = this;
    addMonth(value, 1);
    this.buildAll();
  }

  buildAll() {
    this.buildHeaderLeft();
    this.buildBody();
  }

  buildHeaderLeft() {
    const { value } = this;
    this.headerLeftEl.html(`${Object(_locale_locale__WEBPACK_IMPORTED_MODULE_2__["t"])('calendar.months')[value.getMonth()]} ${value.getFullYear()}`);
  }

  buildBody() {
    const { value, cvalue, bodyEl } = this;
    const mDays = monthDays(value.getFullYear(), value.getMonth(), cvalue);
    const trs = mDays.map((it) => {
      const tds = it.map((it1) => {
        let cls = 'cell';
        if (it1.disabled) cls += ' disabled';
        if (it1.active) cls += ' active';
        return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('td', '').child(
          Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', cls)
            .on('click.stop', () => {
              this.selectChange(it1.d);
            })
            .child(it1.d.getDate().toString()),
        );
      });
      return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', '').children(...tds);
    });
    bodyEl.html('').children(...trs);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/color_palette.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/color_palette.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPalette; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");



const themeColorPlaceHolders = ['#ffffff', '#000100', '#e7e5e6', '#445569', '#5b9cd6', '#ed7d31', '#a5a5a5', '#ffc001', '#4371c6', '#71ae47'];

const themeColors = [
  ['#f2f2f2', '#7f7f7f', '#d0cecf', '#d5dce4', '#deeaf6', '#fce5d5', '#ededed', '#fff2cd', '#d9e2f3', '#e3efd9'],
  ['#d8d8d8', '#595959', '#afabac', '#adb8ca', '#bdd7ee', '#f7ccac', '#dbdbdb', '#ffe59a', '#b3c6e7', '#c5e0b3'],
  ['#bfbfbf', '#3f3f3f', '#756f6f', '#8596b0', '#9cc2e6', '#f4b184', '#c9c9c9', '#fed964', '#8eaada', '#a7d08c'],
  ['#a5a5a5', '#262626', '#3a3839', '#333f4f', '#2e75b5', '#c45a10', '#7b7b7b', '#bf8e01', '#2f5596', '#538136'],
  ['#7f7f7f', '#0c0c0c', '#171516', '#222a35', '#1f4e7a', '#843c0a', '#525252', '#7e6000', '#203864', '#365624'],
];

const standardColors = ['#c00000', '#fe0000', '#fdc101', '#ffff01', '#93d051', '#00b04e', '#01b0f1', '#0170c1', '#012060', '#7030a0'];

function buildTd(bgcolor) {
  return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('td', '').child(
    Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-color-palette-cell`)
      .on('click.stop', () => this.change(bgcolor))
      .css('background-color', bgcolor),
  );
}

class ColorPalette {
  constructor() {
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-color-palette`);
    this.change = () => {};
    const table = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('table', '').children(
      Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tbody', '').children(
        Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-theme-color-placeholders`).children(
          ...themeColorPlaceHolders.map(color => buildTd.call(this, color)),
        ),
        ...themeColors.map(it => Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-theme-colors`).children(
          ...it.map(color => buildTd.call(this, color)),
        )),
        Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('tr', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-standard-colors`).children(
          ...standardColors.map(color => buildTd.call(this, color)),
        ),
      ),
    );
    this.el.child(table);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/contextmenu.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/contextmenu.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextMenu; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");





const menuItems = [
  { key: 'copy', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.copy'), label: 'Ctrl+C' },
  { key: 'cut', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.cut'), label: 'Ctrl+X' },
  { key: 'paste', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.paste'), label: 'Ctrl+V' },
  { key: 'paste-value', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.pasteValue'), label: 'Ctrl+Shift+V' },
  { key: 'paste-format', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.pasteFormat'), label: 'Ctrl+Alt+V' },
  { key: 'divider' },
  { key: 'insert-row', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.insertRow') },
  { key: 'insert-column', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.insertColumn') },
  { key: 'divider' },
  { key: 'delete-row', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.deleteRow') },
  { key: 'delete-column', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.deleteColumn') },
  { key: 'delete-cell-text', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.deleteCellText') },
  { key: 'divider' },
  { key: 'validation', title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["tf"])('contextmenu.validation') },
];

function buildMenuItem(item) {
  if (item.key === 'divider') {
    return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-item divider`);
  }
  return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-item`)
    .on('click', () => {
      this.itemClick(item.key);
      this.hide();
    })
    .children(
      item.title(),
      Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'label').child(item.label || ''),
    );
}

function buildMenu() {
  return menuItems.map(it => buildMenuItem.call(this, it));
}

class ContextMenu {
  constructor(viewFn, isHide = false) {
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-contextmenu`)
      .children(...buildMenu.call(this))
      .hide();
    this.viewFn = viewFn;
    this.itemClick = () => {};
    this.isHide = isHide;
  }

  hide() {
    const { el } = this;
    el.hide();
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["unbindClickoutside"])(el);
  }

  setPosition(x, y) {
    if (this.isHide) return;
    const { el } = this;
    const { height, width } = el.show().offset();
    const view = this.viewFn();
    let top = y;
    let left = x;
    if (view.height - y <= height) {
      top -= height;
    }
    if (view.width - x <= width) {
      left -= width;
    }
    el.offset({ left, top });
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["bindClickoutside"])(el);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/datepicker.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/datepicker.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Datepicker; });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/calendar.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");




class Datepicker {
  constructor() {
    this.calendar = new _calendar__WEBPACK_IMPORTED_MODULE_0__["default"](new Date());
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-datepicker`).child(
      this.calendar.el,
    ).hide();
  }

  setValue(date) {
    // console.log(':::::::', date, typeof date, date instanceof string);
    const { calendar } = this;
    if (typeof date === 'string') {
      // console.log(/^\d{4}-\d{1,2}-\d{1,2}$/.test(date));
      if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(date)) {
        calendar.setValue(new Date(date.replace(new RegExp('-', 'g'), '/')));
      }
    } else if (date instanceof Date) {
      calendar.setValue(date);
    }
    return this;
  }

  change(cb) {
    this.calendar.selectChange = (d) => {
      cb(d);
      this.hide();
    };
  }

  show() {
    this.el.show();
  }

  hide() {
    this.el.hide();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");




class Dropdown extends _element__WEBPACK_IMPORTED_MODULE_0__["Element"] {
  constructor(title, width, showArrow, placement, ...children) {
    super('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-dropdown ${placement}`);
    this.title = title;
    this.change = () => {};
    if (typeof title === 'string') {
      this.title = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-dropdown-title`).child(title);
    } else if (showArrow) {
      this.title.addClass('arrow-left');
    }
    this.contentEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-dropdown-content`)
      .children(...children)
      .css('width', width)
      .hide();

    this.headerEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-dropdown-header`);
    this.headerEl.on('click', () => {
      if (this.contentEl.css('display') !== 'block') {
        this.show();
      } else {
        this.hide();
      }
    }).children(
      this.title,
      showArrow ? Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-icon arrow-right`).child(
        Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-icon-img arrow-down`),
      ) : '',
    );
    this.children(this.headerEl, this.contentEl);
  }

  setTitle(title) {
    this.title.html(title);
    this.hide();
  }

  show() {
    const { contentEl } = this;
    contentEl.show();
    this.parent().active();
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["bindClickoutside"])(this.parent(), () => {
      this.hide();
    });
  }

  hide() {
    this.parent().active(false);
    this.contentEl.hide();
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["unbindClickoutside"])(this.parent());
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_align.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_align.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownAlign; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");





function buildItemWithIcon(iconName) {
  return Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-item`).child(new _icon__WEBPACK_IMPORTED_MODULE_2__["default"](iconName));
}

class DropdownAlign extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(aligns, align) {
    const icon = new _icon__WEBPACK_IMPORTED_MODULE_2__["default"](`align-${align}`);
    const naligns = aligns.map(it => buildItemWithIcon(`align-${it}`)
      .on('click', () => {
        this.setTitle(it);
        this.change(it);
      }));
    super(icon, 'auto', true, 'bottom-left', ...naligns);
  }

  setTitle(align) {
    this.title.setName(`align-${align}`);
    this.hide();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_border.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_border.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownBorder; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _border_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./border_palette */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/border_palette.js");




class DropdownBorder extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const icon = new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]('border-all');
    const borderPalette = new _border_palette__WEBPACK_IMPORTED_MODULE_2__["default"]();
    borderPalette.change = (v) => {
      this.change(v);
      this.hide();
    };
    super(icon, 'auto', false, 'bottom-left', borderPalette.el);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_color.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_color.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownColor; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _color_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_palette */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/color_palette.js");




class DropdownColor extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(iconName, color) {
    const icon = new _icon__WEBPACK_IMPORTED_MODULE_1__["default"](iconName)
      .css('height', '16px')
      .css('border-bottom', `3px solid ${color}`);
    const colorPalette = new _color_palette__WEBPACK_IMPORTED_MODULE_2__["default"]();
    colorPalette.change = (v) => {
      this.setTitle(v);
      this.change(v);
    };
    super(icon, 'auto', false, 'bottom-left', colorPalette.el);
  }

  setTitle(color) {
    this.title.css('border-color', color);
    this.hide();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_font.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_font.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownFont; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _core_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/font */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/font.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");





class DropdownFont extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const nfonts = _core_font__WEBPACK_IMPORTED_MODULE_2__["baseFonts"].map(it => Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-item`)
      .on('click', () => {
        this.setTitle(it.title);
        this.change(it);
      })
      .child(it.title));
    super(_core_font__WEBPACK_IMPORTED_MODULE_2__["baseFonts"][0].title, '160px', true, 'bottom-left', ...nfonts);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_fontsize.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_fontsize.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownFontSize; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _core_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/font */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/font.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");





class DropdownFontSize extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const nfontSizes = _core_font__WEBPACK_IMPORTED_MODULE_2__["fontSizes"].map(it => Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-item`)
      .on('click', () => {
        this.setTitle(`${it.pt}`);
        this.change(it);
      })
      .child(`${it.pt}`));
    super('10', '60px', true, 'bottom-left', ...nfontSizes);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_format.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_format.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownFormat; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _core_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/format */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/format.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");





class DropdownFormat extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    let nformats = _core_format__WEBPACK_IMPORTED_MODULE_2__["baseFormats"].slice(0);
    nformats.splice(2, 0, { key: 'divider' });
    nformats.splice(7, 0, { key: 'divider' });
    nformats = nformats.map((it) => {
      const item = Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-item`);
      if (it.key === 'divider') {
        item.addClass('divider');
      } else {
        item.child(it.title())
          .on('click', () => {
            this.setTitle(it.title());
            this.change(it);
          });
        if (it.label) item.child(Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', 'label').html(it.label));
      }
      return item;
    });
    super('Normal', '220px', true, 'bottom-left', ...nformats);
  }

  setTitle(key) {
    for (let i = 0; i < _core_format__WEBPACK_IMPORTED_MODULE_2__["baseFormats"].length; i += 1) {
      if (_core_format__WEBPACK_IMPORTED_MODULE_2__["baseFormats"][i].key === key) {
        this.title.html(_core_format__WEBPACK_IMPORTED_MODULE_2__["baseFormats"][i].title);
      }
    }
    this.hide();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_formula.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_formula.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownFormula; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _core_formula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/formula */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/formula.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");






class DropdownFormula extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const nformulas = _core_formula__WEBPACK_IMPORTED_MODULE_3__["baseFormulas"].map(it => Object(_element__WEBPACK_IMPORTED_MODULE_2__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_4__["cssPrefix"]}-item`)
      .on('click', () => {
        this.hide();
        this.change(it);
      })
      .child(it.key));
    super(new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]('formula'), '180px', true, 'bottom-left', ...nformulas);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_linetype.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_linetype.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownLineType; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");





const lineTypes = [
  ['thin', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" style="user-select: none;"></line></svg>'],
  ['medium', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" style="user-select: none;"><line x1="0" y1="1.0" x2="50" y2="1.0" stroke-width="2" stroke="black" style="user-select: none;"></line></svg>'],
  ['thick', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" style="user-select: none;"><line x1="0" y1="1.5" x2="50" y2="1.5" stroke-width="3" stroke="black" style="user-select: none;"></line></svg>'],
  ['dashed', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="2" style="user-select: none;"></line></svg>'],
  ['dotted', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="1" style="user-select: none;"></line></svg>'],
  // ['double', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" style="user-select: none;"></line><line x1="0" y1="2.5" x2="50" y2="2.5" stroke-width="1" stroke="black" style="user-select: none;"></line></svg>'],
];

class DropdownLineType extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(type) {
    const icon = new _icon__WEBPACK_IMPORTED_MODULE_2__["default"]('line-type');
    let beforei = 0;
    const lineTypeEls = lineTypes.map((it, iti) => Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-item state ${type === it[0] ? 'checked' : ''}`)
      .on('click', () => {
        lineTypeEls[beforei].toggle('checked');
        lineTypeEls[iti].toggle('checked');
        beforei = iti;
        this.hide();
        this.change(it);
      })
      .child(
        Object(_element__WEBPACK_IMPORTED_MODULE_1__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-line-type`).html(it[1]),
      ));

    super(icon, 'auto', false, 'bottom-left', ...lineTypeEls);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/editor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/editor.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _suggest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggest */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/suggest.js");
/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/datepicker.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
//* global window */




// import { mouseMoveUp } from '../event';

function resetTextareaSize() {
  if (!/^\s*$/.test(this.inputText)) {
    const {
      textlineEl, textEl, areaOffset,
    } = this;
    const tlineWidth = textlineEl.offset().width + 9;
    const maxWidth = this.viewFn().width - areaOffset.left - 9;
    // console.log('tlineWidth:', tlineWidth, ':', maxWidth);
    if (tlineWidth > areaOffset.width) {
      let twidth = tlineWidth;
      if (tlineWidth > maxWidth) {
        twidth = maxWidth;
        let h1 = parseInt(tlineWidth / maxWidth, 10);
        h1 += (tlineWidth % maxWidth) > 0 ? 1 : 0;
        h1 *= this.rowHeight;
        if (h1 > areaOffset.height) {
          textEl.css('height', `${h1}px`);
        }
      }
      textEl.css('width', `${twidth}px`);
    }
  }
}

function inputEventHandler(evt) {
  const v = evt.target.value;
  // console.log(evt, 'v:', v);
  const { suggest, textlineEl, validator } = this;
  this.inputText = v;
  if (validator) {
    if (validator.type === 'list') {
      suggest.search(v);
    } else {
      suggest.hide();
    }
  } else {
    const start = v.lastIndexOf('=');
    if (start !== -1) {
      suggest.search(v.substring(start + 1));
    } else {
      suggest.hide();
    }
  }
  textlineEl.html(v);
  resetTextareaSize.call(this);
  this.change('input', v);
}

function setTextareaRange(position) {
  const { el } = this.textEl;
  setTimeout(() => {
    el.focus();
    el.setSelectionRange(position, position);
  }, 0);
}

function setText(text, position) {
  const { textEl, textlineEl } = this;
  // firefox bug
  textEl.el.blur();

  textEl.val(text);
  textlineEl.html(text);
  setTextareaRange.call(this, position);
}

function suggestItemClick(it) {
  const { inputText, validator } = this;
  let position = 0;
  if (validator && validator.type === 'list') {
    this.inputText = it;
    position = this.inputText.length;
  } else {
    const start = inputText.lastIndexOf('=');
    const sit = inputText.substring(0, start + 1);
    let eit = inputText.substring(start + 1);
    if (eit.indexOf(')') !== -1) {
      eit = eit.substring(eit.indexOf(')'));
    } else {
      eit = '';
    }
    this.inputText = `${sit + it.key}(`;
    // console.log('inputText:', this.inputText);
    position = this.inputText.length;
    this.inputText += `)${eit}`;
  }
  setText.call(this, this.inputText, position);
}

function resetSuggestItems() {
  this.suggest.setItems(this.formulas);
}

function dateFormat(d) {
  let month = d.getMonth() + 1;
  let date = d.getDate();
  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${d.getFullYear()}-${month}-${date}`;
}

class Editor {
  constructor(formulas, viewFn, rowHeight) {
    this.viewFn = viewFn;
    this.rowHeight = rowHeight;
    this.formulas = formulas;
    this.suggest = new _suggest__WEBPACK_IMPORTED_MODULE_1__["default"](formulas, (it) => {
      suggestItemClick.call(this, it);
    });
    this.datepicker = new _datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.datepicker.change((d) => {
      // console.log('d:', d);
      this.setText(dateFormat(d));
      this.clear();
    });
    this.areaEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-editor-area`)
      .children(
        this.textEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('textarea', '')
          .on('input', evt => inputEventHandler.call(this, evt)),
        this.textlineEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'textline'),
        this.suggest.el,
        this.datepicker.el,
      )
      .on('mousemove.stop', () => {})
      .on('mousedown.stop', () => {});
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-editor`)
      .child(this.areaEl).hide();
    this.suggest.bindInputEvents(this.textEl);

    this.areaOffset = null;
    this.freeze = { w: 0, h: 0 };
    this.cell = null;
    this.inputText = '';
    this.change = () => {};
  }

  setFreezeLengths(width, height) {
    this.freeze.w = width;
    this.freeze.h = height;
  }

  clear() {
    // const { cell } = this;
    // const cellText = (cell && cell.text) || '';
    if (this.inputText !== '') {
      this.change('finished', this.inputText);
    }
    this.cell = null;
    this.areaOffset = null;
    this.inputText = '';
    this.el.hide();
    this.textEl.val('');
    this.textlineEl.html('');
    resetSuggestItems.call(this);
    this.datepicker.hide();
  }

  setOffset(offset, suggestPosition = 'top') {
    const {
      textEl, areaEl, suggest, freeze, el,
    } = this;
    if (offset) {
      this.areaOffset = offset;
      const {
        left, top, width, height, l, t,
      } = offset;
      // console.log('left:', left, ',top:', top, ', freeze:', freeze);
      const elOffset = { left: 0, top: 0 };
      // top left
      if (freeze.w > l && freeze.h > t) {
        //
      } else if (freeze.w < l && freeze.h < t) {
        elOffset.left = freeze.w;
        elOffset.top = freeze.h;
      } else if (freeze.w > l) {
        elOffset.top = freeze.h;
      } else if (freeze.h > t) {
        elOffset.left = freeze.w;
      }
      el.offset(elOffset);
      areaEl.offset({ left: left - elOffset.left - 0.8, top: top - elOffset.top - 0.8 });
      textEl.offset({ width: width - 9 + 0.8, height: height - 3 + 0.8 });
      const sOffset = { left: 0 };
      sOffset[suggestPosition] = height;
      suggest.setOffset(sOffset);
      suggest.hide();
    }
  }

  setCell(cell, validator) {
    // console.log('::', validator);
    const { el, datepicker, suggest } = this;
    el.show();
    this.cell = cell;
    const text = (cell && cell.text) || '';
    this.setText(text);

    this.validator = validator;
    if (validator) {
      const { type } = validator;
      if (type === 'date') {
        datepicker.show();
        if (!/^\s*$/.test(text)) {
          datepicker.setValue(text);
        }
      }
      if (type === 'list') {
        suggest.setItems(validator.values());
        suggest.search('');
      }
    }
  }

  setText(text) {
    this.inputText = text;
    // console.log('text>>:', text);
    setText.call(this, text, text.length);
    resetTextareaSize.call(this);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js ***!
  \*********************************************************************************************/
/*! exports provided: Element, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* global document */
/* global window */
class Element {
  constructor(tag, className = '') {
    if (typeof tag === 'string') {
      this.el = document.createElement(tag);
      this.el.className = className;
    } else {
      this.el = tag;
    }
    this.data = {};
  }

  data(key, value) {
    if (value !== undefined) {
      this.data[key] = value;
      return this;
    }
    return this.data[key];
  }

  on(eventNames, handler) {
    const [fen, ...oen] = eventNames.split('.');
    let eventName = fen;
    if (eventName === 'mousewheel' && /Firefox/i.test(window.navigator.userAgent)) {
      eventName = 'DOMMouseScroll';
    }
    this.el.addEventListener(eventName, (evt) => {
      handler(evt);
      for (let i = 0; i < oen.length; i += 1) {
        const k = oen[i];
        if (k === 'left' && evt.button !== 0) {
          return;
        }
        if (k === 'right' && evt.button !== 2) {
          return;
        }
        if (k === 'stop') {
          evt.stopPropagation();
        }
      }
    });
    return this;
  }

  offset(value) {
    if (value !== undefined) {
      Object.keys(value).forEach((k) => {
        this.css(k, `${value[k]}px`);
      });
      return this;
    }
    const {
      offsetTop, offsetLeft, offsetHeight, offsetWidth,
    } = this.el;
    return {
      top: offsetTop,
      left: offsetLeft,
      height: offsetHeight,
      width: offsetWidth,
    };
  }

  scroll(v) {
    const { el } = this;
    if (v !== undefined) {
      if (v.left !== undefined) {
        el.scrollLeft = v.left;
      }
      if (v.top !== undefined) {
        el.scrollTop = v.top;
      }
    }
    return { left: el.scrollLeft, top: el.scrollTop };
  }

  box() {
    return this.el.getBoundingClientRect();
  }

  parent() {
    return new Element(this.el.parentNode);
  }

  children(...eles) {
    if (arguments.length === 0) {
      return this.el.childNodes;
    }
    eles.forEach(ele => this.child(ele));
    return this;
  }

  /*
  first() {
    return this.el.firstChild;
  }

  last() {
    return this.el.lastChild;
  }

  remove(ele) {
    return this.el.removeChild(ele);
  }

  prepend(ele) {
    const { el } = this;
    if (el.children.length > 0) {
      el.insertBefore(ele, el.firstChild);
    } else {
      el.appendChild(ele);
    }
    return this;
  }

  prev() {
    return this.el.previousSibling;
  }

  next() {
    return this.el.nextSibling;
  }
  */

  child(arg) {
    let ele = arg;
    if (typeof arg === 'string') {
      ele = document.createTextNode(arg);
    } else if (arg instanceof Element) {
      ele = arg.el;
    }
    this.el.appendChild(ele);
    return this;
  }

  contains(ele) {
    return this.el.contains(ele);
  }

  className(v) {
    if (v !== undefined) {
      this.el.className = v;
      return this;
    }
    return this.el.className;
  }

  addClass(name) {
    this.el.classList.add(name);
    return this;
  }

  hasClass(name) {
    return this.el.classList.contains(name);
  }

  removeClass(name) {
    this.el.classList.remove(name);
    return this;
  }

  toggle(cls = 'active') {
    return this.toggleClass(cls);
  }

  toggleClass(name) {
    return this.el.classList.toggle(name);
  }

  active(flag = true, cls = 'active') {
    if (flag) this.addClass(cls);
    else this.removeClass(cls);
    return this;
  }

  checked(flag = true) {
    this.active(flag, 'checked');
    return this;
  }

  disabled(flag = true) {
    if (flag) this.addClass('disabled');
    else this.removeClass('disabled');
    return this;
  }

  // key, value
  // key
  // {k, v}...
  attr(key, value) {
    if (value !== undefined) {
      this.el.setAttribute(key, value);
    } else {
      if (typeof key === 'string') {
        return this.el.getAttribute(key);
      }
      Object.keys(key).forEach((k) => {
        this.el.setAttribute(k, key[k]);
      });
    }
    return this;
  }

  removeAttr(key) {
    this.el.removeAttribute(key);
    return this;
  }

  html(content) {
    if (content !== undefined) {
      this.el.innerHTML = content;
      return this;
    }
    return this.el.innerHTML;
  }

  val(v) {
    if (v !== undefined) {
      this.el.value = v;
      return this;
    }
    return this.el.value;
  }

  cssRemoveKeys(...keys) {
    keys.forEach(k => this.el.style.removeProperty(k));
    return this;
  }

  // css( propertyName )
  // css( propertyName, value )
  // css( properties )
  css(name, value) {
    if (value === undefined && typeof name !== 'string') {
      Object.keys(name).forEach((k) => {
        this.el.style[k] = name[k];
      });
      return this;
    }
    if (value !== undefined) {
      this.el.style[name] = value;
      return this;
    }
    return this.el.style[name];
  }

  computedStyle() {
    return window.getComputedStyle(this.el, null);
  }

  show() {
    this.css('display', 'block');
    return this;
  }

  hide() {
    this.css('display', 'none');
    return this;
  }
}

const h = (tag, className = '') => new Element(tag, className);




/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js ***!
  \*******************************************************************************************/
/*! exports provided: bind, unbind, unbindClickoutside, bindClickoutside, mouseMoveUp, bindTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return unbind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindClickoutside", function() { return unbindClickoutside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindClickoutside", function() { return bindClickoutside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseMoveUp", function() { return mouseMoveUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindTouch", function() { return bindTouch; });
/* global window */
function bind(target, name, fn) {
  target.addEventListener(name, fn);
}
function unbind(target, name, fn) {
  target.removeEventListener(name, fn);
}
function unbindClickoutside(el) {
  if (el.xclickoutside) {
    unbind(window.document.body, 'click', el.xclickoutside);
    delete el.xclickoutside;
  }
}

// the left mouse button: mousedown → mouseup → click
// the right mouse button: mousedown → contenxtmenu → mouseup
// the right mouse button in firefox(>65.0): mousedown → contenxtmenu → mouseup → click on window
function bindClickoutside(el, cb) {
  el.xclickoutside = (evt) => {
    // ignore double click
    // console.log('evt:', evt);
    if (evt.detail === 2 || el.contains(evt.target)) return;
    if (cb) cb(el);
    else {
      el.hide();
      unbindClickoutside(el);
    }
  };
  bind(window.document.body, 'click', el.xclickoutside);
}
function mouseMoveUp(target, movefunc, upfunc) {
  bind(target, 'mousemove', movefunc);
  const t = target;
  t.xEvtUp = (evt) => {
    // console.log('mouseup>>>');
    unbind(target, 'mousemove', movefunc);
    unbind(target, 'mouseup', target.xEvtUp);
    upfunc(evt);
  };
  bind(target, 'mouseup', target.xEvtUp);
}

function calTouchDirection(spanx, spany, evt, cb) {
  let direction = '';
  // console.log('spanx:', spanx, ', spany:', spany);
  if (Math.abs(spanx) > Math.abs(spany)) {
    // horizontal
    direction = spanx > 0 ? 'right' : 'left';
    cb(direction, spanx, evt);
  } else {
    // vertical
    direction = spany > 0 ? 'down' : 'up';
    cb(direction, spany, evt);
  }
}
// cb = (direction, distance) => {}
function bindTouch(target, { move, end }) {
  let startx = 0;
  let starty = 0;
  bind(target, 'touchstart', (evt) => {
    const { pageX, pageY } = evt.touches[0];
    startx = pageX;
    starty = pageY;
  });
  bind(target, 'touchmove', (evt) => {
    if (!move) return;
    const { pageX, pageY } = evt.changedTouches[0];
    const spanx = pageX - startx;
    const spany = pageY - starty;
    if (Math.abs(spanx) > 10 || Math.abs(spany) > 10) {
      // console.log('spanx:', spanx, ', spany:', spany);
      calTouchDirection(spanx, spany, evt, move);
      startx = pageX;
      starty = pageY;
    }
    evt.preventDefault();
  });
  bind(target, 'touchend', (evt) => {
    if (!end) return;
    const { pageX, pageY } = evt.changedTouches[0];
    const spanx = pageX - startx;
    const spany = pageY - starty;
    calTouchDirection(spanx, spany, evt, end);
  });
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_field.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_field.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormField; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");




const patterns = {
  number: /(^\d+$)|(^\d+(\.\d{0,4})?$)/,
  date: /^\d{4}-\d{1,2}-\d{1,2}$/,
};

// rule: { required: false, type, pattern: // }
class FormField {
  constructor(input, rule, label, labelWidth) {
    this.label = '';
    this.rule = rule;
    if (label) {
      this.label = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('label', 'label').css('width', `${labelWidth}px`).html(label);
    }
    this.tip = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'tip').child('tip').hide();
    this.input = input;
    this.input.vchange = () => this.validate();
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-form-field`)
      .children(this.label, input.el, this.tip);
  }

  isShow() {
    return this.el.css('display') !== 'none';
  }

  show() {
    this.el.show();
  }

  hide() {
    this.el.hide();
    return this;
  }

  val(v) {
    return this.input.val(v);
  }

  hint(hint) {
    this.input.hint(hint);
  }

  validate() {
    const {
      input, rule, tip, el,
    } = this;
    const v = input.val();
    if (rule.required) {
      if (/^\s*$/.test(v)) {
        tip.html(Object(_locale_locale__WEBPACK_IMPORTED_MODULE_2__["t"])('validation.required'));
        el.addClass('error');
        return false;
      }
    }
    if (rule.type || rule.pattern) {
      const pattern = rule.pattern || patterns[rule.type];
      if (!pattern.test(v)) {
        tip.html(Object(_locale_locale__WEBPACK_IMPORTED_MODULE_2__["t"])('validation.notMatch'));
        el.addClass('error');
        return false;
      }
    }
    el.removeClass('error');
    return true;
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_input.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_input.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormInput; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");



class FormInput {
  constructor(width, hint) {
    this.vchange = () => {};
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-form-input`);
    this.input = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('input', '').css('width', width)
      .on('input', evt => this.vchange(evt))
      .attr('placeholder', hint);
    this.el.child(this.input);
  }

  hint(v) {
    this.input.attr('placeholder', v);
  }

  val(v) {
    return this.input.val(v);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_select.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_select.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSelect; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _suggest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggest */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/suggest.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");




class FormSelect {
  constructor(key, items, width, getTitle = it => it, change = () => {}) {
    this.key = key;
    this.getTitle = getTitle;
    this.vchange = () => {};
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-form-select`);
    this.suggest = new _suggest__WEBPACK_IMPORTED_MODULE_1__["default"](items.map(it => ({ key: it, title: this.getTitle(it) })), (it) => {
      this.itemClick(it.key);
      change(it.key);
      this.vchange(it.key);
    }, width, this.el);
    this.el.children(
      this.itemEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'input-text').html(this.getTitle(key)),
      this.suggest.el,
    ).on('click', () => this.show());
  }

  show() {
    this.suggest.search('');
  }

  itemClick(it) {
    this.key = it;
    this.itemEl.html(this.getTitle(it));
  }

  val(v) {
    if (v !== undefined) {
      this.key = v;
      this.itemEl.html(this.getTitle(v));
      return this;
    }
    return this.key;
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");



class Icon extends _element__WEBPACK_IMPORTED_MODULE_0__["Element"] {
  constructor(name) {
    super('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-icon`);
    this.iconNameEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-icon-img ${name}`);
    this.child(this.iconNameEl);
  }

  setName(name) {
    this.iconNameEl.className(`${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-icon-img ${name}`);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/message.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/message.js ***!
  \*********************************************************************************************/
/*! exports provided: xtoast, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xtoast", function() { return xtoast; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* global document */




function xtoast(title, content) {
  const el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-toast`);
  const dimmer = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-dimmer active`);
  const remove = () => {
    document.body.removeChild(el.el);
    document.body.removeChild(dimmer.el);
  };

  el.children(
    Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-toast-header`).children(
      new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]('close').on('click.stop', () => remove()),
      title,
    ),
    Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-toast-content`).html(content),
  );
  document.body.appendChild(el.el);
  document.body.appendChild(dimmer.el);
  // set offset
  const { width, height } = el.box();
  const { clientHeight, clientWidth } = document.documentElement;
  el.offset({
    left: (clientWidth - width) / 2,
    top: (clientHeight - height) / 3,
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({});


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/modal.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/modal.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* global document */
/* global window */





class Modal {
  constructor(title, content, width = '600px') {
    this.title = title;
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-modal`).css('width', width).children(
      Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-modal-header`).children(
        new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]('close').on('click.stop', () => this.hide()),
        this.title,
      ),
      Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-modal-content`).children(...content),
    ).hide();
  }

  show() {
    // dimmer
    this.dimmer = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-dimmer active`);
    document.body.appendChild(this.dimmer.el);
    const { width, height } = this.el.show().box();
    const { clientHeight, clientWidth } = document.documentElement;
    this.el.offset({
      left: (clientWidth - width) / 2,
      top: (clientHeight - height) / 3,
    });
    window.xkeydownEsc = (evt) => {
      if (evt.keyCode === 27) {
        this.hide();
      }
    };
    Object(_event__WEBPACK_IMPORTED_MODULE_3__["bind"])(window, 'keydown', window.xkeydownEsc);
  }

  hide() {
    this.el.hide();
    document.body.removeChild(this.dimmer.el);
    Object(_event__WEBPACK_IMPORTED_MODULE_3__["unbind"])(window, 'keydown', window.xkeydownEsc);
    delete window.xkeydownEsc;
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/modal_validation.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/modal_validation.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalValidation; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/modal.js");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_input */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_input.js");
/* harmony import */ var _form_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_select */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_select.js");
/* harmony import */ var _form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form_field */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/form_field.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/button.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");









const fieldLabelWidth = 100;

class ModalValidation extends _modal__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const mf = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_select__WEBPACK_IMPORTED_MODULE_2__["default"]('cell',
        ['cell'], // cell|row|column
        '100%',
        it => Object(_locale_locale__WEBPACK_IMPORTED_MODULE_5__["t"])(`dataValidation.modeType.${it}`)),
      { required: true },
      `${Object(_locale_locale__WEBPACK_IMPORTED_MODULE_5__["t"])('dataValidation.range')}:`,
      fieldLabelWidth,
    );
    const rf = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_input__WEBPACK_IMPORTED_MODULE_1__["default"]('120px', 'E3 or E3:F12'),
      { required: true, pattern: /^([A-Z]{1,2}[1-9]\d*)(:[A-Z]{1,2}[1-9]\d*)?$/ },
    );
    const cf = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_select__WEBPACK_IMPORTED_MODULE_2__["default"]('list',
        ['list', 'number', 'date', 'phone', 'email'],
        '100%',
        it => Object(_locale_locale__WEBPACK_IMPORTED_MODULE_5__["t"])(`dataValidation.type.${it}`),
        it => this.criteriaSelected(it)),
      { required: true },
      `${Object(_locale_locale__WEBPACK_IMPORTED_MODULE_5__["t"])('dataValidation.criteria')}:`,
      fieldLabelWidth,
    );

    // operator
    const of = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_select__WEBPACK_IMPORTED_MODULE_2__["default"]('be',
        ['be', 'nbe', 'eq', 'neq', 'lt', 'lte', 'gt', 'gte'],
        '160px',
        it => Object(_locale_locale__WEBPACK_IMPORTED_MODULE_5__["t"])(`dataValidation.operator.${it}`),
        it => this.criteriaOperatorSelected(it)),
      { required: true },
    ).hide();
    // min, max
    const minvf = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_input__WEBPACK_IMPORTED_MODULE_1__["default"]('70px', '10'),
      { required: true },
    ).hide();
    const maxvf = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_input__WEBPACK_IMPORTED_MODULE_1__["default"]('70px', '100'),
      { required: true, type: 'number' },
    ).hide();
    // value
    const svf = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_input__WEBPACK_IMPORTED_MODULE_1__["default"]('120px', 'a,b,c'),
      { required: true },
    );
    const vf = new _form_field__WEBPACK_IMPORTED_MODULE_3__["default"](
      new _form_input__WEBPACK_IMPORTED_MODULE_1__["default"]('70px', '10'),
      { required: true, type: 'number' },
    ).hide();

    super(Object(_locale_locale__WEBPACK_IMPORTED_MODULE_5__["t"])('contextmenu.validation'), [
      Object(_element__WEBPACK_IMPORTED_MODULE_6__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_7__["cssPrefix"]}-form-fields`).children(
        mf.el,
        rf.el,
      ),
      Object(_element__WEBPACK_IMPORTED_MODULE_6__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_7__["cssPrefix"]}-form-fields`).children(
        cf.el,
        of.el,
        minvf.el,
        maxvf.el,
        vf.el,
        svf.el,
      ),
      Object(_element__WEBPACK_IMPORTED_MODULE_6__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_7__["cssPrefix"]}-buttons`).children(
        new _button__WEBPACK_IMPORTED_MODULE_4__["default"]('cancel').on('click', () => this.btnClick('cancel')),
        new _button__WEBPACK_IMPORTED_MODULE_4__["default"]('remove').on('click', () => this.btnClick('remove')),
        new _button__WEBPACK_IMPORTED_MODULE_4__["default"]('save', 'primary').on('click', () => this.btnClick('save')),
      ),
    ]);
    this.mf = mf;
    this.rf = rf;
    this.cf = cf;
    this.of = of;
    this.minvf = minvf;
    this.maxvf = maxvf;
    this.vf = vf;
    this.svf = svf;
    this.change = () => {};
  }

  showVf(it) {
    const hint = it === 'date' ? '2018-11-12' : '10';
    const { vf } = this;
    vf.input.hint(hint);
    vf.show();
  }

  criteriaSelected(it) {
    const {
      of, minvf, maxvf, vf, svf,
    } = this;
    if (it === 'date' || it === 'number') {
      of.show();
      minvf.rule.type = it;
      maxvf.rule.type = it;
      if (it === 'date') {
        minvf.hint('2018-11-12');
        maxvf.hint('2019-11-12');
      } else {
        minvf.hint('10');
        maxvf.hint('100');
      }
      minvf.show();
      maxvf.show();
      vf.hide();
      svf.hide();
    } else {
      if (it === 'list') {
        svf.show();
      } else {
        svf.hide();
      }
      vf.hide();
      of.hide();
      minvf.hide();
      maxvf.hide();
    }
  }

  criteriaOperatorSelected(it) {
    if (!it) return;
    const {
      minvf, maxvf, vf,
    } = this;
    if (it === 'be' || it === 'nbe') {
      minvf.show();
      maxvf.show();
      vf.hide();
    } else {
      const type = this.cf.val();
      vf.rule.type = type;
      if (type === 'date') {
        vf.hint('2018-11-12');
      } else {
        vf.hint('10');
      }
      vf.show();
      minvf.hide();
      maxvf.hide();
    }
  }

  btnClick(action) {
    if (action === 'cancel') {
      this.hide();
    } else if (action === 'remove') {
      this.change('remove');
      this.hide();
    } else if (action === 'save') {
      // validate
      const attrs = ['mf', 'rf', 'cf', 'of', 'svf', 'vf', 'minvf', 'maxvf'];
      for (let i = 0; i < attrs.length; i += 1) {
        const field = this[attrs[i]];
        // console.log('field:', field);
        if (field.isShow()) {
          // console.log('it:', it);
          if (!field.validate()) return;
        }
      }

      const mode = this.mf.val();
      const ref = this.rf.val();
      const type = this.cf.val();
      const operator = this.of.val();
      let value = this.svf.val();
      if (type === 'number' || type === 'date') {
        if (operator === 'be' || operator === 'nbe') {
          value = [this.minvf.val(), this.maxvf.val()];
        } else {
          value = this.vf.val();
        }
      }
      // console.log(mode, ref, type, operator, value);
      this.change('save',
        mode,
        ref,
        {
          type, operator, required: false, value,
        });
      this.hide();
    }
  }

  // validation: { mode, ref, validator }
  setValue(v) {
    if (v) {
      const {
        mf, rf, cf, of, svf, vf, minvf, maxvf,
      } = this;
      const {
        mode, ref, validator,
      } = v;
      const {
        type, operator, value,
      } = validator || { type: 'list' };
      mf.val(mode || 'cell');
      rf.val(ref);
      cf.val(type);
      of.val(operator);
      if (Array.isArray(value)) {
        minvf.val(value[0]);
        maxvf.val(value[1]);
      } else {
        svf.val(value || '');
        vf.val(value || '');
      }
      this.criteriaSelected(type);
      this.criteriaOperatorSelected(operator);
    }
    this.show();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/resizer.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/resizer.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resizer; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* global window */




class Resizer {
  constructor(vertical = false, minDistance) {
    this.moving = false;
    this.vertical = vertical;
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-resizer ${vertical ? 'vertical' : 'horizontal'}`).children(
      this.hoverEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-resizer-hover`)
        .on('mousedown.stop', evt => this.mousedownHandler(evt)),
      this.lineEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-resizer-line`).hide(),
    ).hide();
    // cell rect
    this.cRect = null;
    this.finishedFn = null;
    this.minDistance = minDistance;
  }

  // rect : {top, left, width, height}
  // line : {width, height}
  show(rect, line) {
    const {
      moving, vertical, hoverEl, lineEl, el,
    } = this;
    if (moving) return;
    this.cRect = rect;
    const {
      left, top, width, height,
    } = rect;
    el.offset({
      left: vertical ? left + width - 5 : left,
      top: vertical ? top : top + height - 5,
    }).show();
    hoverEl.offset({
      width: vertical ? 5 : width,
      height: vertical ? height : 5,
    });
    lineEl.offset({
      width: vertical ? 0 : line.width,
      height: vertical ? line.height : 0,
    });
  }

  hide() {
    this.el.offset({
      left: 0,
      top: 0,
    }).hide();
  }

  mousedownHandler(evt) {
    let startEvt = evt;
    const {
      el, lineEl, cRect, vertical, minDistance,
    } = this;
    let distance = vertical ? cRect.width : cRect.height;
    // console.log('distance:', distance);
    lineEl.show();
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["mouseMoveUp"])(window, (e) => {
      this.moving = true;
      if (startEvt !== null && e.buttons === 1) {
        // console.log('top:', top, ', left:', top, ', cRect:', cRect);
        if (vertical) {
          distance += e.movementX;
          if (distance > minDistance) {
            el.css('left', `${cRect.left + distance}px`);
          }
        } else {
          distance += e.movementY;
          if (distance > minDistance) {
            el.css('top', `${cRect.top + distance}px`);
          }
        }
        startEvt = e;
      }
    }, () => {
      startEvt = null;
      lineEl.hide();
      this.moving = false;
      this.hide();
      if (this.finishedFn) {
        if (distance < minDistance) distance = minDistance;
        this.finishedFn(cRect, distance);
      }
    });
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/scrollbar.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/scrollbar.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scrollbar; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");



class Scrollbar {
  constructor(vertical) {
    this.vertical = vertical;
    this.moveFn = null;
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-scrollbar ${vertical ? 'vertical' : 'horizontal'}`)
      .child(this.contentEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', ''))
      .on('mousemove.stop', () => {})
      .on('scroll.stop', (evt) => {
        const { scrollTop, scrollLeft } = evt.target;
        // console.log('scrollTop:', scrollTop);
        if (this.moveFn) {
          this.moveFn(this.vertical ? scrollTop : scrollLeft, evt);
        }
        // console.log('evt:::', evt);
      });
  }

  move(v) {
    this.el.scroll(v);
    return this;
  }

  scroll() {
    return this.el.scroll();
  }

  set(distance, contentDistance) {
    const d = distance - 1;
    // console.log('distance:', distance, ', contentDistance:', contentDistance);
    if (contentDistance > d) {
      const cssKey = this.vertical ? 'height' : 'width';
      // console.log('d:', d);
      this.el.css(cssKey, `${d - 15}px`).show();
      this.contentEl
        .css(this.vertical ? 'width' : 'height', '1px')
        .css(cssKey, `${contentDistance}px`);
    } else {
      this.el.hide();
    }
    return this;
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/selector.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/selector.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selector; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _core_cell_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/cell_range */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js");




const selectorHeightBorderWidth = 2 * 2 - 1;
let startZIndex = 10;

class SelectorElement {
  constructor() {
    this.cornerEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-selector-corner`);
    this.areaEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-selector-area`)
      .child(this.cornerEl).hide();
    this.clipboardEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-selector-clipboard`).hide();
    this.autofillEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-selector-autofill`).hide();
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-selector`)
      .css('z-index', `${startZIndex}`)
      .children(this.areaEl, this.clipboardEl, this.autofillEl)
      .hide();
    startZIndex += 1;
  }

  setOffset(v) {
    this.el.offset(v).show();
    return this;
  }

  hide() {
    this.el.hide();
    return this;
  }

  setAreaOffset(v) {
    const {
      left, top, width, height,
    } = v;
    this.areaEl.offset({
      width: width - selectorHeightBorderWidth + 0.8,
      height: height - selectorHeightBorderWidth + 0.8,
      left: left - 0.8,
      top: top - 0.8,
    }).show();
  }

  setClipboardOffset(v) {
    const {
      left, top, width, height,
    } = v;
    this.clipboardEl.offset({
      left,
      top,
      width: width - 5,
      height: height - 5,
    });
  }

  showAutofill(v) {
    const {
      left, top, width, height,
    } = v;
    this.autofillEl.offset({
      width: width - selectorHeightBorderWidth,
      height: height - selectorHeightBorderWidth,
      left,
      top,
    }).show();
  }

  hideAutofill() {
    this.autofillEl.hide();
  }

  showClipboard() {
    this.clipboardEl.show();
  }

  hideClipboard() {
    this.clipboardEl.hide();
  }
}

function calBRAreaOffset(offset) {
  const { data } = this;
  const {
    left, top, width, height, scroll, l, t,
  } = offset;
  const ftwidth = data.freezeTotalWidth();
  const ftheight = data.freezeTotalHeight();
  let left0 = left - ftwidth;
  if (ftwidth > l) left0 -= scroll.x;
  let top0 = top - ftheight;
  if (ftheight > t) top0 -= scroll.y;
  return {
    left: left0,
    top: top0,
    width,
    height,
  };
}

function calTAreaOffset(offset) {
  const { data } = this;
  const {
    left, width, height, l, t, scroll,
  } = offset;
  const ftwidth = data.freezeTotalWidth();
  let left0 = left - ftwidth;
  if (ftwidth > l) left0 -= scroll.x;
  return {
    left: left0, top: t, width, height,
  };
}

function calLAreaOffset(offset) {
  const { data } = this;
  const {
    top, width, height, l, t, scroll,
  } = offset;
  const ftheight = data.freezeTotalHeight();
  let top0 = top - ftheight;
  // console.log('ftheight:', ftheight, ', t:', t);
  if (ftheight > t) top0 -= scroll.y;
  return {
    left: l, top: top0, width, height,
  };
}

function setBRAreaOffset(offset) {
  const { br } = this;
  br.setAreaOffset(calBRAreaOffset.call(this, offset));
}

function setTLAreaOffset(offset) {
  const { tl } = this;
  tl.setAreaOffset(offset);
}

function setTAreaOffset(offset) {
  const { t } = this;
  t.setAreaOffset(calTAreaOffset.call(this, offset));
}

function setLAreaOffset(offset) {
  const { l } = this;
  l.setAreaOffset(calLAreaOffset.call(this, offset));
}

function setLClipboardOffset(offset) {
  const { l } = this;
  l.setClipboardOffset(calLAreaOffset.call(this, offset));
}

function setBRClipboardOffset(offset) {
  const { br } = this;
  br.setClipboardOffset(calBRAreaOffset.call(this, offset));
}

function setTLClipboardOffset(offset) {
  const { tl } = this;
  tl.setClipboardOffset(offset);
}

function setTClipboardOffset(offset) {
  const { t } = this;
  t.setClipboardOffset(calTAreaOffset.call(this, offset));
}

function setAllAreaOffset(offset) {
  setBRAreaOffset.call(this, offset);
  setTLAreaOffset.call(this, offset);
  setTAreaOffset.call(this, offset);
  setLAreaOffset.call(this, offset);
}

function setAllClipboardOffset(offset) {
  setBRClipboardOffset.call(this, offset);
  setTLClipboardOffset.call(this, offset);
  setTClipboardOffset.call(this, offset);
  setLClipboardOffset.call(this, offset);
}

class Selector {
  constructor(data) {
    this.data = data;
    this.br = new SelectorElement();
    this.t = new SelectorElement();
    this.l = new SelectorElement();
    this.tl = new SelectorElement();
    this.br.el.show();
    this.offset = null;
    this.areaOffset = null;
    this.indexes = null;
    this.range = null;
    this.arange = null;
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_1__["cssPrefix"]}-selectors`)
      .children(
        this.tl.el,
        this.t.el,
        this.l.el,
        this.br.el,
      ).hide();

    // for performance
    this.lastri = -1;
    this.lastci = -1;

    startZIndex += 1;
  }

  hide() {
    this.el.hide();
  }

  resetOffset() {
    const {
      data, tl, t, l, br,
    } = this;
    const freezeHeight = data.freezeTotalHeight();
    const freezeWidth = data.freezeTotalWidth();
    if (freezeHeight > 0 || freezeWidth > 0) {
      tl.setOffset({ width: freezeWidth, height: freezeHeight });
      t.setOffset({ left: freezeWidth, height: freezeHeight });
      l.setOffset({ top: freezeHeight, width: freezeWidth });
      br.setOffset({ left: freezeWidth, top: freezeHeight });
    } else {
      tl.hide();
      t.hide();
      l.hide();
      br.setOffset({ left: 0, top: 0 });
    }
  }

  resetAreaOffset() {
    // console.log('offset:', offset);
    const offset = this.data.getSelectedRect();
    const coffset = this.data.getClipboardRect();
    setAllAreaOffset.call(this, offset);
    setAllClipboardOffset.call(this, coffset);
    this.resetOffset();
  }

  resetBRTAreaOffset() {
    const offset = this.data.getSelectedRect();
    const coffset = this.data.getClipboardRect();
    setBRAreaOffset.call(this, offset);
    setTAreaOffset.call(this, offset);
    setBRClipboardOffset.call(this, coffset);
    setTClipboardOffset.call(this, coffset);
    this.resetOffset();
  }

  resetBRLAreaOffset() {
    const offset = this.data.getSelectedRect();
    const coffset = this.data.getClipboardRect();
    setBRAreaOffset.call(this, offset);
    setLAreaOffset.call(this, offset);
    setBRClipboardOffset.call(this, coffset);
    setLClipboardOffset.call(this, coffset);
    this.resetOffset();
  }

  set(ri, ci, indexesUpdated = true) {
    const { data } = this;
    const cellRange = data.calSelectedRangeByStart(ri, ci);
    const { sri, sci } = cellRange;
    if (indexesUpdated) {
      let [cri, cci] = [ri, ci];
      if (ri < 0) cri = 0;
      if (ci < 0) cci = 0;
      data.selector.setIndexes(cri, cci);
      this.indexes = [cri, cci];
    }

    this.moveIndexes = [sri, sci];
    // this.sIndexes = sIndexes;
    // this.eIndexes = eIndexes;
    this.range = cellRange;
    this.resetAreaOffset();
    this.el.show();
  }

  setEnd(ri, ci, moving = true) {
    const { data, lastri, lastci } = this;
    if (moving) {
      if (ri === lastri && ci === lastci) return;
      this.lastri = ri;
      this.lastci = ci;
    }
    this.range = data.calSelectedRangeByEnd(ri, ci);
    setAllAreaOffset.call(this, this.data.getSelectedRect());
  }

  reset() {
    // console.log('::::', this.data);
    const { eri, eci } = this.data.selector.range;
    this.setEnd(eri, eci);
  }

  showAutofill(ri, ci) {
    if (ri === -1 && ci === -1) return;
    // console.log('ri:', ri, ', ci:', ci);
    // const [sri, sci] = this.sIndexes;
    // const [eri, eci] = this.eIndexes;
    const {
      sri, sci, eri, eci,
    } = this.range;
    const [nri, nci] = [ri, ci];
    // const rn = eri - sri;
    // const cn = eci - sci;
    const srn = sri - ri;
    const scn = sci - ci;
    const ern = eri - ri;
    const ecn = eci - ci;
    if (scn > 0) {
      // left
      // console.log('left');
      this.arange = new _core_cell_range__WEBPACK_IMPORTED_MODULE_2__["CellRange"](sri, nci, eri, sci - 1);
      // this.saIndexes = [sri, nci];
      // this.eaIndexes = [eri, sci - 1];
      // data.calRangeIndexes2(
    } else if (srn > 0) {
      // top
      // console.log('top');
      // nri = sri;
      this.arange = new _core_cell_range__WEBPACK_IMPORTED_MODULE_2__["CellRange"](nri, sci, sri - 1, eci);
      // this.saIndexes = [nri, sci];
      // this.eaIndexes = [sri - 1, eci];
    } else if (ecn < 0) {
      // right
      // console.log('right');
      // nci = eci;
      this.arange = new _core_cell_range__WEBPACK_IMPORTED_MODULE_2__["CellRange"](sri, eci + 1, eri, nci);
      // this.saIndexes = [sri, eci + 1];
      // this.eaIndexes = [eri, nci];
    } else if (ern < 0) {
      // bottom
      // console.log('bottom');
      // nri = eri;
      this.arange = new _core_cell_range__WEBPACK_IMPORTED_MODULE_2__["CellRange"](eri + 1, sci, nri, eci);
      // this.saIndexes = [eri + 1, sci];
      // this.eaIndexes = [nri, eci];
    } else {
      // console.log('else:');
      this.arange = null;
      // this.saIndexes = null;
      // this.eaIndexes = null;
      return;
    }
    if (this.arange !== null) {
      // console.log(this.saIndexes, ':', this.eaIndexes);
      const offset = this.data.getRect(this.arange);
      offset.width += 2;
      offset.height += 2;
      const {
        br, l, t, tl,
      } = this;
      br.showAutofill(calBRAreaOffset.call(this, offset));
      l.showAutofill(calLAreaOffset.call(this, offset));
      t.showAutofill(calTAreaOffset.call(this, offset));
      tl.showAutofill(offset);
    }
  }

  hideAutofill() {
    ['br', 'l', 't', 'tl'].forEach((property) => {
      this[property].hideAutofill();
    });
  }

  showClipboard() {
    const coffset = this.data.getClipboardRect();
    setAllClipboardOffset.call(this, coffset);
    ['br', 'l', 't', 'tl'].forEach((property) => {
      this[property].showClipboard();
    });
  }

  hideClipboard() {
    ['br', 'l', 't', 'tl'].forEach((property) => {
      this[property].hideClipboard();
    });
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/sheet.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/sheet.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sheet; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* harmony import */ var _resizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizer */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/resizer.js");
/* harmony import */ var _scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollbar */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/scrollbar.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selector */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/selector.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/editor.js");
/* harmony import */ var _contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contextmenu */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/contextmenu.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/table.js");
/* harmony import */ var _toolbar_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbar/index */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/index.js");
/* harmony import */ var _modal_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal_validation */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/modal_validation.js");
/* harmony import */ var _sort_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort_filter */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/sort_filter.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/message.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _core_formula__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/formula */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/formula.js");
/* global window */















function scrollbarMove() {
  const {
    data, verticalScrollbar, horizontalScrollbar,
  } = this;
  const {
    l, t, left, top, width, height,
  } = data.getSelectedRect();
  const tableOffset = this.getTableOffset();
  // console.log(',l:', l, ', left:', left, ', tOffset.left:', tableOffset.width);
  if (Math.abs(left) + width > tableOffset.width) {
    horizontalScrollbar.move({ left: l + width - tableOffset.width });
  } else {
    const fsw = data.freezeTotalWidth();
    if (left < fsw) {
      horizontalScrollbar.move({ left: l - 1 - fsw });
    }
  }
  // console.log('top:', top, ', height:', height, ', tof.height:', tableOffset.height);
  if (Math.abs(top) + height > tableOffset.height) {
    verticalScrollbar.move({ top: t + height - tableOffset.height - 1 });
  } else {
    const fsh = data.freezeTotalHeight();
    if (top < fsh) {
      verticalScrollbar.move({ top: t - 1 - fsh });
    }
  }
}

function selectorSet(multiple, ri, ci, indexesUpdated = true, moving = false) {
  if (ri === -1 && ci === -1) return;
  // console.log(multiple, ', ri:', ri, ', ci:', ci);
  const {
    table, selector, toolbar,
  } = this;
  if (multiple) {
    selector.setEnd(ri, ci, moving);
  } else {
    selector.set(ri, ci, indexesUpdated);
  }
  toolbar.reset();
  table.render();
}

// multiple: boolean
// direction: left | right | up | down | row-first | row-last | col-first | col-last
function selectorMove(multiple, direction) {
  const {
    selector, data,
  } = this;
  const { rows, cols } = data;
  let [ri, ci] = selector.indexes;
  const { eri, eci } = selector.range;
  if (multiple) {
    [ri, ci] = selector.moveIndexes;
  }
  // console.log('selector.move:', ri, ci);
  if (direction === 'left') {
    if (ci > 0) ci -= 1;
  } else if (direction === 'right') {
    if (eci !== ci) ci = eci;
    if (ci < cols.len - 1) ci += 1;
  } else if (direction === 'up') {
    if (ri > 0) ri -= 1;
  } else if (direction === 'down') {
    if (eri !== ri) ri = eri;
    if (ri < rows.len - 1) ri += 1;
  } else if (direction === 'row-first') {
    ci = 0;
  } else if (direction === 'row-last') {
    ci = cols.len - 1;
  } else if (direction === 'col-first') {
    ri = 0;
  } else if (direction === 'col-last') {
    ri = rows.len - 1;
  }
  if (multiple) {
    selector.moveIndexes = [ri, ci];
  }
  selectorSet.call(this, multiple, ri, ci);
  scrollbarMove.call(this);
}

// private methods
function overlayerMousemove(evt) {
  // console.log('x:', evt.offsetX, ', y:', evt.offsetY);
  if (evt.buttons !== 0) return;
  if (evt.target.className === `${_config__WEBPACK_IMPORTED_MODULE_12__["cssPrefix"]}-resizer-hover`) return;
  const { offsetX, offsetY } = evt;
  const {
    rowResizer, colResizer, tableEl, data,
  } = this;
  const { rows, cols } = data;
  if (offsetX > cols.indexWidth && offsetY > rows.height) {
    rowResizer.hide();
    colResizer.hide();
    return;
  }
  const tRect = tableEl.box();
  const cRect = data.getCellRectByXY(evt.offsetX, evt.offsetY);
  if (cRect.ri >= 0 && cRect.ci === -1) {
    cRect.width = cols.indexWidth;
    rowResizer.show(cRect, {
      width: tRect.width,
    });
  } else {
    rowResizer.hide();
  }
  if (cRect.ri === -1 && cRect.ci >= 0) {
    cRect.height = rows.height;
    colResizer.show(cRect, {
      height: tRect.height,
    });
  } else {
    colResizer.hide();
  }
}

function overlayerMousescroll(evt) {
  const { verticalScrollbar, data } = this;
  const { top } = verticalScrollbar.scroll();
  // console.log('evt:::', evt.wheelDelta, evt.detail * 40);
  let delta = evt.deltaY;
  const { rows } = data;
  if (evt.detail) delta = evt.detail * 40;
  if (delta > 0) {
    // up
    const ri = data.scroll.ri + 1;
    if (ri < rows.len) {
      verticalScrollbar.move({ top: top + rows.getHeight(ri) - 1 });
    }
  } else {
    // down
    const ri = data.scroll.ri - 1;
    if (ri >= 0) {
      verticalScrollbar.move({ top: ri === 0 ? 0 : top - rows.getHeight(ri) });
    }
  }
}

function overlayerTouch(direction, distance) {
  const { verticalScrollbar, horizontalScrollbar } = this;
  const { top } = verticalScrollbar.scroll();
  const { left } = horizontalScrollbar.scroll();
  // console.log('direction:', direction, ', distance:', distance, left);
  if (direction === 'left' || direction === 'right') {
    horizontalScrollbar.move({ left: left - distance });
  } else if (direction === 'up' || direction === 'down') {
    verticalScrollbar.move({ top: top - distance });
  }
}

function verticalScrollbarSet() {
  const { data, verticalScrollbar } = this;
  const { height } = this.getTableOffset();
  const erth = data.exceptRowTotalHeight(0, -1);
  // console.log('erth:', erth);
  verticalScrollbar.set(height, data.rows.totalHeight() - erth);
}

function horizontalScrollbarSet() {
  const { data, horizontalScrollbar } = this;
  const { width } = this.getTableOffset();
  if (data) {
    horizontalScrollbar.set(width, data.cols.totalWidth());
  }
}

function sheetFreeze() {
  const {
    selector, data, editor,
  } = this;
  const [ri, ci] = data.freeze;
  if (ri > 0 || ci > 0) {
    const fwidth = data.freezeTotalWidth();
    const fheight = data.freezeTotalHeight();
    editor.setFreezeLengths(fwidth, fheight);
  }
  selector.resetAreaOffset();
}

function sheetReset() {
  const {
    tableEl,
    overlayerEl,
    overlayerCEl,
    table,
    toolbar,
    selector,
    el,
  } = this;
  const tOffset = this.getTableOffset();
  const vRect = this.getRect();
  tableEl.attr(vRect);
  overlayerEl.offset(vRect);
  overlayerCEl.offset(tOffset);
  el.css('width', `${vRect.width}px`);
  verticalScrollbarSet.call(this);
  horizontalScrollbarSet.call(this);
  sheetFreeze.call(this);
  table.render();
  toolbar.reset();
  selector.reset();
}

function clearClipboard() {
  const { data, selector } = this;
  data.clearClipboard();
  selector.hideClipboard();
}

function copy() {
  const { data, selector } = this;
  data.copy();
  selector.showClipboard();
}

function cut() {
  const { data, selector } = this;
  data.cut();
  selector.showClipboard();
}

function paste(what) {
  const { data } = this;
  if (data.paste(what, msg => Object(_message__WEBPACK_IMPORTED_MODULE_11__["xtoast"])('Tip', msg))) {
    sheetReset.call(this);
  }
}

function autofilter() {
  const { data } = this;
  data.autofilter();
  sheetReset.call(this);
}

function toolbarChangePaintformatPaste() {
  const { toolbar } = this;
  if (toolbar.paintformatActive()) {
    paste.call(this, 'format');
    clearClipboard.call(this);
    toolbar.paintformatToggle();
  }
}

function overlayerMousedown(evt) {
  // console.log(':::::overlayer.mousedown:', evt.detail, evt.button, evt.buttons, evt.shiftKey);
  // console.log('evt.target.className:', evt.target.className);
  const {
    selector, data, table, sortFilter,
  } = this;
  const { offsetX, offsetY } = evt;
  const isAutofillEl = evt.target.className === `${_config__WEBPACK_IMPORTED_MODULE_12__["cssPrefix"]}-selector-corner`;
  const cellRect = data.getCellRectByXY(offsetX, offsetY);
  const {
    left, top, width, height,
  } = cellRect;
  let { ri, ci } = cellRect;
  // sort or filter
  const { autoFilter } = data;
  if (autoFilter.includes(ri, ci)) {
    if (left + width - 20 < offsetX && top + height - 20 < offsetY) {
      const items = autoFilter.items(ci, (r, c) => data.rows.getCell(r, c));
      sortFilter.set(ci, items, autoFilter.getFilter(ci), autoFilter.getSort(ci));
      sortFilter.setOffset({ left, top: top + height + 2 });
      return;
    }
  }

  // console.log('ri:', ri, ', ci:', ci);
  if (!evt.shiftKey) {
    // console.log('selectorSetStart:::');
    if (isAutofillEl) {
      selector.showAutofill(ri, ci);
    } else {
      selectorSet.call(this, false, ri, ci);
    }

    // mouse move up
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["mouseMoveUp"])(window, (e) => {
      // console.log('mouseMoveUp::::');
      ({ ri, ci } = data.getCellRectByXY(e.offsetX, e.offsetY));
      if (isAutofillEl) {
        selector.showAutofill(ri, ci);
      } else if (e.buttons === 1 && !e.shiftKey) {
        selectorSet.call(this, true, ri, ci, true, true);
      }
    }, () => {
      if (isAutofillEl) {
        if (data.autofill(selector.arange, 'all', msg => Object(_message__WEBPACK_IMPORTED_MODULE_11__["xtoast"])('Tip', msg))) {
          table.render();
        }
      }
      selector.hideAutofill();
      toolbarChangePaintformatPaste.call(this);
    });
  }

  if (!isAutofillEl && evt.buttons === 1) {
    if (evt.shiftKey) {
      // console.log('shiftKey::::');
      selectorSet.call(this, true, ri, ci);
    }
  }
}

function editorSetOffset() {
  const { editor, data } = this;
  const sOffset = data.getSelectedRect();
  const tOffset = this.getTableOffset();
  let sPosition = 'top';
  // console.log('sOffset:', sOffset, ':', tOffset);
  if (sOffset.top > tOffset.height / 2) {
    sPosition = 'bottom';
  }
  editor.setOffset(sOffset, sPosition);
}

function editorSet() {
  const { editor, data } = this;
  editorSetOffset.call(this);
  editor.setCell(data.getSelectedCell(), data.getSelectedValidator());
  clearClipboard.call(this);
}

function verticalScrollbarMove(distance) {
  const { data, table, selector } = this;
  data.scrolly(distance, () => {
    selector.resetBRLAreaOffset();
    editorSetOffset.call(this);
    table.render();
  });
}

function horizontalScrollbarMove(distance) {
  const { data, table, selector } = this;
  data.scrollx(distance, () => {
    selector.resetBRTAreaOffset();
    editorSetOffset.call(this);
    table.render();
  });
}

function rowResizerFinished(cRect, distance) {
  const { ri } = cRect;
  const { table, selector, data } = this;
  data.rows.setHeight(ri, distance);
  table.render();
  selector.resetAreaOffset();
  verticalScrollbarSet.call(this);
  editorSetOffset.call(this);
}

function colResizerFinished(cRect, distance) {
  const { ci } = cRect;
  const { table, selector, data } = this;
  data.cols.setWidth(ci, distance);
  // console.log('data:', data);
  table.render();
  selector.resetAreaOffset();
  horizontalScrollbarSet.call(this);
  editorSetOffset.call(this);
}

function dataSetCellText(text, state = 'finished') {
  const { data, table } = this;
  // const [ri, ci] = selector.indexes;
  data.setSelectedCellText(text, state);
  if (state === 'finished') table.render();
}

function insertDeleteRowColumn(type) {
  const { data } = this;
  if (type === 'insert-row') {
    data.insert('row');
  } else if (type === 'delete-row') {
    data.delete('row');
  } else if (type === 'insert-column') {
    data.insert('column');
  } else if (type === 'delete-column') {
    data.delete('column');
  } else if (type === 'delete-cell') {
    data.deleteCell();
  } else if (type === 'delete-cell-format') {
    data.deleteCell('format');
  } else if (type === 'delete-cell-text') {
    data.deleteCell('text');
  }
  clearClipboard.call(this);
  sheetReset.call(this);
}

function toolbarChange(type, value) {
  const { data } = this;
  if (type === 'undo') {
    this.undo();
  } else if (type === 'redo') {
    this.redo();
  } else if (type === 'print') {
    // print
  } else if (type === 'paintformat') {
    if (value === true) copy.call(this);
    else clearClipboard.call(this);
  } else if (type === 'clearformat') {
    insertDeleteRowColumn.call(this, 'delete-cell-format');
  } else if (type === 'link') {
    // link
  } else if (type === 'chart') {
    // chart
  } else if (type === 'autofilter') {
    // filter
    autofilter.call(this);
  } else if (type === 'freeze') {
    if (value) {
      const { ri, ci } = data.selector;
      this.freeze(ri, ci);
    } else {
      this.freeze(0, 0);
    }
  } else {
    data.setSelectedCellAttr(type, value);
    if (type === 'formula' && !data.selector.multiple()) {
      editorSet.call(this);
    }
    sheetReset.call(this);
  }
}

function sortFilterChange(ci, order, operator, value) {
  // console.log('sort:', sortDesc, operator, value);
  this.data.setAutoFilter(ci, order, operator, value);
  sheetReset.call(this);
}

function sheetInitEvents() {
  const {
    overlayerEl,
    rowResizer,
    colResizer,
    verticalScrollbar,
    horizontalScrollbar,
    editor,
    contextMenu,
    data,
    toolbar,
    modalValidation,
    sortFilter,
  } = this;
  // overlayer
  overlayerEl
    .on('mousemove', (evt) => {
      overlayerMousemove.call(this, evt);
    })
    .on('mousedown', (evt) => {
      // the left mouse button: mousedown → mouseup → click
      // the right mouse button: mousedown → contenxtmenu → mouseup
      if (evt.buttons === 2) {
        if (data.xyInSelectedRect(evt.offsetX, evt.offsetY)) {
          contextMenu.setPosition(evt.offsetX, evt.offsetY);
          evt.stopPropagation();
        } else {
          contextMenu.hide();
        }
      } else if (evt.detail === 2) {
        editorSet.call(this);
      } else {
        editor.clear();
        overlayerMousedown.call(this, evt);
      }
    }).on('mousewheel.stop', (evt) => {
      overlayerMousescroll.call(this, evt);
    });

  // slide on mobile
  Object(_event__WEBPACK_IMPORTED_MODULE_1__["bindTouch"])(overlayerEl.el, {
    move: (direction, d) => {
      overlayerTouch.call(this, direction, d);
    },
  });

  // toolbar change
  toolbar.change = (type, value) => toolbarChange.call(this, type, value);

  // sort filter ok
  sortFilter.ok = (ci, order, o, v) => sortFilterChange.call(this, ci, order, o, v);

  // resizer finished callback
  rowResizer.finishedFn = (cRect, distance) => {
    rowResizerFinished.call(this, cRect, distance);
  };
  colResizer.finishedFn = (cRect, distance) => {
    colResizerFinished.call(this, cRect, distance);
  };
  // scrollbar move callback
  verticalScrollbar.moveFn = (distance, evt) => {
    verticalScrollbarMove.call(this, distance, evt);
  };
  horizontalScrollbar.moveFn = (distance, evt) => {
    horizontalScrollbarMove.call(this, distance, evt);
  };
  // editor
  editor.change = (state, itext) => {
    dataSetCellText.call(this, itext, state);
  };
  // modal validation
  modalValidation.change = (action, ...args) => {
    if (action === 'save') {
      data.addValidation(...args);
    } else {
      data.removeValidation();
    }
  };
  // contextmenu
  contextMenu.itemClick = (type) => {
    // console.log('type:', type);
    if (type === 'validation') {
      modalValidation.setValue(data.getSelectedValidation());
    } else if (type === 'copy') {
      copy.call(this);
    } else if (type === 'cut') {
      cut.call(this);
    } else if (type === 'paste') {
      paste.call(this, 'all');
    } else if (type === 'paste-value') {
      paste.call(this, 'text');
    } else if (type === 'paste-format') {
      paste.call(this, 'format');
    } else {
      insertDeleteRowColumn.call(this, type);
    }
  };

  Object(_event__WEBPACK_IMPORTED_MODULE_1__["bind"])(window, 'resize', () => {
    this.reload();
  });

  Object(_event__WEBPACK_IMPORTED_MODULE_1__["bind"])(window, 'click', (evt) => {
    this.focusing = overlayerEl.contains(evt.target);
  });

  // for selector
  Object(_event__WEBPACK_IMPORTED_MODULE_1__["bind"])(window, 'keydown', (evt) => {
    if (!this.focusing) return;
    const keyCode = evt.keyCode || evt.which;
    const {
      key, ctrlKey, shiftKey, altKey, metaKey,
    } = evt;
    // console.log('keydown.evt: ', keyCode);
    if (ctrlKey || metaKey) {
      // const { sIndexes, eIndexes } = selector;
      let what = 'all';
      if (shiftKey) what = 'text';
      if (altKey) what = 'format';
      switch (keyCode) {
        case 90:
          // undo: ctrl + z
          this.undo();
          evt.preventDefault();
          break;
        case 89:
          // redo: ctrl + y
          this.redo();
          evt.preventDefault();
          break;
        case 67:
          // ctrl + c
          copy.call(this);
          evt.preventDefault();
          break;
        case 88:
          // ctrl + x
          cut.call(this);
          evt.preventDefault();
          break;
        case 85:
          // ctrl + u
          toolbar.trigger('underline');
          evt.preventDefault();
          break;
        case 86:
          // ctrl + v
          paste.call(this, what);
          evt.preventDefault();
          break;
        case 37:
          // ctrl + left
          selectorMove.call(this, shiftKey, 'row-first');
          evt.preventDefault();
          break;
        case 38:
          // ctrl + up
          selectorMove.call(this, shiftKey, 'col-first');
          evt.preventDefault();
          break;
        case 39:
          // ctrl + right
          selectorMove.call(this, shiftKey, 'row-last');
          evt.preventDefault();
          break;
        case 40:
          // ctrl + down
          selectorMove.call(this, shiftKey, 'col-last');
          evt.preventDefault();
          break;
        case 32:
          // ctrl + space, all cells in col
          selectorSet.call(this, false, -1, data.selector.ci, false);
          evt.preventDefault();
          break;
        case 66:
          // ctrl + B
          toolbar.trigger('bold');
          break;
        case 73:
          // ctrl + I
          toolbar.trigger('italic');
          break;
        default:
          break;
      }
    } else {
      // console.log('evt.keyCode:', evt.keyCode);
      switch (keyCode) {
        case 32:
          if (shiftKey) {
            // shift + space, all cells in row
            selectorSet.call(this, false, data.selector.ri, -1, false);
          }
          break;
        case 27: // esc
          contextMenu.hide();
          clearClipboard.call(this);
          break;
        case 37: // left
          selectorMove.call(this, shiftKey, 'left');
          evt.preventDefault();
          break;
        case 38: // up
          selectorMove.call(this, shiftKey, 'up');
          evt.preventDefault();
          break;
        case 39: // right
          selectorMove.call(this, shiftKey, 'right');
          evt.preventDefault();
          break;
        case 40: // down
          selectorMove.call(this, shiftKey, 'down');
          evt.preventDefault();
          break;
        case 9: // tab
          editor.clear();
          // shift + tab => move left
          // tab => move right
          selectorMove.call(this, false, shiftKey ? 'left' : 'right');
          evt.preventDefault();
          break;
        case 13: // enter
          editor.clear();
          // shift + enter => move up
          // enter => move down
          selectorMove.call(this, false, shiftKey ? 'up' : 'down');
          evt.preventDefault();
          break;
        case 8: // backspace
          insertDeleteRowColumn.call(this, 'delete-cell-text');
          evt.preventDefault();
          break;
        default:
          break;
      }

      if (key === 'Delete') {
        insertDeleteRowColumn.call(this, 'delete-cell-text');
        evt.preventDefault();
      } else if ((keyCode >= 65 && keyCode <= 90)
        || (keyCode >= 48 && keyCode <= 57)
        || (keyCode >= 96 && keyCode <= 105)
        || evt.key === '='
      ) {
        dataSetCellText.call(this, evt.key, 'input');
        editorSet.call(this);
      } else if (keyCode === 113) {
        // F2
        editorSet.call(this);
      }
    }
  });
}

class Sheet {
  constructor(targetEl, data) {
    const { view, showToolbar, showContextmenu } = data.settings;
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_12__["cssPrefix"]}-sheet`);
    this.toolbar = new _toolbar_index__WEBPACK_IMPORTED_MODULE_8__["default"](data, view.width, !showToolbar);
    targetEl.children(this.toolbar.el, this.el);
    this.data = data;
    // table
    this.tableEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('canvas', `${_config__WEBPACK_IMPORTED_MODULE_12__["cssPrefix"]}-table`);
    // resizer
    this.rowResizer = new _resizer__WEBPACK_IMPORTED_MODULE_2__["default"](false, data.rows.height);
    this.colResizer = new _resizer__WEBPACK_IMPORTED_MODULE_2__["default"](true, data.cols.minWidth);
    // scrollbar
    this.verticalScrollbar = new _scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](true);
    this.horizontalScrollbar = new _scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](false);
    // editor
    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_5__["default"](
      _core_formula__WEBPACK_IMPORTED_MODULE_13__["formulas"],
      () => this.getTableOffset(),
      data.rows.height,
    );
    // data validation
    this.modalValidation = new _modal_validation__WEBPACK_IMPORTED_MODULE_9__["default"]();
    // contextMenu
    this.contextMenu = new _contextmenu__WEBPACK_IMPORTED_MODULE_6__["default"](() => this.getTableOffset(), !showContextmenu);
    // selector
    this.selector = new _selector__WEBPACK_IMPORTED_MODULE_4__["default"](data);
    this.overlayerCEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_12__["cssPrefix"]}-overlayer-content`)
      .children(
        this.editor.el,
        this.selector.el,
      );
    this.overlayerEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_12__["cssPrefix"]}-overlayer`)
      .child(this.overlayerCEl);
    // sortFilter
    this.sortFilter = new _sort_filter__WEBPACK_IMPORTED_MODULE_10__["default"]();
    // root element
    this.el.children(
      this.tableEl,
      this.overlayerEl.el,
      this.rowResizer.el,
      this.colResizer.el,
      this.verticalScrollbar.el,
      this.horizontalScrollbar.el,
      this.contextMenu.el,
      this.modalValidation.el,
      this.sortFilter.el,
    );
    // table
    this.table = new _table__WEBPACK_IMPORTED_MODULE_7__["default"](this.tableEl.el, data);
    sheetInitEvents.call(this);
    sheetReset.call(this);
    // init selector [0, 0]
    selectorSet.call(this, false, 0, 0);
  }

  loadData(data) {
    this.data.setData(data);
    sheetReset.call(this);
    return this;
  }

  // freeze rows or cols
  freeze(ri, ci) {
    const { data } = this;
    data.setFreeze(ri, ci);
    sheetReset.call(this);
    return this;
  }

  undo() {
    this.data.undo();
    sheetReset.call(this);
  }

  redo() {
    this.data.redo();
    sheetReset.call(this);
  }

  reload() {
    sheetReset.call(this);
    return this;
  }

  getRect() {
    const { data } = this;
    return { width: data.viewWidth(), height: data.viewHeight() };
  }

  getTableOffset() {
    const { rows, cols } = this.data;
    const { width, height } = this.getRect();
    return {
      width: width - cols.indexWidth,
      height: height - rows.height,
      left: cols.indexWidth,
      top: rows.height,
    };
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/sort_filter.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/sort_filter.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortFilter; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/button.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");






function buildMenu(clsName) {
  return Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-item ${clsName}`);
}

function buildSortItem(it) {
  return buildMenu('state').child(Object(_locale_locale__WEBPACK_IMPORTED_MODULE_4__["t"])(`sort.${it}`))
    .on('click.stop', () => this.itemClick(it));
}

function buildFilterBody(items) {
  const { filterbEl, filterValues } = this;
  filterbEl.html('');
  const itemKeys = Object.keys(items);
  itemKeys.forEach((it, index) => {
    const cnt = items[it];
    const active = filterValues.includes(it) ? 'checked' : '';
    filterbEl.child(Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-item state ${active}`)
      .on('click.stop', () => this.filterClick(index, it))
      .children(it === '' ? Object(_locale_locale__WEBPACK_IMPORTED_MODULE_4__["t"])('filter.empty') : it, Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'label').html(`(${cnt})`)));
  });
}

function resetFilterHeader() {
  const { filterhEl, filterValues, values } = this;
  filterhEl.html(`${filterValues.length} / ${values.length}`);
  filterhEl.checked(filterValues.length === values.length);
}

class SortFilter {
  constructor() {
    this.filterbEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-body`);
    this.filterhEl = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-header state`).on('click.stop', () => this.filterClick(0, 'all'));
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-sort-filter`).children(
      this.sortAscEl = buildSortItem.call(this, 'asc'),
      this.sortDescEl = buildSortItem.call(this, 'desc'),
      buildMenu('divider'),
      Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-filter`).children(
        this.filterhEl,
        this.filterbEl,
      ),
      Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}-buttons`).children(
        new _button__WEBPACK_IMPORTED_MODULE_1__["default"]('cancel').on('click', () => this.btnClick('cancel')),
        new _button__WEBPACK_IMPORTED_MODULE_1__["default"]('ok', 'primary').on('click', () => this.btnClick('ok')),
      ),
    ).hide();
    // this.setFilters(['test1', 'test2', 'text3']);
    this.ci = null;
    this.sortDesc = null;
    this.values = null;
    this.filterValues = [];
  }

  btnClick(it) {
    if (it === 'ok') {
      const { ci, sort, filterValues } = this;
      if (this.ok) {
        this.ok(ci, sort, 'in', filterValues);
      }
    }
    this.hide();
  }

  itemClick(it) {
    // console.log('it:', it);
    this.sort = it;
    const { sortAscEl, sortDescEl } = this;
    sortAscEl.checked(it === 'asc');
    sortDescEl.checked(it === 'desc');
  }

  filterClick(index, it) {
    // console.log('index:', index, it);
    const { filterbEl, filterValues, values } = this;
    const children = filterbEl.children();
    if (it === 'all') {
      if (children.length === filterValues.length) {
        this.filterValues = [];
        children.forEach(i => Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])(i).checked(false));
      } else {
        this.filterValues = Array.from(values);
        children.forEach(i => Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])(i).checked(true));
      }
    } else {
      const checked = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])(children[index]).toggle('checked');
      if (checked) {
        filterValues.push(it);
      } else {
        filterValues.splice(filterValues.findIndex(i => i === it), 1);
      }
    }
    resetFilterHeader.call(this);
  }

  // v: autoFilter
  // items: {value: cnt}
  // sort { ci, order }
  set(ci, items, filter, sort) {
    this.ci = ci;
    const { sortAscEl, sortDescEl } = this;
    if (sort !== null) {
      this.sort = sort.order;
      sortAscEl.checked(sort.asc());
      sortDescEl.checked(sort.desc());
    } else {
      this.sortDesc = null;
      sortAscEl.checked(false);
      sortDescEl.checked(false);
    }
    // this.setFilters(items, filter);
    this.values = Object.keys(items);
    this.filterValues = filter ? Array.from(filter.value) : Object.keys(items);
    buildFilterBody.call(this, items, filter);
    resetFilterHeader.call(this);
  }

  setOffset(v) {
    this.el.offset(v).show();
    let tindex = 1;
    Object(_event__WEBPACK_IMPORTED_MODULE_2__["bindClickoutside"])(this.el, () => {
      if (tindex <= 0) {
        this.hide();
      }
      tindex -= 1;
    });
  }

  show() {
    this.el.show();
  }

  hide() {
    this.el.hide();
    Object(_event__WEBPACK_IMPORTED_MODULE_2__["unbindClickoutside"])(this.el);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/suggest.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/suggest.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Suggest; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");




function inputMovePrev(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const { filterItems } = this;
  if (filterItems.length <= 0) return;
  if (this.itemIndex >= 0) filterItems[this.itemIndex].toggle();
  this.itemIndex -= 1;
  if (this.itemIndex < 0) {
    this.itemIndex = filterItems.length - 1;
  }
  filterItems[this.itemIndex].toggle();
}

function inputMoveNext(evt) {
  evt.stopPropagation();
  const { filterItems } = this;
  if (filterItems.length <= 0) return;
  if (this.itemIndex >= 0) filterItems[this.itemIndex].toggle();
  this.itemIndex += 1;
  if (this.itemIndex > filterItems.length - 1) {
    this.itemIndex = 0;
  }
  filterItems[this.itemIndex].toggle();
}

function inputEnter(evt) {
  evt.preventDefault();
  const { filterItems } = this;
  if (filterItems.length <= 0) return;
  evt.stopPropagation();
  if (this.itemIndex < 0) this.itemIndex = 0;
  filterItems[this.itemIndex].el.click();
  this.hide();
}

function inputKeydownHandler(evt) {
  const { keyCode } = evt;
  if (evt.ctrlKey) {
    evt.stopPropagation();
  }
  switch (keyCode) {
    case 37: // left
      evt.stopPropagation();
      break;
    case 38: // up
      inputMovePrev.call(this, evt);
      break;
    case 39: // right
      evt.stopPropagation();
      break;
    case 40: // down
      inputMoveNext.call(this, evt);
      break;
    case 13: // enter
      inputEnter.call(this, evt);
      break;
    case 9:
      inputEnter.call(this, evt);
      break;
    default:
      evt.stopPropagation();
      break;
  }
}

class Suggest {
  constructor(items, itemClick, width = '200px') {
    this.filterItems = [];
    this.items = items;
    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-suggest`).css('width', width).hide();
    this.itemClick = itemClick;
    this.itemIndex = -1;
  }

  setOffset(v) {
    this.el.cssRemoveKeys('top', 'bottom')
      .offset(v);
  }

  hide() {
    const { el } = this;
    this.filterItems = [];
    this.itemIndex = -1;
    el.hide();
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["unbindClickoutside"])(this.el.parent());
  }

  setItems(items) {
    this.items = items;
    // this.search('');
  }

  search(word) {
    let { items } = this;
    if (!/^\s*$/.test(word)) {
      items = items.filter(it => (it.key || it).startsWith(word.toUpperCase()));
    }
    items = items.map((it) => {
      let { title } = it;
      if (title) {
        if (typeof title === 'function') {
          title = title();
        }
      } else {
        title = it;
      }
      const item = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-item`)
        .child(title)
        .on('click.stop', () => {
          this.itemClick(it);
          this.hide();
        });
      if (it.label) {
        item.child(Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'label').html(it.label));
      }
      return item;
    });
    this.filterItems = items;
    if (items.length <= 0) {
      return;
    }
    const { el } = this;
    // items[0].toggle();
    el.html('').children(...items).show();
    Object(_event__WEBPACK_IMPORTED_MODULE_1__["bindClickoutside"])(el.parent(), () => { this.hide(); });
  }

  bindInputEvents(input) {
    input.on('keydown', evt => inputKeydownHandler.call(this, evt));
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/table.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/table.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_alphabet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/alphabet */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/alphabet.js");
/* harmony import */ var _core_font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/font */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/font.js");
/* harmony import */ var _core_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/cell */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell.js");
/* harmony import */ var _core_formula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/formula */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/formula.js");
/* harmony import */ var _core_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/format */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/format.js");
/* harmony import */ var _canvas_draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvas/draw */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/canvas/draw.js");







// gobal var
const cellPaddingWidth = 5;
const tableFixedHeaderCleanStyle = { fillStyle: '#f4f5f8' };
const tableGridStyle = {
  fillStyle: '#fff',
  lineWidth: _canvas_draw__WEBPACK_IMPORTED_MODULE_5__["thinLineWidth"],
  strokeStyle: '#e6e6e6',
};
function tableFixedHeaderStyle() {
  return {
    textAlign: 'center',
    textBaseline: 'middle',
    font: `500 ${Object(_canvas_draw__WEBPACK_IMPORTED_MODULE_5__["npx"])(12)}px Source Sans Pro`,
    fillStyle: '#585757',
    lineWidth: Object(_canvas_draw__WEBPACK_IMPORTED_MODULE_5__["thinLineWidth"])(),
    strokeStyle: '#e6e6e6',
  };
}

function getDrawBox(rindex, cindex) {
  const { data } = this;
  const {
    left, top, width, height,
  } = data.cellRect(rindex, cindex);
  return new _canvas_draw__WEBPACK_IMPORTED_MODULE_5__["DrawBox"](left, top, width, height, cellPaddingWidth);
}
/*
function renderCellBorders(bboxes, translateFunc) {
  const { draw } = this;
  if (bboxes) {
    const rset = new Set();
    // console.log('bboxes:', bboxes);
    bboxes.forEach(({ ri, ci, box }) => {
      if (!rset.has(ri)) {
        rset.add(ri);
        translateFunc(ri);
      }
      draw.strokeBorders(box);
    });
  }
}
*/

function renderCell(rindex, cindex) {
  const { draw, data } = this;
  const { sortedRowMap } = data;
  let nrindex = rindex;
  if (sortedRowMap.has(rindex)) {
    nrindex = sortedRowMap.get(rindex);
  }

  const cell = data.getCell(nrindex, cindex);
  if (cell === null) return;

  const style = data.getCellStyleOrDefault(nrindex, cindex);
  // console.log('style:', style);
  const dbox = getDrawBox.call(this, rindex, cindex);
  dbox.bgcolor = style.bgcolor;
  if (style.border !== undefined) {
    dbox.setBorders(style.border);
    // bboxes.push({ ri: rindex, ci: cindex, box: dbox });
    draw.strokeBorders(dbox);
  }
  draw.rect(dbox, () => {
    // render text
    let cellText = _core_cell__WEBPACK_IMPORTED_MODULE_2__["default"].render(cell.text || '', _core_formula__WEBPACK_IMPORTED_MODULE_3__["formulam"], (y, x) => (data.getCellTextOrDefault(x, y)));
    if (style.format) {
      // console.log(data.formatm, '>>', cell.format);
      cellText = _core_format__WEBPACK_IMPORTED_MODULE_4__["formatm"][style.format].render(cellText);
    }
    const font = Object.assign({}, style.font);
    font.size = Object(_core_font__WEBPACK_IMPORTED_MODULE_1__["getFontSizePxByPt"])(font.size);
    // console.log('style:', style);
    draw.text(cellText, dbox, {
      align: style.align,
      valign: style.valign,
      font,
      color: style.color,
      strike: style.strike,
      underline: style.underline,
    }, style.textwrap);
    // error
    const error = data.validations.getError(rindex, cindex);
    if (error) {
      // console.log('error:', rindex, cindex, error);
      draw.error(dbox);
    }
  });
}

function renderAutofilter(viewRange) {
  const { data, draw } = this;
  if (viewRange) {
    const { autoFilter } = data;
    if (!autoFilter.active()) return;
    const afRange = autoFilter.hrange();
    if (viewRange.intersects(afRange)) {
      afRange.each((ri, ci) => {
        const dbox = getDrawBox.call(this, ri, ci);
        draw.dropdown(dbox);
      });
    }
  }
}

function renderContent(viewRange, fw, fh, tx, ty) {
  const { draw, data } = this;
  draw.save();
  draw.translate(fw, fh)
    .translate(tx, ty);

  const { exceptRowSet } = data;
  // const exceptRows = Array.from(exceptRowSet);
  const filteredTranslateFunc = (ri) => {
    const ret = exceptRowSet.has(ri);
    if (ret) {
      const height = data.rows.getHeight(ri);
      draw.translate(0, -height);
    }
    return !ret;
  };

  const exceptRowTotalHeight = data.exceptRowTotalHeight(viewRange.sri, viewRange.eri);
  // 1 render cell
  draw.save();
  draw.translate(0, -exceptRowTotalHeight);
  viewRange.each((ri, ci) => {
    renderCell.call(this, ri, ci);
  }, ri => filteredTranslateFunc(ri));
  draw.restore();


  // 2 render mergeCell
  const rset = new Set();
  draw.save();
  draw.translate(0, -exceptRowTotalHeight);
  data.eachMergesInView(viewRange, ({ sri, sci, eri }) => {
    if (!exceptRowSet.has(sri)) {
      renderCell.call(this, sri, sci);
    } else if (!rset.has(sri)) {
      rset.add(sri);
      const height = data.rows.sumHeight(sri, eri + 1);
      draw.translate(0, -height);
    }
  });
  draw.restore();

  // 3 render autofilter
  renderAutofilter.call(this, viewRange);

  draw.restore();
}

function renderSelectedHeaderCell(x, y, w, h) {
  const { draw } = this;
  draw.save();
  draw.attr({ fillStyle: 'rgba(75, 137, 255, 0.08)' })
    .fillRect(x, y, w, h);
  draw.restore();
}

// viewRange
// type: all | left | top
// w: the fixed width of header
// h: the fixed height of header
// tx: moving distance on x-axis
// ty: moving distance on y-axis
function renderFixedHeaders(type, viewRange, w, h, tx, ty) {
  const { draw, data } = this;
  const sumHeight = viewRange.h; // rows.sumHeight(viewRange.sri, viewRange.eri + 1);
  const sumWidth = viewRange.w; // cols.sumWidth(viewRange.sci, viewRange.eci + 1);
  const nty = ty + h;
  const ntx = tx + w;

  draw.save();
  // draw rect background
  draw.attr(tableFixedHeaderCleanStyle);
  if (type === 'all' || type === 'left') draw.fillRect(0, nty, w, sumHeight);
  if (type === 'all' || type === 'top') draw.fillRect(ntx, 0, sumWidth, h);

  const {
    sri, sci, eri, eci,
  } = data.selector.range;
  // console.log(data.selectIndexes);
  // draw text
  // text font, align...
  draw.attr(tableFixedHeaderStyle());
  // y-header-text
  if (type === 'all' || type === 'left') {
    data.rowEach(viewRange.sri, viewRange.eri, (i, y1, rowHeight) => {
      const y = nty + y1;
      const ii = i;
      draw.line([0, y], [w, y]);
      if (sri <= ii && ii < eri + 1) {
        renderSelectedHeaderCell.call(this, 0, y, w, rowHeight);
      }
      draw.fillText(ii + 1, w / 2, y + (rowHeight / 2));
    });
    draw.line([0, sumHeight + nty], [w, sumHeight + nty]);
    draw.line([w, nty], [w, sumHeight + nty]);
  }
  // x-header-text
  if (type === 'all' || type === 'top') {
    data.colEach(viewRange.sci, viewRange.eci, (i, x1, colWidth) => {
      const x = ntx + x1;
      const ii = i;
      draw.line([x, 0], [x, h]);
      if (sci <= ii && ii < eci + 1) {
        renderSelectedHeaderCell.call(this, x, 0, colWidth, h);
      }
      draw.fillText(Object(_core_alphabet__WEBPACK_IMPORTED_MODULE_0__["stringAt"])(ii), x + (colWidth / 2), h / 2);
    });
    draw.line([sumWidth + ntx, 0], [sumWidth + ntx, h]);
    draw.line([0, h], [sumWidth + ntx, h]);
  }
  draw.restore();
}

function renderFixedLeftTopCell(fw, fh) {
  const { draw } = this;
  draw.save();
  // left-top-cell
  draw.attr({ fillStyle: '#f4f5f8' })
    .fillRect(0, 0, fw, fh);
  draw.restore();
}

function renderContentGrid({
  sri, sci, eri, eci, w, h,
}, fw, fh, tx, ty) {
  const { draw, data } = this;
  const { settings } = data;

  draw.save();
  draw.attr(tableGridStyle)
    .translate(fw + tx, fh + ty);
  // const sumWidth = cols.sumWidth(sci, eci + 1);
  // const sumHeight = rows.sumHeight(sri, eri + 1);
  // console.log('sumWidth:', sumWidth);
  draw.clearRect(0, 0, w, h);
  if (!settings.showGrid) {
    draw.restore();
    return;
  }
  // console.log('rowStart:', rowStart, ', rowLen:', rowLen);
  data.rowEach(sri, eri, (i, y, ch) => {
    // console.log('y:', y);
    if (i !== sri) draw.line([0, y], [w, y]);
    if (i === eri) draw.line([0, y + ch], [w, y + ch]);
  });
  data.colEach(sci, eci, (i, x, cw) => {
    if (i !== sci) draw.line([x, 0], [x, h]);
    if (i === eci) draw.line([x + cw, 0], [x + cw, h]);
  });
  draw.restore();
}

function renderFreezeHighlightLine(fw, fh, ftw, fth) {
  const { draw, data } = this;
  const twidth = data.viewWidth() - fw;
  const theight = data.viewHeight() - fh;
  draw.save()
    .translate(fw, fh)
    .attr({ strokeStyle: 'rgba(75, 137, 255, .6)' });
  draw.line([0, fth], [twidth, fth]);
  draw.line([ftw, 0], [ftw, theight]);
  draw.restore();
}

/** end */
class Table {
  constructor(el, data) {
    this.el = el;
    this.draw = new _canvas_draw__WEBPACK_IMPORTED_MODULE_5__["Draw"](el, data.viewWidth(), data.viewHeight());
    this.data = data;
  }

  render() {
    // resize canvas
    const { data } = this;
    const { rows, cols } = data;
    // fixed width of header
    const fw = cols.indexWidth;
    // fixed height of header
    const fh = rows.height;

    this.draw.resize(data.viewWidth(), data.viewHeight());
    this.clear();

    const viewRange = data.viewRange();
    // renderAll.call(this, viewRange, data.scroll);
    const tx = data.freezeTotalWidth();
    const ty = data.freezeTotalHeight();
    const { x, y } = data.scroll;
    // 1
    renderContentGrid.call(this, viewRange, fw, fh, tx, ty);
    renderContent.call(this, viewRange, fw, fh, -x, -y);
    renderFixedHeaders.call(this, 'all', viewRange, fw, fh, tx, ty);
    renderFixedLeftTopCell.call(this, fw, fh);
    const [fri, fci] = data.freeze;
    if (fri > 0 || fci > 0) {
      // 2
      if (fri > 0) {
        const vr = viewRange.clone();
        vr.sri = 0;
        vr.eri = fri - 1;
        vr.h = ty;
        renderContentGrid.call(this, vr, fw, fh, tx, 0);
        renderContent.call(this, vr, fw, fh, -x, 0);
        renderFixedHeaders.call(this, 'top', vr, fw, fh, tx, 0);
      }
      // 3
      if (fci > 0) {
        const vr = viewRange.clone();
        vr.sci = 0;
        vr.eci = fci - 1;
        vr.w = tx;
        renderContentGrid.call(this, vr, fw, fh, 0, ty);
        renderFixedHeaders.call(this, 'left', vr, fw, fh, 0, ty);
        renderContent.call(this, vr, fw, fh, 0, -y);
      }
      // 4
      const freezeViewRange = data.freezeViewRange();
      renderContentGrid.call(this, freezeViewRange, fw, fh, 0, 0);
      renderFixedHeaders.call(this, 'all', freezeViewRange, fw, fh, 0, 0);
      renderContent.call(this, freezeViewRange, fw, fh, 0, 0);
      // 5
      renderFreezeHighlightLine.call(this, fw, fh, tx, ty);
    }
  }

  clear() {
    this.draw.clear();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Table);


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/align.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/align.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Align; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_align */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_align.js");



class Align extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(value) {
    super('align', '', value);
  }

  dropdown() {
    const { value } = this;
    return new _dropdown_align__WEBPACK_IMPORTED_MODULE_1__["default"](['left', 'center', 'right'], value);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/autofilter.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/autofilter.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Autofilter; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Autofilter extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('autofilter');
  }

  setState() {}
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/bold.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/bold.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bold; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Bold extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('font-bold', 'Ctrl+B');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/border.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/border.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Border; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_border */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_border.js");



class Border extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('border');
  }

  dropdown() {
    return new _dropdown_border__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/clearformat.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/clearformat.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clearformat; });
/* harmony import */ var _icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/icon_item.js");


class Clearformat extends _icon_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('clearformat');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownItem; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/item.js");


class DropdownItem extends _item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  dropdown() {}

  getValue(v) {
    return v;
  }

  element() {
    const { tag } = this;
    this.dd = this.dropdown();
    this.dd.change = it => this.change(tag, this.getValue(it));
    return super.element().child(
      this.dd,
    );
  }

  setState(v) {
    if (v) {
      this.value = v;
      this.dd.setTitle(v);
    }
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/fill_color.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/fill_color.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FillColor; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_color */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_color.js");



class FillColor extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(color) {
    super('bgcolor', undefined, color);
  }

  dropdown() {
    const { tag, value } = this;
    return new _dropdown_color__WEBPACK_IMPORTED_MODULE_1__["default"](tag, value);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/font.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/font.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Font; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_font */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_font.js");



class Font extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('font-name');
  }

  getValue(it) {
    return it.key;
  }

  dropdown() {
    return new _dropdown_font__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/font_size.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/font_size.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Format; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_fontsize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_fontsize */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_fontsize.js");



class Format extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('font-size');
  }

  getValue(it) {
    return it.pt;
  }

  dropdown() {
    return new _dropdown_fontsize__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/format.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/format.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Format; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_format */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_format.js");



class Format extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('format');
  }

  getValue(it) {
    return it.key;
  }

  dropdown() {
    return new _dropdown_format__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/formula.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/formula.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Format; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_formula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_formula */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_formula.js");



class Format extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('formula');
  }

  getValue(it) {
    return it.key;
  }

  dropdown() {
    return new _dropdown_formula__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/freeze.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/freeze.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Freeze; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Freeze extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('freeze');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/icon_item.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/icon_item.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconItem; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/item.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");



class IconItem extends _item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  element() {
    return super.element()
      .child(new _icon__WEBPACK_IMPORTED_MODULE_1__["default"](this.tag))
      .on('click', () => this.change(this.tag));
  }

  setState(disabled) {
    this.el.disabled(disabled);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/align.js");
/* harmony import */ var _valign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valign */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/valign.js");
/* harmony import */ var _autofilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autofilter */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/autofilter.js");
/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bold */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/bold.js");
/* harmony import */ var _italic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./italic */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/italic.js");
/* harmony import */ var _strike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strike */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/strike.js");
/* harmony import */ var _underline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./underline */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/underline.js");
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./border */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/border.js");
/* harmony import */ var _clearformat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clearformat */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/clearformat.js");
/* harmony import */ var _paintformat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paintformat */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/paintformat.js");
/* harmony import */ var _text_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text_color */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/text_color.js");
/* harmony import */ var _fill_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fill_color */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/fill_color.js");
/* harmony import */ var _font_size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./font_size */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/font_size.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./font */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/font.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./format */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/format.js");
/* harmony import */ var _formula__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formula */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/formula.js");
/* harmony import */ var _freeze__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./freeze */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/freeze.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./merge */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/merge.js");
/* harmony import */ var _redo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./redo */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/redo.js");
/* harmony import */ var _undo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./undo */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/undo.js");
/* harmony import */ var _textwrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./textwrap */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/textwrap.js");
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./more */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/more.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* global window */




























function buildDivider() {
  return Object(_element__WEBPACK_IMPORTED_MODULE_22__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_23__["cssPrefix"]}-toolbar-divider`);
}

function initBtns2() {
  this.btns2 = [];
  this.items.forEach((it) => {
    if (Array.isArray(it)) {
      it.forEach(({ el }) => {
        const rect = el.box();
        const { marginLeft, marginRight } = el.computedStyle();
        this.btns2.push([el, rect.width + parseInt(marginLeft, 10) + parseInt(marginRight, 10)]);
      });
    } else {
      const rect = it.box();
      const { marginLeft, marginRight } = it.computedStyle();
      this.btns2.push([it, rect.width + parseInt(marginLeft, 10) + parseInt(marginRight, 10)]);
    }
  });
}

function moreResize() {
  const {
    el, btns, moreEl, btns2,
  } = this;
  const { moreBtns, contentEl } = moreEl.dd;
  el.css('width', `${this.widthFn() - 60}px`);
  const elBox = el.box();

  let sumWidth = 160;
  let sumWidth2 = 12;
  const list1 = [];
  const list2 = [];
  btns2.forEach(([it, w], index) => {
    sumWidth += w;
    if (index === btns2.length - 1 || sumWidth < elBox.width) {
      list1.push(it);
    } else {
      sumWidth2 += w;
      list2.push(it);
    }
  });
  btns.html('').children(...list1);
  moreBtns.html('').children(...list2);
  contentEl.css('width', `${sumWidth2}px`);
  if (list2.length > 0) {
    moreEl.show();
  } else {
    moreEl.hide();
  }
}

class Toolbar {
  constructor(data, widthFn, isHide = false) {
    this.data = data;
    this.change = () => {};
    this.widthFn = widthFn;
    this.isHide = isHide;
    if (isHide) return;
    const style = data.defaultStyle();
    this.items = [
      [
        this.undoEl = new _undo__WEBPACK_IMPORTED_MODULE_19__["default"](),
        this.redoEl = new _redo__WEBPACK_IMPORTED_MODULE_18__["default"](),
        this.paintformatEl = new _paintformat__WEBPACK_IMPORTED_MODULE_9__["default"](),
        this.clearformatEl = new _clearformat__WEBPACK_IMPORTED_MODULE_8__["default"](),
      ],
      buildDivider(),
      [
        this.formatEl = new _format__WEBPACK_IMPORTED_MODULE_14__["default"](),
      ],
      buildDivider(),
      [
        this.fontEl = new _font__WEBPACK_IMPORTED_MODULE_13__["default"](),
        this.fontSizeEl = new _font_size__WEBPACK_IMPORTED_MODULE_12__["default"](),
      ],
      buildDivider(),
      [
        this.boldEl = new _bold__WEBPACK_IMPORTED_MODULE_3__["default"](),
        this.italicEl = new _italic__WEBPACK_IMPORTED_MODULE_4__["default"](),
        this.underlineEl = new _underline__WEBPACK_IMPORTED_MODULE_6__["default"](),
        this.strikeEl = new _strike__WEBPACK_IMPORTED_MODULE_5__["default"](),
        this.textColorEl = new _text_color__WEBPACK_IMPORTED_MODULE_10__["default"](style.color),
      ],
      buildDivider(),
      [
        this.fillColorEl = new _fill_color__WEBPACK_IMPORTED_MODULE_11__["default"](style.bgcolor),
        this.borderEl = new _border__WEBPACK_IMPORTED_MODULE_7__["default"](),
        this.mergeEl = new _merge__WEBPACK_IMPORTED_MODULE_17__["default"](),
      ],
      buildDivider(),
      [
        this.alignEl = new _align__WEBPACK_IMPORTED_MODULE_0__["default"](style.align),
        this.valignEl = new _valign__WEBPACK_IMPORTED_MODULE_1__["default"](style.valign),
        this.textwrapEl = new _textwrap__WEBPACK_IMPORTED_MODULE_20__["default"](),
      ],
      buildDivider(),
      [
        this.freezeEl = new _freeze__WEBPACK_IMPORTED_MODULE_16__["default"](),
        this.autofilterEl = new _autofilter__WEBPACK_IMPORTED_MODULE_2__["default"](),
        this.formulaEl = new _formula__WEBPACK_IMPORTED_MODULE_15__["default"](),
        this.moreEl = new _more__WEBPACK_IMPORTED_MODULE_21__["default"](),
      ],
    ];

    this.el = Object(_element__WEBPACK_IMPORTED_MODULE_22__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_23__["cssPrefix"]}-toolbar`);
    this.btns = Object(_element__WEBPACK_IMPORTED_MODULE_22__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_23__["cssPrefix"]}-toolbar-btns`);

    this.items.forEach((it) => {
      if (Array.isArray(it)) {
        it.forEach((i) => {
          this.btns.child(i.el);
          i.change = (...args) => {
            this.change(...args);
          };
        });
      } else {
        this.btns.child(it.el);
      }
    });

    this.el.child(this.btns);
    this.reset();
    setTimeout(() => {
      initBtns2.call(this);
      moreResize.call(this);
    }, 0);
    Object(_event__WEBPACK_IMPORTED_MODULE_24__["bind"])(window, 'resize', () => {
      moreResize.call(this);
    });
  }

  paintformatActive() {
    return this.paintformatEl.active();
  }

  paintformatToggle() {
    this.paintformatEl.toggle();
  }

  trigger(type) {
    this[`${type}El`].click();
  }

  reset() {
    if (this.isHide) return;
    const { data } = this;
    const style = data.getSelectedCellStyle();
    const cell = data.getSelectedCell();
    // console.log('canUndo:', data.canUndo());
    this.undoEl.setState(!data.canUndo());
    this.redoEl.setState(!data.canRedo());
    this.mergeEl.setState(data.canUnmerge(), !data.selector.multiple());
    this.autofilterEl.setState(!data.canAutofilter());
    // this.mergeEl.disabled();
    // console.log('selectedCell:', style, cell);
    const { font } = style;
    this.fontEl.setState(font.name);
    this.fontSizeEl.setState(font.size);
    this.boldEl.setState(font.bold);
    this.italicEl.setState(font.italic);
    this.underlineEl.setState(style.underline);
    this.strikeEl.setState(style.strike);
    this.textColorEl.setState(style.color);
    this.fillColorEl.setState(style.bgcolor);
    this.alignEl.setState(style.align);
    this.valignEl.setState(style.valign);
    this.textwrapEl.setState(style.textwrap);
    // console.log('freeze is Active:', data.freezeIsActive());
    this.freezeEl.setState(data.freezeIsActive());
    if (cell) {
      if (cell.format) {
        this.formatEl.setState(cell.format);
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/italic.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/italic.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Italic; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Italic extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('font-italic', 'Ctrl+I');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/item.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/item.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tooltip */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/tooltip.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");





class Item {
  // tooltip
  // tag: the subclass type
  // shortcut: shortcut key
  constructor(tag, shortcut, value) {
    this.tip = Object(_locale_locale__WEBPACK_IMPORTED_MODULE_3__["t"])(`toolbar.${tag.replace(/-[a-z]/g, c => c[1].toUpperCase())}`);
    this.tag = tag;
    this.shortcut = shortcut;
    this.value = value;
    this.el = this.element();
    this.change = () => {};
  }

  element() {
    const { tip } = this;
    return Object(_element__WEBPACK_IMPORTED_MODULE_2__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_0__["cssPrefix"]}-toolbar-btn`)
      .on('mouseenter', (evt) => {
        Object(_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"])(tip, evt.target);
      })
      .attr('data-tooltip', tip);
  }

  setState() {}
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/merge.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/merge.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Merge; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Merge extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('merge');
  }

  setState(active, disabled) {
    this.el.active(active).disabled(disabled);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/more.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/more.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return More; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dropdown */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown.js");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");







class DropdownMore extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const icon = new _icon__WEBPACK_IMPORTED_MODULE_4__["default"]('ellipsis');
    const moreBtns = Object(_element__WEBPACK_IMPORTED_MODULE_3__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-toolbar-more`);
    super(icon, 'auto', false, 'bottom-right', moreBtns);
    this.moreBtns = moreBtns;
    this.contentEl.css('max-width', '420px');
  }
}

class More extends _dropdown_item__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super('more');
    this.el.hide();
  }

  dropdown() {
    return new DropdownMore();
  }

  show() {
    this.el.show();
  }

  hide() {
    this.el.hide();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/paintformat.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/paintformat.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paintformat; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Paintformat extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('paintformat');
  }

  setState() {}
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/redo.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/redo.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Redo; });
/* harmony import */ var _icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/icon_item.js");


class Redo extends _icon_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('redo', 'Ctrl+Y');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/strike.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/strike.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Strike; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Strike extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('strike', 'Ctrl+U');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/text_color.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/text_color.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextColor; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_color */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_color.js");



class TextColor extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(color) {
    super('color', undefined, color);
  }

  dropdown() {
    const { tag, value } = this;
    return new _dropdown_color__WEBPACK_IMPORTED_MODULE_1__["default"](tag, value);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/textwrap.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/textwrap.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Textwrap; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Textwrap extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('textwrap');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleItem; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/item.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/icon.js");



class ToggleItem extends _item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  element() {
    const { tag } = this;
    return super.element()
      .child(new _icon__WEBPACK_IMPORTED_MODULE_1__["default"](tag))
      .on('click', () => this.click());
  }

  click() {
    this.change(this.tag, this.toggle());
  }

  setState(active) {
    this.el.active(active);
  }

  toggle() {
    return this.el.toggle();
  }

  active() {
    return this.el.hasClass('active');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/underline.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/underline.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Underline; });
/* harmony import */ var _toggle_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/toggle_item.js");


class Underline extends _toggle_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('underline', 'Ctrl+U');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/undo.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/undo.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Undo; });
/* harmony import */ var _icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/icon_item.js");


class Undo extends _icon_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('undo', 'Ctrl+Z');
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/valign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/valign.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Valign; });
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_item */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/toolbar/dropdown_item.js");
/* harmony import */ var _dropdown_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown_align */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/dropdown_align.js");



class Valign extends _dropdown_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(value) {
    super('valign', '', value);
  }

  dropdown() {
    const { value } = this;
    return new _dropdown_align__WEBPACK_IMPORTED_MODULE_1__["default"](['top', 'middle', 'bottom'], value);
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/tooltip.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/tooltip.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tooltip; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/event.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* global document */




function tooltip(html, target) {
  if (target.classList.contains('active')) {
    return;
  }
  const {
    left, top, width, height,
  } = target.getBoundingClientRect();
  const el = Object(_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_2__["cssPrefix"]}-tooltip`).html(html).show();
  document.body.appendChild(el.el);
  const elBox = el.box();
  // console.log('elBox:', elBox);
  el.css('left', `${left + (width / 2) - (elBox.width / 2)}px`)
    .css('top', `${top + height + 2}px`);

  Object(_event__WEBPACK_IMPORTED_MODULE_1__["bind"])(target, 'mouseleave', () => {
    if (document.body.contains(el.el)) {
      document.body.removeChild(el.el);
    }
  });

  Object(_event__WEBPACK_IMPORTED_MODULE_1__["bind"])(target, 'click', () => {
    if (document.body.contains(el.el)) {
      document.body.removeChild(el.el);
    }
  });
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js ***!
  \**********************************************************************************/
/*! exports provided: cssPrefix, dpr, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssPrefix", function() { return cssPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dpr", function() { return dpr; });
/* global window */
const cssPrefix = 'x-spreadsheet';
const dpr = window.devicePixelRatio || 1;
/* harmony default export */ __webpack_exports__["default"] = ({
  cssPrefix,
  dpr,
});


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/alphabet.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/alphabet.js ***!
  \*****************************************************************************************/
/*! exports provided: stringAt, indexAt, expr2xy, xy2expr, expr2expr, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringAt", function() { return stringAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexAt", function() { return indexAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expr2xy", function() { return expr2xy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xy2expr", function() { return xy2expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expr2expr", function() { return expr2expr; });
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function stringAt(index) {
  let str = '';
  let cindex = index;
  while (cindex >= alphabets.length) {
    cindex /= alphabets.length;
    cindex -= 1;
    str += alphabets[parseInt(cindex, 10) % alphabets.length];
  }
  const last = index % alphabets.length;
  str += alphabets[last];
  return str;
}

function indexAt(str) {
  let ret = 0;
  for (let i = 0; i < str.length - 1; i += 1) {
    const cindex = str.charCodeAt(i) - 65;
    const exponet = str.length - 1 - i;
    ret += (alphabets.length ** exponet) + (alphabets.length * cindex);
  }
  ret += str.charCodeAt(str.length - 1) - 65;
  return ret;
}

// B10 => x,y
function expr2xy(src) {
  let x = '';
  let y = '';
  for (let i = 0; i < src.length; i += 1) {
    if (src.charAt(i) >= '0' && src.charAt(i) <= '9') {
      y += src.charAt(i);
    } else {
      x += src.charAt(i);
    }
  }
  return [indexAt(x), parseInt(y, 10) - 1];
}

// x,y => B10
function xy2expr(x, y) {
  return `${stringAt(x)}${y + 1}`;
}

function expr2expr(src, xn, yn) {
  const [x, y] = expr2xy(src);
  return xy2expr(x + xn, y + yn);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  stringAt,
  indexAt,
  expr2xy,
  xy2expr,
  expr2expr,
});


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/auto_filter.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/auto_filter.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoFilter; });
/* harmony import */ var _cell_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell_range */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js");

// operator: all|eq|neq|gt|gte|lt|lte|in|be
// value:
//   in => []
//   be => [min, max]
class Filter {
  constructor(ci, operator, value) {
    this.ci = ci;
    this.operator = operator;
    this.value = value;
  }

  set(operator, value) {
    this.operator = operator;
    this.value = value;
  }

  includes(v) {
    const { operator, value } = this;
    if (operator === 'all') {
      return true;
    }
    if (operator === 'in') {
      return value.includes(v);
    }
    return false;
  }

  vlength() {
    const { operator, value } = this;
    if (operator === 'in') {
      return value.length;
    }
    return 0;
  }

  getData() {
    const { ci, operator, value } = this;
    return { ci, operator, value };
  }
}

class Sort {
  constructor(ci, order) {
    this.ci = ci;
    this.order = order;
  }

  asc() {
    return this.order === 'asc';
  }

  desc() {
    return this.order === 'desc';
  }
}

class AutoFilter {
  constructor() {
    this.ref = null;
    this.filters = [];
    this.sort = null;
  }

  setData({ ref, filters, sort }) {
    if (ref != null) {
      this.ref = ref;
      this.fitlers = filters.map(it => new Filter(it.ci, it.operator, it.value));
      if (sort) {
        this.sort = new Sort(sort.ci, sort.order);
      }
    }
  }

  getData() {
    if (this.active()) {
      const { ref, filters, sort } = this;
      return { ref, filters: filters.map(it => it.getData()), sort };
    }
    return {};
  }

  addFilter(ci, operator, value) {
    const filter = this.getFilter(ci);
    if (filter == null) {
      this.filters.push(new Filter(ci, operator, value));
    } else {
      filter.set(operator, value);
    }
  }

  setSort(ci, order) {
    this.sort = order ? new Sort(ci, order) : null;
  }

  includes(ri, ci) {
    if (this.active()) {
      return this.hrange().includes(ri, ci);
    }
    return false;
  }

  getSort(ci) {
    const { sort } = this;
    if (sort && sort.ci === ci) {
      return sort;
    }
    return null;
  }

  getFilter(ci) {
    const { filters } = this;
    for (let i = 0; i < filters.length; i += 1) {
      if (filters[i].ci === ci) {
        return filters[i];
      }
    }
    return null;
  }

  filteredRows(getCell) {
    // const ary = [];
    // let lastri = 0;
    const rset = new Set();
    const fset = new Set();
    if (this.active()) {
      const { sri, eri } = this.range();
      const { filters } = this;
      for (let ri = sri + 1; ri <= eri; ri += 1) {
        for (let i = 0; i < filters.length; i += 1) {
          const filter = filters[i];
          const cell = getCell(ri, filter.ci);
          const ctext = cell ? cell.text : '';
          if (!filter.includes(ctext)) {
            rset.add(ri);
            break;
          } else {
            fset.add(ri);
          }
        }
      }
    }
    return { rset, fset };
  }

  items(ci, getCell) {
    const m = {};
    if (this.active()) {
      const { sri, eri } = this.range();
      for (let ri = sri + 1; ri <= eri; ri += 1) {
        const cell = getCell(ri, ci);
        if (cell !== null && !/^\s*$/.test(cell.text)) {
          const key = cell.text;
          const cnt = (m[key] || 0) + 1;
          m[key] = cnt;
        } else {
          m[''] = (m[''] || 0) + 1;
        }
      }
    }
    return m;
  }

  range() {
    return _cell_range__WEBPACK_IMPORTED_MODULE_0__["CellRange"].valueOf(this.ref);
  }

  hrange() {
    const r = this.range();
    r.eri = r.sri;
    return r;
  }

  clear() {
    this.ref = null;
    this.filters = [];
    this.sort = null;
  }

  active() {
    return this.ref !== null;
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell.js ***!
  \*************************************************************************************/
/*! exports provided: default, infixExprToSuffixExpr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infixExprToSuffixExpr", function() { return infixExprToSuffixExpr; });
/* harmony import */ var _alphabet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabet */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/alphabet.js");


// Converting infix expression to a suffix expression
// src: AVERAGE(SUM(A1,A2), B1) + 50 + B20
// return: [A1, A2], SUM[, B1],AVERAGE,50,+,B20,+
const infixExprToSuffixExpr = (src) => {
  const operatorStack = [];
  const stack = [];
  let subStrs = []; // SUM, A1, B2, 50 ...
  let fnArgType = 0; // 1 => , 2 => :
  let fnArgsLen = 1; // A1,A2,A3...
  for (let i = 0; i < src.length; i += 1) {
    const c = src.charAt(i);
    // console.log('c:', c);
    if (c !== ' ') {
      if (c >= 'a' && c <= 'z') {
        subStrs.push(c.toUpperCase());
      } else if ((c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || c === '.') {
        subStrs.push(c);
      } else if (c === '"') {
        i += 1;
        while (src.charAt(i) !== '"') {
          subStrs.push(src.charAt(i));
          i += 1;
        }
        stack.push(`"${subStrs.join('')}`);
        subStrs = [];
      } else {
        // console.log('subStrs:', subStrs.join(''), stack);
        if (c !== '(' && subStrs.length > 0) {
          stack.push(subStrs.join(''));
        }
        if (c === ')') {
          let c1 = operatorStack.pop();
          if (fnArgType === 2) {
            // fn argument range => A1:B5
            try {
              const [ex, ey] = Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["expr2xy"])(stack.pop());
              const [sx, sy] = Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["expr2xy"])(stack.pop());
              // console.log('::', sx, sy, ex, ey);
              let rangelen = 0;
              for (let x = sx; x <= ex; x += 1) {
                for (let y = sy; y <= ey; y += 1) {
                  stack.push(Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["xy2expr"])(x, y));
                  rangelen += 1;
                }
              }
              stack.push([c1, rangelen]);
            } catch (e) {
              // console.log(e);
            }
          } else if (fnArgType === 1) {
            // fn argument => A1,A2,B5
            stack.push([c1, fnArgsLen]);
            fnArgsLen = 1;
          } else {
            // console.log('c1:', c1, fnArgType, stack, operatorStack);
            while (c1 !== '(') {
              stack.push(c1);
              if (operatorStack.length <= 0) break;
              c1 = operatorStack.pop();
            }
          }
          fnArgType = 0;
        } else if (c === ':') {
          fnArgType = 2;
        } else if (c === ',') {
          fnArgType = 1;
          fnArgsLen += 1;
        } else if (c === '(' && subStrs.length > 0) {
          // function
          operatorStack.push(subStrs.join(''));
        } else {
          // priority: */ > +-
          // console.log(operatorStack, c, stack);
          if (operatorStack.length > 0 && (c === '+' || c === '-')) {
            let top = operatorStack[operatorStack.length - 1];
            if (top !== '(') stack.push(operatorStack.pop());
            if (top === '*' || top === '/') {
              while (operatorStack.length > 0) {
                top = operatorStack[operatorStack.length - 1];
                if (top !== '(') stack.push(operatorStack.pop());
                else break;
              }
            }
          }
          operatorStack.push(c);
        }
        subStrs = [];
      }
    }
  }
  if (subStrs.length > 0) {
    stack.push(subStrs.join(''));
  }
  while (operatorStack.length > 0) {
    stack.push(operatorStack.pop());
  }
  return stack;
};

const evalSubExpr = (subExpr, cellRender) => {
  if (subExpr[0] >= '0' && subExpr[0] <= '9') {
    return Number(subExpr);
  }
  if (subExpr[0] === '"') {
    return subExpr.substring(1);
  }
  const [x, y] = Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["expr2xy"])(subExpr);
  return cellRender(x, y);
};

// evaluate the suffix expression
// srcStack: <= infixExprToSufixExpr
// formulaMap: {'SUM': {}, ...}
// cellRender: (x, y) => {}
const evalSuffixExpr = (srcStack, formulaMap, cellRender, cellList) => {
  const stack = [];
  // console.log(':::::formulaMap:', formulaMap);
  for (let i = 0; i < srcStack.length; i += 1) {
    // console.log(':::>>>', srcStack[i]);
    if (srcStack[i] === '+') {
      const top = stack.pop();
      stack.push(Number(stack.pop()) + Number(top));
    } else if (srcStack[i] === '-') {
      const top = stack.pop();
      stack.push(Number(stack.pop()) - Number(top));
    } else if (srcStack[i] === '*') {
      stack.push(Number(stack.pop()) * Number(stack.pop()));
    } else if (srcStack[i] === '/') {
      const top = stack.pop();
      stack.push(Number(stack.pop()) / Number(top));
    } else if (Array.isArray(srcStack[i])) {
      const [formula, len] = srcStack[i];
      const params = [];
      for (let j = 0; j < len; j += 1) {
        params.push(stack.pop());
      }
      stack.push(formulaMap[formula].render(params.reverse()));
    } else {
      if (cellList.includes(srcStack[i])) {
        return 0;
      }
      cellList.push(srcStack[i]);
      stack.push(evalSubExpr(srcStack[i], cellRender));
    }
    // console.log('stack:', stack);
  }
  return stack[0];
};

const cellRender = (src, formulaMap, getCellText, cellList = []) => {
  if (src[0] === '=') {
    const stack = infixExprToSuffixExpr(src.substring(1));
    if (stack.length <= 0) return src;
    return evalSuffixExpr(
      stack,
      formulaMap,
      (x, y) => cellRender(getCellText(x, y), formulaMap, getCellText, cellList),
      cellList,
    );
  }
  return src;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  render: cellRender,
});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js ***!
  \*******************************************************************************************/
/*! exports provided: default, CellRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellRange", function() { return CellRange; });
/* harmony import */ var _alphabet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabet */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/alphabet.js");


class CellRange {
  constructor(sri, sci, eri, eci, w = 0, h = 0) {
    this.sri = sri;
    this.sci = sci;
    this.eri = eri;
    this.eci = eci;
    this.w = w;
    this.h = h;
  }

  set(sri, sci, eri, eci) {
    this.sri = sri;
    this.sci = sci;
    this.eri = eri;
    this.eci = eci;
  }

  multiple() {
    return this.eri - this.sri > 0 || this.eci - this.sci > 0;
  }

  // cell-index: ri, ci
  // cell-ref: A10
  includes(...args) {
    let [ri, ci] = [0, 0];
    if (args.length === 1) {
      [ci, ri] = Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["expr2xy"])(args[0]);
    } else if (args.length === 2) {
      [ri, ci] = args;
    }
    const {
      sri, sci, eri, eci,
    } = this;
    return sri <= ri && ri <= eri && sci <= ci && ci <= eci;
  }

  each(cb, rowFilter = () => true) {
    const {
      sri, sci, eri, eci,
    } = this;
    for (let i = sri; i <= eri; i += 1) {
      if (rowFilter(i)) {
        for (let j = sci; j <= eci; j += 1) {
          cb(i, j);
        }
      }
    }
  }

  contains(other) {
    return this.sri <= other.sri
      && this.sci <= other.sci
      && this.eri >= other.eri
      && this.eci >= other.eci;
  }

  // within
  within(other) {
    return this.sri >= other.sri
      && this.sci >= other.sci
      && this.eri <= other.eri
      && this.eci <= other.eci;
  }

  // disjoint
  disjoint(other) {
    return this.sri > other.eri
      || this.sci > other.eci
      || other.sri > this.eri
      || other.sci > this.eci;
  }

  // intersects
  intersects(other) {
    return this.sri <= other.eri
      && this.sci <= other.eci
      && other.sri <= this.eri
      && other.sci <= this.eci;
  }

  // union
  union(other) {
    const {
      sri, sci, eri, eci,
    } = this;
    return new CellRange(
      other.sri < sri ? other.sri : sri,
      other.sci < sci ? other.sci : sci,
      other.eri > eri ? other.eri : eri,
      other.eci > eci ? other.eci : eci,
    );
  }

  // intersection
  // intersection(other) {}

  // Returns Array<CellRange> that represents that part of this that does not intersect with other
  // difference
  difference(other) {
    const ret = [];
    const addRet = (sri, sci, eri, eci) => {
      ret.push(new CellRange(sri, sci, eri, eci));
    };
    const {
      sri, sci, eri, eci,
    } = this;
    const dsr = other.sri - sri;
    const dsc = other.sci - sci;
    const der = eri - other.eri;
    const dec = eci - other.eci;
    if (dsr > 0) {
      addRet(sri, sci, other.sri - 1, eci);
      if (der > 0) {
        addRet(other.eri + 1, sci, eri, eci);
        if (dsc > 0) {
          addRet(other.sri, sci, other.eri, other.sci - 1);
        }
        if (dec > 0) {
          addRet(other.sri, other.eci + 1, other.eri, eci);
        }
      } else {
        if (dsc > 0) {
          addRet(other.sri, sci, eri, other.sci - 1);
        }
        if (dec > 0) {
          addRet(other.sri, other.eci + 1, eri, eci);
        }
      }
    } else if (der > 0) {
      addRet(other.eri + 1, sci, eri, eci);
      if (dsc > 0) {
        addRet(sri, sci, other.eri, other.sci - 1);
      }
      if (dec > 0) {
        addRet(sri, other.eci + 1, other.eri, eci);
      }
    }
    if (dsc > 0) {
      addRet(sri, sci, eri, other.sci - 1);
      if (dec > 0) {
        addRet(sri, other.eri + 1, eri, eci);
        if (dsr > 0) {
          addRet(sri, other.sci, other.sri - 1, other.eci);
        }
        if (der > 0) {
          addRet(other.sri + 1, other.sci, eri, other.eci);
        }
      } else {
        if (dsr > 0) {
          addRet(sri, other.sci, other.sri - 1, eci);
        }
        if (der > 0) {
          addRet(other.sri + 1, other.sci, eri, eci);
        }
      }
    } else if (dec > 0) {
      addRet(eri, other.eci + 1, eri, eci);
      if (dsr > 0) {
        addRet(sri, sci, other.sri - 1, other.eci);
      }
      if (der > 0) {
        addRet(other.eri + 1, sci, eri, other.eci);
      }
    }
    return ret;
  }

  size() {
    return [
      this.eri - this.sri + 1,
      this.eci - this.sci + 1,
    ];
  }

  toString() {
    const {
      sri, sci, eri, eci,
    } = this;
    let ref = Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["xy2expr"])(sci, sri);
    if (this.multiple()) {
      ref = `${ref}:${Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["xy2expr"])(eci, eri)}`;
    }
    return ref;
  }

  clone() {
    const {
      sri, sci, eri, eci, w, h,
    } = this;
    return new CellRange(sri, sci, eri, eci, w, h);
  }

  /*
  toJSON() {
    return this.toString();
  }
  */

  equals(other) {
    return this.eri === other.eri
      && this.eci === other.eci
      && this.sri === other.sri
      && this.sci === other.sci;
  }

  static valueOf(ref) {
    // B1:B8, B1 => 1 x 1 cell range
    const refs = ref.split(':');
    const [sci, sri] = Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["expr2xy"])(refs[0]);
    let [eri, eci] = [sri, sci];
    if (refs.length > 1) {
      [eci, eri] = Object(_alphabet__WEBPACK_IMPORTED_MODULE_0__["expr2xy"])(refs[1]);
    }
    return new CellRange(sri, sci, eri, eci);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CellRange);




/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/clipboard.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/clipboard.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clipboard; });
class Clipboard {
  constructor() {
    this.range = null; // CellRange
    this.state = 'clear';
  }

  copy(cellRange) {
    this.range = cellRange;
    this.state = 'copy';
    return this;
  }

  cut(cellRange) {
    this.range = cellRange;
    this.state = 'cut';
    return this;
  }

  isCopy() {
    return this.state === 'copy';
  }

  isCut() {
    return this.state === 'cut';
  }

  isClear() {
    return this.state === 'clear';
  }

  clear() {
    this.range = null;
    this.state = 'clear';
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/col.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/col.js ***!
  \************************************************************************************/
/*! exports provided: default, Cols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cols", function() { return Cols; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/helper.js");


class Cols {
  constructor({
    len, width, indexWidth, minWidth,
  }) {
    this._ = {};
    this.len = len;
    this.width = width;
    this.indexWidth = indexWidth;
    this.minWidth = minWidth;
  }

  setData(d) {
    if (d.len) {
      this.len = d.len;
      delete d.len;
    }
    this._ = d;
  }

  getData() {
    const { len } = this;
    return Object.assign({ len }, this._);
  }

  getWidth(i) {
    const col = this._[i];
    if (col && col.width) {
      return col.width;
    }
    return this.width;
  }

  getOrNew(ci) {
    this._[ci] = this._[ci] || {};
    return this._[ci];
  }

  setWidth(ci, width) {
    const col = this.getOrNew(ci);
    col.width = width;
  }

  setStyle(ci, style) {
    const col = this.getOrNew(ci);
    col.style = style;
  }

  sumWidth(min, max) {
    return _helper__WEBPACK_IMPORTED_MODULE_0__["default"].rangeSum(min, max, i => this.getWidth(i));
  }

  totalWidth() {
    return this.sumWidth(0, this.len);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/data_proxy.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/data_proxy.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataProxy; });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/selector.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/scroll.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/history.js");
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clipboard */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/clipboard.js");
/* harmony import */ var _auto_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto_filter */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/auto_filter.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./merge */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/merge.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/helper.js");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./row */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/row.js");
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./col */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/col.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validation */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/validation.js");
/* harmony import */ var _cell_range__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cell_range */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js");
/* harmony import */ var _alphabet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./alphabet */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/alphabet.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");
/* global document */















// private methods
/*
 * {
 *  name: ''
 *  freeze: [0, 0],
 *  formats: [],
 *  styles: [
 *    {
 *      bgcolor: '',
 *      align: '',
 *      valign: '',
 *      textwrap: false,
 *      strike: false,
 *      underline: false,
 *      color: '',
 *      format: 1,
 *      border: {
 *        left: [style, color],
 *        right: [style, color],
 *        top: [style, color],
 *        bottom: [style, color],
 *      },
 *      font: {
 *        name: 'Helvetica',
 *        size: 10,
 *        bold: false,
 *        italic: false,
 *      }
 *    }
 *  ],
 *  merges: [
 *    'A1:F11',
 *    ...
 *  ],
 *  rows: {
 *    1: {
 *      height: 50,
 *      style: 1,
 *      cells: {
 *        1: {
 *          style: 2,
 *          type: 'string',
 *          text: '',
 *          value: '', // cal result
 *        }
 *      }
 *    },
 *    ...
 *  },
 *  cols: {
 *    2: { width: 100, style: 1 }
 *  }
 * }
 */
const defaultSettings = {
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  },
  showGrid: true,
  showToolbar: true,
  showContextmenu: true,
  row: {
    len: 100,
    height: 25,
  },
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60,
  },
  style: {
    bgcolor: '#ffffff',
    align: 'left',
    valign: 'middle',
    textwrap: false,
    strike: false,
    underline: false,
    color: '#0a0a0a',
    font: {
      name: 'Arial',
      size: 10,
      bold: false,
      italic: false,
    },
  },
};

const toolbarHeight = 41;


// src: cellRange
// dst: cellRange
function canPaste(src, dst, error = () => {}) {
  const { merges } = this;
  const cellRange = dst.clone();
  const [srn, scn] = src.size();
  const [drn, dcn] = dst.size();
  if (srn > drn) {
    cellRange.eri = dst.sri + srn - 1;
  }
  if (scn > dcn) {
    cellRange.eci = dst.sci + scn - 1;
  }
  if (merges.intersects(cellRange)) {
    error(Object(_locale_locale__WEBPACK_IMPORTED_MODULE_12__["t"])('error.pasteForMergedCell'));
    return false;
  }
  return true;
}
function copyPaste(srcCellRange, dstCellRange, what, autofill = false) {
  const { rows, merges } = this;
  // delete dest merge
  if (what === 'all' || what === 'format') {
    rows.deleteCells(dstCellRange, what);
    merges.deleteWithin(dstCellRange);
  }
  rows.copyPaste(srcCellRange, dstCellRange, what, autofill, (ri, ci, cell) => {
    if (cell && cell.merge) {
      // console.log('cell:', ri, ci, cell);
      const [rn, cn] = cell.merge;
      if (rn <= 0 && cn <= 0) return;
      merges.add(new _cell_range__WEBPACK_IMPORTED_MODULE_10__["CellRange"](ri, ci, ri + rn, ci + cn));
    }
  });
}

function cutPaste(srcCellRange, dstCellRange) {
  const { clipboard, rows, merges } = this;
  rows.cutPaste(srcCellRange, dstCellRange);
  merges.move(srcCellRange,
    dstCellRange.sri - srcCellRange.sri,
    dstCellRange.sci - srcCellRange.sci);
  clipboard.clear();
}

// bss: { top, bottom, left, right }
function setStyleBorder(ri, ci, bss) {
  const { styles, rows } = this;
  const cell = rows.getCellOrNew(ri, ci);
  let cstyle = {};
  if (cell.style !== undefined) {
    cstyle = _helper__WEBPACK_IMPORTED_MODULE_6__["default"].cloneDeep(styles[cell.style]);
  }
  Object.assign(cstyle, { border: bss });
  cell.style = this.addStyle(cstyle);
}

function setStyleBorders({ mode, style, color }) {
  const { styles, selector, rows } = this;
  const {
    sri, sci, eri, eci,
  } = selector.range;
  const multiple = !this.isSignleSelected();
  if (!multiple) {
    if (mode === 'inside' || mode === 'horizontal' || mode === 'vertical') {
      return;
    }
  }
  if (mode === 'outside' && !multiple) {
    setStyleBorder.call(this, sri, sci, {
      top: [style, color], bottom: [style, color], left: [style, color], right: [style, color],
    });
  } else if (mode === 'none') {
    selector.range.each((ri, ci) => {
      const cell = rows.getCell(ri, ci);
      if (cell && cell.style !== undefined) {
        const ns = _helper__WEBPACK_IMPORTED_MODULE_6__["default"].cloneDeep(styles[cell.style]);
        delete ns.border;
        // ['bottom', 'top', 'left', 'right'].forEach((prop) => {
        //   if (ns[prop]) delete ns[prop];
        // });
        cell.style = this.addStyle(ns);
      }
    });
  } else if (mode === 'all' || mode === 'inside' || mode === 'outside'
    || mode === 'horizontal' || mode === 'vertical') {
    const merges = [];
    for (let ri = sri; ri <= eri; ri += 1) {
      for (let ci = sci; ci <= eci; ci += 1) {
        // jump merges -- start
        const mergeIndexes = [];
        for (let ii = 0; ii < merges.length; ii += 1) {
          const [mri, mci, rn, cn] = merges[ii];
          if (ri === mri + rn + 1) mergeIndexes.push(ii);
          if (mri <= ri && ri <= mri + rn) {
            if (ci === mci) {
              ci += cn + 1;
              break;
            }
          }
        }
        mergeIndexes.forEach(it => merges.splice(it, 1));
        if (ci > eci) break;
        // jump merges -- end
        const cell = rows.getCell(ri, ci);
        let [rn, cn] = [0, 0];
        if (cell && cell.merge) {
          [rn, cn] = cell.merge;
          merges.push([ri, ci, rn, cn]);
        }
        const mrl = rn > 0 && ri + rn === eri;
        const mcl = cn > 0 && ci + cn === eci;
        let bss = {};
        if (mode === 'all') {
          bss = {
            bottom: [style, color],
            top: [style, color],
            left: [style, color],
            right: [style, color],
          };
        } else if (mode === 'inside') {
          if (!mcl && ci < eci) bss.right = [style, color];
          if (!mrl && ri < eri) bss.bottom = [style, color];
        } else if (mode === 'horizontal') {
          if (!mrl && ri < eri) bss.bottom = [style, color];
        } else if (mode === 'vertical') {
          if (!mcl && ci < eci) bss.right = [style, color];
        } else if (mode === 'outside' && multiple) {
          if (sri === ri) bss.top = [style, color];
          if (mrl || eri === ri) bss.bottom = [style, color];
          if (sci === ci) bss.left = [style, color];
          if (mcl || eci === ci) bss.right = [style, color];
        }
        if (Object.keys(bss).length > 0) {
          setStyleBorder.call(this, ri, ci, bss);
        }
        ci += cn;
      }
    }
  } else if (mode === 'top' || mode === 'bottom') {
    for (let ci = sci; ci <= eci; ci += 1) {
      if (mode === 'top') {
        setStyleBorder.call(this, sri, ci, { top: [style, color] });
        ci += rows.getCellMerge(sri, ci)[1];
      }
      if (mode === 'bottom') {
        setStyleBorder.call(this, eri, ci, { bottom: [style, color] });
        ci += rows.getCellMerge(eri, ci)[1];
      }
    }
  } else if (mode === 'left' || mode === 'right') {
    for (let ri = sri; ri <= eri; ri += 1) {
      if (mode === 'left') {
        setStyleBorder.call(this, ri, sci, { left: [style, color] });
        ri += rows.getCellMerge(ri, sci)[0];
      }
      if (mode === 'right') {
        setStyleBorder.call(this, ri, eci, { right: [style, color] });
        ri += rows.getCellMerge(ri, eci)[0];
      }
    }
  }
}

function getCellRowByY(y, scrollOffsety) {
  const { rows } = this;
  const fsh = this.freezeTotalHeight();
  // console.log('y:', y, ', fsh:', fsh);
  let inits = rows.height;
  if (fsh + rows.height < y) inits -= scrollOffsety;

  // handle ri in autofilter
  const frset = this.exceptRowSet;

  let ri = 0;
  let top = inits;
  let { height } = rows;
  for (; ri < rows.len; ri += 1) {
    if (top > y) break;
    if (!frset.has(ri)) {
      height = rows.getHeight(ri);
      top += height;
    }
  }
  top -= height;
  // console.log('ri:', ri, ', top:', top, ', height:', height);

  if (top <= 0) {
    return { ri: -1, top: 0, height };
  }

  return { ri: ri - 1, top, height };
}

function getCellColByX(x, scrollOffsetx) {
  const { cols } = this;
  const fsw = this.freezeTotalWidth();
  let inits = cols.indexWidth;
  if (fsw + cols.indexWidth < x) inits -= scrollOffsetx;
  const [ci, left, width] = _helper__WEBPACK_IMPORTED_MODULE_6__["default"].rangeReduceIf(
    0,
    cols.len,
    inits,
    cols.indexWidth,
    x,
    i => cols.getWidth(i),
  );
  if (left <= 0) {
    return { ci: -1, left: 0, width: cols.indexWidth };
  }
  return { ci: ci - 1, left, width };
}

class DataProxy {
  constructor(name, settings) {
    this.settings = _helper__WEBPACK_IMPORTED_MODULE_6__["default"].merge(defaultSettings, settings || {});
    // save data begin
    this.name = name || 'sheet';
    this.freeze = [0, 0];
    this.styles = []; // Array<Style>
    this.merges = new _merge__WEBPACK_IMPORTED_MODULE_5__["Merges"](); // [CellRange, ...]
    this.rows = new _row__WEBPACK_IMPORTED_MODULE_7__["Rows"](this.settings.row);
    this.cols = new _col__WEBPACK_IMPORTED_MODULE_8__["Cols"](this.settings.col);
    this.validations = new _validation__WEBPACK_IMPORTED_MODULE_9__["Validations"]();
    this.hyperlinks = {};
    this.comments = {};
    // save data end

    // don't save object
    this.selector = new _selector__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.scroll = new _scroll__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.history = new _history__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.clipboard = new _clipboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.autoFilter = new _auto_filter__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.change = () => {};
    this.exceptRowSet = new Set();
    this.sortedRowMap = new Map();
    this.unsortedRowMap = new Map();
  }

  addValidation(mode, ref, validator) {
    // console.log('mode:', mode, ', ref:', ref, ', validator:', validator);
    this.changeData(() => {
      this.validations.add(mode, ref, validator);
    });
  }

  removeValidation() {
    const { range } = this.selector;
    this.changeData(() => {
      this.validations.remove(range);
    });
  }

  getSelectedValidator() {
    const { ri, ci } = this.selector;
    const v = this.validations.get(ri, ci);
    return v ? v.validator : null;
  }

  getSelectedValidation() {
    const { ri, ci, range } = this.selector;
    const v = this.validations.get(ri, ci);
    const ret = { ref: range.toString() };
    if (v !== null) {
      ret.mode = v.mode;
      ret.validator = v.validator;
    }
    return ret;
  }

  canUndo() {
    return this.history.canUndo();
  }

  canRedo() {
    return this.history.canRedo();
  }

  undo() {
    this.history.undo(this.getData(), (d) => {
      this.setData(d);
    });
  }

  redo() {
    this.history.redo(this.getData(), (d) => {
      this.setData(d);
    });
  }

  copy() {
    this.clipboard.copy(this.selector.range);
  }

  cut() {
    this.clipboard.cut(this.selector.range);
  }

  // what: all | text | format
  paste(what = 'all', error = () => {}) {
    // console.log('sIndexes:', sIndexes);
    const { clipboard, selector } = this;
    if (clipboard.isClear()) return false;
    if (!canPaste.call(this, clipboard.range, selector.range, error)) return false;

    this.changeData(() => {
      if (clipboard.isCopy()) {
        copyPaste.call(this, clipboard.range, selector.range, what);
      } else if (clipboard.isCut()) {
        cutPaste.call(this, clipboard.range, selector.range);
      }
    });
    return true;
  }

  autofill(cellRange, what, error = () => {}) {
    const srcRange = this.selector.range;
    if (!canPaste.call(this, srcRange, cellRange, error)) return false;
    this.changeData(() => {
      copyPaste.call(this, srcRange, cellRange, what, true);
    });
    return true;
  }

  clearClipboard() {
    this.clipboard.clear();
  }

  calSelectedRangeByEnd(ri, ci) {
    const {
      selector, rows, cols, merges,
    } = this;
    let {
      sri, sci, eri, eci,
    } = selector.range;
    const cri = selector.ri;
    const cci = selector.ci;
    let [nri, nci] = [ri, ci];
    if (ri < 0) nri = rows.len - 1;
    if (ci < 0) nci = cols.len - 1;
    if (nri > cri) [sri, eri] = [cri, nri];
    else [sri, eri] = [nri, cri];
    if (nci > cci) [sci, eci] = [cci, nci];
    else [sci, eci] = [nci, cci];
    selector.range = merges.union(new _cell_range__WEBPACK_IMPORTED_MODULE_10__["CellRange"](
      sri, sci, eri, eci,
    ));
    selector.range = merges.union(selector.range);
    // console.log('selector.range:', selector.range);
    return selector.range;
  }

  calSelectedRangeByStart(ri, ci) {
    const {
      selector, rows, cols, merges,
    } = this;
    let cellRange = merges.getFirstIncludes(ri, ci);
    // console.log('cellRange:', cellRange, ri, ci, merges);
    if (cellRange === null) {
      cellRange = new _cell_range__WEBPACK_IMPORTED_MODULE_10__["CellRange"](ri, ci, ri, ci);
      if (ri === -1) {
        cellRange.sri = 0;
        cellRange.eri = rows.len - 1;
      }
      if (ci === -1) {
        cellRange.sci = 0;
        cellRange.eci = cols.len - 1;
      }
    }
    selector.range = cellRange;
    return cellRange;
  }

  setSelectedCellAttr(property, value) {
    this.changeData(() => {
      const { selector, styles, rows } = this;
      if (property === 'merge') {
        if (value) this.merge();
        else this.unmerge();
      } else if (property === 'border') {
        setStyleBorders.call(this, value);
      } else if (property === 'formula') {
        // console.log('>>>', selector.multiple());
        const { ri, ci, range } = selector;
        if (selector.multiple()) {
          const [rn, cn] = selector.size();
          const {
            sri, sci, eri, eci,
          } = range;
          if (rn > 1) {
            for (let i = sci; i <= eci; i += 1) {
              const cell = rows.getCellOrNew(eri + 1, i);
              cell.text = `=${value}(${Object(_alphabet__WEBPACK_IMPORTED_MODULE_11__["xy2expr"])(i, sri)}:${Object(_alphabet__WEBPACK_IMPORTED_MODULE_11__["xy2expr"])(i, eri)})`;
            }
          } else if (cn > 1) {
            const cell = rows.getCellOrNew(ri, eci + 1);
            cell.text = `=${value}(${Object(_alphabet__WEBPACK_IMPORTED_MODULE_11__["xy2expr"])(sci, ri)}:${Object(_alphabet__WEBPACK_IMPORTED_MODULE_11__["xy2expr"])(eci, ri)})`;
          }
        } else {
          const cell = rows.getCellOrNew(ri, ci);
          cell.text = `=${value}()`;
        }
      } else {
        selector.range.each((ri, ci) => {
          const cell = rows.getCellOrNew(ri, ci);
          let cstyle = {};
          if (cell.style !== undefined) {
            cstyle = _helper__WEBPACK_IMPORTED_MODULE_6__["default"].cloneDeep(styles[cell.style]);
          }
          if (property === 'format') {
            cstyle.format = value;
            cell.style = this.addStyle(cstyle);
          } else if (property === 'font-bold' || property === 'font-italic'
            || property === 'font-name' || property === 'font-size') {
            const nfont = {};
            nfont[property.split('-')[1]] = value;
            cstyle.font = Object.assign(cstyle.font || {}, nfont);
            cell.style = this.addStyle(cstyle);
          } else if (property === 'strike' || property === 'textwrap'
            || property === 'underline'
            || property === 'align' || property === 'valign'
            || property === 'color' || property === 'bgcolor') {
            cstyle[property] = value;
            cell.style = this.addStyle(cstyle);
          }
        });
      }
    });
  }

  // state: input | finished
  setSelectedCellText(text, state = 'input') {
    const { autoFilter, selector, rows } = this;
    const { ri, ci } = selector;
    let nri = ri;
    if (this.unsortedRowMap.has(ri)) {
      nri = this.unsortedRowMap.get(ri);
    }
    const oldCell = rows.getCell(nri, ci);
    const oldText = oldCell ? oldCell.text : '';
    this.setCellText(nri, ci, text, state);
    // replace filter.value
    if (autoFilter.active()) {
      const filter = autoFilter.getFilter(ci);
      if (filter) {
        const vIndex = filter.value.findIndex(v => v === oldText);
        if (vIndex >= 0) {
          filter.value.splice(vIndex, 1, text);
        }
        // console.log('filter:', filter, oldCell);
      }
    }
    // this.resetAutoFilter();
  }

  getSelectedCell() {
    const { ri, ci } = this.selector;
    let nri = ri;
    if (this.unsortedRowMap.has(ri)) {
      nri = this.unsortedRowMap.get(ri);
    }
    return this.rows.getCell(nri, ci);
  }

  xyInSelectedRect(x, y) {
    const {
      left, top, width, height,
    } = this.getSelectedRect();
    const x1 = x - this.cols.indexWidth;
    const y1 = y - this.rows.height;
    // console.log('x:', x, ',y:', y, 'left:', left, 'top:', top);
    return x1 > left && x1 < (left + width)
      && y1 > top && y1 < (top + height);
  }

  getSelectedRect() {
    return this.getRect(this.selector.range);
  }

  getClipboardRect() {
    const { clipboard } = this;
    if (!clipboard.isClear()) {
      return this.getRect(clipboard.range);
    }
    return { left: -100, top: -100 };
  }

  getRect(cellRange) {
    const {
      scroll, rows, cols, exceptRowSet,
    } = this;
    const {
      sri, sci, eri, eci,
    } = cellRange;
    // console.log('sri:', sri, ',sci:', sci, ', eri:', eri, ', eci:', eci);
    // no selector
    if (sri < 0 && sci < 0) {
      return {
        left: 0, l: 0, top: 0, t: 0, scroll,
      };
    }
    const left = cols.sumWidth(0, sci);
    const top = rows.sumHeight(0, sri, exceptRowSet);
    const height = rows.sumHeight(sri, eri + 1, exceptRowSet);
    const width = cols.sumWidth(sci, eci + 1);
    // console.log('sri:', sri, ', sci:', sci, ', eri:', eri, ', eci:', eci);
    let left0 = left - scroll.x;
    let top0 = top - scroll.y;
    const fsh = this.freezeTotalHeight();
    const fsw = this.freezeTotalWidth();
    if (fsw > 0 && fsw > left) {
      left0 = left;
    }
    if (fsh > 0 && fsh > top) {
      top0 = top;
    }
    return {
      l: left,
      t: top,
      left: left0,
      top: top0,
      height,
      width,
      scroll,
    };
  }

  getCellRectByXY(x, y) {
    const {
      scroll, merges, rows, cols,
    } = this;
    let { ri, top, height } = getCellRowByY.call(this, y, scroll.y);
    let { ci, left, width } = getCellColByX.call(this, x, scroll.x);
    if (ci === -1) {
      width = cols.totalWidth();
    }
    if (ri === -1) {
      height = rows.totalHeight();
    }
    if (ri >= 0 || ci >= 0) {
      const merge = merges.getFirstIncludes(ri, ci);
      if (merge) {
        ri = merge.sri;
        ci = merge.sci;
        ({
          left, top, width, height,
        } = this.cellRect(ri, ci));
      }
    }
    return {
      ri, ci, left, top, width, height,
    };
  }

  isSignleSelected() {
    const {
      sri, sci, eri, eci,
    } = this.selector.range;
    const cell = this.getCell(sri, sci);
    if (cell && cell.merge) {
      const [rn, cn] = cell.merge;
      if (sri + rn === eri && sci + cn === eci) return true;
    }
    return !this.selector.multiple();
  }

  canUnmerge() {
    const {
      sri, sci, eri, eci,
    } = this.selector.range;
    const cell = this.getCell(sri, sci);
    if (cell && cell.merge) {
      const [rn, cn] = cell.merge;
      if (sri + rn === eri && sci + cn === eci) return true;
    }
    return false;
  }

  merge() {
    const { selector, rows } = this;
    if (this.isSignleSelected()) return;
    const [rn, cn] = selector.size();
    // console.log('merge:', rn, cn);
    if (rn > 1 || cn > 1) {
      const { sri, sci } = selector.range;
      this.changeData(() => {
        const cell = rows.getCellOrNew(sri, sci);
        cell.merge = [rn - 1, cn - 1];
        this.merges.add(selector.range);
        // delete merge cells
        this.rows.deleteCells(selector.range);
        // console.log('cell:', cell, this.d);
        this.rows.setCell(sri, sci, cell);
      });
    }
  }

  unmerge() {
    const { selector } = this;
    if (!this.isSignleSelected()) return;
    const { sri, sci } = selector.range;
    this.changeData(() => {
      this.rows.deleteCell(sri, sci, 'merge');
      this.merges.deleteWithin(selector.range);
    });
  }

  canAutofilter() {
    return !this.autoFilter.active();
  }

  autofilter() {
    const { autoFilter, selector } = this;
    this.changeData(() => {
      if (autoFilter.active()) {
        autoFilter.clear();
        this.exceptRowSet = new Set();
        this.sortedRowMap = new Map();
        this.unsortedRowMap = new Map();
      } else {
        autoFilter.ref = selector.range.toString();
      }
    });
  }

  setAutoFilter(ci, order, operator, value) {
    const { autoFilter } = this;
    autoFilter.addFilter(ci, operator, value);
    autoFilter.setSort(ci, order);
    this.resetAutoFilter();
  }

  resetAutoFilter() {
    const { autoFilter, rows } = this;
    if (!autoFilter.active()) return;
    const { sort } = autoFilter;
    const { rset, fset } = autoFilter.filteredRows((r, c) => rows.getCell(r, c));
    const fary = Array.from(fset);
    const oldAry = Array.from(fset);
    if (sort) {
      fary.sort((a, b) => {
        if (sort.order === 'asc') return a - b;
        if (sort.order === 'desc') return b - a;
        return 0;
      });
    }
    this.exceptRowSet = rset;
    this.sortedRowMap = new Map();
    this.unsortedRowMap = new Map();
    fary.forEach((it, index) => {
      this.sortedRowMap.set(oldAry[index], it);
      this.unsortedRowMap.set(it, oldAry[index]);
    });
  }

  deleteCell(what = 'all') {
    const { selector } = this;
    this.changeData(() => {
      this.rows.deleteCells(selector.range, what);
      if (what === 'all' || what === 'format') {
        this.merges.deleteWithin(selector.range);
      }
    });
  }

  // type: row | column
  insert(type, n = 1) {
    this.changeData(() => {
      const { sri, sci } = this.selector.range;
      const { rows, merges, cols } = this;
      let si = sri;
      if (type === 'row') {
        rows.insert(sri, n);
      } else if (type === 'column') {
        rows.insertColumn(sci, n);
        si = sci;
        cols.len += 1;
      }
      merges.shift(type, si, n, (ri, ci, rn, cn) => {
        const cell = rows.getCell(ri, ci);
        cell.merge[0] += rn;
        cell.merge[1] += cn;
      });
    });
  }

  // type: row | column
  delete(type) {
    this.changeData(() => {
      const {
        rows, merges, selector, cols,
      } = this;
      const { range } = selector;
      const {
        sri, sci, eri, eci,
      } = selector.range;
      const [rsize, csize] = selector.range.size();
      let si = sri;
      let size = rsize;
      if (type === 'row') {
        rows.delete(sri, eri);
      } else if (type === 'column') {
        rows.deleteColumn(sci, eci);
        si = range.sci;
        size = csize;
        cols.len -= 1;
      }
      // console.log('type:', type, ', si:', si, ', size:', size);
      merges.shift(type, si, -size, (ri, ci, rn, cn) => {
        // console.log('ri:', ri, ', ci:', ci, ', rn:', rn, ', cn:', cn);
        const cell = rows.getCell(ri, ci);
        cell.merge[0] += rn;
        cell.merge[1] += cn;
        if (cell.merge[0] === 0 && cell.merge[1] === 0) {
          delete cell.merge;
        }
      });
    });
  }

  scrollx(x, cb) {
    const { scroll, freeze, cols } = this;
    const [, fci] = freeze;
    const [
      ci, left, width,
    ] = _helper__WEBPACK_IMPORTED_MODULE_6__["default"].rangeReduceIf(fci, cols.len, 0, 0, x, i => cols.getWidth(i));
    // console.log('fci:', fci, ', ci:', ci);
    let x1 = left;
    if (x > 0) x1 += width;
    if (scroll.x !== x1) {
      scroll.ci = x > 0 ? ci : 0;
      scroll.x = x1;
      cb();
    }
  }

  scrolly(y, cb) {
    const { scroll, freeze, rows } = this;
    const [fri] = freeze;
    const [
      ri, top, height,
    ] = _helper__WEBPACK_IMPORTED_MODULE_6__["default"].rangeReduceIf(fri, rows.len, 0, 0, y, i => rows.getHeight(i));
    let y1 = top;
    if (y > 0) y1 += height;
    // console.log('ri:', ri, ' ,y:', y1);
    if (scroll.y !== y1) {
      scroll.ri = y > 0 ? ri : 0;
      scroll.y = y1;
      cb();
    }
  }

  cellRect(ri, ci) {
    const { rows, cols } = this;
    const left = cols.sumWidth(0, ci);
    const top = rows.sumHeight(0, ri);
    const cell = rows.getCell(ri, ci);
    let width = cols.getWidth(ci);
    let height = rows.getHeight(ri);
    if (cell !== null) {
      if (cell.merge) {
        const [rn, cn] = cell.merge;
        // console.log('cell.merge:', cell.merge);
        if (rn > 0) {
          for (let i = 1; i <= rn; i += 1) {
            height += rows.getHeight(ri + i);
          }
        }
        if (cn > 0) {
          for (let i = 1; i <= cn; i += 1) {
            width += cols.getWidth(ci + i);
          }
        }
      }
    }
    // console.log('data:', this.d);
    return {
      left, top, width, height, cell,
    };
  }

  getCell(ri, ci) {
    return this.rows.getCell(ri, ci);
  }

  getCellTextOrDefault(ri, ci) {
    const cell = this.getCell(ri, ci);
    return (cell && cell.text) ? cell.text : '';
  }

  getCellStyle(ri, ci) {
    const cell = this.getCell(ri, ci);
    if (cell && cell.style !== undefined) {
      return this.styles[cell.style];
    }
    return null;
  }

  getCellStyleOrDefault(ri, ci) {
    const { styles, rows } = this;
    const cell = rows.getCell(ri, ci);
    const cellStyle = (cell && cell.style !== undefined) ? styles[cell.style] : {};
    return _helper__WEBPACK_IMPORTED_MODULE_6__["default"].merge(this.defaultStyle(), cellStyle);
  }

  getSelectedCellStyle() {
    const { ri, ci } = this.selector;
    return this.getCellStyleOrDefault(ri, ci);
  }

  // state: input | finished
  setCellText(ri, ci, text, state) {
    const { rows, history, validations } = this;
    if (state === 'finished') {
      rows.setCellText(ri, ci, '');
      history.add(this.getData());
      rows.setCellText(ri, ci, text);
    } else {
      rows.setCellText(ri, ci, text);
      this.change(this.getData());
    }
    // validator
    validations.validate(ri, ci, text);
  }

  freezeIsActive() {
    const [ri, ci] = this.freeze;
    return ri > 0 || ci > 0;
  }

  setFreeze(ri, ci) {
    this.changeData(() => {
      this.freeze = [ri, ci];
    });
  }

  freezeTotalWidth() {
    return this.cols.sumWidth(0, this.freeze[1]);
  }

  freezeTotalHeight() {
    return this.rows.sumHeight(0, this.freeze[0]);
  }

  setRowHeight(ri, height) {
    this.changeData(() => {
      this.rows.setHeight(ri, height);
    });
  }

  setColWidth(ci, width) {
    this.changeData(() => {
      this.cols.setWidth(ci, width);
    });
  }

  viewHeight() {
    const { view, showToolbar } = this.settings;
    let h = view.height();
    if (showToolbar) {
      h -= toolbarHeight;
    }
    return h;
  }

  viewWidth() {
    return this.settings.view.width();
  }

  freezeViewRange() {
    const [ri, ci] = this.freeze;
    return new _cell_range__WEBPACK_IMPORTED_MODULE_10__["CellRange"](0, 0, ri - 1, ci - 1, this.freezeTotalWidth(), this.freezeTotalHeight());
  }

  exceptRowTotalHeight(sri, eri) {
    const { exceptRowSet, rows } = this;
    const exceptRows = Array.from(exceptRowSet);
    let exceptRowTH = 0;
    exceptRows.forEach((ri) => {
      if (ri < sri || ri > eri) {
        const height = rows.getHeight(ri);
        exceptRowTH += height;
      }
    });
    return exceptRowTH;
  }

  viewRange() {
    const {
      scroll, rows, cols, freeze, exceptRowSet,
    } = this;
    let { ri, ci } = scroll;
    if (ri <= 0) [ri] = freeze;
    if (ci <= 0) [, ci] = freeze;

    let [x, y] = [0, 0];
    let [eri, eci] = [rows.len, cols.len];
    for (let i = ri; i < rows.len; i += 1) {
      if (!exceptRowSet.has(i)) {
        y += rows.getHeight(i);
        eri = i;
      }
      if (y > this.viewHeight()) break;
    }
    for (let j = ci; j < cols.len; j += 1) {
      x += cols.getWidth(j);
      eci = j;
      if (x > this.viewWidth()) break;
    }
    // console.log(ri, ci, eri, eci, x, y);
    return new _cell_range__WEBPACK_IMPORTED_MODULE_10__["CellRange"](ri, ci, eri, eci, x, y);
  }

  eachMergesInView(viewRange, cb) {
    this.merges.filterIntersects(viewRange)
      .forEach(it => cb(it));
  }

  rowEach(min, max, cb) {
    let y = 0;
    const { rows } = this;
    const frset = this.exceptRowSet;
    const frary = [...frset];
    let offset = 0;
    for (let i = 0; i < frary.length; i += 1) {
      if (frary[i] < min) {
        offset += 1;
      }
    }
    // console.log('min:', min, ', max:', max, ', scroll:', scroll);
    for (let i = min + offset; i <= max + offset; i += 1) {
      if (frset.has(i)) {
        offset += 1;
      } else {
        const rowHeight = rows.getHeight(i);
        cb(i, y, rowHeight);
        y += rowHeight;
        if (y > this.viewHeight()) break;
      }
    }
  }

  colEach(min, max, cb) {
    let x = 0;
    const { cols } = this;
    for (let i = min; i <= max; i += 1) {
      const colWidth = cols.getWidth(i);
      cb(i, x, colWidth);
      x += colWidth;
      if (x > this.viewWidth()) break;
    }
  }

  defaultStyle() {
    return this.settings.style;
  }

  addStyle(nstyle) {
    const { styles } = this;
    // console.log('old.styles:', styles, nstyle);
    for (let i = 0; i < styles.length; i += 1) {
      const style = styles[i];
      if (_helper__WEBPACK_IMPORTED_MODULE_6__["default"].equals(style, nstyle)) return i;
    }
    styles.push(nstyle);
    return styles.length - 1;
  }

  changeData(cb) {
    this.history.add(this.getData());
    cb();
    this.change(this.getData());
  }

  setData(d) {
    Object.keys(d).forEach((property) => {
      if (property === 'merges' || property === 'rows'
        || property === 'cols' || property === 'validations') {
        this[property].setData(d[property]);
      } else if (property === 'freeze') {
        const [x, y] = Object(_alphabet__WEBPACK_IMPORTED_MODULE_11__["expr2xy"])(d[property]);
        this.freeze = [y, x];
      } else if (d[property] !== undefined) {
        this[property] = d[property];
      }
    });
    return this;
  }

  getData() {
    const {
      name, freeze, styles, merges, rows, cols, validations, autoFilter,
    } = this;
    return {
      name,
      freeze: Object(_alphabet__WEBPACK_IMPORTED_MODULE_11__["xy2expr"])(freeze[1], freeze[0]),
      styles,
      merges: merges.getData(),
      rows: rows.getData(),
      cols: cols.getData(),
      validations: validations.getData(),
      autofilter: autoFilter.getData(),
    };
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/font.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/font.js ***!
  \*************************************************************************************/
/*! exports provided: default, fontSizes, fonts, baseFonts, getFontSizePxByPt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizes", function() { return fontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFonts", function() { return baseFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontSizePxByPt", function() { return getFontSizePxByPt; });
const baseFonts = [
  { key: 'Arial', title: 'Arial' },
  { key: 'Helvetica', title: 'Helvetica' },
  { key: 'Source Sans Pro', title: 'Source Sans Pro' },
  { key: 'Comic Sans MS', title: 'Comic Sans MS' },
  { key: 'Courier New', title: 'Courier New' },
  { key: 'Verdana', title: 'Verdana' },
  { key: 'Lato', title: 'Lato' },
];

const fontSizes = [
  { pt: 7.5, px: 10 },
  { pt: 8, px: 11 },
  { pt: 9, px: 12 },
  { pt: 10, px: 13 },
  { pt: 10.5, px: 14 },
  { pt: 11, px: 15 },
  { pt: 12, px: 16 },
  { pt: 14, px: 18.7 },
  { pt: 15, px: 20 },
  { pt: 16, px: 21.3 },
  { pt: 18, px: 24 },
  { pt: 22, px: 29.3 },
  { pt: 24, px: 32 },
  { pt: 26, px: 34.7 },
  { pt: 36, px: 48 },
  { pt: 42, px: 56 },
  // { pt: 54, px: 71.7 },
  // { pt: 63, px: 83.7 },
  // { pt: 72, px: 95.6 },
];

function getFontSizePxByPt(pt) {
  for (let i = 0; i < fontSizes.length; i += 1) {
    const fontSize = fontSizes[i];
    if (fontSize.pt === pt) {
      return fontSize.px;
    }
  }
  return pt;
}

const fonts = (ary = []) => {
  const map = {};
  baseFonts.concat(ary).forEach((f) => {
    map[f.key] = f;
  });
  return map;
};

/* harmony default export */ __webpack_exports__["default"] = ({});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/format.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/format.js ***!
  \***************************************************************************************/
/*! exports provided: default, formatm, baseFormats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatm", function() { return formatm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFormats", function() { return baseFormats; });
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");


const formatStringRender = v => v;

const formatNumberRender = (v) => {
  if (/^(-?\d*.?\d*)$/.test(v)) {
    const v1 = Number(v).toFixed(2).toString();
    const [first, ...parts] = v1.split('\\.');
    return [first.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'), ...parts];
  }
  return v;
};

const baseFormats = [
  {
    key: 'normal',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.normal'),
    type: 'string',
    render: formatStringRender,
  },
  {
    key: 'text',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.text'),
    type: 'string',
    render: formatStringRender,
  },
  {
    key: 'number',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.number'),
    type: 'number',
    label: '1,000.12',
    render: formatNumberRender,
  },
  {
    key: 'percent',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.percent'),
    type: 'number',
    label: '10.12%',
    render: v => `${v}%`,
  },
  {
    key: 'rmb',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.rmb'),
    type: 'number',
    label: '￥10.00',
    render: v => `￥${formatNumberRender(v)}`,
  },
  {
    key: 'usd',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.usd'),
    type: 'number',
    label: '$10.00',
    render: v => `$${formatNumberRender(v)}`,
  },
  {
    key: 'date',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.date'),
    type: 'date',
    label: '26/09/2008',
    render: formatStringRender,
  },
  {
    key: 'time',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.time'),
    type: 'date',
    label: '15:59:00',
    render: formatStringRender,
  },
  {
    key: 'datetime',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.datetime'),
    type: 'date',
    label: '26/09/2008 15:59:00',
    render: formatStringRender,
  },
  {
    key: 'duration',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('format.duration'),
    type: 'date',
    label: '24:01:00',
    render: formatStringRender,
  },
];

// const formats = (ary = []) => {
//   const map = {};
//   baseFormats.concat(ary).forEach((f) => {
//     map[f.key] = f;
//   });
//   return map;
// };
const formatm = {};
baseFormats.forEach((f) => {
  formatm[f.key] = f;
});

/* harmony default export */ __webpack_exports__["default"] = ({
});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/formula.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/formula.js ***!
  \****************************************************************************************/
/*! exports provided: default, formulam, formulas, baseFormulas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formulam", function() { return formulam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formulas", function() { return formulas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFormulas", function() { return baseFormulas; });
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");
/**
  formula:
    key
    title
    render
*/


const baseFormulas = [
  {
    key: 'SUM',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('formula.sum'),
    render: ary => ary.reduce((a, b) => Number(a) + Number(b), 0),
  },
  {
    key: 'AVERAGE',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('formula.average'),
    render: ary => ary.reduce((a, b) => Number(a) + Number(b), 0) / ary.length,
  },
  {
    key: 'MAX',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('formula.max'),
    render: ary => Math.max(...ary.map(v => Number(v))),
  },
  {
    key: 'MIN',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('formula.min'),
    render: ary => Math.min(...ary.map(v => Number(v))),
  },
  {
    key: 'CONCAT',
    title: Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["tf"])('formula.concat'),
    render: ary => ary.join(''),
  },
];

const formulas = baseFormulas;

// const formulas = (formulaAry = []) => {
//   const formulaMap = {};
//   baseFormulas.concat(formulaAry).forEach((f) => {
//     formulaMap[f.key] = f;
//   });
//   return formulaMap;
// };
const formulam = {};
baseFormulas.forEach((f) => {
  formulam[f.key] = f;
});

/* harmony default export */ __webpack_exports__["default"] = ({
});




/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/helper.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/helper.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-param-reassign */
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const mergeDeep = (object = {}, ...sources) => {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      const v = source[key];
      // console.log('k:', key, ', v:', source[key], typeof v, v instanceof Object);
      if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
        object[key] = v;
      } else if (typeof v !== 'function' && !Array.isArray(v) && v instanceof Object) {
        object[key] = object[key] || {};
        mergeDeep(object[key], v);
      } else {
        object[key] = v;
      }
    });
  });
  // console.log('::', object);
  return object;
};

function equals(obj1, obj2) {
  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) return false;
  for (let i = 0; i < keys.length; i += 1) {
    const k = keys[i];
    const v1 = obj1[k];
    const v2 = obj2[k];
    if (v2 === undefined) return false;
    if (typeof v1 === 'string' || typeof v1 === 'number' || typeof v1 === 'boolean') {
      if (v1 !== v2) return false;
    } else if (Array.isArray(v1)) {
      if (v1.length !== v2.length) return false;
      for (let ai = 0; ai < v1.length; ai += 1) {
        if (!equals(v1[ai], v2[ai])) return false;
      }
    } else if (typeof v1 !== 'function' && !Array.isArray(v1) && v1 instanceof Object) {
      if (!equals(v1, v2)) return false;
    }
  }
  return true;
}

/*
  objOrAry: obejct or Array
  cb: (value, index | key) => { return value }
*/
const sum = (objOrAry, cb = value => value) => {
  let total = 0;
  let size = 0;
  Object.keys(objOrAry).forEach((key) => {
    total += cb(objOrAry[key], key);
    size += 1;
  });
  return [total, size];
};

function deleteProperty(obj, property) {
  const oldv = obj[`${property}`];
  delete obj[`${property}`];
  return oldv;
}

function rangeReduceIf(min, max, inits, initv, ifv, getv) {
  let s = inits;
  let v = initv;
  let i = min;
  for (; i < max; i += 1) {
    if (s > ifv) break;
    v = getv(i);
    s += v;
  }
  return [i, s - v, v];
}

function rangeSum(min, max, getv) {
  let s = 0;
  for (let i = min; i < max; i += 1) {
    s += getv(i);
  }
  return s;
}

function rangeEach(min, max, cb) {
  for (let i = min; i < max; i += 1) {
    cb(i);
  }
}

function arrayEquals(a1, a2) {
  if (a1.length === a2.length) {
    for (let i = 0; i < a1.length; i += 1) {
      if (a1[i] !== a2[i]) return false;
    }
  } else return false;
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  cloneDeep,
  merge: (...sources) => mergeDeep({}, ...sources),
  equals,
  arrayEquals,
  sum,
  rangeEach,
  rangeSum,
  rangeReduceIf,
  deleteProperty,
});


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/history.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/history.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
// import helper from '../helper';

class History {
  constructor() {
    this.undoItems = [];
    this.redoItems = [];
  }

  add(data) {
    this.undoItems.push(JSON.stringify(data));
    this.redoItems = [];
  }

  canUndo() {
    return this.undoItems.length > 0;
  }

  canRedo() {
    return this.redoItems.length > 0;
  }

  undo(currentd, cb) {
    const { undoItems, redoItems } = this;
    if (this.canUndo()) {
      redoItems.push(JSON.stringify(currentd));
      cb(JSON.parse(undoItems.pop()));
    }
  }

  redo(currentd, cb) {
    const { undoItems, redoItems } = this;
    if (this.canRedo()) {
      undoItems.push(JSON.stringify(currentd));
      cb(JSON.parse(redoItems.pop()));
    }
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/merge.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/merge.js ***!
  \**************************************************************************************/
/*! exports provided: default, Merges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Merges", function() { return Merges; });
/* harmony import */ var _cell_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell_range */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js");


class Merges {
  constructor(d = []) {
    this._ = d;
  }

  forEach(cb) {
    this._.forEach(cb);
  }

  deleteWithin(cr) {
    this._ = this._.filter(it => !it.within(cr));
  }

  getFirstIncludes(ri, ci) {
    for (let i = 0; i < this._.length; i += 1) {
      const it = this._[i];
      if (it.includes(ri, ci)) {
        return it;
      }
    }
    return null;
  }

  filterIntersects(cellRange) {
    return new Merges(this._.filter(it => it.intersects(cellRange)));
  }

  intersects(cellRange) {
    for (let i = 0; i < this._.length; i += 1) {
      const it = this._[i];
      if (it.intersects(cellRange)) {
        // console.log('intersects');
        return true;
      }
    }
    return false;
  }

  union(cellRange) {
    let cr = cellRange;
    this._.forEach((it) => {
      if (it.intersects(cr)) {
        cr = it.union(cr);
      }
    });
    return cr;
  }

  add(cr) {
    this.deleteWithin(cr);
    this._.push(cr);
  }

  // type: row | column
  shift(type, index, n, cbWithin) {
    this._.forEach((cellRange) => {
      const {
        sri, sci, eri, eci,
      } = cellRange;
      const range = cellRange;
      if (type === 'row') {
        if (sri >= index) {
          range.sri += n;
          range.eri += n;
        } else if (sri < index && index <= eri) {
          range.eri += n;
          cbWithin(sri, sci, n, 0);
        }
      } else if (type === 'column') {
        if (sci >= index) {
          range.sci += n;
          range.eci += n;
        } else if (sci < index && index <= eci) {
          range.eci += n;
          cbWithin(sri, sci, 0, n);
        }
      }
    });
  }

  move(cellRange, rn, cn) {
    this._.forEach((it1) => {
      const it = it1;
      if (it.within(cellRange)) {
        it.eri += rn;
        it.sri += rn;
        it.sci += cn;
        it.eci += cn;
      }
    });
  }

  setData(merges) {
    this._ = merges.map(merge => _cell_range__WEBPACK_IMPORTED_MODULE_0__["CellRange"].valueOf(merge));
    return this;
  }

  getData() {
    return this._.map(merge => merge.toString());
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/row.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/row.js ***!
  \************************************************************************************/
/*! exports provided: default, Rows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rows", function() { return Rows; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/helper.js");
/* harmony import */ var _alphabet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alphabet */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/alphabet.js");



class Rows {
  constructor({ len, height }) {
    this._ = {};
    this.len = len;
    // default row height
    this.height = height;
  }

  getHeight(ri) {
    const row = this.get(ri);
    if (row && row.height) {
      return row.height;
    }
    return this.height;
  }

  setHeight(ri, v) {
    const row = this.getOrNew(ri);
    row.height = v;
  }

  setStyle(ri, style) {
    const row = this.getOrNew(ri);
    row.style = style;
  }

  sumHeight(min, max, exceptSet) {
    return _helper__WEBPACK_IMPORTED_MODULE_0__["default"].rangeSum(min, max, (i) => {
      if (exceptSet && exceptSet.has(i)) return 0;
      return this.getHeight(i);
    });
  }

  totalHeight() {
    return this.sumHeight(0, this.len);
  }

  get(ri) {
    return this._[ri];
  }

  getOrNew(ri) {
    this._[ri] = this._[ri] || { cells: {} };
    return this._[ri];
  }

  getCell(ri, ci) {
    const row = this.get(ri);
    if (row !== undefined && row.cells !== undefined && row.cells[ci] !== undefined) {
      return row.cells[ci];
    }
    return null;
  }

  getCellMerge(ri, ci) {
    const cell = this.getCell(ri, ci);
    if (cell && cell.merge) return cell.merge;
    return [0, 0];
  }

  getCellOrNew(ri, ci) {
    const row = this.getOrNew(ri);
    row.cells[ci] = row.cells[ci] || {};
    return row.cells[ci];
  }

  // what: all | text | format
  setCell(ri, ci, cell, what = 'all') {
    const row = this.getOrNew(ri);
    if (what === 'all') {
      row.cells[ci] = cell;
    } else if (what === 'text') {
      row.cells[ci] = row.cells[ci] || {};
      row.cells[ci].text = cell.text;
    } else if (what === 'format') {
      row.cells[ci] = row.cells[ci] || {};
      row.cells[ci].style = cell.style;
      if (cell.merge) row.cells[ci].merge = cell.merge;
    }
  }

  setCellText(ri, ci, text) {
    const cell = this.getCellOrNew(ri, ci);
    cell.text = text;
  }

  // what: all | format | text
  copyPaste(srcCellRange, dstCellRange, what, autofill = false, cb = () => {}) {
    const {
      sri, sci, eri, eci,
    } = srcCellRange;
    const dsri = dstCellRange.sri;
    const dsci = dstCellRange.sci;
    const deri = dstCellRange.eri;
    const deci = dstCellRange.eci;
    const [rn, cn] = srcCellRange.size();
    const [drn, dcn] = dstCellRange.size();
    // console.log(srcIndexes, dstIndexes);
    let isAdd = true;
    let dn = 0;
    if (deri < sri || deci < sci) {
      isAdd = false;
      if (deri < sri) dn = drn;
      else dn = dcn;
    }
    // console.log('drn:', drn, ', dcn:', dcn, dn, isAdd);
    for (let i = sri; i <= eri; i += 1) {
      if (this._[i]) {
        for (let j = sci; j <= eci; j += 1) {
          if (this._[i].cells && this._[i].cells[j]) {
            for (let ii = dsri; ii <= deri; ii += rn) {
              for (let jj = dsci; jj <= deci; jj += cn) {
                const nri = ii + (i - sri);
                const nci = jj + (j - sci);
                const ncell = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].cloneDeep(this._[i].cells[j]);
                // ncell.text
                if (autofill && ncell && ncell.text && ncell.text.length > 0) {
                  const { text } = ncell;
                  let n = (jj - dsci) + (ii - dsri) + 2;
                  if (!isAdd) {
                    n -= dn + 1;
                  }
                  if (text[0] === '=') {
                    ncell.text = text.replace(/\w{1,3}\d/g, (word) => {
                      let [xn, yn] = [0, 0];
                      if (sri === dsri) {
                        xn = n - 1;
                        // if (isAdd) xn -= 1;
                      } else {
                        yn = n - 1;
                      }
                      // console.log('xn:', xn, ', yn:', yn, word, expr2expr(word, xn, yn));
                      return Object(_alphabet__WEBPACK_IMPORTED_MODULE_1__["expr2expr"])(word, xn, yn);
                    });
                  } else {
                    const result = /[\\.\d]+$/.exec(text);
                    // console.log('result:', result);
                    if (result !== null) {
                      const index = Number(result[0]) + n - 1;
                      ncell.text = text.substring(0, result.index) + index;
                    }
                  }
                }
                // console.log('ncell:', nri, nci, ncell);
                this.setCell(nri, nci, ncell, what);
                cb(nri, nci, ncell);
              }
            }
          }
        }
      }
    }
  }

  cutPaste(srcCellRange, dstCellRange) {
    const ncellmm = {};
    this.each((ri) => {
      this.eachCells(ri, (ci) => {
        let nri = parseInt(ri, 10);
        let nci = parseInt(ci, 10);
        if (srcCellRange.includes(ri, ci)) {
          nri = dstCellRange.sri + (nri - srcCellRange.sri);
          nci = dstCellRange.sci + (nci - srcCellRange.sci);
        }
        ncellmm[nri] = ncellmm[nri] || { cells: {} };
        ncellmm[nri].cells[nci] = this._[ri].cells[ci];
      });
    });
    this._ = ncellmm;
  }

  insert(sri, n = 1) {
    const ndata = {};
    this.each((ri, row) => {
      let nri = parseInt(ri, 10);
      if (nri >= sri) {
        nri += n;
      }
      ndata[nri] = row;
    });
    this._ = ndata;
    this.len += n;
  }

  delete(sri, eri) {
    const n = eri - sri + 1;
    const ndata = {};
    this.each((ri, row) => {
      const nri = parseInt(ri, 10);
      if (nri < sri) {
        ndata[nri] = row;
      } else if (ri > eri) {
        ndata[nri - n] = row;
      }
    });
    this._ = ndata;
    this.len -= n;
  }

  insertColumn(sci, n = 1) {
    this.each((ri, row) => {
      const rndata = {};
      this.eachCells(ri, (ci, cell) => {
        let nci = parseInt(ci, 10);
        if (nci >= sci) {
          nci += n;
        }
        rndata[nci] = cell;
      });
      row.cells = rndata;
    });
  }

  deleteColumn(sci, eci) {
    const n = eci - sci + 1;
    this.each((ri, row) => {
      const rndata = {};
      this.eachCells(ri, (ci, cell) => {
        const nci = parseInt(ci, 10);
        if (nci < sci) {
          rndata[nci] = cell;
        } else if (nci > eci) {
          rndata[nci - n] = cell;
        }
      });
      row.cells = rndata;
    });
  }

  // what: all | text | format | merge
  deleteCells(cellRange, what = 'all') {
    cellRange.each((i, j) => {
      this.deleteCell(i, j, what);
    });
  }

  // what: all | text | format | merge
  deleteCell(ri, ci, what = 'all') {
    const row = this.get(ri);
    if (row !== null) {
      const cell = this.getCell(ri, ci);
      if (cell !== null) {
        if (what === 'all') {
          delete row.cells[ci];
        } else if (what === 'text') {
          if (cell.text) delete cell.text;
          if (cell.value) delete cell.value;
        } else if (what === 'format') {
          if (cell.style !== undefined) delete cell.style;
          if (cell.merge) delete cell.merge;
        } else if (what === 'merge') {
          if (cell.merge) delete cell.merge;
        }
      }
    }
  }

  each(cb) {
    Object.entries(this._).forEach(([ri, row]) => {
      cb(ri, row);
    });
  }

  eachCells(ri, cb) {
    if (this._[ri] && this._[ri].cells) {
      Object.entries(this._[ri].cells).forEach(([ci, cell]) => {
        cb(ci, cell);
      });
    }
  }

  setData(d) {
    if (d.len) {
      this.len = d.len;
      delete d.len;
    }
    this._ = d;
  }

  getData() {
    const { len } = this;
    return Object.assign({ len }, this._);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/scroll.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/scroll.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
class Scroll {
  constructor() {
    this.x = 0; // left
    this.y = 0; // top
    this.ri = 0; // cell row-index
    this.ci = 0; // cell col-index
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/selector.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/selector.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selector; });
/* harmony import */ var _cell_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell_range */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js");


class Selector {
  constructor() {
    this.range = new _cell_range__WEBPACK_IMPORTED_MODULE_0__["CellRange"](0, 0, 0, 0);
    this.ri = 0;
    this.ci = 0;
  }

  multiple() {
    return this.range.multiple();
  }

  setIndexes(ri, ci) {
    this.ri = ri;
    this.ci = ci;
  }

  size() {
    return this.range.size();
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/validation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/validation.js ***!
  \*******************************************************************************************/
/*! exports provided: default, Validations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validations", function() { return Validations; });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/validator.js");
/* harmony import */ var _cell_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell_range */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/cell_range.js");



class Validation {
  constructor(mode, refs, validator) {
    this.refs = refs;
    this.mode = mode; // cell
    this.validator = validator;
  }

  includes(ri, ci) {
    const { refs } = this;
    for (let i = 0; i < refs.length; i += 1) {
      const cr = _cell_range__WEBPACK_IMPORTED_MODULE_1__["CellRange"].valueOf(refs[i]);
      if (cr.includes(ri, ci)) return true;
    }
    return false;
  }

  addRef(ref) {
    this.remove(_cell_range__WEBPACK_IMPORTED_MODULE_1__["CellRange"].valueOf(ref));
    this.refs.push(ref);
  }

  remove(cellRange) {
    const nrefs = [];
    this.refs.forEach((it) => {
      const cr = _cell_range__WEBPACK_IMPORTED_MODULE_1__["CellRange"].valueOf(it);
      if (cr.intersects(cellRange)) {
        const crs = cr.difference(cellRange);
        crs.forEach(it1 => nrefs.push(it1.toString()));
      } else {
        nrefs.push(it);
      }
    });
    this.refs = nrefs;
  }

  getData() {
    const { refs, mode, validator } = this;
    const {
      type, required, operator, value,
    } = validator;
    return {
      refs, mode, type, required, operator, value,
    };
  }

  static valueOf({
    refs, mode, type, required, operator, value,
  }) {
    return new Validation(mode, refs, new _validator__WEBPACK_IMPORTED_MODULE_0__["default"](type, required, value, operator));
  }
}
class Validations {
  constructor() {
    this._ = [];
    // ri_ci: errMessage
    this.errors = new Map();
  }

  getError(ri, ci) {
    return this.errors.get(`${ri}_${ci}`);
  }

  validate(ri, ci, text) {
    const v = this.get(ri, ci);
    const key = `${ri}_${ci}`;
    const { errors } = this;
    if (v !== null) {
      const [flag, message] = v.validator.validate(text);
      if (!flag) {
        errors.set(key, message);
      } else {
        errors.delete(key);
      }
    } else {
      errors.delete(key);
    }
    return true;
  }

  // type: date|number|phone|email|list
  // validator: { required, value, operator }
  add(mode, ref, {
    type, required, value, operator,
  }) {
    const validator = new _validator__WEBPACK_IMPORTED_MODULE_0__["default"](
      type, required, value, operator,
    );
    const v = this.getByValidator(validator);
    if (v !== null) {
      v.addRef(ref);
    } else {
      this._.push(new Validation(mode, [ref], validator));
    }
  }

  getByValidator(validator) {
    for (let i = 0; i < this._.length; i += 1) {
      const v = this._[i];
      if (v.validator.equals(validator)) {
        return v;
      }
    }
    return null;
  }

  get(ri, ci) {
    for (let i = 0; i < this._.length; i += 1) {
      const v = this._[i];
      if (v.includes(ri, ci)) return v;
    }
    return null;
  }

  remove(cellRange) {
    this.each((it) => {
      it.remove(cellRange);
    });
  }

  each(cb) {
    this._.forEach(it => cb(it));
  }

  getData() {
    return this._.filter(it => it.refs.length > 0).map(it => it.getData());
  }

  setData(d) {
    this._ = d.map(it => Validation.valueOf(it));
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({});



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/validator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/validator.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validator; });
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/helper.js");



const rules = {
  phone: /^[1-9]\d{10}$/,
  email: /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/,
};

function returnMessage(flag, key, ...arg) {
  let message = '';
  if (!flag) {
    message = Object(_locale_locale__WEBPACK_IMPORTED_MODULE_0__["t"])(`validation.${key}`, ...arg);
  }
  return [flag, message];
}

class Validator {
  // operator: b|nb|eq|neq|lt|lte|gt|gte
  // type: date|number|list|phone|email
  constructor(type, required, value, operator) {
    this.required = required;
    this.value = value;
    this.type = type;
    this.operator = operator;
    this.message = '';
  }

  parseValue(v) {
    const { type } = this;
    if (type === 'date') {
      return new Date(v);
    }
    if (type === 'number') {
      return Number(v);
    }
    return v;
  }

  equals(other) {
    let flag = this.type === other.type
      && this.required === other.required
      && this.operator === other.operator;
    if (flag) {
      if (Array.isArray(this.value)) {
        flag = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].arrayEquals(this.value, other.value);
      } else {
        flag = this.value === other.value;
      }
    }
    return flag;
  }

  values() {
    return this.value.split(',');
  }

  validate(v) {
    const {
      required, operator, value, type,
    } = this;
    if (required && /^\s*$/.test(v)) {
      return returnMessage(false, 'required');
    }
    if (/^\s*$/.test(v)) return [true];
    if (rules[type] && !rules[type].test(v)) {
      return returnMessage(false, 'notMatch');
    }
    if (type === 'list') {
      return returnMessage(this.values().includes(v), 'notIn');
    }
    if (operator) {
      const v1 = this.parseValue(v);
      if (operator === 'be') {
        const [min, max] = value;
        return returnMessage(
          v1 >= this.parseValue(min) && v1 <= this.parseValue(max),
          'between',
          min,
          max,
        );
      }
      if (operator === 'nbe') {
        const [min, max] = value;
        return returnMessage(
          v1 < this.parseValue(min) || v1 > this.parseValue(max),
          'notBetween',
          min,
          max,
        );
      }
      if (operator === 'eq') {
        return returnMessage(
          v1 === this.parseValue(value),
          'equal',
          value,
        );
      }
      if (operator === 'neq') {
        return returnMessage(
          v1 !== this.parseValue(value),
          'notEqual',
          value,
        );
      }
      if (operator === 'lt') {
        return returnMessage(
          v1 < this.parseValue(value),
          'lessThan',
          value,
        );
      }
      if (operator === 'lte') {
        return returnMessage(
          v1 <= this.parseValue(value),
          'lessThanEqual',
          value,
        );
      }
      if (operator === 'gt') {
        return returnMessage(
          v1 > this.parseValue(value),
          'greaterThan',
          value,
        );
      }
      if (operator === 'gte') {
        return returnMessage(
          v1 >= this.parseValue(value),
          'greaterThanEqual',
          value,
        );
      }
    }
    return [true];
  }
}


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.js ***!
  \*********************************************************************************/
/*! exports provided: default, spreadsheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spreadsheet", function() { return spreadsheet; });
/* harmony import */ var _component_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/element */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/element.js");
/* harmony import */ var _core_data_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/data_proxy */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/core/data_proxy.js");
/* harmony import */ var _component_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/sheet */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/component/sheet.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/config.js");
/* harmony import */ var _locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale/locale */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* global window, document */








class Spreadsheet {
  constructor(selectors, options = {}) {
    let targetEl = selectors;
    if (typeof selectors === 'string') {
      targetEl = document.querySelector(selectors);
    }
    this.data = new _core_data_proxy__WEBPACK_IMPORTED_MODULE_1__["default"]('sheet1', options);
    const rootEl = Object(_component_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', `${_config__WEBPACK_IMPORTED_MODULE_3__["cssPrefix"]}`)
      .on('contextmenu', evt => evt.preventDefault());
    // create canvas element
    targetEl.appendChild(rootEl.el);
    this.sheet = new _component_sheet__WEBPACK_IMPORTED_MODULE_2__["default"](rootEl, this.data);
  }

  loadData(data) {
    this.sheet.loadData(data);
    return this;
  }

  getData() {
    return this.data.getData();
  }

  validate() {
    const { validations } = this.data;
    return validations.errors.size <= 0;
  }

  change(cb) {
    this.data.change = cb;
    return this;
  }

  static locale(lang, message) {
    Object(_locale_locale__WEBPACK_IMPORTED_MODULE_4__["locale"])(lang, message);
  }
}

const spreadsheet = (el, options = {}) => new Spreadsheet(el, options);

if (window) {
  window.x = window.x || {};
  window.x.spreadsheet = spreadsheet;
  window.x.spreadsheet.locale = (lang, message) => Object(_locale_locale__WEBPACK_IMPORTED_MODULE_4__["locale"])(lang, message);
}

/* harmony default export */ __webpack_exports__["default"] = (Spreadsheet);



/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.less":
/*!***********************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../_css-loader@1.0.1@css-loader!../../_resolve-url-loader@3.1.0@resolve-url-loader!../../_less-loader@4.1.0@less-loader/dist/cjs.js!./index.less */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/en.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/en.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  toolbar: {
    undo: 'Undo',
    redo: 'Redo',
    paintformat: 'Paint format',
    clearformat: 'Clear format',
    format: 'Format',
    fontName: 'Font',
    fontSize: 'Font size',
    fontBold: 'Font bold',
    fontItalic: 'Font italic',
    underline: 'Underline',
    strike: 'Strike',
    color: 'Text color',
    bgcolor: 'Fill color',
    border: 'Borders',
    merge: 'Merge cells',
    align: 'Horizontal align',
    valign: 'Vertical align',
    textwrap: 'Text wrapping',
    freeze: 'Freeze cell',
    autofilter: 'Filter',
    formula: 'Functions',
    more: 'More',
  },
  contextmenu: {
    copy: 'Copy',
    cut: 'Cut',
    paste: 'Paste',
    pasteValue: 'Paste values only',
    pasteFormat: 'Paste format only',
    insertRow: 'Insert row',
    insertColumn: 'Insert column',
    deleteRow: 'Delete row',
    deleteColumn: 'Delete column',
    deleteCell: 'Delete cell',
    deleteCellText: 'Delete cell text',
    validation: 'Data validations',
  },
  format: {
    normal: 'Normal',
    text: 'Plain Text',
    number: 'Number',
    percent: 'Percent',
    rmb: 'RMB',
    usd: 'USD',
    date: 'Date',
    time: 'Time',
    datetime: 'Date time',
    duration: 'Duration',
  },
  formula: {
    sum: 'Sum',
    average: 'Average',
    max: 'Max',
    min: 'Min',
    concat: 'Concat',
  },
  validation: {
    required: 'it must be required',
    notMatch: 'it not match its validation rule',
    between: 'it is between {} and {}',
    notBetween: 'it is not between {} and {}',
    notIn: 'it is not in list',
    equal: 'it equal to {}',
    notEqual: 'it not equal to {}',
    lessThan: 'it less than {}',
    lessThanEqual: 'it less than or equal to {}',
    greaterThan: 'it greater than {}',
    greaterThanEqual: 'it greater than or equal to {}',
  },
  error: {
    pasteForMergedCell: 'Unable to do this for merged cells',
  },
  calendar: {
    weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
  button: {
    cancel: 'Cancel',
    remove: 'Remove',
    save: 'Save',
    ok: 'OK',
  },
  sort: {
    desc: 'Sort Z -> A',
    asc: 'Sort A -> Z',
  },
  filter: {
    empty: 'empty',
  },
  dataValidation: {
    mode: 'Mode',
    range: 'Cell Range',
    criteria: 'Criteria',
    modeType: {
      cell: 'Cell',
      column: 'Colun',
      row: 'Row',
    },
    type: {
      list: 'List',
      number: 'Number',
      date: 'Date',
      phone: 'Phone',
      email: 'Email',
    },
    operator: {
      be: 'between',
      nbe: 'not betwwen',
      lt: 'less than',
      lte: 'less than or equal to',
      gt: 'greater than',
      gte: 'greater than or equal to',
      eq: 'equal to',
      neq: 'not equal to',
    },
  },
});


/***/ }),

/***/ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/locale.js ***!
  \*****************************************************************************************/
/*! exports provided: default, locale, t, tf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tf", function() { return tf; });
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/locale/en.js");
/* global window */


let $lang = 'en';
const $messages = {
  en: _en__WEBPACK_IMPORTED_MODULE_0__["default"],
};

function translate(key, messages) {
  if (messages && messages[$lang]) {
    let message = messages[$lang];
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i += 1) {
      const property = keys[i];
      const value = message[property];
      if (i === keys.length - 1) return value;
      if (!value) return undefined;
      message = value;
    }
  }
  return undefined;
}

function t(key) {
  let v = translate(key, $messages);
  if (!v && window && window.x && window.x.spreadsheet && window.x.spreadsheet.$messages) {
    v = translate(key, window.x.spreadsheet.$messages);
  }
  return v || '';
}

function tf(key) {
  return () => t(key);
}

function locale(lang, message) {
  $lang = lang;
  if (message) {
    $messages[lang] = message;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  t,
});




/***/ }),

/***/ "./src/spreadsheet/index.tsx":
/*!***********************************!*\
  !*** ./src/spreadsheet/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Using x-data-spreadsheet
 * By yuliang.liang(myliang)
 * MIT LICENSE
 * https://github.com/myliang/x-spreadsheet/blob/master/LICENSE
 *
 * **/
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
var x_data_spreadsheet_1 = __webpack_require__(/*! x-data-spreadsheet */ "./node_modules/_x-data-spreadsheet@1.0.24@x-data-spreadsheet/src/index.js");
//@ts-ignore
__webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var Spreadsheet = /** @class */ (function (_super) {
    __extends(Spreadsheet, _super);
    function Spreadsheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spreadsheet.prototype.installed = function () {
        var _this = this;
        var ele = this.shadowRoot.querySelector('.m-spreadsheet');
        document.body.appendChild(ele);
        var s = new x_data_spreadsheet_1.default(document.querySelector('.m-spreadsheet'), {
            view: {
                height: function () {
                    if (_this.props.height)
                        return _this.props.height;
                    return document.documentElement.clientHeight;
                },
                width: function () {
                    if (_this.props.width)
                        return _this.props.width;
                    return document.documentElement.clientWidth;
                }
            },
        })
            .loadData(this.props.data || {}) // load data
            .change(function (data) {
            _this.fire('change', data);
        });
        var placeholder = this.shadowRoot.querySelector('.placeholder');
        var rect = placeholder.getBoundingClientRect();
        //@ts-ignore
        ele.style.left = rect.left + 'px';
        //@ts-ignore
        ele.style.top = rect.top + 'px';
        // data validation
        s.validate();
        this.spreadsheet = s;
    };
    Spreadsheet.prototype.render = function (props) {
        return (omi_1.h("div", { class: "placeholder" },
            omi_1.h("div", { style: 'position: absolute;', class: "m-spreadsheet" })));
    };
    Spreadsheet.defaultProps = {};
    Spreadsheet.propTypes = {};
    Spreadsheet = __decorate([
        omi_1.tag('m-spreadsheet')
    ], Spreadsheet);
    return Spreadsheet;
}(omi_1.WeElement));
exports.default = Spreadsheet;


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