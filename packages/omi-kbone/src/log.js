import { render, h } from 'omis'

const Comp = (prop, store, _) => {
  return <canvas class="canvas" ref={ele => { _.canvas = ele }} canvas-id="canvas" width="400" height="200"></canvas>
}

Comp.store = _ => {
  return {
    installed() {
      const canvas = _.canvas
      canvas.$$getContext().then(ctx => {
        ctx.setStrokeStyle("#00ff00")
        ctx.setLineWidth(5)
        ctx.rect(0, 0, 200, 200)
        ctx.stroke()
        ctx.setStrokeStyle("#ff0000")
        ctx.setLineWidth(2)
        ctx.moveTo(160, 100)
        ctx.arc(100, 100, 60, 0, 2 * Math.PI, true)
        ctx.moveTo(140, 100)
        ctx.arc(100, 100, 40, 0, Math.PI, false)
        ctx.moveTo(85, 80)
        ctx.arc(80, 80, 5, 0, 2 * Math.PI, true)
        ctx.moveTo(125, 80)
        ctx.arc(120, 80, 5, 0, 2 * Math.PI, true)
        ctx.stroke()
        ctx.draw()
      })
    }
  }
}

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<div >
    <h1>我是log页面</h1>
    <Comp></Comp>
  </div>, '#app')
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()