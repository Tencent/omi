import { render, h } from 'preact'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<div >我是log页面</div>, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()