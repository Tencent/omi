/**
 * @omiu/toggle-icon v0.0.1 http://omijs.org
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

button {
  appearance: none;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent; }

.is-disabled {
  cursor: not-allowed; }

.o-toggle-icon {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased; }
`


var ToggleIcon = /** @class */ (function (_super) {
    __extends(ToggleIcon, _super);
    function ToggleIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickHandler = function () {
            _this.updateProps({
                isOn: !_this.props.isOn
            });
            _this.fire('change', { isOn: _this.props.isOn });
        };
        return _this;
    }
    ToggleIcon.prototype.render = function (props) {
        var tags = props.icons.map(function (icon) { return "o-icon-" + icon; });
        this.tagA = tags[0];
        this.tagB = tags[1];
        return (h("button", __assign({ style: "color:" + props.color + ";", onClick: this.clickHandler }, extractClass(props, 'o-toggle-icon', {
            'is-disabled': props.disabled
        }), { disabled: props.disabled }),
            tags.length > 0 && (props.isOn ? h(this.tagB, null) : h(this.tagA, null)),
            props.imgs && (props.isOn ? h("img", { src: props.imgs[1] }) : h("img", { src: props.imgs[0] }))));
    };
    ToggleIcon.css = css;
    ToggleIcon.defaultProps = {
        isOn: false,
        icons: []
    };
    ToggleIcon.propTypes = {
        isOn: Boolean,
        icons: Object,
        imgs: Object,
        color: String,
        disabled: Boolean
    };
    ToggleIcon = __decorate([
        tag('o-toggle-icon')
    ], ToggleIcon);
    return ToggleIcon;
}(WeElement));

export { ToggleIcon as default };
//# sourceMappingURL=index.esm.js.map
