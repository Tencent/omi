import Omi from './core/omi.js'
import Store from './core/store.js'
import Component from './core/component.js'

import template from './lib/art-template.js'

Omi.template = function(tpl, data) {
    return template.compile(tpl)(data)
}

Omi.artTemplate = template
Omi.Store = Store
Omi.Component = Component

if (window.Omi) {
    module.exports = window.Omi
} else {
    window.Omi = Omi
    module.exports = Omi
}
