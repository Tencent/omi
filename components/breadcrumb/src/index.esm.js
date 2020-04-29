/**
 * @omiu/breadcrumb v0.0.3 http://omijs.org
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

ol {
  list-style-type: decimal;
  font-size: 14px;
  padding: 0;
  margin: 0; }

li {
  list-style: none;
  display: inline-block;
  color: rgba(0, 0, 0, 0.45);
  vertical-align: middle; }

.breadcrumb-li a {
  color: rgba(0, 0, 0, 0.45); }

a {
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  line-height: 20px;
  height: 20px; }

.split {
  margin: 0 8px; }

.current {
  color: rgba(0, 0, 0, 0.7);
  vertical-align: middle;
  line-height: 20px;
  height: 20px; }

.icon {
  vertical-align: -0.2em; }
`


var Breadcrumb = /** @class */ (function (_super) {
    __extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function (props) {
        var _this = this;
        var items = [];
        props.items.forEach(function (item, index) {
            _this._tempIcon = null;
            if (item.icon) {
                _this._tempIcon = 'o-icon-' + item.icon;
            }
            if (index !== props.items.length - 1) {
                items.push(h("li", { class: "breadcrumb-li" },
                    item.icon && h(_this._tempIcon, { class: "icon" }),
                    h("a", { class: "", href: item.href }, item.text)), h("li", { class: 'split' }, props.split));
            }
            else {
                items.push(h("li", { class: "current" },
                    item.icon && h(_this._tempIcon, { class: "icon" }),
                    item.text));
            }
        });
        return (h("nav", __assign({}, extractClass(props, 'o-breadcrumb')),
            h("ol", { class: "breadcrumb-ol" }, items)));
    };
    Breadcrumb.css = css;
    Breadcrumb.defaultProps = {
        split: '/'
    };
    Breadcrumb.propTypes = {
        items: Array,
        split: String
    };
    Breadcrumb = __decorate([
        tag('o-breadcrumb')
    ], Breadcrumb);
    return Breadcrumb;
}(WeElement));

export default Breadcrumb;
//# sourceMappingURL=index.esm.js.map
