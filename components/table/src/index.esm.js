/**
 * @omiu/table v0.0.12 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, extractClass, tag, WeElement, classNames } from 'omi';

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
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * @omiu/checkbox v0.0.11 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

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


var css$1 = `:host {
  display: inline-block; }

* {
  box-sizing: border-box; }

.o-checkbox {
  position: relative;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
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
  height: 14px;
  vertical-align: middle; }

.o-checkbox__background {
  width: 14px; }

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

function leave(el, effect, delay) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    el.classList.remove(effect + '-enter-active');
                    el.classList.remove(effect + '-enter-to');
                    el.classList.add(effect + '-leave');
                    el.classList.add(effect + '-leave-active');
                    var callback = function (e) {
                        el.classList.remove(effect + '-leave-active');
                        // if (autoRemove && el.parentNode) {
                        //   el.parentNode.removeChild(el)
                        // }
                        resolve(1);
                    };
                    once(el, 'transitionend', callback);
                    once(el, 'animationend', callback);
                    window.setTimeout(function () {
                        el.classList.remove(effect + '-leave');
                        el.classList.add(effect + '-leave-to');
                    }, delay);
                })];
        });
    });
}
function once(el, name, callback) {
    var wrapCall = function () {
        this.removeEventListener(name, wrapCall);
        callback();
    }.bind(el);
    el.addEventListener(name, wrapCall);
}


var css = `:host {
  display: block; }

.o-table {
  overflow: auto; }

.o-table-table {
  background: white;
  margin: auto;
  padding: 5px;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  color: #606266;
  font-weight: 400; }

.o-table-checkbox th:first-child,
.o-table-checkbox td:first-child {
  padding: 2px 10px 2px; }

th {
  border-bottom: 1px solid #E0E0E0;
  text-align: left;
  vertical-align: middle;
  padding: 10px 10px 10px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  line-height: 1.3125rem;
  font-weight: 500;
  background: #fafafa;
  white-space: nowrap; }

th.sticky-top {
  position: sticky;
  top: -1px;
  z-index: 1000; }

table thead th.sticky-left {
  position: sticky;
  left: -1px;
  z-index: 1001; }

table tbody td.sticky-left {
  position: sticky;
  left: -1px;
  z-index: 999; }

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
  padding: 10px 10px 10px;
  background: white;
  white-space: nowrap; }

td.compact,
th.compact {
  padding: 4px 10px 4px; }

a {
  text-decoration: none; }

.o-table-align-left {
  text-align: left; }

.o-table-align-center {
  text-align: center; }

o-checkbox {
  height: 20px;
  vertical-align: middle; }

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

.slide-fade-enter-active {
  transition: all .3s ease; }

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); }

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-40px);
  opacity: 0; }
`


var Table = /** @class */ (function (_super) {
    __extends$1(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deleteRow = function (item) {
            _this.props.dataSource.splice(_this.props.dataSource.indexOf(item), 1);
            _this.update();
        };
        _this._changeHandlerTh = function (e, item) {
            _this.fire('change-all', { item: item, checked: e.detail });
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
    Table.prototype.deleteRowById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dataSource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataSource = this.props.dataSource;
                        return [4 /*yield*/, leave(this['row' + id], 'slide-fade')
                            //支持字符串和数字 id
                        ];
                    case 1:
                        _a.sent();
                        //支持字符串和数字 id
                        this.deleteRow(dataSource.find(function (item) { return item.id + '' === id + ''; }));
                        return [2 /*return*/];
                }
            });
        });
    };
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
    Table.prototype.installed = function () {
        this.setStickyLeft();
    };
    Table.prototype.updated = function () {
        this.setStickyLeft();
    };
    Table.prototype.setStickyLeft = function () {
        var stickyLeftEls = this.rootNode.querySelectorAll('.sticky-left');
        var boxRect = this.rootNode.getBoundingClientRect();
        stickyLeftEls.forEach(function (stickyLeftEl, index) {
            var rect = stickyLeftEl.getBoundingClientRect();
            stickyLeftEl.style.left = (rect.left - boxRect.left - 1) + 'px';
        });
    };
    Table.prototype.render = function (props) {
        var _this = this;
        if (!props.columns)
            return;
        if (!props.dataSource)
            return;
        return (h("div", __assign$1({ style: {
                width: props.width && props.width,
                height: props.height && props.height
            } }, extractClass(props, 'o-table', {
            'o-table-checkbox': props.checkbox,
            'o-table-border': props.border,
            'o-table-stripe': props.stripe
        })),
            h("table", __assign$1({}, extractClass(props, 'o-table-table')),
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
                                _a['sticky-top'] = props.stickyTop,
                                _a['sticky-left'] = index < props.stickyLeftCount,
                                _a)) }),
                            index === 0 && props.checkbox && h("o-checkbox", __assign$1({}, _this._getCheckedState(), { onChange: function (_) { return _this._changeHandlerTh(_, column); } })),
                            column.title);
                    }))),
                h("tbody", { class: "o-table-tbody" }, props.dataSource.map(function (item) { return (h("tr", { key: item.id, ref: function (e) { return _this['row' + item.id] = e; }, style: {
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
                            _a['sticky-left'] = subIndex < props.stickyLeftCount,
                            _a)) }),
                        subIndex === 0 && props.checkbox && h("o-checkbox", { checked: item.checked, onChange: function (_) { return _this._changeHandlerTd(_, item); } }),
                        column.render ? column.render(item) : item[column.key]);
                }))); })))));
    };
    Table.css = css;
    Table.defaultProps = {
        dataSource: [],
        columns: [],
        checkbox: false,
        border: false,
        stripe: false,
        compact: false,
        stickyTop: false,
        stickyLeftCount: 0
    };
    Table.propTypes = {
        dataSource: Object,
        columns: Object,
        checkbox: Boolean,
        border: Boolean,
        stripe: Boolean,
        compact: Boolean,
        width: String,
        height: String,
        stickyTop: Boolean,
        stickyLeftCount: Number
    };
    Table = __decorate$1([
        tag('o-table')
    ], Table);
    return Table;
}(WeElement));

export default Table;
//# sourceMappingURL=index.esm.js.map
