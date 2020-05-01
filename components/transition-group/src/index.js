(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OTransitionGroup"] = factory(require("omi"));
	else
		root["OTransitionGroup"] = factory(root["Omi"]);
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
var TransitionGroup = /** @class */ (function (_super) {
    __extends(TransitionGroup, _super);
    function TransitionGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransitionGroup.prototype.installed = function () {
        var _this = this;
        this.childNodes.forEach(function (node, index) {
            _this.enter(node, index);
        });
        if (this.props.leavingTime) {
            setTimeout(function () {
                _this.childNodes.forEach(function (node, index) {
                    _this.leave(node, index);
                });
            }, this.props.leavingTime);
        }
    };
    TransitionGroup.prototype.enter = function (node, index) {
        node.classList.remove(this.props.name + '-leave-active');
        node.classList.remove(this.props.name + '-leave-to');
        node.classList.add(this.props.name + '-enter');
        node.classList.add(this.props.name + '-enter-active');
        this.callback = function () {
            node.classList.remove(this.props.name + '-enter-active');
        }.bind(this);
        this.elOnce(node, 'transitionend', this.callback);
        this.elOnce(node, 'animationend', this.callback);
        window.setTimeout(function () {
            node.classList.remove(this.props.name + '-enter');
            node.classList.add(this.props.name + '-enter-to');
        }.bind(this), index * this.props.delay);
    };
    TransitionGroup.prototype.leave = function (node, index) {
        node.classList.remove(this.props.name + '-enter-active');
        node.classList.remove(this.props.name + '-enter-to');
        node.classList.add(this.props.name + '-leave');
        node.classList.add(this.props.name + '-leave-active');
        this.callback = function () {
            node.classList.remove(this.props.name + '-leave-active');
        }.bind(this);
        this.elOnce(node, 'transitionend', this.callback);
        this.elOnce(node, 'animationend', this.callback);
        window.setTimeout(function () {
            node.classList.remove(this.props.name + '-leave');
            node.classList.add(this.props.name + '-leave-to');
        }.bind(this), index * this.props.delay);
    };
    TransitionGroup.prototype.once = function (name, callback) {
        var wrapCall = function () {
            this.removeEventListener(name, wrapCall);
            callback();
        }.bind(this);
        this.addEventListener(name, wrapCall);
    };
    TransitionGroup.prototype.elOnce = function (el, name, callback) {
        var wrapCall = function () {
            el.removeEventListener(name, wrapCall);
            callback();
        }.bind(el);
        el.addEventListener(name, wrapCall);
    };
    TransitionGroup.prototype.render = function () {
        return;
    };
    TransitionGroup.propTypes = {
        name: String,
        leavingTime: Number,
        autoRemove: Boolean,
        delay: Number
    };
    TransitionGroup.isLightDom = true;
    TransitionGroup.defaultProps = {
        name: 'o'
    };
    TransitionGroup = __decorate([
        omi_1.tag('o-transition-group')
    ], TransitionGroup);
    return TransitionGroup;
}(omi_1.WeElement));
exports.default = TransitionGroup;
var TestTG = /** @class */ (function (_super) {
    __extends(TestTG, _super);
    function TestTG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestTG.prototype.render = function () {
        return (omi_1.h("ul", null,
            omi_1.h("o-transition-group", { name: "fade", "leaving-time": 3000, delay: 300 },
                omi_1.h("li", null, "aa"),
                omi_1.h("li", null, "bb"),
                omi_1.h("li", null, "cc"))));
    };
    TestTG.css = "\n  .fade-leave-to, .fade-enter {\n    opacity: 0;\n    transform: translateX(15px);\n  }\n\n  .fade-leave-active, .fade-enter-active {\n    transition: all 500ms ease-in;\n  }";
    TestTG = __decorate([
        omi_1.tag('o-test-tg')
    ], TestTG);
    return TestTG;
}(omi_1.WeElement));


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