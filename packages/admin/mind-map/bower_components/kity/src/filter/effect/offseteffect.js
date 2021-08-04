/**
 * 偏移效果封装
 */

define(function(require, exports, module) {

    var Effect = require('./effect'),
        Utils = require('../../core/utils');

    return require('../../core/class').createClass('OffsetEffect', {

        base: Effect,

        constructor: function(dx, dy, input) {

            this.callBase(Effect.NAME_OFFSET);

            this.set('dx', Utils.getValue(dx, 0));
            this.set('dy', Utils.getValue(dy, 0));

            this.set('in', Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));

        }

    });

});