/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html
 */
module.exports = {
    properties: [{
        name: 'value',
        get(domNode) {
            return domNode.value || ''
        },
    }, {
        name: 'placeholder',
        get(domNode) {
            return domNode.placeholder
        },
    }, {
        name: 'placeholderStyle',
        get(domNode) {
            return domNode.getAttribute('placeholder-style') || ''
        },
    }, {
        name: 'placeholderClass',
        get(domNode) {
            return domNode.getAttribute('placeholder-class') || 'input-placeholder'
        },
    }, {
        name: 'disabled',
        get(domNode) {
            return domNode.disabled
        },
    }, {
        name: 'maxlength',
        get(domNode) {
            const value = parseInt(domNode.maxlength, 10)
            return !isNaN(value) ? value : 140
        }
    }, {
        name: 'autoFocus',
        get(domNode) {
            return !!domNode.getAttribute('autofocus')
        },
    }, {
        name: 'focus',
        get(domNode) {
            return !!domNode.getAttribute('focus')
        },
    }, {
        name: 'autoHeight',
        get(domNode) {
            return !!domNode.getAttribute('auto-height')
        },
    }, {
        name: 'fixed',
        get(domNode) {
            return !!domNode.getAttribute('fixed')
        },
    }, {
        name: 'cursorSpacing',
        get(domNode) {
            return +domNode.getAttribute('cursor-spacing') || 0
        },
    }, {
        name: 'cursor',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('cursor'), 10)
            return !isNaN(value) ? value : -1
        },
    }, {
        name: 'showConfirmBar',
        get(domNode) {
            const value = domNode.getAttribute('show-confirm-bar')
            return value !== undefined ? !!value : true
        },
    }, {
        name: 'selectionStart',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('selection-start'), 10)
            return !isNaN(value) ? value : -1
        },
    }, {
        name: 'selectionEnd',
        get(domNode) {
            const value = parseInt(domNode.getAttribute('selection-end'), 10)
            return !isNaN(value) ? value : -1
        },
    }, {
        name: 'adjustPosition',
        get(domNode) {
            const value = domNode.getAttribute('adjust-position')
            return value !== undefined ? !!value : true
        },
    }],
    handles: {
        onTextareaFocus(evt) {
            this.callSimpleEvent('focus', evt)
        },

        onTextareaBlur(evt) {
            if (!this.domNode) return

            this.domNode.setAttribute('focus', false)
            this.callSimpleEvent('blur', evt)
        },

        onTextareaLineChange(evt) {
            this.callSimpleEvent('linechange', evt)
        },

        onTextareaInput(evt) {
            if (!this.domNode) return

            this.domNode.value = evt.detail.value
            this.callEvent('input', evt)
        },

        onTextareaConfirm(evt) {
            this.callSimpleEvent('confirm', evt)
        },

        onTextareaKeyBoardHeightChange(evt) {
            this.callSimpleEvent('keyboardheightchange', evt)
        },
    },
}
