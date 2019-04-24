import Component from '../component'
import { getUse } from '../util'
import { getPath } from  '../define'

/**
 * Retains a pool of Components for re-use.
 * @type {Component[]}
 * @private
 */
export const recyclerComponents = []

/**
 * Create a component. Normalizes differences between PFC's and classful
 * Components.
 * @param {function} Ctor The constructor of the component to create
 * @param {object} props The initial props of the component
 * @param {object} context The initial context of the component
 * @returns {import('../component').Component}
 */
export function createComponent(Ctor, props, context, vnode) {
  let inst,
  i = recyclerComponents.length

  if (Ctor.prototype && Ctor.prototype.render) {
    inst = new Ctor(props, context)
    Component.call(inst, props, context)
  } else {
    inst = new Component(props, context)
    inst.constructor = Ctor
    inst.render = doRender
  }
  vnode && (inst.scopedCssAttr = vnode.css)

  if ( inst.store && inst.store.data) {
		if(inst.constructor.use){
			inst.use = getUse(inst.store.data, inst.constructor.use)
			inst.store.instances.push(inst)
		} else if(inst.initUse){
			const use = inst.initUse()
			inst._updatePath = getPath(use)
			inst.use = getUse(inst.store.data, use)
			inst.store.instances.push(inst)
		}


  }

  while (i--) {
    if (recyclerComponents[i].constructor === Ctor) {
      inst.nextBase = recyclerComponents[i].nextBase
      recyclerComponents.splice(i, 1)
      return inst
    }
  }
  
  return inst
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, data, context) {
  return this.constructor(props, context)
}
