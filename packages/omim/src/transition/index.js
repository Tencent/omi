(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MTransition"] = factory(require("omi"));
	else
		root["MTransition"] = factory(root["Omi"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/transition/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/transition/index.tsx":
/*!**********************************!*\
  !*** ./src/transition/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * m-transition element based on vue-transition
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
var omi_1 = __webpack_require__(/*! omi */ "omi");
var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.install = function () {
        if (this.props.appear) {
            this.appear();
            this.props.show = true;
        }
    };
    Transition.prototype.toggle = function () {
        this.props.show = !this.props.show;
        if (this.props.show)
            this.enter();
        else
            this.leave();
    };
    Transition.prototype.appear = function () {
        this.fire('before-appear');
        this.classList.add(this.props.name + '-appear');
        this.classList.add(this.props.name + '-appear-active');
        this.callback = function () {
            this.classList.remove(this.props.name + '-appear-to');
            this.classList.remove(this.props.name + '-appear-active');
            this.fire('after-appear');
        }.bind(this);
        this.once('transitionend', this.callback);
        this.once('animationend', this.callback);
        window.setTimeout(function () {
            this.classList.remove(this.props.name + '-appear');
            this.classList.add(this.props.name + '-appear-to');
            this.fire('appear');
        }.bind(this), 0);
    };
    Transition.prototype.enter = function () {
        if (this.children.length == 0) {
            console.log('add');
            //@ts-ignore
            this.appendChild(this._tempNode);
        }
        this.fire('before-enter');
        this.classList.remove(this.props.name + '-leave-active');
        this.classList.remove(this.props.name + '-leave-to');
        this.classList.add(this.props.name + '-enter');
        this.classList.add(this.props.name + '-enter-active');
        this.callback = function () {
            this.classList.remove(this.props.name + '-enter-active');
            this.fire('after-enter');
        }.bind(this);
        this.once('transitionend', this.callback);
        this.once('animationend', this.callback);
        window.setTimeout(function () {
            this.classList.remove(this.props.name + '-enter');
            this.classList.add(this.props.name + '-enter-to');
            this.fire('enter');
        }.bind(this), 0);
    };
    Transition.prototype.leave = function () {
        this.fire('before-leave');
        this.classList.remove(this.props.name + '-enter-active');
        this.classList.remove(this.props.name + '-enter-to');
        this.classList.add(this.props.name + '-leave');
        this.classList.add(this.props.name + '-leave-active');
        this.callback = function (e) {
            this.classList.remove(this.props.name + '-leave-active');
            this.fire('after-leave');
            this._tempNode = this.children[0];
            this._tempNode.parentNode.removeChild(this._tempNode);
        }.bind(this);
        this.once('transitionend', this.callback);
        this.once('animationend', this.callback);
        window.setTimeout(function () {
            this.classList.remove(this.props.name + '-leave');
            this.classList.add(this.props.name + '-leave-to');
            this.fire('leave');
        }.bind(this), 0);
    };
    Transition.prototype.once = function (name, callback) {
        var wrapCall = function () {
            this.removeEventListener(name, wrapCall);
            callback();
        }.bind(this);
        this.addEventListener(name, wrapCall);
    };
    Transition.prototype.render = function () {
        return omi_1.h("slot", null);
    };
    Transition.css = "  \n  :host {\n    display: inline-block;\n  }";
    Transition.propTypes = {
        name: String,
        appear: Boolean,
        show: Boolean,
        remove: Boolean
    };
    Transition.defaultProps = {
        name: 'm',
        appear: false,
        show: false
    };
    Transition = __decorate([
        omi_1.tag('m-transition')
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