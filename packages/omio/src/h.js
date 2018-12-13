import { VNode } from './vnode'
import options from './options'

const stack = []

const EMPTY_CHILDREN = []

const map = {
  br: 'view',
  hr: 'view',

  p: 'view',
  h1: 'view',
  h2: 'view',
  h3: 'view',
  h4: 'view',
  h5: 'view',
  h6: 'view',
  abbr: 'view',
  address: 'view',
  b: 'view',
  bdi: 'view',
  bdo: 'view',
  blockquote: 'view',
  cite: 'view',
  code: 'view',
  del: 'view',
  ins: 'view',
  dfn: 'view',
  em: 'view',
  strong: 'view',
  samp: 'view',
  kbd: 'view',
  var: 'view',
  i: 'view',
  mark: 'view',
  pre: 'view',
  q: 'view',
  ruby: 'view',
  rp: 'view',
  rt: 'view',
  s: 'view',
  small: 'view',
  sub: 'view',
  sup: 'view',
  time: 'view',
  u: 'view',
  wbr: 'view',

  form: 'form',
  input: 'input',
  textarea: 'textarea',
  button: 'button',
  select: 'picker',
  option: 'view',
  optgroup: 'view',
  label: 'label',
  fieldset: 'view',
  datalist: 'picker',
  legend: 'view',
  output: 'view',

  iframe: 'view',

  img: 'image',
  canvas: 'canvas',
  figure: 'view',
  figcaption: 'view',

  audio: 'audio',
  source: 'audio',
  video: 'video',
  track: 'video',

  a: 'navigator',
  nav: 'view',
  link: 'navigator',

  ul: 'view',
  ol: 'view',
  li: 'view',
  dl: 'view',
  dt: 'view',
  dd: 'view',
  menu: 'view',
  command: 'view',

  table: 'view',
  caption: 'view',
  th: 'view',
  td: 'view',
  tr: 'view',
  thead: 'view',
  tbody: 'view',
  tfoot: 'view',
  col: 'view',
  colgroup: 'view',

  div: 'view',
  main: 'view',
  //'span': 'label',
  span: 'text',
  header: 'view',
  footer: 'view',
  section: 'view',
  article: 'view',
  aside: 'view',
  details: 'view',
  dialog: 'view',
  summary: 'view',

  progress: 'progress',
  meter: 'progress',
  head: 'view',
  meta: 'view',
  base: 'text',
  map: 'map',
  area: 'navigator',

  script: 'view',
  noscript: 'view',
  embed: 'view',
  object: 'view',
  param: 'view',

  view: 'view',
  'scroll-view': 'scroll-view',
  swiper: 'swiper',
  icon: 'icon',
  text: 'text',

  checkbox: 'checkbox',
  radio: 'radio',
  picker: 'picker',
  'picker-view': 'picker-view',
  slider: 'slider',
  switch: 'switch',
  navigator: 'navigator',

  image: 'image',
  'contact-button': 'contact-button',
  block: 'block'
}

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
export function h(nodeName, attributes) {
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
  p.nodeName = options.isWeb ? nodeName : map[nodeName]
  p.attributes = attributes == null ? undefined : attributes
  if (children && typeof children[0] === 'string' && !options.isWeb) {
    if (p.attributes) {
      p.attributes.value = children[0]
    } else {
      p.attributes = { value: children[0] }
    }
  } else {
    p.children = children
  }
  p.key = attributes == null ? undefined : attributes.key

  // if a "vnode hook" is defined, pass every created VNode to it
  if (options.vnode !== undefined) options.vnode(p)

  return p
}
