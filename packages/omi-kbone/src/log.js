import { render, h } from 'omis'

const Comp = <canvas ref="canvas" class="canvas" ref="canvas" canvas-id="canvas" width="300" height="200"></canvas>

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<div >
    <h1>我是log页面</h1>
    <canvas class="canvas" canvas-id="canvas" width="300" height="200"></canvas>
  </div>, '#app')
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()