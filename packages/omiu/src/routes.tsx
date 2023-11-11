import 'omi-suspense'
import './index.css'
import './site/site-header'
import './site/side-nav'
import './site/content-nav'
import { updateMenu } from './site/content-nav'
import { signal } from 'omi'
import 'omi-transition'

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
              imports={[import('./demo/HomePage')]}
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
    name: 'spinners',
    overview: () => import('./demo/pages/components/spinners/SpinnersPage'),
  },
  {
    name: 'rating',
    overview: () => import('./demo/pages/components/rating/RatingPage'),
  },
  {
    name: 'button',
    overview: () => import('./components/button/ButtonPage'),
    api: () => import('./components/button/ButtonAPI'),
  },
  {
    name: 'collapse',
    overview: () => import('./demo/pages/components/collapse/CollapsePage'),
  },
  {
    name: 'avatar',
    overview: () => import('./demo/pages/components/avatar/AvatarPage'),
  },
  {
    name: 'badges',
    overview: () => import('./demo/pages/components/badges/BadgesPage'),
  },
  {
    name: 'link',
    overview: () => import('./demo/pages/components/link/LinkPage'),
  },
  {
    name: 'accordion',
    overview: () => import('./demo/pages/components/accordion/AccordionPage'),
  },
  {
    name: 'button-group',
    overview: () => import('./demo/pages/components/button-group/ButtonGroupPage'),
  },
  {
    name: 'cards',
    overview: () => import('./demo/pages/components/cards/CardsPage'),
  },
  {
    name: 'list-group',
    overview: () => import('./demo/pages/components/list-group/ListGroupPage'),
  },
  {
    name: 'modal',
    overview: () => import('./demo/pages/components/modal/ModalPage'),
  },
  {
    name: 'paragraphs',
    overview: () => import('./demo/pages/components/paragraphs/ParagraphsPage'),
  },
  {
    name: 'placeholders',
    overview: () => import('./demo/pages/components/placeholders/PlaceholdersPage'),
  },
  {
    name: 'progress',
    overview: () => import('./demo/pages/components/progress/ProgressPage'),
  },
  {
    name: 'scroll-back-to-top-button',
    overview: () => import('./demo/pages/components/scroll-back-to-top-button/ScrollBackToTopButtonPage'),
  },
  {
    name: 'social-buttons',
    overview: () => import('./demo/pages/components/social-buttons/SocialButtonsPage'),
  },
  {
    name: 'timeline',
    overview: () => import('./demo/pages/components/timeline/TimelinePage'),
  },
  {
    name: 'images',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/images/ImagesPage'),
  },
  {
    name: 'icons',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/icons/IconsPage'),
  },
  {
    name: 'mask',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/mask/MaskPage'),
  },
  {
    name: 'hover-effect',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/hover-effects/HoverEffectPage'),
  },
  {
    name: 'headings',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/headings/HeadingsPage'),
  },
  {
    name: 'colors',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/colors/ColorsPage'),
  },
  {
    name: 'dividers',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/dividers/DividersPage'),
  },
  {
    name: 'figures',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/figures/FiguresPage'),
  },
  {
    name: 'shadows',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/shadows/ShadowsPage'),
  },
  {
    name: 'typography',
    type: 'content-styles',
    overview: () => import('./demo/pages/content-styles/typography/TypographyPage'),
  },
  {
    name: 'tables',
    type: 'data',
    overview: () => import('./demo/pages/data/tables/TablesPage'),
  },
  {
    name: 'file-input',
    type: 'forms',
    overview: () => import('./demo/pages/forms/file-input/FileInputPage'),
  },
  {
    name: 'radio',
    type: 'forms',
    overview: () => import('./demo/pages/forms/radio/RadioPage'),
  },
  {
    name: 'range',
    type: 'forms',
    overview: () => import('./demo/pages/forms/range/RangePage'),
  },
  {
    name: 'switch',
    type: 'forms',
    overview: () => import('./demo/pages/forms/switch/SwitchPage'),
  },
  {
    name: 'checkbox',
    type: 'forms',
    overview: () => import('./demo/pages/forms/checkbox/CheckboxPage'),
  },
  {
    name: 'input',
    type: 'forms',
    overview: () => import('./demo/pages/forms/inputs/InputPage'),
  },
  {
    name: 'form-templates',
    type: 'forms',
    overview: () => import('./demo/pages/forms/form-templates/FormTemplatesPage'),
  },
  {
    name: 'login-form',
    type: 'forms',
    overview: () => import('./demo/pages/forms/login-form/LoginFormPage'),
  },
  {
    name: 'registration-form',
    type: 'forms',
    overview: () => import('./demo/pages/forms/registration-form/RegistrationFormPage'),
  },
  {
    name: 'search',
    type: 'forms',
    overview: () => import('./demo/pages/forms/search/SearchPage'),
  },
  {
    name: 'ripple',
    type: 'methods',
    overview: () => import('./demo/pages/methods/ripple/RipplePage'),
  },
  {
    name: 'breadcrumbs',
    type: 'navigation',
    overview: () => import('./demo/pages/navigation/breadcrumbs/BreadcrumbsPage'),
  },
  {
    name: 'pagination',
    type: 'navigation',
    overview: () => import('./demo/pages/navigation/pagination/PaginationPage'),
  },
  {
    name: 'footer',
    type: 'navigation',
    overview: () => import('./demo/pages/navigation/footer/FooterPage'),
  },
  {
    name: 'tabs',
    type: 'navigation',
    overview: () => import('./demo/pages/navigation/tabs/TabsPage'),
  },
  /* next component */
]

components.forEach((component: { type?: string; name?: string; page?: string; overview: () => unknown }) => {
  routes.unshift({
    path: `/${component.type ? component.type : 'components'}/${component.name}`,
    render() {
      component.page = `${component.name}-${activeTab.value === 'api' ? 'api' : 'page'}`
      console.log(activeTab.value)
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
