interface Pages {
  name: string
  path: string
}

interface PagesSection {
  section: string
  pages: Pages[]
}

export const componentsPages: Pages[] = [
  { name: 'accordion', path: '/components/accordion' },
  { name: 'avatar', path: '/components/avatar' },
  { name: 'badge', path: '/components/badge' },
  { name: 'alert', path: '/components/alert' },
  { name: 'button', path: '/components/button' },
  { name: 'button-group', path: '/components/button-group' },
  { name: 'card', path: '/components/card' },
  { name: 'collapse', path: '/components/collapse' },
  { name: 'chip', path: '/components/chip' },
  { name: 'swiper', path: '/components/swiper' },
  { name: 'dropdown', path: '/components/dropdown' },
  { name: 'lightbox', path: '/components/lightbox' },
  { name: 'link', path: '/components/link' },
  { name: 'modal', path: '/components/modal' },
  { name: 'skeleton', path: '/components/skeleton' },
  { name: 'popconfirm', path: '/components/popconfirm' },
  { name: 'popover', path: '/components/popover' },
  { name: 'progress', path: '/components/progress' },
  { name: 'rating', path: '/components/rating' },
  // { name: 'progress', path: '/components/progress' },
  // { name: 'scroll-back-to-top-button', path: '/components/scroll-back-to-top-button' },
  // { name: 'social-buttons', path: '/components/social-buttons' },
  // { name: 'timeline', path: '/components/timeline' },
  /* next name and path */
]

// const contentStylesPages: Pages[] = [
//   { name: 'colors', path: '/content-styles/colors' },
//   {
//     name: 'dividers',
//     path: '/content-styles/dividers',
//   },
//   {
//     name: 'figures',
//     path: '/content-styles/figures',
//   },
//   {
//     name: 'hover effect',
//     path: '/content-styles/hover-effect',
//   },
//   {
//     name: 'headings',
//     path: '/content-styles/headings',
//   },
//   { name: 'icons', path: '/content-styles/icons' },
//   { name: 'images', path: '/content-styles/images' },
//   { name: 'mask', path: '/content-styles/mask' },
//   {
//     name: 'shadows',
//     path: '/content-styles/shadows',
//   },
//   {
//     name: 'typography',
//     path: '/content-styles/typography',
//   },
// ]

export const dataPages: Pages[] = [
  { name: 'table', path: '/data/table' },
  { name: 'chart', path: '/data/chart' },
  { name: 'PDF', path: '/data/pdf' },
]

export const formsPages: Pages[] = [
  // { name: 'checkbox', path: '/forms/checkbox' },
  // {
  //   name: 'form templates',
  //   path: '/forms/form-templates',
  // },
  // {
  //   name: 'file input',
  //   path: '/forms/file-input',
  // },
  {
    name: 'calendar',
    path: '/forms/calendar',
  },
  {
    name: 'input',
    path: '/forms/input',
  },
  {
    name: 'checkbox',
    path: '/forms/checkbox',
  },
  // {
  //   name: 'login form',
  //   path: '/forms/login-form',
  // },
  // {
  //   name: 'radio',
  //   path: '/forms/radio',
  // },
  // {
  //   name: 'range',
  //   path: '/forms/range',
  // },
  // {
  //   name: 'registration form',
  //   path: '/forms/registration-form',
  // },
  // { name: 'switch', path: '/forms/switch' },
  // {
  //   name: 'search',
  //   path: '/forms/search',
  // },
]

export const directivesPages: Pages[] = [
  // { name: 'ripple', path: '/directives/ripple' },
]

export const navigationPages: Pages[] = [
  // {
  //   name: 'breadcrumbs',
  //   path: '/navigation/breadcrumbs',
  // },
  // {
  //   name: 'footer',
  //   path: '/navigation/footer',
  // },
  // {
  //   name: 'pagination',
  //   path: '/navigation/pagination',
  // },
  {
    name: 'tabs',
    path: '/navigation/tabs',
  },
  // {
  //   name: 'pills',
  //   path: '/navigation/pills',
  // },
]
export const designBlocksPages: Pages[] = [{ name: 'list', path: '/design-blocks/list' }]

// list of pages with sections
const demoPages: PagesSection[] = [
  {
    section: 'Components',
    pages: componentsPages,
  },
  // {
  //   section: 'content styles',
  //   pages: contentStylesPages,
  // },
  {
    section: 'Data',
    pages: dataPages,
  },
  {
    section: 'Forms',
    pages: formsPages,
  },
  // {
  //   section: 'directives',
  //   pages: directivesPages,
  // },
  {
    section: 'Navigation',
    pages: navigationPages,
  },
  {
    section: 'Design Blocks',
    pages: designBlocksPages,
  },
]

export default demoPages
