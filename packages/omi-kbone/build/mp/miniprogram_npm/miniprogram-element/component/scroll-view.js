/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html
 */
module.exports = {
    properties: [{
        name: 'scrollX',
        get(domNode) {
            return !!domNode.getAttribute('scroll-x')
        },
    }, {
        name: 'scrollY',
        get(domNode) {
            return !!domNode.getAttribute('scroll-y')
        },
    }, {
        name: 'upperThreshold',
        get(domNode) {
            return domNode.getAttribute('upper-threshold') || '50'
        },
    }, {
        name: 'lowerThreshold',
        get(domNode) {
            return domNode.getAttribute('lower-threshold') || '50'
        },
    }, {
        name: 'scrollTop',
        get(domNode) {
            return domNode.getAttribute('scroll-top') || ''
        },
    }, {
        name: 'scrollLeft',
        get(domNode) {
            return domNode.getAttribute('scroll-left') || ''
        },
    }, {
        name: 'scrollIntoView',
        get(domNode) {
            return domNode.getAttribute('scroll-into-view') || ''
        },
    }, {
        name: 'scrollWithAnimation',
        get(domNode) {
            return !!domNode.getAttribute('scroll-with-animation')
        },
    }, {
        name: 'enableBackToTop',
        get(domNode) {
            return !!domNode.getAttribute('enable-back-to-top')
        },
    }, {
        name: 'enableFlex',
        get(domNode) {
            return !!domNode.getAttribute('enable-flex')
        },
    }],
    handles: {
        onScrollViewScrolltoupper(evt) {
            this.callSimpleEvent('scrolltoupper', evt)
        },

        onScrollViewScrolltolower(evt) {
            this.callSimpleEvent('scrolltolower', evt)
        },

        onScrollViewScroll(evt) {
            this.callSimpleEvent('scroll', evt)
        },
    },
}
