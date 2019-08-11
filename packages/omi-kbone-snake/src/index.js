import { render, h } from 'omis'
import Snake from './components/snake'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<Snake />, '#app')
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
