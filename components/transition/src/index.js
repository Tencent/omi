(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OTransition"] = factory(require("omi"));
	else
		root["OTransition"] = factory(root["Omi"]);
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

/***/ "./node_modules/_dready@0.0.1@dready/index.js":
/*!****************************************************!*\
  !*** ./node_modules/_dready@0.0.1@dready/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
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


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    Transition.prototype.toggle = function () {
        this._show = !this._show;
        if (this._show)
            this.enter();
        else
            this.leave();
    };
    Transition.prototype.enter = function () {
        var el = this.children[0];
        if (el) {
            this.fire('before-enter');
            el.classList.remove(this.props.name + '-leave-active');
            el.classList.remove(this.props.name + '-leave-to');
            el.classList.add(this.props.name + '-enter');
            el.classList.add(this.props.name + '-enter-active');
            this.callback = function () {
                el.classList.remove(this.props.name + '-enter-active');
                this.fire('after-enter');
                this._show = true;
            }.bind(this);
            this.once('transitionend', this.callback);
            this.once('animationend', this.callback);
            window.setTimeout(function () {
                el.classList.remove(this.props.name + '-enter');
                el.classList.add(this.props.name + '-enter-to');
                this.fire('enter');
            }.bind(this), this.props.delay);
        }
    };
    Transition.prototype.leave = function () {
        var el = this.children[0];
        if (el) {
            this.fire('before-leave');
            el.classList.remove(this.props.name + '-enter-active');
            el.classList.remove(this.props.name + '-enter-to');
            el.classList.add(this.props.name + '-leave');
            el.classList.add(this.props.name + '-leave-active');
            this.callback = function (e) {
                el.classList.remove(this.props.name + '-leave-active');
                this.fire('after-leave');
                this._show = false;
                if (this.props.autoRemove && this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }.bind(this);
            this.once('transitionend', this.callback);
            this.once('animationend', this.callback);
            window.setTimeout(function () {
                el.classList.remove(this.props.name + '-leave');
                el.classList.add(this.props.name + '-leave-to');
                this.fire('leave');
            }.bind(this), this.props.delay);
        }
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
    Transition.isLightDom = true;
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