import{h,e as extractClass,a as tag,W as WeElement,r as require$$0,c as commonjsGlobal,t as tw,s as sheet}from"./index.12119c45.js";import"./people.836401ee.js";import"./admin-docs.1c8d7562.js";import"./index.51e4e652.js";import"./container.ed94add8.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.438a5739.js";/*! *****************************************************************************
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
***************************************************************************** */var extendStatics=function(i,r){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},extendStatics(i,r)};function __extends(i,r){extendStatics(i,r);function t(){this.constructor=i}i.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var __assign=function(){return __assign=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},__assign.apply(this,arguments)};function __decorate(i,r,t,e){var n=arguments.length,o=n<3?r:e===null?e=Object.getOwnPropertyDescriptor(r,t):e,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,r,t,e);else for(var s=i.length-1;s>=0;s--)(c=i[s])&&(o=(n<3?c(o):n>3?c(r,t,o):c(r,t))||o);return n>3&&o&&Object.defineProperty(r,t,o),o}var css=`:host {
  display: block; }

ol {
  list-style-type: decimal;
  font-size: 14px;
  padding: 0;
  margin: 0; }

li {
  list-style: none;
  display: inline-block;
  color: rgba(0, 0, 0, 0.45);
  vertical-align: middle; }

.breadcrumb-li a {
  color: rgba(0, 0, 0, 0.45); }

a {
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  line-height: 20px;
  height: 20px; }

.split {
  margin: 0 8px; }

.current {
  color: rgba(0, 0, 0, 0.7);
  vertical-align: middle;
  line-height: 20px;
  height: 20px; }

.icon {
  vertical-align: -0.2em; }
`;(function(i){__extends(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.prototype.render=function(t){var e=this,n=[];return t.items.forEach(function(o,c){e._tempIcon=null,o.icon&&(e._tempIcon="o-icon-"+o.icon),c!==t.items.length-1?n.push(h("li",{class:"breadcrumb-li"},o.icon&&h(e._tempIcon,{class:"icon"}),h("a",{class:"",href:o.href},o.text)),h("li",{class:"split"},t.split)):n.push(h("li",{class:"current"},o.icon&&h(e._tempIcon,{class:"icon"}),o.text))}),h("nav",__assign({},extractClass(t,"o-breadcrumb")),h("ol",{class:"breadcrumb-ol"},n))},r.css=css,r.defaultProps={split:"/"},r.propTypes={items:Array,split:String},r=__decorate([tag("o-breadcrumb")],r),r})(WeElement);var help={exports:{}};(function(module,exports){(function(r,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(i){var r={};function t(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=i,t.c=r,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8||n&4&&typeof e=="object"&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(var c in e)t.d(o,c,function(s){return e[s]}.bind(null,c));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/help.js")}({"./esm/help.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
}), 'Help');


//# sourceURL=webpack://%5Bname%5D/./esm/help.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(help);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(i,r,t,e)=>{for(var n=e>1?void 0:e?__getOwnPropDesc(r,t):r,o=i.length-1,c;o>=0;o--)(c=i[o])&&(n=(e?c(r,t,n):c(n))||n);return e&&n&&__defProp(r,t,n),n};const tagName="breadcrumb-component";let breadcrumb_component_default=class extends WeElement{install(){}render(){return h("code-demo-container",null,h("code-demo",{title:"\u9762\u5305\u5C51",describe:"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5BFC\u822A",code:`
\`\`\`jsx
<o-breadcrumb split="/" items={[
  { text: 'Home' },
  { text: 'Helper' },
  { text: 'About' }
]}></o-breadcrumb>


<o-breadcrumb split="/" items={[
  { text: 'Home', href:'https://tencent.github.io/omi/', icon:'home' },
  { text: 'Helper', icon:'help' },
  { text: 'About', icon: 'people' }
]}></o-breadcrumb>
\`\`\`
          `},h("div",{slot:"demo",class:tw`flex justify-around px-5 py-5`},h("o-breadcrumb",{split:"/",items:[{text:"Home"},{text:"Helper"},{text:"About"}]}),h("o-breadcrumb",{split:"/",items:[{text:"Home",href:"https://tencent.github.io/omi/",icon:"home"},{text:"Helper",icon:"help"},{text:"About",icon:"people"}]}))))}};breadcrumb_component_default.css=sheet.target;breadcrumb_component_default=__decorateClass([tag(tagName)],breadcrumb_component_default);export{breadcrumb_component_default as default};
