import cax, { html, SVG } from './cax'

function renderSVG(vdom, canvas, scope) {
  const stage = new cax.Stage(vdom.props.width, vdom.props.height, canvas, scope)
  const svg = new SVG(vdom)
  stage.add(svg)
  stage.update()

  return svg.children[0]
}

export {
  renderSVG,
  html
}