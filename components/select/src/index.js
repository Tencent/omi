(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OActionSheet"] = factory(require("omi"));
	else
		root["OActionSheet"] = factory(root["Omi"]);
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
exports.push([module.i, ".o-popper .popper__arrow,\n.o-popper .popper__arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.o-popper .popper__arrow {\n  border-width: 6px;\n  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03)); }\n\n.o-popper .popper__arrow::after {\n  content: \" \";\n  border-width: 6px; }\n\n.o-popper[x-placement^=top] {\n  margin-bottom: 12px; }\n\n.o-popper[x-placement^=top] .popper__arrow {\n  bottom: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-color: #EBEEF5;\n  border-bottom-width: 0; }\n\n.o-popper[x-placement^=top] .popper__arrow::after {\n  bottom: 1px;\n  margin-left: -6px;\n  border-top-color: #FFF;\n  border-bottom-width: 0; }\n\n.o-popper[x-placement^=bottom] {\n  margin-top: 12px; }\n\n.o-popper[x-placement^=bottom] .popper__arrow {\n  top: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-width: 0;\n  border-bottom-color: #EBEEF5; }\n\n.o-popper[x-placement^=bottom] .popper__arrow::after {\n  top: 1px;\n  margin-left: -6px;\n  border-top-width: 0;\n  border-bottom-color: #FFF; }\n\n.o-popper[x-placement^=right] {\n  margin-left: 12px; }\n\n.o-popper[x-placement^=right] .popper__arrow {\n  top: 50%;\n  left: -6px;\n  margin-bottom: 3px;\n  border-right-color: #EBEEF5;\n  border-left-width: 0; }\n\n.o-popper[x-placement^=right] .popper__arrow::after {\n  bottom: -6px;\n  left: 1px;\n  border-right-color: #FFF;\n  border-left-width: 0; }\n\n.o-popper[x-placement^=left] {\n  margin-right: 12px; }\n\n.o-popper[x-placement^=left] .popper__arrow {\n  top: 50%;\n  right: -6px;\n  margin-bottom: 3px;\n  border-right-width: 0;\n  border-left-color: #EBEEF5; }\n\n.o-popper[x-placement^=left] .popper__arrow::after {\n  right: 1px;\n  bottom: -6px;\n  margin-left: -6px;\n  border-right-width: 0;\n  border-left-color: #FFF; }\n\n.o-select-dropdown {\n  position: absolute;\n  z-index: 1001;\n  border: 1px solid #E4E7ED;\n  border-radius: 4px;\n  background-color: #FFF;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 5px 0; }\n\n.o-select-dropdown.is-multiple .o-select-dropdown__item.selected {\n  color: #07c160;\n  background-color: #FFF; }\n\n.o-select-dropdown.is-multiple .o-select-dropdown__item.selected.hover {\n  background-color: #F5F7FA; }\n\n.o-select-dropdown.is-multiple .o-select-dropdown__item.selected::after {\n  position: absolute;\n  right: 20px;\n  font-family: element-icons;\n  content: \"\\E6DA\";\n  font-size: 12px;\n  font-weight: 700;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.o-select-dropdown .o-scrollbar.is-empty .o-select-dropdown__list {\n  padding: 0; }\n\n.o-select-dropdown__empty {\n  padding: 10px 0;\n  margin: 0;\n  text-align: center;\n  color: #999;\n  font-size: 14px; }\n\n.o-select-dropdown__wrap {\n  max-height: 274px; }\n\n.o-select-dropdown__list {\n  list-style: none;\n  padding: 6px 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-textarea {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  vertical-align: bottom;\n  font-size: 14px; }\n\n.o-textarea__inner {\n  display: block;\n  resize: vertical;\n  padding: 5px 15px;\n  line-height: 1.5;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  font-size: inherit;\n  color: #606266;\n  background-color: #FFF;\n  background-image: none;\n  border: 1px solid #DCDFE6;\n  border-radius: 4px;\n  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.o-textarea__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-textarea__inner:hover {\n  border-color: #C0C4CC; }\n\n.o-textarea__inner:focus {\n  outline: 0;\n  border-color: #07c160; }\n\n.o-textarea .o-input__count {\n  color: #909399;\n  background: #FFF;\n  position: absolute;\n  font-size: 12px;\n  bottom: 5px;\n  right: 10px; }\n\n.o-textarea.is-disabled .o-textarea__inner {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.o-textarea.is-disabled .o-textarea__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-disabled .o-textarea__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-disabled .o-textarea__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-disabled .o-textarea__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-textarea.is-exceed .o-textarea__inner {\n  border-color: #F56C6C; }\n\n.o-textarea.is-exceed .o-input__count {\n  color: #F56C6C; }\n\n.o-input {\n  position: relative;\n  font-size: 14px;\n  display: inline-block;\n  width: 100%; }\n\n.o-input::-webkit-scrollbar {\n  z-index: 11;\n  width: 6px; }\n\n.o-input::-webkit-scrollbar:horizontal {\n  height: 6px; }\n\n.o-input::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  width: 6px;\n  background: #b4bccc; }\n\n.o-input::-webkit-scrollbar-corner {\n  background: #fff; }\n\n.o-input::-webkit-scrollbar-track {\n  background: #fff; }\n\n.o-input::-webkit-scrollbar-track-piece {\n  background: #fff;\n  width: 6px; }\n\n.o-input .o-input__clear {\n  color: #C0C4CC;\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.o-input .o-input__clear:hover {\n  color: #909399; }\n\n.o-input .o-input__count {\n  height: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: #909399;\n  font-size: 12px; }\n\n.o-input .o-input__count .o-input__count-inner {\n  background: #FFF;\n  line-height: initial;\n  display: inline-block;\n  padding: 0 5px; }\n\n.o-input__inner {\n  -webkit-appearance: none;\n  background-color: #FFF;\n  background-image: none;\n  border-radius: 4px;\n  border: 1px solid #DCDFE6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #606266;\n  display: inline-block;\n  font-size: inherit;\n  height: 40px;\n  line-height: 40px;\n  outline: 0;\n  padding: 0 15px;\n  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 100%; }\n\n.o-select-dropdown__item,\n.o-tag {\n  white-space: nowrap;\n  -webkit-box-sizing: border-box; }\n\n.o-input__prefix,\n.o-input__suffix {\n  position: absolute;\n  top: 0;\n  -webkit-transition: all .3s;\n  height: 100%;\n  color: #C0C4CC;\n  text-align: center; }\n\n.o-input__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-input__inner:hover {\n  border-color: #C0C4CC; }\n\n.o-input.is-active .o-input__inner,\n.o-input__inner:focus {\n  border-color: #07c160;\n  outline: 0; }\n\n.o-input__suffix {\n  right: 5px;\n  transition: all .3s;\n  pointer-events: none; }\n\n.o-input__suffix-inner {\n  pointer-events: all; }\n\n.o-input__prefix {\n  left: 5px;\n  transition: all .3s; }\n\n.o-input__icon {\n  height: 100%;\n  width: 25px;\n  text-align: center;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  line-height: 40px; }\n\n.o-input__icon:after {\n  content: '';\n  height: 100%;\n  width: 0;\n  display: inline-block;\n  vertical-align: middle; }\n\n.o-input__validateIcon {\n  pointer-events: none; }\n\n.o-input.is-disabled .o-input__inner {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.o-input.is-disabled .o-input__inner::-webkit-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__inner:-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__inner::-ms-input-placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__inner::placeholder {\n  color: #C0C4CC; }\n\n.o-input.is-disabled .o-input__icon {\n  cursor: not-allowed; }\n\n.o-input.is-exceed .o-input__inner {\n  border-color: #F56C6C; }\n\n.o-input.is-exceed .o-input__suffix .o-input__count {\n  color: #F56C6C; }\n\n.o-input--suffix .o-input__inner {\n  padding-right: 30px; }\n\n.o-input--prefix .o-input__inner {\n  padding-left: 30px; }\n\n.o-input--medium {\n  font-size: 14px; }\n\n.o-input--medium .o-input__inner {\n  height: 36px;\n  line-height: 36px; }\n\n.o-input--medium .o-input__icon {\n  line-height: 36px; }\n\n.o-input--small {\n  font-size: 13px; }\n\n.o-input--small .o-input__inner {\n  height: 32px;\n  line-height: 32px; }\n\n.o-input--small .o-input__icon {\n  line-height: 32px; }\n\n.o-input--mini {\n  font-size: 12px; }\n\n.o-input--mini .o-input__inner {\n  height: 28px;\n  line-height: 28px; }\n\n.o-input--mini .o-input__icon {\n  line-height: 28px; }\n\n.o-input-group {\n  line-height: normal;\n  display: inline-table;\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0; }\n\n.o-input-group > .o-input__inner {\n  vertical-align: middle;\n  display: table-cell; }\n\n.o-input-group__append,\n.o-input-group__prepend {\n  background-color: #F5F7FA;\n  color: #909399;\n  vertical-align: middle;\n  display: table-cell;\n  position: relative;\n  border: 1px solid #DCDFE6;\n  border-radius: 4px;\n  padding: 0 20px;\n  width: 1px;\n  white-space: nowrap; }\n\n.o-input-group--prepend .o-input__inner,\n.o-input-group__append {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.o-input-group--append .o-input__inner,\n.o-input-group__prepend {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.o-input-group__append:focus,\n.o-input-group__prepend:focus {\n  outline: 0; }\n\n.o-input-group__append .o-button,\n.o-input-group__append .o-select,\n.o-input-group__prepend .o-button,\n.o-input-group__prepend .o-select {\n  display: inline-block;\n  margin: -10px -20px; }\n\n.o-input-group__append button.o-button,\n.o-input-group__append div.o-select .o-input__inner,\n.o-input-group__append div.o-select:hover .o-input__inner,\n.o-input-group__prepend button.o-button,\n.o-input-group__prepend div.o-select .o-input__inner,\n.o-input-group__prepend div.o-select:hover .o-input__inner {\n  border-color: transparent;\n  background-color: transparent;\n  color: inherit;\n  border-top: 0;\n  border-bottom: 0; }\n\n.o-input-group__append .o-button,\n.o-input-group__append .o-input,\n.o-input-group__prepend .o-button,\n.o-input-group__prepend .o-input {\n  font-size: inherit; }\n\n.o-input-group__prepend {\n  border-right: 0; }\n\n.o-input-group__append {\n  border-left: 0; }\n\n.o-input-group--append .o-select .o-input.is-focus .o-input__inner,\n.o-input-group--prepend .o-select .o-input.is-focus .o-input__inner {\n  border-color: transparent; }\n\n.o-input__inner::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0; }\n\n.o-tag {\n  background-color: #ecf5ff;\n  border-color: #d9ecff;\n  display: inline-block;\n  height: 32px;\n  padding: 0 10px;\n  line-height: 30px;\n  font-size: 12px;\n  color: #07c160;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\n.o-tag.is-hit {\n  border-color: #07c160; }\n\n.o-tag .o-tag__close {\n  color: #07c160; }\n\n.o-tag .o-tag__close:hover {\n  color: #FFF;\n  background-color: #07c160; }\n\n.o-tag.o-tag--info {\n  background-color: #f4f4f5;\n  border-color: #e9e9eb;\n  color: #909399; }\n\n.o-tag.o-tag--info.is-hit {\n  border-color: #909399; }\n\n.o-tag.o-tag--info .o-tag__close {\n  color: #909399; }\n\n.o-tag.o-tag--info .o-tag__close:hover {\n  color: #FFF;\n  background-color: #909399; }\n\n.o-tag.o-tag--success {\n  background-color: #f0f9eb;\n  border-color: #e1f3d8;\n  color: #67c23a; }\n\n.o-tag.o-tag--success.is-hit {\n  border-color: #67C23A; }\n\n.o-tag.o-tag--success .o-tag__close {\n  color: #67c23a; }\n\n.o-tag.o-tag--success .o-tag__close:hover {\n  color: #FFF;\n  background-color: #67c23a; }\n\n.o-tag.o-tag--warning {\n  background-color: #fdf6ec;\n  border-color: #faecd8;\n  color: #e6a23c; }\n\n.o-tag.o-tag--warning.is-hit {\n  border-color: #E6A23C; }\n\n.o-tag.o-tag--warning .o-tag__close {\n  color: #e6a23c; }\n\n.o-tag.o-tag--warning .o-tag__close:hover {\n  color: #FFF;\n  background-color: #e6a23c; }\n\n.o-tag.o-tag--danger {\n  background-color: #fef0f0;\n  border-color: #fde2e2;\n  color: #f56c6c; }\n\n.o-tag.o-tag--danger.is-hit {\n  border-color: #F56C6C; }\n\n.o-tag.o-tag--danger .o-tag__close {\n  color: #f56c6c; }\n\n.o-tag.o-tag--danger .o-tag__close:hover {\n  color: #FFF;\n  background-color: #f56c6c; }\n\n.o-tag .o-icon-close {\n  border-radius: 50%;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 16px;\n  vertical-align: middle;\n  top: -1px;\n  right: -5px; }\n\n.o-tag .o-icon-close::before {\n  display: block; }\n\n.o-tag--dark {\n  background-color: #07c160;\n  border-color: #07c160;\n  color: #fff; }\n\n.o-tag--dark.is-hit {\n  border-color: #07c160; }\n\n.o-tag--dark .o-tag__close {\n  color: #fff; }\n\n.o-tag--dark .o-tag__close:hover {\n  color: #FFF;\n  background-color: #66b1ff; }\n\n.o-tag--dark.o-tag--info {\n  background-color: #909399;\n  border-color: #909399;\n  color: #fff; }\n\n.o-tag--dark.o-tag--info.is-hit {\n  border-color: #909399; }\n\n.o-tag--dark.o-tag--info .o-tag__close {\n  color: #fff; }\n\n.o-tag--dark.o-tag--info .o-tag__close:hover {\n  color: #FFF;\n  background-color: #a6a9ad; }\n\n.o-tag--dark.o-tag--success {\n  background-color: #67c23a;\n  border-color: #67c23a;\n  color: #fff; }\n\n.o-tag--dark.o-tag--success.is-hit {\n  border-color: #67C23A; }\n\n.o-tag--dark.o-tag--success .o-tag__close {\n  color: #fff; }\n\n.o-tag--dark.o-tag--success .o-tag__close:hover {\n  color: #FFF;\n  background-color: #85ce61; }\n\n.o-tag--dark.o-tag--warning {\n  background-color: #e6a23c;\n  border-color: #e6a23c;\n  color: #fff; }\n\n.o-tag--dark.o-tag--warning.is-hit {\n  border-color: #E6A23C; }\n\n.o-tag--dark.o-tag--warning .o-tag__close {\n  color: #fff; }\n\n.o-tag--dark.o-tag--warning .o-tag__close:hover {\n  color: #FFF;\n  background-color: #ebb563; }\n\n.o-tag--dark.o-tag--danger {\n  background-color: #f56c6c;\n  border-color: #f56c6c;\n  color: #fff; }\n\n.o-tag--dark.o-tag--danger.is-hit {\n  border-color: #F56C6C; }\n\n.o-tag--dark.o-tag--danger .o-tag__close {\n  color: #fff; }\n\n.o-tag--dark.o-tag--danger .o-tag__close:hover {\n  color: #FFF;\n  background-color: #f78989; }\n\n.o-tag--plain {\n  background-color: #fff;\n  border-color: #b3d8ff;\n  color: #07c160; }\n\n.o-tag--plain.is-hit {\n  border-color: #07c160; }\n\n.o-tag--plain .o-tag__close {\n  color: #07c160; }\n\n.o-tag--plain .o-tag__close:hover {\n  color: #FFF;\n  background-color: #07c160; }\n\n.o-tag--plain.o-tag--info {\n  background-color: #fff;\n  border-color: #d3d4d6;\n  color: #909399; }\n\n.o-tag--plain.o-tag--info.is-hit {\n  border-color: #909399; }\n\n.o-tag--plain.o-tag--info .o-tag__close {\n  color: #909399; }\n\n.o-tag--plain.o-tag--info .o-tag__close:hover {\n  color: #FFF;\n  background-color: #909399; }\n\n.o-tag--plain.o-tag--success {\n  background-color: #fff;\n  border-color: #c2e7b0;\n  color: #67c23a; }\n\n.o-tag--plain.o-tag--success.is-hit {\n  border-color: #67C23A; }\n\n.o-tag--plain.o-tag--success .o-tag__close {\n  color: #67c23a; }\n\n.o-tag--plain.o-tag--success .o-tag__close:hover {\n  color: #FFF;\n  background-color: #67c23a; }\n\n.o-tag--plain.o-tag--warning {\n  background-color: #fff;\n  border-color: #f5dab1;\n  color: #e6a23c; }\n\n.o-tag--plain.o-tag--warning.is-hit {\n  border-color: #E6A23C; }\n\n.o-tag--plain.o-tag--warning .o-tag__close {\n  color: #e6a23c; }\n\n.o-tag--plain.o-tag--warning .o-tag__close:hover {\n  color: #FFF;\n  background-color: #e6a23c; }\n\n.o-tag--plain.o-tag--danger {\n  background-color: #fff;\n  border-color: #fbc4c4;\n  color: #f56c6c; }\n\n.o-tag--plain.o-tag--danger.is-hit {\n  border-color: #F56C6C; }\n\n.o-tag--plain.o-tag--danger .o-tag__close {\n  color: #f56c6c; }\n\n.o-tag--plain.o-tag--danger .o-tag__close:hover {\n  color: #FFF;\n  background-color: #f56c6c; }\n\n.o-tag--medium {\n  height: 28px;\n  line-height: 26px; }\n\n.o-tag--medium .o-icon-close {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8); }\n\n.o-tag--small {\n  height: 24px;\n  padding: 0 8px;\n  line-height: 22px; }\n\n.o-tag--small .o-icon-close {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8); }\n\n.o-tag--mini {\n  height: 20px;\n  padding: 0 5px;\n  line-height: 19px; }\n\n.o-tag--mini .o-icon-close {\n  margin-left: -3px;\n  -webkit-transform: scale(0.7);\n  transform: scale(0.7); }\n\n.o-select-dropdown__item {\n  font-size: 14px;\n  padding: 0 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #606266;\n  height: 34px;\n  line-height: 34px;\n  box-sizing: border-box;\n  cursor: pointer; }\n\n.o-select-dropdown__item.is-disabled {\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.o-select-dropdown__item.is-disabled:hover {\n  background-color: #FFF; }\n\n.o-select-dropdown__item.hover,\n.o-select-dropdown__item:hover {\n  background-color: #F5F7FA; }\n\n.o-select-dropdown__item.selected {\n  color: #07c160;\n  font-weight: 700; }\n\n.o-select-group {\n  margin: 0;\n  padding: 0; }\n\n.o-select-group__wrap {\n  position: relative;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.o-select-group__wrap:not(:last-of-type) {\n  padding-bottom: 24px; }\n\n.o-select-group__wrap:not(:last-of-type)::after {\n  content: '';\n  position: absolute;\n  display: block;\n  left: 20px;\n  right: 20px;\n  bottom: 12px;\n  height: 1px;\n  background: #E4E7ED; }\n\n.o-select-group__title {\n  padding-left: 20px;\n  font-size: 12px;\n  color: #909399;\n  line-height: 30px; }\n\n.o-select-group .o-select-dropdown__item {\n  padding-left: 20px; }\n\n.o-scrollbar {\n  overflow: hidden;\n  position: relative; }\n\n.o-scrollbar:active > .o-scrollbar__bar,\n.o-scrollbar:focus > .o-scrollbar__bar,\n.o-scrollbar:hover > .o-scrollbar__bar {\n  opacity: 1;\n  -webkit-transition: opacity 340ms ease-out;\n  transition: opacity 340ms ease-out; }\n\n.o-scrollbar__wrap {\n  overflow: scroll;\n  height: 100%; }\n\n.o-scrollbar__wrap--hidden-default {\n  scrollbar-width: none; }\n\n.o-scrollbar__wrap--hidden-default::-webkit-scrollbar {\n  width: 0;\n  height: 0; }\n\n.o-scrollbar__thumb {\n  position: relative;\n  display: block;\n  width: 0;\n  height: 0;\n  cursor: pointer;\n  border-radius: inherit;\n  background-color: rgba(144, 147, 153, 0.3);\n  -webkit-transition: .3s background-color;\n  transition: .3s background-color; }\n\n.o-scrollbar__thumb:hover {\n  background-color: rgba(144, 147, 153, 0.5); }\n\n.o-scrollbar__bar {\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  z-index: 1;\n  border-radius: 4px;\n  opacity: 0;\n  -webkit-transition: opacity 120ms ease-out;\n  transition: opacity 120ms ease-out; }\n\n.o-scrollbar__bar.is-vertical {\n  width: 6px;\n  top: 2px; }\n\n.o-scrollbar__bar.is-vertical > div {\n  width: 100%; }\n\n.o-scrollbar__bar.is-horizontal {\n  height: 6px;\n  left: 2px; }\n\n.o-scrollbar__bar.is-horizontal > div {\n  height: 100%; }\n\n.o-select {\n  display: inline-block;\n  position: relative; }\n\n.o-select .o-select__tags > span {\n  display: contents; }\n\n.o-select:hover .o-input__inner {\n  border-color: #C0C4CC; }\n\n.o-select .o-input__inner {\n  cursor: pointer;\n  padding-right: 35px; }\n\n.o-select .o-input__inner:focus {\n  border-color: #07c160; }\n\n.o-select .o-input .o-select__caret {\n  color: #C0C4CC;\n  font-size: 14px;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n  -webkit-transform: rotateZ(180deg);\n  transform: rotateZ(180deg);\n  cursor: pointer; }\n\n.o-select .o-input .o-select__caret.is-reverse {\n  -webkit-transform: rotateZ(0);\n  transform: rotateZ(0); }\n\n.o-select .o-input .o-select__caret.is-show-close {\n  font-size: 14px;\n  text-align: center;\n  -webkit-transform: rotateZ(180deg);\n  transform: rotateZ(180deg);\n  border-radius: 100%;\n  color: #C0C4CC;\n  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.o-select .o-input .o-select__caret.is-show-close:hover {\n  color: #909399; }\n\n.o-select .o-input.is-disabled .o-input__inner {\n  cursor: not-allowed; }\n\n.o-select .o-input.is-disabled .o-input__inner:hover {\n  border-color: #E4E7ED; }\n\n.o-select .o-input.is-focus .o-input__inner {\n  border-color: #07c160; }\n\n.o-select > .o-input {\n  display: block; }\n\n.o-select__input {\n  border: none;\n  outline: 0;\n  padding: 0;\n  margin-left: 15px;\n  color: #666;\n  font-size: 14px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  height: 28px;\n  background-color: transparent; }\n\n.o-select__input.is-mini {\n  height: 14px; }\n\n.o-select__close {\n  cursor: pointer;\n  position: absolute;\n  top: 8px;\n  z-index: 1000;\n  right: 25px;\n  color: #C0C4CC;\n  line-height: 18px;\n  font-size: 14px; }\n\n.o-select__close:hover {\n  color: #909399; }\n\n.o-select__tags {\n  position: absolute;\n  line-height: normal;\n  white-space: normal;\n  z-index: 1;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.o-select .o-tag__close {\n  margin-top: -2px; }\n\n.o-select .o-tag {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-color: transparent;\n  margin: 2px 0 2px 6px;\n  background-color: #f0f2f5; }\n\n.o-select .o-tag__close.o-icon-close {\n  background-color: #C0C4CC;\n  right: -7px;\n  top: 0;\n  color: #FFF; }\n\n.o-select .o-tag__close.o-icon-close:hover {\n  background-color: #909399; }\n\n.o-select .o-tag__close.o-icon-close::before {\n  display: block;\n  -webkit-transform: translate(0, 0.5px);\n  transform: translate(0, 0.5px); }\n\n.o-popper .popper__arrow,\n.o-popper .popper__arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.o-popper .popper__arrow {\n  border-width: 6px;\n  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03)); }\n\n.o-popper .popper__arrow::after {\n  content: \" \";\n  border-width: 6px; }\n\n.o-popper[x-placement^=top] {\n  margin-bottom: 12px; }\n\n.o-popper[x-placement^=top] .popper__arrow {\n  bottom: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-color: #EBEEF5;\n  border-bottom-width: 0; }\n\n.o-popper[x-placement^=top] .popper__arrow::after {\n  bottom: 1px;\n  margin-left: -6px;\n  border-top-color: #FFF;\n  border-bottom-width: 0; }\n\n.o-popper[x-placement^=bottom] {\n  margin-top: 12px; }\n\n.o-popper[x-placement^=bottom] .popper__arrow {\n  top: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-width: 0;\n  border-bottom-color: #EBEEF5; }\n\n.o-popper[x-placement^=bottom] .popper__arrow::after {\n  top: 1px;\n  margin-left: -6px;\n  border-top-width: 0;\n  border-bottom-color: #FFF; }\n\n.o-popper[x-placement^=right] {\n  margin-left: 12px; }\n\n.o-popper[x-placement^=right] .popper__arrow {\n  top: 50%;\n  left: -6px;\n  margin-bottom: 3px;\n  border-right-color: #EBEEF5;\n  border-left-width: 0; }\n\n.o-popper[x-placement^=right] .popper__arrow::after {\n  bottom: -6px;\n  left: 1px;\n  border-right-color: #FFF;\n  border-left-width: 0; }\n\n.o-popper[x-placement^=left] {\n  margin-right: 12px; }\n\n.o-popper[x-placement^=left] .popper__arrow {\n  top: 50%;\n  right: -6px;\n  margin-bottom: 3px;\n  border-right-width: 0;\n  border-left-color: #EBEEF5; }\n\n.o-popper[x-placement^=left] .popper__arrow::after {\n  right: 1px;\n  bottom: -6px;\n  margin-left: -6px;\n  border-right-width: 0;\n  border-left-color: #FFF; }\n\n.o-select-dropdown {\n  position: absolute;\n  z-index: 1001;\n  border: 1px solid #E4E7ED;\n  border-radius: 4px;\n  background-color: #FFF;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 5px 0; }\n\n.o-select-dropdown.is-multiple .o-select-dropdown__item.selected {\n  color: #07c160;\n  background-color: #FFF; }\n\n.o-select-dropdown.is-multiple .o-select-dropdown__item.selected.hover {\n  background-color: #F5F7FA; }\n\n.o-select-dropdown.is-multiple .o-select-dropdown__item.selected::after {\n  position: absolute;\n  right: 20px;\n  font-family: element-icons;\n  content: \"\\E6DA\";\n  font-size: 12px;\n  font-weight: 700;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.o-select-dropdown .o-scrollbar.is-empty .o-select-dropdown__list {\n  padding: 0; }\n\n.o-select-dropdown__empty {\n  padding: 10px 0;\n  margin: 0;\n  text-align: center;\n  color: #999;\n  font-size: 14px; }\n\n.o-select-dropdown__wrap {\n  max-height: 274px; }\n\n.o-select-dropdown__list {\n  list-style: none;\n  padding: 6px 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.arrow {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -0.5em;\n  color: #747679; }\n", ""]);

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
var topMap = {
    'medium': '31px',
    'small': '28px',
    'mini': '24px',
};
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputClick = function () {
            setTimeout(function () {
                _this.updateProps({
                    active: !_this.props.active
                });
            }, 10);
        };
        _this.onInputBlur = function () {
            setTimeout(function () {
                _this.updateProps({
                    active: false
                });
            }, 10);
        };
        _this.onItemClick = function (item, index) {
            _this._refInput.focus();
            _this.fire('item-select', item);
            _this.selectedIndex = index;
            _this.updateProps({
                active: false,
                value: item.label
            });
        };
        return _this;
    }
    Select.prototype.installed = function () {
        this._fixWidth();
    };
    Select.prototype.updated = function () {
        this._fixWidth();
    };
    Select.prototype._fixWidth = function () {
        var width = this.rootNode.getBoundingClientRect().width;
        var dropdown = this.rootNode.querySelector('.o-select-dropdown');
        if (dropdown) {
            dropdown.style.minWidth = width + 'px';
        }
    };
    Select.prototype.render = function (props) {
        var _a, _b;
        var _this = this;
        return (omi_1.h("div", __assign({}, omi_1.extractClass({}, 'o-select', (_a = {},
            _a['o-select--' + props.size] = props.size,
            _a))),
            omi_1.h("div", __assign({}, omi_1.extractClass({}, 'o-input o-input--suffix', (_b = {},
                _b['o-input--' + props.size] = props.size,
                _b['is-focus'] = props.isFocus,
                _b))),
                omi_1.h("input", { type: "text", ref: function (e) { return _this._refInput = e; }, onClick: this.onInputClick, onBlur: this.onInputBlur, readonly: "readonly", autocomplete: "off", value: props.value, placeholder: props.placeholder, class: "o-input__inner" }),
                omi_1.h("span", { class: "o-input__suffix" },
                    omi_1.h("span", { class: "o-input__suffix-inner" },
                        omi_1.h("i", { class: "o-select__caret o-input__icon o-icon-arrow-up is-reverse" }))),
                omi_1.h("svg", { viewBox: "0 0 1024 1024", class: "arrow", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false" },
                    omi_1.h("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }))),
            props.active && omi_1.h("o-transition", null,
                omi_1.h("div", { class: "o-select-dropdown o-popper", style: "min-width: 240px; transform-origin: center top; z-index: 2080; position: absolute; top: " + (topMap[props.size] || '35px') + "; left: 0;", "x-placement": "bottom-start" },
                    omi_1.h("div", { class: "o-scrollbar", style: "" },
                        omi_1.h("div", { class: "o-select-dropdown__wrap o-scrollbar__wrap o-scrollbar__wrap--hidden-default" },
                            omi_1.h("ul", { class: "o-scrollbar__view o-select-dropdown__list" }, props.items.map(function (item, index) { return (omi_1.h("li", __assign({}, omi_1.extractClass({}, 'o-select-dropdown__item', {
                                selected: index === _this.selectedIndex
                            }), { onClick: function (_) { _this.onItemClick(item, index); } }),
                                omi_1.h("span", null, item.label))); }))),
                        omi_1.h("div", { class: "o-scrollbar__bar is-horizontal" },
                            omi_1.h("div", { class: "o-scrollbar__thumb", style: "transform: translateX(0%);" })),
                        omi_1.h("div", { class: "o-scrollbar__bar is-vertical" },
                            omi_1.h("div", { class: "o-scrollbar__thumb", style: "transform: translateY(0%);" }))),
                    omi_1.h("div", { "x-arrow": "", class: "popper__arrow", style: "left: 35px;" })))));
    };
    Select.css = css;
    Select.defaultProps = {
        value: ''
    };
    Select.propTypes = {
        items: Array,
        active: Boolean,
        value: String,
        placeholder: String,
        size: String
    };
    Select = __decorate([
        omi_1.tag('o-select')
    ], Select);
    return Select;
}(omi_1.WeElement));
exports.default = Select;


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