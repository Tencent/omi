var util = {};
util.merge = function () {
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
    if (typeof target !== "object" && !util.isFunction(target)) {
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
                if (deep && copy && (util.isPlainObject(copy) ||
                    (copyIsArray = util.isArray(copy)))) {

                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && util.isArray(src) ? src : [];

                    } else {
                        clone = src && util.isPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = util.merge(deep, clone, copy);

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
util.getNodeIndex = function (node) {
    var index = 0;
    while ((node = node.previousSibling)) {
        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
            index++;
        }
    }
    return index;
};

util.addEvent = (function () {
    return function (el, type, fn) {
        if (el && el.nodeName || el === window) {
            el.addEventListener(type, fn, false);
        } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
                util.addEvent(el[i], type, fn);
            }
        }
    };
})();
