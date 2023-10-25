import { routes } from './routes'
import { Router} from 'omi-router'


const router = new Router({
  routes,
  renderTo: '#app'
})

