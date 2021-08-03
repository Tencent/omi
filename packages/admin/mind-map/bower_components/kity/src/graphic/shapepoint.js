/*
 * 图形上的点抽象
 */

define(function(require, exports, module) {

    return require('../core/class').createClass('ShapePoint', {

        base: require('./point'),

        constructor: function(px, py) {

            this.callBase(px, py);

        },

        setX: function(x) {

            return this.setPoint(x, this.y);

        },

        setY: function(y) {

            return this.setPoint(this.x, y);
        },

        setPoint: function(x, y) {

            this.x = x;
            this.y = y;

            this.update();

            return this;
        },

        getPoint: function() {
            return this;
        },

        update: function() {

            if (this.container && this.container.update) {
                this.container.update();
            }

            return this;
        }

    });

});