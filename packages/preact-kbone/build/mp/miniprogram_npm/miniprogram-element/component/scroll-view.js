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
            const value = parseInt(domNode.getAttribute('upper-threshold'), 10)
            return !isNaN(value) ? value : 50
        },
    }, {
        name: 'lowerThreshold',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('lower-threshold'), 10)
            return !isNaN(value) ? value : 50
        },
    }, {
        name: 'scrollTop',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('scroll-top'), 10)
            return !isNaN(value) ? value : ''
        },
    }, {
        name: 'scrollLeft',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('scroll-left'), 10)
            return !isNaN(value) ? value : ''
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
