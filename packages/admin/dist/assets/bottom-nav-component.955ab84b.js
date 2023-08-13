import{h,e as extractClass,a as tag,W as WeElement,r as require$$0,c as commonjsGlobal,t as tw,s as sheet}from"./index.2b48b3a4.js";import"./favorite.569a2fe1.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";/*! *****************************************************************************
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
***************************************************************************** */var extendStatics=function(i,o){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},extendStatics(i,o)};function __extends(i,o){extendStatics(i,o);function t(){this.constructor=i}i.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}var __assign=function(){return __assign=Object.assign||function(o){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},__assign.apply(this,arguments)};function __decorate(i,o,t,e){var n=arguments.length,r=n<3?o:e===null?e=Object.getOwnPropertyDescriptor(o,t):e,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,o,t,e);else for(var a=i.length-1;a>=0;a--)(c=i[a])&&(r=(n<3?c(r):n>3?c(o,t,r):c(o,t))||r);return n>3&&r&&Object.defineProperty(o,t,r),r}var css=`:host {
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
`;(function(i){__extends(o,i);function o(){var t=i!==null&&i.apply(this,arguments)||this;return t.clickHandler=function(e){t.fire("item-click",e),e.selected||(t.props.items.forEach(function(n){return n.selected=!1}),e.selected=!0,t.fire("change",e),t.update(!0))},t}return o.prototype.render=function(t){var e=this;return h("div",{class:"o-bottom-nav"},t.items.map(function(n,r){return e._iconTag="o-icon-"+n.icon,h("button",__assign({onClick:function(c){e.clickHandler(n)}},extractClass({},"item",{selected:n.selected}),n.selected&&t.selectedColor?{style:"color:"+t.selectedColor}:null,{tabindex:r}),h(e._iconTag,{class:"icon"}),h("span",{class:"m-action-label"},n.label))}))},o.css=css,o.defaultProps={},o.propTypes={selectedColor:String,items:Array},o=__decorate([tag("m-bottom-nav")],o),o})(WeElement);var locationOn={exports:{}};(function(module,exports){(function(o,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(i){var o={};function t(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=i,t.c=o,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8||n&4&&typeof e=="object"&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(var c in e)t.d(r,c,function(a){return e[a]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/location-on.js")}({"./esm/location-on.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
}), 'LocationOn');


//# sourceURL=webpack://%5Bname%5D/./esm/location-on.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(locationOn);var restore={exports:{}};(function(module,exports){(function(o,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(i){var o={};function t(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=i,t.c=o,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8||n&4&&typeof e=="object"&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(var c in e)t.d(r,c,function(a){return e[a]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/restore.js")}({"./esm/restore.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
}), 'Restore');


//# sourceURL=webpack://%5Bname%5D/./esm/restore.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(restore);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(i,o,t,e)=>{for(var n=e>1?void 0:e?__getOwnPropDesc(o,t):o,r=i.length-1,c;r>=0;r--)(c=i[r])&&(n=(e?c(o,t,n):c(n))||n);return e&&n&&__defProp(o,t,n),n};const tagName="bottom-nav-component";let bottom_nav_component_default=class extends WeElement{install(){}render(){return h("code-demo-container",null,h("code-demo",{title:"\u5E95\u90E8\u5BFC\u822A",describe:"\u79FB\u52A8\u7AEF\u5E95\u90E8\u5BFC\u822A",code:`
\`\`\`jsx
<m-bottom-nav selected-color='#07c160' id='myNav' items={[
  { icon: 'favorite', label: 'Favorites', selected: true },
  { icon: 'location-on', label: 'Nearby' },
  { icon: 'restore', label: 'Recents' }
]}>
</m-bottom-nav>
\`\`\`
          `},h("div",{slot:"demo",class:tw`flex justify-around px-5 py-5`},h("m-bottom-nav",{"selected-color":"#07c160",id:"myNav",items:[{icon:"favorite",label:"Favorites",selected:!0},{icon:"location-on",label:"Nearby"},{icon:"restore",label:"Recents"}]}))))}};bottom_nav_component_default.css=sheet.target;bottom_nav_component_default=__decorateClass([tag(tagName)],bottom_nav_component_default);export{bottom_nav_component_default as default};
