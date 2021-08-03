define(function(require, exports, module) {

    // polyfill for ie
    var ClassList = require('../core/class').createClass('ClassList', {
        constructor: function(node) {
            this._node = node;
            this._list = node.className.toString().split(' ');
        },
        _update: function() {
            this._node.className = this._list.join(' ');
        },
        add: function(name) {
            this._list.push(name);
            this._update();
        },
        remove: function(name) {
            var index = this._list.indexOf(name);
            if (~index) {
                this._list.splice(index, 1);
            }
            this._update();
        },
        contains: function(name) {
            return !!~this._list.indexOf(name);
        }
    });

    function getClassList(node) {
        if (!node.classList) {
            node.classList = new ClassList(node);
        }
        return node.classList;
    }
    return require('../core/class').createClass('Styled', {
        addClass: function(name) {
            getClassList(this.node).add(name);
            return this;
        },
        removeClass: function(name) {
            getClassList(this.node).remove(name);
            return this;
        },
        hasClass: function(name) {
            return getClassList(this.node).contains(name);
        },
        setStyle: function(styles) {
            if (arguments.length == 2) {
                this.node.style[arguments[0]] = arguments[1];
                return this;
            }
            for (var name in styles) {
                if (styles.hasOwnProperty(name)) {
                    this.node.style[name] = styles[name];
                }
            }
            return this;
        }
    });
});