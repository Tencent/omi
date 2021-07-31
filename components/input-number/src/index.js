"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = require("omi");
var css = require("./index.scss");
require("@omiu/input");
var InputNumber = /** @class */ (function (_super) {
    __extends(InputNumber, _super);
    function InputNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onGetValue = function () {
            return Number(_this.__$value);
        };
        _this._onSetValue = function (value) {
            _this.__$value = value;
            _this.props.value = value;
            _this.setAttribute('value', value);
        };
        _this.handleInput = function (evt) {
            evt.stopPropagation();
            _this.__$value = evt.target.value;
            _this.props.value = evt.target.value;
            _this.fire('input', _this.props.value);
            _this.update();
        };
        _this.add = function (evt) {
            var value = _this._onGetValue();
            console.log(value);
            value += 1;
            console.log(value);
            _this._onSetValue(value - 0);
        };
        _this.subtraction = function (evt) {
            var value = _this._onGetValue();
            value -= 1;
            _this._onSetValue(value - 0);
        };
        return _this;
    }
    InputNumber.prototype.install = function () {
        this.__$value = this.props.value;
        Object.defineProperty(this, 'value', {
            get: this._onGetValue,
            set: this._onSetValue
        });
    };
    InputNumber.prototype.render = function (props) {
        var _a, _b;
        var value = props.value, left = props.left, right = props.right, size = props.size, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, otherProps = __rest(props, ["value", "left", "right", "size", "onMouseEnter", "onMouseLeave"]);
        return (omi_1.h("div", { css: "div {\n        font-size:0;\n      }", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            omi_1.h("button", __assign({ onClick: this.subtraction }, omi_1.extractClass(props, 'o-button', (_a = {},
                _a['o-button-' + props.size] = props.size,
                _a['o-button-' + props.left] = props.left,
                _a))), "-"),
            omi_1.h("o-input", { "o-model": "__$value", value: props.value, size: props.size, css: ".o-input input {\n              width: " + props.width + ";\n              text-align:center;\n              border-radius: 0;\n              width:80px;\n            }\n            .o-input__inner {\n              padding-right:5px;\n            }", onInput: this.handleInput }),
            omi_1.h("button", __assign({ onClick: this.add }, omi_1.extractClass(props, 'o-button', (_b = {},
                _b['o-button-' + props.size] = props.size,
                _b['o-button-' + props.right] = props.right,
                _b))), "+")));
    };
    InputNumber.css = css.default;
    InputNumber.defaultProps = {
        value: 1,
        size: 'medium',
        width: 'auto',
        right: 'right',
        left: 'left'
    };
    InputNumber.propTypes = {
        value: Number,
        size: String,
        width: String,
        right: String,
        left: String
    };
    InputNumber = __decorate([
        omi_1.tag('o-input-number')
    ], InputNumber);
    return InputNumber;
}(omi_1.WeElement));
exports.default = InputNumber;
omi_1.render(omi_1.h("o-input-number", null), '#root', {
    // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
    ignoreAttrs: true
});
