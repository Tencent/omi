import { tag, WeElement, h } from "omi";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var to = { exports: {} };
/*!
 *  to2to v1.0.4 
 *  By https://github.com/dntzhang 
 *  Github: https://github.com/dntzhang/cax
 *  MIT Licensed.
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(typeof self !== "undefined" ? self : commonjsGlobal, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, {
            configurable: false,
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 2);
    }([
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _tween = __webpack_require__(1);
        var _tween2 = _interopRequireDefault(_tween);
        var _rafInterval = __webpack_require__(4);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var To2 = function() {
          function To3(element) {
            _classCallCheck(this, To3);
            this.element = element;
            this.cmds = [];
            this.index = 0;
            this.tweens = [];
            this._pause = false;
            this.loop = (0, _rafInterval.setRafInterval)(function() {
              _tween2.default.update();
            }, 15);
            this.cycleCount = 0;
          }
          _createClass(To3, [{
            key: "to",
            value: function to2(target, duration, easing) {
              this.cmds.push(["to"]);
              if (arguments.length !== 0) {
                for (var key in target) {
                  this.set(key, target[key], duration || 0, easing);
                }
              }
              return this;
            }
          }, {
            key: "set",
            value: function set(prop, value, duration, easing) {
              this.cmds[this.cmds.length - 1].push([prop, [value, duration, easing]]);
              return this;
            }
          }, {
            key: "x",
            value: function x() {
              this.cmds[this.cmds.length - 1].push(["x", arguments]);
              return this;
            }
          }, {
            key: "y",
            value: function y() {
              this.cmds[this.cmds.length - 1].push(["y", arguments]);
              return this;
            }
          }, {
            key: "z",
            value: function z() {
              this.cmds[this.cmds.length - 1].push(["z", arguments]);
              return this;
            }
          }, {
            key: "rotation",
            value: function rotation() {
              this.cmds[this.cmds.length - 1].push(["rotation", arguments]);
              return this;
            }
          }, {
            key: "scaleX",
            value: function scaleX() {
              this.cmds[this.cmds.length - 1].push(["scaleX", arguments]);
              return this;
            }
          }, {
            key: "scaleY",
            value: function scaleY() {
              this.cmds[this.cmds.length - 1].push(["scaleY", arguments]);
              return this;
            }
          }, {
            key: "skewX",
            value: function skewX() {
              this.cmds[this.cmds.length - 1].push(["skewX", arguments]);
              return this;
            }
          }, {
            key: "skewY",
            value: function skewY() {
              this.cmds[this.cmds.length - 1].push(["skewY", arguments]);
              return this;
            }
          }, {
            key: "originX",
            value: function originX() {
              this.cmds[this.cmds.length - 1].push(["originX", arguments]);
              return this;
            }
          }, {
            key: "originY",
            value: function originY() {
              this.cmds[this.cmds.length - 1].push(["originY", arguments]);
              return this;
            }
          }, {
            key: "alpha",
            value: function alpha() {
              this.cmds[this.cmds.length - 1].push(["alpha", arguments]);
              return this;
            }
          }, {
            key: "begin",
            value: function begin(fn) {
              this.cmds[this.cmds.length - 1].begin = fn;
              return this;
            }
          }, {
            key: "progress",
            value: function progress(fn) {
              this.cmds[this.cmds.length - 1].progress = fn;
              return this;
            }
          }, {
            key: "end",
            value: function end(fn) {
              this.cmds[this.cmds.length - 1].end = fn;
              return this;
            }
          }, {
            key: "wait",
            value: function wait() {
              this.cmds.push(["wait", arguments]);
              return this;
            }
          }, {
            key: "then",
            value: function then() {
              this.cmds.push(["then", arguments]);
              return this;
            }
          }, {
            key: "cycle",
            value: function cycle() {
              this.cmds.push(["cycle", arguments]);
              return this;
            }
          }, {
            key: "start",
            value: function start() {
              if (this._pause)
                return;
              var len = this.cmds.length;
              if (this.index < len) {
                this.exec(this.cmds[this.index], this.index === len - 1);
              } else {
                (0, _rafInterval.clearRafInterval)(this.loop);
              }
              return this;
            }
          }, {
            key: "pause",
            value: function pause() {
              this._pause = true;
              for (var i = 0, len = this.tweens.length; i < len; i++) {
                this.tweens[i].pause();
              }
              if (this.currentTask === "wait") {
                this.timeout -= new Date() - this.currentTaskBegin;
                this.currentTaskBegin = new Date();
              }
            }
          }, {
            key: "toggle",
            value: function toggle() {
              if (this._pause) {
                this.play();
              } else {
                this.pause();
              }
            }
          }, {
            key: "play",
            value: function play() {
              this._pause = false;
              for (var i = 0, len = this.tweens.length; i < len; i++) {
                this.tweens[i].play();
              }
              var self2 = this;
              if (this.currentTask === "wait") {
                setTimeout(function() {
                  if (self2._pause)
                    return;
                  self2.index++;
                  self2.start();
                  if (self2.index === self2.cmds.length && self2.complete)
                    self2.complete();
                }, this.timeout);
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              for (var i = 0, len = this.tweens.length; i < len; i++) {
                this.tweens[i].stop();
              }
              this.cmds.length = 0;
            }
          }, {
            key: "animate",
            value: function animate(name) {
              this.cmds = this.cmds.concat(To3.animationMap[name] || []);
              return this;
            }
          }, {
            key: "exec",
            value: function exec(cmd, last) {
              var len = cmd.length, self2 = this;
              this.currentTask = cmd[0];
              switch (this.currentTask) {
                case "to":
                  self2.stepCompleteCount = 0;
                  for (var i = 1; i < len; i++) {
                    var task = cmd[i];
                    var ease = task[1][2];
                    var target = {};
                    var prop = task[0];
                    target[prop] = task[1][0];
                    var t = new _tween2.default.Tween(this.element).to(target, task[1][1]).onStart(function() {
                      if (cmd.begin)
                        cmd.begin.call(self2.element, self2.element);
                    }).onUpdate(function() {
                      if (cmd.progress)
                        cmd.progress.call(self2.element, self2.element);
                    }).easing(ease || _tween2.default.Easing.Linear.None).onComplete(function() {
                      self2.stepCompleteCount++;
                      if (self2.stepCompleteCount === len - 1) {
                        if (cmd.end)
                          cmd.end.call(self2.element, self2.element);
                        if (last && self2.complete)
                          self2.complete();
                        self2.index++;
                        self2.start();
                      }
                    }).start();
                    this.tweens.push(t);
                  }
                  break;
                case "wait":
                  this.currentTaskBegin = new Date();
                  this.timeout = cmd[1][0];
                  setTimeout(function() {
                    if (self2._pause)
                      return;
                    self2.index++;
                    self2.start();
                    if (cmd.end)
                      cmd.end.call(self2.element, self2.element);
                    if (last && self2.complete)
                      self2.complete();
                  }, cmd[1][0]);
                  break;
                case "then":
                  var arg = cmd[1][0];
                  arg.index = 0;
                  arg.complete = function() {
                    self2.index++;
                    self2.start();
                    if (last && self2.complete)
                      self2.complete();
                  };
                  arg.start();
                  break;
                case "cycle":
                  var count = cmd[1][1];
                  if (count === void 0) {
                    self2.index = cmd[1][0] || 0;
                    self2.start();
                  } else {
                    if (count && self2.cycleCount === count) {
                      self2.index++;
                      self2.start();
                      if (last && self2.complete)
                        self2.complete();
                    } else {
                      self2.cycleCount++;
                      self2.index = cmd[1][0];
                      self2.start();
                    }
                  }
                  break;
              }
            }
          }]);
          return To3;
        }();
        To2.get = function(element) {
          var to2 = new To2(element);
          return to2;
        };
        To2.animationMap = {};
        To2.extend = function(animationName, cmds) {
          To2.animationMap[animationName] = cmds;
        };
        exports2.default = To2;
      },
      function(module2, exports2, __webpack_require__) {
        (function(process) {
          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
          var _Group = function _Group2() {
            this._tweens = {};
            this._tweensAddedDuringUpdate = {};
          };
          _Group.prototype = {
            getAll: function getAll() {
              return Object.keys(this._tweens).map(function(tweenId) {
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
              time = time !== void 0 ? time : TWEEN.now();
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
          TWEEN.nextId = function() {
            return TWEEN._nextId++;
          };
          if (typeof window === "undefined" && typeof process !== "undefined") {
            if (typeof wx !== "undefined") {
              TWEEN.now = Date.now;
            } else {
              TWEEN.now = function() {
                var time = process.hrtime();
                return time[0] * 1e3 + time[1] / 1e6;
              };
            }
          } else if (typeof window !== "undefined" && window.performance !== void 0 && window.performance.now !== void 0) {
            TWEEN.now = window.performance.now.bind(window.performance);
          } else if (Date.now !== void 0) {
            TWEEN.now = Date.now;
          } else {
            TWEEN.now = function() {
              return new Date().getTime();
            };
          }
          TWEEN.Tween = function(object, group) {
            this._object = object;
            this._valuesStart = {};
            this._valuesEnd = {};
            this._valuesStartRepeat = {};
            this._duration = 1e3;
            this._repeat = 0;
            this._repeatDelayTime = void 0;
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
            to: function to2(properties, duration) {
              this._valuesEnd = properties;
              if (duration !== void 0) {
                this._duration = duration;
              }
              return this;
            },
            start: function start(time) {
              this._group.add(this);
              this._isPlaying = true;
              this._onStartCallbackFired = false;
              this._startTime = time !== void 0 ? typeof time === "string" ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
              this._startTime += this._delayTime;
              for (var property in this._valuesEnd) {
                if (this._valuesEnd[property] instanceof Array) {
                  if (this._valuesEnd[property].length === 0) {
                    continue;
                  }
                  this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
                }
                if (this._object[property] === void 0) {
                  continue;
                }
                this._valuesStart[property] = this._object[property];
                if (this._valuesStart[property] instanceof Array === false) {
                  this._valuesStart[property] *= 1;
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
              if (this._paused)
                return true;
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
                if (this._valuesStart[property] === void 0) {
                  continue;
                }
                var start = this._valuesStart[property] || 0;
                var end = this._valuesEnd[property];
                if (end instanceof Array) {
                  this._object[property] = this._interpolationFunction(end, value);
                } else {
                  if (typeof end === "string") {
                    if (end.charAt(0) === "+" || end.charAt(0) === "-") {
                      end = start + parseFloat(end);
                    } else {
                      end = parseFloat(end);
                    }
                  }
                  if (typeof end === "number") {
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
                  for (property in this._valuesStartRepeat) {
                    if (typeof this._valuesEnd[property] === "string") {
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
                  if (this._repeatDelayTime !== void 0) {
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
              Factorial: function() {
                var a = [1];
                return function(n) {
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
          (function(root) {
            if (typeof module2 !== "undefined" && _typeof(exports2) === "object") {
              module2.exports = TWEEN;
            } else if (root !== void 0) {
              root.TWEEN = TWEEN;
            }
          })(void 0);
        }).call(exports2, __webpack_require__(3));
      },
      function(module2, exports2, __webpack_require__) {
        var _to = __webpack_require__(0);
        var _to2 = _interopRequireDefault(_to);
        __webpack_require__(5);
        var _tween = __webpack_require__(1);
        var _tween2 = _interopRequireDefault(_tween);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        _to2.default.easing = {
          linear: _tween2.default.Easing.Linear.None
        };
        ["Quadratic", "Cubic", "Quartic", "Quintic", "Sinusoidal", "Exponential", "Circular", "Elastic", "Back", "Bounce"].forEach(function(item) {
          var itemLower = item.toLowerCase();
          _to2.default.easing[itemLower + "In"] = _tween2.default.Easing[item].In;
          _to2.default.easing[itemLower + "Out"] = _tween2.default.Easing[item].Out;
          _to2.default.easing[itemLower + "InOut"] = _tween2.default.Easing[item].InOut;
        });
        module2.exports = _to2.default;
      },
      function(module2, exports2) {
        var process = module2.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === "function") {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
          }
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e2) {
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
          }
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              return cachedClearTimeout.call(null, marker);
            } catch (e2) {
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
          while (len) {
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
        process.nextTick = function(fun) {
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
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};
        function noop() {
        }
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
          return [];
        };
        process.binding = function(name) {
          throw new Error("process.binding is not supported");
        };
        process.cwd = function() {
          return "/";
        };
        process.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
          return 0;
        };
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.setRafInterval = setRafInterval;
        exports2.clearRafInterval = clearRafInterval;
        /*!
         *  raf-interval v0.3.0 By dntzhang
         *  Github: https://github.com/dntzhang/raf-interval
         *  MIT Licensed.
         */
        if (!Date.now) {
          Date.now = function now2() {
            return new Date().getTime();
          };
        }
        var queue = [], id = -1, ticking = false, tickId = null, now = Date.now, lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0, isWeapp = typeof wx !== "undefined" && typeof Page !== "undefined", isWegame = typeof wx !== "undefined" && typeof Page === "undefined", isBrowser = typeof window !== "undefined";
        var raf = isBrowser ? window.requestAnimationFrame : null;
        var caf = isBrowser ? window.cancelAnimationFrame : null;
        function mockRaf(callback, element) {
          var currTime = now();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id2 = setTimeout(function() {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id2;
        }
        function mockCaf(id2) {
          clearTimeout(id2);
        }
        if (isBrowser) {
          window.setRafInterval = setRafInterval;
          window.clearRafInterval = clearRafInterval;
          for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
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
          queue.push({ id, fn, interval, lastTime: now() });
          if (!ticking) {
            var tick = function tick2() {
              tickId = raf(tick2);
              each(queue, function(item) {
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
        function clearRafInterval(id2) {
          var i = 0, len = queue.length;
          for (; i < len; i++) {
            if (id2 === queue[i].id) {
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
            var i = 0, len = arr.length;
            for (; i < len; i++) {
              fn(arr[i], i);
            }
          }
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _to = __webpack_require__(0);
        var _to2 = _interopRequireDefault(_to);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        _to2.default.extend("rubber", [["to", ["scaleX", {
          "0": 1.25,
          "1": 300
        }], ["scaleY", {
          "0": 0.75,
          "1": 300
        }]], ["to", ["scaleX", {
          "0": 0.75,
          "1": 100
        }], ["scaleY", {
          "0": 1.25,
          "1": 100
        }]], ["to", ["scaleX", {
          "0": 1.15,
          "1": 100
        }], ["scaleY", {
          "0": 0.85,
          "1": 100
        }]], ["to", ["scaleX", {
          "0": 0.95,
          "1": 150
        }], ["scaleY", {
          "0": 1.05,
          "1": 150
        }]], ["to", ["scaleX", {
          "0": 1.05,
          "1": 100
        }], ["scaleY", {
          "0": 0.95,
          "1": 100
        }]], ["to", ["scaleX", {
          "0": 1,
          "1": 250
        }], ["scaleY", {
          "0": 1,
          "1": 250
        }]]]);
        _to2.default.extend("bounceIn", [["to", ["scaleX", {
          "0": 0,
          "1": 0
        }], ["scaleY", {
          "0": 0,
          "1": 0
        }]], ["to", ["scaleX", {
          "0": 1.35,
          "1": 200
        }], ["scaleY", {
          "0": 1.35,
          "1": 200
        }]], ["to", ["scaleX", {
          "0": 0.9,
          "1": 100
        }], ["scaleY", {
          "0": 0.9,
          "1": 100
        }]], ["to", ["scaleX", {
          "0": 1.1,
          "1": 100
        }], ["scaleY", {
          "0": 1.1,
          "1": 100
        }]], ["to", ["scaleX", {
          "0": 0.95,
          "1": 100
        }], ["scaleY", {
          "0": 0.95,
          "1": 100
        }]], ["to", ["scaleX", {
          "0": 1,
          "1": 100
        }], ["scaleY", {
          "0": 1,
          "1": 100
        }]]]);
        _to2.default.extend("flipInX", [["to", ["rotateX", {
          "0": -90,
          "1": 0
        }]], ["to", ["rotateX", {
          "0": 20,
          "1": 300
        }]], ["to", ["rotateX", {
          "0": -20,
          "1": 300
        }]], ["to", ["rotateX", {
          "0": 10,
          "1": 300
        }]], ["to", ["rotateX", {
          "0": -5,
          "1": 300
        }]], ["to", ["rotateX", {
          "0": 0,
          "1": 300
        }]]]);
        _to2.default.extend("zoomOut", [["to", ["scaleX", {
          "0": 0,
          "1": 400
        }], ["scaleY", {
          "0": 0,
          "1": 400
        }]]]);
      }
    ]);
  });
})(to);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let To = class extends WeElement {
  constructor() {
    super(...arguments);
    this.to = null;
  }
  receiveProps(props, preProps) {
    let restart = false;
    for (let key in props.from) {
      if (props.from[key] !== preProps.from[key]) {
        restart = true;
        break;
      }
    }
    if (!restart) {
      for (let key in props.to) {
        if (props.to[key] !== preProps.to[key]) {
          restart = true;
          break;
        }
      }
    }
    if (restart || props.start && !preProps.start) {
      if (this.to)
        this.to.stop();
      const from = Object.assign({}, props.from);
      this.to = to.exports.get(from).wait(props.delay || 0).to(props.to, props.duration, to.exports.easing[npn(props.easing || "linear")]).begin(() => {
        this.fire("begin");
      }).progress((obj) => {
        Object.assign(props.out, obj);
        this.fire("progress");
      }).end(() => {
        this.fire("end");
      }).start();
    }
  }
  stop() {
    this.to.stop();
  }
  installed() {
    if (this.props.start) {
      this.receiveProps(this.props, { from: {}, to: {} });
    }
  }
  render() {
    return /* @__PURE__ */ h("slot", null);
  }
};
To = __decorateClass([
  tag("o-to")
], To);
function npn(str) {
  return str.replace(/-(\w)/g, ($, $1) => {
    return $1.toUpperCase();
  });
}
