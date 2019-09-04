import { render, h } from 'omio'
import './components/index'
import store from './stores/index'
import './assets/index.css'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<my-index />, '#app', store)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
