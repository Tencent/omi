/**
 * @omiu/pagination v0.0.2 http://omijs.org
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


var css = `div {
  color: rgba(0, 0, 0, 0.65); }

* {
  box-sizing: border-box; }

ul,
li {
  padding: 0;
  margin: 0; }

li {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  vertical-align: middle;
  line-height: 32px;
  text-align: center;
  margin: 0 3px 0 3px;
  cursor: pointer;
  border-radius: 3px; }

.o-pager {
  display: inline-block; }

button {
  width: 32px;
  height: 32px;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid #ccc;
  background: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none; }

button.btn-next:not(disabled):active,
button.btn-prev:not(disabled):active {
  background-color: #eee; }

button:disabled {
  pointer-events: none;
  border-color: #eee;
  cursor: default; }

.more:after {
  content: '...'; }

.more {
  border: none;
  cursor: default; }

.active {
  border-color: #07C160;
  color: #04a150; }

svg {
  position: relative;
  top: 2px; }
`


var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.beforeRender = function () {
        this.pageNum = Math.ceil(this.props.total / this.props.pageSize);
    };
    Pagination.prototype.goto = function (index) {
        this.props.currentPage = index;
        this.forceUpdate();
        this.fire('change', index);
    };
    Pagination.prototype.render = function (props) {
        var arr = [], interval = this.getInterval();
        if (interval[0] > 0 && props.numEdge > 0) {
            var end = Math.min(props.numEdge, interval[0]);
            for (var i = 0; i < end; i++) {
                arr.push(this.getItem(i, i + 1));
            }
            if (props.numEdge < interval[0] && props.ellipseText) {
                arr.push(h("li", { class: "o-icon more btn-quicknext o-icon-more" }));
            }
        }
        for (var i = interval[0]; i < interval[1]; i++) {
            arr.push(this.getItem(i, i + 1));
        }
        if (interval[1] < this.pageNum && props.numEdge > 0) {
            if (this.pageNum - props.numEdge > interval[1] && props.ellipseText) {
                arr.push(h("li", { class: "o-icon more btn-quicknext o-icon-more" }));
            }
            var begin = Math.max(this.pageNum - props.numEdge, interval[1]);
            for (var i = begin; i < this.pageNum; i++) {
                arr.push(this.getItem(i, i + 1));
            }
        }
        return (h("div", __assign({}, extractClass(props, 'o-pagination is-background')),
            props.prevShow && this.getPrev(),
            ' ',
            h("ul", { class: "o-pager" }, arr.map(function (p) {
                return p;
            })),
            ' ',
            props.nextShow && this.getNext()));
    };
    Pagination.prototype.getInterval = function () {
        var ne_half = Math.ceil(this.props.numDisplay / 2);
        var upper_limit = this.pageNum - this.props.numDisplay;
        var start = this.props.currentPage > ne_half
            ? Math.max(Math.min(this.props.currentPage - ne_half, upper_limit), 0)
            : 0;
        var end = this.props.currentPage > ne_half
            ? Math.min(this.props.currentPage + ne_half, this.pageNum)
            : Math.min(this.props.numDisplay, this.pageNum);
        return [start, end];
    };
    Pagination.prototype.getPrev = function () {
        var _this = this;
        if (this.props.currentPage === 0) {
            return (h("button", { type: "button", class: "btn-prev", disabled: true },
                h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "left", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                    h("path", { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" }))));
        }
        return (h("button", { type: "button", class: "btn-prev", onclick: function (e) {
                _this.goto(_this.props.currentPage - 1);
            } },
            h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "left", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                h("path", { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" }))));
    };
    Pagination.prototype.getNext = function () {
        var _this = this;
        if (this.props.currentPage === this.pageNum - 1) {
            return (h("button", { type: "button", class: "btn-next", disabled: true },
                h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "right", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                    h("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" }))));
        }
        return (h("button", { type: "button", class: "btn-next", onclick: function (e) {
                _this.goto(_this.props.currentPage + 1);
            } },
            h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "right", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                h("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" }))));
    };
    Pagination.prototype.getItem = function (pageIndex, text) {
        var _this = this;
        if (this.props.currentPage === pageIndex) {
            return h("li", { class: "number active" }, text);
        }
        return (h("li", { class: "number", onclick: function (e) {
                _this.goto(pageIndex);
            } }, text));
    };
    Pagination.css = css;
    Pagination.defaultProps = {
        total: 0,
        pageSize: 10,
        numDisplay: 5,
        currentPage: 0,
        numEdge: 3,
        linkTo: '#',
        prevText: 'Prev',
        nextText: 'Next',
        ellipseText: '...',
        prevShow: true,
        nextShow: true
    };
    Pagination.propTypes = {
        total: Number,
        pageSize: Number,
        numDisplay: Number,
        currentPage: Number,
        numEdge: Number,
        linkTo: String,
        prevText: String,
        nextText: String,
        ellipseText: String,
        prevShow: Boolean,
        nextShow: Boolean
    };
    Pagination = __decorate([
        tag('o-pagination')
    ], Pagination);
    return Pagination;
}(WeElement));

export default Pagination;
//# sourceMappingURL=index.esm.js.map
