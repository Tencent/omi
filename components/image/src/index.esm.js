/**
 * @omiu/image v0.0.2 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, tag, WeElement } from 'omi';

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `/**
 * omiu tip css based on element ui css
 * Licensed under the MIT License
 * https://github.com/ElemeFE/element/blob/dev/LICENSE
 *
 * modified by dntzhang
 */
:host {
  display: inline-block; }

img {
  width: 100%;
  height: 100%; }

.placeholder,
.error {
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  font-size: 0.875em;
  color: #bdc5d4;
  background-color: #f5f7fa; }
`


var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = false;
        _this.loadError = false;
        _this.onLoad = function () {
            _this.loaded = true;
            _this.update();
        };
        _this.onError = function () {
            _this.loaded = false;
            _this.loadError = true;
            _this.update();
        };
        return _this;
    }
    Image.prototype.installed = function () {
        var height = this.getBoundingClientRect().height + 'px';
        this.error && (this.error.style.lineHeight = height);
        this.placeholder && (this.placeholder.style.lineHeight = height);
    };
    Image.prototype.updated = function () {
        var height = this.getBoundingClientRect().height + 'px';
        this.error && (this.error.style.lineHeight = height);
        this.placeholder && (this.placeholder.style.lineHeight = height);
    };
    Image.prototype.render = function (props) {
        var _this = this;
        return h(h.f, null,
            h("img", { onload: this.onLoad, onerror: this.onError, src: props.src, style: { objectFit: props.fit, display: this.loaded ? 'block' : 'none' } }),
            this.loadError && h("slot", { ref: function (_) { return _this.error = _; }, class: "error", name: "error" }, props.errorMsg),
            !this.loadError && h("slot", { name: "placeholder", style: { display: this.loaded ? 'none' : 'block  ' }, ref: function (_) { return _this.placeholder = _; }, class: "placeholder" }));
    };
    Image.css = css;
    Image.defaultProps = {
        errorMsg: '加载失败'
    };
    Image.propTypes = {
        src: String,
        fit: String,
        errorMsg: String
    };
    Image = __decorate([
        tag('o-image')
    ], Image);
    return Image;
}(WeElement));

export default Image;
//# sourceMappingURL=index.esm.js.map
