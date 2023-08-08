import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'OMI Components',
  description: 'A Cross Framework Components Library',
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '基本介绍', link: 'devGuide/introduce' },
          { text: '快速开始', link: 'devGuide/startQuickly' }
        ]
      },
      {
        text: '基础组件',
        items: [{ text: '按钮', link: 'componentsDoc/button' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
