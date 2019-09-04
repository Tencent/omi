const mp = require('miniprogram-render')

const {
    cache,
    tool,
} = mp.$$adapter

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html
 */
module.exports = {
    properties: [{
        name: 'url',
        get(domNode) {
            const window = cache.getWindow(domNode.$$pageId)
            const url = domNode.getAttribute('url')
            return url ? tool.completeURL(url, window.location.origin, true) : ''
        },
    }, {
        name: 'mode',
        get(domNode) {
            return domNode.getAttribute('mode') || 'RTC'
        },
    }, {
        name: 'autopush',
        get(domNode) {
            return !!domNode.getAttribute('autopush')
        },
    }, {
        name: 'muted',
        get(domNode) {
            return !!domNode.getAttribute('muted')
        },
    }, {
        name: 'enableCamera',
        get(domNode) {
            const value = domNode.getAttribute('enable-camera')
            return value !== undefined ? !!value : true
        },
    }, {
        name: 'autoFocus',
        get(domNode) {
            const value = domNode.getAttribute('auto-focus')
            return value !== undefined ? !!value : true
        },
    }, {
        name: 'orientation',
        get(domNode) {
            return domNode.getAttribute('orientation') || 'vertical'
        },
    }, {
        name: 'beauty',
        get(domNode) {
            return +domNode.getAttribute('beauty') || 0
        },
    }, {
        name: 'whiteness',
        get(domNode) {
            return +domNode.getAttribute('whiteness') || 0
        },
    }, {
        name: 'aspect',
        get(domNode) {
            return domNode.getAttribute('aspect') || '9:16'
        },
    }, {
        name: 'minBitrate',
        get(domNode) {
            const value = +domNode.getAttribute('min-bitrate')
            return !isNaN(value) ? value : 200
        },
    }, {
        name: 'maxBitrate',
        get(domNode) {
            const value = +domNode.getAttribute('max-bitrate')
            return !isNaN(value) ? value : 1000
        },
    }, {
        name: 'waitingImage',
        get(domNode) {
            return domNode.getAttribute('waiting-image') || ''
        },
    }, {
        name: 'waitingImageHash',
        get(domNode) {
            return domNode.getAttribute('waiting-image-hash') || ''
        },
    }, {
        name: 'zoom',
        get(domNode) {
            return !!domNode.getAttribute('zoom')
        },
    }, {
        name: 'devicePosition',
        get(domNode) {
            return domNode.getAttribute('device-position') || 'front'
        },
    }, {
        name: 'backgroundMute',
        get(domNode) {
            return !!domNode.getAttribute('background-mute')
        },
    }, {
        name: 'mirror',
        get(domNode) {
            return !!domNode.getAttribute('mirror')
        },
    }],
    handles: {
        onLivePusherStateChange(evt) {
            this.callSimpleEvent('statechange', evt)
        },

        onLivePusherNetStatus(evt) {
            this.callSimpleEvent('netstatus', evt)
        },

        onLivePusherError(evt) {
            this.callSimpleEvent('error', evt)
        },

        onLivePusherBgmStart(evt) {
            this.callSimpleEvent('bgmstart', evt)
        },

        onLivePusherBgmProgress(evt) {
            this.callSimpleEvent('bgmprogress', evt)
        },

        onLivePusherBgmComplete(evt) {
            this.callSimpleEvent('bgmcomplete', evt)
        },

    },
}
