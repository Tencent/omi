import { WeElement } from 'omi'
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
  'message',
  'dialog',
  'avatar',
  'action-sheet',
  'switch',
  'collapse',
]

const charts = ['bar', 'line', 'scatter', 'pie', 'doughnut', 'radar', 'polar-area', 'bubble', 'barline']

export function registerRouting(rootEl: any) {
  route('/', () => {
    import('../docs/overview').then(() => {
      rootEl.data.tagName = 'page-overview'
      rootEl.update()
    })
  })

  route('/welcome', () => {
    import('../docs/overview').then(() => {
      rootEl.data.tagName = 'page-overview'
      rootEl.update()
    })
  })

  route('/button', () => {
    import('./components/web/button/button').then(() => {
      rootEl.data.tagName = 'page-button'
      rootEl.update()
    })
  })

  route('/alert', () => {
    import('./components/web/alert/index').then(() => {
      rootEl.data.tagName = 'page-alert'
      rootEl.update()
    })
  })

  route('/slider', () => {
    import('./components/web/slider/index').then(() => {
      rootEl.data.tagName = 'page-slider'
      rootEl.update()
    })
  })

  route('/input', () => {
    import('./components/web/input').then(() => {
      rootEl.data.tagName = 'page-input'
      rootEl.update()
    })
  })

  route('/link', () => {
    import('./components/web/link/index').then(() => {
      rootEl.data.tagName = 'page-link'
      rootEl.update()
    })
  })

  route('/message', () => {
    import('./components/web/message/index').then(() => {
      rootEl.data.tagName = 'page-message'
      rootEl.update()
    })
  })

  route('/notification', () => {
    import('./components/web/notification/index').then(() => {
      rootEl.data.tagName = 'page-notification'
      rootEl.update()
    })
  })

  route('/divider', () => {
    import('./components/web/divider/index').then(() => {
      rootEl.data.tagName = 'page-divider'
      rootEl.update()
    })
  })

  route('/space', () => {
    import('./components/web/space/index').then(() => {
      rootEl.data.tagName = 'page-space'
      rootEl.update()
    })
  })

  route('/rate', () => {
    import('./components/web/rate/index').then(() => {
      rootEl.data.tagName = 'page-rate'
      rootEl.update()
    })
  })

  route('/comment', () => {
    import('./components/web/comment/index').then(() => {
      rootEl.data.tagName = 'page-comment'
      rootEl.update()
    })
  })

  route('/icon', () => {
    import('./components/web/icon/index').then(() => {
      rootEl.data.tagName = 'page-icon'
      rootEl.update()
    })
  })

  route('/input-adornment', () => {
    import('./components/web/input-adornment/index').then(() => {
      rootEl.data.tagName = 'page-input-adornment'
      rootEl.update()
    })
  })

  route('/popup', () => {
    import('./components/web/popup/index').then(() => {
      rootEl.data.tagName = 'page-popup'
      rootEl.update()
    })
  })

  route('*', function () {
    console.log('not found')
  })
}
