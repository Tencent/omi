const map = {
  'stroke': 'strokeStyle',
  'fill': 'fillStyle',
  'stroke-width':'lineWidth'
}


export function parseStyle(cssText) {
  if(!cssText) return 
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


  return style
}
