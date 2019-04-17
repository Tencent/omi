import cax, { html, SVG } from './cax'

function renderSVG(vdom, canvas, scope) {
  const w = vdom.props ? vdom.props.width : 300
  const h = vdom.props ? vdom.props.height : 150
  const stage = new cax.Stage(
    w,
    h,
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
