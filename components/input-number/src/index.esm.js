/**
 * @omiu/input-number v0.0.3 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, tag, WeElement } from 'omi';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `.o-input-number {
  position: relative;
  display: inline-block; }

.o-input-number-medium {
  height: 40px;
  width: 172px; }

.o-input-number-small {
  height: 34px;
  width: 146px; }

.o-input-number-mini {
  height: 30px;
  width: 130px; }

.o-button,
.o-input {
  position: absolute;
  height: 100%;
  line-height: 100%;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  font-weight: 500;
  transition: .1s;
  vertical-align: top; }

.o-button {
  width: 25%;
  line-height: 15%;
  background-color: #f3faf1; }

.o-input {
  left: 25%;
  width: 50%; }

.o-button-add {
  right: 0;
  border-bottom-right-radius: 0.3em;
  border-top-right-radius: 0.3em;
  border-left: none; }

.o-button-sub {
  left: 0;
  border-bottom-left-radius: 0.3em;
  border-top-left-radius: 0.3em;
  border-right: none; }

.o-input-number.is-disabled .o-input,
.o-input-number.is-disabled:hover .o-input,
.o-input-number.is-disabled .o-button,
.o-input-number.is-disabled:hover .o-button {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #E4E7ED;
  pointer-events: none; }

.o-input-number.is-disabled {
  cursor: not-allowed; }

.o-input-number:hover .o-input {
  color: #07c160;
  color: var(--o-primary, #07c160);
  border-top-color: #07c160;
  border-top-color: var(--o-primary, #07c160);
  border-bottom-color: #07c160;
  border-bottom-color: var(--o-primary, #07c160); }

.o-input-number:hover .o-button {
  background-color: rgba(7, 193, 96, 0.1);
  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));
  color: #07c160;
  color: var(--o-primary, #07c160);
  border-color: #07c160;
  border-color: var(--o-primary, #07c160); }

.o-input-medium,
.o-button-medium {
  font-size: 20px; }

.o-input-small,
.o-button-small {
  font-size: 18px; }

.o-input-mini,
.o-button-mini {
  font-size: 16px; }

.o-input-right {
  left: 0;
  width: 75%;
  border-radius: 0.3em 0 0 0.3em; }

.o-button-add-right {
  right: 0;
  top: 0;
  height: 50%;
  border-radius: 0 0.3em 0 0; }

.o-button-sub-right {
  margin-left: 75%;
  bottom: 0;
  height: 50%;
  border-width: 0 1px 1px 0;
  border-right: 1px solid #dcdfe6;
  border-radius: 0 0 0.3em 0; }

.o-input-number:hover .o-input-right {
  border-left-color: #07c160;
  border-left-color: var(--o-primary, #07c160); }

.o-input-number:hover .o-button-sub-right {
  border-right-color: #07c160;
  border-right-color: var(--o-primary, #07c160);
  border-top-color: #dcdfe6; }

.o-input-number:hover .o-button-add-right {
  border-bottom-color: #dcdfe6; }

.o-input-left {
  right: 0;
  width: 75%;
  border-radius: 0 0.3em 0.3em 0; }

.o-button-add-left {
  left: 0;
  top: 0;
  height: 50%;
  border-left: 1px solid #dcdfe6;
  border-radius: 0.3em 0 0 0;
  border-width: 1px 0 1px 1px; }

.o-button-sub-left {
  margin-right: 75%;
  bottom: 0;
  height: 50%;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 0 0.3em; }

.o-input-number:hover .o-input-left {
  border-right-color: #07c160;
  border-right-color: var(--o-primary, #07c160); }

.o-input-number:hover .o-button-sub-left {
  border-left-color: #07c160;
  border-left-color: var(--o-primary, #07c160);
  border-top-color: #dcdfe6; }

.o-input-number:hover .o-button-sub-disabled,
.o-button-sub-disabled,
.o-input-number:hover .o-button-add-disabled,
.o-button-add-disabled {
  color: #E4E7ED;
  cursor: not-allowed; }
`


var InputNumber = /** @class */ (function (_super) {
    __extends(InputNumber, _super);
    function InputNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onGetValue = function () {
            return _this.props.value;
        };
        _this._onSetValue = function (value) {
            // console.log('pre',this.preValue)
            // console.log(this.__$value)
            if (_this.props.strictly == true && ((Math.abs(_this.preValue - _this.__$value) % _this.props.step != 0))) { // program should correct the number when input is not right under the mode of strict.
                _this.inputErro = true;
                _this.valueAdd = _this.preValue + _this.props.step * 2;
                _this.valueSub = _this.preValue - _this.props.step;
            }
            _this.__$value = value;
            _this.props.value = value;
            _this.setAttribute('value', value);
            //precision
            if (_this.props.precision != 0) {
                var s = value.toString();
                var rs = s.indexOf('.');
                if (rs < 0) {
                    rs = s.length;
                    s += '.';
                }
                while (s.length <= rs + _this.props.precision) {
                    s += '0';
                }
                _this.setAttribute('value', Number.parseFloat(s).toFixed(_this.props.precision));
            }
            else {
                _this.setAttribute('value', Number.parseFloat(value).toFixed(_this.props.precision));
            }
        };
        _this.handleInput = function (evt) {
            evt.stopPropagation();
            if (parseFloat(evt.target.value) >= _this.props.min && parseFloat(evt.target.value) <= _this.props.max) {
                _this._onSetValue(evt.target.value);
                _this.fire('input', _this.props.value);
            }
        };
        _this.handleChange = function (evt) {
            _this.__$value = evt.target.value;
            _this.props.value = evt.target.value;
            _this.fire('change', _this.props.value);
        };
        _this.add = function () {
            var value = Number(_this._onGetValue());
            _this.preValue = value;
            // console.log(this.preValue)
            if (value + _this.props.step <= _this.props.max) {
                value += _this.props.step;
                _this._onSetValue(value);
            }
            if (_this.inputErro == true) {
                _this._onSetValue(_this.valueAdd);
                _this.inputErro = false;
            }
        };
        _this.subtraction = function () {
            var value = Number(_this._onGetValue());
            _this.preValue = value;
            if (value - _this.props.step >= _this.props.min) {
                value -= _this.props.step;
                _this._onSetValue(value);
            }
            if (_this.inputErro == true) {
                _this._onSetValue(_this.valueSub);
                _this.inputErro = false;
            }
        };
        return _this;
    }
    InputNumber.prototype.install = function () {
        this.__$value = Number(this.props.value);
        this.preValue = Number(this.props.value);
        Object.defineProperty(this, 'value', {
            get: this._onGetValue,
            set: this._onSetValue
        });
    };
    InputNumber.prototype.render = function (props) {
        var _a, _b, _c, _d;
        props.value; props.style; props.size; props.disabled; props.step; props.max; props.min; props.strictly; props.precision; var onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave; __rest(props, ["value", "style", "size", "disabled", "step", "max", "min", "strictly", "precision", "onMouseEnter", "onMouseLeave"]);
        return (h("div", __assign({}, extractClass(props, 'o-input-number', (_a = {
                'is-disabled': this.props.disabled
            },
            _a['o-input-number-' + props.size] = props.size,
            _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
            h("button", __assign({}, extractClass(props, 'o-button', 'o-button-sub', (_b = {
                    'is-disabled': this.props.disabled
                },
                _b['o-button-' + props.size] = props.size,
                _b['o-button-sub-' + props.style] = props.style,
                _b['o-button-sub-disabled'] = parseFloat(this.props.value) - this.props.step < this.props.min,
                _b)), { onClick: this.subtraction }), "-"),
            h("input", __assign({}, extractClass(props, 'o-input', (_c = {},
                _c['o-input-' + props.size] = props.size,
                _c['o-input-' + props.style] = props.style,
                _c)), { value: Number.parseFloat(props.value).toFixed(this.props.precision), size: props.size, onInput: this.handleInput, onChange: this.handleChange })),
            h("button", __assign({}, extractClass(props, 'o-button', 'o-button-add', (_d = {
                    'is-disabled': this.props.disabled
                },
                _d['o-button-' + props.size] = props.size,
                _d['o-button-add-' + props.style] = props.style,
                _d['o-button-add-disabled'] = parseFloat(this.props.value) + this.props.step > this.props.max,
                _d)), { onClick: this.add }), "+")));
    };
    InputNumber.css = css;
    InputNumber.defaultProps = {
        value: '1',
        size: 'medium',
        style: 'justify',
        step: 1,
        strictly: false,
        disabled: false,
        max: Number.MAX_VALUE,
        min: 1,
        precision: 0
    };
    InputNumber.propTypes = {
        value: String,
        size: String,
        style: String,
        step: Number,
        strictly: Boolean,
        disabled: Boolean,
        max: Number,
        min: Number,
        precision: Number
    };
    InputNumber = __decorate([
        tag('o-input-number')
    ], InputNumber);
    return InputNumber;
}(WeElement));

export default InputNumber;
//# sourceMappingURL=index.esm.js.map
