/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
 */
module.exports = {
    properties: [{
        name: 'type',
        get(domNode) {
            return domNode.getAttribute('type') || ''
        },
    }, {
        name: 'openGid',
        get(domNode) {
            return domNode.getAttribute('open-gid') || ''
        },
    }, {
        name: 'lang',
        get(domNode) {
            return domNode.getAttribute('lang') || 'en'
        },
    }],
    handles: {},
}
