/* obaa 0.1.1
 * By dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */
; (function (win) {
  var obaa = function (target, arr, callback) {
    var _observe = function (target, arr, callback) {
      if (!target.$observer) target.$observer = this;
      var $observer = target.$observer;
      var eventPropArr = [];
      if (obaa.isArray(target)) {
        if (target.length === 0) {
          target.$observeProps = {};
          target.$observeProps.$observerPath = "#";
        }
        $observer.mock(target);

      }
      for (var prop in target) {
        if (target.hasOwnProperty(prop)) {
          if (callback) {
            if (obaa.isArray(arr) && obaa.isInArray(arr, prop)) {
              eventPropArr.push(prop);
              $observer.watch(target, prop);
            } else if (obaa.isString(arr) && prop == arr) {
              eventPropArr.push(prop);
              $observer.watch(target, prop);
            }
          } else {
            eventPropArr.push(prop);
            $observer.watch(target, prop);
          }
        }
      }
      $observer.target = target;
      if (!$observer.propertyChangedHandler) $observer.propertyChangedHandler = [];
      var propChanged = callback ? callback : arr;
      $observer.propertyChangedHandler.push({ all: !callback, propChanged: propChanged, eventPropArr: eventPropArr });
    };
    _observe.prototype = {
      "onPropertyChanged": function (prop, value, oldValue, target, path) {
        if (value !== oldValue && this.propertyChangedHandler) {
          var rootName = obaa._getRootName(prop, path);
          for (var i = 0, len = this.propertyChangedHandler.length; i < len; i++) {
            var handler = this.propertyChangedHandler[i];
            if (handler.all || obaa.isInArray(handler.eventPropArr, rootName) || rootName.indexOf("Array-") === 0) {
              handler.propChanged.call(this.target, prop, value, oldValue, path);
            }
          }
        }
        if (prop.indexOf("Array-") !== 0 && typeof value === "object") {
          this.watch(target, prop, target.$observeProps.$observerPath);
        }
      },
      "mock": function (target) {
        var self = this;
        obaa.methods.forEach(function (item) {
          target[item] = function () {
            var old = Array.prototype.slice.call(this, 0);
            var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
            if (new RegExp("\\b" + item + "\\b").test(obaa.triggerStr)) {
              for (var cprop in this) {
                if (this.hasOwnProperty(cprop) && !obaa.isFunction(this[cprop])) {
                  self.watch(this, cprop, this.$observeProps.$observerPath);
                }
              }
              //todo
              self.onPropertyChanged("Array-" + item, this, old, this, this.$observeProps.$observerPath);
            }
            return result;
          };
          target['real' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function () {
            return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
          };
        });
      },
      "watch": function (target, prop, path) {
        if (prop === "$observeProps" || prop === "$observer") return;
        if (obaa.isFunction(target[prop])) return;
        if (!target.$observeProps) target.$observeProps = {};
        if (path !== undefined) {
          target.$observeProps.$observerPath = path;
        } else {
          target.$observeProps.$observerPath = "#";
        }
        var self = this;
        var currentValue = target.$observeProps[prop] = target[prop];
        Object.defineProperty(target, prop, {
          get: function () {
            return this.$observeProps[prop];
          },
          set: function (value) {
            var old = this.$observeProps[prop];
            this.$observeProps[prop] = value;
            self.onPropertyChanged(prop, value, old, this, target.$observeProps.$observerPath);
          }
        });
        if (typeof currentValue == "object") {
          if (obaa.isArray(currentValue)) {
            this.mock(currentValue);
            if (currentValue.length === 0) {
              if (!currentValue.$observeProps) currentValue.$observeProps = {};
              if (path !== undefined) {
                currentValue.$observeProps.$observerPath = path;
              } else {
                currentValue.$observeProps.$observerPath = "#";
              }
            }
          }
          for (var cprop in currentValue) {
            if (currentValue.hasOwnProperty(cprop)) {
              this.watch(currentValue, cprop, target.$observeProps.$observerPath + "-" + prop);
            }
          }
        }
      }
    };
    return new _observe(target, arr, callback)
  };

  obaa.methods = ["concat", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "forEach", "includes", "indexOf", "join", "keys", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "toLocaleString", "toString", "unshift", "values", "size"];
  obaa.triggerStr = ["concat", "copyWithin", "fill", "pop", "push", "reverse", "shift", "sort", "splice", "unshift", "size"].join(",");

  obaa.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  obaa.isString = function (obj) {
    return typeof obj === "string";
  };

  obaa.isInArray = function (arr, item) {
    for (var i = arr.length; --i > -1;) {
      if (item === arr[i]) return true;
    }
    return false;
  };

  obaa.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) == '[object Function]';
  };

  obaa._getRootName = function (prop, path) {
    if (path === "#") {
      return prop;
    }
    return path.split("-")[1];
  };

  obaa.add = function (obj, prop) {
    var $observer = obj.$observer;
    $observer.watch(obj, prop);
  };

  obaa.set = function (obj, prop, value, exec) {
    if (!exec) {
      obj[prop] = value;
    }
    var $observer = obj.$observer;
    $observer.watch(obj, prop);
    if (exec) {
      obj[prop] = value;
    }
  };

  Array.prototype.size = function (length) {
    this.length = length;
  };

  if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = obaa }
  else if (typeof define === 'function' && define.amd) { define(obaa) }
  else { win.obaa = obaa }
})(Function('return this')());
