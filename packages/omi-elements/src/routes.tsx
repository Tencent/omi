import './components/suspense'
import './index.css'
import './components/site-header'

export const routes = [
  {
    path: '/',
    transition: 'fade',
    meta: {},
    render() {
      return (
        <>
          <site-header></site-header>
          <o-suspense imports={[import('./demo/HomePage')]}>
            <home-page />
          </o-suspense>
        </>
      )
    },
  },
  {
    path: '*',
    render() {
      return <h1>404</h1>
    },
  },
]

const components = [
  {
    name: 'spinners',
    dep: () => import('./demo/pages/components/spinners/SpinnersPage'),
  },
  {
    name: 'rating',
    dep: () => import('./demo/pages/components/rating/RatingPage'),
  },
  {
    name: 'buttons',
    dep: () => import('./demo/pages/components/buttons/ButtonsPage'),
  },
  {
    name: 'collapse',
    dep: () => import('./demo/pages/components/collapse/CollapsePage'),
  },
  {
    name: 'avatar',
    dep: () => import('./demo/pages/components/avatar/AvatarPage'),
  },
  {
    name: 'badges',
    dep: () => import('./demo/pages/components/badges/BadgesPage'),
  },
  {
    name: 'link',
    dep: () => import('./demo/pages/components/link/LinkPage'),
  },
  {
    name: 'accordion',
    dep: () => import('./demo/pages/components/accordion/AccordionPage'),
  },
  {
    name: 'button-group',
    dep: () => import('./demo/pages/components/button-group/ButtonGroupPage'),
  },
  {
    name: 'cards',
    dep: () => import('./demo/pages/components/cards/CardsPage'),
  },
  {
    name: 'list-group',
    dep: () => import('./demo/pages/components/list-group/ListGroupPage'),
  },
  {
    name: 'modal',
    dep: () => import('./demo/pages/components/modal/ModalPage'),
  },
  {
    name: 'paragraphs',
    dep: () => import('./demo/pages/components/paragraphs/ParagraphsPage'),
  },
  {
    name: 'placeholders',
    dep: () => import('./demo/pages/components/placeholders/PlaceholdersPage'),
  },
  {
    name: 'progress',
    dep: () => import('./demo/pages/components/progress/ProgressPage'),
  },
  {
    name: 'scroll-back-to-top-button',
    dep: () => import('./demo/pages/components/scroll-back-to-top-button/ScrollBackToTopButtonPage'),
  },
  {
    name: 'social-buttons',
    dep: () => import('./demo/pages/components/social-buttons/SocialButtonsPage'),
  },
  {
    name: 'timeline',
    dep: () => import('./demo/pages/components/timeline/TimelinePage'),
  },
  /* next component */
]

components.forEach((component) => {
  routes.unshift({
    path: `/components/${component.name}`,
    render() {
      component.page = `${component.name}-page`
      return (
        <>
          <site-header></site-header>
          <o-suspense imports={[component.dep()]}>
            <div slot="pending">Loading user profile...</div>
            <div slot="fallback">
              Sorry, we are unable to load the user profile at the moment. Please try again later.
            </div>
            <component.page />
          </o-suspense>
        </>
      )
    },
  })
})
