import Omi from './omi.js'
import Component from './component.js'

if (typeof Object.assign !== 'function') {
    Object.assign = function(target) {
        'use strict'
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object')
        }

        target = Object(target)
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index]
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
        }
        return target
    }
}

Omi.Component = Component

if (typeof window !== 'undefined' && window.Omi) {
    module.exports = window.Omi
} else {
    (typeof window !== 'undefined') && (window.Omi = Omi)
    module.exports = Omi
}
