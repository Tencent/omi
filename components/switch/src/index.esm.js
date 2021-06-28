/**
 * @omiu/switch v0.0.2 http://omijs.org
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
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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


var css = `:host {
  display: inline-block; }

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; }

.o-switch {
  -webkit-appearance: none;
  appearance: none;
  display: inline-block; }

.o-switch-cp {
  display: inline-block; }

.o-switch,
.o-switch-cp__box {
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #DFDFDF;
  outline: 0;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #DFDFDF;
  -webkit-transition: background-color 0.1s, border 0.1s;
  transition: background-color 0.1s, border 0.1s; }

.o-switch:before,
.o-switch-cp__box:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 18px;
  border-radius: 15px;
  background-color: #FDFDFD;
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); }

.o-switch:after,
.o-switch-cp__box:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35); }

.o-switch:checked,
.o-switch-cp__input:checked ~ .o-switch-cp__box {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160); }

.o-switch:checked:before,
.o-switch-cp__input:checked ~ .o-switch-cp__box:before {
  -webkit-transform: scale(0);
  transform: scale(0); }

.o-switch:checked:after,
.o-switch-cp__input:checked ~ .o-switch-cp__box:after {
  -webkit-transform: translateX(20px);
  transform: translateX(20px); }

.o-switch-cp__input {
  position: absolute;
  left: -9999px; }

.o-switch-cp__box {
  display: block; }
`


var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function () {
            _this.fire('change', _this._ele.checked);
        };
        return _this;
    }
    Switch.prototype.render = function (props) {
        var _this = this;
        if (props.checked) {
            return (h("label", __assign({ for: "x_" + this.elementId }, extractClass(props, 'o-switch-cp')),
                h("input", { id: "x_" + this.elementId, ref: function (e) {
                        _this._ele = e;
                    }, class: "o-switch-cp__input", type: "checkbox", onChange: this.onChange, checked: true }),
                h("div", { class: "o-switch-cp__box" })));
        }
        return (h("input", __assign({}, extractClass(props, 'o-switch'), { type: "checkbox", ref: function (e) {
                _this._ele = e;
            }, onChange: this.onChange })));
    };
    Switch.css = css;
    Switch.propTypes = {
        checked: Boolean
    };
    Switch = __decorate([
        tag('o-switch')
    ], Switch);
    return Switch;
}(WeElement));

export default Switch;
//# sourceMappingURL=index.esm.js.map
