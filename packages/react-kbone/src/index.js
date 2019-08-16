import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<Counter />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
