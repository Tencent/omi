import { route } from 'omi-router'
import { showLoading } from '@omiu/toast'

/**
 * demo components
 */
const components = [
  'breadcrumb',
  'bottom-nav',
  'button',
  'badge',
  'cascader',
  'color-picker',
  'checkbox',
  'hamburger-menu',
  'tabs',
  'slider',
  'input',
  'loading',
  'link',
  'toast',
  'toggle-icon',
  'card',
  'radio',
  'progress',
  'pagination',
  'time-picker',
  'tag',
  'tree',
  'rate',
  'dialog',
  'avatar',
  'action-sheet',
  'switch',
  'collapse'
]

const charts = [
  'bar',
  'line',
  'scatter',
  'pie',
  'doughnut',
  'radar',
  'polar-area',
  'bubble',
  'barline'
]

const routes = [
  {
    path: '/mobile',
    component: './components/mobile/mobile-show',
    name: 'mobile-show'
  },

  {
    path: '/table/basic',
    component: './components/table/basic-table',
    name: 'basic-table'
  },
  {
    path: '/basic-list',
    component: './components/basic-list',
    name: 'basic-list'
  },
  {
    path: '/dashboard',
    component: './components/admin-dashboard',
    name: 'admin-dashboard'
  },
  {
    path: '/md-editor',
    component: './components/md-editor',
    name: 'md-editor'
  },
  {
    path: '/table/edit',
    component: './components/table/inline-editing',
    name: 'inline-editing'
  },
  {
    path: '/table/pagination',
    component: './components/table/pagination-table',
    name: 'pagination-table'
  },
  {
    path: '/form',
    component: './components/admin-form',
    name: 'admin-form'
  },
  {
    path: '/steps-form',
    component: './components/steps-form',
    name: 'steps-form'
  },
  {
    path: '/comment',
    component: './components/comment/admin-comment',
    name: 'admin-comment'
  },
  {
    path: '/icon',
    component: './components/admin-icon',
    name: 'admin-icon'
  },

  {
    path: '/mind-map',
    component: './components/mind-map',
    name: 'mind-map'
  },
  {
    path: '/warning',
    component: './components/status/status-warning',
    name: 'status-warning'
  },
  {
    path: '/error',
    component: './components/status/status-error',
    name: 'status-error'
  },
  {
    path: '/results/browser-incompatible',
    component: './components/results/browser-incompatible',
    name: 'browser-incompatible'
  },
  {
    path: '/success',
    component: './components/results/admin-success',
    name: 'admin-success'
  },
  {
    path: '/failure',
    component: './components/results/admin-failure',
    name: 'admin-failure'
  },

  {
    path: '/results/network-error',
    component: './components/results/network-error',
    name: 'network-error'
  },
  {
    path: '/results/not-found',
    component: './components/results/not-found',
    name: 'not-found'
  },
  {
    path: '/results/permission-denied',
    component: './components/results/permission-denied',
    name: 'permission-denied'
  },
  {
    path: '/results/server-error',
    component: './components/results/server-error',
    name: 'server-error'
  },

  {
    path: '/masonry-list',
    component: './components/masonry-list',
    name: 'masonry-list'
  },
  {
    path: '/notification-list',
    component: './components/notification/notification-list',
    name: 'notification-list'
  },
  {
    path: '/personal-center',
    component: './components/account/personal-center',
    name: 'personal-center'
  }
]

export function registerRouting(rootEl) {
  route('/', () => {
    rootEl.update()
  })

  route('/welcome', () => {
    rootEl.transitionTo('admin-main-welcome')
  })

  route('/docs/:name', (evt) => {
    const md = rootEl.getMdByName(evt.params.name, rootEl.store.treeData)
    if (md) {
      md.then((e) => {
        rootEl.payload = { mdContent: e.default, padding: 20 }
        showLoading()
        import('./components/docs/admin-docs').then(() =>
          rootEl.transitionTo('admin-docs')
        )
      })
    }
  })

  routes.forEach((r) => {
    route(r.path, () => {
      showLoading()
      import(/* @vite-ignore */ r.component).then(() =>
        rootEl.transitionTo(r.name)
      )
    })
  })

  components.map((componentName: string) =>
    route(`/${componentName}-component`, () => {
      showLoading()
      import(`./components/components/${componentName}-component.tsx`).then(
        () => rootEl.transitionTo(`${componentName}-component`)
      )
    })
  )

  charts.map((chartName: string) =>
    route(`/${chartName}-chart`, () => {
      showLoading()
      import(`./components/charts/${chartName}-chart.tsx`).then(
        () => rootEl.transitionTo(`${chartName}-chart`)
      )
    })
  )

  route('*', function () {
    console.log('not found')
  })
}
