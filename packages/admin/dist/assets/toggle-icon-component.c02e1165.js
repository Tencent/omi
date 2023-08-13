import{r as require$$0,c as commonjsGlobal,W as WeElement,h,t as tw,s as sheet,a as tag}from"./index.2b48b3a4.js";import"./index.7201295b.js";import"./favorite.569a2fe1.js";import"./admin-docs.754e7d21.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var favoriteBorder={exports:{}};(function(module,exports){(function(r,o){module.exports=o(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(i){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=i,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(t&1&&(e=o(e)),t&8||t&4&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),t&2&&typeof e!="string")for(var c in e)o.d(n,c,function(a){return e[a]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./esm/favorite-border.js")}({"./esm/favorite-border.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
}), 'FavoriteBorder');


//# sourceURL=webpack://%5Bname%5D/./esm/favorite-border.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(favoriteBorder);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(i,r,o,e)=>{for(var t=e>1?void 0:e?__getOwnPropDesc(r,o):r,n=i.length-1,c;n>=0;n--)(c=i[n])&&(t=(e?c(r,o,t):c(t))||t);return e&&t&&__defProp(r,o,t),t};const tagName="toggle-icon-component";let toggle_icon_component_default=class extends WeElement{install(){}render(){return h("code-demo-container",null,h("code-demo",{title:"\u53EF\u5207\u6362\u56FE\u6807",describe:"\u62E5\u6709\u4E24\u79CD\u72B6\u6001\u5207\u6362\u7684icon",code:`
\`\`\`jsx
<o-toggle-icon icons={['favorite-border','favorite']}></o-toggle-icon>
<o-toggle-icon is-on color="red" icons={['favorite-border','favorite']}></o-toggle-icon>
<o-toggle-icon disabled icons={['favorite', 'favorite-border']}></o-toggle-icon>
\`\`\`
          `},h("div",{slot:"demo",class:tw`flex justify-around px-5 py-5`},h("o-toggle-icon",{icons:["favorite-border","favorite"]}),h("o-toggle-icon",{"is-on":!0,color:"red",icons:["favorite-border","favorite"]}),h("o-toggle-icon",{disabled:!0,icons:["favorite","favorite-border"]}))))}};toggle_icon_component_default.css=sheet.target;toggle_icon_component_default=__decorateClass([tag(tagName)],toggle_icon_component_default);export{toggle_icon_component_default as default};
