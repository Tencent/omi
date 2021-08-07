define(function(require, exports, module) {
    var ShapeContainer = require('./shapecontainer');
    return require('../core/class').createClass('HyperLink', {
        mixins: [ShapeContainer],
        base: require('./shape'),

        constructor: function(url) {
            this.callBase('a');
            this.setHref(url);
        },

        setHref: function(href) {
            this.node.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', href);
            return this;
        },

        getHref: function() {
            return this.node.getAttributeNS('xlink:href');
        },

        setTarget: function(target) {
            this.node.setAttribute('target', target);
            return this;
        },

        getTarget: function() {
            return this.node.getAttribute('target');
        }

    });

});