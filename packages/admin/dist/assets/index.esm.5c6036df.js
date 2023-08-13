import{h as s,e as h,a as l,W as u}from"./index.2b48b3a4.js";/*! *****************************************************************************
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
***************************************************************************** */var b=function(r,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])},b(r,t)};function f(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");b(r,t);function o(){this.constructor=r}r.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var a=function(){return a=Object.assign||function(t){for(var o,e=1,i=arguments.length;e<i;e++){o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},a.apply(this,arguments)};function _(r,t,o,e){var i=arguments.length,n=i<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,o):e,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,t,o,e);else for(var p=r.length-1;p>=0;p--)(c=r[p])&&(n=(i<3?c(n):i>3?c(t,o,n):c(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n}var d=`:host {
  display: inline-block; }

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; }

.o-switch {
  -webkit-appearance: none;
  appearance: none;
  display: inline-block; }

.o-switch-cp {
  display: inline-block; }

.o-switch,
.o-switch-cp__box {
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #DFDFDF;
  outline: 0;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #DFDFDF;
  -webkit-transition: background-color 0.1s, border 0.1s;
  transition: background-color 0.1s, border 0.1s; }

.o-switch:before,
.o-switch-cp__box:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 18px;
  border-radius: 15px;
  background-color: #FDFDFD;
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); }

.o-switch:after,
.o-switch-cp__box:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35); }

.o-switch:checked,
.o-switch-cp__input:checked ~ .o-switch-cp__box {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160); }

.o-switch:checked:before,
.o-switch-cp__input:checked ~ .o-switch-cp__box:before {
  -webkit-transform: scale(0);
  transform: scale(0); }

.o-switch:checked:after,
.o-switch-cp__input:checked ~ .o-switch-cp__box:after {
  -webkit-transform: translateX(20px);
  transform: translateX(20px); }

.o-switch-cp__input {
  position: absolute;
  left: -9999px; }

.o-switch-cp__box {
  display: block; }
`;(function(r){f(t,r);function t(){var o=r!==null&&r.apply(this,arguments)||this;return o.onChange=function(){o.fire("change",o._ele.checked)},o}return t.prototype.render=function(o){var e=this;return o.checked?s("label",a({for:"x_"+this.elementId},h(o,"o-switch-cp")),s("input",{id:"x_"+this.elementId,ref:function(i){e._ele=i},class:"o-switch-cp__input",type:"checkbox",onChange:this.onChange,checked:!0}),s("div",{class:"o-switch-cp__box"})):s("input",a({},h(o,"o-switch"),{type:"checkbox",ref:function(i){e._ele=i},onChange:this.onChange}))},t.css=d,t.propTypes={checked:Boolean},t=_([l("o-switch")],t),t})(u);
