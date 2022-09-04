import{h as n,e as p,a as _,W as b,t as h,s as f}from"./index.529e61dc.js";import"./admin-docs.eb11151c.js";import"./index.34118141.js";import"./container.e9790aff.js";/*! *****************************************************************************
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
***************************************************************************** */var c=function(i,e){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a])},c(i,e)};function x(i,e){c(i,e);function o(){this.constructor=i}i.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}var s=function(){return s=Object.assign||function(e){for(var o,r=1,a=arguments.length;r<a;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},s.apply(this,arguments)};function g(i,e,o,r){var a=arguments.length,t=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,o,r);else for(var l=i.length-1;l>=0;l--)(d=i[l])&&(t=(a<3?d(t):a>3?d(e,o,t):d(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t}var m=`:host {
  display: inline-block; }

.o-radio,
.o-radio--medium.is-bordered .o-radio__label {
  font-size: 14px; }

.o-radio,
.o-radio__input {
  white-space: nowrap;
  line-height: 1;
  outline: 0; }

.o-radio,
.o-radio__inner,
.o-radio__input {
  position: relative;
  display: inline-block; }

.o-radio {
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none; }

.o-radio.is-bordered {
  padding: 12px 20px 0 10px;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 40px; }

.o-radio.is-bordered.is-checked {
  border-color: #07c160; }

.o-radio.is-bordered.is-disabled {
  cursor: not-allowed;
  border-color: #EBEEF5; }

.o-radio__input.is-disabled .o-radio__inner,
.o-radio__input.is-disabled.is-checked .o-radio__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED; }

.o-radio.is-bordered + .o-radio.is-bordered {
  margin-left: 10px; }

.o-radio--medium.is-bordered {
  padding: 10px 20px 0 10px;
  border-radius: 4px;
  height: 36px; }

.o-radio--mini.is-bordered .o-radio__label,
.o-radio--small.is-bordered .o-radio__label {
  font-size: 12px; }

.o-radio--medium.is-bordered .o-radio__inner {
  height: 14px;
  width: 14px; }

.o-radio--small.is-bordered {
  padding: 8px 15px 0 10px;
  border-radius: 3px;
  height: 32px; }

.o-radio--small.is-bordered .o-radio__inner {
  height: 12px;
  width: 12px; }

.o-radio--mini.is-bordered {
  padding: 6px 15px 0 10px;
  border-radius: 3px;
  height: 28px; }

.o-radio--mini.is-bordered .o-radio__inner {
  height: 12px;
  width: 12px; }

.o-radio:last-child {
  margin-right: 0; }

.o-radio__input {
  cursor: pointer;
  vertical-align: middle; }

.o-radio__input.is-disabled .o-radio__inner {
  cursor: not-allowed; }

.o-radio__input.is-disabled .o-radio__inner::after {
  cursor: not-allowed;
  background-color: #F5F7FA; }

.o-radio__input.is-disabled .o-radio__inner + .o-radio__label {
  cursor: not-allowed; }

.o-radio__input.is-disabled.is-checked .o-radio__inner::after {
  background-color: #C0C4CC; }

.o-radio__input.is-disabled + span.o-radio__label {
  color: #C0C4CC;
  cursor: not-allowed; }

.o-radio__input.is-checked .o-radio__inner {
  border-color: #07c160;
  background: #07c160; }

.o-radio__input.is-checked .o-radio__inner::after {
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1); }

.o-radio__input.is-checked + .o-radio__label {
  color: #07c160; }

.o-radio__input.is-focus .o-radio__inner {
  border-color: #07c160; }

.o-radio__inner {
  border: 1px solid #DCDFE6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #FFF;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.o-radio__inner:hover {
  border-color: #07c160; }

.o-radio__inner::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #FFF;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale(0);
  transform: translate(-50%, -50%) scale(0);
  -webkit-transition: -webkit-transform .15s ease-in;
  transition: -webkit-transform .15s ease-in;
  transition: transform .15s ease-in;
  transition: transform .15s ease-in, -webkit-transform .15s ease-in; }

.o-radio__original {
  opacity: 0;
  outline: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0; }

.o-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .o-radio__inner {
  -webkit-box-shadow: 0 0 2px 2px #07c160;
  box-shadow: 0 0 2px 2px #07c160; }

.o-radio__label {
  font-size: 14px;
  padding-left: 10px; }
`;(function(i){x(e,i);function e(){var o=i!==null&&i.apply(this,arguments)||this;return o.clickHandler=function(){o.props.disabled||o.props.checked||(o.group.forEach(function(r){r.updateProps({checked:!1})}),o.updateProps({checked:!0}),o.fire("change",{value:o.props.value}))},o}return e.prototype.installed=function(){var o=this;this.group=this.getScopeRoot(this.shadowRoot.host).querySelectorAll("o-radio[name='"+this.props.name+"']"),this.group.forEach(function(r){r.group=o.group})},e.prototype.render=function(o){return n("label",s({role:"radio",tabindex:"0",onClick:this.clickHandler},p(o,"o-radio",{"is-disabled":o.disabled,"is-checked":o.checked}),{"aria-checked":o.checked}),n("span",s({},p(o,"o-radio__input",{"is-disabled":o.disabled,"is-checked":o.checked})),n("span",{class:"o-radio__inner"}),n("input",s({type:"radio","aria-hidden":"true"},w(o,["checked","value","disabled"]),{tabindex:"-1",class:"o-radio__original"}))),n("span",{class:"o-radio__label"},o.label,n("slot",null)))},e.prototype.getScopeRoot=function(o){for(;;){var r=o.parentNode;if(r)o=r;else return o}},e.css=m,e.propTypes={label:String,disabled:Boolean,checked:Boolean,value:String,name:String},e=g([_("o-radio")],e),e})(b);function w(i,e){var o;if(typeof e=="string"){if(i.hasOwnProperty(e))return o={},o[e]=i[e],o}else{var r={};return e.forEach(function(a){i.hasOwnProperty(a)&&(r[a]=i[a])}),r}}var v=Object.defineProperty,k=Object.getOwnPropertyDescriptor,y=(i,e,o,r)=>{for(var a=r>1?void 0:r?k(e,o):e,t=i.length-1,d;t>=0;t--)(d=i[t])&&(a=(r?d(e,o,a):d(a))||a);return r&&a&&v(e,o,a),a};const E="radio-component";let u=class extends b{install(){}render(){return n("code-demo-container",null,n("code-demo",{title:"\u5355\u9009\u6846",describe:"\u7528\u4E8E\u5728\u591A\u4E2A\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A",code:`
\`\`\`jsx
<o-radio name="sex" checked={true} value="0">\u7537</o-radio>
<o-radio name="sex" value="1">\u5973</o-radio>

<o-radio disabled={true} name="sex-b">\u7537</o-radio>
<o-radio disabled={true} name="sex-b">\u5973</o-radio>
\`\`\`
          `},n("div",{slot:"demo",class:h`flex justify-around px-5 py-5`},n("o-radio",{name:"sex",checked:!0,value:"0"},"\u7537"),n("o-radio",{name:"sex",value:"1"},"\u5973"),n("o-radio",{disabled:!0,name:"sex-b"},"\u7537"),n("o-radio",{disabled:!0,name:"sex-b"},"\u5973"))))}};u.css=[f.target,"o-radio{margin-left:10px;}"];u=y([_(E)],u);export{u as default};
