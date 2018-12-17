## 配置

```js
const config = {
  lan: 'en',
  menus: {
    cn: [
      {
        title: '快速开始',
        list: [
          { name: '安装', md: 'installation' },
          { name: '配置', md: 'config' }
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
          { name: 'Introduction', md: 'introduction' },
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
```