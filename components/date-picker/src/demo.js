/******/ (function (modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demo.tsx");
    /******/
})
/************************************************************************/
/******/({

/***/ "./node_modules/@omiu/icon/esm/date-range.js":
/*!***************************************************!*\
  !*** ./node_modules/@omiu/icon/esm/date-range.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "./node_modules/omi/dist/omi.esm.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@omiu/icon/esm/utils/createSvgIcon.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1___default()(Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
                d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
            }), 'DateRange'));

            /***/
        }),

/***/ "./node_modules/@omiu/icon/esm/utils/createSvgIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@omiu/icon/esm/utils/createSvgIcon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

            throw new Error("Module parse failed: Unexpected token (12:15)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|   define(hyphenate('OIcon' + displayName), class extends WeElement {\n| \n>     static css = `:host {\n|   fill: currentColor;\n|   width: 1em;");

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
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "./node_modules/omi/dist/omi.esm.js");
            /**
             * @omiu/input v0.0.8 http://omijs.org
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
                    _this.handleBlur = function () {
                        _this.fire('blur', _this.props.value);
                    };
                    _this.handleFocus = function () {
                        _this.fire('focus', _this.props.value);
                    };
                    _this.handleChange = function (evt) {
                        _this.props.value = evt.target.value;
                        _this.fire('change', _this.props.value);
                    };
                    _this.handleInput = function (evt) {
                        evt.stopPropagation();
                        _this.props.value = evt.target.value;
                        _this.fire('input', _this.props.value);
                        if (_this.props.maxLength) {
                            _this.valueLength = evt.target.value.length;
                            _this.update();
                        }
                    };
                    _this.clearInput = function () {
                        _this.updateProps({
                            value: ''
                        });
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

/***/ "./node_modules/flatpickr/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/flatpickr/dist/esm/utils/dom.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "./node_modules/flatpickr/dist/esm/utils/dates.js");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "./node_modules/flatpickr/dist/esm/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
            var __assign = (undefined && undefined.__assign) || function () {
                __assign = Object.assign || function (t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            };







            var DEBOUNCED_CHANGE_MS = 300;
            function FlatpickrInstance(element, instanceConfig) {
                var self = {
                    config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"]), flatpickr.defaultConfig),
                    l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"],
                };
                self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({ config: self.config, l10n: self.l10n });
                self._handlers = [];
                self.pluginElements = [];
                self.loadedPlugins = [];
                self._bind = bind;
                self._setHoursFromDate = setHoursFromDate;
                self._positionCalendar = positionCalendar;
                self.changeMonth = changeMonth;
                self.changeYear = changeYear;
                self.clear = clear;
                self.close = close;
                self.onMouseOver = onMouseOver;
                self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"];
                self.createDay = createDay;
                self.destroy = destroy;
                self.isEnabled = isEnabled;
                self.jumpToDate = jumpToDate;
                self.updateValue = updateValue;
                self.open = open;
                self.redraw = redraw;
                self.set = set;
                self.setDate = setDate;
                self.toggle = toggle;
                function setupHelperFunctions() {
                    self.utils = {
                        getDaysInMonth: function (month, yr) {
                            if (month === void 0) { month = self.currentMonth; }
                            if (yr === void 0) { yr = self.currentYear; }
                            if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                                return 29;
                            return self.l10n.daysInMonth[month];
                        },
                    };
                }
                function init() {
                    self.element = self.input = element;
                    self.isOpen = false;
                    parseConfig();
                    setupLocale();
                    setupInputs();
                    setupDates();
                    setupHelperFunctions();
                    if (!self.isMobile)
                        build();
                    bindEvents();
                    if (self.selectedDates.length || self.config.noCalendar) {
                        if (self.config.enableTime) {
                            setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
                        }
                        updateValue(false);
                    }
                    setCalendarWidth();
                    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    if (!self.isMobile && isSafari) {
                        positionCalendar();
                    }
                    triggerEvent("onReady");
                }
                function getClosestActiveElement() {
                    var _a;
                    return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
                        .activeElement || document.activeElement);
                }
                function bindToInstance(fn) {
                    return fn.bind(self);
                }
                function setCalendarWidth() {
                    var config = self.config;
                    if (config.weekNumbers === false && config.showMonths === 1) {
                        return;
                    }
                    else if (config.noCalendar !== true) {
                        window.requestAnimationFrame(function () {
                            if (self.calendarContainer !== undefined) {
                                self.calendarContainer.style.visibility = "hidden";
                                self.calendarContainer.style.display = "block";
                            }
                            if (self.daysContainer !== undefined) {
                                var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                                self.daysContainer.style.width = daysWidth + "px";
                                self.calendarContainer.style.width =
                                    daysWidth +
                                    (self.weekWrapper !== undefined
                                        ? self.weekWrapper.offsetWidth
                                        : 0) +
                                    "px";
                                self.calendarContainer.style.removeProperty("visibility");
                                self.calendarContainer.style.removeProperty("display");
                            }
                        });
                    }
                }
                function updateTime(e) {
                    if (self.selectedDates.length === 0) {
                        var defaultDate = self.config.minDate === undefined ||
                            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(new Date(), self.config.minDate) >= 0
                            ? new Date()
                            : new Date(self.config.minDate.getTime());
                        var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
                        defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
                        self.selectedDates = [defaultDate];
                        self.latestSelectedDateObj = defaultDate;
                    }
                    if (e !== undefined && e.type !== "blur") {
                        timeWrapper(e);
                    }
                    var prevValue = self._input.value;
                    setHoursFromInputs();
                    updateValue();
                    if (self._input.value !== prevValue) {
                        self._debouncedChange();
                    }
                }
                function ampm2military(hour, amPM) {
                    return (hour % 12) + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(amPM === self.l10n.amPM[1]);
                }
                function military2ampm(hour) {
                    switch (hour % 24) {
                        case 0:
                        case 12:
                            return 12;
                        default:
                            return hour % 12;
                    }
                }
                function setHoursFromInputs() {
                    if (self.hourElement === undefined || self.minuteElement === undefined)
                        return;
                    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                        ? (parseInt(self.secondElement.value, 10) || 0) % 60
                        : 0;
                    if (self.amPM !== undefined) {
                        hours = ampm2military(hours, self.amPM.textContent);
                    }
                    var limitMinHours = self.config.minTime !== undefined ||
                        (self.config.minDate &&
                            self.minDateHasTime &&
                            self.latestSelectedDateObj &&
                            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.minDate, true) ===
                            0);
                    var limitMaxHours = self.config.maxTime !== undefined ||
                        (self.config.maxDate &&
                            self.maxDateHasTime &&
                            self.latestSelectedDateObj &&
                            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.maxDate, true) ===
                            0);
                    if (self.config.maxTime !== undefined &&
                        self.config.minTime !== undefined &&
                        self.config.minTime > self.config.maxTime) {
                        var minBound = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
                        var maxBound = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
                        var currentTime = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(hours, minutes, seconds);
                        if (currentTime > maxBound && currentTime < minBound) {
                            var result = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["parseSeconds"])(minBound);
                            hours = result[0];
                            minutes = result[1];
                            seconds = result[2];
                        }
                    }
                    else {
                        if (limitMaxHours) {
                            var maxTime = self.config.maxTime !== undefined
                                ? self.config.maxTime
                                : self.config.maxDate;
                            hours = Math.min(hours, maxTime.getHours());
                            if (hours === maxTime.getHours())
                                minutes = Math.min(minutes, maxTime.getMinutes());
                            if (minutes === maxTime.getMinutes())
                                seconds = Math.min(seconds, maxTime.getSeconds());
                        }
                        if (limitMinHours) {
                            var minTime = self.config.minTime !== undefined
                                ? self.config.minTime
                                : self.config.minDate;
                            hours = Math.max(hours, minTime.getHours());
                            if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                                minutes = minTime.getMinutes();
                            if (minutes === minTime.getMinutes())
                                seconds = Math.max(seconds, minTime.getSeconds());
                        }
                    }
                    setHours(hours, minutes, seconds);
                }
                function setHoursFromDate(dateObj) {
                    var date = dateObj || self.latestSelectedDateObj;
                    if (date && date instanceof Date) {
                        setHours(date.getHours(), date.getMinutes(), date.getSeconds());
                    }
                }
                function setHours(hours, minutes, seconds) {
                    if (self.latestSelectedDateObj !== undefined) {
                        self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
                    }
                    if (!self.hourElement || !self.minuteElement || self.isMobile)
                        return;
                    self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(!self.config.time_24hr
                        ? ((12 + hours) % 12) + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours % 12 === 0)
                        : hours);
                    self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(minutes);
                    if (self.amPM !== undefined)
                        self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours >= 12)];
                    if (self.secondElement !== undefined)
                        self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(seconds);
                }
                function onYearInput(event) {
                    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(event);
                    var year = parseInt(eventTarget.value) + (event.delta || 0);
                    if (year / 1000 > 1 ||
                        (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                        changeYear(year);
                    }
                }
                function bind(element, event, handler, options) {
                    if (event instanceof Array)
                        return event.forEach(function (ev) { return bind(element, ev, handler, options); });
                    if (element instanceof Array)
                        return element.forEach(function (el) { return bind(el, event, handler, options); });
                    element.addEventListener(event, handler, options);
                    self._handlers.push({
                        remove: function () { return element.removeEventListener(event, handler, options); },
                    });
                }
                function triggerChange() {
                    triggerEvent("onChange");
                }
                function bindEvents() {
                    if (self.config.wrap) {
                        ["open", "close", "toggle", "clear"].forEach(function (evt) {
                            Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                                return bind(el, "click", self[evt]);
                            });
                        });
                    }
                    if (self.isMobile) {
                        setupMobile();
                        return;
                    }
                    var debouncedResize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(onResize, 50);
                    self._debouncedChange = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(triggerChange, DEBOUNCED_CHANGE_MS);
                    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                        bind(self.daysContainer, "mouseover", function (e) {
                            if (self.config.mode === "range")
                                onMouseOver(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e));
                        });
                    bind(self._input, "keydown", onKeyDown);
                    if (self.calendarContainer !== undefined) {
                        bind(self.calendarContainer, "keydown", onKeyDown);
                    }
                    if (!self.config.inline && !self.config.static)
                        bind(window, "resize", debouncedResize);
                    if (window.ontouchstart !== undefined)
                        bind(window.document, "touchstart", documentClick);
                    else
                        bind(window.document, "mousedown", documentClick);
                    bind(window.document, "focus", documentClick, { capture: true });
                    if (self.config.clickOpens === true) {
                        bind(self._input, "focus", self.open);
                        bind(self._input, "click", self.open);
                    }
                    if (self.daysContainer !== undefined) {
                        bind(self.monthNav, "click", onMonthNavClick);
                        bind(self.monthNav, ["keyup", "increment"], onYearInput);
                        bind(self.daysContainer, "click", selectDate);
                    }
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        var selText = function (e) {
                            return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).select();
                        };
                        bind(self.timeContainer, ["increment"], updateTime);
                        bind(self.timeContainer, "blur", updateTime, { capture: true });
                        bind(self.timeContainer, "click", timeIncrement);
                        bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                        if (self.secondElement !== undefined)
                            bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                        if (self.amPM !== undefined) {
                            bind(self.amPM, "click", function (e) {
                                updateTime(e);
                            });
                        }
                    }
                    if (self.config.allowInput) {
                        bind(self._input, "blur", onBlur);
                    }
                }
                function jumpToDate(jumpDate, triggerChange) {
                    var jumpTo = jumpDate !== undefined
                        ? self.parseDate(jumpDate)
                        : self.latestSelectedDateObj ||
                        (self.config.minDate && self.config.minDate > self.now
                            ? self.config.minDate
                            : self.config.maxDate && self.config.maxDate < self.now
                                ? self.config.maxDate
                                : self.now);
                    var oldYear = self.currentYear;
                    var oldMonth = self.currentMonth;
                    try {
                        if (jumpTo !== undefined) {
                            self.currentYear = jumpTo.getFullYear();
                            self.currentMonth = jumpTo.getMonth();
                        }
                    }
                    catch (e) {
                        e.message = "Invalid date supplied: " + jumpTo;
                        self.config.errorHandler(e);
                    }
                    if (triggerChange && self.currentYear !== oldYear) {
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                    if (triggerChange &&
                        (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                        triggerEvent("onMonthChange");
                    }
                    self.redraw();
                }
                function timeIncrement(e) {
                    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                    if (~eventTarget.className.indexOf("arrow"))
                        incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
                }
                function incrementNumInput(e, delta, inputElem) {
                    var target = e && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                    var input = inputElem ||
                        (target && target.parentNode && target.parentNode.firstChild);
                    var event = createEvent("increment");
                    event.delta = delta;
                    input && input.dispatchEvent(event);
                }
                function build() {
                    var fragment = window.document.createDocumentFragment();
                    self.calendarContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-calendar");
                    self.calendarContainer.tabIndex = -1;
                    if (!self.config.noCalendar) {
                        fragment.appendChild(buildMonthNav());
                        self.innerContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-innerContainer");
                        if (self.config.weekNumbers) {
                            var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                            self.innerContainer.appendChild(weekWrapper);
                            self.weekNumbers = weekNumbers;
                            self.weekWrapper = weekWrapper;
                        }
                        self.rContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-rContainer");
                        self.rContainer.appendChild(buildWeekdays());
                        if (!self.daysContainer) {
                            self.daysContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-days");
                            self.daysContainer.tabIndex = -1;
                        }
                        buildDays();
                        self.rContainer.appendChild(self.daysContainer);
                        self.innerContainer.appendChild(self.rContainer);
                        fragment.appendChild(self.innerContainer);
                    }
                    if (self.config.enableTime) {
                        fragment.appendChild(buildTime());
                    }
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rangeMode", self.config.mode === "range");
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "animate", self.config.animate === true);
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
                    self.calendarContainer.appendChild(fragment);
                    var customAppend = self.config.appendTo !== undefined &&
                        self.config.appendTo.nodeType !== undefined;
                    if (self.config.inline || self.config.static) {
                        self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                        if (self.config.inline) {
                            if (!customAppend && self.element.parentNode)
                                self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                            else if (self.config.appendTo !== undefined)
                                self.config.appendTo.appendChild(self.calendarContainer);
                        }
                        if (self.config.static) {
                            var wrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-wrapper");
                            if (self.element.parentNode)
                                self.element.parentNode.insertBefore(wrapper, self.element);
                            wrapper.appendChild(self.element);
                            if (self.altInput)
                                wrapper.appendChild(self.altInput);
                            wrapper.appendChild(self.calendarContainer);
                        }
                    }
                    if (!self.config.static && !self.config.inline)
                        (self.config.appendTo !== undefined
                            ? self.config.appendTo
                            : window.document.body).appendChild(self.calendarContainer);
                }
                function createDay(className, date, _dayNumber, i) {
                    var dateIsEnabled = isEnabled(date, true), dayElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", className, date.getDate().toString());
                    dayElement.dateObj = date;
                    dayElement.$i = i;
                    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
                    if (className.indexOf("hidden") === -1 &&
                        Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.now) === 0) {
                        self.todayDateElem = dayElement;
                        dayElement.classList.add("today");
                        dayElement.setAttribute("aria-current", "date");
                    }
                    if (dateIsEnabled) {
                        dayElement.tabIndex = -1;
                        if (isDateSelected(date)) {
                            dayElement.classList.add("selected");
                            self.selectedDateElem = dayElement;
                            if (self.config.mode === "range") {
                                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "startRange", self.selectedDates[0] &&
                                    Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0], true) === 0);
                                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "endRange", self.selectedDates[1] &&
                                    Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1], true) === 0);
                                if (className === "nextMonthDay")
                                    dayElement.classList.add("inRange");
                            }
                        }
                    }
                    else {
                        dayElement.classList.add("flatpickr-disabled");
                    }
                    if (self.config.mode === "range") {
                        if (isDateInRange(date) && !isDateSelected(date))
                            dayElement.classList.add("inRange");
                    }
                    if (self.weekNumbers &&
                        self.config.showMonths === 1 &&
                        className !== "prevMonthDay" &&
                        i % 7 === 6) {
                        self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
                    }
                    triggerEvent("onDayCreate", dayElement);
                    return dayElement;
                }
                function focusOnDayElem(targetNode) {
                    targetNode.focus();
                    if (self.config.mode === "range")
                        onMouseOver(targetNode);
                }
                function getFirstAvailableDay(delta) {
                    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
                    var endMonth = delta > 0 ? self.config.showMonths : -1;
                    for (var m = startMonth; m != endMonth; m += delta) {
                        var month = self.daysContainer.children[m];
                        var startIndex = delta > 0 ? 0 : month.children.length - 1;
                        var endIndex = delta > 0 ? month.children.length : -1;
                        for (var i = startIndex; i != endIndex; i += delta) {
                            var c = month.children[i];
                            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                                return c;
                        }
                    }
                    return undefined;
                }
                function getNextAvailableDay(current, delta) {
                    var givenMonth = current.className.indexOf("Month") === -1
                        ? current.dateObj.getMonth()
                        : self.currentMonth;
                    var endMonth = delta > 0 ? self.config.showMonths : -1;
                    var loopDelta = delta > 0 ? 1 : -1;
                    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                        var month = self.daysContainer.children[m];
                        var startIndex = givenMonth - self.currentMonth === m
                            ? current.$i + delta
                            : delta < 0
                                ? month.children.length - 1
                                : 0;
                        var numMonthDays = month.children.length;
                        for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                            var c = month.children[i];
                            if (c.className.indexOf("hidden") === -1 &&
                                isEnabled(c.dateObj) &&
                                Math.abs(current.$i - i) >= Math.abs(delta))
                                return focusOnDayElem(c);
                        }
                    }
                    self.changeMonth(loopDelta);
                    focusOnDay(getFirstAvailableDay(loopDelta), 0);
                    return undefined;
                }
                function focusOnDay(current, offset) {
                    var activeElement = getClosestActiveElement();
                    var dayFocused = isInView(activeElement || document.body);
                    var startElem = current !== undefined
                        ? current
                        : dayFocused
                            ? activeElement
                            : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                                ? self.selectedDateElem
                                : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                                    ? self.todayDateElem
                                    : getFirstAvailableDay(offset > 0 ? 1 : -1);
                    if (startElem === undefined) {
                        self._input.focus();
                    }
                    else if (!dayFocused) {
                        focusOnDayElem(startElem);
                    }
                    else {
                        getNextAvailableDay(startElem, offset);
                    }
                }
                function buildMonthDays(year, month) {
                    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
                    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
                    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
                    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
                    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                        days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
                    }
                    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                        days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
                    }
                    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                        (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                        days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
                    }
                    var dayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "dayContainer");
                    dayContainer.appendChild(days);
                    return dayContainer;
                }
                function buildDays() {
                    if (self.daysContainer === undefined) {
                        return;
                    }
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.daysContainer);
                    if (self.weekNumbers)
                        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekNumbers);
                    var frag = document.createDocumentFragment();
                    for (var i = 0; i < self.config.showMonths; i++) {
                        var d = new Date(self.currentYear, self.currentMonth, 1);
                        d.setMonth(self.currentMonth + i);
                        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
                    }
                    self.daysContainer.appendChild(frag);
                    self.days = self.daysContainer.firstChild;
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        onMouseOver();
                    }
                }
                function buildMonthSwitch() {
                    if (self.config.showMonths > 1 ||
                        self.config.monthSelectorType !== "dropdown")
                        return;
                    var shouldBuildMonth = function (month) {
                        if (self.config.minDate !== undefined &&
                            self.currentYear === self.config.minDate.getFullYear() &&
                            month < self.config.minDate.getMonth()) {
                            return false;
                        }
                        return !(self.config.maxDate !== undefined &&
                            self.currentYear === self.config.maxDate.getFullYear() &&
                            month > self.config.maxDate.getMonth());
                    };
                    self.monthsDropdownContainer.tabIndex = -1;
                    self.monthsDropdownContainer.innerHTML = "";
                    for (var i = 0; i < 12; i++) {
                        if (!shouldBuildMonth(i))
                            continue;
                        var month = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", "flatpickr-monthDropdown-month");
                        month.value = new Date(self.currentYear, i).getMonth().toString();
                        month.textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(i, self.config.shorthandCurrentMonth, self.l10n);
                        month.tabIndex = -1;
                        if (self.currentMonth === i) {
                            month.selected = true;
                        }
                        self.monthsDropdownContainer.appendChild(month);
                    }
                }
                function buildMonth() {
                    var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-month");
                    var monthNavFragment = window.document.createDocumentFragment();
                    var monthElement;
                    if (self.config.showMonths > 1 ||
                        self.config.monthSelectorType === "static") {
                        monthElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "cur-month");
                    }
                    else {
                        self.monthsDropdownContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", "flatpickr-monthDropdown-months");
                        self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                        bind(self.monthsDropdownContainer, "change", function (e) {
                            var target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                            var selectedMonth = parseInt(target.value, 10);
                            self.changeMonth(selectedMonth - self.currentMonth);
                            triggerEvent("onMonthChange");
                        });
                        buildMonthSwitch();
                        monthElement = self.monthsDropdownContainer;
                    }
                    var yearInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("cur-year", { tabindex: "-1" });
                    var yearElement = yearInput.getElementsByTagName("input")[0];
                    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
                    if (self.config.minDate) {
                        yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
                    }
                    if (self.config.maxDate) {
                        yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                        yearElement.disabled =
                            !!self.config.minDate &&
                            self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
                    }
                    var currentMonth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-current-month");
                    currentMonth.appendChild(monthElement);
                    currentMonth.appendChild(yearInput);
                    monthNavFragment.appendChild(currentMonth);
                    container.appendChild(monthNavFragment);
                    return {
                        container: container,
                        yearElement: yearElement,
                        monthElement: monthElement,
                    };
                }
                function buildMonths() {
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.monthNav);
                    self.monthNav.appendChild(self.prevMonthNav);
                    if (self.config.showMonths) {
                        self.yearElements = [];
                        self.monthElements = [];
                    }
                    for (var m = self.config.showMonths; m--;) {
                        var month = buildMonth();
                        self.yearElements.push(month.yearElement);
                        self.monthElements.push(month.monthElement);
                        self.monthNav.appendChild(month.container);
                    }
                    self.monthNav.appendChild(self.nextMonthNav);
                }
                function buildMonthNav() {
                    self.monthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-months");
                    self.yearElements = [];
                    self.monthElements = [];
                    self.prevMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-prev-month");
                    self.prevMonthNav.innerHTML = self.config.prevArrow;
                    self.nextMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-next-month");
                    self.nextMonthNav.innerHTML = self.config.nextArrow;
                    buildMonths();
                    Object.defineProperty(self, "_hidePrevMonthArrow", {
                        get: function () { return self.__hidePrevMonthArrow; },
                        set: function (bool) {
                            if (self.__hidePrevMonthArrow !== bool) {
                                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.prevMonthNav, "flatpickr-disabled", bool);
                                self.__hidePrevMonthArrow = bool;
                            }
                        },
                    });
                    Object.defineProperty(self, "_hideNextMonthArrow", {
                        get: function () { return self.__hideNextMonthArrow; },
                        set: function (bool) {
                            if (self.__hideNextMonthArrow !== bool) {
                                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.nextMonthNav, "flatpickr-disabled", bool);
                                self.__hideNextMonthArrow = bool;
                            }
                        },
                    });
                    self.currentYearElement = self.yearElements[0];
                    updateNavigationCurrentMonth();
                    return self.monthNav;
                }
                function buildTime() {
                    self.calendarContainer.classList.add("hasTime");
                    if (self.config.noCalendar)
                        self.calendarContainer.classList.add("noCalendar");
                    var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
                    self.timeContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-time");
                    self.timeContainer.tabIndex = -1;
                    var separator = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":");
                    var hourInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-hour", {
                        "aria-label": self.l10n.hourAriaLabel,
                    });
                    self.hourElement = hourInput.getElementsByTagName("input")[0];
                    var minuteInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-minute", {
                        "aria-label": self.l10n.minuteAriaLabel,
                    });
                    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
                    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
                    self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj
                        ? self.latestSelectedDateObj.getHours()
                        : self.config.time_24hr
                            ? defaults.hours
                            : military2ampm(defaults.hours));
                    self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj
                        ? self.latestSelectedDateObj.getMinutes()
                        : defaults.minutes);
                    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
                    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
                    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
                    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
                    self.hourElement.setAttribute("maxlength", "2");
                    self.minuteElement.setAttribute("min", "0");
                    self.minuteElement.setAttribute("max", "59");
                    self.minuteElement.setAttribute("maxlength", "2");
                    self.timeContainer.appendChild(hourInput);
                    self.timeContainer.appendChild(separator);
                    self.timeContainer.appendChild(minuteInput);
                    if (self.config.time_24hr)
                        self.timeContainer.classList.add("time24hr");
                    if (self.config.enableSeconds) {
                        self.timeContainer.classList.add("hasSeconds");
                        var secondInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-second");
                        self.secondElement = secondInput.getElementsByTagName("input")[0];
                        self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj
                            ? self.latestSelectedDateObj.getSeconds()
                            : defaults.seconds);
                        self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                        self.secondElement.setAttribute("min", "0");
                        self.secondElement.setAttribute("max", "59");
                        self.secondElement.setAttribute("maxlength", "2");
                        self.timeContainer.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":"));
                        self.timeContainer.appendChild(secondInput);
                    }
                    if (!self.config.time_24hr) {
                        self.amPM = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-am-pm", self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])((self.latestSelectedDateObj
                            ? self.hourElement.value
                            : self.config.defaultHour) > 11)]);
                        self.amPM.title = self.l10n.toggleTitle;
                        self.amPM.tabIndex = -1;
                        self.timeContainer.appendChild(self.amPM);
                    }
                    return self.timeContainer;
                }
                function buildWeekdays() {
                    if (!self.weekdayContainer)
                        self.weekdayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdays");
                    else
                        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekdayContainer);
                    for (var i = self.config.showMonths; i--;) {
                        var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdaycontainer");
                        self.weekdayContainer.appendChild(container);
                    }
                    updateWeekdays();
                    return self.weekdayContainer;
                }
                function updateWeekdays() {
                    if (!self.weekdayContainer) {
                        return;
                    }
                    var firstDayOfWeek = self.l10n.firstDayOfWeek;
                    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
                    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                        weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
                    }
                    for (var i = self.config.showMonths; i--;) {
                        self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
                    }
                }
                function buildWeeks() {
                    self.calendarContainer.classList.add("hasWeeks");
                    var weekWrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekwrapper");
                    weekWrapper.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
                    var weekNumbers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weeks");
                    weekWrapper.appendChild(weekNumbers);
                    return {
                        weekWrapper: weekWrapper,
                        weekNumbers: weekNumbers,
                    };
                }
                function changeMonth(value, isOffset) {
                    if (isOffset === void 0) { isOffset = true; }
                    var delta = isOffset ? value : value - self.currentMonth;
                    if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                        (delta > 0 && self._hideNextMonthArrow === true))
                        return;
                    self.currentMonth += delta;
                    if (self.currentMonth < 0 || self.currentMonth > 11) {
                        self.currentYear += self.currentMonth > 11 ? 1 : -1;
                        self.currentMonth = (self.currentMonth + 12) % 12;
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                    buildDays();
                    triggerEvent("onMonthChange");
                    updateNavigationCurrentMonth();
                }
                function clear(triggerChangeEvent, toInitial) {
                    if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
                    if (toInitial === void 0) { toInitial = true; }
                    self.input.value = "";
                    if (self.altInput !== undefined)
                        self.altInput.value = "";
                    if (self.mobileInput !== undefined)
                        self.mobileInput.value = "";
                    self.selectedDates = [];
                    self.latestSelectedDateObj = undefined;
                    if (toInitial === true) {
                        self.currentYear = self._initialDate.getFullYear();
                        self.currentMonth = self._initialDate.getMonth();
                    }
                    if (self.config.enableTime === true) {
                        var _a = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                        setHours(hours, minutes, seconds);
                    }
                    self.redraw();
                    if (triggerChangeEvent)
                        triggerEvent("onChange");
                }
                function close() {
                    self.isOpen = false;
                    if (!self.isMobile) {
                        if (self.calendarContainer !== undefined) {
                            self.calendarContainer.classList.remove("open");
                        }
                        if (self._input !== undefined) {
                            self._input.classList.remove("active");
                        }
                    }
                    triggerEvent("onClose");
                }
                function destroy() {
                    if (self.config !== undefined)
                        triggerEvent("onDestroy");
                    for (var i = self._handlers.length; i--;) {
                        self._handlers[i].remove();
                    }
                    self._handlers = [];
                    if (self.mobileInput) {
                        if (self.mobileInput.parentNode)
                            self.mobileInput.parentNode.removeChild(self.mobileInput);
                        self.mobileInput = undefined;
                    }
                    else if (self.calendarContainer && self.calendarContainer.parentNode) {
                        if (self.config.static && self.calendarContainer.parentNode) {
                            var wrapper = self.calendarContainer.parentNode;
                            wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                            if (wrapper.parentNode) {
                                while (wrapper.firstChild)
                                    wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                                wrapper.parentNode.removeChild(wrapper);
                            }
                        }
                        else
                            self.calendarContainer.parentNode.removeChild(self.calendarContainer);
                    }
                    if (self.altInput) {
                        self.input.type = "text";
                        if (self.altInput.parentNode)
                            self.altInput.parentNode.removeChild(self.altInput);
                        delete self.altInput;
                    }
                    if (self.input) {
                        self.input.type = self.input._type;
                        self.input.classList.remove("flatpickr-input");
                        self.input.removeAttribute("readonly");
                    }
                    [
                        "_showTimeInput",
                        "latestSelectedDateObj",
                        "_hideNextMonthArrow",
                        "_hidePrevMonthArrow",
                        "__hideNextMonthArrow",
                        "__hidePrevMonthArrow",
                        "isMobile",
                        "isOpen",
                        "selectedDateElem",
                        "minDateHasTime",
                        "maxDateHasTime",
                        "days",
                        "daysContainer",
                        "_input",
                        "_positionElement",
                        "innerContainer",
                        "rContainer",
                        "monthNav",
                        "todayDateElem",
                        "calendarContainer",
                        "weekdayContainer",
                        "prevMonthNav",
                        "nextMonthNav",
                        "monthsDropdownContainer",
                        "currentMonthElement",
                        "currentYearElement",
                        "navigationCurrentMonth",
                        "selectedDateElem",
                        "config",
                    ].forEach(function (k) {
                        try {
                            delete self[k];
                        }
                        catch (_) { }
                    });
                }
                function isCalendarElem(elem) {
                    return self.calendarContainer.contains(elem);
                }
                function documentClick(e) {
                    if (self.isOpen && !self.config.inline) {
                        var eventTarget_1 = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                        var isCalendarElement = isCalendarElem(eventTarget_1);
                        var isInput = eventTarget_1 === self.input ||
                            eventTarget_1 === self.altInput ||
                            self.element.contains(eventTarget_1) ||
                            (e.path &&
                                e.path.indexOf &&
                                (~e.path.indexOf(self.input) ||
                                    ~e.path.indexOf(self.altInput)));
                        var lostFocus = !isInput &&
                            !isCalendarElement &&
                            !isCalendarElem(e.relatedTarget);
                        var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                            return elem.contains(eventTarget_1);
                        });
                        if (lostFocus && isIgnored) {
                            if (self.config.allowInput) {
                                self.setDate(self._input.value, false, self.config.altInput
                                    ? self.config.altFormat
                                    : self.config.dateFormat);
                            }
                            if (self.timeContainer !== undefined &&
                                self.minuteElement !== undefined &&
                                self.hourElement !== undefined &&
                                self.input.value !== "" &&
                                self.input.value !== undefined) {
                                updateTime();
                            }
                            self.close();
                            if (self.config &&
                                self.config.mode === "range" &&
                                self.selectedDates.length === 1)
                                self.clear(false);
                        }
                    }
                }
                function changeYear(newYear) {
                    if (!newYear ||
                        (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                        (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                        return;
                    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
                    self.currentYear = newYearNum || self.currentYear;
                    if (self.config.maxDate &&
                        self.currentYear === self.config.maxDate.getFullYear()) {
                        self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
                    }
                    else if (self.config.minDate &&
                        self.currentYear === self.config.minDate.getFullYear()) {
                        self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
                    }
                    if (isNewYear) {
                        self.redraw();
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                }
                function isEnabled(date, timeless) {
                    var _a;
                    if (timeless === void 0) { timeless = true; }
                    var dateToCheck = self.parseDate(date, undefined, timeless);
                    if ((self.config.minDate &&
                        dateToCheck &&
                        Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                        (self.config.maxDate &&
                            dateToCheck &&
                            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                        return false;
                    if (!self.config.enable && self.config.disable.length === 0)
                        return true;
                    if (dateToCheck === undefined)
                        return false;
                    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
                    for (var i = 0, d = void 0; i < array.length; i++) {
                        d = array[i];
                        if (typeof d === "function" &&
                            d(dateToCheck))
                            return bool;
                        else if (d instanceof Date &&
                            dateToCheck !== undefined &&
                            d.getTime() === dateToCheck.getTime())
                            return bool;
                        else if (typeof d === "string") {
                            var parsed = self.parseDate(d, undefined, true);
                            return parsed && parsed.getTime() === dateToCheck.getTime()
                                ? bool
                                : !bool;
                        }
                        else if (typeof d === "object" &&
                            dateToCheck !== undefined &&
                            d.from &&
                            d.to &&
                            dateToCheck.getTime() >= d.from.getTime() &&
                            dateToCheck.getTime() <= d.to.getTime())
                            return bool;
                    }
                    return !bool;
                }
                function isInView(elem) {
                    if (self.daysContainer !== undefined)
                        return (elem.className.indexOf("hidden") === -1 &&
                            elem.className.indexOf("flatpickr-disabled") === -1 &&
                            self.daysContainer.contains(elem));
                    return false;
                }
                function onBlur(e) {
                    var isInput = e.target === self._input;
                    var valueChanged = self._input.value.trimEnd() !== getDateStr();
                    if (isInput &&
                        valueChanged &&
                        !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
                        self.setDate(self._input.value, true, e.target === self.altInput
                            ? self.config.altFormat
                            : self.config.dateFormat);
                    }
                }
                function onKeyDown(e) {
                    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                    var isInput = self.config.wrap
                        ? element.contains(eventTarget)
                        : eventTarget === self._input;
                    var allowInput = self.config.allowInput;
                    var allowKeydown = self.isOpen && (!allowInput || !isInput);
                    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
                    if (e.keyCode === 13 && isInput) {
                        if (allowInput) {
                            self.setDate(self._input.value, true, eventTarget === self.altInput
                                ? self.config.altFormat
                                : self.config.dateFormat);
                            self.close();
                            return eventTarget.blur();
                        }
                        else {
                            self.open();
                        }
                    }
                    else if (isCalendarElem(eventTarget) ||
                        allowKeydown ||
                        allowInlineKeydown) {
                        var isTimeObj = !!self.timeContainer &&
                            self.timeContainer.contains(eventTarget);
                        switch (e.keyCode) {
                            case 13:
                                if (isTimeObj) {
                                    e.preventDefault();
                                    updateTime();
                                    focusAndClose();
                                }
                                else
                                    selectDate(e);
                                break;
                            case 27:
                                e.preventDefault();
                                focusAndClose();
                                break;
                            case 8:
                            case 46:
                                if (isInput && !self.config.allowInput) {
                                    e.preventDefault();
                                    self.clear();
                                }
                                break;
                            case 37:
                            case 39:
                                if (!isTimeObj && !isInput) {
                                    e.preventDefault();
                                    var activeElement = getClosestActiveElement();
                                    if (self.daysContainer !== undefined &&
                                        (allowInput === false ||
                                            (activeElement && isInView(activeElement)))) {
                                        var delta_1 = e.keyCode === 39 ? 1 : -1;
                                        if (!e.ctrlKey)
                                            focusOnDay(undefined, delta_1);
                                        else {
                                            e.stopPropagation();
                                            changeMonth(delta_1);
                                            focusOnDay(getFirstAvailableDay(1), 0);
                                        }
                                    }
                                }
                                else if (self.hourElement)
                                    self.hourElement.focus();
                                break;
                            case 38:
                            case 40:
                                e.preventDefault();
                                var delta = e.keyCode === 40 ? 1 : -1;
                                if ((self.daysContainer &&
                                    eventTarget.$i !== undefined) ||
                                    eventTarget === self.input ||
                                    eventTarget === self.altInput) {
                                    if (e.ctrlKey) {
                                        e.stopPropagation();
                                        changeYear(self.currentYear - delta);
                                        focusOnDay(getFirstAvailableDay(1), 0);
                                    }
                                    else if (!isTimeObj)
                                        focusOnDay(undefined, delta * 7);
                                }
                                else if (eventTarget === self.currentYearElement) {
                                    changeYear(self.currentYear - delta);
                                }
                                else if (self.config.enableTime) {
                                    if (!isTimeObj && self.hourElement)
                                        self.hourElement.focus();
                                    updateTime(e);
                                    self._debouncedChange();
                                }
                                break;
                            case 9:
                                if (isTimeObj) {
                                    var elems = [
                                        self.hourElement,
                                        self.minuteElement,
                                        self.secondElement,
                                        self.amPM,
                                    ]
                                        .concat(self.pluginElements)
                                        .filter(function (x) { return x; });
                                    var i = elems.indexOf(eventTarget);
                                    if (i !== -1) {
                                        var target = elems[i + (e.shiftKey ? -1 : 1)];
                                        e.preventDefault();
                                        (target || self._input).focus();
                                    }
                                }
                                else if (!self.config.noCalendar &&
                                    self.daysContainer &&
                                    self.daysContainer.contains(eventTarget) &&
                                    e.shiftKey) {
                                    e.preventDefault();
                                    self._input.focus();
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    if (self.amPM !== undefined && eventTarget === self.amPM) {
                        switch (e.key) {
                            case self.l10n.amPM[0].charAt(0):
                            case self.l10n.amPM[0].charAt(0).toLowerCase():
                                self.amPM.textContent = self.l10n.amPM[0];
                                setHoursFromInputs();
                                updateValue();
                                break;
                            case self.l10n.amPM[1].charAt(0):
                            case self.l10n.amPM[1].charAt(0).toLowerCase():
                                self.amPM.textContent = self.l10n.amPM[1];
                                setHoursFromInputs();
                                updateValue();
                                break;
                        }
                    }
                    if (isInput || isCalendarElem(eventTarget)) {
                        triggerEvent("onKeyDown", e);
                    }
                }
                function onMouseOver(elem, cellClass) {
                    if (cellClass === void 0) { cellClass = "flatpickr-day"; }
                    if (self.selectedDates.length !== 1 ||
                        (elem &&
                            (!elem.classList.contains(cellClass) ||
                                elem.classList.contains("flatpickr-disabled"))))
                        return;
                    var hoverDate = elem
                        ? elem.dateObj.getTime()
                        : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
                    var containsDisabled = false;
                    var minRange = 0, maxRange = 0;
                    for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__["duration"].DAY) {
                        if (!isEnabled(new Date(t), true)) {
                            containsDisabled =
                                containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                            if (t < initialDate && (!minRange || t > minRange))
                                minRange = t;
                            else if (t > initialDate && (!maxRange || t < maxRange))
                                maxRange = t;
                        }
                    }
                    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
                    hoverableCells.forEach(function (dayElem) {
                        var date = dayElem.dateObj;
                        var timestamp = date.getTime();
                        var outOfRange = (minRange > 0 && timestamp < minRange) ||
                            (maxRange > 0 && timestamp > maxRange);
                        if (outOfRange) {
                            dayElem.classList.add("notAllowed");
                            ["inRange", "startRange", "endRange"].forEach(function (c) {
                                dayElem.classList.remove(c);
                            });
                            return;
                        }
                        else if (containsDisabled && !outOfRange)
                            return;
                        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        if (elem !== undefined) {
                            elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                                ? "startRange"
                                : "endRange");
                            if (initialDate < hoverDate && timestamp === initialDate)
                                dayElem.classList.add("startRange");
                            else if (initialDate > hoverDate && timestamp === initialDate)
                                dayElem.classList.add("endRange");
                            if (timestamp >= minRange &&
                                (maxRange === 0 || timestamp <= maxRange) &&
                                Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["isBetween"])(timestamp, initialDate, hoverDate))
                                dayElem.classList.add("inRange");
                        }
                    });
                }
                function onResize() {
                    if (self.isOpen && !self.config.static && !self.config.inline)
                        positionCalendar();
                }
                function open(e, positionElement) {
                    if (positionElement === void 0) { positionElement = self._positionElement; }
                    if (self.isMobile === true) {
                        if (e) {
                            e.preventDefault();
                            var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                            if (eventTarget) {
                                eventTarget.blur();
                            }
                        }
                        if (self.mobileInput !== undefined) {
                            self.mobileInput.focus();
                            self.mobileInput.click();
                        }
                        triggerEvent("onOpen");
                        return;
                    }
                    else if (self._input.disabled || self.config.inline) {
                        return;
                    }
                    var wasOpen = self.isOpen;
                    self.isOpen = true;
                    if (!wasOpen) {
                        self.calendarContainer.classList.add("open");
                        self._input.classList.add("active");
                        triggerEvent("onOpen");
                        positionCalendar(positionElement);
                    }
                    if (self.config.enableTime === true && self.config.noCalendar === true) {
                        if (self.config.allowInput === false &&
                            (e === undefined ||
                                !self.timeContainer.contains(e.relatedTarget))) {
                            setTimeout(function () { return self.hourElement.select(); }, 50);
                        }
                    }
                }
                function minMaxDateSetter(type) {
                    return function (date) {
                        var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                        var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                        if (dateObj !== undefined) {
                            self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                                dateObj.getHours() > 0 ||
                                dateObj.getMinutes() > 0 ||
                                dateObj.getSeconds() > 0;
                        }
                        if (self.selectedDates) {
                            self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                            if (!self.selectedDates.length && type === "min")
                                setHoursFromDate(dateObj);
                            updateValue();
                        }
                        if (self.daysContainer) {
                            redraw();
                            if (dateObj !== undefined)
                                self.currentYearElement[type] = dateObj.getFullYear().toString();
                            else
                                self.currentYearElement.removeAttribute(type);
                            self.currentYearElement.disabled =
                                !!inverseDateObj &&
                                dateObj !== undefined &&
                                inverseDateObj.getFullYear() === dateObj.getFullYear();
                        }
                    };
                }
                function parseConfig() {
                    var boolOpts = [
                        "wrap",
                        "weekNumbers",
                        "allowInput",
                        "allowInvalidPreload",
                        "clickOpens",
                        "time_24hr",
                        "enableTime",
                        "noCalendar",
                        "altInput",
                        "shorthandCurrentMonth",
                        "inline",
                        "static",
                        "enableSeconds",
                        "disableMobile",
                    ];
                    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
                    var formats = {};
                    self.config.parseDate = userConfig.parseDate;
                    self.config.formatDate = userConfig.formatDate;
                    Object.defineProperty(self.config, "enable", {
                        get: function () { return self.config._enable; },
                        set: function (dates) {
                            self.config._enable = parseDateRules(dates);
                        },
                    });
                    Object.defineProperty(self.config, "disable", {
                        get: function () { return self.config._disable; },
                        set: function (dates) {
                            self.config._disable = parseDateRules(dates);
                        },
                    });
                    var timeMode = userConfig.mode === "time";
                    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                        var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].dateFormat;
                        formats.dateFormat =
                            userConfig.noCalendar || timeMode
                                ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                                : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
                    }
                    if (userConfig.altInput &&
                        (userConfig.enableTime || timeMode) &&
                        !userConfig.altFormat) {
                        var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].altFormat;
                        formats.altFormat =
                            userConfig.noCalendar || timeMode
                                ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                                : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
                    }
                    Object.defineProperty(self.config, "minDate", {
                        get: function () { return self.config._minDate; },
                        set: minMaxDateSetter("min"),
                    });
                    Object.defineProperty(self.config, "maxDate", {
                        get: function () { return self.config._maxDate; },
                        set: minMaxDateSetter("max"),
                    });
                    var minMaxTimeSetter = function (type) {
                        return function (val) {
                            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
                        };
                    };
                    Object.defineProperty(self.config, "minTime", {
                        get: function () { return self.config._minTime; },
                        set: minMaxTimeSetter("min"),
                    });
                    Object.defineProperty(self.config, "maxTime", {
                        get: function () { return self.config._maxTime; },
                        set: minMaxTimeSetter("max"),
                    });
                    if (userConfig.mode === "time") {
                        self.config.noCalendar = true;
                        self.config.enableTime = true;
                    }
                    Object.assign(self.config, formats, userConfig);
                    for (var i = 0; i < boolOpts.length; i++)
                        self.config[boolOpts[i]] =
                            self.config[boolOpts[i]] === true ||
                            self.config[boolOpts[i]] === "true";
                    _types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                        self.config[hook] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(self.config[hook] || []).map(bindToInstance);
                    });
                    self.isMobile =
                        !self.config.disableMobile &&
                        !self.config.inline &&
                        self.config.mode === "single" &&
                        !self.config.disable.length &&
                        !self.config.enable &&
                        !self.config.weekNumbers &&
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    for (var i = 0; i < self.config.plugins.length; i++) {
                        var pluginConf = self.config.plugins[i](self) || {};
                        for (var key in pluginConf) {
                            if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(key) > -1) {
                                self.config[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(pluginConf[key])
                                    .map(bindToInstance)
                                    .concat(self.config[key]);
                            }
                            else if (typeof userConfig[key] === "undefined")
                                self.config[key] = pluginConf[key];
                        }
                    }
                    if (!userConfig.altInputClass) {
                        self.config.altInputClass =
                            getInputElem().className + " " + self.config.altInputClass;
                    }
                    triggerEvent("onParseConfig");
                }
                function getInputElem() {
                    return self.config.wrap
                        ? element.querySelector("[data-input]")
                        : element;
                }
                function setupLocale() {
                    if (typeof self.config.locale !== "object" &&
                        typeof flatpickr.l10ns[self.config.locale] === "undefined")
                        self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
                    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
                        ? self.config.locale
                        : self.config.locale !== "default"
                            ? flatpickr.l10ns[self.config.locale]
                            : undefined));
                    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
                    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
                    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].M = "(" + self.l10n.months.shorthand.join("|") + ")";
                    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].F = "(" + self.l10n.months.longhand.join("|") + ")";
                    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
                    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
                    if (userConfig.time_24hr === undefined &&
                        flatpickr.defaultConfig.time_24hr === undefined) {
                        self.config.time_24hr = self.l10n.time_24hr;
                    }
                    self.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])(self);
                    self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({ config: self.config, l10n: self.l10n });
                }
                function positionCalendar(customPositionElement) {
                    if (typeof self.config.position === "function") {
                        return void self.config.position(self, customPositionElement);
                    }
                    if (self.calendarContainer === undefined)
                        return;
                    triggerEvent("onPreCalendarPosition");
                    var positionElement = customPositionElement || self._positionElement;
                    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                        (configPosVertical !== "below" &&
                            distanceFromBottom < calendarHeight &&
                            inputBounds.top > calendarHeight);
                    var top = window.pageYOffset +
                        inputBounds.top +
                        (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowTop", !showOnTop);
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowBottom", showOnTop);
                    if (self.config.inline)
                        return;
                    var left = window.pageXOffset + inputBounds.left;
                    var isCenter = false;
                    var isRight = false;
                    if (configPosHorizontal === "center") {
                        left -= (calendarWidth - inputBounds.width) / 2;
                        isCenter = true;
                    }
                    else if (configPosHorizontal === "right") {
                        left -= calendarWidth - inputBounds.width;
                        isRight = true;
                    }
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowCenter", isCenter);
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowRight", isRight);
                    var right = window.document.body.offsetWidth -
                        (window.pageXOffset + inputBounds.right);
                    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
                    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", rightMost);
                    if (self.config.static)
                        return;
                    self.calendarContainer.style.top = top + "px";
                    if (!rightMost) {
                        self.calendarContainer.style.left = left + "px";
                        self.calendarContainer.style.right = "auto";
                    }
                    else if (!centerMost) {
                        self.calendarContainer.style.left = "auto";
                        self.calendarContainer.style.right = right + "px";
                    }
                    else {
                        var doc = getDocumentStyleSheet();
                        if (doc === undefined)
                            return;
                        var bodyWidth = window.document.body.offsetWidth;
                        var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                        var centerBefore = ".flatpickr-calendar.centerMost:before";
                        var centerAfter = ".flatpickr-calendar.centerMost:after";
                        var centerIndex = doc.cssRules.length;
                        var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", false);
                        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "centerMost", true);
                        doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                        self.calendarContainer.style.left = centerLeft + "px";
                        self.calendarContainer.style.right = "auto";
                    }
                }
                function getDocumentStyleSheet() {
                    var editableSheet = null;
                    for (var i = 0; i < document.styleSheets.length; i++) {
                        var sheet = document.styleSheets[i];
                        if (!sheet.cssRules)
                            continue;
                        try {
                            sheet.cssRules;
                        }
                        catch (err) {
                            continue;
                        }
                        editableSheet = sheet;
                        break;
                    }
                    return editableSheet != null ? editableSheet : createStyleSheet();
                }
                function createStyleSheet() {
                    var style = document.createElement("style");
                    document.head.appendChild(style);
                    return style.sheet;
                }
                function redraw() {
                    if (self.config.noCalendar || self.isMobile)
                        return;
                    buildMonthSwitch();
                    updateNavigationCurrentMonth();
                    buildDays();
                }
                function focusAndClose() {
                    self._input.focus();
                    if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                        navigator.msMaxTouchPoints !== undefined) {
                        setTimeout(self.close, 0);
                    }
                    else {
                        self.close();
                    }
                }
                function selectDate(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var isSelectable = function (day) {
                        return day.classList &&
                            day.classList.contains("flatpickr-day") &&
                            !day.classList.contains("flatpickr-disabled") &&
                            !day.classList.contains("notAllowed");
                    };
                    var t = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["findParent"])(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e), isSelectable);
                    if (t === undefined)
                        return;
                    var target = t;
                    var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
                    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                        selectedDate.getMonth() >
                        self.currentMonth + self.config.showMonths - 1) &&
                        self.config.mode !== "range";
                    self.selectedDateElem = target;
                    if (self.config.mode === "single")
                        self.selectedDates = [selectedDate];
                    else if (self.config.mode === "multiple") {
                        var selectedIndex = isDateSelected(selectedDate);
                        if (selectedIndex)
                            self.selectedDates.splice(parseInt(selectedIndex), 1);
                        else
                            self.selectedDates.push(selectedDate);
                    }
                    else if (self.config.mode === "range") {
                        if (self.selectedDates.length === 2) {
                            self.clear(false, false);
                        }
                        self.latestSelectedDateObj = selectedDate;
                        self.selectedDates.push(selectedDate);
                        if (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, self.selectedDates[0], true) !== 0)
                            self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
                    }
                    setHoursFromInputs();
                    if (shouldChangeMonth) {
                        var isNewYear = self.currentYear !== selectedDate.getFullYear();
                        self.currentYear = selectedDate.getFullYear();
                        self.currentMonth = selectedDate.getMonth();
                        if (isNewYear) {
                            triggerEvent("onYearChange");
                            buildMonthSwitch();
                        }
                        triggerEvent("onMonthChange");
                    }
                    updateNavigationCurrentMonth();
                    buildDays();
                    updateValue();
                    if (!shouldChangeMonth &&
                        self.config.mode !== "range" &&
                        self.config.showMonths === 1)
                        focusOnDayElem(target);
                    else if (self.selectedDateElem !== undefined &&
                        self.hourElement === undefined) {
                        self.selectedDateElem && self.selectedDateElem.focus();
                    }
                    if (self.hourElement !== undefined)
                        self.hourElement !== undefined && self.hourElement.focus();
                    if (self.config.closeOnSelect) {
                        var single = self.config.mode === "single" && !self.config.enableTime;
                        var range = self.config.mode === "range" &&
                            self.selectedDates.length === 2 &&
                            !self.config.enableTime;
                        if (single || range) {
                            focusAndClose();
                        }
                    }
                    triggerChange();
                }
                var CALLBACKS = {
                    locale: [setupLocale, updateWeekdays],
                    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
                    minDate: [jumpToDate],
                    maxDate: [jumpToDate],
                    positionElement: [updatePositionElement],
                    clickOpens: [
                        function () {
                            if (self.config.clickOpens === true) {
                                bind(self._input, "focus", self.open);
                                bind(self._input, "click", self.open);
                            }
                            else {
                                self._input.removeEventListener("focus", self.open);
                                self._input.removeEventListener("click", self.open);
                            }
                        },
                    ],
                };
                function set(option, value) {
                    if (option !== null && typeof option === "object") {
                        Object.assign(self.config, option);
                        for (var key in option) {
                            if (CALLBACKS[key] !== undefined)
                                CALLBACKS[key].forEach(function (x) { return x(); });
                        }
                    }
                    else {
                        self.config[option] = value;
                        if (CALLBACKS[option] !== undefined)
                            CALLBACKS[option].forEach(function (x) { return x(); });
                        else if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(option) > -1)
                            self.config[option] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(value);
                    }
                    self.redraw();
                    updateValue(true);
                }
                function setSelectedDate(inputDate, format) {
                    var dates = [];
                    if (inputDate instanceof Array)
                        dates = inputDate.map(function (d) { return self.parseDate(d, format); });
                    else if (inputDate instanceof Date || typeof inputDate === "number")
                        dates = [self.parseDate(inputDate, format)];
                    else if (typeof inputDate === "string") {
                        switch (self.config.mode) {
                            case "single":
                            case "time":
                                dates = [self.parseDate(inputDate, format)];
                                break;
                            case "multiple":
                                dates = inputDate
                                    .split(self.config.conjunction)
                                    .map(function (date) { return self.parseDate(date, format); });
                                break;
                            case "range":
                                dates = inputDate
                                    .split(self.l10n.rangeSeparator)
                                    .map(function (date) { return self.parseDate(date, format); });
                                break;
                            default:
                                break;
                        }
                    }
                    else
                        self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
                    self.selectedDates = (self.config.allowInvalidPreload
                        ? dates
                        : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
                    if (self.config.mode === "range")
                        self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
                }
                function setDate(date, triggerChange, format) {
                    if (triggerChange === void 0) { triggerChange = false; }
                    if (format === void 0) { format = self.config.dateFormat; }
                    if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                        return self.clear(triggerChange);
                    setSelectedDate(date, format);
                    self.latestSelectedDateObj =
                        self.selectedDates[self.selectedDates.length - 1];
                    self.redraw();
                    jumpToDate(undefined, triggerChange);
                    setHoursFromDate();
                    if (self.selectedDates.length === 0) {
                        self.clear(false);
                    }
                    updateValue(triggerChange);
                    if (triggerChange)
                        triggerEvent("onChange");
                }
                function parseDateRules(arr) {
                    return arr
                        .slice()
                        .map(function (rule) {
                            if (typeof rule === "string" ||
                                typeof rule === "number" ||
                                rule instanceof Date) {
                                return self.parseDate(rule, undefined, true);
                            }
                            else if (rule &&
                                typeof rule === "object" &&
                                rule.from &&
                                rule.to)
                                return {
                                    from: self.parseDate(rule.from, undefined),
                                    to: self.parseDate(rule.to, undefined),
                                };
                            return rule;
                        })
                        .filter(function (x) { return x; });
                }
                function setupDates() {
                    self.selectedDates = [];
                    self.now = self.parseDate(self.config.now) || new Date();
                    var preloadedDate = self.config.defaultDate ||
                        ((self.input.nodeName === "INPUT" ||
                            self.input.nodeName === "TEXTAREA") &&
                            self.input.placeholder &&
                            self.input.value === self.input.placeholder
                            ? null
                            : self.input.value);
                    if (preloadedDate)
                        setSelectedDate(preloadedDate, self.config.dateFormat);
                    self._initialDate =
                        self.selectedDates.length > 0
                            ? self.selectedDates[0]
                            : self.config.minDate &&
                                self.config.minDate.getTime() > self.now.getTime()
                                ? self.config.minDate
                                : self.config.maxDate &&
                                    self.config.maxDate.getTime() < self.now.getTime()
                                    ? self.config.maxDate
                                    : self.now;
                    self.currentYear = self._initialDate.getFullYear();
                    self.currentMonth = self._initialDate.getMonth();
                    if (self.selectedDates.length > 0)
                        self.latestSelectedDateObj = self.selectedDates[0];
                    if (self.config.minTime !== undefined)
                        self.config.minTime = self.parseDate(self.config.minTime, "H:i");
                    if (self.config.maxTime !== undefined)
                        self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
                    self.minDateHasTime =
                        !!self.config.minDate &&
                        (self.config.minDate.getHours() > 0 ||
                            self.config.minDate.getMinutes() > 0 ||
                            self.config.minDate.getSeconds() > 0);
                    self.maxDateHasTime =
                        !!self.config.maxDate &&
                        (self.config.maxDate.getHours() > 0 ||
                            self.config.maxDate.getMinutes() > 0 ||
                            self.config.maxDate.getSeconds() > 0);
                }
                function setupInputs() {
                    self.input = getInputElem();
                    if (!self.input) {
                        self.config.errorHandler(new Error("Invalid input element specified"));
                        return;
                    }
                    self.input._type = self.input.type;
                    self.input.type = "text";
                    self.input.classList.add("flatpickr-input");
                    self._input = self.input;
                    if (self.config.altInput) {
                        self.altInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])(self.input.nodeName, self.config.altInputClass);
                        self._input = self.altInput;
                        self.altInput.placeholder = self.input.placeholder;
                        self.altInput.disabled = self.input.disabled;
                        self.altInput.required = self.input.required;
                        self.altInput.tabIndex = self.input.tabIndex;
                        self.altInput.type = "text";
                        self.input.setAttribute("type", "hidden");
                        if (!self.config.static && self.input.parentNode)
                            self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
                    }
                    if (!self.config.allowInput)
                        self._input.setAttribute("readonly", "readonly");
                    updatePositionElement();
                }
                function updatePositionElement() {
                    self._positionElement = self.config.positionElement || self._input;
                }
                function setupMobile() {
                    var inputType = self.config.enableTime
                        ? self.config.noCalendar
                            ? "time"
                            : "datetime-local"
                        : "date";
                    self.mobileInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", self.input.className + " flatpickr-mobile");
                    self.mobileInput.tabIndex = 1;
                    self.mobileInput.type = inputType;
                    self.mobileInput.disabled = self.input.disabled;
                    self.mobileInput.required = self.input.required;
                    self.mobileInput.placeholder = self.input.placeholder;
                    self.mobileFormatStr =
                        inputType === "datetime-local"
                            ? "Y-m-d\\TH:i:S"
                            : inputType === "date"
                                ? "Y-m-d"
                                : "H:i:S";
                    if (self.selectedDates.length > 0) {
                        self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
                    }
                    if (self.config.minDate)
                        self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
                    if (self.config.maxDate)
                        self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
                    if (self.input.getAttribute("step"))
                        self.mobileInput.step = String(self.input.getAttribute("step"));
                    self.input.type = "hidden";
                    if (self.altInput !== undefined)
                        self.altInput.type = "hidden";
                    try {
                        if (self.input.parentNode)
                            self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
                    }
                    catch (_a) { }
                    bind(self.mobileInput, "change", function (e) {
                        self.setDate(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).value, false, self.mobileFormatStr);
                        triggerEvent("onChange");
                        triggerEvent("onClose");
                    });
                }
                function toggle(e) {
                    if (self.isOpen === true)
                        return self.close();
                    self.open(e);
                }
                function triggerEvent(event, data) {
                    if (self.config === undefined)
                        return;
                    var hooks = self.config[event];
                    if (hooks !== undefined && hooks.length > 0) {
                        for (var i = 0; hooks[i] && i < hooks.length; i++)
                            hooks[i](self.selectedDates, self.input.value, self, data);
                    }
                    if (event === "onChange") {
                        self.input.dispatchEvent(createEvent("change"));
                        self.input.dispatchEvent(createEvent("input"));
                    }
                }
                function createEvent(name) {
                    var e = document.createEvent("Event");
                    e.initEvent(name, true, true);
                    return e;
                }
                function isDateSelected(date) {
                    for (var i = 0; i < self.selectedDates.length; i++) {
                        var selectedDate = self.selectedDates[i];
                        if (selectedDate instanceof Date &&
                            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, date) === 0)
                            return "" + i;
                    }
                    return false;
                }
                function isDateInRange(date) {
                    if (self.config.mode !== "range" || self.selectedDates.length < 2)
                        return false;
                    return (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0]) >= 0 &&
                        Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1]) <= 0);
                }
                function updateNavigationCurrentMonth() {
                    if (self.config.noCalendar || self.isMobile || !self.monthNav)
                        return;
                    self.yearElements.forEach(function (yearElement, i) {
                        var d = new Date(self.currentYear, self.currentMonth, 1);
                        d.setMonth(self.currentMonth + i);
                        if (self.config.showMonths > 1 ||
                            self.config.monthSelectorType === "static") {
                            self.monthElements[i].textContent =
                                Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                        }
                        else {
                            self.monthsDropdownContainer.value = d.getMonth().toString();
                        }
                        yearElement.value = d.getFullYear().toString();
                    });
                    self._hidePrevMonthArrow =
                        self.config.minDate !== undefined &&
                        (self.currentYear === self.config.minDate.getFullYear()
                            ? self.currentMonth <= self.config.minDate.getMonth()
                            : self.currentYear < self.config.minDate.getFullYear());
                    self._hideNextMonthArrow =
                        self.config.maxDate !== undefined &&
                        (self.currentYear === self.config.maxDate.getFullYear()
                            ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                            : self.currentYear > self.config.maxDate.getFullYear());
                }
                function getDateStr(specificFormat) {
                    var format = specificFormat ||
                        (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
                    return self.selectedDates
                        .map(function (dObj) { return self.formatDate(dObj, format); })
                        .filter(function (d, i, arr) {
                            return self.config.mode !== "range" ||
                                self.config.enableTime ||
                                arr.indexOf(d) === i;
                        })
                        .join(self.config.mode !== "range"
                            ? self.config.conjunction
                            : self.l10n.rangeSeparator);
                }
                function updateValue(triggerChange) {
                    if (triggerChange === void 0) { triggerChange = true; }
                    if (self.mobileInput !== undefined && self.mobileFormatStr) {
                        self.mobileInput.value =
                            self.latestSelectedDateObj !== undefined
                                ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                                : "";
                    }
                    self.input.value = getDateStr(self.config.dateFormat);
                    if (self.altInput !== undefined) {
                        self.altInput.value = getDateStr(self.config.altFormat);
                    }
                    if (triggerChange !== false)
                        triggerEvent("onValueUpdate");
                }
                function onMonthNavClick(e) {
                    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
                    var isNextMonth = self.nextMonthNav.contains(eventTarget);
                    if (isPrevMonth || isNextMonth) {
                        changeMonth(isPrevMonth ? -1 : 1);
                    }
                    else if (self.yearElements.indexOf(eventTarget) >= 0) {
                        eventTarget.select();
                    }
                    else if (eventTarget.classList.contains("arrowUp")) {
                        self.changeYear(self.currentYear + 1);
                    }
                    else if (eventTarget.classList.contains("arrowDown")) {
                        self.changeYear(self.currentYear - 1);
                    }
                }
                function timeWrapper(e) {
                    e.preventDefault();
                    var isKeyDown = e.type === "keydown", eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e), input = eventTarget;
                    if (self.amPM !== undefined && eventTarget === self.amPM) {
                        self.amPM.textContent =
                            self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
                    }
                    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                        (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
                    var newValue = curValue + step * delta;
                    if (typeof input.value !== "undefined" && input.value.length === 2) {
                        var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                        if (newValue < min) {
                            newValue =
                                max +
                                newValue +
                                Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!isHourElem) +
                                (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(isHourElem) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM));
                            if (isMinuteElem)
                                incrementNumInput(undefined, -1, self.hourElement);
                        }
                        else if (newValue > max) {
                            newValue =
                                input === self.hourElement ? newValue - max - Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM) : min;
                            if (isMinuteElem)
                                incrementNumInput(undefined, 1, self.hourElement);
                        }
                        if (self.amPM &&
                            isHourElem &&
                            (step === 1
                                ? newValue + curValue === 23
                                : Math.abs(newValue - curValue) > step)) {
                            self.amPM.textContent =
                                self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
                        }
                        input.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(newValue);
                    }
                }
                init();
                return self;
            }
            function _flatpickr(nodeList, config) {
                var nodes = Array.prototype.slice
                    .call(nodeList)
                    .filter(function (x) { return x instanceof HTMLElement; });
                var instances = [];
                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes[i];
                    try {
                        if (node.getAttribute("data-fp-omit") !== null)
                            continue;
                        if (node._flatpickr !== undefined) {
                            node._flatpickr.destroy();
                            node._flatpickr = undefined;
                        }
                        node._flatpickr = FlatpickrInstance(node, config || {});
                        instances.push(node._flatpickr);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                return instances.length === 1 ? instances[0] : instances;
            }
            if (typeof HTMLElement !== "undefined" &&
                typeof HTMLCollection !== "undefined" &&
                typeof NodeList !== "undefined") {
                HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
                    return _flatpickr(this, config);
                };
                HTMLElement.prototype.flatpickr = function (config) {
                    return _flatpickr([this], config);
                };
            }
            var flatpickr = function (selector, config) {
                if (typeof selector === "string") {
                    return _flatpickr(window.document.querySelectorAll(selector), config);
                }
                else if (selector instanceof Node) {
                    return _flatpickr([selector], config);
                }
                else {
                    return _flatpickr(selector, config);
                }
            };
            flatpickr.defaultConfig = {};
            flatpickr.l10ns = {
                en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
                default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
            };
            flatpickr.localize = function (l10n) {
                flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
            };
            flatpickr.setDefaults = function (config) {
                flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
            };
            flatpickr.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({});
            flatpickr.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])({});
            flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"];
            if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
                jQuery.fn.flatpickr = function (config) {
                    return _flatpickr(this, config);
                };
            }
            Date.prototype.fp_incr = function (days) {
                return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
            };
            if (typeof window !== "undefined") {
                window.flatpickr = flatpickr;
            }
/* harmony default export */ __webpack_exports__["default"] = (flatpickr);


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/*! exports provided: english, default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "english", function () { return english; });
            var english = {
                weekdays: {
                    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    longhand: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                    ],
                },
                months: {
                    shorthand: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    longhand: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ],
                },
                daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                firstDayOfWeek: 0,
                ordinal: function (nth) {
                    var s = nth % 100;
                    if (s > 3 && s < 21)
                        return "th";
                    switch (s % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                },
                rangeSeparator: " to ",
                weekAbbreviation: "Wk",
                scrollTitle: "Scroll to increment",
                toggleTitle: "Click to toggle",
                amPM: ["AM", "PM"],
                yearAriaLabel: "Year",
                monthAriaLabel: "Month",
                hourAriaLabel: "Hour",
                minuteAriaLabel: "Minute",
                time_24hr: false,
            };
/* harmony default export */ __webpack_exports__["default"] = (english);


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/zh.js":
/*!****************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/zh.js ***!
  \****************************************************/
/*! exports provided: Mandarin, default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mandarin", function () { return Mandarin; });
            var fp = typeof window !== "undefined" && window.flatpickr !== undefined
                ? window.flatpickr
                : {
                    l10ns: {},
                };
            var Mandarin = {
                weekdays: {
                    shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                    longhand: [
                        "星期日",
                        "星期一",
                        "星期二",
                        "星期三",
                        "星期四",
                        "星期五",
                        "星期六",
                    ],
                },
                months: {
                    shorthand: [
                        "一月",
                        "二月",
                        "三月",
                        "四月",
                        "五月",
                        "六月",
                        "七月",
                        "八月",
                        "九月",
                        "十月",
                        "十一月",
                        "十二月",
                    ],
                    longhand: [
                        "一月",
                        "二月",
                        "三月",
                        "四月",
                        "五月",
                        "六月",
                        "七月",
                        "八月",
                        "九月",
                        "十月",
                        "十一月",
                        "十二月",
                    ],
                },
                rangeSeparator: " 至 ",
                weekAbbreviation: "周",
                scrollTitle: "滚动切换",
                toggleTitle: "点击切换 12/24 小时时制",
            };
            fp.l10ns.zh = Mandarin;
/* harmony default export */ __webpack_exports__["default"] = (fp.l10ns);


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/types/options.js":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/*! exports provided: HOOKS, defaults */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOKS", function () { return HOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function () { return defaults; });
            var HOOKS = [
                "onChange",
                "onClose",
                "onDayCreate",
                "onDestroy",
                "onKeyDown",
                "onMonthChange",
                "onOpen",
                "onParseConfig",
                "onReady",
                "onValueUpdate",
                "onYearChange",
                "onPreCalendarPosition",
            ];
            var defaults = {
                _disable: [],
                allowInput: false,
                allowInvalidPreload: false,
                altFormat: "F j, Y",
                altInput: false,
                altInputClass: "form-control input",
                animate: typeof window === "object" &&
                    window.navigator.userAgent.indexOf("MSIE") === -1,
                ariaDateFormat: "F j, Y",
                autoFillDefaultTime: true,
                clickOpens: true,
                closeOnSelect: true,
                conjunction: ", ",
                dateFormat: "Y-m-d",
                defaultHour: 12,
                defaultMinute: 0,
                defaultSeconds: 0,
                disable: [],
                disableMobile: false,
                enableSeconds: false,
                enableTime: false,
                errorHandler: function (err) {
                    return typeof console !== "undefined" && console.warn(err);
                },
                getWeek: function (givenDate) {
                    var date = new Date(givenDate.getTime());
                    date.setHours(0, 0, 0, 0);
                    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
                    var week1 = new Date(date.getFullYear(), 0, 4);
                    return (1 +
                        Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                            3 +
                            ((week1.getDay() + 6) % 7)) /
                            7));
                },
                hourIncrement: 1,
                ignoredFocusElements: [],
                inline: false,
                locale: "default",
                minuteIncrement: 5,
                mode: "single",
                monthSelectorType: "dropdown",
                nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
                noCalendar: false,
                now: new Date(),
                onChange: [],
                onClose: [],
                onDayCreate: [],
                onDestroy: [],
                onKeyDown: [],
                onMonthChange: [],
                onOpen: [],
                onParseConfig: [],
                onReady: [],
                onValueUpdate: [],
                onYearChange: [],
                onPreCalendarPosition: [],
                plugins: [],
                position: "auto",
                positionElement: undefined,
                prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
                shorthandCurrentMonth: false,
                showMonths: 1,
                static: false,
                time_24hr: false,
                weekNumbers: false,
                wrap: false,
            };


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dates.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/*! exports provided: createDateFormatter, createDateParser, compareDates, compareTimes, isBetween, calculateSecondsSinceMidnight, parseSeconds, duration, getDefaultHours */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateFormatter", function () { return createDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateParser", function () { return createDateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDates", function () { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTimes", function () { return compareTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function () { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateSecondsSinceMidnight", function () { return calculateSecondsSinceMidnight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSeconds", function () { return parseSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function () { return duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultHours", function () { return getDefaultHours; });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");



            var createDateFormatter = function (_a) {
                var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
                return function (dateObj, frmt, overrideLocale) {
                    var locale = overrideLocale || l10n;
                    if (config.formatDate !== undefined && !isMobile) {
                        return config.formatDate(dateObj, frmt, locale);
                    }
                    return frmt
                        .split("")
                        .map(function (c, i, arr) {
                            return _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c] && arr[i - 1] !== "\\"
                                ? _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c](dateObj, locale, config)
                                : c !== "\\"
                                    ? c
                                    : "";
                        })
                        .join("");
                };
            };
            var createDateParser = function (_a) {
                var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _c;
                return function (date, givenFormat, timeless, customLocale) {
                    if (date !== 0 && !date)
                        return undefined;
                    var locale = customLocale || l10n;
                    var parsedDate;
                    var dateOrig = date;
                    if (date instanceof Date)
                        parsedDate = new Date(date.getTime());
                    else if (typeof date !== "string" &&
                        date.toFixed !== undefined)
                        parsedDate = new Date(date);
                    else if (typeof date === "string") {
                        var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"]).dateFormat;
                        var datestr = String(date).trim();
                        if (datestr === "today") {
                            parsedDate = new Date();
                            timeless = true;
                        }
                        else if (config && config.parseDate) {
                            parsedDate = config.parseDate(date, format);
                        }
                        else if (/Z$/.test(datestr) ||
                            /GMT$/.test(datestr)) {
                            parsedDate = new Date(date);
                        }
                        else {
                            var matched = void 0, ops = [];
                            for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                                var token = format[i];
                                var isBackSlash = token === "\\";
                                var escaped = format[i - 1] === "\\" || isBackSlash;
                                if (_formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token] && !escaped) {
                                    regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token];
                                    var match = new RegExp(regexStr).exec(date);
                                    if (match && (matched = true)) {
                                        ops[token !== "Y" ? "push" : "unshift"]({
                                            fn: _formatting__WEBPACK_IMPORTED_MODULE_0__["revFormat"][token],
                                            val: match[++matchIndex],
                                        });
                                    }
                                }
                                else if (!isBackSlash)
                                    regexStr += ".";
                            }
                            parsedDate =
                                !config || !config.noCalendar
                                    ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                                    : new Date(new Date().setHours(0, 0, 0, 0));
                            ops.forEach(function (_a) {
                                var fn = _a.fn, val = _a.val;
                                return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                            });
                            parsedDate = matched ? parsedDate : undefined;
                        }
                    }
                    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                        config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                        return undefined;
                    }
                    if (timeless === true)
                        parsedDate.setHours(0, 0, 0, 0);
                    return parsedDate;
                };
            };
            function compareDates(date1, date2, timeless) {
                if (timeless === void 0) { timeless = true; }
                if (timeless !== false) {
                    return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                        new Date(date2.getTime()).setHours(0, 0, 0, 0));
                }
                return date1.getTime() - date2.getTime();
            }
            function compareTimes(date1, date2) {
                return (3600 * (date1.getHours() - date2.getHours()) +
                    60 * (date1.getMinutes() - date2.getMinutes()) +
                    date1.getSeconds() -
                    date2.getSeconds());
            }
            var isBetween = function (ts, ts1, ts2) {
                return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
            };
            var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
                return hours * 3600 + minutes * 60 + seconds;
            };
            var parseSeconds = function (secondsSinceMidnight) {
                var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
                return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
            };
            var duration = {
                DAY: 86400000,
            };
            function getDefaultHours(config) {
                var hours = config.defaultHour;
                var minutes = config.defaultMinute;
                var seconds = config.defaultSeconds;
                if (config.minDate !== undefined) {
                    var minHour = config.minDate.getHours();
                    var minMinutes = config.minDate.getMinutes();
                    var minSeconds = config.minDate.getSeconds();
                    if (hours < minHour) {
                        hours = minHour;
                    }
                    if (hours === minHour && minutes < minMinutes) {
                        minutes = minMinutes;
                    }
                    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
                        seconds = config.minDate.getSeconds();
                }
                if (config.maxDate !== undefined) {
                    var maxHr = config.maxDate.getHours();
                    var maxMinutes = config.maxDate.getMinutes();
                    hours = Math.min(hours, maxHr);
                    if (hours === maxHr)
                        minutes = Math.min(maxMinutes, minutes);
                    if (hours === maxHr && minutes === maxMinutes)
                        seconds = config.maxDate.getSeconds();
                }
                return { hours: hours, minutes: minutes, seconds: seconds };
            }


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/*! exports provided: toggleClass, createElement, clearNode, findParent, createNumberInput, getEventTarget */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function () { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function () { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNode", function () { return clearNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function () { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumberInput", function () { return createNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTarget", function () { return getEventTarget; });
            function toggleClass(elem, className, bool) {
                if (bool === true)
                    return elem.classList.add(className);
                elem.classList.remove(className);
            }
            function createElement(tag, className, content) {
                var e = window.document.createElement(tag);
                className = className || "";
                content = content || "";
                e.className = className;
                if (content !== undefined)
                    e.textContent = content;
                return e;
            }
            function clearNode(node) {
                while (node.firstChild)
                    node.removeChild(node.firstChild);
            }
            function findParent(node, condition) {
                if (condition(node))
                    return node;
                else if (node.parentNode)
                    return findParent(node.parentNode, condition);
                return undefined;
            }
            function createNumberInput(inputClassName, opts) {
                var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
                if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
                    numInput.type = "number";
                }
                else {
                    numInput.type = "text";
                    numInput.pattern = "\\d*";
                }
                if (opts !== undefined)
                    for (var key in opts)
                        numInput.setAttribute(key, opts[key]);
                wrapper.appendChild(numInput);
                wrapper.appendChild(arrowUp);
                wrapper.appendChild(arrowDown);
                return wrapper;
            }
            function getEventTarget(event) {
                try {
                    if (typeof event.composedPath === "function") {
                        var path = event.composedPath();
                        return path[0];
                    }
                    return event.target;
                }
                catch (error) {
                    return event.target;
                }
            }


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/utils/formatting.js":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/*! exports provided: monthToStr, revFormat, tokenRegex, formats */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthToStr", function () { return monthToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revFormat", function () { return revFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenRegex", function () { return tokenRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formats", function () { return formats; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");

            var doNothing = function () { return undefined; };
            var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
            var revFormat = {
                D: doNothing,
                F: function (dateObj, monthName, locale) {
                    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
                },
                G: function (dateObj, hour) {
                    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
                },
                H: function (dateObj, hour) {
                    dateObj.setHours(parseFloat(hour));
                },
                J: function (dateObj, day) {
                    dateObj.setDate(parseFloat(day));
                },
                K: function (dateObj, amPM, locale) {
                    dateObj.setHours((dateObj.getHours() % 12) +
                        12 * Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(new RegExp(locale.amPM[1], "i").test(amPM)));
                },
                M: function (dateObj, shortMonth, locale) {
                    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
                },
                S: function (dateObj, seconds) {
                    dateObj.setSeconds(parseFloat(seconds));
                },
                U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
                W: function (dateObj, weekNum, locale) {
                    var weekNumber = parseInt(weekNum);
                    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
                    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
                    return date;
                },
                Y: function (dateObj, year) {
                    dateObj.setFullYear(parseFloat(year));
                },
                Z: function (_, ISODate) { return new Date(ISODate); },
                d: function (dateObj, day) {
                    dateObj.setDate(parseFloat(day));
                },
                h: function (dateObj, hour) {
                    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
                },
                i: function (dateObj, minutes) {
                    dateObj.setMinutes(parseFloat(minutes));
                },
                j: function (dateObj, day) {
                    dateObj.setDate(parseFloat(day));
                },
                l: doNothing,
                m: function (dateObj, month) {
                    dateObj.setMonth(parseFloat(month) - 1);
                },
                n: function (dateObj, month) {
                    dateObj.setMonth(parseFloat(month) - 1);
                },
                s: function (dateObj, seconds) {
                    dateObj.setSeconds(parseFloat(seconds));
                },
                u: function (_, unixMillSeconds) {
                    return new Date(parseFloat(unixMillSeconds));
                },
                w: doNothing,
                y: function (dateObj, year) {
                    dateObj.setFullYear(2000 + parseFloat(year));
                },
            };
            var tokenRegex = {
                D: "",
                F: "",
                G: "(\\d\\d|\\d)",
                H: "(\\d\\d|\\d)",
                J: "(\\d\\d|\\d)\\w+",
                K: "",
                M: "",
                S: "(\\d\\d|\\d)",
                U: "(.+)",
                W: "(\\d\\d|\\d)",
                Y: "(\\d{4})",
                Z: "(.+)",
                d: "(\\d\\d|\\d)",
                h: "(\\d\\d|\\d)",
                i: "(\\d\\d|\\d)",
                j: "(\\d\\d|\\d)",
                l: "",
                m: "(\\d\\d|\\d)",
                n: "(\\d\\d|\\d)",
                s: "(\\d\\d|\\d)",
                u: "(.+)",
                w: "(\\d\\d|\\d)",
                y: "(\\d{2})",
            };
            var formats = {
                Z: function (date) { return date.toISOString(); },
                D: function (date, locale, options) {
                    return locale.weekdays.shorthand[formats.w(date, locale, options)];
                },
                F: function (date, locale, options) {
                    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
                },
                G: function (date, locale, options) {
                    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(formats.h(date, locale, options));
                },
                H: function (date) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getHours()); },
                J: function (date, locale) {
                    return locale.ordinal !== undefined
                        ? date.getDate() + locale.ordinal(date.getDate())
                        : date.getDate();
                },
                K: function (date, locale) { return locale.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(date.getHours() > 11)]; },
                M: function (date, locale) {
                    return monthToStr(date.getMonth(), true, locale);
                },
                S: function (date) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getSeconds()); },
                U: function (date) { return date.getTime() / 1000; },
                W: function (date, _, options) {
                    return options.getWeek(date);
                },
                Y: function (date) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getFullYear(), 4); },
                d: function (date) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getDate()); },
                h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
                i: function (date) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMinutes()); },
                j: function (date) { return date.getDate(); },
                l: function (date, locale) {
                    return locale.weekdays.longhand[date.getDay()];
                },
                m: function (date) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMonth() + 1); },
                n: function (date) { return date.getMonth() + 1; },
                s: function (date) { return date.getSeconds(); },
                u: function (date) { return date.getTime(); },
                w: function (date) { return date.getDay(); },
                y: function (date) { return String(date.getFullYear()).substring(2); },
            };


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/*! exports provided: pad, int, debounce, arrayify */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function () { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function () { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function () { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayify", function () { return arrayify; });
            var pad = function (number, length) {
                if (length === void 0) { length = 2; }
                return ("000" + number).slice(length * -1);
            };
            var int = function (bool) { return (bool === true ? 1 : 0); };
            function debounce(fn, wait) {
                var t;
                return function () {
                    var _this = this;
                    var args = arguments;
                    clearTimeout(t);
                    t = setTimeout(function () { return fn.apply(_this, args); }, wait);
                };
            }
            var arrayify = function (obj) {
                return obj instanceof Array ? obj : [obj];
            };


            /***/
        }),

/***/ "./node_modules/flatpickr/dist/esm/utils/polyfills.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            if (typeof Object.assign !== "function") {
                Object.assign = function (target) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (!target) {
                        throw TypeError("Cannot convert undefined or null to object");
                    }
                    var _loop_1 = function (source) {
                        if (source) {
                            Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                        }
                    };
                    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                        var source = args_1[_a];
                        _loop_1(source);
                    }
                    return target;
                };
            }


            /***/
        }),

/***/ "./node_modules/omi/dist/omi.esm.js":
/*!******************************************!*\
  !*** ./node_modules/omi/dist/omi.esm.js ***!
  \******************************************/
/*! exports provided: default, tag, WeElement, Component, render, h, createElement, options, define, cloneElement, getHost, rpx, defineElement, classNames, extractClass, createRef, o, elements, $, extend, get, set, bind, unbind */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function () { return tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeElement", function () { return WeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function () { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function () { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function () { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function () { return define; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function () { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHost", function () { return getHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpx", function () { return rpx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineElement", function () { return defineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function () { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractClass", function () { return extractClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function () { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function () { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function () { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function () { return extend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function () { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function () { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function () { return unbind; });
                /**
                 * Omi v6.23.2  http://omijs.org
                 * Front End Cross-Frameworks Framework.
                 * By dntzhang https://github.com/dntzhang
                 * Github: https://github.com/Tencent/omi
                 * MIT Licensed.
                 */

                function getGlobal() {
                    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
                        return self || window || global || function () {
                            return this;
                        }();
                    }
                    return global;
                }

                /** Global options
                 *  @public
                 *  @namespace options {Object}
                 */
                var options = {
                    store: null,
                    root: getGlobal(),
                    mapping: {}
                };

                /**
                 * @license
                 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                 */
                (function () {
                    if (
                        // No Reflect, no classes, no need for shim because native custom elements
                        // require ES2015 classes or Reflect.
                        window.Reflect === undefined || window.customElements === undefined ||
                        // The webcomponentsjs custom elements polyfill doesn't require
                        // ES2015-compatible construction (`super()` or `Reflect.construct`).
                        window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
                        return;
                    }
                    var BuiltInHTMLElement = HTMLElement;
                    window.HTMLElement = function HTMLElement() {
                        return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
                    };
                    HTMLElement.prototype = BuiltInHTMLElement.prototype;
                    HTMLElement.prototype.constructor = HTMLElement;
                    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
                })();

                function cssToDom(css) {
                    var node = document.createElement('style');
                    node.textContent = css;
                    return node;
                }

                function camelCase(str) {
                    return str.replace(/-(\w)/g, function ($, $1) {
                        return $1.toUpperCase();
                    });
                }

                function Fragment(props) {
                    return props.children;
                }

                function extend(obj, props) {
                    for (var i in props) {
                        obj[i] = props[i];
                    } return obj;
                }

                /** Invoke or update a ref, depending on whether it is a function or object ref.
                 *  @param {object|function} [ref=null]
                 *  @param {any} [value]
                 */
                function applyRef(ref, value) {
                    if (ref != null) {
                        if (typeof ref == 'function') ref(value); else ref.current = value;
                    }
                }

                /**
                 * Call a function asynchronously, as soon as possible. Makes
                 * use of HTML Promise to schedule the callback if available,
                 * otherwise falling back to `setTimeout` (mainly for IE<11).
                 * @type {(callback: function) => void}
                 */
                var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

                function isArray(obj) {
                    return Object.prototype.toString.call(obj) === '[object Array]';
                }

                function pathToArr(path) {
                    if (typeof path !== 'string' || !path) return [];
                    // return path.split(/\.|\[|\]/).filter(name => !!name)
                    return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
                }

                var hyphenateRE = /\B([A-Z])/g;
                function hyphenate(str) {
                    return str.replace(hyphenateRE, '-$1').toLowerCase();
                }

                function capitalize(name) {
                    return name.replace(/\-(\w)/g, function (all, letter) {
                        return letter.toUpperCase();
                    }).replace(/^\S/, function (s) {
                        return s.toUpperCase();
                    });
                }

                function getValByPath(path, current) {
                    var arr = pathToArr(path);
                    arr.forEach(function (prop) {
                        current = current[prop];
                    });
                    return current;
                }

                var stack = [];

                function h(nodeName, attributes) {
                    var children = [],
                        lastSimple,
                        child,
                        simple,
                        i;
                    for (i = arguments.length; i-- > 2;) {
                        stack.push(arguments[i]);
                    }
                    if (attributes && attributes.children != null) {
                        if (!stack.length) stack.push(attributes.children);
                        delete attributes.children;
                    }
                    while (stack.length) {
                        if ((child = stack.pop()) && child.pop !== undefined) {
                            for (i = child.length; i--;) {
                                stack.push(child[i]);
                            }
                        } else {
                            if (typeof child === 'boolean') child = null;

                            if (simple = typeof nodeName !== 'function') {
                                if (child == null) child = ''; else if (typeof child === 'number') child = String(child); else if (typeof child !== 'string') simple = false;
                            }

                            if (simple && lastSimple) {
                                children[children.length - 1] += child;
                            } else if (children.length === 0) {
                                children = [child];
                            } else {
                                children.push(child);
                            }

                            lastSimple = simple;
                        }
                    }

                    if (nodeName === Fragment) {
                        return children;
                    }

                    var p = {
                        nodeName: nodeName,
                        children: children,
                        attributes: attributes == null ? undefined : attributes,
                        key: attributes == null ? undefined : attributes.key

                        // if a "vnode hook" is defined, pass every created VNode to it
                    }; if (options.vnode !== undefined) options.vnode(p);

                    return p;
                }

                // DOM properties that should NOT have "px" added when numeric
                var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

                /**
                 * Check if two nodes are equivalent.
                 *
                 * @param {Node} node      DOM Node to compare
                 * @param {VNode} vnode      Virtual DOM node to compare
                 * @param {boolean} [hydrating=false]  If true, ignores component constructors when comparing.
                 * @private
                 */
                function isSameNodeType(node, vnode, hydrating) {
                    if (typeof vnode === 'string' || typeof vnode === 'number') {
                        return node.splitText !== undefined;
                    }
                    if (typeof vnode.nodeName === 'string') {
                        return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
                    } else if (typeof vnode.nodeName === 'function') {
                        return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
                    }
                    return hydrating || node._componentConstructor === vnode.nodeName;
                }

                /**
                 * Check if an Element has a given nodeName, case-insensitively.
                 *
                 * @param {Element} node  A DOM Element to inspect the name of.
                 * @param {String} nodeName  Unnormalized name to compare against.
                 */
                function isNamedNode(node, nodeName) {
                    return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
                }

                var extension = {};

                function extend$1(name, handler) {
                    extension['o-' + name] = handler;
                }

                function set(origin, path, value) {
                    var arr = pathToArr(path);
                    var current = origin;
                    for (var i = 0, len = arr.length; i < len; i++) {
                        if (i === len - 1) {
                            current[arr[i]] = value;
                        } else {
                            current = current[arr[i]];
                        }
                    }
                }

                function get(origin, path) {
                    var arr = pathToArr(path);
                    var current = origin;
                    for (var i = 0, len = arr.length; i < len; i++) {
                        current = current[arr[i]];
                    }

                    return current;
                }

                function eventProxy(e) {
                    return this._listeners[e.type](e);
                }

                function bind(el, type, handler) {
                    el._listeners = el._listeners || {};
                    el._listeners[type] = handler;
                    el.addEventListener(type, eventProxy);
                }

                function unbind(el, type) {
                    el.removeEventListener(type, eventProxy);
                }

                /**
                 * Create an element with the given nodeName.
                 * @param {string} nodeName The DOM node to create
                 * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
                 *  namespace.
                 * @returns {Element} The created DOM node
                 */
                function createNode(nodeName, isSvg) {
                    /** @type {Element} */
                    var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
                    node.normalizedNodeName = nodeName;
                    return node;
                }

                /**
                 * Remove a child node from its parent if attached.
                 * @param {Node} node The node to remove
                 */
                function removeNode(node) {
                    var parentNode = node.parentNode;
                    if (parentNode) parentNode.removeChild(node);
                }

                /**
                 * Set a named attribute on the given Node, with special behavior for some names
                 * and event handlers. If `value` is `null`, the attribute/handler will be
                 * removed.
                 * @param {Element} node An element to mutate
                 * @param {string} name The name/key to set, such as an event or attribute name
                 * @param {*} old The last value that was set for this name/node pair
                 * @param {*} value An attribute value, such as a function to be used as an
                 *  event handler
                 * @param {boolean} isSvg Are we currently diffing inside an svg?
                 * @private
                 */
                function setAccessor(node, name, old, value, isSvg, component) {
                    if (name === 'className') name = 'class';

                    if (name[0] == 'o' && name[1] == '-') {
                        if (extension[name]) {
                            extension[name](node, value, component);
                        }
                    } else if (name === 'key') {
                        // ignore
                    } else if (name === 'ref') {
                        applyRef(old, null);
                        applyRef(value, node);
                    } else if (name === 'class' && !isSvg) {
                        node.className = value || '';
                    } else if (name === 'style') {
                        if (!value || typeof value === 'string' || typeof old === 'string') {
                            node.style.cssText = value || '';
                        }
                        if (value && typeof value === 'object') {
                            if (typeof old !== 'string') {
                                for (var i in old) {
                                    if (!(i in value)) node.style[i] = '';
                                }
                            }
                            for (var i in value) {
                                node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
                            }
                        }
                    } else if (name === 'dangerouslySetInnerHTML') {
                        if (value) node.innerHTML = value.__html || '';
                    } else if (name[0] == 'o' && name[1] == 'n') {
                        bindEvent(node, name, value, old);
                    } else if (node.nodeName === 'INPUT' && name === 'value') {
                        node[name] = value == null ? '' : value;
                    } else if (name !== 'list' && name !== 'type' && name !== 'css' && !isSvg && name in node && value !== '') {
                        //value !== '' fix for selected, disabled, checked with pure element
                        // Attempt to set a DOM property to the given value.
                        // IE & FF throw for certain property-value combinations.
                        try {
                            node[name] = value == null ? '' : value;
                        } catch (e) { }
                        if ((value == null || value === false) && name != 'spellcheck') node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
                    } else {
                        var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
                        // spellcheck is treated differently than all other boolean values and
                        // should not be removed when the value is `false`. See:
                        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
                        if (value == null || value === false) {
                            if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
                        } else if (typeof value !== 'function') {
                            if (ns) {
                                node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
                            } else {
                                node.pureSetAttribute ? node.pureSetAttribute(name, value) : node.setAttribute(name, value);
                            }
                        }
                    }
                }

                /**
                 * Proxy an event to hooked event handlers
                 * @param {Event} e The event object from the browser
                 * @private
                 */
                function eventProxy$1(e) {
                    return this._listeners[e.type](options.event && options.event(e) || e);
                }

                function bindEvent(node, name, value, old) {
                    var useCapture = name !== (name = name.replace(/Capture$/, ''));
                    var nameLower = name.toLowerCase();
                    name = (nameLower in node ? nameLower : name).slice(2);
                    if (value) {
                        if (!old) {
                            node.addEventListener(name, eventProxy$1, useCapture);
                        }
                    } else {
                        node.removeEventListener(name, eventProxy$1, useCapture);
                    }
                    (node._listeners || (node._listeners = {}))[name] = value;
                }

                /** Diff recursion count, used to track the end of the diff cycle. */
                var diffLevel = 0;

                /** Global flag indicating if the diff is currently within an SVG */
                var isSvgMode = false;

                /** Global flag indicating if the diff is performing hydration */
                var hydrating = false;

                /** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
                 *  @param {Element} [dom=null]    A DOM node to mutate into the shape of the `vnode`
                 *  @param {VNode} vnode      A VNode (with descendants forming a tree) representing the desired DOM structure
                 *  @returns {Element} dom      The created/mutated element
                 *  @private
                 */
                function diff(dom, vnode, parent, component, updateSelf) {
                    // first render return undefined
                    if (!dom && !vnode) return;
                    // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
                    var ret;
                    if (!diffLevel++) {
                        // when first starting the diff, check if we're diffing an SVG or within an SVG
                        isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

                        // hydration is indicated by the existing element to be diffed not having a prop cache
                        hydrating = dom != null && !('prevProps' in dom);
                    }
                    if (vnode && vnode.nodeName === Fragment) {
                        vnode = vnode.children;
                    }
                    if (isArray(vnode)) {
                        if (parent) {
                            // don't use css and props.css when using h.f
                            // diff node list and vnode list
                            innerDiffNode(parent, vnode, hydrating, component, updateSelf);
                        } else {
                            // connectedCallback 的时候 parent 为 null
                            ret = [];
                            vnode.forEach(function (item, index) {
                                var ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
                                // 返回数组的情况下，在 WeElement 中进行了 shadowRoot.appendChild
                                // 所有不会出现 vnode index 大于 0 丢失的情况
                                ret.push(ele);
                            });
                        }
                    } else {
                        if (isArray(dom)) {
                            dom.forEach(function (one, index) {
                                if (index === 0) {
                                    ret = idiff(one, vnode, component, updateSelf);
                                } else {
                                    recollectNodeTree(one, false);
                                }
                            });
                        } else {
                            ret = idiff(dom, vnode, component, updateSelf);
                        }
                        // append the element if its a new parent
                        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
                    }

                    // diffLevel being reduced to 0 means we're exiting the diff
                    if (! --diffLevel) {
                        hydrating = false;
                        // invoke queued componentDidMount lifecycle methods
                    }

                    return ret;
                }

                /** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
                function idiff(dom, vnode, component, updateSelf) {
                    if (dom && vnode && dom.props) {
                        dom.props.children = vnode.children;
                    }
                    var out = dom,
                        prevSvgMode = isSvgMode;

                    // empty values (null, undefined, booleans) render as empty Text nodes
                    if (vnode == null || typeof vnode === 'boolean') vnode = '';

                    // Fast case: Strings & Numbers create/update Text nodes.
                    if (typeof vnode === 'string' || typeof vnode === 'number') {
                        // update if it's already a Text node:
                        if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || component)) {
                            /* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
                            if (dom.nodeValue != vnode) {
                                dom.nodeValue = vnode;
                            }
                        } else {
                            // it wasn't a Text node: replace it with one and recycle the old Element
                            out = document.createTextNode(vnode);
                            if (dom) {
                                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                                recollectNodeTree(dom, true);
                            }
                        }

                        out['prevProps'] = true;

                        return out;
                    }

                    // If the VNode represents a Component, perform a component diff:
                    var vnodeName = vnode.nodeName;
                    if (typeof vnodeName === 'function') {
                        for (var key in options.mapping) {
                            if (options.mapping[key] === vnodeName) {
                                vnodeName = key;
                                vnode.nodeName = key;
                                break;
                            }
                        }
                    }
                    // Tracks entering and exiting SVG namespace when descending through the tree.
                    isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

                    // If there's no existing element or it's the wrong type, create a new one:
                    vnodeName = String(vnodeName);
                    if (!dom || !isNamedNode(dom, vnodeName)) {
                        out = createNode(vnodeName, isSvgMode);

                        if (dom) {
                            // move children into the replacement node
                            while (dom.firstChild) {
                                out.appendChild(dom.firstChild);
                            } // if the previous Element was mounted into the DOM, replace it inline
                            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

                            // recycle the old element (skips non-Element node types)
                            recollectNodeTree(dom, true);
                        }
                    }

                    var fc = out.firstChild,
                        props = out['prevProps'],
                        vchildren = vnode.children;

                    if (props == null) {
                        props = out['prevProps'] = {};
                        for (var a = out.attributes, i = a.length; i--;) {
                            props[a[i].name] = a[i].value;
                        }
                    }

                    // Optimization: fast-path for elements containing a single TextNode:
                    if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
                        if (fc.nodeValue != vchildren[0]) {
                            fc.nodeValue = vchildren[0];
                        }
                    }
                    // otherwise, if there are existing or new children, diff them:
                    else if (vchildren && vchildren.length || fc != null) {
                        if (!(out.constructor.is == 'WeElement' && out.constructor.noSlot)) {
                            innerDiffNode(out, vchildren, hydrating || props.dangerouslySetInnerHTML != null, component, updateSelf);
                        }
                    }

                    // Apply attributes/props from VNode to the DOM Element:
                    diffAttributes(out, vnode.attributes, props, component, updateSelf);
                    if (out.props) {
                        out.props.children = vnode.children;
                    }
                    // restore previous SVG mode: (in case we're exiting an SVG namespace)
                    isSvgMode = prevSvgMode;

                    return out;
                }

                /** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
                 *  @param {Element} dom      Element whose children should be compared & mutated
                 *  @param {Array} vchildren    Array of VNodes to compare to `dom.childNodes`
                 *  @param {Boolean} isHydrating  If `true`, consumes externally created elements similar to hydration
                 */
                function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
                    var originalChildren = dom.childNodes,
                        children = [],
                        keyed = {},
                        keyedLen = 0,
                        min = 0,
                        len = originalChildren.length,
                        childrenLen = 0,
                        vlen = vchildren ? vchildren.length : 0,
                        j,
                        c,
                        f,
                        vchild,
                        child;

                    // Build up a map of keyed children and an Array of unkeyed children:
                    if (len !== 0) {
                        for (var i = 0; i < len; i++) {
                            var _child = originalChildren[i],
                                props = _child['prevProps'],
                                key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
                            if (key != null) {
                                keyedLen++;
                                keyed[key] = _child;
                            } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
                                children[childrenLen++] = _child;
                            }
                        }
                    }

                    if (vlen !== 0) {
                        for (var i = 0; i < vlen; i++) {
                            vchild = vchildren[i];
                            child = null;

                            if (vchild) {
                                // attempt to find a node based on key matching
                                var key = vchild.key;
                                if (key != null) {
                                    if (keyedLen && keyed[key] !== undefined) {
                                        child = keyed[key];
                                        keyed[key] = undefined;
                                        keyedLen--;
                                    }
                                }
                                // attempt to pluck a node of the same type from the existing children
                                else if (!child && min < childrenLen) {
                                    for (j = min; j < childrenLen; j++) {
                                        if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
                                            child = c;
                                            children[j] = undefined;
                                            if (j === childrenLen - 1) childrenLen--;
                                            if (j === min) min++;
                                            break;
                                        }
                                    }
                                }
                            }

                            // morph the matched/found/created DOM child to match vchild (deep)
                            child = idiff(child, vchild, component, updateSelf);

                            f = originalChildren[i];
                            if (child && child !== dom && child !== f) {
                                if (f == null) {
                                    dom.appendChild(child);
                                } else if (child === f.nextSibling) {
                                    removeNode(f);
                                } else {
                                    dom.insertBefore(child, f);
                                }
                            }
                        }
                    }

                    // remove unused keyed children:
                    if (keyedLen) {
                        for (var i in keyed) {
                            if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
                        }
                    }

                    // remove orphaned unkeyed children:
                    while (min <= childrenLen) {
                        if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
                    }
                }

                /** Recursively recycle (or just unmount) a node and its descendants.
                 *  @param {Node} node            DOM node to start unmount/removal from
                 *  @param {Boolean} [unmountOnly=false]  If `true`, only triggers unmount lifecycle, skips removal
                 */
                function recollectNodeTree(node, unmountOnly) {
                    // If the node's VNode had a ref function, invoke it with null here.
                    // (this is part of the React spec, and smart for unsetting references)
                    if (node['prevProps'] != null && node['prevProps'].ref) {
                        if (typeof node['prevProps'].ref === 'function') {
                            node['prevProps'].ref(null);
                        } else if (node['prevProps'].ref.current) {
                            node['prevProps'].ref.current = null;
                        }
                    }

                    if (unmountOnly === false || node['prevProps'] == null) {
                        removeNode(node);
                    }

                    removeChildren(node);
                }

                /** Recollect/unmount all children.
                 *  - we use .lastChild here because it causes less reflow than .firstChild
                 *  - it's also cheaper than accessing the .childNodes Live NodeList
                 */
                function removeChildren(node) {
                    node = node.lastChild;
                    while (node) {
                        var next = node.previousSibling;
                        recollectNodeTree(node, true);
                        node = next;
                    }
                }

                /** Apply differences in attributes from a VNode to the given DOM Element.
                 *  @param {Element} dom    Element with attributes to diff `attrs` against
                 *  @param {Object} attrs    The desired end-state key-value attribute pairs
                 *  @param {Object} old      Current/previous attributes (from previous VNode or element's prop cache)
                 */
                function diffAttributes(dom, attrs, old, component, updateSelf) {
                    var name;
                    //let update = false
                    var isWeElement = dom.update;
                    var oldClone;
                    if (dom.receiveProps) {
                        oldClone = Object.assign({}, old);
                    }
                    // remove attributes no longer present on the vnode by setting them to undefined
                    for (name in old) {
                        if (!(attrs && attrs[name] != null) && old[name] != null) {
                            setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, component);
                            if (isWeElement) {
                                delete dom.props[name];
                                //update = true
                            }
                        }
                    }

                    // add new & update changed attributes
                    for (name in attrs) {
                        if (isWeElement && typeof attrs[name] === 'object' && name !== 'ref') {
                            if (name === 'style') {
                                setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, component);
                            }
                            var ccName = camelCase(name);
                            dom.props[ccName] = old[ccName] = attrs[name];
                            //update = true
                        } else if (name !== 'children' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
                            setAccessor(dom, name, old[name], attrs[name], isSvgMode, component);
                            //fix lazy load props missing
                            if (dom.nodeName.indexOf('-') !== -1) {
                                dom.props = dom.props || {};
                                var _ccName = camelCase(name);
                                dom.props[_ccName] = old[_ccName] = attrs[name];
                                //update = true
                            } else {
                                old[name] = attrs[name];
                            }
                        }
                    }

                    if (isWeElement && !updateSelf && dom.parentNode) {
                        //__hasChildren is not accuracy when it was empty at first, so add dom.children.length > 0 condition
                        //if (update || dom.__hasChildren || dom.children.length > 0 || (dom.store && !dom.store.data)) {
                        if (dom.receiveProps(dom.props, oldClone) !== false) {
                            dom.update();
                        }
                        //}
                    }
                }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var id = 0;

                var WeElement = function (_HTMLElement) {
                    _inherits(WeElement, _HTMLElement);

                    function WeElement() {
                        _classCallCheck(this, WeElement);

                        // fix lazy load props missing
                        var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

                        _this.props = Object.assign({}, _this.constructor.defaultProps, _this.props);
                        _this.elementId = id++;
                        _this.computed = {};
                        _this.isInstalled = false;
                        return _this;
                    }

                    WeElement.prototype.connectedCallback = function connectedCallback() {
                        var _this2 = this;

                        var p = this.parentNode;
                        while (p && !this.store) {
                            this.store = p.store;
                            p = p.parentNode || p.host;
                        }

                        if (this.inject) {
                            this.injection = {};
                            p = this.parentNode;
                            var provide;
                            while (p && !provide) {
                                provide = p.provide;
                                p = p.parentNode || p.host;
                            }
                            if (provide) {
                                this.inject.forEach(function (injectKey) {
                                    _this2.injection[injectKey] = provide[injectKey];
                                });
                            } else {
                                throw 'The provide prop was not found on the parent node or the provide type is incorrect.';
                            }
                        }

                        this.attrsToProps();

                        this.beforeInstall();
                        this.install();
                        this.afterInstall();

                        var shadowRoot;
                        if (this.constructor.isLightDOM) {
                            shadowRoot = this;
                        } else {
                            if (!this.shadowRoot) {
                                shadowRoot = this.attachShadow({
                                    mode: 'open'
                                });
                            } else {
                                shadowRoot = this.shadowRoot;
                                var fc;
                                while (fc = shadowRoot.firstChild) {
                                    shadowRoot.removeChild(fc);
                                }
                            }
                        }

                        if (this.constructor.elementStyles) {
                            shadowRoot.adoptedStyleSheets = this.constructor.elementStyles;
                        } else {
                            var css = this.constructor.css;
                            if (css) {
                                if (typeof css === 'string') {
                                    var styleSheet = new CSSStyleSheet();
                                    styleSheet.replaceSync(css);
                                    shadowRoot.adoptedStyleSheets = [styleSheet];
                                } else if (Object.prototype.toString.call(css) === '[object Array]') {
                                    var styleSheets = [];
                                    css.forEach(function (styleSheet) {
                                        if (typeof styleSheet === 'string') {
                                            var adoptedStyleSheet = new CSSStyleSheet();
                                            adoptedStyleSheet.replaceSync(styleSheet);
                                            styleSheets.push(adoptedStyleSheet);
                                        } else {
                                            styleSheets.push(styleSheet);
                                        }
                                        shadowRoot.adoptedStyleSheets = styleSheets;
                                    });
                                } else if (css.default && typeof css.default === 'string') {
                                    // [object Module]
                                    var _styleSheet = new CSSStyleSheet();
                                    _styleSheet.replaceSync(css.default);
                                    shadowRoot.adoptedStyleSheets = [_styleSheet];
                                } else {
                                    shadowRoot.adoptedStyleSheets = [css];
                                }
                                this.constructor.elementStyles = shadowRoot.adoptedStyleSheets;
                            }
                        }

                        this.beforeRender();
                        options.afterInstall && options.afterInstall(this);

                        var rendered = this.render(this.props, this.store);

                        this.rootElement = diff(null, rendered, null, this);
                        this.rendered();

                        if (this.css) {
                            shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
                        }

                        if (this.props.css) {
                            this._customStyleElement = cssToDom(this.props.css);
                            this._customStyleContent = this.props.css;
                            shadowRoot.appendChild(this._customStyleElement);
                        }

                        if (isArray(this.rootElement)) {
                            this.rootElement.forEach(function (item) {
                                shadowRoot.appendChild(item);
                            });
                        } else {
                            this.rootElement && shadowRoot.appendChild(this.rootElement);
                        }
                        this.installed();
                        this.isInstalled = true;
                    };

                    WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
                        this.uninstall();
                        this.isInstalled = false;
                    };

                    WeElement.prototype.update = function update(ignoreAttrs, updateSelf) {
                        this._willUpdate = true;
                        this.beforeUpdate();
                        this.beforeRender();
                        //fix null !== undefined
                        if (this._customStyleContent != this.props.css) {
                            this._customStyleContent = this.props.css;
                            this._customStyleElement.textContent = this._customStyleContent;
                        }
                        this.attrsToProps(ignoreAttrs);

                        var rendered = this.render(this.props, this.store);
                        this.rendered();

                        this.rootElement = diff(this.rootElement, rendered, this.constructor.isLightDOM ? this : this.shadowRoot, this, updateSelf);
                        this._willUpdate = false;
                        this.updated();
                    };

                    WeElement.prototype.forceUpdate = function forceUpdate() {
                        this.update(true);
                    };

                    WeElement.prototype.updateProps = function updateProps(obj) {
                        var _this3 = this;

                        Object.keys(obj).forEach(function (key) {
                            _this3.props[key] = obj[key];
                            if (_this3.prevProps) {
                                _this3.prevProps[key] = obj[key];
                            }
                        });
                        this.forceUpdate();
                    };

                    WeElement.prototype.updateSelf = function updateSelf(ignoreAttrs) {
                        this.update(ignoreAttrs, true);
                    };

                    WeElement.prototype.removeAttribute = function removeAttribute(key) {
                        _HTMLElement.prototype.removeAttribute.call(this, key);
                        //Avoid executing removeAttribute methods before connectedCallback
                        this.isInstalled && this.update();
                    };

                    WeElement.prototype.setAttribute = function setAttribute(key, val) {
                        if (val && typeof val === 'object') {
                            _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val));
                        } else {
                            _HTMLElement.prototype.setAttribute.call(this, key, val);
                        }
                        //Avoid executing setAttribute methods before connectedCallback
                        this.isInstalled && this.update();
                    };

                    WeElement.prototype.pureRemoveAttribute = function pureRemoveAttribute(key) {
                        _HTMLElement.prototype.removeAttribute.call(this, key);
                    };

                    WeElement.prototype.pureSetAttribute = function pureSetAttribute(key, val) {
                        _HTMLElement.prototype.setAttribute.call(this, key, val);
                    };

                    WeElement.prototype.attrsToProps = function attrsToProps(ignoreAttrs) {
                        if (ignoreAttrs || this.store && this.store.ignoreAttrs || this.props.ignoreAttrs) return;
                        var ele = this;
                        ele.props['css'] = ele.getAttribute('css');
                        var attrs = this.constructor.propTypes;
                        if (!attrs) return;
                        Object.keys(attrs).forEach(function (key) {
                            var type = attrs[key];
                            var val = ele.getAttribute(hyphenate(key));
                            if (val !== null) {
                                switch (type) {
                                    case String:
                                        ele.props[key] = val;
                                        break;
                                    case Number:
                                        ele.props[key] = Number(val);
                                        break;
                                    case Boolean:
                                        if (val === 'false' || val === '0') {
                                            ele.props[key] = false;
                                        } else {
                                            ele.props[key] = true;
                                        }
                                        break;
                                    case Array:
                                    case Object:
                                        if (val[0] === ':') {
                                            ele.props[key] = getValByPath(val.substr(1), Omi.$);
                                        } else {
                                            ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
                                        }
                                        break;
                                }
                            } else {
                                if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
                                    ele.props[key] = ele.constructor.defaultProps[key];
                                } else {
                                    ele.props[key] = null;
                                }
                            }
                        });
                    };

                    WeElement.prototype.fire = function fire(name, data) {
                        var handler = this.props['on' + capitalize(name)];
                        if (handler) {
                            handler(new CustomEvent(name, {
                                detail: data
                            }));
                        } else {
                            this.dispatchEvent(new CustomEvent(name, {
                                detail: data
                            }));
                        }
                    };

                    WeElement.prototype.beforeInstall = function beforeInstall() { };

                    WeElement.prototype.install = function install() { };

                    WeElement.prototype.afterInstall = function afterInstall() { };

                    WeElement.prototype.installed = function installed() { };

                    WeElement.prototype.uninstall = function uninstall() { };

                    WeElement.prototype.beforeUpdate = function beforeUpdate() { };

                    WeElement.prototype.updated = function updated() { };

                    WeElement.prototype.beforeRender = function beforeRender() { };

                    WeElement.prototype.rendered = function rendered() { };

                    WeElement.prototype.receiveProps = function receiveProps() { };

                    return WeElement;
                }(HTMLElement);

                WeElement.is = 'WeElement';

                function render(vnode, parent, store) {
                    parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
                    if (store) {
                        parent.store = store;
                    }
                    return diff(null, vnode, parent, false);
                }

                function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var storeHelpers = ['use', 'useSelf'];

                function define(name, ctor, config) {
                    if (customElements.get(name)) {
                        return;
                    }
                    if (options.mapping[name]) {
                        return;
                    }
                    if (ctor.is === 'WeElement') {
                        customElements.define(name, ctor);
                        options.mapping[name] = ctor;
                    } else {
                        if (typeof config === 'string') {
                            config = { css: config };
                        } else {
                            config = config || {};
                        }

                        var Ele = function (_WeElement) {
                            _inherits$1(Ele, _WeElement);

                            function Ele() {
                                var _temp, _this, _ret;

                                _classCallCheck$1(this, Ele);

                                for (var _len = arguments.length, args = Array(_len), key = 0; key < _len; key++) {
                                    args[key] = arguments[key];
                                }

                                return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.compute = config.compute, _temp), _possibleConstructorReturn$1(_this, _ret);
                            }

                            Ele.prototype.render = function render() {
                                return ctor.call(this, this);
                            };

                            return Ele;
                        }(WeElement);

                        Ele.css = config.css;
                        Ele.propTypes = config.propTypes;
                        Ele.defaultProps = config.defaultProps;
                        Ele.isLightDOM = config.isLightDOM;

                        var _loop = function _loop(key) {
                            if (typeof config[key] === 'function') {
                                Ele.prototype[key] = function () {
                                    return config[key].apply(this, arguments);
                                };
                            }
                        };

                        for (var key in config) {
                            _loop(key);
                        }

                        storeHelpers.forEach(function (func) {
                            if (config[func] && config[func] !== 'function') {
                                Ele.prototype[func] = function () {
                                    return config[func];
                                };
                            }
                        });

                        customElements.define(name, Ele);
                        options.mapping[name] = Ele;
                    }
                }

                function tag(name) {
                    return function (target) {
                        define(name, target);
                    };
                }

                /**
                 * Clones the given VNode, optionally adding attributes/props and replacing its children.
                 * @param {VNode} vnode    The virtual DOM element to clone
                 * @param {Object} props  Attributes/props to add when cloning
                 * @param {VNode} rest    Any additional arguments will be used as replacement children.
                 */
                function cloneElement(vnode, props) {
                    return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
                }

                function getHost(ele) {
                    var p = ele.parentNode;
                    while (p) {
                        if (p.host) {
                            return p.host;
                        } else if (p.shadowRoot && p.shadowRoot.host) {
                            return p.shadowRoot.host;
                        } else {
                            p = p.parentNode;
                        }
                    }
                }

                function rpx(css) {
                    return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
                        return window.innerWidth * Number(b) / 750 + 'px';
                    });
                }

                /**
                 * classNames based on https://github.com/JedWatson/classnames
                 * by Jed Watson
                 * Licensed under the MIT License
                 * https://github.com/JedWatson/classnames/blob/master/LICENSE
                 * modified by dntzhang
                 */

                var hasOwn = {}.hasOwnProperty;

                function classNames() {
                    var classes = [];

                    for (var i = 0; i < arguments.length; i++) {
                        var arg = arguments[i];
                        if (!arg) continue;

                        var argType = typeof arg;

                        if (argType === 'string' || argType === 'number') {
                            classes.push(arg);
                        } else if (Array.isArray(arg) && arg.length) {
                            var inner = classNames.apply(null, arg);
                            if (inner) {
                                classes.push(inner);
                            }
                        } else if (argType === 'object') {
                            for (var key in arg) {
                                if (hasOwn.call(arg, key) && arg[key]) {
                                    classes.push(key);
                                }
                            }
                        }
                    }

                    return classes.join(' ');
                }

                function extractClass() {
                    var _Array$prototype$slic = Array.prototype.slice.call(arguments, 0),
                        props = _Array$prototype$slic[0],
                        args = _Array$prototype$slic.slice(1);

                    if (props.class) {
                        args.unshift(props.class);
                        delete props.class;
                    } else if (props.className) {
                        args.unshift(props.className);
                        delete props.className;
                    }
                    if (args.length > 0) {
                        return { class: classNames.apply(null, args) };
                    }
                }

                function o(obj) {
                    return JSON.stringify(obj);
                }

                (function () {

                    if (typeof document === 'undefined' || 'adoptedStyleSheets' in document) { return; }

                    var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
                    var bootstrapper = document.implementation.createHTMLDocument('');
                    var closedShadowRootRegistry = new WeakMap();
                    var _DOMException = typeof DOMException === 'object' ? Error : DOMException;
                    var defineProperty = Object.defineProperty;
                    var forEach = Array.prototype.forEach;

                    var importPattern = /@import.+?;?$/gm;
                    function rejectImports(contents) {
                        var _contents = contents.replace(importPattern, '');
                        if (_contents !== contents) {
                            console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
                        }
                        return _contents.trim();
                    }
                    function isElementConnected(element) {
                        return 'isConnected' in element
                            ? element.isConnected
                            : document.contains(element);
                    }
                    function unique(arr) {
                        return arr.filter(function (value, index) { return arr.indexOf(value) === index; });
                    }
                    function diff(arr1, arr2) {
                        return arr1.filter(function (value) { return arr2.indexOf(value) === -1; });
                    }
                    function removeNode(node) {
                        node.parentNode.removeChild(node);
                    }
                    function getShadowRoot(element) {
                        return element.shadowRoot || closedShadowRootRegistry.get(element);
                    }

                    var cssStyleSheetMethods = [
                        'addRule',
                        'deleteRule',
                        'insertRule',
                        'removeRule',
                    ];
                    var NonConstructedStyleSheet = CSSStyleSheet;
                    var nonConstructedProto = NonConstructedStyleSheet.prototype;
                    nonConstructedProto.replace = function () {
                        return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
                    };
                    nonConstructedProto.replaceSync = function () {
                        throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
                    };
                    function isCSSStyleSheetInstance(instance) {
                        return typeof instance === 'object'
                            ? proto$1.isPrototypeOf(instance) ||
                            nonConstructedProto.isPrototypeOf(instance)
                            : false;
                    }
                    function isNonConstructedStyleSheetInstance(instance) {
                        return typeof instance === 'object'
                            ? nonConstructedProto.isPrototypeOf(instance)
                            : false;
                    }
                    var $basicStyleElement = new WeakMap();
                    var $locations = new WeakMap();
                    var $adoptersByLocation = new WeakMap();
                    var $appliedMethods = new WeakMap();
                    function addAdopterLocation(sheet, location) {
                        var adopter = document.createElement('style');
                        $adoptersByLocation.get(sheet).set(location, adopter);
                        $locations.get(sheet).push(location);
                        return adopter;
                    }
                    function getAdopterByLocation(sheet, location) {
                        return $adoptersByLocation.get(sheet).get(location);
                    }
                    function removeAdopterLocation(sheet, location) {
                        $adoptersByLocation.get(sheet).delete(location);
                        $locations.set(sheet, $locations.get(sheet).filter(function (_location) { return _location !== location; }));
                    }
                    function restyleAdopter(sheet, adopter) {
                        requestAnimationFrame(function () {
                            adopter.textContent = $basicStyleElement.get(sheet).textContent;
                            $appliedMethods
                                .get(sheet)
                                .forEach(function (command) {
                                    return adopter.sheet[command.method].apply(adopter.sheet, command.args);
                                });
                        });
                    }
                    function checkInvocationCorrectness(self) {
                        if (!$basicStyleElement.has(self)) {
                            throw new TypeError('Illegal invocation');
                        }
                    }
                    function ConstructedStyleSheet() {
                        var self = this;
                        var style = document.createElement('style');
                        bootstrapper.body.appendChild(style);
                        $basicStyleElement.set(self, style);
                        $locations.set(self, []);
                        $adoptersByLocation.set(self, new WeakMap());
                        $appliedMethods.set(self, []);
                    }
                    var proto$1 = ConstructedStyleSheet.prototype;
                    proto$1.replace = function replace(contents) {
                        try {
                            this.replaceSync(contents);
                            return Promise.resolve(this);
                        }
                        catch (e) {
                            return Promise.reject(e);
                        }
                    };
                    proto$1.replaceSync = function replaceSync(contents) {
                        checkInvocationCorrectness(this);
                        if (typeof contents === 'string') {
                            var self_1 = this;
                            $basicStyleElement.get(self_1).textContent = rejectImports(contents);
                            $appliedMethods.set(self_1, []);
                            $locations.get(self_1).forEach(function (location) {
                                if (location.isConnected()) {
                                    restyleAdopter(self_1, getAdopterByLocation(self_1, location));
                                }
                            });
                        }
                    };
                    defineProperty(proto$1, 'cssRules', {
                        configurable: true,
                        enumerable: true,
                        get: function cssRules() {
                            checkInvocationCorrectness(this);
                            return $basicStyleElement.get(this).sheet.cssRules;
                        },
                    });
                    defineProperty(proto$1, 'media', {
                        configurable: true,
                        enumerable: true,
                        get: function media() {
                            checkInvocationCorrectness(this);
                            return $basicStyleElement.get(this).sheet.media;
                        },
                    });
                    cssStyleSheetMethods.forEach(function (method) {
                        proto$1[method] = function () {
                            var self = this;
                            checkInvocationCorrectness(self);
                            var args = arguments;
                            $appliedMethods.get(self).push({ method: method, args: args });
                            $locations.get(self).forEach(function (location) {
                                if (location.isConnected()) {
                                    var sheet = getAdopterByLocation(self, location).sheet;
                                    sheet[method].apply(sheet, args);
                                }
                            });
                            var basicSheet = $basicStyleElement.get(self).sheet;
                            return basicSheet[method].apply(basicSheet, args);
                        };
                    });
                    defineProperty(ConstructedStyleSheet, Symbol.hasInstance, {
                        configurable: true,
                        value: isCSSStyleSheetInstance,
                    });

                    var defaultObserverOptions = {
                        childList: true,
                        subtree: true,
                    };
                    var locations = new WeakMap();
                    function getAssociatedLocation(element) {
                        var location = locations.get(element);
                        if (!location) {
                            location = new Location(element);
                            locations.set(element, location);
                        }
                        return location;
                    }
                    function attachAdoptedStyleSheetProperty(constructor) {
                        defineProperty(constructor.prototype, 'adoptedStyleSheets', {
                            configurable: true,
                            enumerable: true,
                            get: function () {
                                return getAssociatedLocation(this).sheets;
                            },
                            set: function (sheets) {
                                getAssociatedLocation(this).update(sheets);
                            },
                        });
                    }
                    function traverseWebComponents(node, callback) {
                        var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function (foundNode) {
                            return getShadowRoot(foundNode)
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_REJECT;
                        },
                            null, false);
                        for (var next = void 0; (next = iter.nextNode());) {
                            callback(getShadowRoot(next));
                        }
                    }
                    var $element = new WeakMap();
                    var $uniqueSheets = new WeakMap();
                    var $observer = new WeakMap();
                    function isExistingAdopter(self, element) {
                        return (element instanceof HTMLStyleElement &&
                            $uniqueSheets.get(self).some(function (sheet) { return getAdopterByLocation(sheet, self); }));
                    }
                    function getAdopterContainer(self) {
                        var element = $element.get(self);
                        return element instanceof Document ? element.body : element;
                    }
                    function adopt(self) {
                        var styleList = document.createDocumentFragment();
                        var sheets = $uniqueSheets.get(self);
                        var observer = $observer.get(self);
                        var container = getAdopterContainer(self);
                        observer.disconnect();
                        sheets.forEach(function (sheet) {
                            styleList.appendChild(getAdopterByLocation(sheet, self) || addAdopterLocation(sheet, self));
                        });
                        container.insertBefore(styleList, null);
                        observer.observe(container, defaultObserverOptions);
                        sheets.forEach(function (sheet) {
                            restyleAdopter(sheet, getAdopterByLocation(sheet, self));
                        });
                    }
                    function Location(element) {
                        var self = this;
                        self.sheets = [];
                        $element.set(self, element);
                        $uniqueSheets.set(self, []);
                        $observer.set(self, new MutationObserver(function (mutations, observer) {
                            if (!document) {
                                observer.disconnect();
                                return;
                            }
                            mutations.forEach(function (mutation) {
                                if (!hasShadyCss) {
                                    forEach.call(mutation.addedNodes, function (node) {
                                        if (!(node instanceof Element)) {
                                            return;
                                        }
                                        traverseWebComponents(node, function (root) {
                                            getAssociatedLocation(root).connect();
                                        });
                                    });
                                }
                                forEach.call(mutation.removedNodes, function (node) {
                                    if (!(node instanceof Element)) {
                                        return;
                                    }
                                    if (isExistingAdopter(self, node)) {
                                        adopt(self);
                                    }
                                    if (!hasShadyCss) {
                                        traverseWebComponents(node, function (root) {
                                            getAssociatedLocation(root).disconnect();
                                        });
                                    }
                                });
                            });
                        }));
                    }
                    Location.prototype = {
                        isConnected: function () {
                            var element = $element.get(this);
                            return element instanceof Document
                                ? element.readyState !== 'loading'
                                : isElementConnected(element.host);
                        },
                        connect: function () {
                            var container = getAdopterContainer(this);
                            $observer.get(this).observe(container, defaultObserverOptions);
                            if ($uniqueSheets.get(this).length > 0) {
                                adopt(this);
                            }
                            traverseWebComponents(container, function (root) {
                                getAssociatedLocation(root).connect();
                            });
                        },
                        disconnect: function () {
                            $observer.get(this).disconnect();
                        },
                        update: function (sheets) {
                            var self = this;
                            var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
                            if (!Array.isArray(sheets)) {
                                throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
                            }
                            if (!sheets.every(isCSSStyleSheetInstance)) {
                                throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
                            }
                            if (sheets.some(isNonConstructedStyleSheetInstance)) {
                                throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
                            }
                            self.sheets = sheets;
                            var oldUniqueSheets = $uniqueSheets.get(self);
                            var uniqueSheets = unique(sheets);
                            var removedSheets = diff(oldUniqueSheets, uniqueSheets);
                            removedSheets.forEach(function (sheet) {
                                removeNode(getAdopterByLocation(sheet, self));
                                removeAdopterLocation(sheet, self);
                            });
                            $uniqueSheets.set(self, uniqueSheets);
                            if (self.isConnected() && uniqueSheets.length > 0) {
                                adopt(self);
                            }
                        },
                    };

                    window.CSSStyleSheet = ConstructedStyleSheet;
                    attachAdoptedStyleSheetProperty(Document);
                    if ('ShadowRoot' in window) {
                        attachAdoptedStyleSheetProperty(ShadowRoot);
                        var proto = Element.prototype;
                        var attach_1 = proto.attachShadow;
                        proto.attachShadow = function attachShadow(init) {
                            var root = attach_1.call(this, init);
                            if (init.mode === 'closed') {
                                closedShadowRootRegistry.set(this, root);
                            }
                            return root;
                        };
                    }
                    var documentLocation = getAssociatedLocation(document);
                    if (documentLocation.isConnected()) {
                        documentLocation.connect();
                    }
                    else {
                        document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
                    }

                }());

                h.f = Fragment;

                function createRef() {
                    return {};
                }

                var $ = {};
                var Component = WeElement;
                var defineElement = define;
                var elements = options.mapping;

                var omi = {
                    tag: tag,
                    WeElement: WeElement,
                    Component: Component,
                    render: render,
                    h: h,
                    createElement: h,
                    options: options,
                    define: define,
                    cloneElement: cloneElement,
                    getHost: getHost,
                    rpx: rpx,
                    defineElement: defineElement,
                    classNames: classNames,
                    extractClass: extractClass,
                    createRef: createRef,
                    o: o,
                    elements: elements,
                    $: $,
                    extend: extend$1,
                    get: get,
                    set: set,
                    bind: bind,
                    unbind: unbind
                };

                options.root.Omi = omi;
                options.root.omi = omi;
                options.root.Omi.version = '6.23.0';

/* harmony default export */ __webpack_exports__["default"] = (omi);

                //# sourceMappingURL=omi.esm.js.map

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./src/demo.tsx":
/*!**********************!*\
  !*** ./src/demo.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var omi_1 = __webpack_require__(/*! omi */ "./node_modules/omi/dist/omi.esm.js");
            __webpack_require__(/*! ./index.tsx */ "./src/index.tsx");
            var Table = /** @class */ (function (_super) {
                __extends(Table, _super);
                function Table() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Table.prototype.render = function (props) {
                    return omi_1.h("div", null,
                        omi_1.h("o-date-picker", { size: "medium", locale: "zh" }),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("o-date-picker", { size: "small", locale: "zh" }),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("o-date-picker", { size: "mini" }),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("br", null),
                        omi_1.h("o-date-picker", { width: "500px", size: "mini", mode: "range" }));
                };
                Table = __decorate([
                    omi_1.tag('table-demo')
                ], Table);
                return Table;
            }(omi_1.WeElement));
            exports.default = Table;
            omi_1.render(omi_1.h("table-demo", null), 'body');


            /***/
        }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
                __assign = Object.assign || function (t) {
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
            var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
                function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (this && this.__generator) || function (thisArg, body) {
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
            };
            var __rest = (this && this.__rest) || function (s, e) {
                var t = {};
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var omi_1 = __webpack_require__(/*! omi */ "./node_modules/omi/dist/omi.esm.js");
            var flatpickr_1 = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
            var style_ts_1 = __webpack_require__(/*! ./style.ts */ "./src/style.ts");
            __webpack_require__(/*! @omiu/icon/esm/date-range */ "./node_modules/@omiu/icon/esm/date-range.js");
            var zh_1 = __webpack_require__(/*! flatpickr/dist/esm/l10n/zh */ "./node_modules/flatpickr/dist/esm/l10n/zh.js");
            __webpack_require__(/*! @omiu/input */ "./node_modules/@omiu/input/src/index.esm.js");
            var DatePicker = /** @class */ (function (_super) {
                __extends(DatePicker, _super);
                function DatePicker() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.onEnter = function (evt) {
                        clearTimeout(_this.timeout);
                        _this.isShow = !_this.isShow;
                        _this.update();
                        evt.stopPropagation();
                    };
                    _this.onLeave = function () {
                        _this.timeout = setTimeout(function () {
                            _this.isShow = false;
                            _this.update();
                        }, 600);
                    };
                    _this.onEnterPopover = function (evt) {
                        clearTimeout(_this.timeout);
                        evt.stopPropagation();
                    };
                    _this.onLeavePopover = function () {
                        if (_this.props.trigger !== 'click') {
                            _this.timeout = setTimeout(function () {
                                _this.isShow = false;
                                _this.update();
                            }, 600);
                        }
                    };
                    _this.isShow = false;
                    return _this;
                }
                DatePicker.prototype.updated = function () {
                    var _a = this.props, locale = _a.locale, other = __rest(_a, ["locale"]);
                    flatpickr_1.default(this.shadowRoot.querySelector('o-input'), __assign({ disableMobile: true, locale: locale === 'zh' ? zh_1.Mandarin : null }, other));
                };
                DatePicker.prototype.installed = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var styleLoader, _a, locale, other;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    styleLoader = new style_ts_1.default(this.props.theme);
                                    return [4 /*yield*/, styleLoader.initStyles()];
                                case 1:
                                    _b.sent();
                                    _a = this.props, locale = _a.locale, other = __rest(_a, ["locale"]);
                                    flatpickr_1.default(this.shadowRoot.querySelector('o-input'), __assign({ disableMobile: true, locale: locale === 'zh' ? zh_1.Mandarin : null }, other));
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                DatePicker.prototype.render = function (props) {
                    return omi_1.h("div", null,
                        omi_1.h("o-input", { size: props.size, "suffix-icon": "date-range", css: ".o-input input {\n    width: " + props.width + ";\n}", type: "text" }));
                };
                DatePicker.defaultProps = {
                    theme: 'light',
                    size: 'small',
                    width: 'auto'
                };
                DatePicker.propTypes = {
                    theme: String,
                    size: String,
                    width: String
                };
                DatePicker = __decorate([
                    omi_1.tag('o-date-picker')
                ], DatePicker);
                return DatePicker;
            }(omi_1.WeElement));
            exports.default = DatePicker;


            /***/
        }),

/***/ "./src/style.ts":
/*!**********************!*\
  !*** ./src/style.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * Based on lit-flatpickr https://github.com/Matsuuu/lit-flatpickr/blob/master/src/StyleLoader.ts
             * Licensed under the MIT License
             * https://github.com/Matsuuu/lit-flatpickr/blob/master/LICENSE
             *
             */
            var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
                function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (this && this.__generator) || function (thisArg, body) {
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
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            exports.getStyleRepository = exports.FlatpickrTheme = void 0;
            // const styleRepository = 'https://npmcdn.com/flatpickr@4.6.9/dist/themes/';
            var styleRepository = 'https://omi.cdn-go.cn/admin/latest/flatpickr/themes/';
            var FlatpickrTheme;
            (function (FlatpickrTheme) {
                FlatpickrTheme["light"] = "light";
                FlatpickrTheme["dark"] = "dark";
                FlatpickrTheme["materialBlue"] = "material_blue";
                FlatpickrTheme["materialGreen"] = "material_green";
                FlatpickrTheme["materialOrange"] = "material_orange";
                FlatpickrTheme["materialRed"] = "material_red";
                FlatpickrTheme["airbnb"] = "airbnb";
                FlatpickrTheme["confetti"] = "confetti";
                FlatpickrTheme["none"] = "none";
            })(FlatpickrTheme = exports.FlatpickrTheme || (exports.FlatpickrTheme = {}));
            function getStyleRepository(theme) {
                return "" + styleRepository + theme + ".css";
            }
            exports.getStyleRepository = getStyleRepository;
            // const themeUrlPrefix = 'https://npmcdn.com/flatpickr@4.6.9/dist/themes';
            var themeUrlPrefix = 'https://omi.cdn-go.cn/admin/latest/flatpickr/themes';
            var StyleLoader = /** @class */ (function () {
                function StyleLoader(theme) {
                    this.theme = theme;
                    this.theme = theme;
                }
                StyleLoader.prototype.initStyles = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var themeUrl, themeIsLoaded;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    themeUrl = getStyleRepository(this.theme);
                                    themeIsLoaded = this.isThemeLoaded();
                                    if (!!themeIsLoaded) return [3 /*break*/, 2];
                                    this.appendThemeStyles(themeUrl);
                                    return [4 /*yield*/, this.waitForStyleToLoad(function () { return _this.isThemeLoaded(); })];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * We want to prevent the styles from flickering, so we halt the
                 * initialization process until the styles have been loaded
                 * */
                StyleLoader.prototype.waitForStyleToLoad = function (checkFunction) {
                    return new Promise(function (resolve, reject) {
                        var checkIfStylesHaveLoaded = function (iteration) {
                            if (iteration === void 0) { iteration = 0; }
                            if (checkFunction())
                                return resolve();
                            if (iteration > 10) {
                                throw Error('Styles took too long to load, or were not able to be loaded');
                                reject();
                            }
                            setTimeout(function () { return checkIfStylesHaveLoaded(iteration++); }, 100);
                        };
                        checkIfStylesHaveLoaded();
                    });
                };
                StyleLoader.prototype.isThemeLoaded = function () {
                    // special theme value to prevent any loading of styles
                    if (this.theme === FlatpickrTheme.none)
                        return true;
                    var styleSheetSources = Array.from(document.styleSheets).map(function (ss) { return ss.href; });
                    return styleSheetSources.some(function (sss) { return sss != null && new RegExp(themeUrlPrefix).test(sss); });
                };
                StyleLoader.prototype.appendThemeStyles = function (themeUrl) {
                    var styleElem = document.createElement('link');
                    styleElem.rel = 'stylesheet';
                    styleElem.type = 'text/css';
                    styleElem.href = themeUrl;
                    document.head.append(styleElem);
                };
                return StyleLoader;
            }());
            exports.default = StyleLoader;


            /***/
        })

    /******/
});
//# sourceMappingURL=demo.js.map
