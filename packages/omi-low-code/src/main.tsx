import { routes } from './routes'
import { Router } from 'omi-router'
import './tailwind/index'

const router = new Router({
  routes,
  renderTo: '#app',
})

router.afterEach(() => {
  window.refreshDark()
})
