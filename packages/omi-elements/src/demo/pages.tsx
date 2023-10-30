interface Pages {
  name: string
  path: string
}

interface PagesSection {
  section: string
  pages: Pages[]
}

const componentsPages: Pages[] = [
  { name: 'buttons', path: '/components/buttons' },
  { name: 'collapse', path: '/components/collapse' },
  { name: 'rating', path: '/components/rating' },
  { name: 'spinners', path: '/components/spinners' },
  { name: 'avatar', path: '/components/avatar' },
  { name: 'badge', path: '/components/badges' },
  { name: 'link', path: '/components/link' },
  { name: 'accordion', path: '/components/accordion' },
  { name: 'button-group', path: '/components/button-group' },
  { name: 'cards', path: '/components/cards' },
  { name: 'list-group', path: '/components/list-group' },
  { name: 'modal', path: '/components/modal' },
  { name: 'paragraphs', path: '/components/paragraphs' },
  { name: 'placeholders', path: '/components/placeholders' },
  { name: 'progress', path: '/components/progress' },
  { name: 'scroll-back-to-top-button', path: '/components/scroll-back-to-top-button' },
  { name: 'social-buttons', path: '/components/social-buttons' },
  { name: 'timeline', path: '/components/timeline' },
  /* next name and path */
]

const contentStylesPages: Pages[] = [
  { name: 'images', path: '/content-styles/images' },
  { name: 'icons', path: '/content-styles/icons' },
  { name: 'mask', path: '/content-styles/mask' },
  {
    name: 'hover effect',
    path: '/content-styles/hover-effect',
  },
  {
    name: 'headings',
    path: '/content-styles/headings',
  },
  { name: 'colors', path: '/content-styles/colors' },
  {
    name: 'dividers',
    path: '/content-styles/dividers',
  },
  {
    name: 'figures',
    path: '/content-styles/figures',
  },
  {
    name: 'shadows',
    path: '/content-styles/shadows',
  },
  {
    name: 'typography',
    path: '/content-styles/typography',
  },
]

const dataPages: Pages[] = [{ name: 'tables', path: '/data/tables' }]

const formsPages: Pages[] = [
  {
    name: 'file input',
    path: '/forms/file-input',
  },
  {
    name: 'radio',
    path: '/forms/radio',
  },
  {
    name: 'range',
    path: '/forms/range',
  },
  { name: 'switch', path: '/forms/switch' },
  { name: 'checkbox', path: '/forms/checkbox' },
  {
    name: 'Inputs',
    path: '/forms/input',
  },
  {
    name: 'form templates',
    path: '/forms/form-templates',
  },
  {
    name: 'login form',
    path: '/forms/login-form',
  },
  {
    name: 'registration form',
    path: '/forms/registration-form',
  },
  {
    name: 'Search',
    path: '/forms/search',
  },
]

const methodsPages: Pages[] = [{ name: 'ripple', path: '/methods/ripple' }]

const navigationPages: Pages[] = [
  {
    name: 'breadcrumbs',
    path: '/navigation/breadcrumbs',
  },
  {
    name: 'pagination',
    path: '/navigation/pagination',
  },
  {
    name: 'footer',
    path: '/navigation/footer',
  },
  // {
  //   name: 'tabs',
  //   path: '/navigation/tabs',
  // },
  // {
  //   name: 'pills',
  //   path: '/navigation/pills',
  // },
]

// list of pages with sections
const demoPages: PagesSection[] = [
  {
    section: 'components',
    pages: componentsPages,
  },
  {
    section: 'content styles',
    pages: contentStylesPages,
  },
  {
    section: 'data',
    pages: dataPages,
  },
  {
    section: 'forms',
    pages: formsPages,
  },
  {
    section: 'methods',
    pages: methodsPages,
  },
  {
    section: 'navigation',
    pages: navigationPages,
  },
]

export default demoPages
