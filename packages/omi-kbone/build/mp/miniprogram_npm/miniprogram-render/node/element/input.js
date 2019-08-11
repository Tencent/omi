const Element = require('../element')
const Pool = require('../../util/pool')
const cache = require('../../util/cache')

const pool = new Pool()

class HTMLInputElement extends Element {
    /**
     * 创建实例
     */
    static $$create(options, tree) {
        const config = cache.getConfig()

        if (config.optimization.elementMultiplexing) {
            // 复用 element 节点
            const instance = pool.get()

            if (instance) {
                instance.$$init(options, tree)
                return instance
            }
        }

        return new HTMLInputElement(options, tree)
    }

    /**
     * 覆写父类的回收实例方法
     */
    $$recycle() {
        this.$$destroy()

        const config = cache.getConfig()

        if (config.optimization.elementMultiplexing) {
            // 复用 element 节点
            pool.add(this)
        }
    }

    /**
     * 调用 $_generateHtml 接口时用于处理额外的属性，
     */
    $$dealWithAttrsForGenerateHtml(html, node) {
        const type = node.type
        if (type) html += ` type="${type}"`

        const value = node.value
        if (value) html += ` value="${value}"`

        const disabled = node.disabled
        if (disabled) html += ' disabled'

        const maxlength = node.maxlength
        if (maxlength) html += ` maxlength="${maxlength}"`

        const placeholder = node.placeholder
        if (placeholder) html += ` placeholder="${placeholder.replace(/"/g, '\\"')}"`

        return html
    }

    /**
     * 调用 outerHTML 的 setter 时用于处理额外的属性
     */
    $$dealWithAttrsForOuterHTML(node) {
        this.type = node.type || ''
        this.value = node.value || ''
        this.disabled = node.disabled || ''
        this.maxlength = node.maxlength
        this.placeholder = node.placeholder || ''

        // 特殊字段
        this.mpplaceholderclass = node.mpplaceholderclass || ''
    }

    /**
     * 调用 cloneNode 接口时用于处理额外的属性
     */
    $$dealWithAttrsForCloneNode() {
        return {
            type: this.type,
            value: this.value,
            disabled: this.disabled,
            maxlength: this.maxlength,
            placeholder: this.placeholder,

            // 特殊字段
            mpplaceholderclass: this.mpplaceholderclass,
        }
    }

    /**
     * 对外属性和方法
     */
    get name() {
        return this.$_attrs.get('name')
    }

    set name(value) {
        value = '' + value
        return this.$_attrs.set('name', value)
    }

    get type() {
        return this.$_attrs.get('type')
    }

    set type(value) {
        value = '' + value
        this.$_attrs.set('type', value)
    }

    get value() {
        const type = this.$_attrs.get('type')
        const value = this.$_attrs.get('value')

        if ((type === 'radio' || type === 'checkbox') && value === undefined) return 'on'
        return value
    }

    set value(value) {
        value = '' + value
        this.$_attrs.set('value', value)
    }

    get disabled() {
        return !!this.$_attrs.get('disabled')
    }

    set disabled(value) {
        value = !!value
        this.$_attrs.set('disabled', value)
    }

    get maxlength() {
        return this.$_attrs.get('maxlength')
    }

    set maxlength(value) {
        this.$_attrs.set('maxlength', value)
    }

    get placeholder() {
        return this.$_attrs.get('placeholder') || ''
    }

    set placeholder(value) {
        value = '' + value
        this.$_attrs.set('placeholder', value)
    }

    get autofocus() {
        return !!this.$_attrs.get('autofocus')
    }

    set autofocus(value) {
        value = !!value
        this.$_attrs.set('autofocus', value)
    }

    set checked(value) {
        this.$_attrs.set('checked', value)
    }

    get checked() {
        return this.$_attrs.get('checked') || ''
    }

    focus() {
        this.$_attrs.set('focus', true)
    }

    blur() {
        this.$_attrs.set('focus', false)
    }
}

module.exports = HTMLInputElement
