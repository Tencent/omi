import { route } from 'omi-router'

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
  'Input',
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

  route('/table/basic', () => {
    //lazy load
    import('./components/table/basic-table').then(() =>
      rootEl.transitionTo('basic-table')
    )
  })

  route('/basic-list', () => {
    //lazy load
    import('./components/basic-list').then(() =>
      rootEl.transitionTo('basic-list')
    )
  })

  route('/dashboard', () => {
    //lazy load
    import('./components/admin-dashboard').then(() =>
      rootEl.transitionTo('admin-dashboard')
    )
  })

  route('/md-editor', () => {
    //lazy load
    import('./components/md-editor').then(() =>
      rootEl.transitionTo('md-editor')
    )
  })

  route('/table/edit', () => {
    //lazy load
    import('./components/table/inline-editing').then(() =>
      rootEl.transitionTo('inline-editing')
    )
  })

  route('/docs/:name', (evt) => {
    //lazy load
    const md = rootEl.getMdByName(evt.params.name, rootEl.store.treeData)
    md.then((e) => {
      rootEl.payload = { mdContent: e.default, padding: 20 }
      import('./components/docs/admin-docs').then(() =>
        rootEl.transitionTo('admin-docs')
      )
    })
  })


  route('/table/pagination', () => {
    //lazy load
    import('./components/table/pagination-table').then(() =>
      rootEl.transitionTo('pagination-table')
    )
  })

  route('/form', () => {
    //lazy load
    import('./components/admin-form').then(() =>
      rootEl.transitionTo('admin-form')
    )
  })

  route('/steps-form', () => {
    //lazy load
    import('./components/steps-form').then(() =>
      rootEl.transitionTo('steps-form')
    )
  })

  route('/comment', () => {
    //lazy load
    import('./components/comment/admin-comment').then(() =>
      rootEl.transitionTo('admin-comment')
    )
  })

  route('/icon', () => {
    //lazy load
    import('./components/admin-icon').then(() =>
      rootEl.transitionTo('admin-icon')
    )
  })

  route('/error', () => {
    //lazy load
    import('./components/status/status-error').then(() =>
      rootEl.transitionTo('status-error')
    )
  })

  components.map((componentName: string) =>
    route(`/${componentName}-component`, () => {
      //lazy load
      import(`./components/components/${componentName}-component.tsx`).then(
        () => rootEl.transitionTo(`${componentName}-component`)
      )
    })
  )

  charts.map((chartName: string) =>
    route(`/${chartName}-chart`, () => {
      //lazy load
      import(`./components/charts/${chartName}-chart.tsx`).then(
        () => rootEl.transitionTo(`${chartName}-chart`)
      )
    })
  )

  route('/mind-map', () => {
    //lazy load
    import('./components/mind-map').then(() => rootEl.transitionTo('mind-map'))
  })

  route('/warning', () => {
    //lazy load
    import('./components/status/status-warning').then(() =>
      rootEl.transitionTo('status-warning')
    )
  })

  route('/results/browser-incompatible', () => {
    //lazy load
    import('./components/results/browser-incompatible').then(() =>
      rootEl.transitionTo('browser-incompatible')
    )
  })

  route('/success', () => {
    //lazy load
    import('./components/results/admin-success').then(() =>
      rootEl.transitionTo('admin-success')
    )
  })

  route('/failure', () => {
    //lazy load
    import('./components/results/admin-failure').then(() =>
      rootEl.transitionTo('admin-failure')
    )
  })

  route('/results/network-error', () => {
    //lazy load
    import('./components/results/network-error').then(() =>
      rootEl.transitionTo('network-error')
    )
  })

  route('/results/not-found', () => {
    //lazy load
    import('./components/results/not-found').then(() =>
      rootEl.transitionTo('not-found')
    )
  })

  route('/results/permission-denied', () => {
    //lazy load
    import('./components/results/permission-denied').then(() =>
      rootEl.transitionTo('permission-denied')
    )
  })

  route('/results/server-error', () => {
    //lazy load
    import('./components/results/server-error').then(() =>
      rootEl.transitionTo('server-error')
    )
  })

  route('/masonry-list', () => {
    //lazy load
    import('./components/masonry-list').then(() =>
      rootEl.transitionTo('masonry-list')
    )
  })

  route('/notification-list', () => {
    //lazy load
    import('./components/notification/notification-list').then(() =>
      rootEl.transitionTo('notification-list')
    )
  })

  route('/personal-center', () => {
    //lazy load
    import('./components/account/personal-center').then(() =>
      rootEl.transitionTo('personal-center')
    )
  })

  route('*', function () {
    console.log('not found')
  })
}
