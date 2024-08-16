export const docsConfig = {
  zh: {
    sidebar: [
      {
        text: '介绍',
        children: [
          {
            text: '开始',
            path: '#/product-docs/zh/getting-started',
            value: 'getting-started',
          },
          {
            text: '响应式',
            path: '#/product-docs/zh/reactivity',
            value: 'reactivity',
          },
        ],
      },
      {
        text: '核心概念',
        children: [
          {
            text: '属性',
            path: '#/product-docs/zh/props',
            value: 'props',
          },
        ],
      },
    ],
  },
  en: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Reactivity', link: '/reactivity' },
          { text: 'OOP & DOP', link: '/oop-dop' },
        ],
      },
      {
        text: 'Core API',
        items: [
          { text: 'Props', link: '/props' },
          { text: 'CSS', link: '/css' },
          { text: 'Event', link: '/event' },
          { text: 'Ref', link: '/ref' },
          { text: 'Slot', link: '/slot' },
          { text: 'Provide-Inject', link: '/provide-inject' },
          { text: 'Lifecycle', link: '/lifecycle' },
          { text: 'Directive', link: 'directive' },
          { text: 'Mixin', link: 'mixin' },
          { text: 'Update', link: '/update' },
          { text: 'Cross Frameworks', link: '/cross-frameworks' },
        ],
      },
    ],
  },
}
