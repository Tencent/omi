import { render } from 'omi'
import 'omi-router'
import './utils/mp'
import './mp/app'

route('*', evt => {
  title('index')
  empty('#root')
  render(<we-index />, '#root')
})

route('../index/index', evt => {
  title('index')
  empty('#root')
  render(<we-index />, '#root')
})

route('../logs/logs', evt => {
  title('logs')
  empty('#root')
  render(<we-logs />, '#root')
})

function empty(selector) {
  const node = document.querySelector(selector)
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

function title(value) {
  document.title = value
}
