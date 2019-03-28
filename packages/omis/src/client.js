
import router from './router';
import { merge } from 'omio'

function routerResolve() {
  router.resolve({ pathname: location.pathname, query: {}, client: true }).then(route => {
    merge(route.component, '#app>div', route.data)
  })
}

routerResolve()

if (module.hot) {
  module.hot.accept('./router', () => {
    //这里一定需要重新 router.resolve，不然 hmr 里依赖的组件就丢了，下次就无法 hmr
    routerResolve()
  });
}
