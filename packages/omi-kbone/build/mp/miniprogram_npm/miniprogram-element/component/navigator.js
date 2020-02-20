/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 */
module.exports = {
    properties: [{
        name: 'target',
        get(domNode) {
            return domNode.getAttribute('target') || 'self'
        },
    }, {
        name: 'url',
        get(domNode) {
            return domNode.getAttribute('url') || ''
        },
    }, {
        name: 'openType',
        get(domNode) {
            return domNode.getAttribute('open-type') || 'navigate'
        },
    }, {
        name: 'delta',
        get(domNode) {
            const value = parseFloat(domNode.getAttribute('delta'))
            return !isNaN(value) ? value : 1
        },
    }, {
        name: 'appId',
        get(domNode) {
            return domNode.getAttribute('app-id') || ''
        },
    }, {
        name: 'path',
        get(domNode) {
            return domNode.getAttribute('path') || ''
        },
    }, {
        name: 'extraData',
        get(domNode) {
            return domNode.getAttribute('extra-data') || {}
        },
    }, {
        name: 'version',
        get(domNode) {
            return domNode.getAttribute('version') || 'release'
        },
    }, {
        name: 'hoverClass',
        get(domNode) {
            return domNode.getAttribute('hover-class') || 'navigator-hover'
        },
    }, {
        name: 'hoverStopPropagation',
        get(domNode) {
            return !!domNode.getAttribute('hover-stop-propagation')
        },
    }, {
        name: 'hoverStartTime',
        get(domNode) {
            const value = parseFloat(domNode.getAttribute('hover-start-time'))
            return !isNaN(value) ? value : 50
        },
    }, {
        name: 'hoverStayTime',
        get(domNode) {
            const value = parseFloat(domNode.getAttribute('hover-stay-time'))
            return !isNaN(value) ? value : 600
        },
    }],
    handles: {
        onNavigatorSuccess(evt) {
            this.callSimpleEvent('success', evt)
        },

        onNavigatorFail(evt) {
            this.callSimpleEvent('fail', evt)
        },

        onNavigatorComplete(evt) {
            this.callSimpleEvent('complete', evt)
        },
    },
}
