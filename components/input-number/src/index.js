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
            if (Number(evt.target.value) >= _this.props.min && Number(evt.target.value) <= _this.props.max) {
                _this._onSetValue(Number(evt.target.value));
            }
        };
        _this.add = function (evt) {
            var value = _this._onGetValue();
            value += _this.props.step;
            if (value <= _this.props.max) {
                _this._onSetValue(value - 0);
            }
        };
        _this.subtraction = function (evt) {
            var value = _this._onGetValue();
            value -= _this.props.step;
            if (value >= _this.props.min) {
                _this._onSetValue(value - 0);
            }
        };
        _this.clearInput = function () {
            _this.updateProps({
                value: ''
            });
            // this.__$value = ''
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
        var _a, _b, _c, _d;
        var value = props.value, left = props.left, right = props.right, size = props.size, disabled = props.disabled, max = props.max, min = props.min, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, otherProps = __rest(props, ["value", "left", "right", "size", "disabled", "max", "min", "onMouseEnter", "onMouseLeave"]);
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-input-number', (_a = {
                'is-disabled': this.props.disabled
            },
            _a['o-input-number-' + props.size] = props.size,
            _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
            omi_1.h("button", __assign({}, omi_1.extractClass(props, 'o-button', (_b = {},
                _b['o-button-' + props.size] = props.size,
                _b['o-button-' + props.left] = props.left,
                _b)), { onClick: this.subtraction }), "-"),
            omi_1.h("input", __assign({}, omi_1.extractClass(props, 'o-input', (_c = {},
                _c['o-input-' + props.size] = props.size,
                _c)), { value: props.value, size: props.size, onInput: this.handleInput, onClick: this.clearInput })),
            omi_1.h("button", __assign({}, omi_1.extractClass(props, 'o-button', (_d = {},
                _d['o-button-' + props.size] = props.size,
                _d['o-button-' + props.right] = props.right,
                _d)), { onClick: this.add }), "+")));
    };
    InputNumber.css = css.default;
    InputNumber.defaultProps = {
        value: 1,
        size: 'medium',
        right: 'right',
        left: 'left',
        step: 1,
        disabled: false,
        max: 10,
        min: 1
    };
    InputNumber.propTypes = {
        value: Number,
        size: String,
        right: String,
        left: String,
        step: Number,
        disabled: Boolean,
        max: Number,
        min: Number
    };
    InputNumber = __decorate([
        omi_1.tag('o-input-number')
    ], InputNumber);
    return InputNumber;
}(omi_1.WeElement));
exports.default = InputNumber;
