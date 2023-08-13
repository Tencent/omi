import{h as c,e as f,a as u,W as b}from"./index.2b48b3a4.js";/*! *****************************************************************************
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
***************************************************************************** */var d=function(n,r){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i])},d(n,r)};function p(n,r){d(n,r);function o(){this.constructor=n}n.prototype=r===null?Object.create(r):(o.prototype=r.prototype,new o)}var s=function(){return s=Object.assign||function(r){for(var o,e=1,i=arguments.length;e<i;e++){o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t])}return r},s.apply(this,arguments)};function g(n,r,o,e){var i=arguments.length,t=i<3?r:e===null?e=Object.getOwnPropertyDescriptor(r,o):e,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,r,o,e);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(t=(i<3?a(t):i>3?a(r,o,t):a(r,o))||t);return i>3&&t&&Object.defineProperty(r,o,t),t}var v=`:host {
  display: inline-block; }

* {
  box-sizing: border-box; }

.o-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid transparent; }

.o-link:hover {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-link.is-underline:hover {
  border-bottom: 1px solid #07c160;
  border-bottom: 1px solid var(--o-primary, #07c160); }

.o-link:active {
  color: #059048;
  color: var(--o-primary-active, #059048); }

.o-link-primary {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-link-primary:hover {
  color: rgba(7, 193, 96, 0.618);
  color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }

.o-link-primary:active {
  color: #059048;
  color: var(--o-primary-active, #059048); }

.o-link-primary.is-underline:hover {
  border-bottom: 1px solid rgba(7, 193, 96, 0.618);
  border-bottom: 1px solid var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }

.o-link-danger {
  color: #fa5151;
  color: var(--o-danger, #fa5151); }

.o-link-danger:hover {
  color: rgba(250, 81, 81, 0.618);
  color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618)); }

.o-link-danger:active {
  color: #f91f1f;
  color: var(--o-danger-active, #f91f1f); }

.o-link-danger.is-underline:hover {
  border-bottom: 1px solid rgba(250, 81, 81, 0.618);
  border-bottom: 1px solid var(--o-danger-fade-little, rgba(250, 81, 81, 0.618)); }

.o-link.is-disabled,
.o-link.is-disabled:focus,
.o-link.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  text-decoration: none;
  border-bottom: 1px solid transparent; }
`;(function(n){p(r,n);function r(){return n!==null&&n.apply(this,arguments)||this}return r.prototype.render=function(o){var e;return c("a",s({disabled:o.disabled,href:o.href,target:o.target},f(o,"o-link",(e={},e["o-link-"+o.type]=o.type,e["o-link-"+o.size]=o.size,e["is-underline"]=o.underline,e["is-disabled"]=o.disabled,e))),c("span",null,c("slot",null)))},r.css=v,r.defaultProps={underline:!0,disabled:!1},r.propTypes={type:String,disabled:Boolean,underline:Boolean,href:String,target:String},r=g([u("o-link")],r),r})(b);
