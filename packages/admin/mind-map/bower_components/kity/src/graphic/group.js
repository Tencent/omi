define(function(require, exports, module) {
    var ShapeContainer = require('./shapecontainer');
    return require('../core/class').createClass('Group', {
        mixins: [ShapeContainer],
        base: require('./shape'),

        constructor: function Group() {

            this.callBase('g');

        }

    });

});