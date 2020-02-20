/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html
 */
module.exports = {
    properties: [{
        name: 'itemId',
        get(domNode) {
            return domNode.getAttribute('item-id') || ''
        },
    }],
    handles: {},
}
