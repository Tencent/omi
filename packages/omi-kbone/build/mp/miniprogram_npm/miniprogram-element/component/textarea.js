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
            const value = parseFloat(domNode.maxlength)
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
            const value = parseFloat(domNode.getAttribute('cursor'))
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
            const value = parseFloat(domNode.getAttribute('selection-start'))
            return !isNaN(value) ? value : -1
        },
    }, {
        name: 'selectionEnd',
        get(domNode) {
            const value = parseFloat(domNode.getAttribute('selection-end'))
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
            this._textareaOldValue = this.domNode.value
            this.callSimpleEvent('focus', evt)
        },

        onTextareaBlur(evt) {
            if (!this.domNode) return

            this.domNode.setAttribute('focus', false)
            if (this._textareaOldValue !== undefined && this.domNode.value !== this._textareaOldValue) {
                this._textareaOldValue = undefined
                this.callEvent('change', evt)
            }
            this.callSimpleEvent('blur', evt)
        },

        onTextareaLineChange(evt) {
            this.callSimpleEvent('linechange', evt)
        },

        onTextareaInput(evt) {
            if (!this.domNode) return

            const value = '' + evt.detail.value
            this.domNode.setAttribute('value', value)
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
