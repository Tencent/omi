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

/***/ "./node_modules/_to2to@1.0.4@to2to/dist/to.js":
/*!****************************************************!*\
  !*** ./node_modules/_to2to@1.0.4@to2to/dist/to.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *  to2to v1.0.4 
 *  By https://github.com/dntzhang 
 *  Github: https://github.com/dntzhang/cax
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tween = __webpack_require__(1);

var _tween2 = _interopRequireDefault(_tween);

var _rafInterval = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var To = function () {
  function To(element) {
    _classCallCheck(this, To);

    this.element = element;
    this.cmds = [];
    this.index = 0;
    this.tweens = [];
    this._pause = false;
    this.loop = (0, _rafInterval.setRafInterval)(function () {
      _tween2.default.update();
    }, 15);
    this.cycleCount = 0;
  }

  _createClass(To, [{
    key: 'to',
    value: function to(target, duration, easing) {
      this.cmds.push(['to']);
      if (arguments.length !== 0) {
        for (var key in target) {
          this.set(key, target[key], duration || 0, easing);
        }
      }
      return this;
    }
  }, {
    key: 'set',
    value: function set(prop, value, duration, easing) {
      this.cmds[this.cmds.length - 1].push([prop, [value, duration, easing]]);
      return this;
    }
  }, {
    key: 'x',
    value: function x() {
      this.cmds[this.cmds.length - 1].push(['x', arguments]);
      return this;
    }
  }, {
    key: 'y',
    value: function y() {
      this.cmds[this.cmds.length - 1].push(['y', arguments]);
      return this;
    }
  }, {
    key: 'z',
    value: function z() {
      this.cmds[this.cmds.length - 1].push(['z', arguments]);
      return this;
    }
  }, {
    key: 'rotation',
    value: function rotation() {
      this.cmds[this.cmds.length - 1].push(['rotation', arguments]);
      return this;
    }
  }, {
    key: 'scaleX',
    value: function scaleX() {
      this.cmds[this.cmds.length - 1].push(['scaleX', arguments]);
      return this;
    }
  }, {
    key: 'scaleY',
    value: function scaleY() {
      this.cmds[this.cmds.length - 1].push(['scaleY', arguments]);
      return this;
    }
  }, {
    key: 'skewX',
    value: function skewX() {
      this.cmds[this.cmds.length - 1].push(['skewX', arguments]);
      return this;
    }
  }, {
    key: 'skewY',
    value: function skewY() {
      this.cmds[this.cmds.length - 1].push(['skewY', arguments]);
      return this;
    }
  }, {
    key: 'originX',
    value: function originX() {
      this.cmds[this.cmds.length - 1].push(['originX', arguments]);
      return this;
    }
  }, {
    key: 'originY',
    value: function originY() {
      this.cmds[this.cmds.length - 1].push(['originY', arguments]);
      return this;
    }
  }, {
    key: 'alpha',
    value: function alpha() {
      this.cmds[this.cmds.length - 1].push(['alpha', arguments]);
      return this;
    }
  }, {
    key: 'begin',
    value: function begin(fn) {
      this.cmds[this.cmds.length - 1].begin = fn;
      return this;
    }
  }, {
    key: 'progress',
    value: function progress(fn) {
      this.cmds[this.cmds.length - 1].progress = fn;
      return this;
    }
  }, {
    key: 'end',
    value: function end(fn) {
      this.cmds[this.cmds.length - 1].end = fn;
      return this;
    }
  }, {
    key: 'wait',
    value: function wait() {
      this.cmds.push(['wait', arguments]);
      return this;
    }
  }, {
    key: 'then',
    value: function then() {
      this.cmds.push(['then', arguments]);
      return this;
    }
  }, {
    key: 'cycle',
    value: function cycle() {
      this.cmds.push(['cycle', arguments]);
      return this;
    }
  }, {
    key: 'start',
    value: function start() {
      if (this._pause) return;
      var len = this.cmds.length;
      if (this.index < len) {
        this.exec(this.cmds[this.index], this.index === len - 1);
      } else {
        (0, _rafInterval.clearRafInterval)(this.loop);
      }
      return this;
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._pause = true;
      for (var i = 0, len = this.tweens.length; i < len; i++) {
        this.tweens[i].pause();
      }
      if (this.currentTask === 'wait') {
        this.timeout -= new Date() - this.currentTaskBegin;
        this.currentTaskBegin = new Date();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this._pause) {
        this.play();
      } else {
        this.pause();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      this._pause = false;
      for (var i = 0, len = this.tweens.length; i < len; i++) {
        this.tweens[i].play();
      }
      var self = this;
      if (this.currentTask === 'wait') {
        setTimeout(function () {
          if (self._pause) return;
          self.index++;
          self.start();
          if (self.index === self.cmds.length && self.complete) self.complete();
        }, this.timeout);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      for (var i = 0, len = this.tweens.length; i < len; i++) {
        this.tweens[i].stop();
      }
      this.cmds.length = 0;
    }
  }, {
    key: 'animate',
    value: function animate(name) {
      this.cmds = this.cmds.concat(To.animationMap[name] || []);
      return this;
    }
  }, {
    key: 'exec',
    value: function exec(cmd, last) {
      var len = cmd.length,
          self = this;
      this.currentTask = cmd[0];
      switch (this.currentTask) {
        case 'to':
          self.stepCompleteCount = 0;
          for (var i = 1; i < len; i++) {
            var task = cmd[i];
            var ease = task[1][2];
            var target = {};
            var prop = task[0];
            target[prop] = task[1][0];

            var t = new _tween2.default.Tween(this.element).to(target, task[1][1]).onStart(function () {
              if (cmd.begin) cmd.begin.call(self.element, self.element);
            }).onUpdate(function () {
              if (cmd.progress) cmd.progress.call(self.element, self.element);
              // self.element[prop] = this[prop];
            }).easing(ease || _tween2.default.Easing.Linear.None).onComplete(function () {
              self.stepCompleteCount++;
              if (self.stepCompleteCount === len - 1) {
                if (cmd.end) cmd.end.call(self.element, self.element);
                if (last && self.complete) self.complete();
                self.index++;
                self.start();
              }
            }).start();
            this.tweens.push(t);
          }
          break;
        case 'wait':
          this.currentTaskBegin = new Date();
          this.timeout = cmd[1][0];
          setTimeout(function () {
            if (self._pause) return;
            self.index++;
            self.start();
            if (cmd.end) cmd.end.call(self.element, self.element);
            if (last && self.complete) self.complete();
          }, cmd[1][0]);
          break;
        case 'then':
          var arg = cmd[1][0];
          arg.index = 0;
          arg.complete = function () {
            self.index++;
            self.start();
            if (last && self.complete) self.complete();
          };
          arg.start();
          break;
        case 'cycle':
          var count = cmd[1][1];
          if (count === undefined) {
            self.index = cmd[1][0] || 0;
            self.start();
          } else {
            if (count && self.cycleCount === count) {
              self.index++;
              self.start();
              if (last && self.complete) self.complete();
            } else {
              self.cycleCount++;
              self.index = cmd[1][0];
              self.start();
            }
          }
          break;
      }
    }
  }]);

  return To;
}();

To.get = function (element) {
  var to = new To(element);
  return to;
};

To.animationMap = {};
To.extend = function (animationName, cmds) {
  To.animationMap[animationName] = cmds;
};

exports.default = To;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

var _Group = function _Group() {
  this._tweens = {};
  this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
  getAll: function getAll() {
    return Object.keys(this._tweens).map(function (tweenId) {
      return this._tweens[tweenId];
    }.bind(this));
  },

  removeAll: function removeAll() {
    this._tweens = {};
  },

  add: function add(tween) {
    this._tweens[tween.getId()] = tween;
    this._tweensAddedDuringUpdate[tween.getId()] = tween;
  },

  remove: function remove(tween) {
    delete this._tweens[tween.getId()];
    delete this._tweensAddedDuringUpdate[tween.getId()];
  },

  update: function update(time, preserve) {
    var tweenIds = Object.keys(this._tweens);

    if (tweenIds.length === 0) {
      return false;
    }

    time = time !== undefined ? time : TWEEN.now();

    // Tweens are updated in "batches". If you add a new tween during an update, then the
    // new tween will be updated in the next batch.
    // If you remove a tween during an update, it may or may not be updated. However,
    // if the removed tween was added during the current batch, then it will not be updated.
    while (tweenIds.length > 0) {
      this._tweensAddedDuringUpdate = {};

      for (var i = 0; i < tweenIds.length; i++) {
        var tween = this._tweens[tweenIds[i]];

        if (tween && tween.update(time) === false) {
          tween._isPlaying = false;

          if (!preserve) {
            delete this._tweens[tweenIds[i]];
          }
        }
      }

      tweenIds = Object.keys(this._tweensAddedDuringUpdate);
    }

    return true;
  }
};

var TWEEN = new _Group();

TWEEN.Group = _Group;
TWEEN._nextId = 0;
TWEEN.nextId = function () {
  return TWEEN._nextId++;
};

// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof window === 'undefined' && typeof process !== 'undefined') {
  if (typeof wx !== 'undefined') {
    TWEEN.now = Date.now;
  } else {
    TWEEN.now = function () {
      var time = process.hrtime();

      // Convert [seconds, nanoseconds] to milliseconds.
      return time[0] * 1000 + time[1] / 1000000;
    };
  }
} else if (typeof window !== 'undefined' &&
// In a browser, use window.performance.now if it is available.
window.performance !== undefined && window.performance.now !== undefined) {
  // This must be bound, because directly assigning this function
  // leads to an invocation exception in Chrome.
  TWEEN.now = window.performance.now.bind(window.performance);
} else if (Date.now !== undefined) {
  // Use Date.now if it is available.
  TWEEN.now = Date.now;
} else {
  // Otherwise, use 'new Date().getTime()'.
  TWEEN.now = function () {
    return new Date().getTime();
  };
}

TWEEN.Tween = function (object, group) {
  this._object = object;
  this._valuesStart = {};
  this._valuesEnd = {};
  this._valuesStartRepeat = {};
  this._duration = 1000;
  this._repeat = 0;
  this._repeatDelayTime = undefined;
  this._yoyo = false;
  this._isPlaying = false;
  this._reversed = false;
  this._delayTime = 0;
  this._startTime = null;
  this._easingFunction = TWEEN.Easing.Linear.None;
  this._interpolationFunction = TWEEN.Interpolation.Linear;
  this._chainedTweens = [];
  this._onStartCallback = null;
  this._onStartCallbackFired = false;
  this._onUpdateCallback = null;
  this._onCompleteCallback = null;
  this._onStopCallback = null;
  this._group = group || TWEEN;
  this._id = TWEEN.nextId();

  this._paused = false;
  this._passTime = null;
};

TWEEN.Tween.prototype = {
  getId: function getId() {
    return this._id;
  },

  toggle: function toggle() {
    if (this._paused) {
      this.play();
    } else {
      this.pause();
    }
  },


  pause: function pause() {
    this._paused = true;
    var pauseTime = TWEEN.now();
    this._passTime = pauseTime - this._startTime;
  },

  play: function play() {
    this._paused = false;
    var nowTime = TWEEN.now();
    this._startTime = nowTime - this._passTime;
  },

  isPlaying: function isPlaying() {
    return this._isPlaying;
  },

  to: function to(properties, duration) {
    this._valuesEnd = properties;

    if (duration !== undefined) {
      this._duration = duration;
    }

    return this;
  },

  start: function start(time) {
    this._group.add(this);

    this._isPlaying = true;

    this._onStartCallbackFired = false;

    this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
    this._startTime += this._delayTime;

    for (var property in this._valuesEnd) {
      // Check if an Array was provided as property value
      if (this._valuesEnd[property] instanceof Array) {
        if (this._valuesEnd[property].length === 0) {
          continue;
        }

        // Create a local copy of the Array with the start value at the front
        this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
      }

      // If `to()` specifies a property that doesn't exist in the source object,
      // we should not set that property in the object
      if (this._object[property] === undefined) {
        continue;
      }

      // Save the starting value.
      this._valuesStart[property] = this._object[property];

      if (this._valuesStart[property] instanceof Array === false) {
        this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
      }

      this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
    }

    return this;
  },

  stop: function stop() {
    if (!this._isPlaying) {
      return this;
    }

    this._group.remove(this);
    this._isPlaying = false;

    if (this._onStopCallback !== null) {
      this._onStopCallback(this._object);
    }

    this.stopChainedTweens();
    return this;
  },

  end: function end() {
    this.update(this._startTime + this._duration);
    return this;
  },

  stopChainedTweens: function stopChainedTweens() {
    for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
      this._chainedTweens[i].stop();
    }
  },

  group: function group(group) {
    this._group = group;
    return this;
  },

  delay: function delay(amount) {
    this._delayTime = amount;
    return this;
  },

  repeat: function repeat(times) {
    this._repeat = times;
    return this;
  },

  repeatDelay: function repeatDelay(amount) {
    this._repeatDelayTime = amount;
    return this;
  },

  yoyo: function yoyo(yy) {
    this._yoyo = yy;
    return this;
  },

  easing: function easing(eas) {
    this._easingFunction = eas;
    return this;
  },

  interpolation: function interpolation(inter) {
    this._interpolationFunction = inter;
    return this;
  },

  chain: function chain() {
    this._chainedTweens = arguments;
    return this;
  },

  onStart: function onStart(callback) {
    this._onStartCallback = callback;
    return this;
  },

  onUpdate: function onUpdate(callback) {
    this._onUpdateCallback = callback;
    return this;
  },

  onComplete: function onComplete(callback) {
    this._onCompleteCallback = callback;
    return this;
  },

  onStop: function onStop(callback) {
    this._onStopCallback = callback;
    return this;
  },

  update: function update(time) {
    if (this._paused) return true;
    var property;
    var elapsed;
    var value;

    if (time < this._startTime) {
      return true;
    }

    if (this._onStartCallbackFired === false) {
      if (this._onStartCallback !== null) {
        this._onStartCallback(this._object);
      }

      this._onStartCallbackFired = true;
    }

    elapsed = (time - this._startTime) / this._duration;
    elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;

    value = this._easingFunction(elapsed);

    for (property in this._valuesEnd) {
      // Don't update properties that do not exist in the source object
      if (this._valuesStart[property] === undefined) {
        continue;
      }

      var start = this._valuesStart[property] || 0;
      var end = this._valuesEnd[property];

      if (end instanceof Array) {
        this._object[property] = this._interpolationFunction(end, value);
      } else {
        // Parses relative end values with start as base (e.g.: +10, -3)
        if (typeof end === 'string') {
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            end = start + parseFloat(end);
          } else {
            end = parseFloat(end);
          }
        }

        // Protect against non numeric properties.
        if (typeof end === 'number') {
          this._object[property] = start + (end - start) * value;
        }
      }
    }

    if (this._onUpdateCallback !== null) {
      this._onUpdateCallback(this._object);
    }

    if (elapsed === 1) {
      if (this._repeat > 0) {
        if (isFinite(this._repeat)) {
          this._repeat--;
        }

        // Reassign starting values, restart by making startTime = now
        for (property in this._valuesStartRepeat) {
          if (typeof this._valuesEnd[property] === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
          }

          if (this._yoyo) {
            var tmp = this._valuesStartRepeat[property];

            this._valuesStartRepeat[property] = this._valuesEnd[property];
            this._valuesEnd[property] = tmp;
          }

          this._valuesStart[property] = this._valuesStartRepeat[property];
        }

        if (this._yoyo) {
          this._reversed = !this._reversed;
        }

        if (this._repeatDelayTime !== undefined) {
          this._startTime = time + this._repeatDelayTime;
        } else {
          this._startTime = time + this._delayTime;
        }

        return true;
      } else {
        if (this._onCompleteCallback !== null) {
          this._onCompleteCallback(this._object);
        }

        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
          // Make the chained tweens start exactly at the time they should,
          // even if the `update()` method was called way past the duration of the tween
          this._chainedTweens[i].start(this._startTime + this._duration);
        }

        return false;
      }
    }

    return true;
  }
};

TWEEN.Easing = {

  Linear: {

    None: function None(k) {
      return k;
    }

  },

  Quadratic: {

    In: function In(k) {
      return k * k;
    },

    Out: function Out(k) {
      return k * (2 - k);
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }

      return -0.5 * (--k * (k - 2) - 1);
    }

  },

  Cubic: {

    In: function In(k) {
      return k * k * k;
    },

    Out: function Out(k) {
      return --k * k * k + 1;
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k + 2);
    }

  },

  Quartic: {

    In: function In(k) {
      return k * k * k * k;
    },

    Out: function Out(k) {
      return 1 - --k * k * k * k;
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k;
      }

      return -0.5 * ((k -= 2) * k * k * k - 2);
    }

  },

  Quintic: {

    In: function In(k) {
      return k * k * k * k * k;
    },

    Out: function Out(k) {
      return --k * k * k * k * k + 1;
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    }

  },

  Sinusoidal: {

    In: function In(k) {
      return 1 - Math.cos(k * Math.PI / 2);
    },

    Out: function Out(k) {
      return Math.sin(k * Math.PI / 2);
    },

    InOut: function InOut(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

  },

  Exponential: {

    In: function In(k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },

    Out: function Out(k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },

    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      if ((k *= 2) < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }

      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    }

  },

  Circular: {

    In: function In(k) {
      return 1 - Math.sqrt(1 - k * k);
    },

    Out: function Out(k) {
      return Math.sqrt(1 - --k * k);
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    }

  },

  Elastic: {

    In: function In(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    },

    Out: function Out(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
    },

    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      k *= 2;

      if (k < 1) {
        return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      }

      return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
    }

  },

  Back: {

    In: function In(k) {
      var s = 1.70158;

      return k * k * ((s + 1) * k - s);
    },

    Out: function Out(k) {
      var s = 1.70158;

      return --k * k * ((s + 1) * k + s) + 1;
    },

    InOut: function InOut(k) {
      var s = 1.70158 * 1.525;

      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }

      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }

  },

  Bounce: {

    In: function In(k) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - k);
    },

    Out: function Out(k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },

    InOut: function InOut(k) {
      if (k < 0.5) {
        return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
      }

      return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
    }

  }

};

TWEEN.Interpolation = {

  Linear: function Linear(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.Linear;

    if (k < 0) {
      return fn(v[0], v[1], f);
    }

    if (k > 1) {
      return fn(v[m], v[m - 1], m - f);
    }

    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  },

  Bezier: function Bezier(v, k) {
    var b = 0;
    var n = v.length - 1;
    var pw = Math.pow;
    var bn = TWEEN.Interpolation.Utils.Bernstein;

    for (var i = 0; i <= n; i++) {
      b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }

    return b;
  },

  CatmullRom: function CatmullRom(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.CatmullRom;

    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }

      return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    } else {
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }

      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }

      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },

  Utils: {

    Linear: function Linear(p0, p1, t) {
      return (p1 - p0) * t + p0;
    },

    Bernstein: function Bernstein(n, i) {
      var fc = TWEEN.Interpolation.Utils.Factorial;

      return fc(n) / fc(i) / fc(n - i);
    },

    Factorial: function () {
      var a = [1];

      return function (n) {
        var s = 1;

        if (a[n]) {
          return a[n];
        }

        for (var i = n; i > 1; i--) {
          s *= i;
        }

        a[n] = s;
        return s;
      };
    }(),

    CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t2 = t * t;
      var t3 = t * t2;

      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }

  }

};

// UMD (Universal Module Definition)
(function (root) {
  if (typeof module !== 'undefined' && ( false ? undefined : _typeof(exports)) === 'object') {
    // Node.js
    module.exports = TWEEN;
  } else if (root !== undefined) {
    // Global variable
    root.TWEEN = TWEEN;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _to = __webpack_require__(0);

var _to2 = _interopRequireDefault(_to);

__webpack_require__(5);

var _tween = __webpack_require__(1);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_to2.default.easing = {
    linear: _tween2.default.Easing.Linear.None
};

['Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce'].forEach(function (item) {
    var itemLower = item.toLowerCase();
    _to2.default.easing[itemLower + 'In'] = _tween2.default.Easing[item].In;
    _to2.default.easing[itemLower + 'Out'] = _tween2.default.Easing[item].Out;
    _to2.default.easing[itemLower + 'InOut'] = _tween2.default.Easing[item].InOut;
});

module.exports = _to2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRafInterval = setRafInterval;
exports.clearRafInterval = clearRafInterval;
/*!
 *  raf-interval v0.3.0 By dntzhang
 *  Github: https://github.com/dntzhang/raf-interval
 *  MIT Licensed.
 */

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

var queue = [],
    id = -1,
    ticking = false,
    tickId = null,
    now = Date.now,
    lastTime = 0,
    vendors = ['ms', 'moz', 'webkit', 'o'],
    x = 0,
    isWeapp = typeof wx !== 'undefined' && typeof Page !== 'undefined',
    isWegame = typeof wx !== 'undefined' && typeof Page === 'undefined',
    isBrowser = typeof window !== 'undefined';

var raf = isBrowser ? window.requestAnimationFrame : null;
var caf = isBrowser ? window.cancelAnimationFrame : null;

function mockRaf(callback, element) {
  var currTime = now();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = setTimeout(function () {
    callback(currTime + timeToCall);
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
}

function mockCaf(id) {
  clearTimeout(id);
}

if (isBrowser) {
  window.setRafInterval = setRafInterval;
  window.clearRafInterval = clearRafInterval;

  for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!raf) {
    raf = mockRaf;
    caf = mockCaf;
    window.requestAnimationFrame = raf;
    window.cancelAnimationFrame = caf;
  }
} else if (isWeapp) {
  raf = mockRaf;
  caf = mockCaf;
} else if (isWegame) {
  raf = requestAnimationFrame;
  caf = cancelAnimationFrame;
}

function setRafInterval(fn, interval) {
  id++;
  queue.push({ id: id, fn: fn, interval: interval, lastTime: now() });
  if (!ticking) {
    var tick = function tick() {
      tickId = raf(tick);
      each(queue, function (item) {
        if (item.interval < 17 || now() - item.lastTime >= item.interval) {
          item.fn();
          item.lastTime = now();
        }
      });
    };
    ticking = true;
    tick();
  }
  return id;
}

function clearRafInterval(id) {
  var i = 0,
      len = queue.length;

  for (; i < len; i++) {
    if (id === queue[i].id) {
      queue.splice(i, 1);
      break;
    }
  }

  if (queue.length === 0) {
    caf(tickId);
    ticking = false;
  }
}

function each(arr, fn) {
  if (Array.prototype.forEach) {
    arr.forEach(fn);
  } else {
    var i = 0,
        len = arr.length;
    for (; i < len; i++) {
      fn(arr[i], i);
    }
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _to = __webpack_require__(0);

var _to2 = _interopRequireDefault(_to);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_to2.default.extend('rubber', [['to', ['scaleX', {
  '0': 1.25,
  '1': 300
}], ['scaleY', {
  '0': 0.75,
  '1': 300
}]], ['to', ['scaleX', {
  '0': 0.75,
  '1': 100
}], ['scaleY', {
  '0': 1.25,
  '1': 100
}]], ['to', ['scaleX', {
  '0': 1.15,
  '1': 100
}], ['scaleY', {
  '0': 0.85,
  '1': 100
}]], ['to', ['scaleX', {
  '0': 0.95,
  '1': 150
}], ['scaleY', {
  '0': 1.05,
  '1': 150
}]], ['to', ['scaleX', {
  '0': 1.05,
  '1': 100
}], ['scaleY', {
  '0': 0.95,
  '1': 100
}]], ['to', ['scaleX', {
  '0': 1,
  '1': 250
}], ['scaleY', {
  '0': 1,
  '1': 250
}]]]);

_to2.default.extend('bounceIn', [['to', ['scaleX', {
  '0': 0,
  '1': 0
}], ['scaleY', {
  '0': 0,
  '1': 0
}]], ['to', ['scaleX', {
  '0': 1.35,
  '1': 200
}], ['scaleY', {
  '0': 1.35,
  '1': 200
}]], ['to', ['scaleX', {
  '0': 0.9,
  '1': 100
}], ['scaleY', {
  '0': 0.9,
  '1': 100
}]], ['to', ['scaleX', {
  '0': 1.1,
  '1': 100
}], ['scaleY', {
  '0': 1.1,
  '1': 100
}]], ['to', ['scaleX', {
  '0': 0.95,
  '1': 100
}], ['scaleY', {
  '0': 0.95,
  '1': 100
}]], ['to', ['scaleX', {
  '0': 1,
  '1': 100
}], ['scaleY', {
  '0': 1,
  '1': 100
}]]]);

_to2.default.extend('flipInX', [['to', ['rotateX', {
  '0': -90,
  '1': 0
}]], ['to', ['rotateX', {
  '0': 20,
  '1': 300
}]], ['to', ['rotateX', {
  '0': -20,
  '1': 300
}]], ['to', ['rotateX', {
  '0': 10,
  '1': 300
}]], ['to', ['rotateX', {
  '0': -5,
  '1': 300
}]], ['to', ['rotateX', {
  '0': 0,
  '1': 300
}]]]);

_to2.default.extend('zoomOut', [['to', ['scaleX', {
  '0': 0,
  '1': 400
}], ['scaleY', {
  '0': 0,
  '1': 400
}]]]);

/***/ })
/******/ ]);
});

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var To2To = __webpack_require__(/*! to2to */ "./node_modules/_to2to@1.0.4@to2to/dist/to.js");
var To = /** @class */ (function (_super) {
    __extends(To, _super);
    function To() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.to = null;
        return _this;
    }
    To.prototype.receiveProps = function (props, preProps) {
        var _this = this;
        var restart = false;
        for (var key in props.from) {
            if (props.from[key] !== preProps.from[key]) {
                restart = true;
                break;
            }
        }
        if (!restart) {
            for (var key in props.to) {
                if (props.to[key] !== preProps.to[key]) {
                    restart = true;
                    break;
                }
            }
        }
        if (restart || props.start && !preProps.start) {
            if (this.to)
                this.to.stop();
            var from = Object.assign({}, props.from);
            this.to = To2To.get(from)
                .wait(props.delay || 0)
                .to(props.to, props.duration, To2To.easing[npn(props.easing || 'linear')])
                .begin(function () {
                _this.fire('begin');
            })
                .progress(function (obj) {
                //@ts-ignore
                Object.assign(props.out, obj);
                _this.fire('progress');
            })
                .end(function () {
                _this.fire('end');
            })
                .start();
        }
    };
    To.prototype.installed = function () {
        if (this.props.start) {
            this.receiveProps(this.props, { from: {}, to: {} });
        }
    };
    To.prototype.render = function () {
        return (omi_1.h("slot", null));
    };
    To = __decorate([
        omi_1.tag('o-to')
    ], To);
    return To;
}(omi_1.WeElement));
exports.default = To;
function npn(str) {
    return str.replace(/-(\w)/g, function ($, $1) {
        return $1.toUpperCase();
    });
}
var MyApp = /** @class */ (function (_super) {
    __extends(MyApp, _super);
    function MyApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.number = 2;
        _this.from = _this.number;
        _this.to = _this.number;
        _this.out = {
            number: _this.number
        };
        _this.onInput = function (e) {
            _this.to = Number(e.target.value);
            _this.from = _this.out.number;
            _this.number = _this.to;
            _this.update();
        };
        _this.onProgress = function () {
            _this.update();
        };
        _this.onClick = function () {
            _this.start = true;
            _this.update();
        };
        _this.start = false;
        _this.outs = [{ width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }];
        return _this;
    }
    MyApp.prototype.render = function () {
        var _this = this;
        return (omi_1.h("div", null,
            omi_1.h("h3", null, "Simple"),
            omi_1.h("input", { type: 'number', onInput: this.onInput, value: this.number, step: 2 }),
            omi_1.h("div", null, this.out.number.toFixed(0)),
            omi_1.h("div", null,
                this.out.number.toFixed(0),
                "*",
                this.out.number.toFixed(0),
                "=",
                (this.out.number * this.out.number).toFixed(0)),
            omi_1.h("div", { style: { width: this.out.number * 5 + 'px', background: 'red', height: '5px' } }),
            omi_1.h("o-to", { from: { number: this.from }, easing: 'bounce-in', onProgress: this.onProgress, to: { number: this.to }, out: this.out, duration: 1000 }),
            omi_1.h("h3", null, "Group"),
            this.outs.map(function (item, index) {
                return omi_1.h("div", { style: { marginTop: '5px', width: _this.outs[index].width + 'px', background: 'red', height: '5px' } });
            }),
            omi_1.h("button", { onClick: this.onClick }, "Play"),
            this.outs.map(function (item, index) {
                return omi_1.h("o-to", { from: { width: 10 }, start: _this.start, easing: "bounce-out", delay: 100 * index, onProgress: _this.onProgress, to: { width: 200 }, out: _this.outs[index], duration: 600 });
            })));
    };
    MyApp = __decorate([
        omi_1.tag('my-app')
    ], MyApp);
    return MyApp;
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