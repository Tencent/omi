import{h as i,b as u,e as h,a as m,W as y}from"./index.2b48b3a4.js";/*! *****************************************************************************
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
***************************************************************************** */var s=function(r,e){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])},s(r,e)};function d(r,e){s(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var c=function(){return c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)};function g(r,e,t,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,n);else for(var f=r.length-1;f>=0;f--)(l=r[f])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}var v=`:host {
  display: inline-block; }

.o-icon {
  text-align: center;
  display: inline-block; }

.o-icon svg {
  display: inline-block;
  vertical-align: top; }

.rotate {
  display: inline-block;
  -webkit-animation: rotate 1s infinite linear;
  animation: rotate 1s infinite linear; }

i div {
  font-style: normal; }

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }
`;(function(r){d(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.render=function(t){return i("i",c({},h(t,"o-icon")),i("svg",{viewBox:"0 0 "+t.view+" "+t.view,class:u({rotate:t.rotate}),width:t.scale+"em",height:t.scale+"em",fill:t.color,"aria-hidden":"true"},t.paths?t.paths.map(function(n){var o={d:n.path,fill:t.color||"black"};return n.color&&(o.fill=n.color),i("path",c({},o))}):i("path",{d:t.path})),t.children&&i("div",{style:"color:"+(t.color||"black")+";"},t.children[0]))},e.css=v,e.defaultProps={view:1024,scale:2},e.propTypes={path:String,paths:Object,view:Number,scale:Number,color:String,rotate:Boolean},e=g([m("o-icon")],e),e})(y);
