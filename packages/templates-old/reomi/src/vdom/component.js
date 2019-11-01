import {
  SYNC_RENDER,
  NO_RENDER,
  FORCE_RENDER,
  ASYNC_RENDER,
  ATTR_KEY
} from '../constants'
import options from '../options'
import { extend, applyRef } from '../util'
import { enqueueRender } from '../render-queue'
import { getNodeProps } from './index'
import {
  diff,
  mounts,
  diffLevel,
  flushMounts,
  recollectNodeTree,
  removeChildren
} from './diff'
import { createComponent, recyclerComponents } from './component-recycler'
import { removeNode } from '../dom/index'
import { addScopedAttrStatic, getCtorName, scopeHost } from '../style'
import { proxyUpdate } from '../observe'

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
export function setComponentProps(
  component,
  props,
  renderMode,
  context,
  mountAll
) {
  if (component._disable) return
  component._disable = true

  component.__ref = props.ref
  component.__key = props.key
  delete props.ref
  delete props.key

  if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
    if (!component.base || mountAll) {
      if (component.componentWillMount) component.componentWillMount()
    } else if (component.componentWillReceiveProps) {
      component.componentWillReceiveProps(props, context)
    }
  }

  if (!component.base || mountAll) {
    if (component.beforeInstall) component.beforeInstall()
    if (component.install) component.install()
    if (component.constructor.observe) {
      proxyUpdate(component)
    }
  } else if (component.receiveProps) {
    component.receiveProps(props, context, component.props)
  }

  if (context && context !== component.context) {
    if (!component.prevContext) component.prevContext = component.context
    component.context = context
  }

  if (!component.prevProps) component.prevProps = component.props
  component.props = props

  component._disable = false

  if (renderMode !== NO_RENDER) {
    if (
      renderMode === SYNC_RENDER ||
      options.syncComponentUpdates !== false ||
      !component.base
    ) {
      renderComponent(component, SYNC_RENDER, mountAll)
    } else {
      enqueueRender(component)
    }
  }

  applyRef(component.__ref, component)
}

function shallowComparison(old, attrs) {
  let name

  for (name in old) {
    if (attrs[name] == null && old[name] != null) {
      return true
    }
  }

  if (old.children.length > 0 || attrs.children.length > 0) {
    return true
  }

  for (name in attrs) {
    if (name != 'children') {
      let type = typeof attrs[name]
      if (type == 'function' || type == 'object') {
        return true
      } else if (attrs[name] != old[name]) {
        return true
      }
    }
  }
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
export function renderComponent(component, renderMode, mountAll, isChild) {
  if (component._disable) return

  let props = component.props,
    state = component.state,
    context = component.context,
    previousProps = component.prevProps || props,
    previousState = component.prevState || state,
    previousContext = component.prevContext || context,
    isUpdate = component.base,
    nextBase = component.nextBase,
    initialBase = isUpdate || nextBase,
    initialChildComponent = component._component,
    skip = false,
    snapshot = previousContext,
    rendered,
    inst,
    cbase

  if (component.constructor.getDerivedStateFromProps) {
    state = extend(
      extend({}, state),
      component.constructor.getDerivedStateFromProps(props, state)
    )
    component.state = state
  }

  // if updating
  if (isUpdate) {
    component.props = previousProps
    //component.data = previousState
    component.state = previousState
    component.context = previousContext
    if (
      renderMode !== FORCE_RENDER &&
      component.shouldComponentUpdate &&
      component.shouldComponentUpdate(props, state, context) === false
    ) {
      skip = true
    } else {
      if (component.componentWillUpdate) {
        component.componentWillUpdate(props, state, context)
      }

      if (component.beforeUpdate) {
        component.beforeUpdate(props, state, context)
      }
    }

    // if (component.store || renderMode == FORCE_RENDER || shallowComparison(previousProps, props)) {
    //   skip = false
    //   if (component.beforeUpdate) {
    //     component.beforeUpdate(props, state, context)
    //   }
    // } else {
    //   skip = true
    // }
    component.props = props
    component.state = state
    //component.data = state
    component.context = context
  }

  component.prevProps = component.prevState = component.prevContext = component.nextBase = null
  component._dirty = false

  if (!skip) {
    component.beforeRender && component.beforeRender()
    rendered = component.render(props, state, context)

    //don't rerender
    if (component.constructor.css || component.css) {
      addScopedAttrStatic(rendered, '_s' + getCtorName(component.constructor))
    }

    scopeHost(rendered, component.scopedCssAttr)

    // context to pass to the child, can be updated via (grand-)parent component
    if (component.getChildContext) {
      context = extend(extend({}, context), component.getChildContext())
    }

    if (isUpdate && component.getSnapshotBeforeUpdate) {
      snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState)
    }

    let childComponent = rendered && rendered.nodeName,
      toUnmount,
      base,
      ctor = options.mapping[childComponent]
    if (typeof childComponent === 'function') {
      ctor = childComponent
    }
    if (ctor) {
      // set up high order component link

      let childProps = getNodeProps(rendered)
      inst = initialChildComponent

      if (inst && inst.constructor === ctor && childProps.key == inst.__key) {
        setComponentProps(inst, childProps, SYNC_RENDER, context, false)
      } else {
        toUnmount = inst

        component._component = inst = createComponent(ctor, childProps, context)
        inst.nextBase = inst.nextBase || nextBase
        inst._parentComponent = component
        setComponentProps(inst, childProps, NO_RENDER, context, false)
        renderComponent(inst, SYNC_RENDER, mountAll, true)
      }

      base = inst.base
    } else {
      cbase = initialBase

      // destroy high order component link
      toUnmount = initialChildComponent
      if (toUnmount) {
        cbase = component._component = null
      }

      if (initialBase || renderMode === SYNC_RENDER) {
        if (cbase) cbase._component = null
        base = diff(
          cbase,
          rendered,
          context,
          mountAll || !isUpdate,
          initialBase && initialBase.parentNode,
          true
        )
      }
    }

    if (initialBase && base !== initialBase && inst !== initialChildComponent) {
      let baseParent = initialBase.parentNode
      if (baseParent && base !== baseParent) {
        baseParent.replaceChild(base, initialBase)

        if (!toUnmount) {
          initialBase._component = null
          recollectNodeTree(initialBase, false)
        }
      }
    }

    if (toUnmount) {
      unmountComponent(toUnmount)
    }

    component.base = base
    if (base && !isChild) {
      let componentRef = component,
        t = component
      while ((t = t._parentComponent)) {
        ;(componentRef = t).base = base
      }
      base._component = componentRef
      base._componentConstructor = componentRef.constructor
    }
  }

  if (!isUpdate || mountAll) {
    mounts.push(component)
  } else if (!skip) {
    // Ensure that pending componentDidMount() hooks of child components
    // are called before the componentDidUpdate() hook in the parent.
    // Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
    // flushMounts();

    if (component.componentDidUpdate) {
      component.componentDidUpdate(previousProps, previousState, snapshot)
    }
    if (component.updated) {
      component.updated(previousProps, previousState, snapshot)
    }
    if (options.afterUpdate) options.afterUpdate(component)
  }

  if (component._renderCallbacks != null) {
    while (component._renderCallbacks.length)
      component._renderCallbacks.pop().call(component)
  }

  if (!diffLevel && !isChild) flushMounts()
}

/**
 * Apply the Component referenced by a VNode to the DOM.
 * @param {import('../dom').PreactElement} dom The DOM node to mutate
 * @param {import('../vnode').VNode} vnode A Component-referencing VNode
 * @param {object} context The current context
 * @param {boolean} mountAll Whether or not to immediately mount all components
 * @returns {import('../dom').PreactElement} The created/mutated element
 * @private
 */
export function buildComponentFromVNode(dom, vnode, context, mountAll) {
  let c = dom && dom._component,
    originalComponent = c,
    oldDom = dom,
    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
    isOwner = isDirectOwner,
    props = getNodeProps(vnode)
  while (c && !isOwner && (c = c._parentComponent)) {
    isOwner = c.constructor === vnode.nodeName
  }

  if (c && isOwner && (!mountAll || c._component)) {
    setComponentProps(c, props, ASYNC_RENDER, context, mountAll)
    dom = c.base
  } else {
    if (originalComponent && !isDirectOwner) {
      unmountComponent(originalComponent)
      dom = oldDom = null
    }

    c = createComponent(vnode.nodeName, props, context, vnode)
    if (dom && !c.nextBase) {
      c.nextBase = dom
      // passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
      oldDom = null
    }
    setComponentProps(c, props, SYNC_RENDER, context, mountAll)
    dom = c.base

    if (oldDom && dom !== oldDom) {
      oldDom._component = null
      recollectNodeTree(oldDom, false)
    }
  }

  return dom
}

/**
 * Remove a component from the DOM and recycle it.
 * @param {import('../component').Component} component The Component instance to unmount
 * @private
 */
export function unmountComponent(component) {
  if (options.beforeUnmount) options.beforeUnmount(component)

  let base = component.base

  component._disable = true

  if (component.componentWillUnmount) component.componentWillUnmount()

  if (component.uninstall) component.uninstall()

  if (component.store && component.store.instances) {
    for (let i = 0, len = component.store.instances.length; i < len; i++) {
      if (component.store.instances[i] === component) {
        component.store.instances.splice(i, 1)
        break
      }
    }
  }

  component.base = null

  // recursively tear down & recollect high-order component children:
  let inner = component._component
  if (inner) {
    unmountComponent(inner)
  } else if (base) {
    if (base[ATTR_KEY] != null) applyRef(base[ATTR_KEY].ref, null)

    component.nextBase = base

    removeNode(base)
    recyclerComponents.push(component)

    removeChildren(base)
  }

  applyRef(component.__ref, null)
}
