import{a as tag,W as WeElement,h,r as require$$0,c as commonjsGlobal,e as extractClass,s as sheet,t as tw}from"./index.5efb1196.js";import"./admin-docs.62b78a46.js";(function(){const a=document.createElement("link").relList;if(!(a&&a.supports&&a.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0})}function s(t){if(t.ep)return;t.ep=!0;const e=function(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}(t);fetch(t.href,e)}})();var o=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let n=class extends WeElement{constructor(){super(...arguments),this._opened=!1}installed(){this.style.transitionProperty=this._dimensionMaxCss,this.updateSize(this.props.opened?"auto":"0px",!1),this.toggleClass("o-collapse-closed",!0),this.toggleClass("o-collapse-opened",!1),this.addEventListener("transitionend",()=>{this._transitionEnd()}),this._opened=this.props.opened}receiveProps(){this._opened!==this.props.opened&&(this.updateSize(this.props.opened?"auto":"0px",!0),this._opened=this.props.opened)}updateSize(a,s){this._transitionStart(),a=a==="auto"?"":a,this._updateTransition(!1);const t=this._calcSize();a===""&&(this.style[this._dimensionMax]="",a=this._calcSize()),this.style[this._dimensionMax]=t,this.scrollTop=this.scrollTop,this._updateTransition(s),this.style[this._dimensionMax]=a,this.props.noAnimation&&this._transitionEnd()}get dimension(){return this.props.horizontal?"width":"height"}get _dimensionMax(){return this.props.horizontal?"maxWidth":"maxHeight"}get _dimensionMaxCss(){return this.props.horizontal?"max-width":"max-height"}toggle(){this.props.opened=!this.props.opened,this.receiveProps()}show(){this.props.opened=!0,this.receiveProps()}hide(){this.props.opened=!1,this.receiveProps()}_updateTransition(a){this.style.transitionDuration=a&&!this.props.noAnimation?".3s":"0s"}_transitionStart(){this.setAttribute("aria-hidden",!this.props.opened),this.toggleClass("o-collapse-closed",!1),this.toggleClass("o-collapse-opened",!1)}_transitionEnd(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("o-collapse-closed",!this.props.opened),this.toggleClass("o-collapse-opened",this.props.opened),this._updateTransition(!1)}toggleClass(a,s){s?this.classList.add(a):this.classList.remove(a)}_calcSize(){return this.getBoundingClientRect()[this.dimension]+"px"}render(){return h("slot",null)}};n.css=`:host {
  display: block;
  overflow: visible;
}

:host(.o-collapse-closed) {
  display: none;
}

:host(:not(.o-collapse-opened)) {
  overflow: hidden;
}`,n.defaultProps={opened:!1,horizontal:!1,noAnimation:!1},n.propTypes={opened:Boolean,horizontal:Boolean,noAnimation:Boolean},n=((a,s,t,e)=>{for(var r,c=e>1?void 0:e?i(s,t):s,l=a.length-1;l>=0;l--)(r=a[l])&&(c=(e?r(s,t,c):r(c))||c);return e&&c&&o(s,t,c),c})([tag("o-collapse")],n);var keyboardArrowDown={exports:{}};(function(module,exports){(function(s,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var s={};function t(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=s,t.d=function(e,r,c){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(r&1&&(e=t(e)),r&8||r&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),r&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="./esm/keyboard-arrow-down.js")}({"./esm/keyboard-arrow-down.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(keyboardArrowDown);var keyboardArrowUp={exports:{}};(function(module,exports){(function(s,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var s={};function t(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=s,t.d=function(e,r,c){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(r&1&&(e=t(e)),r&8||r&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),r&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="./esm/keyboard-arrow-up.js")}({"./esm/keyboard-arrow-up.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(keyboardArrowUp);var code={exports:{}};(function(module,exports){(function(s,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var s={};function t(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=s,t.d=function(e,r,c){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(r&1&&(e=t(e)),r&8||r&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),r&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="./esm/code.js")}({"./esm/code.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(code);var fileCopy={exports:{}};(function(module,exports){(function(s,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(a){var s={};function t(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=s,t.d=function(e,r,c){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:c})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(r&1&&(e=t(e)),r&8||r&4&&typeof e=="object"&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),r&2&&typeof e!="string")for(var l in e)t.d(c,l,function(u){return e[u]}.bind(null,l));return c},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="./esm/file-copy.js")}({"./esm/file-copy.js":function(module,exports,__webpack_require__){eval(`
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
***************************************************************************** */var extendStatics=function(a,s){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},extendStatics(a,s)};function __extends(a,s){extendStatics(a,s);function t(){this.constructor=a}a.prototype=s===null?Object.create(s):(t.prototype=s.prototype,new t)}var __assign=function(){return __assign=Object.assign||function(s){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(s[c]=t[c])}return s},__assign.apply(this,arguments)};function __decorate(a,s,t,e){var r=arguments.length,c=r<3?s:e===null?e=Object.getOwnPropertyDescriptor(s,t):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(a,s,t,e);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(c=(r<3?l(c):r>3?l(s,t,c):l(s,t))||c);return r>3&&c&&Object.defineProperty(s,t,c),c}var css=`:host {
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
`;(function(a){__extends(s,a);function s(){var t=a!==null&&a.apply(this,arguments)||this;return t.clickHandler=function(){t.updateProps({isOn:!t.props.isOn}),t.fire("change",{isOn:t.props.isOn})},t}return s.prototype.render=function(t){var e=t.icons.map(function(r){return"o-icon-"+r});return this.tagA=e[0],this.tagB=e[1],h("button",__assign({style:"color:"+t.color+";",onClick:this.clickHandler},extractClass(t,"o-toggle-icon",{"is-disabled":t.disabled}),{disabled:t.disabled}),e.length>0&&(t.isOn?h(this.tagB,null):h(this.tagA,null)),t.imgs&&(t.isOn?h("img",{src:t.imgs[1]}):h("img",{src:t.imgs[0]})))},s.css=css,s.defaultProps={isOn:!1,icons:[]},s.propTypes={isOn:Boolean,icons:Object,imgs:Object,color:String,disabled:Boolean},s=__decorate([tag("o-toggle-icon")],s),s})(WeElement);var _toggleSelection_1_0_6_toggleSelection=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var s=document.activeElement,t=[],e=0;e<a.rangeCount;e++)t.push(a.getRangeAt(e));switch(s.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":s.blur();break;default:s=null;break}return a.removeAllRanges(),function(){a.type==="Caret"&&a.removeAllRanges(),a.rangeCount||t.forEach(function(r){a.addRange(r)}),s&&s.focus()}},deselectCurrent=_toggleSelection_1_0_6_toggleSelection,clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"},defaultMessage="Copy to clipboard: #{key}, Enter";function format(a){var s=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return a.replace(/#{\s*key\s*}/g,s)}function copy(a,s){var t,e,r,c,l,u,_=!1;s||(s={}),t=s.debug||!1;try{r=deselectCurrent(),c=document.createRange(),l=document.getSelection(),u=document.createElement("span"),u.textContent=a,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(p){if(p.stopPropagation(),s.format)if(p.preventDefault(),typeof p.clipboardData=="undefined"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=clipboardToIE11Formatting[s.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(d,a)}else p.clipboardData.clearData(),p.clipboardData.setData(s.format,a);s.onCopy&&(p.preventDefault(),s.onCopy(p.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),l.addRange(c);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");_=!0}catch(p){t&&console.error("unable to copy using execCommand: ",p),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(s.format||"text",a),s.onCopy&&s.onCopy(window.clipboardData),_=!0}catch(d){t&&console.error("unable to copy using clipboardData: ",d),t&&console.error("falling back to prompt"),e=format("message"in s?s.message:defaultMessage),window.prompt(e,a)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(c):l.removeAllRanges()),u&&document.body.removeChild(u),r()}return _}var _copyToClipboard_3_3_1_copyToClipboard=copy,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(a,s,t,e)=>{for(var r=e>1?void 0:e?__getOwnPropDesc(s,t):s,c=a.length-1,l;c>=0;c--)(l=a[c])&&(r=(e?l(s,t,r):l(r))||r);return e&&r&&__defProp(s,t,r),r};const tagName="code-demo";let code_demo_default=class extends WeElement{constructor(){super(...arguments),this.openedA=!1,this.isOn=!1}render(a){return h("div",{class:tw`w-full border-1 mb-4 border-gray-300 rounded overflow-hidden ${a.class}`,style:Object.assign({breakInside:"avoid"},a.style)},h("div",null,h("slot",{name:"demo"})),h("div",{class:tw`border-t-1 border-gray-200 border-solid px-2 text-sm mb-3`},h("h3",{class:tw`font-bold bg-white relative -top-2.5 inline-block px-2`},a.title),h("p",null,a.describe),h("o-collapse",{opened:this.openedA,class:tw`m-3 mb-0`},h("div",null,h("admin-docs",{css:`
              .docs {
                padding: 0 !important;
              }
            `,mdContent:a.code}))),h("span",{class:tw`float-right mt-3 mb-2`},a.url?h("a",{href:a.url},h("o-icon-code",{class:tw`w-6 h-6 mr-2`})):null,a.code?h(h.f,null,h("o-icon-file-copy",{class:tw`w-6 h-6 mr-2`,onClick:()=>{_copyToClipboard_3_3_1_copyToClipboard(a.code)}}),h("o-toggle-icon",{"is-on":this.isOn,icons:["keyboard-arrow-down","keyboard-arrow-up"],class:tw`w-6 h-6 mr-2`,onChange:()=>{this.openedA=!this.openedA,this.isOn=!this.isOn,this.update()}})):null)))}};code_demo_default.css=[sheet.target];code_demo_default=__decorateClass([tag(tagName)],code_demo_default);
