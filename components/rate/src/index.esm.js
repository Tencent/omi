/**
 * @omiu/button v0.0.9 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, tag, render, WeElement } from 'omi';
import '@omiu/o-icon';

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var state = function (data, base) { return new Proxy(data, {
    set: function (target, propKey, value, receiver) {
        Reflect.set(target, propKey, value, receiver);
        base.update();
        return true;
    }
}); };

var Rate = /** @class */ (function (_super) {
    __extends(Rate, _super);
    function Rate() {
        var _this = _super.call(this) || this;
        _this.onMouseover = function (evt) {
            _this.state.value = evt.target.dataset['rate'];
        };
        _this.onMouseout = function () {
            _this.state.value = _this.props.value;
        };
        _this.state = state({
            value: _this.props.value
        }, _this);
        return _this;
    }
    Rate.prototype.submit = function (index) {
        this.updateProps({
            value: index
        });
    };
    Rate.prototype.render = function (props) {
        var _this = this;
        var value = this.state.value;
        var emptynum = Array.from({ length: Math.floor(props.max) }, function (v, k) { return k + 1; });
        function getCls(value, max) {
            if (value <= max)
                return '#f7e620';
            if (value > max)
                return '#ccc';
            // return 'half'
        }
        return (h("div", { className: "rating" }, emptynum.map(function (rate, index) { return (h("o-icon", { view: '24', color: getCls(index, value), scale: '2', path: props.svg, onMouseover: _this.onMouseover, onMouseout: _this.onMouseout, onClick: _this.submit.bind(_this, index), "data-rate": index })); })));
    };
    Rate.css = undefined;
    Rate.defaultProps = {
        size: 10,
        value: 0,
        max: 5,
        precision: 1,
        // readonly: false,
        // disabled: false,
        color: '#f7e620',
        svg: 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
    };
    Rate.propTypes = {
        value: Number,
        max: Number,
        precision: Number,
        // readonly: Boolean,
        // disabled: Boolean,
        icon: String,
        color: String,
        svg: String,
    };
    Rate = __decorate([
        tag('o-rate')
    ], Rate);
    return Rate;
}(WeElement));
render(h("o-rate", { value: 1 }), '#root', {
    ignoreAttrs: true
});

export default Rate;
//# sourceMappingURL=index.esm.js.map
