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
  {
    name: 'images',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/images/ImagesPage'),
  },
  {
    name: 'icons',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/icons/IconsPage'),
  },
  {
    name: 'mask',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/mask/MaskPage'),
  },
  {
    name: 'hover-effect',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/hover-effects/HoverEffectPage'),
  },
  {
    name: 'headings',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/headings/HeadingsPage'),
  },
  {
    name: 'colors',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/colors/ColorsPage'),
  },
  {
    name: 'dividers',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/dividers/DividersPage'),
  },
  {
    name: 'figures',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/figures/FiguresPage'),
  },
  {
    name: 'shadows',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/shadows/ShadowsPage'),
  },
  {
    name: 'typography',
    type: 'content-styles',
    dep: () => import('./demo/pages/content-styles/typography/TypographyPage'),
  },
  {
    name: 'tables',
    type: 'data',
    dep: () => import('./demo/pages/data/tables/TablesPage'),
  },
  {
    name: 'file-input',
    type: 'forms',
    dep: () => import('./demo/pages/forms/file-input/FileInputPage'),
  },
  {
    name: 'radio',
    type: 'forms',
    dep: () => import('./demo/pages/forms/radio/RadioPage'),
  },
  {
    name: 'range',
    type: 'forms',
    dep: () => import('./demo/pages/forms/range/RangePage'),
  },
  {
    name: 'switch',
    type: 'forms',
    dep: () => import('./demo/pages/forms/switch/SwitchPage'),
  },
  {
    name: 'checkbox',
    type: 'forms',
    dep: () => import('./demo/pages/forms/checkbox/CheckboxPage'),
  },
  {
    name: 'input',
    type: 'forms',
    dep: () => import('./demo/pages/forms/inputs/InputPage'),
  },
  {
    name: 'form-templates',
    type: 'forms',
    dep: () => import('./demo/pages/forms/form-templates/FormTemplatesPage'),
  },
  {
    name: 'login-form',
    type: 'forms',
    dep: () => import('./demo/pages/forms/login-form/LoginFormPage'),
  },
  {
    name: 'registration-form',
    type: 'forms',
    dep: () => import('./demo/pages/forms/registration-form/RegistrationFormPage'),
  },
  {
    name: 'search',
    type: 'forms',
    dep: () => import('./demo/pages/forms/search/SearchPage'),
  },
  {
    name: 'ripple',
    type: 'methods',
    dep: () => import('./demo/pages/methods/ripple/RipplePage'),
  },
  {
    name: 'breadcrumbs',
    type: 'navigation',
    dep: () => import('./demo/pages/navigation/breadcrumbs/BreadcrumbsPage'),
  },
  {
    name: 'pagination',
    type: 'navigation',
    dep: () => import('./demo/pages/navigation/pagination/PaginationPage'),
  },
  {
    name: 'footer',
    type: 'navigation',
    dep: () => import('./demo/pages/navigation/footer/FooterPage'),
  },
  /* next component */
]

components.forEach((component: { type?: string; name?: string; page?: string; dep: () => unknown }) => {
  routes.unshift({
    path: `/${component.type ? component.type : 'components'}/${component.name}`,
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
