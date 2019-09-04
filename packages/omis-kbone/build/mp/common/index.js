module.exports = function(window, document) {var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window.HTMLIFrameElement = function(){};window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_omis@1.0.3@omis/dist/omis.esm.js
var omis_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/components/todo/_index.css
var _index = __webpack_require__(2);
var _index_default = /*#__PURE__*/__webpack_require__.n(_index);

// EXTERNAL MODULE: ./src/components/todo-footer/index.css
var todo_footer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/todo-footer/index.js



var todo_footer_TodoFooter = function TodoFooter(_ref, _ref2) {
  var left = _ref.left,
      type = _ref.type,
      done = _ref.done;
  var showAll = _ref2.showAll,
      showActive = _ref2.showActive,
      showDone = _ref2.showDone,
      clearDone = _ref2.clearDone;
  return Object(omis_esm["a" /* h */])("div", {
    "class": "footer"
  }, Object(omis_esm["a" /* h */])("div", {
    "class": "todo-count"
  }, Object(omis_esm["a" /* h */])("text", {
    "class": "strong"
  }, left + ' ', "items left"), " "), Object(omis_esm["a" /* h */])("div", {
    "class": "filters"
  }, Object(omis_esm["a" /* h */])("div", {
    "class": 'ib',
    onClick: showAll
  }, Object(omis_esm["a" /* h */])("text", {
    "class": type === 'all' ? 'selected' : ''
  }, "All")), Object(omis_esm["a" /* h */])("div", {
    "class": 'ib',
    onClick: showActive
  }, Object(omis_esm["a" /* h */])("text", {
    "class": type === 'active' ? 'selected' : ''
  }, "Active")), Object(omis_esm["a" /* h */])("div", {
    "class": 'ib',
    onClick: showDone
  }, Object(omis_esm["a" /* h */])("text", {
    "class": type === 'done' ? 'selected' : ''
  }, "Done"))), done > 0 && Object(omis_esm["a" /* h */])("button", {
    "class": "clear-completed",
    onClick: clearDone
  }, "Clear done"));
};

todo_footer_TodoFooter.store = function (_ref3) {
  var props = _ref3.props;
  return {
    showAll: function showAll() {
      props.onFilter('all');
    },
    showActive: function showActive() {
      props.onFilter('active');
    },
    showDone: function showDone() {
      props.onFilter('done');
    },
    clearDone: function clearDone() {
      props.onClear();
    }
  };
};

/* harmony default export */ var components_todo_footer = (todo_footer_TodoFooter);
// CONCATENATED MODULE: ./src/components/todo/index.js





var todo_Todo = function Todo(props, _ref) {
  var clear = _ref.clear,
      filter = _ref.filter,
      textInput = _ref.textInput,
      inputText = _ref.inputText,
      todo = _ref.todo,
      left = _ref.left,
      type = _ref.type,
      newTodo = _ref.newTodo,
      done = _ref.done,
      toggle = _ref.toggle,
      deleteItem = _ref.deleteItem;
  return Object(omis_esm["a" /* h */])("div", {
    "class": "container"
  }, Object(omis_esm["a" /* h */])("div", {
    "class": "title"
  }, "todos"), Object(omis_esm["a" /* h */])("div", {
    "class": "form"
  }, Object(omis_esm["a" /* h */])("input", {
    "class": "new-todo",
    onInput: textInput,
    value: inputText,
    placeholder: "下一步行动计划是？",
    autofocus: ""
  }), Object(omis_esm["a" /* h */])("button", {
    "class": "add-btn",
    onClick: newTodo
  }, "\u786E\u5B9A")), Object(omis_esm["a" /* h */])("div", {
    "class": "todo-list"
  }, todo.map(function (item) {
    return (type === 'all' || type === 'active' && !item.done || type === 'done' && item.done) && Object(omis_esm["a" /* h */])("div", {
      "class": "todo-item".concat(item.done ? ' done' : '')
    }, Object(omis_esm["a" /* h */])("div", {
      "class": "toggle",
      "data-id": item.id,
      onClick: toggle
    }), Object(omis_esm["a" /* h */])("text", null, item.text, " "), Object(omis_esm["a" /* h */])("div", {
      "class": "delete",
      "data-id": item.id,
      onClick: deleteItem
    }));
  })), Object(omis_esm["a" /* h */])(components_todo_footer, {
    onFilter: filter,
    onClear: clear,
    left: left,
    done: done,
    type: type
  }));
};

todo_Todo.store = function (_) {
  var _ref2;

  return _ref2 = {
    todo: [{
      text: '学习 Kbone',
      id: 0
    }, {
      text: '学习 Omi',
      id: 1
    }],
    id: 1,
    inputText: '',
    left: 2,
    type: 'all',
    done: 0,
    textInput: function textInput(evt) {
      this.inputText = evt.target.value;
    },
    gotoAbout: function gotoAbout() {
      wx.navigateTo({
        url: '../about/index'
      });
    },
    toggle: function toggle(evt) {
      for (var i = 0, len = this.todo.length; i < len; i++) {
        var item = this.todo[i];

        if (item.id === Number(evt.target.dataset.id)) {
          item.done = !item.done;
          this.computeCount();

          _.update();

          break;
        }
      }
    },
    computeCount: function computeCount() {
      this.left = 0;
      this.done = 0;

      for (var i = 0, len = this.todo.length; i < len; i++) {
        this.todo[i].done ? this.done++ : this.left++;
      }
    },
    deleteItem: function deleteItem(evt) {
      for (var i = 0, len = this.todo.length; i < len; i++) {
        var item = this.todo[i];

        if (item.id === Number(evt.target.dataset.id)) {
          this.todo.splice(i, 1);
          this.computeCount();

          _.update();

          break;
        }
      }
    },
    newTodo: function newTodo() {
      if (this.inputText.trim() === '') {
        wx.showToast({
          title: '内容不能为空',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      this.todo.unshift({
        text: this.inputText,
        id: ++this.id,
        done: false,
        createTime: new Date()
      });
      this.computeCount();
      this.inputText = '';

      _.update();
    },
    installed: function installed() {},
    filter: function filter(type) {
      //因为是自定义事件
      //注意这里的 this 指向，不能直接 this.type = type
      _.store.type = type;

      _.update();
    },
    clear: function clear(evt) {
      //因为是自定义事件
      //注意这里的 this 指向
      var self = _.store;
      wx.showModal({
        title: '提示',
        content: '确定清空已完成任务？',
        success: function success(res) {
          if (res.confirm) {
            for (var i = 0, len = self.todo.length; i < len; i++) {
              var item = self.todo[i];

              if (item.done) {
                self.todo.splice(i, 1);
                len--;
                i--;
              }
            }

            self.done = 0;

            _.update();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
  }, defineProperty_default()(_ref2, "gotoAbout", function gotoAbout() {
    wx.navigateTo({
      url: '../about/index'
    });
  }), defineProperty_default()(_ref2, "clickHandle", function clickHandle() {
    if ("undefined" != typeof wx && wx.getSystemInfoSync) {
      wx.navigateTo({
        url: '../log/index?id=1'
      });
    } else {
      location.href = 'log.html';
    }
  }), _ref2;
};

todo_Todo.css = _index_default.a;
/* harmony default export */ var components_todo = (todo_Todo);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });


function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  Object(omis_esm["b" /* render */])(Object(omis_esm["a" /* h */])(components_todo, null), '#app');
}
"undefined" != typeof wx && wx.getSystemInfoSync || createApp();

/***/ })
/******/ ])["default"];}