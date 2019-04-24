import options from './options'
import { defer } from './util'
import { renderComponent } from './vdom/component'

/** Managed queue of dirty components to be re-rendered */

let items = []

export function enqueueRender(component) {
  if (items.push(component) == 1) {
    ;(options.debounceRendering || defer)(rerender)
  }
}

/** Rerender all enqueued dirty components */
export function rerender() {
	let p
	while ( (p = items.pop()) ) {
    renderComponent(p)
	}
}