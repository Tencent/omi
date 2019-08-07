const Event = require('./event')

class CustomEvent extends Event {
    constructor(name = '', options = {}) {
        super({
            name,
            ...options,
        })
    }
}

module.exports = CustomEvent
