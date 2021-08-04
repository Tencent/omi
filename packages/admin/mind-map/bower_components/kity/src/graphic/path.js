define(function(require, exports, module) {
    var Utils = require('../core/utils');
    var createClass = require('../core/class').createClass;
    var Shape = require('./shape');
    var svg = require('./svg');
    var g = require('./geometry');

    var slice = Array.prototype.slice,
        flatten = Utils.flatten;

    var PathDrawer = createClass('PathDrawer', {
        constructor: function(path) {
            this.segment = [];
            this.path = path;
            this.__clear = false;
        },
        getPath: function() {
            return this.path;
        },
        redraw: function() {
            this._transation = this._transation || [];
            return this.clear();
        },
        done: function() {
            var transation = this._transation;
            this._transation = null;
            this.push(transation);
            return this;
        },
        clear: function() {
            if (this._transation) {
                this._transation = [];
            } else {
                this.path.setPathData('M 0 0');
            }
            this._clear = true;
            return this;
        },
        push: function() {
            var segment = slice.call(arguments);
            var originData;

            if (this._transation) {
                this._transation.push(segment);
                return this;
            }

            if (this._clear) {
                originData = '';
                this._clear = false;
            } else {
                originData = this.path.getPathData();
            }

            originData = originData || '';
            this.path.setPathData(originData + g.pathToString(segment));
            return this;
        },
        moveTo: function(x, y) {
            return this.push('M', slice.call(arguments));
        },
        moveBy: function(dx, dy) {
            return this.push('m', slice.call(arguments));
        },
        lineTo: function(x, y) {
            return this.push('L', slice.call(arguments));
        },
        lineBy: function(dx, dy) {
            return this.push('l', slice.call(arguments));
        },
        arcTo: function(rx, ry, xr, laf, sf, x, y) {
            return this.push('A', slice.call(arguments));
        },
        arcBy: function(rx, ry, xr, laf, sf, dx, dy) {
            return this.push('a', arguments);
        },
        carcTo: function(r, laf, sf, x, y) {
            return this.push('A', [r, r, 0].concat(slice.call(arguments, 1)));
        },
        carcBy: function(r, laf, sf, dx, dy) {
            return this.push('a', [r, r, 0].concat(slice.call(arguments, 1)));
        },
        bezierTo: function(x1, y1, x2, y2, x, y) {
            return this.push('C', slice.call(arguments));
        },
        bezierBy: function(dx1, dy1, dx2, dy2, dx, dy) {
            return this.push('c', slice.call(arguments));
        },
        close: function() {
            return this.push('z');
        }
    });


    return createClass('Path', {
        base: Shape,
        constructor: function(data) {
            this.callBase('path');
            if (data) {
                this.setPathData(data);
            }
            this.node.setAttribute('fill', svg.defaults.fill);
            this.node.setAttribute('stroke', svg.defaults.stroke);
        },
        setPathData: function(data) {
            data = data || 'M0,0';

            this.pathdata = g.pathToString(data);

            this.node.setAttribute('d', this.pathdata);

            this.trigger('shapeupdate', {
                type: 'pathdata'
            });

            return this;
        },
        getPathData: function() {
            return this.pathdata || '';
        },
        getDrawer: function() {
            return new PathDrawer(this);
        },
        isClosed: function() {
            var data = this.getPathData();
            return !!~data.indexOf('z') || !!~data.indexOf('Z');
        }
    });
});