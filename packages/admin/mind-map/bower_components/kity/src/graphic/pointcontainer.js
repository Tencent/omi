/**
 * 点集合容器
 */

define(function(require, exports, module) {


    return require('../core/class').createClass('PointContainer', {

        base: require('./container'),

        constructor: function() {
            this.callBase();
        },

        addPoint: function(point, pos) {

            return this.addItem.apply(this, arguments);

        },

        prependPoint: function() {

            return this.prependItem.apply(this, arguments);

        },

        appendPoint: function() {

            return this.appendItem.apply(this, arguments);

        },

        removePoint: function(pos) {

            return this.removeItem.apply(this, arguments);

        },

        addPoints: function() {

            return this.addItems.apply(this, arguments);

        },

        setPoints: function() {

            return this.setItems.apply(this, arguments);

        },

        getPoint: function() {

            return this.getItem.apply(this, arguments);

        },

        getPoints: function() {

            return this.getItems.apply(this, arguments);

        },

        getFirstPoint: function() {

            return this.getFirstItem.apply(this, arguments);

        },

        getLastPoint: function() {

            return this.getLastItem.apply(this, arguments);

        }

    });

});