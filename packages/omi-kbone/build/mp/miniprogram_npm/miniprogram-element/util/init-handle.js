const mp = require('miniprogram-render')
const _ = require('./tool')
const component = require('./component')

const {
    Event,
} = mp.$$adapter
const {
    NOT_SUPPORT,
} = _
const {
    wxCompNameMap
} = component

module.exports = {
    /**
     * 初始化
     */
    init(data) {
        const domNode = this.domNode
        const tagName = domNode.tagName

        if (tagName === 'WX-COMPONENT') {
            // 无可替换 html 标签
            data.wxCompName = domNode.behavior
            const wxCompName = wxCompNameMap[data.wxCompName]
            if (wxCompName) _.checkComponentAttr(wxCompName, domNode, data)
            else console.warn(`value "${data.wxCompName}" is not supported for wx-component's behavior`)
        } else if (NOT_SUPPORT.indexOf(tagName) >= 0) {
            // 不支持标签
            data.wxCompName = 'not-support'
            data.content = domNode.textContent
        } else {
            // 可替换 html 标签
            const wxCompName = wxCompNameMap[tagName]
            if (wxCompName) _.checkComponentAttr(wxCompName, domNode, data)
        }
    },

    /**
     * 触发简单节点事件
     */
    callSimpleEvent(eventName, evt, domNode) {
        domNode = domNode || this.domNode
        if (!domNode) return

        domNode.$$trigger(eventName, {
            event: new Event({
                name: eventName,
                target: domNode,
                eventPhase: Event.AT_TARGET,
                detail: evt && evt.detail,
            }),
            currentTarget: domNode,
        })
    },

    ...component.handles,
}
