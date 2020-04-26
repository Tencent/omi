/**
 * @omiu/radio v0.0.6 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, tag, WeElement } from 'omi';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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


var css = `:host {
  display: inline-block; }

.o-radio,
.o-radio--medium.is-bordered .o-radio__label {
  font-size: 14px; }

.o-radio,
.o-radio__input {
  white-space: nowrap;
  line-height: 1;
  outline: 0; }

.o-radio,
.o-radio__inner,
.o-radio__input {
  position: relative;
  display: inline-block; }

.o-radio {
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none; }

.o-radio.is-bordered {
  padding: 12px 20px 0 10px;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 40px; }

.o-radio.is-bordered.is-checked {
  border-color: #07c160; }

.o-radio.is-bordered.is-disabled {
  cursor: not-allowed;
  border-color: #EBEEF5; }

.o-radio__input.is-disabled .o-radio__inner,
.o-radio__input.is-disabled.is-checked .o-radio__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED; }

.o-radio.is-bordered + .o-radio.is-bordered {
  margin-left: 10px; }

.o-radio--medium.is-bordered {
  padding: 10px 20px 0 10px;
  border-radius: 4px;
  height: 36px; }

.o-radio--mini.is-bordered .o-radio__label,
.o-radio--small.is-bordered .o-radio__label {
  font-size: 12px; }

.o-radio--medium.is-bordered .o-radio__inner {
  height: 14px;
  width: 14px; }

.o-radio--small.is-bordered {
  padding: 8px 15px 0 10px;
  border-radius: 3px;
  height: 32px; }

.o-radio--small.is-bordered .o-radio__inner {
  height: 12px;
  width: 12px; }

.o-radio--mini.is-bordered {
  padding: 6px 15px 0 10px;
  border-radius: 3px;
  height: 28px; }

.o-radio--mini.is-bordered .o-radio__inner {
  height: 12px;
  width: 12px; }

.o-radio:last-child {
  margin-right: 0; }

.o-radio__input {
  cursor: pointer;
  vertical-align: middle; }

.o-radio__input.is-disabled .o-radio__inner {
  cursor: not-allowed; }

.o-radio__input.is-disabled .o-radio__inner::after {
  cursor: not-allowed;
  background-color: #F5F7FA; }

.o-radio__input.is-disabled .o-radio__inner + .o-radio__label {
  cursor: not-allowed; }

.o-radio__input.is-disabled.is-checked .o-radio__inner::after {
  background-color: #C0C4CC; }

.o-radio__input.is-disabled + span.o-radio__label {
  color: #C0C4CC;
  cursor: not-allowed; }

.o-radio__input.is-checked .o-radio__inner {
  border-color: #07c160;
  background: #07c160; }

.o-radio__input.is-checked .o-radio__inner::after {
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1); }

.o-radio__input.is-checked + .o-radio__label {
  color: #07c160; }

.o-radio__input.is-focus .o-radio__inner {
  border-color: #07c160; }

.o-radio__inner {
  border: 1px solid #DCDFE6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #FFF;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.o-radio__inner:hover {
  border-color: #07c160; }

.o-radio__inner::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #FFF;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale(0);
  transform: translate(-50%, -50%) scale(0);
  -webkit-transition: -webkit-transform .15s ease-in;
  transition: -webkit-transform .15s ease-in;
  transition: transform .15s ease-in;
  transition: transform .15s ease-in, -webkit-transform .15s ease-in; }

.o-radio__original {
  opacity: 0;
  outline: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0; }

.o-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .o-radio__inner {
  -webkit-box-shadow: 0 0 2px 2px #07c160;
  box-shadow: 0 0 2px 2px #07c160; }

.o-radio__label {
  font-size: 14px;
  padding-left: 10px; }
`


var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickHandler = function () {
            if (_this.props.disabled)
                return;
            if (!_this.props.checked) {
                _this.group.forEach(function (item) {
                    item.updateProps({
                        checked: false
                    });
                });
                _this.updateProps({
                    checked: true
                });
                _this.fire('change', { value: _this.props.value });
            }
        };
        return _this;
    }
    Radio.prototype.installed = function () {
        var _this = this;
        this.group = this.getScopeRoot(this.shadowRoot.host).querySelectorAll("o-radio[name='" + this.props.name + "']");
        //fix group 不一致
        this.group.forEach(function (ele) {
            ele.group = _this.group;
        });
    };
    Radio.prototype.render = function (props) {
        return h("label", __assign({ role: "radio", tabindex: "0", onClick: this.clickHandler }, extractClass(props, 'o-radio', {
            'is-disabled': props.disabled,
            'is-checked': props.checked
        }), { "aria-checked": props.checked }),
            h("span", __assign({}, extractClass(props, 'o-radio__input', {
                'is-disabled': props.disabled,
                'is-checked': props.checked
            })),
                h("span", { class: "o-radio__inner" }),
                h("input", __assign({ type: "radio", "aria-hidden": "true" }, extract(props, ['checked', 'value', 'disabled']), { tabindex: "-1", class: "o-radio__original" }))),
            h("span", { class: "o-radio__label" },
                props.label,
                h("slot", null)));
    };
    Radio.prototype.getScopeRoot = function (current) {
        while (true) {
            var p = current.parentNode;
            if (p) {
                current = p;
            }
            else {
                return current;
            }
        }
    };
    Radio.css = css;
    Radio.propTypes = {
        label: String,
        disabled: Boolean,
        checked: Boolean,
        value: String,
        name: String
    };
    Radio = __decorate([
        tag('o-radio')
    ], Radio);
    return Radio;
}(WeElement));
function extract(props, prop) {
    var _a;
    if (typeof prop === 'string') {
        if (props.hasOwnProperty(prop)) {
            return _a = {}, _a[prop] = props[prop], _a;
        }
    }
    else {
        var res_1 = {};
        prop.forEach(function (key) {
            if (props.hasOwnProperty(key)) {
                res_1[key] = props[key];
            }
        });
        return res_1;
    }
}

export default Radio;
//# sourceMappingURL=index.esm.js.map
