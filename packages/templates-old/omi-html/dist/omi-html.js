/*!
 *  omi-html v0.2.4 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["html"] = factory(require("omi"));
	else
		root["html"] = factory(root["omi"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Omi =  true
  ? __webpack_require__(1)
  : window.Omi

if (!Omi) {
  Omi = window.Omi
}

var htm =  true
  ? __webpack_require__(2)
  : window.htm

var html = htm.default ? htm.default.bind(Omi.h) : html.bind(Omi.h)

if (true) {
  module.exports = html
} else if (typeof define == "function" && define.amd) {
  define([], function () { return html })
}

if (typeof window !== 'undefined') {
  window.html = html
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var t={},e=document.createElement("template"),r=/(\$_h\[\d+\])/g;function n(t,e){var n=t.match(r),a=JSON.stringify(t);if(null!=n){if(n[0]===t)return t;a=a.replace(r,'"'+e+"$1"+e+'"').replace(/"[+,]"/g,""),","==e&&(a="["+a+"]")}return a}/* harmony default export */ __webpack_exports__["default"] = (function(r){return(t[r]||(t[r]=function(t){for(var r=t[0],a=1;a<t.length;)r+="$_h["+a+"]"+t[a++];return e.innerHTML=r.replace(/<(?:(\/)\/|(\/?)(\$_h\[\d+\]))/g,"<$1$2c c@=$3").replace(/<([\w:-]+)(?:\s[^<>]*?)?(\/?)>/g,function(t,e,r){return t.replace(/(?:'.*?'|".*?"|([A-Z]))/g,function(t,e){return e?":::"+e:t})+(r?"</"+e+">":"")}).trim(),Function("h","$_h","return "+function t(e){if(1!=e.nodeType)return 3==e.nodeType&&e.data?n(e.data,","):"null";for(var r="",a=n(e.localName,r),i="",u=",({",c=0;c<e.attributes.length;c++){var l=e.attributes[c].name,o=e.attributes[c].value;"c@"==l?a=o:"..."==l.substring(0,3)?(i="",u=",Object.assign({",r+="},"+l.substring(3)+",{"):(r+=i+'"'+l.replace(/:::(\w)/g,function(t,e){return e.toUpperCase()})+'":'+(!o||n(o,"+")),i=",")}r="h("+a+u+r+"})";for(var f=e.firstChild;f;)r+=","+t(f),f=f.nextSibling;return r+")"}((e.content||e).firstChild))}(r)))(this,arguments)});


/***/ })
/******/ ]);
});