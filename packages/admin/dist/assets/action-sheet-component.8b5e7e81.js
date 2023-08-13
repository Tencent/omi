import{b as f,h as r,a as m,W as _,t as v,s as y}from"./index.2b48b3a4.js";import"./index.es.17e2d960.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";/*! *****************************************************************************
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
***************************************************************************** */var d=function(n,o){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])},d(n,o)};function x(n,o){d(n,o);function e(){this.constructor=n}n.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var c=function(){return c=Object.assign||function(o){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s])}return o},c.apply(this,arguments)};function b(n,o){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&o.indexOf(t)<0&&(e[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(e[t[i]]=n[t[i]]);return e}function w(n,o,e,t){var i=arguments.length,s=i<3?o:t===null?t=Object.getOwnPropertyDescriptor(o,e):t,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,o,e,t);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(s=(i<3?a(s):i>3?a(o,e,s):a(o,e))||s);return i>3&&s&&Object.defineProperty(o,e,s),s}var g=`.o-actionsheet {
  position: fixed;
  left: 0;
  bottom: 0;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 5000;
  width: 100%;
  background-color: #EFEFF4;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s; }

.o-actionsheet__title {
  position: relative;
  height: 65px;
  padding: 0 20px;
  line-height: 1.4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  color: #808080;
  background: #FCFCFD; }

.o-actionsheet__title:before {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5); }

.o-actionsheet__title .o-actionsheet__title-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; }

.o-actionsheet__menu {
  background-color: #FCFCFD; }

.o-actionsheet__action {
  margin-top: 6px;
  background-color: #FCFCFD; }

.o-actionsheet__cell {
  position: relative;
  padding: 10px 0;
  text-align: center;
  font-size: 18px; }

.o-actionsheet__cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5); }

.o-actionsheet__cell:active {
  background-color: #ECECEC; }

.o-actionsheet__cell:first-child:before {
  display: none; }

.o-skin_android .o-actionsheet {
  position: fixed;
  left: 50%;
  top: 50%;
  bottom: auto;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 274px;
  box-sizing: border-box;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: transparent;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s; }

.o-skin_android .o-actionsheet__action {
  display: none; }

.o-skin_android .o-actionsheet__menu {
  border-radius: 2px;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1); }

.o-skin_android .o-actionsheet__cell {
  padding: 13px 24px;
  font-size: 16px;
  line-height: 1.4;
  text-align: left; }

.o-skin_android .o-actionsheet__cell:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px; }

.o-skin_android .o-actionsheet__cell:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px; }

.o-actionsheet_toggle {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0); }

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: 100;
  left: 0;
  top: 0; }

.o-skin_android .o-actionsheet_toggle {
  opacity: 1 !important;
  top: 50% !important;
  bottom: auto !important; }

.o-skin_android .o-actionsheet {
  opacity: 0;
  transition: opacity .3s;
  top: 150%;
  bottom: 0; }
`;(function(n){x(o,n);function o(){var e=n!==null&&n.apply(this,arguments)||this;return e.handleMaskClick=function(t){e.hide(),e.fire("close")},e}return o.prototype.renderMenuItem=function(){var e=this;return this.props.menus.map(function(t,i){var s,a=t.label,l=t.className,p=b(t,["label","className"]),h=f((s={"o-actionsheet__cell":!0},s[l]=l,s));return r("div",c({key:i,onClick:function(k){e.hide(),e.fire("item-click",t)}},p,{class:h}),a)})},o.prototype.show=function(){this.updateProps({show:!0})},o.prototype.hide=function(){this.updateProps({show:!1})},o.prototype.renderActions=function(){var e=this;return this.props.actions.map(function(t,i){var s,a=t.label,l=t.className,p=b(t,["label","className"]),h=f((s={"o-actionsheet__cell":!0},s[l]=l,s));return r("div",c({key:i},p,{onClick:function(k){e.hide(),e.fire("item-click",t)},className:h}),a)})},o.prototype.render=function(){var e=this.props,t=e.show,i=e.type;e.menus,e.actions;var s=b(e,["show","type","menus","actions"]),a=f({"o-actionsheet":!0,"o-actionsheet_toggle":t}),l=i||"ios";return r("div",{className:l==="android"?"o-skin_android":""},r("div",{class:"mask",style:{display:t?"block":"none"},onClick:this.handleMaskClick}),r("div",c({className:a},s),r("div",{className:"o-actionsheet__menu"},this.renderMenuItem()),r("div",{className:"o-actionsheet__action"},this.renderActions())))},o.css=g,o.defaultProps={type:"",menus:[],actions:[],show:!1},o.propTypes={type:String,menus:Array,actions:Array,show:Boolean},o=w([m("o-action-sheet")],o),o})(_);var C=Object.defineProperty,O=Object.getOwnPropertyDescriptor,A=(n,o,e,t)=>{for(var i=t>1?void 0:t?O(o,e):o,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(t?a(o,e,i):a(i))||i);return t&&i&&C(o,e,i),i};const F="action-sheet-component";let u=class extends _{constructor(){super(...arguments),this.visibleA=!1,this.visibleB=!1,this.ItemClick=()=>{this.visibleA=!1,this.visibleB=!1,this.update()}}install(){}render(){return r("code-demo-container",null,r("code-demo",{title:"\u5F39\u51FA\u5F0F\u83DC\u5355",describe:"\u57FA\u7840\u6F14\u793A",code:`
\`\`\`jsx
  visibleA = false
  visibleB = false

  ItemClick = () => {
    this.visibleA = false
    this.visibleB = false
    this.update()
  }

<o-action-sheet 
  onItemClick={e => {this.ItemClick()}} 
  onClose={e => {this.ItemClick()}} 
  menus={[{
    label: 'Option 1'
  }, {
    label: 'Option 2'
  }]} actions={[{
    label: 'Cancel'
  }]} show={this.visibleA} type="ios">
</o-action-sheet>

<o-action-sheet 
  onItemClick={e => {this.ItemClick()}} 
  onClose={e => {this.ItemClick()}} 
  menus={[{
    label: 'Option 1'
  }, {
    label: 'Option 2'
  }]} actions={[{
    label: 'Cancel'
  }]} show={this.visibleB} type="android">
</o-action-sheet>
\`\`\`
          `},r("div",{slot:"demo",class:v`px-5 py-5`},r("o-button",{onClick:n=>{this.visibleA=!0,this.update()},block:!0,type:"default",text:"IOS ActionSheet"}),r("o-action-sheet",{onItemClick:n=>{this.ItemClick()},onClose:n=>{this.ItemClick()},menus:[{label:"Option 1"},{label:"Option 2"}],actions:[{label:"Cancel"}],show:this.visibleA,type:"ios"}),r("o-button",{onClick:n=>{this.visibleB=!0,this.update()},block:!0,type:"default",style:"margin-top: 15px;",text:"Android ActionSheet"}),r("o-action-sheet",{onItemClick:n=>{this.ItemClick()},onClose:n=>{this.ItemClick()},menus:[{label:"Option 1"},{label:"Option 2"}],actions:[{label:"Cancel"}],show:this.visibleB,type:"android"}))))}};u.css=[y.target,"o-button{margin-left:10px;}"];u=A([m(F)],u);export{u as default};
