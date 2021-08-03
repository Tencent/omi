/**
 * 高斯模糊效果封装
 */

define(function(require, exports, module) {

    var Effect = require('./effect'),
        Utils = require('../../core/utils');

    var CompositeEffect = require('../../core/class').createClass('CompositeEffect', {

        base: Effect,

        constructor: function(operator, input, input2) {

            this.callBase(Effect.NAME_COMPOSITE);

            this.set('operator', Utils.getValue(operator, CompositeEffect.OPERATOR_OVER));

            if (input) {
                this.set('in', input);
            }

            if (input2) {
                this.set('in2', input2);
            }

        }

    });

    Utils.extend(CompositeEffect, {

        // operator 常量
        OPERATOR_OVER: 'over',
        OPERATOR_IN: 'in',
        OPERATOR_OUT: 'out',
        OPERATOR_ATOP: 'atop',
        OPERATOR_XOR: 'xor',
        OPERATOR_ARITHMETIC: 'arithmetic'

    });

    return CompositeEffect;

});