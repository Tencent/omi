/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
 */
module.exports = {
    properties: [{
        name: 'indicatorDots',
        get(domNode) {
            return !!domNode.getAttribute('indicator-dots')
        },
    }, {
        name: 'indicatorColor',
        get(domNode) {
            return domNode.getAttribute('indicator-color') || 'rgba(0, 0, 0, .3)'
        },
    }, {
        name: 'indicatorActiveColor',
        get(domNode) {
            return domNode.getAttribute('indicator-active-color') || '#000000'
        },
    }, {
        name: 'autoplay',
        get(domNode) {
            return !!domNode.getAttribute('autoplay')
        },
    }, {
        name: 'current',
        get(domNode) {
            return +domNode.getAttribute('current') || 0
        },
    }, {
        name: 'interval',
        get(domNode) {
            const value = parseFloat(domNode.getAttribute('interval'))
            return !isNaN(value) ? value : 5000
        },
    }, {
        name: 'duration',
        get(domNode) {
            const value = parseFloat(domNode.getAttribute('duration'))
            return !isNaN(value) ? value : 500
        },
    }, {
        name: 'circular',
        get(domNode) {
            return !!domNode.getAttribute('circular')
        },
    }, {
        name: 'vertical',
        get(domNode) {
            return !!domNode.getAttribute('vertical')
        },
    }, {
        name: 'previousMargin',
        get(domNode) {
            return domNode.getAttribute('previous-margin') || '0px'
        },
    }, {
        name: 'nextMargin',
        get(domNode) {
            return domNode.getAttribute('next-margin') || '0px'
        },
    }, {
        name: 'displayMultipleItems',
        get(domNode) {
            const value = parseFloat(domNode.getAttribute('display-multiple-items'))
            return !isNaN(value) ? value : 1
        },
    }, {
        name: 'skipHiddenItemLayout',
        get(domNode) {
            return !!domNode.getAttribute('skip-hidden-item-layout')
        },
    }, {
        name: 'easingFunction',
        get(domNode) {
            return domNode.getAttribute('easing-function') || 'default'
        },
    }],
    handles: {
        onSwiperChange(evt) {
            if (!this.domNode) return

            this.domNode.$$setAttributeWithoutUpdate('current', evt.detail.current)
            this.callSimpleEvent('change', evt)
        },

        onSwiperTransition(evt) {
            this.callSimpleEvent('transition', evt)
        },

        onSwiperAnimationfinish(evt) {
            this.callSimpleEvent('animationfinish', evt)
        },
    },
}
