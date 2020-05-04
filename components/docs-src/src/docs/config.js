const config = {
  menus: {
    'zh-cn': [
      {
        title: 'OMIU',
        list: [
          { name: '简介', md: 'introduction' },
          { name: '自定义主题', md: 'theme' },
          { name: '文档解释', md: 'doc-explanation' }
        ]
      },
      {
        title: '基础组件',
        list: [
          { name: 'Button 按钮', md: 'button' },
          { name: 'Icon 图标', md: 'icon' },
          { name: 'OIcon 矢量图标', md: 'o-icon' },
          { name: 'Transition 过渡动画', md: 'transition' },

          { name: 'Badge 徽章', md: 'badge' },
          { name: 'Avatar 头像', md: 'avatar' },
          { name: 'ToggleIcon 可切换图标', md: 'toggle-icon' },

          { name: 'Link 文字链接', md: 'link' },
          { name: 'HamburgerMenu 汉堡包菜单', md: 'hamburger-menu' }

        ]
      },
      {
        title: '导航',
        list: [
          { name: 'Tabs 选项卡', md: 'tabs' },
          { name: 'Breadcrumb 面包屑', md: 'breadcrumb' },
          { name: 'BottomNav 底部导航', md: 'bottom-nav' }
        ]
      },
      {
        title: '表单',
        list: [
          { name: 'Input 输入框', md: 'input' },
          { name: 'Checkbox 复选框', md: 'checkbox' },
          { name: 'Switch 开关', md: 'switch' },
          { name: 'Radio 单选框', md: 'radio' },
          { name: 'ColorPicker 颜色选择器', md: 'color-picker' }
        ]
      },
      {
        title: '数据',
        list: [
          { name: 'Tree 树形控件', md: 'tree' },
          { name: 'Pagination 分页', md: 'pagination' }

        ]
      },
      {
        title: '通知',
        list: [
          { name: 'Dialog 对话框', md: 'dialog' },
          { name: 'DialogExtention 基础对话框', md: 'dialog-extention' },
          { name: 'Loading 加载', md: 'loading' },
          { name: 'Toast 弹出式提示', md: 'toast' },
          { name: 'ActionSheet 弹出式菜单', md: 'action-sheet' }
        ]
      },
      {
        title: '图表',
        list: [
          { name: '简介', md: 'chart' },
          { name: 'Bar 柱状图', md: 'bar' },
          { name: 'Line 线状图', md: 'line' },
          { name: 'Scatter 散点图', md: 'scatter' },
          { name: 'Pie 饼图', md: 'pie' },
          { name: 'Doughnut 环状图', md: 'doughnut' },
          { name: 'Radar 雷达图', md: 'radar' },
          { name: 'PolarArea 极区图', md: 'polar-area' },
          { name: 'Bubble 气泡图', md: 'bubble' },
          { name: 'BarLine 合成图', md: 'bar-line' }
        ]
      }
    ],
    en: [
      {
        title: 'OMIU',
        list: [
          { name: 'Introduction', md: 'introduction' },
          { name: 'Custom Theme', md: 'theme' },
          { name: 'Explanation', md: 'doc-explanation' }
        ]
      },
      {
        title: 'Base',
        list: [
          { name: 'Button', md: 'button' },
          { name: 'Icon', md: 'icon' },
          { name: 'OIcon', md: 'o-icon' },
          { name: 'Transition', md: 'transition' },
          { name: 'Badge', md: 'badge' },
          { name: 'Avatar', md: 'avatar' },
          { name: 'ToggleIcon', md: 'toggle-icon' },

          { name: 'Link', md: 'link' },
          { name: 'Hamburger Menu', md: 'hamburger-menu' }
        ]
      },
      {
        title: 'Navigation',
        list: [
          { name: 'Tabs', md: 'tabs' },
          { name: 'Breadcrumb', md: 'breadcrumb' },
          { name: 'BottomNav', md: 'bottom-nav' }
        ]
      },
      {
        title: 'Form',
        list: [
          { name: 'Input', md: 'input' },
          { name: 'Checkbox', md: 'checkbox' },
          { name: 'Switch', md: 'switch' },
          { name: 'Radio', md: 'radio' },
          { name: 'ColorPicker', md: 'color-picker' }
        ]
      },
      {
        title: 'Data',
        list: [
          { name: 'Tree', md: 'tree' },
          { name: 'Pagination', md: 'pagination' }
        ]
      },
      {
        title: 'Notice',
        list: [
          { name: 'Dialog', md: 'dialog' },
          { name: 'DialogExtention', md: 'dialog-extention' },
          { name: 'Loading', md: 'loading' },
          { name: 'Toast', md: 'toast' },
          { name: 'ActionSheet', md: 'action-sheet' }
        ]
      },
      {
        title: 'Chart',
        list: [
          { name: 'Introduction', md: 'chart' },
          { name: 'Bar', md: 'bar', demo: './repl/bar.html' },
          { name: 'Line', md: 'line', demo: './repl/line.html' },
          { name: 'Scatter', md: 'scatter', demo: './repl/scatter.html' },
          { name: 'Pie', md: 'pie', demo: './repl/pie.html' },
          { name: 'Doughnut', md: 'doughnut', demo: './repl/doughnut.html' },
          { name: 'Radar', md: 'radar', demo: './repl/radar.html' },
          { name: 'PolarArea', md: 'polar-area', demo: './repl/polar-area.html' },
          { name: 'Bubble', md: 'bubble', demo: './repl/bubble.html' },
          { name: 'BarLine', md: 'bar-line', demo: './repl/bar-line.html' }
        ]
      }
    ]
  }
}

export default config
