/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/form.html
 *
 * 可以认为下述 form 组件的属性和事件是没有用的，因为 button 组件会被封装到自定义组件内
 */
module.exports = {
    properties: [{
        name: 'reportSubmit',
        get(domNode) {
            return !!domNode.getAttribute('report-submit')
        },
    }, {
        name: 'reportSubmitTimeout',
        get(domNode) {
            return +domNode.getAttribute('report-submit-timeout') || 0
        },
    }],
    handles: {
        onFormSubmit(evt) {
            this.callSimpleEvent('submit', evt)
        },

        onFormReset(evt) {
            this.callSimpleEvent('reset', evt)
        },
    },
}
