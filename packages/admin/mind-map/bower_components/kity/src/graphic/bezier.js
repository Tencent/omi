/**
 * @fileOverview
 *
 * 贝塞尔曲线
 */

define(function(require, exports, module) {

    /**
     * @class kity.Bezier
     * @mixins kity.PointContainer
     * @base kity.Path
     * @description 绘制和使用贝塞尔曲线。贝塞尔曲线作为一个贝塞尔点的容器，任何贝塞尔点的改变都会更改贝塞尔曲线的外观
     */
    return require('../core/class').createClass('Bezier', {

        mixins: [require('./pointcontainer')],

        base: require('./path'),

        /**
         * @constructor
         * @for kity.Bezier
         *
         * @grammar new kity.Bezier(bezierPoints)
         *
         * @param  {kity.BezierPoints[]} bezierPoints 贝塞尔点集合，每个元素应该是 {kity.BezierPoint} 类型
         *
         * @example
         *
         * ```js
         * var bezier = new kity.Bezier([
         *     new kity.BezierPoint(0, 0).setForward(100, 0),
         *     new kity.BezierPoint(100, 100).setBackward(100, 0)
         * ]);
         * ```
         */
        constructor: function(bezierPoints) {

            this.callBase();

            bezierPoints = bezierPoints || [];

            this.changeable = true;
            this.setBezierPoints(bezierPoints);

        },

        /**
         * @method getBezierPoints()
         * @for kity.Bezier
         * @description 返回当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar getBezierPoints() => {kity.BezierPoints[]}
         *
         */
        getBezierPoints: function() {
            return this.getPoints();
        },

        /**
         * @method setBezierPoints()
         * @for kity.Bezier
         * @description 设置当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar setBeizerPoints(bezierPoints) => {this}
         *
         * @param {kity.BezierPoint[]} bezierPoints 贝塞尔点集合
         */
        setBezierPoints: function(bezierPoints) {
            return this.setPoints(bezierPoints);
        },

        //当点集合发生变化时采取的动作
        onContainerChanged: function() {

            if (this.changeable) {
                this.update();
            }

        },

        update: function() {

            var drawer = null,
                bezierPoints = this.getBezierPoints();

            //单独的一个点不画任何图形
            if (bezierPoints.length < 2) {
                return;
            }

            drawer = this.getDrawer();

            drawer.clear();

            var vertex = bezierPoints[0].getVertex(),
                forward = null,
                backward = null;

            drawer.moveTo(vertex.x, vertex.y);

            for (var i = 1, len = bezierPoints.length; i < len; i++) {

                vertex = bezierPoints[i].getVertex();
                backward = bezierPoints[i].getBackward();
                forward = bezierPoints[i - 1].getForward();

                drawer.bezierTo(forward.x, forward.y, backward.x, backward.y, vertex.x, vertex.y);

            }

            return this;

        }

    });

});