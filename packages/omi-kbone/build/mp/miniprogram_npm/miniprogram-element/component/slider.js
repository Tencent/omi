/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/slider.html
 */
module.exports = {
    properties: [{
        name: 'min',
        get(domNode) {
            return +domNode.getAttribute('min') || 0
        },
    }, {
        name: 'max',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('max'), 10)
            return !isNaN(value) ? value : 100
        },
    }, {
        name: 'step',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('step'), 10)
            return !isNaN(value) ? value : 1
        },
    }, {
        name: 'disabled',
        get(domNode) {
            return !!domNode.getAttribute('disabled')
        },
    }, {
        name: 'value',
        get(domNode) {
            return +domNode.getAttribute('value') || 0
        },
    }, {
        name: 'color',
        get(domNode) {
            return domNode.getAttribute('color') || '#e9e9e9'
        },
    }, {
        name: 'selectedColor',
        get(domNode) {
            return domNode.getAttribute('selected-color') || '#1aad19'
        },
    }, {
        name: 'activeColor',
        get(domNode) {
            return domNode.getAttribute('active-color') || '#1aad19'
        },
    }, {
        name: 'backgroundColor',
        get(domNode) {
            return domNode.getAttribute('background-color') || '#e9e9e9'
        },
    }, {
        name: 'blockSize',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('block-size'), 10)
            return !isNaN(value) ? value : 28
        },
    }, {
        name: 'blockColor',
        get(domNode) {
            return domNode.getAttribute('block-color') || '#ffffff'
        },
    }, {
        name: 'showValue',
        get(domNode) {
            return !!domNode.getAttribute('show-value')
        },
    }],
    handles: {
        onSliderChange(evt) {
            this.callSimpleEvent('change', evt)
        },

        onSliderChanging(evt) {
            this.callSimpleEvent('changing', evt)
        },
    },
}
