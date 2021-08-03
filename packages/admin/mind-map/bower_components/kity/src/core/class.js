/**
 * @fileOverview
 *
 * 提供 Kity 的 OOP 支持
 */

define(function(require, exports) {

    /**
     * @class kity.Class
     * @catalog core
     * @description 所有 kity 类的基类
     * @abstract
     */
    function Class() {}

    exports.Class = Class;

    Class.__KityClassName = 'Class';

    /**
     * @method base()
     * @for kity.Class
     * @protected
     * @grammar base(name, args...) => {any}
     * @description 调用父类指定名称的函数
     * @param {string} name 函数的名称
     * @param {parameter} args... 传递给父类函数的参数
     *
     * @example
     *
     * ```js
     * var Person = kity.createClass('Person', {
     *     toString: function() {
     *         return 'I am a person';
     *     }
     * });
     *
     * var Male = kity.createClass('Male', {
     *     base: Person,
     *
     *     toString: function() {
     *         return 'I am a man';
     *     },
     *
     *     speak: function() {
     *         return this.base('toString') + ',' + this.toString();
     *     }
     * })
     * ```
     */
    Class.prototype.base = function(name) {
        var caller = arguments.callee.caller;
        var method = caller.__KityMethodClass.__KityBaseClass.prototype[name];
        return method.apply(this, Array.prototype.slice.call(arguments, 1));
    };

    /**
     * @method callBase()
     * @for kity.Class
     * @protected
     * @grammar callBase(args...) => {any}
     * @description 调用父类同名函数
     * @param {parameter} args... 传递到父类同名函数的参数
     *
     * @example
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return 'I am an animal name ' + this.name;
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     constructor: function(name) {
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return this.callBase() + ', a dog';
     *     }
     * });
     *
     * var dog = new Dog('Dummy');
     * console.log(dog.toString()); // "I am an animal name Dummy, a dog";
     * ```
     */
    Class.prototype.callBase = function() {
        var caller = arguments.callee.caller;
        var method = caller.__KityMethodClass.__KityBaseClass.prototype[caller.__KityMethodName];
        return method.apply(this, arguments);
    };

    Class.prototype.mixin = function(name) {
        var caller = arguments.callee.caller;
        var mixins = caller.__KityMethodClass.__KityMixins;
        if (!mixins) {
            return this;
        }
        var method = mixins[name];
        return method.apply(this, Array.prototype.slice.call(arguments, 1));
    };

    Class.prototype.callMixin = function() {
        var caller = arguments.callee.caller;
        var methodName = caller.__KityMethodName;
        var mixins = caller.__KityMethodClass.__KityMixins;
        if (!mixins) {
            return this;
        }
        var method = mixins[methodName];
        if (methodName == 'constructor') {
            for (var i = 0, l = method.length; i < l; i++) {
                method[i].call(this);
            }
            return this;
        } else {
            return method.apply(this, arguments);
        }
    };

    /**
     * @method pipe()
     * @for kity.Class
     * @grammar pipe() => {this}
     * @description 以当前对象为上线文以及管道函数的第一个参数，执行一个管道函数
     * @param  {Function} fn 进行管道操作的函数
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect().pipe(function() {
     *     this.setWidth(500);
     *     this.setHeight(300);
     * });
     * ```
     */
    Class.prototype.pipe = function(fn) {
        if (typeof(fn) == 'function') {
            fn.call(this, this);
        }
        return this;
    };

    /**
     * @method getType()
     * @for kity.Class
     * @grammar getType() => {string}
     * @description 获得对象的类型
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     * var circle = new kity.Circle();
     *
     * console.log(rect.getType()); // "Rect"
     * console.log(rect.getType()); // "Circle"
     * ```
     */
    Class.prototype.getType = function() {
        return this.__KityClassName;
    };

    /**
     * @method getClass()
     * @for kity.Class
     * @grammar getClass() => {Class}
     * @description 获得对象的类
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     *
     * console.log(rect.getClass() === kity.Rect); // true
     * console.log(rect instanceof kity.Rect); // true
     * ```
     */
    Class.prototype.getClass = function() {
        return this.constructor;
    };

    // 检查基类是否调用了父类的构造函数
    // 该检查是弱检查，假如调用的代码被注释了，同样能检查成功（这个特性可用于知道建议调用，但是出于某些原因不想调用的情况）
    function checkBaseConstructorCall(targetClass, classname) {
        var code = targetClass.toString();
        if (!/this\.callBase/.test(code)) {
            throw new Error(classname + ' : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数');
        }
    }

    var KITY_INHERIT_FLAG = '__KITY_INHERIT_FLAG_' + (+new Date());

    function inherit(constructor, BaseClass, classname) {
        var KityClass = eval('(function ' + classname + '( __inherit__flag ) {' +
            'if( __inherit__flag != KITY_INHERIT_FLAG ) {' +
            'KityClass.__KityConstructor.apply(this, arguments);' +
            '}' +
            'this.__KityClassName = KityClass.__KityClassName;' +
            '})');
        KityClass.__KityConstructor = constructor;

        KityClass.prototype = new BaseClass(KITY_INHERIT_FLAG);

        for (var methodName in BaseClass.prototype) {
            if (BaseClass.prototype.hasOwnProperty(methodName) && methodName.indexOf('__Kity') !== 0) {
                KityClass.prototype[methodName] = BaseClass.prototype[methodName];
            }
        }

        KityClass.prototype.constructor = KityClass;

        return KityClass;
    }

    function mixin(NewClass, mixins) {
        if (false === mixins instanceof Array) {
            return NewClass;
        }

        var i, length = mixins.length,
            proto, method;

        NewClass.__KityMixins = {
            constructor: []
        };

        for (i = 0; i < length; i++) {
            proto = mixins[i].prototype;

            for (method in proto) {
                if (false === proto.hasOwnProperty(method) || method.indexOf('__Kity') === 0) {
                    continue;
                }
                if (method === 'constructor') {
                    // constructor 特殊处理
                    NewClass.__KityMixins.constructor.push(proto[method]);
                } else {
                    NewClass.prototype[method] = NewClass.__KityMixins[method] = proto[method];
                }
            }
        }

        return NewClass;
    }

    function extend(BaseClass, extension) {
        if (extension.__KityClassName) {
            extension = extension.prototype;
        }
        for (var methodName in extension) {
            if (extension.hasOwnProperty(methodName) &&
                methodName.indexOf('__Kity') &&
                methodName != 'constructor') {
                var method = BaseClass.prototype[methodName] = extension[methodName];
                method.__KityMethodClass = BaseClass;
                method.__KityMethodName = methodName;
            }
        }
        return BaseClass;
    }

    /**
     * @method kity.createClass()
     * @grammar kity.createClass(classname, defines) => {Class}
     * @description 创建一个类
     * @param  {string} classname 类名，用于调试的时候查看，可选
     * @param  {object} defines   类定义
     *      defines.base {Class}
     *          定义的类的基类，如果不配置，则表示基类为 kity.Class
     *      defines.mixins {Class[]}
     *          定义的类要融合的类列表
     *      defines.constructor {Function}
     *          定义类的构造函数，如果父类显式定义了构造函数，需要在构造函数中使用 callBase() 方法调用父类的构造函数
     *      defines.* {Function}
     *          定义类的其它函数
     *
     * @example 创建一个类
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return this.name;
     *     }
     * });
     *
     * var a = new Animal('kity');
     * console.log(a.toString()); // "kity"
     * ```
     *
     * @example 继承一个类
     *
     * ```js
     * var Cat = kity.createClass('Cat', {
     *     base: Animal,
     *     constructor: function(name, color) {
     *         // 调用父类构造函数
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return 'A ' + this.color + ' cat, ' + this.callBase();
     *     }
     * });
     *
     * var cat = new Cat('kity', 'black');
     * console.log(cat.toString()); // "A black cat, kity"
     * ```
     *
     * @example 混合类的能力
     * ```js
     * var Walkable = kity.createClass('Walkable', {
     *     constructor: function() {
     *         this.speed = 'fast';
     *     },
     *     walk: function() {
     *         console.log('I am walking ' + this.speed);
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     base: Animal,
     *     mixins: [Walkable],
     *     constructor: function(name) {
     *         this.callBase(name);
     *         this.callMixins();
     *     }
     * });
     *
     * var dog = new Dog('doggy');
     * console.log(dog.toString() + ' say:');
     * dog.walk();
     * ```
     */
    exports.createClass = function(classname, defines) {
        var constructor, NewClass, BaseClass;

        if (arguments.length === 1) {
            defines = arguments[0];
            classname = 'AnonymousClass';
        }

        BaseClass = defines.base || Class;

        if (defines.hasOwnProperty('constructor')) {
            constructor = defines.constructor;
            if (BaseClass != Class) {
                checkBaseConstructorCall(constructor, classname);
            }
        } else {
            constructor = function() {
                this.callBase.apply(this, arguments);
                this.callMixin.apply(this, arguments);
            };
        }

        NewClass = inherit(constructor, BaseClass, classname);
        NewClass = mixin(NewClass, defines.mixins);

        NewClass.__KityClassName = constructor.__KityClassName = classname;
        NewClass.__KityBaseClass = constructor.__KityBaseClass = BaseClass;

        NewClass.__KityMethodName = constructor.__KityMethodName = 'constructor';
        NewClass.__KityMethodClass = constructor.__KityMethodClass = NewClass;

        // 下面这些不需要拷贝到原型链上
        delete defines.mixins;
        delete defines.constructor;
        delete defines.base;

        NewClass = extend(NewClass, defines);

        return NewClass;
    };

    /**
     * @method kity.extendClass()
     * @grammar kity.extendClass(clazz, extension) => {Class}
     * @description 拓展一个已有的类
     *
     * @example
     *
     * ```js
     * kity.extendClass(Dog, {
     *     spark: function() {
     *         console.log('wao wao wao!');
     *     }
     * });
     *
     * new Dog().spark(); // "wao wao wao!";
     * ```
     */
    exports.extendClass = extend;

});