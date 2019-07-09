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
        title: '基础',
        list: [
          { name: 'Button 按钮', md: 'button', demo: './repl/button.html' },
          { name: 'Fab 动作按钮', md: 'fab', demo: './repl/fab.html' },
          { name: 'Icon 图标', md: 'icon', demo: './repl/icon.html' },
          { name: 'Icon Button 图标按钮', md: 'icon-button', demo: './repl/icon-button.html' },
          { name: 'Avatar 头像', md: 'avatar', demo: './repl/avatar.html' },
          { name: 'Loading 加载', md: 'loading', demo: './repl/loading.html' },
          { name: 'Breadcrumb 面包屑', md: 'breadcrumb', demo: './repl/breadcrumb.html' },
          { name: 'Player 视频播放器', md: 'player', demo: 'https://tencent.github.io/omi/packages/omim/demos/player/index.script.html' }
        ]
      },
      {
        title: '公用',
        list: [
          { name: 'Transition 过渡', md: 'transition', demo: 'https://tencent.github.io/omi/packages/omim/demos/transition/index.html' },
          { name: 'To 运动', md: 'to', demo: 'https://tencent.github.io/omi/packages/omim/demos/to/index.html' },
          { name: 'Scroll 滚动', md: 'scroll', demo: 'https://tencent.github.io/omi/packages/omim/demos/scroll/index.html' },
          { name: 'Finger 手指', md: 'finger', demo: 'https://tencent.github.io/omi/packages/omim/demos/finger/index.html' },
          { name: 'Locate 定位', md: 'locate', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-picker/index.html' },
          { name: 'Theme 主题', md: 'theme', demo: 'https://tencent.github.io/omi/packages/omim/demos/button/index.theme.html' },
          { name: 'Typography 排版', md: 'typography', demo: './repl/typography.html' },
        ]
      },
      {
        title: '布局',
        list: [
          { name: 'Row 行', md: 'row', demo: './repl/row.html' },

          { name: 'Elevation 高度盒', md: 'elevation', demo: './repl/elevation.html' },
          { name: 'Image List 图片列表', md: 'image-list', demo: './repl/image-list.html' },
          { name: 'Layout Grid 网格布局', md: 'layout-grid', demo: 'https://tencent.github.io/omi/packages/omim/demos/layout-grid/index.repl.html' },
          { name: 'Expansion 展开', md: 'expansion', demo: 'https://tencent.github.io/omi/packages/omim/demos/expansion/index.script.html' }
        ]
      },
      {
        title: '导航',
        list: [
          { name: 'Menu 菜单', md: 'menu', demo: 'https://tencent.github.io/omi/packages/omim/demos/menu/index.html' },
          { name: 'Drawer 抽屉', md: 'drawer', demo: 'https://tencent.github.io/omi/packages/omim/demos/drawer/index.html' },
          { name: 'Tab 标签切换', md: 'tab', demo: './repl/tab.html' },
          { name: 'Nav 导航', md: 'nav', demo: './repl/nav.html' },
          { name: 'Pagination 分页', md: 'pagination', demo: 'https://tencent.github.io/omi/packages/omim/demos/pagination/index.script.html'  },
          { name: 'Bottom Nav 底部导航栏', md: 'bottom-nav', demo: 'https://tencent.github.io/omi/packages/omim/demos/bottom-nav/index.script.html'  },
          { name: 'Top App Bar 顶部栏', md: 'top-app-bar', demo: 'https://tencent.github.io/omi/packages/omim/demos/top-app-bar/index.html' }
        ]
      },
      {
        title: '操作反馈',
        list: [
          {name: 'Dialog 对话框', md: 'dialog', demo: './repl/dialog.html'},
          {name: 'Snackbar 提醒', md: 'snackbar', demo: './repl/snackbar.html'},
          {name: 'Action Sheet 行动表', md: 'action-sheet', demo: 'https://tencent.github.io/omi/packages/omim/demos/action-sheet/index.script.html'},
          {name: 'Color Picker 颜色选择机', md: 'color-picker', demo: './repl/color-picker.html'},
          { name: 'Popover 提示', md: 'popover', demo: 'https://tencent.github.io/omi/packages/omim/demos/popover/index.html' },
          { name: 'Toast 弹出提示', md: 'toast', demo: 'https://tencent.github.io/omi/packages/omim/demos/toast/index.html' }
        ]
      },
      {
        title: '表单',
        list: [
          { name: 'Text Field 文本输入', md: 'text-field', demo: './repl/text-field.html' },
          { name: 'Select 下拉选择', md: 'select', demo: './repl/select.html' },
          { name: 'Checkbox 复选框', md: 'checkbox', demo: './repl/checkbox.html' },
          { name: 'Radio 单选框', md: 'radio', demo: './repl/radio.html' },
          { name: 'Switch 切换', md: 'switch', demo: './repl/switch.html' },
          { name: 'Picker 原生选择器', md: 'picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/picker/index.script.html' },
          { name: 'Transfer List 穿梭列表', md: 'transfer-list', demo: 'https://tencent.github.io/omi/packages/omim/demos/transfer-list/index.script.html' },
          { name: 'Toggle Buttons 按钮组', md: 'toggle-buttons', demo: 'https://tencent.github.io/omi/packages/omim/demos/toggle-buttons/index.script.html' },
          { name: 'Date Time Picker 日期时间', md: 'date-time-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-time-picker/index.script.html' },
          { name: 'Date Picker 日期选择器', md: 'date-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-picker/index.html' },
          { name: 'Date Range Picker 日期区间', md: 'date-range-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-range-picker/index.html' }
        ]
      },
      {
        title: '数据',
        list: [
          { name: 'List 列表', md: 'list', demo: './repl/list.html' },
          { name: 'Table 表格', md: 'table', demo: 'https://tencent.github.io/omi/packages/omim/demos/table/index.script.html' },
          { name: 'Linear Progress 线性进度', md: 'linear-progress', demo: './repl/linear-progress.html' },
          { name: 'Slider 滑块', md: 'slider', demo: './repl/slider.html' },
          { name: 'Chips 标签', md: 'chips', demo: './repl/chips.html' },
          { name: 'Tag 标签', md: 'tag', demo: './repl/tag.html' },
          { name: 'Badge 徽章', md: 'badge', demo: './repl/badge.html' },
          { name: 'Tree 树', md: 'tree', demo: './repl/tree.html' },
          { name: 'Card 卡片', md: 'card', demo: './repl/card.html' },
          { name: 'Path Progress 路径进度', md: 'path-progress', demo: './repl/path-progress.html' },
          { name: 'Paper 纸片', md: 'paper', demo: './repl/paper.html' },
          { name: 'Step 步骤', md: 'step', demo: './repl/step.html' },
          { name: 'Simple Card 简单卡片', md: 'simple-card', demo: './repl/simple-card.html' },
          { name: 'Editor 富文本编辑器', md: 'editor', demo: 'https://tencent.github.io/omi/packages/omim/demos/editor/index.html' },
          { name: 'Spreadsheet 电子表格', md: 'spreadsheet', demo: 'https://tencent.github.io/omi/packages/omim/demos/spreadsheet/index.html' },
          { name: 'Rate 评分', md: 'rate', demo: 'https://tencent.github.io/omi/packages/omim/demos/rate/index.html' }
        ]
      },
      {
        title: '图表',
        list: [
          { name: '简介', md: 'introduction-chart' },
          { name: '柱状图', md: 'bar', demo: './repl/bar.html' },
          { name: '线状图', md: 'line', demo: './repl/line.html' },
          { name: '散点图', md: 'scatter', demo: './repl/scatter.html' },
          { name: '饼图', md: 'pie', demo: './repl/pie.html' },
          { name: '环状图', md: 'doughnut', demo: './repl/doughnut.html' },
          { name: '雷达图', md: 'radar', demo: './repl/radar.html' },
          { name: '极区图', md: 'polar-area', demo: './repl/polar-area.html' },
          { name: '气泡图', md: 'bubble', demo: './repl/bubble.html' },
          { name: '合成图', md: 'bar-line', demo: './repl/bar-line.html' }
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
        title: 'Base',
        list: [
          { name: 'Button', md: 'button', demo: './repl/button.html' },
          { name: 'Fab', md: 'fab', demo: './repl/fab.html' },
          { name: 'Icon', md: 'icon', demo: './repl/icon.html' },
          { name: 'Icon Button', md: 'icon-button', demo: './repl/icon-button.html' },
          { name: 'Avatar', md: 'avatar', demo: './repl/avatar.html' },
          { name: 'Loading', md: 'loading', demo: './repl/loading.html' },
          { name: 'Breadcrumb', md: 'breadcrumb', demo: './repl/breadcrumb.html' },
          { name: 'Player', md: 'player', demo: 'https://tencent.github.io/omi/packages/omim/demos/player/index.script.html' }
        ]
      },
      {
        title: 'Util',
        list: [
          { name: 'Transition', md: 'transition', demo: 'https://tencent.github.io/omi/packages/omim/demos/transition/index.html' },
          { name: 'To', md: 'to', demo: 'https://tencent.github.io/omi/packages/omim/demos/to/index.html' },
          { name: 'Scroll', md: 'scroll', demo: 'https://tencent.github.io/omi/packages/omim/demos/scroll/index.html' },
          { name: 'Finger', md: 'finger', demo: 'https://tencent.github.io/omi/packages/omim/demos/finger/index.html' },
          { name: 'Locate', md: 'locate', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-picker/index.html' },
          { name: 'Theme', md: 'theme', demo: 'https://tencent.github.io/omi/packages/omim/demos/button/index.theme.html' },
          { name: 'Typography', md: 'typography', demo: './repl/typography.html' }
        ]
      },
      {
        title: 'Layout',
        list: [
          { name: 'Row', md: 'row', demo: './repl/row.html' },
          { name: 'Elevation', md: 'elevation', demo: './repl/elevation.html' },
          { name: 'Image List', md: 'image-list', demo: './repl/image-list.html' },
          { name: 'Layout Grid', md: 'layout-grid', demo: 'https://tencent.github.io/omi/packages/omim/demos/layout-grid/index.repl.html' },
          { name: 'Expansion', md: 'expansion', demo: 'https://tencent.github.io/omi/packages/omim/demos/expansion/index.script.html' }
        ]
      },
      {
        title: 'Navigation',
        list: [
          { name: 'Menu', md: 'menu', demo: 'https://tencent.github.io/omi/packages/omim/demos/menu/index.html' },
          { name: 'Drawer', md: 'drawer', demo: 'https://tencent.github.io/omi/packages/omim/demos/drawer/index.html' },
          { name: 'Tab', md: 'tab', demo: './repl/tab.html' },
          { name: 'Nav', md: 'nav', demo: './repl/nav.html' },
          { name: 'Pagination', md: 'pagination', demo: 'https://tencent.github.io/omi/packages/omim/demos/pagination/index.script.html'  },
          { name: 'Bottom Nav', md: 'bottom-nav', demo: 'https://tencent.github.io/omi/packages/omim/demos/bottom-nav/index.script.html'  },
          { name: 'Top App Bar', md: 'top-app-bar', demo: 'https://tencent.github.io/omi/packages/omim/demos/top-app-bar/index.html' }
        ]
      },
      {
        title: 'Operational Feedback',
        list: [
          {name: 'Dialog', md: 'dialog', demo: './repl/dialog.html'},
          {name: 'Snackbar', md: 'snackbar', demo: './repl/snackbar.html'},
          {name: 'Action Sheet', md: 'action-sheet', demo: 'https://tencent.github.io/omi/packages/omim/demos/action-sheet/index.script.html'},
          {name: 'Color Picker', md: 'color-picker', demo: './repl/color-picker.html'},
          { name: 'Popover', md: 'popover', demo: 'https://tencent.github.io/omi/packages/omim/demos/popover/index.html' },
          { name: 'Toast', md: 'toast', demo: 'https://tencent.github.io/omi/packages/omim/demos/toast/index.html' }
        ]
      },
      {
        title: 'Form',
        list: [
          { name: 'Text Field', md: 'text-field', demo: './repl/text-field.html' },
          { name: 'Select', md: 'select', demo: './repl/select.html' },
          { name: 'Checkbox', md: 'checkbox', demo: './repl/checkbox.html' },
          { name: 'Radio', md: 'radio', demo: './repl/radio.html' },
          { name: 'Switch', md: 'switch', demo: './repl/switch.html' },
          { name: 'Picker', md: 'picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/picker/index.script.html' },
          { name: 'Transfer List', md: 'transfer-list', demo: 'https://tencent.github.io/omi/packages/omim/demos/transfer-list/index.script.html' },
          { name: 'Toggle Buttons', md: 'toggle-buttons', demo: 'https://tencent.github.io/omi/packages/omim/demos/toggle-buttons/index.script.html' },
          { name: 'Date Time Picker', md: 'date-time-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-time-picker/index.script.html' },
          { name: 'Date Picker', md: 'date-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-picker/index.html' },
          { name: 'Date Range Picker', md: 'date-range-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-range-picker/index.html' }
        ]
      },
      {
        title: 'Data',
        list: [
          { name: 'List', md: 'list', demo: './repl/list.html' },
          { name: 'Table', md: 'table', demo: 'https://tencent.github.io/omi/packages/omim/demos/table/index.script.html' },
          { name: 'Linear Progress', md: 'linear-progress', demo: './repl/linear-progress.html' },
          { name: 'Slider', md: 'slider', demo: './repl/slider.html' },
          { name: 'Chips', md: 'chips', demo: './repl/chips.html' },
          { name: 'Tag', md: 'tag', demo: './repl/tag.html' },
          { name: 'Badge', md: 'badge', demo: './repl/badge.html' },
          { name: 'Tree', md: 'tree', demo: './repl/tree.html' },
          { name: 'Card', md: 'card', demo: './repl/card.html' },
          { name: 'Path Progress', md: 'path-progress', demo: './repl/path-progress.html' },
          { name: 'Paper', md: 'paper', demo: './repl/paper.html' },
          { name: 'Step', md: 'step', demo: './repl/step.html' },
          { name: 'Simple Card', md: 'simple-card', demo: './repl/simple-card.html' },
          { name: 'Editor', md: 'editor', demo: 'https://tencent.github.io/omi/packages/omim/demos/editor/index.html' },
          { name: 'Spreadsheet', md: 'spreadsheet', demo: 'https://tencent.github.io/omi/packages/omim/demos/spreadsheet/index.html' },
          { name: 'Rate', md: 'rate', demo: 'https://tencent.github.io/omi/packages/omim/demos/rate/index.html' }
        ]
      },
      {
        title: 'Chart',
        list: [
          { name: 'Introduction', md: 'introduction-chart' },
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
