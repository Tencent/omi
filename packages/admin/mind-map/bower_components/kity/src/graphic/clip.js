/**
 * @fileOverview
 *
 * 支持图形裁切
 */

define(function(require, exports, module) {
    var Class = require('../core/class');
    var Shape = require('./shape');

    /**
     * @class kity.Clip
     * @base kity.Resource
     * @mixins kity.ShapeContainer
     *
     * @description 创建图形裁切，用于裁切目标图形
     */
    var Clip = Class.createClass('Clip', {

        base: Shape,
        mixins: [require('./shapecontainer')],

        /**
         * @constructor
         * @for kity.Clip
         *
         * @grammar new kity.Clip(paper)
         *
         * @param  {kity.Paper} paper 资源所属的文档
         *
         * @example
         *
         * ```js
         * var circle = paper.put(new kity.Circle(100).fill('yellow'));
         * var clip = new kity.Clip(paper);
         * clip.addShape(new kity.Circle(100, 50, 0));
         * clip.clip(circle);
         * ```
         */
        constructor: function(paper) {

            this.callBase('clipPath', paper);

        },

        /**
         * @method clip()
         * @for kity.Clip
         * @description 将裁切应用到指定的图形上，应用之后，目标图形将显示与裁切形状重合的部分
         *
         * @grammar clip(shape) => {this}
         *
         * @param  {kity.Shape} shape 要应用裁切的图形
         */
        clip: function(shape) {

            shape.getNode().setAttribute('clip-path', this);
            return this;

        }

    });

    Class.extendClass(Shape, {
        /**
         * @method clipWidth()
         * @for kity.Shape
         *
         * @grammar clipWidth(clip) => {this}
         *
         * @param {kity.Clip|kity.Shape} clip 要用于裁切当前图形的图形；
         *     如果 clip 本身是一个裁切对象（kity.Clip 类型），则直接裁切；
         *     否则将创建新的裁切包含给定的图形，然后对当前图形进行裁切
         *
         * @example
         *
         * ```js
         * var circle = paper.put(new kity.Circle(100));
         * var rect = paper.put(new kity.Rect(100, 100, -100, 0));
         *
         * circle.clipWidth(rect);
         * ```
         */
        clipWith: function(clip) {
            if (clip instanceof Shape) {
                clip = new Clip(clip.getPaper()).addShape(clip);
            }
            clip.clip(this);
            return this;
        }
    });

    return Clip;

});