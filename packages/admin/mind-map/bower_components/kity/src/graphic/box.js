/**
 * @fileOverview
 *
 * 表示一个矩形区域
 */

define(function(require, exports, module) {

    /**
     * @class kity.Box
     * @description 表示一个矩形区域
     */
    var Box = require('../core/class').createClass('Box', {

        /**
         * @constructor
         * @for kity.Box
         *
         * @grammar new kity.Box(x, y, width, height)
         * @grammar new kity.Box(box)
         *
         * @param  {Number} x|box.x      矩形区域的 x 坐标
         * @param  {Number} y|box.y      矩形区域的 y 坐标
         * @param  {Number} width|box.width   矩形区域的宽度
         * @param  {Number} height|box.height 矩形区域的高度
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 20, 50, 50);
         * var box2 = new kity.Box({x: 10, y: 20, width: 50, height: 50});
         * ```
         */
        constructor: function(x, y, width, height) {
            var box = arguments[0];
            if (box && typeof(box) === 'object') {
                x = box.x;
                y = box.y;
                width = box.width;
                height = box.height;
            }
            if (width < 0) {
                x -= (width = -width);
            }
            if (height < 0) {
                y -= (height = -height);
            }

            /**
             * @property x
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 x 坐标
             */
            this.x = x || 0;

            /**
             * @property y
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 y 坐标
             */
            this.y = y || 0;

            /**
             * @property width
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的宽度
             */
            this.width = width || 0;

            /**
             * @property height
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的高度
             */
            this.height = height || 0;

            /**
             * @property left
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最左侧坐标，等价于 x 的值
             */
            this.left = this.x;

            /**
             * @property right
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最右侧坐标，等价于 x + width 的值
             */
            this.right = this.x + this.width;

            /**
             * @property top
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最上侧坐标，等价于 y 的值
             */
            this.top = this.y;

            /**
             * @property bottom
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最下侧坐标，等价于 y + height 的值
             */
            this.bottom = this.y + this.height;

            /**
             * @property cx
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 x 坐标
             */
            this.cx = this.x + this.width / 2;

            /**
             * @property cy
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 y 坐标
             */
            this.cy = this.y + this.height / 2;
        },

        /**
         * @method getRangeX()
         * @for kity.Box
         * @description 获得矩形区域的 x 值域
         *
         * @grammar getRangeX() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeX()); // [10, 40]
         */
        getRangeX: function() {
            return [this.left, this.right];
        },


        /**
         * @method getRangeY()
         * @for kity.Box
         * @description 获得矩形区域的 y 值域
         *
         * @grammar getRangeY() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeY()); // [10, 60]
         */
        getRangeY: function() {
            return [this.top, this.bottom];
        },

        /**
         * @method merge()
         * @for kity.Box
         * @description 把当前矩形区域和指定的矩形区域合并，返回一个新的矩形区域（即包含两个源矩形区域的最小矩形区域）
         *
         * @grammar merge(another) => {kity.Box}
         * @param  {kity.Box} another 要合并的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.merge(box2);
         * console.log(box3.valueOf()); // [10, 10, 70, 70]
         * ```
         */
        merge: function(another) {
            if (this.isEmpty()) {
                return new Box(another.x, another.y, another.width, another.height);
            }
            var left = Math.min(this.left, another.left),
                right = Math.max(this.right, another.right),
                top = Math.min(this.top, another.top),
                bottom = Math.max(this.bottom, another.bottom);
            return new Box(left, top, right - left, bottom - top);
        },


        /**
         * @method intersect()
         * @for kity.Box
         * @description 求当前矩形区域和指定的矩形区域重叠的矩形区域
         *
         * @grammar intersect(another) => {kity.Box}
         * @param  {kity.Box} another 要求重叠的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.intersect(box2);
         * console.log(box3.valueOf()); // [30, 30, 20, 20]
         * ```
         */
        intersect: function(another) {
            if (!another instanceof Box) {
                another = new Box(another);
            }

            var left = Math.max(this.left, another.left),
                right = Math.min(this.right, another.right),
                top = Math.max(this.top, another.top),
                bottom = Math.min(this.bottom, another.bottom);

            if (left > right || top > bottom) return new Box();

            return new Box(left, top, right - left, bottom - top);
        },

        /**
         * @method expand()
         * @for kity.Box
         * @description 扩展（或收缩）当前的盒子，返回新的盒子
         *
         * @param {Number} top
         *     矩形区域的上边界往上扩展的值；如果是负数，则上边界往下收缩
         *
         * @param {Number} right
         *     [Optional] 矩形区域的右边界往右拓展的值；
         *                如果是负数，则右边界往左收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} bottom
         *     [Optional] 矩形区域的下边界往下拓展的值；
         *                如果是负数，则下边界往上收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} left
         *     [Optional] 矩形区域的左边界往左拓展的值;
         *                如果是负数，则左边界往右收缩;
         *                如果不设置该值，使用和 right 同样的值。
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 10, 20, 20);
         * var box1 = box.expand(10); // [0, 0, 40, 40]
         * var box2 = box.expand(10, 20); // [0, -10, 40, 60]
         * var box3 = box.expand(1, 2, 3, 4); // [9, 8, 24, 26]
         * ```
         */
        expand: function(top, right, bottom, left) {
            if (arguments.length < 1) {
                return new Box(this);
            }
            if (arguments.length < 2) {
                right = top;
            }
            if (arguments.length < 3) {
                bottom = top;
            }
            if (arguments.length < 4) {
                left = right;
            }
            var x = this.left - left,
                y = this.top - top,
                width = this.width + right,
                height = this.height + top;
            return new Box(x, y, width, height);
        },

        /**
         * @method valueOf()
         * @for kity.Box
         * @description 返回当前盒子的数组表示
         *
         * @grammar valueOf() => {Number[]}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.valueOf()); // [0, 0, 200, 50]
         * ```
         */
        valueOf: function() {
            return [this.x, this.y, this.width, this.height];
        },

        /**
         * @method toString()
         * @for kity.Box
         * @description 返回当前盒子的字符串表示
         *
         * @grammar toString() => {String}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.toString()); // "0 0 200 50"
         */
        toString: function() {
            return this.valueOf().join(' ');
        },

        /**
         * @method isEmpty()
         * @for kity.Box
         * @description 判断当前盒子是否具有尺寸（面积大
         *
         * @grammar isEmpty() => {boolean}
         *
         * @example
         * ```js
         * var box = new kity.Box(0, 0, 0, 100000);
         * console.log(box.isEmpty()); // true
         * ```
         */
        isEmpty: function() {
            return !this.width || !this.height;
        }
    });

    /**
     * @method parse()
     * @static
     * @for kity.Box
     * @description 解析一个字符串或数组为 kity.Box 对象
     *
     * @grammar kity.Box.parse(any) => {kity.Box}
     *
     * @param  {Number[]|String} any 要解析的字符串或数组
     *
     * @example
     *
     * ```js
     * console.log(kity.Box.parse('0 0 100 200'));
     * console.log(kity.Box.parse([0, 0, 100, 200]));
     * ```
     */
    Box.parse = function(any) {
        if (typeof(any) == 'string') {
            return Box.parse(any.split(/[\s,]+/).map(parseFloat));
        }
        if (any instanceof Array) {
            return new Box(any[0], any[1], any[2], any[3]);
        }
        if ('x' in any) return new Box(any);
        return null;
    };

    return Box;
});