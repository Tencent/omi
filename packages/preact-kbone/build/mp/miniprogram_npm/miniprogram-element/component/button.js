/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 */
module.exports = {
    properties: [{
        name: 'size',
        get(domNode) {
            return domNode.getAttribute('size') || 'default'
        },
    }, {
        name: 'type',
        get(domNode) {
            return domNode.getAttribute('type') || 'default'
        },
    }, {
        name: 'plain',
        get(domNode) {
            return !!domNode.getAttribute('plain')
        },
    }, {
        name: 'disabled',
        get(domNode) {
            return !!domNode.getAttribute('disabled')
        },
    }, {
        name: 'loading',
        get(domNode) {
            return !!domNode.getAttribute('loading')
        },
    }, {
        name: 'formType',
        get(domNode) {
            return domNode.getAttribute('form-type') || ''
        },
    }, {
        name: 'openType',
        get(domNode) {
            return domNode.getAttribute('open-type') || ''
        },
    }, {
        name: 'hoverClass',
        get(domNode) {
            return domNode.getAttribute('hover-class') || 'button-hover'
        },
    }, {
        name: 'hoverStopPropagation',
        get(domNode) {
            return !!domNode.getAttribute('hover-stop-propagation')
        },
    }, {
        name: 'hoverStartTime',
        get(domNode) {
            const value = +domNode.getAttribute('hover-start-time')
            return !isNaN(value) ? value : 20
        },
    }, {
        name: 'hoverStayTime',
        get(domNode) {
            const value = +domNode.getAttribute('hover-stay-time')
            return !isNaN(value) ? value : 70
        },
    }, {
        name: 'lang',
        get(domNode) {
            return domNode.getAttribute('lang') || 'en'
        },
    }, {
        name: 'sessionFrom',
        get(domNode) {
            return domNode.getAttribute('session-from') || ''
        },
    }, {
        name: 'sendMessageTitle',
        get(domNode) {
            return domNode.getAttribute('send-message-title') || ''
        },
    }, {
        name: 'sendMessagePath',
        get(domNode) {
            return domNode.getAttribute('send-message-path') || ''
        },
    }, {
        name: 'sendMessageImg',
        get(domNode) {
            return domNode.getAttribute('send-message-img') || ''
        },
    }, {
        name: 'appParameter',
        get(domNode) {
            return domNode.getAttribute('app-parameter') || ''
        },
    }, {
        name: 'showMessageCard',
        get(domNode) {
            return !!domNode.getAttribute('show-message-card')
        },
    }],
    handles: {
        onButtonGetUserInfo(evt) {
            this.callSimpleEvent('getuserinfo', evt)
        },

        onButtonContact(evt) {
            this.callSimpleEvent('contact', evt)
        },

        onButtonGetPhoneNumber(evt) {
            this.callSimpleEvent('getphonenumber', evt)
        },

        onButtonError(evt) {
            this.callSimpleEvent('error', evt)
        },

        onButtonOpenSetting(evt) {
            this.callSimpleEvent('opensetting', evt)
        },

        onButtonLaunchApp(evt) {
            this.callSimpleEvent('launchapp', evt)
        },

    },
}
