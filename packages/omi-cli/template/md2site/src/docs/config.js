const config = {
  lan: 'en',
  menus: {
    cn: [
      {
        title: '快速开始',
        list: [
          { name: '安装', md: 'installation' },
          { name: '组件', md: 'components' },
          { name: '组件通讯', md: 'communication' }
        ]
      }
    ],
    en: [
      {
        title: 'QUICK START',
        list: [
          { name: 'Installation', md: 'installation' },
          { name: 'Components', md: 'components' },
          { name: 'Communication', md: 'communication' }
        ]
      }
    ]
  },
  /*
   your cdn address , such as:
   cdn : '//s.url.cn/'
   */
  cdn: '',
  //whether or not to load markdown async
  async: false
}

export default config
