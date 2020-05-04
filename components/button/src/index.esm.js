/**
 * @omiu/button v0.0.8 http://omijs.org
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

:host([block]) {
  display: block; }

.o-button {
  display: inline-block;
  line-height: 1;
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
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px; }

.o-button:hover {
  border-color: rgba(7, 193, 96, 0.382);
  border-color: var(--o-primary-hover-border, rgba(7, 193, 96, 0.382));
  color: #07c160;
  color: var(--o-primary, #07c160);
  background-color: rgba(7, 193, 96, 0.1);
  background-color: var(--o-primary-hover-bg, rgba(7, 193, 96, 0.1)); }

.o-button:active {
  color: #07c160;
  color: var(--o-primary, #07c160);
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  outline: none; }

.o-button-primary {
  color: #fff;
  background-color: #07c160;
  border-color: #07c160;
  background-color: var(--o-primary, #07c160);
  border-color: var(--o-primary, #07c160); }

.o-button-primary.is-plain {
  color: #07c160;
  color: var(--o-primary, #07c160);
  background-color: rgba(7, 193, 96, 0.1);
  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));
  border-color: rgba(7, 193, 96, 0.382);
  border-color: var(--o-primary-fade-some, rgba(7, 193, 96, 0.382)); }

.o-button-primary:hover {
  background-color: rgba(7, 193, 96, 0.618);
  border-color: rgba(7, 193, 96, 0.618);
  background-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618));
  border-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618));
  color: #fff; }

.o-button-primary:active {
  background-color: #059048;
  border-color: #059048;
  background-color: var(--o-primary-active, #059048);
  border-color: var(--o-primary-active, #059048);
  color: #fff; }

.o-button-danger {
  color: #fff;
  background-color: #fa5151;
  border-color: #fa5151;
  background-color: var(--o-danger, #fa5151);
  border-color: var(--o-danger, #fa5151); }

.o-button-danger.is-plain {
  color: #fa5151;
  color: var(--o-danger, #fa5151);
  background-color: rgba(250, 81, 81, 0.1);
  background-color: var(--o-danger-fade-lot, rgba(250, 81, 81, 0.1));
  border-color: rgba(250, 81, 81, 0.382);
  border-color: var(--o-danger-fade-some, rgba(250, 81, 81, 0.382)); }

.o-button-danger:hover {
  background-color: rgba(250, 81, 81, 0.618);
  border-color: rgba(250, 81, 81, 0.618);
  background-color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618));
  border-color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618));
  color: #fff; }

.o-button-danger:active {
  background-color: #f91f1f;
  border-color: #f91f1f;
  background-color: var(--o-danger-active, #f91f1f);
  border-color: var(--o-danger-active, #f91f1f);
  color: #fff; }

.loading {
  width: 1em;
  height: 1em;
  display: inline-block;
  animation: loading 1s steps(12, end) infinite;
  vertical-align: -0.125em; }

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

.o-button-medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px; }

.o-button-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px; }

.o-button-mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px; }

.o-button.is-round {
  border-radius: 20px; }

.o-button.is-circle {
  border-radius: 20px;
  padding: 12px; }

.o-button.is-disabled, .o-button.is-disabled:focus, .o-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5; }

.o-button.is-block {
  display: block;
  width: 100%; }
`


var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function (props) {
        var _a;
        return h("button", __assign({ disabled: props.disabled }, extractClass(props, 'o-button', (_a = {},
            _a['o-button-' + props.type] = props.type,
            _a['o-button-' + props.size] = props.size,
            _a['is-plain'] = props.plain,
            _a['is-round'] = props.round,
            _a['is-circle'] = props.circle,
            _a['is-disabled'] = props.disabled,
            _a['is-block'] = props.block,
            _a)), { type: props.nativeType }),
            props.loading && [h("svg", { class: "loading", viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "loading", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                    h("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" })), ' '],
            props.text,
            h("slot", null));
    };
    Button.css = css;
    Button.defaultProps = {
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        autofocus: false,
        nativeType: 'button',
        block: false
    };
    Button.propTypes = {
        size: String,
        type: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
        icon: String,
        autofocus: Boolean,
        nativeType: String,
        block: Boolean,
        text: String
    };
    Button = __decorate([
        tag('o-button')
    ], Button);
    return Button;
}(WeElement));

export default Button;
//# sourceMappingURL=index.esm.js.map
