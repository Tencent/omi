(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("omi"));
    else if (typeof define === 'function' && define.amd)
        define(["omi"], factory);
    else if (typeof exports === 'object')
        exports["OToast"] = factory(require("omi"));
    else
        root["OToast"] = factory(root["Omi"]);
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

/***/ "./node_modules/@omiu/loading/src/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@omiu/loading/src/index.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);
                /**
                 * @omiu/loading v0.0.2 http://omijs.org
                 * Front End Cross-Frameworks Framework.
                 * By dntzhang https://github.com/dntzhang
                 * Github: https://github.com/Tencent/omi
                 * MIT Licensed.
                 */



                /*! *****************************************************************************
                Copyright (c) Microsoft Corporation. All rights reserved.
                Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                this file except in compliance with the License. You may obtain a copy of the
                License at http://www.apache.org/licenses/LICENSE-2.0

                THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                MERCHANTABLITY OR NON-INFRINGEMENT.

                See the Apache Version 2.0 License for specific language governing permissions
                and limitations under the License.
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


                var css = `:host {
  display: inline-block; }

.o-root {
  display: inline-block;
  line-height: 1;
  color: #07c160; }

.o-static {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-indeterminate {
  animation: o-rotate 1.4s linear infinite; }

.o-circle {
  stroke: currentColor; }

.o-circleStatic {
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-circleIndeterminate {
  animation: mui-progress-circular-dash 1.4s ease-in-out infinite;
  animation-name: o-keyframes-mui-progress-circular-dash;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px; }

@-webkit-keyframes o-rotate {
  100% {
    transform: rotate(360deg); } }

@-webkit-keyframes o-keyframes-mui-progress-circular-dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px; }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px; }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px; } }

.o-circleDisableShrink {
  animation: none; }
`


                var Loading = /** @class */ (function (_super) {
                    __extends(Loading, _super);
                    function Loading() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Loading.prototype.render = function (props) {
                        return (Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-root o-colorPrimary o-indeterminate", role: "progressbar", style: "width: " + props.size + "px; height: " + props.size + "px;" + (props.color ? "color:" + props.color + ";" : '') },
                            Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "o-svg", viewBox: "22 22 44 44" },
                                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { class: "o-circle o-circleIndeterminate", cx: "44", cy: "44", r: "20.2", fill: "none", "stroke-width": "3.6" }))));
                    };
                    Loading.css = css;
                    Loading.defaultProps = {
                        size: 40
                    };
                    Loading.propTypes = {
                        size: Number,
                        color: String
                    };
                    Loading = __decorate([
                        Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-loading')
                    ], Loading);
                    return Loading;
                }(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));

/* harmony default export */ __webpack_exports__["default"] = (Loading);
                //# sourceMappingURL=index.esm.js.map


                /***/
}),

/***/ "./node_modules/@omiu/transition/src/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@omiu/transition/src/index.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (global) {/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);
                    /**
                     * @omiu/transition v0.0.12 http://omijs.org
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
                    var Transition = /** @class */ (function (_super) {
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
                            else {
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
                    }(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));

/* harmony default export */ __webpack_exports__["default"] = (Transition);
                    //# sourceMappingURL=index.esm.js.map

                    /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

                /***/
}),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

                exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
                // imports


                // module
                exports.push([module.i, ":host {\n  display: block; }\n\n.o-toast {\n  position: fixed;\n  z-index: 5000;\n  width: 120px;\n  height: 120px;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  border-radius: 5px;\n  color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #4c4c4c; }\n\nbody[data-o-theme='dark'] .o-toast {\n  background-color: #606060; }\n\n@media (prefers-color-scheme: dark) {\n  body:not([data-o-theme='light']) .o-toast {\n    background-color: #606060; } }\n\n.o-icon-toast {\n  display: block; }\n\n.o-icon-toast.o-icon-success-no-circle {\n  color: rgba(255, 255, 255, 0.9);\n  width: 55px;\n  height: 55px; }\n\n.o-toast-content {\n  font-size: 14px;\n  margin-top: 10px; }\n\n.o-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6); }\n\n.o-mask-transparent {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0; }\n\n@-webkit-keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg); }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg); } }\n\n@keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg); }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg); } }\n\np {\n  margin: 0; }\n\n.o-success {\n  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.864%2016.617l-5.303-5.303-1.061%201.06%205.657%205.657a1%201%200%20001.414%200L21.238%206.364l-1.06-1.06L8.864%2016.616z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);\n  -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.864%2016.617l-5.303-5.303-1.061%201.06%205.657%205.657a1%201%200%20001.414%200L21.238%206.364l-1.06-1.06L8.864%2016.616z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E); }\n\n.o-warning {\n  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E);\n  -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E); }\n\ni {\n  -webkit-mask-position: 50% 50%;\n  mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-size: 100%;\n  mask-size: 100%;\n  background-color: currentColor;\n  color: rgba(255, 255, 255, 0.9);\n  width: 40px;\n  height: 40px;\n  display: block;\n  background-size: 100%; }\n\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.2s; }\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0; }\n", ""]);

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
                            } else {
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
                                } else if (mediaQuery) {
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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {


                var result = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

                if (result && result.__esModule) {
                    result = result.default;
                }

                if (typeof result === "string") {
                    module.exports = result;
                } else {
                    module.exports = result.toString();
                }


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
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.hideWarning = exports.showWarning = exports.hideSuccess = exports.showSuccess = exports.hideLoading = exports.showLoading = void 0;
                var omi_1 = __webpack_require__(/*! omi */ "omi");
                var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
                __webpack_require__(/*! @omiu/loading */ "./node_modules/@omiu/loading/src/index.esm.js");
                __webpack_require__(/*! @omiu/transition */ "./node_modules/@omiu/transition/src/index.esm.js");
                var Toast = /** @class */ (function (_super) {
                    __extends(Toast, _super);
                    function Toast() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Toast.prototype.installed = function () {
                        var _this = this;
                        if (this.props.autoHide) {
                            setTimeout(function () {
                                _this.hide();
                            }, this.props.duration + 200);
                            setTimeout(function () {
                                _this.parentNode.removeChild(_this);
                            }, this.props.duration + 200 * 2);
                        }
                    };
                    Toast.prototype.hide = function () {
                        var _this = this;
                        this.setAttribute('show', false);
                        setTimeout(function () {
                            _this.parentNode.removeChild(_this);
                        }, 200);
                    };
                    Toast.prototype.render = function (props) {
                        return omi_1.h("o-transition", { appear: props.show, name: "fade" },
                            omi_1.h("div", null,
                                omi_1.h("div", { class: "o-mask-transparent" }),
                                omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-toast')),
                                    omi_1.h("slot", null),
                                    props.loading && omi_1.h("o-loading", { size: 40, color: "white" }),
                                    props.success && omi_1.h("i", { class: "o-success" }),
                                    props.warning && omi_1.h("i", { class: "o-warning" }),
                                    omi_1.h("p", { class: "o-toast-content" }, props.content || (props.loading ? '加载中' : '')))));
                    };
                    Toast.css = css;
                    Toast.defaultProps = {
                        duration: 2000,
                        autoHide: false,
                        show: true,
                        content: ''
                    };
                    Toast.propTypes = {
                        content: String,
                        loading: Boolean,
                        success: Boolean,
                        warning: Boolean,
                        duration: Number,
                        autoHide: Boolean,
                        show: Boolean
                    };
                    Toast = __decorate([
                        omi_1.tag('o-toast')
                    ], Toast);
                    return Toast;
                }(omi_1.WeElement));
                exports.default = Toast;
                Toast.showLoading = showLoading;
                Toast.hideLoading = hideLoading;
                var el;
                function showLoading(content) {
                    remove();
                    el = document.createElement('o-toast');
                    el.setAttribute('show', '1');
                    el.setAttribute('loading', '1');
                    if (typeof content === 'string') {
                        el.setAttribute('content', content);
                    }
                    document.body.appendChild(el);
                    return el;
                }
                exports.showLoading = showLoading;
                function hideLoading() {
                    hide();
                }
                exports.hideLoading = hideLoading;
                function showSuccess(content) {
                    remove();
                    el = document.createElement('o-toast');
                    el.setAttribute('show', '1');
                    el.setAttribute('success', '1');
                    if (typeof content === 'string') {
                        el.setAttribute('content', content);
                    }
                    document.body.appendChild(el);
                    return el;
                }
                exports.showSuccess = showSuccess;
                function hideSuccess() {
                    hide();
                }
                exports.hideSuccess = hideSuccess;
                function showWarning(content) {
                    remove();
                    el = document.createElement('o-toast');
                    el.setAttribute('show', '1');
                    el.setAttribute('warning', '1');
                    if (typeof content === 'string') {
                        el.setAttribute('content', content);
                    }
                    document.body.appendChild(el);
                    return el;
                }
                exports.showWarning = showWarning;
                function hideWarning() {
                    hide();
                }
                exports.hideWarning = hideWarning;
                function hide() {
                    if (el) {
                        el.hide();
                        el = null;
                    }
                }
                function remove() {
                    if (el) {
                        el.parentNode.removeChild(el);
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
