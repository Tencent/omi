(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("omi"));
  else if (typeof define === 'function' && define.amd)
    define(["omi"], factory);
  else if (typeof exports === 'object')
    exports["OMessage"] = factory(require("omi"));
  else
    root["OMessage"] = factory(root["Omi"]);
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
                el.classList.add(this.props.name + "-enter-active");
                this.callback = function () {
                  el.classList.remove(this.props.name + "-enter-active");
                  this.fire("after-enter");
                  this._show = true;
                  resolve();
                }.bind(this);
                this.once("transitionend", this.callback);
                this.once("animationend", this.callback);
                window.setTimeout(function () {
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
                el.classList.add(this.props.name + "-leave-active");
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
/***/ (function (module, exports) {

        throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: Node Sass does not yet support your current environment: OS X Unsupported architecture (arm64) with Unsupported runtime (93)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.14.1\n    at module.exports (/Users/dntzhang/Documents/git-code-oa/omi/components/message/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/dntzhang/Documents/git-code-oa/omi/components/message/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (node:internal/modules/cjs/helpers:102:18)\n    at getDefaultSassImpl (/Users/dntzhang/Documents/git-code-oa/omi/components/message/node_modules/sass-loader/dist/index.js:198:10)\n    at Object.loader (/Users/dntzhang/Documents/git-code-oa/omi/components/message/node_modules/sass-loader/dist/index.js:80:29)");

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
        var omi_1 = __webpack_require__(/*! omi */ "omi");
        var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
        __webpack_require__(/*! @omiu/transition */ "./node_modules/@omiu/transition/dist/index.es.js");
        var Message = /** @class */ (function (_super) {
          __extends(Message, _super);
          function Message() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onAfterLeave = function () {
              _this.parentElement.removeChild(_this);
            };
            return _this;
          }
          Message.prototype.render = function (props) {
            var _a;
            return (omi_1.h("o-transition", { appear: true, "onafter-leave": this.onAfterLeave, "leaving-time": props.duration, "auto-remove": true, name: "fade" },
              omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-message', (_a = {},
                _a['o-message--' + props.type] = props.type,
                _a['is-closable'] = props.closable,
                _a['is-center'] = props.center,
                _a)), { style: "top: 20px; z-index: 2000;" }),
                omi_1.h("p", { class: "o-message__content" }, props.message),
                props.showClose && omi_1.h("i", { class: "o-message__closeBtn o-icon-close" }))));
          };
          Message.css = css;
          Message.defaultProps = {
            duration: 3000
          };
          Message.propTypes = {
            showClose: Boolean,
            type: String,
            message: String,
            center: Boolean,
            duration: Number
          };
          Message = __decorate([
            omi_1.tag('o-message')
          ], Message);
          return Message;
        }(omi_1.WeElement));
        exports.default = Message;


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
