import{a as tag,W as WeElement,h,e as extractClass,r as require$$0,c as commonjsGlobal,d as showLoading,f as hideLoading,t as tw,s as sheet}from"./index.2c96a3e1.js";import"./index.esm.fbe70f23.js";import"./add-ic-call-rounded.feb3a570.js";import"./admin-docs.91f3583b.js";import"./index.fc3c29e3.js";import"./container.4e91b93f.js";var n=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,t=(l,u,a)=>u in l?n(l,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[u]=a,c=Object.defineProperty,s=Object.getOwnPropertyDescriptor;let p=class extends WeElement{constructor(){super(...arguments),this.onIconClick=(l,u,a)=>{this.fire("change",{action:a,index:u,evt:l.currentTarget})}}render(l){return h("div",((u,a)=>{for(var i in a||(a={}))r.call(a,i)&&t(u,i,a[i]);if(o)for(var i of o(a))e.call(a,i)&&t(u,i,a[i]);return u})({},extractClass(l,"o-card",{["is-shadow-"+l.hoverable]:l.hoverable,"is-border":l.bordered})),h("slot",{name:"cover"},h("div",{class:"o-card-header"},h("div",{class:"o-card-title"},l.title),h("div",{class:"o-card-extra"},h("slot",{name:"extra"})))),h("div",{class:"o-card-body"},h("slot",null)),l.actions?h("div",{class:"o-card-footer"},l.actions.map((u,a)=>(this._iconTag="o-icon-"+u.icon,h("button",{onClick:i=>{this.onIconClick(i,a,l.actions[a])},class:"o-card-btn"},h(this._iconTag,{class:"icon"}))))):null)}};p.css=`:host {
  display: inline-block;
}

:host([block]) {
  display: block;
}

.o-card {
  display: flex;
  flex-direction: column;
  background: #FFF;
}
.o-card.is-border {
  border: 1px solid #EFEFEF;
}
.o-card.is-shadow-always {
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
}
.o-card.is-shadow-true:hover {
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
  transition: all 0.3s;
}

.o-card-header {
  min-height: 48px;
  padding: 0 24px;
  border-bottom: 1px solid #EFEFEF;
  border-radius: 2px 2px 0 0;
}

.o-card-title {
  float: left;
  padding: 16px 0;
  font-weight: 500;
  font-size: 18px;
}

.o-card-extra {
  float: right;
  margin-left: auto;
  padding: 16px 0;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.o-card-body {
  margin: 12px 24px;
  font-weight: 200;
  font-size: 14px;
  line-height: 1.6;
}

.o-card-footer {
  height: 56px;
  display: flex;
  justify-content: center;
  background: #FFF;
}

.o-card-btn {
  flex: 1;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
  outline: none;
  border-top: 1px solid #EFEFEF;
  border-right: 1px solid #EFEFEF;
  border-left: none;
  border-bottom: none;
  background: #FFF;
  color: rgba(0, 0, 0, 0.54);
  padding: 6px 12px 8px;
}
.o-card-btn:last-child {
  border-right: none;
}
.o-card-btn:hover {
  background: #EFEFEF;
  color: #07C160;
}

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
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}`,p.defaultProps={title:"",hoverable:"true",bordered:!0},p.propTypes={title:String,hoverable:String,actions:Array,bordered:Boolean},p=((l,u,a,i)=>{for(var d,m=i>1?void 0:i?s(u,a):u,f=l.length-1;f>=0;f--)(d=l[f])&&(m=(i?d(u,a,m):d(m))||m);return i&&m&&c(u,a,m),m})([tag("o-card")],p);/*! *****************************************************************************
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
***************************************************************************** */var extendStatics=function(l,u){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,i){a.__proto__=i}||function(a,i){for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(a[d]=i[d])},extendStatics(l,u)};function __extends(l,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");extendStatics(l,u);function a(){this.constructor=l}l.prototype=u===null?Object.create(u):(a.prototype=u.prototype,new a)}function __decorate(l,u,a,i){var d=arguments.length,m=d<3?u:i===null?i=Object.getOwnPropertyDescriptor(u,a):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")m=Reflect.decorate(l,u,a,i);else for(var _=l.length-1;_>=0;_--)(f=l[_])&&(m=(d<3?f(m):d>3?f(u,a,m):f(u,a))||m);return d>3&&m&&Object.defineProperty(u,a,m),m}var css=`/**
 * omiu tip css based on element ui css
 * Licensed under the MIT License
 * https://github.com/ElemeFE/element/blob/dev/LICENSE
 *
 * modified by dntzhang
 */
:host {
  display: inline-block; }

img {
  width: 100%;
  height: 100%; }

.placeholder,
.error {
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  font-size: 0.875em;
  color: #bdc5d4;
  background-color: #f5f7fa; }
`;(function(l){__extends(u,l);function u(){var a=l!==null&&l.apply(this,arguments)||this;return a.loaded=!1,a.loadError=!1,a.onLoad=function(){a.loaded=!0,a.update()},a.onError=function(){a.loaded=!1,a.loadError=!0,a.update()},a}return u.prototype.installed=function(){var a=this.getBoundingClientRect().height+"px";this.error&&(this.error.style.lineHeight=a),this.placeholder&&(this.placeholder.style.lineHeight=a)},u.prototype.updated=function(){var a=this.getBoundingClientRect().height+"px";this.error&&(this.error.style.lineHeight=a),this.placeholder&&(this.placeholder.style.lineHeight=a)},u.prototype.render=function(a){var i=this;return h(h.f,null,h("img",{onload:this.onLoad,onerror:this.onError,src:a.src,style:{objectFit:a.fit,display:this.loaded?"block":"none"}}),this.loadError&&h("slot",{ref:function(d){return i.error=d},class:"error",name:"error"},a.errorMsg),!this.loadError&&h("slot",{name:"placeholder",style:{display:this.loaded?"none":"block  "},ref:function(d){return i.placeholder=d},class:"placeholder"}))},u.css=css,u.defaultProps={errorMsg:"\u52A0\u8F7D\u5931\u8D25"},u.propTypes={src:String,fit:String,errorMsg:String},u=__decorate([tag("o-image")],u),u})(WeElement);var addAPhotoRounded={exports:{}};(function(module,exports){(function(u,a){module.exports=a(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(l){var u={};function a(i){if(u[i])return u[i].exports;var d=u[i]={i,l:!1,exports:{}};return l[i].call(d.exports,d,d.exports,a),d.l=!0,d.exports}return a.m=l,a.c=u,a.d=function(i,d,m){a.o(i,d)||Object.defineProperty(i,d,{enumerable:!0,get:m})},a.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},a.t=function(i,d){if(d&1&&(i=a(i)),d&8||d&4&&typeof i=="object"&&i&&i.__esModule)return i;var m=Object.create(null);if(a.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:i}),d&2&&typeof i!="string")for(var f in i)a.d(m,f,function(_){return i[_]}.bind(null,f));return m},a.n=function(i){var d=i&&i.__esModule?function(){return i.default}:function(){return i};return a.d(d,"a",d),d},a.o=function(i,d){return Object.prototype.hasOwnProperty.call(i,d)},a.p="",a(a.s="./esm/add-a-photo-rounded.js")}({"./esm/add-a-photo-rounded.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h(omi_1.h.f, null, omi_1.h("path", {
    d: "M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z"
}), omi_1.h("circle", {
    cx: "13",
    cy: "14",
    r: "3"
}), omi_1.h("path", {
    d: "M21 6h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65h-6.4c.17.3.28.63.28 1 0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
})), 'AddAPhotoRounded');


//# sourceURL=webpack://%5Bname%5D/./esm/add-a-photo-rounded.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(addAPhotoRounded);var addCommentRounded={exports:{}};(function(module,exports){(function(u,a){module.exports=a(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(l){var u={};function a(i){if(u[i])return u[i].exports;var d=u[i]={i,l:!1,exports:{}};return l[i].call(d.exports,d,d.exports,a),d.l=!0,d.exports}return a.m=l,a.c=u,a.d=function(i,d,m){a.o(i,d)||Object.defineProperty(i,d,{enumerable:!0,get:m})},a.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},a.t=function(i,d){if(d&1&&(i=a(i)),d&8||d&4&&typeof i=="object"&&i&&i.__esModule)return i;var m=Object.create(null);if(a.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:i}),d&2&&typeof i!="string")for(var f in i)a.d(m,f,function(_){return i[_]}.bind(null,f));return m},a.n=function(i){var d=i&&i.__esModule?function(){return i.default}:function(){return i};return a.d(d,"a",d),d},a.o=function(i,d){return Object.prototype.hasOwnProperty.call(i,d)},a.p="",a(a.s="./esm/add-comment-rounded.js")}({"./esm/add-comment-rounded.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-6 7h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"
}), 'AddCommentRounded');


//# sourceURL=webpack://%5Bname%5D/./esm/add-comment-rounded.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(addCommentRounded);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(l,u,a,i)=>{for(var d=i>1?void 0:i?__getOwnPropDesc(u,a):u,m=l.length-1,f;m>=0;m--)(f=l[m])&&(d=(i?f(u,a,d):f(d))||d);return i&&d&&__defProp(u,a,d),d};const tagName="card-component";let card_component_default=class extends WeElement{constructor(){super(...arguments),this.pickAction=l=>{const u=l.detail.action;u.icon==="add-comment-rounded"?(showLoading("\u53D1\u9001\u77ED\u4FE1\u606F..."),setTimeout(()=>{hideLoading()},1e3)):u.icon==="add-a-photo-rounded"?(showLoading("\u6B63\u5728\u6253\u5F00\u76F8\u673A..."),setTimeout(()=>{hideLoading()},1e3)):u.icon==="add-ic-call-rounded"&&(showLoading("\u6B63\u5728\u547C\u53EB..."),setTimeout(()=>{hideLoading()},1e3))},this.mdA=`
  \`\`\`html
  // hoverable?: String,  \u8BBE\u7F6E\u9634\u5F71,\u9ED8\u8BA4\u4E3A 'true' \u9F20\u6807\u79FB\u8FC7\u65F6\u60AC\u6D6E,'always'\u603B\u662F\u663E\u793A|'true'\u9F20\u6807\u79FB\u8FC7\u65F6\u60AC\u6D6E|'false'\u4ECE\u4E0D\u663E\u793A

  // bordered?:  Boolean, \u8BBE\u7F6E\u8FB9\u6846,\u9ED8\u8BA4\u5F00\u542F bordered=true,\u5173\u95ED bordered=false

  // title?: String,      \u8BBE\u7F6E\u9876\u90E8\u6807\u9898,\u9ED8\u8BA4\u4E3A''

  // actions?: any[],     \u8BBE\u7F6E\u5E95\u90E8\u6309\u94AE,\u4F8B\u5982\uFF1Aactions={ [{ icon: 'add-ic-call-rounded' }] },
  
  // onChange?: (evt: any, index: number) => void    \u8BBE\u7F6E\u56DE\u8C03\u4E8B\u4EF6,\u4F8B\u5982onChange={this.pickAction}\u89E6\u53D1\u56DE\u8C03

  //***\u7279\u522B\u6CE8\u610F\uFF1ACard\u7EC4\u4EF6\u6CA1\u6709\u9884\u8BBE\u5BBD\u9AD8\uFF0C\u9700\u5728\u5916\u90E8\u4E3A\u5BB9\u5668\u8BBE\u7F6E\u5BBD\u9AD8\u4EE5\u8FBE\u5230\u7406\u60F3\u6548\u679C\u3002

  <!-- slot="cover" \u82E5\u4E0D\u586B\u5145\u5185\u5BB9\uFF0C\u5219header\u680F\u4E0D\u663E\u793A\u3002-\u7B80\u5355\u5361\u7247 -->
  <o-card hoverable="always" block="1">
    <div slot="cover">
    </div>
      <p>Simple Card</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>
  <o-card title="no border Card" hoverable="true" bordered={false} block="1">
    <div slot="cover"></div>
    <p>Simple Card</p>
    <p>Card content</p>
    <p>Card content</p>
  </o-card>
  \`\`\`
  `,this.mdB=`
  \`\`\`html
  <!-- slot="extra" \u586B\u5145\u5185\u5BB9\uFF0C\u4F4D\u7F6E\u5728header\u680F\u53F3\u4FA7\u3002-slot="extra" \u5177\u540D\u63D2\u69FD -->
  <o-card title="Default size card" hoverable="always" block="1">
    <o-link
      underline={false}
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra">
        More
    </o-link>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>
  <o-card title="no border card" hoverable="true" bordered={false} block="1">
    <o-link
      underline={false}
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra"
    >
      More
    </o-link>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </o-card>
  \`\`\`
  `,this.mdC=`
  \`\`\`html
  <!-- \u901A\u8FC7onChange\u8BBE\u7F6E\u56DE\u8C03\u4E8B\u4EF6,\u4F8B\u5982onChange={this.pickAction}\u89E6\u53D1\u56DE\u8C03 -->
  
  JSX:
  // \u7ED3\u5408 o-toast \u5C55\u793A
  pickAction = (evt) => {
    const btn = evt.detail.action
    if(btn.icon === 'add-comment-rounded') {
      showLoading('\u53D1\u9001\u77ED\u4FE1\u606F...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-a-photo-rounded') {
      showLoading('\u6B63\u5728\u6253\u5F00\u76F8\u673A...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-ic-call-rounded') {
      showLoading('\u6B63\u5728\u547C\u53EB...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    }
  }

  <o-card
    title="Action card"
    hoverable="always"
    onChange={this.pickAction}
    block="1"
    actions={
      [{icon: 'add-a-photo-rounded'},
      {icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}>
    <o-link
      underline={false}
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra">
        More
    </o-link>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>

  <o-card
    title="DNT's card"
    onChange={this.pickAction}
    block="1"
    actions={[{icon: 'add-ic-call-rounded'}]}
    hoverable="true">
    <o-avatar slot="extra">DNT</o-avatar>
      <p>Tel:</p>
      <p>Company:</p>
      <p>...</p>
  </o-card>
  \`\`\`
  `,this.mdD=`
  \`\`\`html
  <!-- slot="cover" \u586B\u5145\u5185\u5BB9\uFF0C\u5C06\u8986\u76D6header\u680F\u3002\u586B\u5145<o-image><o-image/>\u4EE5\u5B8C\u6210\u76F8\u518C\u5361\u7247\u6548\u679C\u3002  -slot="cover" \u5177\u540D\u63D2\u69FD -->
  <o-card
    onChange={this.pickAction}
    actions={
      [{icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}
      hoverable="always"
      block="1">
    <o-image
      slot="cover"
      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb">
    </o-image>
    <div style="display: flex; justify-content: space-around; margin: 10px 0px">
      <o-avatar style="margin: auto 0px;"
        src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png">
      </o-avatar>
      <div>
        <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
        <p>This is the description</p>
      </div>
    </div>
  </o-card>

  <o-card hoverable="true" block="1">
    <o-image
      slot="cover"
      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb">
    </o-image>
      <p style="font-weight: 500>OMI Card</p>
      <p><o-link
        underline={false}
        type="primary"
        target="_blank"
        href="https://tencent.github.io/omi/"
        slot="extra">
        Welcome to OMI
      </o-link></p>
  </o-card>
  \`\`\`
  `}installed(){}render(){const l={breakInside:"avoid",padding:"0 0 0 0"};return h("code-demo-container",null,h("code-demo",{title:"\u7B80\u5355\u5361\u7247",describe:"\u53EA\u5305\u542B\u5185\u5BB9\u533A\u57DF",code:this.mdA,style:l},h("div",{slot:"demo",class:tw`flex flex-wrap justify-around px-5 py-5`},h("div",{class:tw`mt-2 mb-10 mx-2 h-36 w-60`},h("o-card",{title:"Simple Card",hoverable:"always",block:"1"},h("div",{slot:"cover"}),h("p",null,"Simple Card"),h("p",null,"Card content"),h("p",null,"Card content"))),h("div",{class:tw`mt-2 mb-10 mx-2 h-36 w-60`},h("o-card",{title:"Simple Card",hoverable:"true",block:"1",bordered:!1},h("div",{slot:"cover"}),h("p",null,"no border Card"),h("p",null,"Card content"),h("p",null,"Card content"))))),h("code-demo",{title:"\u529F\u80FD\u5361\u7247",describe:"\u652F\u6301\u5E95\u90E8\u680F\u6DFB\u52A0\u89E6\u53D1\u4E8B\u4EF6(o-icon)",code:this.mdC,style:l},h("div",{slot:"demo",class:tw`flex flex-wrap justify-around px-5 py-5`},h("div",{class:tw`mt-2 mb-10 mx-5 h-56 w-72`},h("o-card",{block:"1",title:"Action card",hoverable:"always",onChange:this.pickAction,actions:[{icon:"add-a-photo-rounded"},{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}]},h("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),h("p",null,"Card content"),h("p",null,"Card content"),h("p",null,"Card content"))),h("div",{class:tw`mt-2 mb-10 mx-5 h-56 w-72`},h("o-card",{block:"1",title:"DNT's card",onChange:this.pickAction,actions:[{icon:"add-ic-call-rounded"}],hoverable:"true"},h("o-avatar",{slot:"extra"},"DNT"),h("p",null,"Tel:"),h("p",null,"Company:"),h("p",null,"..."))))),h("code-demo",{title:"\u5178\u578B\u5361\u7247",describe:"\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF(extra)",code:this.mdB,style:l},h("div",{slot:"demo",class:tw`flex flex-wrap justify-around px-5 py-5`},h("div",{class:tw`mt-2 mb-10 mx-2 h-36 w-60`},h("o-card",{title:"Default size card",hoverable:"true",block:"1"},h("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),h("p",null,"Card content"),h("p",null,"Card content"),h("p",null,"Card content"))),h("div",{class:tw`mt-2 mb-10 mx-2 h-36 w-60`},h("o-card",{title:"no border card",hoverable:"true",bordered:!1,block:"1"},h("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),h("p",null,"Card content"),h("p",null,"Card content"),h("p",null,"Card content"))))),h("code-demo",{title:"\u76F8\u518C\u5361\u7247",describe:"\u652F\u6301\u5C01\u9762\u3001\u5934\u50CF\u3001\u6807\u9898\u548C\u63CF\u8FF0\u4FE1\u606F\u7684\u5361\u7247",code:this.mdD,style:l},h("div",{slot:"demo",class:tw`flex flex-wrap justify-around px-5 py-5`},h("div",{class:tw`mt-2 mb-10 mx-5 h-80 w-72`},h("o-card",{block:"1",onChange:this.pickAction,title:"Action card",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"always"},h("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),h("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},h("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),h("div",null,h("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),h("p",null,"This is the description"))))),h("div",{class:tw`mt-2 mb-10 mx-5 h-80 w-72`},h("o-card",{block:"1",hoverable:"true"},h("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),h("p",null,"OMI Card"),h("p",null,h("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"Welcome to OMI")))))))}};card_component_default.css=sheet.target;card_component_default=__decorateClass([tag(tagName)],card_component_default);export{card_component_default as default};
