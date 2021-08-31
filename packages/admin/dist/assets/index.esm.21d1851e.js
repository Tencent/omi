<<<<<<< HEAD
<<<<<<< HEAD:packages/admin/dist/assets/index.esm.54a3f493.js
import{h as t,j as n,l as e,b as o,W as r}from"./vendor.cff7a2c5.js";
=======
import{h as t,l as n,n as e,b as o,W as r}from"./vendor.3f489542.js";
>>>>>>> 0604c68311e9e2a566617123b30f055211daa112:packages/admin/dist/assets/index.esm.21d1851e.js
=======
import{h as t,l as n,n as e,b as o,W as r}from"./vendor.3f489542.js";
>>>>>>> 8979b0bd91c8638aca5f571f6f6ebb9b60e083de
/*! *****************************************************************************
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
***************************************************************************** */var i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};var a=function(){return(a=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};!function(r){function l(){return null!==r&&r.apply(this,arguments)||this}(function(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)})(l,r),l.prototype.render=function(o){return t("i",a({},e(o,"o-icon")),t("svg",{viewBox:"0 0 "+o.view+" "+o.view,class:n({rotate:o.rotate}),width:o.scale+"em",height:o.scale+"em",fill:o.color,"aria-hidden":"true"},o.paths?o.paths.map((function(n){var e={d:n.path,fill:o.color||"black"};return n.color&&(e.fill=n.color),t("path",a({},e))})):t("path",{d:o.path})),o.children&&t("div",{style:"color:"+(o.color||"black")+";"},o.children[0]))},l.css=":host {\n  display: inline-block; }\n\n.o-icon {\n  text-align: center;\n  display: inline-block; }\n\n.o-icon svg {\n  display: inline-block;\n  vertical-align: top; }\n\n.rotate {\n  display: inline-block;\n  -webkit-animation: rotate 1s infinite linear;\n  animation: rotate 1s infinite linear; }\n\ni div {\n  font-style: normal; }\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n",l.defaultProps={view:1024,scale:2},l.propTypes={path:String,paths:Object,view:Number,scale:Number,color:String,rotate:Boolean},l=function(t,n,e,o){var r,i=arguments.length,a=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(i<3?r(a):i>3?r(n,e,a):r(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a}([o("o-icon")],l)}(r);
