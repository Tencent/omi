/**
 * 蒙板
 */

define(function(require, exports, module) {

    var Class = require('../core/class');
    var Shape = require('./shape');

    var Mask = Class.createClass('Mask', {

        base: Shape,
        mixins: [require('./shapecontainer')],

        constructor: function() {

            this.callBase('mask');

        },

        mask: function(shape) {

            shape.getNode().setAttribute('mask', 'url(#' + this.getId() + ')');
            return this;

        }

    });

    Class.extendClass(Shape, {
        maskWith: function(mask) {
            mask.mask(this);
            return this;
        }
    });

    return Mask;
});