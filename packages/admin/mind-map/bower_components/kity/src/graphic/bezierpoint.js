/**
 * @fileOverview
 *
 * 表示一个贝塞尔点
 */

define(function(require, exports, module) {

    var ShapePoint = require('./shapepoint');
    var Vector = require('./vector');

    /**
     * @class kity.BezierPoint
     *
     * @description 表示一个贝塞尔点
     *              一个贝塞尔点由顶点坐标（曲线经过的点）、前方控制点、后方控制点表示
     */
    var BezierPoint = require('../core/class').createClass('BezierPoint', {

        /**
         * @constructor
         * @for kity.BezierPoint
         *
         * @description 创建一个具有默认顶点坐标的贝塞尔点，两个控制点的坐标和顶点一致
         *
         * @param  {Number}  x        顶点的 x 坐标
         * @param  {Number}  y        顶点的 y 坐标
         * @param  {Boolean} isSmooth 指示当前贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         */
        constructor: function(x, y, isSmooth) {

            //顶点
            this.vertex = new ShapePoint(x, y);

            //控制点
            this.forward = new ShapePoint(x, y);
            this.backward = new ShapePoint(x, y);

            //是否平滑
            this.setSmooth((isSmooth === undefined) || isSmooth);

            this.setSymReflaction(true);

        },

        /**
         * @method clone()
         * @for kity.BezierPoint
         * @description 返回贝塞尔点的一份拷贝
         *
         * @grammar clone() => {kity.BezierPoint}
         */
        clone: function() {

            var newPoint = new BezierPoint(),
                tmp = null;

            tmp = this.getVertex();
            newPoint.setVertex(tmp.x, tmp.y);

            tmp = this.getForward();
            newPoint.setForward(tmp.x, tmp.y);

            tmp = this.getBackward();
            newPoint.setBackward(tmp.x, tmp.y);

            newPoint.setSymReflaction(this.isSymReflaction);
            newPoint.setSmooth(this.isSmooth());

            return newPoint;

        },

        /**
         * @method setVertex()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点的顶点坐标，注意，控制点的坐标不会跟着变化。希望控制点的坐标跟着变化，请用 moveTo() 方法
         *
         * @grammar setVertex(x, y) => {this}
         *
         * @param {Number} x 顶点的 x 坐标
         * @param {Number} y 顶点的 y 坐标
         */
        setVertex: function(x, y) {

            this.vertex.setPoint(x, y);

            this.update();

            return this;

        },

        /**
         * @method moveTo()
         * @for kity.BezierPoint
         * @description 同步移动整个贝塞尔点，使顶点的移动到指定的坐标中。控制点的位置相对顶点坐标固定。
         *
         * @grammar moveTo() => {this}
         *
         * @param  {Number} x 顶点的目标 x 坐标
         * @param  {Number} y 顶点的目标 y 坐标
         *
         */
        moveTo: function(x, y) {

            var oldForward = this.forward.getPoint(),
                oldBackward = this.backward.getPoint(),
                oldVertex = this.vertex.getPoint(),

                //移动距离
                distance = {
                    left: x - oldVertex.x,
                    top: y - oldVertex.y
                };

            // 更新
            this.forward.setPoint(oldForward.x + distance.left, oldForward.y + distance.top);
            this.backward.setPoint(oldBackward.x + distance.left, oldBackward.y + distance.top);
            this.vertex.setPoint(x, y);

            this.update();

        },

        /**
         * @method setForward()
         * @for kity.BezierPoint
         * @description 设置前方控制点的位置，如果贝塞尔点光滑，后方控制点会跟着联动
         *
         * @grammar setForward(x, y) => {this}
         *
         * @param {Number} x 前方控制点的 x 坐标
         * @param {Number} y 前方控制点的 y 坐标
         */
        setForward: function(x, y) {

            this.forward.setPoint(x, y);

            //更新后置点
            if (this.smooth) {
                this.updateAnother(this.forward, this.backward);
            }
            this.update();
            this.lastControlPointSet = this.forward;
            return this;

        },

        /**
         * @method setBackward()
         * @for kity.BezierPoint
         * @description 设置后方控制点的位置，如果贝塞尔点光滑，前方控制点会跟着联动
         *
         * @grammar setBackward(x, y) => {this}
         *
         * @param {Number} x 后方控制点的 x 坐标
         * @param {Number} y 后方控制点的 y 坐标
         */
        setBackward: function(x, y) {

            this.backward.setPoint(x, y);

            //更新前置点
            if (this.smooth) {
                this.updateAnother(this.backward, this.forward);
            }

            this.update();
            this.lastControlPointSet = this.backward;
            return this;

        },

        /**
         * @method setSymReflaction()
         * @for kity.BezierPoint
         * @description 设定是否镜像两个控制点的位置
         *
         * @grammar setSymReflaction(value) => {this}
         *
         * @param {boolean} value 如果设置为 true，且贝塞尔点光滑，两个控制点离顶点的距离相等
         */
        setSymReflaction: function(value) {
            this.symReflaction = value;
            if (this.smooth) this.setSmooth(true);
            return this;
        },

        /**
         * @method isSymReflaction()
         * @for kity.BezierPoint
         * @description 当前贝塞尔点的两个控制点是否被镜像约束
         *
         * @grammar isSymReflaction() => {boolean}
         */
        isSymReflaction: function() {
            return this.symReflaction;
        },

        /**
         * @private
         *
         * 根据前方控制点或后方控制点更新另一方
         */
        updateAnother: function(p, q) {
            var v = this.getVertex(),
                pv = Vector.fromPoints(p.getPoint(), v),
                vq = Vector.fromPoints(v, q.getPoint());
            vq = pv.normalize(this.isSymReflaction() ? pv.length() : vq.length());
            q.setPoint(v.x + vq.x, v.y + vq.y);
            return this;
        },

        /**
         * @method setSmooth()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         *
         * @param {Boolean} isSmooth 设置为 true 让贝塞尔点光滑
         */
        setSmooth: function(isSmooth) {
            var lc;

            this.smooth = !!isSmooth;

            if (this.smooth && (lc = this.lastControlPointSet)) {
                this.updateAnother(lc, lc == this.forward ? this.backward : this.forward);
            }

            return this;

        },

        /**
         * @method isSmooth()
         * @for kity.BezierPoint
         * @description 判断贝塞尔点是否光滑
         *
         * @grammar isSmooth() => {boolean}
         */
        isSmooth: function() {
            return this.smooth;
        },

        /**
         * @method getVertex()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的顶点
         *
         * @grammar getVertex() => {kity.ShapePoint}
         */
        getVertex: function() {

            return this.vertex.getPoint();

        },

        /**
         * @method getForward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的前方控制点
         *
         * @grammar getForward() => {kity.ShapePoint}
         */
        getForward: function() {

            return this.forward.getPoint();

        },


        /**
         * @method getBackward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的后方控制点
         *
         * @grammar getBackward() => {kity.ShapePoint}
         */
        getBackward: function() {

            return this.backward.getPoint();

        },

        /**
         * @private
         *
         * 联动更新相关的贝塞尔曲线
         */
        update: function() {

            if (!this.container) {
                return this;
            }

            //新增参数 this， 把当前引起变化的点传递过去， 以便有需要的地方可以获取到引起变化的源
            if (this.container.update) this.container.update(this);

        }

    });

    return BezierPoint;

});