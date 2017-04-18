import Omi from './omi.js'
import soda from './soda.js'
import Component from './component.js'
import Store from './store.js'

Omi.template = soda

Omi.Store = Store
Omi.Component = Component
if(window.Omi){
    module.exports = window.Omi
}else {
    window.Omi = Omi
    module.exports = Omi
}