/**
 * @omiu/message v0.0.2 http://omijs.org
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


var css = `.o-message__closeBtn:focus,
.o-message__content:focus {
  outline-width: 0; }

.o-message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #EBEEF5;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  -webkit-transition: opacity .3s, top .4s, -webkit-transform .4s;
  transition: opacity .3s, top .4s, -webkit-transform .4s;
  transition: opacity .3s, transform .4s, top .4s;
  transition: opacity .3s, transform .4s, top .4s, -webkit-transform .4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

.o-message.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }

.o-message.is-closable .o-message__content {
  padding-right: 16px; }

.o-message p {
  margin: 0; }

.o-message--info .o-message__content {
  color: #909399; }

.o-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8; }

.o-message--success .o-message__content {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8; }

.o-message--warning .o-message__content {
  color: #E6A23C; }

.o-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2; }

.o-message--error .o-message__content {
  color: #F56C6C; }

.o-message__icon {
  margin-right: 10px; }

.o-message__content {
  padding: 0;
  font-size: 14px;
  line-height: 1; }

.o-message__closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  color: #C0C4CC;
  font-size: 16px; }

.o-message__closeBtn:hover {
  color: #909399; }

.o-message .o-icon-success {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-message .o-icon-error {
  color: #F56C6C; }

.o-message .o-icon-info {
  color: #909399; }

.o-message .o-icon-warning {
  color: #E6A23C; }

.o-message-fade-enter,
.o-message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%); }
`


var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enter = true;
        return _this;
    }
    Message.prototype.installed = function () {
        var _this = this;
        setTimeout(function () {
            _this.enter = false;
            _this.update();
        });
        setTimeout(function () {
            _this.enter = true;
            _this.update();
        }, this.props.duration + 400);
        setTimeout(function () {
            _this.parentNode.removeChild(_this);
        }, this.props.duration + 400 + 400);
    };
    Message.prototype.render = function (props) {
        var _a;
        return h("div", __assign({}, extractClass(props, 'o-message', (_a = {},
            _a['o-message--' + props.type] = props.type,
            _a['is-closable'] = props.closable,
            _a['is-center'] = props.center,
            _a['o-message-fade-enter'] = this.enter,
            _a)), { style: "top: 20px; z-index: 2000;" }),
            h("p", { class: "o-message__content" }, props.message),
            props.showClose && h("i", { class: "o-message__closeBtn o-icon-close" }));
    };
    Message.css = css;
    Message.defaultProps = {
        duration: 3000
    };
    Message.propTypes = {
        showClose: Boolean,
        type: String,
        message: String,
        center: Boolean,
        duration: Number
    };
    Message = __decorate([
        tag('o-message')
    ], Message);
    return Message;
}(WeElement));

export default Message;
//# sourceMappingURL=index.esm.js.map
