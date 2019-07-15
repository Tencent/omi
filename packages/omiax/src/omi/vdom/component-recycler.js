import Component from '../component'
import { getUse } from '../util'
import { getPath } from  '../define'
/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
const components = {}

/** Reclaim a component for later re-use by the recycler. */
export function collectComponent(component) {
  let name = component.constructor.name
  ;(components[name] || (components[name] = [])).push(component)
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
export function createComponent(Ctor, props, context, vnode) {
  let list = components[Ctor.name],
    inst

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

  if (list) {
    for (let i = list.length; i--; ) {
      if (list[i].constructor === Ctor) {
        inst.nextBase = list[i].nextBase
        list.splice(i, 1)
        break
      }
    }
  }
  return inst
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, data, context) {
  return this.constructor(props, context)
}
