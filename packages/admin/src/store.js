import { docsList } from './components/docs/config'

class Store {
  constructor() {

    this.themeColor = '#07c160'

    this.tabs = [{
      label: '欢迎',
      href: "#/welcome",
      closable: false,
      id: 2
    }]
    this.tabsActiveIndex = 0

    this.isLeftPanelClosed = false

    this.treeData = [
      {
        label: '管理工作台',
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
            icon: 'table-chart',
            href: '#/table/basic',
            id: 4,
          },
          {
            label: '分页表格',
            icon: 'table-chart',
            href: '#/table/pagination',
            id: 5,
          },

          {
            label: '简单表单',
            expanded: true,
            id: 9,
            href: '#/form',
            icon: 'table-chart'

          },
          {
            label: '图标合集',
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
          label: 'Loading',
          id: 12,
          icon: 'ac-unit-outlined',
          href: '#/loading-component',
        }]
      }
    ]
    this.ignoreAttrs = true

    this.ui = {}

    this.markdown = ''
    this.html = ''
  }

  toggleLeftPanel() {
    this.isLeftPanelClosed = !this.isLeftPanelClosed
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


export default new Store
