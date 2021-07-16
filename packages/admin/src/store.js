import { docsList } from './components/docs/config'

class Store {
  constructor(options) {

    this.themeColor = '#07c160'

    this.installed = options.installed
    //先支持 en 和 zh
    this.locale = options.locale

    this.isLeftPanelClosed = window.innerWidth < 640


    this.ignoreAttrs = true

    this.ui = {}

    this.markdown = ''
    this.html = ''

    this.setLocals(this.locale)
    this.isInstalled = false
  }

  setLocals(locale) {
    this.locale = locale
    import(`./l10n/${locale}/base.ts`).then(locale => {
      this.tabs = [{
        label: locale.base.Welcome,
        href: "#/welcome",
        closable: false,
        id: 2
      }]
      this.tabsActiveIndex = 0

      this.treeData = [
        {
          label: locale.base.ManagerWorkbench,
          sign: '●',
          expanded: true,
          id: 1,
          icon: 'ac-unit-outlined',

          children: [
            {
              sign: 'M',
              label: '欢迎界面',
              icon: 'emoji-people',
              color: '#07c160',
              selected: true,
              href: '#/welcome',
              id: 2
            },

            {
              label: '基础表格',
              icon: 'grid-on',
              href: '#/table/basic',
              id: 4,
            },
            {
              label: '表格删除动画',
              icon: 'grid-on',
              href: '#/table/pagination',
              id: 5,
            },

            {
              label: '简单表单',
              expanded: true,
              id: 9,
              href: '#/form',
              icon: 'list-alt'

            },
            {
              label: 'Material Icons',
              expanded: true,
              id: 10,
              href: '#/icon',
              icon: 'sentiment-satisfied-alt'
            }
          ]
        },
        {
          label: '其他',
          sign: '●',
          expanded: true,
          id: 6,
          icon: 'ac-unit-outlined',
          children: [
            {
              sign: '90020',
              label: '错误告警',
              icon: 'error',
              color: '#F56C6C',
              href: '#/error',
              id: 7,
            },
            {
              sign: '993',
              label: '异常告警',
              icon: 'warning',
              color: '#E6A23C',
              href: '#/warning',
              id: 8,
            },
            {
              sign: '993',
              label: '评论模块',
              icon: 'comment',
              href: '#/comment',
              id: 120,
            },
            {
              label: '我是外链',
              icon: 'insert-link',
              href: 'https://github.com/Tencent/omi',
              id: 119,
              target: '_blank'
            }
          ]
        },
        {
          label: 'Markdown文档',
          expanded: true,
          id: 6,
          icon: 'ac-unit-outlined',
          children: docsList
        },
        {
          label: '组件',
          expanded: true,
          id: 11,
          icon: 'ac-unit-outlined',
          children: [{
            label: 'Loading 加载中',
            id: 12,
            icon: 'ac-unit-outlined',
            href: '#/loading-component',
          }, {
            label: 'Toast 弹出式提示',
            id: 13,
            icon: 'ac-unit-outlined',
            href: '#/toast-component',
          }]
        }
      ]

      if (!this.isInstalled) {
        this.installed(this)
        this.isInstalled = true
      } else {
        this.ui.myApp.update()
      }
    })
  }

  toggleLeftPanel() {
    this.isLeftPanelClosed = !this.isLeftPanelClosed
    this.ui.baseLayout.update()
  }

  openLeftPanel() {
    this.isLeftPanelClosed = false
    this.ui.baseLayout.update()
  }

  closeLeftPanel() {
    this.isLeftPanelClosed = true
    this.ui.baseLayout.update()
  }


  selectTreeNodeById(id) {
    this.treeData.forEach(node => {
      this.deselect(node, id)
    })
  }

  deselect(node, id) {
    node.selected = false
    node.children && node.children.forEach(child => {
      child.selected = false
      this.deselect(child, id)
    })

    if (node.id === id) {
      node.selected = true
    }
  }
}


export default Store
