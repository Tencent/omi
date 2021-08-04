define(function(require, exports, module) {

    return require('../core/class').createClass('Polyline', {

        base: require('./poly'),

        constructor: function(points) {

            this.callBase(points);

        }

    });
});