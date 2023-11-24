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
    overview: () => import('./components/accordion/AccordionPage'),
    api: () => import('./components/accordion/AccordionAPI'),
  },
  {
    name: 'avatar',
    overview: () => import('./components/avatar/AvatarPage'),
    api: () => import('./components/avatar/AvatarAPI'),
  },
  {
    name: 'alert',
    overview: () => import('./components/alert/AlertPage'),
    api: () => import('./components/alert/AlertAPI'),
  },
  {
    name: 'badge',
    overview: () => import('./components/badge/BadgePage'),
    api: () => import('./components/badge/BadgeAPI'),
  },
  {
    name: 'button',
    overview: () => import('./components/button/ButtonPage'),
    api: () => import('./components/button/ButtonAPI'),
  },
  {
    name: 'button-group',
    overview: () => import('./components/button-group/ButtonGroupPage'),
    api: () => import('./components/button-group/ButtonGroupAPI'),
  },
  {
    name: 'collapse',
    overview: () => import('./components/collapse/CollapsePage'),
    api: () => import('./components/collapse/CollapseAPI'),
  },
  {
    name: 'card',
    overview: () => import('./components/card/CardPage'),
    api: () => import('./components/card/CardAPI'),
  },
  {
    name: 'chip',
    overview: () => import('./components/chip/ChipPage'),
    api: () => import('./components/chip/ChipAPI'),
  },
  {
    name: 'swiper',
    overview: () => import('./components/swiper/SwiperPage'),
    api: () => import('./components/swiper/SwiperAPI'),
  },

  {
    name: 'dropdown',
    overview: () => import('./components/dropdown/DropdownPage'),
    api: () => import('./components/dropdown/DropdownAPI'),
  },

  {
    name: 'input',
    overview: () => import('./forms/input/InputPage'),
    api: () => import('./forms/input/InputAPI'),
  },

  {
    name: 'tabs',
    type: 'navigation',
    overview: () => import('./navigation/tabs/TabsPage'),
    api: () => import('./navigation/tabs/TabsAPI'),
  },

  {
    name: 'pdf',
    type: 'data',
    overview: () => import('./data/pdf/PDFPage'),
    api: () => import('./data/pdf/PDFAPI'),
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
