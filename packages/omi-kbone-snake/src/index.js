import { render, h } from 'omis'
import Snake from './components/snake'
import store from './stores/index'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<Snake />, '#app', store)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
