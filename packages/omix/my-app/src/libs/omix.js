
function define(){

}

class Component {
  constructor(){
    this.a = 1
  }
}


const WeElement = Component



function VNode() {}

const stack = []
const EMPTY_CHILDREN = []

function h(nodeName, attributes) {
  let children = EMPTY_CHILDREN,
    lastSimple,
    child,
    simple,
    i
  for (i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i])
  }
  if (attributes && attributes.children != null) {
    if (!stack.length) stack.push(attributes.children)
    delete attributes.children
  }
  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--; ) stack.push(child[i])
    } else {
      if (typeof child === 'boolean') child = null

      if ((simple = typeof nodeName !== 'function')) {
        if (child == null) child = ''
        else if (typeof child === 'number') child = String(child)
        else if (typeof child !== 'string') simple = false
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child
      } else if (children === EMPTY_CHILDREN) {
        children = [child]
      } else {
        children.push(child)
      }

      lastSimple = simple
    }
  }

  let p = new VNode()
  p.nodeName = nodeName
  p.children = children
  p.attributes = attributes == null ? undefined : attributes
  p.key = attributes == null ? undefined : attributes.key

  return p
}


function getGlobal() {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    return (
      self ||
      window ||
      global ||
      (function() {
        return this
      })()
    )
  }
  return global
}

const root  = getGlobal()
const mapping = {}
let config = {}

const definePage  = function(name, ctor, path ){
  mapping[path] ={
    name,
    ctor
  }
}
const defineApp  = function(a,b){
  const ins = new b()
  config = ins.config
}

function render(){
  console.error(mapping[config.pages[0]])
}

root.Omi = {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp

}
root.omi = root.Omi
root.omix = root.Omi
root.Omix = root.Omi

export  {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp
}

export default {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp
}
