define(function(require, exports, module) {

    var Utils = require('../core/utils'),
        Point = require('./point');

    return require('../core/class').createClass('Ellipse', {

        base: require('./path'),

        constructor: function(rx, ry, cx, cy) {
            this.callBase();
            this.rx = rx || 0;
            this.ry = ry || 0;
            this.cx = cx || 0;
            this.cy = cy || 0;
            this.update();
        },

        update: function() {
            var rx = this.rx,
                ry = this.ry,
                x1 = this.cx + rx,
                x2 = this.cx - rx,
                y = this.cy;
            var drawer = this.getDrawer();
            drawer.clear();
            drawer.moveTo(x1, y);
            drawer.arcTo(rx, ry, 0, 1, 1, x2, y);
            drawer.arcTo(rx, ry, 0, 1, 1, x1, y);
            return this;
        },

        getRadius: function() {
            return {
                x: this.rx,
                y: this.ry
            };
        },

        getRadiusX: function() {
            return this.rx;
        },

        getRadiusY: function() {
            return this.ry;
        },

        getCenter: function() {
            return new Point(
                this.cx,
                this.cy
            );
        },

        getCenterX: function() {
            return this.cx;
        },

        getCenterY: function() {
            return this.cy;
        },

        setRadius: function(rx, ry) {
            this.rx = rx;
            this.ry = ry;
            return this.update();
        },

        setRadiusX: function(rx) {
            this.rx = rx;
            return this.update();
        },

        setRadiusY: function(ry) {
            this.ry = ry;
            return this.update();
        },

        setCenter: function(cx, cy) {
            if (arguments.length == 1) {
                var p = Point.parse(arguments[0]);
                cx = p.x;
                cy = p.y;
            }
            this.cx = cx;
            this.cy = cy;
            return this.update();
        },

        setCenterX: function(cx) {
            this.cx = cx;
            return this.update();
        },

        setCenterY: function(cy) {
            this.cy = cy;
            return this.update();
        }


    });
});