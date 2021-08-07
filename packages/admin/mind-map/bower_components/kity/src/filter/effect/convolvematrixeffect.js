/**
 * 像素级别的矩阵卷积运算效果封装
 */

define(function(require, exports, module) {

    var Effect = require('./effect'),
        Utils = require('../../core/utils');

    var ConvolveMatrixEffect = require('../../core/class').createClass('ConvolveMatrixEffect', {

        base: Effect,

        constructor: function(edgeMode, input) {

            this.callBase(Effect.NAME_CONVOLVE_MATRIX);

            this.set('edgeMode', Utils.getValue(edgeMode, ConvolveMatrixEffect.MODE_DUPLICATE));

            this.set('in', Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));

        }

    });

    Utils.extend(ConvolveMatrixEffect, {

        MODE_DUPLICATE: 'duplicate',
        MODE_WRAP: 'wrap',
        MODE_NONE: 'none'

    });

    return ConvolveMatrixEffect;

});