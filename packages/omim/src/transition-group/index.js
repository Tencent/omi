(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MTransitionGroup"] = factory(require("omi"));
	else
		root["MTransitionGroup"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/transition-group/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/transition-group/index.tsx":
/*!****************************************!*\
  !*** ./src/transition-group/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//todo duration and delay support
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
    TransitionGroup.prototype.install = function () {
        //@ts-ignore 不是 slot，所以需要共享一下 host 的 css
        this.css = omi_1.getHost(this).constructor.css;
    };
    TransitionGroup.prototype.receiveProps = function () {
        var _this = this;
        //find the leave item
        var el;
        var vel;
        var insertIndex;
        var arr = [];
        this.shadowRoot.childNodes.forEach(function (node) {
            if (node['__omiattr_'] && node['__omiattr_'].hasOwnProperty('key')) {
                arr.push(node);
            }
        });
        var vnodes = this.render(this.props);
        var len = vnodes.length;
        //insert
        if (len > arr.length) {
            for (var i = 0; i < len; i++) {
                if (i === len - 1) {
                    vel = vnodes[i];
                    insertIndex = i;
                    break;
                }
                else if (vnodes[i].attributes.key !== arr[i]['__omiattr_'].key) {
                    vel = vnodes[i];
                    insertIndex = i;
                    break;
                }
            }
        }
        else if (len < arr.length) { //delete
            for (var i = 0; i < arr.length; i++) {
                if (i === arr.length - 1) {
                    el = arr[i];
                }
                else if (vnodes[i].attributes.key !== arr[i]['__omiattr_'].key) {
                    el = arr[i];
                    break;
                }
            }
        }
        if (el) {
            // bind end event and trigger this.update()
            this.callback = function () {
                el.parentNode.removeChild(el);
                this.update();
            }.bind(this);
            this.elOnce(el, 'transitionend', this.callback);
            this.elOnce(el, 'animationend', this.callback);
            // add leave class
            el.classList.add(this.props.name + '-leave');
            el.classList.add(this.props.name + '-leave-active');
            window.setTimeout(function () {
                el.classList.remove(_this.props.name + '-leave');
                el.classList.add(_this.props.name + '-leave-to');
            }, 0);
        }
        else {
            var iel_1 = omi_1.render(vel, null);
            // bind end event and trigger this.update()
            this.callback = function () {
                //@ts-ignore
                this.shadowRoot.removeChild(iel_1);
                this.update();
            }.bind(this);
            this.elOnce(iel_1, 'transitionend', this.callback);
            this.elOnce(iel_1, 'animationend', this.callback);
            insertChildAtIndex(this.shadowRoot, iel_1, insertIndex + 1);
            iel_1.classList.add(this.props.name + '-enter');
            iel_1.classList.add(this.props.name + '-enter-active');
            window.setTimeout(function () {
                iel_1.classList.remove(_this.props.name + '-enter');
                iel_1.classList.add(_this.props.name + '-enter-to');
            }, 0);
        }
        return false;
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
    TransitionGroup.prototype.render = function (props) {
        return props.children;
    };
    TransitionGroup.propTypes = {
        name: String,
        appear: Boolean,
        show: Boolean,
        remove: Boolean
    };
    TransitionGroup.defaultProps = {
        name: 'm',
        appear: false,
        show: false
    };
    TransitionGroup = __decorate([
        omi_1.tag('m-transition-group')
    ], TransitionGroup);
    return TransitionGroup;
}(omi_1.WeElement));
exports.default = TransitionGroup;
function insertChildAtIndex(parent, child, index) {
    if (!index)
        index = 0;
    if (index >= parent.children.length) {
        parent.appendChild(child);
    }
    else {
        parent.insertBefore(child, parent.children[index]);
    }
}


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