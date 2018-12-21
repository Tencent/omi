const config = {
  menus: {
    'zh-cn': [
      {
        title: '快速开始',
        list: [
          { name: '简介', md: 'introduction' },
          { name: '配置', md: 'config', demo: './repl/index.html' }
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
        title: 'QUICK START',
        list: [
          { name: 'Introduction', md: 'introduction' ,demo: './repl/index.html'},
          { name: 'Config', md: 'config' }
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
