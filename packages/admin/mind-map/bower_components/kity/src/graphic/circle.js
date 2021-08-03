/**
 * @fileOverview
 *
 * 绘制和使用圆形
 */

define(function(require, exports, module) {

    /**
     * @class kity.Circle
     * @base kity.Ellipse
     * @description 表示一个圆形
     */
    return require('../core/class').createClass('Circle', {

        base: require('./ellipse'),

        /**
         * @constructor
         * @for kity.Circle
         *
         * @grammar new kity.Circle(radius, cx, cy)
         *
         * @param  {Number} radius 半径
         * @param  {Number} cx     圆心 x 坐标
         * @param  {Number} cy     圆心 y 坐标
         */
        constructor: function(radius, cx, cy) {
            this.callBase(radius, radius, cx, cy);
        },

        /**
         * @method
         * @for kity.Circle
         * @description 获取圆形的半径
         *
         * @grammar getRadius() => {Number}
         */
        getRadius: function() {
            return this.getRadiusX();
        },

        /**
         * @method
         * @for kity.Circle
         * @description 设置圆形的半径
         *
         * @grammar setRadius() => {this}
         *
         * @param {Number} radius 半径大小
         */
        setRadius: function(radius) {
            return this.callBase(radius, radius);
        }

    });
});