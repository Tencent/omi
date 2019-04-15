//https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute

const map = {
  stroke: 'strokeStyle',
  fill: 'fillStyle',
  'stroke-width': 'lineWidth'
}

const attrs = ['stroke', 'fill', 'stroke-width']
export function parseStyle(props) {
  let style = {}
  const cssText = props.style
  if (props['stroke-width']) {
    style.lineWidth = props['stroke-width']
  }
  if (props['stroke']) {
    style.strokeStyle = props['stroke']
  }
  if (props['fill']) {
    style.fillStyle = props['fill']
  }
  if (!cssText) return style
  let cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ')

  let [a, b, rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [a, b, cssTxt]
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
