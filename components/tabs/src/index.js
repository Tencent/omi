(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OTabs"] = factory(require("omi"));
	else
		root["OTabs"] = factory(root["Omi"]);
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

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.o-tabs__header {\n  padding: 0;\n  position: relative;\n  margin: 0 0 15px; }\n\n.o-tabs__active-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  background-color: #07c160;\n  z-index: 1;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  list-style: none; }\n\n.o-tabs__new-tab {\n  float: right;\n  border: 1px solid #d3dce6;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n  margin: 12px 0 9px 10px;\n  border-radius: 3px;\n  text-align: center;\n  font-size: 12px;\n  color: #d3dce6;\n  cursor: pointer;\n  -webkit-transition: all .15s;\n  transition: all .15s; }\n\n.o-tabs__new-tab .o-icon-plus {\n  -webkit-transform: scale(0.8, 0.8);\n  transform: scale(0.8, 0.8); }\n\n.o-tabs__new-tab:hover {\n  color: #07c160; }\n\n.o-tabs__nav-wrap {\n  overflow: hidden;\n  margin-bottom: -1px;\n  position: relative; }\n\n.o-tabs__nav-wrap::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #E4E7ED;\n  z-index: 1; }\n\n.o-tabs--border-card > .o-tabs__header .o-tabs__nav-wrap::after,\n.o-tabs--card > .o-tabs__header .o-tabs__nav-wrap::after {\n  content: none; }\n\n.o-tabs__nav-wrap.is-scrollable {\n  padding: 0 20px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-tabs__nav-scroll {\n  overflow: hidden; }\n\n.o-tabs__nav-next,\n.o-tabs__nav-prev {\n  position: absolute;\n  cursor: pointer;\n  line-height: 44px;\n  font-size: 12px;\n  color: #909399; }\n\n.o-tabs__nav-next {\n  right: 0; }\n\n.o-tabs__nav-prev {\n  left: 0; }\n\n.o-tabs__nav {\n  white-space: nowrap;\n  position: relative;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n  float: left;\n  z-index: 2; }\n\n.o-tabs__nav.is-stretch {\n  min-width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.o-tabs__nav.is-stretch > * {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center; }\n\n.o-tabs__item {\n  padding: 0 20px;\n  height: 40px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  line-height: 40px;\n  display: inline-block;\n  list-style: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #303133;\n  position: relative; }\n\n.o-tabs__item:focus,\n.o-tabs__item:focus:active {\n  outline: 0; }\n\n.o-tabs__item:focus.is-active.is-focus:not(:active) {\n  -webkit-box-shadow: 0 0 2px 2px #07c160 inset;\n  box-shadow: 0 0 2px 2px #07c160 inset;\n  border-radius: 3px; }\n\n.o-tabs__item:hover .o-icon-close {\n  visibility: visible; }\n\n.o-tabs__item .o-icon-close {\n  visibility: hidden;\n  border-radius: 50%;\n  text-align: center;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  margin-left: 5px; }\n\n.o-tabs__item .o-icon-close:before {\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  display: inline-block; }\n\n.o-tabs__item .o-icon-close:hover {\n  background-color: #C0C4CC;\n  color: #FFF; }\n\n.o-tabs__item.is-active {\n  color: #07c160; }\n\n.o-tabs__item:hover {\n  color: #07c160;\n  cursor: pointer; }\n\n.o-tabs__item.is-disabled {\n  color: #C0C4CC;\n  cursor: default; }\n\n.o-tabs__content {\n  overflow: hidden;\n  position: relative; }\n\n.o-tabs--card > .o-tabs__header {\n  border-bottom: 1px solid #E4E7ED; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__nav {\n  border: 1px solid #E4E7ED;\n  border-bottom: none;\n  border-radius: 4px 4px 0 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__active-bar {\n  display: none; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__item .o-icon-close {\n  position: relative;\n  font-size: 12px;\n  width: 0;\n  height: 14px;\n  vertical-align: middle;\n  line-height: 15px;\n  overflow: hidden;\n  top: -1px;\n  right: -2px;\n  -webkit-transform-origin: 100% 50%;\n  transform-origin: 100% 50%; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__item.is-active.is-closable .o-icon-close,\n.o-tabs--card > .o-tabs__header .o-tabs__item.is-closable:hover .o-icon-close {\n  width: 14px; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__item {\n  border-bottom: 1px solid transparent;\n  border-left: 1px solid #E4E7ED;\n  -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.o-tabs--card > .o-tabs__header .o-tabs__item:first-child {\n  border-left: none; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__item.is-closable:hover {\n  padding-left: 13px;\n  padding-right: 13px; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__item.is-active {\n  border-bottom-color: #FFF; }\n\n.o-tabs--card > .o-tabs__header .o-tabs__item.is-active.is-closable {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.o-tabs--border-card {\n  background: #FFF;\n  border: 1px solid #DCDFE6;\n  border-bottom: none; }\n\n.o-tabs--border-card.o-tabs--bottom {\n  border: 1px solid #DCDFE6; }\n\n.o-tabs--border-card > .o-tabs__content {\n  padding: 15px; }\n\n.o-tabs--border-card > .o-tabs__header {\n  background-color: #F5F7FA;\n  border-bottom: 1px solid #E4E7ED;\n  margin: 0; }\n\n.o-tabs--border-card > .o-tabs__header .o-tabs__item {\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  border: 1px solid transparent;\n  margin-top: -1px;\n  color: #909399; }\n\n.o-tabs--border-card > .o-tabs__header .o-tabs__item + .o-tabs__item,\n.o-tabs--border-card > .o-tabs__header .o-tabs__item:first-child {\n  margin-left: -1px; }\n\n.o-tabs--border-card > .o-tabs__header .o-tabs__item.is-active {\n  color: #07c160;\n  background-color: #FFF;\n  border-right-color: #DCDFE6;\n  border-left-color: #DCDFE6; }\n\n.o-tabs--border-card > .o-tabs__header .o-tabs__item:not(.is-disabled):hover {\n  color: #07c160; }\n\n.o-tabs--border-card > .o-tabs__header .o-tabs__item.is-disabled {\n  color: #C0C4CC; }\n\n.o-tabs--border-card > .o-tabs__header .is-scrollable .o-tabs__item:first-child {\n  margin-left: 0; }\n\n.o-tabs--bottom .o-tabs__item.is-bottom:nth-child(2),\n.o-tabs--bottom .o-tabs__item.is-top:nth-child(2),\n.o-tabs--top .o-tabs__item.is-bottom:nth-child(2),\n.o-tabs--top .o-tabs__item.is-top:nth-child(2) {\n  padding-left: 0; }\n\n.o-tabs--bottom .o-tabs__item.is-bottom:last-child,\n.o-tabs--bottom .o-tabs__item.is-top:last-child,\n.o-tabs--top .o-tabs__item.is-bottom:last-child,\n.o-tabs--top .o-tabs__item.is-top:last-child {\n  padding-right: 0; }\n\n.o-tabs--bottom .o-tabs--left > .o-tabs__header .o-tabs__item:nth-child(2),\n.o-tabs--bottom .o-tabs--right > .o-tabs__header .o-tabs__item:nth-child(2),\n.o-tabs--bottom.o-tabs--border-card > .o-tabs__header .o-tabs__item:nth-child(2),\n.o-tabs--bottom.o-tabs--card > .o-tabs__header .o-tabs__item:nth-child(2),\n.o-tabs--top .o-tabs--left > .o-tabs__header .o-tabs__item:nth-child(2),\n.o-tabs--top .o-tabs--right > .o-tabs__header .o-tabs__item:nth-child(2),\n.o-tabs--top.o-tabs--border-card > .o-tabs__header .o-tabs__item:nth-child(2),\n.o-tabs--top.o-tabs--card > .o-tabs__header .o-tabs__item:nth-child(2) {\n  padding-left: 20px; }\n\n.o-tabs--bottom .o-tabs--left > .o-tabs__header .o-tabs__item:last-child,\n.o-tabs--bottom .o-tabs--right > .o-tabs__header .o-tabs__item:last-child,\n.o-tabs--bottom.o-tabs--border-card > .o-tabs__header .o-tabs__item:last-child,\n.o-tabs--bottom.o-tabs--card > .o-tabs__header .o-tabs__item:last-child,\n.o-tabs--top .o-tabs--left > .o-tabs__header .o-tabs__item:last-child,\n.o-tabs--top .o-tabs--right > .o-tabs__header .o-tabs__item:last-child,\n.o-tabs--top.o-tabs--border-card > .o-tabs__header .o-tabs__item:last-child,\n.o-tabs--top.o-tabs--card > .o-tabs__header .o-tabs__item:last-child {\n  padding-right: 20px; }\n\n.o-tabs--bottom.o-tabs--border-card {\n  border-top: none; }\n\n.o-tabs--bottom.o-tabs--border-card .o-tabs__header.is-bottom {\n  border-bottom: 0;\n  border-top: 1px solid #DCDFE6; }\n\n.o-tabs--bottom.o-tabs--border-card .o-tabs__nav-wrap.is-bottom {\n  margin-top: -1px;\n  margin-bottom: 0; }\n\n.o-tabs--bottom.o-tabs--border-card .o-tabs__item.is-bottom:not(.is-active) {\n  border: 1px solid transparent; }\n\n.o-tabs--bottom.o-tabs--border-card .o-tabs__item.is-bottom {\n  margin: 0 -1px -1px; }\n\n.o-tabs--left,\n.o-tabs--right {\n  overflow: hidden; }\n\n.o-tabs--left .o-tabs__header.is-left,\n.o-tabs--left .o-tabs__header.is-right,\n.o-tabs--left .o-tabs__nav-scroll,\n.o-tabs--left .o-tabs__nav-wrap.is-left,\n.o-tabs--left .o-tabs__nav-wrap.is-right,\n.o-tabs--right .o-tabs__header.is-left,\n.o-tabs--right .o-tabs__header.is-right,\n.o-tabs--right .o-tabs__nav-scroll,\n.o-tabs--right .o-tabs__nav-wrap.is-left,\n.o-tabs--right .o-tabs__nav-wrap.is-right {\n  height: 100%; }\n\n.o-tabs--left .o-tabs__active-bar.is-left,\n.o-tabs--left .o-tabs__active-bar.is-right,\n.o-tabs--right .o-tabs__active-bar.is-left,\n.o-tabs--right .o-tabs__active-bar.is-right {\n  top: 0;\n  bottom: auto;\n  width: 2px;\n  height: auto; }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left,\n.o-tabs--left .o-tabs__nav-wrap.is-right,\n.o-tabs--right .o-tabs__nav-wrap.is-left,\n.o-tabs--right .o-tabs__nav-wrap.is-right {\n  margin-bottom: 0; }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,\n.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,\n.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-next,\n.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev,\n.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,\n.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,\n.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-next,\n.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev {\n  height: 30px;\n  line-height: 30px;\n  width: 100%;\n  text-align: center;\n  cursor: pointer; }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-next i,\n.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev i,\n.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-next i,\n.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev i,\n.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-next i,\n.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev i,\n.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-next i,\n.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev i {\n  -webkit-transform: rotateZ(90deg);\n  transform: rotateZ(90deg); }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,\n.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev,\n.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,\n.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev {\n  left: auto;\n  top: 0; }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,\n.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-next,\n.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,\n.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-next {\n  right: auto;\n  bottom: 0; }\n\n.o-tabs--left .o-tabs__active-bar.is-left,\n.o-tabs--left .o-tabs__nav-wrap.is-left::after {\n  right: 0;\n  left: auto; }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left.is-scrollable,\n.o-tabs--left .o-tabs__nav-wrap.is-right.is-scrollable,\n.o-tabs--right .o-tabs__nav-wrap.is-left.is-scrollable,\n.o-tabs--right .o-tabs__nav-wrap.is-right.is-scrollable {\n  padding: 30px 0; }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left::after,\n.o-tabs--left .o-tabs__nav-wrap.is-right::after,\n.o-tabs--right .o-tabs__nav-wrap.is-left::after,\n.o-tabs--right .o-tabs__nav-wrap.is-right::after {\n  height: 100%;\n  width: 2px;\n  bottom: auto;\n  top: 0; }\n\n.o-tabs--left .o-tabs__nav.is-left,\n.o-tabs--left .o-tabs__nav.is-right,\n.o-tabs--right .o-tabs__nav.is-left,\n.o-tabs--right .o-tabs__nav.is-right {\n  float: none; }\n\n.o-tabs--left .o-tabs__item.is-left,\n.o-tabs--left .o-tabs__item.is-right,\n.o-tabs--right .o-tabs__item.is-left,\n.o-tabs--right .o-tabs__item.is-right {\n  display: block; }\n\n.o-tabs--left.o-tabs--card .o-tabs__active-bar.is-left,\n.o-tabs--right.o-tabs--card .o-tabs__active-bar.is-right {\n  display: none; }\n\n.o-tabs--left .o-tabs__header.is-left {\n  float: left;\n  margin-bottom: 0;\n  margin-right: 10px; }\n\n.o-tabs--left .o-tabs__nav-wrap.is-left {\n  margin-right: -1px; }\n\n.o-tabs--left .o-tabs__item.is-left {\n  text-align: right; }\n\n.o-tabs--left.o-tabs--card .o-tabs__item.is-left {\n  border-left: none;\n  border-right: 1px solid #E4E7ED;\n  border-bottom: none;\n  border-top: 1px solid #E4E7ED;\n  text-align: left; }\n\n.o-tabs--left.o-tabs--card .o-tabs__item.is-left:first-child {\n  border-right: 1px solid #E4E7ED;\n  border-top: none; }\n\n.o-tabs--left.o-tabs--card .o-tabs__item.is-left.is-active {\n  border: 1px solid #E4E7ED;\n  border-right-color: #fff;\n  border-left: none;\n  border-bottom: none; }\n\n.o-tabs--left.o-tabs--card .o-tabs__item.is-left.is-active:first-child {\n  border-top: none; }\n\n.o-tabs--left.o-tabs--card .o-tabs__item.is-left.is-active:last-child {\n  border-bottom: none; }\n\n.o-tabs--left.o-tabs--card .o-tabs__nav {\n  border-radius: 4px 0 0 4px;\n  border-bottom: 1px solid #E4E7ED;\n  border-right: none; }\n\n.o-tabs--left.o-tabs--card .o-tabs__new-tab {\n  float: none; }\n\n.o-tabs--left.o-tabs--border-card .o-tabs__header.is-left {\n  border-right: 1px solid #dfe4ed; }\n\n.o-tabs--left.o-tabs--border-card .o-tabs__item.is-left {\n  border: 1px solid transparent;\n  margin: -1px 0 -1px -1px; }\n\n.o-tabs--left.o-tabs--border-card .o-tabs__item.is-left.is-active {\n  border-color: #d1dbe5 transparent; }\n\n.o-tabs--right .o-tabs__header.is-right {\n  float: right;\n  margin-bottom: 0;\n  margin-left: 10px; }\n\n.o-tabs--right .o-tabs__nav-wrap.is-right {\n  margin-left: -1px; }\n\n.o-tabs--right .o-tabs__nav-wrap.is-right::after {\n  left: 0;\n  right: auto; }\n\n.o-tabs--right .o-tabs__active-bar.is-right {\n  left: 0; }\n\n.o-tabs--right.o-tabs--card .o-tabs__item.is-right {\n  border-bottom: none;\n  border-top: 1px solid #E4E7ED; }\n\n.o-tabs--right.o-tabs--card .o-tabs__item.is-right:first-child {\n  border-left: 1px solid #E4E7ED;\n  border-top: none; }\n\n.o-tabs--right.o-tabs--card .o-tabs__item.is-right.is-active {\n  border: 1px solid #E4E7ED;\n  border-left-color: #fff;\n  border-right: none;\n  border-bottom: none; }\n\n.o-tabs--right.o-tabs--card .o-tabs__item.is-right.is-active:first-child {\n  border-top: none; }\n\n.o-tabs--right.o-tabs--card .o-tabs__item.is-right.is-active:last-child {\n  border-bottom: none; }\n\n.o-tabs--right.o-tabs--card .o-tabs__nav {\n  border-radius: 0 4px 4px 0;\n  border-bottom: 1px solid #E4E7ED;\n  border-left: none; }\n\n.o-tabs--right.o-tabs--border-card .o-tabs__header.is-right {\n  border-left: 1px solid #dfe4ed; }\n\n.o-tabs--right.o-tabs--border-card .o-tabs__item.is-right {\n  border: 1px solid transparent;\n  margin: -1px -1px -1px 0; }\n\n.o-tabs--right.o-tabs--border-card .o-tabs__item.is-right.is-active {\n  border-color: #d1dbe5 transparent; }\n\n.slideInLeft-transition,\n.slideInRight-transition {\n  display: inline-block; }\n\n.slideInRight-enter {\n  -webkit-animation: slideInRight-enter .3s;\n  animation: slideInRight-enter .3s; }\n\n.slideInRight-leave {\n  position: absolute;\n  left: 0;\n  right: 0;\n  -webkit-animation: slideInRight-leave .3s;\n  animation: slideInRight-leave .3s; }\n\n.slideInLeft-enter {\n  -webkit-animation: slideInLeft-enter .3s;\n  animation: slideInLeft-enter .3s; }\n\n.slideInLeft-leave {\n  position: absolute;\n  left: 0;\n  right: 0;\n  -webkit-animation: slideInLeft-leave .3s;\n  animation: slideInLeft-leave .3s; }\n\n@-webkit-keyframes slideInRight-enter {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); }\n  to {\n    opacity: 1;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes slideInRight-enter {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); }\n  to {\n    opacity: 1;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes slideInRight-leave {\n  0% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    opacity: 0; } }\n\n@keyframes slideInRight-leave {\n  0% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    opacity: 0; } }\n\n@-webkit-keyframes slideInLeft-enter {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  to {\n    opacity: 1;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes slideInLeft-enter {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  to {\n    opacity: 1;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes slideInLeft-leave {\n  0% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    opacity: 0; } }\n\n@keyframes slideInLeft-leave {\n  0% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    opacity: 0; } }\n\n.o-icon-close {\n  display: inline-block;\n  vertical-align: -0.125em; }\n\n.o-icon-add {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5em;\n  margin-left: 0.5em;\n  cursor: pointer; }\n\n.o-icon-add:hover {\n  color: #07c160; }\n", ""]);

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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/_css-loader@1.0.1@css-loader!../node_modules/_resolve-url-loader@3.1.1@resolve-url-loader!../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

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
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var readyCallbacks = [];
document.addEventListener('DOMContentLoaded', function () {
    domReady.done = true;
    readyCallbacks.forEach(function (callback) {
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
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onTabClick = function (evt, index) {
            _this.setActiveBar(evt.currentTarget, index);
            _this.fire('change', {
                tab: _this.props.list[index],
                index: index
            });
        };
        return _this;
    }
    Tabs.prototype.setActiveBar = function (ele, index) {
        var rect = ele.getBoundingClientRect();
        this._x = rect.left - this.baseRect.left;
        this._width = rect.width;
        if (index === 0) {
            this._x = 0;
            this._width -= 20;
        }
        else if (index === this.props.list.length - 1) {
            this._x += 20;
            this._width -= 20;
        }
        else {
            this._x += 20;
            this._width -= 40;
        }
        this.updateProps({
            activeIndex: index
        });
    };
    Tabs.prototype.install = function () {
        var _this = this;
        domReady(function () {
            _this.baseRect = _this.rootNode.getBoundingClientRect();
            _this.setActiveBar(_this['$tab' + _this.props.activeIndex], _this.props.activeIndex);
        });
    };
    Tabs.prototype.installed = function () {
        this.baseRect = this.rootNode.getBoundingClientRect();
        this.setActiveBar(this['$tab' + this.props.activeIndex], this.props.activeIndex);
    };
    Tabs.prototype.removeTab = function (index) {
        var tab = this.props.list.splice(index, 1)[0];
        this.forceUpdate();
        this.fire('remove', {
            tab: tab,
            index: index
        });
    };
    Tabs.prototype.addTab = function (tab) {
        this.props.list.push(tab);
        this.forceUpdate();
    };
    Tabs.prototype.onAddIconClick = function () {
        this.fire('add-icon-click');
    };
    Tabs.prototype.render = function (props) {
        var _a, _b, _c, _d, _e;
        var _this = this;
        var activeBarStyle = (props.position === 'left' || props.position === 'right') ? {
            height: "40px",
            transform: "translateY(" + props.activeIndex * 40 + "px)"
        } : {
            width: this._width + "px",
            transform: "translateX(" + this._x + "px)"
        };
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-tabs', (_a = {},
            _a["o-tabs--" + props.position] = props.position,
            _a["o-tabs--" + props.type] = props.type,
            _a))),
            omi_1.h("div", { class: omi_1.classNames('o-tabs__header', (_b = {},
                    _b["is-" + props.position] = props.position,
                    _b)) },
                omi_1.h("div", { class: omi_1.classNames('o-tabs__nav-wrap', (_c = {},
                        _c["is-" + props.position] = props.position,
                        _c)) },
                    omi_1.h("div", { class: "o-tabs__nav-scroll" },
                        omi_1.h("div", { role: "tablist", class: omi_1.classNames('o-tabs__nav', (_d = {},
                                _d["is-" + props.position] = props.position,
                                _d)) },
                            !props.type && omi_1.h("div", { class: omi_1.classNames('o-tabs__active-bar', (_e = {},
                                    _e["is-" + props.position] = props.position,
                                    _e)), style: activeBarStyle }),
                            props.list.map(function (tab, index) {
                                var _a;
                                _this._tempTagName = 'o-icon-' + tab.icon;
                                return omi_1.h("div", __assign({ ref: function (e) { _this['$tab' + index] = e; }, role: "tab", onClick: function (evt) { return props.activeIndex !== index && _this.onTabClick(evt, index); }, tabindex: props.active === index ? '0' : -1 }, omi_1.extractClass(props, 'o-tabs__item', (_a = {},
                                    _a["is-" + props.position] = props.position,
                                    _a['is-active'] = props.activeIndex === index,
                                    _a['is-closable'] = props.closable,
                                    _a))),
                                    tab.icon && omi_1.h(_this._tempTagName, null),
                                    tab.label,
                                    props.closable && omi_1.h("svg", { onClick: function (_) { _this.removeTab(index); }, class: "o-icon-close", style: props.activeIndex === index && "visibility: visible;", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                        omi_1.h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })));
                            })),
                        props.addable && omi_1.h("svg", { class: "o-icon-add", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true", onClick: this.onAddIconClick },
                            omi_1.h("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })))))));
    };
    Tabs.css = css;
    Tabs.defaultProps = {
        position: 'top',
        closable: false,
        addable: false
    };
    Tabs.propTypes = {
        list: Array,
        activeIndex: Number,
        type: String,
        position: String,
        closable: Boolean,
        addable: Boolean
    };
    Tabs = __decorate([
        omi_1.tag('o-tabs')
    ], Tabs);
    return Tabs;
}(omi_1.WeElement));
exports.default = Tabs;


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