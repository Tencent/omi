/**
 * @omiu/toast v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, tag, WeElement, extractClass } from 'omi';

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

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    extendStatics$1(d, b);
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

function __decorate$1(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var css$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

/**
 * @omiu/loading v0.0.2 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `:host {
  display: inline-block; }

.o-root {
  display: inline-block;
  line-height: 1;
  color: #07c160; }

.o-static {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-indeterminate {
  animation: o-rotate 1.4s linear infinite; }

.o-circle {
  stroke: currentColor; }

.o-circleStatic {
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-circleIndeterminate {
  animation: mui-progress-circular-dash 1.4s ease-in-out infinite;
  animation-name: o-keyframes-mui-progress-circular-dash;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px; }

@-webkit-keyframes o-rotate {
  100% {
    transform: rotate(360deg); } }

@-webkit-keyframes o-keyframes-mui-progress-circular-dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px; }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px; }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px; } }

.o-circleDisableShrink {
  animation: none; }
`;


/** @class */ ((function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.render = function (props) {
        return (h("div", { class: "o-root o-colorPrimary o-indeterminate", role: "progressbar", style: "width: " + props.size + "px; height: " + props.size + "px;" + (props.color ? "color:" + props.color + ";" : '') },
            h("svg", { class: "o-svg", viewBox: "22 22 44 44" },
                h("circle", { class: "o-circle o-circleIndeterminate", cx: "44", cy: "44", r: "20.2", fill: "none", "stroke-width": "3.6" }))));
    };
    Loading.css = css;
    Loading.defaultProps = {
        size: 40
    };
    Loading.propTypes = {
        size: Number,
        color: String
    };
    Loading = __decorate([
        tag('o-loading')
    ], Loading);
    return Loading;
})(WeElement));

var Button = /** @class */ (function (_super) {
    __extends$1(Button, _super);
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
                props.loading && h("o-loading", { size: 40, color: "white" }),
                props.done && h("i", { class: "o-done" }),
                h("p", { class: "o-toast-content" }, props.label))
        ];
    };
    Button.css = css$1;
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
    Button = __decorate$1([
        tag('o-toast')
    ], Button);
    return Button;
}(WeElement));

export default Button;
//# sourceMappingURL=index.esm.js.map
