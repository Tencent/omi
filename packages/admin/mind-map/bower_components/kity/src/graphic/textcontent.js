define(function(require, exports, module) {
    var Shape = require('./shape');
    return require('../core/class').createClass('TextContent', {

        base: Shape,

        constructor: function(nodeType) {
            // call shape constructor
            this.callBase(nodeType);
            this.shapeNode = this.shapeNode || this.node;
            this.shapeNode.setAttribute('text-rendering', 'geometricPrecision');
        },

        clearContent: function() {
            while (this.shapeNode.firstChild) {
                this.shapeNode.removeChild(this.shapeNode.firstChild);
            }
            return this;
        },

        setContent: function(content) {
            this.shapeNode.textContent = content;
            return this;
        },

        getContent: function() {
            return this.shapeNode.textContent;
        },

        appendContent: function(content) {
            this.shapeNode.textContent += content;
            return this;
        },

        setSize: function(value) {
            return this.setFontSize(value);
        },

        setFontSize: function(value) {
            return this.setFont({
                size: value
            });
        },

        setFontFamily: function(value) {
            return this.setFont({
                family: value
            });
        },

        setFontBold: function(bold) {
            return this.setFont({
                weight: bold ? 'bold' : 'normal'
            });
        },

        setFontItalic: function(italic) {
            return this.setFont({
                style: italic ? 'italic' : 'normal'
            });
        },

        setFont: function(font) {
            var node = this.node;
            ['family', 'size', 'weight', 'style'].forEach(function(section) {
                if (font[section] === null) {
                    node.removeAttribute('font-' + section);
                } else if (font[section]) {
                    node.setAttribute('font-' + section, font[section]);
                }
            });
            return this;
        },

        getExtentOfChar: function(index) {
            return this.node.getExtentOfChar(index);
        },

        getRotationOfChar: function(index) {
            return this.node.getRotationOfChar(index);
        },

        getCharNumAtPosition: function(x, y) {
            return this.node.getCharNumAtPosition(this.node.viewportElement.createSVGPoint(x, y));
        }
    });
});