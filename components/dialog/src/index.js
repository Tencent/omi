(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["ODialog"] = factory(require("omi"));
	else
		root["ODialog"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@omiu/transition/src/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@omiu/transition/src/index.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transition; });
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);
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

var extendStatics = function(d, b) {
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
    Transition.isLightDom = true;
    Transition.defaultProps = {
        name: 'o',
        delay: 0
    };
    Transition = __decorate([
        Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-transition')
    ], Transition);
    return Transition;
}(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));


//# sourceMappingURL=index.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 100;\n  left: 0;\n  top: 0; }\n\n.o-dialog {\n  position: relative;\n  background: #FFF;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.o-dialog.is-fullscreen {\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 100%;\n  overflow: auto; }\n\n.o-dialog__wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  margin: 0; }\n\n.o-dialog__header {\n  padding: 20px 20px 10px; }\n\n.o-dialog__headerbtn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  background: 0 0;\n  border: none;\n  outline: 0;\n  cursor: pointer;\n  font-size: 16px; }\n\n.o-dialog__headerbtn .o-dialog__close {\n  color: #909399; }\n\n.o-dialog__headerbtn:focus .o-dialog__close,\n.o-dialog__headerbtn:hover .o-dialog__close {\n  color: #409EFF; }\n\n.o-dialog__title {\n  line-height: 24px;\n  font-size: 18px;\n  color: #303133; }\n\n.o-dialog__body {\n  padding: 30px 20px;\n  color: #606266;\n  font-size: 14px;\n  word-break: break-all; }\n\n.o-dialog__footer {\n  padding: 10px 20px 20px;\n  text-align: right;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-dialog--center {\n  text-align: center; }\n\n.o-dialog--center .o-dialog__body {\n  text-align: initial;\n  padding: 25px 25px 30px; }\n\n.o-dialog--center .o-dialog__footer {\n  text-align: inherit; }\n\n.dialog-zoom-enter-active {\n  -webkit-animation: dialog-zoom-in .3s;\n  animation: dialog-zoom-in .3s; }\n\n.dialog-zoom-leave-active {\n  -webkit-animation: dialog-zoom-out .3s;\n  animation: dialog-zoom-out .3s; }\n\n@-webkit-keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@-webkit-keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n@keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n.mask-enter-active {\n  -webkit-animation: mask-in .3s;\n  animation: mask-in .3s; }\n\n.mask-leave-active {\n  -webkit-animation: mask-out .3s;\n  animation: mask-out .3s; }\n\n@-webkit-keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.content {\n  z-index: 101; }\n", ""]);

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
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


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
__webpack_require__(/*! @omiu/transition */ "./node_modules/@omiu/transition/src/index.esm.js");
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMaskClick = function () {
            _this.fire('mask-click');
        };
        _this.close = function () {
            _this.rootNode.childNodes[0].leave();
            _this.rootNode.childNodes[1].leave();
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
        this.rootNode.childNodes[0].enter();
        this.rootNode.childNodes[1].enter();
        this.fire('open');
    };
    Dialog.prototype.render = function (props) {
        return (props.visible && omi_1.h("div", { class: "o-dialog__wrapper" },
            omi_1.h("o-transition", { "onafter-leave": this.onAfterLeave, appear: true, name: "dialog-zoom" },
                omi_1.h("div", { class: "o-dialog__wrapper content" },
                    omi_1.h("div", { role: "dialog", "aria-modal": "true", "aria-label": props.title, class: "o-dialog", style: { width: props.width } },
                        omi_1.h("div", { class: "o-dialog__header" },
                            omi_1.h("span", { class: "o-dialog__title" }, props.title),
                            omi_1.h("button", { type: "button", "aria-label": "Close", class: "o-dialog__headerbtn" },
                                omi_1.h("svg", { onClick: this.close, class: "o-dialog__close o-icon o-icon-close", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                    omi_1.h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))),
                        omi_1.h("div", { class: "o-dialog__body" },
                            omi_1.h("slot", null)),
                        omi_1.h("div", { class: "o-dialog__footer" },
                            omi_1.h("slot", { name: "footer" }))))),
            omi_1.h("o-transition", { appear: true, name: "mask" },
                omi_1.h("div", { class: "mask", onClick: this.handleMaskClick }))));
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
    Dialog = __decorate([
        omi_1.tag('o-dialog')
    ], Dialog);
    return Dialog;
}(omi_1.WeElement));
exports.default = Dialog;


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