var N=Object.defineProperty;var D=(a,t,e)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var m=(a,t,e)=>(D(a,typeof t!="symbol"?t+"":t,e),e);import{h as z,e as T,a as W,W as X}from"./index.929ba56b.js";/*! *****************************************************************************
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
***************************************************************************** */var A=function(a,t){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var o in i)i.hasOwnProperty(o)&&(e[o]=i[o])},A(a,t)};function Y(a,t){A(a,t);function e(){this.constructor=a}a.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var C=function(){return C=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++){e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},C.apply(this,arguments)};function I(a,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var c=a.length-1;c>=0;c--)(n=a[c])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r}var U=`.pickr {
  position: relative;
  overflow: visible;
  transform: translateY(0); }
  .pickr * {
    box-sizing: border-box; }

.pickr .pcr-button {
  position: relative;
  height: 2em;
  width: 2em;
  padding: 0.5em;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  border-radius: 0.15em;
  background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg>') no-repeat center;
  background-size: 0;
  transition: all 0.3s; }
  .pickr .pcr-button::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 0.5em;
    border-radius: 0.15em;
    z-index: -1; }
  .pickr .pcr-button::before {
    z-index: initial; }
  .pickr .pcr-button::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background 0.3s;
    background: currentColor;
    border-radius: 0.15em; }
  .pickr .pcr-button.clear {
    background-size: 70%; }
    .pickr .pcr-button.clear::before {
      opacity: 0; }
    .pickr .pcr-button.clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }
  .pickr .pcr-button.disabled {
    cursor: not-allowed; }

.pickr input,
.pickr button,
.pcr-app input,
.pcr-app button {
  outline: none;
  border: none;
  -webkit-appearance: none; }
  .pickr input:focus,
  .pickr button:focus,
  .pcr-app input:focus,
  .pcr-app button:focus {
    box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }

.pcr-app {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  box-shadow: 0 0.15em 1.5em 0 rgba(0, 0, 0, 0.1), 0 0 1em 0 rgba(0, 0, 0, 0.03);
  width: 22.5em;
  max-width: 95vw;
  padding: 0.8em;
  border-radius: 0.1em;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  left: 0;
  top: 0; }
  .pcr-app.visible {
    visibility: visible;
    opacity: 1; }

.pcr-app .pcr-swatches {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.75em; }
  .pcr-app .pcr-swatches.pcr-last {
    margin: 0; }
  @supports (display: grid) {
    .pcr-app .pcr-swatches {
      display: grid;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(auto-fit, 1.75em); } }
  .pcr-app .pcr-swatches > button {
    position: relative;
    width: 1.75em;
    height: 1.75em;
    border-radius: 0.15em;
    cursor: pointer;
    margin: 2.5px;
    flex-shrink: 0;
    justify-self: center;
    transition: all 0.15s;
    overflow: hidden;
    background: transparent;
    z-index: 1; }
    .pcr-app .pcr-swatches > button::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 6px;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-swatches > button::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0.15em;
      box-sizing: border-box; }
    .pcr-app .pcr-swatches > button:hover {
      filter: brightness(1.05); }

.pcr-app .pcr-interaction {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -0.2em 0 -0.2em; }
  .pcr-app .pcr-interaction > * {
    margin: 0 0.2em; }
  .pcr-app .pcr-interaction input {
    letter-spacing: 0.07em;
    font-size: 0.75em;
    text-align: center;
    cursor: pointer;
    color: #75797e;
    background: #f1f3f4;
    border-radius: 0.15em;
    transition: all 0.15s;
    padding: 0.45em 0.5em;
    margin-top: 0.75em; }
    .pcr-app .pcr-interaction input:hover {
      filter: brightness(0.975); }
    .pcr-app .pcr-interaction input:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(66, 133, 244, 0.75); }
  .pcr-app .pcr-interaction .pcr-result {
    color: #75797e;
    text-align: left;
    flex: 1 1 8em;
    min-width: 8em;
    transition: all 0.2s;
    border-radius: 0.15em;
    background: #f1f3f4;
    cursor: text; }
    .pcr-app .pcr-interaction .pcr-result::selection {
      background: #4285f4;
      color: #fff; }
  .pcr-app .pcr-interaction .pcr-type.active {
    color: #fff;
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear,
  .pcr-app .pcr-interaction .pcr-save {
    color: #fff;
    width: auto; }
  .pcr-app .pcr-interaction .pcr-save,
  .pcr-app .pcr-interaction .pcr-clear {
    color: #fff; }
    .pcr-app .pcr-interaction .pcr-save:hover,
    .pcr-app .pcr-interaction .pcr-clear:hover {
      filter: brightness(0.925); }
  .pcr-app .pcr-interaction .pcr-save {
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear {
    background: #f44250; }
    .pcr-app .pcr-interaction .pcr-clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(244, 66, 80, 0.75); }

.pcr-app .pcr-selection {
  display: flex;
  justify-content: space-between;
  flex-grow: 1; }
  .pcr-app .pcr-selection .pcr-picker {
    position: absolute;
    height: 18px;
    width: 18px;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none; }
  .pcr-app .pcr-selection .pcr-color-preview {
    position: relative;
    z-index: 1;
    width: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-preview::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 0.5em;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color {
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
      border-radius: 0.15em 0.15em 0 0;
      z-index: 2; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      border-radius: 0 0 0.15em 0.15em; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color,
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      background: currentColor;
      width: 100%;
      height: 50%; }
  .pcr-app .pcr-selection .pcr-color-palette,
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    position: relative;
    user-select: none;
    display: flex;
    flex-direction: column;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab; }
    .pcr-app .pcr-selection .pcr-color-palette:active,
    .pcr-app .pcr-selection .pcr-color-chooser:active,
    .pcr-app .pcr-selection .pcr-color-opacity:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing; }
  .pcr-app .pcr-selection .pcr-color-palette {
    width: 100%;
    height: 8em;
    z-index: 1; }
    .pcr-app .pcr-selection .pcr-color-palette .pcr-palette {
      flex-grow: 1;
      border-radius: 0.15em; }
      .pcr-app .pcr-selection .pcr-color-palette .pcr-palette::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
        background-size: 0.5em;
        border-radius: 0.15em;
        z-index: -1; }
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    margin-left: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-picker,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-picker {
      left: 50%;
      transform: translateX(-50%); }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
      width: 8px;
      flex-grow: 1;
      border-radius: 50em; }
  .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider {
    background: linear-gradient(to bottom, red, yellow, lime, cyan, blue, magenta, red); }
  .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
    background: linear-gradient(to bottom, transparent, black), url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 100%, 50%; }

.pickr {
  position: relative;
  overflow: visible;
  transform: translateY(0); }
  .pickr * {
    box-sizing: border-box; }

.pickr .pcr-button {
  position: relative;
  height: 2em;
  width: 2em;
  padding: 0.5em;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  border-radius: 0.15em;
  background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg>') no-repeat center;
  background-size: 0;
  transition: all 0.3s; }
  .pickr .pcr-button::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 0.5em;
    border-radius: 0.15em;
    z-index: -1; }
  .pickr .pcr-button::before {
    z-index: initial; }
  .pickr .pcr-button::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background 0.3s;
    background: currentColor;
    border-radius: 0.15em; }
  .pickr .pcr-button.clear {
    background-size: 70%; }
    .pickr .pcr-button.clear::before {
      opacity: 0; }
    .pickr .pcr-button.clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }
  .pickr .pcr-button.disabled {
    cursor: not-allowed; }

.pickr input,
.pickr button,
.pcr-app input,
.pcr-app button {
  outline: none;
  border: none;
  -webkit-appearance: none; }
  .pickr input:focus,
  .pickr button:focus,
  .pcr-app input:focus,
  .pcr-app button:focus {
    box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }

.pcr-app {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  box-shadow: 0 0.15em 1.5em 0 rgba(0, 0, 0, 0.1), 0 0 1em 0 rgba(0, 0, 0, 0.03);
  width: 22.5em;
  max-width: 95vw;
  padding: 0.8em;
  border-radius: 0.1em;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  left: 0;
  top: 0; }
  .pcr-app.visible {
    visibility: visible;
    opacity: 1; }

.pcr-app .pcr-swatches {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.75em; }
  .pcr-app .pcr-swatches.pcr-last {
    margin: 0; }
  @supports (display: grid) {
    .pcr-app .pcr-swatches {
      display: grid;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(auto-fit, 1.75em); } }
  .pcr-app .pcr-swatches > button {
    position: relative;
    width: 1.75em;
    height: 1.75em;
    border-radius: 0.15em;
    cursor: pointer;
    margin: 2.5px;
    flex-shrink: 0;
    justify-self: center;
    transition: all 0.15s;
    overflow: hidden;
    background: transparent;
    z-index: 1; }
    .pcr-app .pcr-swatches > button::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 6px;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-swatches > button::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0.15em;
      box-sizing: border-box; }
    .pcr-app .pcr-swatches > button:hover {
      filter: brightness(1.05); }

.pcr-app .pcr-interaction {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -0.2em 0 -0.2em; }
  .pcr-app .pcr-interaction > * {
    margin: 0 0.2em; }
  .pcr-app .pcr-interaction input {
    letter-spacing: 0.07em;
    font-size: 0.75em;
    text-align: center;
    cursor: pointer;
    color: #75797e;
    background: #f1f3f4;
    border-radius: 0.15em;
    transition: all 0.15s;
    padding: 0.45em 0.5em;
    margin-top: 0.75em; }
    .pcr-app .pcr-interaction input:hover {
      filter: brightness(0.975); }
    .pcr-app .pcr-interaction input:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(66, 133, 244, 0.75); }
  .pcr-app .pcr-interaction .pcr-result {
    color: #75797e;
    text-align: left;
    flex: 1 1 8em;
    min-width: 8em;
    transition: all 0.2s;
    border-radius: 0.15em;
    background: #f1f3f4;
    cursor: text; }
    .pcr-app .pcr-interaction .pcr-result::selection {
      background: #4285f4;
      color: #fff; }
  .pcr-app .pcr-interaction .pcr-type.active {
    color: #fff;
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear,
  .pcr-app .pcr-interaction .pcr-save {
    color: #fff;
    width: auto; }
  .pcr-app .pcr-interaction .pcr-save,
  .pcr-app .pcr-interaction .pcr-clear {
    color: #fff; }
    .pcr-app .pcr-interaction .pcr-save:hover,
    .pcr-app .pcr-interaction .pcr-clear:hover {
      filter: brightness(0.925); }
  .pcr-app .pcr-interaction .pcr-save {
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear {
    background: #f44250; }
    .pcr-app .pcr-interaction .pcr-clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(244, 66, 80, 0.75); }

.pcr-app .pcr-selection {
  display: flex;
  justify-content: space-between;
  flex-grow: 1; }
  .pcr-app .pcr-selection .pcr-picker {
    position: absolute;
    height: 18px;
    width: 18px;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none; }
  .pcr-app .pcr-selection .pcr-color-preview {
    position: relative;
    z-index: 1;
    width: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-preview::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 0.5em;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color {
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
      border-radius: 0.15em 0.15em 0 0;
      z-index: 2; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      border-radius: 0 0 0.15em 0.15em; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color,
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      background: currentColor;
      width: 100%;
      height: 50%; }
  .pcr-app .pcr-selection .pcr-color-palette,
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    position: relative;
    user-select: none;
    display: flex;
    flex-direction: column;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab; }
    .pcr-app .pcr-selection .pcr-color-palette:active,
    .pcr-app .pcr-selection .pcr-color-chooser:active,
    .pcr-app .pcr-selection .pcr-color-opacity:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing; }
  .pcr-app .pcr-selection .pcr-color-palette {
    width: 100%;
    height: 8em;
    z-index: 1; }
    .pcr-app .pcr-selection .pcr-color-palette .pcr-palette {
      flex-grow: 1;
      border-radius: 0.15em; }
      .pcr-app .pcr-selection .pcr-color-palette .pcr-palette::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
        background-size: 0.5em;
        border-radius: 0.15em;
        z-index: -1; }
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    margin-left: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-picker,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-picker {
      left: 50%;
      transform: translateX(-50%); }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
      width: 8px;
      flex-grow: 1;
      border-radius: 50em; }
  .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider {
    background: linear-gradient(to bottom, red, yellow, lime, cyan, blue, magenta, red); }
  .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
    background: linear-gradient(to bottom, transparent, black), url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 100%, 50%; }
`;const d=j.bind(null,"addEventListener"),f=j.bind(null,"removeEventListener");function j(a,t,e,i,o={}){t instanceof HTMLCollection||t instanceof NodeList?t=Array.from(t):Array.isArray(t)||(t=[t]),Array.isArray(e)||(e=[e]);for(const r of t)for(const n of e)r[a](n,i,{capture:!1,...o});return Array.prototype.slice.call(arguments,1)}function B(a){const t=document.createElement("div");return t.innerHTML=a.trim(),t.firstElementChild}function x(a,t){const e=a.getAttribute(t);return a.removeAttribute(t),e}function O(a){function t(e,i={}){const o=x(e,"data-con"),r=x(e,"data-key");r&&(i[r]=e);const n=o?i[o]={}:i;for(let c of Array.from(e.children)){const s=x(c,"data-arr");s?(n[s]||(n[s]=[])).push(c):t(c,n)}return i}return t(B(a))}function R(a){let t=a.path||a.composedPath&&a.composedPath();if(t)return t;let e=a.target.parentElement;for(t=[a.target,e];e=e.parentElement;)t.push(e);return t.push(document,window),t}function E(a,t=!0){const e=o=>o>="0"&&o<="9"||o==="-"||o===".";function i(o){const r=a.value,n=a.selectionStart;let c=n,s="";for(let p=n-1;p>0&&e(r[p]);p--)s=r[p]+s,c--;for(let p=n,l=r.length;p<l&&e(r[p]);p++)s+=r[p];if(s.length>0&&!isNaN(s)&&isFinite(s)){const p=o.deltaY<0?1:-1,l=[1,10,100][Number(o.shiftKey||o.ctrlKey*2)]*p;let u=Number(s)+l;!t&&u<0&&(u=0);const h=r.substr(0,c)+u+r.substring(c+s.length,r.length),g=c+String(u).length;a.value=h,a.focus(),a.setSelectionRange(g,g)}o.preventDefault(),a.dispatchEvent(new Event("input"))}d(a,"focus",()=>d(window,"wheel",i,{passive:!1})),d(a,"blur",()=>f(window,"wheel",i))}var G=Object.freeze({__proto__:null,on:d,off:f,createElementFromString:B,removeAttribute:x,createFromTemplate:O,eventPath:R,adjustableInputNumbers:E});const{min:v,max:q,floor:K,round:J}=Math;function Q(a){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=a,t.fillStyle}function S(a,t,e){a=a/360*6,t/=100,e/=100;let i=K(a),o=a-i,r=e*(1-t),n=e*(1-o*t),c=e*(1-(1-o)*t),s=i%6,p=[e,n,r,r,c,e][s],l=[c,e,e,n,r,r][s],u=[r,r,c,e,e,n][s];return[p*255,l*255,u*255]}function tt(a,t,e){return S(a,t,e).map(i=>J(i).toString(16).padStart(2,"0"))}function et(a,t,e){const i=S(a,t,e),o=i[0]/255,r=i[1]/255,n=i[2]/255;let c,s,p,l;return c=v(1-o,1-r,1-n),s=c===1?0:(1-o-c)/(1-c),p=c===1?0:(1-r-c)/(1-c),l=c===1?0:(1-n-c)/(1-c),[s*100,p*100,l*100,c*100]}function rt(a,t,e){t/=100,e/=100;let i=(2-t)*e/2;return i!==0&&(i===1?t=0:i<.5?t=t*e/(i*2):t=t*e/(2-i*2)),[a,t*100,i*100]}function $(a,t,e){a/=255,t/=255,e/=255;let i,o,r;const n=v(a,t,e),c=q(a,t,e),s=c-n;if(r=c,s===0)i=o=0;else{o=s/c;let p=((c-a)/6+s/2)/s,l=((c-t)/6+s/2)/s,u=((c-e)/6+s/2)/s;a===c?i=u-l:t===c?i=1/3+p-u:e===c&&(i=2/3+l-p),i<0?i+=1:i>1&&(i-=1)}return[i*360,o*100,r*100]}function ot(a,t,e,i){a/=100,t/=100,e/=100,i/=100;const o=(1-v(1,a*(1-i)+i))*255,r=(1-v(1,t*(1-i)+i))*255,n=(1-v(1,e*(1-i)+i))*255;return[...$(o,r,n)]}function it(a,t,e){t/=100,e/=100,t*=e<.5?e:1-e;let i=2*t/(e+t)*100,o=(e+t)*100;return[a,i,o]}function nt(a){return $(...a.match(/.{2}/g).map(t=>parseInt(t,16)))}function Z(a){a=a.match(/^[a-zA-Z]+$/)?Q(a):a;const t={cmyk:/^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,rgba:/^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hsla:/^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hsva:/^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hex:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},e=o=>o.map(r=>/^(|\d+)\.\d+|\d+$/.test(r)?Number(r):void 0);let i;for(const o in t)if(!!(i=t[o].exec(a)))switch(o){case"cmyk":{let[,r,n,c,s]=e(i);if(r>100||n>100||c>100||s>100)break;return{values:[...ot(r,n,c,s),1],type:o}}case"rgba":{let[,,r,n,c,s=1]=e(i);if(r>255||n>255||c>255||s<0||s>1)break;return{values:[...$(r,n,c),s],type:o}}case"hex":{const r=(s,p)=>[s.substring(0,p),s.substring(p,s.length)];let[,n]=i;n.length===3?n+="F":n.length===6&&(n+="FF");let c;return n.length===4?[n,c]=r(n,3).map(s=>s+s):n.length===8&&([n,c]=r(n,6)),c=parseInt(c,16)/255,{values:[...nt(n),c],type:o}}case"hsla":{let[,,r,n,c,s=1]=e(i);if(r>360||n>100||c>100||s<0||s>1)break;return{values:[...it(r,n,c),s],type:o}}case"hsva":{let[,,r,n,c,s=1]=e(i);if(r>360||n>100||c>100||s<0||s>1)break;return{values:[r,n,c,s],type:o}}}return{values:null,type:null}}function b(a=0,t=0,e=0,i=1){const{ceil:o}=Math,r={h:a,s:t,v:e,a:i,toHSVA(){const n=[r.h,r.s,r.v],c=n.map(o);return n.push(r.a),n.toString=()=>`hsva(${c[0]}, ${c[1]}%, ${c[2]}%, ${r.a.toFixed(1)})`,n},toHSLA(){const n=rt(r.h,r.s,r.v),c=n.map(o);return n.push(r.a),n.toString=()=>`hsla(${c[0]}, ${c[1]}%, ${c[2]}%, ${r.a.toFixed(1)})`,n},toRGBA(){const n=S(r.h,r.s,r.v),c=n.map(o);return n.push(r.a),n.toString=()=>`rgba(${c[0]}, ${c[1]}, ${c[2]}, ${r.a.toFixed(1)})`,n},toCMYK(){const n=et(r.h,r.s,r.v),c=n.map(o);return n.toString=()=>`cmyk(${c[0]}%, ${c[1]}%, ${c[2]}%, ${c[3]}%)`,n},toHEXA(){const n=tt(r.h,r.s,r.v);return n.toString=()=>{const c=r.a>=1?"":Number((r.a*255).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return`#${n.join("").toUpperCase()+c}`},n},clone(){return b(r.h,r.s,r.v,r.a)}};return r}function V(a){const t={options:Object.assign({lockX:!1,lockY:!1,onchange:()=>0},a),_tapstart(o){d(document,["mouseup","touchend","touchcancel"],t._tapstop),d(document,["mousemove","touchmove"],t._tapmove),o.preventDefault(),t._tapmove(o)},_tapmove(o){const{options:r,cache:n}=t,{element:c}=r,s=t.options.wrapper.getBoundingClientRect();let p=0,l=0;if(o){const u=o&&o.touches&&o.touches[0];p=o?(u||o).clientX:0,l=o?(u||o).clientY:0,p<s.left?p=s.left:p>s.left+s.width&&(p=s.left+s.width),l<s.top?l=s.top:l>s.top+s.height&&(l=s.top+s.height),p-=s.left,l-=s.top}else n&&(p=n.x*s.width,l=n.y*s.height);r.lockX||(c.style.left=`calc(${p/s.width*100}% - ${c.offsetWidth/2}px)`),r.lockY||(c.style.top=`calc(${l/s.height*100}% - ${c.offsetWidth/2}px)`),t.cache={x:p/s.width,y:l/s.height},r.onchange(p,l)},_tapstop(){f(document,["mouseup","touchend","touchcancel"],t._tapstop),f(document,["mousemove","touchmove"],t._tapmove)},trigger(){t._tapmove()},update(o=0,r=0){const n=t.options.wrapper.getBoundingClientRect();t._tapmove({clientX:n.left+o,clientY:n.top+r})},destroy(){const{options:o,_tapstart:r}=t;f([o.wrapper,o.element],"mousedown",r),f([o.wrapper,o.element],"touchstart",r,{passive:!1})}},{options:e,_tapstart:i}=t;return d([e.wrapper,e.element],"mousedown",i),d([e.wrapper,e.element],"touchstart",i,{passive:!1}),t}function at(a={}){a=Object.assign({onchange:()=>0,className:"",elements:[]},a);const t=d(a.elements,"click",e=>{a.elements.forEach(i=>i.classList[e.target===i?"add":"remove"](a.className)),a.onchange(e)});return{destroy:()=>f(...t)}}function ct({el:a,reference:t,pos:e,padding:i=8}){const o={start:"sme",middle:"mse",end:"ems"},r={top:"tb",right:"rl",bottom:"bt",left:"lr"},[n,c="middle"]=e.split("-"),s=n==="top"||n==="bottom";return{update(){const p=t.getBoundingClientRect(),l=a.getBoundingClientRect(),u=s?{t:p.top-l.height-i,b:p.bottom+i}:{r:p.right+i,l:p.left-l.width-i},h=s?{s:p.left+p.width-l.width,m:-l.width/2+(p.left+p.width/2),e:p.left}:{s:p.bottom-l.height,m:p.bottom-p.height/2-l.height/2,e:p.bottom-p.height};function g(y,_,k){const M=k==="top",L=M?l.height:l.width,P=window[M?"innerHeight":"innerWidth"];for(const F of y){const H=_[F];if(H>0&&H+L<P){a.style[k]=`${H}px`;break}}}g(o[c],h,s?"left":"top"),g(r[n],u,s?"top":"left")}}}var st=({components:a,strings:t,useAsButton:e,inline:i,appClass:o,width:r})=>{const n=p=>p?"":'style="display:none" hidden',c=O(`
      <div data-key="root" class="pickr">

        ${e?"":'<button type="button" data-key="button" class="pcr-button"></button>'}

        <div data-key="app" class="pcr-app ${o||""}" ${`style="${i?"position: unset;":""}${r?`width:${r};`:""}"`}>
          <div class="pcr-selection" ${n(a.palette)}>
            <div data-con="preview" class="pcr-color-preview" ${n(a.preview)}>
              <button type="button" data-key="lastColor" class="pcr-last-color"></button>
              <div data-key="currentColor" class="pcr-current-color"></div>
            </div>

            <div data-con="palette" class="pcr-color-palette">
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="palette" class="pcr-palette"></div>
            </div>

            <div data-con="hue" class="pcr-color-chooser" ${n(a.hue)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-hue pcr-slider"></div>
            </div>

            <div data-con="opacity" class="pcr-color-opacity" ${n(a.opacity)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-opacity pcr-slider"></div>
            </div>
          </div>

          <div class="pcr-swatches ${a.palette?"":" pcr-last"}" data-key="swatches"></div> 

          <div data-con="interaction" class="pcr-interaction" ${n(Object.keys(a.interaction).length)}>
            <input data-key="result" class="pcr-result" type="text" spellcheck="false" ${n(a.interaction.input)}>

            <input data-arr="options" class="pcr-type" data-type="HEXA" value="HEXA" type="button" ${n(a.interaction.hex)}>
            <input data-arr="options" class="pcr-type" data-type="RGBA" value="RGBA" type="button" ${n(a.interaction.rgba)}>
            <input data-arr="options" class="pcr-type" data-type="HSLA" value="HSLA" type="button" ${n(a.interaction.hsla)}>
            <input data-arr="options" class="pcr-type" data-type="HSVA" value="HSVA" type="button" ${n(a.interaction.hsva)}>
            <input data-arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${n(a.interaction.cmyk)}>

            <input data-key="save" class="pcr-save" value="${t.save||"Save"}" type="button" ${n(a.interaction.save)}>
            <input data-key="clear" class="pcr-clear" value="${t.clear||"Clear"}" type="button" ${n(a.interaction.clear)}>
          </div>
        </div>
      </div>
    `),s=c.interaction;return s.options.find(p=>!p.hidden&&!p.classList.add("active")),s.type=()=>s.options.find(p=>p.classList.contains("active")),c};class w{constructor(t){m(this,"_initializingActive",!0);m(this,"_recalc",!0);m(this,"_color",b());m(this,"_lastColor",b());m(this,"_swatchColors",[]);m(this,"_eventListener",{swatchselect:[],change:[],save:[],init:[]});this.options=t=Object.assign({appClass:null,useAsButton:!1,disabled:!1,comparison:!0,components:{interaction:{}},strings:{},swatches:null,inline:!1,default:"#42445A",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);const{swatches:e,inline:i,components:o,position:r}=t;o.interaction||(o.interaction={});const{preview:n,opacity:c,hue:s,palette:p}=o;o.palette=p||n||c||s,i&&(t.showAlways=!0),this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(h=>this.addSwatch(h)),this._nanopop=ct({reference:this._root.button,el:this._root.app,pos:r});const{button:l}=this._root,u=this;requestAnimationFrame(function h(){if(l.offsetParent===null&&l!==document.body)return requestAnimationFrame(h);u.setColor(t.default),u._rePositioningPicker(),t.defaultRepresentation&&(u._representation=t.defaultRepresentation,u.setColorRepresentation(u._representation)),t.showAlways&&u.show(),u._initializingActive=!1,u._emit("init")})}_preBuild(){const t=this.options;typeof t.el=="string"&&(t.el=t.el.split(/>>/g).reduce((e,i,o,r)=>(e=e.querySelector(i),o<r.length-1?e.shadowRoot:e),document)),this._root=st(t),t.useAsButton&&(this._root.button=t.el),document.body.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;document.body.removeChild(e.root);const{parentElement:i}=t.el;i.lastChild===t.el?i.appendChild(e.app):i.insertBefore(e.app,t.el.nextSibling),t.useAsButton||t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,i={palette:V({element:t._root.palette.picker,wrapper:t._root.palette.palette,onchange(o,r){if(!e.palette)return;const{_color:n,_root:c,options:s}=t;n.s=o/this.wrapper.offsetWidth*100,n.v=100-r/this.wrapper.offsetHeight*100,n.v<0&&(n.v=0);const p=n.toRGBA().toString();this.element.style.background=p,this.wrapper.style.background=`
                        linear-gradient(to top, rgba(0, 0, 0, ${n.a}), transparent),
                        linear-gradient(to left, hsla(${n.h}, 100%, 50%, ${n.a}), rgba(255, 255, 255, ${n.a}))
                    `,s.comparison||(c.button.style.color=p,s.useAsButton||(c.preview.lastColor.style.color=p)),c.preview.currentColor.style.color=p,t._recalc&&t._updateOutput(),c.button.classList.remove("clear")}}),hue:V({lockX:!0,element:t._root.hue.picker,wrapper:t._root.hue.slider,onchange(o,r){!e.hue||!e.palette||(t._color.h=r/this.wrapper.offsetHeight*360,this.element.style.backgroundColor=`hsl(${t._color.h}, 100%, 50%)`,i.palette.trigger())}}),opacity:V({lockX:!0,element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onchange(o,r){!e.opacity||!e.palette||(t._color.a=Math.round(r/this.wrapper.offsetHeight*100)/100,this.element.style.background=`rgba(0, 0, 0, ${t._color.a})`,t.components.palette.trigger())}}),selectable:at({elements:t._root.interaction.options,className:"active",onchange(o){t._representation=o.target.getAttribute("data-type").toUpperCase(),t._updateOutput()}})};this.components=i}_bindEvents(){const{_root:t,options:e}=this,i=[d(t.interaction.clear,"click",()=>this._clearColor()),d(t.preview.lastColor,"click",()=>this.setHSVA(...this._lastColor.toHSVA())),d(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),d(t.interaction.result,["keyup","input"],o=>{this._recalc=!1,this.setColor(o.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),o.stopImmediatePropagation()}),d([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0)];if(!e.showAlways){const o=e.closeWithKey;i.push(d(t.button,"click",()=>this.isOpen()?this.hide():this.show()),d(document,"keyup",r=>this.isOpen()&&(r.key===o||r.code===o)&&this.hide()),d(document,["touchstart","mousedown"],r=>{this.isOpen()&&!R(r).some(n=>n===t.app||n===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers&&E(t.interaction.result,!1),!e.inline){let o=null;const r=this;i.push(d(window,["scroll","resize"],()=>{r.isOpen()&&(o===null?(o=setTimeout(()=>o=null,100),requestAnimationFrame(function n(){r._rePositioningPicker(),o!==null&&requestAnimationFrame(n)})):(clearTimeout(o),o=setTimeout(()=>o=null,100)))}))}this._eventBindings=i}_rePositioningPicker(){this.options.inline||this._nanopop.update()}_updateOutput(){if(this._root.interaction.type()){const t=`to${this._root.interaction.type().getAttribute("data-type")}`;this._root.interaction.result.value=typeof this._color[t]=="function"?this._color[t]().toString():""}this._initializingActive||this._emit("change",this._color)}_clearColor(){const{_root:t,options:e}=this;e.useAsButton||(t.button.style.color="rgba(0, 0, 0, 0.15)"),t.button.classList.add("clear"),e.showAlways||this.hide(),this._initializingActive||this._emit("save",null)}_emit(t,...e){this._eventListener[t].forEach(i=>i(...e,this))}on(t,e){return typeof e=="function"&&typeof t=="string"&&t in this._eventListener&&this._eventListener[t].push(e),this}off(t,e){const i=this._eventListener[t];if(i){const o=i.indexOf(e);~o&&i.splice(o,1)}return this}addSwatch(t){const{values:e}=Z(t);if(e){const{_swatchColors:i,_root:o}=this,r=b(...e),n=B(`<button type="button" style="color: ${r.toRGBA()}"></button>`);return o.swatches.appendChild(n),i.push({element:n,hsvaColorObject:r}),this._eventBindings.push(d(n,"click",()=>{this.setHSVA(...r.toHSVA(),!0),this._emit("swatchselect",r)})),!0}return!1}removeSwatch(t){if(typeof t=="number"){const e=this._swatchColors[t];if(e){const{element:i}=e;return this._root.swatches.removeChild(i),this._swatchColors.splice(t,1),!0}}return!1}applyColor(t=!1){const{preview:e,button:i}=this._root,o=this._color.toRGBA().toString();e.lastColor.style.color=o,this.options.useAsButton||(i.style.color=o),i.classList.remove("clear"),this._lastColor=this._color.clone(),!this._initializingActive&&!t&&this._emit("save",this._color)}destroy(){this._eventBindings.forEach(t=>f(...t)),Object.keys(this.components).forEach(t=>this.components[t].destroy())}destroyAndRemove(){this.destroy();const t=this._root.root;t.parentElement.removeChild(t);const e=this._root.app;e.parentElement.removeChild(e);const i=this;Object.keys(i).forEach(o=>i[o]=null)}hide(){return this._root.app.classList.remove("visible"),this}show(){if(!this.options.disabled)return this._root.app.classList.add("visible"),this._rePositioningPicker(),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,i=0,o=1,r=!1){const n=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||i<0||i>100||o<0||o>1)return!1;this._color=b(t,e,i,o);const{hue:c,opacity:s,palette:p}=this.components,u=c.options.wrapper.offsetHeight*(t/360);c.update(0,u);const g=s.options.wrapper.offsetHeight*o;s.update(0,g);const y=p.options.wrapper,_=y.offsetWidth*(e/100),k=y.offsetHeight*(1-i/100);return p.update(_,k),this._recalc=n,this._recalc&&this._updateOutput(),r||this.applyColor(),!0}setColor(t,e=!1){if(t===null)return this._clearColor(),!0;const{values:i,type:o}=Z(t);if(i){const r=o.toUpperCase(),{options:n}=this._root.interaction,c=n.find(s=>s.getAttribute("data-type").startsWith(r));if(c&&!c.hidden)for(const s of n)s.classList[s===c?"add":"remove"]("active");return this.setHSVA(...i,e)}}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}w.utils=G;w.create=a=>new w(a);w.version="0.6.2";var ut=function(a){Y(t,a);function t(){return a!==null&&a.apply(this,arguments)||this}return t.prototype.installed=function(){var e=this,i=w.create({el:this.shadowRoot.querySelector(".picker"),inline:this.props.inline,default:this.props.default,useAsButton:!this.props.button,swatches:this.props.swatches,width:this.props.width,components:{preview:this.props.preview,opacity:this.props.opacity,hue:this.props.hue,interaction:{hex:this.props.hex,rgba:this.props.rgba,hsla:this.props.hsla,hsva:this.props.hsva,cmyk:this.props.cmyk,input:this.props.input,clear:this.props.clear,save:this.props.save}},strings:this.props.strings});i.on("init",function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];e.fire("init",o[0])}).on("save",function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];e.fire("save",{color:o[0].toHEXA().toString(),colorObject:o[0]})}).on("change",function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];e.fire("change",{color:o[0].toHEXA().toString(),colorObject:o[0]})}).on("swatchselect",function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];e.fire("swatch-select",{color:o[0].toHEXA().toString(),colorObject:o[0]})}),this.picker=i},t.prototype.setColor=function(e){return this.picker.setColor(e)},t.prototype.render=function(e){return z("div",C({},T(e,"o-color-picker")),z("div",{class:"picker"}))},t.css=U,t.defaultProps={button:!0,preview:!0,opacity:!0,hue:!0,hex:!0,rgba:!0,hsla:!0,hsva:!1,input:!0,clear:!0,save:!0,cmyk:!1,default:"#07c160",swatches:[],inline:!0,strings:{save:"Save",clear:"Clear"}},t.propTypes={button:Boolean,preview:Boolean,opacity:Boolean,hue:Boolean,hex:Boolean,rgba:Boolean,hsla:Boolean,hsva:Boolean,input:Boolean,clear:Boolean,save:Boolean,cmyk:Boolean,default:String,swatches:Array,inline:Boolean,strings:Object,width:String},t=I([W("o-color-picker")],t),t}(X);export{ut as default};
