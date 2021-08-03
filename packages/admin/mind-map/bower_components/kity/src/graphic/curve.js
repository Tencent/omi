/*
 * 曲线
 * */
define(function(require, exports, module) {

    var Utils = require('../core/utils'),
        CurveUtil = {

            /*
             * 获取由两个以上的点组成的曲线的平移线
             * @param points 曲线上的点的集合， 集合中的点的数量必须大于2
             * @return 平移线数组
             */
            getCurvePanLines: function(points, smoothFactor) {

                //计算原始点的中点坐标
                var centerPoints = CurveUtil.getCenterPoints(points),

                    //注意：计算中点连线的中点坐标， 得出平移线
                    panLines = CurveUtil.getPanLine(points.length, centerPoints);


                //平移线移动到顶点
                return CurveUtil.getMovedPanLines(points, panLines, smoothFactor);
            },

            /*
             * 计算给定点集合的连线的中点
             * @param points
             */
            getCenterPoints: function(points) {

                var centerPoints = {},
                    key = null;

                for (var i = 0, j = 0, len = points.length; i < len; i++) {

                    //j是下一个点的索引
                    j = i === (len - 1) ? 0 : i + 1;

                    key = i + ',' + j;

                    //计算中点坐标
                    centerPoints[key] = {
                        x: (points[i].x + points[j].y) / 2,
                        y: (points[i].x + points[j].y) / 2
                    };


                }

                return centerPoints;

            },

            /*
             * 对getCenterPoints()接口获取到的数据做处理， 计算出各个顶点对应的平移线数据
             * @param length 集合中点的个数
             * @param points 点集合， 该集合应该是getCenterPoints()接口返回的数据
             */
            getPanLine: function(length, points) {

                var result = {},
                    //顶点索引
                    pointIndex = null;

                for (var i = 0, j; i < length; i++) {

                    var point1 = null,
                        point2 = null;

                    //计算当前点

                    j = (i + 1) % length;

                    //保存当前处理的顶点索引
                    pointIndex = j;

                    point1 = points[i + ',' + j];

                    //计算下一个点
                    i = j;
                    j = (i + 1) % length;

                    point2 = points[i + ',' + j];

                    result[pointIndex] = {
                        points: [{
                            x: point1.x,
                            y: point1.y
                        }, {
                            x: point2.x,
                            y: point2.y
                        }],

                        center: {
                            x: (point1.x + point2.x) / 2,
                            y: (point1.y + point2.y) / 2
                        }
                    };

                    //还原i值
                    i = (pointIndex + length - 1) % length;

                }

                return result;

            },

            /*
             * 计算平移线移动到顶点后的位置
             * @param points 顶点集合
             * @param panLines 平移线集合
             */
            getMovedPanLines: function(points, panLines, smoothFactor) {

                var result = {};

                Utils.each(points, function(point, index) {

                    //当前平移线
                    var currentPanLine = panLines[index],
                        //平移线中点
                        center = currentPanLine.center,

                        //移动距离
                        distance = {
                            x: center.x - point.x,
                            y: center.y - point.y
                        };

                    var currentResult = result[index] = {
                        points: [],
                        center: {
                            x: point.x,
                            y: point.y
                        }
                    };

                    //计算控制点到顶点的距离， 并且应用平滑系数到距离上
                    Utils.each(currentPanLine.points, function(controlPoint, index) {
                        var moved = {
                            x: controlPoint.x - distance.x,
                            y: controlPoint.y - distance.y
                        };
                        var vertex = currentResult.center;
                        var dx = moved.x - vertex.x;
                        var dy = moved.y - vertex.y;
                        moved.x = vertex.x + smoothFactor * dx;
                        moved.y = vertex.y + smoothFactor * dy;
                        currentResult.points.push(moved);
                    });

                });

                return result;

            }

        };

    return require('../core/class').createClass('Curve', {

        base: require('./path'),

        mixins: [require('./pointcontainer')],

        constructor: function(points, isColse) {

            this.callBase();

            this.setPoints(points || []);

            this.closeState = !!isColse;
            this.changeable = true;
            this.smoothFactor = 1;

            this.update();

        },

        //当点集合发生变化时采取的动作
        onContainerChanged: function() {

            if (this.changeable) {
                this.update();
            }

        },

        setSmoothFactor: function(factor) {

            this.smoothFactor = factor < 0 ? 0 : factor;
            this.update();
            return this;

        },

        getSmoothFactor: function() {

            return this.smoothFactor;

        },

        update: function() {

            var points = this.getPoints(),
                withControlPoints = null,
                drawer = this.getDrawer(),
                curPoint = null,
                curControlPoint = null,
                prevControlPoint = null;

            drawer.clear();

            if (points.length === 0) {

                return this;

            } else {

                drawer.moveTo(points[0]);

            }

            if (points.length === 1) {

                return this;

            }

            if (points.length === 2) {

                drawer.lineTo(points[1]);

                return this;

            }

            //获取已转换过后的带控制点的所有点
            withControlPoints = CurveUtil.getCurvePanLines(points, this.getSmoothFactor());

            for (var i = 1, len = points.length; i < len; i++) {

                //当前顶点
                curPoint = withControlPoints[i].center;

                //当前控制点
                if (this.closeState || i != len - 1) {
                    curControlPoint = withControlPoints[i].points[0];
                } else {
                    //非闭合状态下最后一个点的处理
                    curControlPoint = withControlPoints[i].center;
                }

                if (this.closeState || i != 1) {
                    prevControlPoint = withControlPoints[i - 1].points[1];
                } else {
                    //非闭合状态下第一个点的处理
                    prevControlPoint = withControlPoints[i - 1].center;
                }

                drawer.bezierTo(prevControlPoint.x, prevControlPoint.y,
                    curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);

            }

            //处理闭合
            if (this.closeState) {

                curPoint = withControlPoints[0].center;
                curControlPoint = withControlPoints[0].points[0];
                prevControlPoint = withControlPoints[points.length - 1].points[1];

                drawer.bezierTo(prevControlPoint.x, prevControlPoint.y,
                    curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);

            }

            return this;

        },

        close: function() {

            this.closeState = true;
            return this.update();

        },

        open: function() {

            this.closeState = false;
            return this.update();

        },

        isClose: function() {

            return !!this.closeState;

        }

    });



});