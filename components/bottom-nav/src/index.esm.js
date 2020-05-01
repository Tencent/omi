/**
 * @omiu/bottom-nav v0.0.2 http://omijs.org
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

.o-bottom-nav {
  height: 56px;
  display: flex;
  justify-content: center;
  background-color: #fff; }

.item.selected {
  color: #07c160; }

.item {
  flex: 1;
  color: rgba(0, 0, 0, 0.54);
  padding: 6px 12px 8px;
  max-width: 168px;
  min-width: 80px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

button {
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
  outline: none;
  border: none; }

.icon {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: block;
  margin: 0 auto;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased; }
`


var BottomNav = /** @class */ (function (_super) {
    __extends(BottomNav, _super);
    function BottomNav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickHandler = function (item) {
            _this.fire('item-click', item);
            if (!item.selected) {
                _this.props.items.forEach(function (_) { return _.selected = false; });
                item.selected = true;
                _this.fire('change', item);
                _this.update(true);
            }
        };
        return _this;
    }
    BottomNav.prototype.render = function (props) {
        var _this = this;
        return h("div", { class: "o-bottom-nav" }, props.items.map(function (item, index) {
            _this._iconTag = 'o-icon-' + item.icon;
            return h("button", __assign({ onClick: function (_) { _this.clickHandler(item); } }, extractClass({}, 'item', {
                'selected': item.selected
            }), (item.selected && props.selectedColor) ? { style: "color:" + props.selectedColor } : null, { tabindex: index }),
                h(_this._iconTag, { class: "icon" }),
                h("span", { class: "m-action-label" }, item.label));
        }));
    };
    BottomNav.css = css;
    BottomNav.defaultProps = {};
    BottomNav.propTypes = {
        selectedColor: String,
        items: Array
    };
    BottomNav = __decorate([
        tag('m-bottom-nav')
    ], BottomNav);
    return BottomNav;
}(WeElement));

export default BottomNav;
//# sourceMappingURL=index.esm.js.map
