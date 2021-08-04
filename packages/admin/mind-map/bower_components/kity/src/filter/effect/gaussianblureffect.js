/**
 * 高斯模糊效果封装
 */

define(function(require, exports, module) {

    var Effect = require('./effect'),
        Utils = require('../../core/utils');

    return require('../../core/class').createClass('GaussianblurEffect', {

        base: Effect,

        constructor: function(stdDeviation, input) {

            this.callBase(Effect.NAME_GAUSSIAN_BLUR);

            this.set('stdDeviation', Utils.getValue(stdDeviation, 1));

            this.set('in', Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));

        }

    });

});