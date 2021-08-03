define(function(require) {
    var utils = require('../core/utils');
    var Point = require('./point');
    var Vector = require('./vector');
    var Matrix = require('./matrix');
    var g = {};

    var pathCommand = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?\s*)+)/ig,
        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/ig,
        paramCounts = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        };

    function pathClone(path) {
        var result, i, j, segment, segmentCopy;
        result = [];
        for (i = 0; i < path.length; i++) {
            segment = path[i];
            result.push(segmentCopy = []);
            for (j = 0; j < segment.length; j++) {
                segmentCopy.push(segment[j]);
            }
        }
        if (path.isUniform) result.isUniform = true;
        if (path.isAbsolute) result.isAbsolute = true;
        if (path.isCurve) result.isCurve = true;
        return result;
    }

    // 缓存函数
    // from raphael.js
    function cacher(f, scope, postprocessor) {
        function repush(array, item) {
            for (var i = 0, ii = array.length; i < ii; i++)
                if (array[i] === item) {
                    return array.push(array.splice(i, 1)[0]);
                }
        }

        function newf() {
            var arg = Array.prototype.slice.call(arguments, 0),
                args = arg.join('\u2400'),
                cache = newf.cache = newf.cache || {},
                count = newf.count = newf.count || [];
            if (cache.hasOwnProperty(args)) {
                repush(count, args);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            if (count.length >= 1e3) {
                delete cache[count.shift()];
            }
            count.push(args);
            cache[args] = f.apply(scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        return newf;
    }

    /**
     *
     * kity.g.pathToString(pathSegment)
     *
     * 返回表示 PathSegment 的字符串
     *
     * @param  {Array} pathSegment
     *     要表示的 Path Segment
     *
     * @return {String} 表示该 Path 的字符串
     *
     * @example
     *
     *     var pathSegment = [['M', 0, 0], ['L', 10, 10]]
     *     var pathString = kity.g.pathToString(pathSegment);
     *     // 返回 'M0,0L10,10'
     */
    g.pathToString = function(pathSegment) {
        pathSegment = pathSegment || this;
        if (typeof(pathSegment) == 'string') return pathSegment;
        if (pathSegment instanceof Array) {
            pathSegment = utils.flatten(pathSegment);
            return pathSegment.join(',').replace(/,?([achlmqrstvxz]),?/gi, '$1');
        }
    };

    /**
     * kity.g.parsePathString(pathString)
     *
     * 解析 Path 字符串成 PathSegment
     *
     * @copyright rapheal.js
     *
     * @example
     *
     *     var seg = kity.g.parsePathString('M10,12l21-23-21.5,11z');
     *     // 返回: [['M', 10, 12], ['l', 21, -23], ['l', -21.5, 11], ['z']]
     *
     * @param  {String} pathString Path 字符串
     * @return {Array}
     */
    g.parsePathString = cacher(function(pathString) {
        var data = [];
        pathString.replace(pathCommand, function(a, b, c) {
            var params = [],
                name = b.toLowerCase();

            c.replace(pathValues, function(a, b) {
                if (b) params.push(+b);
            });

            if (name == 'm' && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = 'l';
                b = b == 'm' ? 'l' : 'L';
            }

            if (name == 'r') {
                data.push([b].concat(params));
            } else {
                while (params.length >= paramCounts[name]) {
                    data.push([b].concat(params.splice(0, paramCounts[name])));

                    if (!paramCounts[name]) {
                        break;
                    }
                }
            }
        });
        data.isUniform = true;
        data.toString = g.pathToString;
        return data;
    });

    /**
     * kity.g.pathToAbsolute(path)
     *
     * 把路径转换为绝对路径的形式
     *
     * @param {Array|String} path
     *     要转换的 path 路径或者数组
     *
     * @return {Array}
     *     转换后的 Path Segment
     *
     * @example
     *
     *     var path = 'M10,10l50,50';
     *     var absPath = kity.g.pathToAbsolute(path);
     *     // 返回 [['M', 10, 10], ['L', 60, 60]]
     */
    g.pathToAbsolute = cacher(function(path) {
        var pathArray = path.isUniform ? path : g.parsePathString(g.pathToString(path));
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        var r, pa, i, j, k, ii, jj, kk;

        if (pathArray[0][0] == 'M') {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ['M', x, y];
        }
        for (r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            if (pa[0] != pa[0].toUpperCase()) {
                r[0] = pa[0].toUpperCase();
                switch (r[0]) {
                    case 'A':
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] + x);
                        r[7] = +(pa[7] + y);
                        break;
                    case 'V':
                        r[1] = +pa[1] + y;
                        break;
                    case 'H':
                        r[1] = +pa[1] + x;
                        break;
                    case 'M':
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                        break;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + ((j % 2) ? x : y);
                        }
                }
            } else {
                for (k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            switch (r[0]) {
                case 'Z':
                    x = mx;
                    y = my;
                    break;
                case 'H':
                    x = r[1];
                    break;
                case 'V':
                    y = r[1];
                    break;
                case 'M':
                    mx = r[r.length - 2];
                    my = r[r.length - 1];
                    break;
                default:
                    x = r[r.length - 2];
                    y = r[r.length - 1];
            }
        }
        res.isUniform = true;
        res.isAbsolute = true;
        res.toString = g.pathToString;
        return res;
    });


    // 把圆弧绘制的曲线转化为对应的三次贝塞尔形式
    function a2c(x1, y1, rx, ry, angle, laf, sf, x2, y2, recursive) {
        // copy from raphael.js
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var math = Math,
            PI = math.PI,
            abs = Math.abs,
            _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = function(x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {
                    x: X,
                    y: Y
                };
            };
        var cos, sin, h, x, y, rx2, ry2, k, cx, cy, f1, f2, df,
            f2old, x2old, y2old, c1, s1, c2, s2, t, hx, hy,
            m1, m2, m3, m4, newres, i, ii;

        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            cos = math.cos(PI / 180 * angle);
            sin = math.sin(PI / 180 * angle);
            x = (x1 - x2) / 2;
            y = (y1 - y2) / 2;
            h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            rx2 = rx * rx;
            ry2 = ry * ry;
            k = (laf == sf ? -1 : 1) *
                math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
            cx = k * rx * y / ry + (x1 + x2) / 2;
            cy = k * -ry * x / rx + (y1 + y2) / 2;
            f1 = math.asin(((y1 - cy) / ry).toFixed(9));
            f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            if (f1 < 0) f1 = PI * 2 + f1;
            if (f2 < 0) f2 = PI * 2 + f2;
            if (sf && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sf && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        df = f2 - f1;
        if (abs(df) > _120) {
            f2old = f2;
            x2old = x2;
            y2old = y2;
            f2 = f1 + _120 * (sf && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sf, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        c1 = math.cos(f1);
        s1 = math.sin(f1);
        c2 = math.cos(f2);
        s2 = math.sin(f2);
        t = math.tan(df / 4);
        hx = 4 / 3 * rx * t;
        hy = 4 / 3 * ry * t;
        m1 = [x1, y1];
        m2 = [x1 + hx * s1, y1 - hy * c1];
        m3 = [x2 + hx * s2, y2 - hy * c2];
        m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];

        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(',');
            newres = [];
            for (i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }

    // 把二次贝塞尔曲线参数转化为三次贝塞尔曲线参数
    function q2c(x1, y1, ax, ay, x2, y2) {
        // copy from raphael.js
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
            _13 * x1 + _23 * ax,
            _13 * y1 + _23 * ay,
            _13 * x2 + _23 * ax,
            _13 * y2 + _23 * ay,
            x2,
            y2
        ];
    }

    /**
     * kity.g.pathToCurve(path)
     *
     * 把路径转换为贝塞尔路径
     *
     * @param  {Array|String} path
     *     要转换的 path 路径或数组
     *
     * @return {Array}
     *     转换后的 PathSegment，每一段都是 'C'
     */
    g.pathToCurve = cacher(function(path) {

        var i, j, command, param;
        var initPoint, currentPoint, endPoint, shouldClose, lastControlPoint, aussumedControlPoint;
        var controlPoint1, controlPoint2;
        var res = [];

        // 处理的路径要求是一个绝对路径
        if (!path.isAbsolute) path = g.pathToAbsolute(path);

        for (i = 0; i < path.length; i++) {

            command = path[i][0];
            param = path[i].slice(1);

            // 画笔移动
            if (command == 'M') {
                initPoint = lastControlPoint = currentPoint = param;
                res.push(path[i]);
                continue;
            }

            // 路径闭合
            if (command == 'Z') {
                shouldClose = true;
                command = 'L';
                param = initPoint;
            }

            // 绘制命令的目的位置
            endPoint = param.slice(param.length - 2);

            // 对 'H' 命令的修正
            if (command == 'H') {
                endPoint = [param[0], currentPoint[1]];
                command = 'L';
            }

            // 对 'V' 命令的修正
            if (command == 'V') {
                endPoint = [currentPoint[0], param[0]];
                command = 'L';
            }

            // 对 'S' 命令求出隐含的控制点位置
            if (command == 'S' || command == 'T') {
                // 隐含控制点是上一个控制点关于当前位置的镜像
                aussumedControlPoint = [
                    currentPoint[0] + (currentPoint[0] - lastControlPoint[0]),
                    currentPoint[1] + (currentPoint[1] - lastControlPoint[1])
                ];
            }

            // 针对不同的命令求控制点
            switch (command) {
                case 'L':
                    controlPoint1 = currentPoint;
                    controlPoint2 = endPoint;
                    break;
                case 'C':
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;
                case 'S':
                    controlPoint1 = aussumedControlPoint.slice();
                    controlPoint2 = param.slice(0, 2);
                    break;
                case 'Q':
                    lastControlPoint = param.slice(0, 2);
                    param = q2c.apply(null, currentPoint.concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;
                case 'T':
                    param = q2c.apply(null, currentPoint.concat(aussumedControlPoint).concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;
                case 'A':
                    param = a2c.apply(null, currentPoint.concat(param));
                    j = 0;
                    while (j in param) {
                        controlPoint1 = param.slice(j, j + 2);
                        controlPoint2 = param.slice(j + 2, j + 4);
                        endPoint = param.slice(j + 4, j + 6);
                        // 写入当前一段曲线
                        res.push(['C'].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
                        j += 6;
                    }
                    break;
            }

            if (command != 'A') {
                // 写入当前一段曲线
                res.push(['C'].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
            }

            // 为下次循环准备当前位置
            currentPoint = endPoint;

            // 二次贝塞尔曲线自己已经记录了上个控制点的位置，其它的记录控制点 2 的位置
            if (command != 'Q') {
                lastControlPoint = controlPoint2;
            }

            if (shouldClose) {
                res.push(['Z']);
                shouldClose = false;
            }
        }
        res.isUniform = true;
        res.isAbsolute = true;
        res.isCurve = true;
        res.toString = g.pathToString;
        return res;
    });

    /**
     * 将贝塞尔曲线切成两部分
     *
     * @see http://stackoverflow.com/questions/18655135/divide-bezier-curve-into-two-equal-halves
     */
    function cutBezier(bezierArray, t) {
        function __(t) {
            return function(p, q) {
                return p + t * (q - p);
            };
        }
        var _ = __(t || 0.5),
            ba = bezierArray,
            ax = ba[0],
            ay = ba[1],
            bx = ba[2],
            by = ba[3],
            cx = ba[4],
            cy = ba[5],
            dx = ba[6],
            dy = ba[7],
            ex = _(ax, bx),
            ey = _(ay, by),
            fx = _(bx, cx),
            fy = _(by, cy),
            gx = _(cx, dx),
            gy = _(cy, dy),
            hx = _(ex, fx),
            hy = _(ey, fy),
            jx = _(fx, gx),
            jy = _(fy, gy),
            kx = _(hx, jx),
            ky = _(hy, jy);
        return [
            [ax, ay, ex, ey, hx, hy, kx, ky],
            [kx, ky, jx, jy, gx, gy, dx, dy]
        ];
    }

    /**
     * kity.g.cutBezier(bezierArray, t)
     *
     * 在指定位置把贝塞尔曲线切割为两部分
     *
     * @param {Array} bezierArray
     *     表示贝塞尔曲线的一个数组 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *     p1 和 p2 是贝塞尔曲线的起点和终点，c1 和 c2 是两个控制点
     *
     * @param {Number} t
     *     切割的位置（0 到 1）
     *
     * @return {Array}
     *     切割的两个贝塞尔曲线：[
     *         [p1x1, p1y1, c1x1, c1y1, c2x1, c2y1, p2x1, p2y1],
     *         [p1x2, p1y2, c1x2, c1y2, c2x2, c2y2, p2x2, p2y2]
     *     ]
     *
     */
    g.cutBezier = cacher(cutBezier);

    /**
     * 求一段贝塞尔曲线的子段
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     子段的结束位置（0 到 1）
     *
     * @param {Number} t0
     *     字段的开始位置（0 到 t），可不传，默认为 0
     *
     * @return {Array}
     *     长度为 8 的数组，表示给定贝塞尔曲线的子段
     */
    g.subBezier = function(bezierArray, t, t0) {
        var b2t = cutBezier(bezierArray, t)[0];
        return t0 ? cutBezier(b2t, t0 / t)[1] : b2t;
    };

    /**
     * 求贝塞尔曲线上的一个点
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     所求点的开始位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
    g.pointAtBezier = function(bezierArray, t) {
        var b2t = cutBezier(bezierArray, t)[0];
        var p = Point.parse(b2t.slice(6)),
            c = Point.parse(b2t.slice(4, 2)),
            v = Vector.fromPoints(c, p);
        if (t === 0) {
            p.tan = g.pointAtBezier(bezierArray, 0.01).tan;
        } else {
            p.tan = v.normalize();
        }
        return p;
    };

    /**
     * 求贝塞尔曲线的长度
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} tolerate
     *     允许的误差，默认是 0.1
     *
     * @return {Number} 贝塞尔曲线的长度
     */
    g.bezierLength = cacher(function bezierLength(bezierArray) {

        // 表示（c[0]*t^4 + c[1]*t^3 + c[2]*t^2 + c[3]*t^1 + c[4])^(1/2)的函数
        function f(x) {
            var m = c0 * Math.pow(x, 4) + c1 * Math.pow(x, 3) + c2 * Math.pow(x, 2) + c3 * x + c4;
            if (m < 0) {
                m = 0;
            }
            return Math.pow(m, 0.5);
        }

        // 用Newton-Cotes型求积公式
        var arr = bezierArray;

        // 三次贝塞尔曲线函数求导后，求出对应的方程系数，用cx[],cy[]表示x`(t)和y`(t)的系数
        var cx0, cx1, cx2;
        var cy0, cy1, cy2;
        // 用c[]表示x`(t)^2 + y`(t)^2的结果的系数
        var c0, c1, c2, c3, c4;

        // 求x`(t) 和 y`(t)的系数
        cx0 = -3 * arr[0] + 9 * arr[2] - 9 * arr[4] + 3 * arr[6];
        cx1 = 6 * arr[0] - 12 * arr[2] + 6 * arr[4];
        cx2 = -3 * arr[0] + 3 * arr[2];

        cy0 = -3 * arr[1] + 9 * arr[3] - 9 * arr[5] + 3 * arr[7];
        cy1 = 6 * arr[1] - 12 * arr[3] + 6 * arr[5];
        cy2 = -3 * arr[1] + 3 * arr[3];

        // 求x`(t)^2 + y`(t)^2的结果的系数 c[]
        c0 = Math.pow(cx0, 2) + Math.pow(cy0, 2);
        c1 = 2 * (cx0 * cx1 + cy0 * cy1);
        c2 = 2 * (cx0 * cx2 + cy0 * cy2) + Math.pow(cx1, 2) + Math.pow(cy1, 2);
        c3 = 2 * (cx1 * cx2 + cy1 * cy2);
        c4 = Math.pow(cx2, 2) + Math.pow(cy2, 2);

        // 用cotes积分公式求值
        return (f(0) + f(1) + 4 * (f(0.125) + f(0.375) + f(0.625) + f(0.875)) + 2 * (f(0.25) + f(0.5) + f(0.75))) / 24;
    });



    // 计算一个 pathSegment 中每一段的在整体中所占的长度范围，以及总长度
    // 方法要求每一段都是贝塞尔曲线
    var getBezierPathSegmentRanges = cacher(function(pathSegment) {
        var i, ii, segment, position, bezierLength, segmentRanges, totalLength;

        segmentRanges = [];

        // 总长度
        totalLength = 0;

        for (i = 0, ii = pathSegment.length; i < ii; i++) {
            segment = pathSegment[i];

            if (segment[0] == 'M') {
                position = segment.slice(1);
                segmentRanges.push(null);
                continue;
            }

            if (segment[0] == 'Z') {
                segmentRanges.push(null);
                continue;
            }

            bezierLength = g.bezierLength(position.concat(segment.slice(1)));
            segmentRanges.push([totalLength, totalLength + bezierLength]);
            totalLength += bezierLength;

            // 迭代当前位置
            position = segment.slice(4);
        }
        segmentRanges.totalLength = totalLength;
        return segmentRanges;
    });

    /**
     * 求一段路径的子路径
     *
     * @param  {Array|String} path
     *     原路径
     *
     * @param  {Number} t1
     *     要求的子路径的结束位置（0 到 1）
     *
     * @param  {Number} t0
     *     要求的子路径的开始位置（0 到 t1），可不传，默认为 0
     *
     * @return {Array}
     *     子路径的 PathSegment
     */
    g.subPath = function(path, t1, t0) {
        var dt;

        t0 = t0 || 0;
        dt = t1 - t0;
        dt = dt - (dt | 0);
        t0 = t0 - (t0 | 0);
        t1 = t0 + dt;

        if (t1 > 1) {
            return g.subPath(path, 1, t0).concat(g.subPath(path, t1 - 1));
        }

        if (!path.isCurve) {
            path = g.pathToCurve(path);
        }

        // path 每一段在整体中的长度区间
        var segmentRanges = getBezierPathSegmentRanges(path);

        // path 总长度
        var totalLength = segmentRanges.totalLength;

        // t1 和 t0 位置命中的长度位置
        var t1Length = totalLength * t1,
            t0Length = totalLength * (t0 || 0);

        // 产生的子路径
        var subPath = [];

        // 迭代变量，a 是一段的长度区间左值，b 是右值，d 是区间长度
        var i, ii, a, b, d;

        var position;

        var bezier, subBezier, stared;

        for (i = 0, ii = path.length; i < ii; i++) {

            if (path[i][0] == 'M') {
                position = path[i].slice(1);
                if (stared) {
                    subPath.push(path[i].slice());
                }
                continue;
            }

            if (path[i][0] == 'Z') {
                // subpath 路径不闭合
                continue;
            }

            a = segmentRanges[i][0];
            b = segmentRanges[i][1];
            d = b - a;
            bezier = position.concat(path[i].slice(1));

            if (t0Length > b) {
                // t0 和 t1 都右溢出
                // -----------------------------------
                //            t0   t1
                // |________|
                //
                // 需要跳过当前块

                position = bezier.slice(bezier.length - 2);
                continue;
            } else if (t0Length >= a) {
                // 命中 t0；t1 可能命中或右溢出
                // -----------------------------------
                //            t0   t1
                //     |______|__|
                //
                //     or:  |_|____|__|
                //
                // 取当前块 t0 到 t1 的部分

                subBezier = g.subBezier(bezier,
                    Math.min((t1Length - a) / d, 1), (t0Length - a) / d);
                stared = true;
                position = subBezier.slice(0, 2);
                subPath.push(['M'].concat(subBezier.slice(0, 2)));
                subPath.push(['C'].concat(subBezier.slice(2)));
            } else if (t1Length >= b) {
                // t0 左溢出；t1 右溢出，整个块是需要的
                // -----------------------------------
                //       t0             t1
                //          |_________|
                //
                // 此时取整个块
                subPath.push(path[i].slice());
            } else if (t1Length >= a) {
                // t0 左溢出；t1 命中，取当前块 t1 之前的部分
                // -----------------------------------
                //            t0   t1
                //              |__|______|
                // 取当前块 t1 之前的部分
                subBezier = g.subBezier(bezier, (t1Length - a) / d);
                subPath.push(['C'].concat(subBezier.slice(2)));
                stared = false;
            } else {
                // 没有可以再要的了
                break;
            }

            position = bezier.slice(bezier.length - 2);
        }

        subPath.isAbsolute = true;
        subPath.isCurve = true;
        subPath.isUniform = true;
        subPath.toString = g.pathToString;

        return subPath;
    };

    /**
     * 求路径上的一个点
     *
     * @param  {Array|String} path
     *     要求点的路径
     *
     * @param  {Number} t
     *     要求的点的位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
    g.pointAtPath = function(path, t) {
        if (!path.isCurve) {
            path = g.pathToCurve(path);
        }
        var subPath = g.subPath(path, t);
        var lastCurve = subPath[subPath.length - 1][0] == 'Z' ?
            subPath[subPath.length - 2] :
            subPath[subPath.length - 1];

        // 跳过 'C' 命令，只留参数
        lastCurve = lastCurve.slice(1);

        var p = Point.parse(lastCurve.slice(4)),
            c = Point.parse(lastCurve.slice(2, 4));

        p.tan = Vector.fromPoints(c, p).normalize();

        return p;
    };

    /**
     * 求一段路径的长度
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Number}
     *     路径的长度
     */
    g.pathLength = cacher(function(path) {
        if (!path.isCurve) {
            path = g.pathToCurve(path);
        }
        // path 每一段在整体中的长度区间
        var segmentRanges = getBezierPathSegmentRanges(path);
        return segmentRanges.totalLength;
    });

    /**
     * 求一段路径的关键点
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Array}
     *     关键点的集合
     */
    g.pathKeyPoints = cacher(function(path) {
        var i, ii, command, keyPoints;

        if (!path.isCurve) {
            path = g.pathToCurve(path);
        }

        keyPoints = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            if (path[i][0] == 'z') continue;

            keyPoints.push(path[i].slice(path[i].length - 2));
        }

        return keyPoints;
    });

    // 对比两个路径的关键位置，在合适的位置切割合适的路径，使得两个路径的段数一致
    // TODO: 使用插值算法，使对应点更合理
    var alignCurve = cacher(function(path1, path2) {

        if (!path1.isCurve) path1 = g.pathToCurve(path1);
        if (!path2.isCurve) path2 = g.pathToCurve(path2);

        var p1 = pathClone(path1);
        var p2 = pathClone(path2);

        p1.i = 0;
        p2.i = 0;
        p1.o = p2;
        p2.o = p1;


        function command(p, i) {
            return p[i || p.i] && p[i || p.i][0];
        }

        function param(p, i) {
            return p[i || p.i] && p[i || p.i].slice(1);
        }

        function point(p, i) {
            var _param = param(p, i);
            return _param && _param.slice(-2);
        }

        function fixZ(p) {
            if (command(p) == 'Z') {
                p.splice(p.i, 1);
                return true;
            }
            return false;
        }

        function fixM(p) {
            if (command(p) == 'M') {
                p.o.splice(p.o.i, 0, ['M'].concat(point(p.o, p.o.i - 1)));
                p.i++;
                p.o.i++;
                return true;
            }
            return false;
        }

        function fill(p) {
            var lastPoint;
            var i = 1;

            while (!lastPoint) {
                lastPoint = point(p, p.length - i++);
            }
            p.o.i = p.i;
            while (p.length < p.o.length) {
                if (fixZ(p.o)) continue;
                if (fixM(p.o)) continue;
                p.push(['C'].concat(lastPoint).concat(lastPoint).concat(lastPoint));
                p.i++;
                p.o.i++;
            }
        }

        while (p1.i < p1.length && p2.i < p2.length) {

            if (fixZ(p1) || fixZ(p2)) continue;

            if (command(p1) == command(p2)) {
                p1.i++;
                p2.i++;
                continue;
            }

            if (fixM(p1) || fixM(p2)) continue;

            p1.i++;
            p2.i++;
        }

        if (p1.i == p1.length) fill(p1);
        if (p2.i == p2.length) fill(p2);

        delete p1.i;
        delete p1.o;
        delete p2.i;
        delete p2.o;

        return [p1, p2];
    });

    g.alignCurve = alignCurve;

    /**
     * 获得两个路径的补间结果
     *
     * @param  {string|Array} path1
     *     补间起始路径
     *
     * @param  {string|Array} path2
     *     补间结束路径
     *
     * @param  {Number} t
     *     补间比例，0 返回跟 path1 等效的结果；1 返回跟 path2 等效的结果
     *
     * @return {PathSegment}
     *     补间的结果
     */
    g.pathTween = function(path1, path2, t) {
        if (t === 0) return path1;
        if (t === 1) return path2;

        var aligned = alignCurve(path1, path2);
        var result = [],
            seg, i, j;

        path1 = aligned[0];
        path2 = aligned[1];

        for (i = 0; i < path1.length; i++) {
            result.push(seg = []);
            seg.push(path1[i][0]);
            for (j = 1; j < path1[i].length; j++) {
                seg.push(path1[i][j] + t * (path2[i][j] - path1[i][j]));
            }
        }

        result.isUniform = result.isCurve = result.isAbsolute = true;
        return result;
    };

    /**
     * 变换指定的路径
     *
     * @param  {String|Array} path
     *     需要变换的路径
     *
     * @param  {kity.Matrix} matrix
     *     使用的变换矩阵
     *
     * @return {Array}
     *     变换后的路径
     */
    g.transformPath = cacher(function(path, matrix) {
        var i, ii, j, result, seg, pair;

        if (!path.isCurve) {
            path = g.pathToCurve(path);
        }

        result = [];

        for (i = 0, ii = path.length; i < ii; i++) {
            result.push(seg = [path[i][0]]);
            for (j = 1; j < path[i].length; j += 2) {
                pair = path[i].slice(j, j + 2);
                pair = matrix.transformPoint(Point.parse(pair));
                result.push(pair);
            }
        }

        return result;
    });

    // entend
    require('../core/class').extendClass(Matrix, {
        transformPath: function(path) {
            return g.transformPath(path, this);
        }
    });

    return g;
});