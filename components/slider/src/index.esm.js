/**
 * @omiu/slider v0.0.1 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { extractClass, h, tag, WeElement } from 'omi';

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
  height: 12.5px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  border: 2px solid #07c160;
  transition: background-color 200ms;
  position: absolute;
  top: 0;
  bottom: 0;
  outline: none;
  margin: auto;
  z-index: -1; }

.slider-container .o-slider {
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  top: 0;
  bottom: 0;
  background: transparent;
  z-index: 1;
  pointer-events: none; }
  .slider-container .o-slider:focus {
    outline: none; }
  .slider-container .o-slider::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 12.5px; }
  .slider-container .o-slider::-moz-range-track {
    -moz-appearance: none;
    height: 12.5px; }
  .slider-container .o-slider::-ms-track {
    appearance: none;
    height: 12.5px; }
  .slider-container .o-slider::-webkit-slider-thumb {
    position: relative;
    height: 31.25px;
    width: 31.25px;
    background-color: #07c160;
    transition: background-color 150ms;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    top: 50%;
    margin-top: -17.625px;
    pointer-events: auto;
    z-index: 2;
    -webkit-appearance: none; }
    .slider-container .o-slider::-webkit-slider-thumb:hover, .slider-container .o-slider::-webkit-slider-thumb:focus {
      background-color: #059048; }
  .slider-container .o-slider::-moz-range-thumb {
    position: relative;
    height: 31.25px;
    width: 31.25px;
    background-color: #07c160;
    transition: background-color 150ms;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    top: 50%;
    margin-top: -17.625px;
    pointer-events: auto;
    z-index: 2;
    -webkit-appearance: none; }
    .slider-container .o-slider::-moz-range-thumb:hover, .slider-container .o-slider::-moz-range-thumb:focus {
      background-color: #059048; }
  .slider-container .o-slider::-ms-thumb {
    position: relative;
    height: 31.25px;
    width: 31.25px;
    background-color: #07c160;
    transition: background-color 150ms;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    top: 50%;
    margin-top: -17.625px;
    pointer-events: auto;
    z-index: 2;
    appearance: none; }
    .slider-container .o-slider::-ms-thumb:hover, .slider-container .o-slider::-ms-thumb:focus {
      background-color: #059048; }

.is-round .slider-track {
  border-radius: 8px; }

.is-round .o-slider::-webkit-slider-thumb {
  outline-offset: -10px;
  border-radius: 50%;
  -webkit-appearance: none; }
  .is-round .o-slider::-webkit-slider-thumb:hover, .is-round .o-slider::-webkit-slider-thumb:focus {
    outline-offset: -12px; }

.is-round .o-slider::-moz-range-thumb {
  outline-offset: -10px;
  border-radius: 50%;
  -webkit-appearance: none; }
  .is-round .o-slider::-moz-range-thumb:hover, .is-round .o-slider::-moz-range-thumb:focus {
    outline-offset: -12px; }

.is-round .o-slider::-ms-thumb {
  outline-offset: -10px;
  border-radius: 50%;
  appearance: none; }
  .is-round .o-slider::-ms-thumb:hover, .is-round .o-slider::-ms-thumb:focus {
    outline-offset: -12px; }

.is-disabled .slider-track {
  border-color: #c0c4cc; }

.is-disabled .o-slider::-webkit-slider-thumb {
  position: relative;
  height: 31.25px;
  width: 31.25px;
  background-color: #07c160;
  transition: background-color 150ms;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  top: 50%;
  margin-top: -17.625px;
  pointer-events: auto;
  z-index: 2;
  pointer-events: none;
  cursor: none;
  background-color: #c0c4cc;
  -webkit-appearance: none; }
  .is-disabled .o-slider::-webkit-slider-thumb:hover, .is-disabled .o-slider::-webkit-slider-thumb:focus {
    background-color: #059048; }

.is-disabled .o-slider::-moz-range-thumb {
  position: relative;
  height: 31.25px;
  width: 31.25px;
  background-color: #07c160;
  transition: background-color 150ms;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  top: 50%;
  margin-top: -17.625px;
  pointer-events: auto;
  z-index: 2;
  pointer-events: none;
  cursor: none;
  background-color: #c0c4cc;
  -webkit-appearance: none; }
  .is-disabled .o-slider::-moz-range-thumb:hover, .is-disabled .o-slider::-moz-range-thumb:focus {
    background-color: #059048; }

.is-disabled .o-slider::-ms-thumb {
  position: relative;
  height: 31.25px;
  width: 31.25px;
  background-color: #07c160;
  transition: background-color 150ms;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  top: 50%;
  margin-top: -17.625px;
  pointer-events: auto;
  z-index: 2;
  pointer-events: none;
  cursor: none;
  background-color: #c0c4cc;
  appearance: none; }
  .is-disabled .o-slider::-ms-thumb:hover, .is-disabled .o-slider::-ms-thumb:focus {
    background-color: #059048; }

.is-vertical {
  transform: rotate(-90deg); }
`


var OSlider = /** @class */ (function (_super) {
    __extends(OSlider, _super);
    function OSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sliderMax = _this.props.max;
        _this.handleSliderOne = function (evt) {
            var first_value = parseInt(_this.rootNode.children[0].value);
            //! bad
            if (first_value <= _this.__$second_value || !_this.props.double_range) {
                _this.__$value = first_value;
                if (!_this.props.double_range) {
                    _this.fire('change', _this.__$value);
                }
                else {
                    _this.fire('change', [_this.__$value, _this.__$second_value]);
                }
            }
            _this.fillColor();
            _this.update();
        };
        _this.handleSliderTwo = function (evt) {
            var second_value = parseInt(_this.rootNode.children[1].value);
            if (second_value >= _this.__$value) {
                _this.__$second_value = second_value;
                _this.fire('change', [_this.__$value, _this.__$second_value]);
            }
            _this.fillColor();
            _this.update();
        };
        _this.fillColor = function () {
            var percent1 = (_this.__$value / _this.props.max) * 100;
            var percent2 = (_this.__$second_value / _this.props.max) * 100;
            var lowerColor = '#07c160';
            var upperColor = '#ffffff';
            if (_this.props.disabled) {
                lowerColor = '#c0c4cc';
            }
            _this.props.double_range
                ? (_this.sliderTrack.style.background = "linear-gradient(to right, " + upperColor + " " + percent1 + "% , " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent2 + "%, " + upperColor + " " + percent2 + "%)")
                : (_this.sliderTrack.style.background = "linear-gradient(to right, " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent2 + "%, " + upperColor + " " + percent2 + "%)");
        };
        return _this;
    }
    OSlider_1 = OSlider;
    OSlider.prototype.install = function () {
        this.props.value
            ? (this.__$value = this.props.value)
            : (this.__$value = OSlider_1.defaultProps.value);
        this.props.second_value;
        this.__$second_value = this.props.second_value;
    };
    OSlider.prototype.installed = function () {
        this.fillColor();
        this.update();
    };
    OSlider.prototype.render = function (props) {
        var _this = this;
        var cls = extractClass(props, 'slider-container', {
            'is-vertical': props.vertical,
            'is-round': props.round,
            'is-disabled': props.disabled,
        });
        return (h("div", __assign({}, cls, { ref: function (e) {
                _this.rootNode = e;
            } }),
            h("input", { class: "o-slider", type: "range", min: props.min, max: props.max, value: this.__$value, onInput: this.handleSliderOne, id: "slider-1", ref: function (e) {
                    _this.sliderOne = e;
                } }),
            props.double_range && (h("input", { class: "o-slider", type: "range", min: props.min, max: props.max, value: this.__$second_value, onInput: this.handleSliderTwo, id: "slider-2", ref: function (e) {
                    _this.sliderTwo = e;
                } })),
            h("div", { class: "slider-track", ref: function (e) {
                    _this.sliderTrack = e;
                } })));
    };
    var OSlider_1;
    OSlider.css = css;
    OSlider.defaultProps = {
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        //default a single square range slider
        double_range: false,
        vertical: false,
        round: false,
        disabled: false,
    };
    OSlider.propTypes = {
        min: Number,
        max: Number,
        step: Number,
        value: Number,
        second_value: Number,
        double_range: Boolean,
        vertical: Boolean,
        round: Boolean,
        disabled: Boolean,
    };
    OSlider = OSlider_1 = __decorate([
        tag('o-slider')
    ], OSlider);
    return OSlider;
}(WeElement));

export { OSlider as default };
//# sourceMappingURL=index.esm.js.map
