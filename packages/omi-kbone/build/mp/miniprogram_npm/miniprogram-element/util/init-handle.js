const mp = require('miniprogram-render')
const _ = require('./tool')
const component = require('./component')

const {
    Event,
    EventTarget,
} = mp.$$adapter
const {
    NOT_SUPPORT,
} = _
const {
    wxCompNameMap,
    handles,
} = component

module.exports = {
    /**
     * 初始化
     */
    init(data) {
        const domNode = this.domNode
        const tagName = domNode.tagName

        if (tagName === 'WX-COMPONENT') {
            // 内置组件
            data.wxCompName = domNode.behavior
            const wxCompName = wxCompNameMap[data.wxCompName]
            if (wxCompName) _.checkComponentAttr(wxCompName, domNode, data)
            else console.warn(`value "${data.wxCompName}" is not supported for wx-component's behavior`)
        } else if (tagName === 'WX-CUSTOM-COMPONENT') {
            // 自定义组件
            data.wxCustomCompName = domNode.behavior
            data.nodeId = this.nodeId
            data.pageId = this.pageId
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
     * 触发简单节点事件，不做冒泡处理
     */
    callSimpleEvent(eventName, evt, domNode) {
        domNode = domNode || this.domNode
        if (!domNode) return

        EventTarget.$$process(domNode, new Event({
            touches: evt.touches,
            changedTouches: evt.changedTouches,
            name: eventName,
            target: domNode,
            eventPhase: Event.AT_TARGET,
            detail: evt && evt.detail,
            $$extra: evt && evt.extra,
            bubbles: false,
        }))
    },

    ...handles,
}
