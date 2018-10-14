
import { diff } from './vdom/diff'
import options from './options'

export function render(vnode, parent, store) {
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent
	if(store){
		store.instances = []
		extendStoreUpate(store)
		options.store = store	
	}
	diff(null, vnode, {}, false, parent, false)
} 

function extendStoreUpate(store){
	store.update = function(){
		this.instances.forEach(instance => {
			//diff here?
			instance.update()
		})
	}
}