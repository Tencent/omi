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
        if (this.installed) this.installed();
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
                if (ref.node) {
                    ref._nuclearRenderInfo.refreshPart = ref.node.querySelectorAll('*[nc-refresh]');
                    ref._nuclearRenderInfo.parent = ref.node.parentNode;
                    if (ref.onRefresh) ref.onRefresh();
                    if (ref.installed) ref.installed();
                    this._nuclearFixOne(ref)
                }
            }
        }
    }

    obj._nuclearGetTop = function (current) {
        if (!current._nuclearParent) return current;
        return this._nuclearGetTop(current._nuclearParent);
    }

    obj._nuclearLocalRefresh = function () {
        if (this.update) {
            this.update();
            return;
        }
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
    obj.ctor = function (width, height, option, selector) {
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