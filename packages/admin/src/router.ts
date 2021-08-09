import { route } from 'omi-router'

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

  route('/loading-component', () => {
    //lazy load
    import('./components/components/loading-component').then(() =>
      rootEl.transitionTo('loading-component')
    )
  })

  route('/toast-component', () => {
    //lazy load
    import('./components/components/toast-component').then(() =>
      rootEl.transitionTo('toast-component')
    )
  })

  route('/card-component', () => {
    //lazy load
    import('./components/components/card-component').then(() =>
      rootEl.transitionTo('card-component')
    )
  })

  route('/time-picker-component', () => {
    //lazy load
    import('./components/components/time-picker-component').then(() =>
      rootEl.transitionTo('time-picker-component')
    )
  })

  route('/slider-component', () => {
    //lazy load
    import('./components/components/slider-component').then(() =>
      rootEl.transitionTo('slider-component')
    )
  })

  route('/button', () => {
    //lazy load
    import('./components/components/button-component').then(() =>
      rootEl.transitionTo('button-component')
    )
  })

  route('/tabs', () => {
    //lazy load
    import('./components/components/tabs-component').then(() =>
      rootEl.transitionTo('tabs-component')
    )
  })

  route('/progress-component', () => {
    //lazy load
    import('./components/components/progress-component').then(() =>
      rootEl.transitionTo('progress-component')
    )
  })

  route('/slider-component', () => {
    //lazy load
    import('./components/components/slider-component').then(() =>
      rootEl.transitionTo('slider-component')
    )
  })

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

  route('*', function () {
    console.log('not found')
  })
}
