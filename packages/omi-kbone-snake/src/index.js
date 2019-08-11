import { render, h } from 'omis'
import Todo from './components/todo'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<Todo />, '#app')
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
