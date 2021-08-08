define(function(require, exports, module) {
    return require('../core/class').createClass({
        base: require('./sweep'),
        constructor: function(innerRadius, outerRadius) {
            this.callBase([innerRadius, outerRadius], 360, 0);
        },
        getInnerRadius: function() {
            return this.getSectionArray()[0];
        },
        getOuterRadius: function() {
            return this.getSectionArray()[1];
        },
        setInnerRadius: function(value) {
            this.setSectionArray([value, this.getOuterRadius()]);
        },
        setOuterRadius: function(value) {
            this.setSectionArray([this.getInnerRadius(), value]);
        }
    });
});