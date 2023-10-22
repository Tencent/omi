import { routes } from './routes'
import { Router} from '../src/router'


const router = new Router({
  routes,
  renderTo: 'body'
})

