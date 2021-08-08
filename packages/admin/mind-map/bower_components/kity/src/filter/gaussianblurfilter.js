/*
 * 高斯模糊滤镜
 */

define(function(require, exports, module) {

    var GaussianblurEffect = require('./effect/gaussianblureffect');

    return require('../core/class').createClass('GaussianblurFilter', {

        base: require('./filter'),

        constructor: function(stdDeviation) {

            this.callBase();

            this.addEffect(new GaussianblurEffect(stdDeviation));

        }

    });

});