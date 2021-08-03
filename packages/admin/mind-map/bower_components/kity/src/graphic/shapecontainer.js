define(function(require, exports, module) {
    var Container = require('./container');
    var utils = require('../core/utils');

    var ShapeContainer = require('../core/class').createClass('ShapeContainer', {
        base: Container,

        isShapeContainer: true,

        /* private */
        handleAdd: function(shape, index) {
            var parent = this.getShapeNode();
            parent.insertBefore(shape.node, parent.childNodes[index] || null);
            shape.trigger('add', {
                container: this
            });
            if (shape.notifyTreeModification) {
                shape.notifyTreeModification('treeadd', this);
            }
        },

        /* private */
        handleRemove: function(shape, index) {
            var parent = this.getShapeNode();
            parent.removeChild(shape.node);
            shape.trigger('remove', {
                container: this
            });
            if (shape.notifyTreeModification) {
                shape.notifyTreeModification('treeremove', this);
            }
        },

        /* private */
        notifyTreeModification: function(type, container) {
            this.eachItem(function(index, shape) {
                if (shape.notifyTreeModification) {
                    shape.notifyTreeModification(type, container);
                }
                shape.trigger(type, {
                    container: container
                });
            });
        },

        /* public */
        getShape: function(index) {
            return this.getItem(index);
        },

        /* public */
        addShape: function(shape, index) {
            return this.addItem(shape, index);
        },

        put: function(shape) {
            this.addShape(shape);
            return shape;
        },

        appendShape: function(shape) {
            return this.addShape(shape);
        },

        prependShape: function(shape) {
            return this.addShape(shape, 0);
        },

        replaceShape: function(replacer, origin) {
            var index = this.indexOf(origin);
            if (index === -1) {
                return;
            }
            this.removeShape(index);
            this.addShape(replacer, index);
            return this;
        },

        addShapeBefore: function(shape, refer) {
            var index = this.indexOf(refer);
            return this.addShape(shape, index);
        },

        addShapeAfter: function(shape, refer) {
            var index = this.indexOf(refer);
            return this.addShape(shape, index === -1 ? undefined : index + 1);
        },

        /* public */
        addShapes: function(shapes) {
            return this.addItems(shapes);
        },

        /* public */
        removeShape: function(index) {
            return this.removeItem(index);
        },

        getShapes: function() {
            return this.getItems();
        },

        getShapesByType: function(name) {
            var shapes = [];

            function getShapes(shape) {
                if (name.toLowerCase() == shape.getType().toLowerCase()) {
                    shapes.push(shape);
                }
                if (shape.isShapeContainer) {
                    utils.each(shape.getShapes(), function(n) {
                        getShapes(n);
                    });
                }
            }
            getShapes(this);
            return shapes;
        },

        /* public */
        getShapeById: function(id) {
            return this.getShapeNode().getElementById(id).shape;
        },

        arrangeShape: function(shape, index) {
            return this.removeShape(shape).addShape(shape, index);
        },

        /* protected */
        getShapeNode: function() {
            return this.shapeNode || this.node; // 最佳可能
        }
    });

    var Shape = require('./shape');

    require('../core/class').extendClass(Shape, {
        bringTo: function(index) {
            this.container.arrangeShape(this, index);
            return this;
        },
        bringFront: function() {
            return this.bringTo(this.container.indexOf(this) + 1);
        },
        bringBack: function() {
            return this.bringTo(this.container.indexOf(this) - 1);
        },
        bringTop: function() {
            this.container.removeShape(this).addShape(this);
            return this;
        },
        bringRear: function() {
            return this.bringTo(0);
        },
        bringRefer: function(referShape, offset) {
            if (referShape.container) {
                if (this.remove) {
                    this.remove();
                }
                referShape.container.addShape(this, referShape.container.indexOf(referShape) + (offset || 0));
            }
            return this;
        },
        bringAbove: function(referShape) {
            return this.bringRefer(referShape);
        },
        bringBelow: function(referShape) {
            return this.bringRefer(referShape, 1);
        },
        replaceBy: function(newShape) {
            if (this.container) {
                newShape.bringAbove(this);
                this.remove();
            }
            return this;
        }
    });

    return ShapeContainer;

});