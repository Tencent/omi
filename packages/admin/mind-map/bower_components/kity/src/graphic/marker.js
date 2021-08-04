define(function(require, exports, module) {
    var Point = require('./point');

    var Marker = require('../core/class').createClass('Marker', {
        base: require('./resource'),
        mixins: [require('./shapecontainer'), require('./viewbox')],

        constructor: function() {
            this.callBase('marker');
            this.setOrient('auto');
        },

        setRef: function(x, y) {
            if (arguments.length === 1) {
                y = x.y;
                x = x.x;
            }
            this.node.setAttribute('refX', x);
            this.node.setAttribute('refY', y);
            return this;
        },

        getRef: function() {
            return new Point(+this.node.getAttribute('refX'), +this.node.getAttribute('refY'));
        },

        setWidth: function(width) {
            this.node.setAttribute('markerWidth', this.width = width);
            return this;
        },

        setOrient: function(orient) {
            this.node.setAttribute('orient', this.orient = orient);
            return this;
        },

        getOrient: function() {
            return this.orient;
        },

        getWidth: function() {
            return +this.width;
        },

        setHeight: function(height) {
            this.node.setAttribute('markerHeight', this.height = height);
            return this;
        },

        getHeight: function() {
            return +this.height;
        }
    });

    var Path = require('./path');

    require('../core/class').extendClass(Path, {
        setMarker: function(marker, pos) {
            pos = pos || 'end';
            if (!marker) {
                this.node.removeAttribute('marker-' + pos);
            } else {
                this.node.setAttribute('marker-' + pos, marker.toString());
            }
            return this;
        }
    });

    return Marker;
});