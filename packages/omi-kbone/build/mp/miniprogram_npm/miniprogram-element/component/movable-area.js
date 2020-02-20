/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html
 */
module.exports = {
    properties: [{
        name: 'scaleArea',
        get(domNode) {
            return !!domNode.getAttribute('scale-area')
        },
    }],
    handles: {},
}
