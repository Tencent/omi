var Omi = {};
Omi.instances =  {};
Omi._instanceId = 0;
Omi.getInstanceId = function () {
    return Omi._instanceId++;
};
Omi.customTags = [];
Omi.mapping = {};

Omi.STYLEPREFIX = "omi_style_";
Omi.STYLESCOPEDPREFIX = "omi_scoped_";

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function toArr(obj) {
    let arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push({key: key, value: obj[key]});
        }
    }
    return arr;
}

Omi.create = function(tagName ,parent,setting) {
    let u_setting = parent,
        u_parent = Omi.Component;
    if (arguments.length > 2) {
        u_setting = setting;
        u_parent = parent;
    }
    Omi[tagName] = function (parent) {
        _inherits(Obj, parent);

        function Obj(data, server) {
            _classCallCheck(this, Obj);
            this.___omi_constructor_name = tagName;
            return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this, data,server));
        }

        _createClass(Obj, toArr(u_setting));

        return Obj;
    }(u_parent);

    Omi.customTags.push(tagName);

    return Omi[tagName];
}

Omi.mixIndex = function(array, key) {
    const len = array.length,
        indexName = key || "index";
    for (let i = 0; i < len; i++) {
        var item = array[i];
        if (typeof item === "object") {
            item[indexName] = i;
        } else {
            array[i] = {value: item};
            array[i][indexName] = i;
        }
    }
    return array;
}

Omi.$ = function(selector,context){
    if(context){
        return context.querySelector(selector);
    }else{
        return document.querySelector(selector);
    }
}

Omi.$$ = function(selector,context){
    if(context){
        return  Array.prototype.slice.call(context.querySelectorAll(selector));
    }else{
        return Array.prototype.slice.call(document.querySelectorAll(selector));
    }
}

Omi.getClassFromString = function(str) {
    if (str.indexOf('.') !== 0) {
        let arr = str.split('.');
        const len = arr.length;
        let current = Omi[arr[0]];
        for (let i = 1; i < len; i++) {
            current = current[arr[i]];
        }
        return current;
    } else {
        return Omi[str];
    }
}

//以前是Component的静态方法，移到omi下来，不然makehtml 在ie下child访问不到父亲的静态方法
Omi.makeHTML= function(ctor, name) {
    let tagName = name || ctor.name;
    // fix ie tagName is undefined
    if(!tagName){
        tagName = (ctor+"").split("(")[0].replace("function","").trim();
    }
    Omi[tagName] = ctor;
    Omi.customTags.push(tagName);

    return tagName;
}

Omi.render = function(component , renderTo, increment){
    component.renderTo = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo;
    component._omi_increment = increment;
    component.install();
    component._render(true);
    component.installed();
    component._childrenInstalled(component);
    return component;
}

Omi.get = function(name){
    return Omi.mapping[name];
}

module.exports = Omi;