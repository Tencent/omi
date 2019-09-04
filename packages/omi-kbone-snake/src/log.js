import { render, h } from 'omio'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<div >我是log页面</div>, '#app')
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()