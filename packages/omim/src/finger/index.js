(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MFinger"] = factory(require("omi"));
	else
		root["MFinger"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/finger/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/finger/index.tsx":
/*!******************************!*\
  !*** ./src/finger/index.tsx ***!
  \******************************/
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
var Finger = /** @class */ (function (_super) {
    __extends(Finger, _super);
    function Finger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preV = { x: null, y: null };
        _this.pinchStartLen = null;
        _this.scale = 1;
        _this.isSingleTap = false;
        _this.isDoubleTap = false;
        _this.delta = null;
        _this.last = null;
        _this.now = null;
        _this.end = null;
        _this.multiTouch = false;
        _this.tapTimeout = null;
        _this.longTapTimeout = null;
        _this.singleTapTimeout = null;
        _this.swipeTimeout = null;
        _this.x1 = null;
        _this.x2 = null;
        _this.y1 = null;
        _this.y2 = null;
        _this.preTapPosition = { x: null, y: null };
        // Disable taps after longTap
        _this.afterLongTap = false;
        _this.afterLongTapTimeout = null;
        return _this;
    }
    Finger.prototype.install = function () {
        this._handleTouchStart = this._handleTouchStart.bind(this);
        this._handleTouchMove = this._handleTouchMove.bind(this);
        this._handleTouchCancel = this._handleTouchCancel.bind(this);
        this._handleTouchEnd = this._handleTouchEnd.bind(this);
    };
    Finger.prototype.getLen = function (v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    };
    Finger.prototype.dot = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    };
    Finger.prototype.getAngle = function (v1, v2) {
        var mr = this.getLen(v1) * this.getLen(v2);
        if (mr === 0)
            return 0;
        var r = this.dot(v1, v2) / mr;
        if (r > 1)
            r = 1;
        return Math.acos(r);
    };
    Finger.prototype.cross = function (v1, v2) {
        return v1.x * v2.y - v2.x * v1.y;
    };
    Finger.prototype.getRotateAngle = function (v1, v2) {
        var angle = this.getAngle(v1, v2);
        if (this.cross(v1, v2) > 0) {
            angle *= -1;
        }
        return angle * 180 / Math.PI;
    };
    Finger.prototype._handleTouchStart = function (evt) {
        var _this = this;
        //this.fire('touchstart', evt);
        if (!evt.touches)
            return;
        this.now = Date.now();
        this.x1 = evt.touches[0].pageX;
        this.y1 = evt.touches[0].pageY;
        this.delta = this.now - (this.last || this.now);
        if (this.preTapPosition.x !== null) {
            this.isDoubleTap = (this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30);
        }
        this.preTapPosition.x = this.x1;
        this.preTapPosition.y = this.y1;
        this.last = this.now;
        var preV = this.preV, len = evt.touches.length;
        if (len > 1) {
            this._cancelLongTap();
            this._cancelSingleTap();
            var v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
            preV.x = v.x;
            preV.y = v.y;
            this.pinchStartLen = this.getLen(preV);
            this.fire('multipointstart', evt);
        }
        else {
            this.isSingleTap = true;
        }
        this.longTapTimeout = setTimeout(function () {
            _this.fire('longtap', evt);
            _this.afterLongTap = true;
            _this.afterLongTapTimeout = setTimeout(function () {
                _this.afterLongTap = false;
            }, 1000);
        }, 750);
    };
    Finger.prototype._handleTouchMove = function (evt) {
        //this.fire('touchmove', evt);
        var preV = this.preV, len = evt.touches.length, currentX = evt.touches[0].pageX, currentY = evt.touches[0].pageY;
        this.isSingleTap = false;
        this.isDoubleTap = false;
        if (len > 1) {
            var v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };
            if (preV.x !== null) {
                if (this.pinchStartLen > 0) {
                    evt.center = {
                        x: (evt.touches[1].pageX + currentX) / 2,
                        y: (evt.touches[1].pageY + currentY) / 2
                    };
                    evt.scale = evt.zoom = this.getLen(v) / this.pinchStartLen;
                    this.fire('pinch', evt);
                }
                evt.angle = this.getRotateAngle(v, preV);
                this.fire('rotate', evt);
            }
            preV.x = v.x;
            preV.y = v.y;
            this.multiTouch = true;
        }
        else {
            if (this.x2 !== null) {
                evt.deltaX = currentX - this.x2;
                evt.deltaY = currentY - this.y2;
            }
            else {
                evt.deltaX = 0;
                evt.deltaY = 0;
            }
            this.fire('pressmove', evt);
        }
        this._cancelLongTap();
        this.x2 = currentX;
        this.y2 = currentY;
        if (len > 1) {
            evt.preventDefault();
        }
    };
    Finger.prototype._handleTouchCancel = function (evt) {
        //this.fire('touchcancel', evt);
        clearInterval(this.singleTapTimeout);
        clearInterval(this.tapTimeout);
        clearInterval(this.longTapTimeout);
        clearInterval(this.swipeTimeout);
    };
    Finger.prototype._handleTouchEnd = function (evt) {
        var _this = this;
        //this.fire('touchend', evt);
        this.end = Date.now();
        this._cancelLongTap();
        if (this.multiTouch === true && evt.touches.length < 2) {
            this.fire('multipointend', evt);
        }
        evt.origin = [this.x1, this.y1];
        if (this.multiTouch === false) {
            if ((this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
                (this.y2 && Math.abs(this.y1 - this.y2) > 30)) {
                evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
                evt.distance = Math.abs(this.x1 - this.x2);
                this.swipeTimeout = setTimeout(function () {
                    _this.fire('swipe', evt);
                }, 0);
            }
            else {
                if (this.afterLongTap) {
                    clearTimeout(this.afterLongTapTimeout);
                    this.afterLongTap = false;
                }
                else {
                    this.tapTimeout = setTimeout(function () {
                        //this.fire('tap', evt);
                        if (_this.isDoubleTap) {
                            _this.fire('doubletap', evt);
                            clearTimeout(_this.singleTapTimeout);
                            _this.isDoubleTap = false;
                        }
                        else if (_this.isSingleTap) {
                            _this.singleTapTimeout = setTimeout(function () {
                                _this.fire('singletap', evt);
                            }, 250);
                            _this.isSingleTap = false;
                        }
                    }, 0);
                }
            }
        }
        this.preV.x = 0;
        this.preV.y = 0;
        this.scale = 1;
        this.pinchStartLen = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
        this.multiTouch = false;
    };
    Finger.prototype._cancelLongTap = function () {
        clearTimeout(this.longTapTimeout);
    };
    Finger.prototype._cancelSingleTap = function () {
        clearTimeout(this.singleTapTimeout);
    };
    Finger.prototype._swipeDirection = function (x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >=
            Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
    };
    Finger.prototype.installed = function () {
        var ele = this.childNodes[0];
        ele.addEventListener('touchstart', this._handleTouchStart);
        ele.addEventListener('touchmove', this._handleTouchMove);
        ele.addEventListener('touchcancel', this._handleTouchCancel);
        ele.addEventListener('touchend', this._handleTouchEnd);
    };
    Finger.prototype.render = function () {
        return omi_1.h("slot", null);
    };
    Finger.css = ":host {\n  display: inline-block;\n}";
    Finger = __decorate([
        omi_1.tag('m-finger')
    ], Finger);
    return Finger;
}(omi_1.WeElement));
exports.default = Finger;


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