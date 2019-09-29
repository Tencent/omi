module.exports = function(window, document) {var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window["createApp"] =
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
/******/ 	deferredModules.push([9,0,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/omio/dist/omi.esm.js
var omi_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/game/_index.css
var _index = __webpack_require__(4);

// CONCATENATED MODULE: ./src/components/game/index.js


Object(omi_esm["a" /* define */])('my-game', function (_) {
  return Object(omi_esm["b" /* h */])("div", {
    "class": "game"
  }, _.store.data.map.map(function (row) {
    return Object(omi_esm["b" /* h */])("p", null, row.map(function (col) {
      if (col) {
        return Object(omi_esm["b" /* h */])("b", {
          "class": 's'
        });
      }

      return Object(omi_esm["b" /* h */])("b", null);
    }));
  }));
}, {
  use: ['map'],
  css: "undefined" != typeof wx && wx.getSystemInfoSync ? '' : Object(omi_esm["d" /* rpx */])(__webpack_require__(4))
});
// EXTERNAL MODULE: ./src/components/index/_index.css
var index_index = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/index/index.js



Object(omi_esm["a" /* define */])('my-index', function (_ref) {
  var store = _ref.store;
  return Object(omi_esm["b" /* h */])("div", {
    "class": "container"
  }, Object(omi_esm["b" /* h */])("h1", null, "OMI SNAKE"), Object(omi_esm["b" /* h */])("my-game", null), Object(omi_esm["b" /* h */])("div", {
    "class": "ctrl"
  }, Object(omi_esm["b" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir up",
    onClick: store.turnUp
  }, Object(omi_esm["b" /* h */])("i", null), Object(omi_esm["b" /* h */])("em", null), Object(omi_esm["b" /* h */])("span", null, "Up")), Object(omi_esm["b" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir down",
    onClick: store.turnDown
  }, Object(omi_esm["b" /* h */])("i", null), Object(omi_esm["b" /* h */])("em", null), Object(omi_esm["b" /* h */])("span", null, "Down")), Object(omi_esm["b" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir left",
    onClick: store.turnLeft
  }, Object(omi_esm["b" /* h */])("i", null), Object(omi_esm["b" /* h */])("em", null), Object(omi_esm["b" /* h */])("span", null, "Left")), Object(omi_esm["b" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir right",
    onClick: store.turnRight
  }, Object(omi_esm["b" /* h */])("i", null), Object(omi_esm["b" /* h */])("em", null), Object(omi_esm["b" /* h */])("span", null, "Right")), Object(omi_esm["b" /* h */])("div", {
    "class": "btn cm-btn space",
    onClick: store.toggleSpeed
  }, Object(omi_esm["b" /* h */])("i", null), Object(omi_esm["b" /* h */])("span", null, "\u52A0\u901F/\u51CF\u901F")), Object(omi_esm["b" /* h */])("div", {
    "class": "btn reset small",
    onClick: store.reset
  }, Object(omi_esm["b" /* h */])("i", null), Object(omi_esm["b" /* h */])("span", null, "Reset")), Object(omi_esm["b" /* h */])("div", {
    "class": "btn pp small",
    onClick: store.pauseOrPlay
  }, Object(omi_esm["b" /* h */])("i", null), Object(omi_esm["b" /* h */])("span", null, store.data.paused ? 'Play' : 'Pause'))));
}, {
  useSelf: ['paused'],
  css: "undefined" != typeof wx && wx.getSystemInfoSync ? '' : Object(omi_esm["d" /* rpx */])(__webpack_require__(5))
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/models/snake.js



var snake_Snake =
/*#__PURE__*/
function () {
  function Snake() {
    classCallCheck_default()(this, Snake);

    this.body = [3, 1, 2, 1, 1, 1];
    this.dir = 'right';
  }

  createClass_default()(Snake, [{
    key: "move",
    value: function move(eating) {
      var b = this.body;

      if (!eating) {
        b.pop();
        b.pop();
      }

      switch (this.dir) {
        case 'up':
          b.unshift(b[0], b[1] - 1);
          break;

        case 'right':
          b.unshift(b[0] + 1, b[1]);
          break;

        case 'down':
          b.unshift(b[0], b[1] + 1);
          break;

        case 'left':
          b.unshift(b[0] - 1, b[1]);
          break;
      }
    }
  }, {
    key: "turnUp",
    value: function turnUp() {
      if (this.dir !== 'down') this.dir = 'up';
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      if (this.dir !== 'left') this.dir = 'right';
    }
  }, {
    key: "turnDown",
    value: function turnDown() {
      if (this.dir !== 'up') this.dir = 'down';
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      if (this.dir !== 'right') this.dir = 'left';
    }
  }]);

  return Snake;
}();

/* harmony default export */ var snake = (snake_Snake);
// CONCATENATED MODULE: ./src/models/game.js




var game_Game =
/*#__PURE__*/
function () {
  function Game() {
    classCallCheck_default()(this, Game);

    this.map = [];
    this.size = 16;
    this.loop = null;
    this.interval = 500;
    this.paused = false;
    this._preDate = Date.now();
    this.init();
  }

  createClass_default()(Game, [{
    key: "init",
    value: function init() {
      this.snake = new snake();

      for (var i = 0; i < this.size; i++) {
        var row = [];

        for (var j = 0; j < this.size; j++) {
          row.push(0);
        }

        this.map.push(row);
      }
    }
  }, {
    key: "tick",
    value: function tick() {
      this.makeFood();
      var eating = this.eat();
      this.snake.move(eating);
      this.mark();
    }
  }, {
    key: "mark",
    value: function mark() {
      var map = this.map;

      for (var i = 0; i < this.size; i++) {
        for (var j = 0; j < this.size; j++) {
          map[i][j] = 0;
        }
      }

      for (var k = 0, len = this.snake.body.length; k < len; k += 2) {
        this.snake.body[k + 1] %= this.size;
        this.snake.body[k] %= this.size;
        if (this.snake.body[k + 1] < 0) this.snake.body[k + 1] += this.size;
        if (this.snake.body[k] < 0) this.snake.body[k] += this.size;
        map[this.snake.body[k + 1]][this.snake.body[k]] = 1;
      }

      if (this.food) {
        map[this.food[1]][this.food[0]] = 1;
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.loop = setInterval(function () {
        if (Date.now() - _this._preDate > _this.interval) {
          _this._preDate = Date.now();

          if (!_this.paused) {
            _this.tick();
          }
        }
      }, 16);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.loop);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.paused = false;
      this.interval = 500;
      this.snake.body = [3, 1, 2, 1, 1, 1];
      this.food = null;
      this.snake.dir = 'right';
    }
  }, {
    key: "toggleSpeed",
    value: function toggleSpeed() {
      this.interval === 500 ? this.interval = 150 : this.interval = 500;
    }
  }, {
    key: "makeFood",
    value: function makeFood() {
      if (!this.food) {
        this.food = [this._rd(0, this.size - 1), this._rd(0, this.size - 1)];

        for (var k = 0, len = this.snake.body.length; k < len; k += 2) {
          if (this.snake.body[k + 1] === this.food[1] && this.snake.body[k] === this.food[0]) {
            this.food = null;
            this.makeFood();
            break;
          }
        }
      }
    }
  }, {
    key: "eat",
    value: function eat() {
      for (var k = 0, len = this.snake.body.length; k < len; k += 2) {
        if (this.snake.body[k + 1] === this.food[1] && this.snake.body[k] === this.food[0]) {
          this.food = null;
          return true;
        }
      }
    }
  }, {
    key: "_rd",
    value: function _rd(from, to) {
      return from + Math.floor(Math.random() * (to + 1));
    }
  }]);

  return Game;
}();

/* harmony default export */ var game = (game_Game);
// CONCATENATED MODULE: ./src/stores/index.js




var stores_game = new game();
var stores_snake = stores_game.snake,
    map = stores_game.map;
stores_game.start();

var stores_Store =
/*#__PURE__*/
function () {
  function Store() {
    var _this = this;

    classCallCheck_default()(this, Store);

    defineProperty_default()(this, "data", {
      map: map,
      paused: false
    });

    defineProperty_default()(this, "pauseOrPlay", function () {
      if (stores_game.paused) {
        stores_game.play();
        _this.data.paused = false;
      } else {
        stores_game.pause();
        _this.data.paused = true;
      }
    });
  }

  createClass_default()(Store, [{
    key: "turnUp",
    value: function turnUp() {
      stores_snake.turnUp();
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      stores_snake.turnRight();
    }
  }, {
    key: "turnDown",
    value: function turnDown() {
      stores_snake.turnDown();
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      stores_snake.turnLeft();
    }
  }, {
    key: "reset",
    value: function reset() {
      stores_game.reset();
    }
  }, {
    key: "toggleSpeed",
    value: function toggleSpeed() {
      stores_game.toggleSpeed();
    }
  }]);

  return Store;
}();

/* harmony default export */ var stores = (new stores_Store());
// EXTERNAL MODULE: ./src/assets/index.css
var assets = __webpack_require__(7);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });




function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  Object(omi_esm["c" /* render */])(Object(omi_esm["b" /* h */])("my-index", null), '#app', stores);
}
"undefined" != typeof wx && wx.getSystemInfoSync || createApp();

/***/ })
/******/ ])["default"];}