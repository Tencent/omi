import{a as tag,W as WeElement,h,r as require$$0,c as commonjsGlobal$1,e as extractClass,s as sheet,t as tw}from"./index.9c37cd5e.js";import"./admin-docs.eb2437f0.js";(function(){const a=document.createElement("link").relList;if(!(a&&a.supports&&a.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0})}function r(t){if(t.ep)return;t.ep=!0;const e=function(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}(t);fetch(t.href,e)}})();var o=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let n=class extends WeElement{constructor(){super(...arguments),this._opened=!1}installed(){this.style.transitionProperty=this._dimensionMaxCss,this.updateSize(this.props.opened?"auto":"0px",!1),this.toggleClass("o-collapse-closed",!0),this.toggleClass("o-collapse-opened",!1),this.addEventListener("transitionend",()=>{this._transitionEnd()}),this._opened=this.props.opened}receiveProps(){this._opened!==this.props.opened&&(this.updateSize(this.props.opened?"auto":"0px",!0),this._opened=this.props.opened)}updateSize(a,r){this._transitionStart(),a=a==="auto"?"":a,this._updateTransition(!1);const t=this._calcSize();a===""&&(this.style[this._dimensionMax]="",a=this._calcSize()),this.style[this._dimensionMax]=t,this.scrollTop=this.scrollTop,this._updateTransition(r),this.style[this._dimensionMax]=a,this.props.noAnimation&&this._transitionEnd()}get dimension(){return this.props.horizontal?"width":"height"}get _dimensionMax(){return this.props.horizontal?"maxWidth":"maxHeight"}get _dimensionMaxCss(){return this.props.horizontal?"max-width":"max-height"}toggle(){this.props.opened=!this.props.opened,this.receiveProps()}show(){this.props.opened=!0,this.receiveProps()}hide(){this.props.opened=!1,this.receiveProps()}_updateTransition(a){this.style.transitionDuration=a&&!this.props.noAnimation?".3s":"0s"}_transitionStart(){this.setAttribute("aria-hidden",!this.props.opened),this.toggleClass("o-collapse-closed",!1),this.toggleClass("o-collapse-opened",!1)}_transitionEnd(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("o-collapse-closed",!this.props.opened),this.toggleClass("o-collapse-opened",this.props.opened),this._updateTransition(!1)}toggleClass(a,r){r?this.classList.add(a):this.classList.remove(a)}_calcSize(){return this.getBoundingClientRect()[this.dimension]+"px"}render(){return h("slot",null)}};n.css=`:host {
  display: block;
  overflow: visible;
}

:host(.o-collapse-closed) {
  display: none;
}

:host(:not(.o-collapse-opened)) {
  overflow: hidden;
}`,n.defaultProps={opened:!1,horizontal:!1,noAnimation:!1},n.propTypes={opened:Boolean,horizontal:Boolean,noAnimation:Boolean},n=((a,r,t,e)=>{for(var s,c=e>1?void 0:e?i(r,t):r,l=a.length-1;l>=0;l--)(s=a[l])&&(c=(e?s(r,t,c):s(c))||c);return e&&c&&o(r,t,c),c})([tag("o-collapse")],n);var keyboardArrowDown={exports:{}};(function(module,exports){(function(r,t){module.exports=t(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var r={};function t(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return a[e].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=a,t.c=r,t.d=function(e,s,c){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(s&1&&(e=t(e)),s&8||s&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),s&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s="./esm/keyboard-arrow-down.js")}({"./esm/keyboard-arrow-down.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), 'KeyboardArrowDown');


//# sourceURL=webpack://%5Bname%5D/./esm/keyboard-arrow-down.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(keyboardArrowDown);var keyboardArrowUp={exports:{}};(function(module,exports){(function(r,t){module.exports=t(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var r={};function t(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return a[e].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=a,t.c=r,t.d=function(e,s,c){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(s&1&&(e=t(e)),s&8||s&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),s&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s="./esm/keyboard-arrow-up.js")}({"./esm/keyboard-arrow-up.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');


//# sourceURL=webpack://%5Bname%5D/./esm/keyboard-arrow-up.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(keyboardArrowUp);var code={exports:{}};(function(module,exports){(function(r,t){module.exports=t(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var r={};function t(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return a[e].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=a,t.c=r,t.d=function(e,s,c){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(s&1&&(e=t(e)),s&8||s&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),s&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s="./esm/code.js")}({"./esm/code.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code');


//# sourceURL=webpack://%5Bname%5D/./esm/code.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(code);var fileCopy={exports:{}};(function(module,exports){(function(r,t){module.exports=t(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var r={};function t(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return a[e].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=a,t.c=r,t.d=function(e,s,c){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(s&1&&(e=t(e)),s&8||s&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),s&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s="./esm/file-copy.js")}({"./esm/file-copy.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), 'FileCopy');


//# sourceURL=webpack://%5Bname%5D/./esm/file-copy.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(fileCopy);/*! *****************************************************************************
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
***************************************************************************** */var extendStatics$1=function(a,r){return extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])},extendStatics$1(a,r)};function __extends$1(a,r){extendStatics$1(a,r);function t(){this.constructor=a}a.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var __assign$1=function(){return __assign$1=Object.assign||function(r){for(var t,e=1,s=arguments.length;e<s;e++){t=arguments[e];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(r[c]=t[c])}return r},__assign$1.apply(this,arguments)};function __decorate$1(a,r,t,e){var s=arguments.length,c=s<3?r:e===null?e=Object.getOwnPropertyDescriptor(r,t):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(a,r,t,e);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(c=(s<3?l(c):s>3?l(r,t,c):l(r,t))||c);return s>3&&c&&Object.defineProperty(r,t,c),c}var css$1=`.o-message__closeBtn:focus,
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
`;/*! *****************************************************************************
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
***************************************************************************** */var extendStatics$1$1=function(a,r){return extendStatics$1$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])},extendStatics$1$1(a,r)};function __extends$1$1(a,r){extendStatics$1$1(a,r);function t(){this.constructor=a}a.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function __decorate$1$1(a,r,t,e){var s=arguments.length,c=s<3?r:e===null?e=Object.getOwnPropertyDescriptor(r,t):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(a,r,t,e);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(c=(s<3?l(c):s>3?l(r,t,c):l(r,t))||c);return s>3&&c&&Object.defineProperty(r,t,c),c}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function createCommonjsModule(a,r){return r={exports:{}},a(r,r.exports),r.exports}var _dready_0_0_1_dready=createCommonjsModule(function(a,r){(function(t,e){a.exports=e()})(commonjsGlobal,function(){const t=[];document.addEventListener("DOMContentLoaded",()=>{e.done=!0,t.forEach(s=>{s()})});function e(s){if(e.done){s();return}t.push(s)}return e.done=!1,e})}),_domReady=Object.freeze({__proto__:null,default:_dready_0_0_1_dready,__moduleExports:_dready_0_0_1_dready}),domReady=_dready_0_0_1_dready||_domReady;(function(a){__extends$1$1(r,a);function r(){return a!==null&&a.apply(this,arguments)||this}return r.prototype.installed=function(){var t=this;this.props.appear&&domReady(function(){t.transitionTarget=t.children[0],t.enter(),t.props.leavingTime&&setTimeout(function(){t.leave()},t.props.leavingTime)})},r.prototype.enter=function(){this.fire("before-enter"),this.transitionTarget.classList.remove(this.props.name+"-leave-active"),this.transitionTarget.classList.remove(this.props.name+"-leave-to"),this.transitionTarget.classList.add(this.props.name+"-enter"),this.transitionTarget.classList.add(this.props.name+"-enter-active"),this.callback=function(){this.transitionTarget.classList.remove(this.props.name+"-enter-active"),this.fire("after-enter")}.bind(this),this.once("transitionend",this.callback),this.once("animationend",this.callback),window.setTimeout(function(){this.transitionTarget.classList.remove(this.props.name+"-enter"),this.transitionTarget.classList.add(this.props.name+"-enter-to"),this.fire("enter")}.bind(this),0)},r.prototype.leave=function(){this.fire("before-leave"),this.transitionTarget.classList.remove(this.props.name+"-enter-active"),this.transitionTarget.classList.remove(this.props.name+"-enter-to"),this.transitionTarget.classList.add(this.props.name+"-leave"),this.transitionTarget.classList.add(this.props.name+"-leave-active"),this.callback=function(t){this.transitionTarget.classList.remove(this.props.name+"-leave-active"),this.fire("after-leave"),this.props.autoRemove&&this.parentNode&&this.parentNode.removeChild(this)}.bind(this),this.once("transitionend",this.callback),this.once("animationend",this.callback),window.setTimeout(function(){this.transitionTarget.classList.remove(this.props.name+"-leave"),this.transitionTarget.classList.add(this.props.name+"-leave-to"),this.fire("leave")}.bind(this),0)},r.prototype.once=function(t,e){var s=function(){this.removeEventListener(t,s),e()}.bind(this);this.addEventListener(t,s)},r.prototype.render=function(){},r.propTypes={name:String,leavingTime:Number,autoRemove:Boolean,appear:Boolean},r.isLightDom=!0,r.defaultProps={name:"o"},r=__decorate$1$1([tag("o-transition")],r),r})(WeElement);(function(a){__extends$1(r,a);function r(){var t=a!==null&&a.apply(this,arguments)||this;return t.onAfterLeave=function(){t.parentElement.removeChild(t)},t}return r.prototype.render=function(t){var e;return h("o-transition",{appear:!0,"onafter-leave":this.onAfterLeave,"leaving-time":t.duration,"auto-remove":!0,name:"fade"},h("div",__assign$1({},extractClass(t,"o-message",(e={},e["o-message--"+t.type]=t.type,e["is-closable"]=t.closable,e["is-center"]=t.center,e)),{style:"top: 20px; z-index: 2000;"}),h("p",{class:"o-message__content"},t.message),t.showClose&&h("i",{class:"o-message__closeBtn o-icon-close"})))},r.css=css$1,r.defaultProps={duration:3e3},r.propTypes={showClose:Boolean,type:String,message:String,center:Boolean,duration:Number},r=__decorate$1([tag("o-message")],r),r})(WeElement);/*! *****************************************************************************
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
***************************************************************************** */var extendStatics=function(a,r){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])},extendStatics(a,r)};function __extends(a,r){extendStatics(a,r);function t(){this.constructor=a}a.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var __assign=function(){return __assign=Object.assign||function(r){for(var t,e=1,s=arguments.length;e<s;e++){t=arguments[e];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(r[c]=t[c])}return r},__assign.apply(this,arguments)};function __decorate(a,r,t,e){var s=arguments.length,c=s<3?r:e===null?e=Object.getOwnPropertyDescriptor(r,t):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(a,r,t,e);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(c=(s<3?l(c):s>3?l(r,t,c):l(r,t))||c);return s>3&&c&&Object.defineProperty(r,t,c),c}var css=`:host {
  display: inline-block; }

button {
  appearance: none;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent; }

.is-disabled {
  cursor: not-allowed; }

.o-toggle-icon {
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
`;(function(a){__extends(r,a);function r(){var t=a!==null&&a.apply(this,arguments)||this;return t.clickHandler=function(){t.updateProps({isOn:!t.props.isOn}),t.fire("change",{isOn:t.props.isOn})},t}return r.prototype.render=function(t){var e=t.icons.map(function(s){return"o-icon-"+s});return this.tagA=e[0],this.tagB=e[1],h("button",__assign({style:"color:"+t.color+";",onClick:this.clickHandler},extractClass(t,"o-toggle-icon",{"is-disabled":t.disabled}),{disabled:t.disabled}),e.length>0&&(t.isOn?h(this.tagB,null):h(this.tagA,null)),t.imgs&&(t.isOn?h("img",{src:t.imgs[1]}):h("img",{src:t.imgs[0]})))},r.css=css,r.defaultProps={isOn:!1,icons:[]},r.propTypes={isOn:Boolean,icons:Object,imgs:Object,color:String,disabled:Boolean},r=__decorate([tag("o-toggle-icon")],r),r})(WeElement);var toggleSelection=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var r=document.activeElement,t=[],e=0;e<a.rangeCount;e++)t.push(a.getRangeAt(e));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return a.removeAllRanges(),function(){a.type==="Caret"&&a.removeAllRanges(),a.rangeCount||t.forEach(function(s){a.addRange(s)}),r&&r.focus()}},deselectCurrent=toggleSelection,clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"},defaultMessage="Copy to clipboard: #{key}, Enter";function format(a){var r=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return a.replace(/#{\s*key\s*}/g,r)}function copy(a,r){var t,e,s,c,l,u,d=!1;r||(r={}),t=r.debug||!1;try{s=deselectCurrent(),c=document.createRange(),l=document.getSelection(),u=document.createElement("span"),u.textContent=a,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(p){if(p.stopPropagation(),r.format)if(p.preventDefault(),typeof p.clipboardData=="undefined"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var _=clipboardToIE11Formatting[r.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(_,a)}else p.clipboardData.clearData(),p.clipboardData.setData(r.format,a);r.onCopy&&(p.preventDefault(),r.onCopy(p.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),l.addRange(c);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");d=!0}catch(p){t&&console.error("unable to copy using execCommand: ",p),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",a),r.onCopy&&r.onCopy(window.clipboardData),d=!0}catch(_){t&&console.error("unable to copy using clipboardData: ",_),t&&console.error("falling back to prompt"),e=format("message"in r?r.message:defaultMessage),window.prompt(e,a)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(c):l.removeAllRanges()),u&&document.body.removeChild(u),s()}return d}var copyToClipboard=copy,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(a,r,t,e)=>{for(var s=e>1?void 0:e?__getOwnPropDesc(r,t):r,c=a.length-1,l;c>=0;c--)(l=a[c])&&(s=(e?l(r,t,s):l(s))||s);return e&&s&&__defProp(r,t,s),s};const tagName="code-demo";let code_demo_default=class extends WeElement{constructor(){super(...arguments),this.openedA=!1,this.isOn=!1}message(a){const r=document.createElement("o-message");r.setAttribute("type","success"),r.setAttribute("center","center"),r.setAttribute("message",a),document.body.appendChild(r)}copy(a){copyToClipboard(a),this.message("Copied!")}render(a){return h("div",{class:tw`w-full border-1 mb-4 border-gray-300 rounded overflow-hidden ${a.class}`,style:Object.assign({breakInside:"avoid"},a.style)},h("div",null,h("slot",{name:"demo"})),h("div",{class:tw`border-t-1 border-gray-200 border-solid px-2 text-sm mb-3`},h("h3",{class:tw`font-bold bg-white relative -top-2.5 inline-block px-2`},a.title),h("p",null,a.describe),h("o-collapse",{opened:this.openedA,class:tw`m-3 mb-0`},h("div",null,h("admin-docs",{css:`
              .docs {
                padding: 0 !important;
              }
            `,mdContent:a.code}))),h("span",{class:tw`float-right mt-3 mb-2`},a.url?h("a",{href:a.url},h("o-icon-code",{class:tw`w-6 h-6 mr-2`})):null,a.code?h(h.f,null,h("o-icon-file-copy",{class:tw`w-3 h-3 mr-2 relative -top-1 cursor-pointer`,onClick:()=>{this.copy(a.code.replace("```jsx","").replace("```","").trim())}}),h("o-toggle-icon",{"is-on":this.isOn,icons:["keyboard-arrow-down","keyboard-arrow-up"],class:tw`w-6 h-6 mr-2`,onChange:()=>{this.openedA=!this.openedA,this.isOn=!this.isOn,this.update()}})):null)))}};code_demo_default.css=[sheet.target];code_demo_default=__decorateClass([tag(tagName)],code_demo_default);
