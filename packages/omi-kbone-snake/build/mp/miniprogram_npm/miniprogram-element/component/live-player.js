const mp = require('miniprogram-render')

const {
    cache,
    tool,
} = mp.$$adapter

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */
module.exports = {
    properties: [{
        name: 'src',
        get(domNode) {
            const window = cache.getWindow(domNode.$$pageId)
            return domNode.src ? tool.completeURL(domNode.src, window.location.origin, true) : ''
        },
    }, {
        name: 'mode',
        get(domNode) {
            return domNode.getAttribute('mode') || 'live'
        },
    }, {
        name: 'autoplay',
        get(domNode) {
            return !!domNode.getAttribute('autoplay')
        },
    }, {
        name: 'muted',
        get(domNode) {
            return !!domNode.getAttribute('muted')
        },
    }, {
        name: 'orientation',
        get(domNode) {
            return domNode.getAttribute('orientation') || 'vertical'
        },
    }, {
        name: 'objectFit',
        get(domNode) {
            return domNode.getAttribute('object-fit') || 'contain'
        },
    }, {
        name: 'backgroundMute',
        get(domNode) {
            return !!domNode.getAttribute('background-mute')
        },
    }, {
        name: 'minCache',
        get(domNode) {
            const value = +domNode.getAttribute('min-cache')
            return !isNaN(value) ? value : 1
        },
    }, {
        name: 'maxCache',
        get(domNode) {
            const value = +domNode.getAttribute('max-cache')
            return !isNaN(value) ? value : 3
        },
    }, {
        name: 'soundMode',
        get(domNode) {
            return domNode.getAttribute('sound-mode') || 'speaker'
        },
    }, {
        name: 'autoPauseIfNavigate',
        get(domNode) {
            const value = domNode.getAttribute('auto-pause-if-navigate')
            return value !== undefined ? !!value : true
        },
    }, {
        name: 'autoPauseIfOpenNative',
        get(domNode) {
            const value = domNode.getAttribute('auto-pause-if-open-native')
            return value !== undefined ? !!value : true
        },
    }],
    handles: {
        onLivePlayerStateChange(evt) {
            this.callSimpleEvent('statechange', evt)
        },

        onLivePlayerFullScreenChange(evt) {
            this.callSimpleEvent('fullscreenchange', evt)
        },

        onLivePlayerNetStatus(evt) {
            this.callSimpleEvent('netstatus', evt)
        },

    },
}
