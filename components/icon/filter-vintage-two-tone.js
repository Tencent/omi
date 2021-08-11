(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["filter-vintage-two-tone"] = factory(require("omi"));
	else
		root["filter-vintage-two-tone"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/filter-vintage-two-tone.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/filter-vintage-two-tone.js":
/*!****************************************!*\
  !*** ./esm/filter-vintage-two-tone.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ \"./esm/utils/createSvgIcon.js\");\nexports.default = createSvgIcon_1.default(omi_1.h(omi_1.h.f, null, omi_1.h(\"path\", {\n    d: \"M18.69 7.61c-.7 0-1.39.19-2 .54-.16.09-.32.21-.54.37l-1.13.9c.31.36.56.78.72 1.24l1.38-.52c.22-.08.41-.17.58-.27.84-.49 1.47-1.27 1.78-2.18-.26-.06-.52-.08-.79-.08zm-1.56 6.26l-1.38-.52c-.16.45-.4.85-.7 1.21l1.15.96c.15.12.31.24.49.34.61.35 1.3.54 1.99.54.27 0 .53-.03.8-.08-.31-.91-.94-1.69-1.78-2.18-.16-.1-.35-.19-.57-.27zM11 6c0 .19.02.41.05.63l.23 1.44c.24-.04.48-.07.72-.07s.48.03.71.07l.23-1.44c.04-.22.06-.44.06-.63 0-.98-.37-1.91-1-2.63-.63.72-1 1.65-1 2.63zm1.71 9.93c-.23.04-.47.07-.71.07-.25 0-.49-.03-.72-.07l-.22 1.42c-.04.24-.06.45-.06.65 0 .98.37 1.91 1 2.63.63-.72 1-1.66 1-2.63 0-.19-.02-.41-.05-.63l-.24-1.44zm-5.84-5.81l1.38.52c.16-.44.4-.85.7-1.2L7.8 8.49c-.17-.15-.34-.27-.49-.35-.62-.36-1.3-.54-2-.54-.27 0-.54.03-.81.08.3.91.93 1.68 1.79 2.18.17.09.36.18.58.26zm0 3.74c-.22.08-.41.17-.58.27-.84.49-1.47 1.27-1.78 2.18.26.05.52.08.79.08.7 0 1.39-.19 2-.54.16-.09.32-.21.54-.37l1.13-.89c-.31-.36-.56-.78-.72-1.24l-1.38.51z\",\n    opacity: \".3\"\n}), omi_1.h(\"path\", {\n    d: \"M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-.91-.52-1.95-.8-3.01-.8-1.02 0-2.05.26-2.99.8-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-.94-.54-1.97-.8-2.99-.8-1.05 0-2.1.28-3.01.8 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19.91.52 1.95.8 3.01.8 1.02 0 2.05-.26 2.99-.8.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54.94.54 1.97.8 2.99.8 1.05 0 2.1-.28 3.01-.8-.01-2.07-1.08-4.08-3-5.19zM4.51 7.68c.26-.06.53-.08.8-.08.69 0 1.38.18 1.99.54.15.09.32.2.49.35l1.15.96c-.3.36-.53.76-.7 1.2l-1.38-.52c-.21-.09-.4-.18-.56-.27-.87-.5-1.49-1.27-1.79-2.18zm3.33 7.79c-.21.17-.38.29-.54.37-.61.35-1.3.54-2 .54-.27 0-.53-.03-.79-.08.31-.91.94-1.69 1.78-2.18.17-.1.36-.18.58-.27l1.38-.52c.16.46.41.88.72 1.24l-1.13.9zM12 3.37c.63.72 1 1.66 1 2.63 0 .19-.02.41-.05.63l-.23 1.44C12.48 8.03 12.24 8 12 8s-.48.03-.71.07l-.23-1.44C11.02 6.41 11 6.19 11 6c0-.98.37-1.91 1-2.63zm0 17.26c-.63-.72-1-1.66-1-2.63 0-.2.02-.41.06-.65l.22-1.42c.23.04.47.07.72.07.24 0 .48-.03.71-.07l.23 1.44c.04.22.06.44.06.63 0 .98-.37 1.91-1 2.63zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4.16-5.48c.21-.17.38-.29.54-.37.61-.35 1.3-.54 2-.54.27 0 .53.03.79.08-.31.91-.94 1.69-1.78 2.18-.17.1-.36.18-.58.27l-1.38.52c-.17-.46-.41-.87-.72-1.24l1.13-.9zm2.53 7.87c-.69 0-1.38-.18-1.99-.54-.18-.1-.34-.22-.49-.34l-1.15-.96c.3-.36.54-.76.7-1.21l1.38.52c.22.08.41.17.57.26.85.49 1.47 1.27 1.78 2.18-.27.07-.54.09-.8.09z\"\n})), 'FilterVintageTwoTone');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/filter-vintage-two-tone.js?");

/***/ }),

/***/ "./esm/utils/createSvgIcon.js":
/*!************************************!*\
  !*** ./esm/utils/createSvgIcon.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?");

/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?");

/***/ })

/******/ })["default"];
});