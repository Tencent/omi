/**
 * @omiu/card v0.0.1 http://omijs.org
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
  display: inline-block; }

:host([block]) {
  display: block; }

.o-card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
  border: 1px solid #EFEFEF; }

.o-card-medium {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 265px;
  border: 1px solid #EFEFEF; }

.o-card-small {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 230px;
  border: 1px solid #EFEFEF; }

.o-card-header {
  min-height: 48px;
  padding: 0 24px;
  border-bottom: 1px solid #EFEFEF;
  border-radius: 2px 2px 0 0; }

.o-card-header-medium {
  min-height: 42px;
  padding: 0 18px;
  border-bottom: 1px solid #EFEFEF;
  border-radius: 2px 2px 0 0; }

.o-card-header-small {
  min-height: 36px;
  padding: 0 12px;
  border-bottom: 1px solid #EFEFEF;
  border-radius: 2px 2px 0 0; }

.o-card-title {
  float: left;
  padding: 16px 0;
  font-weight: 500;
  font-size: 18px; }

.o-card-extra {
  float: right;
  margin-left: auto;
  padding: 16px 0;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer; }

.o-card-title-medium {
  float: left;
  padding: 10px 0;
  font-weight: 500;
  font-size: 17px; }

.o-card-extra-medium {
  float: right;
  margin-left: auto;
  padding: 10px 0;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer; }

.o-card-title-small {
  float: left;
  padding: 10px 0;
  font-weight: 500;
  font-size: 16px; }

.o-card-extra-small {
  float: right;
  margin-left: auto;
  padding: 10px 0;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer; }

.o-card-body {
  margin: 0 24px;
  font-weight: 200;
  font-size: 14px;
  line-height: 1.5; }

.o-card-body-medium {
  margin: 0 22px;
  font-weight: 200;
  font-size: 13px;
  line-height: 1.2; }

.o-card-body-small {
  margin: 0 20px;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.2; }

.o-card-footer {
  height: 56px;
  display: flex;
  justify-content: center;
  background-color: #fff; }

.item.selected {
  color: #07c160; }

.item {
  flex: 1;
  color: rgba(0, 0, 0, 0.54);
  padding: 6px 12px 8px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }

button {
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
  outline: none;
  border-top: 1px solid #EFEFEF;
  border-right: 1px solid #EFEFEF;
  border-left: none;
  border-bottom: none;
  background-color: #fff; }

button:hover {
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
  outline: none;
  border-top: 1px solid #EFEFEF;
  border-right: 1px solid #EFEFEF;
  border-left: none;
  border-bottom: none;
  background-color: #EFEFEF; }

.icon {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: block;
  margin: 0 auto;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased; }

.icon:hover {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: block;
  margin: 0 auto;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  color: #07C160;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased; }
`


var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.css = css;
        _this.clickHandler = function (item) {
            _this.fire('change', item);
            _this.update(true);
        };
        _this.handleMousemove = function (item) {
            item && (_this.css = css + ".o-card:hover {\n      display: flex;\n      flex-direction: column;\n      margin: 10px;\n      width: 300px;\n      box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n      transition: all .3s;\n      z-index: 1;\n    }");
        };
        return _this;
    }
    Card.prototype.render = function (props) {
        var _a, _b, _c, _d, _e;
        var _this = this;
        return (h("div", __assign({}, extractClass(props, 'o-card', (_a = {},
            _a['o-card-' + props.size] = props.size,
            _a)), { onMousemove: this.handleMousemove(props.hoverable === "true") }),
            h("slot", { name: "cover" },
                h("div", __assign({}, extractClass(props, 'o-card-header', (_b = {},
                    _b['o-card-header-' + props.size] = props.size,
                    _b))),
                    h("div", __assign({}, extractClass(props, 'o-card-title', (_c = {},
                        _c['o-card-title-' + props.size] = props.size,
                        _c))), props.title),
                    h("div", __assign({}, extractClass(props, 'o-card-extra', (_d = {},
                        _d['o-card-extra-' + props.size] = props.size,
                        _d))),
                        h("slot", { name: "extra" })))),
            h("div", __assign({}, extractClass(props, 'o-card-body', (_e = {},
                _e['o-card-body-' + props.size] = props.size,
                _e))),
                h("slot", null)),
            props.actions ? (h("div", { class: "o-card-footer" }, props.actions.map(function (item, index) {
                _this._iconTag = 'o-icon-' + item.icon;
                return h("button", { onClick: function (_) { _this.clickHandler(item); }, className: "item" },
                    h(_this._iconTag, { class: "icon" }));
            }))) : null));
    };
    Card.defaultProps = {
        title: '',
        hoverable: '',
        extra: ''
    };
    Card.propTypes = {
        title: String,
        hoverable: String,
        extra: String,
        actions: Array,
        size: String
    };
    Card = __decorate([
        tag('o-card')
    ], Card);
    return Card;
}(WeElement));

export default Card;
//# sourceMappingURL=index.esm.js.map
