/**
 * @omiu/color-picker v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, tag, WeElement } from 'omi';

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
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `.pickr {
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
`


/**
 * Add event(s) to element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
const on = eventListener.bind(null, 'addEventListener');

/**
 * Remove event(s) from element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
const off = eventListener.bind(null, 'removeEventListener');

function eventListener(method, elements, events, fn, options = {}) {

    // Normalize array
    if (elements instanceof HTMLCollection || elements instanceof NodeList) {
        elements = Array.from(elements);
    } else if (!Array.isArray(elements)) {
        elements = [elements];
    }

    if (!Array.isArray(events)) {
        events = [events];
    }

    for (const el of elements) {
        for (const ev of events) {
            el[method](ev, fn, {capture: false, ...options});
        }
    }

    return Array.prototype.slice.call(arguments, 1);
}

/**
 * Creates an DOM-Element out of a string (Single element).
 * @param html HTML representing a single element
 * @returns {Element | null} The element.
 */
function createElementFromString(html) {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstElementChild;
}

/**
 * Removes an attribute from a HTMLElement and returns the value.
 * @param el
 * @param name
 * @return {string}
 */
function removeAttribute(el, name) {
    const value = el.getAttribute(name);
    el.removeAttribute(name);
    return value;
}

/**
 * Creates a new html element, every element which has
 * a 'data-key' attribute will be saved in a object (which will be returned)
 * where the value of 'data-key' ist the object-key and the value the HTMLElement.
 *
 * It's possible to create a hierarchy if you add a 'data-con' attribute. Every
 * sibling will be added to the object which will get the name from the 'data-con' attribute.
 *
 * If you want to create an Array out of multiple elements, you can use the 'data-arr' attribute,
 * the value defines the key and all elements, which has the same parent and the same 'data-arr' attribute,
 * would be added to it.
 *
 * @param str - The HTML String.
 */
function createFromTemplate(str) {

    // Recursive function to resolve template
    function resolve(element, base = {}) {

        // Check key and container attribute
        const con = removeAttribute(element, 'data-con');
        const key = removeAttribute(element, 'data-key');

        // Check and save element
        if (key) {
            base[key] = element;
        }

        // Check all children
        const subtree = con ? (base[con] = {}) : base;
        for (let child of Array.from(element.children)) {

            // Check if element should be saved as array
            const arr = removeAttribute(child, 'data-arr');
            if (arr) {

                // Check if there is already an array and add element
                (subtree[arr] || (subtree[arr] = [])).push(child);
            } else {
                resolve(child, subtree);
            }
        }

        return base;
    }

    return resolve(createElementFromString(str));
}

/**
 * Polyfill for safari & firefox for the eventPath event property.
 * @param evt The event object.
 * @return [String] event path.
 */
function eventPath(evt) {
    let path = evt.path || (evt.composedPath && evt.composedPath());
    if (path) return path;

    let el = evt.target.parentElement;
    path = [evt.target, el];
    while (el = el.parentElement) path.push(el);

    path.push(document, window);
    return path;
}

/**
 * Creates the ability to change numbers in an input field with the scroll-wheel.
 * @param el
 * @param negative
 */
function adjustableInputNumbers(el, negative = true) {

    // Check if a char represents a number
    const isNumChar = c => (c >= '0' && c <= '9') || c === '-' || c === '.';

    function handleScroll(e) {
        const val = el.value;
        const off = el.selectionStart;
        let numStart = off;
        let num = ''; // Will be the number as string

        // Look back
        for (let i = off - 1; i > 0 && isNumChar(val[i]); i--) {
            num = val[i] + num;
            numStart--; // Find start of number
        }

        // Look forward
        for (let i = off, n = val.length; i < n && isNumChar(val[i]); i++) {
            num += val[i];
        }

        // Check if number is valid
        if (num.length > 0 && !isNaN(num) && isFinite(num)) {

            const mul = e.deltaY < 0 ? 1 : -1;
            const inc = ([1, 10, 100])[Number(e.shiftKey || e.ctrlKey * 2)] * mul;
            let newNum = Number(num) + inc;

            if (!negative && newNum < 0) {
                newNum = 0;
            }

            const newStr = val.substr(0, numStart) + newNum + val.substring(numStart + num.length, val.length);
            const curPos = numStart + String(newNum).length;

            // Update value and set cursor
            el.value = newStr;
            el.focus();
            el.setSelectionRange(curPos, curPos);
        }

        // Prevent default
        e.preventDefault();

        // Trigger input event
        el.dispatchEvent(new Event('input'));
    }

    // Bind events
    on(el, 'focus', () => on(window, 'wheel', handleScroll, {passive: false}));
    on(el, 'blur', () => off(window, 'wheel', handleScroll));
}

var _ = /*#__PURE__*/Object.freeze({
    __proto__: null,
    on: on,
    off: off,
    createElementFromString: createElementFromString,
    removeAttribute: removeAttribute,
    createFromTemplate: createFromTemplate,
    eventPath: eventPath,
    adjustableInputNumbers: adjustableInputNumbers
});

// Shorthands
const {min, max, floor, round} = Math;

/**
 * Tries to convert a color name to rgb/a hex representation
 * @param name
 * @returns {string | CanvasGradient | CanvasPattern}
 */
function standardizeColor(name) {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = name;
    return ctx.fillStyle;
}

/**
 * Convert HSV spectrum to RGB.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} Array with rgb values.
 */
function hsvToRgb(h, s, v) {
    h = (h / 360) * 6;
    s /= 100;
    v /= 100;

    let i = floor(h);

    let f = h - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    let mod = i % 6;
    let r = [v, q, p, p, t, v][mod];
    let g = [t, v, v, q, p, p][mod];
    let b = [p, p, t, v, v, q][mod];

    return [
        r * 255,
        g * 255,
        b * 255
    ];
}

/**
 * Convert HSV spectrum to Hex.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {string[]} Hex values
 */
function hsvToHex(h, s, v) {
    return hsvToRgb(h, s, v).map(v =>
        round(v).toString(16).padStart(2, '0')
    );
}

/**
 * Convert HSV spectrum to CMYK.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} CMYK values
 */
function hsvToCmyk(h, s, v) {
    const rgb = hsvToRgb(h, s, v);
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    let k, c, m, y;

    k = min(1 - r, 1 - g, 1 - b);

    c = k === 1 ? 0 : (1 - r - k) / (1 - k);
    m = k === 1 ? 0 : (1 - g - k) / (1 - k);
    y = k === 1 ? 0 : (1 - b - k) / (1 - k);

    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
}

/**
 * Convert HSV spectrum to HSL.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} HSL values
 */
function hsvToHsl(h, s, v) {
    s /= 100, v /= 100;

    let l = (2 - s) * v / 2;

    if (l !== 0) {
        if (l === 1) {
            s = 0;
        } else if (l < 0.5) {
            s = s * v / (l * 2);
        } else {
            s = s * v / (2 - l * 2);
        }
    }

    return [
        h,
        s * 100,
        l * 100
    ];
}

/**
 * Convert RGB to HSV.
 * @param r Red
 * @param g Green
 * @param b Blue
 * @return {number[]} HSV values.
 */
function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    let h, s, v;
    const minVal = min(r, g, b);
    const maxVal = max(r, g, b);
    const delta = maxVal - minVal;

    v = maxVal;
    if (delta === 0) {
        h = s = 0;
    } else {
        s = delta / maxVal;
        let dr = (((maxVal - r) / 6) + (delta / 2)) / delta;
        let dg = (((maxVal - g) / 6) + (delta / 2)) / delta;
        let db = (((maxVal - b) / 6) + (delta / 2)) / delta;

        if (r === maxVal) {
            h = db - dg;
        } else if (g === maxVal) {
            h = (1 / 3) + dr - db;
        } else if (b === maxVal) {
            h = (2 / 3) + dg - dr;
        }

        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }

    return [
        h * 360,
        s * 100,
        v * 100
    ];
}

/**
 * Convert CMYK to HSV.
 * @param c Cyan
 * @param m Magenta
 * @param y Yellow
 * @param k Key (Black)
 * @return {number[]} HSV values.
 */
function cmykToHsv(c, m, y, k) {
    c /= 100, m /= 100, y /= 100, k /= 100;

    const r = (1 - min(1, c * (1 - k) + k)) * 255;
    const g = (1 - min(1, m * (1 - k) + k)) * 255;
    const b = (1 - min(1, y * (1 - k) + k)) * 255;

    return [...rgbToHsv(r, g, b)];
}

/**
 * Convert HSL to HSV.
 * @param h Hue
 * @param s Saturation
 * @param l Lightness
 * @return {number[]} HSV values.
 */
function hslToHsv(h, s, l) {
    s /= 100, l /= 100;
    s *= l < 0.5 ? l : 1 - l;

    let ns = (2 * s / (l + s)) * 100;
    let v = (l + s) * 100;
    return [h, ns, v];
}

/**
 * Convert HEX to HSV.
 * @param hex Hexadecimal string of rgb colors, can have length 3 or 6.
 * @return {number[]} HSV values.
 */
function hexToHsv(hex) {
    return rgbToHsv(...hex.match(/.{2}/g).map(v => parseInt(v, 16)));
}

/**
 * Try's to parse a string which represents a color to a HSV array.
 * Current supported types are cmyk, rgba, hsla and hexadecimal.
 * @param str
 * @return {*}
 */
function parseToHSV(str) {

    // Check if string is a color-name
    str = str.match(/^[a-zA-Z]+$/) ? standardizeColor(str) : str;

    // Regular expressions to match different types of color represention
    const regex = {
        cmyk: /^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,
        rgba: /^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hsla: /^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hsva: /^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hex: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i
    };

    /**
     * Takes an Array of any type, convert strings which represents
     * a number to a number an anything else to undefined.
     * @param array
     * @return {*}
     */
    const numarize = array => array.map(v => /^(|\d+)\.\d+|\d+$/.test(v) ? Number(v) : undefined);

    let match;
    for (const type in regex) {

        // Check if current scheme passed
        if (!(match = regex[type].exec(str)))
            continue;

        // Try to convert
        switch (type) {
            case 'cmyk': {
                let [, c, m, y, k] = numarize(match);

                if (c > 100 || m > 100 || y > 100 || k > 100)
                    break;

                return {values: [...cmykToHsv(c, m, y, k), 1], type};
            }
            case 'rgba': {
                let [, , r, g, b, a = 1] = numarize(match);

                if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1)
                    break;

                return {values: [...rgbToHsv(r, g, b), a], type};
            }
            case 'hex': {
                const splitAt = (s, i) => [s.substring(0, i), s.substring(i, s.length)];
                let [, hex] = match;

                // Fill up opacity if not declared
                if (hex.length === 3) {
                    hex += 'F';
                } else if (hex.length === 6) {
                    hex += 'FF';
                }

                let alpha;
                if (hex.length === 4) {
                    [hex, alpha] = splitAt(hex, 3).map(v => v + v);
                } else if (hex.length === 8) {
                    [hex, alpha] = splitAt(hex, 6);
                }

                // Convert 0 - 255 to 0 - 1 for opacity
                alpha = parseInt(alpha, 16) / 255;
                return {values: [...hexToHsv(hex), alpha], type};
            }
            case 'hsla': {
                let [, , h, s, l, a = 1] = numarize(match);

                if (h > 360 || s > 100 || l > 100 || a < 0 || a > 1)
                    break;

                return {values: [...hslToHsv(h, s, l), a], type};
            }
            case 'hsva': {
                let [, , h, s, v, a = 1] = numarize(match);

                if (h > 360 || s > 100 || v > 100 || a < 0 || a > 1)
                    break;

                return {values: [h, s, v, a], type};
            }
        }
    }

    return {values: null, type: null};
}

/**
 * Simple class which holds the properties
 * of the color represention model hsla (hue saturation lightness alpha)
 */
function HSVaColor(h = 0, s = 0, v = 0, a = 1) {
    const {ceil} = Math;

    const that = {
        h, s, v, a,

        toHSVA() {
            const hsva = [that.h, that.s, that.v];
            const rhsva = hsva.map(ceil);

            hsva.push(that.a);
            hsva.toString = () => `hsva(${rhsva[0]}, ${rhsva[1]}%, ${rhsva[2]}%, ${that.a.toFixed(1)})`;
            return hsva;
        },

        toHSLA() {
            const hsla = hsvToHsl(that.h, that.s, that.v);
            const rhsla = hsla.map(ceil);

            hsla.push(that.a);
            hsla.toString = () => `hsla(${rhsla[0]}, ${rhsla[1]}%, ${rhsla[2]}%, ${that.a.toFixed(1)})`;
            return hsla;
        },

        toRGBA() {
            const rgba = hsvToRgb(that.h, that.s, that.v);
            const rrgba = rgba.map(ceil);

            rgba.push(that.a);
            rgba.toString = () => `rgba(${rrgba[0]}, ${rrgba[1]}, ${rrgba[2]}, ${that.a.toFixed(1)})`;
            return rgba;
        },

        toCMYK() {
            const cmyk = hsvToCmyk(that.h, that.s, that.v);
            const rcmyk = cmyk.map(ceil);

            cmyk.toString = () => `cmyk(${rcmyk[0]}%, ${rcmyk[1]}%, ${rcmyk[2]}%, ${rcmyk[3]}%)`;
            return cmyk;
        },

        toHEXA() {
            const hex = hsvToHex(that.h, that.s, that.v);

            hex.toString = () => {

                // Check if alpha channel make sense, convert it to 255 number space, convert
                // to hex and pad it with zeros if needet.
                const alpha = that.a >= 1 ? '' : Number((that.a * 255).toFixed(0))
                    .toString(16)
                    .toUpperCase().padStart(2, '0');

                return `#${hex.join('').toUpperCase() + alpha}`;
            };

            return hex;
        },

        clone() {
            return HSVaColor(that.h, that.s, that.v, that.a);
        }
    };

    return that;
}

function Moveable(opt) {

    const that = {

        // Assign default values
        options: Object.assign({
            lockX: false,
            lockY: false,
            onchange: () => 0
        }, opt),

        _tapstart(evt) {
            on(document, ['mouseup', 'touchend', 'touchcancel'], that._tapstop);
            on(document, ['mousemove', 'touchmove'], that._tapmove);

            // Prevent default touch event
            evt.preventDefault();

            // Trigger
            that._tapmove(evt);
        },

        _tapmove(evt) {
            const {options, cache} = that;
            const {element} = options;
            const b = that.options.wrapper.getBoundingClientRect();

            let x = 0, y = 0;
            if (evt) {
                const touch = evt && evt.touches && evt.touches[0];
                x = evt ? (touch || evt).clientX : 0;
                y = evt ? (touch || evt).clientY : 0;

                // Reset to bounds
                if (x < b.left) x = b.left;
                else if (x > b.left + b.width) x = b.left + b.width;
                if (y < b.top) y = b.top;
                else if (y > b.top + b.height) y = b.top + b.height;

                // Normalize
                x -= b.left;
                y -= b.top;
            } else if (cache) {
                x = cache.x * b.width;
                y = cache.y * b.height;
            }

            if (!options.lockX) {
                element.style.left = `calc(${x / b.width * 100}% - ${element.offsetWidth / 2}px)`;
            }

            if (!options.lockY) {
                element.style.top = `calc(${y / b.height * 100}% - ${element.offsetWidth / 2}px)`;
            }

            that.cache = {x: x / b.width, y: y / b.height};
            options.onchange(x, y);
        },

        _tapstop() {
            off(document, ['mouseup', 'touchend', 'touchcancel'], that._tapstop);
            off(document, ['mousemove', 'touchmove'], that._tapmove);
        },

        trigger() {
            that._tapmove();
        },

        update(x = 0, y = 0) {
            const wrapperRect = that.options.wrapper.getBoundingClientRect();
            that._tapmove({
                clientX: wrapperRect.left + x,
                clientY: wrapperRect.top + y
            });
        },

        destroy() {
            const {options, _tapstart} = that;
            off([options.wrapper, options.element], 'mousedown', _tapstart);
            off([options.wrapper, options.element], 'touchstart', _tapstart, {
                passive: false
            });
        }
    };

    // Initilize
    const {options, _tapstart} = that;
    on([options.wrapper, options.element], 'mousedown', _tapstart);
    on([options.wrapper, options.element], 'touchstart', _tapstart, {
        passive: false
    });

    return that;
}

function Selectable(opt = {}) {
    opt = Object.assign({
        onchange: () => 0,
        className: '',
        elements: []
    }, opt);

    const onTap = on(opt.elements, 'click', evt => {
        opt.elements.forEach(e =>
            e.classList[evt.target === e ? 'add' : 'remove'](opt.className)
        );

        opt.onchange(evt);
    });

    return {
        destroy: () => off(...onTap)
    };
}

/**
 * Micro positioning-engine
 * @param el
 * @param reference
 * @param pos
 * @param padding
 * @returns {{update(): void}}
 * @constructor
 */
function Nanopop({el, reference, pos, padding = 8}) {
    const vBehaviour = {start: 'sme', middle: 'mse', end: 'ems'};
    const hBehaviour = {top: 'tb', right: 'rl', bottom: 'bt', left: 'lr'};
    const [position, variant = 'middle'] = pos.split('-');
    const isVertical = (position === 'top' || position === 'bottom');

    return {
        update() {
            const rb = reference.getBoundingClientRect();
            const eb = el.getBoundingClientRect();

            const positions = isVertical ? {
                t: rb.top - eb.height - padding,
                b: rb.bottom + padding
            } : {
                r: rb.right + padding,
                l: rb.left - eb.width - padding
            };

            const variants = isVertical ? {
                s: rb.left + rb.width - eb.width,
                m: (-eb.width / 2) + (rb.left + rb.width / 2),
                e: rb.left
            } : {
                s: rb.bottom - eb.height,
                m: rb.bottom - rb.height / 2 - eb.height / 2,
                e: rb.bottom - rb.height
            };

            function apply(bevs, vars, styleprop) {
                const vertical = styleprop === 'top';
                const adder = vertical ? eb.height : eb.width;
                const win = window[vertical ? 'innerHeight' : 'innerWidth'];

                for (const ch of bevs) {
                    const v = vars[ch];
                    if (v > 0 && (v + adder) < win) {
                        el.style[styleprop] = `${v}px`;
                        break;
                    }
                }
            }

            apply(vBehaviour[variant], variants, isVertical ? 'left' : 'top');
            apply(hBehaviour[position], positions, isVertical ? 'top' : 'left');
        }
    };
}

var buildPickr = ({components: c, strings: s, useAsButton, inline, appClass, width}) => {
    const hidden = con => con ? '' : 'style="display:none" hidden';

    const root = createFromTemplate(`
      <div data-key="root" class="pickr">

        ${useAsButton ? '' : '<button type="button" data-key="button" class="pcr-button"></button>'}

        <div data-key="app" class="pcr-app ${appClass || ''}" ${`style="${inline ? 'position: unset;':''}${width?`width:${width};`:''}"`}>
          <div class="pcr-selection" ${hidden(c.palette)}>
            <div data-con="preview" class="pcr-color-preview" ${hidden(c.preview)}>
              <button type="button" data-key="lastColor" class="pcr-last-color"></button>
              <div data-key="currentColor" class="pcr-current-color"></div>
            </div>

            <div data-con="palette" class="pcr-color-palette">
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="palette" class="pcr-palette"></div>
            </div>

            <div data-con="hue" class="pcr-color-chooser" ${hidden(c.hue)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-hue pcr-slider"></div>
            </div>

            <div data-con="opacity" class="pcr-color-opacity" ${hidden(c.opacity)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-opacity pcr-slider"></div>
            </div>
          </div>

          <div class="pcr-swatches ${c.palette ? '' : ' pcr-last'}" data-key="swatches"></div> 

          <div data-con="interaction" class="pcr-interaction" ${hidden(Object.keys(c.interaction).length)}>
            <input data-key="result" class="pcr-result" type="text" spellcheck="false" ${hidden(c.interaction.input)}>

            <input data-arr="options" class="pcr-type" data-type="HEXA" value="HEXA" type="button" ${hidden(c.interaction.hex)}>
            <input data-arr="options" class="pcr-type" data-type="RGBA" value="RGBA" type="button" ${hidden(c.interaction.rgba)}>
            <input data-arr="options" class="pcr-type" data-type="HSLA" value="HSLA" type="button" ${hidden(c.interaction.hsla)}>
            <input data-arr="options" class="pcr-type" data-type="HSVA" value="HSVA" type="button" ${hidden(c.interaction.hsva)}>
            <input data-arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${hidden(c.interaction.cmyk)}>

            <input data-key="save" class="pcr-save" value="${s.save || 'Save'}" type="button" ${hidden(c.interaction.save)}>
            <input data-key="clear" class="pcr-clear" value="${s.clear || 'Clear'}" type="button" ${hidden(c.interaction.clear)}>
          </div>
        </div>
      </div>
    `);

    const int = root.interaction;

    // Select option which is not hidden
    int.options.find(o => !o.hidden && !o.classList.add('active'));

    // Create method to find currenlty active option
    int.type = () => int.options.find(e => e.classList.contains('active'));
    return root;
};

// Import styles

class Pickr {

    // Will be used to prevent specific actions during initilization
    _initializingActive = true;

    // Replace element with color picker
    _recalc = true;

    // Current and last color for comparison
    _color = HSVaColor();
    _lastColor = HSVaColor();
    _swatchColors = [];

    // Evenlistener name: [callbacks]
    _eventListener = {
        'swatchselect': [],
        'change': [],
        'save': [],
        'init': []
    };

    constructor(opt) {

        // Assign default values
        this.options = opt = Object.assign({
            appClass: null,
            useAsButton: false,
            disabled: false,
            comparison: true,

            components: {
                interaction: {}
            },

            strings: {},
            swatches: null,
            inline: false,

            default: '#42445A',
            defaultRepresentation: null,
            position: 'bottom-middle',
            adjustableNumbers: true,
            showAlways: false,

            closeWithKey: 'Escape'
        }, opt);

        const {swatches, inline, components, position} = opt;

        // Check interaction section
        if (!components.interaction) {
            components.interaction = {};
        }

        // Overwrite palette if preview, opacity or hue are true
        const {preview, opacity, hue, palette} = components;
        components.palette = palette || preview || opacity || hue;

        // Per default enabled if inline
        if (inline) {
            opt.showAlways = true;
        }

        // Initialize picker
        this._preBuild();
        this._buildComponents();
        this._bindEvents();

        // Finalize build
        this._finalBuild();

        // Append pre-defined swatch colors
        if (swatches && swatches.length) {
            swatches.forEach(color => this.addSwatch(color));
        }

        // Initialize positioning engine
        this._nanopop = Nanopop({
            reference: this._root.button,
            el: this._root.app,
            pos: position
        });

        // Initilization is finish, pickr is visible and ready for usage
        const {button} = this._root;
        const that = this;
        requestAnimationFrame((function cb() {

            // offsetParent of body is always 0. So check if it is the body
            if (button.offsetParent === null && button !== document.body) {
                return requestAnimationFrame(cb);
            }

            // Apply default color
            that.setColor(opt.default);
            that._rePositioningPicker();

            // Initialize color representation
            if (opt.defaultRepresentation) {
                that._representation = opt.defaultRepresentation;
                that.setColorRepresentation(that._representation);
            }

            // Show pickr if locked
            if (opt.showAlways) {
                that.show();
            }

            // Initialization is done - pickr is usable, fire init event
            that._initializingActive = false;
            that._emit('init');
        }));
    }

    // Does only the absolutly basic thing to initialize the components
    _preBuild() {
        const opt = this.options;

        // Check if element is selector
        if (typeof opt.el === 'string') {

            // Resolve possible shadow dom access
            opt.el = opt.el.split(/>>/g).reduce((pv, cv, ci, a) => {
                pv = pv.querySelector(cv);
                return ci < a.length - 1 ? pv.shadowRoot : pv;
            }, document);
        }

        // Create element and append it to body to
        // prevent initialization errors
        this._root = buildPickr(opt);

        // Check if a custom button is used
        if (opt.useAsButton) {
            this._root.button = opt.el; // Replace button with customized button
        }

        document.body.appendChild(this._root.root);
    }

    _finalBuild() {
        const opt = this.options;
        const root = this._root;

        // Remove from body
        document.body.removeChild(root.root);

        //if (opt.inline) {
            const {parentElement} = opt.el;

            if (parentElement.lastChild === opt.el) {
                parentElement.appendChild(root.app);
            } else {
                parentElement.insertBefore(root.app, opt.el.nextSibling);
            }
        // } else {
        //     document.body.appendChild(root.app);
        // }

        // Don't replace the the element if a custom button is used
        if (!opt.useAsButton) {

            // Replace element with actual color-picker
            opt.el.parentNode.replaceChild(root.root, opt.el);
        }

        // Call disable to also add the disabled class
        if (opt.disabled) {
            this.disable();
        }

        // Check if color comparison is disabled, if yes - remove transitions so everything keeps smoothly
        if (!opt.comparison) {
            root.button.style.transition = 'none';
            if (!opt.useAsButton) {
                root.preview.lastColor.style.transition = 'none';
            }
        }

        this.hide();
    }

    _buildComponents() {

        // Instance reference
        const inst = this;
        const comp = this.options.components;

        const components = {

            palette: Moveable({
                element: inst._root.palette.picker,
                wrapper: inst._root.palette.palette,

                onchange(x, y) {
                    if (!comp.palette) return;
                    const {_color, _root, options} = inst;

                    // Calculate saturation based on the position
                    _color.s = (x / this.wrapper.offsetWidth) * 100;

                    // Calculate the value
                    _color.v = 100 - (y / this.wrapper.offsetHeight) * 100;

                    // Prevent falling under zero
                    _color.v < 0 ? _color.v = 0 : 0;

                    // Set picker and gradient color
                    const cssRGBaString = _color.toRGBA().toString();
                    this.element.style.background = cssRGBaString;
                    this.wrapper.style.background = `
                        linear-gradient(to top, rgba(0, 0, 0, ${_color.a}), transparent),
                        linear-gradient(to left, hsla(${_color.h}, 100%, 50%, ${_color.a}), rgba(255, 255, 255, ${_color.a}))
                    `;

                    // Check if color is locked
                    if (!options.comparison) {
                        _root.button.style.color = cssRGBaString;

                        if (!options.useAsButton) {
                            _root.preview.lastColor.style.color = cssRGBaString;
                        }
                    }

                    // Change current color
                    _root.preview.currentColor.style.color = cssRGBaString;

                    // Update the input field only if the user is currently not typing
                    if (inst._recalc) {
                        inst._updateOutput();
                    }

                    // If the user changes the color, remove the cleared icon
                    _root.button.classList.remove('clear');
                }
            }),

            hue: Moveable({
                lockX: true,
                element: inst._root.hue.picker,
                wrapper: inst._root.hue.slider,

                onchange(x, y) {
                    if (!comp.hue || !comp.palette) return;

                    // Calculate hue
                    inst._color.h = (y / this.wrapper.offsetHeight) * 360;

                    // Update color
                    this.element.style.backgroundColor = `hsl(${inst._color.h}, 100%, 50%)`;
                    components.palette.trigger();
                }
            }),

            opacity: Moveable({
                lockX: true,
                element: inst._root.opacity.picker,
                wrapper: inst._root.opacity.slider,

                onchange(x, y) {
                    if (!comp.opacity || !comp.palette) return;

                    // Calculate opacity
                    inst._color.a = Math.round(((y / this.wrapper.offsetHeight)) * 1e2) / 100;

                    // Update color
                    this.element.style.background = `rgba(0, 0, 0, ${inst._color.a})`;
                    inst.components.palette.trigger();
                }
            }),

            selectable: Selectable({
                elements: inst._root.interaction.options,
                className: 'active',
                onchange(e) {
                    inst._representation = e.target.getAttribute('data-type').toUpperCase();
                    inst._updateOutput();
                }
            })
        };

        this.components = components;
    }

    _bindEvents() {
        const {_root, options} = this;

        const eventBindings = [

            // Clear color
            on(_root.interaction.clear, 'click', () => this._clearColor()),

            // Select last color on click
            on(_root.preview.lastColor, 'click', () => this.setHSVA(...this._lastColor.toHSVA())),

            // Save color
            on(_root.interaction.save, 'click', () => {
                !this.applyColor() && !options.showAlways && this.hide();
            }),

            // Detect user input and disable auto-recalculation
            on(_root.interaction.result, ['keyup', 'input'], e => {
                this._recalc = false;

                // Fire listener if initialization is finish and changed color was valid
                if (this.setColor(e.target.value, true) && !this._initializingActive) {
                    this._emit('change', this._color);
                }

                e.stopImmediatePropagation();
            }),

            // Cancel input detection on color change
            on([
                _root.palette.palette,
                _root.palette.picker,
                _root.hue.slider,
                _root.hue.picker,
                _root.opacity.slider,
                _root.opacity.picker
            ], ['mousedown', 'touchstart'], () => this._recalc = true)
        ];

        // Provide hiding / showing abilities only if showAlways is false
        if (!options.showAlways) {
            const ck = options.closeWithKey;

            eventBindings.push(
                // Save and hide / show picker
                on(_root.button, 'click', () => this.isOpen() ? this.hide() : this.show()),

                // Close with escape key
                on(document, 'keyup', e => this.isOpen() && (e.key === ck || e.code === ck) && this.hide()),

                // Cancel selecting if the user taps behind the color picker
                on(document, ['touchstart', 'mousedown'], e => {
                    if (this.isOpen() && !eventPath(e).some(el => el === _root.app || el === _root.button)) {
                        this.hide();
                    }
                }, {capture: true})
            );
        }

        // Make input adjustable if enabled
        if (options.adjustableNumbers) {
            adjustableInputNumbers(_root.interaction.result, false);
        }

        if (!options.inline) {
            let timeout = null;
            const that = this;

            // Re-calc position on window resize, scroll and wheel
            eventBindings.push(
                on(window, ['scroll', 'resize'], () => {
                    if (that.isOpen()) {
                        if (timeout === null) {
                            timeout = setTimeout(() => timeout = null, 100);

                            // Update position on every frame
                            requestAnimationFrame(function rs() {
                                that._rePositioningPicker();
                                (timeout !== null) && requestAnimationFrame(rs);
                            });
                        } else {
                            clearTimeout(timeout);
                            timeout = setTimeout(() => timeout = null, 100);
                        }
                    }
                })
            );
        }

        // Save bindings
        this._eventBindings = eventBindings;
    }

    _rePositioningPicker() {

        // No repositioning needed if inline
        if (!this.options.inline) {
            this._nanopop.update();
        }
    }

    _updateOutput() {

        // Check if component is present
        if (this._root.interaction.type()) {

            // Construct function name and call if present
            const method = `to${this._root.interaction.type().getAttribute('data-type')}`;
            this._root.interaction.result.value = typeof this._color[method] === 'function' ? this._color[method]().toString() : '';
        }

        // Fire listener if initialization is finish
        if (!this._initializingActive) {
            this._emit('change', this._color);
        }
    }

    _clearColor() {
        const {_root, options} = this;

        // Change only the button color if it isn't customized
        if (!options.useAsButton) {
            _root.button.style.color = 'rgba(0, 0, 0, 0.15)';
        }

        _root.button.classList.add('clear');

        if (!options.showAlways) {
            this.hide();
        }

        if (!this._initializingActive) {

            // Fire listener
            this._emit('save', null);
        }
    }

    _emit(event, ...args) {
        this._eventListener[event].forEach(cb => cb(...args, this));
    }

    on(event, cb) {

        // Validate
        if (typeof cb === 'function' && typeof event === 'string' && event in this._eventListener) {
            this._eventListener[event].push(cb);
        }

        return this;
    }

    off(event, cb) {
        const callBacks = this._eventListener[event];

        if (callBacks) {
            const index = callBacks.indexOf(cb);

            if (~index) {
                callBacks.splice(index, 1);
            }
        }

        return this;
    }

    /**
     * Appends a color to the swatch palette
     * @param color
     * @returns {boolean}
     */
    addSwatch(color) {
        const {values} = parseToHSV(color);

        if (values) {
            const {_swatchColors, _root} = this;
            const hsvaColorObject = HSVaColor(...values);

            // Create new swatch HTMLElement
            const element = createElementFromString(
                `<button type="button" style="color: ${hsvaColorObject.toRGBA()}"></button>`
            );

            // Append element and save swatch data
            _root.swatches.appendChild(element);
            _swatchColors.push({element, hsvaColorObject});

            // Bind event
            this._eventBindings.push(
                on(element, 'click', () => {
                    this.setHSVA(...hsvaColorObject.toHSVA(), true);
                    this._emit('swatchselect', hsvaColorObject);
                })
            );

            return true;
        }

        return false;
    }

    /**
     * Removes a swatch color by it's index
     * @param index
     * @returns {boolean}
     */
    removeSwatch(index) {

        // Validate index
        if (typeof index === 'number') {
            const swatchColor = this._swatchColors[index];

            // Check swatch data
            if (swatchColor) {
                const {element} = swatchColor;

                // Remove HTML child and swatch data
                this._root.swatches.removeChild(element);
                this._swatchColors.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    applyColor(silent = false) {
        const {preview, button} = this._root;

        // Change preview and current color
        const cssRGBaString = this._color.toRGBA().toString();
        preview.lastColor.style.color = cssRGBaString;

        // Change only the button color if it isn't customized
        if (!this.options.useAsButton) {
            button.style.color = cssRGBaString;
        }

        // User changed the color so remove the clear clas
        button.classList.remove('clear');

        // Save last color
        this._lastColor = this._color.clone();

        // Fire listener
        if (!this._initializingActive && !silent) {
            this._emit('save', this._color);
        }
    }

    /**
     * Destroy's all functionalitys
     */
    destroy() {
        this._eventBindings.forEach(args => off(...args));
        Object.keys(this.components).forEach(key => this.components[key].destroy());
    }

    /**
     * Destroy's all functionalitys and removes
     * the pickr element.
     */
    destroyAndRemove() {
        this.destroy();

        // Remove element
        const root = this._root.root;
        root.parentElement.removeChild(root);

        // remove .pcr-app
        const app = this._root.app;
        app.parentElement.removeChild(app);

        // There are references to various DOM elements stored in the pickr instance
        // This cleans all of them to avoid detached DOMs
        const pickr = this;
        Object.keys(pickr).forEach(key => pickr[key] = null);
    }

    /**
     * Hides the color-picker ui.
     */
    hide() {
        this._root.app.classList.remove('visible');
        return this;
    }

    /**
     * Shows the color-picker ui.
     */
    show() {
        if (this.options.disabled) return;
        this._root.app.classList.add('visible');
        this._rePositioningPicker();
        return this;
    }

    /**
     * @return {boolean} If the color picker is currently open
     */
    isOpen() {
        return this._root.app.classList.contains('visible');
    }

    /**
     * Set a specific color.
     * @param h Hue
     * @param s Saturation
     * @param v Value
     * @param a Alpha channel (0 - 1)
     * @param silent If the button should not change the color
     * @return boolean if the color has been accepted
     */
    setHSVA(h = 360, s = 0, v = 0, a = 1, silent = false) {

        // Deactivate color calculation
        const recalc = this._recalc; // Save state
        this._recalc = false;

        // Validate input
        if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100 || a < 0 || a > 1) {
            return false;
        }

        // Override current color and re-active color calculation
        this._color = HSVaColor(h, s, v, a);

        // Short names
        const {hue, opacity, palette} = this.components;

        // Calculate y position of hue slider
        const hueWrapper = hue.options.wrapper;
        const hueY = hueWrapper.offsetHeight * (h / 360);
        hue.update(0, hueY);

        // Calculate y position of opacity slider
        const opacityWrapper = opacity.options.wrapper;
        const opacityY = opacityWrapper.offsetHeight * a;
        opacity.update(0, opacityY);

        // Calculate y and x position of color palette
        const pickerWrapper = palette.options.wrapper;
        const pickerX = pickerWrapper.offsetWidth * (s / 100);
        const pickerY = pickerWrapper.offsetHeight * (1 - (v / 100));
        palette.update(pickerX, pickerY);

        // Restore old state
        this._recalc = recalc;

        // Update output if recalculation is enabled
        if (this._recalc) {
            this._updateOutput();
        }

        // Check if call is silent
        if (!silent) {
            this.applyColor();
        }

        return true;
    }

    /**
     * Tries to parse a string which represents a color.
     * Examples: #fff
     *           rgb 10 10 200
     *           hsva 10 20 5 0.5
     * @param string
     * @param silent
     */
    setColor(string, silent = false) {

        // Check if null
        if (string === null) {
            this._clearColor();
            return true;
        }

        const {values, type} = parseToHSV(string);

        // Check if color is ok
        if (values) {

            // Change selected color format
            const utype = type.toUpperCase();
            const {options} = this._root.interaction;
            const target = options.find(el => el.getAttribute('data-type').startsWith(utype));

            // Auto select only if not hidden
            if (target && !target.hidden) {
                for (const el of options) {
                    el.classList[el === target ? 'add' : 'remove']('active');
                }
            }

            return this.setHSVA(...values, silent);
        }
    }

    /**
     * Changes the color _representation.
     * Allowed values are HEX, RGB, HSV, HSL and CMYK
     * @param type
     * @returns {boolean} if the selected type was valid.
     */
    setColorRepresentation(type) {

        // Force uppercase to allow a case-sensitiv comparison
        type = type.toUpperCase();

        // Find button with given type and trigger click event
        return !!this._root.interaction.options.find(v => v.getAttribute('data-type').startsWith(type) && !v.click());
    }

    /**
     * Returns the current color representaion. See setColorRepresentation
     * @returns {*}
     */
    getColorRepresentation() {
        return this._representation;
    }

    /**
     * @returns HSVaColor Current HSVaColor object.
     */
    getColor() {
        return this._color;
    }

    /**
     * @returns The root HTMLElement with all his components.
     */
    getRoot() {
        return this._root;
    }

    /**
     * Disable pickr
     */
    disable() {
        this.hide();
        this.options.disabled = true;
        this._root.button.classList.add('disabled');
        return this;
    }

    /**
     * Enable pickr
     */
    enable() {
        this.options.disabled = false;
        this._root.button.classList.remove('disabled');
        return this;
    }
}

// Expose pickr utils
Pickr.utils = _;

// Create instance via method
Pickr.create = options => new Pickr(options);

// Assign version and export
Pickr.version = '0.6.2';

var ColorPicker = /** @class */ (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPicker.prototype.installed = function () {
        var _this = this;
        var picker = Pickr.create({
            el: this.shadowRoot.querySelector('.picker'),
            inline: this.props.inline,
            default: this.props.default,
            useAsButton: !this.props.button,
            swatches: this.props.swatches,
            width: this.props.width,
            components: {
                // Main components
                preview: this.props.preview,
                opacity: this.props.opacity,
                hue: this.props.hue,
                // Input / output Options
                interaction: {
                    hex: this.props.hex,
                    rgba: this.props.rgba,
                    hsla: this.props.hsla,
                    hsva: this.props.hsva,
                    cmyk: this.props.cmyk,
                    input: this.props.input,
                    clear: this.props.clear,
                    save: this.props.save
                }
            },
            strings: this.props.strings
        });
        picker.on('init', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //this.picker.show()
            _this.fire('init', args[0]);
        }).on('save', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.fire('save', {
                color: args[0].toHEXA().toString(),
                colorObject: args[0]
            });
        }).on('change', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.fire('change', {
                color: args[0].toHEXA().toString(),
                colorObject: args[0]
            });
        }).on('swatchselect', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.fire('swatch-select', {
                color: args[0].toHEXA().toString(),
                colorObject: args[0]
            });
        });
        this.picker = picker;
    };
    ColorPicker.prototype.setColor = function (color) {
        return this.picker.setColor(color);
    };
    ColorPicker.prototype.render = function (props) {
        return (h("div", __assign({}, extractClass(props, 'o-color-picker')),
            h("div", { class: 'picker' })));
    };
    ColorPicker.css = css;
    ColorPicker.defaultProps = {
        button: true,
        preview: true,
        opacity: true,
        hue: true,
        hex: true,
        rgba: true,
        hsla: true,
        hsva: false,
        input: true,
        clear: true,
        save: true,
        cmyk: false,
        default: '#07c160',
        swatches: [],
        inline: true,
        strings: {
            save: 'Save',
            clear: 'Clear' // Default for clear button
        }
    };
    ColorPicker.propTypes = {
        button: Boolean,
        preview: Boolean,
        opacity: Boolean,
        hue: Boolean,
        hex: Boolean,
        rgba: Boolean,
        hsla: Boolean,
        hsva: Boolean,
        input: Boolean,
        clear: Boolean,
        save: Boolean,
        cmyk: Boolean,
        default: String,
        swatches: Array,
        inline: Boolean,
        strings: Object,
        width: String
    };
    ColorPicker = __decorate([
        tag('o-color-picker')
    ], ColorPicker);
    return ColorPicker;
}(WeElement));

export default ColorPicker;
//# sourceMappingURL=index.esm.js.map
