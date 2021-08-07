define(function(require, exports, module) {

    var ShapeContainer = require('./shapecontainer');
    var ViewBox = require('./viewbox');

    return require('../core/class').createClass('View', {
        mixins: [ShapeContainer, ViewBox],

        base: require('./view'),

        constructor: function() {

            this.callBase('view');

        }

    });

});