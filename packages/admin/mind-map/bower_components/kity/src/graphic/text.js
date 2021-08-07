define(function(require, exports, module) {

    var TextContent = require('./textcontent');
    var ShapeContainer = require('./shapecontainer');
    var svg = require('./svg');
    var utils = require('../core/utils');
    var offsetHash = {};

    function getTextBoundOffset(text) {
        var font = text._cachedFontHash;

        if (offsetHash[font]) {
            return offsetHash[font];
        }

        var textContent = text.getContent();
        text.setContent('百度Fex');

        var bbox = text.getBoundaryBox(),
            y = text.getY();

        if (!bbox.height) return {
            top: 0,
            bottom: 0,
            middle: 0
        };

        var topOffset = y - bbox.y + (+text.node.getAttribute('dy')),
            bottomOffset = topOffset - bbox.height;

        text.setContent(textContent);

        return (offsetHash[font] = {
            top: topOffset,
            bottom: bottomOffset,
            middle: (topOffset + bottomOffset) / 2
        });
    }

    return require('../core/class').createClass('Text', {
        base: TextContent,

        mixins: [ShapeContainer],

        constructor: function(content) {
            this.callBase('text');
            if (content !== undefined) {
                this.setContent(content);
            }
            this._buildFontHash();
        },

        fixPosition: function() {
            if (!this.__fixedPosition) {
                this.setVerticalAlign(this.getVerticalAlign());
            }
        },

        _buildFontHash: function() {
            var style = window.getComputedStyle(this.node);

            this._cachedFontHash = [style.fontFamily,
                style.fontSize,
                style.fontStretch,
                style.fontStyle,
                style.fontVariant,
                style.fontWeight
            ].join('-');
        },

        _fontChanged: function(font) {
            var last = this._lastFont;
            var current = utils.extend({}, last, font);

            if (!last) {
                this._lastFont = font;
                return true;
            }

            var changed = last.family != current.family ||
                last.size != current.size ||
                last.style != current.style ||
                last.weight != current.weight;

            this._lastFont = current;

            return changed;
        },

        setX: function(x) {
            this.node.setAttribute('x', x);
            return this;
        },
        setPosition: function(x, y) {
            return this.setX(x).setY(y);
        },
        setY: function(y) {
            this.node.setAttribute('y', y);
            return this;
        },
        getX: function() {
            return +this.node.getAttribute('x') || 0;
        },

        getY: function() {
            return +this.node.getAttribute('y') || 0;
        },

        setFont: function(font) {
            this.callBase(font);
            if (this._fontChanged(font)) {
                this._buildFontHash();
                this.setVerticalAlign(this.getVerticalAlign());
            }
            return this;
        },

        setTextAnchor: function(anchor) {
            this.node.setAttribute('text-anchor', anchor);
            return this;
        },

        getTextAnchor: function() {
            return this.node.getAttribute('text-anchor') || 'start';
        },

        // top/bottom/middle/baseline
        setVerticalAlign: function(align) {
            this.whenPaperReady(function() {
                var dy;
                switch (align) {
                    case 'top':
                        dy = getTextBoundOffset(this).top;
                        break;
                    case 'bottom':
                        dy = getTextBoundOffset(this).bottom;
                        break;
                    case 'middle':
                        dy = getTextBoundOffset(this).middle;
                        break;
                    default:
                        dy = 0;
                }
                if (dy) this.__fixedPosition = true;
                this.node.setAttribute('dy', dy);
            });
            this.verticalAlign = align;
            return this;
        },

        getVerticalAlign: function() {
            return this.verticalAlign || 'baseline';
        },

        setStartOffset: function(offset) {
            // only for text path
            if (this.shapeNode != this.node) {
                this.shapeNode.setAttribute('startOffset', offset * 100 + '%');
            }
        },

        addSpan: function(span) {
            this.addShape(span);
            return this;
        },

        setPath: function(path) {
            var textpath = this.shapeNode;
            if (this.shapeNode == this.node) {
                // 当前还不是 textpath
                textpath = this.shapeNode = svg.createNode('textPath');
                while (this.node.firstChild) {
                    this.shapeNode.appendChild(this.node.firstChild);
                }
                this.node.appendChild(textpath);
            }
            textpath.setAttributeNS(svg.xlink, 'xlink:href', '#' + path.node.id);
            this.setTextAnchor(this.getTextAnchor());
            return this;
        }
    });
});