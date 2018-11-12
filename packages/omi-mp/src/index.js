import 'omi-router'
import { routeUpdate } from './utils/mp'
import './mp/app'

const root = document.querySelector('#root')

route('*', evt => {
  title('index')
  routeUpdate(<we-index />, 'we-index', evt.byNative, root)
})

route('../index/index', evt => {
  title('index')
  routeUpdate(<we-index />, 'we-index', evt.byNative, root)
})

route('../logs/logs', evt => {
  title('logs')
  routeUpdate(<we-logs />, 'we-logs', evt.byNative, root)
})

function title(value) {
  document.title = value
}
