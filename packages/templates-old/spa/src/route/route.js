import '../elements/views/home-page'

import nav1Route from './nav1'
import nav2Route from './nav2'
import errorRoute from './error'

let routeList = [
  {
    label: 'Home',
    path: '/',
    tag: 'home-page'
  }
]
export default routeList.concat(nav1Route, nav2Route, errorRoute)
