const mp = require('miniprogram-render')

const {
    cache,
    tool,
} = mp.$$adapter

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
 */
module.exports = {
    properties: [{
        name: 'src',
        get(domNode) {
            const window = cache.getWindow(domNode.$$pageId)
            return domNode.src ? tool.completeURL(domNode.src, window.location.origin, true) : ''
        },
    }],
    handles: {
        onCoverImageLoad(evt) {
            this.callSimpleEvent('load', evt)
        },

        onCoverImageError(evt) {
            this.callSimpleEvent('error', evt)
        },
    },
}
