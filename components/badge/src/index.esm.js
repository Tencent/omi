/**
 * @omiu/badge v0.0.1 http://omijs.org
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


var css = `.o-badge {
  position: relative;
  display: inline-block; }

.badge {
  background-color: #F95050;
  color: #FFFFFF;
  line-height: 1.2;
  top: 0;
  right: 0;
  height: 20px;
  display: flex;
  padding: 0 4px;
  z-index: 1;
  position: absolute;
  flex-wrap: wrap;
  font-size: 0.75rem;
  min-width: 20px;
  transform: scale(1) translate(50%, -50%);
  box-sizing: border-box;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  align-content: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  transform-origin: 100% 0%; }

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  min-width: 8px;
  padding: 0; }
`


var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.installed = function () {
    };
    Badge.prototype.uninstall = function () {
    };
    Badge.prototype.render = function (props) {
        if (props.content) {
            return h("div", __assign({}, extractClass(props, 'o-badge')),
                props.children ? props.children[0] : h("slot", null),
                h("span", { class: "badge", style: "right:" + props.x * -1 + "px;top:" + props.y + "px;" }, props.content));
        }
        if (props.dot) {
            return (h("div", { class: "o-badge" },
                props.children ? props.children[0] : h("slot", null),
                h("span", { style: "right:" + props.x * -1 + "px;top:" + props.y + "px;", class: "circle badge" })));
        }
        return h("div", { class: "o-badge" }, props.children ? props.children[0] : h("slot", null));
    };
    Badge.css = css;
    Badge.defaultProps = {
        x: 0,
        y: 0
    };
    Badge.propTypes = {
        dot: Boolean,
        content: String,
        x: Number,
        y: Number
    };
    Badge = __decorate([
        tag('o-badge')
    ], Badge);
    return Badge;
}(WeElement));

export default Badge;
//# sourceMappingURL=index.esm.js.map
