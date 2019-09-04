/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker.html
 */
module.exports = {
    properties: [{
        name: 'mode',
        get(domNode) {
            return domNode.getAttribute('mode') || 'selector'
        },
    }, {
        name: 'disabled',
        get(domNode) {
            return !!domNode.getAttribute('disabled')
        },
    }, {
        name: 'range',
        get(domNode) {
            const value = domNode.getAttribute('range')
            return value !== undefined ? value : []
        },
    }, {
        name: 'rangeKey',
        get(domNode) {
            return domNode.getAttribute('range-key') || ''
        },
    }, {
        name: 'value',
        get(domNode) {
            const mode = domNode.getAttribute('mode') || 'selector'
            const value = domNode.getAttribute('value')
            if (mode === 'selector' || mode === 'multiSelector') {
                return +value || 0
            } else if (mode === 'time') {
                return value || ''
            } else if (mode === 'date') {
                return value || '0'
            } else if (mode === 'region') {
                return value || []
            }

            return value
        },
    }, {
        name: 'start',
        get(domNode) {
            return domNode.getAttribute('start') || ''
        },
    }, {
        name: 'end',
        get(domNode) {
            return domNode.getAttribute('end') || ''
        },
    }, {
        name: 'fields',
        get(domNode) {
            return domNode.getAttribute('fields') || 'day'
        },
    }, {
        name: 'customItem',
        get(domNode) {
            return domNode.getAttribute('custom-item') || ''
        }
    }],
    handles: {
        onPickerChange(evt) {
            if (!this.domNode) return

            this.domNode.$$setAttributeWithoutUpdate('value', evt.detail.value)
            this.callSimpleEvent('change', evt)
        },

        onPickerColumnChange(evt) {
            this.callSimpleEvent('columnchange', evt)
        },

        onPickerCancel(evt) {
            this.callSimpleEvent('cancel', evt)
        },
    },
}
