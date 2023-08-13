import{h as o,a as g,W as m,t as a,s as p}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";/*! *****************************************************************************
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
***************************************************************************** */var d=function(r,e){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var t in s)s.hasOwnProperty(t)&&(i[t]=s[t])},d(r,e)};function f(r,e){d(r,e);function i(){this.constructor=r}r.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}function h(r,e,i,s){var t=arguments.length,n=t<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,i,s);else for(var c=r.length-1;c>=0;c--)(l=r[c])&&(n=(t<3?l(n):t>3?l(e,i,n):l(e,i))||n);return t>3&&n&&Object.defineProperty(e,i,n),n}var z=`:host {
  display: inline-block; }

.o-root {
  display: inline-block;
  line-height: 1;
  color: #07c160; }

.o-static {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-indeterminate {
  animation: o-rotate 1.4s linear infinite; }

.o-circle {
  stroke: currentColor; }

.o-circleStatic {
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

.o-circleIndeterminate {
  animation: mui-progress-circular-dash 1.4s ease-in-out infinite;
  animation-name: o-keyframes-mui-progress-circular-dash;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px; }

@-webkit-keyframes o-rotate {
  100% {
    transform: rotate(360deg); } }

@-webkit-keyframes o-keyframes-mui-progress-circular-dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px; }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px; }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px; } }

.o-circleDisableShrink {
  animation: none; }
`;(function(r){f(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.render=function(i){return o("div",{class:"o-root o-colorPrimary o-indeterminate",role:"progressbar",style:"width: "+i.size+"px; height: "+i.size+"px;"+(i.color?"color:"+i.color+";":"")},o("svg",{class:"o-svg",viewBox:"22 22 44 44"},o("circle",{class:"o-circle o-circleIndeterminate",cx:"44",cy:"44",r:"20.2",fill:"none","stroke-width":"3.6"})))},e.css=z,e.defaultProps={size:40},e.propTypes={size:Number,color:String},e=h([g("o-loading")],e),e})(m);var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,x=(r,e,i,s)=>{for(var t=s>1?void 0:s?b(e,i):e,n=r.length-1,l;n>=0;n--)(l=r[n])&&(t=(s?l(e,i,t):l(t))||t);return s&&t&&y(e,i,t),t};const _="loading-component";let u=class extends m{constructor(){super(...arguments),this.mdA='\n  ```html\n<o-loading size="15"></o-loading>\n```\n  ',this.mdB=`
  \`\`\`html
<o-loading size="15"></o-loading>
<o-loading size="25"></o-loading>
<o-loading size="35"></o-loading>
<o-loading size="45"></o-loading>
<o-loading size="55"></o-loading>
  \`\`\`
  `,this.mdC=`
  \`\`\`html
  <o-loading size="25" color="#8e2035"></o-loading>
  <o-loading size="25" color="#2d7418"></o-loading>
  <o-loading size="25" color="#f37736"></o-loading>
  <o-loading size="25" color="#7bc043"></o-loading>
  <o-loading size="25" color="#2170b8"></o-loading>
  \`\`\`
  `,this.mdD=`
  \`\`\`html
  <o-loading size="15" color="#8e2035"></o-loading>
  <o-loading size="25" color="#2d7418"></o-loading>
  <o-loading size="35" color="#f37736"></o-loading>
  <o-loading size="45" color="#7bc043"></o-loading>
  <o-loading size="55" color="#2170b8"></o-loading>
  \`\`\`
  `}installed(){}render(){return o("code-demo-container",null,o("code-demo",{class:a``,title:"\u57FA\u672C",describe:"\u6700\u7B80\u5355\u7684 Loading",code:this.mdA},o("div",{slot:"demo",class:a`px-5 py-5`},o("o-loading",{size:"15"}))),o("code-demo",{title:"\u4E0D\u540C\u5C3A\u5BF8",describe:"\u652F\u6301\u4F20\u5165 size \u63A7\u5236\u5927\u5C0F",code:this.mdB},o("div",{slot:"demo",class:a`px-5 py-5`},o("o-loading",{size:"15"}),o("o-loading",{size:"25"}),o("o-loading",{size:"35"}),o("o-loading",{size:"45"}),o("o-loading",{size:"55"}))),o("code-demo",{title:"\u4E0D\u540C\u989C\u8272",describe:"\u652F\u6301\u4F20\u5165 color \u63A7\u5236\u989C\u8272",code:this.mdC},o("div",{slot:"demo",class:a`px-5 py-5`},o("o-loading",{size:"25",color:"#8e2035"}),o("o-loading",{size:"25",color:"#2d7418"}),o("o-loading",{size:"25",color:"#f37736"}),o("o-loading",{size:"25",color:"#7bc043"}),o("o-loading",{size:"25",color:"#2170b8"}))),o("code-demo",{title:"\u4E0D\u540C\u989C\u8272\u548C\u5C3A\u5BF8",describe:"\u652F\u6301\u4F20\u5165 size \u548C color \u63A7\u5236\u5927\u5C0F\u989C\u8272",code:this.mdD},o("div",{slot:"demo",class:a`px-5 py-5`},o("o-loading",{size:"15",color:"#8e2035"}),o("o-loading",{size:"25",color:"#2d7418"}),o("o-loading",{size:"35",color:"#f37736"}),o("o-loading",{size:"45",color:"#7bc043"}),o("o-loading",{size:"55",color:"#2170b8"}))))}};u.css=p.target;u=x([g(_)],u);export{u as default};
