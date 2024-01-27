import 'omi-suspense'
import './index.css'
import { SiteLayout } from './components/site-layout'
import { pending } from './components/pending'
import { fallback } from './components/fallback'
import { Router } from 'omi-router'

export const routes = [
  createRoute('/', () => import('./pages/home')),
  createRoute('/about', () => import('./pages/about')),
  createRoute('/product/:id', () => import('./pages/product')),
  createRoute('/chat', () => import('./pages/chat')),
  createRoute('/questionnaire', () => import('./pages/questionnaire')),
  createRoute('/results/success', () => import('./pages/results/success')),
  createRoute('/results/fail', () => import('./pages/results/fail')),
  createRoute('/results/browser-not-support', () => import('./pages/results/browser-not-support')),
  createRoute('/results/forbidden', () => import('./pages/results/forbidden')),
  createRoute('/results/network-error', () => import('./pages/results/network-error')),
  createRoute('/results/server-error', () => import('./pages/results/server-error')),
  createRoute('/results/system-maintenance', () => import('./pages/results/system-maintenance')),
  createRoute('/results/not-found', () => import('./pages/results/not-found')),
  createRoute('/product-docs', () => import('./pages/product-docs')),
  createRoute('/personal', () => import('./pages/personal')),
  createLoginRoute('/login', () => import('./pages/login')),
  createRoute('*', () => import('./pages/results/not-found')),
  {
    path: '/before-enter/test',
    beforeEnter: () => {
      // reject the navigation
      return false
    },
  },
]

function createRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <SiteLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={600}
            imports={[componentImport()]}
            customRender={(results: { [x: string]: Function }[]) => {
              return results[0][Object.keys(results[0])[0]](router.params)
            }}
            fallback={fallback}
            pending={pending}
            onLoaded={() => {
              window.refreshDark()
            }}
          ></o-suspense>
        </SiteLayout>
      )
    },
  }
}

function createLoginRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <o-suspense
          minLoadingTime={600}
          imports={[componentImport()]}
          customRender={(results: { [x: string]: Function }[]) => {
            return results[0][Object.keys(results[0])[0]](router.params)
          }}
          fallback={fallback}
          pending={pending}
          onLoaded={() => {
            window.refreshDark()
          }}
        ></o-suspense>
      )
    },
  }
}
