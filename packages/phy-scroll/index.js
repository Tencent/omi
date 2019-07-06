/* phy-scroll v1.0.3
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi/tree/master/packages/phy-scroll
 * MIT Licensed.
 */

; (function () {
  'use strict';

  if (!Date.now)
    Date.now = function () { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
      || window[vp + 'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () { callback(lastTime = nextTime); },
        nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
}());

; (function () {

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassiveOption = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}

  var _elementStyle = document.createElement('div').style,
    endTransitionEventName,
    transitionDuration,
    transitionTimingFunction,
    transform;

  if ('transform' in _elementStyle) {
    transform = 'transform';
    endTransitionEventName = 'transitionend';
    transitionDuration = 'transitionDuration';
    transitionTimingFunction = 'transitionTimingFunction';
  } else if ('webkitTransform' in _elementStyle) {
    transform = 'webkitTransform';
    endTransitionEventName = 'webkitTransitionEnd';
    transitionDuration = 'webkitTransitionDuration';
    transitionTimingFunction = 'webkitTransitionTimingFunction';
  } else {
    throw 'please use a modern browser'
  }

  var ease = 'cubic-bezier(0.1, 0.57, 0.1, 1)';

  function reverseEase(y) {
    return 1 - Math.sqrt(1 - y * y);
  }

  function bind(element, type, callback) {
    element.addEventListener(type, callback, false);
  }

  function unbind(element, type, callback) {
    element.removeEventListener(type, callback);
  }

  function preventDefaultTest(el, exceptions) {
    for (var i in exceptions) {
      if (exceptions[i].test(el[i])) {
        return true;
      }
    }
    return false;
  }

  function getTransform(ele) {
    return +ele.style[transform].replace(/[^\-?\d.]/g, '')
  }

  function setTransform(ele, prop, val) {
    ele.style[transform] = prop + '(' + val + 'px)'
  }

  var PhyScroll = function (option) {
    this.scroll = typeof option.scroll === "string" ? document.querySelector(option.scroll) : option.scroll;

    //内部会有scroll出现的DOM
    //如果配置这个属性，需要min=max=0，否则会有意想不到的糟糕效果
    this.scrollDom = option.scrollDom;

    this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
    this.vertical = this._getValue(option.vertical, true);
    this.property = this.vertical ? 'translateY' : 'translateX';
    this.preventDefault = this._getValue(option.preventDefault, true);
    this.sensitivity = this._getValue(option.sensitivity, 1);
    this.lockDirection = this._getValue(option.lockDirection, true);

    this.value = this._getValue(option.value, 0);

    setTransform(this.scroll, this.property, this.value)

    this.moveFactor = this._getValue(option.moveFactor, 1);
    this.factor = this._getValue(option.factor, 1);
    this.outFactor = this._getValue(option.outFactor, 0.3);

    this.min = option.min;
    this.max = option.max;

    this.maxRegion = this._getValue(option.maxRegion, 60);

    this.deceleration = 0.0006;
    this.maxRegion = this._getValue(option.maxRegion, 600);
    this.springMaxRegion = this._getValue(option.springMaxRegion, 60);

    this.change = option.change || function () { };
    this.touchEnd = option.touchEnd || function () { };
    this.touchStart = option.touchStart || function () { };
    this.touchMove = option.touchMove || function () { };
    this.touchCancel = option.touchMove || function () { };
    this.animationEnd = option.animationEnd || function () { };

    this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };
    this.hasMin = !(this.min === void 0);
    this.hasMax = !(this.max === void 0);
    this.isTouchStart = false;
    this.step = option.step;
    this.inertia = this._getValue(option.inertia, true);
    this.maxSpeed = option.maxSpeed;
    this.hasMaxSpeed = !(this.maxSpeed === void 0);

    if (this.hasMax && this.hasMin) {
      if (this.min > this.max) throw "min value can't be greater than max value";
      this.currentPage = Math.round((this.max - getTransform(this.scroll)) / this.step);
    }

    this._startHandler = this._start.bind(this);
    this._moveHandler = this._move.bind(this);
    this._transitionEndHandler = this._transitionEnd.bind(this);
    this._endHandler = this._end.bind(this);
    this._cancelHandler = this._cancel.bind(this);
    bind(this.element, "touchstart", this._startHandler);
    bind(this.scroll, endTransitionEventName, this._transitionEndHandler);
    document.addEventListener('touchmove', this._moveHandler, supportsPassiveOption ? {
      passive: false
    }: false)
    bind(document, "touchend", this._endHandler);
    bind(document, "touchcancel", this._cancelHandler);
    //当有step设置的时候防止执行两次end
    this._endCallbackTag = true;

    this._endTimeout = null;
  };

  PhyScroll.prototype = {
    _getValue: function (obj, defaultValue) {
      return obj === void 0 ? defaultValue : obj;
    },
    _transitionEnd: function () {
      if (!this._triggerTransitionEnd) return;
      var current = getTransform(this.scroll);
      if (current < this.min) {
        this.to(this.min, 600, ease);
        return;
      } else if (current > this.max) {
        this.to(this.max, 600, ease);
        return;
      }

      if (this.step) {
        this.correction();
        if (this._endCallbackTag) {
          this._endTimeout = setTimeout(function () {
            this.animationEnd.call(this, current, this.index);
            cancelAnimationFrame(this.tickID);
          }.bind(this), 400);
          this._endCallbackTag = false;
        }
      } else {
        this.animationEnd.call(this, current, this.index);
        cancelAnimationFrame(this.tickID);
      }
    },
    _cancelAnimation: function () {
      this.scroll.style[transitionDuration] = '0ms';
      setTransform(this.scroll, this.property, this.getComputedPosition());

    },
    getComputedPosition: function () {
      var matrix = window.getComputedStyle(this.scroll, null);
      matrix = matrix[transform].split(')')[0].split(', ');
      return this.vertical ? (+(matrix[13] || matrix[5])) : (+(matrix[12] || matrix[4]));
    },
    _tick: function () {
      this.change.call(this, this.getComputedPosition());
      this.tickID = requestAnimationFrame(this._tick.bind(this));
    },
    stop: function () {
      cancelAnimationFrame(this.tickID);
      this._cancelAnimation();
      clearTimeout(this._endTimeout);
      if (this.hasMax && this.hasMin) {
        this.currentPage = Math.round((this.max - getTransform(this.scroll)) / this.step);
      }
    },
    _start: function (evt) {
      cancelAnimationFrame(this.tickID);
      this._tick();

      this._endCallbackTag = true;
      this.isTouchStart = true;
      this._firstTouchMove = true;
      this._preventMove = false;
      this.touchStart.call(this, evt, getTransform(this.scroll));
      this._cancelAnimation();
      clearTimeout(this._endTimeout);
      if (this.hasMax && this.hasMin) {
        this.currentPage = Math.round((this.max - getTransform(this.scroll)) / this.step);
      }
      this.startTime = new Date().getTime();
      this._startX = this.preX = evt.touches[0].pageX;
      this._startY = this.preY = evt.touches[0].pageY;
      this.start = this.vertical ? this.preY : this.preX;
    },
    /**
     * 根据滑动方向判断
     * @param element 具有scroll的DOM
     * @param move 滚动的距离
     * @param property 滚动的方向
     * @returns {*} 返回当前滑动状态下，element元素的scroll位置信息，'middle'-scroll正在滚动
     * @private
     */
    _scrollPosition: function (element, move, property) {
      var scrollKeys = property === 'translateY'
        ? ['scrollTop', 'offsetHeight', 'scrollHeight']
        : property === 'translateX' ? ['scrollLeft', 'offsetWidth', 'scrollWidth'] : null;
      if (!scrollKeys) { return '' }

      var scroll_start = element[scrollKeys[0]] || 0;
      if (scroll_start === 0 && move >= 0) {
        return 'start'
      }
      var visible_range = element[scrollKeys[1]] || 0,
        scroll_range = element[scrollKeys[2]] || 0;
      if (scroll_range === visible_range + scroll_start) {
        return 'end'
      }
      return 'middle'
    },
    _move: function (evt) {

      //如果当前滑动的时候，滚动元素scrollDOM非触发边界，则不触发滚动效果
      if (this.scrollDom && this._scrollPosition(
        this.scrollDom,
        getTransform(this.scroll),
        this.property
      ) === 'middle') {
        evt.preventDefault();
        return false;
      }

      if (this.isTouchStart) {
        var dx = Math.abs(evt.touches[0].pageX - this._startX), dy = Math.abs(evt.touches[0].pageY - this._startY);
        if (this._firstTouchMove && this.lockDirection) {
          var dDis = dx - dy;
          if (dDis > 0 && this.vertical) {
            this._preventMove = true;
          } else if (dDis < 0 && !this.vertical) {
            this._preventMove = true;
          }
          this._firstTouchMove = false;
        }
        if (dx < 10 && dy < 10) return;

        if (!this._preventMove) {
          var f = this.moveFactor;
          var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sensitivity;
          if (this.hasMax && getTransform(this.scroll) > this.max && d > 0) {
            f = this.outFactor;
          } else if (this.hasMin && getTransform(this.scroll) < this.min && d < 0) {
            f = this.outFactor;
          }
          d *= f;
          this.preX = evt.touches[0].pageX;
          this.preY = evt.touches[0].pageY;
          setTransform(this.scroll, this.property, getTransform(this.scroll) + d);

          var timestamp = new Date().getTime();
          if (timestamp - this.startTime > 300) {
            this.startTime = timestamp;
            this.start = this.vertical ? this.preY : this.preX;
          }
          this.touchMove.call(this, evt, getTransform(this.scroll));

        }

        if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
          evt.preventDefault();
        }
      }
    },
    _end: function (evt) {
      if (this.isTouchStart) {
        var self = this,
          current = getTransform(this.scroll);
        if (this.touchEnd.call(this, evt, current) === false) {
          this._triggerTransitionEnd = false;
          cancelAnimationFrame(this.tickID);
          return;
        } else {
          this._triggerTransitionEnd = true;
        }
        if (this.hasMax && current > this.max) {
          this.to(this.max, 600, ease);
        } else if (this.hasMin && current < this.min) {
          this.to(this.min, 600, ease);
        } else if (this.inertia && !this._preventMove) {
          var dt = new Date().getTime() - this.startTime;
          if (dt < 300) {

            var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
              speed = Math.abs(distance) / dt;
            if(distance === 0 && self.step){
              self.correction();
              return
            }
            var speed2 = this.factor * speed;
            if (this.hasMaxSpeed && speed2 > this.maxSpeed) {
              speed2 = this.maxSpeed;
            }

            var destination = current + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

            var tRatio = 1;
            if (destination < this.min) {
              if (destination < this.min - this.maxRegion) {
                tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
                destination = this.min - this.springMaxRegion;
              } else {
                tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
                destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
              }
            } else if (destination > this.max) {
              if (destination > this.max + this.maxRegion) {
                tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
                destination = this.max + this.springMaxRegion;
              } else {
                tRatio = reverseEase((this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion - current) / (destination - current));
                destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;

              }
            }
            var duration = Math.round(speed / self.deceleration) * tRatio;

            //Prevent too fast to flash directly
            duration = Math.max(duration, 150)

            self.to(Math.round(destination), duration, ease);
          } else {
            if (self.step) {
              self.correction();
            }
          }
        } else {
          if (self.step) {
            self.correction();
          }
        }
        // if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
        //     evt.preventDefault();
        // }
        this.isTouchStart = false;
      }
    },
    _cancel: function (evt) {
      cancelAnimationFrame(this.tickID);
      if (this.step) {
        this.correction();
      }
      this.touchCancel.call(this, evt);
    },
    to: function (value, time, u_ease) {
      var el = this.scroll,
        property = this.property;

      el.style[transitionDuration] = this._getValue(time, 600) + 'ms';
      el.style[transitionTimingFunction] = u_ease || ease;
      setTransform(el, property, value)
    },
    correction: function (time) {
      var time = typeof time === 'number' ? time : 400;

      var value = getTransform(this.scroll)
      var rpt = Math.floor(Math.abs(value / this.step));
      var dy = value % this.step;
      var result;
      if (Math.abs(dy) > this.step / 2) {
        result = (value < 0 ? -1 : 1) * (rpt + 1) * this.step;
        if (result > this.max) result = this.max;
        if (result < this.min) result = this.min;
        this.to(result, time, ease);
        this.index = (value < 0 ? -1 : 1) * (rpt + 1)
      } else {
        result = (value < 0 ? -1 : 1) * rpt * this.step;
        if (result > this.max) result = this.max;
        if (result < this.min) result = this.min;
        this.to(result, time, ease);
        this.index = (value < 0 ? -1 : 1) * rpt
      }
    },
    destroy: function () {
      unbind(this.element, "touchstart", this._startHandler);
      unbind(this.scroll, endTransitionEventName, this._transitionEndHandler);
      unbind(window, "touchmove", this._moveHandler);
      unbind(window, "touchend", this._endHandler);
      unbind(window, "touchcancel", this._cancelHandler);
    }
  };

  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = PhyScroll;
  } else {
    window.PhyScroll = PhyScroll;
  }

})();
