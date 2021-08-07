define(function(require, exports, module) {

    var svg = require('./svg');
    var Resource = require('./resource');
    var Color = require('./color');

    return require('../core/class').createClass('GradientBrush', {
        base: Resource,

        constructor: function(gradientNodeType, paper) {
            this.callBase(gradientNodeType, paper);
            this.stops = [];
        },

        addStop: function(offset, color, opacity) {
            var gstop = svg.createNode('stop');
            if (!(color instanceof Color)) {
                color = Color.parse(color);
            }
            if (opacity === undefined) {
                opacity = color.get('a');
            }
            gstop.setAttribute('offset', offset);
            gstop.setAttribute('stop-color', color.toRGB());
            if (opacity < 1) {
                gstop.setAttribute('stop-opacity', opacity);
            }
            this.node.appendChild(gstop);
            return this;
        }
    });
});