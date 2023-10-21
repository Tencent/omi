import { routes } from './routes'
import { Router} from '../router'


const router = new Router({
  routes,
  renderTo: 'body'
})

