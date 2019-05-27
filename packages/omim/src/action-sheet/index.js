(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MActionSheet"] = factory(require("omi"));
	else
		root["MActionSheet"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/action-sheet/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/action-sheet/index.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-2!./src/action-sheet/index.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-actionsheet {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 5000;\n  width: 100%;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s; }\n\n.m-actionsheet__title {\n  position: relative;\n  height: 65px;\n  padding: 0 20px;\n  line-height: 1.4;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  text-align: center;\n  font-size: 14px;\n  color: #808080;\n  background: #FCFCFD; }\n\n.m-actionsheet__title:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5); }\n\n.m-actionsheet__title .m-actionsheet__title-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2; }\n\n.m-actionsheet__menu {\n  background-color: #FCFCFD; }\n\n.m-actionsheet__action {\n  margin-top: 6px;\n  background-color: #FCFCFD; }\n\n.m-actionsheet__cell {\n  position: relative;\n  padding: 10px 0;\n  text-align: center;\n  font-size: 18px;\n  cursor: pointer; }\n\n.m-actionsheet__cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5); }\n\n.m-actionsheet__cell:active {\n  background-color: #ECECEC; }\n\n.m-actionsheet__cell:first-child:before {\n  display: none; }\n\n.m-skin_android .m-actionsheet {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 274px;\n  box-sizing: border-box;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background: transparent;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s; }\n\n.m-skin_android .m-actionsheet__action {\n  display: none; }\n\n.m-skin_android .m-actionsheet__menu {\n  border-radius: 2px;\n  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1); }\n\n.m-skin_android .m-actionsheet__cell {\n  padding: 13px 24px;\n  font-size: 16px;\n  line-height: 1.4;\n  text-align: left; }\n\n.m-skin_android .m-actionsheet__cell:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px; }\n\n.m-skin_android .m-actionsheet__cell:last-child {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px; }\n\n.m-actionsheet_toggle {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 100;\n  left: 0;\n  top: 0; }\n\n.m-skin_android .m-actionsheet_toggle {\n  opacity: 1 !important;\n  top: 50% !important;\n  bottom: auto !important; }\n\n.m-skin_android .m-actionsheet {\n  opacity: 0;\n  transition: opacity .3s;\n  top: 150%;\n  bottom: 0; }\n", ""]);

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

/***/ "./src/action-sheet/index.scss":
/*!*************************************!*\
  !*** ./src/action-sheet/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-2!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/action-sheet/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/action-sheet/index.tsx":
/*!************************************!*\
  !*** ./src/action-sheet/index.tsx ***!
  \************************************/
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/action-sheet/index.scss");
var ActionSheet = /** @class */ (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionClick = function (item) {
            _this.fire('actionclick', item);
        };
        _this.menuClick = function (item) {
            _this.fire('menuclick', item);
        };
        _this.handleMaskClick = function (e) {
            if (_this.props.onClose)
                _this.props.onClose(e);
        };
        return _this;
    }
    ActionSheet.prototype.renderMenuItem = function () {
        var _this = this;
        return this.props.menus.map(function (menu, idx) {
            var _a;
            var label = menu.label, className = menu.className, others = __rest(menu, ["label", "className"]);
            var cls = omi_1.classNames((_a = {
                    'm-actionsheet__cell': true
                },
                _a[className] = className,
                _a));
            return (omi_1.h("div", __assign({ key: idx }, others, { onClick: function (_) { return _this.menuClick(menu); }, className: cls }), label));
        });
    };
    ActionSheet.prototype.renderActions = function () {
        var _this = this;
        return this.props.actions.map(function (action, idx) {
            var _a;
            var label = action.label, className = action.className, others = __rest(action, ["label", "className"]);
            var cls = omi_1.classNames((_a = {
                    'm-actionsheet__cell': true
                },
                _a[className] = className,
                _a));
            return (omi_1.h("div", __assign({ key: idx, onClick: function (_) { return _this.actionClick(action); } }, others, { className: cls }), label));
        });
    };
    ActionSheet.prototype.render = function () {
        var _a = this.props, show = _a.show, type = _a.type, onClose = _a.onClose, menus = _a.menus, actions = _a.actions, others = __rest(_a, ["show", "type", "onClose", "menus", "actions"]);
        var cls = omi_1.classNames({
            'm-actionsheet': true,
            'm-actionsheet_toggle': show
        });
        var styleType = type ? type : 'ios';
        return (omi_1.h("div", { className: styleType === 'android' ? 'm-skin_android' : '' },
            omi_1.h("div", { class: "mask", style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
            omi_1.h("div", __assign({ className: cls }, others),
                omi_1.h("div", { className: "m-actionsheet__menu" }, this.renderMenuItem()),
                omi_1.h("div", { className: "m-actionsheet__action" }, this.renderActions()))));
    };
    ActionSheet.defaultProps = {
        type: '',
        menus: [],
        actions: [],
        show: false
    };
    ActionSheet.css = css;
    ActionSheet = __decorate([
        omi_1.tag('m-action-sheet')
    ], ActionSheet);
    return ActionSheet;
}(omi_1.WeElement));
exports.default = ActionSheet;


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map