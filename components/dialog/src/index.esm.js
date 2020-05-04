/**
 * @omiu/dialog v0.0.2 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { tag, WeElement, h } from 'omi';

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
`


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

export default Dialog;
//# sourceMappingURL=index.esm.js.map
