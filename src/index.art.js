import Omi from './omi.js'
import template from './art-template.js'
import Component from './component.js'
import Store from './store.js'

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
