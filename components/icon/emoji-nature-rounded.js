(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["emoji-nature-rounded"] = factory(require("omi"));
	else
		root["emoji-nature-rounded"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/emoji-nature-rounded.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/emoji-nature-rounded.js":
/*!*************************************!*\
  !*** ./esm/emoji-nature-rounded.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ \"./esm/utils/createSvgIcon.js\");\nexports.default = createSvgIcon_1.default(omi_1.h(\"path\", {\n    d: \"M21.94 4.88c-.18-.53-.69-.88-1.26-.88H19.6l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-1.07c-.57 0-1.08.35-1.26.88-.19.56.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.23.17.51.26.78.26.31 0 .61-.11.86-.32l.81-.7.81.7c.25.21.55.32.86.32.27 0 .55-.09.78-.26.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48zM18 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM15.5 12h-1.09c-.19-.54-.49-1.05-.93-1.49s-.94-.73-1.48-.92V8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.88c-.11-.01-.23-.03-.34-.03-1.02 0-2.05.39-2.83 1.17-.16.16-.3.34-.43.53L6 10.52c-1.56-.55-3.28.27-3.83 1.82-.27.75-.23 1.57.12 2.29.23.48.58.87 1 1.16-.38 1.35-.06 2.85 1 3.91s2.57 1.38 3.91 1c.29.42.68.77 1.16 1 .42.2.85.3 1.29.3.34 0 .68-.06 1.01-.17 1.56-.55 2.38-2.27 1.82-3.85l-.52-1.37c.18-.13.36-.27.53-.43.87-.87 1.24-2.04 1.14-3.17h.88c.28 0 .5-.22.5-.5-.01-.29-.23-.51-.51-.51zM4.67 14.29c-.25-.09-.45-.27-.57-.51s-.13-.51-.04-.76c.19-.52.76-.79 1.26-.61l3.16 1.19c-1.15.6-2.63 1.11-3.81.69zm6.32 5.65c-.25.09-.52.08-.76-.04-.24-.11-.42-.32-.51-.57-.42-1.18.09-2.65.7-3.8l1.18 3.13c.18.52-.09 1.1-.61 1.28zm1.21-5.34l-.61-1.61c0-.01-.01-.02-.02-.03l-.06-.12c-.02-.04-.04-.07-.07-.11l-.09-.09-.09-.09c-.03-.03-.07-.05-.11-.07-.04-.02-.07-.05-.12-.06-.01 0-.02-.01-.03-.02l-1.6-.6c.36-.29.79-.46 1.26-.46.53 0 1.04.21 1.41.59.73.73.77 1.88.13 2.67z\"\n}), 'EmojiNatureRounded');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/emoji-nature-rounded.js?");

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