import 'omi-suspense'
import './index.css'
import './site/site-header'
import './site/side-nav'
import './site/content-nav'
import { updateMenu } from './site/content-nav'
import { signal } from 'omi'
import 'omi-transition'
import './navigation/tabs/tabs'

const showPage = signal(true)

export const activeTab = signal('overview')

declare global {
  interface Window {
    refreshDark(): void
  }
}

export const routes = [
  {
    path: '/',
    meta: {},
    render() {
      return (
        <>
          <site-header></site-header>
          <div class="flex">
            <side-nav class="block" onClick={(evt: MouseEvent) => evt.stopPropagation()}></side-nav>
            <o-suspense
              imports={[import('./home-page')]}
              onDataLoaded={window.refreshDark}
              class="flex-1 ml-10 mr-10 lg:pl-60"
            >
              <home-page />
            </o-suspense>
          </div>
        </>
      )
    },
  },
  {
    path: '*',
    render() {
      return (
        <>
          <site-header></site-header>
          <div class="flex">
            <side-nav class="block w-60"></side-nav>
            <div class="flex-1 ml-10 mr-10 w-0 pt-10">
              <h1 class="text-xl">In progress, coming soon....</h1>
            </div>
          </div>
        </>
      )
    },
  },
]

const components = [
  {
    name: 'accordion',
    overview: () => import('./components/accordion/page'),
    api: () => import('./components/accordion/api'),
  },
  {
    name: 'avatar',
    overview: () => import('./components/avatar/page'),
    api: () => import('./components/avatar/api'),
  },
  {
    name: 'alert',
    overview: () => import('./components/alert/page'),
    api: () => import('./components/alert/api'),
  },
  {
    name: 'badge',
    overview: () => import('./components/badge/page'),
    api: () => import('./components/badge/api'),
  },
  {
    name: 'button',
    overview: () => import('./components/button/page'),
    api: () => import('./components/button/api'),
  },
  {
    name: 'button-group',
    overview: () => import('./components/button-group/page'),
    api: () => import('./components/button-group/api'),
  },
  {
    name: 'collapse',
    overview: () => import('./components/collapse/page'),
    api: () => import('./components/collapse/api'),
  },
  {
    name: 'card',
    overview: () => import('./components/card/page'),
    api: () => import('./components/card/api'),
  },
  {
    name: 'chip',
    overview: () => import('./components/chip/page'),
    api: () => import('./components/chip/api'),
  },
  {
    name: 'swiper',
    overview: () => import('./components/swiper/page'),
    api: () => import('./components/swiper/api'),
  },
  {
    name: 'skeleton',
    overview: () => import('./components/skeleton/page'),
    api: () => import('./components/skeleton/api'),
  },
  {
    name: 'dropdown',
    overview: () => import('./components/dropdown/page'),
    api: () => import('./components/dropdown/api'),
  },

  {
    name: 'lightbox',
    overview: () => import('./components/lightbox/page'),
    api: () => import('./components/lightbox/api'),
  },

  {
    name: 'input',
    type: 'forms',
    overview: () => import('./forms/input/page'),
    api: () => import('./forms/input/api'),
  },

  {
    name: 'tabs',
    type: 'navigation',
    overview: () => import('./navigation/tabs/page'),
    api: () => import('./navigation/tabs/api'),
  },

  {
    name: 'pdf',
    type: 'data',
    overview: () => import('./data/pdf/page'),
    api: () => import('./data/pdf/api'),
  },

  {
    name: 'chart',
    type: 'data',
    overview: () => import('./data/chart/page'),
    api: () => import('./data/chart/api'),
  },

  {
    name: 'table',
    type: 'data',
    overview: () => import('./data/table/page'),
    api: () => import('./data/table/api'),
  },

  {
    name: 'link',
    type: 'components',
    overview: () => import('./components/link/page'),
    api: () => import('./components/link/api'),
  },

  {
    name: 'list',
    type: 'design-blocks',
    overview: () => import('./design-blocks/list/page'),
  },

  {
    name: 'modal',
    overview: () => import('./components/modal/page'),
    api: () => import('./components/modal/api'),
  },

  {
    name: 'popconfirm',
    overview: () => import('./components/popconfirm/page'),
    api: () => import('./components/popconfirm/api'),
  },

  {
    name: 'popover',
    overview: () => import('./components/popover/page'),
    api: () => import('./components/popover/api'),
  },

  {
    name: 'progress',
    overview: () => import('./components/progress/page'),
    api: () => import('./components/progress/api'),
  },

  {
    name: 'rating',
    overview: () => import('./components/rating/page'),
    api: () => import('./components/rating/api'),
  },

  {
    name: 'date-picker',
    type: 'forms',
    overview: () => import('./forms/date-picker/page'),
    api: () => import('./forms/date-picker/api'),
  },
]

components.forEach((component: { type?: string; name?: string; page?: string; overview: () => unknown }) => {
  routes.unshift({
    path: `/${component.type ? component.type : 'components'}/${component.name}`,
    render() {
      component.page = `${component.name}-${activeTab.value === 'api' ? 'api' : 'page'}`

      return (
        <>
          <site-header></site-header>
          <div class="flex">
            <side-nav class="block" onClick={(evt: MouseEvent) => evt.stopPropagation()}></side-nav>
            <div class="flex-1 ml-10 mr-10 w-0 flex-grow overflow-auto pr-0 lg:pr-40 lg:pl-60">
              {component.type !== 'design-blocks' && (
                <o-tabs pills class="pt-5">
                  <o-tabs-item
                    onClick={() => {
                      activeTab.value = 'overview'
                    }}
                    active={activeTab.value === 'overview'}
                    tag="button"
                  >
                    OVERVIEW
                  </o-tabs-item>
                  <o-tabs-item
                    onClick={() => {
                      activeTab.value = 'api'
                    }}
                    active={activeTab.value === 'api'}
                    tag="button"
                  >
                    API
                  </o-tabs-item>
                </o-tabs>
              )}
              <o-suspense
                minLoadingTime={300}
                imports={[activeTab.value === 'api' ? component.api() : component.overview()]}
                onDataLoaded={window.refreshDark}
              >
                <div slot="pending" class="absolute top-40 lg:left-72">
                  <div>
                    <strong>Loading...</strong>
                    <div
                      className="ml-auto inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    ></div>
                  </div>
                </div>

                <div slot="fallback">
                  Sorry, we are unable to load the content at the moment. Please try again later.
                </div>
                <div
                  show={showPage.value}
                  o-transition={{
                    name: 'fade',
                    delay: 400,
                  }}
                >
                  <component.page
                    onInstalled={(evt: CustomEvent) => {
                      updateMenu(evt.detail)
                    }}
                  />
                </div>
                <content-nav
                  show={showPage.value}
                  o-transition={{
                    name: 'fade',
                    delay: 600,
                  }}
                  class="w-0 lg:w-40 fixed top-20 right-10"
                ></content-nav>
              </o-suspense>
            </div>
          </div>
        </>
      )
    },
  })
})
