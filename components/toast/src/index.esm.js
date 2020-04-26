/**
 * @omiu/toast v0.0.3 http://omijs.org
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
  display: block; }

.o-toast {
  position: fixed;
  z-index: 5000;
  width: 120px;
  height: 120px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4c4c4c;
  transition: opacity .4s; }

body[data-o-theme='dark'] .o-toast {
  background-color: #606060; }

@media (prefers-color-scheme: dark) {
  body:not([data-o-theme='light']) .o-toast {
    background-color: #606060; } }

.o-icon-toast {
  display: block; }

.o-icon-toast.o-icon-success-no-circle {
  color: rgba(255, 255, 255, 0.9);
  width: 55px;
  height: 55px; }

.o-icon-toast.o-loading {
  margin: 8px 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline; }

.o-toast-content {
  font-size: 14px; }

.o-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); }

.o-mask-transparent {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; }

.o-loading {
  margin: 8px 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline;
  display: inline-block;
  animation: loading 1s steps(12, end) infinite;
  background: transparent url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E") no-repeat;
  background-size: 100%; }

@-webkit-keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg); }
  100% {
    transform: rotate3d(0, 0, 1, 360deg); } }

@keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg); }
  100% {
    transform: rotate3d(0, 0, 1, 360deg); } }

p {
  margin: 0; }

.o-done {
  -webkit-mask-position: 50% 50%;
  mask-position: 50% 50%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100%;
  mask-size: 100%;
  background-color: currentColor;
  color: rgba(255, 255, 255, 0.9);
  width: 55px;
  height: 55px;
  display: block;
  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.864%2016.617l-5.303-5.303-1.061%201.06%205.657%205.657a1%201%200%20001.414%200L21.238%206.364l-1.06-1.06L8.864%2016.616z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
  -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.864%2016.617l-5.303-5.303-1.061%201.06%205.657%205.657a1%201%200%20001.414%200L21.238%206.364l-1.06-1.06L8.864%2016.616z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
  background-size: 100%; }

.o-toast-fade-leave-active {
  opacity: 0; }
`


var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.installed = function () {
        if (this.props.autoClose) {
            this.close();
        }
    };
    Button.prototype.close = function () {
        var _this = this;
        setTimeout(function () {
            _this.fadeEnter = true;
            _this.update();
        }, this.props.duration + 400);
        setTimeout(function () {
            _this.parentNode.removeChild(_this);
        }, this.props.duration + 400 + 400);
    };
    Button.prototype.render = function (props) {
        var _a;
        if (!props.show)
            return;
        return [
            h("div", { class: "o-mask-transparent" }),
            h("div", __assign({}, extractClass(props, 'o-toast', (_a = {},
                _a['o-toast--' + props.type] = props.type,
                _a['o-toast-fade-leave-active'] = this.fadeEnter,
                _a))),
                h("slot", null),
                props.loading && h("i", { class: "o-loading" }),
                props.done && h("i", { class: "o-done" }),
                h("p", { class: "o-toast-content" }, props.label))
        ];
    };
    Button.css = css;
    Button.defaultProps = {
        duration: 2000,
        autoClose: false,
        show: true
    };
    Button.propTypes = {
        label: String,
        loading: Boolean,
        done: Boolean,
        duration: Number,
        autoClose: Boolean,
        show: Boolean
    };
    Button = __decorate([
        tag('o-toast')
    ], Button);
    return Button;
}(WeElement));

export default Button;
//# sourceMappingURL=index.esm.js.map
