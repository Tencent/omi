/**
 * @omiu/message v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { tag, WeElement, h, extractClass } from 'omi';

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

var extendStatics = function (d, b) {
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

var __assign = function () {
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

.fade-enter,
.fade-leave-active,
.fade-leave-to {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%); }
`


/**
 * @omiu/transition v0.0.5 http://omijs.org
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

var extendStatics$1 = function (d, b) {
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
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Transition.prototype.installed = function () {
    var _this = this;
    if (this.props.appear) {
      domReady(function () {
        _this.transitionTarget = _this.children[0];
        _this.enter();
        if (_this.props.leavingTime) {
          setTimeout(function () {
            _this.leave();
          }, _this.props.leavingTime);
        }
      });
    }
  };
  Transition.prototype.enter = function () {
    this.fire('before-enter');
    this.transitionTarget.classList.remove(this.props.name + '-leave-active');
    this.transitionTarget.classList.remove(this.props.name + '-leave-to');
    this.transitionTarget.classList.add(this.props.name + '-enter');
    this.transitionTarget.classList.add(this.props.name + '-enter-active');
    this.callback = function () {
      this.transitionTarget.classList.remove(this.props.name + '-enter-active');
      this.fire('after-enter');
    }.bind(this);
    this.once('transitionend', this.callback);
    this.once('animationend', this.callback);
    window.setTimeout(function () {
      this.transitionTarget.classList.remove(this.props.name + '-enter');
      this.transitionTarget.classList.add(this.props.name + '-enter-to');
      this.fire('enter');
    }.bind(this), 0);
  };
  Transition.prototype.leave = function () {
    this.fire('before-leave');
    this.transitionTarget.classList.remove(this.props.name + '-enter-active');
    this.transitionTarget.classList.remove(this.props.name + '-enter-to');
    this.transitionTarget.classList.add(this.props.name + '-leave');
    this.transitionTarget.classList.add(this.props.name + '-leave-active');
    this.callback = function (e) {
      this.transitionTarget.classList.remove(this.props.name + '-leave-active');
      this.fire('after-leave');
      if (this.props.autoRemove && this.parentNode) {
        this.parentNode.removeChild(this);
      }
    }.bind(this);
    this.once('transitionend', this.callback);
    this.once('animationend', this.callback);
    window.setTimeout(function () {
      this.transitionTarget.classList.remove(this.props.name + '-leave');
      this.transitionTarget.classList.add(this.props.name + '-leave-to');
      this.fire('leave');
    }.bind(this), 0);
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
  Transition.isLightDOM = true;
  Transition.defaultProps = {
    name: 'o'
  };
  Transition = __decorate$1([
    tag('o-transition')
  ], Transition);
  return Transition;
}(WeElement));

var Message = /** @class */ (function (_super) {
  __extends(Message, _super);
  function Message() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.onAfterLeave = function () {
      _this.parentElement.removeChild(_this);
    };
    return _this;
  }
  Message.prototype.render = function (props) {
    var _a;
    return (h("o-transition", { appear: true, "onafter-leave": this.onAfterLeave, "leaving-time": props.duration, "auto-remove": true, name: "fade" },
      h("div", __assign({}, extractClass(props, 'o-message', (_a = {},
        _a['o-message--' + props.type] = props.type,
        _a['is-closable'] = props.closable,
        _a['is-center'] = props.center,
        _a)), { style: "top: 20px; z-index: 2000;" }),
        h("p", { class: "o-message__content" }, props.message),
        props.showClose && h("i", { class: "o-message__closeBtn o-icon-close" }))));
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
