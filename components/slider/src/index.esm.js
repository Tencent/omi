/**
 * @omiu/slider v0.0.11 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { extractClass, h, tag, WeElement } from 'omi';
import '@omiu/tooltip';
import '@omiu/input';

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `@use 'sass:math';
:host {
  display: -ms-grid;
  display: grid; }

.slider-container {
  position: relative;
  width: 100%;
  height: 50px; }

.slider-container .slider-track {
  width: 100%;
  position: relative;
  margin: 5px;
  height: 4px;
  position: absolute;
  top: 0;
  bottom: 0;
  outline: none;
  margin: auto;
  z-index: -1; }

.slider-container .o-slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: transparent;
  pointer-events: none; }
  .slider-container .o-slider:focus {
    outline: none; }
  .slider-container .o-slider::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 4px; }
  .slider-container .o-slider::-moz-range-track {
    -moz-appearance: none;
    height: 4px; }
  .slider-container .o-slider::-ms-track {
    appearance: none;
    height: 4px; }
  .slider-container .o-slider::-webkit-slider-thumb {
    top: 50%;
    width: 14px;
    height: 14px;
    position: relative;
    z-index: 2;
    margin-top: -9px;
    border: 2px solid #07c160;
    background-color: #ffffff;
    cursor: pointer;
    pointer-events: auto;
    box-shadow: 0;
    transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -webkit-appearance: none; }
    .slider-container .o-slider::-webkit-slider-thumb:active {
      box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
    .slider-container .o-slider::-webkit-slider-thumb:hover {
      border-color: #059048; }
  .slider-container .o-slider::-moz-range-thumb {
    top: 50%;
    width: 14px;
    height: 14px;
    position: relative;
    z-index: 2;
    margin-top: -9px;
    border: 2px solid #07c160;
    background-color: #ffffff;
    cursor: pointer;
    pointer-events: auto;
    box-shadow: 0;
    transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -webkit-appearance: none; }
    .slider-container .o-slider::-moz-range-thumb:active {
      box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
    .slider-container .o-slider::-moz-range-thumb:hover {
      border-color: #059048; }
  .slider-container .o-slider::-ms-thumb {
    top: 50%;
    width: 14px;
    height: 14px;
    position: relative;
    z-index: 2;
    margin-top: -9px;
    border: 2px solid #07c160;
    background-color: #ffffff;
    cursor: pointer;
    pointer-events: auto;
    box-shadow: 0;
    transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    appearance: none; }
    .slider-container .o-slider::-ms-thumb:active {
      box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
    .slider-container .o-slider::-ms-thumb:hover {
      border-color: #059048; }

.is-round .slider-track {
  border-radius: 8px; }

.is-round .o-slider::-webkit-slider-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  border-radius: 50%;
  -webkit-appearance: none; }
  .is-round .o-slider::-webkit-slider-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-round .o-slider::-webkit-slider-thumb:hover {
    border-color: #059048; }

.is-round .o-slider::-moz-range-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  border-radius: 50%;
  -webkit-appearance: none; }
  .is-round .o-slider::-moz-range-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-round .o-slider::-moz-range-thumb:hover {
    border-color: #059048; }

.is-round .o-slider::-ms-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  border-radius: 50%;
  appearance: none; }
  .is-round .o-slider::-ms-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-round .o-slider::-ms-thumb:hover {
    border-color: #059048; }

.is-disabled .slider-track {
  border-color: #c0c4cc; }

.is-disabled .o-slider::-webkit-slider-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  pointer-events: none;
  border-color: #c0c4cc;
  -webkit-appearance: none; }
  .is-disabled .o-slider::-webkit-slider-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-disabled .o-slider::-webkit-slider-thumb:hover {
    border-color: #059048; }

.is-disabled .o-slider::-moz-range-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  pointer-events: none;
  border-color: #c0c4cc;
  -webkit-appearance: none; }
  .is-disabled .o-slider::-moz-range-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-disabled .o-slider::-moz-range-thumb:hover {
    border-color: #059048; }

.is-disabled .o-slider::-ms-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  pointer-events: none;
  border-color: #c0c4cc;
  appearance: none; }
  .is-disabled .o-slider::-ms-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-disabled .o-slider::-ms-thumb:hover {
    border-color: #059048; }

.is-large .slider-track {
  height: 6px; }

.is-large .o-slider::-webkit-slider-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  width: 25px;
  height: 25px;
  margin-top: -14.5px;
  -webkit-appearance: none; }
  .is-large .o-slider::-webkit-slider-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-large .o-slider::-webkit-slider-thumb:hover {
    border-color: #059048; }

.is-large .o-slider::-moz-range-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  width: 25px;
  height: 25px;
  margin-top: -14.5px;
  -webkit-appearance: none; }
  .is-large .o-slider::-moz-range-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-large .o-slider::-moz-range-thumb:hover {
    border-color: #059048; }

.is-large .o-slider::-ms-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  width: 25px;
  height: 25px;
  margin-top: -14.5px;
  appearance: none; }
  .is-large .o-slider::-ms-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-large .o-slider::-ms-thumb:hover {
    border-color: #059048; }

.is-slim .slider-track {
  height: 2px;
  border-radius: 0%; }

.is-slim .o-slider::-webkit-slider-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  width: 20px;
  height: 12px;
  margin-top: -8px;
  border-radius: 0%;
  -webkit-appearance: none; }
  .is-slim .o-slider::-webkit-slider-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-slim .o-slider::-webkit-slider-thumb:hover {
    border-color: #059048; }

.is-slim .o-slider::-moz-range-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  width: 20px;
  height: 12px;
  margin-top: -8px;
  border-radius: 0%;
  -webkit-appearance: none; }
  .is-slim .o-slider::-moz-range-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-slim .o-slider::-moz-range-thumb:hover {
    border-color: #059048; }

.is-slim .o-slider::-ms-thumb {
  top: 50%;
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 2;
  margin-top: -9px;
  border: 2px solid #07c160;
  background-color: #ffffff;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0;
  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  width: 20px;
  height: 12px;
  margin-top: -8px;
  border-radius: 0%;
  appearance: none; }
  .is-slim .o-slider::-ms-thumb:active {
    box-shadow: 0 0 0 5px rgba(7, 193, 96, 0.1); }
  .is-slim .o-slider::-ms-thumb:hover {
    border-color: #059048; }
`


var OSlider = /** @class */ (function (_super) {
    __extends(OSlider, _super);
    function OSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sliderMax = _this.props.max;
        _this.lowerColor = '#07c160';
        _this.upperColor = '#f0f0f0';
        _this._onGetValue = function () {
            return _this.__$value1;
        };
        _this._onSetValue = function (value) {
            _this.__$value1 = value;
            _this.props.value = value;
            _this.setAttribute('value', value);
        };
        _this._onGetValue2 = function () {
            return _this.__$value2;
        };
        _this._onSetValue2 = function (value) {
            _this.__$value2 = value;
            _this.props.second_value = value;
            _this.setAttribute('second_value', value);
        };
        _this.handleS1Input = function (evt) {
            evt.stopPropagation();
            var first_value = parseInt(_this.slider1.value);
            if (first_value <= _this.__$value2 || _this.props.range === 'single') {
                //  if the slider 1 has not exceeded slider2 or it is a single range slider
                //  assign value straight away
                _this.__$value1 = first_value;
            }
            if (_this.props.range === 'single') {
                _this.fire('input', _this.__$value1);
            }
            else {
                _this.fire('input', [_this.__$value1, _this.__$value2]);
            }
            _this.update();
        };
        _this.handleS2Input = function (evt) {
            evt.stopPropagation();
            var second_value = parseInt(_this.slider2.value);
            //we only have one case if slider two exists
            if (second_value >= _this.__$value1) {
                _this.__$value2 = second_value;
            }
            _this.fire('input', [_this.__$value1, _this.__$value2]);
            _this.update();
        };
        _this.handleS1Change = function (evt) {
            if (_this.props.range === 'single') {
                _this.fire('change', _this.__$value1);
            }
            else {
                _this.fire('change', [_this.__$value1, _this.__$value2]);
            }
        };
        _this.handleS2Change = function (evt) {
            _this.fire('change', [_this.__$value1, _this.__$value2]);
        };
        _this.fillColor = function (lowerColor, upperColor) {
            var percent1 = _this.props.range === 'double'
                ? (_this.__$value1 / _this.props.max) * 100
                : 0;
            var percent2 = _this.props.range === 'double'
                ? (_this.__$value2 / _this.props.max) * 100
                : (_this.__$value1 / _this.props.max) * 100;
            if (_this.props.disabled) {
                lowerColor = '#c0c4cc';
            }
            _this.props.range === 'double'
                ? (_this.sliderTrack.style.background = "linear-gradient(to right, " + upperColor + " " + percent1 + "% , " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent2 + "%, " + upperColor + " " + percent2 + "%)")
                : (_this.sliderTrack.style.background = "linear-gradient(to right, " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent2 + "%, " + upperColor + " " + percent2 + "%)");
        };
        _this.handleMouseUp = function () {
            _this.fillColor(_this.lowerColor, _this.upperColor);
        };
        return _this;
    }
    OSlider.prototype.install = function () {
        this.__$value1 = this.props.value;
        this.props.range === 'double'
            ? (this.__$value2 = this.props.second_value)
            : (this.__$value2 = null);
        Object.defineProperty(this, 'value', {
            get: this._onGetValue,
            set: this._onSetValue,
        });
        Object.defineProperty(this, 'second_value', {
            get: this._onGetValue2,
            set: this._onSetValue2,
        });
    };
    OSlider.prototype.installed = function () {
        this.fillColor(this.lowerColor, this.upperColor);
        var host = this.shadowRoot.host;
        this.props.orient === 'vertical' &&
            (host.style.transform = 'rotate(-90deg)');
        this.props.reversed && (host.style.transform = 'rotate(180deg)');
    };
    OSlider.prototype.beforeUpdate = function () {
        if (this.__$value1 > this.__$value2 && this.props.range === 'double') {
            var temp = this.__$value1;
            this.__$value1 = this.__$value2;
            this.__$value2 = temp;
        }
    };
    OSlider.prototype.updated = function () {
        this.fillColor('#059048', '#d9d9d9');
    };
    OSlider.prototype.render = function (props) {
        var _this = this;
        var cls = extractClass(props, 'slider-container', {
            'is-vertical': props.orient === 'vertical',
            'is-round': props.shape === 'round',
            'is-large': props.size === 'large',
            'is-slim': props.size === 'slim',
            'is-disabled': props.disabled,
        });
        return (h("div", __assign({}, cls, { ref: function (e) {
                _this.rootNode = e;
            } }),
            this.props.tooltip ? (h("o-tooltip", { class: "tooltip", position: "top", effect: "dark", content: this.props.range === 'double'
                    ? this.__$value1 + " , " + this.__$value2
                    : this.__$value1 },
                h("input", { class: "o-slider", id: "slider-1", type: "range", min: props.min, max: props.max, step: props.step, value: this.__$value1, onInput: this.handleS1Input, onChange: this.handleS1Change, onMouseUp: this.handleMouseUp, ref: function (e) {
                        _this.slider1 = e;
                    } }))) : (
            /* ========================SINGLE-NO-TOOLTIP================================ */
            h("input", { class: "o-slider", type: "range", min: props.min, max: props.max, value: this.__$value1, onInput: this.handleS1Input, onChange: this.handleS1Change, onMouseUp: this.handleMouseUp, id: "slider-1", ref: function (e) {
                    _this.slider1 = e;
                } })),
            this.props.range === 'double' &&
                (this.props.tooltip ? (h("o-tooltip", { class: "tooltip", position: "top", effect: "dark", content: this.props.range === 'double'
                        ? this.__$value1 + " , " + this.__$value2
                        : this.__$value1 },
                    h("input", { class: "o-slider", type: "range", min: props.min, max: props.max, value: this.__$value2, onInput: this.handleS2Input, onChange: this.handleS2Change, onMouseUp: this.handleMouseUp, id: "slider-2", ref: function (e) {
                            _this.slider2 = e;
                        } }))) : (
                /* ========================DOUBLE-NO-TOOLTIP============================== */
                h("input", { class: "o-slider", type: "range", min: props.min, max: props.max, value: this.__$value2, onInput: this.handleS2Input, onChange: this.handleS2Change, onMouseUp: this.handleMouseUp, id: "slider-2", ref: function (e) {
                        _this.slider2 = e;
                    } }))),
            h("div", { class: "slider-track", ref: function (e) {
                    _this.sliderTrack = e;
                } })));
    };
    OSlider.defaultProps = {
        //default a single round range slider
        min: undefined,
        max: undefined,
        step: 1,
        value: undefined,
        second_value: undefined,
        range: 'single',
        size: 'normal',
        orient: 'horizontal',
        shape: 'round',
        tooltip: false,
        disabled: false,
        reversed: false,
    };
    OSlider.propTypes = {
        min: Number,
        max: Number,
        step: Number,
        value: Number,
        second_value: Number,
        range: String,
        size: String,
        orient: String,
        shape: String,
        tooltip: Boolean,
        disabled: Boolean,
        reversed: Boolean,
    };
    OSlider.css = css;
    OSlider = __decorate([
        tag('o-slider')
    ], OSlider);
    return OSlider;
}(WeElement));

export { OSlider as default };
//# sourceMappingURL=index.esm.js.map
