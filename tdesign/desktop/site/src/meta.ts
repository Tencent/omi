/**
 * 用于生成组件文档的元数据，开发新组件时，需要在此处添加组件的元数据
 */
const metaData = new Map([
  [
    'button',
    {
      title: 'Button 按钮',
      description: '按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。',
    },
  ],
  [
    'icon',
    {
      title: 'Icon 图标',
      description: 'Icon 作为UI构成中重要的元素，一定程度上影响UI界面整体呈现出的风格。',
    },
  ],
  [
    'link',
    {
      title: 'Link 链接',
      description: '文字超链接用于跳转一个新页面，如当前项目跳转，友情链接等。',
    },
  ],
  [
    'divider',
    {
      title: 'Divider 分割线',
      description: '分割线是一个呈线状的轻量化组件，起到分隔、组织、细化的作用，用于有逻辑的组织元素内容和页面结构。',
    },
  ],
  [
    'space',
    {
      title: 'Space 间距',
      description: '控制组件之间的间距。',
    },
  ],
  [
    'input',
    {
      title: 'Input 输入框',
      description:
        '用于承载用户信息录入的文本框，常用于表单、对话框等场景，对不同内容的信息录入，可拓展形成多种信息录入形式。',
    },
  ],
  [
    'input-adornment',
    {
      title: 'InputAdornment 输入装饰器',
      description: '用于装饰输入类组件的装饰器',
    },
  ],
  [
    'slider',
    {
      title: 'Slider 滑块',
      description:
        '滑块（滑动型输入器），是帮助用户在连续或间断的区间内，通过滑动来选择合适数值（一个数值或范围数值）的控件。',
    },
  ],
  [
    'textarea',
    {
      title: 'Textarea 多行文本框',
      description:
        '用于承载用户多行信息录入的组件，常用于描述信息、反馈表单中意见等需要一段相当长文本的场景。可以设置最大文案长度。',
    },
  ],
  [
    'comment',
    {
      title: 'Comment 评论',
      description: '评论用于对页面内容的反馈、评价、讨论等，如对文章的评价，对话题的讨论等。',
    },
  ],
  [
    'rate',
    {
      title: 'Rate 评分',
      description: '用于收纳大量选项的信息录入类组件。',
    },
  ],
  [
    'alert',
    {
      title: 'Alert 警告',
      description: '警告条用于承载需要用户注意的信息。',
    },
  ],
  [
    'message',
    {
      title: 'Message 全局提示',
      description: '对用户的操作作出轻量的全局反馈。',
    },
  ],
  [
    'notification',
    {
      title: 'Notification 消息通知',
      description: '轻量级的全局消息提示和确认机制，出现和消失时需要有缓动动画。',
    },
  ],
  [
    'popup',
    {
      title: 'Popup 弹出层',
      description:
        '弹出层组件是其他弹窗类组件如气泡确认框实现的基础，当这些组件提供的能力不能满足定制需求时，可以在弹出层组件基础上封装。',
    },
  ],
  [
    'dropdown',
    {
      title: 'Dropdown 下拉菜单',
      description: '用于承载过多的操作集合，通过下拉拓展的形式，收纳更多的操作。',
    },
  ],
  [
    'list',
    {
      title: 'List 列表',
      description:
        '列表用一个连续的列来显示多行元素，常用于具有相同构成及内容的模块批量展示，可承载多样化的信息内容，从纯文字到复杂的图文组合。',
    },
  ],
  [
    'back-top',
    {
      title: 'BackTop 返回顶部',
      description: '用于返回页面顶部',
    },
  ],
  [
    'grid',
    {
      title: 'Grid 栅格',
      description: '栅格是以规则的网格阵列来指导和规范网页中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。',
    },
  ],
  [
    'card',
    {
      title: 'Card 卡片',
      description: '最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。',
    },
  ],
  [
    'drawer',
    {
      title: 'Drawer 抽屉',
      description: '抽屉常通过单击临近的按钮控件打开，从屏幕边缘滑入的浮层面板，又称半屏弹窗。',
    },
  ],
  [
    'image',
    {
      title: 'Image 图片',
      description: '用于展示图片素材。',
    },
  ],
  ['avatar', { title: 'Avatar 头像', description: '用图标、图片、字符的形式展示用户或事物信息。' }],
  ['switch', { title: 'Switch 开关', description: '用于两个互斥选项，用来打开或关闭选项的选择控件。' }],
  ['progress', { title: 'Progress 进度条', description: '展示操作的当前进度。' }],
  ['timeline', { title: 'Timeline 时间轴', description: '用于时间轴展示。' }],
])

const getMetaData = (componentName: string) => {
  return (
    metaData.get(componentName) || {
      // 默认值
      title: '组件概览',
      description: '将根据业务实践持续新增组件类型，敬请留意组件库更新日志。',
    }
  )
}

export default getMetaData
