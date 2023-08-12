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
  'dialog',
  'avatar',
  'action-sheet',
  'switch',
  'collapse',
]

const charts = ['bar', 'line', 'scatter', 'pie', 'doughnut', 'radar', 'polar-area', 'bubble', 'barline']

export function registerRouting(rootEl: any) {
  route('/', () => {
    rootEl.update()
  })

  route('/welcome', () => {
    rootEl.update()
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

  route('*', function () {
    console.log('not found')
  })
}
