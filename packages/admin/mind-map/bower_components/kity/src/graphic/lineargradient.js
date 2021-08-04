define(function(require, exports, module) {

    var svg = require('./svg');
    var Gradient = require('./gradient');

    return require('../core/class').createClass('LinearGradientBrush', {
        base: Gradient,

        constructor: function(paper) {
            this.callBase('linearGradient', paper);
            this.setStartPosition(0, 0);
            this.setEndPosition(1, 0);
        },

        setStartPosition: function(px, py) {
            this.node.setAttribute('x1', px);
            this.node.setAttribute('y1', py);
            return this;
        },

        setEndPosition: function(px, py) {
            this.node.setAttribute('x2', px);
            this.node.setAttribute('y2', py);
            return this;
        },

        getStartPosition: function() {
            return {
                x: +this.node.getAttribute('x1'),
                y: +this.node.getAttribute('y1')
            };
        },

        getEndPosition: function() {
            return {
                x: +this.node.getAttribute('x2'),
                y: +this.node.getAttribute('y2')
            };
        }
    });
});