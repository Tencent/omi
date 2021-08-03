/*
 * 效果类
 * 该类型的对象不存储任何内部属性， 所有操作都是针对该类对象所维护的节点进行的
 */

define(function(require, exports, module) {

    var svg = require('../../graphic/svg'),

        Effect = require('../../core/class').createClass('Effect', {

            constructor: function(type) {

                this.node = svg.createNode(type);

            },

            getId: function() {

                return this.node.id;

            },

            setId: function(id) {

                this.node.id = id;

                return this;

            },

            set: function(key, value) {

                this.node.setAttribute(key, value);

                return this;

            },

            get: function(key) {

                return this.node.getAttribute(key);

            },

            getNode: function() {

                return this.node;

            },

            // 返回该效果的result
            toString: function() {
                return this.node.getAttribute('result') || '';
            }

        });

    require('../../core/utils').extend(Effect, {

        // 特效名称常量
        NAME_GAUSSIAN_BLUR: 'feGaussianBlur',
        NAME_OFFSET: 'feOffset',
        NAME_COMPOSITE: 'feComposite',
        NAME_COLOR_MATRIX: 'feColorMatrix',
        NAME_CONVOLVE_MATRIX: 'feConvolveMatrix',

        // 输入常量
        INPUT_SOURCE_GRAPHIC: 'SourceGraphic',
        INPUT_SOURCE_ALPHA: 'SourceAlpha',
        INPUT_BACKGROUND_IMAGE: 'BackgroundImage',
        INPUT_BACKGROUND_ALPHA: 'BackgroundAlpha',
        INPUT_FILL_PAINT: 'FillPaint',
        INPUT_STROKE_PAINT: 'StrokePaint'

    });

    return Effect;

});