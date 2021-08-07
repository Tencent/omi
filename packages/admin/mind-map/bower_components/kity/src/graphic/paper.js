define(function(require, exports, module) {
    var Class = require('../core/class');
    var utils = require('../core/utils');
    var svg = require('./svg');
    var Container = require('./container');
    var ShapeContainer = require('./shapecontainer');
    var ViewBox = require('./viewbox');
    var EventHandler = require('./eventhandler');
    var Styled = require('./styled');
    var Matrix = require('./matrix');

    var Paper = Class.createClass('Paper', {

        mixins: [ShapeContainer, EventHandler, Styled, ViewBox],

        constructor: function(container) {
            this.callBase();

            this.node = this.createSVGNode();
            this.node.paper = this;

            this.node.appendChild(this.resourceNode = svg.createNode('defs'));
            this.node.appendChild(this.shapeNode = svg.createNode('g'));

            this.resources = new Container();
            this.setWidth('100%').setHeight('100%');

            if (container) {
                this.renderTo(container);
            }
            this.callMixin();
        },

        renderTo: function(container) {
            if (utils.isString(container)) {
                container = document.getElementById(container);
            }
            this.container = container;
            container.appendChild(this.node);
        },

        createSVGNode: function() {
            var node = svg.createNode('svg');
            node.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
            node.setAttribute('version', '1.1');
            return node;
        },

        getNode: function() {
            return this.node;
        },

        getContainer: function() {
            return this.container;
        },

        getWidth: function() {
            return this.node.clientWidth;
        },

        setWidth: function(width) {
            this.node.setAttribute('width', width);
            return this;
        },

        getHeight: function() {
            return this.node.clientHeight;
        },

        setHeight: function(height) {
            this.node.setAttribute('height', height);
            return this;
        },

        setViewPort: function(cx, cy, zoom) {
            var viewport, box;
            if (arguments.length == 1) {
                viewport = arguments[0];
                cx = viewport.center.x;
                cy = viewport.center.y;
                zoom = viewport.zoom;
            }
            zoom = zoom || 1;
            box = this.getViewBox();

            var matrix = new Matrix();
            var dx = (box.x + box.width / 2) - cx,
                dy = (box.y + box.height / 2) - cy;
            matrix.translate(-cx, -cy);
            matrix.scale(zoom);
            matrix.translate(cx, cy);
            matrix.translate(dx, dy);
            this.shapeNode.setAttribute('transform', 'matrix(' + matrix + ')');

            this.viewport = {
                center: {
                    x: cx,
                    y: cy
                },
                offset: {
                    x: dx,
                    y: dy
                },
                zoom: zoom
            };
            return this;
        },

        getViewPort: function() {
            if (!this.viewport) {
                var box = this.getViewBox();
                return {
                    zoom: 1,
                    center: {
                        x: box.x + box.width / 2,
                        y: box.y + box.height / 2
                    },
                    offset: {
                        x: 0,
                        y: 0
                    }
                };
            }
            return this.viewport;
        },

        getViewPortMatrix: function() {
            return Matrix.parse(this.shapeNode.getAttribute('transform'));
        },

        getViewPortTransform: function() {
            var m = this.shapeNode.getCTM();
            return new Matrix(m.a, m.b, m.c, m.d, m.e, m.f);
        },

        getTransform: function() {
            return this.getViewPortTransform().reverse();
        },

        addResource: function(resource) {
            this.resources.appendItem(resource);

            if (resource.node) {
                this.resourceNode.appendChild(resource.node);
            }

            return this;
        },

        removeResource: function(resource) {
            if (resource.remove) {
                resource.remove();
            }
            if (resource.node) {
                this.resourceNode.removeChild(resource.node);
            }
            return this;
        },

        getPaper: function() {
            return this;
        }
    });

    var Shape = require('./shape');
    Class.extendClass(Shape, {
        getPaper: function() {
            var parent = this.container;
            while (parent && parent instanceof Paper === false) {
                parent = parent.container;
            }
            return parent;
        },
        isAttached: function() {
            return !!this.getPaper();
        },
        whenPaperReady: function(fn) {
            var me = this;

            function check() {
                var paper = me.getPaper();
                if (paper && fn) {
                    fn.call(me, paper);
                }
                return paper;
            }

            if (!check()) {
                this.on('add treeadd', function listen() {
                    if (check()) {
                        me.off('add', listen);
                        me.off('treeadd', listen);
                    }
                });
            }
            return this;
        }
    });
    return Paper;
});