define(function(require, exports, module) {

    var RectUtils = {},
        Utils = require('../core/utils'),
        Point = require('./point'),
        Box = require('./box');

    Utils.extend(RectUtils, {

        //根据传递进来的width、height和radius属性，
        //获取最适合的radius值
        formatRadius: function(width, height, radius) {

            var minValue = Math.floor(Math.min(width / 2, height / 2));

            return Math.min(minValue, radius);

        }

    });

    /**
     * @class kity.Rect
     * @description 表示一个矩形
     * @base kity.Path
     */
    var Rect = require('../core/class').createClass('Rect', {

        base: require('./path'),

        /**
         * @constructor
         * @for kity.Rect
         * @grammar new kity.Rect(width, height, x, y, radius)
         * @param  {Number} width  矩形的初始化宽度
         * @param  {Number} height 矩形的初始化高度
         * @param  {Number} x      矩形的初始化 x 坐标
         * @param  {Number} y      矩形的初始化 y 坐标
         * @param  {Number} radius 矩形的初始化圆角大小
         */
        constructor: function(width, height, x, y, radius) {

            this.callBase();

            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 0;
            this.height = height || 0;
            this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);

            this.update();

        },

        update: function() {
            var x = this.x,
                y = this.y,
                w = this.width,
                h = this.height,
                r = this.radius;
            var drawer = this.getDrawer().redraw();

            if (!r) {

                // 直角
                drawer.push('M', x, y);
                drawer.push('h', w);
                drawer.push('v', h);
                drawer.push('h', -w);
                drawer.push('z');

            } else {

                //圆角
                w -= 2 * r;
                h -= 2 * r;

                drawer.push('M', x + r, y);
                drawer.push('h', w);
                drawer.push('a', r, r, 0, 0, 1, r, r);
                drawer.push('v', h);
                drawer.push('a', r, r, 0, 0, 1, -r, r);
                drawer.push('h', -w);
                drawer.push('a', r, r, 0, 0, 1, -r, -r);
                drawer.push('v', -h);
                drawer.push('a', r, r, 0, 0, 1, r, -r);
                drawer.push('z');

            }

            drawer.done();

            return this;

        },

        /**
         * @method setWidth
         * @for kity.Rect
         * @grammar setWidth(width) => kity.Rect
         * @description 设置矩形的宽度，设置后返回矩形实例本身
         * @param {Number} width 宽度值
         *
         * @example
         * ```js
         * rect.setWidth(300);
         * ```
         */
        setWidth: function(width) {
            this.width = width;

            return this.update();
        },

        /**
         * @method setHeight
         * @for  kity.Rect
         * @grammar setHeight(height) => kity.Rect
         * @description 设置矩形的高度，设置后返回矩形实例本身
         * @param {Number} height 高度值
         *
         * @example
         * ```js
         * rect.setHeight(200);
         * ```
         */
        setHeight: function(height) {
            this.height = height;

            return this.update();
        },

        /**
         * @method setSize
         * @for  kity.Rect
         * @grammar setSize(width, height) => kity.Rect
         * @description 设置矩形的尺寸，设置后返回矩形本身
         * @param {Number} width  矩形的宽度值
         * @param {Number} height 矩形的高度值
         *
         * @example
         * ```js
         * rect.setSize(300, 200);
         * ```
         */
        setSize: function(width, height) {
            this.width = width;
            this.height = height;

            return this.update();
        },

        /**
         * @method setBox
         * @for kity.Rect
         * @grammar setBox(box) => kity.Rect
         * @description 使用一个 kity 的盒子数据，
         * @param {kity.Box} box 盒子数据
         */
        setBox: function(box) {
            this.x = box.x;
            this.y = box.y;
            this.width = box.width;
            this.height = box.height;

            return this.update();
        },

        getBox: function() {
            return new Box(this.x, this.y, this.width, this.height);
        },

        getRadius: function() {
            return this.radius;
        },

        setRadius: function(radius) {
            this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);
            return this.update();
        },

        getPosition: function() {
            return new Point(
                this.x,
                this.y
            );
        },

        setPosition: function(x, y) {
            if (arguments.length == 1) {
                var p = Point.parse(arguments[0]);
                y = p.y;
                x = p.x;
            }
            this.x = x;
            this.y = y;

            return this.update();
        },

        getWidth: function() {
            return this.width;
        },

        getHeight: function() {
            return this.height;
        },

        getPositionX: function() {
            return this.x;
        },

        getPositionY: function() {
            return this.y;
        },

        setPositionX: function(x) {
            this.x = x;
            return this.update();
        },

        setPositionY: function(y) {
            this.y = y;
            return this.update();
        }

    });

    return Rect;

});