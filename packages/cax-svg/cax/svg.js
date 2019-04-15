import cax, { html, SVG } from './cax'

function renderSVG(vdom, canvas, scope) {
  const stage = new cax.Stage(
    vdom.props.width,
    vdom.props.height,
    canvas,
    scope
  )
  const svg = new SVG(vdom)
  stage.add(svg)
  stage.update()
  triggerAddedStage(svg)
  return svg.children[0]
}

function triggerAddedStage(svg) {
  svg.addedStage && svg.addedStage()

  svg.children &&
    svg.children.forEach(child => {
      triggerAddedStage(child)
    })
}

export { renderSVG, html }
