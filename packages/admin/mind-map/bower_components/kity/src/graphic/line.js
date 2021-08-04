define(function(require, exports, module) {

    return require('../core/class').createClass('Line', {

        base: require('./path'),

        constructor: function(x1, y1, x2, y2) {
            this.callBase();

            this.point1 = {
                x: x1 || 0,
                y: y1 || 0
            };

            this.point2 = {
                x: x2 || 0,
                y: y2 || 0
            };

            this.update();
        },

        setPoint1: function(x, y) {

            this.point1.x = x;
            this.point1.y = y;

            return this.update();

        },

        setPoint2: function(x, y) {

            this.point2.x = x;
            this.point2.y = y;

            return this.update();

        },

        getPoint1: function() {

            return {
                x: this.point1.x,
                y: this.point1.y
            };

        },

        getPoint2: function() {

            return {
                x: this.point2.x,
                y: this.point2.y
            };

        },

        update: function() {

            var drawer = this.getDrawer();

            drawer.clear();
            drawer.moveTo(this.point1.x, this.point1.y);
            drawer.lineTo(this.point2.x, this.point2.y);

            return this;

        }

    });
});