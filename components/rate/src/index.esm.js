/**
 * @omiu/rate v0.0.10 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, classNames, tag, WeElement } from 'omi';

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

function __decorate$1(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @omiu/o-icon v0.0.1 http://omijs.org
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


var css$1 = `:host {
  display: inline-block; }

.o-icon {
  text-align: center;
  display: inline-block; }

.o-icon svg {
  display: inline-block;
  vertical-align: top; }

.rotate {
  display: inline-block;
  -webkit-animation: rotate 1s infinite linear;
  animation: rotate 1s infinite linear; }

i div {
  font-style: normal; }

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }
`;


/** @class */ ((function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function (props) {
        return (h("i", __assign({}, extractClass(props, 'o-icon')),
            h("svg", { viewBox: '0 0 ' + props.view + ' ' + props.view, class: classNames({ rotate: props.rotate }), width: props.scale + 'em', height: props.scale + 'em', fill: props.color, "aria-hidden": "true" }, props.paths ? (props.paths.map(function (item) {
                var attrs = { d: item.path, fill: props.color || 'black' };
                if (item.color)
                    attrs.fill = item.color;
                return h("path", __assign({}, attrs));
            })) : h("path", { d: props.path })),
            props.children && (h("div", { style: "color:" + (props.color || 'black') + ";" }, props.children[0]))));
    };
    Icon.css = css$1;
    Icon.defaultProps = {
        view: 1024,
        scale: 2
    };
    Icon.propTypes = {
        path: String,
        paths: Object,
        view: Number,
        scale: Number,
        color: String,
        rotate: Boolean
    };
    Icon = __decorate([
        tag('o-icon')
    ], Icon);
    return Icon;
})(WeElement));


var css = `.rate {
  position: absolute;
  left: 30px;
  top: 10px; }

.rating {
  overflow: hidden;
  float: left; }
`


var state = function (data, base) { return new Proxy(data, {
    set: function (target, propKey, value, receiver) {
        Reflect.set(target, propKey, value, receiver);
        base.update();
        return true;
    }
}); };
var Rate = /** @class */ (function (_super) {
    __extends$1(Rate, _super);
    function Rate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMousemove = function (evt) {
            if (!_this.props.disabled && !_this.props.readonly) {
                _this.state.value = evt.target.dataset['rate'];
            }
        };
        _this.handleMouseleave = function (evt) {
            if (!_this.props.disabled && !_this.props.readonly) {
                _this.state.value = _this.props.value;
            }
        };
        return _this;
    }
    Rate.prototype.install = function () {
        this.state = state({
            value: this.props.value
        }, this);
    };
    Rate.prototype.submit = function (index) {
        if (!this.props.disabled) {
            this.updateProps({
                value: index,
                readonly: !this.props.readonly
            });
        }
    };
    Rate.prototype.render = function (props) {
        var _this = this;
        var value = this.state.value;
        var arr = Array.from({ length: props.max * 2 - 1 }).reduce(function (pre, cur) { return __spreadArrays(pre, [pre[pre.length - 1] + 0.5]); }, [0.5]);
        var that = this;
        function getCls(value, max) {
            if (value <= max)
                return that.props.color;
            if (value > max)
                return '#ccc';
        }
        return (h("div", { class: "rate" }, arr.map(function (rate, index) { return (h("div", { class: "rating", style: { width: props.width / 2, paddingRight: (index % 2 == 0 ? 0 : props.width / 4) + "px" }, onMousemove: _this.handleMousemove, onMouseleave: _this.handleMouseleave, onClick: _this.submit.bind(_this, rate), "data-rate": rate },
            h("svg", { t: "1627617455331", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "1209", width: props.width, height: props.width, fill: getCls(rate, value), "data-rate": rate, style: { transform: "translateX(" + (index % 2 == 0 ? 0 : props.width / 2 * -1) + "px)" } },
                h("path", { d: "M964.685714 330.4l-290.171428-42.171429L544.8 25.257143c-3.542857-7.2-9.371429-13.028571-16.571429-16.571429-18.057143-8.914286-40-1.485714-49.028571 16.571429L349.485714 288.228571l-290.171428 42.171429c-8 1.142857-15.314286 4.914286-20.914286 10.628571a36.628571 36.628571 0 0 0 0.685714 51.771429l209.942857 204.685714-49.6 289.028572a36.514286 36.514286 0 0 0 53.028572 38.514285L512 788.571429l259.542857 136.457142c7.085714 3.771429 15.314286 5.028571 23.2 3.657143 19.885714-3.428571 33.257143-22.285714 29.828572-42.171428l-49.6-289.028572 209.942857-204.685714c5.714286-5.6 9.485714-12.914286 10.628571-20.914286 3.085714-20-10.857143-38.514286-30.857143-41.485714z", "p-id": "1210", "data-rate": rate })))); })));
    };
    Rate.css = css;
    Rate.defaultProps = {
        size: 10,
        value: 1,
        max: 10,
        half: true,
        disabled: false,
        readonly: false,
        color: '#f7e620',
        width: 32
    };
    Rate.propTypes = {
        value: Number,
        max: Number,
        half: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        icon: String,
        color: String,
        width: Number
    };
    Rate = __decorate$1([
        tag('o-rate')
    ], Rate);
    return Rate;
}(WeElement));

export { Rate as default };
//# sourceMappingURL=index.esm.js.map
