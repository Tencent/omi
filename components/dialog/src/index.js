(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("omi"));
  else if (typeof define === 'function' && define.amd)
    define(["omi"], factory);
  else if (typeof exports === 'object')
    exports["ODialog"] = factory(require("omi"));
  else
    root["ODialog"] = factory(root["Omi"]);
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

/***/ "./node_modules/@omiu/transition/dist/index.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@omiu/transition/dist/index.es.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return Transition; });
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "omi");
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omi__WEBPACK_IMPORTED_MODULE_0__);

        const readyCallbacks = [];
        document.addEventListener("DOMContentLoaded", () => {
          domReady.done = true;
          readyCallbacks.forEach((callback) => {
            callback();
          });
        });
        function domReady(callback) {
          if (domReady.done) {
            callback();
            return;
          }
          readyCallbacks.push(callback);
        }
        domReady.done = false;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __decorateClass = (decorators, target, key, kind) => {
          var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
          for (var i = decorators.length - 1, decorator; i >= 0; i--)
            if (decorator = decorators[i])
              result = (kind ? decorator(target, key, result) : decorator(result)) || result;
          if (kind && result)
            __defProp(target, key, result);
          return result;
        };
        let Transition = class extends omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"] {
          constructor() {
            super(...arguments);
            this._show = true;
          }
          installed() {
            domReady(() => {
              if (this.props.appear) {
                this.enter();
              }
              if (this.props.leavingTime) {
                setTimeout(() => {
                  this.leave();
                }, this.props.leavingTime);
              }
            });
          }
          receiveProps() {
            if (this.props.appear) {
              this.enter();
            }
            if (this.props.disappear) {
              this.leave();
            }
          }
          async toggle() {
            this._show = !this._show;
            if (this._show)
              return await this.enter();
            else
              return await this.leave();
          }
          async enter() {
            return new Promise((resolve) => {
              const el = this.children[0];
              if (el) {
                this.fire("before-enter");
                el.classList.remove(this.props.name + "-leave-active");
                el.classList.remove(this.props.name + "-leave-to");
                el.classList.add(this.props.name + "-enter-from");
                this.callback = function () {
                  el.classList.remove(this.props.name + "-enter-active");
                  this.fire("after-enter");
                  this._show = true;
                  resolve();
                }.bind(this);
                this.once("transitionend", this.callback);
                this.once("animationend", this.callback);
                window.setTimeout(function () {
                  el.classList.add(this.props.name + "-enter-active");
                  el.classList.remove(this.props.name + "-enter-from");
                  el.classList.add(this.props.name + "-enter-to");
                  this.fire("enter");
                }.bind(this), this.props.delay);
              }
            });
          }
          async leave() {
            return new Promise((resolve) => {
              const el = this.children[0];
              if (el) {
                this.fire("before-leave");
                el.classList.remove(this.props.name + "-enter-active");
                el.classList.remove(this.props.name + "-enter-to");
                el.classList.add(this.props.name + "-leave-from");
                this.callback = function (e) {
                  el.classList.remove(this.props.name + "-leave-active");
                  this.fire("after-leave");
                  this._show = false;
                  if (this.props.autoRemove && this.parentNode) {
                    this.parentNode.removeChild(this);
                  }
                  resolve();
                }.bind(this);
                this.once("transitionend", this.callback);
                this.once("animationend", this.callback);
                window.setTimeout(function () {
                  el.classList.add(this.props.name + "-leave-active");
                  el.classList.remove(this.props.name + "-leave-from");
                  el.classList.add(this.props.name + "-leave-to");
                  this.fire("leave");
                }.bind(this), this.props.delay);
              }
            });
          }
          once(name, callback) {
            const wrapCall = function () {
              this.removeEventListener(name, wrapCall);
              callback();
            }.bind(this);
            this.addEventListener(name, wrapCall);
          }
          render() {
            return;
          }
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
          name: "o",
          delay: 0
        };
        Transition = __decorateClass([
          Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])("o-transition")
        ], Transition);



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
        exports.push([module.i, ":host {\n  position: fixed;\n  z-index: 100000; }\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 100;\n  left: 0;\n  top: 0; }\n\n.o-dialog {\n  position: relative;\n  background: #FFF;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.o-dialog.is-fullscreen {\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 100%;\n  overflow: auto; }\n\n.o-dialog__wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  margin: 0; }\n\n.o-dialog__header {\n  padding: 20px 20px 10px; }\n\n.o-dialog__headerbtn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  background: 0 0;\n  border: none;\n  outline: 0;\n  cursor: pointer;\n  font-size: 16px; }\n\n.o-dialog__headerbtn .o-dialog__close {\n  color: #909399; }\n\n.o-dialog__headerbtn:focus .o-dialog__close,\n.o-dialog__headerbtn:hover .o-dialog__close {\n  color: #409EFF; }\n\n.o-dialog__title {\n  line-height: 24px;\n  font-size: 18px;\n  color: #303133; }\n\n.o-dialog__body {\n  padding: 30px 20px;\n  color: #606266;\n  font-size: 14px;\n  word-break: break-all; }\n\n.o-dialog__footer {\n  padding: 10px 20px 20px;\n  text-align: right;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-dialog--center {\n  text-align: center; }\n\n.o-dialog--center .o-dialog__body {\n  text-align: initial;\n  padding: 25px 25px 30px; }\n\n.o-dialog--center .o-dialog__footer {\n  text-align: inherit; }\n\n.dialog-zoom-enter-active {\n  -webkit-animation: dialog-zoom-in .3s;\n  animation: dialog-zoom-in .3s; }\n\n.dialog-zoom-leave-active {\n  -webkit-animation: dialog-zoom-out .3s;\n  animation: dialog-zoom-out .3s; }\n\n@-webkit-keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@-webkit-keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n@keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n.mask-enter-active {\n  -webkit-animation: mask-in .3s;\n  animation: mask-in .3s; }\n\n.mask-leave-active {\n  -webkit-animation: mask-out .3s;\n  animation: mask-out .3s; }\n\n@-webkit-keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.content {\n  z-index: 101; }\n", ""]);

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
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
          else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        var omi_1 = __webpack_require__(/*! omi */ "omi");
        var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
        __webpack_require__(/*! @omiu/transition */ "./node_modules/@omiu/transition/dist/index.es.js");
        var Dialog = /** @class */ (function (_super) {
          __extends(Dialog, _super);
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
