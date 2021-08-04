/**
 * @omiu/chart v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { h, tag, WeElement } from 'omi';
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip } from 'chart.js';

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

Chart.register(ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip);
var ChartBase = /** @class */ (function (_super) {
    __extends(ChartBase, _super);
    function ChartBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._refCanvas = function (e) { _this.canvas = e; };
        return _this;
    }
    ChartBase.prototype.receiveProps = function (props) {
        this.chart.data = props.data;
        this.chart.options = props.options;
        this.chart.update();
    };
    ChartBase.prototype.update = function () {
        this.chart.update();
    };
    ChartBase.prototype.render = function (props) {
        return (h("div", { style: { width: props.width + 'px', height: props.height + 'px' } },
            h("canvas", { ref: this._refCanvas })));
    };
    ChartBase.propTypes = {
        data: Object,
        options: Object,
        width: Number,
        height: Number
    };
    return ChartBase;
}(WeElement));
/** @class */ ((function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.installed = function () {
        this.chart = new Chart(this.canvas.getContext('2d'), {
            //@ts-ignore
            type: this.props.horizontal ? 'horizontalBar' : 'bar',
            data: this.props.data,
            options: this.props.options
        });
    };
    Bar = __decorate([
        tag('o-bar')
    ], Bar);
    return Bar;
})(ChartBase));
/** @class */ ((function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.installed = function () {
        this.chart = new Chart(this.canvas.getContext('2d'), {
            type: 'line',
            data: this.props.data,
            options: this.props.options
        });
    };
    Line = __decorate([
        tag('o-line')
    ], Line);
    return Line;
})(ChartBase));
/** @class */ ((function (_super) {
    __extends(Radar, _super);
    function Radar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radar.prototype.installed = function () {
        this.chart = new Chart(this.canvas.getContext('2d'), {
            type: 'radar',
            data: this.props.data,
            options: this.props.options
        });
    };
    Radar = __decorate([
        tag('o-radar')
    ], Radar);
    return Radar;
})(ChartBase));
/** @class */ ((function (_super) {
    __extends(Scatter, _super);
    function Scatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scatter.prototype.installed = function () {
        this.chart = new Chart.Scatter(this.canvas.getContext('2d'), {
            data: this.props.data,
            options: this.props.options
        });
    };
    Scatter = __decorate([
        tag('o-scatter')
    ], Scatter);
    return Scatter;
})(ChartBase));
/** @class */ ((function (_super) {
    __extends(Doughnut, _super);
    function Doughnut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doughnut.prototype.installed = function () {
        this.chart = new Chart(this.canvas.getContext('2d'), {
            type: 'doughnut',
            data: this.props.data,
            options: this.props.options
        });
    };
    Doughnut = __decorate([
        tag('o-doughnut')
    ], Doughnut);
    return Doughnut;
})(ChartBase));
/** @class */ ((function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pie.prototype.installed = function () {
        this.chart = new Chart(this.canvas.getContext('2d'), {
            type: 'pie',
            data: this.props.data,
            options: this.props.options
        });
    };
    Pie = __decorate([
        tag('o-pie')
    ], Pie);
    return Pie;
})(ChartBase));
/** @class */ ((function (_super) {
    __extends(PolarArea, _super);
    function PolarArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarArea.prototype.installed = function () {
        this.chart = new Chart.PolarArea(this.canvas.getContext('2d'), {
            data: this.props.data,
            options: this.props.options
        });
    };
    PolarArea = __decorate([
        tag('o-polar-area')
    ], PolarArea);
    return PolarArea;
})(ChartBase));
/** @class */ ((function (_super) {
    __extends(Bubble, _super);
    function Bubble() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bubble.prototype.installed = function () {
        //@ts-ignore
        var exp = this.props.options.elements.point.radius;
        //@ts-ignore
        this.props.options.elements.point.radius = function (context) {
            var $v = context.dataset.data[context.dataIndex].v;
            var $w = context.chart.width;
            return (new Function('$v', '$w', 'return ' + exp))($v, $w);
        };
        this.chart = new Chart(this.canvas.getContext('2d'), {
            type: 'bubble',
            data: this.props.data,
            options: this.props.options
        });
    };
    Bubble = __decorate([
        tag('o-bubble')
    ], Bubble);
    return Bubble;
})(ChartBase));
//# sourceMappingURL=index.esm.js.map
