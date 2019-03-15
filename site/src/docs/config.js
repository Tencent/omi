const config = {
  menus: {
    'zh-cn': [
      {
        title: 'Omi',
        list: [
          { name: '简介', md: 'introduction' },
          { name: '安装', md: 'installation' }
        ]
      },
      {
        title: '基础概念',
        list: [
          { name: 'JSX', md: 'jsx' },
          { name: 'Props', md: 'props' },
          { name: '事件', md: 'event' },
          { name: '生命周期', md: 'lifecycle' },
          { name: 'Ref', md: 'ref' },
          { name: 'Store', md: 'store' }
        ]
      },
      {
        title: '其他',
        list: [
          { name: '生态与例子', md: 'other' }
        ]
      }
    ],
    en: [
      {
        title: 'Omi',
        list: [
          { name: 'Introduction', md: 'introduction' },
          { name: 'Installation', md: 'installation' }
        ]
      },
      {
        title: 'Base',
        list: [
          { name: 'Store', md: 'store' }
        ]
      }
    ]
  }
}

export default config
