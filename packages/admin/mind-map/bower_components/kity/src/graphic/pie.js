define(function(require, exports, module) {
    return require('../core/class').createClass({
        base: require('./sweep'),
        constructor: function(radius, angle, angleOffset) {
            this.callBase([0, radius], angle, angleOffset);
        },
        getRadius: function() {
            return this.getSectionArray()[1];
        },
        setRadius: function(radius) {
            this.setSectionArray([0, radius]);
        }
    });
});