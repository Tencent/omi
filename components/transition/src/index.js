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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/msg.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/msg.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/msg.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".o-message__closeBtn:focus,\n.o-message__content:focus {\n  outline-width: 0; }\n\n.o-message {\n  min-width: 380px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #EBEEF5;\n  position: fixed;\n  left: 50%;\n  top: 20px;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  background-color: #edf2fc;\n  -webkit-transition: opacity .3s, top .4s, -webkit-transform .4s;\n  transition: opacity .3s, top .4s, -webkit-transform .4s;\n  transition: opacity .3s, transform .4s, top .4s;\n  transition: opacity .3s, transform .4s, top .4s, -webkit-transform .4s;\n  overflow: hidden;\n  padding: 15px 15px 15px 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.o-message.is-center {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.o-message.is-closable .o-message__content {\n  padding-right: 16px; }\n\n.o-message p {\n  margin: 0; }\n\n.o-message--info .o-message__content {\n  color: #909399; }\n\n.o-message--success {\n  background-color: #f0f9eb;\n  border-color: #e1f3d8; }\n\n.o-message--success .o-message__content {\n  color: #07c160;\n  color: var(--o-primary, #07c160); }\n\n.o-message--warning {\n  background-color: #fdf6ec;\n  border-color: #faecd8; }\n\n.o-message--warning .o-message__content {\n  color: #E6A23C; }\n\n.o-message--error {\n  background-color: #fef0f0;\n  border-color: #fde2e2; }\n\n.o-message--error .o-message__content {\n  color: #F56C6C; }\n\n.o-message__icon {\n  margin-right: 10px; }\n\n.o-message__content {\n  padding: 0;\n  font-size: 14px;\n  line-height: 1; }\n\n.o-message__closeBtn {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #C0C4CC;\n  font-size: 16px; }\n\n.o-message__closeBtn:hover {\n  color: #909399; }\n\n.o-message .o-icon-success {\n  color: #07c160;\n  color: var(--o-primary, #07c160); }\n\n.o-message .o-icon-error {\n  color: #F56C6C; }\n\n.o-message .o-icon-info {\n  color: #909399; }\n\n.o-message .o-icon-warning {\n  color: #E6A23C; }\n\n.o-message-fade-enter,\n.o-message-fade-leave-active {\n  opacity: 0;\n  -webkit-transform: translate(-50%, -100%);\n  transform: translate(-50%, -100%); }\n\n.msgbox-fade-enter-active {\n  -webkit-animation: msgbox-fade-in .3s;\n  animation: msgbox-fade-in .3s; }\n\n.msgbox-fade-leave-active {\n  -webkit-animation: msgbox-fade-out .3s;\n  animation: msgbox-fade-out .3s; }\n\n@-webkit-keyframes msgbox-fade-in {\n  0% {\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@keyframes msgbox-fade-in {\n  0% {\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes msgbox-fade-out {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n    opacity: 0; } }\n\n@keyframes msgbox-fade-out {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n    opacity: 0; } }\n\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .5s; }\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
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
var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.installed = function () {
        // if (this.props.show && this.props.appear) {
        //   this.appearing()
        //   console.log(1111111)
        // }
        this.enter();
    };
    Transition.prototype.toggle = function () {
        this.props.show = !this.props.show;
        if (this.props.show)
            this.enter();
        else
            this.leave();
    };
    Transition.prototype.receiveProps = function (props) {
        if (props.show)
            this.enter();
        else
            this.leave();
    };
    Transition.prototype.appearing = function () {
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
        if (this.props.removable && this.children.length == 0) {
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
            //if (!this.props.show) {
            this.classList.remove(this.props.name + '-leave-active');
            this.fire('after-leave');
            this._tempNode = this.children[0];
            if (this.props.removable) {
                this._tempNode.parentNode.removeChild(this._tempNode);
                this.fire('removed');
            }
            //}
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
    Transition.prototype.render = function (props) {
        console.log(22);
        if (props.removed)
            return;
        //注入 props.name 到 props.children[0]
        return props.children[0];
    };
    Transition.propTypes = {
        name: String,
        appear: Boolean,
        show: Boolean,
        removable: Boolean,
        removed: Boolean
    };
    Transition.isLightDom = true;
    Transition.defaultProps = {
        name: 'o',
        appear: false,
        show: false
    };
    Transition = __decorate([
        omi_1.tag('o-transition')
    ], Transition);
    return Transition;
}(omi_1.WeElement));
exports.default = Transition;


/***/ }),

/***/ "./src/msg.scss":
/*!**********************!*\
  !*** ./src/msg.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/_css-loader@1.0.1@css-loader!../node_modules/_resolve-url-loader@3.1.1@resolve-url-loader!../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./msg.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/msg.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/msg.tsx":
/*!*********************!*\
  !*** ./src/msg.tsx ***!
  \*********************/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
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
var css = __webpack_require__(/*! ./msg.scss */ "./src/msg.scss");
__webpack_require__(/*! ./index.tsx */ "./src/index.tsx");
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enter = true;
        return _this;
    }
    Message.prototype.installed = function () {
        // setTimeout(() => {
        //   this.enter = false
        //   this.update()
        // })
        var _this = this;
        // setTimeout(() => {
        //   this.enter = true
        //   this.update()
        // }, this.props.duration + 400)
        // setTimeout(() => {
        //   this.parentNode.removeChild(this)
        // }, this.props.duration + 400 + 400)
        setTimeout(function () {
            _this.transition.leave();
            console.log('leave');
        }, 3400);
    };
    Message.prototype.render = function (props) {
        var _a;
        var _this = this;
        console.log(111);
        return (omi_1.h("o-transition", { ref: function (_) { return _this.transition = _; }, show: true, style: "display:block;", name: "fade" },
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