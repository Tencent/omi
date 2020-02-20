const mp = require('miniprogram-render')
const initData = require('./init-data')
const component = require('./component')

const {
    cache,
    tool,
} = mp.$$adapter

const {
    wxSubComponentMap,
} = component

const ELEMENT_DIFF_KEYS = ['nodeId', 'pageId', 'tagName', 'compName', 'id', 'class', 'style', 'src', 'mode', 'lazyLoad', 'showMenuByLongpress', 'isImage', 'isLeaf', 'isSimple', 'content', 'extra']
const TEXT_NODE_DIFF_KEYS = ['nodeId', 'pageId', 'content']
const NEET_SPLIT_CLASS_STYLE_FROM_CUSTOM_ELEMENT = ['INPUT', 'TEXTAREA', 'VIDEO', 'CANVAS', 'WX-COMPONENT', 'WX-CUSTOM-COMPONENT'] // 需要分离 class 和 style 的节点
const NEET_BEHAVIOR_NORMAL_CUSTOM_ELEMENT = ['swiper-item', 'movable-view', 'picker-view-column']
const NEET_RENDER_TO_CUSTOM_ELEMENT = ['IFRAME', ...NEET_SPLIT_CLASS_STYLE_FROM_CUSTOM_ELEMENT] // 必须渲染成自定义组件的节点
const NOT_SUPPORT = ['IFRAME']

/**
 * 过滤子节点，只获取儿子节点
 */
function filterNodes(domNode, level) {
    const window = cache.getWindow(domNode.$$pageId)
    const childNodes = domNode.childNodes || []

    if (!childNodes.map) return []
    if (NOT_SUPPORT.indexOf(domNode.tagName) >= 0) return [] // 不支持标签，不渲染子节点

    return childNodes.map(child => {
        const domInfo = child.$$domInfo

        if (domInfo.type !== 'element' && domInfo.type !== 'text') return

        domInfo.class = `h5-${domInfo.tagName} node-${domInfo.nodeId} ${domInfo.class || ''}` // 增加默认 class
        domInfo.domNode = child

        // 特殊节点
        if (NEET_SPLIT_CLASS_STYLE_FROM_CUSTOM_ELEMENT.indexOf(child.tagName) >= 0) {
            if (domInfo.tagName === 'wx-component' && NEET_BEHAVIOR_NORMAL_CUSTOM_ELEMENT.indexOf(child.behavior) !== -1) {
                // 特殊内置组件，强制作为某内置组件的子组件，需要直接在当前模板渲染
                domInfo.compName = child.behavior
                domInfo.extra = {
                    hidden: child.getAttribute('hidden') || false,
                }

                // 补充该内置组件的属性
                const {properties} = wxSubComponentMap[child.behavior] || {}
                if (properties && properties.length) {
                    properties.forEach(({name, get}) => {
                        domInfo.extra[name] = get(child)
                    })
                }

                if (child.childNodes.length && level > 0) {
                    domInfo.childNodes = filterNodes(child, level - 1)
                }
                return domInfo
            }

            // 不需要处理 id 和样式
            domInfo.class = `h5-${domInfo.tagName} ${domInfo.tagName === 'wx-component' ? 'wx-' + child.behavior : ''}`
            domInfo.id = ''
            domInfo.style = ''
        }

        // 判断图片节点
        domInfo.isImage = domInfo.type === 'element' && domInfo.tagName === 'img'
        if (domInfo.isImage) {
            domInfo.src = child.src ? tool.completeURL(child.src, window.location.origin, true) : ''
            domInfo.mode = child.getAttribute('mode') || ''
            domInfo.lazyLoad = !!child.getAttribute('lazy-load')
            domInfo.showMenuByLongpress = !!child.getAttribute('show-menu-by-longpress')
        } else {
            domInfo.src = ''
            domInfo.mode = ''
            domInfo.lazyLoad = false
            domInfo.showMenuByLongpress = false
        }

        // 判断叶子节点
        domInfo.isLeaf = !domInfo.isImage && domInfo.type === 'element' && !child.children.length && NEET_RENDER_TO_CUSTOM_ELEMENT.indexOf(child.tagName.toUpperCase()) === -1
        if (domInfo.isLeaf) {
            domInfo.content = child.childNodes.map(childNode => (childNode.$$domInfo.type === 'text' ? childNode.textContent : '')).join('')
        }

        // 判断可直接用 view 渲染的简单子节点
        domInfo.isSimple = !domInfo.isLeaf && domInfo.type === 'element' && NEET_RENDER_TO_CUSTOM_ELEMENT.indexOf(child.tagName.toUpperCase()) === -1 && level > 0
        if (domInfo.isSimple) {
            domInfo.content = ''
            domInfo.childNodes = filterNodes(child, level - 1)
        }

        return domInfo
    }).filter(child => !!child)
}

/**
 * 判断两值是否相等
 */
function isEqual(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        // 值为数值，需要考虑精度
        return parseInt(a * 1000, 10) === parseInt(b * 1000, 10)
    }

    return a === b
}

/**
 * 比较新旧子节点是否不同
 */
function checkDiffChildNodes(newChildNodes, oldChildNodes) {
    if (newChildNodes.length !== oldChildNodes.length) return true

    for (let i = 0, len = newChildNodes.length; i < len; i++) {
        const newChild = newChildNodes[i]
        const oldChild = oldChildNodes[i]

        if (newChild.type !== oldChild.type) return true

        const keys = newChild.type === 'element' ? ELEMENT_DIFF_KEYS : TEXT_NODE_DIFF_KEYS

        for (const key of keys) {
            const newValue = newChild[key]
            const oldValue = oldChild[key]
            if (typeof newValue === 'object') {
                // 值为对象，则判断对象顶层值是否有变化
                if (typeof oldValue !== 'object') return true

                const objectKeys = Object.keys(newValue)
                for (const objectKey of objectKeys) {
                    if (newValue[objectKey] !== oldValue[objectKey]) return true
                }
            } else if (!isEqual(newValue, oldValue)) {
                return true
            }
        }

        // 比较孙子后辈节点
        const newGrandChildNodes = newChild.childNodes || []
        const oldGrandChildNodes = oldChild.childNodes || []
        if (newGrandChildNodes.length || oldGrandChildNodes.length) {
            const checkRes = checkDiffChildNodes(newGrandChildNodes, oldGrandChildNodes)
            if (checkRes) return true
        }
    }

    return false
}

/**
 * 检查组件属性
 */
function checkComponentAttr(name, domNode, destData, oldData) {
    const attrs = initData[name]

    destData.wxCompName = name

    if (attrs && attrs.length) {
        for (const {name, get} of attrs) {
            const newValue = get(domNode)
            if (!oldData || !isEqual(newValue, oldData[name])) destData[name] = newValue
        }
    }

    // 补充 id、class、style 和 hidden
    const newId = domNode.id
    if (!oldData || oldData.id !== newId) destData.id = newId
    const newClass = `wx-comp-${name} node-${domNode.$$nodeId} ${domNode.className || ''}`
    if (!oldData || oldData.class !== newClass) destData.class = newClass
    const newStyle = domNode.style.cssText
    if (!oldData || oldData.style !== newStyle) destData.style = newStyle
    const newHidden = domNode.getAttribute('hidden') || false
    if (!oldData || oldData.hidden !== newHidden) destData.hidden = newHidden
}

/**
 * 处理不需要渲染成自定义组件的节点
 */
function dealWithLeafAndSimple(childNodes, onChildNodesUpdate) {
    if (childNodes && childNodes.length) {
        childNodes = childNodes.map(originChildNode => {
            const childNode = Object.assign({}, originChildNode)

            if (childNode.isLeaf || childNode.isSimple) {
                childNode.domNode.$$clearEvent('$$childNodesUpdate')
                childNode.domNode.addEventListener('$$childNodesUpdate', onChildNodesUpdate)
            }

            delete childNode.domNode
            childNode.childNodes = dealWithLeafAndSimple(childNode.childNodes, onChildNodesUpdate)

            return childNode
        })
    }

    return childNodes
}

/**
 * 检查事件是否经过某个节点
 */
function checkEventAccessDomNode(evt, domNode, dest) {
    dest = dest || domNode.ownerDocument.body
    let target = evt.target

    // 该节点就是目标节点
    if (domNode === dest) return true

    while (target && target !== dest) {
        if (target === domNode) return true
        target = target.parentNode
    }

    return false
}

/**
 * 查找最近的符合条件的祖先节点
 */
function findParentNode(domNode, tagName) {
    const checkParentNode = (parentNode, tagName) => {
        if (!parentNode) return false
        if (parentNode.tagName === tagName) return true
        if (parentNode.tagName === 'WX-COMPONENT' && parentNode.behavior === tagName.toLowerCase()) return true

        return false
    }
    let parentNode = domNode.parentNode

    if (checkParentNode(parentNode, tagName)) return parentNode
    while (parentNode && parentNode.tagName !== tagName) {
        parentNode = parentNode.parentNode
        if (checkParentNode(parentNode, tagName)) return parentNode
    }

    return null
}

module.exports = {
    NOT_SUPPORT,
    filterNodes,
    checkDiffChildNodes,
    checkComponentAttr,
    dealWithLeafAndSimple,
    checkEventAccessDomNode,
    findParentNode,
}
