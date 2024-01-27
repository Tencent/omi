import { routes } from './routes'
import { Router} from 'omi-router'
import './tailwind'

new Router({
  routes,
  renderTo: '#app'
})

