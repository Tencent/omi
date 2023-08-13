import{r as require$$0,c as commonjsGlobal,W as WeElement,h,t as tw,s as sheet,a as tag}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var person={exports:{}};(function(module,exports){(function(n,a){module.exports=a(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(r){var n={};function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=r,a.c=n,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},a.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(o&1&&(e=a(e)),o&8||o&4&&typeof e=="object"&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),o&2&&typeof e!="string")for(var c in e)a.d(t,c,function(u){return e[u]}.bind(null,c));return t},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s="./esm/person.js")}({"./esm/person.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person');


//# sourceURL=webpack://%5Bname%5D/./esm/person.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(person);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(r,n,a,e)=>{for(var o=e>1?void 0:e?__getOwnPropDesc(n,a):n,t=r.length-1,c;t>=0;t--)(c=r[t])&&(o=(e?c(n,a,o):c(o))||o);return e&&o&&__defProp(n,a,o),o};const tagName="avatar-component";let avatar_component_default=class extends WeElement{installed(){}render(){const r={breakInside:"avoid",padding:"0 0 0 0"};return h("code-demo-container",null,h("code-demo",{title:"\u57FA\u7840\u5934\u50CF",describe:"\u5C55\u793A\u4E0D\u540C\u5C3A\u5BF8\u7684\u5934\u50CF",code:`
\`\`\`jsx
<o-avatar src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar size={50} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar size={60} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar square size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
\`\`\`
          `,style:r},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:50,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:60,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{square:!0,size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))),h("code-demo",{title:"ICON \u5934\u50CF",describe:'\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E icon\uFF0C\u8BB0\u5F97 import omiu \u5BF9\u5E94\u7684 icon\uFF0C\u6BD4\u5982\u4E0B\u9762 icon="person" \u5BF9\u5E94 @omiu/icon/person',code:'\n```jsx\n<o-avatar icon="person"></o-avatar>\n<o-avatar icon="person" background-color="#87d068"></o-avatar>\n<o-avatar icon="person" background-color="#fde3cf" color="#f56a00"></o-avatar>\n```\n          ',style:r},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{icon:"person"}),h("o-avatar",{icon:"person","background-color":"#87d068"}),h("o-avatar",{icon:"person","background-color":"#fde3cf",color:"#f56a00"}))),h("code-demo",{title:"\u6587\u5B57\u5934\u50CF",describe:"\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u6587\u5B57\u5934\u50CF",code:'\n```jsx\n<o-avatar>DNT</o-avatar>\n<o-avatar background-color="#87d068">OMI</o-avatar>\n<o-avatar background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:r},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",null,"DNT"),h("o-avatar",{"background-color":"#87d068"},"OMI"),h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"\u6587\u5B57\u5934\u50CF",describe:"\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u6587\u5B57\u5934\u50CF",code:'\n```jsx\n<o-avatar square>DNT</o-avatar>\n<o-avatar square background-color="#87d068">OMI</o-avatar>\n<o-avatar square background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:r},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{square:!0},"DNT"),h("o-avatar",{square:!0,"background-color":"#87d068"},"OMI"),h("o-avatar",{square:!0,"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"\u5E26\u7EA2\u70B9\u7684\u5934\u50CF",describe:"\u901A\u8FC7 o-badge \u5305\u88F9\u5B9E\u73B0",code:`
\`\`\`jsx
<o-badge content="99">
  <o-avatar>DNT</o-avatar>
</o-badge>

<o-badge dot>
  <o-avatar background-color="#87d068">OMI</o-avatar>
</o-badge>

<o-badge content="new">
  <o-avatar background-color="#fde3cf" color="#f56a00">U</o-avatar>
</o-badge>
\`\`\`
          `,style:r},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-badge",{content:"99"},h("o-avatar",null,"DNT")),h("o-badge",{dot:!0},h("o-avatar",{"background-color":"#87d068"},"OMI")),h("o-badge",{content:"new"},h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"U")))))}};avatar_component_default.css=[sheet.target,"o-avatar{ margin: 4px } o-badge{ margin: 4px }"];avatar_component_default=__decorateClass([tag(tagName)],avatar_component_default);export{avatar_component_default as default};
