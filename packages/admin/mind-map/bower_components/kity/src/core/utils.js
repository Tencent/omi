/**
 * @fileOverview
 *
 * 一些常用的工具方法
 */

define(function() {

    /**
     * @class kity.Utils
     * @catalog core
     * @static
     * @description 提供常用的工具方法
     */
    var utils = {

        /**
         * @method each()
         * @for kity.Utils
         * @grammar each(obj, interator, context)
         * @param  {Object|Array} obj 要迭代的对象或数组
         * @param  {Function} iterator 迭代函数
         * @param  {Any} context  迭代函数的上下文
         *
         * @example 迭代数组
         *
         * ```js
         * kity.Utils.each([1, 2, 3, 4, 5], function(value, index, array) {
         *     console.log(value, index);
         * });
         * // 1, 0
         * // 2, 1
         * // 3, 2
         * // 4, 3
         * // 5, 4
         * ```
         *
         * @example 迭代对象
         *
         * ```js
         * var obj = {
         *     name: 'kity',
         *     version: '1.2.1'
         * };
         * var param = [];
         * kity.Utils.each(obj, function(value, key, obj) {
         *     param.push(key + '=' + value);
         * });
         * console.log(param.join('&')); // "name=kity&version=1.2.1"
         * ```
         */
        each: function each(obj, iterator, context) {
            if (obj === null) {
                return;
            }
            if (obj.length === +obj.length) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    if (iterator.call(context, obj[i], i, obj) === false) {
                        return false;
                    }
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (iterator.call(context, obj[key], key, obj) === false) {
                            return false;
                        }
                    }
                }
            }
        },

        /**
         * @method extend()
         * @for kity.Utils
         * @grammar extend(target, sources..., notCover) => {object}
         * @description 把源对象的属性合并到目标对象上
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         *
         * @example
         *
         * ```js
         * var a = {
         *     key1: 'a1',
         *     key2: 'a2'
         * };
         *
         * var b = {
         *     key2: 'b2',
         *     key3: 'b3'
         * };
         *
         * var c = {
         *     key4: 'c4'
         * };
         *
         * var d = kity.extend(a, b, c);
         *
         * console.log(d === a); // true
         * console.log(a); // {key1: 'a1', key2: 'b2', key3: 'b3', key4: 'c4'}
         * ```
         */
        extend: function extend(t) {
            var a = arguments,
                notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false,
                len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
            for (var i = 1; i < len; i++) {
                var x = a[i];
                for (var k in x) {
                    if (!notCover || !t.hasOwnProperty(k)) {
                        t[k] = x[k];
                    }
                }
            }
            return t;
        },

        /**
         * @method deepExtend()
         * @for kity.Utils
         * @grammar deepExtend(target, sources..., notCover)
         * @description 把源对象的属性合并到目标对象上，如果属性是对象，会递归合并
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         */
        deepExtend: function(t, s) {
            var a = arguments,
                notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false,
                len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
            for (var i = 1; i < len; i++) {
                var x = a[i];
                for (var k in x) {
                    if (!notCover || !t.hasOwnProperty(k)) {
                        if (this.isObject(t[k]) && this.isObject(x[k])) {
                            this.deepExtend(t[k], x[k], notCover);
                        } else {
                            t[k] = x[k];
                        }
                    }
                }
            }
            return t;
        },

        /**
         * @method clone()
         * @for kity.Utils
         * @grammar clone(obj) => {object}
         * @description 返回一个对象的克隆副本（非深度复制）
         * @param  {object} obj 要克隆的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.clone(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // true
         * console.log(target.key3 === source.key3); // true
         * ```
         */
        clone: function clone(obj) {
            var cloned = {};
            for (var m in obj) {
                if (obj.hasOwnProperty(m)) {
                    cloned[m] = obj[m];
                }
            }
            return cloned;
        },

        /**
         * @method copy()
         * @for kity.Utils
         * @grammar copy(obj) => {object}
         * @description 返回一个对象的拷贝副本（深度复制）
         * @param  {object} obj 要拷贝的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.copy(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // false
         * console.log(target.key3 === source.key3); // true，因为是值类型
         * ```
         */
        copy: function copy(obj) {
            if (typeof obj !== 'object') return obj;
            if (typeof obj === 'function') return null;
            return JSON.parse(JSON.stringify(obj));
        },

        queryPath: function(path, obj) {
            var arr = path.split('.');
            var i = 0,
                tmp = obj,
                l = arr.length;
            while (i < l) {
                if (arr[i] in tmp) {
                    tmp = tmp[arr[i]];
                    i++;
                    if (i >= l || tmp === undefined) {
                        return tmp;
                    }
                } else {
                    return undefined;
                }
            }
        },

        getValue: function(value, defaultValue) {

            return value !== undefined ? value : defaultValue;

        },

        /**
         * @method flatten()
         * @for kity.Utils
         * @grammar flatten(arr) => {Array}
         * @description 返回给定数组的扁平化版本
         * @param  {Array} arr 要扁平化的数组
         *
         * @example
         *
         * ```js
         * var flattened = kity.Utils.flatten([[1, 2], [2, 3], [[4, 5], [6, 7]]]);
         * console.log(flattened); // [1, 2, 3, 4, 5, 6, 7];
         * ```
         */
        flatten: function flatten(arr) {
            var result = [],
                length = arr.length,
                i;
            for (i = 0; i < length; i++) {
                if (arr[i] instanceof Array) {
                    result = result.concat(utils.flatten(arr[i]));
                } else {
                    result.push(arr[i]);
                }
            }
            return result;
        },

        /**
         * @method paralle()
         * @for kity.Utils
         * @grammar paralle() => {Any}
         *
         * @description 平行地对 v1 和 v2 进行指定的操作
         *
         *    如果 v1 是数字，那么直接进行 op 操作
         *    如果 v1 是对象，那么返回一个对象，其元素是 v1 和 v2 同键值的每个元素平行地进行 op 操作的结果
         *    如果 v1 是数组，那么返回一个数组，其元素是 v1 和 v2 同索引的每个元素平行地进行 op 操作的结果
         *
         * @param  {Number|Object|Array} v1 第一个操作数
         * @param  {Number|Object|Array} v2 第二个操作数
         * @param  {Function} op 操作函数
         *
         *
         *
         * @example
         *
         * ```js
         * var a = {
         *     value1: 1,
         *     value2: 2,
         *     value3: [3, 4, 5]
         * };
         *
         * var b = {
         *     value1: 2,
         *     value2: 3,
         *     value3: [4, 5, 6]
         * };
         *
         * var c = kity.Utils.paralle(a, b, function(v1, v2) {
         *     return v1 + v2;
         * });
         *
         * console.log(c.value1); // 3
         * console.log(c.value2); // 5
         * console.log(c.value3); // [7, 9, 11]
         *
         * ```
         */
        paralle: function paralle(v1, v2, op) {
            var Class, field, index, name, value;

            // 数组
            if (v1 instanceof Array) {
                value = [];
                for (index = 0; index < v1.length; index++) {
                    value.push(utils.paralle(v1[index], v2[index], op));
                }
                return value;
            }

            // 对象
            if (v1 instanceof Object) {

                // 如果值是一个支持原始表示的实例，获取其原始表示
                Class = v1.getClass && v1.getClass();

                if (Class && Class.parse) {
                    v1 = v1.valueOf();
                    v2 = v2.valueOf();
                    value = utils.paralle(v1, v2, op);
                    value = Class.parse(value);
                }

                // 否则作为字面量封箱
                else {
                    value = {};
                    for (name in v1) {
                        if (v1.hasOwnProperty(name) && v2.hasOwnProperty(name)) {
                            value[name] = utils.paralle(v1[name], v2[name], op);
                        }
                    }
                }

                return value;
            }

            // 是否数字
            if (false === isNaN(parseFloat(v1))) {
                return op(v1, v2);
            }

            return value;
        },

        /**
         * 创建 op 操作的一个平行化版本
         */
        parallelize: function parallelize(op) {
            return function(v1, v2) {
                return utils.paralle(v1, v2, op);
            };
        }
    };

    /**
     * @method isString()
     * @for kity.Utils
     * @grammar isString(unknown) => {boolean}
     * @description 判断一个值是否为字符串类型
     * @param  {any} unknown 要判断的值
     */
    /**
     * @method isFunction()
     * @for kity.Utils
     * @grammar isFunction(unknown) => {boolean}
     * @description 判断一个值是否为函数类型
     * @param  {any} unknown 要判断的值
     */
    /**
     * @method isArray()
     * @for kity.Utils
     * @grammar isArray(unknown) => {boolean}
     * @description 判断一个值是否为数组类型
     * @param  {any} unknown 要判断的值
     */
    /**
     * @method isNumber()
     * @for kity.Utils
     * @grammar isNumber(unknown) => {boolean}
     * @description 判断一个值是否为数字类型
     * @param  {any} unknown 要判断的值
     */
    /**
     * @method isRegExp()
     * @for kity.Utils
     * @grammar isRegExp(unknown) => {boolean}
     * @description 判断一个值是否为正则表达式类型
     * @param  {any} unknown 要判断的值
     */
    /**
     * @method isObject()
     * @for kity.Utils
     * @grammar isObject(unknown) => {boolean}
     * @description 判断一个值是否为对象类型
     * @param  {any} unknown 要判断的值
     */
    /**
     * @method isBoolean()
     * @for kity.Utils
     * @grammar isBoolean(unknown) => {boolean}
     * @description 判断一个值是否为布尔类型
     * @param  {any} unknown 要判断的值
     */
    utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object', 'Boolean'], function(v) {
        utils['is' + v] = function typeCheck(obj) {
            return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
        };
    });

    return utils;
});