/**
 * @omiu/action-sheet v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { classNames, h, tag, WeElement } from 'omi';

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `.o-actionsheet {
  position: fixed;
  left: 0;
  bottom: 0;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 5000;
  width: 100%;
  background-color: #EFEFF4;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s; }

.o-actionsheet__title {
  position: relative;
  height: 65px;
  padding: 0 20px;
  line-height: 1.4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  color: #808080;
  background: #FCFCFD; }

.o-actionsheet__title:before {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5); }

.o-actionsheet__title .o-actionsheet__title-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; }

.o-actionsheet__menu {
  background-color: #FCFCFD; }

.o-actionsheet__action {
  margin-top: 6px;
  background-color: #FCFCFD; }

.o-actionsheet__cell {
  position: relative;
  padding: 10px 0;
  text-align: center;
  font-size: 18px; }

.o-actionsheet__cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5); }

.o-actionsheet__cell:active {
  background-color: #ECECEC; }

.o-actionsheet__cell:first-child:before {
  display: none; }

.o-skin_android .o-actionsheet {
  position: fixed;
  left: 50%;
  top: 50%;
  bottom: auto;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 274px;
  box-sizing: border-box;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: transparent;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s; }

.o-skin_android .o-actionsheet__action {
  display: none; }

.o-skin_android .o-actionsheet__menu {
  border-radius: 2px;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1); }

.o-skin_android .o-actionsheet__cell {
  padding: 13px 24px;
  font-size: 16px;
  line-height: 1.4;
  text-align: left; }

.o-skin_android .o-actionsheet__cell:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px; }

.o-skin_android .o-actionsheet__cell:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px; }

.o-actionsheet_toggle {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0); }

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: 100;
  left: 0;
  top: 0; }

.o-skin_android .o-actionsheet_toggle {
  opacity: 1 !important;
  top: 50% !important;
  bottom: auto !important; }

.o-skin_android .o-actionsheet {
  opacity: 0;
  transition: opacity .3s;
  top: 150%;
  bottom: 0; }
`


var ActionSheet = /** @class */ (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMaskClick = function (e) {
            _this.hide();
            _this.fire('close');
        };
        return _this;
    }
    ActionSheet.prototype.renderMenuItem = function () {
        var _this = this;
        return this.props.menus.map(function (menu, idx) {
            var _a;
            var label = menu.label, className = menu.className, others = __rest(menu, ["label", "className"]);
            var cls = classNames((_a = {
                    'o-actionsheet__cell': true
                },
                _a[className] = className,
                _a));
            return (h("div", __assign({ key: idx, onClick: function (_) {
                    _this.hide();
                    _this.fire('item-click', menu);
                } }, others, { class: cls }), label));
        });
    };
    ActionSheet.prototype.show = function () {
        this.updateProps({
            show: true
        });
    };
    ActionSheet.prototype.hide = function () {
        this.updateProps({
            show: false
        });
    };
    ActionSheet.prototype.renderActions = function () {
        var _this = this;
        return this.props.actions.map(function (action, idx) {
            var _a;
            var label = action.label, className = action.className, others = __rest(action, ["label", "className"]);
            var cls = classNames((_a = {
                    'o-actionsheet__cell': true
                },
                _a[className] = className,
                _a));
            return (h("div", __assign({ key: idx }, others, { onClick: function (_) {
                    _this.hide();
                    _this.fire('item-click', action);
                }, className: cls }), label));
        });
    };
    ActionSheet.prototype.render = function () {
        var _a = this.props, show = _a.show, type = _a.type, menus = _a.menus, actions = _a.actions, others = __rest(_a, ["show", "type", "menus", "actions"]);
        var cls = classNames({
            'o-actionsheet': true,
            'o-actionsheet_toggle': show
        });
        var styleType = type ? type : 'ios';
        return (h("div", { className: styleType === 'android' ? 'o-skin_android' : '' },
            h("div", { class: "mask", style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
            h("div", __assign({ className: cls }, others),
                h("div", { className: "o-actionsheet__menu" }, this.renderMenuItem()),
                h("div", { className: "o-actionsheet__action" }, this.renderActions()))));
    };
    ActionSheet.css = css;
    ActionSheet.defaultProps = {
        type: '',
        menus: [],
        actions: [],
        show: false
    };
    ActionSheet.propTypes = {
        type: String,
        menus: Array,
        actions: Array,
        show: Boolean
    };
    ActionSheet = __decorate([
        tag('o-action-sheet')
    ], ActionSheet);
    return ActionSheet;
}(WeElement));

export default ActionSheet;
//# sourceMappingURL=index.esm.js.map
