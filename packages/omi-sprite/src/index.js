import { WeElement, define } from 'omi'
import { Scene, stylesheet } from 'spritejs'

import h from 'snabbdom/h'
import attributes from 'snabbdom/modules/attributes'
import props from 'snabbdom/modules/props'
import * as api from './nodeapi'

const snabbdom = require('snabbdom')

const {create, update} = attributes

function updateEvents(oldVnode, vnode) {
  const oldEvents = oldVnode.events,
    attrs = vnode.data.attrs

  if(oldVnode.elm && oldEvents) {
    oldEvents.forEach(([type, f]) => {
      oldVnode.elm.removeEventListener(type, f)
    })
  }
  if(vnode.elm && attrs) {
    Object.entries(attrs).forEach(([key, val]) => {
      if(key.indexOf('on') === 0 && typeof val === 'function') {
        vnode.elm.addEventListener(key.slice(2).toLowerCase(), val)
        vnode.events = vnode.events || []
        vnode.events.push([key, val])
        delete attrs[key]
      }
    })
  }
}

function createAttrs(oldVnode, vnode) {
  updateEvents(oldVnode, vnode)
  return create(oldVnode, vnode)
}

function updateAttrs(oldVnode, vnode) {
  updateEvents(oldVnode, vnode)
  return update(oldVnode, vnode)
}

const patch = snabbdom.init([
  {
    create: createAttrs,
    update: updateAttrs,
  },
  props,
], api)

function parseVNode(vdom) {
  const {nodeName, key, attributes: attrs, children} = vdom
  let sel = nodeName
  if(attrs && attrs.id) sel = `${sel}#${attrs.id}`
  const props = {attrs}
  if(key) props.key = key
  return h(sel, props, children.map(child => parseVNode(child)))
}

define('omi-sprite', class extends WeElement {
  install() {

  }

  installed() {
    if(this.shadowRoot && this.shadowRoot.styleSheets) {
      stylesheet.fromDocumentCSS(this.shadowRoot.styleSheets)
    }
    let node = this
    while(node) {
      const styleSheets = node.styleSheets
      if(styleSheets) {
        stylesheet.fromDocumentCSS(styleSheets)
      }
      node = node.parentNode
    }
    this.scene = new Scene(this.container, this.props)
    render(this.scene, this.props.children)
  }

  afterUpdate() {
    render(this.scene, this.props.children)
  }

  render(props) {
    return (
      <div ref={e => { this.container = e }}
        viewport={ props.viewport }
        resolution={ props.resolution }>
      </div>
    )
  }
})


function render(scene, children) {
  children.forEach((layer) => {
    if(!layer.attributes.id) layer.attributes.id = `layer_${Math.random().toString(36).slice(2)}`
    const layerEl = scene.layer(layer.attributes.id)
    patch(layerEl, parseVNode(layer))
  })
}
