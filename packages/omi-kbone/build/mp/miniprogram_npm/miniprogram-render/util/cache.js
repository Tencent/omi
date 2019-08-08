const pageMap = {}
let configCache = {}

/**
 * 初始化
 */
function init(pageId, options) {
    pageMap[pageId] = {
        window: options.window,
        document: options.document,
        nodeIdMap: options.nodeIdMap,
    }
}

/**
 * 销毁
 */
function destroy(pageId) {
    delete pageMap[pageId]
}

/**
 * 获取 document
 */
function getDocument(pageId) {
    return pageMap[pageId] && pageMap[pageId].document
}

/**
 * 获取 window
 */
function getWindow(pageId) {
    return pageMap[pageId] && pageMap[pageId].window
}

/**
 * 存储 domNode 映射
 */
function setNode(pageId, nodeId, domNode = null) {
    const document = pageMap[pageId] && pageMap[pageId].document

    // 运行前调用，不做任何操作
    if (!document) return
    // 相当于删除映射
    if (!domNode) return pageMap[pageId].nodeIdMap[nodeId] = domNode

    let parentNode = domNode.parentNode

    while (parentNode && parentNode !== document.body) {
        parentNode = parentNode.parentNode
    }

    pageMap[pageId].nodeIdMap[nodeId] = parentNode === document.body ? domNode : null
}

/**
 * 根据 nodeId 获取 domNode
 */
function getNode(pageId, nodeId) {
    return pageMap[pageId] && pageMap[pageId].nodeIdMap[nodeId]
}

/**
 * 存储全局 config
 */
function setConfig(config) {
    configCache = config
}

/**
 * 获取全局 config
 */
function getConfig() {
    return configCache
}

module.exports = {
    init,
    destroy,
    getDocument,
    getWindow,
    setNode,
    getNode,
    setConfig,
    getConfig,
}
