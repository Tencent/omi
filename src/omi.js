var Omi = {}
Omi.instances =  {}
Omi._instanceId = 0
Omi.getInstanceId = function () {
    return Omi._instanceId++
}
Omi.customTags = []
Omi.mapping = {}

Omi.STYLEPREFIX = "omi_style_"
Omi.STYLESCOPEDPREFIX = "omi_scoped_"

Omi.style = { }

Omi.componentConstructor = { }

//fix ie bug
if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

/**
 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
 * (technically, since host objects have been implementation-dependent,
 * at least before ES6, IE hasn't needed to work this way).
 * Also works on strings, fixes IE < 9 to allow an explicit undefined
 * for the 2nd argument (as in Firefox), and prevents errors when
 * called on other DOM objects.
 */
(function () {
    'use strict';
    var _slice = Array.prototype.slice;

    try {
        // Can't be used with DOM elements in IE < 9
        _slice.call(document.documentElement);
    } catch (e) { // Fails in IE < 9
        // This will work for genuine arrays, array-like objects,
        // NamedNodeMap (attributes, entities, notations),
        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
        Array.prototype.slice = function (begin, end) {
            // IE < 9 gets unhappy with an undefined end argument
            end = (typeof end !== 'undefined') ? end : this.length;

            // For native Array objects, we use the native slice function
            if (Object.prototype.toString.call(this) === '[object Array]'){
                return _slice.call(this, begin, end);
            }

            // For array like object we handle it ourselves.
            var i, cloned = [],
                size, len = this.length;

            // Handle negative value for "begin"
            var start = begin || 0;
            start = (start >= 0) ? start: len + start;

            // Handle negative value for "end"
            var upTo = (end) ? end : len;
            if (end < 0) {
                upTo = len + end;
            }

            // Actual expected size of the slice
            size = upTo - start;

            if (size > 0) {
                cloned = new Array(size);
                if (this.charAt) {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this.charAt(start + i);
                    }
                } else {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this[start + i];
                    }
                }
            }

            return cloned;
        };
    }
}());


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function toArr(obj) {
    let arr = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push({key: key, value: obj[key]})
        }
    }
    return arr
}

Omi.create = function(tagName ,parent,setting) {
    let u_setting = parent,
        u_parent = Omi.Component
    if (arguments.length > 2) {
        u_setting = setting
        u_parent = parent
    }
    Omi.componentConstructor[tagName] = function (parent) {
        _inherits(Obj, parent)

        function Obj(data, server) {
            _classCallCheck(this, Obj)
            this.___omi_constructor_name = tagName
            return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this, data,server))
        }

        _createClass(Obj, toArr(u_setting))

        return Obj
    }(u_parent)

    Omi.customTags.push(tagName)

    return Omi.componentConstructor[tagName]
}

Omi.createStore = function(option) {

    let Store = function (parent) {
        _inherits(Obj, parent)

        function Obj(data, isReady) {
            _classCallCheck(this, Obj)
            this.data = data
            return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this, data, isReady))
        }

        _createClass(Obj, toArr(option.methods))

        return Obj
    }(Omi.Store)

    return new Store(option.data, true)
}

Omi.mixIndex = function(array, key) {
    const len = array.length,
        indexName = key || "index"
    for (let i = 0; i < len; i++) {
        var item = array[i]
        if (typeof item === "object") {
            item[indexName] = i
        } else {
            array[i] = {value: item}
            array[i][indexName] = i
        }
    }
    return array
}

Omi.$ = function(selector,context){
    if(context){
        return context.querySelector(selector)
    }else{
        return document.querySelector(selector)
    }
}

Omi.$$ = function(selector,context){
    if(context){
        return  Array.prototype.slice.call(context.querySelectorAll(selector))
    }else{
        return Array.prototype.slice.call(document.querySelectorAll(selector))
    }
}

Omi.getClassFromString = function(str) {
    if (str.indexOf('.') !== -1) { //root is window
        let arr = str.split('.')
        const len = arr.length
        let current = window[arr[0]]
        for (let i = 1; i < len; i++) {
            current = current[arr[i]]
        }
        return current
    } else {
        return Omi.componentConstructor[str]
    }
}

//以前是Component的静态方法，移到omi下来，不然makehtml 在ie下child访问不到父亲的静态方法
Omi.makeHTML= function(name, ctor) {
    Omi.componentConstructor[name] = ctor
    Omi.customTags.push(name)
}

Omi.tag = Omi.makeHTML

Omi.render = function(component , renderTo , incrementOrOption){
    component.renderTo = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo
    if(typeof incrementOrOption === 'boolean') {
        component._omi_increment = incrementOrOption
    }else if(incrementOrOption){
        component._omi_increment = incrementOrOption.increment
        if( incrementOrOption.store) {
            if(incrementOrOption.store instanceof Omi.Store){
                component.$store = incrementOrOption.store
            }else{
                component.$store = Omi.createStore(incrementOrOption.store)
            }
        }
        component._omi_autoStoreToData = incrementOrOption.autoStoreToData
    }
    component.install()
    component._render(true)
    component._childrenInstalled(component)
    component.installed()
    return component
}

Omi.get = function(name){
    return Omi.mapping[name]
}

Omi.plugins ={}

Omi.extendPlugin = function(name, handler) {
    Omi.plugins[name] = handler
}

Omi.getParameters = function(dom, instance, types){
    let data = { }
    let noop = function(){ }
    let methodMapping = {
        stringType : value =>{
            return value
        },
        numberType: value =>{
            return Number(value)
        },
        booleanType: value => {
            if (value === 'true') {
                return true
            } else if (value === 'false') {
                return false
            } else {
                return Boolean(value)
            }
        },
        functionType: value => {
            if (value) {
                let handler = instance[value.replace(/Omi.instances\[\d\]./, '')]
                if (handler) {
                    return handler.bind(instance)
                } else {
                    console.warn('You do not define [ '+value+' ] method in following component')
                    console.warn(instance)
                }
            } else {
                return noop
            }
        }
    }
    Object.keys(types).forEach(type => {
        types[type].forEach(name => {
            let attr =  dom.getAttribute(name)
            if(attr !== null) {
                data[name] = methodMapping[type](attr)
            }
        } )
    })

    return data
}

Omi.mixIndexToArray = function(arr ,indexName){
    arr.forEach((item , index)=>{
       item[indexName||'index'] =  index
    })
}

module.exports = Omi