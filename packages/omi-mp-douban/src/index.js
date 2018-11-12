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

route('../coming_soon/coming_soon', evt => {
  title('coming_soon')
  routeUpdate(<we-coming_soon />, 'we-coming_soon', evt.byNative, root)
})

route('../detail/detail', evt => {
  title('detail')
  routeUpdate(<we-detail />, 'we-detail', evt.byNative, root)
})


window.onscroll = function(){
  root.childNodes.forEach(child => {
    if(child.style.display !== 'none'){
      child._preScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    }
  })
}

function title(value) {
  document.title = value
}
    