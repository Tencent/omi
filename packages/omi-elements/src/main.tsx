import { routes } from './routes'
import { Router } from './components/router'

const router = new Router({
  routes,
  renderTo: '#app',
})
