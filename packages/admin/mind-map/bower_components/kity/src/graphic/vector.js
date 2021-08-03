define(function(require, exports, module) {
    var Point = require('./point');
    var Matrix = require('./matrix');
    var Vector = require('../core/class').createClass('Vector', {
        base: Point,
        constructor: function(x, y) {
            this.callBase(x, y);
        },
        square: function() {
            return this.x * this.x + this.y * this.y;
        },
        length: function() {
            return Math.sqrt(this.square());
        },
        add: function(q) {
            return new Vector(this.x + q.x, this.y + q.y);
        },
        minus: function(q) {
            return new Vector(this.x - q.x, this.y - q.y);
        },
        dot: function(q) {
            return this.x * q.x + this.y * q.y;
        },
        project: function(q) {
            return q.multipy(this.dot(q) / q.square());
        },
        normalize: function(length) {
            if (length === undefined) {
                length = 1;
            }
            return this.multipy(length / this.length());
        },
        multipy: function(scale) {
            return new Vector(this.x * scale, this.y * scale);
        },
        rotate: function(angle, unit) {
            if (unit == 'rad') {
                angle = angle / Math.PI * 180;
            }
            var p = new Matrix().rotate(angle).transformPoint(this);
            return new Vector(p.x, p.y);
        },
        vertical: function() {
            return new Vector(this.y, -this.x);
        },
        reverse: function() {
            return this.multipy(-1);
        },
        getAngle: function() {
            var length = this.length();
            if (length === 0) return 0;
            var rad = Math.acos(this.x / length);
            var sign = this.y > 0 ? 1 : -1;
            return sign * 180 * rad / Math.PI;
        }
    });
    Vector.fromPoints = function(p1, p2) {
        return new Vector(p2.x - p1.x, p2.y - p1.y);
    };
    Vector.fromPolar = function() {
        var p = Point.fromPolar.apply(Point, arguments);
        return new Vector(p.x, p.y);
    };
    require('../core/class').extendClass(Point, {
        asVector: function() {
            return new Vector(this.x, this.y);
        }
    });
    return Vector;
});