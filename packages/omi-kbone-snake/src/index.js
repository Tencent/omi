import { render, h } from 'omis'
import Index from './components/index'
import store from './stores/index'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<Index />, '#app', store)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
