import cax, { html, SVG } from './index'

function svg(vdom, canvas, scope) {
  const stage = new cax.Stage(vdom.props.width, vdom.props.height, canvas, scope)
  const svg = new SVG(vdom)
  stage.add(svg)
  stage.update()

  return { svg, stage }
}

export {
  svg,
  html
}