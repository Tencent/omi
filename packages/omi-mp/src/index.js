import { render } from 'omi'
import 'omi-router'
import './utils/mp'
import './mp/app'

route('*', p => {
  title('index')
  empty('#root')
  render(<we-index />, '#root')
})

route('../index/index', p => {
  title('index')
  empty('#root')
  render(<we-index />, '#root')
})

route('../logs/logs', p => {
  title('logs')
  empty('#root')
  render(<we-logs />, '#root')
})

function empty(selector) {
  const node = document.querySelector(selector)
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

function title(value) {
  document.title = value
}
