/**
 * 颜色矩阵运算效果封装
 */

define(function(require, exports, module) {

    var Effect = require('./effect'),
        Utils = require('../../core/utils');

    var ColorMatrixEffect = require('../../core/class').createClass('ColorMatrixEffect', {

        base: Effect,

        constructor: function(type, input) {

            this.callBase(Effect.NAME_COLOR_MATRIX);

            this.set('type', Utils.getValue(type, ColorMatrixEffect.TYPE_MATRIX));

            this.set('in', Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));

        }

    });

    Utils.extend(ColorMatrixEffect, {

        // 类型常量
        TYPE_MATRIX: 'matrix',
        TYPE_SATURATE: 'saturate',
        TYPE_HUE_ROTATE: 'hueRotate',
        TYPE_LUMINANCE_TO_ALPHA: 'luminanceToAlpha',

        // 矩阵常量
        MATRIX_ORIGINAL: '10000010000010000010'.split('').join(' '),
        MATRIX_EMPTY: '00000000000000000000'.split('').join(' ')

    });

    return ColorMatrixEffect;

});