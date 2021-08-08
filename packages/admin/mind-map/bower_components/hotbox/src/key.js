define(function(require, exports, module) {
    var keymap = require('./keymap');

    var CTRL_MASK = 0x1000;
    var ALT_MASK = 0x2000;
    var SHIFT_MASK = 0x4000;

    function hash(unknown) {
        if (typeof(unknown) == 'string') {
            return hashKeyExpression(unknown);
        }
        return hashKeyEvent(unknown);
    }
    function is(a, b) {
        return a && b && hash(a) == hash(b);
    }
    exports.hash = hash;
    exports.is = is;


    function hashKeyEvent(keyEvent) {
        var hashCode = 0;
        if (keyEvent.ctrlKey || keyEvent.metaKey) {
            hashCode |= CTRL_MASK;
        }
        if (keyEvent.altKey) {
            hashCode |= ALT_MASK;
        }
        if (keyEvent.shiftKey) {
            hashCode |= SHIFT_MASK;
        }
        // Shift, Control, Alt KeyCode ignored.
        if ([16, 17, 18, 91].indexOf(keyEvent.keyCode) == -1) {
            hashCode |= keyEvent.keyCode;
        }
        return hashCode;
    }

    function hashKeyExpression(keyExpression) {
        var hashCode = 0;
        keyExpression.toLowerCase().split(/\s*\+\s*/).forEach(function(name) {
            switch(name) {
                case 'ctrl':
                case 'cmd':
                    hashCode |= CTRL_MASK;
                    break;
                case 'alt':
                    hashCode |= ALT_MASK;
                    break;
                case 'shift':
                    hashCode |= SHIFT_MASK;
                    break;
                default:
                    hashCode |= keymap[name];
            }
        });
        return hashCode;
    }
});