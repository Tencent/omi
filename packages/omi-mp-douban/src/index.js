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

route('../coming_soon/coming_soon', p => {
  title('coming_soon')
  empty('#root')
  render(<we-coming_soon />, '#root')
})

route('../detail/detail', p => {
  title('detail')
  empty('#root')
  render(<we-detail />, '#root')
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
    