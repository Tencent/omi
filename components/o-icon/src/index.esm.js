/**
 * @omiu/o-icon v0.0.1 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, classNames, tag, WeElement } from 'omi';

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
`


var Icon = /** @class */ (function (_super) {
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
    Icon.css = css;
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
}(WeElement));

export default Icon;
//# sourceMappingURL=index.esm.js.map
