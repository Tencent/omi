/**
 * @omiu/toast v0.0.9 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, tag, WeElement, extractClass } from 'omi';

/******************************************************************************
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

var extendStatics$2 = function (d, b) {
    extendStatics$2 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics$2(d, b);
};

function __extends$2(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$2(d, b);
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

function __decorate$2(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var css$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

/**
 * @omiu/loading v0.0.2 http://omijs.org
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


var css = `:host {
  display: inline-block; }

.o-root {
  display: inline-block;
  line-height: 1;
  color: #07c160; }

.o-static {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-indeterminate {
  animation: o-rotate 1.4s linear infinite; }

.o-circle {
  stroke: currentColor; }

.o-circleStatic {
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-circleIndeterminate {
  animation: mui-progress-circular-dash 1.4s ease-in-out infinite;
  animation-name: o-keyframes-mui-progress-circular-dash;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px; }

@-webkit-keyframes o-rotate {
  100% {
    transform: rotate(360deg); } }

@-webkit-keyframes o-keyframes-mui-progress-circular-dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px; }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px; }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px; } }

.o-circleDisableShrink {
  animation: none; }
`;


/** @class */ ((function (_super) {
    __extends$1(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.render = function (props) {
        return (h("div", { class: "o-root o-colorPrimary o-indeterminate", role: "progressbar", style: "width: " + props.size + "px; height: " + props.size + "px;" + (props.color ? "color:" + props.color + ";" : '') },
            h("svg", { class: "o-svg", viewBox: "22 22 44 44" },
                h("circle", { class: "o-circle o-circleIndeterminate", cx: "44", cy: "44", r: "20.2", fill: "none", "stroke-width": "3.6" }))));
    };
    Loading.css = css;
    Loading.defaultProps = {
        size: 40
    };
    Loading.propTypes = {
        size: Number,
        color: String
    };
    Loading = __decorate$1([
        tag('o-loading')
    ], Loading);
    return Loading;
})(WeElement));

/**
 * @omiu/transition v0.0.12 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
/** @class */ ((function (_super) {
    __extends(Transition, _super);
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
    Transition.prototype.receiveProps = function () {
        if (this.props.appear) {
            this.enter();
        }
        else {
            this.leave();
        }
    };
    Transition.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._show = !this._show;
                        if (!this._show) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.enter()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.leave()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Transition.prototype.enter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                    var el = _this.children[0];
                    if (el) {
                        _this.fire('before-enter');
                        el.classList.remove(_this.props.name + '-leave-active');
                        el.classList.remove(_this.props.name + '-leave-to');
                        el.classList.add(_this.props.name + '-enter');
                        el.classList.add(_this.props.name + '-enter-active');
                        _this.callback = function () {
                            el.classList.remove(this.props.name + '-enter-active');
                            this.fire('after-enter');
                            this._show = true;
                            resolve();
                        }.bind(_this);
                        _this.once('transitionend', _this.callback);
                        _this.once('animationend', _this.callback);
                        window.setTimeout(function () {
                            el.classList.remove(this.props.name + '-enter');
                            el.classList.add(this.props.name + '-enter-to');
                            this.fire('enter');
                        }.bind(_this), _this.props.delay);
                    }
                })];
            });
        });
    };
    Transition.prototype.leave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                    var el = _this.children[0];
                    if (el) {
                        _this.fire('before-leave');
                        el.classList.remove(_this.props.name + '-enter-active');
                        el.classList.remove(_this.props.name + '-enter-to');
                        el.classList.add(_this.props.name + '-leave');
                        el.classList.add(_this.props.name + '-leave-active');
                        _this.callback = function (e) {
                            el.classList.remove(this.props.name + '-leave-active');
                            this.fire('after-leave');
                            this._show = false;
                            if (this.props.autoRemove && this.parentNode) {
                                this.parentNode.removeChild(this);
                            }
                            resolve();
                        }.bind(_this);
                        _this.once('transitionend', _this.callback);
                        _this.once('animationend', _this.callback);
                        window.setTimeout(function () {
                            el.classList.remove(this.props.name + '-leave');
                            el.classList.add(this.props.name + '-leave-to');
                            this.fire('leave');
                        }.bind(_this), _this.props.delay);
                    }
                })];
            });
        });
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
        appear: Boolean,
        delay: Number
    };
    Transition.isLightDOM = true;
    Transition.defaultProps = {
        name: 'o',
        delay: 0
    };
    Transition = __decorate([
        tag('o-transition')
    ], Transition);
    return Transition;
})(WeElement));

var Toast = /** @class */ (function (_super) {
    __extends$2(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.installed = function () {
        var _this = this;
        if (this.props.autoHide) {
            setTimeout(function () {
                _this.hide();
            }, this.props.duration + 200);
            setTimeout(function () {
                _this.parentNode.removeChild(_this);
            }, this.props.duration + 200 * 2);
        }
    };
    Toast.prototype.hide = function () {
        var _this = this;
        this.setAttribute('show', false);
        setTimeout(function () {
            _this.parentNode.removeChild(_this);
        }, 200);
    };
    Toast.prototype.render = function (props) {
        return h("o-transition", { appear: props.show, name: "fade" },
            h("div", null,
                h("div", { class: "o-mask-transparent" }),
                h("div", __assign({}, extractClass(props, 'o-toast')),
                    h("slot", null),
                    props.loading && h("o-loading", { size: 40, color: "white" }),
                    props.success && h("i", { class: "o-success" }),
                    props.warning && h("i", { class: "o-warning" }),
                    h("p", { class: "o-toast-content" }, props.content || (props.loading ? '加载中' : '')))));
    };
    Toast.css = css$1;
    Toast.defaultProps = {
        duration: 2000,
        autoHide: false,
        show: true,
        content: ''
    };
    Toast.propTypes = {
        content: String,
        loading: Boolean,
        success: Boolean,
        warning: Boolean,
        duration: Number,
        autoHide: Boolean,
        show: Boolean
    };
    Toast = __decorate$2([
        tag('o-toast')
    ], Toast);
    return Toast;
}(WeElement));
Toast.showLoading = showLoading;
Toast.hideLoading = hideLoading;
var el;
function showLoading(content) {
    remove();
    el = document.createElement('o-toast');
    el.setAttribute('show', '1');
    el.setAttribute('loading', '1');
    if (typeof content === 'string') {
        el.setAttribute('content', content);
    }
    document.body.appendChild(el);
    return el;
}
function hideLoading() {
    hide();
}
function showSuccess(content) {
    remove();
    el = document.createElement('o-toast');
    el.setAttribute('show', '1');
    el.setAttribute('success', '1');
    if (typeof content === 'string') {
        el.setAttribute('content', content);
    }
    document.body.appendChild(el);
    return el;
}
function hideSuccess() {
    hide();
}
function showWarning(content) {
    remove();
    el = document.createElement('o-toast');
    el.setAttribute('show', '1');
    el.setAttribute('warning', '1');
    if (typeof content === 'string') {
        el.setAttribute('content', content);
    }
    document.body.appendChild(el);
    return el;
}
function hideWarning() {
    hide();
}
function hide() {
    if (el) {
        el.hide();
        el = null;
    }
}
function remove() {
    if (el) {
        el.parentNode.removeChild(el);
    }
}

export { Toast as default, hideLoading, hideSuccess, hideWarning, showLoading, showSuccess, showWarning };
//# sourceMappingURL=index.esm.js.map
