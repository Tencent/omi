define(function(require, exports, module) {
    return require('../core/class').createClass('ViewBox', {

        getViewBox: function() {
            var attr = this.node.getAttribute('viewBox');
            if (attr === null) {
                // firefox:
                // 1. viewBox 没有设置过的时候获得的是 null
                // 2. svg 标签没有指定绝对大小的时候 clientWidth 和 clientHeigt 为 0，需要在父容器上查找
                // TODO: 第 2 条取得的不准确（假如有 padding 之类的）
                return {
                    x: 0,
                    y: 0,
                    width: this.node.clientWidth || this.node.parentNode.clientWidth,
                    height: this.node.clientHeight || this.node.parentNode.clientHeight
                };
            } else {
                attr = attr.split(' ');
                return {
                    x: +attr[0],
                    y: +attr[1],
                    width: +attr[2],
                    height: +attr[3]
                };
            }
        },

        setViewBox: function(x, y, width, height) {
            this.node.setAttribute('viewBox', [x, y, width, height].join(' '));
            return this;
        }
    });

});