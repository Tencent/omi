/**
 * @omiu/link v0.0.4 http://omijs.org
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
  box-sizing: border-box; }

.o-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid transparent; }

.o-link:hover {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-link.is-underline:hover {
  border-bottom: 1px solid #07c160;
  border-bottom: 1px solid var(--o-primary, #07c160); }

.o-link:active {
  color: #059048;
  color: var(--o-primary-active, #059048); }

.o-link-primary {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-link-primary:hover {
  color: rgba(7, 193, 96, 0.618);
  color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }

.o-link-primary:active {
  color: #059048;
  color: var(--o-primary-active, #059048); }

.o-link-primary.is-underline:hover {
  border-bottom: 1px solid rgba(7, 193, 96, 0.618);
  border-bottom: 1px solid var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }

.o-link-danger {
  color: #fa5151;
  color: var(--o-danger, #fa5151); }

.o-link-danger:hover {
  color: rgba(250, 81, 81, 0.618);
  color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618)); }

.o-link-danger:active {
  color: #f91f1f;
  color: var(--o-danger-active, #f91f1f); }

.o-link-danger.is-underline:hover {
  border-bottom: 1px solid rgba(250, 81, 81, 0.618);
  border-bottom: 1px solid var(--o-danger-fade-little, rgba(250, 81, 81, 0.618)); }

.o-link.is-disabled,
.o-link.is-disabled:focus,
.o-link.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  text-decoration: none;
  border-bottom: 1px solid transparent; }
`


var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.render = function (props) {
        var _a;
        return h("a", __assign({ disabled: props.disabled, href: props.href, target: props.target }, extractClass(props, 'o-link', (_a = {},
            _a['o-link-' + props.type] = props.type,
            _a['o-link-' + props.size] = props.size,
            _a['is-underline'] = props.underline,
            _a['is-disabled'] = props.disabled,
            _a))),
            h("span", null,
                h("slot", null)));
    };
    Link.css = css;
    Link.defaultProps = {
        underline: true,
        disabled: false
    };
    Link.propTypes = {
        type: String,
        disabled: Boolean,
        underline: Boolean,
        href: String,
        target: String
    };
    Link = __decorate([
        tag('o-link')
    ], Link);
    return Link;
}(WeElement));

export default Link;
//# sourceMappingURL=index.esm.js.map
