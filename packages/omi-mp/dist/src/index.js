import { render } from 'omi'
import 'omi-router'
import './utils/mp'
import './assets/index.css'
import './mp/app'
import store from './store/app-store'

route('../logs/logs', p => {
  render(<we-logs />, '#root')
})

render(<we-index />, '#root', store)
