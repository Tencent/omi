//https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute

const map = {
  'stroke': 'strokeStyle',
  'fill': 'fillStyle',
  'stroke-width': 'lineWidth'
}

const attrs = ['stroke', 'fill', 'stroke-width']
export function parseStyle(props) {
  const cssText = props.style
  if (!cssText) return
  let cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ')

  let style = {},
    [a, b, rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [a, b, cssTxt]
  //let cssToJs = s => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase())

  let properties = rule
    .split(';')
    .map(o => o.split(':').map(x => x && x.trim()))

  for (let [property, value] of properties) {
    property && (style[map[property]] = value)
  }

  attrs.forEach(attr => {
    if (props.hasOwnProperty(attr)) {
      style[map[attr]] = props[attr]
    }
  })
  return style
}
