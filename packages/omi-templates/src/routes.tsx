import 'omi-suspense'
import './index.css'
import { SiteLayout } from './components/site-layout'
import { AdminLayout } from './components/admin-layout'
import { ComponentLayout } from './components/component-layout'
import { pending } from './components/pending'
import { fallback } from './components/fallback'
import { Router } from 'omi-router'
import { Component } from 'omi'
import './components/appear'

export const routes = [
  createRoute('/', () => import('./pages/home')),
  createRoute('/about', () => import('./pages/about')),
  createRoute('/portfolio', () => import('./pages/portfolio')),
  createRoute('/blog', () => import('./pages/blog')),
  createRoute('/company', () => import('./pages/company')),
  createRoute('/meeting', () => import('./pages/meeting')),
  createRoute('/charity', () => import('./pages/charity')),
  createRoute('/product/:id', () => import('./pages/product')),
  createRoute('/education', () => import('./pages/education')),
  createRoute('/news', () => import('./pages/news/home')),
  createRoute('/news/example', () => import('./pages/news/example')),
  createRoute('/food',() => import('./pages/food')),

  createRoute('/chat', () => import('./pages/chat')),
  createRoute('/components', () => import('./pages/components')),
  createRoute('/questionnaire', () => import('./pages/questionnaire')),
  createRoute('/results/success', () => import('./pages/results/success')),
  createRoute('/results/fail', () => import('./pages/results/fail')),
  createRoute('/results/browser-not-support', () => import('./pages/results/browser-not-support')),
  createRoute('/results/forbidden', () => import('./pages/results/forbidden')),
  createRoute('/results/network-error', () => import('./pages/results/network-error')),
  createRoute('/results/server-error', () => import('./pages/results/server-error')),
  createRoute('/results/system-maintenance', () => import('./pages/results/system-maintenance')),
  createRoute('/results/not-found', () => import('./pages/results/not-found')),
  createDocsRoute('/product-docs/:lang/:section', () => import('./pages/product-docs')),
  createRoute('/icons', () => import('./pages/icons')),
  createRoute('/personal', () => import('./pages/personal')),
  createBaseRoute('/login', () => import('./pages/login')),
  createAdminRoute('/admin/home', () => import('./pages/admin/home')),
  createAdminRoute('/admin/chart', () => import('./pages/admin/chart')),
  createComponentRoute('/components/button', () => import('./pages/components/button')),
  createComponentRoute('/components/icon', () => import('./pages/components/icon')),
  createComponentRoute('/components/switch', () => import('./pages/components/switch')),
  createComponentRoute('/components/breadcrumb', () => import('./pages/components/breadcrumb')),
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
            minLoadingTime={400}
            imports={[componentImport()]}
            customRender={(results: { [x: string]: Function }[]) => {
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  {results[0][Object.keys(results[0])[0]](router.params)}
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
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

function createComponentRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <ComponentLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={400}
            imports={[componentImport()]}
            customRender={(results: { [x: string]: Function }[]) => {
              const Module = results[0][Object.keys(results[0])[0]]
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  {isClassOrFunction(Module) === 'Function' ? Module(router.params) : <Module></Module>}
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
            pending={pending}
            onLoaded={() => {
              window.refreshDark()
            }}
          ></o-suspense>
        </ComponentLayout>
      )
    },
  }
}

function createAdminRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <AdminLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={400}
            imports={[componentImport()]}
            customRender={(results: { [x: string]: Function }[]) => {
              const Module = results[0][Object.keys(results[0])[0]]
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  {isClassOrFunction(Module) === 'Function' ? Module(router.params) : <Module></Module>}
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
            pending={pending}
            onLoaded={() => {
              window.refreshDark()
            }}
          ></o-suspense>
        </AdminLayout>
      )
    },
  }
}

function createBaseRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <o-suspense
          minLoadingTime={400}
          imports={[componentImport()]}
          customRender={(results: { [x: string]: Function }[]) => {
            return (
              <o-appear
                class="opacity-0 translate-y-4"
                onReady={() => {
                  window.refreshDark()
                  window.scrollTo(0, 0)
                }}
              >
                {results[0][Object.keys(results[0])[0]](router.params)}
              </o-appear>
            )
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

function createDocsRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <SiteLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={400}
            imports={[componentImport(), import(`./docs/${router.params.lang}/${router.params.section}.md?raw`)]}
            customRender={(results: { [x: string]: Function }[]) => {
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  <product-docs
                    markdownContent={results[1].default}
                    lang={router.params.lang}
                    section={router.params.section}
                  ></product-docs>
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
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

function isClassOrFunction(obj: any) {
  if (typeof obj !== 'function') {
    return 'Not a function or class'
  }

  if (obj.prototype && obj.prototype.constructor === obj) {
    if (obj.toString().startsWith('class ')) {
      return 'Class'
    } else {
      return 'Function'
    }
  }
  return 'Not a function or class'
}
