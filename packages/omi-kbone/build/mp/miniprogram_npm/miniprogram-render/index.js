const tool = require('./util/tool')
const cache = require('./util/cache')
const Window = require('./window')
const Document = require('./document')
const EventTarget = require('./event/event-target')
const Event = require('./event/event')

module.exports = {
    createPage(route, config) {
        if (config) cache.setConfig(config)

        const pageId = `p-${tool.getId()}-/${route}`
        const window = new Window(pageId)
        const nodeIdMap = {}
        const document = new Document(pageId, nodeIdMap)

        cache.init(pageId, {
            window,
            document,
            nodeIdMap,
        })

        return {
            pageId,
            window,
            document,
        }
    },

    destroyPage(pageId) {
        cache.destroy(pageId)
    },

    // 开放给 miniprogram-element
    $$adapter: {
        cache,
        EventTarget,
        Event,
        tool,
    },
}
