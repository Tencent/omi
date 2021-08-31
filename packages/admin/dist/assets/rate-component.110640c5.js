<<<<<<< HEAD
<<<<<<< HEAD:packages/admin/dist/assets/rate-component.110640c5.js
import{h as e,c as t,b as o,W as r,t as n,s as a}from"./vendor.cff7a2c5.js";import"./index.esm.54a3f493.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";
=======
import{h as e,d as t,b as o,W as r,t as n,s as a}from"./vendor.3f489542.js";import"./index.esm.21d1851e.js";import"./admin-docs.bfe65179.js";import"./index.039482e5.js";import"./container.db7f9588.js";import"./___vite-browser-external_commonjs-proxy.755037e0.js";
>>>>>>> 0604c68311e9e2a566617123b30f055211daa112:packages/admin/dist/assets/rate-component.c9e89ee8.js
=======
import{h as e,c as t,b as o,W as r,t as n,s as a}from"./vendor.cff7a2c5.js";import"./index.esm.54a3f493.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";
>>>>>>> 8979b0bd91c8638aca5f571f6f6ebb9b60e083de
/*! *****************************************************************************
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
***************************************************************************** */var c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};!function(t){function r(){var e,o,r=t.call(this)||this;return r.onMouseover=function(e){r.state.value=e.target.dataset.rate},r.onMouseout=function(){r.state.value=r.props.value},r.state=(e={value:r.props.value},o=r,new Proxy(e,{set:function(e,t,r,n){return Reflect.set(e,t,r,n),o.update(),!0}})),r}(function(e,t){function o(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)})(r,t),r.prototype.submit=function(e){this.updateProps({value:e})},r.prototype.render=function(t){var o=this,r=this.state.value,n=Array.from({length:Math.floor(t.max)},(function(e,t){return t+1}));return e("div",{className:"rating"},n.map((function(n,a){return e("o-icon",{view:"24",color:(c=a,s=r,c<=s?"#f7e620":c>s?"#ccc":void 0),scale:"2",path:t.svg,onMouseover:o.onMouseover,onMouseout:o.onMouseout,onClick:o.submit.bind(o,a),"data-rate":a});var c,s})))},r.css=void 0,r.defaultProps={size:10,value:0,max:5,precision:1,color:"#f7e620",svg:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"},r.propTypes={value:Number,max:Number,precision:Number,icon:String,color:String,svg:String},r=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c}([o("o-rate")],r)}(r),t(e("o-rate",{value:1}),"#root",{ignoreAttrs:!0});var s=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let u=class extends r{install(){}render(){return e("code-demo-container",null,e("code-demo",{title:"评分",describe:"基础评分使用",code:'\n```html\n<o-rate value="4" max="10" color="red"></o-rate>\n```\n          '},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-rate",{value:"4",max:"10",color:"red"}))))}};u.css=[a.target],u=((e,t,o,r)=>{for(var n,a=r>1?void 0:r?i(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&s(t,o,a),a})([o("rate-component")],u);export{u as default};
