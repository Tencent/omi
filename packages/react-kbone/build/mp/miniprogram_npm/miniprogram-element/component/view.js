/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 */
module.exports = {
    properties: [{
        name: 'hoverClass',
        get(domNode) {
            return domNode.getAttribute('hover-class') || 'none'
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
            return !isNaN(value) ? value : 50
        },
    }, {
        name: 'hoverStayTime',
        get(domNode) {
            const value = +domNode.getAttribute('hover-stay-time')
            return !isNaN(value) ? value : 400
        },
    }],
    handles: {},
}
