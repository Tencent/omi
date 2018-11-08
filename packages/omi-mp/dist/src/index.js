import { render } from 'omi'
import 'omi-router'
import './utils/mp'
import './assets/index.css'
import './mp/app'
//import store from './store/app-store'

route('*', p => {
  const ele = document
  .querySelector('#root')
  .getElementsByTagName('we-logs')[0]
  ele && ele.remove()
  render(<we-index />, '#root')
})

route('../logs/logs', p => {
  const ele = document
    .querySelector('#root')
    .getElementsByTagName('we-index')[0]
  ele && ele.remove()
  render(<we-logs />, '#root')
})
