import { WeElement, h, tag } from 'omi'
import { create, cssomSheet } from 'twind'
import '@omiu/tree'

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })

interface Props {

}

const tagName = 'admin-left-panel'
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

  treeData = [{
    label: '管理工作台',
    sign: '●',
    expanded: true,

    icon: 'ac-unit-outlined',

    children: [{
      sign: 'M',
      label: '欢迎',
      icon: 'ballot',
      color: 'green',
      selected: true,
      href: '#/welcome'
    },
    {
      label: '表格',
      icon: 'ballot',
      href: '#/table'
    }
    ]

  },
  {
    label: '其他',
    sign: '●',
    expanded: true,

    icon: 'ac-unit-outlined',
    children: [{
      sign: '90020',
      label: '错误告警',
      icon: 'ballot',
      color: '#F56C6C',
      href: '#/error'
    },
    {
      sign: '993',
      label: '异常告警',
      icon: 'ballot',
      color: '#E6A23C',
      href: '#/warning'
    }]
  }]


  render() {
    console.error(this.treeData)
    return (
      <div style={`height:calc(100vh - 3rem)`} class={tw`text-left border-r-1`}>
        <o-tree data={this.treeData}></o-tree>
      </div>
    )
  }
}



