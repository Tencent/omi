const mp = require('miniprogram-render')

const {
    cache,
} = mp.$$adapter

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */
module.exports = {
    properties: [{
        name: 'value',
        get(domNode) {
            return domNode.value || ''
        },
    }, {
        name: 'type',
        get(domNode) {
            const value = domNode.type || 'text'
            return value !== 'password' ? value : 'text'
        },
    }, {
        name: 'password',
        get(domNode) {
            return domNode.type !== 'password' ? !!domNode.getAttribute('password') : true
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
            const value = +domNode.maxlength
            return !isNaN(value) ? value : 140
        },
    }, {
        name: 'cursorSpacing',
        get(domNode) {
            const value = +domNode.getAttribute('cursor-spacing')
            return !isNaN(value) ? value : 0
        },
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
        name: 'confirmType',
        get(domNode) {
            return domNode.getAttribute('confirm-type') || 'done'
        },
    }, {
        name: 'confirmHold',
        get(domNode) {
            return !!domNode.getAttribute('confirm-hold')
        },
    }, {
        name: 'cursor',
        get(domNode) {
            const value = +domNode.getAttribute('cursor')
            return !isNaN(value) ? value : -1
        },
    }, {
        name: 'selectionStart',
        get(domNode) {
            const value = +domNode.getAttribute('selection-start')
            return !isNaN(value) ? value : -1
        },
    }, {
        name: 'selectionEnd',
        get(domNode) {
            const value = +domNode.getAttribute('selection-end')
            return !isNaN(value) ? value : -1
        },
    }, {
        name: 'adjustPosition',
        get(domNode) {
            const value = domNode.getAttribute('adjust-position')
            return value !== undefined ? !!value : true
        },
    }, {
        name: 'checked',
        get(domNode) {
            return !!domNode.getAttribute('checked')
        },
    }, {
        name: 'color',
        get(domNode) {
            return domNode.getAttribute('color') || '#09BB07'
        },
    }],
    handles: {
        onInputInput(evt) {
            if (!this.domNode) return

            this.domNode.value = evt.detail.value
            this.callSimpleEvent('input', evt)
        },

        onInputFocus(evt) {
            this.callSimpleEvent('focus', evt)
        },

        onInputBlur(evt) {
            this.callSimpleEvent('blur', evt)
        },

        onInputConfirm(evt) {
            this.callSimpleEvent('confirm', evt)
        },

        onInputKeyBoardHeightChange(evt) {
            this.callSimpleEvent('keyboardheightchange', evt)
        },

        onRadioChange(evt) {
            const window = cache.getWindow(this.pageId)
            const domNode = this.domNode
            const value = evt.detail.value
            const name = domNode.name
            const otherDomNodes = window.document.querySelectorAll(`input[name=${name}]`) || []

            if (value === domNode.value) {
                domNode.checked = true
                for (const otherDomNode of otherDomNodes) {
                    if (otherDomNode.type === 'radio' && otherDomNode !== domNode) {
                        otherDomNode.checked = false
                    }
                }
            }
            this.callSimpleEvent('change', evt)
        },

        onCheckboxChange(evt) {
            const domNode = this.domNode
            const value = evt.detail.value || []
            if (value.indexOf(domNode.value) >= 0) {
                domNode.checked = true
            } else {
                domNode.checked = false
            }
            this.callSimpleEvent('change', evt)
        },
    },
}
