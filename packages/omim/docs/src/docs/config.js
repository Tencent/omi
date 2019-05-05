const config = {
  menus: {
    'zh-cn': [
      {
        title: 'Omim',
        list: [
          { name: '简介', md: 'introduction' }
        ]
      },
      {
        title: '基础元素',
        list: [
          { name: 'Button', md: 'button', demo: './repl/button.html' },
          { name: 'Icon', md: 'icon', demo: './repl/icon.html' }
        ]
      },
      {
        title: '表单',
        list: [
          { name: 'TextField', md: 'text-field', demo: './repl/text-field.html' }
        ]
      }
    ],
    en: [
      {
        title: 'Omim',
        list: [
          { name: 'Introduction', md: 'introduction' }
        ]
      },
      {
        title: 'Base Element',
        list: [
          { name: 'Button', md: 'button', demo: './repl/button.html' },
          { name: 'Icon', md: 'icon', demo: './repl/icon.html' }
        ]
      },
      {
        title: 'Form',
        list: [
          { name: 'TextField', md: 'text-field', demo: './repl/input.html', demo: './repl/text-field.html' }
        ]
      }
    ]
  }
}

export default config
