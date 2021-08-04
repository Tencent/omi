define(function(require, exports, module) {
    /**
     * @see http://www.jdawiseman.com/papers/easymath/surds_star_inner_radius.html
     */
    var defaultRatioForStar = {
        '3': 0.2, // yy
        '5': 0.38196601125,
        '6': 0.57735026919,
        '8': 0.541196100146,
        '10': 0.726542528005,
        '12': 0.707106781187
    };

    var Point = require('./point');

    return require('../core/class').createClass('Star', {
        base: require('./path'),
        constructor: function(vertex, radius, shrink, offset, angleOffset) {
            this.callBase();
            this.vertex = vertex || 3;
            this.radius = radius || 0;
            this.shrink = shrink;
            this.offset = offset || new Point(0, 0);
            this.angleOffset = angleOffset || 0;
            this.draw();
        },
        getVertex: function() {
            return this.vertex;
        },
        setVertex: function(value) {
            this.vertex = value;
            return this.draw();
        },
        getRadius: function() {
            return this.radius;
        },
        setRadius: function(value) {
            this.radius = value;
            return this.draw();
        },
        getShrink: function() {
            return this.shrink;
        },
        setShrink: function(value) {
            this.shrink = value;
            return this.draw();
        },
        getOffset: function() {
            return this.offset;
        },
        setOffset: function(value) {
            this.offset = value;
            return this.draw();
        },
        getAngleOffset: function() {
            return this.angleOffset;
        },
        setAngleOffset: function(value) {
            this.angleOffset = value;
            return this.draw();
        },
        draw: function() {
            var innerRadius = this.radius,
                outerRadius = this.radius * (this.shrink || defaultRatioForStar[this.vertex] || 0.5),
                vertex = this.vertex,
                offset = this.offset,
                angleStart = 90,
                angleStep = 180 / vertex,
                angleOffset = this.angleOffset,
                drawer = this.getDrawer(),
                i, angle;

            drawer.clear();
            drawer.moveTo(Point.fromPolar(outerRadius, angleStart));

            for (i = 1; i <= vertex * 2; i++) {
                angle = angleStart + angleStep * i;
                // 绘制内点
                if (i % 2) {
                    drawer.lineTo(Point.fromPolar(innerRadius, angle + angleOffset).offset(offset));
                }
                // 绘制外点
                else {
                    drawer.lineTo(Point.fromPolar(outerRadius, angle));
                }
            }

            drawer.close();
        }
    });
});