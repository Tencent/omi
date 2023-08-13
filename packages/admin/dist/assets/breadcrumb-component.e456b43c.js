import{W as WeElement,h,e as extractClass,a as tag,r as require$$0,c as commonjsGlobal,t as tw,s as sheet}from"./index.2b48b3a4.js";import"./people.54ec25c3.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";const p=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=e(o);fetch(o.href,t)}};p();var index=`:root,:root[theme-mode=light]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 100%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-font-gray-5: rgba(0, 0, 0, .45);--omi-font-gray-6: rgba(0, 0, 0, .7);--omi-icon-gray-3:rgba(0, 0, 0, .54);--omi-mask-active: rgba(0, 0, 0, 60%);--omi-mask-disabled: rgba(255, 255, 255, 60%);--omi-bg-color-page: var(--omi-gray-color-2);--omi-bg-color-page-dark: #fff;--omi-bg-color-container: #fff;--omi-bg-color-container-hover: var(--omi-gray-color-1);--omi-bg-color-container-active: var(--omi-gray-color-3);--omi-bg-color-container-select: #fff;--omi-bg-color-secondarycontainer: var(--omi-gray-color-1);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-2);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-4);--omi-bg-color-component: var(--omi-gray-color-3);--omi-bg-color-component-hover: var(--omi-gray-color-4);--omi-bg-color-component-active: var(--omi-gray-color-6);--omi-bg-color-component-disabled: var(--omi-gray-color-2);--omi-bg-cascader-hover:#f1fff8;--omi-bg-color-specialcomponent: #fff;--omi-text-color-primary: var(--omi-font-gray-1);--omi-text-color-secondary: var(--omi-font-gray-2);--omi-text-color-placeholder: var(--omi-font-gray-3);--omi-text-color-disabled: var(--omi-font-gray-4);--omi-text-color-anti: #fff;--omi-text-color-brand: var(--omi-brand-color-8);--omi-text-color-link: var(--omi-brand-color-8);--omi-text-color-gray:#606266;--omi-text-color-gray-5:var(--omi-font-gray-5);--omi-text-color-gray-6:var(--omi-font-gray-6);--omi-icon-color-primary: var(--omi-icon-gray-3);--omi-border-level-1-color: var(--omi-gray-color-3);--omi-component-stroke: var(--omi-gray-color-3);--omi-border-level-2-color: var(--omi-gray-color-4);--omi-component-border: var(--omi-gray-color-4)}:root[theme-mode=dark]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 90%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-bg-color-page: var(--omi-gray-color-14);--omi-bg-color-page-dark: var(--omi-gray-color-14);--omi-bg-color-container: var(--omi-gray-color-13);--omi-bg-color-container-hover: var(--omi-gray-color-12);--omi-bg-color-container-active: var(--omi-gray-color-10);--omi-bg-color-container-select: var(--omi-gray-color-9);--omi-bg-color-secondarycontainer: var(--omi-gray-color-12);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-11);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-9);--omi-bg-color-component: var(--omi-gray-color-11);--omi-bg-color-component-hover: var(--omi-gray-color-10);--omi-bg-color-component-active: var(--omi-gray-color-9);--omi-bg-color-component-disabled: var(--omi-gray-color-12);--omi-bg-cascader-hover:var(--omi-gray-color-11);--omi-bg-color-specialcomponent: transparent;--omi-text-color-primary: var(--omi-font-white-1);--omi-text-color-secondary: var(--omi-font-white-2);--omi-text-color-placeholder: var(--omi-font-white-3);--omi-text-color-disabled: var(--omi-font-white-4);--omi-text-color-anti: #fff;--omi-text-color-gray:--omi-gray-color-7;--omi-text-color-gray-5:var(--omi-font-white-3);--omi-text-color-gray-6:var(--omi-font-white-2);--omi-icon-color-primary: var(--omi-font-white-1);--omi-border-level-1-color: var(--omi-gray-color-11);--omi-component-stroke: var(--omi-gray-color-11);--omi-border-level-2-color: var(--omi-gray-color-9);--omi-component-border: var(--omi-gray-color-9)}:host{display:block}ol{list-style-type:decimal;font-size:14px;padding:0;margin:0}li{list-style:none;display:inline-block;color:var(--omi-text-color-gray-5);vertical-align:middle}.breadcrumb-li a{color:var(--omi-text-color-gray-5)}a{text-decoration:none;display:inline-block;vertical-align:middle;line-height:20px;height:20px}.split{margin:0 8px}.current{color:var(--omi-text-color-gray-6);vertical-align:middle;line-height:20px;height:20px}.icon{vertical-align:-.2em}
`,css=Object.freeze(Object.defineProperty({__proto__:null,default:index},Symbol.toStringTag,{value:"Module"})),__defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(n,i,e,r)=>{for(var o=r>1?void 0:r?__getOwnPropDesc$1(i,e):i,t=n.length-1,a;t>=0;t--)(a=n[t])&&(o=(r?a(i,e,o):a(o))||o);return r&&o&&__defProp$1(i,e,o),o};let Breadcrumb=class extends WeElement{render(n){const i=[];return n.items.forEach((e,r)=>{this._tempIcon=null,e.icon&&(this._tempIcon="o-icon-"+e.icon),r!==n.items.length-1?i.push(h("li",{class:"breadcrumb-li"},e.icon&&h(this._tempIcon,{class:"icon"}),h("a",{class:"",href:e.href},e.text)),h("li",{class:"split"},n.split)):i.push(h("li",{class:"current"},e.icon&&h(this._tempIcon,{class:"icon"}),e.text))}),h("nav",{...extractClass(n,"o-breadcrumb")},h("ol",{class:"breadcrumb-ol"},i))}};Breadcrumb.css=css;Breadcrumb.defaultProps={split:"/"};Breadcrumb.propTypes={items:Array,split:String};Breadcrumb=__decorateClass$1([tag("o-breadcrumb")],Breadcrumb);var help={exports:{}};(function(module,exports){(function(i,e){module.exports=e(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(n){var i={};function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=i,e.d=function(r,o,t){e.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:t})},e.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,o){if(o&1&&(r=e(r)),o&8||o&4&&typeof r=="object"&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),o&2&&typeof r!="string")for(var a in r)e.d(t,a,function(c){return r[c]}.bind(null,a));return t},e.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(o,"a",o),o},e.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},e.p="",e(e.s="./esm/help.js")}({"./esm/help.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(help);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(n,i,e,r)=>{for(var o=r>1?void 0:r?__getOwnPropDesc(i,e):i,t=n.length-1,a;t>=0;t--)(a=n[t])&&(o=(r?a(i,e,o):a(o))||o);return r&&o&&__defProp(i,e,o),o};const tagName="breadcrumb-component";let breadcrumb_component_default=class extends WeElement{install(){}render(){return h("code-demo-container",null,h("code-demo",{title:"\u9762\u5305\u5C51",describe:"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5BFC\u822A",code:`
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
