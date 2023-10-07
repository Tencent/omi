(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("omi"));
    else if (typeof define === 'function' && define.amd)
        define(["omi"], factory);
    else if (typeof exports === 'object')
        exports["OTransition"] = factory(require("omi"));
    else
        root["OTransition"] = factory(root["Omi"]);
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

/***/ "./node_modules/_dready@0.0.1@dready/index.js":
/*!****************************************************!*\
  !*** ./node_modules/_dready@0.0.1@dready/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// if the module has no dependencies, the above pattern can be simplified to
                (function (root, factory) {
                    if (true) {
                        // AMD. Register as an anonymous module.
                        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else { }
                }(this, function () {

                    const readyCallbacks = []
                    document.addEventListener('DOMContentLoaded', () => {
                        domReady.done = true
                        readyCallbacks.forEach(callback => {
                            callback()
                        })
                    })

                    function domReady(callback) {
                        if (domReady.done) {
                            callback()
                            return
                        }
                        readyCallbacks.push(callback)
                    }

                    domReady.done = false


                    // Just return a value to define the module export.
                    // This example returns an object, but the module
                    // can return a function as the exported value.
                    return domReady
                }));


                /***/
}),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

                "use strict";

                /**
                 * o-transition element based on vue-transition
                 * Tom Fales (@enlightenmentor)
                 * Licensed under the MIT License
                 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
                 *
                 * modified by dntzhang
                 *
                 */
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
                //todo duration and delay support
                var omi_1 = __webpack_require__(/*! omi */ "omi");
                var _domReady = __webpack_require__(/*! dready */ "./node_modules/_dready@0.0.1@dready/index.js");
                // tslint:disable-next-line:no-duplicate-imports
                var dready_1 = __webpack_require__(/*! dready */ "./node_modules/_dready@0.0.1@dready/index.js");
                var domReady = dready_1.default || _domReady;
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
                    Transition.isLightDOM = true;
                    Transition.defaultProps = {
                        name: 'o',
                        delay: 0
                    };
                    Transition = __decorate([
                        omi_1.tag('o-transition')
                    ], Transition);
                    return Transition;
                }(omi_1.WeElement));
                exports.default = Transition;


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
