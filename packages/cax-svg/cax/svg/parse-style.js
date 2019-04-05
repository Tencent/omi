
export function parseStyle(cssText) {
  let cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ')
  let style = {},
    [a, b, rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [a, b, cssTxt]
  let cssToJs = s => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase())
  let properties = rule
    .split(';')
    .map(o => o.split(':').map(x => x && x.trim()))
  for (let [property, value] of properties) style[cssToJs(property)] = value
  return style
}
