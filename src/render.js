
import { diff } from './vdom/diff'
import options from './options'

export function render(vnode, parent, store) {
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent
	options.store = store
	diff(null, vnode, {}, false, parent, false)
} 
