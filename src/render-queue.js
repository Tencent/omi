import options from './options';
import { defer } from './util';
import { renderComponent } from './vdom/component';

/** Managed queue of dirty components to be re-rendered */

let items = [];

export function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component)==1) {
		(options.debounceRendering || defer)(rerender);
	}
}

export function rerender() {
	let p, list = items;
	items = [];
	let element;
	while ( (p = list.pop()) ) {
		element = p.base;
		if (p._dirty) renderComponent(p);
	}
	if (!list.length) {
		if (options.componentChange) options.componentChange(p, element);
	}
}
