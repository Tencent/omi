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

/***/ "./node_modules/_@omiu_transition@0.0.11@@omiu/transition/src/index.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@omiu_transition@0.0.11@@omiu/transition/src/index.esm.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (global) {/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "./node_modules/_omi@6.19.20@omi/dist/omi.esm.js");
        /**
         * @omiu/transition v0.0.11 http://omijs.org
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
            return __awaiter(this, void 0, void 0, function () {
              var _this = this;
              return __generator(this, function (_a) {
                domReady(function () {
                  if (_this.props.appear) {
                    _this.enter();
                  }
                  else {
                    _this.children[0].style['transition-duration'] = '0s';
                    _this.leave();
                    setTimeout(function () {
                      _this.children[0].style['transition-duration'] = null;
                    }, 300);
                  }
                  if (_this.props.leavingTime) {
                    setTimeout(function () {
                      _this.leave();
                    }, _this.props.leavingTime);
                  }
                });
                return [2 /*return*/];
              });
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
      }.call(this, __webpack_require__(/*! ./../../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js")))

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/createPopper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/createPopper.js ***!
  \*******************************************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function () { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function () { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function () { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");














      var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
      var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
      var DEFAULT_OPTIONS = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
      };

      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return !args.some(function (element) {
          return !(element && typeof element.getBoundingClientRect === 'function');
        });
      }

      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }

        var _generatorOptions = generatorOptions,
          _generatorOptions$def = _generatorOptions.defaultModifiers,
          defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
          _generatorOptions$def2 = _generatorOptions.defaultOptions,
          defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper(reference, popper, options) {
          if (options === void 0) {
            options = defaultOptions;
          }

          var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference,
              popper: popper
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state: state,
            setOptions: function setOptions(options) {
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options);
              state.scrollParents = {
                reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
                popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
              }; // Orders the modifiers based on their dependencies and `phase`
              // properties

              var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

              state.orderedModifiers = orderedModifiers.filter(function (m) {
                return m.enabled;
              }); // Validate the provided modifiers so that the consumer will get warned
              // if one of the modifiers is invalid for any reason

              if (true) {
                var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
                  var name = _ref.name;
                  return name;
                });
                Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

                if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
                  var flipModifier = state.orderedModifiers.find(function (_ref2) {
                    var name = _ref2.name;
                    return name === 'flip';
                  });

                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
                  }
                }

                var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
                  marginTop = _getComputedStyle.marginTop,
                  marginRight = _getComputedStyle.marginRight,
                  marginBottom = _getComputedStyle.marginBottom,
                  marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer


                if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
                }
              }

              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }

              var _state$elements = state.elements,
                reference = _state$elements.reference,
                popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
              // anymore

              if (!areValidElements(reference, popper)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }

                return;
              } // Store the reference and popper rects to be read by modifiers


              state.rects = {
                reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
                popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
              }; // Modifiers have the ability to reset the current update cycle. The
              // most common use case for this is the `flip` modifier changing the
              // placement, which then needs to re-run all the modifiers, because the
              // logic was previously ran for the previous placement and is therefore
              // stale/incorrect

              state.reset = false;
              state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
              // is filled with the initial data specified by the modifier. This means
              // it doesn't persist and is fresh on each update.
              // To ensure persistent data, use `${name}#persistent`

              state.orderedModifiers.forEach(function (modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;

              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;

                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }

                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }

                var _state$orderedModifie = state.orderedModifiers[index],
                  fn = _state$orderedModifie.fn,
                  _state$orderedModifie2 = _state$orderedModifie.options,
                  _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                  name = _state$orderedModifie.name;

                if (typeof fn === 'function') {
                  state = fn({
                    state: state,
                    options: _options,
                    name: name,
                    instance: instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
              return new Promise(function (resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };

          if (!areValidElements(reference, popper)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }

            return instance;
          }

          instance.setOptions(options).then(function (state) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state);
            }
          }); // Modifiers have the ability to execute arbitrary code before the first
          // update cycle runs. They will be executed in the same order as the update
          // cycle. This is useful when a modifier adds some persistent data that
          // other modifiers need to use, but the modifier is run after the dependent
          // one.

          function runModifierEffects() {
            state.orderedModifiers.forEach(function (_ref3) {
              var name = _ref3.name,
                _ref3$options = _ref3.options,
                options = _ref3$options === void 0 ? {} : _ref3$options,
                effect = _ref3.effect;

              if (typeof effect === 'function') {
                var cleanupFn = effect({
                  state: state,
                  name: name,
                  instance: instance,
                  options: options
                });

                var noopFn = function noopFn() { };

                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }

          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function (fn) {
              return fn();
            });
            effectCleanupFns = [];
          }

          return instance;
        };
      }
      var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/contains.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/contains.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");

      function contains(parent, child) {
        var rootElement = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

        if (parent.contains(child)) {
          return true;
        } // then fallback to custom implementation with Shadow DOM support
        else if (rootElement && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootElement)) {
          var next = child;

          do {
            if (next && parent.isSameNode(next)) {
              return true;
            } // $FlowFixMe[prop-missing]: need a better way to handle this...


            next = next.parentNode || next.host;
          } while (next);
        } // Give up, the result is false


        return false;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getBoundingClientRect; });
      function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          x: rect.left,
          y: rect.top
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/math.js");















      function getInnerBoundingClientRect(element) {
        var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }

      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
      } // A "clipping parent" is an overflowable container with the characteristic of
      // clipping (or hiding) overflowing elements with a position different from
      // `initial`


      function getClippingParents(element) {
        var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
        var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
        var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

        if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
          return [];
        } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


        return clippingParents.filter(function (clippingParent) {
          return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
        });
      } // Gets the maximum area that the element is visible in due to any number of
      // clipping parents


      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
        var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents[0];
        var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.top, accRect.top);
          accRect.right = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.right, accRect.right);
          accRect.bottom = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.bottom, accRect.bottom);
          accRect.left = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isScrollParent.js");






      // Returns the composite rect of an element relative to its offsetParent.
      // Composite means it takes into account transforms as well as layout.

      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }

        var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
        var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
        var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };

        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
            Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
            scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
          }

          if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
            offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
          }
        }

        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");

      function getComputedStyle(element) {
        return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");

      function getDocumentElement(element) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
          element.document) || window.document).documentElement;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/math.js");




      // Gets the entire size of the scrollable document area, even extending outside
      // of the `<html>` and `<body>` rect bounds if horizontally scrollable

      function getDocumentRect(element) {
        var _element$ownerDocumen;

        var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
        var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
        var y = -winScroll.scrollTop;

        if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
          x += Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
        }

        return {
          width: width,
          height: height,
          x: x,
          y: y
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getHTMLElementScroll; });
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getLayoutRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
      // Returns the layout rect of an element relative to its offsetParent. Layout
      // means it doesn't take into account transforms.

      function getLayoutRect(element) {
        var clientRect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
        // Fixes https://github.com/popperjs/popper-core/issues/1223

        var width = element.offsetWidth;
        var height = element.offsetHeight;

        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }

        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }

        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width: width,
          height: height
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getNodeName; });
      function getNodeName(element) {
        return element ? (element.nodeName || '').toLowerCase() : null;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




      function getNodeScroll(node) {
        if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
          return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
        } else {
          return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
        }
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getParentNode.js");







      function getTrueOffsetParent(element) {
        if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
          Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
          return null;
        }

        return element.offsetParent;
      } // `.offsetParent` reports `null` for fixed elements, while absolute elements
      // return the containing block


      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
        var isIE = navigator.userAgent.indexOf('Trident') !== -1;

        if (isIE && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element)) {
          // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
          var elementCss = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

          if (elementCss.position === 'fixed') {
            return null;
          }
        }

        var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

        while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
          var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
          // create a containing block.
          // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

          if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }

        return null;
      } // Gets the closest ancestor positioned element. Handles some edge cases,
      // such as table ancestors and cross browser bugs.


      function getOffsetParent(element) {
        var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
        var offsetParent = getTrueOffsetParent(element);

        while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
          offsetParent = getTrueOffsetParent(offsetParent);
        }

        if (offsetParent && (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
          return window;
        }

        return offsetParent || getContainingBlock(element) || window;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getParentNode.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");



      function getParentNode(element) {
        if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
          return element;
        }

        return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || ( // DOM Element detected
            Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

        );
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");




      function getScrollParent(node) {
        if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
          // $FlowFixMe[incompatible-return]: assume body is always available
          return node.ownerDocument.body;
        }

        if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
          return node;
        }

        return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



      function getViewportRect(element) {
        var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
        var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
        // can be obscured underneath it.
        // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
        // if it isn't open, so if this isn't available, the popper will be detected
        // to overflow the bottom of the screen too early.

        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
          // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
          // errors due to floating point numbers, so we need to check precision.
          // Safari returns a number <= 0, usually < -1 when pinch-zoomed
          // Feature detection fails in mobile emulation mode in Chrome.
          // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
          // 0.001
          // Fallback here: "Not Safari" userAgent

          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }

        return {
          width: width,
          height: height,
          x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
          y: y
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getWindow; });
      function getWindow(node) {
        if (node == null) {
          return window;
        }

        if (node.toString() !== '[object Window]') {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }

        return node;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");

      function getWindowScroll(node) {
        var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindowScroll.js");



      function getWindowScrollBarX(element) {
        // If <html> has a CSS width greater than the viewport, then this will be
        // incorrect for RTL.
        // Popper 1 is broken in this case and never had a bug report so let's assume
        // it's not an issue. I don't think anyone ever specifies width on <html>
        // anyway.
        // Browsers where the left scrollbar doesn't cause an issue report `0` for
        // this (e.g. Edge 2019, IE11, Safari)
        return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \***************************************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function () { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function () { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function () { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");


      function isElement(node) {
        var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }

      function isHTMLElement(node) {
        var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }

      function isShadowRoot(node) {
        // IE 11 has no ShadowRoot
        if (typeof ShadowRoot === 'undefined') {
          return false;
        }

        var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }



      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js");

      function isScrollParent(element) {
        // Firefox wants us to check `-x` and `-y` variations as well
        var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
          overflow = _getComputedStyle.overflow,
          overflowX = _getComputedStyle.overflowX,
          overflowY = _getComputedStyle.overflowY;

        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js");

      function isTableElement(element) {
        return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/isScrollParent.js");




      /*
      given a DOM element, return the list of all scroll parents, up the list of ancesors
      until we get to the top window object. This list is what we attach scroll listeners
      to, because if any of these parent elements scroll, we'll need to re-calculate the
      reference element's position.
      */

      function listScrollParents(element, list) {
        var _element$ownerDocumen;

        if (list === void 0) {
          list = [];
        }

        var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js ***!
  \************************************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function () { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function () { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function () { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function () { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function () { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function () { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function () { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function () { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function () { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function () { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function () { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function () { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function () { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function () { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function () { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function () { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function () { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function () { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function () { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function () { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function () { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function () { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function () { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function () { return modifierPhases; });
      var top = 'top';
      var bottom = 'bottom';
      var right = 'right';
      var left = 'left';
      var auto = 'auto';
      var basePlacements = [top, bottom, right, left];
      var start = 'start';
      var end = 'end';
      var clippingParents = 'clippingParents';
      var viewport = 'viewport';
      var popper = 'popper';
      var reference = 'reference';
      var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []); // modifiers that need to read the DOM

      var beforeRead = 'beforeRead';
      var read = 'read';
      var afterRead = 'afterRead'; // pure-logic modifiers

      var beforeMain = 'beforeMain';
      var main = 'main';
      var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

      var beforeWrite = 'beforeWrite';
      var write = 'write';
      var afterWrite = 'afterWrite';
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/index.js ***!
  \************************************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow, popperGenerator, detectOverflow, createPopperBase, createPopper, createPopperLite */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function () { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function () { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function () { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function () { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function () { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function () { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


      // eslint-disable-next-line import/no-unused-modules

      // eslint-disable-next-line import/no-unused-modules

      // eslint-disable-next-line import/no-unused-modules



      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/applyStyles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/applyStyles.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");

      // This modifier takes the styles prepared by the `computeStyles` modifier
      // and applies them to the HTMLElements such as popper and arrow

      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function (name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name]; // arrow is optional + virtual elements

          if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
            return;
          } // Flow doesn't support to extend this property, but it's the most
          // effective way to apply styles to an HTMLElement
          // $FlowFixMe[cannot-write]


          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function (name) {
            var value = attributes[name];

            if (value === false) {
              element.removeAttribute(name);
            } else {
              element.setAttribute(name, value === true ? '' : value);
            }
          });
        });
      }

      function effect(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
          },
          arrow: {
            position: 'absolute'
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;

        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }

        return function () {
          Object.keys(state.elements).forEach(function (name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

            var style = styleProperties.reduce(function (style, property) {
              style[property] = '';
              return style;
            }, {}); // arrow is optional + virtual elements

            if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
              return;
            }

            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function (attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'applyStyles',
        enabled: true,
        phase: 'write',
        fn: applyStyles,
        effect: effect,
        requires: ['computeStyles']
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/arrow.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/arrow.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");









      // eslint-disable-next-line import/no-unused-modules

      var toPaddingObject = function toPaddingObject(padding, state) {
        padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]));
      };

      function arrow(_ref) {
        var _state$modifiersData$;

        var state = _ref.state,
          name = _ref.name,
          options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets = state.modifiersData.popperOffsets;
        var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
        var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
        var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
        var len = isVertical ? 'height' : 'width';

        if (!arrowElement || !popperOffsets) {
          return;
        }

        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
        var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
        var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
        var startDiff = popperOffsets[axis] - state.rects.reference[axis];
        var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
        var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
        // outside of the popper bounds

        var min = paddingObject[minProp];
        var max = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
      }

      function effect(_ref2) {
        var state = _ref2.state,
          options = _ref2.options;
        var _options$element = options.element,
          arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

        if (arrowElement == null) {
          return;
        } // CSS selector


        if (typeof arrowElement === 'string') {
          arrowElement = state.elements.popper.querySelector(arrowElement);

          if (!arrowElement) {
            return;
          }
        }

        if (true) {
          if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
          }
        }

        if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
          }

          return;
        }

        state.elements.arrow = arrowElement;
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'arrow',
        enabled: true,
        phase: 'main',
        fn: arrow,
        effect: effect,
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow']
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/computeStyles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/computeStyles.js ***!
  \******************************************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function () { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/math.js");






      // eslint-disable-next-line import/no-unused-modules

      var unsetSides = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
      }; // Round the offsets to the nearest suitable subpixel based on the DPR.
      // Zooming can change the DPR, but it seems to report a value that will
      // cleanly divide the values into the appropriate subpixels.

      function roundOffsetsByDPR(_ref) {
        var x = _ref.x,
          y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(x * dpr) / dpr) || 0,
          y: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(y * dpr) / dpr) || 0
        };
      }

      function mapToStyles(_ref2) {
        var _Object$assign2;

        var popper = _ref2.popper,
          popperRect = _ref2.popperRect,
          placement = _ref2.placement,
          offsets = _ref2.offsets,
          position = _ref2.position,
          gpuAcceleration = _ref2.gpuAcceleration,
          adaptive = _ref2.adaptive,
          roundOffsets = _ref2.roundOffsets;

        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
          _ref3$x = _ref3.x,
          x = _ref3$x === void 0 ? 0 : _ref3$x,
          _ref3$y = _ref3.y,
          y = _ref3$y === void 0 ? 0 : _ref3$y;

        var hasX = offsets.hasOwnProperty('x');
        var hasY = offsets.hasOwnProperty('y');
        var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
        var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
        var win = window;

        if (adaptive) {
          var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
          var heightProp = 'clientHeight';
          var widthProp = 'clientWidth';

          if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
            offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);

            if (Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static') {
              heightProp = 'scrollHeight';
              widthProp = 'scrollWidth';
            }
          } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


          offsetParent = offsetParent;

          if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
            sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; // $FlowFixMe[prop-missing]

            y -= offsetParent[heightProp] - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }

          if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
            sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; // $FlowFixMe[prop-missing]

            x -= offsetParent[widthProp] - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }

        var commonStyles = Object.assign({
          position: position
        }, adaptive && unsetSides);

        if (gpuAcceleration) {
          var _Object$assign;

          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }

        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
      }

      function computeStyles(_ref4) {
        var state = _ref4.state,
          options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration,
          gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
          _options$adaptive = options.adaptive,
          adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
          _options$roundOffsets = options.roundOffsets,
          roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

        if (true) {
          var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

          if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
          }
        }

        var commonStyles = {
          placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration: gpuAcceleration
        };

        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets
          })));
        }

        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: 'absolute',
            adaptive: false,
            roundOffsets: roundOffsets
          })));
        }

        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          'data-popper-placement': state.placement
        });
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'computeStyles',
        enabled: true,
        phase: 'beforeWrite',
        fn: computeStyles,
        data: {}
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/eventListeners.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getWindow.js");
      // eslint-disable-next-line import/no-unused-modules

      var passive = {
        passive: true
      };

      function effect(_ref) {
        var state = _ref.state,
          instance = _ref.instance,
          options = _ref.options;
        var _options$scroll = options.scroll,
          scroll = _options$scroll === void 0 ? true : _options$scroll,
          _options$resize = options.resize,
          resize = _options$resize === void 0 ? true : _options$resize;
        var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

        if (scroll) {
          scrollParents.forEach(function (scrollParent) {
            scrollParent.addEventListener('scroll', instance.update, passive);
          });
        }

        if (resize) {
          window.addEventListener('resize', instance.update, passive);
        }

        return function () {
          if (scroll) {
            scrollParents.forEach(function (scrollParent) {
              scrollParent.removeEventListener('scroll', instance.update, passive);
            });
          }

          if (resize) {
            window.removeEventListener('resize', instance.update, passive);
          }
        };
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'eventListeners',
        enabled: true,
        phase: 'write',
        fn: function fn() { },
        effect: effect,
        data: {}
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/flip.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/flip.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getVariation.js");






      // eslint-disable-next-line import/no-unused-modules

      function getExpandedFallbackPlacements(placement) {
        if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
          return [];
        }

        var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
        return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
      }

      function flip(_ref) {
        var state = _ref.state,
          options = _ref.options,
          name = _ref.name;

        if (state.modifiersData[name]._skip) {
          return;
        }

        var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
          specifiedFallbackPlacements = options.fallbackPlacements,
          padding = options.padding,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          _options$flipVariatio = options.flipVariations,
          flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
          allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
          return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
          }) : placement);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements[0];

        for (var i = 0; i < placements.length; i++) {
          var placement = placements[i];

          var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

          var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
          var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
          var len = isVertical ? 'width' : 'height';
          var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
          }

          var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
          var checks = [];

          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }

          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }

          if (checks.every(function (check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }

          checksMap.set(placement, checks);
        }

        if (makeFallbackChecks) {
          // `2` may be desired in some cases – research later
          var numberOfChecks = flipVariations ? 3 : 1;

          var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function (placement) {
              var checks = checksMap.get(placement);

              if (checks) {
                return checks.slice(0, _i).every(function (check) {
                  return check;
                });
              }
            });

            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };

          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);

            if (_ret === "break") break;
          }
        }

        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'flip',
        enabled: true,
        phase: 'main',
        fn: flip,
        requiresIfExists: ['offset'],
        data: {
          _skip: false
        }
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/hide.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/hide.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/detectOverflow.js");



      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }

        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }

      function isAnySideFullyClipped(overflow) {
        return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
          return overflow[side] >= 0;
        });
      }

      function hide(_ref) {
        var state = _ref.state,
          name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
          elementContext: 'reference'
        });
        var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets: referenceClippingOffsets,
          popperEscapeOffsets: popperEscapeOffsets,
          isReferenceHidden: isReferenceHidden,
          hasPopperEscaped: hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          'data-popper-reference-hidden': isReferenceHidden,
          'data-popper-escaped': hasPopperEscaped
        });
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'hide',
        enabled: true,
        phase: 'main',
        requiresIfExists: ['preventOverflow'],
        fn: hide
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/index.js ***!
  \**********************************************************************************/
/*! exports provided: applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function () { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function () { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function () { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function () { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function () { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function () { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function () { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function () { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function () { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/offset.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/offset.js ***!
  \***********************************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function () { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");


      function distanceAndSkiddingToXY(placement, rects, offset) {
        var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
        var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

        var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
          placement: placement
        })) : offset,
          skidding = _ref[0],
          distance = _ref[1];

        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }

      function offset(_ref2) {
        var state = _ref2.state,
          options = _ref2.options,
          name = _ref2.name;
        var _options$offset = options.offset,
          offset = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement],
          x = _data$state$placement.x,
          y = _data$state$placement.y;

        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }

        state.modifiersData[name] = data;
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'offset',
        enabled: true,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: offset
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/popperOffsets.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/computeOffsets.js");


      function popperOffsets(_ref) {
        var state = _ref.state,
          name = _ref.name;
        // Offsets are the actual position the popper needs to have to be
        // properly positioned near its reference element
        // This is the most basic placement, and will be adjusted by
        // the modifiers in the next step
        state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: 'absolute',
          placement: state.placement
        });
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'popperOffsets',
        enabled: true,
        phase: 'read',
        fn: popperOffsets,
        data: {}
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/preventOverflow.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/math.js");












      function preventOverflow(_ref) {
        var state = _ref.state,
          options = _ref.options,
          name = _ref.name;
        var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          padding = options.padding,
          _options$tether = options.tether,
          tether = _options$tether === void 0 ? true : _options$tether,
          _options$tetherOffset = options.tetherOffset,
          tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding,
          altBoundary: altBoundary
        });
        var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
        var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
        var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
        var popperOffsets = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var data = {
          x: 0,
          y: 0
        };

        if (!popperOffsets) {
          return;
        }

        if (checkMainAxis || checkAltAxis) {
          var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
          var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
          var len = mainAxis === 'y' ? 'height' : 'width';
          var offset = popperOffsets[mainAxis];
          var min = popperOffsets[mainAxis] + overflow[mainSide];
          var max = popperOffsets[mainAxis] - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
          var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
          // outside the reference bounds

          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
          // to include its full size in the calculation. If the reference is small
          // and near the edge of a boundary, the popper can overflow even if the
          // reference is not overflowing as well (e.g. virtual elements with no
          // width or height)

          var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
          var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
          var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

          if (checkMainAxis) {
            var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(min, tetherMin) : min, offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(max, tetherMax) : max);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
          }

          if (checkAltAxis) {
            var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

            var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

            var _offset = popperOffsets[altAxis];

            var _min = _offset + overflow[_mainSide];

            var _max = _offset - overflow[_altSide];

            var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(_min, tetherMin) : _min, _offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(_max, tetherMax) : _max);

            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
          }
        }

        state.modifiersData[name] = data;
      } // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
        name: 'preventOverflow',
        enabled: true,
        phase: 'main',
        fn: preventOverflow,
        requiresIfExists: ['offset']
      });

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/popper-lite.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/popper-lite.js ***!
  \******************************************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function () { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function () { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function () { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function () { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/applyStyles.js");





      var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
      var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
        defaultModifiers: defaultModifiers
      }); // eslint-disable-next-line import/no-unused-modules



      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/popper.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/popper.js ***!
  \*************************************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow, createPopperLite, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function () { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function () { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function () { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function () { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function () { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function () { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











      var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
      var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
        defaultModifiers: defaultModifiers
      }); // eslint-disable-next-line import/no-unused-modules

      // eslint-disable-next-line import/no-unused-modules

      // eslint-disable-next-line import/no-unused-modules



      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");




      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
          placement = _options.placement,
          boundary = _options.boundary,
          rootBoundary = _options.rootBoundary,
          padding = _options.padding,
          flipVariations = _options.flipVariations,
          _options$allowedAutoP = _options.allowedAutoPlacements,
          allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
        var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
        var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
          return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
        }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
        var allowedPlacements = placements.filter(function (placement) {
          return allowedAutoPlacements.indexOf(placement) >= 0;
        });

        if (allowedPlacements.length === 0) {
          allowedPlacements = placements;

          if (true) {
            console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
          }
        } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


        var overflows = allowedPlacements.reduce(function (acc, placement) {
          acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
          })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function (a, b) {
          return overflows[a] - overflows[b];
        });
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/computeOffsets.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/computeOffsets.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");




      function computeOffsets(_ref) {
        var reference = _ref.reference,
          element = _ref.element,
          placement = _ref.placement;
        var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
        var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
        var commonX = reference.x + reference.width / 2 - element.width / 2;
        var commonY = reference.y + reference.height / 2 - element.height / 2;
        var offsets;

        switch (basePlacement) {
          case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
            offsets = {
              x: commonX,
              y: reference.y - element.height
            };
            break;

          case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
            offsets = {
              x: commonX,
              y: reference.y + reference.height
            };
            break;

          case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
            offsets = {
              x: reference.x + reference.width,
              y: commonY
            };
            break;

          case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
            offsets = {
              x: reference.x - element.width,
              y: commonY
            };
            break;

          default:
            offsets = {
              x: reference.x,
              y: reference.y
            };
        }

        var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

        if (mainAxis != null) {
          var len = mainAxis === 'y' ? 'height' : 'width';

          switch (variation) {
            case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
              offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
              break;

            case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
              offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
              break;

            default:
          }
        }

        return offsets;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/debounce.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/debounce.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return debounce; });
      function debounce(fn) {
        var pending;
        return function () {
          if (!pending) {
            pending = new Promise(function (resolve) {
              Promise.resolve().then(function () {
                pending = undefined;
                resolve(fn());
              });
            });
          }

          return pending;
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/detectOverflow.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/detectOverflow.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/expandToHashMap.js");








      // eslint-disable-next-line import/no-unused-modules

      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
          _options$placement = _options.placement,
          placement = _options$placement === void 0 ? state.placement : _options$placement,
          _options$boundary = _options.boundary,
          boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
          _options$rootBoundary = _options.rootBoundary,
          rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
          _options$elementConte = _options.elementContext,
          elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
          _options$altBoundary = _options.altBoundary,
          altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
          _options$padding = _options.padding,
          padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
        var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
        var referenceElement = state.elements.reference;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
        var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
          reference: referenceClientRect,
          element: popperRect,
          strategy: 'absolute',
          placement: placement
        });
        var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
        var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
        // 0 or negative = within the clipping rect

        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

        if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
          var offset = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function (key) {
            var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
            var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
          });
        }

        return overflowOffsets;
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/expandToHashMap.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/expandToHashMap.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return expandToHashMap; });
      function expandToHashMap(value, keys) {
        return keys.reduce(function (hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/format.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/format.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return format; });
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return [].concat(args).reduce(function (p, c) {
          return p.replace(/%s/, c);
        }, str);
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getAltAxis.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getAltAxis.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getAltAxis; });
      function getAltAxis(axis) {
        return axis === 'x' ? 'y' : 'x';
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");

      function getBasePlacement(placement) {
        return placement.split('-')[0];
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getFreshSideObject; });
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getMainAxisFromPlacement; });
      function getMainAxisFromPlacement(placement) {
        return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getOppositePlacement.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getOppositePlacement; });
      var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function (matched) {
          return hash[matched];
        });
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getOppositeVariationPlacement; });
      var hash = {
        start: 'end',
        end: 'start'
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function (matched) {
          return hash[matched];
        });
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getVariation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getVariation.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getVariation; });
      function getVariation(placement) {
        return placement.split('-')[1];
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/math.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/math.js ***!
  \*****************************************************************************/
/*! exports provided: max, min, round */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function () { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function () { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function () { return round; });
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/mergeByName.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/mergeByName.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return mergeByName; });
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function (merged, current) {
          var existing = merged[current.name];
          merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged;
        }, {}); // IE11 does not support Object.values

        return Object.keys(merged).map(function (key) {
          return merged[key];
        });
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/getFreshSideObject.js");

      function mergePaddingObject(paddingObject) {
        return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/orderModifiers.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/orderModifiers.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");
      // source: https://stackoverflow.com/questions/49875255

      function order(modifiers) {
        var map = new Map();
        var visited = new Set();
        var result = [];
        modifiers.forEach(function (modifier) {
          map.set(modifier.name, modifier);
        }); // On visiting object, check for its dependencies and visit them recursively

        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function (dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);

              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }

        modifiers.forEach(function (modifier) {
          if (!visited.has(modifier.name)) {
            // check for visited object
            sort(modifier);
          }
        });
        return result;
      }

      function orderModifiers(modifiers) {
        // order based on dependencies
        var orderedModifiers = order(modifiers); // order based on phase

        return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
          return acc.concat(orderedModifiers.filter(function (modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/rectToClientRect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return rectToClientRect; });
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/uniqueBy.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/uniqueBy.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return uniqueBy; });
      function uniqueBy(arr, fn) {
        var identifiers = new Set();
        return arr.filter(function (item) {
          var identifier = fn(item);

          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/validateModifiers.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/validateModifiers.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/enums.js");


      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
      function validateModifiers(modifiers) {
        modifiers.forEach(function (modifier) {
          Object.keys(modifier).forEach(function (key) {
            switch (key) {
              case 'name':
                if (typeof modifier.name !== 'string') {
                  console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                }

                break;

              case 'enabled':
                if (typeof modifier.enabled !== 'boolean') {
                  console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                }

              case 'phase':
                if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
                  console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
                }

                break;

              case 'fn':
                if (typeof modifier.fn !== 'function') {
                  console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                }

                break;

              case 'effect':
                if (typeof modifier.effect !== 'function') {
                  console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                }

                break;

              case 'requires':
                if (!Array.isArray(modifier.requires)) {
                  console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                }

                break;

              case 'requiresIfExists':
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                }

                break;

              case 'options':
              case 'data':
                break;

              default:
                console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
                  return "\"" + s + "\"";
                }).join(', ') + "; but \"" + key + "\" was provided.");
            }

            modifier.requires && modifier.requires.forEach(function (requirement) {
              if (modifiers.find(function (mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }

      /***/
    }),

/***/ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/within.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/within.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return within; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/utils/math.js");

      function within(min, value, max) {
        return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["max"])(min, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["min"])(value, max));
      }

      /***/
    }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
      // imports


      // module
      exports.push([module.i, "/**\n * omiu tip css based on element ui css\n * Licensed under the MIT License\n * https://github.com/ElemeFE/element/blob/dev/LICENSE\n *\n * modified by dntzhang\n */\n:host {\n  display: inline-block; }\n\n.tip {\n  position: absolute;\n  background: #fff;\n  min-width: 150px;\n  border-radius: 4px;\n  border: 1px solid #ebeef5;\n  z-index: 2000;\n  color: #606266;\n  line-height: 1.4;\n  text-align: justify;\n  font-size: 14px;\n  word-break: break-all;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  width: 100%; }\n\n.tip .tip-arrow,\n.tip .tip-arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tip .tip-arrow {\n  border-width: 6px; }\n\n.tip .tip-arrow::after {\n  content: \" \";\n  border-width: 5px; }\n\n.tip[data-popper-placement^=top] {\n  margin-bottom: 12px; }\n\n.tip[data-popper-placement^=top] .tip-arrow {\n  bottom: -6px;\n  border-top-color: #ebeef5;\n  border-bottom-width: 0; }\n\n.tip[data-popper-placement^=top] .tip-arrow::after {\n  bottom: 1px;\n  margin-left: -5px;\n  border-top-color: #ebeef5;\n  border-bottom-width: 0; }\n\n.tip[data-popper-placement^=bottom] {\n  margin-top: 12px; }\n\n.tip[data-popper-placement^=bottom] .tip-arrow {\n  top: -6px;\n  border-top-width: 0;\n  border-bottom-color: #ebeef5; }\n\n.tip[data-popper-placement^=bottom] .tip-arrow::after {\n  top: 1px;\n  margin-left: -5px;\n  border-top-width: 0;\n  border-bottom-color: #ebeef5; }\n\n.tip[data-popper-placement^=right] {\n  margin-left: 12px; }\n\n.tip[data-popper-placement^=right] .tip-arrow {\n  left: -6px;\n  border-right-color: #ebeef5;\n  border-left-width: 0; }\n\n.tip[data-popper-placement^=right] .tip-arrow::after {\n  bottom: -5px;\n  left: 1px;\n  border-right-color: #ebeef5;\n  border-left-width: 0; }\n\n.tip[data-popper-placement^=left] {\n  margin-right: 12px; }\n\n.tip[data-popper-placement^=left] .tip-arrow {\n  right: -6px;\n  border-right-width: 0;\n  border-left-color: #ebeef5; }\n\n.tip[data-popper-placement^=left] .tip-arrow::after {\n  right: 1px;\n  bottom: -5px;\n  margin-left: -5px;\n  border-right-width: 0;\n  border-left-color: #ebeef5; }\n\n.tip.is-dark {\n  background: #ebeef5;\n  color: #FFF; }\n\n.tip.is-light {\n  background: #FFF; }\n\n.tip.is-light[data-popper-placement^=top] .tip-arrow {\n  border-top-color: #ebeef5; }\n\n.tip.is-light[data-popper-placement^=top] .tip-arrow::after {\n  border-top-color: #FFF; }\n\n.tip.is-light[data-popper-placement^=bottom] .tip-arrow {\n  border-bottom-color: #ebeef5; }\n\n.tip.is-light[data-popper-placement^=bottom] .tip-arrow::after {\n  border-bottom-color: #FFF; }\n\n.tip.is-light[data-popper-placement^=left] .tip-arrow {\n  border-left-color: #ebeef5; }\n\n.tip.is-light[data-popper-placement^=left] .tip-arrow::after {\n  border-left-color: #FFF; }\n\n.tip.is-light[data-popper-placement^=right] .tip-arrow {\n  border-right-color: #ebeef5; }\n\n.tip.is-light[data-popper-placement^=right] .tip-arrow::after {\n  border-right-color: #FFF; }\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n  margin-top: 8px !important; }\n\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1), margin-top 0.3s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1), margin-top 0.3s cubic-bezier(0.55, 0, 0.1, 1); }\n", ""]);

      // exports


      /***/
    }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
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

/***/ "./node_modules/_omi@6.19.20@omi/dist/omi.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/_omi@6.19.20@omi/dist/omi.esm.js ***!
  \*******************************************************/
/*! exports provided: default, tag, WeElement, Component, render, h, createElement, options, define, cloneElement, getHost, rpx, defineElement, classNames, extractClass, createRef, o, elements, $, extend, get, set, bind, unbind, JSONProxy */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONProxy", function () { return JSONPatcherProxy; });
        /**
         * Omi v6.19.20  http://omijs.org
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
          mapping: {},
          isMultiStore: false,
          //when set true, using props of hypescript, don't use getAttribute
          //if you render all the node tree by omi self, set it
          ignoreAttrs: false
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

        function getUse(data, paths, out, name) {
          var obj = [];
          paths.forEach(function (path, index) {
            var isPath = typeof path === 'string';
            if (isPath) {
              obj[index] = getTargetByPath(data, path);
            } else {
              var key = Object.keys(path)[0];
              var value = path[key];
              if (typeof value === 'string') {
                obj[index] = getTargetByPath(data, value);
              } else {
                var tempPath = value[0];
                if (typeof tempPath === 'string') {
                  var tempVal = getTargetByPath(data, tempPath);
                  obj[index] = value[1] ? value[1](tempVal) : tempVal;
                } else {
                  var args = [];
                  tempPath.forEach(function (path) {
                    args.push(getTargetByPath(data, path));
                  });
                  obj[index] = value[1].apply(null, args);
                }
              }
              obj[key] = obj[index];
            }
          });
          if (out) out[name] = obj;
          return obj;
        }

        function pathToArr(path) {
          if (typeof path !== 'string' || !path) return [];
          // return path.split(/\.|\[|\]/).filter(name => !!name)
          return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
        }

        function getTargetByPath(origin, path) {
          var arr = pathToArr(path);
          var current = origin;
          for (var i = 0, len = arr.length; i < len; i++) {
            current = current[arr[i]];
          }
          return current;
        }

        var hyphenateRE = /\B([A-Z])/g;
        function hyphenate(str) {
          return str.replace(hyphenateRE, '-$1').toLowerCase();
        }

        function getValByPath(path, current) {
          var arr = pathToArr(path);
          arr.forEach(function (prop) {
            current = current[prop];
          });
          return current;
        }

        function getPath(obj, out, name) {
          var result = {};
          obj.forEach(function (item) {
            if (typeof item === 'string') {
              result[item] = true;
            } else {
              var tempPath = item[Object.keys(item)[0]];
              if (typeof tempPath === 'string') {
                result[tempPath] = true;
              } else {
                if (typeof tempPath[0] === 'string') {
                  result[tempPath[0]] = true;
                } else {
                  tempPath[0].forEach(function (path) {
                    return result[path] = true;
                  });
                }
              }
            }
          });
          if (out) out[name] = result;
          return result;
        }

        function removeItem(item, arr) {
          if (!arr) return;
          for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
              arr.splice(i, 1);
              break;
            }
          }
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
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            var nameLower = name.toLowerCase();
            name = (nameLower in node ? nameLower : name).slice(2);
            if (value) {
              if (!old) {
                node.addEventListener(name, eventProxy$1, useCapture);
                if (name == 'tap') {
                  node.addEventListener('touchstart', touchStart, useCapture);
                  node.addEventListener('touchend', touchEnd, useCapture);
                }
              }
            } else {
              node.removeEventListener(name, eventProxy$1, useCapture);
              if (name == 'tap') {
                node.removeEventListener('touchstart', touchStart, useCapture);
                node.removeEventListener('touchend', touchEnd, useCapture);
              }
            }
            (node._listeners || (node._listeners = {}))[name] = value;
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

        function touchStart(e) {
          this.___touchX = e.touches[0].pageX;
          this.___touchY = e.touches[0].pageY;
          this.___scrollTop = document.body.scrollTop;
        }

        function touchEnd(e) {
          if (Math.abs(e.changedTouches[0].pageX - this.___touchX) < 30 && Math.abs(e.changedTouches[0].pageY - this.___touchY) < 30 && Math.abs(document.body.scrollTop - this.___scrollTop) < 30) {
            this.dispatchEvent(new CustomEvent('tap', { detail: e }));
          }
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
          //first render return undefined
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
              var styles = parent.querySelectorAll('style');
              styles.forEach(function (s) {
                parent.removeChild(s);
              });
              innerDiffNode(parent, vnode, hydrating, component, updateSelf);

              for (var i = styles.length - 1; i >= 0; i--) {
                parent.firstChild ? parent.insertBefore(styles[i], parent.firstChild) : parent.appendChild(style[i]);
              }
            } else {
              ret = [];
              vnode.forEach(function (item, index) {
                var ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
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
            var p = this.parentNode;
            while (p && !this.store) {
              this.store = p.store;
              p = p.parentNode || p.host;
            }

            this.attrsToProps();

            if (this.props.use) {
              this.use = this.props.use;
            }

            if (this.props.useSelf) {
              this.use = this.props.useSelf;
            }

            if (this.use) {
              var use = typeof this.use === 'function' ? this.use() : this.use;

              if (options.isMultiStore) {
                var _updatePath = {};
                var using = {};
                for (var storeName in use) {
                  _updatePath[storeName] = {};
                  using[storeName] = {};
                  getPath(use[storeName], _updatePath, storeName);
                  getUse(this.store[storeName].data, use[storeName], using, storeName);
                  this.store[storeName].instances.push(this);
                }
                this.using = using;
                this._updatePath = _updatePath;
              } else {
                this._updatePath = getPath(use);
                this.using = getUse(this.store.data, use);
                this.store.instances.push(this);
              }
            }
            if (this.useSelf) {
              var _use = typeof this.useSelf === 'function' ? this.useSelf() : this.useSelf;
              if (options.isMultiStore) {
                var _updatePath2 = {};
                var _using = {};
                for (var _storeName in _use) {
                  getPath(_use[_storeName], _updatePath2, _storeName);
                  getUse(this.store[_storeName].data, _use[_storeName], _using, _storeName);
                  this.store[_storeName].updateSelfInstances.push(this);
                }
                this.usingSelf = _using;
                this._updateSelfPath = _updatePath2;
              } else {
                this._updateSelfPath = getPath(_use);
                this.usingSelf = getUse(this.store.data, _use);
                this.store.updateSelfInstances.push(this);
              }
            }

            if (this.compute) {
              for (var key in this.compute) {
                this.computed[key] = this.compute[key].call(options.isMultiStore ? this.store : this.store.data);
              }
            }

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
              } else {
                shadowRoot.adoptedStyleSheets = [css];
              }
            }

            if (this.css) {
              shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
            }

            this.beforeRender();
            options.afterInstall && options.afterInstall(this);

            var rendered = this.render(this.props, this.store);

            this.rootElement = diff(null, rendered, null, this);
            this.rendered();

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
            if (this.store) {
              if (options.isMultiStore) {
                for (var key in this.store) {
                  var current = this.store[key];
                  removeItem(this, current.instances);
                  removeItem(this, current.updateSelfInstances);
                }
              } else {
                removeItem(this, this.store.instances);
                removeItem(this, this.store.updateSelfInstances);
              }
            }
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
            var _this2 = this;

            Object.keys(obj).forEach(function (key) {
              _this2.props[key] = obj[key];
              if (_this2.prevProps) {
                _this2.prevProps[key] = obj[key];
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
            if (options.ignoreAttrs || ignoreAttrs || this.store && this.store.ignoreAttrs) return;
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
            this.dispatchEvent(new CustomEvent(name, {
              detail: data
            }));
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

        /*!
         * https://github.com/Palindrom/JSONPatcherProxy
         * (c) 2017 Starcounter
         * MIT license
         */

        /** Class representing a JS Object observer  */
        var JSONPatcherProxy = function () {
          /**
           * Deep clones your object and returns a new object.
           */
          function deepClone(obj) {
            switch (typeof obj) {
              case 'object':
                return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
              case 'undefined':
                return null; //this is how JSON.stringify behaves for array items
              default:
                return obj; //no need to clone primitives
            }
          }
          JSONPatcherProxy.deepClone = deepClone;

          function escapePathComponent(str) {
            if (str.indexOf('/') == -1 && str.indexOf('~') == -1) return str;
            return str.replace(/~/g, '~0').replace(/\//g, '~1');
          }
          JSONPatcherProxy.escapePathComponent = escapePathComponent;

          /**
           * Walk up the parenthood tree to get the path
           * @param {JSONPatcherProxy} instance
           * @param {Object} obj the object you need to find its path
           */
          function findObjectPath(instance, obj) {
            var pathComponents = [];
            var parentAndPath = instance.parenthoodMap.get(obj);
            while (parentAndPath && parentAndPath.path) {
              // because we're walking up-tree, we need to use the array as a stack
              pathComponents.unshift(parentAndPath.path);
              parentAndPath = instance.parenthoodMap.get(parentAndPath.parent);
            }
            if (pathComponents.length) {
              var path = pathComponents.join('/');
              return '/' + path;
            }
            return '';
          }
          /**
           * A callback to be used as th proxy set trap callback.
           * It updates parenthood map if needed, proxifies nested newly-added objects, calls default callbacks with the changes occurred.
           * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
           * @param {Object} target the affected object
           * @param {String} key the effect property's name
           * @param {Any} newValue the value being set
           */
          function setTrap(instance, target, key, newValue) {
            var parentPath = findObjectPath(instance, target);

            var destinationPropKey = parentPath + '/' + escapePathComponent(key);

            if (instance.proxifiedObjectsMap.has(newValue)) {
              var newValueOriginalObject = instance.proxifiedObjectsMap.get(newValue);

              instance.parenthoodMap.set(newValueOriginalObject.originalObject, {
                parent: target,
                path: key
              });
            }
            /*
                mark already proxified values as inherited.
                rationale: proxy.arr.shift()
                will emit
                {op: replace, path: '/arr/1', value: arr_2}
                {op: remove, path: '/arr/2'}
                 by default, the second operation would revoke the proxy, and this renders arr revoked.
                That's why we need to remember the proxies that are inherited.
              */
            var revokableInstance = instance.proxifiedObjectsMap.get(newValue);
            /*
            Why do we need to check instance.isProxifyingTreeNow?
             We need to make sure we mark revokables as inherited ONLY when we're observing,
            because throughout the first proxification, a sub-object is proxified and then assigned to
            its parent object. This assignment of a pre-proxified object can fool us into thinking
            that it's a proxified object moved around, while in fact it's the first assignment ever.
             Checking isProxifyingTreeNow ensures this is not happening in the first proxification,
            but in fact is is a proxified object moved around the tree
            */
            if (revokableInstance && !instance.isProxifyingTreeNow) {
              revokableInstance.inherited = true;
            }

            // if the new value is an object, make sure to watch it
            if (newValue && typeof newValue == 'object' && !instance.proxifiedObjectsMap.has(newValue)) {
              instance.parenthoodMap.set(newValue, {
                parent: target,
                path: key
              });
              newValue = instance._proxifyObjectTreeRecursively(target, newValue, key);
            }
            // let's start with this operation, and may or may not update it later
            var operation = {
              op: 'remove',
              path: destinationPropKey
            };
            if (typeof newValue == 'undefined') {
              // applying De Morgan's laws would be a tad faster, but less readable
              if (!Array.isArray(target) && !target.hasOwnProperty(key)) {
                // `undefined` is being set to an already undefined value, keep silent
                return Reflect.set(target, key, newValue);
              }
              // when array element is set to `undefined`, should generate replace to `null`
              if (Array.isArray(target)) {
                operation.op = 'replace', operation.value = null;
              }
              var oldValue = instance.proxifiedObjectsMap.get(target[key]);
              // was the deleted a proxified object?
              if (oldValue) {
                instance.parenthoodMap.delete(target[key]);
                instance.disableTrapsForProxy(oldValue);
                instance.proxifiedObjectsMap.delete(oldValue);
              }
            } else {
              if (Array.isArray(target) && !Number.isInteger(+key.toString())) {
                /* array props (as opposed to indices) don't emit any patches, to avoid needless `length` patches */
                if (key != 'length') {
                  console.warn('JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch');
                }
                return Reflect.set(target, key, newValue);
              }
              operation.op = 'add';
              if (target.hasOwnProperty(key)) {
                if (typeof target[key] !== 'undefined' || Array.isArray(target)) {
                  operation.op = 'replace'; // setting `undefined` array elements is a `replace` op
                }
              }
              operation.value = newValue;
            }
            operation.oldValue = target[key];
            var reflectionResult = Reflect.set(target, key, newValue);
            instance.defaultCallback(operation);
            return reflectionResult;
          }
          /**
           * A callback to be used as th proxy delete trap callback.
           * It updates parenthood map if needed, calls default callbacks with the changes occurred.
           * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
           * @param {Object} target the effected object
           * @param {String} key the effected property's name
           */
          function deleteTrap(instance, target, key) {
            if (typeof target[key] !== 'undefined') {
              var parentPath = findObjectPath(instance, target);
              var destinationPropKey = parentPath + '/' + escapePathComponent(key);

              var revokableProxyInstance = instance.proxifiedObjectsMap.get(target[key]);

              if (revokableProxyInstance) {
                if (revokableProxyInstance.inherited) {
                  /*
                    this is an inherited proxy (an already proxified object that was moved around),
                    we shouldn't revoke it, because even though it was removed from path1, it is still used in path2.
                    And we know that because we mark moved proxies with `inherited` flag when we move them
                     it is a good idea to remove this flag if we come across it here, in deleteProperty trap.
                    We DO want to revoke the proxy if it was removed again.
                  */
                  revokableProxyInstance.inherited = false;
                } else {
                  instance.parenthoodMap.delete(revokableProxyInstance.originalObject);
                  instance.disableTrapsForProxy(revokableProxyInstance);
                  instance.proxifiedObjectsMap.delete(target[key]);
                }
              }
              var reflectionResult = Reflect.deleteProperty(target, key);

              instance.defaultCallback({
                op: 'remove',
                path: destinationPropKey
              });

              return reflectionResult;
            }
          }
          /* pre-define resume and pause functions to enhance constructors performance */
          function resume() {
            var _this = this;

            this.defaultCallback = function (operation) {
              _this.isRecording && _this.patches.push(operation);
              _this.userCallback && _this.userCallback(operation);
            };
            this.isObserving = true;
          }
          function pause() {
            this.defaultCallback = function () { };
            this.isObserving = false;
          }
          /**
           * Creates an instance of JSONPatcherProxy around your object of interest `root`.
           * @param {Object|Array} root - the object you want to wrap
           * @param {Boolean} [showDetachedWarning = true] - whether to log a warning when a detached sub-object is modified @see {@link https://github.com/Palindrom/JSONPatcherProxy#detached-objects}
           * @returns {JSONPatcherProxy}
           * @constructor
           */
          function JSONPatcherProxy(root, showDetachedWarning) {
            this.isProxifyingTreeNow = false;
            this.isObserving = false;
            this.proxifiedObjectsMap = new Map();
            this.parenthoodMap = new Map();
            // default to true
            if (typeof showDetachedWarning !== 'boolean') {
              showDetachedWarning = true;
            }

            this.showDetachedWarning = showDetachedWarning;
            this.originalObject = root;
            this.cachedProxy = null;
            this.isRecording = false;
            this.userCallback;
            /**
             * @memberof JSONPatcherProxy
             * Restores callback back to the original one provided to `observe`.
             */
            this.resume = resume.bind(this);
            /**
             * @memberof JSONPatcherProxy
             * Replaces your callback with a noop function.
             */
            this.pause = pause.bind(this);
          }

          JSONPatcherProxy.prototype.generateProxyAtPath = function (parent, obj, path) {
            var _this2 = this;

            if (!obj) {
              return obj;
            }
            var traps = {
              set: function set(target, key, value, receiver) {
                return setTrap(_this2, target, key, value, receiver);
              },
              deleteProperty: function deleteProperty(target, key) {
                return deleteTrap(_this2, target, key);
              }
            };
            var revocableInstance = Proxy.revocable(obj, traps);
            // cache traps object to disable them later.
            revocableInstance.trapsInstance = traps;
            revocableInstance.originalObject = obj;

            /* keeping track of object's parent and path */

            this.parenthoodMap.set(obj, { parent: parent, path: path });

            /* keeping track of all the proxies to be able to revoke them later */
            this.proxifiedObjectsMap.set(revocableInstance.proxy, revocableInstance);
            return revocableInstance.proxy;
          };
          // grab tree's leaves one by one, encapsulate them into a proxy and return
          JSONPatcherProxy.prototype._proxifyObjectTreeRecursively = function (parent, root, path) {
            for (var key in root) {
              if (root.hasOwnProperty(key)) {
                if (root[key] instanceof Object) {
                  root[key] = this._proxifyObjectTreeRecursively(root, root[key], escapePathComponent(key));
                }
              }
            }
            return this.generateProxyAtPath(parent, root, path);
          };
          // this function is for aesthetic purposes
          JSONPatcherProxy.prototype.proxifyObjectTree = function (root) {
            /*
            while proxyifying object tree,
            the proxyifying operation itself is being
            recorded, which in an unwanted behavior,
            that's why we disable recording through this
            initial process;
            */
            this.pause();
            this.isProxifyingTreeNow = true;
            var proxifiedObject = this._proxifyObjectTreeRecursively(undefined, root, '');
            /* OK you can record now */
            this.isProxifyingTreeNow = false;
            this.resume();
            return proxifiedObject;
          };
          /**
           * Turns a proxified object into a forward-proxy object; doesn't emit any patches anymore, like a normal object
           * @param {Proxy} proxy - The target proxy object
           */
          JSONPatcherProxy.prototype.disableTrapsForProxy = function (revokableProxyInstance) {
            if (this.showDetachedWarning) {
              var message = "You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";

              revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
                console.warn(message);
                return Reflect.set(targetObject, propKey, newValue);
              };
              revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
                console.warn(message);
                return Reflect.set(targetObject, propKey, newValue);
              };
              revokableProxyInstance.trapsInstance.deleteProperty = function (targetObject, propKey) {
                return Reflect.deleteProperty(targetObject, propKey);
              };
            } else {
              delete revokableProxyInstance.trapsInstance.set;
              delete revokableProxyInstance.trapsInstance.get;
              delete revokableProxyInstance.trapsInstance.deleteProperty;
            }
          };
          /**
           * Proxifies the object that was passed in the constructor and returns a proxified mirror of it. Even though both parameters are options. You need to pass at least one of them.
           * @param {Boolean} [record] - whether to record object changes to a later-retrievable patches array.
           * @param {Function} [callback] - this will be synchronously called with every object change with a single `patch` as the only parameter.
           */
          JSONPatcherProxy.prototype.observe = function (record, callback) {
            if (!record && !callback) {
              throw new Error('You need to either record changes or pass a callback');
            }
            this.isRecording = record;
            this.userCallback = callback;
            /*
            I moved it here to remove it from `unobserve`,
            this will also make the constructor faster, why initiate
            the array before they decide to actually observe with recording?
            They might need to use only a callback.
            */
            if (record) this.patches = [];
            this.cachedProxy = this.proxifyObjectTree(this.originalObject);
            return this.cachedProxy;
          };
          /**
           * If the observed is set to record, it will synchronously return all the patches and empties patches array.
           */
          JSONPatcherProxy.prototype.generate = function () {
            if (!this.isRecording) {
              throw new Error('You should set record to true to get patches later');
            }
            return this.patches.splice(0, this.patches.length);
          };
          /**
           * Revokes all proxies rendering the observed object useless and good for garbage collection @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable}
           */
          JSONPatcherProxy.prototype.revoke = function () {
            this.proxifiedObjectsMap.forEach(function (el) {
              el.revoke();
            });
          };
          /**
           * Disables all proxies' traps, turning the observed object into a forward-proxy object, like a normal object that you can modify silently.
           */
          JSONPatcherProxy.prototype.disableTraps = function () {
            this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy, this);
          };
          return JSONPatcherProxy;
        }();

        function render(vnode, parent, store) {
          parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
          if (store) {
            if (store.data) {
              observeStore(store);
            }
            // else {
            //   //Multi-store injection
            //   for (let key in store) {
            //     if (key !== 'ignoreAttrs') {
            //       options.isMultiStore = true
            //       observeStore(store[key], key)
            //     }
            //   }
            // }
            parent.store = store;
          }
          return diff(null, vnode, parent, false);
        }

        function observeStore(store, key) {
          store.instances = [];
          store.updateSelfInstances = [];
          extendStoreUpdate(store, key);

          store.data = new JSONPatcherProxy(store.data).observe(false, function (patch) {
            var patchs = {};
            if (patch.op === 'remove') {
              // fix arr splice
              var kv = getArrayPatch(patch.path, store);
              patchs[kv.k] = kv.v;

              update(patchs, store);
            } else {
              var key = fixPath(patch.path);
              patchs[key] = patch.value;

              update(patchs, store);
            }
          });
        }

        function update(patch, store) {
          store.update(patch);
        }

        function extendStoreUpdate(store, key) {
          store.update = function (patch) {
            if (Object.keys(patch).length > 0) {
              this.instances.forEach(function (instance) {
                compute(instance, key);
                if (key) {
                  if (instance._updatePath && instance._updatePath[key] && needUpdate(patch, instance._updatePath[key])) {
                    if (instance.use) {
                      getUse(store.data, (typeof instance.use === 'function' ? instance.use() : instance.use)[key], instance.using, key);
                    }

                    instance.update();
                  }
                } else {
                  if (instance._updatePath && needUpdate(patch, instance._updatePath)) {
                    if (instance.use) {
                      instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use);
                    }

                    instance.update();
                  }
                }
              });

              this.updateSelfInstances.forEach(function (instance) {
                compute(instance, key);
                if (key) {
                  if (instance._updateSelfPath && instance._updateSelfPath[key] && needUpdate(patch, instance._updateSelfPath[key])) {
                    if (instance.useSelf) {
                      getUse(store.data, (typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf)[key], instance.usingSelf, key);
                    }

                    instance.updateSelf();
                  }
                } else {
                  if (instance._updateSelfPath && needUpdate(patch, instance._updateSelfPath)) {
                    instance.usingSelf = getUse(store.data, typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf);
                    instance.updateSelf();
                  }
                }
              });
              this.onChange && this.onChange(patch);
            }
          };
        }

        function compute(instance, isMultiStore) {
          if (instance.compute) {
            for (var ck in instance.compute) {
              instance.computed[ck] = instance.compute[ck].call(isMultiStore ? instance.store : instance.store.data);
            }
          }
        }

        function needUpdate(diffResult, updatePath) {
          for (var keyA in diffResult) {
            if (updatePath[keyA]) {
              return true;
            }
            for (var keyB in updatePath) {
              if (includePath(keyA, keyB)) {
                return true;
              }
            }
          }
          return false;
        }

        function includePath(pathA, pathB) {
          if (pathA.indexOf(pathB) === 0) {
            var next = pathA.substr(pathB.length, 1);
            if (next === '[' || next === '.') {
              return true;
            }
          }
          return false;
        }

        function fixPath(path) {
          var mpPath = '';
          var arr = path.replace('/', '').split('/');
          arr.forEach(function (item, index) {
            if (index) {
              if (isNaN(Number(item))) {
                mpPath += '.' + item;
              } else {
                mpPath += '[' + item + ']';
              }
            } else {
              mpPath += item;
            }
          });
          return mpPath;
        }

        function getArrayPatch(path, store) {
          var arr = path.replace('/', '').split('/');
          var current = store.data[arr[0]];
          for (var i = 1, len = arr.length; i < len - 1; i++) {
            current = current[arr[i]];
          }
          return {
            k: fixArrPath(path),
            v: current
          };
        }

        function fixArrPath(path) {
          var mpPath = '';
          var arr = path.replace('/', '').split('/');
          var len = arr.length;
          arr.forEach(function (item, index) {
            if (index < len - 1) {
              if (index) {
                if (isNaN(Number(item))) {
                  mpPath += '.' + item;
                } else {
                  mpPath += '[' + item + ']';
                }
              } else {
                mpPath += item;
              }
            }
          });
          return mpPath;
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

        function rpx(str) {
          return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
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

          if ('adoptedStyleSheets' in document) { return; }

          var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
          var bootstrapper = document.implementation.createHTMLDocument('boot');
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
          function clearRules(sheet) {
            for (var i = 0; i < sheet.cssRules.length; i++) {
              sheet.deleteRule(0);
            }
          }
          function insertAllRules(from, to) {
            forEach.call(from.cssRules, function (rule, i) {
              to.insertRule(rule.cssText, i);
            });
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
            'addImport',
            'addPageRule',
            'addRule',
            'deleteRule',
            'insertRule',
            'removeImport',
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
              ? proto$2.isPrototypeOf(instance) ||
              nonConstructedProto.isPrototypeOf(instance)
              : false;
          }
          function isNonConstructedStyleSheetInstance(instance) {
            return typeof instance === 'object'
              ? nonConstructedProto.isPrototypeOf(instance)
              : false;
          }
          var $basicStyleSheet = new WeakMap();
          var $locations = new WeakMap();
          var $adoptersByLocation = new WeakMap();
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
              clearRules(adopter.sheet);
              insertAllRules($basicStyleSheet.get(sheet), adopter.sheet);
            });
          }
          function checkInvocationCorrectness(self) {
            if (!$basicStyleSheet.has(self)) {
              throw new TypeError('Illegal invocation');
            }
          }
          function ConstructedStyleSheet() {
            var self = this;
            var style = document.createElement('style');
            bootstrapper.body.appendChild(style);
            $basicStyleSheet.set(self, style.sheet);
            $locations.set(self, []);
            $adoptersByLocation.set(self, new WeakMap());
          }
          var proto$2 = ConstructedStyleSheet.prototype;
          proto$2.replace = function replace(contents) {
            try {
              this.replaceSync(contents);
              return Promise.resolve(this);
            }
            catch (e) {
              return Promise.reject(e);
            }
          };
          proto$2.replaceSync = function replaceSync(contents) {
            checkInvocationCorrectness(this);
            if (typeof contents === 'string') {
              var self_1 = this;
              var style = $basicStyleSheet.get(self_1).ownerNode;
              style.textContent = rejectImports(contents);
              $basicStyleSheet.set(self_1, style.sheet);
              $locations.get(self_1).forEach(function (location) {
                if (location.isConnected()) {
                  restyleAdopter(self_1, getAdopterByLocation(self_1, location));
                }
              });
            }
          };
          defineProperty(proto$2, 'cssRules', {
            configurable: true,
            enumerable: true,
            get: function cssRules() {
              checkInvocationCorrectness(this);
              return $basicStyleSheet.get(this).cssRules;
            },
          });
          cssStyleSheetMethods.forEach(function (method) {
            proto$2[method] = function () {
              var self = this;
              checkInvocationCorrectness(self);
              var args = arguments;
              var basic = $basicStyleSheet.get(self);
              var locations = $locations.get(self);
              var result = basic[method].apply(basic, args);
              locations.forEach(function (location) {
                if (location.isConnected()) {
                  var sheet = getAdopterByLocation(self, location).sheet;
                  sheet[method].apply(sheet, args);
                }
              });
              return result;
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
          var proto$1 = Location.prototype;
          proto$1.isConnected = function isConnected() {
            var element = $element.get(this);
            return element instanceof Document
              ? element.readyState !== 'loading'
              : isElementConnected(element.host);
          };
          proto$1.connect = function connect() {
            var container = getAdopterContainer(this);
            $observer.get(this).observe(container, defaultObserverOptions);
            if ($uniqueSheets.get(this).length > 0) {
              adopt(this);
            }
            traverseWebComponents(container, function (root) {
              getAssociatedLocation(root).connect();
            });
          };
          proto$1.disconnect = function disconnect() {
            $observer.get(this).disconnect();
          };
          proto$1.update = function update(sheets) {
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
          unbind: unbind,
          JSONProxy: JSONPatcherProxy
        };

        options.root.Omi = omi;
        options.root.omi = omi;
        options.root.Omi.version = '6.19.20';

/* harmony default export */ __webpack_exports__["default"] = (omi);

        //# sourceMappingURL=omi.esm.js.map

        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js")))

      /***/
    }),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js":
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
      var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.19.20@omi/dist/omi.esm.js");
      __webpack_require__(/*! ./index.tsx */ "./src/index.tsx");
      var Table = /** @class */ (function (_super) {
        __extends(Table, _super);
        function Table() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Table.prototype.render = function (props) {
          return omi_1.h("div", null,
            omi_1.h("o-popover", { style: "margin-left:110px;margin-top:100px;", trigger: "hover", position: "left" },
              omi_1.h("div", null, " \u63D0\u793A\uFF01\uFF01"),
              omi_1.h("div", { slot: "popover", tip: "popover" },
                omi_1.h("ul", null,
                  omi_1.h("li", null, "abc"),
                  omi_1.h("li", null, "efg")))),
            omi_1.h("br", null),
            omi_1.h("o-popover", { style: "margin-left:10px;margin-top:100px;", position: "left" },
              omi_1.h("div", null, "popover\u81EA\u52A8\u5230\u53F3\u8FB9\u53BB"),
              omi_1.h("div", { slot: "popover", tip: "popover" },
                omi_1.h("ul", null,
                  omi_1.h("li", null, "abc"),
                  omi_1.h("li", null, "efg")))));
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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {


      var result = __webpack_require__(/*! !../node_modules/_css-loader@1.0.1@css-loader!../node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss");

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
      var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.19.20@omi/dist/omi.esm.js");
      var core_1 = __webpack_require__(/*! @popperjs/core */ "./node_modules/_@popperjs_core@2.9.2@@popperjs/core/lib/index.js");
      __webpack_require__(/*! @omiu/transition */ "./node_modules/_@omiu_transition@0.0.11@@omiu/transition/src/index.esm.js");
      var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
      var Popover = /** @class */ (function (_super) {
        __extends(Popover, _super);
        function Popover() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.onEnter = function (evt) {
            clearTimeout(_this.timeout);
            _this.isShow = !_this.isShow;
            _this.update();
            //html 模式过滤文本
            var tip = _this.shadowRoot.querySelector('slot').assignedNodes().find(function (node) { return node.nodeType !== 3; });
            core_1.createPopper(tip, _this.shadowRoot.querySelector('.tip'), {
              placement: _this.props.position,
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 8],
                  },
                },
              ],
            });
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
        Popover.prototype.installed = function () {
          var _this = this;
          window.addEventListener('click', function () {
            _this.isShow = false;
            _this.update();
          });
        };
        Popover.prototype.render = function (props) {
          var _a;
          var targetEvents = {
            onMouseEnter: null,
            onMouseLeave: null,
            onClick: null
          };
          if (props.trigger === 'click') {
            targetEvents.onClick = this.onEnter;
          }
          else {
            targetEvents.onMouseEnter = this.onEnter;
            targetEvents.onMouseLeave = this.onLeave;
          }
          return omi_1.h("div", { style: "position:relative" },
            omi_1.h("slot", __assign({}, targetEvents)),
            omi_1.h("o-transition", { appear: this.isShow, name: "fade" },
              omi_1.h("div", {
                style: { display: this.isInstalled ? 'block' : 'none' }, class: omi_1.classNames((_a = {
                  tip: true
                },
                  _a["is-" + props.effect] = props.effect,
                  _a))
              },
                omi_1.h("slot", { onMouseEnter: this.onEnterPopover, onMouseLeave: this.onLeavePopover, name: "popover" }),
                omi_1.h("i", { class: "tip-arrow", "data-popper-arrow": true }))));
        };
        Popover.css = css;
        Popover.defaultProps = {
          effect: 'light',
          position: 'bottom',
          trigger: 'click'
        };
        Popover.propTypes = {
          content: String,
          effect: String,
          position: String,
          trigger: String
        };
        Popover = __decorate([
          omi_1.tag('o-popover')
        ], Popover);
        return Popover;
      }(omi_1.WeElement));
      exports.default = Popover;


      /***/
    })

  /******/
});
//# sourceMappingURL=demo.js.map
