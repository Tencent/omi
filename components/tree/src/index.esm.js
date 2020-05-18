/**
 * @omiu/tree v0.0.11 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, tag, WeElement } from 'omi';

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

.o-fade-in-enter,
.o-fade-in-leave-active,
.o-fade-in-linear-enter,
.o-fade-in-linear-leave,
.o-fade-in-linear-leave-active,
.fade-in-linear-enter,
.fade-in-linear-leave,
.fade-in-linear-leave-active {
  opacity: 0; }

.o-checkbox,
.o-checkbox__input {
  display: inline-block;
  position: relative; }

.fade-in-linear-enter-active,
.fade-in-linear-leave-active {
  -webkit-transition: opacity .2s linear;
  transition: opacity .2s linear; }

.o-fade-in-linear-enter-active,
.o-fade-in-linear-leave-active {
  -webkit-transition: opacity .2s linear;
  transition: opacity .2s linear; }

.o-fade-in-enter-active,
.o-fade-in-leave-active {
  -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1); }

.o-zoom-in-center-enter-active,
.o-zoom-in-center-leave-active {
  -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1); }

.o-zoom-in-center-enter,
.o-zoom-in-center-leave-active {
  opacity: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0); }

.o-zoom-in-top-enter-active,
.o-zoom-in-top-leave-active {
  opacity: 1;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transform-origin: center top;
  transform-origin: center top; }

.o-zoom-in-top-enter,
.o-zoom-in-top-leave-active {
  opacity: 0;
  -webkit-transform: scaleY(0);
  transform: scaleY(0); }

.o-zoom-in-bottom-enter-active,
.o-zoom-in-bottom-leave-active {
  opacity: 1;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom; }

.o-zoom-in-bottom-enter,
.o-zoom-in-bottom-leave-active {
  opacity: 0;
  -webkit-transform: scaleY(0);
  transform: scaleY(0); }

.o-zoom-in-left-enter-active,
.o-zoom-in-left-leave-active {
  opacity: 1;
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transform-origin: top left;
  transform-origin: top left; }

.o-zoom-in-left-enter,
.o-zoom-in-left-leave-active {
  opacity: 0;
  -webkit-transform: scale(0.45, 0.45);
  transform: scale(0.45, 0.45); }

.collapse-transition {
  -webkit-transition: .3s height ease-in-out, .3s padding-top ease-in-out, .3s padding-bottom ease-in-out;
  transition: .3s height ease-in-out, .3s padding-top ease-in-out, .3s padding-bottom ease-in-out; }

.horizontal-collapse-transition {
  -webkit-transition: .3s width ease-in-out, .3s padding-left ease-in-out, .3s padding-right ease-in-out;
  transition: .3s width ease-in-out, .3s padding-left ease-in-out, .3s padding-right ease-in-out; }

.o-list-enter-active,
.o-list-leave-active {
  -webkit-transition: all 1s;
  transition: all 1s; }

.o-list-enter,
.o-list-leave-active {
  opacity: 0;
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px); }

.o-opacity-transition {
  -webkit-transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1); }

.o-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 30px; }

.o-checkbox.is-bordered {
  padding: 9px 20px 9px 10px;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: normal;
  height: 40px; }

.o-checkbox.is-bordered.is-checked {
  border-color: #409EFF; }

.o-checkbox.is-bordered.is-disabled {
  border-color: #EBEEF5;
  cursor: not-allowed; }

.o-checkbox.is-bordered + .o-checkbox.is-bordered {
  margin-left: 10px; }

.o-checkbox.is-bordered.o-checkbox--medium {
  padding: 7px 20px 7px 10px;
  border-radius: 4px;
  height: 36px; }

.o-checkbox.is-bordered.o-checkbox--medium .o-checkbox__label {
  line-height: 17px;
  font-size: 14px; }

.o-checkbox.is-bordered.o-checkbox--medium .o-checkbox__inner {
  height: 14px;
  width: 14px; }

.o-checkbox.is-bordered.o-checkbox--small {
  padding: 5px 15px 5px 10px;
  border-radius: 3px;
  height: 32px; }

.o-checkbox.is-bordered.o-checkbox--small .o-checkbox__label {
  line-height: 15px;
  font-size: 12px; }

.o-checkbox.is-bordered.o-checkbox--small .o-checkbox__inner {
  height: 12px;
  width: 12px; }

.o-checkbox.is-bordered.o-checkbox--small .o-checkbox__inner::after {
  height: 6px;
  width: 2px; }

.o-checkbox.is-bordered.o-checkbox--mini {
  padding: 3px 15px 3px 10px;
  border-radius: 3px;
  height: 28px; }

.o-checkbox.is-bordered.o-checkbox--mini .o-checkbox__label {
  line-height: 12px;
  font-size: 12px; }

.o-checkbox-button__inner,
.o-checkbox__input {
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  outline: 0; }

.o-checkbox.is-bordered.o-checkbox--mini .o-checkbox__inner {
  height: 12px;
  width: 12px; }

.o-checkbox.is-bordered.o-checkbox--mini .o-checkbox__inner::after {
  height: 6px;
  width: 2px; }

.o-checkbox__input {
  cursor: pointer; }

.o-checkbox__input.is-disabled .o-checkbox__inner {
  background-color: #edf2fc;
  border-color: #DCDFE6;
  cursor: not-allowed; }

.o-checkbox__input.is-disabled .o-checkbox__inner::after {
  cursor: not-allowed;
  border-color: #C0C4CC; }

.o-checkbox__input.is-disabled .o-checkbox__inner + .o-checkbox__label {
  cursor: not-allowed; }

.o-checkbox__input.is-disabled.is-checked .o-checkbox__inner {
  background-color: #F2F6FC;
  border-color: #DCDFE6; }

.o-checkbox__input.is-disabled.is-checked .o-checkbox__inner::after {
  border-color: #C0C4CC; }

.o-checkbox__input.is-disabled.is-indeterminate .o-checkbox__inner {
  background-color: #F2F6FC;
  border-color: #DCDFE6; }

.o-checkbox__input.is-disabled.is-indeterminate .o-checkbox__inner::before {
  background-color: #C0C4CC;
  border-color: #C0C4CC; }

.o-checkbox__input.is-checked .o-checkbox__inner,
.o-checkbox__input.is-indeterminate .o-checkbox__inner {
  background-color: #409EFF;
  border-color: #409EFF; }

.o-checkbox__input.is-disabled + span.o-checkbox__label {
  color: #C0C4CC;
  cursor: not-allowed; }

.o-checkbox__input.is-checked .o-checkbox__inner::after {
  -webkit-transform: rotate(45deg) scaleY(1);
  transform: rotate(45deg) scaleY(1); }

.o-checkbox__input.is-checked + .o-checkbox__label {
  color: #409EFF; }

.o-checkbox__input.is-focus .o-checkbox__inner {
  border-color: #409EFF; }

.o-checkbox__input.is-indeterminate .o-checkbox__inner::before {
  content: '';
  position: absolute;
  display: block;
  background-color: #FFF;
  height: 2px;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  left: 0;
  right: 0;
  top: 5px; }

.o-checkbox__input.is-indeterminate .o-checkbox__inner::after {
  display: none; }

.o-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #DCDFE6;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #FFF;
  z-index: 1;
  -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46); }

.o-checkbox__inner:hover {
  border-color: #409EFF; }

.o-checkbox__inner::after {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  content: "";
  border: 1px solid #FFF;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  -webkit-transform: rotate(45deg) scaleY(0);
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  -webkit-transition: -webkit-transform .15s ease-in .05s;
  transition: -webkit-transform .15s ease-in .05s;
  transition: transform .15s ease-in .05s;
  transition: transform .15s ease-in .05s, -webkit-transform .15s ease-in .05s;
  -webkit-transform-origin: center;
  transform-origin: center; }

.o-checkbox__original {
  opacity: 0;
  outline: 0;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1; }

.o-checkbox-button,
.o-checkbox-button__inner {
  display: inline-block;
  position: relative; }

.o-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 14px; }

.o-checkbox:last-of-type {
  margin-right: 0; }

.o-checkbox-button__inner {
  font-weight: 500;
  cursor: pointer;
  background: #FFF;
  border: 1px solid #DCDFE6;
  border-left: 0;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 0; }

.o-checkbox-button__inner.is-round {
  padding: 12px 20px; }

.o-checkbox-button__inner:hover {
  color: #409EFF; }

.o-checkbox-button__inner [class*=el-icon-] {
  line-height: .9; }

.o-checkbox-button__inner [class*=el-icon-] + span {
  margin-left: 5px; }

.o-checkbox-button__original {
  opacity: 0;
  outline: 0;
  position: absolute;
  margin: 0;
  z-index: -1; }

.o-checkbox-button.is-checked .o-checkbox-button__inner {
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
  -webkit-box-shadow: -1px 0 0 0 #8cc5ff;
  box-shadow: -1px 0 0 0 #8cc5ff; }

.o-checkbox-button.is-checked:first-child .o-checkbox-button__inner {
  border-left-color: #409EFF; }

.o-checkbox-button.is-disabled .o-checkbox-button__inner {
  color: #C0C4CC;
  cursor: not-allowed;
  background-image: none;
  background-color: #FFF;
  border-color: #EBEEF5;
  -webkit-box-shadow: none;
  box-shadow: none; }

.o-checkbox-button.is-disabled:first-child .o-checkbox-button__inner {
  border-left-color: #EBEEF5; }

.o-checkbox-button:first-child .o-checkbox-button__inner {
  border-left: 1px solid #DCDFE6;
  border-radius: 4px 0 0 4px;
  -webkit-box-shadow: none !important;
  box-shadow: none !important; }

.o-checkbox-button.is-focus .o-checkbox-button__inner {
  border-color: #409EFF; }

.o-checkbox-button:last-child .o-checkbox-button__inner {
  border-radius: 0 4px 4px 0; }

.o-checkbox-button--medium .o-checkbox-button__inner {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 0; }

.o-checkbox-button--medium .o-checkbox-button__inner.is-round {
  padding: 10px 20px; }

.o-checkbox-button--small .o-checkbox-button__inner {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 0; }

.o-checkbox-button--small .o-checkbox-button__inner.is-round {
  padding: 9px 15px; }

.o-checkbox-button--mini .o-checkbox-button__inner {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 0; }

.o-checkbox-button--mini .o-checkbox-button__inner.is-round {
  padding: 7px 15px; }

.o-checkbox-group {
  font-size: 0; }

.o-tree {
  position: relative;
  cursor: default;
  background: #FFF;
  color: #606266; }

.o-tree__empty-block {
  position: relative;
  min-height: 60px;
  text-align: center;
  width: 100%;
  height: 100%; }

.o-tree__empty-text {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #909399;
  font-size: 14px; }

.o-tree__drop-indicator {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #409EFF; }

.o-tree-node {
  white-space: nowrap;
  outline: 0;
  position: relative; }

.o-tree-node:focus > .o-tree-node__content {
  background-color: #F5F7FA; }

.o-tree-node.is-drop-inner > .o-tree-node__content .o-tree-node__label {
  background-color: #409EFF;
  color: #fff; }

.o-tree-node__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 26px;
  cursor: pointer; }

.o-tree-node__content > .o-tree-node__expand-icon {
  padding: 6px; }

.o-tree-node__content > label.o-checkbox {
  margin-right: 8px; }

.o-tree-node__content:hover {
  background-color: #F5F7FA; }

.o-tree.is-dragging .o-tree-node__content {
  cursor: move; }

.o-tree.is-dragging .o-tree-node__content * {
  pointer-events: none; }

.o-tree.is-dragging.is-drop-not-allow .o-tree-node__content {
  cursor: not-allowed; }

.o-tree-node__expand-icon {
  cursor: pointer;
  color: #C0C4CC;
  font-size: 12px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg); }

.o-tree-node__expand-icon.expanded {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg); }

.o-tree-node__expand-icon.is-leaf {
  color: transparent;
  cursor: default;
  width: 12px;
  height: 12px; }

.o-tree-node__label {
  font-size: 14px; }

.o-tree-node__loading-icon {
  margin-right: 8px;
  font-size: 14px;
  color: #C0C4CC; }

.o-tree-node > .o-tree-node__children {
  overflow: hidden;
  background-color: transparent; }

.o-tree-node.is-expanded > .o-tree-node__children {
  display: block; }

.o-tree-node.is-current-blur > .o-tree-node__content {
  background-color: rgba(0, 0, 0, 0.1); }

.o-tree-node.is-current > .o-tree-node__content {
  background-color: rgba(7, 193, 96, 0.241);
  background-color: var(--o-primary-fade-more, rgba(7, 193, 96, 0.241)); }

.sign {
  position: absolute;
  font-size: 10px;
  top: 4px;
  right: 4px; }

.action-icons {
  position: absolute;
  font-size: 10px;
  top: 4px;
  right: 4px; }

.action-icon {
  display: inline-block;
  font-size: 15px;
  margin-left: 15px;
  cursor: pointer; }

.edit-input {
  width: 100%; }

.o-tree-node__label {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 32px; }

.o-tree-node__label.is-editing {
  text-overflow: unset; }
`


var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onNodeClick = function (evt, node) {
            evt.stopPropagation();
            node.expanded = !node.expanded;
            if (_this.prevSelectedNode) {
                _this.prevSelectedNode.selected = false;
            }
            if (_this.prevBlurSelectedNode) {
                _this.prevBlurSelectedNode.selectedBlur = false;
            }
            node.selected = true;
            _this.forceUpdate();
            _this.fire('node-click', node);
        };
        _this.onNodeArrowClick = function (node) {
            _this.fire('node-arrow-click', node);
            _this.fire('node-click', node);
        };
        _this.onContextMenu = function (evt, node) {
            evt.stopPropagation();
            evt.preventDefault();
            _this.fire('context-menu', {
                evt: evt,
                node: node
            });
        };
        _this.onActionIcon = function (evt, icon) {
            evt.stopPropagation();
            _this.fire('action-icon-click', icon);
        };
        _this.onEditInputBlur = function () {
            //这个if防止 enter 和这失去焦点冲突
            if (_this.prevSelectedNode.editing) {
                _this.prevSelectedNode.editing = false;
                _this.forceUpdate();
            }
        };
        _this.onEditInputChange = function (evt) {
            _this.prevSelectedNode.label = evt.target.value;
            _this.forceUpdate();
        };
        return _this;
    }
    Tree.prototype.fold = function () {
        var _this = this;
        this.props.data.forEach(function (node) {
            _this._fold(node);
        });
        this.forceUpdate();
        this.fire('fold');
    };
    Tree.prototype._fold = function (node) {
        var _this = this;
        node.expanded = false;
        if (node.children) {
            node.children.forEach(function (child) {
                _this._fold(child);
            });
        }
    };
    Tree.prototype.installed = function () {
        var _this = this;
        window.addEventListener('click', function (evt) {
            _this.prevSelectedNode.selected = false;
            _this.prevSelectedNode.selectedBlur = true;
            _this.prevBlurSelectedNode = _this.prevSelectedNode;
            _this.prevSelectedNode = null;
            _this.forceUpdate();
        });
        window.addEventListener('keydown', function (evt) {
            //enter
            if (evt.keyCode === 13) {
                if (_this.prevSelectedNode) {
                    if (_this.prevSelectedNode.editing) {
                        _this.prevSelectedNode.editing = false;
                        _this.prevSelectedNode.label = _this.editInput.value;
                        //防止这个错误 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is no longer a child of this node. Perhaps it was moved in a 'blur' event handler?
                        _this.editInput.blur();
                        _this.forceUpdate();
                    }
                    else {
                        _this.prevSelectedNode.editing = true;
                        _this.forceUpdate();
                        _this.editInput.focus();
                    }
                }
            }
        });
    };
    Tree.prototype.renderNode = function (node, level) {
        var _this = this;
        if (node.selected) {
            this.prevSelectedNode = node;
        }
        this._tempTagName = 'o-icon-' + node.icon;
        return h("div", __assign({ role: "treeitem", onContextMenu: function (evt) { _this.onContextMenu(evt, node); }, onClick: function (evt) { _this.onNodeClick(evt, node); } }, extractClass({}, 'o-tree-node', {
            'is-expanded': node.expanded,
            'is-current': node.selected,
            'is-current-blur': node.selectedBlur
        })),
            h("div", { class: "o-tree-node__content", style: "padding-left: " + level * this.props.padding + "px;" },
                (node.children && node.children.length > 0) ? h("svg", __assign({ onClick: function (_) { return _this.onNodeArrowClick(node); }, viewBox: "0 0 1024 1024" }, extractClass({}, 'o-tree-node__expand-icon', {
                    'expanded': node.expanded,
                }), { "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false" }),
                    h("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" })) : h("span", { class: "is-leaf o-tree-node__expand-icon" }),
                h("span", __assign({ style: node.color && { color: node.color } }, extractClass({}, 'o-tree-node__label', {
                    'is-editing': node.editing
                })),
                    node.icon && h(this._tempTagName, null),
                    node.editing ? h("input", { value: node.label, onChange: this.onEditInputChange, onBlur: this.onEditInputBlur, ref: function (_) { return _this.editInput = _; }, class: "edit-input", onClick: function (evt) { return evt.stopPropagation(); } }) : node.label)),
            node.expanded && node.children && node.children.length > 0 && h("div", { role: "group", class: "o-tree-node__children", style: "", "aria-expanded": "true", "data-old-padding-top": "", "data-old-padding-bottom": "", "data-old-overflow": "" }, node.children.map(function (child) {
                return _this.renderNode(child, level + 1);
            })),
            (!node.editing && node.actionIcons) &&
                h("div", { class: "action-icons" }, node.actionIcons.map(function (actionIcon) {
                    _this._tempTagName = 'o-icon-' + actionIcon;
                    return h(_this._tempTagName, { onclick: function (_) { return _this.onActionIcon(_, actionIcon); }, class: "action-icon" });
                })),
            (!node.editing && node.sign) && h("span", { style: node.color && { color: node.color }, class: "sign" }, node.sign));
    };
    Tree.prototype.render = function (props) {
        var _this = this;
        return (h("div", { role: "tree", class: "o-tree" }, props.data.map(function (node) {
            return _this.renderNode(node, 0);
        })));
    };
    Tree.css = css;
    Tree.defaultProps = {
        padding: 10
    };
    Tree.propTypes = {
        data: Array,
        padding: Number
    };
    Tree = __decorate([
        tag('o-tree')
    ], Tree);
    return Tree;
}(WeElement));

export default Tree;
//# sourceMappingURL=index.esm.js.map
