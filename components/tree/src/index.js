(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OTree"] = factory(require("omi"));
	else
		root["OTree"] = factory(root["Omi"]);
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

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.o-fade-in-enter,\n.o-fade-in-leave-active,\n.o-fade-in-linear-enter,\n.o-fade-in-linear-leave,\n.o-fade-in-linear-leave-active,\n.fade-in-linear-enter,\n.fade-in-linear-leave,\n.fade-in-linear-leave-active {\n  opacity: 0; }\n\n.o-checkbox,\n.o-checkbox__input {\n  display: inline-block;\n  position: relative; }\n\n.fade-in-linear-enter-active,\n.fade-in-linear-leave-active {\n  -webkit-transition: opacity .2s linear;\n  transition: opacity .2s linear; }\n\n.o-fade-in-linear-enter-active,\n.o-fade-in-linear-leave-active {\n  -webkit-transition: opacity .2s linear;\n  transition: opacity .2s linear; }\n\n.o-fade-in-enter-active,\n.o-fade-in-leave-active {\n  -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1); }\n\n.o-zoom-in-center-enter-active,\n.o-zoom-in-center-leave-active {\n  -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1); }\n\n.o-zoom-in-center-enter,\n.o-zoom-in-center-leave-active {\n  opacity: 0;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0); }\n\n.o-zoom-in-top-enter-active,\n.o-zoom-in-top-leave-active {\n  opacity: 1;\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform-origin: center top;\n  transform-origin: center top; }\n\n.o-zoom-in-top-enter,\n.o-zoom-in-top-leave-active {\n  opacity: 0;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0); }\n\n.o-zoom-in-bottom-enter-active,\n.o-zoom-in-bottom-leave-active {\n  opacity: 1;\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom; }\n\n.o-zoom-in-bottom-enter,\n.o-zoom-in-bottom-leave-active {\n  opacity: 0;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0); }\n\n.o-zoom-in-left-enter-active,\n.o-zoom-in-left-leave-active {\n  opacity: 1;\n  -webkit-transform: scale(1, 1);\n  transform: scale(1, 1);\n  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform-origin: top left;\n  transform-origin: top left; }\n\n.o-zoom-in-left-enter,\n.o-zoom-in-left-leave-active {\n  opacity: 0;\n  -webkit-transform: scale(0.45, 0.45);\n  transform: scale(0.45, 0.45); }\n\n.collapse-transition {\n  -webkit-transition: .3s height ease-in-out, .3s padding-top ease-in-out, .3s padding-bottom ease-in-out;\n  transition: .3s height ease-in-out, .3s padding-top ease-in-out, .3s padding-bottom ease-in-out; }\n\n.horizontal-collapse-transition {\n  -webkit-transition: .3s width ease-in-out, .3s padding-left ease-in-out, .3s padding-right ease-in-out;\n  transition: .3s width ease-in-out, .3s padding-left ease-in-out, .3s padding-right ease-in-out; }\n\n.o-list-enter-active,\n.o-list-leave-active {\n  -webkit-transition: all 1s;\n  transition: all 1s; }\n\n.o-list-enter,\n.o-list-leave-active {\n  opacity: 0;\n  -webkit-transform: translateY(-30px);\n  transform: translateY(-30px); }\n\n.o-opacity-transition {\n  -webkit-transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1); }\n\n.o-checkbox {\n  color: #606266;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  margin-right: 30px; }\n\n.o-checkbox.is-bordered {\n  padding: 9px 20px 9px 10px;\n  border-radius: 4px;\n  border: 1px solid #DCDFE6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  line-height: normal;\n  height: 40px; }\n\n.o-checkbox.is-bordered.is-checked {\n  border-color: #409EFF; }\n\n.o-checkbox.is-bordered.is-disabled {\n  border-color: #EBEEF5;\n  cursor: not-allowed; }\n\n.o-checkbox.is-bordered + .o-checkbox.is-bordered {\n  margin-left: 10px; }\n\n.o-checkbox.is-bordered.o-checkbox--medium {\n  padding: 7px 20px 7px 10px;\n  border-radius: 4px;\n  height: 36px; }\n\n.o-checkbox.is-bordered.o-checkbox--medium .o-checkbox__label {\n  line-height: 17px;\n  font-size: 14px; }\n\n.o-checkbox.is-bordered.o-checkbox--medium .o-checkbox__inner {\n  height: 14px;\n  width: 14px; }\n\n.o-checkbox.is-bordered.o-checkbox--small {\n  padding: 5px 15px 5px 10px;\n  border-radius: 3px;\n  height: 32px; }\n\n.o-checkbox.is-bordered.o-checkbox--small .o-checkbox__label {\n  line-height: 15px;\n  font-size: 12px; }\n\n.o-checkbox.is-bordered.o-checkbox--small .o-checkbox__inner {\n  height: 12px;\n  width: 12px; }\n\n.o-checkbox.is-bordered.o-checkbox--small .o-checkbox__inner::after {\n  height: 6px;\n  width: 2px; }\n\n.o-checkbox.is-bordered.o-checkbox--mini {\n  padding: 3px 15px 3px 10px;\n  border-radius: 3px;\n  height: 28px; }\n\n.o-checkbox.is-bordered.o-checkbox--mini .o-checkbox__label {\n  line-height: 12px;\n  font-size: 12px; }\n\n.o-checkbox-button__inner,\n.o-checkbox__input {\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  outline: 0; }\n\n.o-checkbox.is-bordered.o-checkbox--mini .o-checkbox__inner {\n  height: 12px;\n  width: 12px; }\n\n.o-checkbox.is-bordered.o-checkbox--mini .o-checkbox__inner::after {\n  height: 6px;\n  width: 2px; }\n\n.o-checkbox__input {\n  cursor: pointer; }\n\n.o-checkbox__input.is-disabled .o-checkbox__inner {\n  background-color: #edf2fc;\n  border-color: #DCDFE6;\n  cursor: not-allowed; }\n\n.o-checkbox__input.is-disabled .o-checkbox__inner::after {\n  cursor: not-allowed;\n  border-color: #C0C4CC; }\n\n.o-checkbox__input.is-disabled .o-checkbox__inner + .o-checkbox__label {\n  cursor: not-allowed; }\n\n.o-checkbox__input.is-disabled.is-checked .o-checkbox__inner {\n  background-color: #F2F6FC;\n  border-color: #DCDFE6; }\n\n.o-checkbox__input.is-disabled.is-checked .o-checkbox__inner::after {\n  border-color: #C0C4CC; }\n\n.o-checkbox__input.is-disabled.is-indeterminate .o-checkbox__inner {\n  background-color: #F2F6FC;\n  border-color: #DCDFE6; }\n\n.o-checkbox__input.is-disabled.is-indeterminate .o-checkbox__inner::before {\n  background-color: #C0C4CC;\n  border-color: #C0C4CC; }\n\n.o-checkbox__input.is-checked .o-checkbox__inner,\n.o-checkbox__input.is-indeterminate .o-checkbox__inner {\n  background-color: #409EFF;\n  border-color: #409EFF; }\n\n.o-checkbox__input.is-disabled + span.o-checkbox__label {\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.o-checkbox__input.is-checked .o-checkbox__inner::after {\n  -webkit-transform: rotate(45deg) scaleY(1);\n  transform: rotate(45deg) scaleY(1); }\n\n.o-checkbox__input.is-checked + .o-checkbox__label {\n  color: #409EFF; }\n\n.o-checkbox__input.is-focus .o-checkbox__inner {\n  border-color: #409EFF; }\n\n.o-checkbox__input.is-indeterminate .o-checkbox__inner::before {\n  content: '';\n  position: absolute;\n  display: block;\n  background-color: #FFF;\n  height: 2px;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  left: 0;\n  right: 0;\n  top: 5px; }\n\n.o-checkbox__input.is-indeterminate .o-checkbox__inner::after {\n  display: none; }\n\n.o-checkbox__inner {\n  display: inline-block;\n  position: relative;\n  border: 1px solid #DCDFE6;\n  border-radius: 2px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  background-color: #FFF;\n  z-index: 1;\n  -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);\n  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46); }\n\n.o-checkbox__inner:hover {\n  border-color: #409EFF; }\n\n.o-checkbox__inner::after {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  content: \"\";\n  border: 1px solid #FFF;\n  border-left: 0;\n  border-top: 0;\n  height: 7px;\n  left: 4px;\n  position: absolute;\n  top: 1px;\n  -webkit-transform: rotate(45deg) scaleY(0);\n  transform: rotate(45deg) scaleY(0);\n  width: 3px;\n  -webkit-transition: -webkit-transform .15s ease-in .05s;\n  transition: -webkit-transform .15s ease-in .05s;\n  transition: transform .15s ease-in .05s;\n  transition: transform .15s ease-in .05s, -webkit-transform .15s ease-in .05s;\n  -webkit-transform-origin: center;\n  transform-origin: center; }\n\n.o-checkbox__original {\n  opacity: 0;\n  outline: 0;\n  position: absolute;\n  margin: 0;\n  width: 0;\n  height: 0;\n  z-index: -1; }\n\n.o-checkbox-button,\n.o-checkbox-button__inner {\n  display: inline-block;\n  position: relative; }\n\n.o-checkbox__label {\n  display: inline-block;\n  padding-left: 10px;\n  line-height: 19px;\n  font-size: 14px; }\n\n.o-checkbox:last-of-type {\n  margin-right: 0; }\n\n.o-checkbox-button__inner {\n  font-weight: 500;\n  cursor: pointer;\n  background: #FFF;\n  border: 1px solid #DCDFE6;\n  border-left: 0;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 0; }\n\n.o-checkbox-button__inner.is-round {\n  padding: 12px 20px; }\n\n.o-checkbox-button__inner:hover {\n  color: #409EFF; }\n\n.o-checkbox-button__inner [class*=el-icon-] {\n  line-height: .9; }\n\n.o-checkbox-button__inner [class*=el-icon-] + span {\n  margin-left: 5px; }\n\n.o-checkbox-button__original {\n  opacity: 0;\n  outline: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1; }\n\n.o-checkbox-button.is-checked .o-checkbox-button__inner {\n  color: #FFF;\n  background-color: #409EFF;\n  border-color: #409EFF;\n  -webkit-box-shadow: -1px 0 0 0 #8cc5ff;\n  box-shadow: -1px 0 0 0 #8cc5ff; }\n\n.o-checkbox-button.is-checked:first-child .o-checkbox-button__inner {\n  border-left-color: #409EFF; }\n\n.o-checkbox-button.is-disabled .o-checkbox-button__inner {\n  color: #C0C4CC;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #FFF;\n  border-color: #EBEEF5;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.o-checkbox-button.is-disabled:first-child .o-checkbox-button__inner {\n  border-left-color: #EBEEF5; }\n\n.o-checkbox-button:first-child .o-checkbox-button__inner {\n  border-left: 1px solid #DCDFE6;\n  border-radius: 4px 0 0 4px;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important; }\n\n.o-checkbox-button.is-focus .o-checkbox-button__inner {\n  border-color: #409EFF; }\n\n.o-checkbox-button:last-child .o-checkbox-button__inner {\n  border-radius: 0 4px 4px 0; }\n\n.o-checkbox-button--medium .o-checkbox-button__inner {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 0; }\n\n.o-checkbox-button--medium .o-checkbox-button__inner.is-round {\n  padding: 10px 20px; }\n\n.o-checkbox-button--small .o-checkbox-button__inner {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 0; }\n\n.o-checkbox-button--small .o-checkbox-button__inner.is-round {\n  padding: 9px 15px; }\n\n.o-checkbox-button--mini .o-checkbox-button__inner {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 0; }\n\n.o-checkbox-button--mini .o-checkbox-button__inner.is-round {\n  padding: 7px 15px; }\n\n.o-checkbox-group {\n  font-size: 0; }\n\n.o-tree {\n  position: relative;\n  cursor: default;\n  background: #FFF;\n  color: #606266; }\n\n.o-tree__empty-block {\n  position: relative;\n  min-height: 60px;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n\n.o-tree__empty-text {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  color: #909399;\n  font-size: 14px; }\n\n.o-tree__drop-indicator {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #409EFF; }\n\n.o-tree-node {\n  white-space: nowrap;\n  outline: 0;\n  position: relative;\n  display: block; }\n\n.o-tree-node:focus > .o-tree-node__content {\n  background-color: #F5F7FA; }\n\n.o-tree-node.is-drop-inner > .o-tree-node__content .o-tree-node__label {\n  background-color: #409EFF;\n  color: #fff; }\n\n.o-tree-node__content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 26px;\n  cursor: pointer; }\n\n.o-tree-node__content > .o-tree-node__expand-icon {\n  padding: 6px; }\n\n.o-tree-node__content > label.o-checkbox {\n  margin-right: 8px; }\n\n.o-tree-node__content:hover {\n  background-color: #F5F7FA; }\n\n.o-tree.is-dragging .o-tree-node__content {\n  cursor: move; }\n\n.o-tree.is-dragging .o-tree-node__content * {\n  pointer-events: none; }\n\n.o-tree.is-dragging.is-drop-not-allow .o-tree-node__content {\n  cursor: not-allowed; }\n\n.o-tree-node__expand-icon {\n  cursor: pointer;\n  color: #C0C4CC;\n  font-size: 12px;\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg); }\n\n.o-tree-node__expand-icon.expanded {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg); }\n\n.o-tree-node__expand-icon.is-leaf {\n  color: transparent;\n  cursor: default;\n  width: 12px;\n  height: 12px; }\n\n.o-tree-node__label {\n  font-size: 14px; }\n\n.o-tree-node__loading-icon {\n  margin-right: 8px;\n  font-size: 14px;\n  color: #C0C4CC; }\n\n.o-tree-node > .o-tree-node__children {\n  overflow: hidden;\n  background-color: transparent; }\n\n.o-tree-node.is-expanded > .o-tree-node__children {\n  display: block; }\n\n.o-tree-node.is-current-blur > .o-tree-node__content {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.o-tree-node.is-current > .o-tree-node__content {\n  background-color: rgba(7, 193, 96, 0.241);\n  background-color: var(--o-primary-fade-more, rgba(7, 193, 96, 0.241)); }\n\n.sign {\n  position: absolute;\n  font-size: 10px;\n  top: 4px;\n  right: 4px; }\n\n.action-icons {\n  position: absolute;\n  font-size: 10px;\n  top: 4px;\n  right: 4px; }\n\n.action-icon {\n  display: inline-block;\n  font-size: 15px;\n  margin-left: 15px;\n  cursor: pointer; }\n\n.edit-input {\n  width: 100%; }\n\n.o-tree-node__label {\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-right: 32px; }\n\n.o-tree-node__label.is-editing {\n  text-overflow: unset; }\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  color: inherit; }\n\na {\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
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


        var result = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

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
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onNodeClick = function (node) {
            node.expanded = !node.expanded;
            if (_this.prevSelectedNode) {
                _this.prevSelectedNode.selected = false;
            }
            // if (this.prevBlurSelectedNode) {
            //   this.prevBlurSelectedNode.selectedBlur = false
            // }
            node.selected = true;
            _this.forceUpdate();
            _this.fire('node-click', node);
        };
        _this.onNodeArrowClick = function (node) {
            _this.fire('node-arrow-click', node);
            _this.fire('node-click', node);
        };
        _this.onContextMenu = function (evt, node) {
            evt.stopPropagation();
            evt.preventDefault();
            _this.fire('context-menu', {
                evt: evt,
                node: node
            });
        };
        _this.onActionIcon = function (evt, icon) {
            evt.stopPropagation();
            _this.fire('action-icon-click', icon);
        };
        _this.onEditInputBlur = function () {
            //这个if防止 enter 和这失去焦点冲突
            if (_this.prevSelectedNode.editing) {
                _this.prevSelectedNode.editing = false;
                _this.forceUpdate();
            }
        };
        _this.onEditInputChange = function (evt) {
            _this.prevSelectedNode.label = evt.target.value;
            _this.forceUpdate();
        };
        return _this;
    }
    Tree.prototype.fold = function () {
        var _this = this;
        this.props.data.forEach(function (node) {
            _this._fold(node);
        });
        this.forceUpdate();
        this.fire('fold');
    };
    Tree.prototype._fold = function (node) {
        var _this = this;
        node.expanded = false;
        if (node.children) {
            node.children.forEach(function (child) {
                _this._fold(child);
            });
        }
    };
    Tree.prototype.installed = function () {
        // window.addEventListener('click', (evt) => {
        //   this.prevSelectedNode.selected = false
        //   this.prevSelectedNode.selectedBlur = true
        //   this.prevBlurSelectedNode = this.prevSelectedNode
        //   this.prevSelectedNode = null
        //   this.forceUpdate()
        // })
        // window.addEventListener('keydown', (evt) => {
        //   //enter
        //   if (evt.keyCode === 13) {
        //     if (this.prevSelectedNode) {
        //       if (this.prevSelectedNode.editing) {
        //         this.prevSelectedNode.editing = false
        //         this.prevSelectedNode.label = this.editInput.value
        //         //防止这个错误 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is no longer a child of this node. Perhaps it was moved in a 'blur' event handler?
        //         this.editInput.blur()
        //         this.forceUpdate()
        //       } else {
        //         this.prevSelectedNode.editing = true
        //         this.forceUpdate()
        //         this.editInput.focus()
        //       }
        //     }
        //   }
        // })
    };
    Tree.prototype.isURL = function (str) {
        return str.indexOf('http') === 0 || str.indexOf('//') === 0;
    };
    Tree.prototype.renderNode = function (node, level) {
        var _this = this;
        if (node.selected) {
            this.prevSelectedNode = node;
        }
        this._tempTagName = 'o-icon-' + node.icon;
        this._nodeTagName = node.href ? 'a' : 'div';
        return (omi_1.h(this._nodeTagName, __assign({ href: node.href, target: node.target, role: "treeitem", onContextMenu: function (evt) { _this.onContextMenu(evt, node); }, onClick: function (evt) {
                evt.stopPropagation();
                if (!(node.href && _this.isURL(node.href))) {
                    _this.onNodeClick(node);
                }
            } }, omi_1.extractClass({}, 'o-tree-node', {
            'is-expanded': node.expanded,
            'is-current': node.selected,
        })),
            omi_1.h("div", { class: "o-tree-node__content", style: "padding-left: " + level * this.props.padding + "px;" },
                (node.children && node.children.length > 0) ? omi_1.h("svg", __assign({ onClick: function (_) { return _this.onNodeArrowClick(node); }, viewBox: "0 0 1024 1024" }, omi_1.extractClass({}, 'o-tree-node__expand-icon', {
                    'expanded': node.expanded,
                }), { "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false" }),
                    omi_1.h("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" })) : omi_1.h("span", { class: "is-leaf o-tree-node__expand-icon" }),
                omi_1.h("span", __assign({ style: node.color && { color: node.color } }, omi_1.extractClass({}, 'o-tree-node__label', {
                    'is-editing': node.editing
                })),
                    node.icon && omi_1.h(this._tempTagName, null),
                    node.editing ? omi_1.h("input", { value: node.label, onChange: this.onEditInputChange, onBlur: this.onEditInputBlur, ref: function (_) { return _this.editInput = _; }, class: "edit-input", onClick: function (evt) { return evt.stopPropagation(); } }) : node.label)),
            node.expanded && node.children && node.children.length > 0 && omi_1.h("div", { role: "group", class: "o-tree-node__children", style: "", "aria-expanded": "true", "data-old-padding-top": "", "data-old-padding-bottom": "", "data-old-overflow": "" }, node.children.map(function (child) {
                return _this.renderNode(child, level + 1);
            })),
            (!node.editing && node.actionIcons) &&
                omi_1.h("div", { class: "action-icons" }, node.actionIcons.map(function (actionIcon) {
                    _this._tempTagName = 'o-icon-' + actionIcon;
                    return omi_1.h(_this._tempTagName, { onclick: function (_) { return _this.onActionIcon(_, actionIcon); }, class: "action-icon" });
                })),
            (!node.editing && node.sign) && omi_1.h("span", { style: node.color && { color: node.color }, class: "sign" }, node.sign)));
    };
    Tree.prototype.render = function (props) {
        var _this = this;
        return (omi_1.h("div", { role: "tree", class: "o-tree" }, props.data.map(function (node) {
            return _this.renderNode(node, 0);
        })));
    };
    Tree.css = css;
    Tree.defaultProps = {
        padding: 10
    };
    Tree.propTypes = {
        data: Array,
        padding: Number
    };
    Tree = __decorate([
        omi_1.tag('o-tree')
    ], Tree);
    return Tree;
}(omi_1.WeElement));
exports.default = Tree;


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