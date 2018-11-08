import { render } from 'omi'
import 'omi-router'
import './utils/mp'
import './assets/index.css'
import './source/app'
//import store from './store/app-store'
//[todo] set document.title
route('*', p => {
  const ele = document.querySelector('#root').getElementsByTagName('we-logs')[0]
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
