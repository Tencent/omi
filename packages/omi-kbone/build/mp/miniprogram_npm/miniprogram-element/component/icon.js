/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/icon.html
 */
module.exports = {
    properties: [{
        name: 'type',
        get(domNode) {
            return domNode.getAttribute('type') || ''
        },
    }, {
        name: 'size',
        get(domNode) {
            return domNode.getAttribute('size') || '23'
        },
    }, {
        name: 'color',
        get(domNode) {
            return domNode.getAttribute('color') || ''
        },
    }],
    handles: {},
}
