import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/tree'

interface Props { }

const tagName = 'layout-left-panel'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  install() {
    import('@omiu/icon/emoji-people')
    import('@omiu/icon/ballot')
  }

  treeData = [
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
          label: '表格展示',
          sign: '●',
          expanded: true,
          id: 3,
          icon: 'ac-unit-outlined',
          children: [
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
            }
          ]
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

  store

  onNodeClick = (evt) => {
    if (!evt.detail.children) {
      const tab = this.store.tabs.find(tab => tab.id === evt.detail.id)
      if (tab) {
        this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
      } else {
        this.store.tabs.push({ label: evt.detail.label, closeable: false, id: evt.detail.id, href: evt.detail.href })
        this.store.tabsActiveIndex = this.store.tabs.length - 1
      }
    }
  }


  render() {
    return (
      <div style={`height:calc(100vh - 3rem)`} class={tw`text-left border-r-1`}>
        <o-tree onnode-click={this.onNodeClick} data={this.treeData}></o-tree>
      </div>
    )
  }
}
