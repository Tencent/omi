/**
 * Filter 基类
 */

define(function(require, exports, module) {

    var svg = require('../graphic/svg');
    var Class = require('../core/class');

    var Filter = Class.createClass('Filter', {

        mixins: [require('./effectcontainer')],

        constructor: function(x, y, width, height) {

            this.node = svg.createNode('filter');

            if (x !== undefined) {
                this.set('x', x);
            }
            if (y !== undefined) {
                this.set('y', y);
            }
            if (width !== undefined) {
                this.set('width', width);
            }
            if (height !== undefined) {
                this.set('height', height);
            }
        },

        getId: function() {

            return this.id;

        },

        setId: function(id) {

            this.node.id = id;

            return this;

        },

        set: function(key, value) {

            this.node.setAttribute(key, value);

            return this;

        },

        get: function(key) {

            return this.node.getAttribute(key);

        },

        getNode: function() {

            return this.node;

        }

    });

    var Shape = require('../graphic/shape');

    Class.extendClass(Shape, {
        applyFilter: function(filter) {
            var filterId = filter.get('id');

            if (filterId) {
                this.node.setAttribute('filter', 'url(#' + filterId + ')');
            }
            return this;
        }
    });

    return Filter;
});