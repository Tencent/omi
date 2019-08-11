/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */
module.exports = {
    properties: [{
        name: 'type',
        get(domNode) {
            return domNode.getAttribute('type') || ''
        },
    }, {
        name: 'canvasId',
        get(domNode) {
            return domNode.getAttribute('canvas-id') || ''
        },
    }, {
        name: 'disableScroll',
        get(domNode) {
            return !!domNode.getAttribute('disable-scroll')
        },
    }],
    handles: {
        onCanvasLongTap(evt) {
            this.callSimpleEvent('longtap', evt)
        },

        onCanvasError(evt) {
            this.callSimpleEvent('error', evt)
        },
    },
}
