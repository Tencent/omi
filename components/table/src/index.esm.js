/**
 * @omiu/table v0.0.3 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, tag, WeElement, options, classNames } from 'omi';

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

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __decorate$1(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @omiu/checkbox v0.0.7 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

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


var css$1 = `:host {
  display: inline-block; }

* {
  box-sizing: border-box; }

.o-checkbox {
  position: relative;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap; }
  .o-checkbox:hover {
    cursor: pointer; }

.o-checkbox__native-control:enabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:enabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 1; }

.o-checkbox__indeterminate .o-checkbox__checkmark {
  opacity: 0; }

.o-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  color: #ffffff; }

.o-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.78334;
  stroke-dasharray: 29.78334; }

.o-checkbox__native-control:checked ~ .o-checkbox__background .o-checkbox__checkmark-path,
.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__checkmark-path {
  stroke-dashoffset: 0; }

.o-checkbox__background {
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 45%;
  height: 45%;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1); }

.o-checkbox__background,
.o-checkbox__label {
  display: inline-block;
  height: 18px;
  vertical-align: middle; }

.o-checkbox__background {
  width: 18px; }

.o-checkbox__label {
  margin-left: 10px; }

.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1; }

.o-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border: 1px solid white;
  top: 50%;
  position: relative;
  margin-top: -1px;
  opacity: 0;
  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1); }

.o-checkbox__native-control {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit; }

.o-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.54);
  color: white; }

.o-checkbox__native-control:disabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:disabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 0.5; }

.o-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.34);
  color: white; }

.o-checkbox__disabled .o-checkbox__label {
  color: #888; }

.o-checkbox__disabled:hover {
  cursor: not-allowed; }
`;


/** @class */ ((function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeHandler = function (e) {
            if (_this.props.disabled) {
                return;
            }
            _this.fire('change', e.currentTarget.checked);
            if (_this.props.indeterminate) {
                _this.props.checked = true;
                _this.props.indeterminate = false;
                if (_this.prevProps) {
                    _this.prevProps.checked = true;
                    _this.prevProps.indeterminate = false;
                }
                _this.update(true);
            }
        };
        return _this;
    }
    Table.prototype.render = function (props) {
        return (h("div", __assign({}, extractClass(props, 'o-checkbox', {
            'o-checkbox__disabled': props.disabled,
            'o-checkbox__indeterminate': props.indeterminate
        })),
            h("input", __assign({ type: "checkbox", disabled: props.disabled, onChange: this.changeHandler }, extract(props, ['checked', 'value', 'indeterminate']), { class: "o-checkbox__native-control", id: "checkbox" })),
            h("div", { class: "o-checkbox__background" },
                h("svg", { class: "o-checkbox__checkmark", viewBox: "0 0 24 24" },
                    h("path", { class: "o-checkbox__checkmark-path", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })),
                h("div", { class: "o-checkbox__mixedmark" })),
            props.label && h("label", { class: "o-checkbox__label", for: "checkbox" }, props.label)));
    };
    Table.css = css$1;
    Table.propTypes = {
        label: String,
        disabled: Boolean,
        indeterminate: Boolean,
        checked: Boolean,
        value: String
    };
    Table = __decorate([
        tag('o-checkbox')
    ], Table);
    return Table;
})(WeElement));
function extract(props, prop) {
    var _a;
    if (typeof prop === 'string') {
        if (props.hasOwnProperty(prop)) {
            return _a = {}, _a[prop] = props[prop], _a;
        }
    }
    else {
        var res_1 = {};
        prop.forEach(function (key) {
            if (props.hasOwnProperty(key)) {
                res_1[key] = props[key];
            }
        });
        return res_1;
    }
}


var css = `:host {
  display: block; }

.o-table {
  background: white;
  margin: auto;
  padding: 5px;
  width: 100%;
  animation: float 5s infinite;
  border-spacing: 0;
  border-collapse: collapse;
  color: #606266;
  font-weight: 400; }

.o-table-checkbox th:first-child,
.o-table-checkbox td:first-child {
  padding: 2px 40px 2px 16px; }

th {
  border-bottom: 1px solid #E0E0E0;
  text-align: left;
  vertical-align: middle;
  padding: 14px 40px 14px 16px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  line-height: 1.3125rem;
  font-weight: 500;
  background: #fafafa; }

.o-table-border td,
.o-table-border th {
  border-right: 1px solid #ebeef5; }

.o-table-border td:first-child,
.o-table-border th:first-child {
  border-left: 1px solid #ebeef5; }

.o-table-border th {
  border-top: 1px solid #ebeef5; }

tr {
  border-bottom: 1px solid #E0E0E0; }

tr:hover td {
  background: #f5f5f5; }

td {
  text-align: left;
  vertical-align: middle;
  font-size: 0.875rem;
  padding: 14px 40px 14px 16px; }

td.compact,
th.compact {
  padding: 4px 40px 4px 16px; }

a {
  text-decoration: none; }

.o-table-align-left {
  text-align: left; }

.o-table-align-center {
  text-align: center; }

.o-table-align-right {
  text-align: right; }

a,
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: inherit; }

a:hover {
  color: #07c160;
  color: var(--o-primary, #07c160); }

o-checkbox {
  margin-right: 5px; }

.o-table-stripe tr:nth-of-type(odd) {
  background: white; }

.o-table-stripe tr:nth-of-type(even) {
  background: #fafafa; }
`


options.ignoreAttrs = true;
var Table = /** @class */ (function (_super) {
    __extends$1(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.removeItem = function (item) {
            _this.props.dataSource.splice(_this.props.dataSource.indexOf(item), 1);
            _this.update();
        };
        _this._changeHandlerTh = function (e, item) {
            _this.fire('changeall', { item: item, checked: e.detail });
            _this.props.dataSource.forEach(function (item) {
                item.checked = e.detail;
            });
            _this.update();
        };
        _this._changeHandlerTd = function (e, item) {
            _this.fire('change', { item: item, checked: e.detail });
            item.checked = e.detail;
            _this.update();
        };
        return _this;
    }
    Table.prototype._getCheckedState = function () {
        var c = 0, uc = 0;
        for (var i = 0, len = this.props.dataSource.length; i < len; i++) {
            if (this.props.dataSource[i].checked) {
                c++;
            }
            else {
                uc++;
            }
            if (c > 0 && uc > 0) {
                return { 'indeterminate': true };
            }
        }
        if (c === 0)
            return { 'unchecked': true };
        return { 'checked': true };
    };
    Table.prototype.render = function (props) {
        var _this = this;
        if (!props.columns)
            return;
        if (!props.dataSource)
            return;
        return (h("table", __assign$1({}, extractClass(props, 'o-table', {
            'o-table-checkbox': props.checkbox,
            'o-table-border': props.border,
            'o-table-stripe': props.stripe
        })),
            h("thead", null,
                h("tr", null, props.columns.map(function (column, index) {
                    var _a;
                    var obj = {};
                    var width = column.width;
                    if (width !== undefined) {
                        obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                    }
                    return h("th", __assign$1({}, obj, { class: classNames((_a = {},
                            _a["o-table-align-" + column.align] = column.align,
                            _a['compact'] = props.compact,
                            _a)) }),
                        index === 0 && props.checkbox && h("o-checkbox", __assign$1({}, _this._getCheckedState(), { onChange: function (_) { return _this._changeHandlerTh(_, column); } })),
                        column.title);
                }))),
            h("tbody", { class: "o-table-tbody" }, props.dataSource.map(function (item) { return (h("tr", { key: item.id, style: {
                    background: item.$config && item.$config.bgColor
                } }, props.columns.map(function (column, subIndex) {
                var _a;
                var obj = {};
                var width = column.width;
                if (width !== undefined) {
                    obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                }
                return h("td", __assign$1({}, obj, { class: classNames((_a = {},
                        _a["o-table-align-" + column.align] = column.align,
                        _a['compact'] = props.compact,
                        _a)) }),
                    subIndex === 0 && props.checkbox && h("o-checkbox", { checked: item.checked, onChange: function (_) { return _this._changeHandlerTd(_, item); } }),
                    column.render ? column.render(item) : item[column.key]);
            }))); }))));
    };
    Table.css = css;
    Table.defaultProps = {
        dataSource: [],
        columns: [],
        checkbox: false,
        border: false,
        stripe: false,
        compact: false
    };
    Table.propTypes = {
        dataSource: Object,
        columns: Object,
        checkbox: Boolean,
        border: Boolean,
        stripe: Boolean,
        compact: Boolean
    };
    Table = __decorate$1([
        tag('o-table')
    ], Table);
    return Table;
}(WeElement));

export default Table;
//# sourceMappingURL=index.esm.js.map
