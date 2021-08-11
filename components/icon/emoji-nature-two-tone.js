(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["emoji-nature-two-tone"] = factory(require("omi"));
	else
		root["emoji-nature-two-tone"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/emoji-nature-two-tone.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/emoji-nature-two-tone.js":
/*!**************************************!*\
  !*** ./esm/emoji-nature-two-tone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ \"./esm/utils/createSvgIcon.js\");\nexports.default = createSvgIcon_1.default(omi_1.h(omi_1.h.f, null, omi_1.h(\"circle\", {\n    cx: \"18\",\n    cy: \"6\",\n    r: \"1\",\n    opacity: \".3\"\n}), omi_1.h(\"path\", {\n    d: \"M21.94 4.88c-.19-.55-.75-.92-1.36-.88h-.98l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-.98c-.61-.04-1.16.32-1.35.88-.19.56.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.5.37 1.17.35 1.64-.06l.81-.7.81.7c.47.4 1.15.43 1.64.06.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48zM18 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"\n}), omi_1.h(\"g\", null, omi_1.h(\"path\", {\n    d: \"M6.1 17.9c.53.53 1.27.69 1.94.5-.03-1.19.35-2.37.92-3.36-1 .57-2.17.95-3.36.92-.19.67-.02 1.41.5 1.94zM9.65 11.55l1.61.66c.25.1.44.3.54.54l.66 1.61c.75-.78.74-2.01-.03-2.78-.77-.78-2-.78-2.78-.03z\",\n    opacity: \".3\"\n}), omi_1.h(\"path\", {\n    d: \"M14.86 12c-.17-.67-.5-1.31-1.03-1.84-.52-.52-1.16-.85-1.83-1.02V7h-1v2c-1.01.01-2.02.39-2.79 1.16l-.56.56-1.53-.63c-1.52-.63-3.27.1-3.89 1.62-.6 1.46.05 3.11 1.44 3.8-.33 1.31 0 2.76 1.03 3.79 1.03 1.03 2.48 1.36 3.79 1.03.69 1.39 2.34 2.04 3.8 1.44 1.52-.63 2.25-2.37 1.62-3.89l-.63-1.53.56-.56C14.61 15.02 15 14.01 15 13h2v-1h-2.14zM4.58 13.8c-.51-.21-.75-.79-.54-1.3.21-.51.79-.75 1.3-.54l2.92 1.2c-1.04.68-2.43 1.15-3.68.64zm3.46 4.6c-.67.19-1.41.02-1.94-.5-.53-.53-.69-1.27-.5-1.94 1.19.03 2.37-.35 3.36-.92-.57.99-.95 2.17-.92 3.36zm3.46 1.56c-.51.21-1.09-.03-1.3-.54-.51-1.25-.04-2.64.64-3.67l1.2 2.92c.21.5-.03 1.09-.54 1.29zm.95-5.61l-.66-1.61c-.1-.25-.3-.44-.54-.54l-1.61-.66c.78-.75 2.01-.74 2.78.03.78.77.78 2 .03 2.78z\"\n}))), 'EmojiNatureTwoTone');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/emoji-nature-two-tone.js?");

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