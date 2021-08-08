define(function(require, exports, module) {
    var utils = require('../core/utils');
    var Box = require('./box');
    var mPattern = /matrix\s*\((.+)\)/i;
    var Point = require('./point');

    // 注意，合并的结果是先执行m2，再执行m1的结果
    function mergeMatrixData(m2, m1) {
        return {
            a: m1.a * m2.a + m1.c * m2.b,
            b: m1.b * m2.a + m1.d * m2.b,
            c: m1.a * m2.c + m1.c * m2.d,
            d: m1.b * m2.c + m1.d * m2.d,
            e: m1.a * m2.e + m1.c * m2.f + m1.e,
            f: m1.b * m2.e + m1.d * m2.f + m1.f
        };
    }

    function d2r(deg) {
        return deg * Math.PI / 180;
    }

    var Matrix = require('../core/class').createClass('Matrix', {
        constructor: function() {
            if (arguments.length) {
                this.setMatrix.apply(this, arguments);
            } else {
                this.setMatrix(1, 0, 0, 1, 0, 0);
            }
        },

        translate: function(x, y) {
            this.m = mergeMatrixData(this.m, {
                a: 1,
                c: 0,
                e: x,
                b: 0,
                d: 1,
                f: y
            });
            return this;
        },

        rotate: function(deg) {
            var rad = d2r(deg);
            var sin = Math.sin(rad),
                cos = Math.cos(rad);
            this.m = mergeMatrixData(this.m, {
                a: cos,
                c: -sin,
                e: 0,
                b: sin,
                d: cos,
                f: 0
            });
            return this;
        },

        scale: function(sx, sy) {
            if (sy === undefined) {
                sy = sx;
            }
            this.m = mergeMatrixData(this.m, {
                a: sx,
                c: 0,
                e: 0,
                b: 0,
                d: sy,
                f: 0
            });
            return this;
        },

        skew: function(degX, degY) {
            if (degY === undefined) {
                degY = degX;
            }
            var tx = Math.tan(d2r(degX)),
                ty = Math.tan(d2r(degY));
            this.m = mergeMatrixData(this.m, {
                a: 1,
                c: tx,
                e: 0,
                b: ty,
                d: 1,
                f: 0
            });
            return this;
        },

        /**
         * 获得反转矩阵
         *
         * 这是我解方程算出来的
         */
        inverse: function() {
            var m = this.m,
                a = m.a,
                b = m.b,
                c = m.c,
                d = m.d,
                e = m.e,
                f = m.f,
                k, aa, bb, cc, dd, ee, ff;
            k = a * d - b * c;
            aa = d / k;
            bb = -b / k;
            cc = -c / k;
            dd = a / k;
            ee = (c * f - e * d) / k;
            ff = (b * e - a * f) / k;
            return new Matrix(aa, bb, cc, dd, ee, ff);
        },

        setMatrix: function(a, b, c, d, e, f) {
            if (arguments.length === 1) {
                this.m = utils.clone(arguments[0]);
            } else {
                this.m = {
                    a: a,
                    b: b,
                    c: c,
                    d: d,
                    e: e,
                    f: f
                };
            }
            return this;
        },

        getMatrix: function() {
            return utils.clone(this.m);
        },

        getTranslate: function() {
            var m = this.m;
            return {
                x: m.e / m.a,
                y: m.f / m.d
            };
        },

        mergeMatrix: function(matrix) {
            return new Matrix(mergeMatrixData(this.m, matrix.m));
        },

        merge: function(matrix) {
            return this.mergeMatrix(matrix);
        },

        toString: function() {
            return this.valueOf().join(' ');
        },

        valueOf: function() {
            var m = this.m;
            return [m.a, m.b, m.c, m.d, m.e, m.f];
        },

        equals: function(matrix) {
            var m1 = this.m,
                m2 = matrix.m;
            return m1.a == m2.a &&
                m1.b == m2.b &&
                m1.c == m2.c &&
                m1.d == m2.d &&
                m1.e == m2.e &&
                m1.f == m2.f;
        },

        transformPoint: function() {
            return Matrix.transformPoint.apply(null, [].slice.call(arguments).concat([this.m]));
        },

        transformBox: function(box) {
            return Matrix.transformBox(box, this.m);
        },

        clone: function() {
            return new Matrix(this.m);
        }
    });

    Matrix.parse = function(str) {
        var match;
        var f = parseFloat;
        if (str instanceof Array) {
            return new Matrix({
                a: str[0],
                b: str[1],
                c: str[2],
                d: str[3],
                e: str[4],
                f: str[5]
            });
        }
        if ((match = mPattern.exec(str))) {
            var values = match[1].split(',');
            if (values.length != 6) {
                values = match[1].split(' '); //ie
            }
            return new Matrix({
                a: f(values[0]),
                b: f(values[1]),
                c: f(values[2]),
                d: f(values[3]),
                e: f(values[4]),
                f: f(values[5])
            });
        }
        return new Matrix();
    };

    Matrix.transformPoint = function(x, y, m) {
        if (arguments.length === 2) {
            m = y;
            y = x.y;
            x = x.x;
        }
        return new Point(
            m.a * x + m.c * y + m.e,
            m.b * x + m.d * y + m.f
        );
    };

    Matrix.transformBox = function(box, matrix) {
        var xMin = Number.MAX_VALUE,
            xMax = -Number.MAX_VALUE,
            yMin = Number.MAX_VALUE,
            yMax = -Number.MAX_VALUE;
        var bps = [
            [box.x, box.y],
            [box.x + box.width, box.y],
            [box.x, box.y + box.height],
            [box.x + box.width, box.y + box.height]
        ];
        var bp, rp, rps = [];
        while ((bp = bps.pop())) {
            rp = Matrix.transformPoint(bp[0], bp[1], matrix);
            rps.push(rp);
            xMin = Math.min(xMin, rp.x);
            xMax = Math.max(xMax, rp.x);
            yMin = Math.min(yMin, rp.y);
            yMax = Math.max(yMax, rp.y);
        }
        box = new Box({
            x: xMin,
            y: yMin,
            width: xMax - xMin,
            height: yMax - yMin
        });
        utils.extend(box, {
            closurePoints: rps
        });
        return box;
    };

    // 获得从 node 到 refer 的变换矩阵
    Matrix.getCTM = function(target, refer) {
        var ctm = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        var node = target.shapeNode || target.node;

        refer = refer || 'parent';
        /**
         * 由于新版chrome(dev 48.0)移除了getTransformToElement这个方法可能导致报错，这里做兼容处理
         * @Date 2015-11-12
         * @Editor Naixor
         */
        function getTransformToElement(target, source) {
            var matrix;
            try {
                matrix = source.getScreenCTM().inverse();
            } catch(e) {
                throw new Error('Can not inverse source element\' ctm.');
            }
            return matrix.multiply(target.getScreenCTM());
        }

        // 根据参照坐标系选区的不一样，返回不同的结果
        switch (refer) {
          case "screen":
            // 以浏览器屏幕为参照坐标系
            ctm = node.getScreenCTM();
            break;

          case "doc":
          case "paper":
            // 以文档（Paper）为参照坐标系
            ctm = node.getCTM();
            break;

          case "view":
          case "top":
            // 以顶层绘图容器（视野）为参照坐标系
            if (target.getPaper()) {
                ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(target.getPaper().shapeNode) : getTransformToElement(node, target.getPaper().shapeNode);
            }
            break;

          case "parent":
            // 以父容器为参照坐标系
            if (target.node.parentNode) {
                ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(target.node.parentNode) : getTransformToElement(node, target.node.parentNode);
            }
            break;

          default:
            // 其他情况，指定参照物
            if (refer.node) {
                ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(refer.shapeNode || refer.node) : getTransformToElement(node, refer.shapeNode || refer.node);
            }
        }
        return ctm ? new Matrix(ctm.a, ctm.b, ctm.c, ctm.d, ctm.e, ctm.f) : new Matrix();
    };

    return Matrix;
});