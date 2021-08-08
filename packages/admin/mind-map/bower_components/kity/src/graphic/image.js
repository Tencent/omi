define(function(require, exports, module) {

    return require('../core/class').createClass('Image', {

        base: require('./shape'),

        constructor: function(url, width, height, x, y) {

            this.callBase('image');
            this.url = url;
            this.width = width || 0;
            this.height = height || 0;
            this.x = x || 0;
            this.y = y || 0;

            this.update();

        },

        update: function() {

            this.node.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.url);
            this.node.setAttribute('x', this.x);
            this.node.setAttribute('y', this.y);
            this.node.setAttribute('width', this.width);
            this.node.setAttribute('height', this.height);

            return this;

        },

        setUrl: function(url) {

            this.url = url === '' ? null : url;

            return this.update();

        },

        getUrl: function() {

            return this.url;

        },

        setWidth: function(width) {

            this.width = width;

            return this.update();

        },

        getWidth: function() {

            return this.width;

        },

        setHeight: function(height) {

            this.height = height;

            return this.update();

        },

        getHeight: function() {

            return this.height;

        },

        setX: function(x) {

            this.x = x;

            return this.update();

        },

        getX: function() {

            return this.x;

        },

        setY: function(y) {

            this.y = y;

            return this.update();

        },

        getY: function() {

            return this.y;

        }

    });

});