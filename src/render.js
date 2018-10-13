
import { diff } from './vdom/diff'

export function render(vnode, parent) {
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent
	diff(null, vnode, {}, false, parent, false);
} 
