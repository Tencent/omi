const config = {
  menus: {
    'zh-cn': [
      {
        title: '基础元素',
        list: [
          { name: 'Button', md: 'button' },
          { name: 'Icon', md: 'icon', demo: './repl/index.html' }
        ]
      },
      {
        title: '其他版块',
        list: [
          { name: '测试其他', md: 'other-docs' }
        ]
      }
    ],
    en: [
      {
        title: 'Base Element',
        list: [
          { name: 'Button', md: 'button' ,demo: './repl/index.html'},
          { name: 'Icon', md: 'icon' }
        ]
      },
      {
        title: 'Other',
        list: [
          { name: 'Other Docs', md: 'other-docs' }
        ]
      }
    ]
  }
}

export default config
