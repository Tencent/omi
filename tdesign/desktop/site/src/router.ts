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
  'kanban',
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

export function registerRouting(rootEl) {
  route('/', () => {
    rootEl.update()
  })

  route('/welcome', () => {
    rootEl.transitionTo('admin-main-welcome')
  })

  route('/mobile', () => {
    showLoading()
    import('./components/mobile/mobile-show').then(() =>
      rootEl.transitionTo('mobile-show')
    )
  })

  route('/table/basic', () => {
    showLoading()
    import('./components/table/basic-table').then(() =>
      rootEl.transitionTo('basic-table')
    )
  })

  route('/basic-list', () => {
    showLoading()
    import('./components/basic-list').then(() =>
      rootEl.transitionTo('basic-list')
    )
  })

  route('/dashboard', () => {
    showLoading()
    import('./components/admin-dashboard').then(() =>
      rootEl.transitionTo('admin-dashboard')
    )
  })

  route('/md-editor', () => {
    showLoading()
    import('./components/md-editor').then(() =>
      rootEl.transitionTo('md-editor')
    )
  })

  route('/table/edit', () => {
    showLoading()
    import('./components/table/inline-editing').then(() =>
      rootEl.transitionTo('inline-editing')
    )
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


  route('/table/pagination', () => {
    showLoading()
    import('./components/table/pagination-table').then(() =>
      rootEl.transitionTo('pagination-table')
    )
  })

  route('/form', () => {
    showLoading()
    import('./components/admin-form').then(() =>
      rootEl.transitionTo('admin-form')
    )
  })

  route('/steps-form', () => {
    showLoading()
    import('./components/steps-form').then(() =>
      rootEl.transitionTo('steps-form')
    )
  })

  route('/comment', () => {
    showLoading()
    import('./components/comment/admin-comment').then(() =>
      rootEl.transitionTo('admin-comment')
    )
  })

  route('/icon', () => {
    showLoading()
    import('./components/admin-icon').then(() =>
      rootEl.transitionTo('admin-icon')
    )
  })

  route('/error', () => {
    showLoading()
    import('./components/status/status-error').then(() =>
      rootEl.transitionTo('status-error')
    )
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

  route('/mind-map', () => {
    showLoading()
    import('./components/mind-map').then(() => rootEl.transitionTo('mind-map'))
  })

  route('/warning', () => {
    showLoading()
    import('./components/status/status-warning').then(() =>
      rootEl.transitionTo('status-warning')
    )
  })

  route('/results/browser-incompatible', () => {
    showLoading()
    import('./components/results/browser-incompatible').then(() =>
      rootEl.transitionTo('browser-incompatible')
    )
  })

  route('/success', () => {
    showLoading()
    import('./components/results/admin-success').then(() =>
      rootEl.transitionTo('admin-success')
    )
  })

  route('/failure', () => {
    showLoading()
    import('./components/results/admin-failure').then(() =>
      rootEl.transitionTo('admin-failure')
    )
  })

  route('/results/network-error', () => {
    showLoading()
    import('./components/results/network-error').then(() =>
      rootEl.transitionTo('network-error')
    )
  })

  route('/results/not-found', () => {
    showLoading()
    import('./components/results/not-found').then(() =>
      rootEl.transitionTo('not-found')
    )
  })

  route('/results/permission-denied', () => {
    showLoading()
    import('./components/results/permission-denied').then(() =>
      rootEl.transitionTo('permission-denied')
    )
  })

  route('/results/server-error', () => {
    showLoading()
    import('./components/results/server-error').then(() =>
      rootEl.transitionTo('server-error')
    )
  })

  route('/masonry-list', () => {
    showLoading()
    import('./components/masonry-list').then(() =>
      rootEl.transitionTo('masonry-list')
    )
  })

  route('/notification-list', () => {
    showLoading()
    import('./components/notification/notification-list').then(() =>
      rootEl.transitionTo('notification-list')
    )
  })

  route('/personal-center', () => {
    showLoading()
    import('./components/account/personal-center').then(() =>
      rootEl.transitionTo('personal-center')
    )
  })

  route('*', function () {
    console.log('not found')
  })
}
