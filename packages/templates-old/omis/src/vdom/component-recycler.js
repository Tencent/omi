import { Component } from '../component';
import {getPath, getUse} from '../util'
/**
 * Retains a pool of Components for re-use.
 * @type {Component[]}
 * @private
 */
export const recyclerComponents = [];


/**
 * Create a component. Normalizes differences between PFC's and classful
 * Components.
 * @param {function} Ctor The constructor of the component to create
 * @param {object} props The initial props of the component
 * @param {object} $ The initial $ of the component
 * @returns {import('../component').Component}
 */
export function createComponent(Ctor, props, $) {
	let inst, i = recyclerComponents.length;

	inst = new Component(props, $);
	inst.constructor = Ctor;
	inst.render = doRender;
	if(Ctor.store){
		inst.store = Ctor.store(inst, $)
		inst.store.update = inst.update.bind(inst)
	}

	if ( inst.$ && inst.$.data) {

		if(inst.constructor.use){
			inst.constructor.updatePath = getPath(inst.constructor.use)
			inst.using = getUse(inst.$.data, inst.constructor.use)
			inst.$.instances.push(inst)
		} else if(inst.use){
			const use = typeof inst.use === 'function' ? inst.use() : inst.use
			inst._updatePath = getPath(use)
			inst.using = getUse(inst.$.data, use)
			inst.$.instances.push(inst)
		}
	}
	
	while (i--) {
		if (recyclerComponents[i].constructor===Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}


/** The `.render()` method for a PFC backing instance. */
function doRender(props, $) {
	return this.constructor(props, this.store, this, $);
}
