/*
 * USE 功能
 */

define(function(require, exports, module) {

    var Svg = require('./svg');
    var Class = require('../core/class');

    var Use = Class.createClass('Use', {

        base: require('./shape'),

        constructor: function(shape) {

            this.callBase('use');

            this.ref(shape);
        },

        ref: function(shape) {

            if (!shape) {
                this.node.removeAttributeNS(Svg.xlink, 'xlink:href');
                return this;
            }

            var shapeId = shape.getId();

            if (shapeId) {
                this.node.setAttributeNS(Svg.xlink, 'xlink:href', '#' + shapeId);
            }

            // by techird
            // 作为 Use 的图形，如果没有 fill 和 stroke，移除默认的 'none' 值，用于 Use 覆盖
            if (shape.node.getAttribute('fill') === 'none') {
                shape.node.removeAttribute('fill');
            }
            if (shape.node.getAttribute('stroke') === 'none') {
                shape.node.removeAttribute('stroke');
            }
            return this;
        }

    });

    var Shape = require('./shape');
    Class.extendClass(Shape, {
        // fast-use
        use: function() {
            return new Use(this);
        }
    });

    return Use;

});