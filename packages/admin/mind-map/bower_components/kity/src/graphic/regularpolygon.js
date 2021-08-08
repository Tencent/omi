define(function(require, exports, module) {

    var Point = require('./point');

    return require('../core/class').createClass('RegularPolygon', {
        base: require('./path'),
        constructor: function(side, radius, x, y) {
            this.callBase();
            this.radius = radius || 0;
            this.side = Math.max(side || 3, 3);
            if (arguments.length > 2) {
                if (arguments.length == 3) {
                    y = x.y;
                    x = x.x;
                }
            }
            this.center = new Point(x, y);
            this.draw();
        },
        getSide: function() {
            return this.side;
        },
        setSide: function(side) {
            this.side = side;
            return this.draw();
        },
        getRadius: function() {
            return this.radius;
        },
        setRadius: function(radius) {
            this.radius = radius;
            return this.draw();
        },
        draw: function() {
            var radius = this.radius,
                side = this.side,
                step = Math.PI * 2 / side,
                drawer = this.getDrawer(),
                i;
            drawer.clear();
            drawer.moveTo(Point.fromPolar(radius, Math.PI / 2, 'rad').offset(this.center));
            for (i = 0; i <= side; i++) {
                drawer.lineTo(Point.fromPolar(radius, step * i + Math.PI / 2, 'rad').offset(this.center));
            }
            drawer.close();
            return this;
        }
    });
});