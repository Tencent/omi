/**
 * @omiu/table v0.0.13 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

(function (omi) {
    'use strict';

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

    var extendStatics$2 = function(d, b) {
        extendStatics$2 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics$2(d, b);
    };

    function __extends$2(d, b) {
        extendStatics$2(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$2 = function() {
        __assign$2 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };

    function __decorate$2(decorators, target, key, desc) {
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


    var css$2 = `:host {
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
        __extends$1(Table, _super);
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
            return (omi.h("div", __assign$1({}, omi.extractClass(props, 'o-checkbox', {
                'o-checkbox__disabled': props.disabled,
                'o-checkbox__indeterminate': props.indeterminate
            })),
                omi.h("input", __assign$1({ type: "checkbox", disabled: props.disabled, onChange: this.changeHandler }, extract(props, ['checked', 'value', 'indeterminate']), { class: "o-checkbox__native-control", id: "checkbox" })),
                omi.h("div", { class: "o-checkbox__background" },
                    omi.h("svg", { class: "o-checkbox__checkmark", viewBox: "0 0 24 24" },
                        omi.h("path", { class: "o-checkbox__checkmark-path", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })),
                    omi.h("div", { class: "o-checkbox__mixedmark" })),
                props.label && omi.h("label", { class: "o-checkbox__label", for: "checkbox" }, props.label)));
        };
        Table.css = css$2;
        Table.propTypes = {
            label: String,
            disabled: Boolean,
            indeterminate: Boolean,
            checked: Boolean,
            value: String
        };
        Table = __decorate$1([
            omi.tag('o-checkbox')
        ], Table);
        return Table;
    })(omi.WeElement));
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

    /**
     * @omiu/input v0.0.11 http://omijs.org
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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }


    var css$1 = `:host {
  display: inline-block; }

:host([block]) {
  display: block; }

.o-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px; }

.o-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #FFF;
  background-image: none;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea__inner:hover {
  border-color: #C0C4CC; }

.o-textarea__inner:focus {
  outline: 0;
  border-color: #07c160;
  border-color: var(--o-primary, #07c160); }

.o-textarea .o-input__count {
  color: #909399;
  background: #FFF;
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  right: 10px; }

.o-textarea.is-disabled .o-textarea__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-textarea.is-disabled .o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea.is-exceed .o-textarea__inner {
  border-color: #F56C6C; }

.o-textarea.is-exceed .o-input__count {
  color: #F56C6C; }

.o-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%; }

.o-input::-webkit-scrollbar {
  z-index: 11;
  width: 6px; }

.o-input::-webkit-scrollbar:horizontal {
  height: 6px; }

.o-input::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc; }

.o-input::-webkit-scrollbar-corner {
  background: #fff; }

.o-input::-webkit-scrollbar-track {
  background: #fff; }

.o-input::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px; }

.o-input .o-input__clear {
  color: #C0C4CC;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-input .o-input__clear:hover {
  color: #909399; }

.o-input .o-input__count {
  height: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #909399;
  font-size: 12px; }

.o-input .o-input__count .o-input__count-inner {
  background: #FFF;
  line-height: initial;
  display: inline-block;
  padding: 0 5px; }

.o-input__inner {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%; }

.o-input__prefix,
.o-input__suffix {
  position: absolute;
  top: 0;
  -webkit-transition: all .3s;
  text-align: center;
  height: 100%;
  color: #C0C4CC; }

.o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input__inner:hover {
  border-color: #C0C4CC; }

.o-input.is-active .o-input__inner,
.o-input__inner:focus {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  outline: 0; }

.o-input__suffix {
  right: 5px;
  transition: all .3s;
  pointer-events: none; }

.o-input__suffix-inner {
  pointer-events: all; }

.o-input__prefix {
  left: 5px;
  transition: all .3s; }

.o-input__icon {
  position: absolute;
  width: 35px;
  height: 100%;
  right: 0;
  top: 0;
  padding-top: 0.215em;
  text-align: center;
  color: #bfcbd9;
  transition: all .3s; }

.o-input--small .o-input__icon,
.o-input--medium .o-input__icon {
  padding-top: 0.135em; }

.o-input--mini .o-input__icon {
  padding-top: 0.125em; }

.o-input__icon.is-prefix {
  left: 0; }

.o-input.o-input-prefix input {
  padding-left: 30px; }

.o-input.o-input-suffix input {
  padding-right: 30px; }

.o-input__icon:after {
  content: '';
  height: 100%;
  width: 0;
  display: inline-block;
  vertical-align: middle; }

.o-input__validateIcon {
  pointer-events: none; }

.o-input.is-disabled .o-input__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-input.is-disabled .o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__icon {
  cursor: not-allowed; }

.o-input.is-exceed .o-input__inner {
  border-color: #F56C6C; }

.o-input.is-exceed .o-input__suffix .o-input__count {
  color: #F56C6C; }

.o-input--suffix .o-input__inner {
  padding-right: 30px; }

.o-input--prefix .o-input__inner {
  padding-left: 30px; }

.o-input--medium {
  font-size: 14px; }

.o-input--medium .o-input__inner {
  height: 36px;
  line-height: 36px; }

.o-input--medium .o-input__icon {
  line-height: 36px; }

.o-input--small {
  font-size: 13px; }

.o-input--small .o-input__inner {
  height: 32px;
  line-height: 32px; }

.o-input--small .o-input__icon {
  line-height: 32px; }

.o-input--mini {
  font-size: 12px; }

.o-input--mini .o-input__inner {
  height: 28px;
  line-height: 28px; }

.o-input--mini .o-input__icon {
  line-height: 28px; }

.o-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0; }

.o-input-group > .o-input__inner {
  vertical-align: middle;
  display: table-cell; }

.o-input-group__append,
.o-input-group__prepend {
  background-color: #F5F7FA;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap; }

.o-input-group--prepend .o-input__inner,
.o-input-group__append {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0; }

.o-input-group--append .o-input__inner,
.o-input-group__prepend {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; }

.o-input-group__append:focus,
.o-input-group__prepend:focus {
  outline: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-select,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-select {
  display: inline-block;
  margin: -10px -20px; }

.o-input-group__append button.o-button,
.o-input-group__append div.o-select .o-input__inner,
.o-input-group__append div.o-select:hover .o-input__inner,
.o-input-group__prepend button.o-button,
.o-input-group__prepend div.o-select .o-input__inner,
.o-input-group__prepend div.o-select:hover .o-input__inner {
  border-color: transparent;
  background-color: transparent;
  color: inherit;
  border-top: 0;
  border-bottom: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-input,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-input {
  font-size: inherit; }

.o-input-group__prepend {
  border-right: 0; }

.o-input-group__append {
  border-left: 0; }

.o-input-group--append .o-select .o-input.is-focus .o-input__inner,
.o-input-group--prepend .o-select .o-input.is-focus .o-input__inner {
  border-color: transparent; }

.o-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0; }

.o-icon-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -0.5em;
  cursor: pointer;
  color: #bfcbd9;
  display: none;
  border-radius: 50%;
  width: 1em;
  height: 1em; }

.o-icon-clear:hover {
  background: #b1b4b9;
  color: white; }

.o-input:hover .o-icon-clear {
  display: block;
  cursor: pointer; }

.o-input .o-input__count {
  position: absolute;
  top: 0px;
  right: 4px; }

.o-input.is-block {
  display: block;
  width: 100%; }
`;


    /** @class */ ((function (_super) {
        __extends(Input, _super);
        function Input() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onGetValue = function () {
                return _this.__$value;
            };
            _this._onSetValue = function (value) {
                _this.__$value = value;
                _this.props.value = value;
                _this.setAttribute('value', value);
            };
            _this.valueLength = 0;
            _this.handleBlur = function () {
                _this.fire('blur', _this.props.value);
            };
            _this.handleFocus = function () {
                _this.fire('focus', _this.props.value);
            };
            _this.handleChange = function (evt) {
                _this.__$value = evt.target.value;
                _this.props.value = evt.target.value;
                _this.fire('change', _this.props.value);
            };
            _this.handleInput = function (evt) {
                evt.stopPropagation();
                _this.__$value = evt.target.value;
                _this.props.value = evt.target.value;
                _this.fire('input', _this.props.value);
                if (_this.props.maxLength) {
                    _this.valueLength = evt.target.value.length;
                    _this.update();
                }
            };
            _this.clearInput = function () {
                _this.updateProps({
                    value: ''
                });
                _this.__$value = '';
            };
            return _this;
        }
        Input.prototype.install = function () {
            this.__$value = this.props.value;
            Object.defineProperty(this, 'value', {
                get: this._onGetValue,
                set: this._onSetValue
            });
        };
        Input.prototype.focus = function () {
            this.shadowRoot.querySelector('input').focus();
        };
        Input.prototype.blur = function () {
            this.shadowRoot.querySelector('input').blur();
        };
        Input.prototype.render = function (props) {
            var _a;
            var type = props.type, size = props.size, suffixIcon = props.suffixIcon, prefixIcon = props.prefixIcon, autoComplete = props.autoComplete; props.validating; var onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave; props.trim; var otherProps = __rest(props, ["type", "size", "suffixIcon", "prefixIcon", "autoComplete", "validating", "onMouseEnter", "onMouseLeave", "trim"]);
            this._tempTagName = 'o-icon-' + (suffixIcon || prefixIcon);
            this._tempInputTagName = type === 'textarea' ? 'textarea' : 'input';
            return (omi.h("div", __assign({}, omi.extractClass(props, 'o-input', (_a = {},
                _a["o-input--" + size] = props.size,
                _a['is-disabled'] = this.props.disabled,
                _a['o-input-suffix'] = suffixIcon,
                _a['o-input-prefix'] = prefixIcon,
                _a['is-block'] = props.block,
                _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
                (prefixIcon || suffixIcon) && omi.h(this._tempTagName, __assign({ css: "svg{\n            width: 1em;\n          }" }, omi.extractClass(props, 'o-input__icon', {
                    'is-prefix': prefixIcon,
                    'is-suffix': suffixIcon
                }))),
                omi.h(this._tempInputTagName, __assign({}, otherProps, { 
                    // ref="input"
                    type: type, class: "o-" + this._tempInputTagName + "__inner", autocomplete: autoComplete, maxLength: props.maxLength, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput })),
                props.clearable && omi.h("svg", { onClick: this.clearInput, class: "o-icon-clear", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                    omi.h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })),
                props.maxLength && omi.h("span", { class: "o-input__count" },
                    omi.h("span", { class: "o-input__count-inner" },
                        this.valueLength,
                        "/",
                        props.maxLength))));
        };
        Input.css = css$1;
        Input.defaultProps = {
            value: '',
            type: 'text',
            autosize: false,
            rows: 2,
            trim: false,
            autoComplete: 'off',
            block: false
        };
        Input.propTypes = {
            disabled: Boolean,
            type: String,
            placeholder: String,
            clearable: Boolean,
            suffixIcon: String,
            size: String,
            prefixIcon: String,
            maxLength: Number,
            autoComplete: String,
            block: Boolean,
            value: String
        };
        Input = __decorate([
            omi.tag('o-input')
        ], Input);
        return Input;
    })(omi.WeElement));

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

    "use strict";

var css = ":host {\n  display: block; }\n\n.o-table {\n  overflow: auto; }\n\n.o-table-table {\n  background: white;\n  margin: auto;\n  padding: 5px;\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  color: #606266;\n  font-weight: 400; }\n\n.o-table-checkbox th:first-child,\n.o-table-checkbox td:first-child {\n  padding: 2px 10px 2px; }\n\nth {\n  border-bottom: 1px solid #E0E0E0;\n  text-align: left;\n  vertical-align: middle;\n  padding: 10px 10px 10px;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.75rem;\n  line-height: 1.3125rem;\n  font-weight: 500;\n  background: #fafafa;\n  white-space: nowrap; }\n\nth,\ntd {\n  display: table-cell;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: auto;\n  max-width: 1px; }\n\nth.sticky-top {\n  position: sticky;\n  top: -1px;\n  z-index: 1000; }\n\ntable thead th.sticky-left {\n  position: sticky;\n  left: -1px;\n  z-index: 1001; }\n\ntable tbody td.sticky-left {\n  position: sticky;\n  left: -1px;\n  z-index: 999; }\n\n.o-table-border td,\n.o-table-border th {\n  border-right: 1px solid #ebeef5; }\n\n.o-table-border td:first-child,\n.o-table-border th:first-child {\n  border-left: 1px solid #ebeef5; }\n\n.o-table-border th {\n  border-top: 1px solid #ebeef5; }\n\ntr {\n  border-bottom: 1px solid #E0E0E0; }\n\ntr:hover td {\n  background: #f5f5f5; }\n\ntd {\n  text-align: left;\n  vertical-align: middle;\n  font-size: 0.875rem;\n  padding: 10px 10px 10px;\n  background: white; }\n\ntd.compact,\nth.compact {\n  padding: 4px 10px 4px; }\n\na {\n  text-decoration: none; }\n\n.o-table-align-left {\n  text-align: left; }\n\n.o-table-align-center {\n  text-align: center; }\n\no-checkbox {\n  height: 20px;\n  vertical-align: middle; }\n\n.o-table-align-right {\n  text-align: right; }\n\na,\na:link,\na:visited,\na:active {\n  text-decoration: none;\n  color: inherit; }\n\na:hover {\n  color: #07c160;\n  color: var(--o-primary, #07c160); }\n\no-checkbox {\n  margin-right: 5px; }\n\n.o-table-stripe tr:nth-of-type(odd) {\n  background: white; }\n\n.o-table-stripe tr:nth-of-type(even) {\n  background: #fafafa; }\n\n.slide-fade-enter-active {\n  transition: all .3s ease; }\n\n.slide-fade-leave-active {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); }\n\n.slide-fade-enter,\n.slide-fade-leave-to {\n  transform: translateX(-40px);\n  opacity: 0; }\n";

    var Table = /** @class */ (function (_super) {
        __extends$2(Table, _super);
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
            _this.onChange = function (evt, item, column) {
                var oldValue = item[column.key];
                item[column.key] = evt.detail;
                _this.update();
                _this.fire('data-changed', {
                    value: item[column.key],
                    oldValue: oldValue,
                    item: item,
                    column: column
                });
            };
            _this.onTdClick = function (item, column, evt) {
                evt.stopPropagation();
                _this.props.dataSource.forEach(function (dataItem) {
                    dataItem.editingKey = null;
                });
                item.editingKey = column.key;
                _this.update();
                _this.editingInput && _this.editingInput.focus();
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
            var _this = this;
            this.setStickyLeft();
            window.addEventListener('click', function () {
                var needUpdate = false;
                _this.props.dataSource.forEach(function (dataItem) {
                    if (dataItem.editingKey) {
                        needUpdate = true;
                    }
                    dataItem.editingKey = null;
                });
                if (needUpdate) {
                    _this.update();
                }
            });
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
            return (omi.h("div", __assign$2({ style: {
                    width: props.width && props.width,
                    height: props.height && props.height
                } }, omi.extractClass(props, 'o-table', {
                'o-table-checkbox': props.checkbox,
                'o-table-border': props.border,
                'o-table-stripe': props.stripe
            })),
                omi.h("table", __assign$2({}, omi.extractClass(props, 'o-table-table')),
                    omi.h("thead", null,
                        omi.h("tr", null, props.columns.map(function (column, index) {
                            var _a;
                            var obj = {};
                            var width = column.width;
                            if (width !== undefined) {
                                obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                            }
                            return omi.h("th", __assign$2({}, obj, { class: omi.classNames((_a = {},
                                    _a["o-table-align-" + column.align] = column.align,
                                    _a['compact'] = props.compact,
                                    _a['sticky-top'] = props.stickyTop,
                                    _a['sticky-left'] = index < props.stickyLeftCount,
                                    _a)) }),
                                index === 0 && props.checkbox && omi.h("o-checkbox", __assign$2({}, _this._getCheckedState(), { onChange: function (_) { return _this._changeHandlerTh(_, column); } })),
                                column.title);
                        }))),
                    omi.h("tbody", { class: "o-table-tbody" }, props.dataSource.map(function (item) { return (omi.h("tr", { key: item.id, ref: function (e) { return _this['row' + item.id] = e; }, style: {
                            background: item.$config && item.$config.bgColor
                        } }, props.columns.map(function (column, subIndex) {
                        var _a;
                        var obj = {};
                        var width = column.width;
                        if (width !== undefined) {
                            obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                        }
                        return omi.h("td", __assign$2({ onclick: function (evt) { return _this.onTdClick(item, column, evt); } }, obj, { class: omi.classNames((_a = {},
                                _a["o-table-align-" + column.align] = column.align,
                                _a['compact'] = props.compact,
                                _a['sticky-left'] = subIndex < props.stickyLeftCount,
                                _a)) }),
                            subIndex === 0 && props.checkbox && omi.h("o-checkbox", { checked: item.checked, onChange: function (_) { return _this._changeHandlerTd(_, item); } }),
                            (column.editable && item.editingKey === column.key) ? omi.h("o-input", { ref: function (_) { return _this.editingInput = _; }, size: "mini", onChange: function (evt) {
                                    _this.onChange(evt, item, column);
                                }, value: item[column.key] }) : (column.render ? column.render(item) : item[column.key]));
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
        Table = __decorate$2([
            omi.tag('o-table')
        ], Table);
        return Table;
    }(omi.WeElement));

    return Table;

}(omi));
//# sourceMappingURL=index.js.map
