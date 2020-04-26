/**
 * @omiu/switch v0.0.1 http://omijs.org
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

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; }

.weui-switch {
  -webkit-appearance: none;
  appearance: none;
  display: inline-block; }

.weui-switch-cp {
  display: inline-block; }

.weui-switch,
.weui-switch-cp__box {
  position: relative;
  width: 52px;
  height: 32px;
  border: 1px solid #DFDFDF;
  outline: 0;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #DFDFDF;
  -webkit-transition: background-color 0.1s, border 0.1s;
  transition: background-color 0.1s, border 0.1s; }

.weui-switch:before,
.weui-switch-cp__box:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: #FDFDFD;
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); }

.weui-switch:after,
.weui-switch-cp__box:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35); }

.weui-switch:checked,
.weui-switch-cp__input:checked ~ .weui-switch-cp__box {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160); }

.weui-switch:checked:before,
.weui-switch-cp__input:checked ~ .weui-switch-cp__box:before {
  -webkit-transform: scale(0);
  transform: scale(0); }

.weui-switch:checked:after,
.weui-switch-cp__input:checked ~ .weui-switch-cp__box:after {
  -webkit-transform: translateX(20px);
  transform: translateX(20px); }

.weui-switch-cp__input {
  position: absolute;
  left: -9999px; }

.weui-switch-cp__box {
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
            return (h("label", __assign({ for: "x_" + this.elementId }, extractClass(props, 'weui-switch-cp')),
                h("input", { id: "x_" + this.elementId, ref: function (e) {
                        _this._ele = e;
                    }, class: "weui-switch-cp__input", type: "checkbox", onChange: this.onChange, checked: true }),
                h("div", { class: "weui-switch-cp__box" })));
        }
        return (h("input", __assign({}, extractClass(props, 'weui-switch'), { type: "checkbox", ref: function (e) {
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
