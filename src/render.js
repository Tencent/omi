import { vdToDom } from './util'

export function render(vnode, parent) {
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent
	parent.appendChild(vdToDom(vnode))
} 
