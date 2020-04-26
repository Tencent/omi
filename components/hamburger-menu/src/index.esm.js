/**
 * @omiu/hamburger-menu v0.0.5 http://omijs.org
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

a {
  text-decoration: none;
  cursor: pointer; }

.o-hamburger-menu .fixin {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  background-color: black;
  display: block;
  height: 2px;
  border-radius: 2px;
  margin: 5px 0;
  width: 26px; }

.o-hamburger-menu.active .top-bun {
  -moz-transform: rotate(45deg) translate(19%, 250%);
  -ms-transform: rotate(45deg) translate(19%, 250%);
  -o-transform: rotate(45deg) translate(19%, 250%);
  -webkit-transform: rotate(45deg) translate(19%, 250%);
  transform: rotate(45deg) translate(19%, 250%); }

.o-hamburger-menu.active .patty {
  opacity: 0; }

.o-hamburger-menu.active .bottom-bun {
  -moz-transform: rotate(-45deg) translate(19%, -250%);
  -ms-transform: rotate(-45deg) translate(19%, -250%);
  -o-transform: rotate(-45deg) translate(19%, -250%);
  -webkit-transform: rotate(-45deg) translate(19%, -250%);
  transform: rotate(-45deg) translate(19%, -250%); }
`


var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            _this.updateProps({
                active: !_this.props.active
            });
            _this.fire('change', _this.props.active);
        };
        return _this;
    }
    Button.prototype.render = function (props) {
        return h("a", __assign({ href: "javascript:", onClick: this.onClick }, extractClass(props, 'o-hamburger-menu', {
            'active': props.active,
        }), { "aria-label": props.ariaLabel }),
            h("span", { style: { backgroundColor: props.color }, class: "fixin top-bun" }),
            h("span", { style: { backgroundColor: props.color }, class: "fixin patty" }),
            h("span", { style: { backgroundColor: props.color }, class: "fixin bottom-bun" }));
    };
    Button.css = css;
    Button.defaultProps = {
        active: false,
        ariaLabel: '',
        color: 'black'
    };
    Button.propTypes = {
        active: Boolean,
        ariaLabel: String,
        color: String
    };
    Button = __decorate([
        tag('o-hamburger-menu')
    ], Button);
    return Button;
}(WeElement));

export default Button;
//# sourceMappingURL=index.esm.js.map
