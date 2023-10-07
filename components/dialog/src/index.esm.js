/**
 * @omiu/dialog v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { tag, WeElement, h } from 'omi';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var css_248z = ":host {\n  position: fixed;\n  z-index: 100000; }\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 100;\n  left: 0;\n  top: 0; }\n\n.o-dialog {\n  position: relative;\n  background: #FFF;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.o-dialog.is-fullscreen {\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 100%;\n  overflow: auto; }\n\n.o-dialog__wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  margin: 0; }\n\n.o-dialog__header {\n  padding: 20px 20px 10px; }\n\n.o-dialog__headerbtn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  background: 0 0;\n  border: none;\n  outline: 0;\n  cursor: pointer;\n  font-size: 16px; }\n\n.o-dialog__headerbtn .o-dialog__close {\n  color: #909399; }\n\n.o-dialog__headerbtn:focus .o-dialog__close,\n.o-dialog__headerbtn:hover .o-dialog__close {\n  color: #409EFF; }\n\n.o-dialog__title {\n  line-height: 24px;\n  font-size: 18px;\n  color: #303133; }\n\n.o-dialog__body {\n  padding: 30px 20px;\n  color: #606266;\n  font-size: 14px;\n  word-break: break-all; }\n\n.o-dialog__footer {\n  padding: 10px 20px 20px;\n  text-align: right;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-dialog--center {\n  text-align: center; }\n\n.o-dialog--center .o-dialog__body {\n  text-align: initial;\n  padding: 25px 25px 30px; }\n\n.o-dialog--center .o-dialog__footer {\n  text-align: inherit; }\n\n.dialog-zoom-enter-active {\n  -webkit-animation: dialog-zoom-in .3s;\n  animation: dialog-zoom-in .3s; }\n\n.dialog-zoom-leave-active {\n  -webkit-animation: dialog-zoom-out .3s;\n  animation: dialog-zoom-out .3s; }\n\n@-webkit-keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@-webkit-keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n@keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n.mask-enter-active {\n  -webkit-animation: mask-in .3s;\n  animation: mask-in .3s; }\n\n.mask-leave-active {\n  -webkit-animation: mask-out .3s;\n  animation: mask-out .3s; }\n\n@-webkit-keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.content {\n  z-index: 101; }\n";
var stylesheet = ":host {\n  position: fixed;\n  z-index: 100000; }\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 100;\n  left: 0;\n  top: 0; }\n\n.o-dialog {\n  position: relative;\n  background: #FFF;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.o-dialog.is-fullscreen {\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 100%;\n  overflow: auto; }\n\n.o-dialog__wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  margin: 0; }\n\n.o-dialog__header {\n  padding: 20px 20px 10px; }\n\n.o-dialog__headerbtn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  background: 0 0;\n  border: none;\n  outline: 0;\n  cursor: pointer;\n  font-size: 16px; }\n\n.o-dialog__headerbtn .o-dialog__close {\n  color: #909399; }\n\n.o-dialog__headerbtn:focus .o-dialog__close,\n.o-dialog__headerbtn:hover .o-dialog__close {\n  color: #409EFF; }\n\n.o-dialog__title {\n  line-height: 24px;\n  font-size: 18px;\n  color: #303133; }\n\n.o-dialog__body {\n  padding: 30px 20px;\n  color: #606266;\n  font-size: 14px;\n  word-break: break-all; }\n\n.o-dialog__footer {\n  padding: 10px 20px 20px;\n  text-align: right;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-dialog--center {\n  text-align: center; }\n\n.o-dialog--center .o-dialog__body {\n  text-align: initial;\n  padding: 25px 25px 30px; }\n\n.o-dialog--center .o-dialog__footer {\n  text-align: inherit; }\n\n.dialog-zoom-enter-active {\n  -webkit-animation: dialog-zoom-in .3s;\n  animation: dialog-zoom-in .3s; }\n\n.dialog-zoom-leave-active {\n  -webkit-animation: dialog-zoom-out .3s;\n  animation: dialog-zoom-out .3s; }\n\n@-webkit-keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@keyframes dialog-zoom-in {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@-webkit-keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n@keyframes dialog-zoom-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0; } }\n\n.mask-enter-active {\n  -webkit-animation: mask-in .3s;\n  animation: mask-in .3s; }\n\n.mask-leave-active {\n  -webkit-animation: mask-out .3s;\n  animation: mask-out .3s; }\n\n@-webkit-keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes mask-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes mask-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.content {\n  z-index: 101; }\n";

var css = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': css_248z,
  stylesheet: stylesheet
});

const readyCallbacks = [];
document.addEventListener("DOMContentLoaded", () => {
  domReady.done = true;
  readyCallbacks.forEach((callback) => {
    callback();
  });
});
function domReady(callback) {
  if (domReady.done) {
    callback();
    return;
  }
  readyCallbacks.push(callback);
}
domReady.done = false;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let Transition = class extends WeElement {
  constructor() {
    super(...arguments);
    this._show = true;
  }
  installed() {
    domReady(() => {
      if (this.props.appear) {
        this.enter();
      }
      if (this.props.leavingTime) {
        setTimeout(() => {
          this.leave();
        }, this.props.leavingTime);
      }
    });
  }
  receiveProps() {
    if (this.props.appear) {
      this.enter();
    }
    if (this.props.disappear) {
      this.leave();
    }
  }
  async toggle() {
    this._show = !this._show;
    if (this._show)
      return await this.enter();
    else
      return await this.leave();
  }
  async enter() {
    return new Promise((resolve) => {
      const el = this.children[0];
      if (el) {
        this.fire("before-enter");
        el.classList.remove(this.props.name + "-leave-active");
        el.classList.remove(this.props.name + "-leave-to");
        el.classList.add(this.props.name + "-enter-from");
        this.callback = function () {
          el.classList.remove(this.props.name + "-enter-active");
          this.fire("after-enter");
          this._show = true;
          resolve();
        }.bind(this);
        this.once("transitionend", this.callback);
        this.once("animationend", this.callback);
        window.setTimeout(function () {
          el.classList.add(this.props.name + "-enter-active");
          el.classList.remove(this.props.name + "-enter-from");
          el.classList.add(this.props.name + "-enter-to");
          this.fire("enter");
        }.bind(this), this.props.delay);
      }
    });
  }
  async leave() {
    return new Promise((resolve) => {
      const el = this.children[0];
      if (el) {
        this.fire("before-leave");
        el.classList.remove(this.props.name + "-enter-active");
        el.classList.remove(this.props.name + "-enter-to");
        el.classList.add(this.props.name + "-leave-from");
        this.callback = function (e) {
          el.classList.remove(this.props.name + "-leave-active");
          this.fire("after-leave");
          this._show = false;
          if (this.props.autoRemove && this.parentNode) {
            this.parentNode.removeChild(this);
          }
          resolve();
        }.bind(this);
        this.once("transitionend", this.callback);
        this.once("animationend", this.callback);
        window.setTimeout(function () {
          el.classList.add(this.props.name + "-leave-active");
          el.classList.remove(this.props.name + "-leave-from");
          el.classList.add(this.props.name + "-leave-to");
          this.fire("leave");
        }.bind(this), this.props.delay);
      }
    });
  }
  once(name, callback) {
    const wrapCall = function () {
      this.removeEventListener(name, wrapCall);
      callback();
    }.bind(this);
    this.addEventListener(name, wrapCall);
  }
  render() {
    return;
  }
};
Transition.propTypes = {
  name: String,
  leavingTime: Number,
  autoRemove: Boolean,
  appear: Boolean,
  disappear: Boolean,
  delay: Number
};
Transition.isLightDOM = true;
Transition.defaultProps = {
  name: "o",
  delay: 0
};
Transition = __decorateClass([
  tag("o-transition")
], Transition);

var Dialog = /** @class */ (function (_super) {
  __extends(Dialog, _super);
  function Dialog() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleMaskClick = function () {
      _this.fire('mask-click');
    };
    _this.close = function () {
      _this.rootElement.childNodes[0].leave();
      _this.rootElement.childNodes[1].leave();
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
    this.rootElement.childNodes[0].enter();
    this.rootElement.childNodes[1].enter();
    this.fire('open');
  };
  Dialog.prototype.render = function (props) {
    return (props.visible && h("div", { class: "o-dialog__wrapper" },
      h("o-transition", { "onafter-leave": this.onAfterLeave, appear: true, name: "dialog-zoom" },
        h("div", { class: "o-dialog__wrapper content" },
          h("div", { role: "dialog", "aria-modal": "true", "aria-label": props.title, class: "o-dialog", style: { width: props.width } },
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

export { Dialog as default };
//# sourceMappingURL=index.esm.js.map
