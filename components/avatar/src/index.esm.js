/**
 * @omiu/avatar v0.0.1 http://omijs.org
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

img {
  width: 100%;
  height: 100%; }

.o-avatar.square {
  border-radius: 4px; }

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased; }

.o-avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  background-color: #ccc;
  color: white;
  border-radius: 50%;
  overflow: hidden; }

.o-avatar .material-icons {
  line-height: 40px; }
`


var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    function Avatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avatar.prototype.render = function (props) {
        this._iconTag = 'o-icon-' + props.icon;
        return (h("div", __assign({}, extractClass(props, 'o-avatar', {
            'square': props.square
        }), { style: {
                width: props.size + 'px',
                height: props.size + 'px',
                backgroundColor: props.backgroundColor,
                lineHeight: props.size + 'px'
            } }), props.icon ? h(this._iconTag, { class: "material-icons mdc-icon-button__icon", style: { lineHeight: (props.size + 6) + 'px', color: props.color } }) : (props.src ?
            h("img", { alt: props.alt, src: props.src }) :
            props.children ? props.children : h("slot", null))));
    };
    Avatar.css = css;
    Avatar.defaultProps = {
        size: 40,
        color: 'white',
        backgroundColor: '#ccc'
    };
    Avatar.propTypes = {
        alt: String,
        src: String,
        size: Number,
        square: Boolean,
        icon: String,
        color: String,
        backgroundColor: String
    };
    Avatar = __decorate([
        tag('o-avatar')
    ], Avatar);
    return Avatar;
}(WeElement));

export default Avatar;
//# sourceMappingURL=index.esm.js.map
