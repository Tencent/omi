(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("omi"));
  else if (typeof define === 'function' && define.amd)
    define(["omi"], factory);
  else if (typeof exports === 'object')
    exports["ODialogExtention"] = factory(require("omi"));
  else
    root["ODialogExtention"] = factory(root["Omi"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
    }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
    };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
    };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
    /******/
  })
/************************************************************************/
/******/({

/***/ "./node_modules/@omiu/button/dist/index.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@omiu/button/dist/index.es.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return u; });
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);
        var o = Object.defineProperty, n = Object.defineProperties, r = Object.getOwnPropertyDescriptors, a = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable, c = (n, r, a) => r in n ? o(n, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[r] = a; var s = Object.defineProperty, f = Object.getOwnPropertyDescriptor; let u = class extends omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]{ render(o) { return Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("button", (i = ((o, n) => { for (var r in n || (n = {})) e.call(n, r) && c(o, r, n[r]); if (a) for (var r of a(n)) t.call(n, r) && c(o, r, n[r]); return o })({ disabled: o.disabled }, Object(omi__WEBPACK_IMPORTED_MODULE_0__["extractClass"])(o, "o-button", { ["o-button-" + o.type]: o.type, ["o-button-" + o.size]: o.size, "is-plain": o.plain, "is-round": o.round, "is-circle": o.circle, "is-disabled": o.disabled, "is-block": o.block })), l = { type: o.nativeType }, n(i, r(l))), o.loading && [Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "loading", viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "loading", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" })), " "], o.text, Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)); var i, l } }; u.css = ":host {\n  display: inline-block;\n}\n\n:host([block]) {\n  display: block;\n}\n\n.o-button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.o-button:hover {\n  border-color: rgba(7, 193, 96, 0.382);\n  border-color: var(--o-primary-fade-some, rgba(7, 193, 96, 0.382));\n  color: #07c160;\n  color: var(--o-primary, #07c160);\n  background-color: rgba(7, 193, 96, 0.1);\n  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));\n}\n\n.o-button:active {\n  color: #07c160;\n  color: var(--o-primary, #07c160);\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160);\n  outline: none;\n}\n\n.o-button-medium {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.o-button-small {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.o-button-mini {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.o-button.is-round {\n  border-radius: 20px;\n}\n\n.o-button.is-circle {\n  border-radius: 20px;\n  padding: 12px;\n}\n\n.o-button.is-disabled, .o-button.is-disabled:focus, .o-button.is-disabled:hover {\n  color: #c0c4cc;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #fff;\n  border-color: #ebeef5;\n}\n\n.o-button.is-block {\n  display: block;\n  width: 100%;\n}\n\n.o-button-primary {\n  color: #fff;\n  background-color: var(--o-primary, #07c160);\n  border-color: var(--o-primary, #07c160);\n}\n\n.o-button-primary:disabled, .o-button-primary:disabled:hover {\n  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));\n}\n\n.o-button-primary.is-plain {\n  color: var(--o-primary, #07c160);\n  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));\n  border-color: var(--o-primary-fade-some, rgba(7, 193, 96, 0.382));\n}\n\n.o-button-primary:hover {\n  background-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618));\n  border-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618));\n  color: #fff;\n}\n\n.o-button-primary:active {\n  background-color: var(--o-primary-active, #059048);\n  border-color: var(--o-primary-active, #059048);\n  color: #fff;\n}\n\n.o-button-success {\n  color: #fff;\n  background-color: var(--o-success, #07c160);\n  border-color: var(--o-success, #07c160);\n}\n\n.o-button-success:disabled, .o-button-success:disabled:hover {\n  background-color: var(--o-success-fade-lot, rgba(7, 193, 96, 0.1));\n}\n\n.o-button-success.is-plain {\n  color: var(--o-success, #07c160);\n  background-color: var(--o-success-fade-lot, rgba(7, 193, 96, 0.1));\n  border-color: var(--o-success-fade-some, rgba(7, 193, 96, 0.382));\n}\n\n.o-button-success:hover {\n  background-color: var(--o-success-fade-little, rgba(7, 193, 96, 0.618));\n  border-color: var(--o-success-fade-little, rgba(7, 193, 96, 0.618));\n  color: #fff;\n}\n\n.o-button-success:active {\n  background-color: var(--o-success-active, #059048);\n  border-color: var(--o-success-active, #059048);\n  color: #fff;\n}\n\n.o-button-warning {\n  color: #fff;\n  background-color: var(--o-warning, #f2711c);\n  border-color: var(--o-warning, #f2711c);\n}\n\n.o-button-warning:disabled, .o-button-warning:disabled:hover {\n  background-color: var(--o-warning-fade-lot, rgba(242, 113, 28, 0.1));\n}\n\n.o-button-warning.is-plain {\n  color: var(--o-warning, #f2711c);\n  background-color: var(--o-warning-fade-lot, rgba(242, 113, 28, 0.1));\n  border-color: var(--o-warning-fade-some, rgba(242, 113, 28, 0.382));\n}\n\n.o-button-warning:hover {\n  background-color: var(--o-warning-fade-little, rgba(242, 113, 28, 0.618));\n  border-color: var(--o-warning-fade-little, rgba(242, 113, 28, 0.618));\n  color: #fff;\n}\n\n.o-button-warning:active {\n  background-color: var(--o-warning-active, #cf590c);\n  border-color: var(--o-warning-active, #cf590c);\n  color: #fff;\n}\n\n.o-button-danger {\n  color: #fff;\n  background-color: var(--o-danger, #fa5151);\n  border-color: var(--o-danger, #fa5151);\n}\n\n.o-button-danger:disabled, .o-button-danger:disabled:hover {\n  background-color: var(--o-danger-fade-lot, rgba(250, 81, 81, 0.1));\n}\n\n.o-button-danger.is-plain {\n  color: var(--o-danger, #fa5151);\n  background-color: var(--o-danger-fade-lot, rgba(250, 81, 81, 0.1));\n  border-color: var(--o-danger-fade-some, rgba(250, 81, 81, 0.382));\n}\n\n.o-button-danger:hover {\n  background-color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618));\n  border-color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618));\n  color: #fff;\n}\n\n.o-button-danger:active {\n  background-color: var(--o-danger-active, #f91f1f);\n  border-color: var(--o-danger-active, #f91f1f);\n  color: #fff;\n}\n\n.o-button-info {\n  color: #fff;\n  background-color: var(--o-info, #42b8dd);\n  border-color: var(--o-info, #42b8dd);\n}\n\n.o-button-info:disabled, .o-button-info:disabled:hover {\n  background-color: var(--o-info-fade-lot, rgba(66, 184, 221, 0.1));\n}\n\n.o-button-info.is-plain {\n  color: var(--o-info, #42b8dd);\n  background-color: var(--o-info-fade-lot, rgba(66, 184, 221, 0.1));\n  border-color: var(--o-info-fade-some, rgba(66, 184, 221, 0.382));\n}\n\n.o-button-info:hover {\n  background-color: var(--o-info-fade-little, rgba(66, 184, 221, 0.618));\n  border-color: var(--o-info-fade-little, rgba(66, 184, 221, 0.618));\n  color: #fff;\n}\n\n.o-button-info:active {\n  background-color: var(--o-info-active, #24a1c8);\n  border-color: var(--o-info-active, #24a1c8);\n  color: #fff;\n}\n\n.loading {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  animation: loading 1s steps(12, end) infinite;\n  vertical-align: -0.125em;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}", u.defaultProps = { plain: !1, round: !1, circle: !1, loading: !1, disabled: !1, autofocus: !1, nativeType: "button", block: !1 }, u.propTypes = { size: String, type: String, plain: Boolean, round: Boolean, circle: Boolean, loading: Boolean, disabled: Boolean, icon: String, autofocus: Boolean, nativeType: String, block: Boolean, text: String }, u = ((o, n, r, a) => { for (var e, t = a > 1 ? void 0 : a ? f(n, r) : n, c = o.length - 1; c >= 0; c--)(e = o[c]) && (t = (a ? e(n, r, t) : e(t)) || t); return a && t && s(n, r, t), t })([Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])("o-button")], u);


        /***/
      }),

/***/ "./node_modules/@omiu/dialog/src/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@omiu/dialog/src/index.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return Dialog; });
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);
          /**
           * @omiu/dialog v0.0.4 http://omijs.org
           * Front End Cross-Frameworks Framework.
           * By dntzhang https://github.com/dntzhang
           * Github: https://github.com/Tencent/omi
           * MIT Licensed.
           */



          /*! *****************************************************************************
          Copyright (c) Microsoft Corporation.

          Permission to use, copy, modify, and/or distribute this software for any
          purpose with or without fee is hereby granted.

          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
          ***************************************************************************** */
          /* global Reflect, Promise */

          var extendStatics$1 = function (d, b) {
            extendStatics$1 = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics$1(d, b);
          };

          function __extends$1(d, b) {
            if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics$1(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          }

          function __decorate$1(decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          }


          var css = `:host {
  position: fixed;
  z-index: 100000; }

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  left: 0;
  top: 0; }

.o-dialog {
  position: relative;
  background: #FFF;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); }

.o-dialog.is-fullscreen {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  height: 100%;
  overflow: auto; }

.o-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0; }

.o-dialog__header {
  padding: 20px 20px 10px; }

.o-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px; }

.o-dialog__headerbtn .o-dialog__close {
  color: #909399; }

.o-dialog__headerbtn:focus .o-dialog__close,
.o-dialog__headerbtn:hover .o-dialog__close {
  color: #409EFF; }

.o-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133; }

.o-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all; }

.o-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.o-dialog--center {
  text-align: center; }

.o-dialog--center .o-dialog__body {
  text-align: initial;
  padding: 25px 25px 30px; }

.o-dialog--center .o-dialog__footer {
  text-align: inherit; }

.dialog-zoom-enter-active {
  -webkit-animation: dialog-zoom-in .3s;
  animation: dialog-zoom-in .3s; }

.dialog-zoom-leave-active {
  -webkit-animation: dialog-zoom-out .3s;
  animation: dialog-zoom-out .3s; }

@-webkit-keyframes dialog-zoom-in {
  0% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; } }

@keyframes dialog-zoom-in {
  0% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; } }

@-webkit-keyframes dialog-zoom-out {
  0% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; }
  100% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; } }

@keyframes dialog-zoom-out {
  0% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; }
  100% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; } }

.mask-enter-active {
  -webkit-animation: mask-in .3s;
  animation: mask-in .3s; }

.mask-leave-active {
  -webkit-animation: mask-out .3s;
  animation: mask-out .3s; }

@-webkit-keyframes mask-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@keyframes mask-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@-webkit-keyframes mask-out {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes mask-out {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

.content {
  z-index: 101; }
`


          /**
           * @omiu/transition v0.0.14 http://omijs.org
           * Front End Cross-Frameworks Framework.
           * By dntzhang https://github.com/dntzhang
           * Github: https://github.com/Tencent/omi
           * MIT Licensed.
           */

          /*! *****************************************************************************
          Copyright (c) Microsoft Corporation.

          Permission to use, copy, modify, and/or distribute this software for any
          purpose with or without fee is hereby granted.

          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
          ***************************************************************************** */
          /* global Reflect, Promise */

          var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
          };

          function __extends(d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          }

          function __decorate(decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          }

          function __awaiter(thisArg, _arguments, P, generator) {
            function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
              function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
              function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          }

          function __generator(thisArg, body) {
            var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
            return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
            function verb(n) { return function (v) { return step([n, v]); }; }
            function step(op) {
              if (f) throw new TypeError("Generator is already executing.");
              while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
              } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
              if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
            }
          }

          var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

          function createCommonjsModule(fn, module) {
            return module = { exports: {} }, fn(module, module.exports), module.exports;
          }

          var _dready_0_0_1_dready = createCommonjsModule(function (module, exports) {
            // if the module has no dependencies, the above pattern can be simplified to
            (function (root, factory) {
              {
                // Node. Does not work with strict CommonJS, but
                // only CommonJS-like environments that support module.exports,
                // like Node.
                module.exports = factory();
              }
            }(commonjsGlobal, function () {

              const readyCallbacks = [];
              document.addEventListener('DOMContentLoaded', () => {
                domReady.done = true;
                readyCallbacks.forEach(callback => {
                  callback();
                });
              });

              function domReady(callback) {
                if (domReady.done) {
                  callback();
                  return
                }
                readyCallbacks.push(callback);
              }

              domReady.done = false;


              // Just return a value to define the module export.
              // This example returns an object, but the module
              // can return a function as the exported value.
              return domReady
            }));
          });

          var _domReady = /*#__PURE__*/Object.freeze({
            __proto__: null,
            'default': _dready_0_0_1_dready,
            __moduleExports: _dready_0_0_1_dready
          });

          /**
           * o-transition element based on vue-transition
           * Tom Fales (@enlightenmentor)
           * Licensed under the MIT License
           * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
           *
           * modified by dntzhang
           *
           */
          var domReady = _dready_0_0_1_dready || _domReady;
/** @class */ ((function (_super) {
            __extends(Transition, _super);
            function Transition() {
              var _this = _super !== null && _super.apply(this, arguments) || this;
              _this._show = true;
              return _this;
            }
            Transition.prototype.installed = function () {
              var _this = this;
              domReady(function () {
                if (_this.props.appear) {
                  _this.enter();
                }
                if (_this.props.leavingTime) {
                  setTimeout(function () {
                    _this.leave();
                  }, _this.props.leavingTime);
                }
              });
            };
            Transition.prototype.receiveProps = function () {
              if (this.props.appear) {
                this.enter();
              }
              if (this.props.disappear) {
                this.leave();
              }
            };
            Transition.prototype.toggle = function () {
              return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      this._show = !this._show;
                      if (!this._show) return [3 /*break*/, 2];
                      return [4 /*yield*/, this.enter()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.leave()];
                    case 3: return [2 /*return*/, _a.sent()];
                  }
                });
              });
            };
            Transition.prototype.enter = function () {
              return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                  return [2 /*return*/, new Promise(function (resolve) {
                    var el = _this.children[0];
                    if (el) {
                      _this.fire('before-enter');
                      el.classList.remove(_this.props.name + '-leave-active');
                      el.classList.remove(_this.props.name + '-leave-to');
                      el.classList.add(_this.props.name + '-enter');
                      el.classList.add(_this.props.name + '-enter-active');
                      _this.callback = function () {
                        el.classList.remove(this.props.name + '-enter-active');
                        this.fire('after-enter');
                        this._show = true;
                        resolve();
                      }.bind(_this);
                      _this.once('transitionend', _this.callback);
                      _this.once('animationend', _this.callback);
                      window.setTimeout(function () {
                        el.classList.remove(this.props.name + '-enter');
                        el.classList.add(this.props.name + '-enter-to');
                        this.fire('enter');
                      }.bind(_this), _this.props.delay);
                    }
                  })];
                });
              });
            };
            Transition.prototype.leave = function () {
              return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                  return [2 /*return*/, new Promise(function (resolve) {
                    var el = _this.children[0];
                    if (el) {
                      _this.fire('before-leave');
                      el.classList.remove(_this.props.name + '-enter-active');
                      el.classList.remove(_this.props.name + '-enter-to');
                      el.classList.add(_this.props.name + '-leave');
                      el.classList.add(_this.props.name + '-leave-active');
                      _this.callback = function (e) {
                        el.classList.remove(this.props.name + '-leave-active');
                        this.fire('after-leave');
                        this._show = false;
                        if (this.props.autoRemove && this.parentNode) {
                          this.parentNode.removeChild(this);
                        }
                        resolve();
                      }.bind(_this);
                      _this.once('transitionend', _this.callback);
                      _this.once('animationend', _this.callback);
                      window.setTimeout(function () {
                        el.classList.remove(this.props.name + '-leave');
                        el.classList.add(this.props.name + '-leave-to');
                        this.fire('leave');
                      }.bind(_this), _this.props.delay);
                    }
                  })];
                });
              });
            };
            Transition.prototype.once = function (name, callback) {
              var wrapCall = function () {
                this.removeEventListener(name, wrapCall);
                callback();
              }.bind(this);
              this.addEventListener(name, wrapCall);
            };
            Transition.prototype.render = function () {
              return;
            };
            Transition.propTypes = {
              name: String,
              leavingTime: Number,
              autoRemove: Boolean,
              appear: Boolean,
              disappear: Boolean,
              delay: Number
            };
            Transition.isLightDOM = true;
            Transition.defaultProps = {
              name: 'o',
              delay: 0
            };
            Transition = __decorate([
              Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-transition')
            ], Transition);
            return Transition;
          })(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));

          var Dialog = /** @class */ (function (_super) {
            __extends$1(Dialog, _super);
            function Dialog() {
              var _this = _super !== null && _super.apply(this, arguments) || this;
              _this.handleMaskClick = function () {
                _this.fire('mask-click');
              };
              _this.close = function () {
                _this.rootElement.childNodes[0].leave();
                _this.rootElement.childNodes[1].leave();
                _this.fire('close');
              };
              _this.onAfterLeave = function () {
                _this.updateProps({ visible: false });
              };
              return _this;
            }
            Dialog.prototype.open = function () {
              this.updateProps({
                visible: true
              });
              this.rootElement.childNodes[0].enter();
              this.rootElement.childNodes[1].enter();
              this.fire('open');
            };
            Dialog.prototype.render = function (props) {
              return (props.visible && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-dialog__wrapper" },
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("o-transition", { "onafter-leave": this.onAfterLeave, appear: true, name: "dialog-zoom" },
                  Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-dialog__wrapper content" },
                    Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "dialog", "aria-modal": "true", "aria-label": props.title, class: "o-dialog", style: { width: props.width } },
                      Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-dialog__header" },
                        Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "o-dialog__title" }, props.title),
                        Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", "aria-label": "Close", class: "o-dialog__headerbtn" },
                          Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { onClick: this.close, class: "o-dialog__close o-icon o-icon-close", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                            Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))),
                      Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-dialog__body" },
                        Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)),
                      Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-dialog__footer" },
                        Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }))))),
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("o-transition", { appear: true, name: "mask" },
                  Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mask", onClick: this.handleMaskClick }))));
            };
            Dialog.css = css;
            Dialog.defaultProps = {
              visible: false,
              width: '50%'
            };
            Dialog.propTypes = {
              visible: Boolean,
              title: String,
              width: String
            };
            Dialog = __decorate$1([
              Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-dialog')
            ], Dialog);
            return Dialog;
          }(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));


          //# sourceMappingURL=index.esm.js.map

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

        /***/
      }),

/***/ "./node_modules/@omiu/input/src/index.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/@omiu/input/src/index.esm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);
        /**
         * @omiu/input v0.0.12 http://omijs.org
         * Front End Cross-Frameworks Framework.
         * By dntzhang https://github.com/dntzhang
         * Github: https://github.com/Tencent/omi
         * MIT Licensed.
         */



        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        /* global Reflect, Promise */

        var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
        };

        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }

        var __assign = function () {
          __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };

        function __rest(s, e) {
          var t = {};
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        }

        function __decorate(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
          else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }


        var css = `:host {
  display: inline-block; }

:host([block]) {
  display: block; }

.o-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px; }

.o-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #FFF;
  background-image: none;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea__inner:hover {
  border-color: #C0C4CC; }

.o-textarea__inner:focus {
  outline: 0;
  border-color: #07c160;
  border-color: var(--o-primary, #07c160); }

.o-textarea .o-input__count {
  color: #909399;
  background: #FFF;
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  right: 10px; }

.o-textarea.is-disabled .o-textarea__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-textarea.is-disabled .o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea.is-exceed .o-textarea__inner {
  border-color: #F56C6C; }

.o-textarea.is-exceed .o-input__count {
  color: #F56C6C; }

.o-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%; }

.o-input::-webkit-scrollbar {
  z-index: 11;
  width: 6px; }

.o-input::-webkit-scrollbar:horizontal {
  height: 6px; }

.o-input::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc; }

.o-input::-webkit-scrollbar-corner {
  background: #fff; }

.o-input::-webkit-scrollbar-track {
  background: #fff; }

.o-input::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px; }

.o-input .o-input__clear {
  color: #C0C4CC;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-input .o-input__clear:hover {
  color: #909399; }

.o-input .o-input__count {
  height: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #909399;
  font-size: 12px; }

.o-input .o-input__count .o-input__count-inner {
  background: #FFF;
  line-height: initial;
  display: inline-block;
  padding: 0 5px; }

.o-input__inner {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%; }

.o-input__prefix,
.o-input__suffix {
  position: absolute;
  top: 0;
  -webkit-transition: all .3s;
  text-align: center;
  height: 100%;
  color: #C0C4CC; }

.o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input__inner:hover {
  border-color: #C0C4CC; }

.o-input.is-active .o-input__inner,
.o-input__inner:focus {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  outline: 0; }

.o-input__suffix {
  right: 5px;
  transition: all .3s;
  pointer-events: none; }

.o-input__suffix-inner {
  pointer-events: all; }

.o-input__prefix {
  left: 5px;
  transition: all .3s; }

.o-input__icon {
  position: absolute;
  width: 35px;
  height: 100%;
  right: 0;
  top: 0;
  padding-top: 0.215em;
  text-align: center;
  color: #bfcbd9;
  transition: all .3s; }

.o-input--small .o-input__icon,
.o-input--medium .o-input__icon {
  padding-top: 0.135em; }

.o-input--mini .o-input__icon {
  padding-top: 0.125em; }

.o-input__icon.is-prefix {
  left: 0; }

.o-input.o-input-prefix input {
  padding-left: 30px; }

.o-input.o-input-suffix input {
  padding-right: 30px; }

.o-input__icon:after {
  content: '';
  height: 100%;
  width: 0;
  display: inline-block;
  vertical-align: middle; }

.o-input__validateIcon {
  pointer-events: none; }

.o-input.is-disabled .o-input__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-input.is-disabled .o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__icon {
  cursor: not-allowed; }

.o-input.is-exceed .o-input__inner {
  border-color: #F56C6C; }

.o-input.is-exceed .o-input__suffix .o-input__count {
  color: #F56C6C; }

.o-input--suffix .o-input__inner {
  padding-right: 30px; }

.o-input--prefix .o-input__inner {
  padding-left: 30px; }

.o-input--medium {
  font-size: 14px; }

.o-input--medium .o-input__inner {
  height: 36px;
  line-height: 36px; }

.o-input--medium .o-input__icon {
  line-height: 36px; }

.o-input--small {
  font-size: 13px; }

.o-input--small .o-input__inner {
  height: 32px;
  line-height: 32px; }

.o-input--small .o-input__icon {
  line-height: 32px; }

.o-input--mini {
  font-size: 12px; }

.o-input--mini .o-input__inner {
  height: 28px;
  line-height: 28px; }

.o-input--mini .o-input__icon {
  line-height: 28px; }

.o-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0; }

.o-input-group > .o-input__inner {
  vertical-align: middle;
  display: table-cell; }

.o-input-group__append,
.o-input-group__prepend {
  background-color: #F5F7FA;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap; }

.o-input-group--prepend .o-input__inner,
.o-input-group__append {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0; }

.o-input-group--append .o-input__inner,
.o-input-group__prepend {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; }

.o-input-group__append:focus,
.o-input-group__prepend:focus {
  outline: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-select,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-select {
  display: inline-block;
  margin: -10px -20px; }

.o-input-group__append button.o-button,
.o-input-group__append div.o-select .o-input__inner,
.o-input-group__append div.o-select:hover .o-input__inner,
.o-input-group__prepend button.o-button,
.o-input-group__prepend div.o-select .o-input__inner,
.o-input-group__prepend div.o-select:hover .o-input__inner {
  border-color: transparent;
  background-color: transparent;
  color: inherit;
  border-top: 0;
  border-bottom: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-input,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-input {
  font-size: inherit; }

.o-input-group__prepend {
  border-right: 0; }

.o-input-group__append {
  border-left: 0; }

.o-input-group--append .o-select .o-input.is-focus .o-input__inner,
.o-input-group--prepend .o-select .o-input.is-focus .o-input__inner {
  border-color: transparent; }

.o-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0; }

.o-icon-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -0.5em;
  cursor: pointer;
  color: #bfcbd9;
  display: none;
  border-radius: 50%;
  width: 1em;
  height: 1em; }

.o-icon-clear:hover {
  background: #b1b4b9;
  color: white; }

.o-input:hover .o-icon-clear {
  display: block;
  cursor: pointer; }

.o-input .o-input__count {
  position: absolute;
  top: 0px;
  right: 4px; }

.o-input.is-block {
  display: block;
  width: 100%; }
`


        var Input = /** @class */ (function (_super) {
          __extends(Input, _super);
          function Input() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onGetValue = function () {
              return _this.__$value;
            };
            _this._onSetValue = function (value) {
              _this.__$value = value;
              _this.props.value = value;
              _this.setAttribute('value', value);
            };
            _this.valueLength = 0;
            _this.handleBlur = function (evt) {
              if (_this.props.onBlur) {
                _this.props.onBlur(evt);
              }
              else {
                _this.fire('blur', _this.props.value);
              }
            };
            _this.handleFocus = function (evt) {
              if (_this.props.onFocus) {
                _this.props.onFocus(evt);
              }
              else {
                _this.fire('focus', _this.props.value);
              }
            };
            _this.handleChange = function (evt) {
              _this.__$value = evt.target.value;
              _this.props.value = evt.target.value;
              if (_this.props.onChange) {
                _this.props.onChange(evt);
              }
              else {
                _this.fire('change', _this.props.value);
              }
            };
            _this.handleInput = function (evt) {
              evt.stopPropagation();
              _this.__$value = evt.target.value;
              _this.props.value = evt.target.value;
              if (_this.props.onInput) {
                _this.props.onInput(evt);
              }
              else {
                _this.fire('input', _this.props.value);
              }
              if (_this.props.maxLength) {
                _this.valueLength = evt.target.value.length;
                _this.update();
              }
            };
            _this.clearInput = function () {
              _this.updateProps({
                value: ''
              });
              _this.__$value = '';
            };
            return _this;
          }
          Input.prototype.install = function () {
            this.__$value = this.props.value;
            Object.defineProperty(this, 'value', {
              get: this._onGetValue,
              set: this._onSetValue
            });
          };
          Input.prototype.focus = function () {
            this.shadowRoot.querySelector('input').focus();
          };
          Input.prototype.blur = function () {
            this.shadowRoot.querySelector('input').blur();
          };
          Input.prototype.render = function (props) {
            var _a;
            var type = props.type, size = props.size, suffixIcon = props.suffixIcon, prefixIcon = props.prefixIcon, autoComplete = props.autoComplete; props.validating; var onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave; props.trim; var otherProps = __rest(props, ["type", "size", "suffixIcon", "prefixIcon", "autoComplete", "validating", "onMouseEnter", "onMouseLeave", "trim"]);
            this._tempTagName = 'o-icon-' + (suffixIcon || prefixIcon);
            this._tempInputTagName = type === 'textarea' ? 'textarea' : 'input';
            return (Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", __assign({}, Object(omi__WEBPACK_IMPORTED_MODULE_0__["extractClass"])(props, 'o-input', (_a = {},
              _a["o-input--" + size] = props.size,
              _a['is-disabled'] = this.props.disabled,
              _a['o-input-suffix'] = suffixIcon,
              _a['o-input-prefix'] = prefixIcon,
              _a['is-block'] = props.block,
              _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
              (prefixIcon || suffixIcon) && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])(this._tempTagName, __assign({ css: "svg{\n            width: 1em;\n          }" }, Object(omi__WEBPACK_IMPORTED_MODULE_0__["extractClass"])(props, 'o-input__icon', {
                'is-prefix': prefixIcon,
                'is-suffix': suffixIcon
              }))),
              Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])(this._tempInputTagName, __assign({}, otherProps, {
                // ref="input"
                type: type, class: "o-" + this._tempInputTagName + "__inner", autocomplete: autoComplete, maxLength: props.maxLength, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput
              })),
              props.clearable && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { onClick: this.clearInput, class: "o-icon-clear", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })),
              props.maxLength && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "o-input__count" },
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "o-input__count-inner" },
                  this.valueLength,
                  "/",
                  props.maxLength))));
          };
          Input.css = css;
          Input.defaultProps = {
            value: '',
            type: 'text',
            autosize: false,
            rows: 2,
            trim: false,
            autoComplete: 'off',
            block: false
          };
          Input.propTypes = {
            disabled: Boolean,
            type: String,
            placeholder: String,
            clearable: Boolean,
            suffixIcon: String,
            size: String,
            prefixIcon: String,
            maxLength: Number,
            autoComplete: String,
            block: Boolean,
            value: String
          };
          Input = __decorate([
            Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-input')
          ], Input);
          return Input;
        }(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));

/* harmony default export */ __webpack_exports__["default"] = (Input);
        //# sourceMappingURL=index.esm.js.map


        /***/
      }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function (module, exports) {

        var g;

        // This works in non-strict mode
        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/
      }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", { value: true });
        exports.prompt = exports.confirm = exports.alert = void 0;
        var omi_1 = __webpack_require__(/*! omi */ "omi");
        __webpack_require__(/*! @omiu/dialog */ "./node_modules/@omiu/dialog/src/index.esm.js");
        __webpack_require__(/*! @omiu/button */ "./node_modules/@omiu/button/dist/index.es.js");
        __webpack_require__(/*! @omiu/input */ "./node_modules/@omiu/input/src/index.esm.js");
        var css = ".o-dialog__body {\n  padding: 5px 20px !important;\n}\n\n.o-dialog {\n  width: 400px !important;\n  max-width: 80%;\n}";
        var dialog;
        function alert(options) {
          if (dialog && dialog.parentNode)
            dialog.parentNode.removeChild(dialog);
          dialog = omi_1.render(omi_1.h("o-dialog", { css: css, title: options.title, visible: true },
            omi_1.h("span", null, options.msg),
            omi_1.h("span", { slot: "footer", class: "dialog-footer" },
              omi_1.h("o-button", {
                onclick: function (_) {
                  dialog.close();
                  options.onConfirm();
                }, type: "primary", size: "small"
              }, options.confirmButtonText))), document.body);
        }
        exports.alert = alert;
        function confirm(options) {
          if (dialog && dialog.parentNode)
            dialog.parentNode.removeChild(dialog);
          dialog = omi_1.render(omi_1.h("o-dialog", { css: css, title: options.title, visible: true },
            omi_1.h("span", null, options.msg),
            omi_1.h("span", { slot: "footer", class: "dialog-footer" },
              omi_1.h("o-button", {
                style: "margin-right:10px;", onclick: function (_) {
                  dialog.close();
                  options.onCancel();
                }, plain: true, size: "small"
              }, options.cancelButtonText),
              omi_1.h("o-button", {
                onclick: function (_) {
                  dialog.close();
                  options.onConfirm();
                }, type: "primary", size: "small"
              }, options.confirmButtonText))), document.body);
        }
        exports.confirm = confirm;
        var temp;
        function prompt(options) {
          temp = '';
          if (dialog && dialog.parentNode)
            dialog.parentNode.removeChild(dialog);
          dialog = omi_1.render(omi_1.h("o-dialog", { css: css, title: options.title, visible: true },
            omi_1.h("div", { style: "margin: 10px 0;" }, options.msg),
            omi_1.h("o-input", {
              oninput: function (evt) {
                temp = evt.detail;
              }, block: true, style: "margin-bottom:10px;"
            }),
            omi_1.h("span", { slot: "footer", class: "dialog-footer" },
              omi_1.h("o-button", {
                style: "margin-right:10px;", onclick: function (_) {
                  dialog.close();
                  options.onCancel();
                }, plain: true, size: "small"
              }, options.cancelButtonText),
              omi_1.h("o-button", {
                onclick: function (_) {
                  dialog.close();
                  options.onConfirm(temp);
                }, type: "primary", size: "small"
              }, options.confirmButtonText))), document.body);
          var inputs = document.querySelectorAll('o-input');
          inputs[inputs.length - 1].focus();
        }
        exports.prompt = prompt;
        if (typeof window !== 'undefined') {
          if (typeof window.Omiu !== 'undefined') {
            window.Omiu.alert = alert;
            window.Omiu.confirm = confirm;
            window.Omiu.confirm = prompt;
          }
          else {
            window.Omiu = {
              alert: alert,
              confirm: confirm,
              prompt: prompt
            };
          }
        }


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
  })["default"];
});
//# sourceMappingURL=index.js.map
