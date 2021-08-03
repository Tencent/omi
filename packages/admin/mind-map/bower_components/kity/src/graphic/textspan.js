define(function(require, exports, module) {
    var TextContent = require('./textcontent');
    var Styled = require('./styled');
    return require('../core/class').createClass('TextSpan', {
        base: TextContent,
        mixins: [Styled],
        constructor: function(content) {
            this.callBase('tspan');
            this.setContent(content);
        }
    });
});