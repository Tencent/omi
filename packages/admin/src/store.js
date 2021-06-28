class Store {
  constructor() {
    this.tabs = [{
      label: '欢迎',
      href: "#/welcome",
      closable: false,
      id: 2
    }]
    this.tabsActiveIndex = 0


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
            label: '欢迎',
            icon: 'emoji-people',
            color: 'green',
            selected: true,
            href: '#/welcome',
            id: 2
          },
    
          {
            label: '基础表格',
            icon: 'ballot',
            href: '#/table/basic',
            id: 4,
          },
          {
            label: '分页表格',
            icon: 'ballot',
            href: '#/table/pagination',
            id: 5,
          },
              
          {
            label: '表单',
            expanded: true,
            id: 9,
            href: '#/form',
            icon: 'ballot'

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
            icon: 'ballot',
            color: '#F56C6C',
            href: '#/error',
            id: 7,
          },
          {
            sign: '993',
            label: '异常告警',
            icon: 'ballot',
            color: '#E6A23C',
            href: '#/warning',
            id: 8,
          }
        ]
      }
    ]
    this.ignoreAttrs = true
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
