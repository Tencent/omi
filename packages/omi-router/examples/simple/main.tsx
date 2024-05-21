import { routes } from './routes'
import { Router } from '../../src/router'
import '../tailwind'

const router = new Router({
  routes,
  renderTo: 'body',
  // hash: false,
})
