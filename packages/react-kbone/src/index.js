import { render, h } from 'preact'
import Counter from './components/counter'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<Counter />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
