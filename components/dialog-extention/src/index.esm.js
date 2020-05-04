/**
 * @omiu/dialog-extention v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { tag, h, WeElement, extractClass, render } from 'omi';

var promptCss = /*#__PURE__*/Object.freeze({
  __proto__: null
});

/**
 * @omiu/dialog v0.0.2 http://omijs.org
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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  left: 0;
  top: 0; }

.o-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #FFF;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 50%; }

.o-dialog.is-fullscreen {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  height: 100%;
  overflow: auto; }

.o-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0; }

.o-dialog__header {
  padding: 20px 20px 10px; }

.o-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px; }

.o-dialog__headerbtn .o-dialog__close {
  color: #909399; }

.o-dialog__headerbtn:focus .o-dialog__close,
.o-dialog__headerbtn:hover .o-dialog__close {
  color: #409EFF; }

.o-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133; }

.o-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all; }

.o-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.o-dialog--center {
  text-align: center; }

.o-dialog--center .o-dialog__body {
  text-align: initial;
  padding: 25px 25px 30px; }

.o-dialog--center .o-dialog__footer {
  text-align: inherit; }

.dialog-fade-enter-active {
  -webkit-animation: dialog-fade-in .3s;
  animation: dialog-fade-in .3s; }

.dialog-fade-leave-active {
  -webkit-animation: dialog-fade-out .3s;
  animation: dialog-fade-out .3s; }

@-webkit-keyframes dialog-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0; }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1; } }

@keyframes dialog-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0; }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1; } }

@-webkit-keyframes dialog-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1; }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0; } }

@keyframes dialog-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1; }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0; } }

.mask-enter-active {
  -webkit-animation: mask-in .3s;
  animation: mask-in .3s; }

.mask-leave-active {
  -webkit-animation: mask-out .3s;
  animation: mask-out .3s; }

@-webkit-keyframes mask-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@keyframes mask-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@-webkit-keyframes mask-out {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes mask-out {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

.content {
  z-index: 101; }
`;


/**
 * @omiu/transition v0.0.7 http://omijs.org
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _dready_0_0_1_dready = createCommonjsModule(function (module, exports) {
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  }
}(commonjsGlobal, function () {

  const readyCallbacks = [];
  document.addEventListener('DOMContentLoaded', () => {
    domReady.done = true;
    readyCallbacks.forEach(callback => {
      callback();
    });
  });

  function domReady(callback) {
    if (domReady.done) {
      callback();
      return
    }
    readyCallbacks.push(callback);
  }

  domReady.done = false;


  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return domReady
}));
});

var _domReady = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _dready_0_0_1_dready,
    __moduleExports: _dready_0_0_1_dready
});

/**
 * o-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */
var domReady = _dready_0_0_1_dready || _domReady;
var Transition = /** @class */ (function (_super) {
    __extends$1(Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._show = true;
        return _this;
    }
    Transition.prototype.installed = function () {
        var _this = this;
        domReady(function () {
            if (_this.props.appear) {
                _this.enter();
            }
            if (_this.props.leavingTime) {
                setTimeout(function () {
                    _this.leave();
                }, _this.props.leavingTime);
            }
        });
    };
    Transition.prototype.toggle = function () {
        this._show = !this._show;
        if (this._show)
            this.enter();
        else
            this.leave();
    };
    Transition.prototype.enter = function () {
        var el = this.children[0];
        if (el) {
            this.fire('before-enter');
            el.classList.remove(this.props.name + '-leave-active');
            el.classList.remove(this.props.name + '-leave-to');
            el.classList.add(this.props.name + '-enter');
            el.classList.add(this.props.name + '-enter-active');
            this.callback = function () {
                el.classList.remove(this.props.name + '-enter-active');
                this.fire('after-enter');
                this._show = true;
            }.bind(this);
            this.once('transitionend', this.callback);
            this.once('animationend', this.callback);
            window.setTimeout(function () {
                el.classList.remove(this.props.name + '-enter');
                el.classList.add(this.props.name + '-enter-to');
                this.fire('enter');
            }.bind(this), 0);
        }
    };
    Transition.prototype.leave = function () {
        var el = this.children[0];
        if (el) {
            this.fire('before-leave');
            el.classList.remove(this.props.name + '-enter-active');
            el.classList.remove(this.props.name + '-enter-to');
            el.classList.add(this.props.name + '-leave');
            el.classList.add(this.props.name + '-leave-active');
            this.callback = function (e) {
                el.classList.remove(this.props.name + '-leave-active');
                this.fire('after-leave');
                this._show = false;
                if (this.props.autoRemove && this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }.bind(this);
            this.once('transitionend', this.callback);
            this.once('animationend', this.callback);
            window.setTimeout(function () {
                el.classList.remove(this.props.name + '-leave');
                el.classList.add(this.props.name + '-leave-to');
                this.fire('leave');
            }.bind(this), 0);
        }
    };
    Transition.prototype.once = function (name, callback) {
        var wrapCall = function () {
            this.removeEventListener(name, wrapCall);
            callback();
        }.bind(this);
        this.addEventListener(name, wrapCall);
    };
    Transition.prototype.render = function () {
        return;
    };
    Transition.propTypes = {
        name: String,
        leavingTime: Number,
        autoRemove: Boolean,
        appear: Boolean
    };
    Transition.isLightDom = true;
    Transition.defaultProps = {
        name: 'o'
    };
    Transition = __decorate$1([
        tag('o-transition')
    ], Transition);
    return Transition;
}(WeElement));

var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMaskClick = function () {
            _this.fire('mask-click');
        };
        _this.close = function () {
            _this.rootNode.childNodes[0].leave();
            _this.rootNode.childNodes[1].leave();
            _this.fire('close');
        };
        _this.onAfterLeave = function () {
            _this.updateProps({ visible: false });
        };
        return _this;
    }
    Dialog.prototype.open = function () {
        this.updateProps({
            visible: true
        });
        this.rootNode.childNodes[0].enter();
        this.rootNode.childNodes[1].enter();
        this.fire('open');
    };
    Dialog.prototype.render = function (props) {
        return (props.visible && h("div", { class: "o-dialog__wrapper" },
            h("o-transition", { "onafter-leave": this.onAfterLeave, appear: true, name: "dialog-fade" },
                h("div", { class: "o-dialog__wrapper content" },
                    h("div", { role: "dialog", "aria-modal": "true", "aria-label": props.title, class: "o-dialog", style: { width: props.width, marginTop: "15vh" } },
                        h("div", { class: "o-dialog__header" },
                            h("span", { class: "o-dialog__title" }, props.title),
                            h("button", { type: "button", "aria-label": "Close", class: "o-dialog__headerbtn" },
                                h("svg", { onClick: this.close, class: "o-dialog__close o-icon o-icon-close", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                    h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))),
                        h("div", { class: "o-dialog__body" },
                            h("slot", null)),
                        h("div", { class: "o-dialog__footer" },
                            h("slot", { name: "footer" }))))),
            h("o-transition", { appear: true, name: "mask" },
                h("div", { class: "mask", onClick: this.handleMaskClick }))));
    };
    Dialog.css = css;
    Dialog.defaultProps = {
        visible: false,
        width: '50%'
    };
    Dialog.propTypes = {
        visible: Boolean,
        title: String,
        width: String
    };
    Dialog = __decorate([
        tag('o-dialog')
    ], Dialog);
    return Dialog;
}(WeElement));

/**
 * @omiu/button v0.0.8 http://omijs.org
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

var extendStatics$2 = function(d, b) {
    extendStatics$2 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$2(d, b);
};

function __extends$2(d, b) {
    extendStatics$2(d, b);
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

function __decorate$2(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css$1 = `:host {
  display: inline-block; }

:host([block]) {
  display: block; }

.o-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px; }

.o-button:hover {
  border-color: rgba(7, 193, 96, 0.382);
  border-color: var(--o-primary-hover-border, rgba(7, 193, 96, 0.382));
  color: #07c160;
  color: var(--o-primary, #07c160);
  background-color: rgba(7, 193, 96, 0.1);
  background-color: var(--o-primary-hover-bg, rgba(7, 193, 96, 0.1)); }

.o-button:active {
  color: #07c160;
  color: var(--o-primary, #07c160);
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  outline: none; }

.o-button-primary {
  color: #fff;
  background-color: #07c160;
  border-color: #07c160;
  background-color: var(--o-primary, #07c160);
  border-color: var(--o-primary, #07c160); }

.o-button-primary.is-plain {
  color: #07c160;
  color: var(--o-primary, #07c160);
  background-color: rgba(7, 193, 96, 0.1);
  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));
  border-color: rgba(7, 193, 96, 0.382);
  border-color: var(--o-primary-fade-some, rgba(7, 193, 96, 0.382)); }

.o-button-primary:hover {
  background-color: rgba(7, 193, 96, 0.618);
  border-color: rgba(7, 193, 96, 0.618);
  background-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618));
  border-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618));
  color: #fff; }

.o-button-primary:active {
  background-color: #059048;
  border-color: #059048;
  background-color: var(--o-primary-active, #059048);
  border-color: var(--o-primary-active, #059048);
  color: #fff; }

.o-button-danger {
  color: #fff;
  background-color: #fa5151;
  border-color: #fa5151;
  background-color: var(--o-danger, #fa5151);
  border-color: var(--o-danger, #fa5151); }

.o-button-danger.is-plain {
  color: #fa5151;
  color: var(--o-danger, #fa5151);
  background-color: rgba(250, 81, 81, 0.1);
  background-color: var(--o-danger-fade-lot, rgba(250, 81, 81, 0.1));
  border-color: rgba(250, 81, 81, 0.382);
  border-color: var(--o-danger-fade-some, rgba(250, 81, 81, 0.382)); }

.o-button-danger:hover {
  background-color: rgba(250, 81, 81, 0.618);
  border-color: rgba(250, 81, 81, 0.618);
  background-color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618));
  border-color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618));
  color: #fff; }

.o-button-danger:active {
  background-color: #f91f1f;
  border-color: #f91f1f;
  background-color: var(--o-danger-active, #f91f1f);
  border-color: var(--o-danger-active, #f91f1f);
  color: #fff; }

.loading {
  width: 1em;
  height: 1em;
  display: inline-block;
  animation: loading 1s steps(12, end) infinite;
  vertical-align: -0.125em; }

@-webkit-keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg); }
  100% {
    transform: rotate3d(0, 0, 1, 360deg); } }

@keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg); }
  100% {
    transform: rotate3d(0, 0, 1, 360deg); } }

.o-button-medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px; }

.o-button-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px; }

.o-button-mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px; }

.o-button.is-round {
  border-radius: 20px; }

.o-button.is-circle {
  border-radius: 20px;
  padding: 12px; }

.o-button.is-disabled, .o-button.is-disabled:focus, .o-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5; }

.o-button.is-block {
  display: block;
  width: 100%; }
`;


var Button = /** @class */ (function (_super) {
    __extends$2(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function (props) {
        var _a;
        return h("button", __assign({ disabled: props.disabled }, extractClass(props, 'o-button', (_a = {},
            _a['o-button-' + props.type] = props.type,
            _a['o-button-' + props.size] = props.size,
            _a['is-plain'] = props.plain,
            _a['is-round'] = props.round,
            _a['is-circle'] = props.circle,
            _a['is-disabled'] = props.disabled,
            _a['is-block'] = props.block,
            _a)), { type: props.nativeType }),
            props.loading && [h("svg", { class: "loading", viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "loading", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                    h("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" })), ' '],
            props.text,
            h("slot", null));
    };
    Button.css = css$1;
    Button.defaultProps = {
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        autofocus: false,
        nativeType: 'button',
        block: false
    };
    Button.propTypes = {
        size: String,
        type: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
        icon: String,
        autofocus: Boolean,
        nativeType: String,
        block: Boolean,
        text: String
    };
    Button = __decorate$2([
        tag('o-button')
    ], Button);
    return Button;
}(WeElement));

/**
 * @omiu/input v0.0.6 http://omijs.org
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

var extendStatics$3 = function(d, b) {
    extendStatics$3 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$3(d, b);
};

function __extends$3(d, b) {
    extendStatics$3(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
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

function __decorate$3(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css$2 = `:host {
  display: inline-block; }

:host([block]) {
  display: block; }

.o-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px; }

.o-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #FFF;
  background-image: none;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea__inner:hover {
  border-color: #C0C4CC; }

.o-textarea__inner:focus {
  outline: 0;
  border-color: #07c160;
  border-color: var(--o-primary, #07c160); }

.o-textarea .o-input__count {
  color: #909399;
  background: #FFF;
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  right: 10px; }

.o-textarea.is-disabled .o-textarea__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-textarea.is-disabled .o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea.is-exceed .o-textarea__inner {
  border-color: #F56C6C; }

.o-textarea.is-exceed .o-input__count {
  color: #F56C6C; }

.o-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%; }

.o-input::-webkit-scrollbar {
  z-index: 11;
  width: 6px; }

.o-input::-webkit-scrollbar:horizontal {
  height: 6px; }

.o-input::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc; }

.o-input::-webkit-scrollbar-corner {
  background: #fff; }

.o-input::-webkit-scrollbar-track {
  background: #fff; }

.o-input::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px; }

.o-input .o-input__clear {
  color: #C0C4CC;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-input .o-input__clear:hover {
  color: #909399; }

.o-input .o-input__count {
  height: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #909399;
  font-size: 12px; }

.o-input .o-input__count .o-input__count-inner {
  background: #FFF;
  line-height: initial;
  display: inline-block;
  padding: 0 5px; }

.o-input__inner {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%; }

.o-input__prefix,
.o-input__suffix {
  position: absolute;
  top: 0;
  -webkit-transition: all .3s;
  text-align: center;
  height: 100%;
  color: #C0C4CC; }

.o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input__inner:hover {
  border-color: #C0C4CC; }

.o-input.is-active .o-input__inner,
.o-input__inner:focus {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  outline: 0; }

.o-input__suffix {
  right: 5px;
  transition: all .3s;
  pointer-events: none; }

.o-input__suffix-inner {
  pointer-events: all; }

.o-input__prefix {
  left: 5px;
  transition: all .3s; }

.o-input__icon {
  position: absolute;
  width: 35px;
  height: 100%;
  right: 0;
  top: 0;
  padding-top: 0.215em;
  text-align: center;
  color: #bfcbd9;
  transition: all .3s; }

.o-input--small .o-input__icon,
.o-input--medium .o-input__icon {
  padding-top: 0.135em; }

.o-input--mini .o-input__icon {
  padding-top: 0.125em; }

.o-input__icon.is-prefix {
  left: 0; }

.o-input.o-input-prefix input {
  padding-left: 30px; }

.o-input.o-input-suffix input {
  padding-right: 30px; }

.o-input__icon:after {
  content: '';
  height: 100%;
  width: 0;
  display: inline-block;
  vertical-align: middle; }

.o-input__validateIcon {
  pointer-events: none; }

.o-input.is-disabled .o-input__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-input.is-disabled .o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__icon {
  cursor: not-allowed; }

.o-input.is-exceed .o-input__inner {
  border-color: #F56C6C; }

.o-input.is-exceed .o-input__suffix .o-input__count {
  color: #F56C6C; }

.o-input--suffix .o-input__inner {
  padding-right: 30px; }

.o-input--prefix .o-input__inner {
  padding-left: 30px; }

.o-input--medium {
  font-size: 14px; }

.o-input--medium .o-input__inner {
  height: 36px;
  line-height: 36px; }

.o-input--medium .o-input__icon {
  line-height: 36px; }

.o-input--small {
  font-size: 13px; }

.o-input--small .o-input__inner {
  height: 32px;
  line-height: 32px; }

.o-input--small .o-input__icon {
  line-height: 32px; }

.o-input--mini {
  font-size: 12px; }

.o-input--mini .o-input__inner {
  height: 28px;
  line-height: 28px; }

.o-input--mini .o-input__icon {
  line-height: 28px; }

.o-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0; }

.o-input-group > .o-input__inner {
  vertical-align: middle;
  display: table-cell; }

.o-input-group__append,
.o-input-group__prepend {
  background-color: #F5F7FA;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap; }

.o-input-group--prepend .o-input__inner,
.o-input-group__append {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0; }

.o-input-group--append .o-input__inner,
.o-input-group__prepend {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; }

.o-input-group__append:focus,
.o-input-group__prepend:focus {
  outline: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-select,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-select {
  display: inline-block;
  margin: -10px -20px; }

.o-input-group__append button.o-button,
.o-input-group__append div.o-select .o-input__inner,
.o-input-group__append div.o-select:hover .o-input__inner,
.o-input-group__prepend button.o-button,
.o-input-group__prepend div.o-select .o-input__inner,
.o-input-group__prepend div.o-select:hover .o-input__inner {
  border-color: transparent;
  background-color: transparent;
  color: inherit;
  border-top: 0;
  border-bottom: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-input,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-input {
  font-size: inherit; }

.o-input-group__prepend {
  border-right: 0; }

.o-input-group__append {
  border-left: 0; }

.o-input-group--append .o-select .o-input.is-focus .o-input__inner,
.o-input-group--prepend .o-select .o-input.is-focus .o-input__inner {
  border-color: transparent; }

.o-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0; }

.o-icon-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -0.5em;
  cursor: pointer;
  color: #bfcbd9;
  display: none;
  border-radius: 50%;
  width: 1em;
  height: 1em; }

.o-icon-clear:hover {
  background: #b1b4b9;
  color: white; }

.o-input:hover .o-icon-clear {
  display: block;
  cursor: pointer; }

.o-input .o-input__count {
  position: absolute;
  top: 0px;
  right: 4px; }

.o-input.is-block {
  display: block;
  width: 100%; }
`;


var Input = /** @class */ (function (_super) {
    __extends$3(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueLength = 0;
        _this.handleBlur = function () {
            _this.fire('blur', _this.props.value);
        };
        _this.handleFocus = function () {
            _this.fire('focus', _this.props.value);
        };
        _this.handleChange = function (evt) {
            _this.props.value = evt.target.value;
            _this.fire('change', _this.props.value);
        };
        _this.handleInput = function (evt) {
            evt.stopPropagation();
            _this.props.value = evt.target.value;
            _this.fire('input', _this.props.value);
            if (_this.props.maxLength) {
                _this.valueLength = evt.target.value.length;
                _this.update();
            }
        };
        _this.clearInput = function () {
            _this.updateProps({
                value: ''
            });
        };
        return _this;
    }
    Input.prototype.focus = function () {
        this.shadowRoot.querySelector('input').focus();
    };
    Input.prototype.blur = function () {
        this.shadowRoot.querySelector('input').blur();
    };
    Input.prototype.render = function (props) {
        var _a;
        var type = props.type, size = props.size, suffixIcon = props.suffixIcon, prefixIcon = props.prefixIcon, autoComplete = props.autoComplete, validating = props.validating, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, trim = props.trim, otherProps = __rest(props, ["type", "size", "suffixIcon", "prefixIcon", "autoComplete", "validating", "onMouseEnter", "onMouseLeave", "trim"]);
        this._tempTagName = 'o-icon-' + (suffixIcon || prefixIcon);
        return (h("div", __assign$1({}, extractClass(props, 'o-input', (_a = {},
            _a["o-input--" + size] = props.size,
            _a['is-disabled'] = this.props.disabled,
            _a['o-input-suffix'] = suffixIcon,
            _a['o-input-prefix'] = prefixIcon,
            _a['is-block'] = props.block,
            _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
            (prefixIcon || suffixIcon) && h(this._tempTagName, __assign$1({ css: "svg{\n            width: 1em;\n          }" }, extractClass(props, 'o-input__icon', {
                'is-prefix': prefixIcon,
                'is-suffix': suffixIcon
            }))),
            h("input", __assign$1({}, otherProps, { 
                // ref="input"
                type: type, className: "o-input__inner", autocomplete: autoComplete, maxLength: props.maxLength, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput })),
            props.clearable && h("svg", { onClick: this.clearInput, class: "o-icon-clear", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })),
            props.maxLength && h("span", { class: "o-input__count" },
                h("span", { class: "o-input__count-inner" },
                    this.valueLength,
                    "/",
                    props.maxLength))));
    };
    Input.css = css$2;
    Input.defaultProps = {
        type: 'text',
        autosize: false,
        rows: 2,
        trim: false,
        autoComplete: 'off',
        block: false
    };
    Input.propTypes = {
        disabled: Boolean,
        type: String,
        placeholder: String,
        clearable: Boolean,
        suffixIcon: String,
        size: String,
        prefixIcon: String,
        maxLength: Number,
        autoComplete: String,
        block: Boolean
    };
    Input = __decorate$3([
        tag('o-input')
    ], Input);
    return Input;
}(WeElement));

var dialog;
function alert(options) {
    if (dialog && dialog.parentNode)
        dialog.parentNode.removeChild(dialog);
    dialog = render(h("o-dialog", { css: promptCss, title: options.title, visible: true },
        h("span", null, options.msg),
        h("span", { slot: "footer", class: "dialog-footer" },
            h("o-button", { onclick: function (_) {
                    dialog.close();
                    options.onConfirm();
                }, type: "primary", size: "small" }, options.confirmButtonText))), document.body);
}
function confirm(options) {
    if (dialog && dialog.parentNode)
        dialog.parentNode.removeChild(dialog);
    dialog = render(h("o-dialog", { css: promptCss, title: options.title, visible: true },
        h("span", null, options.msg),
        h("span", { slot: "footer", class: "dialog-footer" },
            h("o-button", { style: "margin-right:10px;", onclick: function (_) {
                    dialog.close();
                    options.onCancel();
                }, plain: true, size: "small" }, options.cancelButtonText),
            h("o-button", { onclick: function (_) {
                    dialog.close();
                    options.onConfirm();
                }, type: "primary", size: "small" }, options.confirmButtonText))), document.body);
}
var temp;
function prompt(options) {
    temp = '';
    if (dialog && dialog.parentNode)
        dialog.parentNode.removeChild(dialog);
    dialog = render(h("o-dialog", { css: promptCss, title: options.title, visible: true },
        h("div", { style: "margin: 10px 0;" }, options.msg),
        h("o-input", { oninput: function (evt) {
                temp = evt.detail;
            }, block: true, style: "margin-bottom:10px;" }),
        h("span", { slot: "footer", class: "dialog-footer" },
            h("o-button", { style: "margin-right:10px;", onclick: function (_) {
                    dialog.close();
                    options.onCancel();
                }, plain: true, size: "small" }, options.cancelButtonText),
            h("o-button", { onclick: function (_) {
                    dialog.close();
                    options.onConfirm(temp);
                }, type: "primary", size: "small" }, options.confirmButtonText))), document.body);
    var inputs = document.querySelectorAll('o-input');
    inputs[inputs.length - 1].focus();
}
if (typeof window !== 'undefined') {
    if (typeof window.Omiu !== 'undefined') {
        window.Omiu.alert = alert;
        window.Omiu.confirm = confirm;
        window.Omiu.confirm = prompt;
    }
    else {
        window.Omiu = {
            alert: alert,
            confirm: confirm,
            prompt: prompt
        };
    }
}
//# sourceMappingURL=index.esm.js.map
