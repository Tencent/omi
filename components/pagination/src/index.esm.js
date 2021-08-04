/**
 * @omiu/pagination v0.0.5 http://omijs.org
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
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
  color: rgba(0, 0, 0, 0.87); }

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
  vertical-align: middle;
  line-height: 32px;
  text-align: center;
  margin: 0 3px 0 3px;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 2px; }

.o-pager {
  display: inline-block; }

button {
  width: 32px;
  height: 32px;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  border-radius: 50%; }

button:hover {
  background-color: rgba(7, 193, 96, 0.1);
  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1)); }

button:not(disabled):active {
  color: white;
  background-color: #059048;
  background-color: var(--o-primary-active, #059048); }

button:disabled {
  pointer-events: none;
  border-color: #eee; }

.active button:hover {
  background-color: rgba(7, 193, 96, 0.618);
  background-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }

.active button {
  color: white;
  background-color: #07c160;
  background-color: var(--o-primary, #07c160); }

.more:after {
  content: '...'; }

.more {
  border: none;
  cursor: default; }

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
        this.updateProps({
            currentPage: index
        });
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
            h("ul", { class: "o-pager" },
                h("li", { key: "prev" },
                    " ",
                    props.prevShow && this.getPrev(),
                    ' '),
                arr.map(function (p) {
                    return p;
                }),
                h("li", { key: "next" },
                    " ",
                    props.nextShow && this.getNext())),
            ' '));
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
            return h("li", { class: "number active" },
                h("button", null, text));
        }
        return (h("li", { class: "number", onclick: function (e) {
                _this.goto(pageIndex);
            } },
            h("button", null, text)));
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
