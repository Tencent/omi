const config = {
  menus: {
    'zh-cn': [
      {
        title: '基础元素',
        list: [
          { name: 'Button', md: 'button' , demo: './repl/button.html'},
          { name: 'Icon', md: 'icon', demo: './repl/icon.html' }
        ]
      },
      {
        title: '导航',
        list: [
          { name: '测试其他', md: 'other-docs' }
        ]
      }
    ],
    en: [
      {
        title: 'Base Element',
        list: [
          { name: 'Button', md: 'button' ,demo: './repl/button.html'},
          { name: 'Icon', md: 'icon',demo: './repl/icon.html' }
        ]
      },
      {
        title: 'Navigation',
        list: [
          { name: 'Pagination', md: 'pagination',demo: './repl/pagination.html' }
        ]
      }
    ]
  }
}

export default config
