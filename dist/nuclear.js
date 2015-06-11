/* Nuclear
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/Nuclear
 * MIT Licensed.
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === "function" && define.cmd) {
        define(function(require, exports, module){
            module.exports=factory();
        });
    } else {
        root.Nuclear  = factory();
    }
}(this, function () {

var Nuclear = {};

Nuclear.create = function (obj) {
    Nuclear._mixObj(obj);
    if (!obj.statics) obj.statics = {};
    obj.statics.create = function (obj) {      
        Nuclear._mixObj(obj);
        return this.extend(obj);
    }
    return Nuclear.Class.extend(obj);
}

Nuclear._mixObj = function (obj) {
    obj.ctor = function (option, selector) {
        this._nuclearParentEmpty = !selector;
        this.HTML = "";
        this.option = option;
        if (!this._nuclearParentEmpty) {
            this.parent = typeof selector === "string" ? document.querySelector(selector) : selector;
        } else {
            this.parent = document.createElement("div");
        }
        if (this.install) {
            this.install();
        }
        this._nuclearRef = [];
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                if (this[key] && this[key]["_nuclearLocalRefresh"]) {
                    this[key]._nuclearParent = this;
                    this._nuclearRef.push(this[key]);
                }
            }
        }

        if (this.option) {
            Nuclear.observe(this.option, Nuclear.throttle(this._nuclearLocalRefresh.bind(this), 40));
        }
        this._nuclearRenderInfo = {
            tpl: this._nuclearTplGenerator(),
            data: this.option,
            parent: this.parent
        };
        this._nuclearRender(this._nuclearRenderInfo);

    }

    //加if防止子类赋值undefined，丢失父类方法
    if (obj.render) {
        obj._nuclearTplGenerator = obj.render;
    }

    obj.render = function () {
        if (this._nuclearParentEmpty) {
            return this.HTML;
            //var len=this._nuclearRef.length;
            ////嵌套的render逻辑        
            ////子节点下再无子节点
            //if (len === 0) {
            //    return this.HTML;
            //} else {//子节点下又有子节点
            //    var i=0;
            //    for (; i < len; i++) {
            //        var ref = this._nuclearRef[i];
            //        return ref.render();
            //    }
            //}
        } else {
            return this._nuclearTplGenerator();
        }
    }


    obj._nuclearRender = function (item) {
        if (this.node) {
            //this.node.parentNode&&this.node.parentNode.removeChild(this.node);
            // item.parent.removeChild(this.node);          
            var newNode = Nuclear.str2Dom(Nuclear.Tpl.render(item.tpl, item.data));
            item.parent.replaceChild(newNode, this.node);
            this.node = newNode;
        } else {
            item.parent.insertAdjacentHTML("beforeEnd", Nuclear.Tpl.render(item.tpl, item.data));
            this.node = item.parent.lastChild;
        }
        this._nuclearId = Nuclear.getId()
        this.node.setAttribute("data-nuclearId", this._nuclearId);
        if (this.onRefresh) this.onRefresh();
        if (this.installed) this.installed();
        item.refreshPart = this.node.querySelectorAll('*[nc-refresh]');
        this.HTML = this.node.outerHTML;


        this._nuclearFix();
    }

    //从最顶部组件向内fix
    obj._nuclearFix = function () {
        if (this._nuclearParent) return;
        var root = this._nuclearGetTop(this);
        this._nuclearFixOne(root)
    }

    obj._nuclearFixOne = function (one) {
        var refLen = one._nuclearRef.length;
        if (refLen > 0) {
            var i = 0;
            for (; i < refLen; i++) {
                var ref = one._nuclearRef[i];
                ref.node = one.node.querySelector('*[data-nuclearId="' + ref._nuclearId + '"]');
                ref._nuclearRenderInfo.refreshPart = ref.node.querySelectorAll('*[nc-refresh]');
                ref._nuclearRenderInfo.parent = ref.node.parentNode;
                if (ref.onRefresh) ref.onRefresh();
                if (ref.installed) ref.installed();
                this._nuclearFixOne(ref)
            }
        }
    }

    obj._nuclearGetTop = function (current) {
        if (!current._nuclearParent) return current;
        return this._nuclearGetTop(current._nuclearParent);
    }

    obj._nuclearLocalRefresh = function () {
        var item = this._nuclearRenderInfo, rpLen = item.refreshPart.length;
        item.tpl = this._nuclearTplGenerator();

        if (rpLen > 0) {
            var parts = Nuclear.str2Dom(Nuclear.Tpl.render(item.tpl, item.data)).querySelectorAll('*[nc-refresh]');
            for (var j = 0; j < rpLen; j++) {
                var part = item.refreshPart[j];
                //part.parentNode为null,代表其已经被子节点替换掉了
                part.parentNode&&part.parentNode.replaceChild(parts[j], part);

            }
            item.refreshPart = parts;
            if (this.onRefresh) this.onRefresh();
            this.HTML = this.node.outerHTML;

            this._nuclearFix();
            //var refLen = this._nuclearRef.length;
            //if (refLen > 0) {
            //    var i = 0;
            //    for (; i < refLen; i++) {
            //        var ref = this._nuclearRef[i];
            //        ref.node = this.node.querySelector('*[data-nuclearId="' + ref._nuclearId + '"]');

            //        if (ref.onRefresh) ref.onRefresh();
            //        if (ref.installed) ref.installed();
            //    }
            //}
        } else {
            this._nuclearRender(item);
        }
    }
}

Nuclear._minActionObj = function (obj) {
    obj.ctor = function (option) {
        this.option = option;
        if (this.install) {
            this.install();
        }
    }
}

Nuclear.createAction = function (obj) {  
    Nuclear._minActionObj(obj)
    if (!obj.statics) obj.statics = {};
    obj.statics.createAction = function (obj) {
        Nuclear._minActionObj(obj);
        return this.extend(obj);
    }
    return Nuclear.Class.extend(obj);
    
}



Nuclear.throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 上次执行时间点
    var previous = 0;
    if (!options) options = {};
    // 延迟执行函数
    var later = function () {
        // 若设定了开始边界不执行选项，上次执行时间始终为0
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
        if (!previous && options.leading === false) previous = now;
        // 延迟执行时间间隔
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
        // remaining大于时间窗口wait，表示客户端系统时间被调整过
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
            //如果延迟执行不存在，且没有设定结尾边界不执行选项
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}

Nuclear.isElement=function(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
  );
}

Nuclear.str2Dom = function (html) {
    var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        body: [0, "", ""],
        _default: [1, "<div>", "</div>"]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    var match = /<\s*\w.*?>/g.exec(html);
    var element = document.createElement('div');
    if (match != null) {
        var tag = match[0].replace(/</g, '').replace(/>/g, '').split(' ')[0];
        if (tag.toLowerCase() === 'body') {
            var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
            var body = document.createElement("body");
            // keeping the attributes
            element.innerHTML = html.replace(/<body/g, '<div').replace(/<\/body>/g, '</div>');
            var attrs = element.firstChild.attributes;
            body.innerHTML = html;
            for (var i = 0; i < attrs.length; i++) {
                body.setAttribute(attrs[i].name, attrs[i].value);
            }
            return body;
        } else {
            var map = wrapMap[tag] || wrapMap._default, element;
            html = map[1] + html + map[2];
            element.innerHTML = html;
            // Descend through wrappers to the right content
            var j = map[0] + 1;
            while (j--) {
                element = element.lastChild;
            }
        }
    } else {
        element.innerHTML = html;
        element = element.lastChild;
    }
    return element;
}

Nuclear.debounce=function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

Nuclear.addEvent = (function () {
    return function (el, type, fn) {
        if (el && el.nodeName || el === window) {
            el.addEventListener(type, fn, false);
        } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
                Nuclear.addEvent(el[i], type, fn);
            }
        }
    };
})();

Nuclear.removeEvent = (function () {
    return function (el, type, fn) {
        if (el && el.nodeName || el === window) {
            el.removeEventListener(type, fn, false);
        } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
                Nuclear.removeEvent.removeEvent(el[i], type, fn);
            }
        }
    };
})();

Nuclear.getNodeIndex = function (node) {
    var index = 0;
    while ((node = node.previousSibling)) {
        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
            index++;
        }
    }
    return index;
}

Nuclear.hasClass = function (ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

Nuclear.addClass = function (node, cls) {
    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("addClass", arguments);
        return;
    }
    if (!Nuclear.hasClass(node, cls)) node.className += " " + cls;

}

Nuclear.removeClass = function (node, cls) {
    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("removeClass", arguments);
        return;
    }
    if (Nuclear.hasClass(node, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        node.className = node.className.replace(reg, ' ');
    }
}

Nuclear.toggleClass = function (node, classStr) {
    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("toggleClass", arguments);
        return;
    }

    var cls = ' ' + node.className + ' ';
    if (cls.indexOf(' ' + Nuclear.trim(classStr) + ' ') >= 0) {
        Nuclear.removeClass(node, classStr);
    } else {
        Nuclear.addClass(node, classStr);
    }
}

Nuclear.trim = function (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

Nuclear._iteration = function (method, args) {
    var args = Array.prototype.slice.call(args);
    Nuclear.each(args[0], function (index) {
        var temp = args[0];
        args[0] = args[0][index];
        Nuclear[method].apply(Nuclear, args);
        args[0] = temp;
    })
}

Nuclear.css = function (node, styleName, value) {
    if (!node) return;

    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("css", arguments);
        return;
    }

    if (arguments.length == 3 && node.style) {  //change by bizai
        node.style[styleName] = value;
    }
    //因为有transition的存在，所有这行代码需要注释掉
    //if (node.style[styleName]) return node.style[styleName];
    return window.getComputedStyle(node, null)[styleName];

},


Nuclear.each = function (list, fn) {
    for (var i = 0, len = list.length; i < len ; i++) {
        fn.call(list[i], i);
    }
}

Nuclear.offset = function (el) {
    var _t = 0,
        _l = 0;
    if (document.documentElement.getBoundingClientRect && el.getBoundingClientRect) {
        var box = el.getBoundingClientRect();
        _l = box.left;
        _t = box.top;
    } else {
        while (el.offsetParent) {
            _t += el.offsetTop;
            _l += el.offsetLeft;
            el = el.offsetParent;
        }
        return { left: _l, top: _t };
    }
    return { left: _l + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), top: _t + Math.max(document.documentElement.scrollTop, document.body.scrollTop) };
}

Nuclear.getViewport = function () {
    var d = document.documentElement, b = document.body, w = window, div = document.createElement("div");
    div.innerHTML = "  <link/>";
    var lt = !(div.firstChild.nodeType === 3) ?
                { left: b.scrollLeft || d.scrollLeft, top: b.scrollTop || d.scrollTop } :
                { left: w.pageXOffset, top: w.pageYOffset };
    var wh = w.innerWidth ?
                { width: w.innerWidth, height: w.innerHeight } :
            (d && d.clientWidth && d.clientWidth != 0 ?
                    { width: d.clientWidth, height: d.clientHeight } :
                    { width: b.clientWidth, height: b.clientHeight });

    return { left: lt.left, top: lt.top, width: wh.width, height: wh.height };
}

//this.parent.lastChild代替
Nuclear.getLastNode = function (parent, selector) {
    var childs = parent.querySelectorAll(selector), len = childs.length;
    return childs[len - 1];
}

Nuclear.isUndefined = function (o) {
    return typeof (o) === "undefined";
}

Nuclear.domready = (function () {

    var fns = [], listener
      , doc = document
      , hack = doc.documentElement.doScroll
      , domContentLoaded = 'DOMContentLoaded'
      , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


    if (!loaded)
        doc.addEventListener(domContentLoaded, listener = function () {
            doc.removeEventListener(domContentLoaded, listener)
            loaded = 1
            while (listener = fns.shift()) listener()
        })

    return function (fn) {
        loaded ? setTimeout(fn, 0) : fns.push(fn)
    }

})();

; (function () {
    var class2type = {}, toString = Object.prototype.toString;
    "Boolean Number String Function Array Date RegExp Object Error NodeList".split(" ").forEach(function (name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    })

    var type = function (obj) {
        if (obj == null) {
            return obj + "";
        }
        // Support: Android<4.0 (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
			class2type[toString.call(obj)] || "object" :
			typeof obj;
    }

    var isNodeList = function (obj) {
        return type(obj) === "nodelist";
    }

    var isFunction = function (obj) {
        return type(obj) === "function";

    }
    var isArray = function (obj) {
        return type(obj) === "array";
    }
    var isWindow = function (obj) {
        return obj != null && obj === obj.window;
    }

    var isPlainObject = function (obj) {
        // Not plain objects:
        // - Any object or value whose internal [[Class]] property is not "[object Object]"
        // - DOM nodes
        // - window
        if (type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
            return false;
        }

        if (obj.constructor &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }

        // If the function hasn't returned already, we're confident that
        // |obj| is a plain object, created by {} or constructed with new Object
        return true;
    }

    Nuclear.type = type;
    Nuclear.isFunction = isFunction;
    Nuclear.isArray = isArray;
    Nuclear.isWindow = isWindow;
    Nuclear.isPlainObject = isPlainObject;
    Nuclear.isNodeList = isNodeList;
})();

Nuclear.merge = function () {
    var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;

        // Skip the boolean and the target
        target = arguments[i] || {};
        i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !Nuclear.isFunction(target)) {
        target = {};
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (Nuclear.isPlainObject(copy) ||
					(copyIsArray = Nuclear.isArray(copy)))) {

                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Nuclear.isArray(src) ? src : [];

                    } else {
                        clone = src && Nuclear.isPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = Nuclear.merge(deep, clone, copy);

                    // Don't bring in undefined values
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
};

//因为js单线程的关系，所以就算同时执行两次Nuclear.uuid,得到的uuid也不可能相同
Nuclear.uuid = function () {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

Nuclear.createCanvas = function (obj) {
    Nuclear._minCanvasObj(obj);
    if (!obj.statics) obj.statics = {};
    obj.statics.create = function (obj) {
        Nuclear._minCanvasObj(obj);
        return this.extend(obj);
    }
    return Nuclear.Class.extend(obj);
};


Nuclear._minCanvasObj = function (obj) {
    obj.ctor = function (selector, width, height, option) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        this.parent = typeof selector === "string" ? document.querySelector(selector) : selector;
        this.option = option;
        if (this.install) {
            this.install();
        }
        if (this.option) {
            Nuclear.observe(this.option, Nuclear.throttle(this._nuclearRender.bind(this), 15));
        }
        this._nuclearRender();
        if (this.installed) this.installed();
        this.parent.appendChild(this.canvas);
    }

    obj._nuclearRender = function (item) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.render();
    }


};

Nuclear._nextID = 0;
Nuclear.getId = function () {
    return Nuclear._nextID++;
         
}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

;(function defineMustache (global, factory) {
    Nuclear.Tpl = {};
    factory(Nuclear.Tpl); // script, wsh, asp
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (name in cache) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1 && value != null)
              lookupHit = (typeof value === 'object') &&
                value.hasOwnProperty(names[index]);
            value = value[names[index++]];
          }
        } else if (context.view != null && typeof context.view === 'object') {
          value = context.view[name];
          lookupHit = context.view.hasOwnProperty(name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.0.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
/* observejs --- By dnt http://kmdjs.github.io/
 * Github: https://github.com/kmdjs/observejs
 * MIT Licensed.
 */
;(function () {
    var observe = function (target, arr,callback) {
        var _observe = function (target, arr, callback) {
			if(!target.$observer)target.$observer=this;
			var $observer=target.$observer;
			var eventPropArr=[];
			if (observe.isArray(target)) {
			    if (target.length === 0) {
			        target.$observeProps = {};
			        target.$observeProps.$observerPath = "#";
			    }
			     $observer.mock(target);
			   
            }
            for (var prop in target) {
                if (target.hasOwnProperty(prop)) {
                    if (callback) {
                        if (observe.isArray(arr) && observe.isInArray(arr, prop)) {
							eventPropArr.push(prop);
                            $observer.watch(target, prop);
                        } else if (observe.isString(arr) && prop == arr) {
							eventPropArr.push(prop);
                            $observer.watch(target, prop);
                        }                       
                    } else{
						eventPropArr.push(prop);
                        $observer.watch(target, prop);
                    }
                }
            }         
            $observer.target = target;
			if(!$observer.propertyChangedHandler)$observer.propertyChangedHandler=[];
			var propChanged=callback ? callback : arr;
			$observer.propertyChangedHandler.push({ all: !callback, propChanged: propChanged, eventPropArr: eventPropArr });	
        }
        _observe.prototype = {
            "onPropertyChanged": function (prop, value,oldValue,target,path) {
                if(value!== oldValue && this.propertyChangedHandler){
					var rootName=observe._getRootName(prop,path);
					for(var i=0,len=this.propertyChangedHandler.length;i<len;i++){
						var handler=this.propertyChangedHandler[i];
						if(handler.all||observe.isInArray(handler.eventPropArr,rootName)||rootName.indexOf("Array-")===0){
							handler.propChanged.call(this.target, prop, value, oldValue, path);
						}	
					}			
				}
                if (prop.indexOf("Array-") !== 0 && typeof value === "object") {
					this.watch(target,prop, target.$observeProps.$observerPath);
				}
            },
            "mock": function (target) {
                var self = this;
                observe.methods.forEach(function (item) {
                    target[item] = function () {
						var old =  Array.prototype.slice.call(this,0);
                        var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                        if (new RegExp("\\b" + item + "\\b").test(observe.triggerStr)) {
							for (var cprop in this) {
								if (this.hasOwnProperty(cprop)  && !observe.isFunction(this[cprop])) {
									self.watch(this, cprop, this.$observeProps.$observerPath);
								}
							}
							//todo
                            self.onPropertyChanged("Array-"+item, this, old,this, this.$observeProps.$observerPath);
                        }
                        return result;
                    };
                });
            },
            "watch": function (target, prop, path) {             
                if (prop === "$observeProps"||prop === "$observer") return;
				if (observe.isFunction(target[prop])) return;
				if (!target.$observeProps) target.$observeProps = {};
				if(path !== undefined){
					target.$observeProps.$observerPath = path;
				}else{
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
                    if (observe.isArray(currentValue)) {
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
                            this.watch(currentValue, cprop, target.$observeProps.$observerPath+"-"+prop);
                        }
                    }
                }
            }
        }
        return new _observe(target, arr, callback)
    }
    observe.methods = ["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "unshift", "toLocaleString","toString","size"]
    observe.triggerStr = ["concat", "pop", "push", "reverse", "shift", "sort", "splice", "unshift","size"].join(",")
    observe.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
    observe.isString = function (obj) {
        return typeof obj === "string";
    }
    observe.isInArray = function (arr, item) {
        for (var i = arr.length; --i > -1;) {
            if (item === arr[i]) return true;
        }
        return false;
    }
    observe.isFunction = function (obj) {
        return Object.prototype.toString.call(obj) == '[object Function]';
    }
    observe.twoWay = function (objA, aProp, objB, bProp) {
        if (typeof objA[aProp] === "object" && typeof objB[bProp] === "object") {
            observe(objA, aProp, function (name, value) {
                objB[bProp] = this[aProp];
            })
            observe(objB, bProp, function (name, value) {
                objA[aProp] = this[bProp];
            })
        } else {
            observe(objA, aProp, function (name, value) {
                objB[bProp] = value;
            })
            observe(objB, bProp, function (name, value) {
                objA[aProp] = value;
            })
        }
    }
	observe._getRootName=function(prop,path){
		if(path==="#"){
			return prop;
		}
		return path.split("-")[1];
	}
    
	observe.add = function(obj , prop , value) {
		obj[prop] = value;		
		var $observer=obj.$observer;
		$observer.watch(obj,prop);
	}
	Array.prototype.size = function (length) {
		this.length = length;
	}
	
	Nuclear.observe = observe;
})();

;(function () {
    var initializing = false, fnTest = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    var Class = function () { };

    // Create a new Class that inherits from this class
    Class.extend = function (prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            if (name != "statics") {
                // Check if we're overwriting an existing function
                prototype[name] = typeof prop[name] == "function" &&
                  typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                  (function (name, fn) {
                      return function () {
                          var tmp = this._super;

                          // Add a new ._super() method that is the same method
                          // but on the super-class
                          this._super = _super[name];

                          // The method only need to be bound temporarily, so we
                          // remove it when we're done executing
                          var ret = fn.apply(this, arguments);
                          this._super = tmp;

                          return ret;
                      };
                  })(name, prop[name]) :
                  prop[name];
            }
        }

        // The dummy class constructor
        function _Class() {
            // All construction is actually done in the init method
            if (!initializing && this.ctor)
                this.ctor.apply(this, arguments);
        }

        //继承父类的静态属性
        for (var key in this) {
            if (this.hasOwnProperty(key) && key != "extend")
                _Class[key] = this[key];
        }

        // Populate our constructed prototype object
        _Class.prototype = prototype;

        //静态属性和方法
        if (prop.statics) {
            for (var name in prop.statics) {
                if (prop.statics.hasOwnProperty(name)) {
                    _Class[name] = prop.statics[name];
                    if (name == "ctor") {
                        //提前执行静态构造函数
                        _Class[name]();
                    }
                }

            }
        }

        // Enforce the constructor to be what we expect
        _Class.prototype.constructor = _Class;

        // And make this class extendable
        _Class.extend = Class.extend;

        //add implementation method
        _Class.implement = function (prop) {
            for (var name in prop) {
                prototype[name] = prop[name];
            }
        };
        return _Class;
    };


    Nuclear.Class = Class;
})()


return Nuclear;
}));