/*
 * 点对象抽象
 */

define(function(require, exports, module) {

    /**
     * @class kity.Point
     * @description 表示一个点
     */
    var Point = require('../core/class').createClass('Point', {

        /**
         * @constructor
         * @for kity.Point
         * @description 指定默认的 x 和 y 创建一个点
         * 
         * @param  {Number} x 点的 x 坐标
         * @param  {Number} y 点的 y 坐标
         */
        constructor: function(x, y) {
            /**
             * @property
             * @for kity.Point
             * @description 表示点的 x 坐标
             * @type {Number}
             */
            this.x = x || 0;

            /**
             * @property
             * @for kity.Point
             * @description 表示点的 y 坐标
             * @type {Number}
             */
            this.y = y || 0;
        },

        offset: function(dx, dy) {
            if (arguments.length == 1) {
                dy = dx.y;
                dx = dx.x;
            }
            return new Point(this.x + dx, this.y + dy);
        },

        valueOf: function() {
            return [this.x, this.y];
        },

        toString: function() {
            return this.valueOf().join(' ');
        },

        spof: function() {
            return new Point((this.x | 0) + 0.5, (this.y | 0) + 0.5);
        },

        round: function() {
            return new Point((this.x | 0), (this.y | 0));
        },

        isOrigin: function() {
            return this.x === 0 && this.y === 0;
        }
    });

    /**
     * @static
     * @method fromPolar()
     * @for kity.Point
     * @grammar kity.Point.fromPolar(radius, angle, unit) => kity.Point
     * @param  {Number} radius 极坐标中的半径
     * @param  {Number} angle  极坐标中的角度
     * @param  {String} unit   角度使用的单位，默认为 'deg' (角度)，可以取值为 'rad'，表示传入的是弧度值
     */
    Point.fromPolar = function(radius, angle, unit) {
        if (unit != 'rad') {
            // deg to rad
            angle = angle / 180 * Math.PI;
        }
        return new Point(radius * Math.cos(angle), radius * Math.sin(angle));
    };

    Point.parse = function(unknown) {
        if (!unknown) return new Point();
        if (unknown instanceof Point) {
            return unknown;
        }
        if (typeof(unknown) == 'string') {
            return Point.parse(unknown.split(/\s*[\s,]\s*/));
        }
        if ('0' in unknown && '1' in unknown) {
            return new Point(unknown[0], unknown[1]);
        }
    };

    return Point;
});