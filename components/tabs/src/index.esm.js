/**
 * @omiu/tabs v0.0.10 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, classNames, tag, WeElement } from 'omi';

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


var readyCallbacks = [];
document.addEventListener('DOMContentLoaded', function () {
    domReady.done = true;
    readyCallbacks.forEach(function (callback) {
        callback();
    });
});
function domReady(callback) {
    if (domReady.done) {
        callback();
        return;
    }
    readyCallbacks.push(callback);
}
domReady.done = false;
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
    Tabs.prototype.install = function () {
        var _this = this;
        domReady(function () {
            _this.baseRect = _this.rootNode.getBoundingClientRect();
            _this.setActiveBar(_this['$tab' + _this.props.activeIndex], _this.props.activeIndex);
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
        this.fire('add-icon-click');
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
