/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/ad.html
 */
module.exports = {
    properties: [{
        name: 'unitId',
        get(domNode) {
            return domNode.getAttribute('unit-id') || ''
        },
    }, {
        name: 'adIntervals',
        get(domNode) {
            return +domNode.getAttribute('ad-intervals') || 0
        },
    }],
    handles: {
        onAdLoad(evt) {
            this.callSimpleEvent('load', evt)
        },

        onAdError(evt) {
            this.callSimpleEvent('error', evt)
        },

        onAdClose(evt) {
            this.callSimpleEvent('close', evt)
        },
    },
}
