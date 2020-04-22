/**
 * @omiu/tabs v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, classNames, tag, WeElement } from 'omi';
import colorName from 'color-name';

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


var css = `:host {
  display: block; }

.o-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 15px; }

.o-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #07c160;
  z-index: 1;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  list-style: none; }

.o-tabs__new-tab {
  float: right;
  border: 1px solid #d3dce6;
  height: 18px;
  width: 18px;
  line-height: 18px;
  margin: 12px 0 9px 10px;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  color: #d3dce6;
  cursor: pointer;
  -webkit-transition: all .15s;
  transition: all .15s; }

.o-tabs__new-tab .o-icon-plus {
  -webkit-transform: scale(0.8, 0.8);
  transform: scale(0.8, 0.8); }

.o-tabs__new-tab:hover {
  color: #07c160; }

.o-tabs__nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative; }

.o-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #E4E7ED;
  z-index: 1; }

.o-tabs--border-card > .o-tabs__header .o-tabs__nav-wrap::after,
.o-tabs--card > .o-tabs__header .o-tabs__nav-wrap::after {
  content: none; }

.o-tabs__nav-wrap.is-scrollable {
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.o-tabs__nav-scroll {
  overflow: hidden; }

.o-tabs__nav-next,
.o-tabs__nav-prev {
  position: absolute;
  cursor: pointer;
  line-height: 44px;
  font-size: 12px;
  color: #909399; }

.o-tabs__nav-next {
  right: 0; }

.o-tabs__nav-prev {
  left: 0; }

.o-tabs__nav {
  white-space: nowrap;
  position: relative;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;
  float: left;
  z-index: 2; }

.o-tabs__nav.is-stretch {
  min-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.o-tabs__nav.is-stretch > * {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center; }

.o-tabs__item {
  padding: 0 20px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative; }

.o-tabs__item:focus,
.o-tabs__item:focus:active {
  outline: 0; }

.o-tabs__item:focus.is-active.is-focus:not(:active) {
  -webkit-box-shadow: 0 0 2px 2px #07c160 inset;
  box-shadow: 0 0 2px 2px #07c160 inset;
  border-radius: 3px; }

.o-tabs__item:hover .o-icon-close {
  visibility: visible; }

.o-tabs__item .o-icon-close {
  visibility: hidden;
  border-radius: 50%;
  text-align: center;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-left: 5px; }

.o-tabs__item .o-icon-close:before {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
  display: inline-block; }

.o-tabs__item .o-icon-close:hover {
  background-color: #C0C4CC;
  color: #FFF; }

.o-tabs__item.is-active {
  color: #07c160; }

.o-tabs__item:hover {
  color: #07c160;
  cursor: pointer; }

.o-tabs__item.is-disabled {
  color: #C0C4CC;
  cursor: default; }

.o-tabs__content {
  overflow: hidden;
  position: relative; }

.o-tabs--card > .o-tabs__header {
  border-bottom: 1px solid #E4E7ED; }

.o-tabs--card > .o-tabs__header .o-tabs__nav {
  border: 1px solid #E4E7ED;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.o-tabs--card > .o-tabs__header .o-tabs__active-bar {
  display: none; }

.o-tabs--card > .o-tabs__header .o-tabs__item .o-icon-close {
  position: relative;
  font-size: 12px;
  width: 0;
  height: 14px;
  vertical-align: middle;
  line-height: 15px;
  overflow: hidden;
  top: -1px;
  right: -2px;
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%; }

.o-tabs--card > .o-tabs__header .o-tabs__item.is-active.is-closable .o-icon-close,
.o-tabs--card > .o-tabs__header .o-tabs__item.is-closable:hover .o-icon-close {
  width: 14px; }

.o-tabs--card > .o-tabs__header .o-tabs__item {
  border-bottom: 1px solid transparent;
  border-left: 1px solid #E4E7ED;
  -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-tabs--card > .o-tabs__header .o-tabs__item:first-child {
  border-left: none; }

.o-tabs--card > .o-tabs__header .o-tabs__item.is-closable:hover {
  padding-left: 13px;
  padding-right: 13px; }

.o-tabs--card > .o-tabs__header .o-tabs__item.is-active {
  border-bottom-color: #FFF; }

.o-tabs--card > .o-tabs__header .o-tabs__item.is-active.is-closable {
  padding-left: 20px;
  padding-right: 20px; }

.o-tabs--border-card {
  background: #FFF;
  border: 1px solid #DCDFE6;
  border-bottom: none; }

.o-tabs--border-card.o-tabs--bottom {
  border: 1px solid #DCDFE6; }

.o-tabs--border-card > .o-tabs__content {
  padding: 15px; }

.o-tabs--border-card > .o-tabs__header {
  background-color: #F5F7FA;
  border-bottom: 1px solid #E4E7ED;
  margin: 0; }

.o-tabs--border-card > .o-tabs__header .o-tabs__item {
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid transparent;
  margin-top: -1px;
  color: #909399; }

.o-tabs--border-card > .o-tabs__header .o-tabs__item + .o-tabs__item,
.o-tabs--border-card > .o-tabs__header .o-tabs__item:first-child {
  margin-left: -1px; }

.o-tabs--border-card > .o-tabs__header .o-tabs__item.is-active {
  color: #07c160;
  background-color: #FFF;
  border-right-color: #DCDFE6;
  border-left-color: #DCDFE6; }

.o-tabs--border-card > .o-tabs__header .o-tabs__item:not(.is-disabled):hover {
  color: #07c160; }

.o-tabs--border-card > .o-tabs__header .o-tabs__item.is-disabled {
  color: #C0C4CC; }

.o-tabs--border-card > .o-tabs__header .is-scrollable .o-tabs__item:first-child {
  margin-left: 0; }

.o-tabs--bottom .o-tabs__item.is-bottom:nth-child(2),
.o-tabs--bottom .o-tabs__item.is-top:nth-child(2),
.o-tabs--top .o-tabs__item.is-bottom:nth-child(2),
.o-tabs--top .o-tabs__item.is-top:nth-child(2) {
  padding-left: 0; }

.o-tabs--bottom .o-tabs__item.is-bottom:last-child,
.o-tabs--bottom .o-tabs__item.is-top:last-child,
.o-tabs--top .o-tabs__item.is-bottom:last-child,
.o-tabs--top .o-tabs__item.is-top:last-child {
  padding-right: 0; }

.o-tabs--bottom .o-tabs--left > .o-tabs__header .o-tabs__item:nth-child(2),
.o-tabs--bottom .o-tabs--right > .o-tabs__header .o-tabs__item:nth-child(2),
.o-tabs--bottom.o-tabs--border-card > .o-tabs__header .o-tabs__item:nth-child(2),
.o-tabs--bottom.o-tabs--card > .o-tabs__header .o-tabs__item:nth-child(2),
.o-tabs--top .o-tabs--left > .o-tabs__header .o-tabs__item:nth-child(2),
.o-tabs--top .o-tabs--right > .o-tabs__header .o-tabs__item:nth-child(2),
.o-tabs--top.o-tabs--border-card > .o-tabs__header .o-tabs__item:nth-child(2),
.o-tabs--top.o-tabs--card > .o-tabs__header .o-tabs__item:nth-child(2) {
  padding-left: 20px; }

.o-tabs--bottom .o-tabs--left > .o-tabs__header .o-tabs__item:last-child,
.o-tabs--bottom .o-tabs--right > .o-tabs__header .o-tabs__item:last-child,
.o-tabs--bottom.o-tabs--border-card > .o-tabs__header .o-tabs__item:last-child,
.o-tabs--bottom.o-tabs--card > .o-tabs__header .o-tabs__item:last-child,
.o-tabs--top .o-tabs--left > .o-tabs__header .o-tabs__item:last-child,
.o-tabs--top .o-tabs--right > .o-tabs__header .o-tabs__item:last-child,
.o-tabs--top.o-tabs--border-card > .o-tabs__header .o-tabs__item:last-child,
.o-tabs--top.o-tabs--card > .o-tabs__header .o-tabs__item:last-child {
  padding-right: 20px; }

.o-tabs--bottom.o-tabs--border-card {
  border-top: none; }

.o-tabs--bottom.o-tabs--border-card .o-tabs__header.is-bottom {
  border-bottom: 0;
  border-top: 1px solid #DCDFE6; }

.o-tabs--bottom.o-tabs--border-card .o-tabs__nav-wrap.is-bottom {
  margin-top: -1px;
  margin-bottom: 0; }

.o-tabs--bottom.o-tabs--border-card .o-tabs__item.is-bottom:not(.is-active) {
  border: 1px solid transparent; }

.o-tabs--bottom.o-tabs--border-card .o-tabs__item.is-bottom {
  margin: 0 -1px -1px; }

.o-tabs--left,
.o-tabs--right {
  overflow: hidden; }

.o-tabs--left .o-tabs__header.is-left,
.o-tabs--left .o-tabs__header.is-right,
.o-tabs--left .o-tabs__nav-scroll,
.o-tabs--left .o-tabs__nav-wrap.is-left,
.o-tabs--left .o-tabs__nav-wrap.is-right,
.o-tabs--right .o-tabs__header.is-left,
.o-tabs--right .o-tabs__header.is-right,
.o-tabs--right .o-tabs__nav-scroll,
.o-tabs--right .o-tabs__nav-wrap.is-left,
.o-tabs--right .o-tabs__nav-wrap.is-right {
  height: 100%; }

.o-tabs--left .o-tabs__active-bar.is-left,
.o-tabs--left .o-tabs__active-bar.is-right,
.o-tabs--right .o-tabs__active-bar.is-left,
.o-tabs--right .o-tabs__active-bar.is-right {
  top: 0;
  bottom: auto;
  width: 2px;
  height: auto; }

.o-tabs--left .o-tabs__nav-wrap.is-left,
.o-tabs--left .o-tabs__nav-wrap.is-right,
.o-tabs--right .o-tabs__nav-wrap.is-left,
.o-tabs--right .o-tabs__nav-wrap.is-right {
  margin-bottom: 0; }

.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,
.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,
.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-next,
.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev,
.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,
.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,
.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-next,
.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev {
  height: 30px;
  line-height: 30px;
  width: 100%;
  text-align: center;
  cursor: pointer; }

.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-next i,
.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev i,
.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-next i,
.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev i,
.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-next i,
.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev i,
.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-next i,
.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev i {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg); }

.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,
.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev,
.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-prev,
.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-prev {
  left: auto;
  top: 0; }

.o-tabs--left .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,
.o-tabs--left .o-tabs__nav-wrap.is-right > .o-tabs__nav-next,
.o-tabs--right .o-tabs__nav-wrap.is-left > .o-tabs__nav-next,
.o-tabs--right .o-tabs__nav-wrap.is-right > .o-tabs__nav-next {
  right: auto;
  bottom: 0; }

.o-tabs--left .o-tabs__active-bar.is-left,
.o-tabs--left .o-tabs__nav-wrap.is-left::after {
  right: 0;
  left: auto; }

.o-tabs--left .o-tabs__nav-wrap.is-left.is-scrollable,
.o-tabs--left .o-tabs__nav-wrap.is-right.is-scrollable,
.o-tabs--right .o-tabs__nav-wrap.is-left.is-scrollable,
.o-tabs--right .o-tabs__nav-wrap.is-right.is-scrollable {
  padding: 30px 0; }

.o-tabs--left .o-tabs__nav-wrap.is-left::after,
.o-tabs--left .o-tabs__nav-wrap.is-right::after,
.o-tabs--right .o-tabs__nav-wrap.is-left::after,
.o-tabs--right .o-tabs__nav-wrap.is-right::after {
  height: 100%;
  width: 2px;
  bottom: auto;
  top: 0; }

.o-tabs--left .o-tabs__nav.is-left,
.o-tabs--left .o-tabs__nav.is-right,
.o-tabs--right .o-tabs__nav.is-left,
.o-tabs--right .o-tabs__nav.is-right {
  float: none; }

.o-tabs--left .o-tabs__item.is-left,
.o-tabs--left .o-tabs__item.is-right,
.o-tabs--right .o-tabs__item.is-left,
.o-tabs--right .o-tabs__item.is-right {
  display: block; }

.o-tabs--left.o-tabs--card .o-tabs__active-bar.is-left,
.o-tabs--right.o-tabs--card .o-tabs__active-bar.is-right {
  display: none; }

.o-tabs--left .o-tabs__header.is-left {
  float: left;
  margin-bottom: 0;
  margin-right: 10px; }

.o-tabs--left .o-tabs__nav-wrap.is-left {
  margin-right: -1px; }

.o-tabs--left .o-tabs__item.is-left {
  text-align: right; }

.o-tabs--left.o-tabs--card .o-tabs__item.is-left {
  border-left: none;
  border-right: 1px solid #E4E7ED;
  border-bottom: none;
  border-top: 1px solid #E4E7ED;
  text-align: left; }

.o-tabs--left.o-tabs--card .o-tabs__item.is-left:first-child {
  border-right: 1px solid #E4E7ED;
  border-top: none; }

.o-tabs--left.o-tabs--card .o-tabs__item.is-left.is-active {
  border: 1px solid #E4E7ED;
  border-right-color: #fff;
  border-left: none;
  border-bottom: none; }

.o-tabs--left.o-tabs--card .o-tabs__item.is-left.is-active:first-child {
  border-top: none; }

.o-tabs--left.o-tabs--card .o-tabs__item.is-left.is-active:last-child {
  border-bottom: none; }

.o-tabs--left.o-tabs--card .o-tabs__nav {
  border-radius: 4px 0 0 4px;
  border-bottom: 1px solid #E4E7ED;
  border-right: none; }

.o-tabs--left.o-tabs--card .o-tabs__new-tab {
  float: none; }

.o-tabs--left.o-tabs--border-card .o-tabs__header.is-left {
  border-right: 1px solid #dfe4ed; }

.o-tabs--left.o-tabs--border-card .o-tabs__item.is-left {
  border: 1px solid transparent;
  margin: -1px 0 -1px -1px; }

.o-tabs--left.o-tabs--border-card .o-tabs__item.is-left.is-active {
  border-color: #d1dbe5 transparent; }

.o-tabs--right .o-tabs__header.is-right {
  float: right;
  margin-bottom: 0;
  margin-left: 10px; }

.o-tabs--right .o-tabs__nav-wrap.is-right {
  margin-left: -1px; }

.o-tabs--right .o-tabs__nav-wrap.is-right::after {
  left: 0;
  right: auto; }

.o-tabs--right .o-tabs__active-bar.is-right {
  left: 0; }

.o-tabs--right.o-tabs--card .o-tabs__item.is-right {
  border-bottom: none;
  border-top: 1px solid #E4E7ED; }

.o-tabs--right.o-tabs--card .o-tabs__item.is-right:first-child {
  border-left: 1px solid #E4E7ED;
  border-top: none; }

.o-tabs--right.o-tabs--card .o-tabs__item.is-right.is-active {
  border: 1px solid #E4E7ED;
  border-left-color: #fff;
  border-right: none;
  border-bottom: none; }

.o-tabs--right.o-tabs--card .o-tabs__item.is-right.is-active:first-child {
  border-top: none; }

.o-tabs--right.o-tabs--card .o-tabs__item.is-right.is-active:last-child {
  border-bottom: none; }

.o-tabs--right.o-tabs--card .o-tabs__nav {
  border-radius: 0 4px 4px 0;
  border-bottom: 1px solid #E4E7ED;
  border-left: none; }

.o-tabs--right.o-tabs--border-card .o-tabs__header.is-right {
  border-left: 1px solid #dfe4ed; }

.o-tabs--right.o-tabs--border-card .o-tabs__item.is-right {
  border: 1px solid transparent;
  margin: -1px -1px -1px 0; }

.o-tabs--right.o-tabs--border-card .o-tabs__item.is-right.is-active {
  border-color: #d1dbe5 transparent; }

.slideInLeft-transition,
.slideInRight-transition {
  display: inline-block; }

.slideInRight-enter {
  -webkit-animation: slideInRight-enter .3s;
  animation: slideInRight-enter .3s; }

.slideInRight-leave {
  position: absolute;
  left: 0;
  right: 0;
  -webkit-animation: slideInRight-leave .3s;
  animation: slideInRight-leave .3s; }

.slideInLeft-enter {
  -webkit-animation: slideInLeft-enter .3s;
  animation: slideInLeft-enter .3s; }

.slideInLeft-leave {
  position: absolute;
  left: 0;
  right: 0;
  -webkit-animation: slideInLeft-leave .3s;
  animation: slideInLeft-leave .3s; }

@-webkit-keyframes slideInRight-enter {
  0% {
    opacity: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%); }
  to {
    opacity: 1;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0); } }

@keyframes slideInRight-enter {
  0% {
    opacity: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%); }
  to {
    opacity: 1;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0); } }

@-webkit-keyframes slideInRight-leave {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1; }
  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    opacity: 0; } }

@keyframes slideInRight-leave {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1; }
  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    opacity: 0; } }

@-webkit-keyframes slideInLeft-enter {
  0% {
    opacity: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%); }
  to {
    opacity: 1;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0); } }

@keyframes slideInLeft-enter {
  0% {
    opacity: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%); }
  to {
    opacity: 1;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0); } }

@-webkit-keyframes slideInLeft-leave {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1; }
  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    opacity: 0; } }

@keyframes slideInLeft-leave {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1; }
  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    opacity: 0; } }

.o-icon-close {
  display: inline-block;
  vertical-align: -0.125em; }

.o-icon-add {
  position: absolute;
  top: 50%;
  margin-top: -0.5em;
  margin-left: 0.5em;
  cursor: pointer; }

.o-icon-add:hover {
  color: #07c160; }
`


function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
/* MIT license */



var reverseNames = {};

// create a list of reverse color names
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorName[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});
var colorString_1 = colorString.to;
var colorString_2 = colorString.get;

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
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
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
    //hsl.color[2] += hsl.color[2] * ratio;
    hsl.color[2] += ratio * 100;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
    //hsl.color[2] -= hsl.color[2] * ratio;
    hsl.color[2] -= ratio * 100;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

theme();

document.addEventListener('DOMContentLoaded', () => {
  theme();
});

function theme() {
  if (document.body && !document.body.style.getPropertyValue('--o-primary')) {
    setTheme('primary', '#07c160');
    setTheme('danger', '#f5222d');
    setTheme('surface', '#ffffff');
    setTheme('on-primary', '#ffffff');
    setTheme('on-danger', '#ffffff');
    setTheme('on-surface', '#000000');
    setTheme('background', '#ffffff');
    setTheme('small-radius', '4px');
    setTheme('medium-radius', '4px');
    setTheme('large-radius', '0px');
    setTheme('font-family', '-apple-system-font,"Helvetica Neue",sans-serif');
  }
}

function setTheme(key, value) {
  const style = document.body.style;

  style.setProperty('--o-' + key, value);
  switch (key) {
    case 'primary':
      style.setProperty('--o-primary-fade-little', Color(value).fade(0.382));
      style.setProperty('--o-primary-fade-some', Color(value).fade(0.618));
      style.setProperty('--o-primary-fade-more', Color(value).fade(0.759));
      style.setProperty('--o-primary-fade-lot', Color(value).fade(0.9));
      style.setProperty('--o-primary-active', Color(value).darken(0.1));

      style.setProperty('--o-primary-hover-border', Color(value).fade(0.618));
      style.setProperty('--o-primary-hover-bg', Color(value).fade(0.9));

      break
    case 'danger':
      style.setProperty('--o-danger-fade-little', Color(value).fade(0.382));
      style.setProperty('--o-danger-fade-some', Color(value).fade(0.618));
      style.setProperty('--o-danger-fade-more', Color(value).fade(0.759));
      style.setProperty('--o-danger-fade-lot', Color(value).fade(0.9));
      style.setProperty('--o-danger-active', Color(value).darken(0.1));
      break

  }
}


if (typeof window !== undefined) {
  //@ts-ignore
  window.Omiu = {
    setTheme: setTheme,
    setThemePrimary: function (color) {
      setTheme('primary', color);
    },
    setThemeError: function (color) {
      setTheme('error', color);
    }
  };
}

var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onTabClick = function (evt, index) {
            _this.setActiveBar(evt.currentTarget, index);
            _this.fire('change', {
                tab: _this.props.list[index],
                index: index
            });
        };
        return _this;
    }
    Tabs.prototype.setActiveBar = function (ele, index) {
        var rect = ele.getBoundingClientRect();
        this._x = rect.left - this.baseRect.left;
        this._width = rect.width;
        if (index === 0) {
            this._x = 0;
            this._width -= 20;
        }
        else if (index === this.props.list.length - 1) {
            this._x += 20;
            this._width -= 20;
        }
        else {
            this._x += 20;
            this._width -= 40;
        }
        this.updateProps({
            activeIndex: index
        });
    };
    Tabs.prototype.installed = function () {
        this.baseRect = this.rootNode.getBoundingClientRect();
        this.setActiveBar(this['$tab' + this.props.activeIndex], this.props.activeIndex);
    };
    Tabs.prototype.removeTab = function (index) {
        var tab = this.props.list.splice(index, 1)[0];
        this.forceUpdate();
        this.fire('remove', {
            tab: tab,
            index: index
        });
    };
    Tabs.prototype.addTab = function (tab) {
        this.props.list.push(tab);
        this.forceUpdate();
    };
    Tabs.prototype.onAddIconClick = function () {
        this.fire('addIconClick');
    };
    Tabs.prototype.render = function (props) {
        var _a, _b, _c, _d, _e;
        var _this = this;
        var activeBarStyle = (props.position === 'left' || props.position === 'right') ? {
            height: "40px",
            transform: "translateY(" + props.activeIndex * 40 + "px)"
        } : {
            width: this._width + "px",
            transform: "translateX(" + this._x + "px)"
        };
        return (h("div", __assign({}, extractClass(props, 'o-tabs', (_a = {},
            _a["o-tabs--" + props.position] = props.position,
            _a["o-tabs--" + props.type] = props.type,
            _a))),
            h("div", { class: classNames('o-tabs__header', (_b = {},
                    _b["is-" + props.position] = props.position,
                    _b)) },
                h("div", { class: classNames('o-tabs__nav-wrap', (_c = {},
                        _c["is-" + props.position] = props.position,
                        _c)) },
                    h("div", { class: "o-tabs__nav-scroll" },
                        h("div", { role: "tablist", class: classNames('o-tabs__nav', (_d = {},
                                _d["is-" + props.position] = props.position,
                                _d)) },
                            !props.type && h("div", { class: classNames('o-tabs__active-bar', (_e = {},
                                    _e["is-" + props.position] = props.position,
                                    _e)), style: activeBarStyle }),
                            props.list.map(function (tab, index) {
                                var _a;
                                _this._tempTagName = 'o-icon-' + tab.icon;
                                return h("div", __assign({ ref: function (e) { _this['$tab' + index] = e; }, role: "tab", onClick: function (evt) { return props.activeIndex !== index && _this.onTabClick(evt, index); }, tabindex: props.active === index ? '0' : -1 }, extractClass(props, 'o-tabs__item', (_a = {},
                                    _a["is-" + props.position] = props.position,
                                    _a['is-active'] = props.activeIndex === index,
                                    _a['is-closable'] = props.closable,
                                    _a))),
                                    tab.icon && h(_this._tempTagName, null),
                                    tab.label,
                                    props.closable && h("svg", { onClick: function (_) { _this.removeTab(index); }, class: "o-icon-close", style: props.activeIndex === index && "visibility: visible;", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                        h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })));
                            })),
                        props.addable && h("svg", { class: "o-icon-add", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true", onClick: this.onAddIconClick },
                            h("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })))))));
    };
    Tabs.css = css;
    Tabs.defaultProps = {
        position: 'top',
        closable: false,
        addable: false
    };
    Tabs.propTypes = {
        list: Array,
        activeIndex: Number,
        type: String,
        position: String,
        closable: Boolean,
        addable: Boolean
    };
    Tabs = __decorate([
        tag('o-tabs')
    ], Tabs);
    return Tabs;
}(WeElement));

export default Tabs;
//# sourceMappingURL=index.esm.js.map
